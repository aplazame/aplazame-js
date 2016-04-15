(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '0.0.240';

},{}],2:[function(require,module,exports){
module.exports = '@-webkit-keyframes aplazame-blur{0%{-webkit-filter:blur(0);filter:blur(0);}to{-webkit-filter:blur(3px);filter:blur(3px)}}@keyframes aplazame-blur{0%{-webkit-filter:blur(0);filter:blur(0)}to{-webkit-filter:blur(3px);filter:blur(3px)}}@media (min-width:601px){body.aplazame-blur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-filter:blur(3px);filter:blur(3px);-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:aplazame-blur;animation-name:aplazame-blur}body.aplazame-unblur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-filter:blur(0);filter:blur(0);-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:aplazame-blur;animation-name:aplazame-blur;-webkit-animation-direction:reverse;animation-direction:reverse}}';

},{}],3:[function(require,module,exports){
module.exports = '@-webkit-keyframes aplazame-logo-large{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}60%,90%,to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes aplazame-logo-large{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}60%,90%,to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes aplazame-logo-short{0%,30%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%,to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes aplazame-logo-short{0%,30%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%,to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes aplazame-logo-smile{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%,to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}@keyframes aplazame-logo-smile{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%,to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}.logo-aplazame{position:relative;display:inline-block;width:150px;height:150px}.logo-aplazame .line-large,.logo-aplazame .line-short,.logo-aplazame .smile{stroke:#ddd}.logo-aplazame .smile-outline{stroke:#485259}@media (min-width:480px){.logo-aplazame{width:200px;height:200px}}.logo-aplazame svg{position:absolute;top:0;left:0;width:100%;height:100%}.logo-aplazame.animate .line-large,.logo-aplazame.animate .line-short,.logo-aplazame.animate .smile{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.logo-aplazame.animate .smile{-webkit-animation-name:aplazame-logo-smile;animation-name:aplazame-logo-smile}.logo-aplazame.animate .line-large{-webkit-animation-name:aplazame-logo-large;animation-name:aplazame-logo-large}.logo-aplazame.animate .line-short{-webkit-animation-name:aplazame-logo-short;animation-name:aplazame-logo-short}';

},{}],4:[function(require,module,exports){
module.exports = '.aplazame-modal{width:100vw!important;height:100vh!important;z-index:2147483647;}body{overflow:hidden}@media (max-width:600px){html{background-color:#333a3e}body,html{height:100vh;margin:0;padding:0}body>:not(.aplazame-modal){display:none}}@media (min-width:601px){.aplazame-modal{position:fixed}}';

},{}],5:[function(require,module,exports){
module.exports = '@-webkit-keyframes aplazame-overlay{0%{opacity:0;}to{opacity:1}}@keyframes aplazame-overlay{0%{opacity:0}to{opacity:1}}.aplazame-overlay{font-family:Montserrat,sans-serif;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;width:100vw;height:100vh;background:rgba(53,64,71,.9);text-align:center;z-index:2147483646}.aplazame-overlay:before{content:\'\';display:block;height:50vh}.aplazame-logo-wrapper{display:inline-block;margin-top:-50%}.aplazame-overlay-loading-text{color:#95a6b1;margin-top:14px;font-size:14px}.aplazame-overlay-loading-text .text-error{color:#f08080}.aplazame-overlay-loading-text a{color:#f5f5f5;display:inline-block;text-decoration:none}.aplazame-overlay-loading-text a:hover{border-bottom:1px dotted #f5f5f5}.aplazame-overlay{-webkit-animation-fill-mode:both;animation-fill-mode:both}.aplazame-overlay.aplazame-overlay-hide,.aplazame-overlay.aplazame-overlay-show{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-name:aplazame-overlay;animation-name:aplazame-overlay;opacity:0}.aplazame-overlay.aplazame-overlay-hide{-webkit-animation-direction:reverse;animation-direction:reverse}';

},{}],6:[function(require,module,exports){
module.exports = '<div class="aplazame-widget-instalments">  <span class="aplazame-widget-from">desde&nbsp;</span><!--  --><strong class="aplazame-widget-amount">    <span class="aplazame-widget-price"><%= getAmount(choice.amount) %></span><!--    --><span class="aplazame-widget-currency">€</span>  </strong><!--  --><sub class="aplazame-widget-per-month">/mes</sub><!--  --><span class="aplazame-widget-instalments-wrapper">    <span>&nbsp;en&nbsp;</span>    <em class="aplazame-widget-instalments-num">12</em>    <span>&nbsp;cuotas</span>  </span></div><style rel="stylesheet"><%= options.widget.styles %></style>';

},{}],7:[function(require,module,exports){
/*
 * events.js - Single library to handle generic events

 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Jesús Manuel Germade Castiñeiras <jesus@germade.es>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

(function (root, factory) {

  if ( typeof module !== 'undefined' ) {
    module.exports = factory();
  } else if( root ) {
    if( root.define ) {
      root.define('Events', function () { return factory(); } );
    } else if( root.angular ) {
      root.angular.module('eventsWrapper', []).factory('Events', function () { return factory(true); });
    } else if( !root.Events ) {
      root.Events = factory();
    }
  }

})(this, function (ng) {
	'use strict';

  var methods = {
    std: { on: 'on', once: 'once', off: 'off', trigger: 'trigger' },
    safe: { on: '$$on', once: '$$once', off: '$$off', trigger: '$$trigger' }
  };

  function Event (name, args, caller) {
    this.name = name;
    this.args = args;
    this.$$args = [this].concat(args);
    this.caller = caller;
  }

  Event.prototype.preventDefault = function () {
    this.defaultPrevented = true;
  };

  function getMethods (ngSafe) {
    return ngSafe ? methods.safe : methods.std;
  }

	function _addListener (handlers, handler, context) {
    if( ! handler instanceof Function ) {
        return false;
    }
    handlers.push({ handler: handler, context: context });
  }

  function _triggerEvent (e, handlers) {
    if( handlers ) {
      for( var i = 0, len = handlers.length; i < len; i++ ) {
        handlers[i].handler.apply(e.caller, e.$$args);
        if( e.defaultPrevented ) {
          return i + 1;
        }
      }
      return len;
    }
  }

  function _emptyListener (handlers) {
    if( handlers ) {
      handlers.splice(0, handlers.length);
    }
  }

  function _removeListener (handlers, handler) {
    if( handlers ) {
      for( var i = 0, len = handlers.length; i < len; ) {
        if( handlers[i].handler === handler ) {
          handlers.splice(i, 1);
          len--;
        } else {
          i++;
        }
      }
    }
  }

  function Events (target, ngSafe) {
    target = target || this;

    var listeners = {},
        listenersOnce = {},
        method = getMethods(ngSafe);

    function checkEach (_method, eventName, arg1, arg2, arg3) {
      if( eventName instanceof Array ) {
        eventName.forEach(function (_eventName) { target[_method](_eventName, arg1, arg2, arg3); });
        return true;
      }
      if( typeof eventName !== 'string' ) {
        throw new Error('event name should be a string');
      }
      if( / /.test(eventName) ) {
        target[_method](eventName.split(/ +/), arg1, arg2, arg3);
        return true;
      }
    }

    target[method.on] = function (eventName, handler, context) {
      if( checkEach(method.on, eventName, handler, context) ) {
        return target;
      }
      listeners[eventName] = listeners[eventName] || [];
      _addListener(listeners[eventName], handler, context);
      return target;
    };

    target[method.once] = function (eventName, handler, context) {
      if( checkEach(method.once, eventName, handler, context) ) {
        return target;
      }
      listenersOnce[eventName] = listenersOnce[eventName] || [];
      _addListener(listenersOnce[eventName], handler, context);
      return target;
    };

    target[method.trigger] = function (eventName, attrs, caller) {
      if( checkEach(method.trigger, eventName, attrs, caller) ) {
        return target;
      }
      var e = new Event(eventName, attrs, caller);

      _triggerEvent(e, listeners[eventName]);

      if( !e.defaultPrevented ) {
        var len = _triggerEvent(e, listenersOnce[eventName]);
        if( len ) {
          listenersOnce[eventName].splice(0, len);
        }
      }
      return target;
    };

    target[method.off] = function (eventName, handler) {
      if( checkEach(method.off, eventName, handler) ) {
        return target;
      }
      if( handler === undefined ) {
        _emptyListener(listeners[eventName]);
        _emptyListener(listenersOnce[eventName]);
      } else {
        _removeListener(listeners[eventName], handler);
        _removeListener(listenersOnce[eventName], handler);
      }
      return target;
    };
  }

  return Events;
});

},{}],8:[function(require,module,exports){

// factory http

var $q = require('q-promise'),
    _ = require('nitro-tools/lib/kit-extend');

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

var RE_contentType = /([^\/]+)\/([^+]+\+)?(.*)/;
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

function http (url, config) {

  if( config === undefined && typeof url === 'object' && url !== null ) {
    config = url;
    url = config.url;
  } else {
    config = config || {};
    config.url = url;
  }

  config = _.copy(config);
  config = resolveFunctions( config, [config], null );
  config.method = ( config.method || 'GET').toUpperCase();

  if( typeof config.url !== 'string' ) {
    throw new Error('url should be a string');
  }

  return $q(function (resolve, reject) {

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

    request.onreadystatechange = function(){
      if( request.readyState === 'complete' || request.readyState === 4 ) {
        var response = {
          config: config,
          data: parseContentType(request.getResponseHeader('content-type'), request.responseText, request.responseXML),
          status: request.status,
          headers: headersGetter(request),
          xhr: request
        };
        if( request.status >= 0 && request.status < 400 ) {
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

module.exports = http;

},{"nitro-tools/lib/kit-extend":10,"q-promise":16}],9:[function(require,module,exports){

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

},{}],10:[function(require,module,exports){

var RE_$$ = /^\$\$/,
    arrayShift = [].shift,
    _ = require('./kit-type');

function _merge () {
    var dest = arrayShift.call(arguments),
        src = arrayShift.call(arguments),
        key;

    while( src ) {

      if( typeof dest !== typeof src ) {
          dest = _.isArray(src) ? [] : ( _.isObject(src) ? {} : src );
      }

      if( _.isObject(src) ) {

        for( key in src ) {
          if( src[key] === undefined ) {
            dest[key] = undefined;
          } else if( typeof dest[key] !== typeof src[key] ) {
            dest[key] = _merge(undefined, src[key]);
          } else if( _.isArray(dest[key]) ) {
            [].push.apply(dest[key], src[key]);
          } else if( _.isObject(dest[key]) ) {
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

module.exports = {
  extend: require('./extend'),
  merge: _merge,
  copy: function (o) {
      return _merge(undefined, o);
  }
};

},{"./extend":9,"./kit-type":14}],11:[function(require,module,exports){

var _ = require('./kit-type');

function _key (o, _key, value){
    if( !_.isObject(o) ) {
			return undefined;
		}

    var keys = _key.split('.'),
        key = keys.shift();

    if( value === undefined ) {
      while (key) {
        if( _.isObject(o) && key in o ) {
          o = o[key];
        } else {
          return;
        }
        key = keys.shift();
      }

      return o;
    } else {

      while (key) {
        if( o instanceof Object ) {
          if ( keys.length ){
            if( !(key in o) ) {
              o[key] = {};
            }
            o = o[key];
          } else {
            o[key] = value;
            return true;
          }
        }
        key = keys.shift();
      }

      return false;
    }
}

module.exports = {
  key: _key,
  keys: Object.keys
};

},{"./kit-type":14}],12:[function(require,module,exports){

var _ = require('./kit-type');

function _eachInList( list, iteratee, thisArg ) {
    for( var i = 0, len = list.length; i < len ; i++ ) {
        iteratee.call(thisArg, list[i], i);
    }
}

function _eachInObject( o, iteratee, thisArg ) {
    for( var key in o ) {
        iteratee.call(thisArg, [o[key], key]);
    }
}

function each (o, iteratee, thisArg) {
  if( _.isArray(o) ) {
      _eachInList(o, iteratee, thisArg || this);
  } else if( _.isObject(o) ) {
      _eachInObject(o, iteratee, thisArg || this);
  }
}

function indexOf (list, iteratee, thisArg) {
	if( _.isFunction(iteratee) ) {
    for( var i = 0, len = list.length; i < len; i++ ) {
        if( iteratee.call(thisArg, list[i]) ) {
            return i;
        }
    }
		return -1;
  }
	return list.indexOf(iteratee);
}

function _indexBy (list, iteratee, thisArg) {
	var map = {};
	for( var i = 0, len = list.length; i < len; i++ ) {
      map[iteratee.call(thisArg, list[i])] = list[i];
  }
  return map;
}

function indexBy (list, iteratee, thisArg) {
	if( _.isString(iteratee) ) {
		return _indexBy(list, function (item) { return item[iteratee]; }, thisArg);
	} else if( _.isFunction(iteratee) ) {
		return _indexBy(list, iteratee, thisArg);
	}
	return {};
}

function some (list, iteratee, thisArg) {
  if( _.isArray(list) ) {
    return list.some(iteratee, thisArg);
  } else if( _.isObject(list) ) {
    for( var key in list )  {
      if( iteratee.call(thisArg, list[key], key) ) {
        return true;
      }
    }
    return false;
  }
};

function every (list, iteratee, thisArg) {
  if( _.isArray(list) ) {
    return list.every(iteratee, thisArg);
  } else if( _.isObject(list) ) {
    for( var key in list )  {
      if( !iteratee.call(thisArg, list[key], key) ) {
        return false;
      }
    }
    return true;
  }
};

function _map (list, iteratee, thisArg) {
  if( _.isArray(list) ) {
    return list.map(iteratee, thisArg);
  } else if( _.isObject(list) ) {
    var result = {};
    for( var key in list )  {
      result[key] = iteratee.call(thisArg, list[key], key);
    }
    return result;
  }
};

function map2List (list, iteratee, thisArg) {
  if( _.isArray(list) ) {
    return list.map(iteratee, thisArg);
  }
  var result = [], i = 0;
  for( var key in list )  {
    result[i++] = iteratee.call(thisArg, list[key], key);
  }
  return result;
};

function pluck (list, iteratee, thisArg) {
	if( _.isString(iteratee) ) {
		return list.map(function (item) { return item[iteratee]; }, thisArg);
	} else if( _.isFunction(iteratee) ) {
		return list.map(iteratee, thisArg);
	}
	return [];
}

function remove (list, iteratee, thisArg) {

    if( !_.isFunction(iteratee) ) {
			return remove(list, function (item) { return item === iteratee; }, thisArg);
		}

		thisArg = thisArg === undefined ? this : thisArg;

		for( var i = 0, len = list.length; i < len; i++ ) {
				if( iteratee.call(thisArg, list[i]) ) {
						list.splice(i, 1);
						i--;
				}
		}
}

function matchAll (o, filters) {
    for( var key in filters ) {
        if( o[key] !== filters[key] ) {
            return false;
        }
    }
    return true;
}

function matchAny (o, filters) {
    for( var key in filters ) {
        if( o[key] === filters[key] ) {
            return true;
        }
    }
    return false;
}

function iterateeFn (iteratee) {
	if( _.isFunction(iteratee) ) {
		return iteratee;
	}

	if( _.isObject(iteratee) ) {
		return function (item) {
			return matchAll(item, iteratee);
		};
	}

	return function (item) {
		return item === iteratee;
	};
}

function find (list, iteratee, thisArg) {
		thisArg = thisArg === undefined ? this : thisArg;
		iteratee = iterateeFn(iteratee);

		for( var i = 0, len = list.length ; i < len ; i++ ) {
        if( iteratee.call(thisArg, list[i]) ) {
            return list[i];
        }
    }
		return null;
}

function filter (list, iteratee, thisArg) {
    var newList = [];

		thisArg = thisArg === undefined ? this : thisArg;
		iteratee = iterateeFn(iteratee);

		for( var i = 0, len = list.length ; i < len ; i++ ) {
        if( iteratee.call(thisArg, list[i]) ) {
            newList.push(list[i]);
        }
    }

    return newList;
}

module.exports = {
  matchAll: matchAll,
  matchAny: matchAny,
  find: find,
  filter: filter,
  each: each,
  some: some,
  every: every,
  map: _map,
  map2List: map2List,
  indexOf: indexOf,
  indexBy: indexBy,
  pluck: pluck,
  remove: remove
};

},{"./kit-type":14}],13:[function(require,module,exports){

function _joinPath () {
    var path = (arguments[0] || '').replace(/\/$/, '');

    for( var i = 1, len = arguments.length - 1 ; i < len ; i++ ) {
        path += '/' + arguments[i].replace(/^\/|\/$/, '');
    }
    if( len ) {
        path += arguments[len] ? ( '/' + arguments[len].replace(/^\//, '') ) : '';
    }

    return path;
}

module.exports = {
  joinPath: _joinPath
};

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){

function stepResult (step, value, type) {
  if( value && value.then ) {
    value.then(function (result) {
      step.deferred.resolve(result);
    }, function (reason) {
      step.deferred.reject(reason);
    });
  } else {
    step.deferred[type](value);
  }
}

function processQueue(promise) {
  if( promise.$$succeeded === undefined ) {
    return;
  }

  var len = promise.$$queue.length,
      step = promise.$$queue.shift(),
      type = promise.$$succeeded ? 'resolve' : 'reject',
      uncough = !promise.$$succeeded && promise.$$uncought++;

  while( step ) {

    if( step[type] ) {
      uncough = false;

      try {
        stepResult(step, step[type](promise.$$value), 'resolve');
      } catch (reason) {
        stepResult(step, reason, 'reject');
      }

    } else {
      stepResult(step, promise.$$value, type);
    }

    step = promise.$$queue.shift();
  }

  if( !promise.$$succeeded && uncough ) {
    // setTimeout(function () {
    if( promise.$$uncough === uncough ) {
      throw new Error('Uncaught (in promise)');
    }
    // }, 0);
  }
}

function Promise (executor) {
  if( !( executor instanceof Function ) ) {
    throw new TypeError('Promise resolver undefined is not a function');
  }

  var p = this;
  this.$$queue = [];
  this.$$uncough = 0;

  try {
    executor(function (result) {
      p.$$succeeded = true;
      p.$$value = result;
      processQueue(p);
    }, function (reason) {
      p.$$succeeded = false;
      p.$$value = reason;
      processQueue(p);
    });
  } catch (err) {
    p.$$succeeded = false;
    p.$$value = err;
    processQueue(p);
  }
}

Promise.prototype.then = function (onsucceeded, onRejected) {
  var _this = this,
      _promise = new Promise(function (resolve, reject) {
        _this.$$queue.push({ resolve: onsucceeded, reject: onRejected, deferred: { resolve: resolve, reject: reject } });
      });

  processQueue(this);

  return _promise;
};

Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
};

Promise.defer = function () {
  var deferred = {};
  deferred.promise = new Promise(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
};

Promise.all = function (iterable) {
  return new Promise(function (resolve, reject) {
    var pending = iterable.length,
        results = [];
    iterable.forEach(function (_promise, i) {

      ( _promise.then ? _promise : Promise.resolve(_promise) ).then(function (result) {
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

Promise.race = function (iterable) {
  return new Promise(function (resolve, reject) {
    var done = false;

    iterable.forEach(function (_promise, i) {
      if( done ) {
        return;
      }
      ( _promise.then ? _promise : Promise.resolve(_promise) ).then(function (result) {
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

Promise.resolve = function (result) {
  return new Promise(function (resolve, reject) { resolve(result); });
};

Promise.reject = function (reason) {
  return new Promise(function (resolve, reject) { reject(reason); });
};

module.exports = Promise;

},{}],16:[function(require,module,exports){
(function (global){

module.exports = require('./qizer')( global.Promise || require('./promise-polyfill') );

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./promise-polyfill":15,"./qizer":17}],17:[function(require,module,exports){

module.exports = function (Promise) {

  function q (executor) {
    return new Promise(executor);
  }

  ['defer', 'resolve', 'reject', 'all', 'race'].forEach(function (fName) {
    q[fName] = Promise[fName];
  });

  q.when = function (p) { return ( p && p.then ) ? p : Promise.resolve(p); };
  q.usePolyfill = function () {
  	Promise = require('./promise-polyfill');
  };

  return q;

};

},{"./promise-polyfill":15}],18:[function(require,module,exports){
(function (global){

global.aplazame = require('./core/core');

global.aplazame.checkout = require('./apps/checkout');
global.aplazame.button = require('./apps/button');
global.aplazame.simulator = require('./apps/simulator');
global.aplazame.modal = require('./apps/modal');

require('./apps/http-service');

require('./loaders/data-aplazame')(global.aplazame);
require('./loaders/data-button')(global.aplazame);
require('./loaders/data-simulator')(global.aplazame);

global.aplazame.info = function () {
  return {
    api: require('./core/api'),
    log: require('./tools/log').history,
    version: require('../.tmp/aplazame-version')
  };
};

global.aplazame.log = function () {
  require('./tools/log').history.forEach(function (l) {
    console.log(l.time);
    console.log.apply(console, l.args);
  });
};

global.$q = require('q-promise');
global.$http = require('http-browser');

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../.tmp/aplazame-version":1,"./apps/button":19,"./apps/checkout":20,"./apps/http-service":21,"./apps/modal":23,"./apps/simulator":24,"./core/api":26,"./core/core":27,"./loaders/data-aplazame":29,"./loaders/data-button":30,"./loaders/data-simulator":31,"./tools/log":37,"http-browser":8,"q-promise":16}],19:[function(require,module,exports){
'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools');

function getCartPrice() {
  var priceParts = document.querySelector('#total_price').textContent.match(/(\d+)([,.](\d+))?/);
  var amount = Number(priceParts[1]) * 100 + Number(priceParts[3]);
  return amount;
}

function button(options) {

  if (!options) {
    throw new Error('aplazame.button requires parameters');
  }

  if (!options.id && !options.button && !options.selector) {
    throw new Error('button can not be identified ( please use - id: \'button-id\' - or - button: \'#button-id\' - or - selector: \'#button-id\' (recomended) - )');
  }

  if (document.querySelector('#total_price')) {
    options.amount = getCartPrice() || options.amount;

    if (!button.watching) {
      button.watching = true;
      options.lastPrice = options.amount;

      setInterval(function () {
        if (getCartPrice() !== options.lastPrice) {
          options.amount = getCartPrice();
          options.lastPrice = options.amount;
          options.forceUpdate = true;
          button(options);
        }
      }, 400);
    }
  }

  if (!options.amount) {
    throw new Error('button amount missing');
  }

  var elements, elButton;

  if (options.button) {
    elButton = document.querySelector(options.button);
  } else if (options.id) {
    elButton = document.querySelector((/^#/.test(options.id) ? '' : '#') + options.id);
  }

  elements = elButton ? [elButton] : [];

  if (options.selector) {
    [].push.apply(elements, _.cssQuery(options.selector));
  }

  if (options.description) {
    [].push.apply(elements, _.cssQuery(options.description));
  }

  elButton = elButton || elements[0];

  if (!options.$$running && options.selector) {
    options.$$running = true;

    _.liveDOM.subscribe(function (el) {
      button(options);
    });
  }

  if (!options.forceUpdate && (!elements.length || _.elementData(elButton, 'buttonInitialized'))) {
    return;
  }

  options.forceUpdate = false;

  if (elButton && options.parent) {
    var parent = elButton.parentElement;

    while (parent && parent !== document.body) {
      if (parent.matchesSelector(options.parent)) {
        elements.push(parent);
        break;
      }
      parent = parent.parentElement;
    }
  }

  elements.forEach(function (el) {
    if (el.style.display !== 'none') {
      el.__display = el.style.display;
    }
    el.style.display = 'none';
  });

  button.check(options, function (allowed) {
    if (allowed) {
      var elms = elements.slice();
      elms.forEach(function (el) {
        el.style.display = el.__display;
      });
    }
  });

  elements.forEach(function (el) {
    _.elementData(el, 'buttonInitialized', true);
  });
}

button.check = function (options, callback) {
  if (_.isString(options) || _.isNumber(options)) {
    options = { amount: Number(options) };
  }

  var params = {
    amount: options.amount,
    currency: options.currency || 'EUR'
  };

  if (options.country) {
    params.country = options.country;
  }

  var checkPromise = apiHttp.get('checkout/button', { params: params });

  if (_.isFunction(callback)) {
    checkPromise.then(function (response) {
      callback(response.data.allowed, response);
    }, function (response) {
      callback(false, response);
    });
  }

  return checkPromise;
};

module.exports = button;

},{"../core/api-http":25,"../tools/tools":40}],20:[function(require,module,exports){
'use strict';

var api = require('../core/api'),
    _ = require('../tools/tools'),
    http = require('http-browser'),
    $q = require('q-promise'),
    cssHack = require('../tools/css-hack');

function checkout(options) {

  options = options || {};
  var baseUrl = (options.host === 'location' ? location.origin : options.host) || 'https://aplazame.com/static/checkout/';

  if (!/\/$/.test(baseUrl)) {
    baseUrl += '/';
  }

  var iframeSrc = baseUrl + 'iframe.html?' + new Date().getTime(),
      errorLoading = false,
      tmpOverlay = document.createElement('div'),
      cssOverlay = cssHack('overlay'),
      cssBlur = cssHack('blur'),
      cssLogo = cssHack('logo'),
      cssModal = cssHack('modal');

  tmpOverlay.className = 'aplazame-overlay aplazame-overlay-show';

  cssOverlay.hack(true);
  cssLogo.hack(true);
  cssBlur.hack(true);

  setTimeout(function () {
    if (!errorLoading) {
      _.addClass(document.body, 'aplazame-blur');
    }
  }, 0);

  tmpOverlay.innerHTML = '<div class="aplazame-logo-wrapper"><div class="logo-aplazame" style="width: 150px; height: 150px;">' + require('./loading-svg') + '</div><div class="aplazame-overlay-loading-text">Cargando pasarela de pago...</div></div>';

  document.body.appendChild(tmpOverlay);

  var loadingText = tmpOverlay.querySelector('.aplazame-overlay-loading-text');

  setTimeout(function () {
    if (!errorLoading) {
      tmpOverlay.querySelector('.logo-aplazame').className += ' animate';
    }
  }, 200);

  options.api = api;

  return http(iframeSrc).then(function (response) {
    var iframeHtml = response.data.replace(/<head\>/, '<head><base href="' + baseUrl + '" />'),
        iframe = _.getIFrame({
      top: 0,
      left: 0,
      width: '100%',
      height: '0',
      background: 'transparent'
    });

    iframe.className = 'aplazame-modal';
    iframe.style.display = 'none';

    document.body.appendChild(iframe);
    iframe.src = iframeSrc;

    if (!options.merchant) {
      throw new Error('missing merchant parameters');
    }

    if (!options.merchant.public_api_key) {
      if (api.publicKey) {
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

    _.onMessage('checkout', function (e, message) {

      switch (message.event) {
        case 'merchant':
          iframe.style.display = null;
          e.source.postMessage({
            checkout: options
          }, '*');
          break;
        case 'show-iframe':
          _.removeClass(iframe, 'hide');
          cssModal.hack(true);
          cssOverlay.hack(false);
          document.body.removeChild(tmpOverlay);
          break;
        case 'loading-text':
          loadingText.textContent = message.text;
          break;
        case 'drop-blur':
          _.removeClass(document.body, 'aplazame-blur');
          _.addClass(document.body, 'aplazame-unblur');
          setTimeout(function () {
            document.head.removeChild(cssBlur);
          }, 600);
          break;
        case 'success':
          _.log('aplazame.checkout:success', message);

          http(options.merchant.confirmation_url, {
            method: 'post',
            contentType: 'application/json',
            data: message.data,
            params: message.params
          }).then(function (response) {
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
        case 'close':
          if (iframe) {
            document.body.removeChild(iframe);
            cssModal.hack(false);
            iframe = null;

            switch (message.result) {
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
          break;
      }
    });
  }).catch(function (reason) {
    // throw new Error('can not connect to ' + baseUrl);
    errorLoading = true;

    console.error('Aplazame ' + reason);

    _.removeClass(tmpOverlay.querySelector('.logo-aplazame'), 'animate');
    loadingText.innerHTML = '<div class="text-error">Error cargando pasarela de pago</div><br/><div><a href="mailto:soporte@aplazame.com?subject=' + encodeURI('Checkout error: ' + reason) + '">soporte@aplazame.com</a></div>';
    loadingText.style.lineHeight = '1.5';

    (options.onError || _.noop)(reason);
  });
}

module.exports = checkout;

},{"../core/api":26,"../tools/css-hack":35,"../tools/tools":40,"./loading-svg":22,"http-browser":8,"q-promise":16}],21:[function(require,module,exports){
'use strict';

var _ = require('../tools/tools'),
    http = require('http-browser');

_.onMessage('http', function (e, message) {

  function processResponse(result) {

    return function (response) {

      var responsep = http.plainResponse(response);
      responsep.config = message;

      e.source.postMessage({
        aplazame: 'http',
        event: 'response',
        result: result,
        response: responsep
      }, '*');
    };
  }

  http(message.url, message).then(processResponse('success'), processResponse('error'));
});

module.exports = { ready: true };

},{"../tools/tools":40,"http-browser":8}],22:[function(require,module,exports){

module.exports = '<svg class="line-short" version="1.1" viewBox="0 0 100 100">' + '<path  d="M36.788,81.008,50,50" stroke-linecap="round" stroke-width="6" fill="none"/>' + '</svg>' + '<svg class="smile" version="1.1" viewBox="0 0 100 100">' + '<g stroke-linecap="round" fill="none" transform="matrix(0.78036633,0,0,0.78036633,10.526512,18.003998)">' + '<path class="smile-outline" stroke-width="12" d="M75.242,57.51c-5.435,7.839-14.498,12.972-24.761,12.972-10.262,0-19.325-5.132-24.758-12.972"/>' + '<path class="smile-line" stroke-width="7.5" d="M75.242,57.51c-5.435,7.839-14.498,12.972-24.761,12.972-10.262,0-19.325-5.132-24.758-12.972"/>' + '</g>' + '</svg>' + '<svg class="line-large" version="1.1" viewBox="0 0 100 100">' + '<path stroke-linejoin="round" d="M50,50,66.687,92.266" stroke-linecap="round" stroke-miterlimit="4" stroke-dasharray="none" stroke-width="6" fill="none"/>' + '</svg>';

},{}],23:[function(require,module,exports){
'use strict';

window.matchMedia = window.matchMedia || window.webkitMatchMedia || window.mozMatchMedia || window.msMatchMedia;

var api = require('../core/api'),
    _ = require('../tools/tools'),
    cssHack = require('../tools/css-hack'),
    aplazameVersion = require('../../.tmp/aplazame-version'),
    isMobile = window.matchMedia('( max-width: 767px )'),
    lastScrollTop;

var tmpOverlay = document.createElement('div'),
    cssOverlay = cssHack('overlay'),
    cssBlur = cssHack('blur'),
    cssModal = cssHack('modal');

function modal(content, options) {

  if (modal.iframe) {
    document.body.removeChild(modal.iframe);
  }

  options = options || {};

  cssOverlay.hack(true);
  cssBlur.hack(true);

  tmpOverlay.className = 'aplazame-overlay aplazame-overlay-show';
  document.body.appendChild(tmpOverlay);

  setTimeout(function () {
    _.addClass(document.body, 'aplazame-blur');
  }, 0);
  setTimeout(function () {
    _.removeClass(tmpOverlay, 'aplazame-overlay-show');
  }, isMobile.matches ? 0 : 600);

  modal.iframe = _.getIFrame({
    top: 0,
    left: 0,
    width: '100%',
    height: '0',
    background: 'transparent'
  });

  modal.iframe.className = 'aplazame-modal';
  modal.iframe.style.display = 'none';
  modal.iframe.content = content;

  document.body.appendChild(modal.iframe);
  modal.iframe.src = api.baseUrl + 'widgets/modal/modal.html?v=' + encodeURI(aplazameVersion);
}

_.onMessage('modal', function (e, message) {

  switch (message.event) {
    case 'open':
      modal.referrer = e.source;
      modal.message = message;
      modal(message.data);
      break;
    case 'opening':
      modal.iframe.style.display = null;
      break;
    case 'opened':
      lastScrollTop = _.scrollTop();
      cssModal.hack(true);
      e.source.postMessage({
        aplazame: 'modal',
        event: 'content',
        content: modal.iframe.content
      }, '*');
      break;
    case 'resolved':
      modal.referrer.postMessage({
        aplazame: 'modal',
        event: 'resolved',
        name: modal.message.name,
        value: message.value
      }, '*');
      delete modal.referrer;
      break;
    case 'closing':
      document.body.style.overflow = modal.iframe.overflow;
      _.removeClass(document.body, 'aplazame-blur');
      _.addClass(document.body, 'aplazame-unblur');
      _.addClass(tmpOverlay, 'aplazame-overlay-hide');
      setTimeout(function () {
        cssBlur.hack(false);
        _.removeClass(document.body, 'aplazame-unblur');
      }, isMobile.matches ? 0 : 600);
      break;
    case 'close':
      cssModal.hack(false);
      document.body.removeChild(tmpOverlay);
      _.removeClass(tmpOverlay, 'aplazame-overlay-hide');
      setTimeout(function () {
        _.scrollTop(lastScrollTop);
      }, 0);
      if (modal.iframe) {
        document.body.removeChild(modal.iframe);

        if (modal.referrer) {
          modal.referrer.postMessage({
            aplazame: 'modal',
            event: 'dismiss',
            name: modal.message.name
          }, '*');
          delete modal.referrer;
        }

        if (modal.message) {
          delete modal.message;
        }
        delete modal.iframe;
      }
      break;
  }
});

module.exports = modal;

},{"../../.tmp/aplazame-version":1,"../core/api":26,"../tools/css-hack":35,"../tools/tools":40}],24:[function(require,module,exports){
'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools'),
    $q = require('q-promise'),
    cache = [];

function simulator(amount, _options, callback, onError) {
  if (_.isFunction(_options)) {
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
  if (_options.view) {
    options.params.view = _options.view;
  }
  if (_options.payday) {
    options.params.payday = _options.payday;
  }
  if (_options.publicKey) {
    options.publicKey = _options.publicKey;
  }

  var foundCached = _.find(cache, function (item) {
    return item.amount === amount;
  });

  var promise = (!_options.noCache && foundCached ? $q.resolve(foundCached) : apiHttp.get('instalment-plan-simulator', options).then(function (response) {
    var result = {
      amount: amount,
      choices: response.data.choices[0].instalments,
      options: response.data.options,
      response: response
    };
    cache.push(result);

    return result;
  })).then(function (result) {
    (callback || _.noop)(result.choices, result.options);
  }, function (response) {
    if (response.status === 403) {
      console.error('Aplazame: Permiso denegado usando la clave pública: ' + response.config.publicKey);
      console.info('Revisa la configuración de Aplazame, para cualquier duda puedes escribir a hola@aplazame.com');
    } else if (_.key(response, 'data.error.fields.amount.0')) {
      console.error('Aplazame: ' + response.data.error.fields.amount[0]);
    } else if (_.key(response, 'data.error.message')) {
      console.error('Aplazame: ' + response.data.error.message);
    }
    (onError || _.noop)(response);
  });

  return promise;
}

module.exports = simulator;

},{"../core/api-http":25,"../tools/tools":40,"q-promise":16}],25:[function(require,module,exports){
'use strict';

var apzVersion = require('../../.tmp/aplazame-version'),
    _ = require('../tools/tools'),
    api = require('./api'),
    http = require('http-browser'),
    renderAccept = _.template.compile('application/vnd.aplazame<% if(sandbox){ %>.sandbox<% } %>.v<%= version %>+json');

module.exports = http.base(api.host, {
  headers: {
    xAjsVersion: apzVersion,
    accept: function (config) {
      var _api = _.copy(api);
      if ('version' in config || 'apiVersion' in config) {
        _api.version = 'version' in config ? config.version : config.apiVersion;
      }
      if ('sandbox' in config) {
        _api.sandbox = config.sandbox;
      }
      return renderAccept(_api);
    },
    authorization: function (config) {
      config.publicKey = config.publicKey || api.publicKey;
      return 'Bearer ' + config.publicKey;
    }
  }
});

},{"../../.tmp/aplazame-version":1,"../tools/tools":40,"./api":26,"http-browser":8}],26:[function(require,module,exports){
'use strict';

module.exports = {
  host: /^js\.aplazame\.[a-z]+$/.test(location.host) || location.host === 'demo.debug.aplazame.com' ? 'https://api.dev.aplazame.com/' : 'https://api.aplazame.com/',
  baseUrl: 'https://aplazame.com/static/',
  version: 1,
  checkoutVersion: 1,
  sandbox: false
};

},{}],27:[function(require,module,exports){
'use strict';

module.exports = {
  _: require('../tools/tools'),
  init: require('./init'),
  apiGet: require('./api-http').get,
  apiPost: require('./api-http').post,
  version: require('../../.tmp/aplazame-version')
};

},{"../../.tmp/aplazame-version":1,"../tools/tools":40,"./api-http":25,"./init":28}],28:[function(require,module,exports){
'use strict';

var api = require('./api'),
    _ = require('../tools/tools');

function init(options) {
  options = options || {};

  if (typeof options.version === 'string') {
    var matchVersion = options.version.match(/^v?(\d)(\.(\d))?$/);

    if (!matchVersion) {
      throw new Error('version mismatch, should be like \'v1.2\'');
    }

    options.version = Number(matchVersion[1]);

    if (matchVersion[3] !== undefined) {
      options.checkoutVersion = Number(matchVersion[3]);
    }
  }

  if (typeof options.sandbox === 'string') {
    options.sandbox = options.sandbox === 'true';
  }

  if (typeof options.analytics === 'string') {
    options.analytics = options.analytics === 'true';
  }

  _.extend(api, options);

  _.log('aplazame.init', api);
}

module.exports = init;

},{"../tools/tools":40,"./api":26}],29:[function(require,module,exports){
'use strict';

module.exports = function (aplazame) {

  var aplazameScript = document.querySelector('script[src*="aplazame.js"]') || document.querySelector('script[src*="aplazame.min.js"]'),
      options = {};

  if (aplazameScript) {

    if (aplazameScript.src) {
      options.baseUrl = aplazameScript.src.match(/(.*)\/(.*)$/)[1];

      if (!/\/$/.test(options.baseUrl)) {
        options.baseUrl += '/';
      }
    }

    var href = aplazameScript.src.split('?'),
        sandboxMatch = href && href[1] && href[1].match(/sandbox\=([^&]*)/);

    if (sandboxMatch) {
      options.sandbox = sandboxMatch[1] === '1' || sandboxMatch[1] === 'true';
    }
  }

  if (document.querySelector('script[data-aplazame]')) {

    var script = document.querySelector('script[data-aplazame]'),
        initText = script.getAttribute('data-aplazame');

    if (/\:/.test(initText)) {
      initText.split(',').forEach(function (part) {
        var keys = part.match(/^([^\:]+)\:(.*)/);
        options[keys[1].trim()] = keys[2].trim();
      });
    } else {
      if (initText) {
        options.publicKey = initText;
      }
    }

    if (script.getAttribute('data-version')) {
      options.version = script.getAttribute('data-version');
    }

    if (script.getAttribute('data-sandbox')) {
      options.sandbox = script.getAttribute('data-sandbox');
    }

    if (script.getAttribute('data-analytics')) {
      options.analytics = script.getAttribute('data-analytics');
    }
  }

  aplazame.init(options);
};

},{}],30:[function(require,module,exports){
'use strict';

module.exports = function (aplazame) {
  var _ = aplazame._;

  function buttonsLookup(element) {
    if (!element.querySelectorAll) {
      return;
    }
    var btns = element.querySelectorAll('[data-aplazame-button]');

    if (btns.length) {

      [].forEach.call(btns, function (btn) {
        var btnId = btn.getAttribute('data-aplazame-button'),
            btnParams = {
          selector: '[data-aplazame-button' + (btnId ? '=\"' + btnId + '\"' : '') + '], [data-aplazame-button-info' + (btnId ? '=\"' + btnId + '\"' : '') + ']',
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

  _.liveDOM.subscribe(buttonsLookup);

  _.ready(function () {
    buttonsLookup(document);
  });
};

},{}],31:[function(require,module,exports){
'use strict';

module.exports = function (aplazame) {

  var _ = aplazame._,
      $q = require('q-promise'),
      Events = require('events-wrapper'),
      api = require('../core/api'),
      isMobile = window.matchMedia('( max-width: 767px )'),
      each = Array.prototype.forEach;

  function parsePrice(price) {
    price = price.match(/[\d,.]+/);
    price = price && price[0] || '';
    price = price.replace(/([,.])0$/, '$100');
    var priceParts = ('' + price).replace(/[^0-9.,]/g, '').split(/[,.]/),
        amount = Number(priceParts.shift()),
        piece = priceParts.shift(),
        i,
        n;

    if (!piece) {
      return amount * 100;
    }

    while (piece) {
      for (i = 0, n = piece.length; i < n; i++) {
        amount *= 10;
      }
      amount += Number(piece);
      piece = priceParts.shift();
    }
    return amount;
  }

  function getQty(qtySelector) {
    if (!_.isString(qtySelector)) {
      console.warn('warning: data-qty should be an string. pe: form#article .final-price ');
      return 1;
    }
    var qtyElement;
    try {
      qtyElement = document.querySelector(qtySelector);
    } catch (err) {
      console.warn(err.message + '\ndata-qty should be an string. pe: form#article .final-price ');
      return 1;
    }

    switch (qtyElement.nodeName.toLowerCase()) {
      case 'input':
        return Number(qtyElement.value);
      case 'select':
        return Number(qtyElement.querySelector('option[selected]').value);
      default:
        return Number(qtyElement.textContent.trim());
    }
  }

  var cmsPriceSelector = ['form#product_addtocart_form .special-price .price', // magento
  'form#product_addtocart_form .regular-price .price', // magento
  '#product-info .special-price .price', // magento
  '#product-info .regular-price .price', // magento
  'form#buy_block #our_price_display', // prestashop
  '#main [itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"] .price .amount' // woocommerce
  ],
      cmsQtySelector = ['form#product_addtocart_form input[name="qty"]', // magento
  'form#buy_block input[name="qty"]', // prestashop
  'form#product-options-form button[data-id=qty]', // custom
  '#main [itemtype="http://schema.org/Product"] form.cart input[name="quantity"]' // woocommerce
  ];

  function matchSelector(selector) {
    return document.querySelector(selector);
  }

  function amountGetter(widgetElement) {
    var priceSelector = widgetElement.getAttribute('data-price'),
        qtySelector = widgetElement.getAttribute('data-qty');

    if (priceSelector) {
      try {
        document.querySelector(priceSelector);
      } catch (err) {
        priceSelector = null;
        console.warn(err.message);
      }
      if (qtySelector) {
        try {
          document.querySelector(qtySelector);
        } catch (err) {
          qtySelector = null;
          console.warn(err.message);
        }
      }
    } else {
      priceSelector = cmsPriceSelector.find(matchSelector);

      if (priceSelector) {
        qtySelector = cmsQtySelector.find(matchSelector);

        _.log('auto-discovered price selector', priceSelector, qtySelector);
      }
    }

    var getter = priceSelector ? function () {
      var qty = qtySelector ? getQty(qtySelector) : 1,
          priceElement = document.querySelector(priceSelector),
          amount = priceElement.value;

      if (typeof amount === 'undefined') {
        // console.log('priceElement.children', priceElement.children);
        if (!/\d+[,.]\d+/.test(priceElement.textContent) && priceElement.children && priceElement.children.length) {
          amount = '';

          var part = priceElement.firstChild,
              matched;

          while (part) {
            if (/[,.]/.test(amount)) {
              return;
            }
            matched = (part.toString() === '[object Text]' ? part.data : part.textContent).match(/[\d,.]+/);

            if (matched) {
              amount += (amount && !/^[,.]/.test(matched[0]) ? '.' : '') + matched[0];
            }

            part = part.nextSibling;
          }
        } else {
          amount = priceElement.textContent;
        }
      }

      return parsePrice(amount);
    } : function () {
      // return Number( widgetElement.getAttribute('data-amount') );
      return;
    };

    getter.priceSelector = priceSelector;
    getter.qtySelector = qtySelector;

    return getter;
  }

  function Iframe(url) {
    var el = _.getIFrame({ width: '100%', height: '40px' }),
        iframe = this;
    this.el = el;
    this.el.src = url;

    new Events(this);

    this.onload = function () {
      this.trigger('load', null, this);
    };

    _.onMessage('simulator', function (e, message) {
      if (e.source === el.contentWindow) {
        iframe.trigger('message:' + message.event, [message], this);
      }
    });

    this.on('message:resize', function (e, message) {
      el.style.height = message.height + 'px';
    });
  }

  Iframe.prototype.message = function (eventName, data) {
    var _data = _.extend({
      aplazame: 'simulator',
      event: eventName,
      mobile: isMobile.matches
    }, data || {});
    this.el.contentWindow.postMessage(_data, '*');
  };

  function maxInstalments(prev, choice) {
    if (prev === null) {
      return choice;
    } else {
      return choice.num_instalments > prev.num_instalments ? choice : prev;
    }
  }

  function widgetsLookup(element) {
    if (!element.querySelectorAll) {
      return;
    }

    var simulators = element.querySelectorAll('[data-aplazame-simulator]');

    each.call(simulators, function (simulator) {

      if (simulator.$$aplazame) {
        return;
      }

      simulator.$$aplazame = true;

      var choice,
          choices,
          options,
          iframe,
          getAmount = amountGetter(simulator),
          dataAmount = simulator.getAttribute('data-amount') && Number(simulator.getAttribute('data-amount')),
          currentAmount = getAmount.priceSelector && getAmount(),
          simulatorOptions = {},
          currentQty = (getAmount.qtySelector ? getQty(getAmount.qtySelector) : 1) || 1;

      if (simulator.getAttribute('data-view')) {
        simulatorOptions.view = simulator.getAttribute('data-view');
      }

      _.log('simulator', getAmount, dataAmount, currentAmount, simulatorOptions);

      aplazame.simulator(currentQty * (dataAmount || currentAmount), simulatorOptions, function (_choices, _options) {

        if (_options.widget && _options.widget.disabled) {
          return;
        }

        choices = _choices;
        options = _options;

        choice = choices.reduce(maxInstalments, null);

        var widgetOptions = options.widget,
            widget;

        _.clearElement(simulator);

        if (widgetOptions.type === 'button') {
          widget = new Iframe(api.baseUrl + 'widgets/simulator/simulator.html?' + Date.now());

          widget.on('message:require.choices choices.update', function () {
            widget.message('choices', {
              amount: currentAmount,
              choice: choice,
              choices: choices,
              options: options
            });
          });

          widget.on('choices.updating', function (e) {
            widget.message('loading');
          });
        } else {
          _.template.put('widget-raw', require('../../.tmp/simulator/templates/widget-raw'));
          widget = { el: document.createElement('div') };
          new Events(widget);

          widget.el.innerHTML = _.template('widget-raw', {
            getAmount: _.getAmount,
            amount: currentAmount,
            choice: choice,
            choices: choices,
            options: options
          });
        }

        simulator.appendChild(widget.el);

        var liveAmount = false,
            updating = false,
            amountInterval = setInterval(function () {
          var amount = getAmount.priceSelector && getAmount(),
              qty = (getAmount.qtySelector ? getQty(getAmount.qtySelector) : 1) || 1;

          if (amount !== currentAmount || qty !== currentQty) {
            currentQty = qty;

            if (amount && amount !== currentAmount) {
              liveAmount = true;
              currentAmount = amount;
            }

            amount = qty * (liveAmount ? amount : dataAmount);

            if (amount === updating) {
              return;
            }

            updating = amount;

            widget.trigger('choices.updating', [amount, _choices, _options]);
            aplazame.simulator(amount, function (_choices, _options) {
              if (amount === updating) {
                choices = _choices;
                options = _options;
                choice = choices.reduce(maxInstalments, null);
                widget.trigger('choices.update', [amount, _choices, _options]);
              }
            });
          }
        }, 400);
      });
    });
  }

  _.ready(function () {
    widgetsLookup(document);
    _.liveDOM.subscribe(widgetsLookup);
  });

  // *****************************************************************************
  // *****************************************************************************
  // *****************************************************************************
  // *****************************************************************************
};

},{"../../.tmp/simulator/templates/widget-raw":6,"../core/api":26,"events-wrapper":7,"q-promise":16}],32:[function(require,module,exports){

if (!Element.prototype.matchesSelector) {
  Element.prototype.matchesSelector = Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (selector) {
    var el = this;

    while (el) {
      if (el.matchesSelector(selector)) {
        break;
      }
      el = el.parentElement;
    }
    return el;
  };
}

if (!Element.prototype.addEventListener) {
  if (Element.prototype.attachEvent) {
    Element.prototype.addEventListener = function (eventName, listener) {
      return Element.prototype.attachEvent('on' + eventName, listener);
    };
    Element.prototype.removeEventListener = function (eventName, listener) {
      return Element.prototype.detachEvent('on' + eventName, listener);
    };
  } else {
    throw 'Browser not compatible with element events';
  }
}

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}

(function (root) {
  'use strict';

  root.matchMedia = root.matchMedia || root.webkitMatchMedia || root.mozMatchMedia || root.msMatchMedia;
})(this);

},{}],33:[function(require,module,exports){

function _ready(_callback, delay) {
  var callback = delay ? function () {
    setTimeout(_callback, delay);
  } : _callback;

  if (/loaded|complete/.test(document.readyState)) {
    callback();
  } else {
    window.addEventListener('load', callback);
  }
}

function findBubbleClose(str) {
  var level = 0;

  for (var i = 0, len = str.length; i < len; i++) {
    if (str[i] === '(') {
      level++;
    } else if (str[i] === ')') {
      if (level === 0) {
        return i;
      } else {
        level--;
      }
    }
  }

  return -1;
}

function hasSelector(selector, rootElement) {
  var splitHas = selector.split(':has(');

  return splitHas.reduce(function (matches, partial) {

    var closePosition = findBubbleClose(partial),
        hasFilter = partial.substr(0, closePosition),
        partialQuery = partial.substr(closePosition + 1).trim();

    if (closePosition === -1) {
      throw new Error('malformed selector');
    }

    matches = matches.filter(function (element) {
      return element.querySelector(hasFilter);
    });

    if (partialQuery) {
      var submatches = [];

      matches.forEach(function (element) {
        [].push.apply(submatches, element.querySelectorAll(partialQuery));
      });

      return submatches;
    }

    return matches;
  }, [].slice.call((rootElement || document).querySelectorAll(splitHas.shift())));
}

function querySelector(selector, rootElement) {
  // 'tr:has(> .row) div:has(span) img'.split(':has(');
  if (!selector) {
    return [];
  }

  if (!/\:has\(/.test(selector)) {
    return [].slice.call((rootElement || document).querySelectorAll(selector));
  }

  return hasSelector(selector);
}

function cssQuery(_selector, rootElement) {
  var selectors = _selector.split(/\s*,\s*/);

  return selectors.reduce(function (list, selector) {
    return list.concat(querySelector(selector, rootElement));
  }, []);
}

