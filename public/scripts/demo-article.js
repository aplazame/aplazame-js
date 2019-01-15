(function () {
	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var parole = createCommonjsModule(function (module, exports) {
	/* global process */

	(function (root, factory) {
	  {
	    // CommonJS
	    module.exports = factory();
	  }
	})(commonjsGlobal, function () {

	  function _runQueue (queue) {
	    for( var i = 0, n = queue.length ; i < n ; i++ ) {
	      queue[i]();
	    }
	  }

	  var nextTick = typeof process === 'object' && typeof process.nextTick === 'function' ? process.nextTick :
	      (function (global) {
	        if( 'Promise' in global && typeof global.Promise.resolve === 'function' ) return (function (resolved) {
	          return resolved.then.bind(resolved);
	        })( global.Promise.resolve() );
	        if( 'MutationObserver' in global ) return (function (node) {
	          return function (callback) {
	            var observer = new MutationObserver(function () {
	              callback();
	              observer.disconnect();
	            });
	            observer.observe( node, {characterData: true} );
	            node.data = false;
	          };
	        })( document.createTextNode('') );
	        return global.setImmediate || global.setTimeout;
	      })( typeof window === 'object' ? window : this );

	  function once (fn) {
	    return function () {
	      if( fn ) fn.apply(this, arguments);
	      fn = null;
	    };
	  }

	  function isObjectLike (x) {
	    return ( typeof x === 'object' || typeof x === 'function' );
	  }

	  function isThenable (x) {
	    return isObjectLike(x) && 'then' in x;
	  }

	  function runThenable (then, xThen, p, x, resolve, reject) {
	    try {
	      then.call(x, function (value) {
	        xThen(p, value, true, resolve, reject);
	      }, function (reason) {
	        xThen(p, reason, false, resolve, reject);
	      });
	    } catch(err) {
	      xThen(p, err, false, resolve, reject);
	    }
	  }

	  function xThen (p, x, fulfilled, resolve, reject) {
	    var then;

	    if( x && isObjectLike(x) ) {
	      try {
	        if( x === p ) throw new TypeError('A promise can not be resolved by itself');
	        then = x.then;

	        if( fulfilled && typeof then === 'function' ) {
	          runThenable(then, once(xThen), p, x, resolve, reject);
	        } else {
	          (fulfilled ? resolve : reject)(x);
	        }
	      } catch (reason) {
	        reject(reason);
	      }
	    } else {
	      (fulfilled ? resolve : reject)(x);
	    }
	  }

	  function Parole (resolver) {
	    if( !(this instanceof Parole) ) return new Parole(resolver);

	    var p = this,
	        reject = function (reason) {
	          if( p.fulfilled || p.rejected ) return;
	          p.rejected = true;
	          p.value = reason;
	          nextTick(function () { _runQueue(p.queue); });
	        };

	    p.queue = [];

	    resolver(function (value) {
	      xThen(p, value, true, function (result) {
	        if( p.fulfilled || p.rejected ) return;
	        p.fulfilled = true;
	        p.value = result;
	        nextTick(function () { _runQueue(p.queue); });
	      }, reject);
	    }, reject);
	  }

	  Parole.prototype.then = function (onFulfilled, onRejected) {
	    var p = this;
	    return new Parole(function (resolve, reject) {

	      function complete () {
	        var then = p.fulfilled ? onFulfilled : onRejected;
	        if( typeof then === 'function' ) {
	          try {
	            resolve( then(p.value) );
	          } catch(reason) {
	            reject( reason );
	          }
	        } else if( p.fulfilled ) resolve(p.value);
	        else reject(p.value);
	      }

	      if( !p.fulfilled && !p.rejected ) {
	        p.queue.push(complete);
	      } else {
	        nextTick(complete);
	      }

	    });
	  };

	  Parole.prototype.catch = function (onRejected) {
	    return this.then(null, onRejected);
	  };

	  // Promise methods

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

	  Parole.all = function (promises) {
	    var waiting_promises = promises.length;
	    return new Parole(function (resolve, reject) {
	      var results = new Array(waiting_promises);
	      promises.forEach(function (promise, i) {
	        var addresult = function (result) {
	          results[i] = result;
	          waiting_promises--;
	          if( !waiting_promises ) resolve(results);
	        };
	        if( isThenable(promise) ) promise.then.call(promise, addresult, reject);
	        else addresult(promise);
	      });
	      if( !results.length ) resolve(results);
	    });
	  };

	  Parole.race = function (promises) {
	    return new Parole(function (resolve, reject) {
	      promises.forEach(function (promise) {
	        if( isThenable(promise) ) promise.then.call(promise, resolve, reject);
	        else resolve(promise);
	      });
	      if( !promises.length ) resolve();
	    });
	  };

	  return Parole;

	});
	});

	var isType = function (type, o) {
	      return o ? typeof o === type : function (_o) {
	        return typeof _o === type;
	      };
	    };

	function isObject (o) {
	  return o !== null && typeof o === 'object';
	}

	var isArray = Array.isArray || function (o) {
	  return o instanceof Array;
	};

	var isString = isType('string');
	var isFunction = isType('function');

	function toUnderscoreCase (text) {
	  return text.replace(/-/g, '_').replace(/([a-z])([A-Z])/, function (matched, a, b) { return a + '_' + b; }).toLowerCase();
	}

	function toCamelCase (text) {
	  return text.replace(/([a-z])[-_]([a-z])/g, function (matched, a, b) { return a + b.toUpperCase(); });
	}

	function toHeaderCase (text) {
	  var key = text.replace(/_/g, '-').replace(/([a-z])([A-Z])/, function (matched, a, b) { return a + '-' + b; });
	  return key[0].toUpperCase() + key.substr(1).toLowerCase().replace(/-[a-z]/g, function (matched) { return matched.toUpperCase(); });
	}

	function _passThrought (value) {
	  return value;
	}

	var case_formatters = {
	  underscore: toUnderscoreCase,
	  camel: toCamelCase,
	  header: toHeaderCase,
	};

	function mapObject (o, iteratee, thisArg, mapFormatter) {
	  var result = {};
	  mapFormatter = mapFormatter || _passThrought;
	  for( var key in o ) {
	    result[mapFormatter(key)] = iteratee.call(thisArg, o[key], key);
	  }
	  return result;
	}

	function copy (src, mapFormatter) {
	  if( typeof mapFormatter === 'string' ) mapFormatter = case_formatters[mapFormatter];

	  if( isArray(src) ) {
	    return src.map(function (item) {
	      return copy(item, mapFormatter);
	    });
	  }

	  if( isObject(src) ) {
	    return mapObject(src, function (item) {
	      return copy(item, mapFormatter);
	    }, src, mapFormatter);
	  }

	  return src;
	}

	function extend (dest, src) {
	  dest = dest || {};
	  for( var key in src ) dest[key] = src[key];
	  return dest;
	}

	function _mergeArrays(dest, src, concatArrays) {
	  if( !concatArrays ) return src.map(function (item) { return copy(item); });
	  [].push.apply(dest, src);
	  for( var i = 0, n = src.length ; i < n ; i++ ) {
	    dest.push( dest[i] ? merge(dest[i], src[i]) : copy(src[i]) );
	  }
	  return dest;
	}

	function merge (dest, src, concatArrays) {
	  if( typeof dest !== typeof src ) {
	    if( isArray(src) ) dest = [];
	    else if( typeof src === 'object' ) dest = {};
	    else return src;
	  }
	  if( isArray(src) ) return _mergeArrays(dest, src, concatArrays);
	  if( typeof src === 'object' ) {
	    for( var key in src ) {
	      dest[key] = merge(dest[key], src[key]);
	    }
	    return dest;
	  }
	  return src;
	}

	function resolveFunctions (o, args, this_arg) {
	  for( var key in o ) {
	    if( isFunction(o[key]) ) {
	      o[key] = o[key].apply(this_arg, args);
	    } else if( isObject(o[key]) ) {
	      o[key] = resolveFunctions(o[key], args, this_arg);
	    }
	  }
	  return o;
	}

	var RE_contentType = /([^/]+)\/([^+]+\+)?([^;]*)/;
	function parseContentType(contentType) {
	  var matches = contentType && contentType.match(RE_contentType);
	  return matches ? matches[3] : 'text';
	}


	var arrayPush = Array.prototype.push,
	    arraySlice = Array.prototype.slice;

	function _sanitizePath(path, i, last) {
	  if( i > 0 ) path = path.replace(/^\.*\//, '');
	  if( !last ) path = path.replace(/\/$/, '');
	  return path.split(/\/+/);
	}

	function _joinPaths (paths) {
	  var last = paths.length - 1;
	  return paths.reduce(function (result, path, i) {
	    if( path === '.' ) return result;
	    if( /^[a-z]+:\/\//.test(path) ) return [i === last ? path : path.replace(/\/$/, '')];
	    if( /^\//.test(path) ) return _sanitizePath(path, 0, i === last );

	    path = path.replace(/\.\.\//g, function () {
	      result = result.slice(0, -1);
	      return '';
	    }).replace(/\.\//, '');

	    arrayPush.apply( result, _sanitizePath(path, i, i === last) );

	    return result;

	  }, []).join('/');
	}

	function _unraise (paths) {
	  var result = [];

	  paths.forEach(function (path) {
	    if( !path ) return;

	    // https://jsperf.com/array-prototype-push-apply-vs-concat/17
	    if( path instanceof Array ) arrayPush.apply(result, _unraise(path) );
	    else if( typeof path === 'string' ) result.push(path);
	    else throw new Error('paths parts should be Array or String');
	  });

	  return result;
	}

	function joinPaths () {
	  return _joinPaths( _unraise(arraySlice.call(arguments)) );
	}

	function keysTobrackets (keys) {
	  return keys.reduce(function (result, key, i) {
	    return result + (i ? ( '[' + key + ']' ) : key);
	  }, '');
	}

	function _serialize (data, params, keys) {

	  if( typeof data === 'object' ) {
	    if( Array.isArray(data) ) {
	      for( var i = 0, n = data.length; i < n ; i++ ) {
	        _serialize( data[i], params, keys.concat( typeof data[i] === 'object' ? i : '' ) );
	      }
	    } else {
	      for( var k in data ) {
	        _serialize( data[k], params, keys.concat(k) );
	      }
	    }
	  } else {
	    params.push( keysTobrackets(keys) + '=' + encodeURIComponent('' + data) );
	    // params.push( keysTobrackets(keys) + '=' + '' + data );
	  }

	  return params;
	}

	function serializeQS (data) {
	  // eslint-disable-next-line
	  // console.log('serialize', data, _serialize(data, [], []) );
	  return _serialize(data, [], []).join('&');
	}

	var http_defaults = {},
	    makeRequest = function () {},
	    Parole = typeof Promise !== 'undefined' ? Promise : function () {};

	function _plainOptions (_options_pile, method) {
	  var options_pile = _options_pile ? copy(_options_pile) : [];

	  var plain_options = {},
	      options = options_pile.shift();

	  while( options ) {
	    merge(plain_options, options);
	    options = options_pile.shift();
	  }

	  if(method) plain_options.method = method;

	  plain_options.url = joinPaths( _options_pile.reduce(function (paths, options) {
	    if( !options.url ) return paths;

	    if( options.url instanceof Function ) return paths.concat( options.url(plain_options) );

	    return paths.concat(options.url);
	  }, []) );

	  return plain_options;
	}

	function getInterceptorsProcessor (interceptors, resolve, reject, is_error) {
	  function processInterceptor (_res, interceptor) {
	    if( interceptor ) {
	      try{
	        processInterceptor( resolve( interceptor(_res) ), interceptors.shift() );
	      } catch (err) {
	        reject(err);
	      }
	    } else (is_error ? reject : resolve)(_res);
	  }
	  return function (res) {
	    return processInterceptor( res, interceptors.shift() );
	  };
	}

	var isBlob = typeof Blob === 'function' ? function (x) {
	  return Blob.prototype.isPrototypeOf(x);
	} : function () { return false; };

	var isFormData = typeof FormData === 'function' ? function (x) {
	  return FormData.prototype.isPrototypeOf(x);
	} : function () { return false; };

	function http (url, _config, body) {

	  var config = _plainOptions([http_defaults, _config || {}]);

	  config = copy( isObject(url) ? url : config || {} );
	  config.url = url === config ? config.url : url;
	  config.method = config.method ? config.method.toUpperCase() : 'GET';
	  config.timestamp = new Date().getTime();

	  if( !isString(config.url) ) throw new Error('url must be a string');

	  var interceptors = config.interceptors || [];
	  delete config.interceptors;

	  config = resolveFunctions(config, [config]);
	  config.body = body || config.body;

	  if( config.params ) {
	    config.url += ( /\?/.test(config.url) ? '&' : '?' ) + serializeQS( config.params );
	  }

	  var headers = copy(config.headers || {}, 'underscore');

	  if( config.json && !config.body ) {
	    headers.content_type = headers.content_type || 'application/json';
	    config.body = JSON.stringify(config.json);
	  } else if( headers.content_type === 'application/json' && typeof config.body === 'object' ) {
	    config.body = JSON.stringify(config.body);
	  } else if( typeof config.body === 'object' &&
	      !isBlob(config.body) &&
	      !isFormData(config.body) ) {
	    config.body = JSON.stringify(config.body);
	    headers.content_type = headers.content_type || 'application/json';
	  } else if( !headers.content_type ) headers.content_type || 'application/json';

	  headers.accept = headers.accept || headers.content_type || 'application/json';

	  config.headers = copy(headers, 'header');

	  var req_interceptors = [],
	      req_error_interceptors = [],
	      res_interceptors = [],
	      res_error_interceptors = [];

	  interceptors.forEach(function (interceptor) {
	    if( interceptor.request ) req_interceptors.push(interceptor.request);
	    if( interceptor.requestError ) req_error_interceptors.push(interceptor.requestError);
	    if( interceptor.response ) res_interceptors.push(interceptor.response);
	    if( interceptor.responseError ) res_error_interceptors.push(interceptor.responseError);
	  });

	  var request = new Parole(function (resolve, reject) {
	        if( req_interceptors.length ) getInterceptorsProcessor(req_interceptors, resolve, reject)(config);
	        else resolve(config);
	      })
	      .catch(function (reason) {
	        if( req_error_interceptors.length ) {
	          return new Parole(function (resolve, reject) {
	            getInterceptorsProcessor(req_error_interceptors, resolve, reject, true)(reason);
	          });
	        } else throw reason;
	      })
	      .then(function (config) {
	        return new Parole(function (resolve, reject) {
	          makeRequest(config,
	            res_interceptors.length ? getInterceptorsProcessor(res_interceptors, resolve, reject) : resolve,
	            res_error_interceptors.length ? getInterceptorsProcessor(res_error_interceptors, resolve, reject) : reject
	          );
	        });
	      });

	  request.config = config;

	  return request;
	}

	http.responseData = function (response) {
	  return response.data;
	};

	function httpBase (target, options, options_pile) {
	  var requestMethod = function (method, hasData) {
	        return hasData ? function (url, data, _options) {
	          if( typeof url === 'object' ) { _options = data; data = url; url = null; }
	          _options = Object.create(_options || {});
	          if( url ) _options.url = url;
	          _options = _plainOptions( _options ? options_pile.concat(_options) : options_pile, method );
	          return http( _options.url, _options, data );
	        } : function (url, _options, params) {
	          if( typeof url === 'object' ) { params = _options; _options = url; url = null; }
	          _options = Object.create(_options || {});
	          if( url ) _options.url = url;
	          if( params ) _options.params = params;
	          _options = _plainOptions( _options ? options_pile.concat(_options) : options_pile, method );
	          return http( _options.url, _options );
	        };
	      };

	  return extend(target, {
	    head: requestMethod('head'),
	    get: requestMethod('get'),
	    post: requestMethod('post', true),
	    put: requestMethod('put', true),
	    patch: requestMethod('patch', true),
	    delete: requestMethod('delete'),
	    base: function (url, _options) {
	      var options = _options ? Object.create(_options) :{};
	      options.url = url;
	      return httpBase( requestMethod('get'), options, options_pile.concat(options) );
	    },
	    config: function (_options) {
	      if( options === undefined ) return _plainOptions( this.options_pile.concat(options) );
	      merge( options, _options );
	    },
	    addInterceptor: function (interceptor_definitions) {
	      options.interceptors = options.interceptors || [];
	      options.interceptors.push(interceptor_definitions);
	    },
	    responseData: http.responseData,
	  });
	}

	http.base = httpBase;
	httpBase(http, http_defaults, []);

	http.usePromise = function (P) { Parole = P; return http; };
	http.useRequest = function (request) {
	  if( !isFunction(request) ) throw new Error('request should be a function');
	  else makeRequest = request;
	  return http;
	};

	http.config = function (options) {
	  merge( http_defaults, options );
	  return http;
	};

	/* global ActiveXObject */

	var parseData = {
	  json: function (data) {
	    return JSON.parse(data);
	  }
	};

	function _getXMLHeaders (request) {
	  var headers = {};
	  request.getAllResponseHeaders().split('\n').forEach(function (headerLine) {
	    var matched = headerLine.match(/(.*?):(.*)/);
	    if( matched ) {
	      headers[toUnderscoreCase(matched[1])] = matched[2].trim();
	    }
	  });

	  return headers;
	}

	function xmlRequest (config, resolve, reject) {

	  var request = null;

	  try { // Firefox, Opera 8.0+, Safari
	    request = new XMLHttpRequest();
	  } catch (e) { // Internet Explorer
	    try { request = new ActiveXObject('Msxml2.XMLHTTP'); }  // jshint ignore:line
	    catch (er) { request = new ActiveXObject('Microsoft.XMLHTTP'); }  // jshint ignore:line
	  }
	  if( request === null ) { throw 'Browser does not support HTTP Request'; }

	  if( config.withCredentials || config.credentials === 'include' ) request.withCredentials = true;

	  request.onreadystatechange = function() {
	    if( request.readyState === 'complete' || request.readyState === 4 ) {
	      // var type = parseContentType( request.getResponseHeader('Content-Type') ),
	      var headers = _getXMLHeaders(request),
	          type = parseContentType( headers.content_type ),
	          response = {
	            config: config,
	            status: request.status,
	            statusText: request.statusText,
	            headers: headers,
	            data: type === 'xml' ? request.responseXML : (parseData[type] ? parseData[type](request.responseText) : request.responseText),
	          };

	      if( request.status >= 200 && request.status < 400 ) {
	        resolve( response );
	      } else {
	        reject( response );
	      }
	    }
	  };

	  request.open(config.method, config.url, true);

	  if( config.headers ) {
	    for( var key in config.headers ) {
	      request.setRequestHeader( key, config.headers[key] );
	    }
	  }

	  request.send( config.body );
	}

	http.useRequest(xmlRequest);

	var browser = http;

	/* globals aplazame */

	function whenAplazameReady () {

	  var country = document.body.getAttribute('data-country');
	  var choices = document.querySelectorAll('.article-type-choices .article-type input');

	  function amount2string (amount) {
	    var cents = amount%100;
	    var centsSeparator = country==='MX' ? '.':',';
	    return parseInt(amount/100) + centsSeparator + ( cents < 10 ? '0' : '' ) + cents;
	  }

	  function toCurrency (amount) {
	    if( amount < 0 ) {
	      return '-' + toCurrency(-amount);
	    }
	    return (country==='MX' ? '$':'') + amount2string(amount) + (country==='MX' ? '':'€');
	  }

	  // console.log('price', price);

	  [].forEach.call(choices, function (choice) {
	    choice.addEventListener('change', function (_e) {
	      var price = document.querySelector('[itemprop="price"]'),
	          factor = Number( price.getAttribute('data-price-' + this.value) ) || 1;

	      price.textContent = toCurrency( ( price ? Number( price.getAttribute('content') ) : 0 ) * factor );

	      // console.log('change', this, e, this.value, factor, toCurrency( priceCents * factor ) );

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
	      var param = part.match(/(.*?)=(.*)/);
	      if( param ) {
	        params[param[1].trim()] = param[2].trim();
	      }
	    });
	  }

	  // console.log('params', location.search.replace(/^\?/, '').split('&')[0].match(/(.*?)\=(.*)/) );

	  var checkoutData = browser(params['checkout-json']);

	  browser.usePromise(parole);

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

	      if( !orderId ) {
	        orderId = randOrderId();
	        location.hash = '/order/' + orderId;
	      }

	      data.order.id = orderId;

	      data.merchant.public_api_key = document.body.getAttribute('data-public-key');
	      data.merchant.sandbox = true;

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
	      var checkout_url = aplazame.info().api.checkout_url;
	      
	      if( window.location.search ) aplazame.info().api.checkout_url = checkout_url + (/\?/.test(checkout_url) ? '&' : '?' ) + window.location.search.substr(1);

	      aplazame.checkout(data, {
	        onStatusChange: function (status) {
	          console.log('onStatusChange', status);
	        },
	        onClose: function (result_status) {
	          console.log('onClose', result_status);
	        },
	      });
	    });

	  };

	  // setTimeout(function () {
	  //
	  //   var widget_wrapper = document.createElement('div');
	  //   widget_wrapper.setAttribute('data-aplazame-simulator', '');
	  //   widget_wrapper.setAttribute('data-amount', '1234');
	  //   widget_wrapper.setAttribute('data-qty', 'form.details input[name=\'qty\']');
	  //   document.body.appendChild(widget_wrapper);
	  //
	  // }, 3000);

	}

	window.apzReady = whenAplazameReady;

	// aplazame._.ready();

}());
