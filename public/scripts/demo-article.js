(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* globals aplazame */


aplazame._.ready(function () {

  var country = document.body.getAttribute('data-country');
  var choices = document.querySelectorAll('.article-type-choices .article-type input');

  function amount2string (amount) {
    var cents = amount%100;
    return parseInt(amount/100) + '.' + ( cents < 10 ? '0' : '' ) + cents;
  }

  function toEUR (amount) {
    if( amount < 0 ) {
      return '-' + toEUR(-amount);
    }
    return amount2string(amount) + '€';
  }

  // console.log('price', price);

  [].forEach.call(choices, function (choice) {
    choice.addEventListener('change', function (_e) {
      var price = document.querySelector('[itemprop="price"]'),
          factor = Number( price.getAttribute('data-price-' + this.value) ) || 1;

      price.textContent = toEUR( ( price ? Number( price.getAttribute('content') ) : 0 ) * factor );

      // console.log('change', this, e, this.value, factor, toEUR( priceCents * factor ) );

    });
  });

  if( document.querySelector('article.article-sample') ) (function () {

    var qtyCtrl = document.querySelector('.qty-ctrl'),
        qtyInput = qtyCtrl.querySelector('input'),
        qtyMinus = qtyCtrl.querySelector('button.minus'),
        qtyPlus = qtyCtrl.querySelector('button.plus');

    qtyMinus.setAttribute('disabled', 'disabled');

    qtyMinus.addEventListener('click', function () {
      var newValue = Number(qtyInput.value) - 1;

      if( newValue < 1 ) {
        newValue = 1;
      }

      qtyInput.value = '' + newValue;

      if( newValue === 1 ) {
        qtyMinus.setAttribute('disabled', 'disabled');
      }
    });

    qtyPlus.addEventListener('click', function () {
      qtyInput.value = '' + ( Number(qtyInput.value) + 1 );
      qtyMinus.removeAttribute('disabled');
    });

  })();

  // checkout launching

  var params = {
    'checkout-json': 'checkout-' + country + '.json'
  };

  if( location.search ) {
    location.search.replace(/^\?/, '').split('&').forEach(function (part) {
      var param = part.match(/(.*?)\=(.*)/);
      if( param ) {
        params[param[1].trim()] = param[2].trim();
      }
    });
  }

  // console.log('params', location.search.replace(/^\?/, '').split('&')[0].match(/(.*?)\=(.*)/) );

  var http = require('http-browser'),
      checkoutData = http(params['checkout-json']);

  function randOrderId () {
    return 'test-' + new Date().getTime();
  }

  var matchOrderId = ( location.hash || '' ).match(/^#\/order\/([^&]*)/),
      orderId = matchOrderId && matchOrderId[1];

  if( orderId === 'random' ) {
    orderId = randOrderId();
  }

  window.loadCheckout = function () {

    checkoutData.then(function (response) {
      var data = response.data;

      if( typeof data === 'string' ) {
        try {
          data = JSON.parse(data);
        } catch(err) {
          console.error('received json is not valid');
        }
      }

      console.log('aplazame.info()', aplazame.info() );

      if( aplazame.info().api.host === 'https://api-dev.aplazame.com' ) {
        data.merchant.confirmation_url = 'https://demo-dev.aplazame.com/confirm';
      }

      if( !orderId ) {
        orderId = randOrderId();
        location.hash = '/order/' + orderId;
      }

      data.order.id = orderId;

      // data.merchant.onError = function () {
      //   console.log('whoops!!');
      // };
      //
      // data.merchant.onSuccess = function () {
      //   console.log('gogogo!!');
      // };
      //
      // data.merchant.onDismiss = function () {
      //   console.log('try again!!');
      // };

      aplazame.checkout(data);
    });

  };

});

},{"http-browser":2}],2:[function(require,module,exports){

// factory http

var Parole = require('parole'),
    _ = require('nitro-tools/extend');

function resolveFunctions (o, args, thisArg) {
  for( var key in o ) {
    if( o[key] instanceof Function ) {
      o[key] = o[key].apply(thisArg, args || []);
    } else if( typeof o[key] === 'object' && o[key] !== null ) {
      o[key] = resolveFunctions(o[key], args, thisArg);
    }
  }
  return o;
}

function headerToTitleSlug(text) {
  // console.log('headerToTitleSlug', text);
  var key = text.replace(/([a-z])([A-Z])/g, function (match, lower, upper) {
      return lower + '-' + upper;
  });
  key = key[0].toUpperCase() + key.substr(1);

  return key;
}

function headerToCamelCase(text) {
  var key = text[0].toLowerCase() + text.substr(1);
  return key.replace(/([a-z])-([A-Z])/g, function (match, lower, upper) {
    return lower + upper;
  });
}

var RE_contentType = /([^\/]+)\/([^+]+\+)?([^;]*)/;
function parseContentType(contentType, text, xml) {
  var matches = contentType && contentType.match(RE_contentType);
  return matches && ( matches[3] === 'json' ? JSON.parse(text) : ( matches[3] === 'xml' ? xml : text ) );
}

function _getHeaders (request) {
  var headers = {};
  request.getAllResponseHeaders().replace(/\s*([^\:]+)\s*\:\s*([^\;\n]+)/g, function (match, key, value) {
      headers[headerToCamelCase(key)] = value.trim();
  });

  return headers;
}

function headersGetter (request) {
  var headersCache;
  return function () {
    if( !headersCache ) {
      headersCache = _getHeaders(request);
    }
    return headersCache;
  };
}

function serializeParams (params) {
  var result = '';

  for( var param in params ) {
    result += ( result ? '&' : '' ) + param + '=' + encodeURIComponent(params[param]);
  }
  return result;
}

function addHeadersToRequest (req, headers) {
  for( var key in headers ) {
    req.setRequestHeader( headerToTitleSlug(key), headers[key] );
  }
}

var defaultSettings = {};

http.config = function (settings) {
  _.merge(defaultSettings, settings);
  return http;
};

function http (url, config) {

  if( config === undefined && typeof url === 'object' && url !== null ) {
    config = url;
    url = config.url;
  } else {
    config = config || {};
    config.url = url;
  }

  config = _.merge(_.copy(defaultSettings),_.copy(config));
  config = resolveFunctions( config, [config], null );
  config.method = ( config.method || 'GET').toUpperCase();

  if( typeof config.url !== 'string' ) {
    throw new Error('url should be a string');
  }

  return new Parole(function (resolve, reject) {

    var request = null;

    try { // Firefox, Opera 8.0+, Safari
        request = new XMLHttpRequest();
    } catch (e) { // Internet Explorer
        try { request = new ActiveXObject('Msxml2.XMLHTTP'); }  // jshint ignore:line
        catch (er) { request = new ActiveXObject('Microsoft.XMLHTTP'); }  // jshint ignore:line
    }
    if( request === null ) { throw 'Browser does not support HTTP Request'; }

    if( config.params ) {
      url += ( /\?/.test(url) ? '&' : '?' ) + serializeParams( config.params );
    }

    request.open( config.method, url );

    if( config.withCredentials ) {
      request.withCredentials = true;
    }

    addHeadersToRequest(request, config.headers || {} );

    request.config = config;
    config.start = new Date().getTime();

    request.onreadystatechange = function(){
      if( request.readyState === 'complete' || request.readyState === 4 ) {
        var response = {
          config: config,
          data: parseContentType(request.getResponseHeader('content-type'), request.responseText, request.responseXML),
          status: request.status,
          headers: headersGetter(request),
          xhr: request
        };
        if( request.status >= 200 && request.status < 400 ) {
          resolve( response );
        } else {
          reject( response );
        }
      }
    };

    if( config.contentType ) {

      if( config.data && config.contentType === 'application/json' && typeof config.data !== 'string' ) {
        config.data = JSON.stringify(config.data);
      }

    } else if( config.data instanceof FormData ) {
      config.contentType = 'multipart/form-data';
    } else if( typeof config.data === 'object' && config.data !== null ) {
      config.contentType = 'application/json';
      if( config.data ) {
        config.data = JSON.stringify(config.data);
      }
    }

    if( config.contentType ) {
      // addHeadersToRequest(request, { contentType: config.contentType });
      request.setRequestHeader( 'Content-Type', config.contentType );
    }

    request.send( config.data );

  });
}

http.serialize = serializeParams;

http.noCache = function (url, config) {
  url += ( /\?/.test(url) ? '&' : '?' ) + 't=' + new Date().getTime();
  return http(url, config);
};

http.plainResponse = function (response) {
  return {
    config: response.config,
    data: response.data,
    status: response.status,
    headers: response.headers()
  };
};

['get', 'delete'].forEach(function (method) {
  http[method] = function (url, config) {
    return http(url, _.extend(_.copy(config || {}), {
      method: method
    }));
  };
});

['post', 'put', 'patch'].forEach(function (method) {
  http[method] = function (url, data, config) {
    return http(url, _.extend(_.copy(config || {}), {
      method: method,
      data: data || {}
    }));
  };
});

// basePath

function basePath (bp) {
  if( /\/$/.test(bp) ) {
    bp = bp.replace(/\/$/,'');
  }
  return function (p) {
    if( !p ) {
      return bp;
    }
    return bp + ( /^\//.test(p) ? '' : '/' ) + p;
  };
}

http.base = function (url, baseConfig) {
  var bp = basePath(url),
      based = function () {
        return based.get.apply(this, arguments);
      };

  baseConfig = baseConfig || {};

  ['get', 'delete'].forEach(function (method) {
    based[method] = function (p, _config ) {
      return http( bp(p), _.merge(_.copy(baseConfig), _config, { method: method }));
    };
  });

  ['post', 'put', 'patch'].forEach(function (method) {
    based[method] = function (p, data, _config ) {
      return http( bp(p), _.merge(_.copy(baseConfig), _config, { method: method, data: data }) );
    };
  });

  return based;
};

http.responseData = function (response) {
  return response.data;
};

module.exports = http;

},{"nitro-tools/extend":4,"parole":6}],3:[function(require,module,exports){

var arrayShift = [].shift;

module.exports = function extend () {
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
};

},{}],4:[function(require,module,exports){

var RE_$$ = /^\$\$/,
    arrayShift = [].shift,
    type = require('./type');

function _merge () {
    var dest = arrayShift.call(arguments),
        src = arrayShift.call(arguments),
        key;

    while( src ) {

      if( typeof dest !== typeof src ) {
          dest = type.isArray(src) ? [] : ( type.isObject(src) ? {} : src );
      }

      if( type.isObject(src) ) {

        for( key in src ) {
          if( src[key] === undefined ) {
            dest[key] = undefined;
          } else if( type.isArray(dest[key]) ) {
            [].push.apply(dest[key], src[key]);
          } else if( type.isObject(dest[key]) ) {
            dest[key] = _merge(dest[key], src[key]);
          } else {
            dest[key] = src[key];
          }
        }
      }
      src = arrayShift.call(arguments);
    }

    return dest;
}

function mapObject (o, iteratee) {
  var result = {};
  for( var key in o ) {
    result[key] = iteratee(o[key], key);
  }
  return result;
}

function _copy (src) {
  if( type.isArray(src) ) {
    return src.map(function (item) {
      return _copy(item);
    });
  }
  
  if( type.isObject(src) ) {
    return mapObject(src, function (item) {
      return _copy(item);
    });
  }

  return src;
}

module.exports = {
  extend: require('./_extend'),
  merge: _merge,
  copy: _copy
};

},{"./_extend":3,"./type":5}],5:[function(require,module,exports){
'use strict';

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

module.exports = {
  isType: function (type, value) {
    if( value === undefined ) {
      return _isType(type);
    }
    return _isType(type)(value);
  },
  instanceOf: function (Proto, value) {
    if( value === undefined ) {
      return _instanceOf(Proto);
    }
    return _instanceOf(Proto)(value);
  },
  isObject: function (o) {
    return typeof o === 'object' && o !== null;
  },
	isFunction: _isType('function'),
	isString: _isType('string'),
	isNumber: _isType('number'),
	isArray: Array.isArray || _instanceOf(Array),
	isDate: _instanceOf(Date),
	isRegExp: _instanceOf(RegExp),
	isElement: function(o) {
    return o && o.nodeType === 1;
  },
  isUndefined: function (value) {
    return value === undefined;
  }
};

},{}],6:[function(require,module,exports){

(function (root, factory) {
  if( typeof exports === 'object' && typeof module !== 'undefined' ) {
    // CommonJS
    module.exports = factory();
  } else if( typeof define === 'function' && define.amd ) {
      // AMD. Register as an anonymous module.
      define([], factory);
  } else {
      // Browser globals
      root.Parole = factory();
  }
})(this, function () {

  function runHandler (fn, deferred, x, fulfilled) {
    if( typeof fn === 'function' ) {
      try {
        deferred.resolve( fn(x) );
      } catch(reason) {
        deferred.reject( reason );
      }
    } else {
      deferred[ fulfilled ? 'resolve' : 'reject' ](x);
    }
  }

  function resolvePromise (p, x, fulfilled) {
    if( p.resolved ) {
      return;
    }
    p.resolved = true;

    p.result = x;
    p.fulfilled = fulfilled || false;

    var queue = p.queue.splice(0);
    p.queue = null;

    setTimeout(function () {
      for( var i = 0, n = queue.length ; i < n ; i++ ) {
        runHandler( queue[i][fulfilled ? 0 : 1], queue[i][2], x, fulfilled );
      }
    }, 0);
  }

  function runThenable (then, p, x) {
    var executed = false;
    try {
      then.call(x, function (value) {
        if( executed ) return;
        executed = true;
        xThen(p, value, true);
      }, function (reason) {
        if( executed ) return;
        executed = true;
        xThen(p, reason, false);
      });
    } catch(err) {
      if( executed ) return;
      xThen(p, err, false);
    }
  }

  function xThen (p, x, fulfilled) {
    var then;

    if( x && ( typeof x === 'object' || typeof x === 'function' ) ) {
      try {
        then = x.then;

        if( fulfilled && typeof then === 'function' ) {
          runThenable(then, p, x);
        } else {
          resolvePromise(p, x, fulfilled);
        }
      } catch (reason) {
        resolvePromise(p, reason, false);
      }
    } else {
      resolvePromise(p, x, fulfilled);
    }
  }

  function resolveProcedure (p, x, fulfilled) {
    if( p.resolving ) return;
    p.resolving = true;

    if( x === p.promise ) {
      fulfilled = false;
      x = new TypeError('A promise can not be resolved by itself');
    }

    xThen(p, x, fulfilled);
  }

  function Parole (resolver) {
    if( !(this instanceof Parole) ) {
      return new Parole(resolver);
    }

    if( typeof resolver !== 'function' ) {
      throw new TypeError('Promise resolver ' + resolver + ' is not a function');
    }

    var p = {
      queue: [],
      promise: this
    };

    this.__promise = p;

    try {
      resolver(function (value) {
        resolveProcedure(p, value, true);
      }, function (reason) {
        resolveProcedure(p, reason, false);
      });
    } catch (reason) {
      resolveProcedure(p, reason, false);
    }

  }

  Parole.prototype.then = function (onFulfilled, onRejected) {
    var p = this.__promise,
        deferred = Parole.defer();

    if( p.queue ) {
      p.queue.push([onFulfilled, onRejected, deferred]);
    } else {
      setTimeout(function () {
        runHandler( p.fulfilled ? onFulfilled : onRejected, deferred, p.result, p.fulfilled );
      }, 0);
    }

    return deferred.promise;
  };

  Parole.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
  };

  // Promise methods

  function each (iterable, handler) {
    for( var i = 0, n = iterable.length; i < n ; i++ ) {
      handler(iterable[i], i);
    }
  }

  Parole.defer = function () {
    var deferred = {};
    deferred.promise = new Parole(function (resolve, reject) {
      deferred.resolve = resolve;
      deferred.reject = reject;
    });
    return deferred;
  };

  Parole.when = function (x) { return ( x && x.then ) ? x : Parole.resolve(x); };

  Parole.resolve = function (value) {
    return new Parole(function (resolve) {
      resolve(value);
    });
  };

  Parole.reject = function (value) {
    return new Parole(function (resolve, reject) {
      reject(value);
    });
  };

  Parole.all = function (iterable) {
    return new Parole(function (resolve, reject) {
      var pending = iterable.length,
          results = [];
      each(iterable, function (_promise, i) {

        ( _promise.then ? _promise : Parole.resolve(_promise) ).then(function (result) {
          results[i] = result;
          if( --pending === 0 ) {
            resolve(results);
          }
        }, function (reason) {
          if( pending !== -1 ) {
            pending === -1;
            reject(reason);
          }
        });
      });
    });
  };

  Parole.race = function (iterable) {
    return new Parole(function (resolve, reject) {
      var done = false;

      each(iterable, function (_promise) {
        if( done ) {
          return;
        }
        ( _promise.then ? _promise : Parole.resolve(_promise) ).then(function (result) {
          if( !done ) {
            done = true;
            resolve(result);
          }
        }, function (reason) {
          if( !done ) {
            done = true;
            reject(reason);
          }
        });
      });
    });
  };

  return Parole;

});

},{}]},{},[1]);