function scrollTop(value) {
  if (value !== undefined) {
    document.documentElement.scrollTop = value;
    document.body.scrollTop = value;
  }
  return document.documentElement.scrollTop || document.body.scrollTop;
}

function clearElement(el) {
  var child = el.firstChild;

  while (child) {
    el.removeChild(child);
    child = el.firstChild;
  }
}

var _classActions = {
  add: document.documentElement.classList ? function (element, className) {
    element.classList.add(className);
  } : function (element, className) {
    var RE_CLEANCLASS = new RegExp('\\b' + (className || '') + '\\b', '');
    _classActions.remove(element, className);
    element.className += ' ' + className;
  },
  remove: document.documentElement.classList ? function (element, className) {
    element.classList.remove(className);
  } : function (element, className) {
    var RE_CLEANCLASS = new RegExp('\\b' + (className || '') + '\\b', '');
    element.className = element.className.replace(RE_CLEANCLASS, '');
  },
  action: function (action, tools) {
    return function (element, className) {
      if (className.indexOf(' ') >= 0) {
        className.split(' ').forEach(function (cn) {
          _classActions[action](element, cn);
        });
      } else {
        _classActions[action](element, className);
      }
      return tools;
    };
  }
};

module.exports = function (_) {

  function writeIframe(iframe, content) {
    var iframeDoc = iframe.contentWindow.document;
    try {
      iframeDoc.charset = 'UTF-8';
    } catch (err) {}
    iframeDoc.open();
    iframeDoc.write(content);
    iframeDoc.close();
  }

  function getIFrame(iframeStyles) {
    var iframe = document.createElement('iframe');
    _.extend(iframe.style, iframeStyles || {});

    iframe.frameBorder = '0';
    return iframe;
  }

  var addClass = _classActions.action('add', _);
  var removeClass = _classActions.action('remove', _);

  return {
    ready: _ready,
    getIFrame: getIFrame,
    writeIframe: writeIframe,
    cssQuery: cssQuery,
    scrollTop: scrollTop,
    clearElement: clearElement,
    addClass: addClass,
    removeClass: removeClass,
    tmpClass: function (element, className, delay) {
      addClass(element, className);
      setTimeout(function () {
        removeClass(element, className);
      }, delay);
      return _;
    },
    elementData: document.createElement('div').dataset ? function (el, key, value) {
      if (value !== undefined) {
        el.dataset[key] = value;
      }
      return el.dataset[key];
    } : function (el, key, value) {
      if (value !== undefined) {
        el.setAttribute('data-' + key, value);
      }
      return el.getAttribute('data-' + key);
    }
  };
};

},{}],34:[function(require,module,exports){


function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
}

function brightness(color) {
  var rgb = hexToRgb(color);
  var o = Math.round((parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000);
  return o < 100 ? 'dark' : o > 230 ? 'light' : 'medium';
}

module.exports = {
  hexToRgb: hexToRgb,
  brightness: brightness
};

},{}],35:[function(require,module,exports){


var cssHack = function () {
  var cache = {},
      hacks = {
    overlay: require('../../.tmp/css-hacks/overlay'),
    blur: require('../../.tmp/css-hacks/blur'),
    logo: require('../../.tmp/css-hacks/logo'),
    modal: require('../../.tmp/css-hacks/modal')
  };

  return function hack(hackName) {
    if (!cache[hackName]) {
      var style = document.createElement('style');
      style.setAttribute('rel', 'stylesheet');
      style.setAttribute('type', 'text/css');
      style.textContent = hacks[hackName];

      var enabled = false;

      style.hack = function (enable) {
        enable = enable === undefined || enable;

        if (enable) {
          if (enabled) {
            return;
          }
          enabled = true;
          document.head.appendChild(style);
        } else {
          if (!enabled) {
            return;
          }
          enabled = false;
          document.head.removeChild(style);
        }
      };

      cache[hackName] = style;
    }
    return cache[hackName];
  };
}();

module.exports = cssHack;

},{"../../.tmp/css-hacks/blur":2,"../../.tmp/css-hacks/logo":3,"../../.tmp/css-hacks/modal":4,"../../.tmp/css-hacks/overlay":5}],36:[function(require,module,exports){
'use strict';

module.exports = function (_) {
  var suscriptors = [],
      running = false;

  function initLiveDOM() {

    _.ready(function () {
      document.body.addEventListener('DOMSubtreeModified', function (event) {
        // console.debug( 'DOM Changed at ', new Date(), event.target );
        for (var i = 0, n = suscriptors.length; i < n; i++) {
          suscriptors[i](event.target);
        }
      }, false);
    });
  }

  return {
    subscribe: function (handler) {
      if (!running) {
        initLiveDOM(true);
        running = true;
      }
      if (handler instanceof Function) {
        suscriptors.push(handler);
      }
    }
  };
};

},{}],37:[function(require,module,exports){


function getErrorObject() {
  try {
    throw Error('');
  } catch (err) {
    return err;
  }
}

function log() {
  var err = getErrorObject(),
      caller_line = err.stack.split('\n')[4] || '',
      index = caller_line.indexOf('at ');

  log.history.push({
    time: new Date(),
    args: arguments,
    track: {
      caller_line: caller_line,
      index: index,
      clean: caller_line.slice(index + 2, caller_line.length)
    }
  });
}

log.history = [];

module.exports = log;

},{}],38:[function(require,module,exports){

module.exports = function (_) {

  var messageTarget = {};

  window.addEventListener('message', function (e) {
    var message = e.data,
        listener = messageTarget[message.aplazame];

    if (!e.used && listener) {
      e.used = true;
      listener(e, message);
    }
  });

  return function (target, handler) {
    if (_.isString(target) && _.isFunction(handler)) {
      messageTarget[target] = handler;
    }
  };
};

},{}],39:[function(require,module,exports){

function template(name, data) {
  return template.cache[name](data || {});
}

template.cache = {};

template.compile = function (tmpl) {
  // John Resig micro-template
  return new Function('obj', // jshint ignore:line
  'var p=[],print=function(){p.push.apply(p,arguments);};' +

  // Introduce the data as local variables using with(){}
  'with(obj){p.push(\'' +

  // Convert the template into pure JavaScript
  tmpl.trim().replace(/[\r\t\n]/g, ' ').split('<%').join('\t').replace(/((^|%>)[^\t]*)'/g, '$1\r').replace(/\t=(.*?)%>/g, '\',$1,\'').split('\t').join('\');').split('%>').join('p.push(\'').split('\r').join('\\\'') + '\');}return p.join(\'\');');
};

template.put = function (name, tmpl) {
  template.cache[name] = template.compile(tmpl);
};

template.lookup = function () {
  [].forEach.call(document.querySelectorAll('script[type="application/x-template"][data-template]'), function (tmpl) {
    template.put(tmpl.getAttribute('data-template'), tmpl.text);
  });
};

module.exports = template;

},{}],40:[function(require,module,exports){
// 'use strict';

require('./browser-polyfills');

// require('q-promise').usePolyfill();

var _ = require('nitro-tools/lib/kit-extend');

_.extend(_, require('nitro-tools/lib/kit-key'), require('nitro-tools/lib/kit-type'), require('nitro-tools/lib/kit-lists'), require('nitro-tools/lib/kit-path'));

_.log = require('./log');
_.noop = function (value) {
  return value;
};

function getAmount(amount) {
  var prefix = '';

  if (amount < 0) {
    prefix = '-';
    amount = 0 - amount;
  }

  if (!amount) {
    return '0,00';
  } else if (amount < 10) {
    return '0,0' + amount;
  } else if (amount < 100) {
    return '0,' + amount;
  }
  return prefix + ('' + amount).replace(/..$/, ',$&');
}

_.extend(_, require('./colors'), require('./browser-tools')(_), {
  liveDOM: require('./live-dom')(_),
  template: require('./template'),
  getAmount: getAmount,
  onMessage: require('./message-listener')(_)
});

module.exports = _;

},{"./browser-polyfills":32,"./browser-tools":33,"./colors":34,"./live-dom":36,"./log":37,"./message-listener":38,"./template":39,"nitro-tools/lib/kit-extend":10,"nitro-tools/lib/kit-key":11,"nitro-tools/lib/kit-lists":12,"nitro-tools/lib/kit-path":13,"nitro-tools/lib/kit-type":14}]},{},[18]);
