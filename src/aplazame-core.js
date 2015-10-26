'use strict'; // jshint ignore:line

var http = require('./http'),
    _ = require('./utils'),
    api = require('./api'),
    acceptTmpl = 'application/vnd.aplazame{{sandbox}}.v{{version}}+json';

function init (options) {
  options = options || {};

  if( typeof options.version === 'string' ) {
    var matchVersion = options.version.match(/^v?(\d)(\.(\d))?$/);

    if( !matchVersion ) {
      throw new Error('malformed version, should be like \'v1.2\'');
    }

    options.version = Number(matchVersion[1]);

    if( matchVersion[3] !== undefined ) {
      options.checkoutVersion = Number(matchVersion[3]);
    }
  }

  if( typeof options.sandbox === 'string' ) {
    options.sandbox = options.sandbox === 'true';
  }

  if( typeof options.analytics === 'string' ) {
    options.analytics = options.analytics === 'true';
  }

  _.extend(api, options);
}

// aplazame methods

function apiOptions (options) {
  options = options || {};
  var publicKey = options.publicKey || api.publicKey;

  if( !publicKey ) {
    throw new Error('public key needs to be specified');
  }

  options = _.merge({}, {
    headers: {
      authorization: 'Bearer ' + publicKey
    }
  }, options);

  options.version = options.version || api.version;
  options.sandbox = ( options.sandbox === undefined ? api.sandbox : options.sandbox ) ? '.sandbox' : '';
  options.paramsStr = '';
  if( options.params ) {
    for( var key in options.params ) {
      options.paramsStr += ( options.paramsStr ? '&' : '?' ) + key + '=' + encodeURIComponent(options.params[key]);
    }
  }

  return _.merge(options, {
    headers: {
      accept: _.replaceKeys(acceptTmpl, options)
    }
  });
}

function apiGet (path, options) {
  options = apiOptions(options);
  var url = path ? _.joinPath(api.host, path) : api.host;

  return http( url + options.paramsStr, options );
}

function apiPost (path, data, options) {
  options = apiOptions(options);
  var url = path ? _.joinPath(api.host, path) : api.host;

  return http( url + options.paramsStr, _.merge(options, { method: 'post', data: data }) );
}

function getCartPrice () {
   var priceParts = document.querySelector('#total_price').textContent.match(/(\d+)([,.](\d+))?/);
   var amount = Number(priceParts[1])*100 + Number(priceParts[3]);
   return amount;
}

