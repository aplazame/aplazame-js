(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '0.0.54';
},{}],2:[function(require,module,exports){
'use strict';

module.exports = {
  host: 'https://api.aplazame.com/',
  version: 1,
  checkoutVersion: 1,
  sandbox: false
};

},{}],3:[function(require,module,exports){
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
        });

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

    options.origin = location;

    _.listen(window, 'message', function (e) {
      if( !iframe ) {
        return;
      }

      var message = e.data;

      if( message.aplazame === 'checkout' ) {

        switch( message.event ) {
          case 'success':
            console.log('aplazame.checkout:success', message);

            http( options.merchant.confirmation_url, {
              method: 'post',
              contentType: 'application/json',
              data: message.data,
              params: message.params
            } );
            // confirmation_url
            break;
        }

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

function modal (data, options) {

  if( !modal.cached ) {
    return require('./http').noCache( api.baseUrl + 'widgets/modal/modal.html' ).then(function (response) {
      modal.cached = _.template.compile( response.data.replace(/\n/g, '').replace(/<head\>/, '<head><base href="' + api.baseUrl + '" />') );
      modal(data, options);
    });
  }

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
        modal(message.data);
        break;
      case 'close':
        if( modal.iframe ) {
          document.body.style.overflow = modal.iframe.overflow;
          document.body.removeChild(modal.iframe);
          delete modal.iframe;
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

},{"../.tmp/aplazame-version":1,"./api":2,"./http":8,"./live-dom":9,"./utils":10}],4:[function(require,module,exports){
(function (global){

global.aplazame = require('./aplazame-core');

require('./data-aplazame');
require('./data-button');
require('./data-simulator');

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./aplazame-core":3,"./data-aplazame":5,"./data-button":6,"./data-simulator":7}],5:[function(require,module,exports){
var aplazame = require('./aplazame-core'),
    aplazameScript = document.querySelector('script[src*="aplazame.js"]') || document.querySelector('script[src*="aplazame.min.js"]'),
    scriptBase = aplazameScript.src.match(/(.*)\/(.*)$/)[1];

if( !/\/$/.test(scriptBase) ) {
  scriptBase += '/';
}

if( aplazameScript ) {
  var href = aplazameScript.src.split('?'),
      sandboxMatch = href && href[1] && href[1].match(/sandbox\=([^&]*)/);

  if( sandboxMatch ) {
    aplazame.init({}, { sandbox: sandboxMatch[1] === '1' || sandboxMatch[1] === 'true' });
  }
}

if( document.querySelector('script[data-aplazame]') ) {

  var script = document.querySelector('script[data-aplazame]'),
      initText = script.getAttribute('data-aplazame'),
      options = {
        baseUrl: scriptBase
      };

  if( /\:/.test(initText) ) {
    initText.split(',').forEach(function (part) {
      var keys = part.match(/^([^\:]+)\:(.*)/);
      options[keys[1].trim()] = keys[2].trim();
    });
  } else {
    if( initText ) {
      options.publicKey = initText;
    }
  }

  if( script.getAttribute('data-version') ) {
    options.version = script.getAttribute('data-version');
  }

  if( script.getAttribute('data-sandbox') ) {
    options.sandbox = script.getAttribute('data-sandbox');
  }
  if( script.getAttribute('data-analytics') ) {
    options.analytics = script.getAttribute('data-analytics');
  }

  aplazame.init(options);
}

},{"./aplazame-core":3}],6:[function(require,module,exports){
var aplazame = require('./aplazame-core'),
    _ = require('./utils');

function buttonsLookup (element) {
  if( !element.querySelectorAll ) {
    return;
  }
  var btns = element.querySelectorAll('[data-aplazame-button]');

  if( btns.length ) {

    [].forEach.call(btns, function (btn) {
      var btnId = btn.getAttribute('data-aplazame-button'),
          btnParams = {
            selector: '[data-aplazame-button' + ( btnId ? ('=\"' + btnId + '\"') : '' ) + '], [data-aplazame-button-info' + ( btnId ? ('=\"' + btnId + '\"') : '' ) + ']',
            parent: btn.getAttribute('data-parent'),
            publicKey: btn.getAttribute('data-public-key'),
            amount: btn.getAttribute('data-amount'),
            currency: btn.getAttribute('data-currency') || undefined,
            sandbox: btn.getAttribute('data-sandbox') ? btn.getAttribute('data-sandbox') === 'true' : undefined,
            country: btn.getAttribute('data-country') || undefined
          };

      aplazame.button(btnParams);
    });

  }
}

require('./live-dom').subscribe(buttonsLookup);

_.ready(function () {
  buttonsLookup(document);
});

},{"./aplazame-core":3,"./live-dom":9,"./utils":10}],7:[function(require,module,exports){
var aplazame = require('./aplazame-core'),
    _ = require('./utils'),
    api = require('./api');

function widgetsLookup (element) {
  if( !element.querySelectorAll ) {
    return;
  }

  var simulators = element.querySelectorAll('[data-aplazame-simulator]');

  if( simulators.length ) {

    var http = require('./http'),
        iframes = [];

    _.listen(window, 'message', function (e) {
      var message = e.data;


      if( message.aplazame === 'simulator' ) {
        iframes.forEach(function (iframe) {
          if( iframe.contentWindow === e.source ) {
            iframe.style.height = message.data.height + 'px';
          }
        });
      }
    });

    [].forEach.call(simulators, function (simulator) {
      'use strict';

      if( _.elementData(simulator, 'checked') ) {
        return;
      }

      _.elementData(simulator, 'checked', true);

      var simulatorParams = {
        simulator: '[data-aplazame-simulator]',
        amount: simulator.getAttribute('data-amount'),
        publicKey: simulator.getAttribute('data-public-key')
      };

      simulator.innerHTML = 'cargando cuotas...';

      aplazame.simulator(simulatorParams.amount, function (choices) {
        var child = simulator.firstChild;
        while( child ) {
          simulator.removeChild(child);
          child = simulator.firstChild;
        }

        http( api.baseUrl + 'widgets/simulator/simulator.html?' + new Date().getTime() ).then(function (response) {
          var iframe = _.getIFrame({
            width: '100%'
          });
          iframes.push(iframe);
          simulator.appendChild(iframe);
          _.writeIframe(iframe,
            response.data
              .replace(/<head\>/, '<head><base href="' + api.baseUrl + '" />')
              .replace(/\/\/ choices = \[\];/, 'choices = ' + JSON.stringify(choices) + ';')
          );
        }, function () {
          simulator.innerHTML = '';
        });
      }, function () {
        simulator.innerHTML = '';
      });

    });
    // aplazame.button(btnParams);
  }
}

require('./live-dom').subscribe(widgetsLookup);

_.ready(function () {
  widgetsLookup(document);
});

},{"./api":2,"./aplazame-core":3,"./http":8,"./live-dom":9,"./utils":10}],8:[function(require,module,exports){
// factory http

function headerToTitleSlug(text) {
  var key = text[0].toUpperCase() + text.substr(1);
  return key.replace(/([a-z])([A-Z])/, function (match, lower, upper) {
      return lower + '-' + upper;
  });
}

function headerToCamelCase(text) {
  var key = text[0].toLowerCase() + text.substr(1);
  return key.replace(/([a-z])-([A-Z])/, function (match, lower, upper) {
    return lower + upper;
  });
}

var RE_contentType = /([^\/]+)\/([^+]+\+)?(.*)/;
function parseContentType(contentType, text, xml) {
  var matches = contentType && contentType.match(RE_contentType);
  return matches && ( matches[3] === 'json' ? JSON.parse(text) : ( matches[3] === 'xml' ? xml : text ) );
}

function http (url, options) {
  options = options || {};
  options.headers = options.headers || {};
  options.url = url;

  var request = null,
      on = { resolve: [], reject: [] };

  try { // Firefox, Opera 8.0+, Safari
      request = new XMLHttpRequest();
  } catch (e) { // Internet Explorer
      try { request = new ActiveXObject('Msxml2.XMLHTTP'); }  // jshint ignore:line
      catch (er) { request = new ActiveXObject('Microsoft.XMLHTTP'); }  // jshint ignore:line
  }
  if( request === null ) { throw 'Browser does not support HTTP Request'; }

  if( options.params ) {
    var i = 0;
    for( var param in options.params ) {
      url += ( i++ ? '&' : ( /\?/.test(url) ? '&' : '?' ) ) + param + '=' + encodeURIComponent(options.params[param]);
    }
  }

  request.open( ( options.method || 'get').toUpperCase(), url );

  if( options.withCredentials ) {
    request.withCredentials = true;
  }

  for( var key in options.headers ) {
      request.setRequestHeader( headerToTitleSlug(key), options.headers[key] );
  }

  request.resolve = function ( response ) {
    on.resolve.forEach(function (handler) {
      handler(response);
    });
  };
  request.reject = function ( response ) {
    on.reject.forEach(function (handler) {
      handler(response);
    });
  };

  var headersCache;
  request.getHeaders = function () {
    if( !headersCache ) {
      headersCache = {};
      request.getAllResponseHeaders().replace(/\s*([^\:]+)\s*\:\s*([^\;\n]+)/g, function (match, key, value) {
          headersCache[headerToCamelCase(key)] = value.trim();
      });
    }
    return headersCache;
  };

  request.onreadystatechange = function(){
    if( request.readyState === 'complete' || request.readyState === 4 ) {
      var response = {
        data: parseContentType(request.getResponseHeader('content-type'), request.responseText, request.responseXML),
        status: request.status,
        headers: request.getHeaders,
        xhr: request
      };
      if( request.status >= 200 && request.status < 300 ) {
        request.resolve( response );
      } else if( request.status >= 400 ) {
        request.reject( response );
      } else {
        throw new Error('Unexpected status code ' + request.status);
      }
    }
  };

  request.options = options;

  if( options.contentType ) {
    request.setRequestHeader( 'Content-Type', options.contentType );

    if( options.contentType === 'application/json' ) {
      options.data = JSON.stringify(options.data);
    }

  }

  request.send( options.data );

  return {
    then: function (onResolve, onReject) {
      on.resolve.push(onResolve);
      if( onReject instanceof Function ) {
        on.reject.push(onReject);
      }
    },
    error: function (onReject) {
      on.reject.push(onReject);
    }
  };
}

http.noCache = function (url, options) {
  url += ( /\?/.test(url) ? '&' : '?' ) + 't=' + new Date().getTime();
  return http(url, options);
};

module.exports = http;

},{}],9:[function(require,module,exports){

var suscriptors = [],
    running = false,
    _ = require('./utils');

function initLiveDOM () {

  _.ready(function () {
    document.body.addEventListener('DOMSubtreeModified', function(event){
      // console.debug( 'DOM Changed at ', new Date(), event.target );
      for( var i = 0, n = suscriptors.length; i < n ; i++ ) {
        suscriptors[i](event.target);
      }
    }, false);
  });
  
}

module.exports = {
  subscribe: function (handler) {
    if( !running ) {
      initLiveDOM(true);
      running = true;
    }
    if( handler instanceof Function ) {
      suscriptors.push(handler);
    }
  }
};

},{"./utils":10}],10:[function(require,module,exports){
if( !Element.prototype.matchesSelector ) {
  Element.prototype.matchesSelector = (
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector
  );
}

function _isType (type) {
    return function (o) {
        return (typeof o === type);
    };
}

function _instanceOf (_constructor) {
    return function (o) {
        return ( o instanceof _constructor );
    };
}

var _isObject = _isType('object'),
    _isFunction = _isType('function'),
    _isString = _isType('string'),
    _isNumber = _isType('number'),
    _isArray = Array.isArray || _instanceOf(Array),
    _isDate = _instanceOf(Date),
    _isRegExp = _instanceOf(RegExp),
    _isElement = function(o) {
      return o && o.nodeType === 1;
    };

var listen = window.addEventListener ? function (element, eventName, listener) {
  element.addEventListener(eventName, listener, false);
} : ( window.attachEvent && function (element, eventName, listener) {
  element.attachEvent('on' + eventName, listener);
} );
if( !listen ) {
  throw new Error('Your Browser does not support events');
}

function once (fn) {
  var done;
  return function () {
    if( !done ) {
      done = true;
      return fn.apply(this, arguments);
    }
  };
}

function docReady (callback) {
  if( document.readyState === 'complete' ) {
    callback();
  } else {
    listen(window, 'load', callback);
  }
}

function replaceKeys (tmpl, keys) {
  return keys ? tmpl.replace(/\{\{([^\}]+)\}\}/g, function (match, key) {
    return keys[key];
  }) : function (ks) {
    return replaceKeys(tmpl, ks);
  };
}

var arrayShift = [].shift;
function extend () {
    var dest = arrayShift.call(arguments),
      src = arrayShift.call(arguments),
      key;

  while( src ) {
    for( key in src) {
      dest[key] = src[key];
    }
    src = arrayShift.call(arguments);
  }

  return dest;
}

function merge () {
    var dest = arrayShift.call(arguments),
        src = arrayShift.call(arguments),
        key;

    while( src ) {

        if( typeof dest !== typeof src ) {
            dest = _isArray(src) ? [] : ( _isObject(src) ? {} : src );
        }

        if( _isObject(src) ) {

            for( key in src ) {
                if( src[key] !== undefined ) {
                    if( typeof dest[key] !== typeof src[key] ) {
                        dest[key] = merge(undefined, src[key]);
                    } else if( _isArray(dest[key]) ) {
                        [].push.apply(dest[key], src[key]);
                    } else if( _isObject(dest[key]) ) {
                        dest[key] = merge(dest[key], src[key]);
                    } else {
                        dest[key] = src[key];
                    }
                }
            }
        }
        src = arrayShift.call(arguments);
    }

    return dest;
}

function joinPath () {
  return [].reduce.call(arguments, function (prev, path, index, list) {

    path = index ? path.replace(/^\//, '') : path;
    path = ( index === (list.length - 1) ) ? path : path.replace(/\/$/, '');

    return prev + ( index ? '/' : '' ) + path;

  }, '');
}

function writeIframe (iframe, content) {
  var iframeDoc = iframe.contentWindow.document;
  iframeDoc.charset = 'UTF-8';
  iframeDoc.open();
  iframeDoc.write(content);
  iframeDoc.close();
}

function getIFrame (iframeStyles) {
  var iframe = document.createElement('iframe');
  extend(iframe.style, iframeStyles || {});

  iframe.frameBorder = '0';
  return iframe;
}

function template (name, data){
  return template.cache[name](data);
}

template.cache = {};

template.compile = function (tmpl) {
  // John Resig micro-template
  return new Function('obj', // jshint ignore:line
    'var p=[],print=function(){p.push.apply(p,arguments);};' +

    // Introduce the data as local variables using with(){}
    'with(obj){p.push(\'' +

    // Convert the template into pure JavaScript
    tmpl.trim()
      .replace(/[\r\t\n]/g, ' ')
      .split('<%').join('\t')
      .replace(/((^|%>)[^\t]*)'/g, '$1\r')
      .replace(/\t=(.*?)%>/g, '\',$1,\'')
      .split('\t').join('\');')
      .split('%>').join('p.push(\'')
      .split('\r').join('\\\'') + '\');}return p.join(\'\');');
};

template.put = function (name, tmpl) {
  template.cache[name] = template.compile(tmpl);
};

template.lookup = function () {
  [].forEach.call(document.querySelectorAll('script[type="application/x-template"][data-template]'), function (tmpl) {
    template.put(tmpl.getAttribute('data-template'), tmpl.text);
  });
};


function findBubbleClose (str) {
  var level = 0;

  for( var i = 0, len = str.length; i < len ; i++ ) {
    if( str[i] === '(' ) {
      level++;
    } else if( str[i] === ')' ) {
      if( level === 0 ) {
        return i;
      } else {
        level--;
      }
    }
  }

  return -1;
}

function hasSelector (selector, rootElement) {
  var splitHas = selector.split(':has(');

  return splitHas.reduce(function (matches, partial) {

    var closePosition = findBubbleClose(partial),
        hasFilter = partial.substr(0, closePosition),
        partialQuery = partial.substr(closePosition + 1).trim();

    if( closePosition === -1 ) {
      throw new Error('malformed selector');
    }

    matches = matches.filter(function (element) {
      return element.querySelector(hasFilter);
    });

    if( partialQuery ) {
      var submatches = [];

      matches.forEach(function (element) {
        [].push.apply(submatches, element.querySelectorAll(partialQuery) );
      });

      return submatches;
    }

    return matches;

  }, [].slice.call( (rootElement || document).querySelectorAll( splitHas.shift() ) ) );
}

function querySelector (selector, rootElement) {
  // 'tr:has(> .row) div:has(span) img'.split(':has(');
  if( !selector ) {
    return [];
  }

  if( !/\:has\(/.test(selector) ) {
    return [].slice.call( (rootElement || document).querySelectorAll( selector ) );
  }

  return hasSelector(selector);
}

function cssQuery (_selector, rootElement) {
  var selectors = _selector.split(/\s*,\s*/);

  return selectors.reduce(function (list, selector) {
    return list.concat( querySelector(selector, rootElement) );
  }, []);
}

module.exports = {
  isObject: _isObject,
  isFunction: _isFunction,
  isString: _isString,
  isNumber: _isNumber,
  isArray: _isArray,
  isDate: _isDate,
  isRegExp: _isRegExp,
  isElement: _isElement,
  listen: listen,
  once: once,
  ready: docReady,
  replaceKeys: replaceKeys,
  merge: merge,
  extend: extend,
  joinPath: joinPath,
  writeIframe: writeIframe,
  getIFrame: getIFrame,
  template: template,
  cssQuery: cssQuery,
  elementData: document.createElement('div').dataset ? function (el, key, value) {
    if( value !== undefined ) {
      el.dataset[key] = value;
    }
    return el.dataset[key];
  } : function (el, key, value) {
    if( value !== undefined ) {
      el.setAttribute('data-' + key, value);
    }
    return el.getAttribute('data-' + key);
  }
};

},{}]},{},[4]);
