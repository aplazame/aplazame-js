(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '0.0.28';
},{}],2:[function(require,module,exports){
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

    if( !options.watching ) {
      options.watching = true;

      setInterval(function () {
        if( options.amount !== getCartPrice() ) {
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

  if( !elements.length || _.elementData(elButton, 'buttonInitialized') ) {
    return;
  }

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
    el.__display = el.style.display;
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
      setTimeout(function () {
        elms.forEach(function (el) {
          el.style.display = el.__display;
        });
      }, 2000);
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

},{"../.tmp/aplazame-version":1,"./http":6,"./live-dom":7,"./utils":9}],3:[function(require,module,exports){
var aplazame = require('./aplazame'),
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
      envOptions = {},
      apiOptions = {};

  if( /\:/.test(initText) ) {
    initText.split(',').forEach(function (part) {
      var keys = part.match(/^([^\:]+)\:(.*)/);
      envOptions[keys[1].trim()] = keys[2].trim();
    });
  } else {
    if( initText ) {
      envOptions.publicKey = initText;
    }
  }

  if( script.getAttribute('data-version') ) {
    var matchVersion = script.getAttribute('data-version').match(/^v?(\d)(\.(\d))?$/);

    if( !matchVersion ) {
      throw new Error('malformed version, should be like \'v1.2\'');
    }

    apiOptions.version = Number(matchVersion[1]);

    if( matchVersion[3] !== undefined ) {
      apiOptions.checkoutVersion = Number(matchVersion[3]);
    }
  }

  if( script.getAttribute('data-sandbox') ) {
    apiOptions.sandbox = script.getAttribute('data-sandbox') === 'true';
  }
  if( script.getAttribute('data-analytics') ) {
    envOptions.analytics = script.getAttribute('data-analytics') === 'true';
  }

  envOptions.baseUrl = scriptBase;

  aplazame.init(envOptions, apiOptions);
}

},{"./aplazame":2}],4:[function(require,module,exports){
var aplazame = require('./aplazame'),
    _ = require('./utils');

function buttonsLookup (element) {
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

},{"./aplazame":2,"./live-dom":7,"./utils":9}],5:[function(require,module,exports){
var aplazame = require('./aplazame'),
    _ = require('./utils');

function widgetsLookup (element) {
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

        http( aplazame.getEnv('baseUrl') + 'widgets/simulator/simulator.html').then(function (response) {
          var iframe = _.getIFrame({
            width: '100%'
          });
          iframes.push(iframe);
          simulator.appendChild(iframe);
          _.writeIframe(iframe,
            response.data
              .replace(/<head\>/, '<head><base href="' + aplazame.baseUrl() + '" />')
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

},{"./aplazame":2,"./http":6,"./live-dom":7,"./utils":9}],6:[function(require,module,exports){
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

module.exports = http;

},{}],7:[function(require,module,exports){
(function (global){

var suscriptors = [],
    running = false,
    _ = require('./utils');

function initLiveDOM (retryOnReady) {
  if( global.jQuery ) {
    (function ($) {

      var jqHtml = $.fn.html;

      $.fn.html = function () {
         var response = jqHtml.apply(this, arguments);
         if( !arguments.length ) {
           return response;
         }

         var elements = [].slice.call(this);

         setTimeout(function () {
           elements.forEach(function (el) {
             for( var i = 0, n = suscriptors.length; i < n ; i++ ) {
               suscriptors[i](el);
             }
           });
         }, 0);

         return response;
      };

    })(global.jQuery);
  } else if( retryOnReady ) {
    _.ready(function () {
      initLiveDOM();
    });
  }
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./utils":9}],8:[function(require,module,exports){
(function (global){

global.aplazame = require('./aplazame');

require('./data-aplazame');
require('./data-button');
require('./data-simulator');

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./aplazame":2,"./data-aplazame":3,"./data-button":4,"./data-simulator":5}],9:[function(require,module,exports){
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
template.put = function (name, tmpl) {
  // John Resig micro-template
  template.cache[name] = new Function('obj', // jshint ignore:line
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

},{}]},{},[8]);