function button (options) {

  if( !options ) {
    throw new Error('aplazame.button requires parameters');
  }

  if( !options.id && !options.button && !options.selector ){
    throw new Error('button can not be identified ( please use - id: \'button-id\' - or - button: \'#button-id\' - or - selector: \'#button-id\' (recomended) - )');
  }

  if( document.querySelector('#total_price') ) {
    options.amount = getCartPrice();

    if( !button.watching ) {
      button.watching = true;
      options.lastPrice = options.amount;

      // console.debug('total price watching');

      setInterval(function () {
        // console.log('checking price', options.amount, getCartPrice() );
        if( getCartPrice() !== options.lastPrice ) {
          options.amount = getCartPrice();
          options.lastPrice = options.amount;
          options.forceUpdate = true;
          button(options);
        }
      }, 400);
    }
  }

  if( !options.amount ){
    throw new Error('button amount missing');
  }

  var elements, elButton;

  if( options.button ) {
    elButton = document.querySelector(options.button);
  } else if( options.id ) {
    elButton = document.querySelector( ( /^#/.test(options.id) ? '' : '#' ) + options.id );
  }

  elements = elButton ? [elButton] : [];

  if( options.selector ) {
    [].push.apply( elements, _.cssQuery(options.selector) );
  }

  if( options.description ) {
    [].push.apply( elements, _.cssQuery(options.description) );
  }

  elButton = elButton || elements[0];

  if( !options.$$running && options.selector ) {
    options.$$running = true;

    require('./live-dom').subscribe(function (el) {
      button(options);
    });
  }

  if( !options.forceUpdate && ( !elements.length || _.elementData(elButton, 'buttonInitialized') ) ) {
    return;
  }

  options.forceUpdate = false;

  if( elButton && options.parent ) {
    var parent = elButton.parentElement;

    while( parent && parent !== document.body ) {
      if( parent.matchesSelector(options.parent) ) {
        elements.push(parent);
        break;
      }
      parent = parent.parentElement;
    }
  }

  elements.forEach(function (el) {
    if( el.style.display !== 'none' ) {
      el.__display = el.style.display;
    }
    el.style.display = 'none';
  });

  var params = {
    amount: options.amount,
    currency: options.currency || 'EUR'
  };

  if( options.country ) {
    params.country = options.country;
  }

  apiGet('checkout/button', { params: params })
    .then(function () {
      var elms = elements.slice();
      elms.forEach(function (el) {
        el.style.display = el.__display;
      });
    });

  elements.forEach(function (el) {
    _.elementData(el, 'buttonInitialized', true);
  });
}

function checkout (options) {
  options = options || {};
  var baseUrl = ( options.host === 'location' ? location.origin : options.host ) || 'https://aplazame.com/static/checkout/';

  if( !/\/$/.test(baseUrl) ) {
    baseUrl += '/';
  }

  var iframeSrc = baseUrl + 'iframe.html?' + new Date().getTime();

  options.api = api;

  http( iframeSrc ).then(function (response) {
    document.body.style.overflow = 'hidden';
    // var iframeHtml = response.data.replace(/(src|href)\s*=\s*\"(?!http|\/\/)/g, '$1=\"' + baseUrl);
    var iframeHtml = response.data.replace(/<head\>/, '<head><base href="' + baseUrl + '" />'),
        iframe = _.getIFrame({
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'transparent',
          'z-index': 2147483647
        }),
        blur = document.createElement('style');

    iframe.className = 'aplazame-checkout';

    blur.setAttribute('rel', 'stylesheet');
    blur.textContent = 'body > *:not(script):not(iframe.aplazame-checkout) { -webkit-filter: blur(3px); filter: blur(3px); }';

    // iframe.setAttribute('allowtransparency', 'true');
    // iframe.setAttribute('allowfullscreen', 'true');
    // iframe.setAttribute('sandbox', 'allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-forms');

    document.body.appendChild(iframe);
    iframe.src = iframeSrc;
    // iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(iframeHtml);
    // _.writeIframe(iframe, iframeHtml);

    if( !options.merchant ) {
      throw new Error('missing merchant parameters');
    }

    if( !options.merchant.public_api_key ) {
      if( api.publicKey ) {
        options.merchant.public_api_key = api.publicKey;
      } else {
        throw new Error('missing public key');
      }
    }

    options.origin = {
      href: location.href,
      host: location.host,
      protocol: location.protocol,
      origin: location.origin
    };

    _.listen(window, 'message', function (e) {
      if( !iframe ) {
        return;
      }

      var message = e.data;

      if( message.aplazame === 'checkout' ) {

        switch( message.event ) {
          case 'drop-blur':
            document.body.removeChild(blur);
            break;
          case 'success':
            console.log('aplazame.checkout:success', message);

            http( options.merchant.confirmation_url, {
              method: 'post',
              contentType: 'application/json',
              data: message.data,
              params: message.params
            } ).then(function (response) {
              e.source.postMessage({
                aplazame: 'checkout',
                event: 'confirmation',
                result: 'success',
                response: http.plainResponse(response)
              }, '*');
            }, function () {
              e.source.postMessage({
                aplazame: 'checkout',
                event: 'confirmation',
                result: 'error',
                response: http.plainResponse(response)
              }, '*');
            });
            // confirmation_url
            break;
        }

        if( message.require === 'merchant' ) {
          document.body.appendChild(blur);
          e.source.postMessage({
            checkout: options
          }, '*');
        } else if( message.close ) {
          document.body.removeChild(iframe);
          iframe = null;

          switch( message.close ) {
            case 'dismiss':
              location.replace(options.merchant.checkout_url || '/');
              break;
            case 'success':
              location.replace(options.merchant.success_url);
              break;
            case 'cancel':
              location.replace(options.merchant.cancel_url);
              break;
          }
        }
      }

    });

  }, function () {
    throw new Error('can not connect to ' + baseUrl);
  });

}

function simulator (amount, _options, callback, onError) {
  if( _.isFunction(_options) ) {
    onError = callback;
    callback = _options;
    _options = {};
  } else {
    _options = _options || {};
  }
  var options = {
    params: {
      amount: amount
    }
  };
  if( _options.payday ) {
    options.params.payday = _options.payday;
  }
  if( _options.publicKey ) {
    options.publicKey = _options.publicKey;
  }
  apiGet('instalment-plan-simulator', options ).then(function (response) {
    if( _.isFunction(callback) ) {
      callback(response.data.choices[0].instalments, response.data.options, response.data);
    }
  }, onError);
}

function modal (data, options) {

  if( !modal.cached ) {
    return require('./http').noCache( api.baseUrl + 'widgets/modal/modal.html' ).then(function (response) {
      modal.cached = _.template.compile( response.data.replace(/\n/g, '').replace(/<head\>/, '<head><base href="' + api.baseUrl + '" />') );
      modal(data, options);
    });
  }

  options = options || {};

  modal.iframe = _.getIFrame({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'transparent',
        'z-index': 2147483647
      });

  modal.iframe.overflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  document.body.appendChild(modal.iframe);
  _.writeIframe(modal.iframe, modal.cached(data || {}) );
}

_.listen(window, 'message', function (e) {

  var message = e.data;

  if( message.aplazame && message.aplazame === 'modal' ) {
    switch( message.event ) {
      case 'open':
        modal.referrer = e.source;
        modal.message = message;
        modal(message.data);
        break;
      case 'close':
        if( modal.iframe ) {
          document.body.style.overflow = modal.iframe.overflow;
          document.body.removeChild(modal.iframe);
          modal.referrer.postMessage({
            aplazame: 'modal',
            event: 'closed',
            name: modal.message.name,
            resolved: message.resolved,
            value: message.value
          }, '*');
          delete modal.message;
          delete modal.iframe;
          delete modal.referrer;
        }
        break;
    }
  }
});

module.exports = {
  _: _,
  init: init,
  checkout: checkout,
  button: button,
  apiGet: apiGet,
  apiPost: apiPost,
  simulator: simulator,
  modal: modal,
  version: require('../.tmp/aplazame-version')
};
