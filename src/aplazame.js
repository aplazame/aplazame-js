'use strict'; // jshint ignore:line

var http = require('./http'),
    _ = require('./utils'),
    api = {
      host: 'https://api.aplazame.com/',
      version: 1,
      checkoutVersion: 1,
      sandbox: false
    },
    acceptTmpl = 'application/vnd.aplazame{{sandbox}}.v{{version}}+json',
    env = {};

function getEnv (key) {
  return key ? env[key] : env;
}

function apiOptions (options) {
  options = options || {};
  var publicKey = options.publicKey || env.publicKey;

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

// aplazame methods

function init (initEnv, initApi) {
  _.extend(api, initApi || {});
  _.extend(env, initEnv || {});

  console.debug('init', env, api);
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

  options.api = api;

  if( !/\/$/.test(baseUrl) ) {
    baseUrl += '/';
  }

  http(baseUrl + 'iframe.html').then(function (response) {
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
        });

    document.body.appendChild(iframe);
    _.writeIframe(iframe, iframeHtml);

    if( !options.merchant ) {
      throw new Error('missing merchant parameters');
    }

    if( !options.merchant.public_api_key ) {
      if( env.publicKey ) {
        options.merchant.public_api_key = env.publicKey;
      } else {
        throw new Error('missing public key');
      }
    }

    _.listen(window, 'message', function (e) {
      if( !iframe ) {
        return;
      }

      var message = e.data;

      if( message.aplazame === 'checkout' ) {

        if( message.require === 'merchant' ) {
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

module.exports = {
  init: init,
  getEnv: getEnv,
  checkout: checkout,
  button: button,
  apiGet: apiGet,
  apiPost: apiPost,
  simulator: simulator,
  baseUrl: function () {
    return env.baseUrl;
  },
  _: _,
  version: require('../.tmp/aplazame-version')
};
