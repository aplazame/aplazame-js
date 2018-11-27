(function () {
	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	function getCjsExportFromNamespace (n) {
		return n && n.default || n;
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

	function getErrorObject(){
	  try { throw Error('Stack'); } catch(err) { return err; }
	}

	// function shortDate (d) {
	//   return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ''
	// }

	var history = [],
	    start_time = new Date().getTime(),
	    log_colors = {
	      info: '#277bbd',
	      debug: 'purple',
	    };

	function dumpSingleLog (l) {
	  var log_type = l.type || 'info';
	  // if( l.type === 'error' ) line1_color = 'FireBrick';
	  // console.log('%c' + new Date + ' (' + (l.time.getTime() - start_time) + 'ms)' , 'color: #333a3e; font-weight: 500; font-style: italic;');
	  console.groupCollapsed('%c' + l.time.toISOString() + ' (' + (l.time.getTime() - start_time) + 'ms)' , 'color: #333a3e; font-weight: 500; font-style: italic;');
	  console.log(l.stack.join('\n'));
	  console.groupEnd();

	  if( log_type === 'error' && console.error ) {
	    console.error.apply(console, l.args);
	  } else if( log_type === 'warn' && console.error ) {
	    console.warn.apply(console, l.args);
	  } else {
	    console.log.apply(console, [
	      '%c' + l.args[0], 'color: ' + log_colors[log_type] + '; font-weight: bold;'
	    ].concat( l.args.slice(1) ) );
	  }
	}

	function log () {
	  var err = getErrorObject(),
	      caller_line = err.stack.split('\n')[4] || '',
	      index = caller_line.indexOf('at ');

	  var l = {
	    time: new Date(),
	    args: [].slice.call(arguments),
	    track: {
	      caller_line: caller_line,
	      index: index,
	      clean: caller_line.slice(index + 2, caller_line.length),
	    },
	    stack: (err && err.stack.split(/\n/) || []).slice(3).map(function (line) {
	      return line.trim();
	    }, []),
	  };

	  if( this.type ) l.type = this.type;

	  history.push(l);
	  // dumpSingleLog(l);
	}

	log.warn = log.bind({ type: 'warn' });
	log.debug = log.bind({ type: 'debug' });
	log.error = log.bind({ type: 'error' });

	log.dump = function () {
	  history.forEach(dumpSingleLog);
	};

	log.history = history;

	// 

	function runInSandbox(func) {
	  try{ func(); }
	  catch(err) {
	    log.error('[error]', err);
	  }
	}

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

	var aplazameVersion = '0.0.496';

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

	var type = {
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

	var arrayShift = [].shift;

	var _extend = function extend () {
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

	var arrayShift$1 = [].shift;

	function _merge () {
	    var dest = arrayShift$1.call(arguments),
	        src = arrayShift$1.call(arguments),
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
	      src = arrayShift$1.call(arguments);
	    }

	    return dest;
	}

	function mapObject$1 (o, iteratee) {
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
	    return mapObject$1(src, function (item) {
	      return _copy(item);
	    });
	  }

	  return src;
	}

	var extend$1 = {
	  extend: _extend,
	  merge: _merge,
	  copy: _copy
	};

	if (!Date.now) {
	  Date.now = function now() {
	    return new Date().getTime();
	  };
	}

	var date = /*#__PURE__*/Object.freeze({

	});

	if( !Element.prototype.closest ) {
	  Element.prototype.closest = function (selector) {
	    var el = this;

	    while( el ) {
	      if( el.matchesSelector(selector) ) {
	        break;
	      }
	      el = el.parentElement;
	    }
	    return el;
	  };
	}

	var domClosest = /*#__PURE__*/Object.freeze({

	});

	if( !Element.prototype.addEventListener ) {
	  if( Element.prototype.attachEvent ) {
	    Element.prototype.addEventListener = function (eventName, listener) {
	      return Element.prototype.attachEvent( 'on' + eventName, listener );
	    };
	    Element.prototype.removeEventListener = function (eventName, listener) {
	      return Element.prototype.detachEvent( 'on' + eventName, listener );
	    };
	  } else {
	    throw 'Browser not compatible with element events';
	  }
	}

	var eventListener = /*#__PURE__*/Object.freeze({

	});

	(function (root) {

	  root.matchMedia = root.matchMedia || root.webkitMatchMedia || root.mozMatchMedia || root.msMatchMedia;
	})(window);

	var matchMedia = /*#__PURE__*/Object.freeze({

	});

	if( !Element.prototype.matchesSelector ) {
	  Element.prototype.matchesSelector = (
	    Element.prototype.webkitMatchesSelector ||
	    Element.prototype.mozMatchesSelector ||
	    Element.prototype.msMatchesSelector ||
	    Element.prototype.oMatchesSelector
	  );
	}

	var matchesSelector = /*#__PURE__*/Object.freeze({

	});

	getCjsExportFromNamespace(date);

	getCjsExportFromNamespace(domClosest);

	getCjsExportFromNamespace(eventListener);

	getCjsExportFromNamespace(matchMedia);

	getCjsExportFromNamespace(matchesSelector);

	function _key (o, _key, value){
	    if( !type.isObject(o) ) {
				return undefined;
			}

	    var keys = _key.split('.'),
	        key = keys.shift();

	    if( value === undefined ) {
	      while (key) {
	        if( type.isObject(o) && key in o ) {
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

	var key = {
	  key: _key,
	  keys: Object.keys
	};

	var RE_dotsBack = /[^/]+\/\.\.\//g,
		clearStr = function () { return ''; };

	function _joinPath () {
	    var path = (arguments[0] || '').replace(/\/$/, '');

	    for( var i = 1, last = arguments.length - 1 ; i < last ; i++ ) {
	        path += '/' + arguments[i].replace(/^\/|\/$/g, '');
	    }
	    if( last ) {
	        path += arguments[last] ? ( '/' + arguments[last].replace(/^\//, '') ) : '';
	    }

	    while( RE_dotsBack.test(path) ) {
				path = path.replace(RE_dotsBack, clearStr);
	    }

	    return path;
	}

	var path = {
	  joinPath: _joinPath
	};

	var _eval = function (expression) {

	  /* jshint ignore:start */
	  var fn = new Function('model', 'try{ with(model) { return (' + expression + ') }; } catch(err) { return \'\'; }');
	  /* jshint ignore:end */
	  return function (model, thisArg) {
	    return fn.call(thisArg, model);
	  };
	};

	var Scope = function (data) {
		if(!this) {
			return new Scope(data);
		}

	  this.extend(data || {});
	};

	Scope.prototype.new = function(data) {
	    return Object.create(this).extend(data);
	};

	Scope.prototype.extend = function(data) {
	  for( var key in data ) {
	    this[key] = data[key];
	  }
	  return this;
	};

	Scope.prototype.eval = function ( expression, thisArg ) {
	  return _eval(expression)(this, thisArg);
	};

	var scope = Scope;

	/**
	 * https://github.com/gre/bezier-easing
	 * BezierEasing - use bezier curve for transition easing function
	 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
	 */

	// These values are established by empiricism with tests (tradeoff: performance VS precision)
	var NEWTON_ITERATIONS = 4;
	var NEWTON_MIN_SLOPE = 0.001;
	var SUBDIVISION_PRECISION = 0.0000001;
	var SUBDIVISION_MAX_ITERATIONS = 10;

	var kSplineTableSize = 11;
	var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

	var float32ArraySupported = typeof Float32Array === 'function';

	function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
	function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
	function C (aA1)      { return 3.0 * aA1; }

	// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
	function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

	// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
	function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

	function binarySubdivide (aX, aA, aB, mX1, mX2) {
	  var currentX, currentT, i = 0;
	  do {
	    currentT = aA + (aB - aA) / 2.0;
	    currentX = calcBezier(currentT, mX1, mX2) - aX;
	    if (currentX > 0.0) {
	      aB = currentT;
	    } else {
	      aA = currentT;
	    }
	  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
	  return currentT;
	}

	function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
	 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
	   var currentSlope = getSlope(aGuessT, mX1, mX2);
	   if (currentSlope === 0.0) {
	     return aGuessT;
	   }
	   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
	   aGuessT -= currentX / currentSlope;
	 }
	 return aGuessT;
	}

	var src = function bezier (mX1, mY1, mX2, mY2) {
	  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
	    throw new Error('bezier x values must be in [0, 1] range');
	  }

	  // Precompute samples table
	  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
	  if (mX1 !== mY1 || mX2 !== mY2) {
	    for (var i = 0; i < kSplineTableSize; ++i) {
	      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
	    }
	  }

	  function getTForX (aX) {
	    var intervalStart = 0.0;
	    var currentSample = 1;
	    var lastSample = kSplineTableSize - 1;

	    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
	      intervalStart += kSampleStepSize;
	    }
	    --currentSample;

	    // Interpolate to provide an initial guess for t
	    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
	    var guessForT = intervalStart + dist * kSampleStepSize;

	    var initialSlope = getSlope(guessForT, mX1, mX2);
	    if (initialSlope >= NEWTON_MIN_SLOPE) {
	      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
	    } else if (initialSlope === 0.0) {
	      return guessForT;
	    } else {
	      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
	    }
	  }

	  return function BezierEasing (x) {
	    if (mX1 === mY1 && mX2 === mY2) {
	      return x; // linear
	    }
	    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
	    if (x === 0) {
	      return 0;
	    }
	    if (x === 1) {
	      return 1;
	    }
	    return calcBezier(getTForX(x), mY1, mY2);
	  };
	};

	var timingFunctions = {},
	    noop = function () {},
	    getTimingFunction = function (timingFunctionName) {
	      if( !timingFunctions[timingFunctionName] ) {
	        if( timingFunctionName === 'linear' ) {
	          timingFunctions[timingFunctionName] = function ( value ) { return value; };
	        } else if( timingFunctionName === 'ease' ) {
	          timingFunctions[timingFunctionName] = src(.17,.67,.83,.67);
	        } else if( timingFunctionName === 'ease-in' ) {
	          timingFunctions[timingFunctionName] = src(.42,0,1,1);
	        } else if( timingFunctionName === 'ease-out' ) {
	          timingFunctions[timingFunctionName] = src(0,0,.58,1);
	        } else if( timingFunctionName === 'ease-in-out' ) {
	          timingFunctions[timingFunctionName] = src(.42,0,.58,1);
	        }
	      }
	      return timingFunctions[timingFunctionName];
	    },
	    _requestAnimationFrame = window.requestAnimationFrame,
	    // eslint-disable-next-line
	    _cancelAnimationFrame = window.cancelAnimationFrame,
	    animation_polyfilled = false;

	// FROM: https://gist.github.com/paulirish/1579671
	if( !_requestAnimationFrame ) (function () {
	  var lastTime = 0;
	  var vendors = ['ms', 'moz', 'webkit', 'o'];
	  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	      _requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
	      _cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
	                                 || window[vendors[x]+'CancelRequestAnimationFrame'];
	  }

	  if( !_requestAnimationFrame ) {
	    animation_polyfilled = true;
	    _requestAnimationFrame = function(callback, _element) {
	      var currTime = new Date().getTime();
	      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	      var id = window.setTimeout(function() { callback(currTime + timeToCall); },
	      timeToCall);
	      lastTime = currTime + timeToCall;
	      return id;
	    };

	    _cancelAnimationFrame = function(id) {
	      clearTimeout(id);
	    };
	  }
	})();

	// FROM: https://gist.github.com/paulirish/5438650
	(function(){

	  if ('performance' in window == false) {
	      window.performance = {};
	  }

	  Date.now = (Date.now || function () {  // thanks IE8
	    return new Date().getTime();
	  });

	  if ('now' in window.performance == false){

	    var nowOffset = Date.now();

	    if (performance.timing && performance.timing.navigationStart){
	      nowOffset = performance.timing.navigationStart;
	    }

	    window.performance.now = function now(){
	      return Date.now() - nowOffset;
	    };
	  }

	})();

	function animate (progressFn, duration, atEnd, timingFunctionName) {
	  var aux;
	  if ( duration instanceof Function ) {
	    if ( typeof atEnd === 'number' ) {
	      aux = duration;
	      duration = atEnd;
	      atEnd = aux;
	    } else {
	      atEnd = duration;
	      duration = 400;
	    }
	  } else if ( duration === undefined ) {
	    duration = 400;
	  }

	  timingFunctionName = timingFunctionName || ( typeof atEnd === 'string' ? atEnd : ( typeof duration === 'string' ? duration : 'ease' ) );

	  progressFn(duration === 0 ? 1 : 0);

	  var start, frame_id,
	      timingFunction = getTimingFunction(timingFunctionName),
	      deferred = parole.defer();

	  if( duration > 0 ) {
	    start = animation_polyfilled ? new Date().getTime() : performance.now();

	    frame_id = _requestAnimationFrame(function step() {
	      var elapsed = performance.now() - start;

	      if( elapsed >= duration ) {
	        progressFn(1);
	        deferred.resolve();
	        (atEnd || noop)();
	      } else {
	        progressFn( timingFunction(elapsed/duration) );
	        frame_id = _requestAnimationFrame(step);
	      }
	    });
	  } else setTimeout(deferred.resolve, 0);

	  deferred.promise.stop = function (reject) {
	    _cancelAnimationFrame(frame_id);
	    if( reject ) deferred.reject();
	  };

	  return deferred.promise;
	}

	animate.time = function (el) {
	  var time = 0;
	  var duration = window.getComputedStyle(el).animationDuration;
	  if( duration ) {
	    duration.replace(/([0-9](\.[0-9])?)(m)?s/, function (matched, t, decimals, ms) {
	      time += ms ? Number(t) : Number(t)*1000;
	    });
	  }
	  if( window.getComputedStyle(el).animationDelay ) {
	    window.getComputedStyle(el).animationDelay.replace(/([0-9](\.[0-9])?)(m)?s/, function (matched, t, decimals, ms) {
	      time += ms ? Number(t) : Number(t)*1000;
	    });
	  }
	  duration = window.getComputedStyle(el).transitionDuration;
	  if( duration ) {
	    duration.replace(/([0-9](\.[0-9])?)(m)?s/, function (matched, t, decimals, ms) {
	      t = ms ? Number(t) : Number(t)*1000;
	      if( t > time ) {
	        time = t;
	      }
	    });
	  }
	  // console.log('animationTime', el, time);
	  return time;
	};

	var animate_1 = animate;

	var wait = function (delay, callback) {
			if( delay instanceof Function ) {
				delay = [callback, callback = delay][0];
			}
			if( callback && !(callback instanceof Function) ) {
				throw new Error('callback should be a Function');
			}
			if( typeof delay !== 'number' ) {
				throw new Error('delay should be a Number');
			}
			return new parole(function (resolve) {
				setTimeout(function () {
					resolve();
					if( callback ) {
						callback();
					}
				}, delay);
			});
		};

	var wait_1 = wait;

	var readyListeners = [],
	    initReady = function () {
	      var listeners = readyListeners;
	      readyListeners = undefined;
	      [].forEach.call(listeners, function (cb) { cb(); });
	      document.removeEventListener('DOMContentLoaded', initReady);
	      window.removeEventListener('load', initReady);
	    };

	document.addEventListener('DOMContentLoaded', initReady);
	window.addEventListener('load', initReady);

	function ready (callback) {
	  if( callback instanceof Function ) {
	    if( readyListeners ) {
	      readyListeners.push(callback);
	    } else {
	      callback();
	    }
	  }
	}

	var ready_1 = ready;

	function template (name, data){
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

	var template_1 = template;

	function once (fn, nextValue) {
	  var result, hasNextValue = arguments.length > 1;
	  return function () {
	    if( fn ) {
	      result = fn.apply(this, arguments);
	      fn = null;
	      return result;
	    }
	    return hasNextValue ? nextValue : result;
	  };
	}

	var once_1 = once;

	function debounce (fn, timeslot) {
	  timeslot = timeslot || 80;

	  var timer = null;

	  return function () {
	    var _this = this, args = arguments;

	    if( timer ) {
	      clearTimeout(timer);
	      timer = null;
	    }

	    timer = setTimeout(function () {
	      fn.apply(_this, args);
	    }, timeslot);
	  };
	}

	var debounce_1 = debounce;

	var events = {
	  on: function (el, eventName, handler, useCapture) {
	    if( typeof el === 'string' ) {
	      return document.documentElement.addEventListener(el, eventName, handler);
	    }
	    return el.addEventListener(eventName, handler, useCapture);
	  },
	  off: function (el, eventName, handler, useCapture) {
	    if( typeof el === 'string' ) {
	      return document.documentElement.removeEventListener(el, eventName, handler);
	    }
	    return el.removeEventListener(eventName, handler, useCapture);
	  },
	  triggerEvent: document.createEvent ? function (element, eventName, data) {
	    var event = document.createEvent('HTMLEvents');
	    event.data = data;
	    event.initEvent(eventName, true, true);
	    element.dispatchEvent(event);
	    return event;
	  } : function (element, eventName, data) {
	    var event = document.createEventObject();
	    event.data = data;
	    element.fireEvent('on' + eventName, event);
	    return event;
	  }
	};

	var classListEnabled = !!document.createElement('div').classList;

	var classListHas = classListEnabled ? function (el, className) {
	      return el.classList.contains(className);
	    } : function (el, className) {
	      return new RegExp('\\b' + (className || '') + '\\b','').test(el.className);
	    },
	    classListAdd = classListEnabled ? function (el, className) {
	      el.classList.add(className);
	    } : function (el, className) {
	      if( !classListHas(el, className) ) {
	        el.className += ' ' + className;
	      }
	    },
	    classListRemove = classListEnabled ? function (el, className) {
	      el.classList.remove(className);
	    } : function (el, className) {
	      el.className = el.className.replace(new RegExp('\\s*' + className + '\\s*','g'), ' ');
	    },
	    classListToggle = classListEnabled ? (function () {
	      var aux = document.createElement('span');
	      aux.classList.toggle('test', true);
	      aux.classList.toggle('test', true);

	      // IE does not support second parameter toggle
	      return aux.classList.contains('test') ? function (el, className, toggle) {
	        el.classList.toggle(className, toggle);
	      } : function (el, className, toggle) {
	        toggle = toggle === undefined ? !el.classList.contains(className) : toggle;
	        if( toggle ) el.classList.add(className);
	        else el.classList.remove(className);
	      };
	    })() : function (el, className) {
	      el.className = el.className.replace(new RegExp('\\s*' + className + '\\s*','g'), ' ');
	    };

	function _formKey(o, key, value) {
	  var keys = key.replace(/\[(.*?)\]/g, '.$1').split('.'),
	      last_i = keys.length - 1;
	  keys.forEach(function (_key, i) {
	    if( i === last_i ) return o[_key] = value;
	    o[_key] = o[_key] || {};
	    o = o[_key];
	  });
	}

	function _currentScriptAlt () {
	 var scripts = document.getElementsByTagName('script');
	 return scripts[scripts.length - 1];
	}

	var _dom = {
	  classList: { add: classListAdd, remove: classListRemove, has: classListHas, toggle: classListToggle },
	  addClass: classListAdd,
	  removeClass: classListRemove,
	  hasClass: classListHas,
	  toggleClass: classListToggle,
	  create: function (tagName, attrs) {
	    var el = document.createElement(tagName);

	    if( attrs ) {
	      if( attrs.html ) {
	        el.innerHTML = attrs.html;
	      }
	      for( var attr in attrs ) {
	        if( attr !== 'html' ) {
	          el[attr] = attrs[attr];
	        }
	      }
	    }
	    return el;
	  },
	  attr: function (el, name, value) {
	    if( !(el instanceof Element) && el[0] instanceof Element ) {
	      el = el[0];
	    }
	    if( value !== undefined ) {
	      el.setAttribute(name, value);
	    }
	    return el.getAttribute(name);
	  },
	  tmpClass: function (el, className, duration, cb) {
	    var isCollection = !(el instanceof Element ) && el.length;

	    if( isCollection ) {
	      [].forEach.call(el, function (_el) {
	        classListAdd(_el, className);
	      });
	    } else {
	      classListAdd(el, className);
	    }
	    setTimeout(function () {
	      if( isCollection ) {
	        [].forEach.call(el, function (_el) {
	          classListRemove(_el, className);
	        });
	      } else {
	        classListRemove(el, className);
	      }
	      if( cb instanceof Function ) {
	        cb();
	      }
	    }, duration instanceof Function ? duration() : duration );
	  },
	  formParams: function (form) {
	    if( !(form instanceof Element) && form.length ) {
	      form = form[0];
	    }

	    var data = {};
	    [].forEach.call(form.elements, function (el) {
	      if( el.name && !el.disabled ) {
	        if( el.type === 'checkbox' ) {
	          _formKey(data, el.name, el.checked);
	        } else if( el.type === 'radio' ) {
	          if( el.checked ) {
	            _formKey(data, el.name, el.value);
	          }
	        } else {
	          _formKey(data, el.name, el.value);
	        }
	      }
	    });
	    return data;
	  },
	  currentScript: function () {
	    return document.currentScript || _currentScriptAlt();
	  },
	};

	var dom = _dom;

	var normalize = {
	  isTouchDevice: 'ontouchstart' in document.documentElement,
	  isMac: /^Mac/.test(navigator.platform),
	  isAndroid: /^Android/.test(navigator.platform),
	  addHTMLClasses: function () {
	    var _ = dom;

	    _.addClass(document.documentElement, normalize.isTouchDevice ? 'touch' : 'no-touch' );
	    if( normalize.isMac ) {
	      _.addClass(document.documentElement, 'is-mac');
	    }
	    if( normalize.isAndroid ) {
	      _.addClass(document.documentElement, 'is-android');
	    }
	  }
	};

	var normalize_1 = normalize;

	var html = document.documentElement, scroll_root = document.scrollingElement;
	var supports_passive = false;
	try {
	  var opts = Object.defineProperty({}, 'passive', {
	    get: function() {
	      supports_passive = true;
	    }
	  });
	  window.addEventListener('testPassive', null, opts);
	  window.removeEventListener('testPassive', null, opts);
	} catch (e) {} // eslint-disable-line

	function setScrollRoot(scrolling_element) {
	  scroll_root = scrolling_element;
	  scroll.goto = setScrollTopRoot;
	  scroll.top = getScrollTopRoot;
	}

	function setScrollTopRoot (scroll_value) {
	  scroll_root.scrollTop = scroll_value;
	}

	function getScrollTopRoot () {
	  return scroll_root.scrollTop;
	}

	function setScrollTopDiscover (scroll_value) {
	  if( scroll_value > 0 ) {
	    html.scrollTop = scroll_value;
	    if( document.body ) document.body.scrollTop = scroll_value;
	    if( scroll_value === html.scrollTop ) setScrollRoot(html);
	    else if( document.body && scroll_value === document.body.scrollTop ) setScrollRoot(document.body);
	  } else {
	    html.scrollTop = 0;
	    if( document.body ) document.body.scrollTop = 0;
	  }
	}

	function getScrollTopDiscover () {
	  if( document.body && document.body.scrollTop !== 0 ) {
	    setScrollRoot(document.body);
	    return document.body.scrollTop;
	  }
	  if( html.scrollTop !== 0 ) {
	    setScrollRoot(html);
	    return html.scrollTop;
	  }
	}

	var scroll = {
	  on: function ( handler, use_capture ) {
	    return document.addEventListener('scroll', handler, supports_passive ? { passive: supports_passive, capture: use_capture } : use_capture );
	  },
	  off: function ( handler, use_capture ) {
	    return document.removeEventListener('scroll', handler, supports_passive ? { passive: supports_passive, capture: use_capture } : use_capture );
	  },
	  top: scroll_root ? getScrollTopRoot : getScrollTopDiscover,
	  goto: scroll_root ? setScrollTopRoot : setScrollTopDiscover,
	};

	var scroll_1 = scroll;

	var topClass = function (scroll) {

		var ready = ready_1;

		scroll.autoTopClass = function (topClass, topClassAlt) {

			topClass = topClass || 'js-scroll-top';
			topClassAlt = topClassAlt || 'js-no-scroll-top';

	    ready(function () {
	      var _ = dom;
	      scroll.on(function () {
	        _.toggleClass(document.documentElement, topClass,
	          !_.toggleClass(document.documentElement, topClassAlt, scroll.top() )
	        );
	      });
	    });
		};

	};

	var animate$1 = function (scroll) {

		var animate = animate_1,
				Parole = parole,
				noop = function() {},
				scrollAnimation = animate(noop, 0),
				aux;

		scroll.animation = function () {
			return scrollAnimation;
		};

		scroll.animateTo = function (value, cb, duration ) {
			var scrollFrom = scroll.top();

			if( value === undefined ) {
				return Parole.reject();
			}
			if( value instanceof Element ) {
				// position from top of the page
				value = value.getBoundingClientRect().top + scrollFrom;
			}

			if( typeof cb === 'number' ) {
				aux = duration;
				duration = cb;
				cb = typeof aux === 'function' ? aux : noop;
			}

			var scrollDelta = value - scrollFrom;

			scrollAnimation.stop();
			scroll.inAnimation = true;
			scrollAnimation = animate(function (progress) {
				scroll.goto( scrollFrom + scrollDelta*progress );
			}, function () {
				scroll.inAnimation = false;
				(cb || noop)();
			}, duration || 350, 'ease-out');

			return scrollAnimation;
		};

		return scroll;
	};

	topClass(scroll_1);
	animate$1(scroll_1);

	var bundle = scroll_1;

	function _ (selector, source) {
	  return source && typeof source === 'string' ?
			selector.querySelector(source) :
			(source || document).querySelector(selector);
	}

	_.noop = function (value) { return value; };
	_.once = function (fn) {
	  return function () {
	    if( fn ) fn.apply(this, arguments);
	    fn = null;
	  };
	};
	_.now = Date.now ? function () {
	  return Date.now();
	} : function () {
	  return new Date().getTime();
	};

	_.usePolyfills = _.once(function () {
	  
	});

	_.q = parole;

	extend$1.extend(_, extend$1,
	  key,
	  type,
	  path
	);

	_.Scope = scope;

	_.extend(_, {
		animate: animate_1,
		wait: wait_1
	});

	_.extend(_, {
		ready: ready_1,
		template: template_1,
		once: once_1,
		debounce: debounce_1
	});

	_.extend(_,
	  events,
		// _.on(el, eventName, handler, useCapture)
		// _.off(el, eventName, handler, useCapture)
		// _.triggerEvent(element, eventName, data)

	  dom
	  // _.create(tagName, attrs)
		// _.attr(el, name, value)
	  // _.tmpClass(el, className, duration, cb)
	);

	_.extend(_, {
		normalize: normalize_1,
		// _.touchDevice === true | false
		// _.isMac === true | false
		// _.isAndroid === true | false

		scroll: bundle // scroll is not available until document is ready
		// _.scroll.on( handler, useCapture )
		// _.scroll.off( handler, useCapture )
		// _.scroll.top()
		// _.scroll.goto(value)
		// _.scroll.animateTo(value | HTMLElement, callback, duration): Promise
		// _,scroll.inAnimation === true | false
	});

	var bundle$1 = _;

	function _isType$1 (type) {
	    return function (o) {
	        return (typeof o === type);
	    };
	}

	function _instanceOf$1 (_constructor) {
	    return function (o) {
	        return ( o instanceof _constructor );
	    };
	}

	var type$1 = {
	  isType: function (type, value) {
	    if( value === undefined ) {
	      return _isType$1(type);
	    }
	    return _isType$1(type)(value);
	  },
	  instanceOf: function (Proto, value) {
	    if( value === undefined ) {
	      return _instanceOf$1(Proto);
	    }
	    return _instanceOf$1(Proto)(value);
	  },
	  isObject: function (o) {
	    return typeof o === 'object' && o !== null;
	  },
		isFunction: _isType$1('function'),
		isString: _isType$1('string'),
		isNumber: _isType$1('number'),
		isArray: Array.isArray || _instanceOf$1(Array),
		isDate: _instanceOf$1(Date),
		isRegExp: _instanceOf$1(RegExp),
		isElement: function(o) {
	    return o && o.nodeType === 1;
	  },
	  isUndefined: function (value) {
	    return value === undefined;
	  }
	};

	var arrSome = Array.prototype.some,
	    arrEvery = Array.prototype.every,
	    arrForEach = Array.prototype.forEach,
	    arrMap = Array.prototype.map,
	    arrIndexOf = Array.prototype.indexOf;

	function _eachInObject( o, iteratee, thisArg ) {
	  for( var key in o ) {
	    iteratee.call(thisArg, [o[key], key]);
	  }
	}

	function _matchAll (o, filters) {
	  for( var key in filters ) {
	    if( o[key] !== filters[key] ) {
	      return false;
	    }
	  }
	  return true;
	}

	function _matchAny (o, filters) {
	  for( var key in filters ) {
	    if( o[key] === filters[key] ) {
	      return true;
	    }
	  }
	  return false;
	}

	function _iterateeFn (iteratee) {
	  if( type$1.isFunction(iteratee) ) {
	    return iteratee;
	  }

	  if( type$1.isObject(iteratee) ) {
	    return function (item) {
	      return _matchAll(item, iteratee);
	    };
	  }

	  return function (item) {
	    return item === iteratee;
	  };
	}

	// -----------------------------------------

	function each (o, iteratee, thisArg) {
	  if( o && o.length ) {
	    arrForEach.call(o, iteratee, thisArg);
	  } else if( type$1.isObject(o) ) {
	    _eachInObject(o, iteratee, thisArg || this);
	  }
	}

	function indexOf (list, iteratee, thisArg) {
	  if( !type$1.isFunction(iteratee) ) {
	    return arrIndexOf.call(list, iteratee, thisArg);
	  }

	  for( var i = 0, n = list.length; i < n ; i++ ) {
	    if( iteratee.call(thisArg, list[i], i) ) {
	      return i;
	    }
	  }
	  return -1;
	}

	function _indexBy (list, iteratee, thisArg) {
	  var map = {};

		for( var i = 0, len = list.length; i < len; i++ ) {
	    map[iteratee.call(thisArg, list[i], i)] = list[i];
	  }
	  return map;
	}

	function indexBy (list, iteratee, thisArg) {
		if( type$1.isString(iteratee) ) {
			return _indexBy(list, function (item) { return item[iteratee]; }, thisArg);
		} else if( type$1.isFunction(iteratee) ) {
			return _indexBy(list, iteratee, thisArg);
		}
		return {};
	}

	function some (list, iteratee, thisArg) {
	  iteratee = _iterateeFn(iteratee);

	  if( list && list.length ) {
	    return arrSome.call(list, iteratee, thisArg);
	  } else if( type$1.isObject(list) ) {
	    for( var key in list )  {
	      if( iteratee.call(thisArg, list[key], key) ) {
	        return true;
	      }
	    }
	    return false;
	  }
	}
	function every (list, iteratee, thisArg) {
	  iteratee = _iterateeFn(iteratee);

	  if( list && list.length ) {
	    return arrEvery.call(list, iteratee, thisArg);
	  } else if( type$1.isObject(list) ) {
	    for( var key in list )  {
	      if( !iteratee.call(thisArg, list[key], key) ) {
	        return false;
	      }
	    }
	    return true;
	  }
	}
	function map (list, _iteratee, thisArg) {
	  var iteratee = type$1.isString(_iteratee) ? function (item) { return item[_iteratee]; } : _iteratee;

	  if( list && list.length ) {
	    return arrMap.call(list, iteratee, thisArg);
	  } else if( type$1.isObject(list) ) {
	    var result = {};
	    for( var key in list )  {
	      result[key] = iteratee.call(thisArg, list[key], key);
	    }
	    return result;
	  }
	}
	function map2List (list, iteratee, thisArg) {
	  if( list && list.length ) {
	    return arrMap.call(list, iteratee, thisArg);
	  }
	  var result = [], i = 0;
	  for( var key in list )  {
	    result[i++] = iteratee.call(thisArg, list[key], key);
	  }
	  return result;
	}
	function remove (list, iteratee, thisArg) {
	    thisArg = thisArg === undefined ? this : thisArg;

	    iteratee = _iterateeFn(iteratee);

	    for( var i = 0, len = list.length; i < len; i++ ) {
					if( iteratee.call(thisArg, list[i]) ) {
							list.splice(i, 1);
							i--;
					}
			}
	}

	function first (list, iteratee, thisArg) {
			thisArg = thisArg === undefined ? this : thisArg;

			iteratee = _iterateeFn(iteratee);

	    var i = arrIndexOf.call(list, iteratee, thisArg);

			for( var i = 0, len = list.length ; i < len ; i++ ) {
	        if( iteratee.call(thisArg, list[i]) ) {
	            return list[i];
	        }
	    }
	}

	function last (list, iteratee, thisArg) {
			thisArg = thisArg === undefined ? this : thisArg;

			iteratee = _iterateeFn(iteratee);

			for( var i = list.length - 1 ; i >= 0 ; i-- ) {
	        if( iteratee.call(thisArg, list[i]) ) {
	            return list[i];
	        }
	    }
	}

	function filter (list, iteratee, thisArg) {
	    var newList = [];

			thisArg = thisArg === undefined ? this : thisArg;
			iteratee = _iterateeFn(iteratee);

			for( var i = 0, len = list.length ; i < len ; i++ ) {
	        if( iteratee.call(thisArg, list[i]) ) {
	            newList.push(list[i]);
	        }
	    }

	    return newList;
	}

	var lists = {
	  _matchAll: _matchAll,
	  _matchAny: _matchAny,
	  find: first,
	  first: first,
	  last: last,
	  filter: filter,
	  each: each,
	  some: some,
	  every: every,
	  map: map,
	  pluck: map,
	  map2List: map2List,
	  indexOf: indexOf,
	  indexBy: indexBy,
	  remove: remove,
	  if: function (result, fn) {
	    if( result !== undefined && fn instanceof Function ) {
	      return fn(result);
	    }
	  }
	};

	var RE_dotsBack$1 = /[^\/]+\/\.\.\//g,
		clearStr$1 = function () { return ''; };

	function _joinPath$1 () {
	    var path = (arguments[0] || '').replace(/\/$/, '');

	    for( var i = 1, last = arguments.length - 1 ; i < last ; i++ ) {
	        path += '/' + arguments[i].replace(/^\/|\/$/g, '');
	    }
	    if( last ) {
	        path += arguments[last] ? ( '/' + arguments[last].replace(/^\//, '') ) : '';
	    }

	    while( RE_dotsBack$1.test(path) ) {
	    	path = path.replace(RE_dotsBack$1, clearStr$1);
	    }

	    return path;
	}

	var path$1 = {
	  joinPath: _joinPath$1
	};

	function hexToRgb(hex) {
	  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	  return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
	}

	function brightness (color) {
	  var rgb = hexToRgb(color);
	  var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) /1000);
	  return o < 100 ? 'dark' : ( o > 230 ? 'light' : 'medium' );
	}

	// https://css-tricks.com/snippets/javascript/lighten-darken-color/
	function lightenHEX (col, amt) {
	  var usePound = false;

	  if (col[0] === '#') {
	    col = col.slice(1);
	    usePound = true;
	  }

	  var num = parseInt(col,16);

	  var r = (num >> 16) + amt;

	  if (r > 255) r = 255;
	  else if  (r < 0) r = 0;

	  var b = ((num >> 8) & 0x00FF) + amt;

	  if (b > 255) b = 255;
	  else if  (b < 0) b = 0;

	  var g = (num & 0x0000FF) + amt;

	  if (g > 255) g = 255;
	  else if (g < 0) g = 0;

	  // return (usePound?'#':'') + (g | (b << 8) | (r << 16)).toString(16);
	  return (usePound?'#':'') + String('000000' + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);
	}

	var color_tools = {
	  hexToRgb: hexToRgb,
	  brightness: brightness,
	  lightenHEX: lightenHEX,
	};

	var arrayShift$2 = [].shift;

	var _extend$1 = function extend () {
	  var dest = arrayShift$2.call(arguments),
	      src = arrayShift$2.call(arguments),
	      key;

	  while( src ) {
	    for( key in src) {
	      dest[key] = src[key];
	    }
	    src = arrayShift$2.call(arguments);
	  }

	  return dest;
	};

	var arrayShift$3 = [].shift;

	function _merge$1 () {
	    var dest = arrayShift$3.call(arguments),
	        src = arrayShift$3.call(arguments),
	        key;

	    while( src ) {

	      if( typeof dest !== typeof src ) {
	          dest = type$1.isArray(src) ? [] : ( type$1.isObject(src) ? {} : src );
	      }

	      if( type$1.isObject(src) ) {

	        for( key in src ) {
	          if( src[key] === undefined ) {
	            dest[key] = undefined;
	          } else if( type$1.isArray(dest[key]) ) {
	            [].push.apply(dest[key], src[key]);
	          } else if( type$1.isObject(dest[key]) ) {
	            dest[key] = _merge$1(dest[key], src[key]);
	          } else {
	            dest[key] = src[key];
	          }
	        }
	      }
	      src = arrayShift$3.call(arguments);
	    }

	    return dest;
	}

	function mapObject$2 (o, iteratee) {
	  var result = {};
	  for( var key in o ) {
	    result[key] = iteratee(o[key], key);
	  }
	  return result;
	}

	function _copy$1 (src) {
	  if( type$1.isArray(src) ) {
	    return src.map(function (item) {
	      return _copy$1(item);
	    });
	  }
	  
	  if( type$1.isObject(src) ) {
	    return mapObject$2(src, function (item) {
	      return _copy$1(item);
	    });
	  }

	  return src;
	}

	var extend$2 = {
	  extend: _extend$1,
	  merge: _merge$1,
	  copy: _copy$1
	};

	function _ready (_callback, delay) {
	  var callback = delay ? function () { setTimeout(_callback, delay); } : _callback;

	  if (/loaded|complete/.test(document.readyState)) {
	    callback();
	  } else {
	    window.addEventListener('load', callback);
	  }
	}

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

	  if( !/:has\(/.test(selector) ) {
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

	function clearElement (el) {
	  var child = el.firstChild;

	  while( child ) {
	    el.removeChild(child);
	    child = el.firstChild;
	  }
	}

	// var _classActions = {
	//   add: document.documentElement.classList ? function (element, className) {
	//     element.classList.add(className);
	//   } : function (element, className) {
	//     var RE_CLEANCLASS = new RegExp('\\b' + (className || '') + '\\b','');
	//     _classActions.remove(element, className);
	//     element.className += ' ' + className;
	//   },
	//   remove: document.documentElement.classList ? function (element, className) {
	//     element.classList.remove(className);
	//   } : function (element, className) {
	//     var RE_CLEANCLASS = new RegExp('\\b' + (className || '') + '\\b','');
	//     element.className = element.className.replace(RE_CLEANCLASS,'');
	//   },
	//   action: function (action, tools) {
	//     return function (element, className) {
	//       if( className.indexOf(' ') >= 0 ) {
	//         className.split(' ').forEach(function (cn) {
	//           _classActions[action](element, cn);
	//         });
	//       } else {
	//         _classActions[action](element, className);
	//       }
	//       return tools;
	//     };
	//   }
	// };

	function writeIframe (iframe, content) {
	  var iframeDoc = iframe.contentWindow.document;
	  try { iframeDoc.charset = 'UTF-8'; } catch(err) {}
	  iframeDoc.open();
	  iframeDoc.write(content);
	  iframeDoc.close();
	}

	var remove_style = / Trident\//.test(navigator.userAgent) ? '' : null;

	function getIFrame (iframeStyles) {
	  var iframe = document.createElement('iframe');
	  extend$2.extend(iframe.style, iframeStyles || {});

	  iframe.frameBorder = '0';
	  // iframe.style.display = 'none';
	  iframe.onload = function () {
	    iframe.style.display = remove_style;
	  };
	  return iframe;
	}

	function matchMedia$2 (query) {
	  return (window.matchMedia = window.matchMedia || window.webkitMatchMedia || window.mozMatchMedia || window.msMatchMedia)(query);
	}

	var isMobile = matchMedia$2('( max-width: 600px )');

	var _$1 = {
	  isMobile: function () {
	    return isMobile.matches;
	  },
	  ready: _ready,
	  getIFrame: getIFrame,
	  writeIframe: writeIframe,
	  cssQuery: cssQuery,
	  clearElement: clearElement,
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
	  },
	};

	// var addClass = _classActions.action('add', _ ),
	//     removeClass = _classActions.action('remove', _ );

	// _.addClass = addClass;
	// _.removeClass = removeClass;

	_$1.addClass = function (element, className) {
	  element.classList.add(className);
	};

	_$1.removeClass = function (element, className) {
	  element.classList.remove(className);
	};

	function _formatThousands(amount, groupSeparator) {
	  if( /\d{3}\d+/.test(amount) ) {
	    return _formatThousands(amount.replace(/(\d{3}?)(\.|$)/, groupSeparator + '$&'), groupSeparator);
	  }
	  return amount;
	}

	function getAmount (amount, decimalsSeparator, groupSeparator) {
	  var prefix = '';
	  decimalsSeparator = decimalsSeparator || ',';
	  groupSeparator = groupSeparator || '.';

	  if( amount < 0 ) {
	    prefix = '-';
	    amount = 0 - amount;
	  }

	  if( !amount ) {
	    return '0,00';
	  } else if( amount < 10 ) {
	    return '0,0' + amount;
	  } else if( amount < 100 ) {
	    return '0,' + amount;
	  }
	  return prefix + ('' + amount).replace(/(\d*)(\d{2})$/, function (_matched, main, tail) {
	    return _formatThousands(main, groupSeparator) + decimalsSeparator + tail;
	  });
	}

	function getPrice (amount, currency) {
	  var prefix = '', suffix = '', decimalsSeparator, groupSeparator;

	  switch (currency) {
	    case 'EUR':
	      suffix = ' €';
	      decimalsSeparator = ',';
	      groupSeparator = '.';
	      break;
	    case 'MXN':
	      prefix = '$ ';
	      decimalsSeparator = '.';
	      groupSeparator = ',';
	      break;
	  }

	  return prefix + getAmount(amount, decimalsSeparator, groupSeparator) + suffix;
	}

	function parsePrice (price) {
	  var matched = price.match(/((\d+[,. ])*)(\d+)/),
	      main, tail;

	  if( matched ) {
	    tail = matched[3];
	    main = matched[1].replace(/[^\d]/g, '');

	    if( !main ) {
	      return Number( tail + '00' );
	    }

	    if( tail.length === 1 ) return Number(main + tail + '0');

	    if( tail.length === 2 ) return Number(main + tail);

	    // if tail length is 3 we assume there is no decimals
	    if( tail.length === 3 ) return Number(main + tail + '00');

	    if( tail.length > 3 ) return Number(main)*100 + Math.round( Number('0.' + tail)*100 );

	    return Number(main);
	  }

	  if( /\d+/.test(price) ) {
	    return Number( price.replace(/[^\d]+/g, '') + '00' );
	  }
	}

	function _key$1 (o, key, value) {
		key.split('.').forEach(function (k, i, keys) {
			if( i === keys.length - 1 ) {
				o[k] = value;
			} else {
				o[k] = o[k] || {};
				o = o[k];
			}
		});
	}

	function toCamelCase$1 (text) {
		return text.replace(/[_-](\w)/g, function (_matched, letter) {
			return letter.toUpperCase();
		});
	}

	function toUnderscoreCase$1 (text) {
		return text.replace(/-(\w)/g, function (_matched, letter) {
			return '_' + letter;
		}).replace(/([a-z])([A-Z])/g, function (_matched, a, b) {
			return a + '_' + b;
		}).toLowerCase();
	}

	function deserialize (querystring, decode, throw_errors) {

		var result = {};

		querystring.split('&').forEach(function (keyValue) {
			var matched = keyValue.match(/(.*?)=(.*)/);

			if( !matched ) {
	      if( !throw_errors ) return;
				throw new Error('could not parse ' + keyValue);
			}

			_key$1(result, toUnderscoreCase$1(matched[1]), decode ? decodeURI(matched[2]) : matched[2] );

		});

		return result;
	}

	var deserialize$1 = {
	  deserialize: deserialize,
	  toUnderscoreCase: toUnderscoreCase$1,
	  toCamelCase: toCamelCase$1,
	};

	function template$1 (name, data){
	  return template$1.cache[name](data || {});
	}

	template$1.cache = {};

	template$1.compile = function (tmpl) {
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

	template$1.put = function (name, tmpl) {
	  template$1.cache[name] = template$1.compile(tmpl);
	};

	template$1.lookup = function () {
	  [].forEach.call(document.querySelectorAll('script[type="application/x-template"][data-template]'), function (tmpl) {
	    template$1.put(tmpl.getAttribute('data-template'), tmpl.text);
	  });
	};

	var messageTarget = {},
	    showLogs = false,
	    _remove = function (list, iteratee, this_arg) {
	      for( var i = list.length - 1 ; i >= 0 ; i-- ) {
	        if( iteratee.call(this_arg || list[i], list[i], i) ) list.splice(i, 1);
	      }
	    };

	window.addEventListener('message', function (e) {
	  var message = e.data ||{},
	      listeners = messageTarget[message.aplazame];

	  if( !listeners ) return;

	  if( showLogs && !e.used ) {
	    log('message', e, listeners);
	  }

	  if( !e.used ) {
	    e.used = true;
	    for( var i = 0, n = listeners.length ; i < n ; i++ ) {
	      listeners[i](e, message);
	    }
	  }
	}, true);

	function onMessage (target, handler, logs) {
	  showLogs = logs;
	  if( typeof target === 'string' && handler instanceof Function ) {
	    messageTarget[target] = messageTarget[target] || [];
	    messageTarget[target].push(handler);
	  }
	}

	onMessage.off = function (target, handler) {
	  if( typeof target === 'string' && handler instanceof Function ) {
	    messageTarget[target] = messageTarget[target] || [];
	    _remove(messageTarget[target] || [], function (_handler) {
	      return _handler === handler;
	    });
	  }
	};

	bundle$1.extend(bundle$1,
	  lists,
	  path$1,
	  color_tools,
	  _$1,
	  deserialize$1,
	  {
	    getAmount: getAmount,
	    getPrice: getPrice,
	    parsePrice: parsePrice
	  },
	  {
	    remove_style: / Trident\//.test(navigator.userAgent) ? '' : null,
	    template: template$1,
	    onMessage: onMessage,
	  }
	);

	bundle$1.log = log;
	bundle$1.noop = function (value) { return value; };

	var _now = Date.now || function () { return new Date().getTime(); };

	bundle$1.debounce = function (fn, debounce_duration) {
	  var debouncing = null,
	      last_hit = _now(),
	      runHit = function (_this, _args) {
	        fn.apply(_this, _args);
	        last_hit = _now();
	        debouncing = setTimeout(function () {
	          debouncing = null;
	        }, debounce_duration);
	      };
	  debounce_duration = debounce_duration || 80;

	  return function () {
	    var _this = this, _args = arguments;

	    if( !debouncing || _now() - last_hit > debounce_duration ) {
	      runHit(_this, _args);
	    } else {
	      clearTimeout(debouncing);
	      debouncing = setTimeout(function () {
	        runHit(_this, _args);
	      }, debounce_duration);
	    }
	  };
	};

	var api = {
	  host: 'https://api.aplazame.com/',
	  // host: 'https://api.aplazame.com/',
	  static_url: 'https://aplazame.com/static/',
	  checkout_url: 'https://checkout.aplazame.com/',
	  version: 1,
	  sandbox: false
	};

	function removeFromList ( list, item ) {
	  for( var i = list.length - 1 ; i >= 0 ; i-- ) {
	    if( item === list[i] ) list.splice(i, 1);
	  }
	}

	function _normalizeEventName (fn, host, test_listener) {
	  return function _fn (event_name, listener, use_capture) {
	    if( test_listener !== false && !(listener instanceof Function ) ) throw new Error('listener should be a Function');

	    if( event_name instanceof Array ) {
	      event_name.forEach(function (_event_name) {
	        _fn(_event_name, listener, use_capture);
	      });
	      return host;
	    }
	    // runAsArray(fn, arguments, this, host );
	    if( typeof event_name !== 'string' ) throw new Error('event_name should be a string');
	    if( / /.test(event_name) ) return _fn(event_name.split(/ +/), listener, use_capture);

	    fn.apply(this, arguments);

	    return host;
	  };
	}

	function Azazel (host, prefix) {

	  host = host || (this instanceof Azazel ? this : {});
	  prefix = prefix || '';

	  var listeners = {},
	      listeners_once = {},
	      events_emitted = {};

	  function _on (event_name, listener, use_capture) {
	    listeners[event_name] = listeners[event_name] || [];
	    if( use_capture ) listeners[event_name].unshift(listener);
	    else listeners[event_name].push(listener);
	  }

	  var on = _normalizeEventName(_on, host);

	  function _once (event_name, listener, use_capture) {
	    listeners_once[event_name] = listeners_once[event_name] || [];
	    if( use_capture ) listeners_once[event_name].unshift(listener);
	    else listeners_once[event_name].push(listener);
	  }

	  var once = _normalizeEventName(_once, host);

	  function watch (event_name, listener, use_capture) {
	    if( !(listener instanceof Function ) ) throw new Error('listener should be a Function');
	    var last_emitted = events_emitted[event_name];
	    if( last_emitted ) listener.apply(last_emitted.this_arg, last_emitted.args);
	    if( !last_emitted || use_capture !== 'once' ) _on(event_name, listener, use_capture);
	    return host;
	  }

	  function _emit (event_name, args, this_arg) {
	    events_emitted[event_name] = { args: args, this_arg: this_arg };

	    if( listeners[event_name] ) listeners[event_name].forEach(function (listener) {
	      listener.apply(this_arg, args || []);
	    });

	    if( listeners_once[event_name] ) {
	      _emitOnce(listeners_once[event_name], args, this_arg);
	      delete listeners_once[event_name];
	    }
	  }

	  function _emitOnce (listeners_list, args, this_arg) {
	    listeners_list.forEach(function (listener) {
	      listener.apply(this_arg, args || []);
	    });

	    for( var event_name in listeners_once ) {
	      if( listeners_once[event_name] !== listeners_list ) listeners_list.forEach(function (_listener) {
	        if( listeners_once[event_name] ) removeFromList(listeners_once[event_name], _listener );
	      });
	    }
	  }

	  var emit = _normalizeEventName(_emit, host, false);

	  function off (event_name, listener) {
	    if( listeners[event_name] ) removeFromList(listeners[event_name], listener );
	    if( listeners_once[event_name] ) removeFromList(listeners_once[event_name], listener );
	  }

	  host[prefix + 'on'] = on;
	  host[prefix + 'once'] = once;
	  host[prefix + 'watch'] = watch; // like watch but triggering

	  host[prefix + 'emit'] = emit;
	  host[prefix + 'off'] = _normalizeEventName(off);

	  return host;
	}

	var azazel = Azazel;

	var events$1 = new azazel();

	function init (options) {
	  options = options || {};

	  if( typeof options.sandbox === 'string' ) {
	    options.sandbox = options.sandbox === 'true';
	  }

	  for( var key in options ) {
	    api[bundle$1.toUnderscoreCase(key)] = options[key];
	  }

	  bundle$1.log.debug('aplazame.init', options, api);

	  if( api.public_key ) events$1.emit('ready');
	}

	// http.config({ headers: { Accept: 'application/json' } });

	var apiHttp = browser.base(function () { return api.host; }, {
	  headers: {
	    Accept: function (config) {
	      config.sandbox = api.sandbox;
	      // return 'application/vnd.aplazame' + ( api.sandbox ? '.sandbox' : '' ) + '.v' + api.version  + '+json';
	      var version = config.api_version || 1;
	      return 'application/vnd.aplazame' + ( api.sandbox ? '.sandbox' : '' ) + '.v' + version  + '+json';
	    },
	    Authorization: function (config) {
	      return 'Bearer ' + (config.public_key || api.public_key);
	    }
	  }
	});

	var aplazame = {
	  _: bundle$1,
	  init: init,
	  apiGet: apiHttp.get,
	  apiPost: apiHttp.post,
	  apiDelete: apiHttp['delete'],
	  apiPut: apiHttp.put,
	  version: aplazameVersion,
	};

	function checkoutNormalizeAPI(transaction, api_defaults) {

	  var merchant = transaction.merchant,
	      transaction_api = transaction.api || {};

	  if( !merchant ) throw new Error('missing merchant parameters');

	  transaction_api.host = transaction_api.host || api_defaults.host;

	  transaction_api.public_key = transaction_api.public_key || merchant.public_api_key || api_defaults.public_key;
	  transaction_api.sandbox = 'sandbox' in transaction_api ? transaction_api.sandbox : ( 'sandbox' in merchant ? merchant.sandbox : api_defaults.sandbox );

	  transaction.api = transaction_api;

	  return transaction_api;
	}

	function transactionNormalizer(transaction) {

	  var customer = transaction.customer;
	  if( !customer ) return;

	  if( customer.birthday ) {
	    // Strip time from value
	    customer.birthday = customer.birthday.split('T')[0];
	  }

	  switch ( customer.type ) {
	    case 'existing':
	      customer.type = 'e';
	      break;
	    case 'guess':
	      customer.type = 'g';
	      break;
	    case 'new':
	      customer.type = 'n';
	      break;
	  }

	  switch (customer.gender) {
	    case 'unknown':
	      customer.gender = 0;
	      break;
	    case 'male':
	      customer.gender = 1;
	      break;
	    case 'female':
	      customer.gender = 2;
	      break;
	    case 'not_applicable':
	      customer.gender = 3;
	      break;
	  }

	  return customer;
	}

	function _locationReplaceFn ( location, href ) {
	  return href ? function () {
	    location.replace(href);
	  } : null;
	}

	function _removeFunctions (o) {
	  for( var key in o ) {
	    if( o[key] instanceof Function ) delete o[key];
	  }
	}

	function checkoutNormalizerCallbacks(transaction, callbacks, location) {

	  var _noop = function () {},
	      merchant = transaction.merchant,
	      on = { noop: _noop };

	  if( !merchant ) throw new Error('missing merchant parameters');

	  // result callbacks when close
	  on.success = callbacks.onSuccess || merchant.onSuccess;
	  on.pending = callbacks.onPending || merchant.onPending;
	  on.cancel = callbacks.onError || merchant.onError;
	  on.ko = callbacks.onKO || merchant.onKO;
	  on.dismiss = callbacks.onDismiss || merchant.onDismiss;

	  // event callbacks
	  on.ready = callbacks.onReady || merchant.onReady || _noop;
	  on.statusChange = callbacks.onStatusChange || merchant.onStatusChange || _noop;
	  on.close = callbacks.onClose || merchant.onClose || _noop;

	  // if( !on.success && !merchant.success_url && on.close === _noop ) {
	  //   throw new Error('success_url missing');
	  // }
	  on.success = on.success || _locationReplaceFn(location, merchant.success_url);

	  // if( !on.cancel && !merchant.cancel_url && on.close === _noop ) {
	  //   throw new Error('cancel_url missing');
	  // }
	  on.cancel = on.cancel || _locationReplaceFn(location, merchant.cancel_url);

	  on.dismiss = on.dismiss || _locationReplaceFn(location, merchant.checkout_url || '/');

	  on.ko = on.ko || _locationReplaceFn(location, merchant.ko_url) || on.dismiss;

	  if( !on.pending ) {
	    on.pending = merchant.pending_url ? _locationReplaceFn(location, merchant.pending_url) : on.dismiss;
	  }

	  // All functions must be removed as them can't be serialized by postMessage
	  _removeFunctions(merchant);

	  return on;
	}

	var overlay_css = '@-webkit-keyframes aplazame-overlay{0%{opacity:0;}to{opacity:1}}@keyframes aplazame-overlay{0%{opacity:0}to{opacity:1}}.aplazame-overlay{font-family:Montserrat,sans-serif;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;width:100vw;height:100vh;background:rgba(53,64,71,.8);text-align:center;z-index:2147483646;-webkit-transform:translateZ(0);transform:translateZ(0)}.aplazame-overlay:before{content:"";display:block;height:50vh}.aplazame-logo-wrapper{display:inline-block;margin-top:-200px}.aplazame-overlay-loading-text{color:#95a6b1;margin-top:14px;font-size:14px}.aplazame-overlay-loading-text .text-error{color:#f08080}.aplazame-overlay-loading-text a{color:#f5f5f5;display:inline-block;text-decoration:none}.aplazame-overlay-loading-text a:hover{border-bottom:1px dotted #f5f5f5}.aplazame-overlay{-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.aplazame-overlay.aplazame-overlay-hide,.aplazame-overlay.aplazame-overlay-show{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-name:aplazame-overlay;animation-name:aplazame-overlay}.aplazame-overlay.aplazame-overlay-hide{animation-direction:reverse}.aplazame-checkout-flag{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;position:fixed;bottom:0;left:0;width:100%;padding-bottom:30px;z-index:2147483647;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-name:aplazame-overlay;animation-name:aplazame-overlay}.aplazame-checkout-flag svg{width:24px;height:16px}.aplazame-checkout-flag .label{margin:16px 0 0;padding:0;color:#fff;font-family:sans-serif;font-weight:400;font-size:14px;text-shadow:0 1px 3px rgba(0,0,0,.5);line-height:1}';

	var blur_css = '@-webkit-keyframes aplazame-blur{0%{-webkit-filter:blur(0);filter:blur(0);}to{-webkit-filter:blur(1px);filter:blur(1px)}}@keyframes aplazame-blur{0%{-webkit-filter:blur(0);filter:blur(0)}to{-webkit-filter:blur(1px);filter:blur(1px)}}body.aplazame-blur>:not(.aplazame-modal):not(.aplazame-overlay):not(.aplazame-checkout-flag){-webkit-filter:blur(1px);filter:blur(1px)}@media (min-width:601px){body.aplazame-blur>:not(.aplazame-modal):not(.aplazame-overlay):not(.aplazame-checkout-flag){-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:aplazame-blur;animation-name:aplazame-blur}}body.aplazame-unblur>:not(.aplazame-modal):not(.aplazame-overlay):not(.aplazame-checkout-flag){-webkit-filter:blur(0);filter:blur(0)}@media (min-width:601px){body.aplazame-unblur>:not(.aplazame-modal):not(.aplazame-overlay):not(.aplazame-checkout-flag){-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:aplazame-blur;animation-name:aplazame-blur;animation-direction:reverse}}';

	var logo_css = '@-webkit-keyframes aplazame-logo-smile{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}90%{-webkit-transform:rotate(2turn);transform:rotate(2turn)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}@keyframes aplazame-logo-smile{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(2turn);transform:rotate(2turn)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}@-webkit-keyframes aplazame-logo-short{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}30%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes aplazame-logo-short{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}30%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes aplazame-logo-large{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}60%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes aplazame-logo-large{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}60%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.logo-aplazame{position:relative;display:inline-block;width:150px;height:150px}.logo-aplazame .line-large,.logo-aplazame .line-short,.logo-aplazame .smile{stroke:#ddd}.logo-aplazame .smile-outline{stroke:#5d666b}@media (min-width:480px){.logo-aplazame{width:200px;height:200px}}.logo-aplazame svg{position:absolute;top:0;left:0;width:100%;height:100%}.logo-aplazame.animate .line-large,.logo-aplazame.animate .line-short,.logo-aplazame.animate .smile{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.logo-aplazame.animate .smile{-webkit-animation-name:aplazame-logo-smile;animation-name:aplazame-logo-smile}.logo-aplazame.animate .line-large{-webkit-animation-name:aplazame-logo-large;animation-name:aplazame-logo-large}.logo-aplazame.animate .line-short{-webkit-animation-name:aplazame-logo-short;animation-name:aplazame-logo-short}';

	var modal_css = '.aplazame-modal{position:relative;z-index:2147483647;height:0;max-height:100%;min-height:100%;max-height:100vh;min-height:100vh;}@media (max-width:600px){html{background-color:#333a3e}body,html{height:100vh;margin:0;padding:0}body>:not(.aplazame-modal){display:none}body{overflow-y:auto;overflow-x:hidden}}@media (min-width:601px){body{overflow:hidden}.aplazame-modal{position:fixed}}';

	var importantCSS = function (css) {
	      return css.replace(/;/g, ' !important;').replace(/:([^:;]+?)}/g, function (_matched, value) {
	        return ':' + value + ' !important;}';
	      }).replace(/(\d+%|from|to){([^}]+)/g, function (_matched, pos, content) {
	        return pos + '{' + content.replace(/ !important;/g, ';');
	      });
	    },
	    cssHack = (function () {
	      var cache = {},
	          hacks = {
	            overlay: importantCSS(overlay_css),
	            blur: importantCSS(blur_css),
	            logo: importantCSS(logo_css),
	            modal: importantCSS(modal_css),
	          };

	      return function hack (hackName) {
	        if( !cache[hackName] ) {
	          var style = document.createElement('style');
	          style.setAttribute('rel', 'stylesheet');
	          style.setAttribute('type', 'text/css');
	          style.textContent = hacks[hackName];

	          var enabled = false;

	          style.hack = function (enable) {
	            enable = enable === undefined || enable;

	            if( enable ) {
	              if( enabled ) { return; }
	              enabled = true;
	              document.head.appendChild(style);
	            } else {
	              if( !enabled ) { return; }
	              enabled = false;
	              document.head.removeChild(style);
	            }
	          };

	          cache[hackName] = style;
	        }
	        return cache[hackName];
	      };
	    })();

	var dE = document.documentElement;

	function viewportInfo () {

	  var viewport = {};

	  // http://ryanve.com/lab/dimensions/
	  viewport.screen = window.screen ? {
	    availWidth: screen.availWidth,
	    availHeight: screen.availHeight,
	    width: screen.width,
	    height: screen.height,
	    availLeft: screen.availLeft,
	    availTop: screen.availTop,
	    colorDepth: screen.colorDepth,
	    orientation: screen.orientation ? {
	      angle: screen.orientation.angle,
	      type: screen.orientation.type,
	    } : {}
	  } : {};
	  viewport.document = {
	    clientWidth: dE.clientWidth,
	    clientHeight: dE.clientHeight,
	  };
	  viewport.window = {
	    innerWidth: window.innerWidth,
	    innerHeight: window.innerHeight,
	    outerWidth: window.outerWidth,
	    outerHeight: window.outerHeight,
	  };

	  return viewport;

	}

	var flag_svg_es = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 750 500\">\n  <path fill=\"#c60b1e\" d=\"M0 0h750v500H0z\"/>\n  <path fill=\"#ffc400\" d=\"M0 125h750v250H0z\"/>\n  <g stroke=\"#000\" stroke-width=\".39\">\n    <g stroke-width=\".26\">\n      <path fill=\"#ad1519\" stroke-linejoin=\"round\" d=\"M167.99 222.24s-.51 0-.79-.16-1.13-.96-1.13-.96l-.68-.49-.62-.85s-.73-1.18-.4-2.09a2.6 2.6 0 0 1 1.42-1.5c.51-.26 1.58-.59 1.58-.59s.85-.37 1.13-.42l1.3-.32s.28-.16.56-.27c.29-.11.68-.11.91-.16.22-.06.79-.24 1.13-.26.52-.02 1.36.1 1.64.1s1.24.05 1.64.05c.39 0 1.8-.11 2.2-.11.39 0 .68-.05 1.13 0 .45.06 1.24.32 1.47.43s1.58.59 2.09.75 1.75.37 2.32.64c.56.27.91.72 1.19 1.1.28.37.34.78.45 1.05.11.26.11.84 0 1.11a6.4 6.4 0 0 1-.51.81l-.62 1.02-.79.64s-.57.54-1.02.48c-.45-.04-5.03-.86-7.97-.86s-7.64.86-7.64.86h.01z\"/>\n      <g fill=\"#c8b100\">\n        <ellipse cx=\"175.66\" cy=\"215.68\" rx=\"1.38\" ry=\"2.5\"/>\n        <ellipse cx=\"175.68\" cy=\"215.68\" rx=\".64\" ry=\"2.3\"/>\n        <ellipse cx=\"175.68\" cy=\"213.04\" rx=\".93\" ry=\".87\" stroke=\"none\"/>\n        <path stroke-width=\".3\" d=\"M176.96 212.74v.58h-2.53v-.58h.94v-1.32h-.62v-.57h.62v-.57h.6v.57h.62v.57h-.62v1.32h.99\"/>\n        <path fill=\"none\" d=\"M175.94 212.2a.93.87 0 1 1-.5 0\"/>\n        <path d=\"M175.68 222.08h-4.81l-.11-1.18-.23-1.23-.23-1.53c-1.33-1.75-2.55-2.9-2.96-2.65.1-.32.22-.56.47-.71 1.18-.7 3.61.98 5.44 3.74.16.25.32.5.46.75h3.97c.14-.25.3-.5.46-.75 1.82-2.76 4.26-4.44 5.43-3.74.26.15.37.39.47.71-.41-.24-1.62.9-2.96 2.65l-.23 1.53-.23 1.23-.1 1.18h-4.84z\"/>\n        <path fill=\"none\" d=\"M167.55 215.44c.91-.53 3.02 1.14 4.73 3.74m11.55-3.74c-.91-.53-3.01 1.14-4.73 3.74\"/>\n      </g>\n      <g id=\"a\" fill=\"#c8b100\">\n        <path d=\"M168.58 224.25c-.2-.57-.58-1.08-.58-1.08 1.95-.57 4.66-.93 7.67-.94 3.01.01 5.75.37 7.69.94l-.52.91c-.17.3-.39.81-.38.81a23.94 23.94 0 0 0-6.8-.82c-2.79.01-5.46.35-6.86.86.02 0-.1-.32-.23-.68h.01\"/>\n        <path d=\"M175.67 226.73c2.43-.01 5.11-.38 6.1-.63.66-.2 1.05-.49.98-.84-.04-.16-.18-.3-.37-.38-1.46-.47-4.07-.8-6.71-.8-2.63 0-5.27.33-6.72.8-.19.08-.33.22-.37.38-.07.35.32.64.98.84.99.25 3.68.62 6.11.63zM183.48 222.08l-.59-.53s-.57.34-1.28.24c-.7-.11-.93-.97-.93-.97s-.79.67-1.44.62c-.65-.06-1.07-.62-1.07-.62s-.71.51-1.33.46c-.62-.06-1.21-.83-1.21-.83s-.63.8-1.25.86c-.62.05-1.13-.54-1.13-.54s-.28.59-1.07.72-1.47-.62-1.47-.62-.45.73-.99.92c-.54.18-1.24-.27-1.24-.27l-.2.43c-.08.16-.31.19-.31.19l.18.47c1.93-.56 4.56-.91 7.53-.91s5.67.35 7.61.92l.2-.54h-.01z\"/>\n        <path d=\"M175.69 219.49l.28.05a.95.95 0 0 0-.06.38c0 .58.5 1.05 1.12 1.05.49 0 .91-.31 1.06-.73.01.01.11-.38.15-.38.03 0 .03.41.05.41.07.53.55.89 1.1.89.62 0 1.11-.47 1.11-1.06l-.01-.12.35-.35.19.44a1.03 1.03 0 0 0 .96 1.47c.37 0 .69-.18.88-.45l.23-.29v.36c0 .34.14.66.49.71 0 0 .38.03.91-.38.52-.41.8-.75.8-.75l.03.42s-.51.84-.97 1.1c-.25.15-.64.31-.95.25-.32-.05-.55-.31-.67-.61-.23.14-.51.22-.8.22-.63 0-1.2-.35-1.42-.86a1.64 1.64 0 0 1-2.42-.08 1.62 1.62 0 0 1-2.42-.26c-.29.41-.78.69-1.34.69-.42 0-.81-.16-1.09-.43a1.63 1.63 0 0 1-2.42.08c-.22.51-.79.86-1.42.86-.29 0-.56-.08-.79-.22-.12.3-.35.56-.68.61-.3.06-.69-.1-.94-.25-.47-.26-1.02-1.1-1.02-1.1l.07-.42s.29.34.81.75.91.38.91.38c.34-.05.49-.37.49-.71v-.36l.22.29c.19.27.51.45.88.45a1.03 1.03 0 0 0 .96-1.47l.19-.44.35.35-.01.12c0 .59.49 1.06 1.11 1.06.55 0 1.03-.36 1.11-.89.01 0 .01-.41.04-.41.05 0 .14.39.16.38.14.42.56.73 1.06.73.61 0 1.11-.47 1.11-1.05 0-.14 0-.26-.05-.38l.29-.05h.01z\"/>\n        <path stroke-linejoin=\"round\" d=\"M175.67 222.23c-3.01.01-5.72.37-7.67.94-.13.04-.29-.06-.33-.17-.04-.13.05-.28.18-.32 1.95-.6 4.73-.98 7.82-.98s5.88.38 7.83.98c.13.04.22.19.18.32-.04.11-.2.21-.33.17a29.01 29.01 0 0 0-7.68-.94z\"/>\n        <path d=\"M165.43 221c-.01.01-.38-.48-.65-.73-.2-.18-.68-.33-.68-.33 0-.08.28-.28.58-.28.18 0 .35.07.45.2l.04-.2s.24.05.35.32c.12.29.05.72.05.72s-.05.2-.14.3zM167.32 220.22l-.11.66-1.4.15-.21-.12.04-.23 1.06-.87.62.41\"/>\n        <path d=\"M165.45 220.75c.12-.12.36-.09.53.06.18.15.24.38.12.5-.12.13-.36.1-.53-.06-.18-.15-.24-.38-.12-.5zM168.02 220.88c-.06-.18 0-.37.13-.42.14-.03.3.09.37.27.06.19 0 .38-.14.42-.13.04-.29-.08-.36-.27zM168.67 220.04l.51.48 1.22-.66.09-.21-.17-.17-1.4-.12-.25.68\"/>\n        <path d=\"M170.08 217.76l-.67.64.86 1.14.23.09.17-.18.3-1.37-.89-.32\"/>\n        <path d=\"M172.36 219.3l-.26.63-1.4-.13-.18-.16.1-.22 1.22-.64.52.52\"/>\n        <ellipse cx=\"170.51\" cy=\"219.65\" rx=\".49\" ry=\".47\"/>\n        <path d=\"M172.87 219.95c-.03-.2.07-.37.21-.39s.28.13.3.33c.03.19-.07.37-.21.38-.14.02-.28-.13-.3-.32zM173.78 219.24l.4.57 1.34-.42.14-.18-.15-.2-1.33-.39-.4.62\"/>\n        <path d=\"M175.66 217.15l-.86.52.64 1.38.22.14.22-.14.64-1.38-.86-.52\"/>\n        <path d=\"M177.55 219.24l-.39.57-1.34-.42-.14-.18.14-.2 1.34-.39.39.62\"/>\n        <ellipse cx=\"175.67\" cy=\"219.21\" rx=\".49\" ry=\".47\"/>\n        <path d=\"M178.5 219.95c.02-.2-.08-.37-.22-.39s-.28.13-.3.33c-.02.19.07.37.21.38.14.02.28-.13.31-.32zM178.99 219.3l.26.63 1.4-.13.18-.16-.1-.22-1.22-.64-.52.52\"/>\n        <path d=\"M181.27 217.76l.67.64-.86 1.14-.23.09-.17-.18-.3-1.37.89-.32\"/>\n        <path d=\"M182.68 220.04l-.51.48-1.22-.66-.1-.21.19-.17 1.4-.12.24.68\"/>\n        <ellipse cx=\"180.85\" cy=\"219.65\" rx=\".49\" ry=\".47\"/>\n        <path d=\"M183.34 220.88c.06-.18 0-.37-.13-.42-.14-.03-.3.09-.37.27-.06.19 0 .38.14.42.13.04.29-.08.36-.27zM185.73 221c.01.01.38-.48.66-.73.19-.18.67-.33.67-.33 0-.08-.28-.28-.58-.28a.56.56 0 0 0-.45.2l-.04-.2s-.24.05-.36.32c-.11.29-.03.72-.03.72s.04.2.13.3zM183.84 220.22l.11.66 1.4.15.21-.12-.05-.23-1.05-.87-.62.41\"/>\n        <path d=\"M185.74 220.75c-.11-.12-.35-.09-.53.06s-.24.38-.12.5c.12.13.36.1.54-.06.18-.15.23-.38.11-.5z\"/>\n      </g>\n      <g id=\"b\" fill=\"none\">\n        <path fill=\"#ad1519\" d=\"M168.05 224.3l.31-.5.65.13-.38.56-.58-.19\"/>\n        <path fill=\"#058e6e\" d=\"M170.85 223.81l-.69.11c-.18.02-.35-.09-.38-.26a.32.32 0 0 1 .27-.35l.7-.1.71-.11c.18-.02.34.09.37.25.02.17-.1.33-.27.35l-.71.11\"/>\n        <ellipse fill=\"#fff\" cx=\"173.19\" cy=\"223.3\" rx=\".44\" ry=\".41\"/>\n        <path fill=\"#ad1519\" d=\"M175.7 223.48h-.96c-.18 0-.33-.14-.33-.31s.14-.31.32-.31h1.96c.19 0 .33.14.33.31s-.15.31-.33.31h-.99\"/>\n        <ellipse fill=\"#fff\" cx=\"178.16\" cy=\"223.3\" rx=\".44\" ry=\".41\"/>\n        <path fill=\"#058e6e\" d=\"M180.5 223.81l.69.11c.18.02.35-.09.38-.26a.31.31 0 0 0-.27-.35l-.7-.1-.71-.11c-.18-.02-.35.09-.37.25a.3.3 0 0 0 .27.35l.71.11\"/>\n        <path fill=\"#ad1519\" d=\"M183.24 224.33l-.25-.53-.67.06.32.59.6-.12\"/>\n        <path fill=\"#ad1519\" stroke-linejoin=\"round\" d=\"M175.66 226.16c-2.43 0-4.63-.22-6.3-.65 1.67-.43 3.87-.69 6.3-.7 2.44 0 4.65.27 6.33.7-1.68.43-3.89.65-6.33.65z\"/>\n        <path stroke-width=\".01\" d=\"M176.8 226.08v-1.16m-.58 1.2l.01-1.23m-.43 1.25v-1.26\"/>\n        <path stroke-width=\".02\" d=\"M175.44 226.15v-1.27\"/>\n        <path stroke-width=\".03\" d=\"M175.09 226.15v-1.27\"/>\n        <path stroke-width=\".04\" d=\"M174.77 226.15v-1.27M174.44 226.15v-1.27\"/>\n        <path stroke-width=\".05\" d=\"M174.16 226.15v-1.27\"/>\n        <path stroke-width=\".06\" d=\"M173.61 226.08l-.01-1.15m.27 1.17v-1.21\"/>\n        <path stroke-width=\".07\" d=\"M173.1 226.03v-1.06m.26 1.09l-.01-1.13\"/>\n        <path stroke-width=\".08\" d=\"M172.42 225.97v-.93m.23.94V225m.23 1.02V225\"/>\n        <path stroke-width=\".09\" d=\"M172.19 225.96v-.9\"/>\n        <path stroke-width=\".1\" d=\"M171.97 225.92v-.85\"/>\n        <path stroke-width=\".11\" d=\"M171.73 225.89v-.78\"/>\n        <path stroke-width=\".12\" d=\"M171.24 225.82l-.01-.62m.26.66v-.7M170.99 225.77v-.55\"/>\n        <path stroke-width=\".13\" d=\"M170.76 225.73v-.46\"/>\n        <path stroke-width=\".14\" d=\"M170.51 225.67v-.36\"/>\n        <path stroke-width=\".15\" d=\"M170.26 225.64v-.27\"/>\n        <path stroke-width=\".18\" d=\"M169.99 225.58v-.13\"/>\n      </g>\n    </g>\n    <g id=\"c\">\n      <g fill=\"#005bbf\">\n        <path d=\"M191.28 330.68a8.52 8.52 0 0 1-3.93-.87c-1-.51-2.36-.82-3.86-.82a8.9 8.9 0 0 0-3.91.83c-1.01.53-2.4.86-3.92.86a8.48 8.48 0 0 1-3.93-.9c-1-.49-2.33-.79-3.79-.79-1.52 0-2.86.29-3.86.81a8.63 8.63 0 0 1-3.95.88v2.41c1.53 0 2.93-.35 3.95-.88 1-.52 2.34-.82 3.86-.82a8.8 8.8 0 0 1 3.79.8 8.6 8.6 0 0 0 3.93.9c1.52 0 2.91-.33 3.92-.86a8.76 8.76 0 0 1 3.91-.84c1.5 0 2.86.32 3.86.83 1.02.54 2.37.87 3.91.87l.02-2.41z\"/>\n        <path fill=\"#ccc\" d=\"M191.28 333.09a8.52 8.52 0 0 1-3.93-.87c-1-.51-2.36-.83-3.86-.83-1.51 0-2.9.32-3.91.84-1.01.53-2.4.86-3.92.86a8.6 8.6 0 0 1-3.93-.9c-1-.49-2.33-.8-3.79-.8-1.52 0-2.86.3-3.86.82a8.76 8.76 0 0 1-3.95.88v2.41c1.53 0 2.93-.35 3.95-.88 1-.52 2.34-.82 3.86-.82a8.8 8.8 0 0 1 3.79.8c1.01.54 2.39.9 3.93.9 1.52 0 2.91-.34 3.92-.86s2.4-.84 3.91-.84c1.5 0 2.86.32 3.86.84 1.02.53 2.37.86 3.91.86l.02-2.41\"/>\n        <path d=\"M191.28 335.5a8.65 8.65 0 0 1-3.93-.86c-1-.52-2.36-.84-3.86-.84-1.51 0-2.9.32-3.91.84s-2.4.86-3.92.86a8.48 8.48 0 0 1-3.93-.9c-1-.49-2.33-.8-3.79-.8-1.52 0-2.86.3-3.86.82a8.76 8.76 0 0 1-3.95.88v2.4c1.53 0 2.93-.34 3.95-.88 1-.51 2.34-.8 3.86-.8 1.45 0 2.79.3 3.79.79 1.01.54 2.39.89 3.93.89 1.52 0 2.91-.32 3.92-.85a8.77 8.77 0 0 1 3.91-.83c1.5 0 2.86.31 3.86.82 1.02.55 2.37.86 3.91.86l.02-2.4\"/>\n        <path fill=\"#ccc\" d=\"M191.26 340.32a8.43 8.43 0 0 1-3.91-.87c-1-.51-2.36-.82-3.86-.82-1.51 0-2.9.31-3.91.83s-2.4.86-3.92.86a8.6 8.6 0 0 1-3.93-.9c-1-.5-2.33-.79-3.79-.79-1.52 0-2.86.29-3.86.81a8.76 8.76 0 0 1-3.95.88v-2.4c1.53 0 2.93-.36 3.95-.9 1-.51 2.34-.8 3.86-.8 1.45 0 2.79.3 3.79.79 1.01.54 2.39.89 3.93.89 1.52 0 2.91-.32 3.92-.85a8.77 8.77 0 0 1 3.91-.83c1.5 0 2.86.31 3.86.82a8.4 8.4 0 0 0 3.93.86l-.02 2.42\"/>\n        <path d=\"M191.26 342.73a8.56 8.56 0 0 1-3.91-.86c-1-.52-2.36-.84-3.86-.84-1.51 0-2.9.32-3.91.84s-2.4.86-3.92.86a8.6 8.6 0 0 1-3.93-.9c-1-.5-2.33-.8-3.79-.8-1.52 0-2.86.3-3.86.82a8.76 8.76 0 0 1-3.95.88v-2.39c1.53 0 2.93-.37 3.95-.9 1-.52 2.34-.81 3.86-.81 1.45 0 2.79.3 3.79.79a8.6 8.6 0 0 0 3.93.9c1.52 0 2.91-.34 3.92-.86s2.4-.83 3.91-.83c1.5 0 2.86.31 3.86.82 1.02.54 2.38.87 3.93.87l-.02 2.41z\"/>\n      </g>\n      <g fill=\"#c8b100\">\n        <path stroke-linejoin=\"round\" d=\"M166.92 320.78c.05.21.13.4.13.62 0 1.46-1.27 2.63-2.81 2.63h22.94c-1.55 0-2.81-1.17-2.81-2.63 0-.21.04-.41.09-.62-.13.05-.29.06-.44.06h-16.69a1.4 1.4 0 0 1-.41-.06z\"/>\n        <path d=\"M167.33 319.27h16.69c.57 0 1.02.35 1.02.78s-.45.79-1.02.79h-16.69c-.56 0-1.02-.36-1.02-.79s.46-.78 1.02-.78zM164.27 329.86h22.87v-5.83h-22.87v5.83z\"/>\n      </g>\n      <path fill=\"#ccc\" d=\"M167.55 318.32h16.25v-79.63h-16.25v79.63z\"/>\n      <path fill=\"none\" d=\"M179.13 238.8v79.46m1.83-79.46v79.46\"/>\n      <g fill=\"#c8b100\">\n        <path d=\"M164.58 232.37h22.29v-5.84h-22.29v5.84z\"/>\n        <path stroke-linejoin=\"round\" d=\"M166.92 236.26a.9.9 0 0 1 .41-.07h16.69c.17 0 .32.03.46.08-.58-.19-.99-.71-.99-1.32s.45-1.14 1.03-1.33c-.14.04-.33.08-.49.08h-16.7c-.17 0-.33-.01-.47-.06l.09.02c.6.18.94.71.94 1.29a1.4 1.4 0 0 1-.97 1.31z\"/>\n        <path d=\"M167.33 236.19h16.69c.57 0 1.02.35 1.02.78 0 .44-.45.79-1.02.79h-16.69c-.56 0-1.02-.35-1.02-.79 0-.43.46-.78 1.02-.78zM167.33 232.37h16.7c.57 0 1.03.3 1.03.66 0 .37-.46.67-1.03.67h-16.7c-.56 0-1.02-.3-1.02-.67 0-.36.46-.66 1.02-.66z\"/>\n      </g>\n    </g>\n    <g id=\"d\" fill=\"#ad1519\">\n      <path d=\"M162.48 298.62c-2.26 1.3-3.8 2.64-3.55 3.31.12.61.84 1.07 1.87 1.75 1.62 1.13 2.6 3.14 1.83 4.07a5.76 5.76 0 0 0-.15-9.13z\"/>\n      <path stroke-linejoin=\"round\" d=\"M200.4 268.47c-3.54-1.46-9.57-2.55-16.49-2.78-2.39.02-5.04.25-7.79.7-9.72 1.63-17.13 5.51-16.54 8.67l.05.26s-3.64-8.21-3.7-8.52c-.65-3.51 7.56-7.82 18.35-9.62 3.39-.57 6.69-.79 9.56-.76 6.9 0 12.9.89 16.52 2.23l.04 9.82\"/>\n      <path d=\"M167.52 278.47c-4.51-.32-7.58-1.53-7.94-3.41-.28-1.5 1.25-3.17 3.97-4.68 1.21.14 2.58.3 4 .3l-.03 7.79M183.83 272.38c2.82.43 4.93 1.13 5.98 1.99l.1.17c.5 1.03-1.97 3.22-6.11 5.67l.03-7.83\"/>\n      <path stroke-linejoin=\"round\" d=\"M157.42 293.83c-.43-1.28 3.97-3.86 10.18-6.14 2.84-1.01 5.18-2.07 8.09-3.35 8.63-3.82 15-8.2 14.22-9.79l-.09-.17c.46.38 1.18 8.24 1.18 8.24.78 1.46-5.05 5.78-13 9.58-2.54 1.22-7.91 3.2-10.44 4.09-4.54 1.57-9.04 4.54-8.63 5.64l-1.51-8.09v-.01z\"/>\n    </g>\n    <g stroke-width=\".26\">\n      <path fill=\"#ad1519\" stroke-width=\".27\" d=\"M324.85 220.42s-.74.78-1.28.89c-.53.1-1.21-.49-1.21-.49s-.48.51-1.08.64c-.59.14-1.41-.66-1.41-.66s-.57.8-1.07.99c-.51.18-1.13-.24-1.13-.24s-.23.39-.65.61c-.18.09-.48-.05-.48-.05l-.6-.38-.68-.72-.62-.24s-.28-.91-.31-1.07l-.08-.57c-.13-.65.87-1.4 2.3-1.72a4.1 4.1 0 0 1 2.06-.02c.57-.48 1.78-.82 3.2-.82a5.7 5.7 0 0 1 3.04.7c.61-.43 1.74-.7 3.03-.7 1.42 0 2.62.34 3.19.82a4.13 4.13 0 0 1 2.07.02c1.42.32 2.43 1.07 2.3 1.72l-.08.57c-.03.16-.32 1.07-.32 1.07l-.62.24-.68.72-.58.38s-.3.14-.48.05c-.43-.21-.66-.61-.66-.61s-.62.42-1.13.24c-.51-.19-1.07-.99-1.07-.99s-.82.8-1.42.66c-.59-.13-1.07-.64-1.07-.64s-.68.59-1.21.49c-.54-.11-1.27-.89-1.27-.89z\"/>\n      <g fill=\"#c8b100\">\n        <ellipse cx=\"324.82\" cy=\"216.2\" rx=\"1.38\" ry=\"1.96\"/>\n        <ellipse cx=\"324.85\" cy=\"216.2\" rx=\".63\" ry=\"1.81\"/>\n        <ellipse cx=\"324.84\" cy=\"213.95\" rx=\".93\" ry=\".88\" stroke=\"none\"/>\n        <path stroke-width=\".3\" d=\"M326.13 213.64v.58h-2.53v-.58h.94v-1.3h-.62v-.58h.62v-.58h.61v.58h.61v.58h-.61v1.3h.98\"/>\n        <path fill=\"none\" d=\"M325.11 213.12a.93.88 0 1 1-.51-.01\"/>\n      </g>\n      <g fill=\"none\" stroke-width=\".21\">\n        <path stroke-width=\".26\" stroke-linecap=\"round\" d=\"M314.41 219.99a2.85 2.85 0 0 1 2.61-3.96c.5 0 .96.13 1.37.37\"/>\n        <path stroke-width=\".26\" d=\"M319.48 217.93a1.73 1.73 0 0 1-.29-.84c0-1.15 1.19-2.08 2.64-2.08.62 0 1.2.17 1.65.45M330.17 217.96c.15-.26.25-.57.25-.87 0-1.15-1.18-2.08-2.64-2.08-.62 0-1.19.17-1.64.45\"/>\n        <path stroke-width=\".26\" stroke-linecap=\"round\" d=\"M335.21 219.99a2.85 2.85 0 0 0-2.61-3.96c-.5 0-.97.13-1.38.37\"/>\n        <ellipse cx=\"313.57\" cy=\"218.68\" rx=\".45\" ry=\".43\"/>\n        <ellipse cx=\"313.74\" cy=\"217.1\" rx=\".45\" ry=\".43\"/>\n        <ellipse cx=\"314.76\" cy=\"215.9\" rx=\".45\" ry=\".43\"/>\n        <ellipse cx=\"316.11\" cy=\"215.25\" rx=\".45\" ry=\".43\"/>\n        <ellipse cx=\"317.55\" cy=\"215.31\" rx=\".45\" ry=\".43\"/>\n        <ellipse fill=\"#fff\" cx=\"318.43\" cy=\"217.08\" rx=\".45\" ry=\".43\"/>\n        <ellipse cx=\"318.68\" cy=\"215.58\" rx=\".45\" ry=\".43\"/>\n        <ellipse cx=\"319.81\" cy=\"214.64\" rx=\".45\" ry=\".43\"/>\n        <ellipse cx=\"321.23\" cy=\"214.19\" rx=\".45\" ry=\".43\"/>\n        <ellipse cx=\"322.67\" cy=\"214.24\" rx=\".45\" ry=\".43\"/>\n        <ellipse cx=\"326.94\" cy=\"214.24\" rx=\".45\" ry=\".43\"/>\n        <ellipse cx=\"328.39\" cy=\"214.19\" rx=\".45\" ry=\".43\"/>\n        <ellipse cx=\"329.8\" cy=\"214.64\" rx=\".45\" ry=\".43\"/>\n        <ellipse cx=\"330.93\" cy=\"215.58\" rx=\".45\" ry=\".43\"/>\n        <ellipse fill=\"#fff\" cx=\"331.18\" cy=\"217.08\" rx=\".45\" ry=\".43\"/>\n        <ellipse cx=\"332.06\" cy=\"215.31\" rx=\".45\" ry=\".43\"/>\n        <ellipse cx=\"333.51\" cy=\"215.25\" rx=\".45\" ry=\".43\"/>\n        <ellipse cx=\"334.86\" cy=\"215.9\" rx=\".45\" ry=\".43\"/>\n        <ellipse cx=\"335.88\" cy=\"217.1\" rx=\".45\" ry=\".43\"/>\n        <ellipse cx=\"336.05\" cy=\"218.68\" rx=\".45\" ry=\".43\"/>\n      </g>\n      <use xlink:href=\"#a\" x=\"149.17\"/>\n      <use xlink:href=\"#b\" x=\"149.17\"/>\n    </g>\n    <use xlink:href=\"#c\" x=\"149.17\"/>\n    <use xlink:href=\"#d\" transform=\"matrix(-1 0 0 1 500.57 0)\"/>\n    <g fill=\"#c8b100\" stroke=\"none\">\n      <path d=\"M166.42 264.65c1.99-.72 3.29-1.58 2.66-3.14-.41-1-1.43-1.19-2.97-.63l-2.71.99 2.44 6.03c.27-.12.54-.24.81-.34.28-.1.57-.18.85-.26l-1.08-2.64v-.01zm-1.18-2.91l.69-.25c.57-.21 1.21.1 1.5.8.21.53.16 1.13-.5 1.55-.21.13-.46.23-.7.33l-.99-2.43M172.78 259.22c-.29.08-.57.16-.86.22-.29.05-.59.09-.88.12l1.41 6.28 4.38-.88c-.05-.12-.12-.26-.14-.38-.03-.14-.03-.28-.04-.41-.77.22-1.61.46-2.61.66l-1.26-5.61M181.56 264.63c.82-2.28 1.82-4.46 2.81-6.67-.18.03-.36.06-.54.07s-.37.01-.54 0a56.6 56.6 0 0 1-1.87 4.8c-.82-1.51-1.73-2.99-2.43-4.51l-1.03.12c-.34.02-.7.01-1.04.02 1.26 2.06 2.48 4.11 3.64 6.23l.5-.08c.16-.01.33.01.5.02M190.72 259.8c.15-.31.31-.6.48-.89a3.59 3.59 0 0 0-1.81-.63c-1.79-.18-2.81.61-2.93 1.69-.26 2.26 3.31 2.07 3.14 3.57-.07.64-.75.9-1.48.83-.81-.08-1.41-.53-1.51-1.19l-.22-.02c-.12.39-.29.77-.48 1.15.53.34 1.21.53 1.85.59 1.83.19 3.22-.54 3.35-1.74.23-2.15-3.37-2.27-3.23-3.54.06-.53.47-.88 1.4-.79.67.07 1.08.43 1.26.95l.18.02M310.3 264.98c.62-2.33 1.41-4.58 2.19-6.87-.17.05-.35.09-.53.11-.17.03-.36.04-.54.05a54.86 54.86 0 0 1-1.42 4.94c-.96-1.44-2-2.84-2.83-4.3-.34.07-.68.15-1.02.2s-.69.07-1.04.11c1.45 1.94 2.85 3.89 4.2 5.91.16-.04.32-.1.5-.12.16-.02.33-.02.49-.03M316.48 258.16c-.29.01-.59.04-.88.03-.3 0-.6-.04-.89-.06l-.12 6.41 4.49.08c-.03-.13-.06-.28-.06-.41s.04-.27.07-.4c-.81.05-1.68.1-2.71.08l.1-5.73M323.52 259.21c.72.06 1.41.19 2.1.31-.01-.13-.03-.27-.02-.41.01-.13.06-.26.1-.39l-6.07-.5c.01.14.03.27.02.4-.01.14-.06.27-.1.4.62-.02 1.37-.02 2.21.05l-.53 5.77c.29 0 .59 0 .88.03.3.02.59.07.88.11l.53-5.77M326.01 265.53c.29.05.59.09.88.15.28.06.57.15.85.23l.72-2.94.08.01.49 1.19.9 2.22c.36.06.71.11 1.05.18.36.08.7.18 1.04.28l-.31-.67c-.48-1-.99-2.01-1.41-3.02 1.12.04 1.98-.36 2.2-1.26.15-.62-.1-1.11-.68-1.53-.44-.31-1.28-.47-1.83-.6l-2.44-.53-1.54 6.29m3.14-5.42c.71.16 1.59.27 1.59 1.07-.01.21-.03.35-.06.48-.23.94-.94 1.26-2.13.91l.6-2.46M337.57 267.46c-.05.69-.18 1.37-.31 2.1.3.14.61.27.9.44.3.16.57.34.86.52l.6-7.23a2.92 2.92 0 0 1-.78-.43l-6.38 4.05c.17.08.35.16.51.25l.47.28c.54-.45 1.1-.82 1.74-1.3l2.39 1.31v.01zm-1.81-1.66l2.13-1.37-.25 2.4-1.88-1.03\"/>\n    </g>\n    <g>\n      <path fill=\"#ad1519\" stroke-width=\".26\" d=\"M249.65 182.72c6.64 0 12.56.99 16.41 2.51 2.2 1 5.16 1.73 8.4 2.17 2.47.33 4.81.39 6.85.24 2.73-.06 6.67.74 10.62 2.48a28.74 28.74 0 0 1 7.8 4.91l-1.57 1.4-.45 3.96-4.3 4.92-2.15 1.83-5.09 4.07-2.6.21-.79 2.25-32.91-3.86-33.02 3.86-.79-2.25-2.61-.21-5.08-4.07-2.15-1.83-4.3-4.92-.44-3.96-1.58-1.4a28.9 28.9 0 0 1 7.8-4.91c3.95-1.74 7.89-2.54 10.62-2.48 2.04.15 4.38.09 6.85-.24 3.24-.44 6.2-1.17 8.4-2.17 3.86-1.52 9.44-2.51 16.08-2.51z\"/>\n      <g fill=\"#c8b100\">\n        <path d=\"M225.34 191.42l1.38 1.11 2.08-3.4a7.71 7.71 0 0 1-3.74-7.42c.21-4.34 5.5-7.92 12.2-7.92 3.48 0 6.63.95 8.84 2.48.06-.67.12-1.25.21-1.86a18.11 18.11 0 0 0-9.05-2.28c-7.71 0-13.74 4.39-14.03 9.57a9.24 9.24 0 0 0 3.21 7.91l-1.1 1.81\"/>\n        <path d=\"M225.43 191.46c-2.63-1.97-4.27-4.64-4.27-7.58 0-3.38 2.22-6.4 5.58-8.41a8.87 8.87 0 0 0-3.56 7.15 9.24 9.24 0 0 0 3.26 6.99l-1.01 1.85\"/>\n        <path d=\"M202.21 194.89a9.06 9.06 0 0 1-1.47-10.07c2.13-4.38 8.82-7.57 16.76-7.57 2.16 0 4.23.23 6.14.67-.42.46-.75.97-1.08 1.48a26.5 26.5 0 0 0-5.06-.48c-7.27 0-13.36 2.83-15.12 6.65a7.33 7.33 0 0 0-.73 3.2c0 2.32 1.09 4.4 2.79 5.82l-2.63 4.3-1.41-1.12 1.81-2.88z\"/>\n        <path d=\"M204.9 180.48a11.07 11.07 0 0 0-4.16 4.34 9.06 9.06 0 0 0 1.47 10.07l-1.6 2.59a10.86 10.86 0 0 1-2.42-6.7c0-4.2 2.67-7.87 6.71-10.3zM250.04 171.27a3.68 3.68 0 0 1 3.64 2.73c.23 1.38.38 2.95.41 4.62.01.18-.01.35-.01.52 0 .2.04.41.05.61.06 3.52.56 6.62 1.27 8.52l-5.36 5.14-5.43-5.14c.72-1.9 1.22-5 1.29-8.52 0-.2.04-.41.04-.61l-.01-.52c.03-1.67.18-3.24.41-4.62.36-1.57 1.94-2.73 3.7-2.73z\"/>\n        <path d=\"M250.04 172.94c.91 0 1.68.58 1.87 1.39.23 1.31.37 2.8.4 4.38l-.01.48c0 .2.03.39.04.59.05 3.32.53 6.25 1.21 8.05l-3.54 3.35-3.54-3.35c.67-1.8 1.15-4.73 1.21-8.05 0-.2.04-.39.04-.59l-.01-.48c.03-1.58.17-3.07.4-4.38.18-.81 1.02-1.39 1.93-1.39zM274.7 191.42l-1.39 1.11-2.08-3.4a7.7 7.7 0 0 0 3.75-7.42c-.21-4.34-5.5-7.92-12.2-7.92-3.49 0-6.63.95-8.84 2.48a25 25 0 0 0-.22-1.86 18.15 18.15 0 0 1 9.06-2.28c7.71 0 13.74 4.39 14.03 9.57a9.25 9.25 0 0 1-3.22 7.91l1.11 1.81\"/>\n        <path d=\"M274.61 191.46c2.63-1.97 4.27-4.64 4.27-7.58 0-3.38-2.22-6.4-5.58-8.41a8.87 8.87 0 0 1 3.56 7.15 9.25 9.25 0 0 1-3.27 6.99l1.02 1.85\"/>\n        <path d=\"M297.83 194.89a9.06 9.06 0 0 0 1.47-10.07c-2.14-4.38-8.82-7.57-16.76-7.57-2.16 0-4.23.23-6.15.67.43.46.76.97 1.09 1.48 1.58-.31 3.29-.48 5.06-.48 7.27 0 13.35 2.83 15.11 6.65.47.97.73 2.06.73 3.2 0 2.32-1.09 4.4-2.79 5.82l2.63 4.3 1.42-1.12-1.81-2.88z\"/>\n        <path d=\"M295.14 180.48a11.07 11.07 0 0 1 4.16 4.34 9.06 9.06 0 0 1-1.47 10.07l1.6 2.59a10.85 10.85 0 0 0 2.41-6.7c0-4.2-2.67-7.87-6.7-10.3z\"/>\n        <ellipse fill=\"#005bbf\" stroke-width=\".26\" cx=\"250.05\" cy=\"167.3\" rx=\"4.43\" ry=\"4.2\"/>\n        <path stroke-width=\".26\" d=\"M248.89 155.54v2.26h-2.42v2.3h2.42V166.71h-3.05c-.03.21-.22.37-.22.59 0 .58.12 1.14.35 1.64 0 .02.02.02.03.03h8.12l.03-.03c.22-.5.35-1.06.35-1.64 0-.22-.19-.38-.22-.59h-2.96v-6.61h2.42v-2.3h-2.42v-2.26h-2.43z\"/>\n      </g>\n      <g fill=\"#fff\">\n        <ellipse cx=\"250.04\" cy=\"188.94\" rx=\"1.91\" ry=\"1.8\"/>\n        <ellipse cx=\"250.04\" cy=\"185.4\" rx=\"1.91\" ry=\"1.8\"/>\n        <ellipse cx=\"250.04\" cy=\"181.6\" rx=\"1.52\" ry=\"1.44\"/>\n        <ellipse cx=\"250.04\" cy=\"178.18\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"250.04\" cy=\"175.18\" rx=\".88\" ry=\".83\"/>\n        <ellipse cx=\"198.94\" cy=\"198.67\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"197.44\" cy=\"196.02\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"196.44\" cy=\"192.94\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"196.31\" cy=\"189.64\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"197.12\" cy=\"186.4\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"198.81\" cy=\"183.45\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"201.06\" cy=\"181.02\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"203.68\" cy=\"179.01\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"206.8\" cy=\"177.36\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"210.04\" cy=\"176.19\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"213.66\" cy=\"175.54\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"217.1\" cy=\"175.36\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"220.47\" cy=\"175.48\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"224.21\" cy=\"190.32\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"222.34\" cy=\"187.65\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"221.35\" cy=\"184.75\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"221.47\" cy=\"181.57\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"222.16\" cy=\"178.37\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"223.84\" cy=\"175.48\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"226.4\" cy=\"173.47\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"229.39\" cy=\"171.81\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"232.7\" cy=\"170.82\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"236.13\" cy=\"170.23\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"239.5\" cy=\"170.28\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"242.99\" cy=\"170.87\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"246.23\" cy=\"171.99\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"253.8\" cy=\"171.99\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"257.04\" cy=\"170.87\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"260.54\" cy=\"170.28\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"263.9\" cy=\"170.23\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"267.34\" cy=\"170.82\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"270.64\" cy=\"171.81\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"273.64\" cy=\"173.47\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"276.19\" cy=\"175.48\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"277.88\" cy=\"178.37\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"278.57\" cy=\"181.57\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"278.69\" cy=\"184.75\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"277.69\" cy=\"187.65\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"275.83\" cy=\"190.32\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"279.57\" cy=\"175.48\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"282.94\" cy=\"175.36\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"286.38\" cy=\"175.54\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"290\" cy=\"176.19\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"293.24\" cy=\"177.36\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"296.36\" cy=\"179.01\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"298.97\" cy=\"181.02\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"301.22\" cy=\"183.45\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"302.91\" cy=\"186.4\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"303.72\" cy=\"189.64\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"303.6\" cy=\"192.94\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"302.6\" cy=\"196.02\" rx=\"1.1\" ry=\"1.04\"/>\n        <ellipse cx=\"301.1\" cy=\"198.67\" rx=\"1.1\" ry=\"1.04\"/>\n      </g>\n      <g fill=\"#c8b100\">\n        <path d=\"M250.15 226.18c-12.26-.02-23.25-1.47-31.09-3.83a1.2 1.2 0 0 1-.84-1.25c-.01-.52.29-1 .84-1.17 7.84-2.36 18.83-3.81 31.09-3.83 12.27.02 23.25 1.47 31.09 3.83.55.17.84.65.83 1.17a1.2 1.2 0 0 1-.83 1.25c-7.84 2.36-18.82 3.81-31.09 3.83\"/>\n        <path d=\"M250.07 216.09c-12.41.03-23.55 1.58-31.39 4 .65-.31.59-1.12-.22-3.2-.98-2.53-2.5-2.42-2.5-2.42 8.66-2.56 20.73-4.16 34.16-4.18 13.44.02 25.6 1.62 34.27 4.18 0 0-1.53-.11-2.51 2.42-.81 2.08-.87 2.89-.21 3.2-7.84-2.42-19.19-3.97-31.6-4\"/>\n        <path d=\"M250.12 210.3c-13.43.02-25.5 1.62-34.16 4.18-.58.17-1.19-.05-1.38-.6s.12-1.18.7-1.35c8.71-2.67 21.08-4.35 34.84-4.38 13.77.03 26.19 1.71 34.9 4.38.58.17.89.8.7 1.35s-.8.77-1.38.6c-8.67-2.56-20.78-4.16-34.22-4.18\"/>\n        <path d=\"M250.2 199.78l1.23.22a4.8 4.8 0 0 0 4.68 6.28 4.89 4.89 0 0 0 4.67-3.21c.08.05.47-1.68.68-1.66.17.02.15 1.8.22 1.77.31 2.34 2.46 3.93 4.87 3.93a4.79 4.79 0 0 0 4.87-5.22l1.54-1.52.83 1.94c-.33.61-.46 1.3-.46 2.03 0 2.46 2.1 4.44 4.69 4.44 1.63 0 3.06-.78 3.9-1.97l.99-1.25-.01 1.53c0 1.55.66 2.93 2.16 3.18 0 0 1.73.1 4.03-1.7 2.29-1.8 3.55-3.29 3.55-3.29l.2 1.8s-1.9 2.95-3.97 4.15c-1.14.66-2.86 1.35-4.23 1.13-1.44-.24-2.48-1.4-3.01-2.74a6.97 6.97 0 0 1-3.55.97c-2.81 0-5.33-1.54-6.32-3.86a7.26 7.26 0 0 1-10.77-.31 7.2 7.2 0 0 1-4.88 1.87 7.2 7.2 0 0 1-5.94-3.05 7.2 7.2 0 0 1-5.94 3.05 7.17 7.17 0 0 1-4.87-1.87 7.28 7.28 0 0 1-10.77.31c-1 2.32-3.52 3.86-6.32 3.86a6.94 6.94 0 0 1-3.55-.97c-.54 1.34-1.57 2.5-3.02 2.74-1.36.22-3.08-.47-4.22-1.13-2.08-1.2-3.98-4.15-3.98-4.15l.2-1.8s1.27 1.49 3.56 3.29c2.29 1.81 4.02 1.7 4.02 1.7 1.51-.25 2.16-1.63 2.16-3.18l-.01-1.53.99 1.25a4.76 4.76 0 0 0 3.9 1.97 4.57 4.57 0 0 0 4.69-4.44c0-.73-.13-1.42-.46-2.03l.83-1.94 1.54 1.52c-.02.19-.04.38-.04.57 0 2.57 2.2 4.65 4.91 4.65 2.42 0 4.56-1.59 4.88-3.93.06.03.05-1.75.22-1.77.2-.02.6 1.71.67 1.66a4.9 4.9 0 0 0 4.68 3.21 4.79 4.79 0 0 0 4.67-6.28l1.29-.22\"/>\n        <path d=\"M208.37 206.32a2.24 2.24 0 0 0-.72-1.06c-.79-.68-1.84-.79-2.36-.25a1 1 0 0 0-.17.25s-1.11-2.08-2.41-2.78c-1.29-.7-3.49-.52-3.49-.52 0-1.6 1.3-2.89 2.99-2.89.99 0 1.92.41 2.48 1.11l.23-1.07s1.36.27 1.98 1.82-.06 3.8-.06 3.8.34-.96.85-1.61a8.35 8.35 0 0 1 2.49-1.66c.67-.31 1.37-.79 1.37-.79s.03.18.05.61c.03.51-.01.83-.01.83a8.16 8.16 0 0 1 3.83.48 4.95 4.95 0 0 1-2.62 2.3 12.92 12.92 0 0 0 1.27 1.24l-1.27.19c-.43.05-1.84.28-2.69.22-.62-.04-1.32-.14-1.74-.22\"/>\n        <path fill=\"#ad1519\" d=\"M205.29 205.01c.52-.54 1.57-.43 2.36.25.8.67 1.02 1.66.51 2.19-.51.54-1.57.42-2.36-.25-.79-.68-1.02-1.66-.51-2.19\"/>\n        <path fill=\"#fff\" d=\"M216.39 205.91c-.28-.83-.03-1.65.57-1.83.6-.19 1.32.33 1.6 1.16s.03 1.65-.57 1.84c-.6.18-1.31-.34-1.6-1.17\"/>\n        <path d=\"M226.12 201.86a1.74 1.74 0 0 1-.44-2.31s-.88-.44-1.83-.69c-.72-.19-1.99-.2-2.37-.2-.38-.02-1.15-.03-1.15-.03a6.22 6.22 0 0 0 .78 1.3 5.21 5.21 0 0 0-3.03 2.09c.99.68 2.3 1.1 3.6.97 0 0-.12.34-.2.86-.06.43-.06.61-.06.61l1.07-.39c.35-.13 1.54-.55 2.15-.96.8-.54 1.48-1.25 1.48-1.25\"/>\n        <path d=\"M225.68 191.65a5.34 5.34 0 0 1 2.3 3.03s.13-.25.71-.59c.59-.33 1.09-.32 1.09-.32s-.17.97-.25 1.32c-.09.34-.09 1.38-.32 2.32a8.15 8.15 0 0 1-.63 1.68 1.98 1.98 0 0 0-1.58-.41c-.58.1-1.06.44-1.32.9 0 0-.66-.58-1.21-1.38-.55-.81-.93-1.78-1.13-2.08-.21-.3-.72-1.15-.72-1.15s.47-.18 1.14-.05c.67.12.88.32.88.32a5.08 5.08 0 0 1 1.04-3.59\"/>\n        <path d=\"M228.97 201.38a1.74 1.74 0 0 0-.42-2.3s.67-.71 1.47-1.26c.6-.41 1.8-.82 2.15-.95l1.07-.4s0 .18-.06.61c-.08.52-.2.87-.2.87 1.3-.14 2.62.29 3.61.98a5.25 5.25 0 0 1-3.04 2.08 6.3 6.3 0 0 0 .78 1.3l-1.15-.03c-.38 0-1.65-.01-2.37-.2-.95-.25-1.84-.69-1.84-.69\"/>\n        <ellipse fill=\"#ad1519\" cx=\"227.37\" cy=\"200.45\" rx=\"2.17\" ry=\"2.06\"/>\n        <path fill=\"#fff\" d=\"M237.76 201.77c-.11-.87.31-1.63.93-1.7.63-.07 1.23.57 1.34 1.44.11.86-.3 1.63-.93 1.7-.62.07-1.22-.57-1.34-1.44\"/>\n        <path d=\"M248.5 199.83a1.96 1.96 0 0 1-.02-2.65s-.89-.67-1.89-1.12c-.77-.35-2.18-.59-2.6-.67l-1.28-.24a6.2 6.2 0 0 0 .6 1.6 6.04 6.04 0 0 0-3.81 1.76 6.13 6.13 0 0 0 3.81 1.75s-.2.36-.4.93c-.16.46-.2.67-.2.67l1.28-.24c.42-.08 1.83-.32 2.6-.67 1-.46 1.91-1.11 1.91-1.11\"/>\n        <path d=\"M250.11 188.36a5.89 5.89 0 0 1 1.95 3.82s.19-.27.91-.53c.73-.26 1.28-.16 1.28-.16s-.39 1.05-.55 1.42c-.17.37-.39 1.53-.84 2.53-.44 1-1.05 1.76-1.05 1.76a2.24 2.24 0 0 0-3.34 0s-.61-.76-1.05-1.76c-.45-1-.67-2.16-.84-2.53s-.56-1.42-.56-1.42.56-.1 1.28.16.92.53.92.53c.1-1.46.86-2.87 1.89-3.82\"/>\n        <path d=\"M251.76 199.83a1.95 1.95 0 0 0 .02-2.65s.89-.67 1.9-1.12c.76-.35 2.17-.59 2.6-.67l1.26-.24s-.02.2-.19.67c-.2.56-.4.93-.4.93 1.47.08 2.86.81 3.81 1.76a6.08 6.08 0 0 1-3.81 1.75 6.6 6.6 0 0 0 .59 1.6l-1.26-.24c-.43-.08-1.84-.32-2.6-.67-1.01-.46-1.92-1.11-1.92-1.11\"/>\n        <ellipse fill=\"#ad1519\" cx=\"250.14\" cy=\"198.5\" rx=\"2.17\" ry=\"2.06\"/>\n        <path fill=\"#fff\" d=\"M262.58 201.77c.11-.87-.3-1.63-.93-1.7s-1.23.57-1.34 1.44c-.11.86.31 1.63.93 1.7.63.07 1.23-.57 1.34-1.44\"/>\n        <path d=\"M271.38 201.38a1.8 1.8 0 0 1-.25-1.23c.09-.44.33-.81.67-1.07 0 0-.67-.71-1.47-1.26-.61-.41-1.8-.82-2.16-.95l-1.06-.4s-.01.18.06.61c.08.52.19.87.19.87a5.44 5.44 0 0 0-3.6.98 5.23 5.23 0 0 0 3.03 2.08s-.23.28-.49.74c-.22.39-.28.56-.28.56l1.14-.03c.38 0 1.66-.01 2.37-.2.95-.25 1.84-.69 1.84-.69\"/>\n        <path d=\"M274.67 191.65a5.4 5.4 0 0 0-2.31 3.03s-.12-.25-.71-.59c-.58-.33-1.09-.32-1.09-.32s.17.97.26 1.32c.09.34.09 1.38.31 2.32.23.93.64 1.68.64 1.68a1.97 1.97 0 0 1 2.9.49s.66-.58 1.21-1.38c.54-.81.92-1.78 1.12-2.08.21-.3.72-1.15.72-1.15s-.47-.18-1.14-.05c-.67.12-.88.32-.88.32a5.07 5.07 0 0 0-1.03-3.59\"/>\n        <path d=\"M274.22 201.86a1.75 1.75 0 0 0 .45-2.31s.88-.44 1.83-.69c.72-.19 1.99-.2 2.36-.2a42 42 0 0 1 1.15-.03s-.06.17-.28.55c-.26.46-.49.75-.49.75a5.28 5.28 0 0 1 3.03 2.09 5.55 5.55 0 0 1-3.6.97s.11.34.19.86c.06.43.06.61.06.61l-1.06-.39c-.36-.13-1.55-.55-2.16-.96-.79-.54-1.48-1.25-1.48-1.25\"/>\n        <ellipse fill=\"#ad1519\" cx=\"272.98\" cy=\"200.45\" rx=\"2.17\" ry=\"2.06\"/>\n        <path fill=\"#fff\" d=\"M283.96 205.91c.28-.83.03-1.65-.57-1.83-.6-.19-1.32.33-1.61 1.16-.28.83-.03 1.65.57 1.84.6.18 1.32-.34 1.61-1.17\"/>\n        <path d=\"M291.97 206.32c.11-.37.36-.75.72-1.06.79-.68 1.85-.79 2.36-.25.07.07.14.17.18.25 0 0 1.1-2.08 2.4-2.78s3.5-.52 3.5-.52c0-1.6-1.31-2.89-3-2.89-.99 0-1.92.41-2.47 1.11l-.23-1.07s-1.36.27-1.98 1.82.05 3.8.05 3.8-.33-.96-.84-1.61a8.35 8.35 0 0 0-2.49-1.66c-.68-.31-1.37-.79-1.37-.79s-.03.18-.06.61c-.02.51.02.83.02.83a8.12 8.12 0 0 0-3.83.48 4.9 4.9 0 0 0 2.61 2.3s-.43.36-.83.75c-.33.34-.43.49-.43.49l1.27.19c.43.05 1.84.28 2.68.22.63-.04 1.32-.14 1.74-.22\"/>\n        <path fill=\"#ad1519\" d=\"M295.05 205.01c-.51-.54-1.57-.43-2.36.25-.79.67-1.02 1.66-.51 2.19.51.54 1.57.42 2.36-.25.79-.68 1.02-1.66.51-2.19\"/>\n      </g>\n      <g fill=\"none\">\n        <path fill=\"#ad1519\" stroke-linejoin=\"round\" d=\"M250.12 224.57c-11.06-.01-21.07-1.29-28.68-3.26 7.61-1.97 17.62-3.17 28.68-3.19 11.07.02 21.13 1.22 28.74 3.19-7.61 1.97-17.67 3.25-28.74 3.26z\"/>\n        <path stroke-width=\".05\" d=\"M258.04 224.28v-6.01m-3.02 6.21l.04-6.37m-2.24 6.45v-6.49\"/>\n        <path stroke-width=\".09\" d=\"M250.95 224.64v-6.57\"/>\n        <path stroke-width=\".14\" d=\"M249.16 224.64v-6.57\"/>\n        <path stroke-width=\".18\" d=\"M247.48 224.64v-6.57\"/>\n        <path stroke-width=\".23\" d=\"M245.81 224.64v-6.57\"/>\n        <path stroke-width=\".28\" d=\"M244.32 224.64v-6.57\"/>\n        <path stroke-width=\".33\" d=\"M241.48 224.28l-.04-5.97m1.39 6.05v-6.25\"/>\n        <path stroke-width=\".37\" d=\"M238.86 224.01v-5.5m1.33 5.66l-.04-5.86\"/>\n        <path stroke-width=\".42\" d=\"M235.35 223.7v-4.84m1.15 4.92v-5.08m1.19 5.24v-5.28\"/>\n        <path stroke-width=\".46\" d=\"M234.12 223.66v-4.68\"/>\n        <path stroke-width=\".51\" d=\"M232.97 223.42v-4.36\"/>\n        <path stroke-width=\".56\" d=\"M231.74 223.31v-4.06\"/>\n        <path stroke-width=\".6\" d=\"M229.22 222.95l-.04-3.22m1.33 3.38v-3.62\"/>\n        <path stroke-width=\".63\" d=\"M227.93 222.68v-2.84\"/>\n        <path stroke-width=\".68\" d=\"M226.74 222.45v-2.36\"/>\n        <path stroke-width=\".73\" d=\"M225.45 222.13v-1.85\"/>\n        <path stroke-width=\".77\" d=\"M224.12 221.98v-1.38\"/>\n        <path stroke-width=\".91\" d=\"M222.72 221.66v-.67\"/>\n        <path d=\"M220.12 221.66c7.75-2.18 18.29-3.52 30-3.54 11.72.02 22.31 1.36 30.06 3.54\"/>\n        <path fill=\"#ad1519\" d=\"M216.72 217.16l1.22-1.59 3.37.43-2.69 1.96-1.9-.8\"/>\n        <path fill=\"#fff\" d=\"M224.03 215.28c0-.58.49-1.04 1.1-1.04s1.1.46 1.1 1.04c0 .57-.49 1.04-1.1 1.04s-1.1-.47-1.1-1.04\"/>\n        <path fill=\"#058e6e\" d=\"M233.64 215.07l-2.36.27c-.61.07-1.17-.33-1.24-.9-.08-.57.35-1.09.96-1.15l2.37-.28 2.42-.28c.6-.07 1.15.33 1.22.9s-.36 1.09-.96 1.16l-2.41.28\"/>\n        <path fill=\"#fff\" d=\"M240.54 213.35c0-.58.49-1.04 1.1-1.04.6 0 1.1.46 1.1 1.04 0 .57-.5 1.04-1.1 1.04-.61 0-1.1-.47-1.1-1.04\"/>\n        <path fill=\"#ad1519\" d=\"M250.15 214.16h-3.29c-.6 0-1.11-.46-1.11-1.03 0-.58.49-1.04 1.1-1.04h6.64c.61 0 1.1.46 1.1 1.04 0 .57-.51 1.03-1.11 1.03h-3.33\"/>\n        <path fill=\"#fff\" d=\"M257.56 213.35c0-.58.5-1.04 1.1-1.04.61 0 1.1.46 1.1 1.04 0 .57-.49 1.04-1.1 1.04-.6 0-1.1-.47-1.1-1.04\"/>\n        <path fill=\"#058e6e\" d=\"M266.66 215.07l2.36.27c.6.07 1.17-.33 1.24-.9s-.36-1.09-.96-1.15l-2.37-.28-2.42-.28c-.61-.07-1.15.33-1.22.9-.08.57.36 1.09.96 1.16l2.41.28\"/>\n        <path fill=\"#fff\" d=\"M274.07 215.28c0-.58.49-1.04 1.1-1.04s1.1.46 1.1 1.04c0 .57-.49 1.04-1.1 1.04s-1.1-.47-1.1-1.04\"/>\n        <path fill=\"#ad1519\" d=\"M283.57 217.16l-1.21-1.59-3.37.43 2.69 1.96 1.89-.8\"/>\n      </g>\n    </g>\n    <g stroke-width=\".52\">\n      <path fill=\"#ccc\" d=\"M250.49 344.33a85.24 85.24 0 0 1-36.95-8.54 23.65 23.65 0 0 1-13.36-21.19v-33.3H300.6v33.3c0 9.19-5.32 17.21-13.36 21.19a84.33 84.33 0 0 1-36.75 8.54z\"/>\n      <path fill=\"#ffd691\" d=\"M252.91 329.55c2.09.63 3.15 2.19 3.15 4.01 0 2.38-2.3 4.18-5.3 4.18-2.99 0-5.42-1.8-5.42-4.18 0-1.79 1-3.8 3.08-3.94 0 0-.06-.19-.24-.5l-.64-.66s.79-.15 1.25.02c.46.18.77.47.77.47s.21-.43.52-.76c.3-.33.7-.53.7-.53s.46.38.61.64c.15.27.25.59.25.59s.42-.35.79-.49c.37-.15.84-.26.84-.26s-.13.46-.22.69-.14.72-.14.72\"/>\n      <path fill=\"#058e6e\" d=\"M250.32 340.32s-3.98-2.68-5.7-3.04c-2.21-.47-4.69-.09-5.76-.15.03.03 1.29.93 1.84 1.48s2.39 1.65 3.43 1.91c3.22.81 6.19-.2 6.19-.2M251.46 340.56s2.54-2.66 5.21-3.02c3.15-.44 5.22.26 6.44.58.03 0-1.01.49-1.56.87-.55.37-1.97 1.57-4.14 1.59-2.18.03-4.58-.23-4.97-.17l-.98.15\"/>\n      <path fill=\"#ad1519\" d=\"M250.69 337.28a5.06 5.06 0 0 1 .01-7.43 5.08 5.08 0 0 1-.01 7.43\"/>\n      <path fill=\"#058e6e\" d=\"M249.68 342.71s.61-1.52.67-2.83c.06-1.09-.15-2.17-.15-2.17h.8s.39 1.16.39 2.17c0 1.02-.18 2.37-.18 2.37s-.55.08-.73.17c-.19.09-.8.29-.8.29\"/>\n      <g fill=\"#c8b100\">\n        <path fill=\"#ad1519\" d=\"M250.32 314.57c0 13.16-11.16 23.82-25.05 23.82s-25.15-10.66-25.15-23.82v-33.35h50.2v33.35\"/>\n        <path d=\"M200.03 314.12a25.44 25.44 0 0 0 5.73 15.67v-49.47h-5.66l-.07 33.8zM211.08 334.23c1.57.83 3.72 2.22 6.03 2.77l-.15-56.96h-5.88v54.19zM222.28 338.25c2.3.23 4.01.19 5.87 0v-58.21h-5.87v58.21zM233.32 337c2.3-.46 4.9-1.89 6.03-2.63v-54.33h-5.88l-.15 56.96zM244.81 329.24c2.45-2.18 4.75-7.12 5.59-12.76l.14-36.44h-5.87l.14 49.2z\"/>\n      </g>\n      <g>\n        <path fill=\"#ad1519\" d=\"M300.65 281.22v33.35c0 13.16-11.28 23.82-25.17 23.82-13.9 0-25.16-10.66-25.16-23.82v-33.35h50.33\"/>\n        <path id=\"e\" fill=\"#c8b100\" stroke=\"#c8b100\" stroke-width=\".26\" d=\"M272.71 306.14c.05-.14.12-.27.19-.4l-4.26-4.74-1.67.72-3.06-3.39 1-1.46-5.34-5.99-.27.04.03 4.02 1.75.5v4.46l-1.75.48-.03 4.08c.84.26 1.48.88 1.74 1.67l3.21.01.51-1.67h4.72l.5 1.67zm-6.98-18.5v1.61h2.76v-1.61zm-7.3 20.37c.64 0 1.16-.49 1.16-1.1s-.52-1.11-1.16-1.11c-.65 0-1.17.5-1.17 1.11s.52 1.1 1.17 1.1zm15.99-9.73l-1.76-.48v-4.46l1.76-.5-.01-1.92a2.67 2.67 0 0 1-1.79-1.67h-2.68l-.51 1.67h-4.71l-.51-1.67h-3.09c-.08.22-.17.42-.29.61l5.38 5.96 1.67-.71 3.06 3.4-1 1.45 4.18 4.64.28-.12zm-7.25-1.39l-1.29 1.04 1.77 1.98 1.29-1.05zm8 36.19a2.69 2.69 0 0 1-2.51-2.02 18.08 18.08 0 0 1-4.73-1.3l.84-1.43c1.29.55 2.66.91 4.08 1.11.31-.66.86-1.16 1.58-1.4l.01-5.62-1.76-.49v-4.46l1.76-.48v-7.64a.88.88 0 0 1-.2-.09l-3.98 4.42 1 1.44-3.06 3.4-1.67-.71-3.3 3.67c.57.87.55 2-.11 2.85a15.58 15.58 0 0 0 3.24 2.75l-.84 1.44a17.53 17.53 0 0 1-3.79-3.22c-.87.26-1.86.11-2.6-.5a2.48 2.48 0 0 1-.3-3.64l.14-.16a15.92 15.92 0 0 1-1.32-5l1.71.01c.14 1.5.51 2.93 1.09 4.27.49-.06 1-.01 1.46.16l3.32-3.68-1-1.45 3.06-3.4 1.67.72 3.99-4.43a2.15 2.15 0 0 1-.21-.46l-2.76.01-.5 1.67h-4.72l-.51-1.67-3.24-.01c-.27.76-.9 1.36-1.69 1.62l-.01 4.04-1.71-.01v-4.01a2.62 2.62 0 0 1-1.91-2.47c0-1.15.82-2.15 1.92-2.48l.01-4.05-1.76-.48v-4.46l1.76-.5v-4.05a2.6 2.6 0 0 1-1.84-2.45 2.65 2.65 0 0 1 2.73-2.58c1.22 0 2.25.74 2.61 1.78h3.09l.51-1.67h4.71l.51 1.67h2.68a2.7 2.7 0 0 1 2.56-1.78l.07 8.37h-.85v2.61h.85l-.03 21.59h-.78v2.61h.78zm-5.91-18.31l-1.29-1.04-1.78 1.98 1.29 1.04zm-9.96-18.44h-1.69l-.01 2.61h1.7zm9.16 11.41v-1.6h-2.85v1.6zm-10.6 9.69l-1.76-.39-.25-4.45 1.75-.58v2.56c0 .99.09 1.92.26 2.86zm1.46-5.52l1.75.41s.09 2.87.05 2.22c-.04-.74.19 2.24.19 2.24l-1.76.58c-.18-.9-.24-1.84-.24-2.79zm10.81 16.93l.39-1.7a14.32 14.32 0 0 1-4.17-2.09l-1.26 1.11a16.6 16.6 0 0 0 5.04 2.68zm-.85 1.44l-1.3 1.22a19.29 19.29 0 0 1-4.12-2.11l.38-1.77a18.27 18.27 0 0 0 5.04 2.66z\"/>\n        <use xlink:href=\"#e\" transform=\"matrix(-1 0 0 1 550.43 0)\"/>\n        <path fill=\"#058e6e\" d=\"M272.59 306.94c0-1.44 1.23-2.6 2.74-2.6s2.73 1.16 2.73 2.6c0 1.43-1.22 2.58-2.73 2.58s-2.74-1.15-2.74-2.58\" stroke=\"none\"/>\n      </g>\n      <g fill=\"#c8b100\" stroke-width=\".46\">\n        <path fill=\"#ad1519\" stroke-width=\".52\" d=\"M200.12 281.25h50.18v-55.72h-50.18v55.72z\"/>\n        <path d=\"M217.34 238.41h-.92v-.92h-1.62v3.69h1.62v2.55h-3.47v7.39h1.85v14.79h-3.7v7.63h28.42v-7.63h-3.69v-14.79h1.85v-7.39h-3.47v-2.55h1.62v-3.69h-1.62v.92h-.93v-.92h-1.61v.92h-1.16v-.92h-1.62v3.69h1.62v2.55h-3.46v-8.09h1.84v-3.7h-1.84v.93h-.93v-.93h-1.62v.93h-.92v-.93h-1.85v3.7h1.85v8.09h-3.47v-2.55h1.62v-3.69h-1.62v.92h-.92v-.92h-1.85v.92zm-6.24 35.13h28.42m-28.42-1.85h28.42m-28.42-1.85h28.42m-28.42-1.85h28.42m-28.42-2.08h28.42m-24.72-1.62h21.03m-21.03-1.85h21.03m-21.03-2.08h21.03m-21.03-1.84h21.03m-21.03-1.85h21.03m-21.03-1.85h21.03m-21.03-1.85h21.03m-22.88-1.85h24.73m-24.73-1.85h24.73m-24.73-1.85h24.73m-24.73-1.84h24.73m-21.26-1.85h17.79m-10.63-1.85h3.47m-3.47-1.85h3.47m-3.47-1.85h3.47m-3.47-1.85h3.47m-5.32-2.31h7.16m-12.47 7.86h3.69m-5.31-2.31h6.93m-6.93 33.97v-1.85m0-1.85v-1.85m-1.85 1.85v1.85m3.47 0v-1.85m1.84 3.7v-1.85m0-1.85v-1.85m0-2.08v-1.62m0-1.85v-2.08m-1.84 7.63v-2.08m-3.47 2.08v-2.08m7.16 0v2.08m1.62-2.08v-1.62m-5.31-1.85v1.85m3.69-1.85v1.85m3.47-1.85v1.85m-1.85-1.85v-2.08m1.85-1.84v1.84m0-5.54v1.85m-1.85-3.7v1.85m1.85-3.7v1.85m-3.47-1.85v1.85m-3.69-1.85v1.85m-1.62-3.7v1.85m3.46-1.85v1.85m3.47-1.85v1.85m1.85-3.7v1.85m-3.47-1.85v1.85m-3.69-1.85v1.85m-1.62-3.69v1.84m6.93-1.84v1.84m-3.47-5.54v1.85m15.95-1.85h-3.7m5.32-2.31h-6.94m6.94 33.97v-1.85m0-1.85v-1.85m1.85 1.85v1.85m-3.47 0v-1.85m-1.85 3.7v-1.85m0-1.85v-1.85m0-2.08v-1.62m0-1.85v-2.08m1.85 7.63v-2.08m3.47 2.08v-2.08m-7.17 0v2.08m-1.62-2.08v-1.62m5.32-1.85v1.85m-3.7-1.85v1.85m-3.46-1.85v1.85m1.84-1.85v-2.08m-1.84-1.84v1.84m0-5.54v1.85m1.84-3.7v1.85m-1.84-3.7v1.85m3.46-1.85v1.85m3.7-1.85v1.85m1.62-3.7v1.85m-3.47-1.85v1.85m-3.47-1.85v1.85m-1.84-3.7v1.85m3.46-1.85v1.85m3.7-1.85v1.85m1.62-3.69v1.84m-6.94-1.84v1.84m3.47-5.54v1.85m-7.16 18.71v-2.08m0-5.54v-1.85m0 5.55v-1.85m0-5.55v-1.85m0-1.85v-1.84m0-3.7v-1.85m0-1.85v-1.85m-8.78 4.85h3.69m3.47-5.54h3.47m3.46 5.54h3.7\"/>\n        <path d=\"M230.05 273.54v-4.86c0-.92-.46-3.7-4.85-3.7-4.16 0-4.62 2.78-4.62 3.7v4.86h9.47z\"/>\n        <path d=\"M222.19 268.91l-2.31-.23c0-.92.23-2.31.93-2.77l2.08 1.62c-.23.23-.7.92-.7 1.38zM226.12 266.6l1.16-2.08a5.55 5.55 0 0 0-2.08-.46c-.46 0-1.39.23-1.85.46l1.15 2.08h1.62zM228.43 268.91l2.31-.23c0-.92-.23-2.31-.92-2.77l-2.08 1.62c.23.23.69.92.69 1.38zM221.73 260.83v-5.09c0-1.38-.92-2.54-2.54-2.54s-2.54 1.16-2.54 2.54v5.09h5.08zM228.89 260.83v-5.09c0-1.38.93-2.54 2.55-2.54 1.61 0 2.54 1.16 2.54 2.54v5.09h-5.09zM220.11 248.35l.23-4.62h-4.39l.47 4.62h3.69zM227.05 248.35l.46-4.62h-4.39l.23 4.62h3.7zM230.51 248.35l-.46-4.62h4.62l-.46 4.62h-3.7z\"/>\n        <g fill=\"#0039f0\" stroke=\"none\">\n          <path d=\"M228.43 273.54v-4.16c0-.7-.46-2.78-3.23-2.78a2.8 2.8 0 0 0-3.01 2.78v4.16h6.24zM221.27 260.36v-4.39c0-1.15-.69-2.31-2.08-2.31s-2.08 1.16-2.08 2.31v4.39h4.16zM229.36 260.36v-4.39c0-1.15.69-2.31 2.08-2.31 1.38 0 2.08 1.16 2.08 2.31v4.39h-4.16z\"/>\n        </g>\n      </g>\n      <g>\n        <path fill=\"#ccc\" d=\"M250.28 281.25h50.32v-55.72h-50.32v55.72z\"/>\n        <path fill=\"#db4446\" stroke-width=\".39\" d=\"M275.93 239.26l.05-.62.09-.34s-1.61.13-2.46-.11-1.61-.59-2.4-1.25c-.79-.68-1.1-1.1-1.67-1.18-1.36-.22-2.4.4-2.4.4s1.02.37 1.78 1.31 1.59 1.41 1.95 1.53c.59.18 2.66.05 3.22.07.57.03 1.84.19 1.84.19z\"/>\n        <g fill=\"none\" stroke-width=\".39\">\n          <path fill=\"#ed72aa\" d=\"M283.46 237s.01.72.08 1.4c.06.67-.22 1.24-.11 1.61s.16.66.3.93c.14.26.21.94.21.94l-.74-.54c-.35-.27-.6-.44-.6-.44l.1 1.03c.04.31.22.89.51 1.24.29.33.87.89 1.05 1.33.18.45.14 1.44.14 1.44s-.46-.75-.87-.89c-.39-.14-1.26-.62-1.26-.62s.79.79.79 1.55c0 .75-.32 1.6-.32 1.6s-.36-.68-.83-1.12c-.47-.45-1.13-.9-1.13-.9s.52 1.17.52 1.95c0 .79-.15 2.47-.15 2.47s-.39-.64-.79-.96c-.4-.31-.87-.58-1.02-.78-.14-.21.48.64.54 1.16.07.51.32 2.35 1.92 4.69.94 1.37 2.39 3.77 5.5 2.98 3.11-.78 1.96-4.97 1.3-6.92a17.53 17.53 0 0 1-.94-4.87c.04-.75.58-2.97.51-3.39-.07-.41-.24-2 .14-3.28.4-1.33.73-1.85.95-2.4.21-.55.39-.86.46-1.34s.07-1.37.07-1.37.58 1.06.73 1.44c.14.38.14 1.5.14 1.5s.11-1.12.98-1.67 1.88-1.13 2.13-1.44.33-.51.33-.51-.08 1.92-.62 2.67c-.36.49-1.77 2.09-1.77 2.09s.73-.28 1.23-.3c.51-.04.87 0 .87 0s-.62.48-1.41 1.64c-.8 1.16-.47 1.26-1.05 2.22s-1.05 1-1.78 1.58c-1.08.87-.5 4.34-.36 4.86.15.51 2.03 4.76 2.07 5.79.03 1.03.21 3.33-1.6 4.8-1.16.95-3.07.96-3.51 1.23-.43.28-1.29 1.13-1.29 2.91 0 1.79.64 2.06 1.15 2.51.51.44 1.16.2 1.3.55.15.34.22.54.44.75.21.2.36.44.29.82-.08.38-.91 1.23-1.2 1.85-.29.61-.87 2.23-.87 2.47s-.07.99.18 1.37c0 0 .91 1.06.29 1.26-.4.14-.78-.25-.97-.2-.54.14-.83.47-.98.45-.36-.07-.36-.25-.4-.76-.03-.51-.01-.72-.17-.72-.22 0-.33.18-.37.45s-.04.89-.29.89-.61-.45-.83-.55-.83-.2-.87-.48c-.03-.27.36-.85.76-.96.4-.1.76-.3.51-.51-.26-.2-.51-.2-.76 0-.25.21-.79.04-.76-.27.04-.31.11-.69.07-.86-.03-.17-.47-.51.1-.82.59-.31.84.27 1.42.17s.86-.31 1.08-.65.18-1.06-.22-1.5c-.39-.45-.79-.52-.94-.8-.14-.27-.36-.92-.36-.92s.11 1.2.04 1.37-.04.89-.04.89-.39-.45-.72-.79c-.32-.34-.65-1.37-.65-1.37l-.03 1.34c0 .37.43.72.29.86-.15.13-.83-.72-1.02-.86-.18-.14-.76-.58-1.01-1.06s-.44-1.16-.51-1.41c-.07-.24-.19-1.31-.07-1.58.18-.4.47-1.13.47-1.13h-1.41c-.76 0-1.3-.23-1.59.28s-.15 1.54.21 2.88c.37 1.33.58 1.98.48 2.22-.11.24-.58.79-.76.89-.19.11-.69.07-.91-.03-.21-.1-.57-.27-1.26-.27s-1.12.03-1.37-.03c-.26-.07-.88-.38-1.17-.31s-.79.32-.65.72c.22.61-.21.75-.51.72-.29-.04-.53-.14-.9-.24-.36-.11-.9 0-.83-.42.07-.41.22-.44.4-.74.18-.32.25-.52.04-.54-.25-.02-.51-.05-.7.11-.2.16-.51.51-.76.38-.26-.14-.46-.43-.46-1.08 0-.64-.68-1.2-.05-1.17.62.03 1.41.48 1.55.13s.06-.51-.28-.78-.76-.43-.31-.77c.45-.35.56-.35.74-.54.17-.18.41-.79.73-.64.62.3.02.73.65 1.42.62.69 1.01.94 2.06.83 1.04-.11 1.33-.24 1.33-.54 0-.29-.09-.82-.12-1.04-.02-.21.15-.99.15-.99s-.48.3-.63.59c-.13.29-.42.8-.42.8s-.11-.6-.08-1.09c.02-.29.12-.79.11-.89-.03-.27-.23-.94-.23-.94s-.16.73-.28.94c-.11.21-.16 1.07-.16 1.07s-.67-.58-.48-1.55c.13-.75-.12-1.74.11-2.06.22-.33.75-1.64 2.06-1.69 1.3-.05 2.31.05 2.77.03.45-.03 2.06-.33 2.06-.33s-2.97-1.52-3.64-1.98a9.95 9.95 0 0 1-2.07-2.16c-.34-.54-.65-1.58-.65-1.58s-.53.02-1.02.29c-.48.27-.96.67-1.24.99s-.73 1.05-.73 1.05.08-.94.08-1.23-.06-.86-.06-.86-.33 1.28-1.01 1.76c-.68.49-1.47 1.15-1.47 1.15s.08-.71.08-.88c0-.16.17-.99.17-.99s-.48.72-1.21.86c-.74.13-1.81.11-1.9.56-.08.45.2 1.07.03 1.39s-.54.54-.54.54-.42-.35-.79-.38c-.36-.03-.71.16-.71.16s-.31-.4-.19-.67c.11-.26.67-.66.54-.83-.15-.16-.6.06-.88.19-.28.14-.88.27-.82-.19.05-.45.2-.72.05-1.04-.14-.32-.05-.53.18-.61.22-.08 1.12.02 1.21-.19.08-.21-.22-.48-.82-.61-.59-.14-.88-.49-.57-.78.32-.3.4-.38.54-.64.14-.27.2-.76.74-.51.53.24.42.83.99 1.01.56.19 1.89-.08 2.17-.24s1.19-.83 1.5-.99c.31-.15 1.61-1.12 1.61-1.12s-.76-.53-1.05-.8c-.28-.27-.78-.91-1.04-1.05a9.2 9.2 0 0 0-1.92-.64c-.42-.02-1.72-.48-1.72-.48s.59-.19.79-.35c.19-.16.64-.56.87-.53l.28.02s-1.21-.05-1.47-.13c-.25-.08-.99-.54-1.27-.54s-.84.11-.84.11.76-.48 1.38-.59c.62-.1 1.1-.08 1.1-.08s-.96-.27-1.19-.58c-.22-.33-.45-.8-.62-1.02-.17-.21-.28-.56-.59-.59s-.85.38-1.16.35-.54-.22-.57-.67c-.02-.46 0-.3-.1-.54-.12-.24-.57-.8-.15-.93.43-.14 1.33.08 1.42-.08.08-.16-.48-.65-.85-.83-.37-.19-.96-.51-.65-.78.31-.26.62-.37.79-.61s.37-.91.74-.7c.36.21.87 1.26 1.16 1.18.28-.08.3-.83.25-1.15-.06-.32 0-.88.28-.83s.51.43.96.46c.45.02 1.13-.11 1.07.21-.05.32-.31.71-.62 1.06-.3.36-.45 1.05-.25 1.5.2.46.71 1.19 1.16 1.48s1.3.51 1.84.85c.53.35 1.78 1.34 2.2 1.45s.85.32.85.32.48-.21 1.13-.21 2.14.1 2.71-.14 1.3-.64 1.08-1.15c-.23-.51-1.47-.96-1.36-1.36s.57-.43 1.33-.46c.76-.02 1.8.14 2-.94.2-1.06.26-1.68-.81-1.92-1.08-.24-1.87-.27-2.07-1.04-.2-.78-.39-.97-.17-1.18.23-.21.62-.32 1.41-.37.8-.06 1.7-.06 1.96-.25.25-.18.3-.69.61-.91.31-.21 1.53-.4 1.53-.4s1.46.71 2.8 1.71c1.21.9 2.3 2.23 2.3 2.23\"/>\n          <path d=\"M269 243.39s-.8.23-1.1.67c-.37.53-.34 1.07-.34 1.07s.68-.56 1.56-.33c.87.24.96.33 1.33.3s1.27-.35 1.27-.35-.74.86-.65 1.45c.08.58.19.85.17 1.15-.06.72-.6 1.61-.6 1.61s.31-.19 1.05-.35a4.6 4.6 0 0 0 1.75-.81c.39-.29.9-1.02.9-1.02s-.16 1 0 1.42c.17.44.23 1.67.23 1.67s.47-.42.85-.62c.19-.11.7-.38.9-.7.14-.22.32-1.06.32-1.06s.11.9.39 1.34c.28.42.7 1.74.7 1.74s.29-.86.6-1.21.68-.8.7-1.07c.03-.27-.08-.85-.08-.85l.39.85m-11.41.61s.48-.83.93-1.1c.46-.26 1.08-.74 1.25-.8.16-.05.9-.46.9-.46m.99 5.17s1.09-.55 1.41-.75c.68-.4 1.16-1.12 1.16-1.12\"/>\n          <path stroke-width=\".26\" d=\"M282.57 240.9s-.34-.48-.42-.65c-.09-.15-.23-.48-.23-.48\"/>\n          <path d=\"M278.33 257.41s2.04 1.26 1.98 2.31c-.06 1.04-1.13 2.41-1.13 2.41\"/>\n        </g>\n        <path stroke-width=\".26\" d=\"M273.05 236.24s-.17-.48-.2-.62c-.03-.13-.12-.29-.12-.29s.88 0 .85.27c-.02.27-.28.27-.34.37-.05.11-.19.27-.19.27z\"/>\n        <path stroke-width=\".05\" d=\"M277.06 234.85l-.06-.43s.77 0 1.13.26c.57.4.93 1.02.91 1.05-.1.09-.54-.27-.85-.37 0 0-.23.05-.45.05-.23 0-.34-.11-.37-.21-.03-.12.03-.3.03-.3l-.34-.05z\"/>\n        <g stroke-width=\".26\">\n          <path d=\"M273.08 240.14l.33-.53.34.49-.67.04M273.89 240.12l.4-.53.43.48-.83.05M273.53 236.83l.82.29-.74.38-.08-.67M274.52 237.1l.73.18-.59.46-.14-.64\"/>\n        </g>\n        <g fill=\"#db4446\" stroke-width=\".39\">\n          <path d=\"M261.88 236.08s.48.34.85.4c.37.05.76.05.82.05.05 0 .17-.54.11-.91-.2-1.2-1.3-1.47-1.3-1.47s.33.73.17 1.07c-.23.48-.65.86-.65.86zM259.59 237.12s-.43-.77-1.33-.67c-.9.11-1.5.81-1.5.81s1-.03 1.25.13c.37.24.48.86.48.86s.54-.32.71-.54c.16-.21.39-.59.39-.59zM258.49 240.25s-.77.11-1.19.59c-.43.49-.36 1.4-.36 1.4s.5-.54.95-.54c.46 0 1.16.16 1.16.16s-.22-.56-.22-.8-.34-.81-.34-.81zM261.06 250.37s-.42-.45-1.16-.32c-.74.14-1.22.97-1.22.97s.63-.17 1-.08c.36.08.62.45.62.45s.34-.29.45-.45.31-.57.31-.57zM260.21 253.34s-.62-.1-1.16.33c-.53.43-.56 1.25-.56 1.25s.51-.43.91-.37c.39.05.87.27.87.27l.11-.64c.09-.38-.17-.84-.17-.84zM261.66 256.08s-.05.79.33 1.28c.4.51 1.13.59 1.13.59s-.24-.53-.28-.8c-.06-.4.34-.75.34-.75s-.37-.38-.73-.38c-.37 0-.79.06-.79.06zM269 263.12s-.51-.64-1.21-.62c-.71.03-1.45.69-1.45.69s.88-.07 1.11.22c.23.3.45.67.45.67s.4-.21.57-.35c.17-.13.53-.61.53-.61zM266.83 265.93s-.93-.14-1.39.35c-.45.48-.42 1.36-.42 1.36s.56-.61 1.07-.56 1.08.32 1.08.32-.09-.53-.15-.78c-.05-.24-.19-.69-.19-.69zM268.84 268.9s-.46.64-.12 1.15 1.05.75 1.05.75-.26-.37-.14-.8c.09-.34.67-.8.67-.8l-1.46-.3zM281.24 270.11s-.81-.19-1.27.08c-.45.26-.82 1.39-.82 1.39s.74-.62 1.28-.54c.53.08.93.3.93.3s.08-.46.02-.78a2.43 2.43 0 0 0-.14-.45zM281.64 273.1s-.62.64-.4 1.18c.23.54.62 1.1.62 1.1s-.02-.8.23-1.02c.37-.32 1.05-.37 1.05-.37s-.54-.48-.71-.54c-.17-.05-.79-.35-.79-.35zM284.75 274.04s-.31.78.28 1.28c.59.52 1.11.57 1.11.57s-.46-.81-.32-1.23c.15-.45.54-.72.54-.72s-.74-.25-.85-.22c-.11.02-.76.32-.76.32z\"/>\n        </g>\n        <g fill=\"#c8b100\" stroke-width=\".26\">\n          <path d=\"M282.88 232.71l-.29.02a1.5 1.5 0 0 1-.26.35c-.26.25-.65.28-.86.07a.49.49 0 0 1-.14-.41.5.5 0 0 1-.51-.01c-.26-.15-.32-.5-.14-.79.03-.06.06-.14.11-.18l-.02-.32-.35.08-.1.19c-.22.25-.54.31-.7.17a.53.53 0 0 1-.13-.27c0 .01-.09.09-.17.11-.54.13-.75-1.05-.77-1.35l-.17.25s.16.7.08 1.3c-.08.59-.29 1.19-.29 1.19.74.19 1.86.8 2.97 1.65s1.98 1.78 2.34 2.42c0 0 .58-.32 1.18-.51s1.36-.2 1.36-.2l.22-.21c-.32.05-1.58.1-1.56-.43 0-.08.07-.18.08-.18a.7.7 0 0 1-.3-.06c-.18-.13-.18-.43.02-.69l.18-.13.01-.34-.34.05c-.03.04-.11.09-.15.13-.27.23-.65.25-.86.03a.42.42 0 0 1-.11-.46.58.58 0 0 1-.45-.05c-.26-.15-.31-.52-.11-.8.09-.14.28-.31.31-.32l-.07-.3h-.01z\"/>\n          <g fill=\"#000\" stroke-width=\".05\">\n            <path d=\"M280.63 233.4c.05-.07.15-.06.23 0s.1.16.06.21c-.05.06-.15.06-.24-.01-.07-.05-.1-.15-.05-.2zM281.58 234.19l-.33-.25c-.06-.04-.07-.12-.04-.16.04-.04.12-.04.18 0l.33.26.33.25c.05.04.08.12.04.16s-.12.04-.18 0l-.33-.26M279.84 233l-.26-.15c-.07-.04-.1-.12-.07-.17s.11-.06.17-.02l.26.16.26.15c.06.03.09.11.07.16-.03.05-.11.06-.17.02l-.26-.15M278.8 232.29c.05-.06.16-.06.24 0 .08.07.1.16.05.22-.05.05-.15.05-.23-.01s-.1-.15-.06-.21zM282.63 234.92c.05-.05.03-.14-.05-.21-.08-.06-.19-.06-.24 0-.04.05-.02.15.06.21s.18.06.23 0zM283.2 235.58l.22.21c.05.05.13.07.18.03.04-.04.04-.11-.01-.16l-.21-.21-.22-.21c-.05-.05-.14-.07-.18-.03-.05.03-.04.11.01.16l.21.21M284.15 236.39c.05-.06.03-.15-.05-.21-.08-.07-.18-.07-.23-.01s-.03.15.05.22c.08.05.18.06.23 0z\"/>\n          </g>\n          <path d=\"M281.4 230.36l-.59.01-.11.87.06.14.15-.01.76-.51-.27-.5\"/>\n          <path d=\"M281.4 230.36l-.59.01-.11.87.06.14.15-.01.76-.51-.27-.5\"/>\n          <path d=\"M279.8 230.84l-.02.54.92.12.15-.07-.02-.15-.53-.71-.5.27\"/>\n          <path d=\"M281.7 231.92l-.49.27-.54-.71-.01-.15.14-.06.93.11-.03.54\"/>\n          <path d=\"M280.51 231.25a.29.29 0 0 1 .39-.09c.14.07.18.24.1.37s-.26.17-.39.09a.26.26 0 0 1-.1-.37zM278.36 230.35c-.02.01-.13-.46-.26-.71-.08-.19-.39-.43-.39-.43.03-.05.42-.19.87.09.38.31-.03.87-.03.87s-.09.14-.19.18z\"/>\n          <path d=\"M279.39 230.66l-.42.37-.68-.6.06-.08.03-.15.92-.07.09.53\"/>\n          <path d=\"M278.24 230.29c.05-.15.18-.23.28-.2.11.04.15.18.1.33s-.18.23-.29.2c-.11-.04-.15-.18-.09-.33zM283.67 231.77l-.59-.06-.25.85.05.14.15.01.83-.41-.19-.53\"/>\n          <path d=\"M282.01 232.03l-.1.54.9.23.15-.04.01-.14-.43-.79-.53.2\"/>\n          <path d=\"M283.73 233.36l-.53.2-.42-.78.01-.15.15-.03.89.23-.1.53\"/>\n          <path d=\"M282.65 232.54a.3.3 0 0 1 .4-.04c.13.09.15.26.05.38s-.28.13-.41.04a.26.26 0 0 1-.04-.38zM285.64 233.61l.11.55-.87.3-.16-.04-.01-.14.36-.81.57.14\"/>\n          <path d=\"M285.49 235.2l-.56.13-.31-.83.04-.15.15-.02.85.35-.17.52\"/>\n          <path d=\"M283.97 233.66l-.18.52.85.34.16-.02.03-.14-.3-.83-.56.13\"/>\n          <path d=\"M284.91 234.63a.27.27 0 0 0 .02-.39.32.32 0 0 0-.41-.02c-.11.11-.12.28-.01.39.1.11.29.12.4.02zM286.29 236.43c0 .01.5.03.79.09.2.04.52.27.52.27.06-.04.12-.42-.28-.79-.39-.28-.88.22-.88.22s-.12.12-.15.21z\"/>\n          <path d=\"M285.75 235.54l-.29.46.76.51.09-.08.13-.04-.12-.88-.57.03\"/>\n          <path d=\"M286.37 236.53c.14-.07.21-.22.15-.31s-.22-.1-.36-.02-.2.22-.14.31c.05.09.21.1.35.02z\"/>\n        </g>\n      </g>\n      <g stroke-width=\".61\">\n        <ellipse fill=\"#ad1519\" cx=\"250.43\" cy=\"281.01\" rx=\"16.26\" ry=\"18.3\"/>\n        <ellipse fill=\"#005bbf\" cx=\"250.44\" cy=\"280.97\" rx=\"11.44\" ry=\"13.42\"/>\n        <g id=\"f\" fill=\"#c8b100\" stroke-width=\".34\">\n          <path stroke-linejoin=\"round\" d=\"M245.03 271.74s-1.35 1.48-1.35 2.86c0 1.39.57 2.54.57 2.54a1.5 1.5 0 0 0-1.41-.94c-.83 0-1.5.63-1.5 1.42 0 .22.14.58.24.77l.49.99c.16-.37.54-.57.98-.57.59 0 1.08.45 1.08 1.01 0 .09-.01.17-.04.25l-1.22.01v1.03h1.09l-.81 1.61 1.07-.42.81.91.84-.91 1.07.42-.8-1.61h1.08v-1.03l-1.22-.01c-.02-.08-.02-.16-.02-.25 0-.56.47-1.01 1.06-1.01.44 0 .82.2.98.57l.49-.99c.1-.19.24-.55.24-.77 0-.79-.67-1.42-1.49-1.42-.66 0-1.21.39-1.41.94 0 0 .57-1.15.57-2.54 0-1.38-1.39-2.86-1.39-2.86z\"/>\n          <path d=\"M242.87 281.11h4.36v-1.03h-4.36v1.03z\"/>\n        </g>\n        <use xlink:href=\"#f\" x=\"10.63\"/>\n        <use xlink:href=\"#f\" x=\"5.31\" y=\"9.14\"/>\n      </g>\n    </g>\n  </g>\n</svg>\n";

	var flag_svg_mx = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 840 480\">\n  <defs>\n    <linearGradient id=\"a\">\n      <stop stop-color=\"#fff\" offset=\"0\"/>\n      <stop stop-color=\"#f15770\" offset=\"1\"/>\n    </linearGradient>\n    <radialGradient id=\"b\" xlink:href=\"#a\" gradientUnits=\"userSpaceOnUse\" cx=\"842\" cy=\"104\" r=\"26\" gradientTransform=\"matrix(.18574 .04718 -.04532 .18635 234 199)\"/>\n    <radialGradient id=\"c\" xlink:href=\"#a\" gradientUnits=\"userSpaceOnUse\" cx=\"652\" cy=\"550\" r=\"26\" gradientTransform=\"matrix(-.17642 -.07067 .06515 -.16392 431 378)\"/>\n    <radialGradient id=\"d\" xlink:href=\"#a\" gradientUnits=\"userSpaceOnUse\" cx=\"381\" cy=\"740\" r=\"26\" gradientTransform=\"matrix(.0989 .0037 -.0045 .1943 442 123)\"/>\n  </defs>\n  <path fill=\"#ce1126\" d=\"M0 0h840v480H0z\"/>\n  <path fill=\"#fff\" d=\"M0 0h560v480H0z\"/>\n  <path fill=\"#006847\" d=\"M0 0h280v480H0z\"/>\n  <g fill=\"#fcca3e\" stroke=\"none\" transform=\"translate(0 1)\">\n    <path d=\"M467 304v5l2-1-1-5z\"/>\n    <circle cx=\"467\" cy=\"302\" r=\"2\"/>\n    <path d=\"M474 313l-4-4-2 1 6 4zM474 315v-3l3 1-1 2h-2zM507 251l4 5 1-3-4-2z\"/>\n    <circle cx=\"506\" cy=\"250\" r=\"2\"/>\n    <path d=\"M519 254l-7 2v-2l6-1z\"/>\n    <circle cx=\"520\" cy=\"253\" r=\"2\"/>\n    <path d=\"M496 287l-4-6 1-1 4 6z\"/>\n    <circle cx=\"492\" cy=\"279\" r=\"2\"/>\n    <path d=\"M496 287l6 1v-1l-5-1z\"/>\n    <circle cx=\"503\" cy=\"288\" r=\"2\"/>\n    <path d=\"M374 302l-2 1-1-1 1-2 2 2zM374 305l1 6h-2v-6z\"/>\n    <path d=\"M375 302c1 1-1 3-2 3-1 1-3 0-3-1 0-2 2-1 3-1 0 0 1-2 2-1z\"/>\n    <ellipse cx=\"364\" cy=\"312\" rx=\"2\" ry=\"1\"/>\n    <path d=\"M367 312h6l-1-1h-5z\"/>\n    <path d=\"M368 311c0 2 0 4-2 4l-1-2c-1-2-2-3 0-4 1-1 2 1 3 2z\"/>\n    <ellipse cx=\"347\" cy=\"277\" rx=\"1\" ry=\"2\"/>\n    <path d=\"M347 281v6l-1-1v-5zM349 279c1 2-1 2-3 2l-2-2 3-1c0 1 2-1 2 1z\"/>\n    <ellipse cx=\"336\" cy=\"287\" rx=\"2\" ry=\"1\"/>\n    <path d=\"M340 287l5-1 2 2-7-1zM338 284c2 0 2 1 2 3 0 1-1 3-2 2l-1-1v-1-2l1-1zM334 247l-2 1 1-2 1-1v2zM329 256l3-6h-1l-3 4z\"/>\n    <path d=\"M331 250l-1-3h1l2 1h1v2h-3zM320 249l1 2h-2c-1 0-2-1-1-2h2zM323 252l5 3v2l-6-4z\"/>\n    <path d=\"M323 253h-3v-1l1-1 1-2 1 1v3z\"/>\n  </g>\n  <g fill=\"#aa8c30\">\n    <path d=\"M468 305l-1 1v1-2h1zM468 304l-1 1-2-1v-2 2l1 1h2v-1zM474 314h-1l-5-2 5 3 1-1zM477 315l-1 2-2-1-1-1v1l1 1h2l1-1v-1zM509 253v1l-1-1v-1l1 1zM508 251l-2 2c-1 0-2-1-1-2 0-1 0 0 0 0v1l1 1h2v-2zM521 254l-1 2-2-2c0-1 0 0 0 0v1l1 1h1l1-1v-1zM517 255h-1l-1 1 3-1v-1l-1 1zM494 284v2l-2-4h1l1 2zM493 281l-2 1c-1-1-2-2-1-3v2l1 1h2v-1zM501 288l-1 1h-2 3v-1zM505 289l-2 2c-2 0-2-2-1-2h-1v2h3l1-1v-1zM375 304s0 2-2 2h-2l-1-1v1l1 1h2l1-1h1v-2z\"/>\n    <path d=\"M374 307l-1 1v1-3l1 1zM369 312v1h1-2l1-1zM368 314v1l-2 1-1-1v-1 2h3v-2zM362 314l1 1h2-3v-1zM349 280v1l-2 1-2-1-1-1v1l1 1 1 1h1l2-1v-2z\"/>\n    <path d=\"M347 283l-1 1v-2l1 1zM341 288l5 1h-6v-1h1zM340 288v1l-2 2-1-2v2h2l1-1v-2zM337 288h-3l1 1h2v-1zM335 250l-1 1h-2l-2-1 1 1v1h3l1-1v-1z\"/>\n    <path d=\"M331 252v2l1-2-1-1v1zM324 254v1l3 3-4-4v-1l1 1zM322 254l-1 1-1-1v-1l-1 1 1 1h2v-1zM320 252v1l-2-2 1 1 1 1v-1z\"/>\n  </g>\n  <g fill=\"#9ca168\">\n    <path d=\"M525 240c-1 5-6 8-8 10l-4 4-1 3v11l3-3 3-1h1l-4 6c-1 3-3 9-7 11-4 3-6 2-8 3l-1 1-2 2-1 2-1 1-1 1v2l-1 3 2-1h1l-1 2c0 1 1 6-4 9s-18 3-18 3l-2 1-3 1-2 3-2 3-4 2h3l4 2-4 1c-2 1-11 6-15 6-5 0-11-7-11-7l-2-2-5-1h-6v-1h5l6 1h5l8-6 7-3h3l1 1h2l-2 1-2 2h8l1-1 5-4 1-1 2-5 1-2 5-5 3-4 2-4v-1l1 4-1 4 6-4h3l3-3 1-3v-12l3-7 5-5v3l3-3 1-1 1-2 1-4v-4l-1-3-2-6v-7l-2-3s2 0 3 3l3 7 4-14 2 4 1 5 2-4v1c1 2 3 3 3 8zm-89 86s0-2-5-5l-7-2v1l7 3 3 3h2z\"/>\n    <path fill=\"#717732\" d=\"M466 313l6-5 4-1 9-3c6-3 7-7 8-8l3-1-4 5c-2 3-5 4-8 6s-10 3-10 3c-3 0-4 1-5 2l-3 3v-1zm16-17c-5 5-7 10-7 10l7-7 8-5 2-3 2-1s-2-2-12 6zm-11 12l3-3 1-4 8-8c3-4 2-7 2-7l-1 3c-2 2-9 7-10 10v4c-1 4-3 5-3 5zm-4 13s-2-1-6-1c-6 0-11 4-15 4-5 0-6-2-10-4-3-2-12-2-12-2l9 1c4 1 7 6 13 6 7 0 12-5 15-5l6 1zm-31-3s5 1 9-2l10-7 6 1-6-1-8 1-6 6c-2 2-5 2-5 2zm-1 7h-2l-4-3-5-1 5 2 4 3 2 1 1-1-1-1zm3-5l6 1c7 0 11-5 15-7h7l-5-2c-7 0-15 5-18 6l-5 2zm74-52c-3 2-6 10-8 12l-4 3-4 6-1 1c-1 0-1 0 0 0l2-2 3-3 7-6 6-12 6-3s-3-1-7 4zm-12 14l2-3 3-5 3-9 3-6-3 2c-2 3-5 7-6 12-2 4-2 9-2 9zm-2 3l1-4v-12l7-9-5 3c-4 3-5 6-5 9l2 8v5zm14-26l2-7c0-1 0-2 3-5 2-2 4-3 4-6l1-10-1 2-2 8-4 9v-8l2-7v-9l-3 5-1 10v12l-1 3-1 3h1zm-5-29s2 3 2 5c-1 3-2 6-1 9l3 4 1 5v-8l-2-2v-9l-3-4z\"/>\n    <path d=\"M403 325l4-3 9-4v2l-4 1-2 2-4 2h-3z\"/>\n    <path d=\"M412 316l-8 1h-2l-2-2h-1v3l-7-6v4l-1 2-7-7v5h-1l-5-3-1 1 1 2-6 1-1 1-1 1v1h2l1-1 1 2c1-1 4-3 6-2s-3 3-3 4c1 2 4 1 5 1 1-1 4-4 5-3 2 2-3 3-2 5s3 2 5 1c1-1 4-6 5-5 1 2-3 4-2 5 1 2 3 0 5-1l3-4 3-1 2-1 4-2h4l2 1v-2l-4-1zm-36 0l1-2-1-1-3-2c-1-2-2-2-3-2l-3-2-1-4v-1l-2 1-2-8-1-2h-1l-1 5-2-3-1-6-1 1-2 2-3-6-1 4a33 33 0 0 1-7-7l-2-4 2-2v-4l-3 2v-8l-1-2-3 5-1-3v-4l-1-1-2 3-2-3v-6c-1-3-2-4-1-6l1-4h-1c0-2 5-5 4-6-1-2-6 2-5 0 1-3 6-3 6-7 0-2-4 2-5 1 0-2 3-4 3-5v-3c-1-1-4 3-4 3l-2-1-1 4-1 4-4-2 1 4 1 4-3-1 1 3 3 3 1 2h2l1 2 1 2v5l1 1-1 1v3h-2l2 3h-5c0 1 1 3 3 3 2 1 7 2 6 3s-6-3-6 0 2 4 4 4c1 1 6 0 6 2 0 1-4-1-5 1 0 2 3 2 4 2l3 1 6 5 6 4-3 1c-1 1 8 4 5 5-2 1-5-3-5-1-1 2 1 4 2 5 2 1 9 0 8 2-2 2-7-1-7 1s3 5 5 5 4-3 5-2v3c2 1 4-2 6-1 2 0 5 1 7 3l4 4z\"/>\n    <path fill=\"#717732\" d=\"M405 324l1 1 5-3 5-2-5 3-4 2-3 1-1-1 2-1zm11-5l-2-1-3-1-5 2-2 2 2-1c2-2 4-2 5-2l3 1h2zm-66-28l-3-2-7-5 4 4 5 3h1zm46 34l2-3 3-3-1-2v-2l1 2 1 1h2v-1h-2l-3-3-1 2c-1 1-2-5-6-5h-3l2 5c-1 1-5-5-7-6-3 0-3 1-3 2s3 1 2 3c0 2-3-3-5-3l-3 1v2l-3 1-2 3s1-2 3-2h7l-1-1-1-2 2 2 2 1 3 1-1 2-3 2 3-2 2-2h2l-1-2-2-3 2 3 2 2 2 1-1 2-1 3 2-2 2-3h2l-1-2-1-3 2 3 1 2h3l-1 3-2 3zm-28-17l2 1-2-3-1-6c-1 0-2 3-3 2l-1-8-4-3c0 1 0 6-1 5-2-1 0-5-1-7 0-2-1-3-2-3l-1 4c-2 0-1-2-2-3h-1l-1-2v3l1 2 1 2h-4l3 1h2l2 3v-3-4l1 4-1 4 1 1-3 1-5-1 4 1 5 1 3 2 1-4v-4 9l-3 1-5 1h5l3-1 1 1 2 1-1 1-2 1 3-1h2v-2l-1-2 1 2v2l2 1zm-41-47l1-4-2-7-1-1 1-2-1 1h-2l-1-1 2 1h1l-1-3-2-1-4-3 4 2 2 1 2-1 2-1-2 1h-2v-3l-2-2-2-3 2 2 2 2 2-2 4-2-4 2h-2v-1l1-3h-1l1-4v2l1 1 4-4v-2l-3 2c-1 0-1-2-2-1 0 0-2 1-2 3v4c-1 1-2-2-3-2-2 0-2 3-2 3 0 1 3 5 2 6-1 0-3-4-5-1-1 2 5 5 5 6l2 2 3 2 2 8v3zm16 23s-2-2-1-5c0-2 2-7 1-8 0 0-2 3-3 2l1-7c-1-2-1-3-3-3s-2 6-3 5v-5l-2-2-2 3s-1-3-3-3c-1 1 3 6 3 6l1-1 1-2v4h-3l-3-1 3 2 3 1a76 76 0 0 0 3 3l1-3 2-4-1 5-1 4-4-1-4-1 4 2 4 1 2 2 1-1 2-3-1 3-1 2h-3a627 627 0 0 0 3 1l1 2 2 2z\"/>\n  </g>\n  <path fill=\"#fff\" d=\"M413 333l-2-2h-2l1-3 7-7 1-7h5v10l1 1 8 4v3h-1l-1 1h-3l-6-4-2-2-4 5-2 1z\"/>\n  <path fill=\"#016848\" d=\"M418 314v9l-6 5-3 3-2 1-2 1s1-4 5-7l5-4v-7l1-1h2zM428 335l1-1 1-1-2-1-4-2-3-3-2 2 2 3 5 2 2 1z\"/>\n  <path fill=\"#cd202a\" d=\"M422 314l2 1h1l-1 7-1 4-6 5-3 4-1-1-1-2 5-4 5-7v-7z\"/>\n  <path fill=\"#cd202a\" d=\"M436 332l-2-1-2 1-3-3-4-2-3-3 2-2 3 3 6 3 3 4z\"/>\n  <g transform=\"translate(0 1)\">\n    <path fill=\"#30c2dc\" stroke=\"#0872a7\" d=\"M453 299s-5-1-5-3c1-2 11-4 11-4v-3l-4 1-11 2-5-1a2428 2428 0 0 0-40-2c-5-1-8-8-8-8h-3s1 4 0 4c-2 1-18-7-18-7l-1 3s10 5 9 7c0 2-3 2-3 2l1 2c1 0 16 1 17 6l-4 3 1 1v1s9 0 11 1l7 5c2 2 22 2 25 1 4-1 6-5 12-7l7-2z\"/>\n    <circle fill=\"#fff\" stroke=\"#0872a7\" cx=\"373\" cy=\"292\" r=\"3\"/>\n    <circle fill=\"#fff\" stroke=\"#0872a7\" cx=\"389\" cy=\"279\" r=\"3\"/>\n    <circle fill=\"#fff\" stroke=\"#0872a7\" cx=\"455\" cy=\"300\" r=\"3\"/>\n    <path fill=\"#f8c83c\" d=\"M361 275c-1 2 3 6 5 7 3 0 4-1 4-2v-3c-2-2-8-4-9-2z\"/>\n    <path fill=\"#fff\" d=\"M369 278l-4-2h-2l4 2-1 2h2l1-2z\"/>\n    <path fill=\"#f8c83c\" d=\"M391 302c0 2-1 3-3 4-2 0-6 0-6-2-1-1 1-3 3-4s5 0 6 2z\"/>\n    <path fill=\"#fff\" d=\"M387 303l1 1 1-2-2-1-4 3h2l2-1z\"/>\n    <path fill=\"#f8c83c\" d=\"M458 293c2 2 5 0 6-1s3-2 2-4l-4-1-4 2v4z\"/>\n    <path fill=\"#fff\" d=\"M459 291s0-2 2-2h4l-2 1h-2c-1-1-2 1-2 1z\"/>\n  </g>\n  <g fill=\"#f9aa51\" stroke=\"#953220\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n    <path d=\"M422 288l-1-1h-8l5 13 5 8h6l1-2-2-12-6-6z\"/>\n    <path d=\"M408 289v-2h5l4 6c1 3 2 7 4 9l4 6-3 1h-2l-3-1-7-12-2-7z\"/>\n    <path d=\"M405 287h3s4 3 5 7l2 8 5 7-8-1-5-1-2-2h-3l1-4-1-9v-4l3-1zM435 289l-5-2h-9a431 431 0 0 0 4 15l4 6c1 1 6-1 6-1l4-1-1-3v-14h-3z\"/>\n    <path d=\"M403 289c0 2 1 2 2 2l1-2c0-2-1-3-3-3s-3 2-3 4l1 3-1 4 2 4-2 4c0 2 2 3 3 3l4-2c0-2-1-3-2-3l-2 1M437 290l-2 1-1-1c0-2 2-3 3-3s3 2 3 4l-1 3 1 3c0 3-2 5-2 5s2 0 2 3-2 3-3 3-3 0-3-2 1-2 2-2l1 1\"/>\n    <path fill=\"#953220\" d=\"M406 304l1 1 1 1 12 2 12-1 2-3h1l-1 1v1l1 1-1 1-3 1h-20l-4-1-1-1 1-1-1-2zM432 288l2 1-2 3-1 4h-8l-1-3 10-5z\" stroke=\"none\"/>\n  </g>\n  <g fill=\"#231f20\">\n    <path d=\"M455 287l-2-1-1-3 2 2c-1 1 1 2 1 2zM468 284l1 1 2 1h-2l-2-2h1zM472 285h-2l-1-1h1l2 1zM479 279l-1 1-2-1h3zM469 265l-2 1v2l1-1 1-2zM462 269l-1 1v2l1-1v-2z\"/>\n    <path fill=\"#8cbebf\" stroke=\"#04534e\" d=\"M450 277l-4 4s9 5 15 5c7 0 15-6 15-7 1-1 0-5-1-7 0-1-5-5-7-5s-5 3-7 6c-3 2-3 5-7 4h-4z\"/>\n    <path fill=\"#0c8489\" d=\"M449 279s9 1 12-1l7-8 3-1 2 1 2 2 1 5v2l-3 2-5 3-5 1h-4l-9-2-2-2h-1l2-2z\"/>\n    <path fill=\"#04534e\" d=\"M463 273h1l2 1-2 2-1-3zM467 276l1-1 2 1-2 2-1-2zM465 281l2-1 1 2-1 1-2-2zM461 280l1-2 2 2-2 2-1-2zM453 281a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\"/>\n    <path fill=\"#8cbebf\" d=\"M467 276l1-1 1 1-1 1-1-1zM466 281l1-1 1 1-1 1-1-1zM461 280l2-2v2l-1 1-1-1zM463 273h1l1 1-1 1-1-2zM453 280l2-2 2 2s-1 2-3 2l-1-2z\"/>\n    <path d=\"M456 279h-2v2l1-1 1-1zM463 277l-2 2 1 1v-1l1-2z\"/>\n    <path d=\"M464 278l-2 1v1h1l1-2zM465 271l-1 1v2l1-1v-2zM470 274l-2 1v1l1-1 1-1zM469 280l-1 1h-1v-1h2z\"/>\n    <path fill=\"#04534e\" d=\"M476 276s1 3-2 4c-2 1-8 6-14 5-6 0-12-4-12-4l-1 1h1l5 2 5 2h6l5-2 5-2 2-2v-4z\"/>\n    <path d=\"M361 243l1 2-1 1v-1-2zM371 252l-1 2-1-1h1l1-1zM349 254l1 1 1-1h-1-1zM353 261l2 1c1 1 1 0 2-1l-2 1-2-1zM360 267l2-1v-1l-1 1-1 1z\"/>\n    <path fill=\"#8cbebf\" stroke=\"#04534e\" d=\"M371 263s1-8-5-14c-7-6-11-4-13-2s-4 9 2 14c7 6 16 5 16 5v-3z\"/>\n    <path fill=\"#0c8489\" d=\"M351 254s0-4 2-6c2-1 9-2 12 4 4 7 4 10 3 13h-4l-5-2-5-3-3-6z\"/>\n    <path fill=\"#04534e\" d=\"M370 264l-3 1c-3 0-14-3-16-13v3l1 2 2 3 3 3 3 2h3l3 1h2l2-2z\"/>\n    <path fill=\"#04534e\" d=\"M364 261l2-1 1 1-1 2-2-2zM365 256l1-1 1 1-1 1-1-1zM360 261h3l-2 1-1-1zM360 255h1l1 1-1 2-1-3zM355 256l1-1 2 1-2 2-1-2zM356 251l1-1 2 1-2 2-1-2zM361 250h1l1 1-1 2-1-3z\"/>\n    <path fill=\"#8cbebf\" d=\"M356 251l1-1 1 1-1 1-1-1zM355 256l1-1 1 1-1 1-1-1zM361 251l1-1 1 1-1 1-1-1zM360 256l1 1 1-1-1-2-1 2zM365 255l1 1 2-1-2-1-1 1zM360 261l1-1 1 1-2 1v-1zM364 260h2l1 1-2 1-1-2z\"/>\n    <path d=\"M366 252l1 2-1 2v-2-2zM362 248v3l-1-1 1-2zM357 249v2l-1-1 1-1z\"/>\n    <path d=\"M355 250h1l1 1h-1l-1-1zM359 255h1l1 1h-1l-1-1zM354 254l2 1v1h-1l-1-2zM365 258v0zM364 260h1v0h-1zM359 260h1l1 2-1-1-1-1z\"/>\n    <path fill=\"#04534e\" d=\"M357 245s-4 1-5 4l-1 6v-4l1-2 1-2 2-2h2zM371 261l-1-4-4-8 2 2 2 3v2l1 3v2z\"/>\n    <path d=\"M375 256l2 1-1 1-1-1v-1zM369 273l1-2h2l-1 1-2 1zM379 277l2-1v-2l-1 1-1 2zM378 276l1-2h1v1l-2 1z\"/>\n    <path fill=\"#8cbebf\" stroke=\"#04534e\" d=\"M396 268s-7-10-17-10c-8-1-11 7-11 9 1 2 4 7 15 8 11 0 12-5 13-6v-1z\"/>\n    <path fill=\"#0c8489\" d=\"M388 261l4 4 1 3c-1 0-7-5-12-6s-9 0-10 2-1 6 2 7c2 2 12 3 12 3h5l3-2 1-2 1-2v-1l-3-3-4-3z\"/>\n    <path fill=\"#04534e\" d=\"M380 263l-2 1-1-1 1-1 2 1zM374 265l1-1 1 1-1 2-1-2zM380 268l2-1 1 1-2 2-1-2z\"/>\n    <path fill=\"#8cbebf\" d=\"M375 270l1-1 2 1-2 1-1-1z\"/>\n    <path fill=\"#04534e\" d=\"M384 272l1-1 1 1-1 1-1-1zM388 269h1l1 1-1 1-1-2z\"/>\n    <path fill=\"#8cbebf\" d=\"M379 262l-1 1-1-1 1-1 1 1zM376 265l-1 1-1-1 1-1 1 1zM377 270v1l-2-1 1-1 1 1zM383 268l-2 1-1-1 1-1 2 1zM390 270h-1l-1-1 1-1 1 2zM386 272l-1 1-1-1 1-1 1 1z\"/>\n    <path d=\"M386 269h0zM382 273l2-1h1l-1 1h-2zM379 266l2 1 1 2-2-1-1-2z\"/>\n    <path d=\"M379 268h3l-1 1-2-1zM374 268l2 1v1h-1l-1-2zM374 271l1-1h1c1 0 0 0 0 0l-2 1zM373 264h1l1 1h-1l-1-1zM376 260l2 1v1h-1l-1-2z\"/>\n    <path fill=\"#04534e\" d=\"M394 271s-3 3-10 3c-8-1-14-4-16-7l1 2 2 2 5 2 5 2h5l4-1 3-2h1v-1zM395 268l-3-3-8-6 5 2 3 3 3 3v1z\"/>\n    <path d=\"M395 261l2 2h1l-1 1-1-1-1-2zM400 259l3 1v2l-2-2-1-1zM402 258l2 2v1l-1-1-1-2zM411 260l1 2v2l-1-1v-1-2zM413 261l2 2-1 1-1-1v-2zM397 281h2l1-1-1-1-1 1-1 1zM406 283l2-1 1-1h-2l-1 2zM413 284l2-2 1-1h-1l-1 1-1 2zM416 283l1-1v-2l-1 1v2z\"/>\n    <path fill=\"#8cbebf\" stroke=\"#04534e\" d=\"M394 272c0-4 4-11 9-11 3 0 7 1 10 3l6 3h5l6-1-5 8-2 2s-1 3-6 5c-4 1-12 0-16-1-3-1-8-4-7-8z\"/>\n    <path fill=\"#04534e\" d=\"M394 272l1-3c0-2 2-4 3-5 2-2 3-2 5-2h5l5 2 3 2 3 1 3 1h2l6-1-5 7-2 1c0 1-2 4-6 5l-6 1-10-1-5-3-2-5h-1c0 2 1 4 3 5l5 4 10 1 6-1c5-2 7-5 7-5h-1 1l2-2 5-8-7 1a21 21 0 0 1-5 0l-2-1-4-2a38 38 0 0 0-10-3l-4 1a15 15 0 0 0-6 10h1z\"/>\n    <path fill=\"#0c8489\" d=\"M425 273h-2s-15-9-19-8c-5 0-9 2-9 7 0 4 1 4 2 6l9 3h6l4-1 4-2 2-2 2-1 1-2z\"/>\n    <path fill=\"#04534e\" d=\"M402 270l-1 2-2-1 2-2 1 1zM404 266l1-1 2 1-2 2-1-2zM412 269l2-2 1 2-1 1-2-1zM414 274l2-2 1 2-1 1-2-1zM410 277l1-1 2 1-1 2-2-2zM402 276l1-1a1 1 0 1 1 0 2l-1-1z\"/>\n    <path fill=\"#8cbebf\" d=\"M402 270l-1 1-2-1 2-1 1 1zM406 266l-1 1-1-1 1-1 1 1zM415 268l-1 1-2-1 2-1 1 1z\"/>\n    <path fill=\"#04534e\" d=\"M410 272l-1 1-1-1 1-1 1 1z\"/>\n    <path fill=\"#8cbebf\" d=\"M404 276l-1 1-1-1 1-1 1 1zM410 272l-1 1-2-1 2-2 1 2zM417 273l-1 2-2-2 1-1 2 1zM413 277l-2 1-1-1 1-1 2 1z\"/>\n    <path d=\"M413 273h3v1h-1l-2-1zM411 266l2 1 1 1h-1l-2-2zM406 269l2 2 1 1h-2l-1-3z\"/>\n    <path d=\"M405 271h3l1 1-1 1-1-1-2-1zM403 264l2 1v2l-1-1-1-2zM398 268l3 1v2l-2-2-1-1z\"/>\n    <path d=\"M397 270h4l-1 1-3-1zM409 278l2-1h1l-1 1h-2zM401 276l1-1 1 1h-1-1z\"/>\n    <path fill=\"#04534e\" d=\"M423 275l-5 4c-3 1-5 2-9 1a20 20 0 0 1-15-7l1 2 2 3 3 2 5 1h11l3-1 1-1 2-1 1-3zM419 267l-3-1c-3-2-6-4-12-4s-8 4-8 5l3-4 2-1 2-1h2l3 1 2 1 3 1 2 1 3 2h1zM427 269h-4l-1 1h-1l-1-2 5-1 2 1v1z\"/>\n    <path fill=\"#0c8489\" stroke=\"#04534e\" d=\"M421 293l1 1h7l2-2 1-4 1-2 4-2 4-1h3l3-2 2-1 1-1 1-3-1-3-2-4-5-1h-3l-4 1-8 2s-3 2-5 5-2 4-2 8v9z\"/>\n    <path fill=\"#8cbebf\" d=\"M423 291l2-5 4-6 1 1 1-1c0-1 0-2 2-3l3-3h2v1h2v-2h2l2 1v2l1 1 2-1v-1-1c1 1 2 3 3 2v-3l-3-3-4-2-5 1-5 3-5 2s0 4-1 3l-2-2-2 5-2 8 2 3z\"/>\n    <path fill=\"#8cbebf\" d=\"M428 285l-1 1-1 1 1 1h2l1-1-1-1-1-1zM436 278l-1 1-1 1 1 1h2v-1l-1-1v-1zM442 280h-1l-1 1 2 1v-1-1zM423 281c0 1 1 2 2 1l2-1-2 1h-1l-1-1z\"/>\n    <path fill=\"#04534e\" d=\"M430 287l-1 1h-2l-1-1 2 1 2-1zM447 276l-1 1h-1-1v-2l1 2 2-1zM431 279l-1 2h-1 1l1-2zM434 279l1 2h2v-1l-1 1-1-1-1-1zM440 273v2h-2 1l1-2z\"/>\n    <path fill=\"#04534e\" d=\"M422 294l8-1c0-1-1-5 3-8s8-3 10-3 7-1 8-6c0-2-3-2-5-5-1-2-4-1-4-1-1 0-4-1-6 1l-2 3-5 1v3l-2-1 1-4 5-4 7-3h5l4 2 2 3 1 3v2c-1 4-5 7-9 7s-8 2-9 3c-2 2-3 7-3 8h-9z\"/>\n    <path d=\"M425 280h-1l1-2v2zM430 280l-1-2 3-2-1 2-1 2zM428 287l-1-2 2-2-1 2v2z\"/>\n    <path d=\"M431 285l-1 1-2 1v-2h3zM437 276l-1 2v2l1-2v-2z\"/>\n    <path d=\"M439 279l-1-1-2 1v1l1-1h2zM438 273h1l1-2-1 1-1 1zM447 273l-2 1v2l1-1 1-2zM444 279l-1 2h-2l1-1h1l1-1z\"/>\n  </g>\n  <g transform=\"translate(0 1)\">\n    <ellipse fill=\"url(#b)\" cx=\"386\" cy=\"258\" rx=\"4\" ry=\"6\" transform=\"rotate(9 386 258)\"/>\n    <g fill=\"#fcca3e\" stroke=\"none\">\n      <path d=\"M388 248l-3 5h2l1-5z\"/>\n      <path d=\"M389 245l-2 2 1 1c1 1 2 0 2-1l-1-2zM485 259l-5 6h2l4-5z\"/>\n      <path d=\"M488 257l-3 1c-1 1 0 2 1 2h2v-3zM345 229l3 7 1-2-3-5zM344 227v2h2v-2h-2z\"/>\n    </g>\n    <g fill=\"#aa8c30\">\n      <path d=\"M389 246l-2 1 2 1h-2v-2h1v-1h1v1zM388 249l-1 1-1 1 2-3v1zM488 258h-3l1 3c1 0 0 0 0 0l-1-1v-3h3v1z\"/>\n      <path d=\"M485 261h-1l-2 2 3-3h1l-1 1zM344 226v3h2c1-1 0 0 0 0l-1 1-1-1h-1v-2h1v-1z\"/>\n      <path d=\"M346 230v1l1 2-2-3 1-1v1z\"/>\n    </g>\n    <ellipse fill=\"url(#c)\" cx=\"351\" cy=\"242\" rx=\"6\" ry=\"4\" transform=\"rotate(63 351 242)\"/>\n    <g fill=\"#e92736\">\n      <path d=\"M345 240h2l1-1v-1l-1-2h-2v-1l-2 3h1v1l1 1z\"/>\n      <path d=\"M347 236l1 2h1l1-2v-1-1l-1-1-3 1c0 1 0 0 0 0v2zM353 235v-2h-1l1-1h-3v4h3v-1zM382 252l1 1 1 1 1-1 1-2-1-1s1 0 0 0h-2l-1 1v1z\"/>\n      <path d=\"M386 251l-1 2 1 1h2v-1l1-1v-1-1h-3 1l-1 1z\"/>\n      <path d=\"M390 255l1-1v-1h1l-2-2v1h-1l-1 1v1l2 1zM477 262v2h2l2-1-1-1 1-1-2-1v1h-2v1z\"/>\n      <path d=\"M480 263l-1 1 1 1 1 1 1-1h1v-1l-1-2v1h-2z\"/>\n      <path d=\"M481 268h2v-1h1l-1-2v1l-1-1h-1v1 2z\"/>\n    </g>\n    <g fill=\"#f7e204\">\n      <path d=\"M347 237l-1 2h-1v-1l1-1h1zM347 236v1h2l1-2-1-1-2 2zM351 234v1h1l1-1h-1-1zM385 252l-1 1-1-2h2v1zM386 251v1l1 1 1-1v-1h-2zM390 252l-1 1v1h2v-1l-1-1zM480 263h-2v-1h2v1zM481 263l-1 1v1h2v-1l-1-1zM482 266l-1 1h1v-1z\"/>\n    </g>\n    <ellipse fill=\"url(#d)\" cx=\"477\" cy=\"269\" rx=\"3\" ry=\"6\" transform=\"rotate(48 477 269)\"/>\n  </g>\n  <g>\n    <g fill=\"#78732e\" transform=\"translate(0 1)\">\n      <path fill=\"#a8ac71\" d=\"M375 185h-8c-4-1-3-9-3-10l-2-4c0-2 7-7 8-8l2 1 2-2 1 1-3 3-1 3-2 3 1 2 4-1 3-2-3 4-4 1s-2 3 2 3l5-1-2 7zM355 206s3 1 3 4-3 6-3 11 1 5 8 11c0 0 2 1 2 3s2 11 8 11c7 0 8-4 8-4l-3-4h-4l-3-2-2-7c-2-4-7-5-7-10 0-4 3-4 2-10-1-5-7-7-7-7l-3-1-1 5h2z\"/>\n      <path fill=\"#f1a720\" d=\"M374 170c2-1 1-6 1-6l-2 1 1 2v3z\"/>\n      <path fill=\"#a8ac71\" d=\"M378 227h-1c-1-1-5-4-4-12 1-10 14-14 15-18s4-6-7-15l-2 3 4 4s1-1 1 0l-1 4-8 6-4 3-3 5c-2 4-1 9-1 9s0 10 11 11z\"/>\n      <path d=\"M371 233l1 3-2 1h-2l-2 2v-1l-1-2 2 1h2v-2l2-2zM365 233l-1-1-2-1 2-1h2l-1 2v1zM368 228l2 1v2l-2-1h-2l1-2h1zM367 243v-1l-1-2h2l2 1v1l-2 1h-1zM374 238l-2-1v-1l-1 2v2h2l1-1v-1zM368 244l2 1 1 1 1-1 1-2-4 1h-1zM374 243l3-2v-3h-2l-1 3v2zM371 246s3 1 7-1l2-1-2-1-1 2-6 1zM368 219l-1-1v-2l1 1 2 1-1 1h-1zM371 224l-1-1-1-2 1 1h2l-1 2z\"/>\n      <path fill=\"#c6c7a6\" d=\"M363 169c0 1-1 3 1 3 0 0 3 0 6-3l1-4 1-1h-3l-6 5z\"/>\n      <ellipse fill=\"#1c242f\" cx=\"371\" cy=\"165\" rx=\"1\" ry=\"1\"/>\n      <path fill=\"#a8ac71\" d=\"M367 165l-2 2s2 0 3-2h4v-1h-2l-3 1z\"/>\n      <path d=\"M373 218v-1-2l-1 1-1 2 1 1 1-1zM367 215v-3l1-4v2l2 3h1l-2 2h-2zM373 214v-1l1-2a34 34 0 0 0-3 2l1 1h1M368 206l1-2 2-2 1 3v3h1l-1 1-3-1-1-2zM374 210l1-1 2-1h-4v2h1zM372 201l1-1 2-1 1 5-3-1-1-2zM377 207l3-2-5-1 1 3zM379 201v-5l-2 2-1 1 2 1 1 1zM383 196v-3h-1l-1 1-1 1 1 1h2zM384 201l2-2 2-2h-5v2l1 2zM372 183l-1 2h5l-1-1-2-1-1-1zM380 204l2-1 2-2h-4v3zM389 196v-3-2l-4 2 1 1 1 2h2z\"/>\n      <path d=\"M383 192l1-1v-1h4l-1 2-1 1h-2l-1-1zM388 190l-1-3-2-1-1 3v1h4z\"/>\n      <path fill=\"#fff\" d=\"M357 215l-1 1 3-1 3 2v-1l-3-2-2 1zm0-7h1l2-2h2l-1-1h-2l-2 3zm6 5l-2-2-3 1v1l3-1 2 3v-2zm-6-6l1-2 1-2h-1l-1 1v3zm-1-3l1-2-2 1v3h1v-2zm10-25l2-1-1 4-1 3h1l1-2 2 2h1l1-3 3 2-3-2v-1l3-2 1 1-1-1h-1l-2 2-1-2h-1l-2 2 1-3v-1l-3 1-2 2v1l2-2zm2 2l3-2 1 3-1 3-3-3v-1zm-10 28v1l3-1 3 1v-1l-3-1-3 1zm28-15v-1l3-2-1-1h-2-2l1-3 1-1-1-1-1 1-4-1 3 1h2l-1 2v2h4l-2 2h-1l-1-2v1l1 2-2-1-1 1v3l-2-1v1h-1v4l-3-1h-1v4c-2 0-3-2-3-2l-1 1 1 6h-1c-2 0-3-2-3-2v2s0 3 2 5h1l-4 2v1a59 59 0 0 0 3 2l-2 1v1l2-2 3 1v-1h-2l2-3v-1l-2-1 3-2v-1l-1-1 4-1v-1l-1-3 4 1v-1-3h4l-1-4h5l1-1-3-2zm-14 21l-1 2-1 1v-1l-2-1 3-2 1 1zm2-4l-3 2v-1c-2-1-3-2-3-4l3 1h1l2 2zm2-4l-3 1-1-6 3 2 1 3zm0-4v-3l3 1v3l-3-1zm7-3l-3 1v-5l3 1v3zm0-4v-3h2l1 2 1 1h-4zm-10 25v-1l-1 2h-1l-2-1 2 1v3l1-3 1 1v3h3l-1-1h-1-1v-1l1-1-1-1h-1l1-1zm-15-2l3 1v-1l-2-1-4 1v2l3-2zm18 26h-4l1-2c4-1 4-3 4-3v-1l-3 3 1-4h-1l-3 2 1-3v-1l-3 1 2-4v-1l-3 4v1l-3-2v1l3 1-2 2v1l4 1-3 2 1 1 5-1-2 3 5-1 3-2-1-1s0 2-2 3zm-9-6l1-2h3l-1 3-3-1zm2 4l1-2h1c2 0 3-2 3-2l-1 4h-4zm-3-13l5 1-1-1h-4l3-3h-1l-2 2v1a5 5 0 0 0-4 0l1 1 2-1v4l1-4zm-4-8v-1h-4l-2 3v1l3-2 3-1zm4 3h-1l-3 1-1 3 1 1 1-3 3-2zm-5 0l3-1-1-1-3 1-3 3 2 1 2-3zm7-59l2-1h1l-1 3-1 2-2 4 1 2 1-1h-1v-1l1-3 2-3v-3l-1-1-3 2-2 1 3-1z\"/>\n      <path d=\"M374 179h-3l1 2zM370 179v-1h-1l-1 1v2l2-2zM370 185l-2-3-2 3h1a41 41 0 0 0 3 0zM380 244c-1 1-3 2-7 2l-4-1-2-3-1-5-2-5-5-4a10 10 0 0 1-4-8l2-6 1-4v-1l-2-2-1-1-1-1-1 1h2l1 1 2 2v1l-1 4a15 15 0 0 0-2 7c0 4 2 6 4 8l5 4 2 6 1 4 2 2 4 1c4 0 7-2 7-2z\"/>\n      <path d=\"M377 238h-2l-2-1-2-3-1-4-4-5c-2-2-4-3-4-5l1-5a14 14 0 0 0 1-6c0-2-2-4-4-6l-4-2v1l4 2 4 5v1l-2 5-1 5v1l4 4 5 5 1 4 2 3a4 4 0 0 0 4 1z\"/>\n      <path fill=\"#a8ac71\" d=\"M389 228s2 0 2 2l-1 4-3-2 2-2v-2z\"/>\n      <path fill=\"#f8c83c\" d=\"M350 205h-3v-2s-2 0-2-2l2-1 2-2 2 2-1 5z\"/>\n      <path fill=\"#f8c83c\" d=\"M352 206h-2l-1-2-1-2 2-1 2-2 1 1-1 6z\"/>\n      <path fill=\"#f8c83c\" d=\"M355 206l-2 1-1-2-1-2 2-1c1-1 1-3 2-2l2 2s-2 0-3 2l1 2z\"/>\n      <path fill=\"#af7029\" d=\"M386 227l-3-3-3-4-3-1-2-3v-6l1-2s-6 2-3 14c2 5 5 6 5 6l6-1h2z\"/>\n      <path fill=\"#816c2a\" d=\"M383 188l1 1v1c-2 5-6 7-10 9-2 2-4 3-5 6a16 16 0 0 0-2 9c0 6 2 10 5 12s6 2 7 2h2a47 47 0 0 1 7 0h1v1l-1 1-1 1v1l2-1 1-2-1-1-1-1h-9l1 1v-1h-1c-1 0-4 0-7-2-2-1-5-5-5-11v-1l2-8 8-7c3-2 6-4 7-8v-1l-1-1z\"/>\n      <path fill=\"#fff\" d=\"M391 229l-2 3 2 1h-1l-2-1v-1l1-1 1-2 1 1z\"/>\n      <path fill=\"#fcca3d\" d=\"M396 231l-3 1-2-1-1-3-2-1h-3l-6-7h6l3-1 2 1h2l1 1 1 1 2 2v7z\"/>\n      <path fill=\"#af7029\" d=\"M397 231h-6v1l-1 2v4h5l1-5 1-2z\"/>\n      <path fill=\"#fcca3d\" d=\"M396 229v2-2zM392 189v-2l-1-2-1-2-2-2-1-1h-4l-2 2s5 4 7 8l4 2v-3z\"/>\n      <path fill=\"#af7029\" d=\"M389 193l-1 5 2-3 2-3-4-2 1 3z\"/>\n      <path fill=\"#816c2a\" d=\"M394 236l-2-2-1-1h-1 1l1 1a22 22 0 0 1 2 2z\"/>\n      <path fill=\"#6f5b24\" d=\"M396 233l-1 2-3 2 3 1 3-2-2-3z\"/>\n      <path fill=\"#404118\" d=\"M397 236l-1 1h-1l1-3 1 1z\"/>\n      <path fill=\"none\" d=\"M375 185h-8c-4-1-3-9-3-10l-2-4c0-2 7-7 8-8l2 1 2-2 1 1-3 3-1 3-2 3 1 2 4-1 3-2-3 4-4 1s-2 3 2 3l5-1-2 7z\"/>\n    </g>\n    <g fill=\"#d2a567\">\n      <path fill=\"#ab6d29\" stroke=\"#4d2a15\" d=\"M418 149s-9-2-9 6c0 2 1 3 3 4 2 0 6 0 9 3s3 5 3 7v4l2 10 2 7 6-3 4-11-5-20-15-7z\"/>\n      <path fill=\"#4d2a15\" d=\"M427 187s4-1 4-3c1-1-3-4-3-4l3 1 1 1 2-4-3-3-3-1h3l2 1-1-5-3-2h-3l4-1 2 1-1-4-3-2h-3l2-1 2 1-1-1-5-3h-5l2-1h1l-3-1h-7l1-1 1-1c2 0 0-1 0-1l1-2h5l11 7 5 4 3 8-1 14-7 6h-3v-3z\"/>\n      <path d=\"M418 153v-3-1s-4 0-6 2c-3 2-1 5-1 5l2-2h4l-1-1-3-1h3l2 1z\"/>\n      <path fill=\"#8f4620\" d=\"M429 189h-3l2 10 9 16 5-1 2-3 1 1c1 1 2 4 4 4l4 2 6 9v-4l-2-4-1-3-1-1h3l1 1 3 2 1 2 1 1v2l1 2 1 3 2 2v-1l-1-3-2-8-2-3 3 2 2 3 2 3v2l1 3 1 2 1-1v-2l-1-5-1-6 2 1 1 3 1 5 1 5 1 5 2 4 1 1v-2l-2-21v-1l1 1 2 2v4l1 2v4l1 5 2 5 1 2 1-3-1-22v-1l2 2 1 1 1 5v14l1 4 4-37 2-1 1-1-2-1-4-6-3-7-5-9-9-11-7-5-2-2v-1l2-2-1-1h-1l-3 1-2-1-6-4-6-3-4-1-9-2-8-2h-4l-4 1-2 2v3c0 2 1 3 3 4l8 5 3 2 1 2v1l2 14-4 8-2 2z\"/>\n      <path fill=\"#ab6d29\" d=\"M438 211s2 3 4 1-1-8-1-8l1-1 2 3v4c0 3-3 5-3 5h-2l-1-4z\"/>\n      <path fill=\"#4d2a15\" d=\"M493 246l-2-6-1-5-1-12v-4l-2-3-1-1 1-1 1 1-1-6-5-11 1 2 3 2 5 2h3l2 4 1 9-1 10c-2 3-2 13-2 15l-1 3v1z\"/>\n      <path fill=\"#8f4620\" d=\"M493 228l1-3c1-2 1-16-1-18l-5-3 1 5 1 2 1 2 1 8 1 7z\"/>\n      <path fill=\"#4d2a15\" d=\"M485 237v-11l-1-7-3-8-3-8c-1-1-2-3-3-2v1h-2l-1-2 1-2v-2l2 2 6 4 2 11 3 7v22l-1-5zM488 205l2 2 2 1-2-1-2-1v-1z\"/>\n      <path fill=\"#4d2a15\" d=\"M477 235l1-6-2-11-4-6-3-7-3-3v-4l5 2 2 1 2 12 3 3 1 4 1 11v9l-3-5z\"/>\n      <path fill=\"#4d2a15\" d=\"M472 230l-1-6-2-7-6-6-5-7v-4l3 2 3 1 1 5 2 4 2 3 2 1 1 6v3l1 4v2l-1-1zM468 230l-1-1v-3l-2-5-1-3-6-5-5-4-2-1-1-6 3 3 3 1 4 7 1 1 3 3 2 3 1 3 1 5v2zM461 228l-3-4v-3l-5-6-5-5 1-1 1 1 6 6 2 3 1 4 1 2 1 3zM482 198s4 5 5 0l-2-6-5-8-7-9-5-2 2 2 8 11c4 8 3 12 3 12h1z\"/>\n      <path fill=\"#4d2a15\" d=\"M458 168s8 7 14 14c5 7 7 12 6 13-2 1-5 0-6-2l-7-12-8-6-3-6 4-1zM454 184l8 7 4 6 2 2v-3h1l-15-16v4zM453 185l4 5 6 5 1 4s-7-5-7-4l1 4-2-1-3-4-1-4-2-5h3z\"/>\n      <path fill=\"#4d2a15\" d=\"M432 201s4 3 6 0 0-7 0-7 5 8 7 1l-3-6 1-1 3 4s2-1 2-4-3-7-3-7l3 3s5 0 5-3-4-6-4-6 3 0 3-2-5-3-5-4 2-3 4-2 4 2 5 0c2-2 0-3 0-3h-2l-5-3-3-1-4-1 1 3 1 8v3l1 8-2 6-1 1v1l-2 3-2 3-3 3-3 3z\"/>\n      <path fill=\"#ab6d29\" d=\"M458 215l-3-4-5-1 5 5h3zM465 216l-4-5-3-5h-1v4l4 4 4 2zM471 216l-3-8-4-5 1 4 1 4 3 4 2 1zM476 214s2-8 0-11c-1-2-3-2-3-2l-1 1 1 6 2 4 1 2zM481 200l3 4 3 11h-1l-5-8-1-7h1z\"/>\n      <path d=\"M447 210l2-2-3-4h3c0-1-2-5-1-6l3 4 1 5c-2 4-5 3-5 3zM453 204h4l-4-4v-2h3l-3-5h1l3 5 2 6c0 3-7 1-6 0zM471 198l-1-3 2-1-3-1h-2l2 3 2 2z\"/>\n      <path d=\"M459 200l6 1-5-5v-1h3v2l2 2v-4l3 3c1 0 4 3 4 1l1-2c0-1 1 4-1 4h-3l-1-1-1-1s1 3 0 3h-5l-3-2zM473 196l7 3-2-11c1-1 6 10 3 12h-2l-4-1-2-3zM491 212l1 1h-1v-1zM484 191h2l-1 1-1-1zM483 187h1l1-1-2-1v-1h-2v1l2 2zM488 206l3 2h-2l-1-2zM478 177h1v2h-2l-2-2h3zM468 168h2l2 1 1 5-5-3-2-3h2zM464 167s3 0 3-2-2-3-2-3l-4 3 3 2zM456 163h1c1 0 4-4 6-4h2v3l-6 3-2-1h-1v-1zM455 157l-3-3c-1 1 2 2 2 5v5h1l1-1v-3l-1-1v-1-1zM447 154c-2-3-7-5-7-5l6 6c2 2 2 5 2 5h1l1-1-1-1-1-2v-1l-1-1zM440 151c-3-2-9-4-13-4-5 0-7 1-7 3 1 3 3 4 7 4h7l4 2-3-3-3-2s-1-1 2-1c3 1 6 2 7 5l1 4 1-1v-1-2l-2-2-1-2zM427 189c2 0 6-4 7-9s-2-16-3-17l2 1c1 1 3 8 3 14 0 5-1 7-4 9-3 3-5 3-5 3v-1zM434 204l2 1c2-1 5-2 5-5l-2-4v-2l2 1v3h2c1 0 3-2 3-4l-3-4v-2h2l1 3h1l3-3-2-3v-1h3l3-3-1-2v-1h1l1 2v3l-2 2-2 1 1 2-1 2-1 2-3 1v3l-1 2-3 2h-1v1l-2 3-3 2h-2l-1-1v-1z\"/>\n      <path d=\"M451 176s5 2 5-2l-6-6v-2l3 2s3 1 4-1v-3h2v3l-2 8s1 2-2 3l-4-2zM456 215l-1-3-4-2 3 5h2zM463 215l-3-4-3-4 1 4 4 4h1zM470 215l-3-5c0-1-1-5-3-6v2l2 4 2 4 2 1zM475 212v-6l-3-4v4l3 6zM486 215l-3-7-2-5v4l2 6 3 2zM495 204l-5-3-7-2 2 2 3 2 5 1h2z\"/>\n      <path fill=\"#202020\" d=\"M457 206l2 5 6 6 2 7 2 7 1 2-2-2v-3l-4-10-8-9-2-3h3z\"/>\n      <path fill=\"#202020\" d=\"M465 226l-1-6-6-5-3-1-5-5v1l6 6 3 8 1 3 2 2v-1l-2-4c-1-2-2-7-4-8l2-1c1 0 5 4 5 6l2 5 3 5-3-5zM459 200l4 2h1l3 9 4 5s0 6 2 10c2 5 2 10 2 11-1 1-2-3-3-6l-2-8-4-6h1l3 6 2 7 1-2-1-5-2-6-3-5-3-7-1-1-2-1-2-3zM467 199l3 2h2s0 6 2 9c2 4 5 6 5 6l1 9v24l-1-10c-1-2-2-2-3-9l-2-11c-1-3-3-3-3-3s2 0 3 3l2 10c1 7 4 10 4 10l-1-13-2-10-4-5-2-8-1-2-3-2z\"/>\n      <path fill=\"#202020\" d=\"M473 196l4 3 4 1c0 1-1 5 2 10l3 5 1 18c0 5 1 20-1 20s0-11-1-14l-2-4-2-15-2-4 2 4 2 14 3 6-1-21-5-13v-4l-4-2-3-4z\"/>\n      <path fill=\"#202020\" d=\"M482 198l5 4 8 1c0 1 3 6 3 14 0 7-2 6-3 13l-2 21-1 3-1 3-1-3 1-8-1-8-1-19-3-4 3 3 2 20v-2l1-13c0-4-1-13-3-14l2 3h1l1 1h-1l-1-1 2 11v21c1 1 1-8 2-14l2-13-3-12-8-3-4-4zM435 206l2-1c2 0 5-3 5-4v-2l1 1c1 0 4-2 4-4v-4h1c1 0 3-2 3-4l-1-3h2l3-3c0-2-1-4-3-4h3l2-3c0-2-3-6-4-6h5v-4l-1-1h4l5-3c1 0-3 2-3 4l3 2v1h4l-3 1c3 1 5 4 8 7h1l2 1h-2l4 6 1 1h2l-2 1 4 7-9-12c-4-6-6-6-6-6l6 9 4 8s-5-11-12-17l-8-7c-1 0-2 5-1 6l10 10 9 13-10-13c-7-7-9-8-10-8l-1 2-2 1 6 7h3l2 2-2-1h-2l5 6 2 1 3 1-3-1h-1l3 5-10-10c-4-4-6-5-6-4l-1 1-2 1 6 7 5 6-5-5-5-4v2l5 7-7-8-1 1-2 2 9 9-8-6 3 7-5-6-1 1-3 1 6 8-6-6-1 1 2 5s-2-5-3-4l-1 1-2 1 2 2 1 3-2-3-2-2-1 1-1-1z\"/>\n      <path fill=\"#202020\" d=\"M495 203h2l-3-2c-1-2-6-16-11-23-9-12-17-17-17-17s10 6 17 16c7 11 9 20 11 22l4 3-1 2h-3l1-1zM432 200v1l3-4-2-1-1-3 1 3h3l4-4-3-1-1-3 2 2h2l3-5h-2c-2-1-2-3-2-3l2 2c2 0 3-1 3-2v-6h-3c-2 0-2-2-2-2l2 2c2 0 3-1 3-2v-4l-2-2h-2c-2 0-3-2-3-2l3 1 2-2-1-3-1-2-3 1-2-2 2 1 2-1c0-1 0-2-3-5l-4-3 5 3 3 4h3v-3l-3-4 3 4v3l6 2v-3l-2-3 2 3 1 2-1 2 3 1 3 1 1-2-1-4 1 4v3h-1l-11-4 6 5 3 3-3-2-6-2 1 1-1 2 6 5-2 2-3-2 2 2-1 2 3 4-1 2 2 3-3-2-2-2-1 4s2 1 2 3v3l-3-3-1 1-2 3c1 0 3 1 3 3l-2 3-2-4-3 4 1 2h-2l-3 1v-1z\"/>\n      <path fill=\"#202020\" d=\"M466 161l1-1s2-2 1-3l-4 1-6-3s-12-9-31-10c-6 0-9 2-9 3 0 0 2-3 8-2 2 0 21 1 31 9 1 0 4 3 7 3h3l-1 2v1zM433 164l-3-5-11-5 10 6 4 4z\"/>\n      <path d=\"M433 177l-2-2-3-1 3 1 2 2zM432 170l-3-1-3-1h4l2 2zM431 164l-3-1-3-1h4l2 2zM428 161l-4-2-6-1h7l3 3zM421 157l-4-1h-6l8-1 2 2z\"/>\n    </g>\n    <g fill=\"#f8c83c\" stroke=\"none\" stroke-width=\"0\">\n      <path d=\"M400 238s1 2 3 2 4 3 4 3l-2 3h-6l-2-3 3-5zM400 236l-3-5c-2-1 0 1 0 2l-1 2 1 2 3-1z\"/>\n      <path d=\"M399 242h2l1-1M398 240s3-2 3-4l-2-1-2 3 1 2z\"/>\n      <path d=\"M395 242l2 2 3-2-2-2h-3v2z\"/>\n      <path d=\"M398 240l-3 1s-2-1-1-2h2l1-1h1v2z\"/>\n      <path d=\"M396 241s-3 5-5 4l1-6 2 1 2 1z\"/>\n      <path d=\"M390 238l5 1-4 2-1-3z\"/>\n      <path fill=\"#202220\" d=\"M379 244s1 3 3 3 3-2 3-2l-4-2-2 1z\"/>\n      <path fill=\"#4b4139\" d=\"M379 244v1l1 1 2 1 4-2-5-2-2 1v1-1 1l2-2 4 2-3 2-2-2h-1v-1 1-1z\"/>\n      <path fill=\"#202220\" d=\"M381 244s0 1 3 2l4-2-4-3-3 3z\"/>\n      <path fill=\"#4b4139\" d=\"M381 244s0 2 3 2l4-2-4-4-4 4h1l3-3 4 3v-1 1l-4 1h-3a3 3 0 0 1 0-1z\"/>\n      <path fill=\"#4b4139\" d=\"M381 244l2 1h3-1l-1 1-1-1h-2v-1z\"/>\n      <path fill=\"#202220\" d=\"M384 242s1 3 3 2l2-1-2-4-3 3z\"/>\n      <path fill=\"#4b4139\" d=\"M384 242v1l3 2 2-1 1-1-3-4-3 3 3-3 2 4-2 1-2-1-1-1z\"/>\n      <path fill=\"#4b4139\" d=\"M384 243l3 1h2-1l-1 1-1-1h-1l-1-1zM380 245l2 1h2-1l-1 1h-1l-1-1v-1z\"/>\n      <path d=\"M390 238c1 0 3 2 3 4 0 1-1 4-2 3l-4-3v-2l3-2zM379 238l-2-1v4l2-1v-2zM379 240l-2 1 1 2 2-1-1-2z\"/>\n      <path d=\"M380 241l-2 2 1 2 2-1-1-3zM381 235h-1l-2 2 1 3 3-1-1-4z\"/>\n      <path d=\"M381 237l-3 3 2 2 3-2-2-3z\"/>\n      <path d=\"M384 242l-3 2-2-2 3-2c1-1 2 2 2 2zM387 232l-3-1c-2 0-3 2-4 4l1 3c1 1 5-2 5-2l1-4z\"/>\n      <path d=\"M383 240l-2-3c0-1 2-3 4-2l1 3s-2 3-3 2z\"/>\n      <path d=\"M387 240l-2 2c-1 1-2 0-3-1l1-2 2-1 2 2z\"/>\n      <path d=\"M385 236s-2 1-1 3l3 2 2-2 2-2-1-3c-1 0-3 0-5 2z\"/>\n      <path fill=\"#202220\" d=\"M389 231h-3l-2 3 1 3 2-1 1-2v-1l1-2z\"/>\n      <path fill=\"#4b4139\" d=\"M389 231h-3l-2 2v2l1-2 2-2h2z\"/>\n      <path d=\"M432 262l2-1 2-1 1 3-2 1h-4l1-2z\"/>\n      <path d=\"M428 263h2l2-1v3l-2 1-2-1v-2zM444 262l-1-2-3-2v6h3l2-2h-1z\"/>\n      <path d=\"M428 263l-1-1c-2 0-3 1-3 2l1 4h3l8-4h-4l-2 1-1-1-1-1z\"/>\n      <path d=\"M433 265h-1l-2 1v2l3 1 2-1v-3h-2zM447 263l-1-1h-2l-1 1v2l1 1h1l2-1v-2z\"/>\n      <path d=\"M437 262l-2 1-2 2 2 2h1l3-3v-2h-2zM449 265l-1-1-1-1-2 2v1l1 1 2 1 2-2-1-1z\"/>\n      <path d=\"M444 267l1 1h1c0 1 0 0 0 0l2 3h3c1 0 0 0 0 0l3-3-1-1s1-2-1-2h-3l-2 2-1-1-1-1h-1l-1-2h-2v-1l-3 2-1 2-2 1s-1 2-2 1c-2 0-3-2-3-2l-2 1-1 2 1 3c1 1 2 2 4 1s1-3 1-3h1l4-3\"/>\n      <path d=\"M441 254v4l-1 5h-4v-4l5-5zM437 267s0 1 2 1h1v-1l2 1c2 0 2-2 2-2\"/>\n      <path fill=\"#202220\" d=\"M422 270s-2-1 0-2h2l1-2-1-2s-5 0-5 3 3 3 3 3zM428 277v-3h1v-3l-2-2s-3 2-2 5c0 3 3 3 3 3zM452 275s5 2 5-3c0-2-2-4-3-4l-2 1-1 2 3 1c1 3-2 3-2 3z\"/>\n      <path fill=\"#4b4139\" d=\"M428 277s-3-1-3-4 2-4 2-4-2 2-2 4c0 3 3 4 3 4zM422 270s-2 0-3-3c0-3 5-3 5-3s-5 0-4 3c0 3 2 3 2 3zM452 275h2c1 0 2 0 3-2l-1-4-2-1 2 1 1 4c-1 2-3 2-4 2h-1z\"/>\n    </g>\n    <g fill=\"#4d2a15\">\n      <path fill=\"#904720\" d=\"M397 177h-1l1-1 2-1h5l1 1 2 3-5 2-1 1v-1l-1-2z\"/>\n      <path fill=\"#202020\" d=\"M442 247v-7l-20 6 8 7z\"/>\n      <path fill=\"#d2a567\" d=\"M406 235l-1-2-2-1h-2v1l2 2a616 616 0 0 0 4 3h1l-2-3zM406 238h1l1 1 1 1 1 2v1h-2l-7-2 1-2 1-1h2z\"/>\n      <path fill=\"#d2a567\" d=\"M410 243h1l1-1-1-2 1-8-6-6-1 4 2 6 1 3z\"/>\n      <path fill=\"#ab6d29\" d=\"M406 229v3l3 9-2-2-2-11c1-5 1 1 1 1zM410 233l-1 2v3s-1-1 1-1c1-1 1 3 1 3v-6l-1-1zM410 246l-5-2-5-3h6l3 2h2l2-1v2l-3 2zM401 244l1 2h-4l6 2 1-1-4-3z\"/>\n      <path fill=\"#d2a567\" d=\"M399 243l3 1h4v2l-4-1-2-1-1-1z\"/>\n      <path fill=\"#ab6d29\" d=\"M412 240l1 2 1-3v-4l-2-1z\"/>\n      <path d=\"M406 235l-1-3-2-4 1-2 2 2-1 3 1 4z\"/>\n      <path fill=\"#d2a567\" d=\"M395 245l2-1h3l4 2 1 1-7-1-3-1z\"/>\n      <path fill=\"#8f4620\" d=\"M412 234v5l1 3-1 1h-3l2-1-1-3v-3l-1 1 1-6 2 3z\"/>\n      <path fill=\"#ab6d29\" d=\"M400 244l-1-1c0-1 1 2 5 2h5l-1 1-3 2-1 1v-3l-3-1-1-1z\"/>\n      <path fill=\"#8f4620\" d=\"M406 235l-5-7c-2-3-1-7-1-7l4 5v3l2 6z\"/>\n      <path fill=\"#ab6d29\" d=\"M404 251v-2c3-4 9-6 9-6v4l-8 4h-1z\"/>\n      <path fill=\"#8f4620\" d=\"M404 248l2-2-3-1-3-1 3 2 1 1v1zM415 249l-1-3-1-3-1 1-3 1 3 1-4 1h3l-3 2-3 1-1 1h5l6-2z\"/>\n      <path fill=\"#ab6d29\" d=\"M415 249s-1-1-2-7l-1-7 2 2 3 4-2 8z\"/>\n      <path fill=\"#8f4620\" d=\"M416 239l-1 5v5l3 3v-1l1-3v-4l-3-5z\"/>\n      <path fill=\"#202020\" d=\"M419 244s1 8-1 8l-3-3 3 3 1-9v1zM415 249l-1-1-4 2c-5 2-6 1-6 1s1 1 6 0l4-2h1z\"/>\n      <path fill=\"#ab6d29\" d=\"M407 238l1 3 2 2-1-3-3-4 1 2z\"/>\n      <path fill=\"#8f4620\" d=\"M404 249v-2l-4-1-5-1 4 2 4 1h1v1z\"/>\n      <path fill=\"#202020\" d=\"M404 249v-1l-5-1-4-2 4 2 5 2z\"/>\n      <path fill=\"#ab6d29\" d=\"M406 238l-4 1-2 2h2l1-2 3-1z\"/>\n      <path fill=\"#8f4620\" d=\"M401 232l2 2 3 2 1 2-5-2-1-4z\"/>\n      <path fill=\"#8f4620\" d=\"M405 233l-2-1h-2l1 3 1-1-2-1h4z\"/>\n      <path fill=\"#202020\" d=\"M415 228l22-11 11 15-19 5-10 1-5-4z\"/>\n      <path d=\"M445 235l28 24-3 2-7-2-13-13-5-6z\"/>\n      <path d=\"M480 254l-15-12-20-15v7l23 21 7 4 4-2 2-2-1-1z\"/>\n      <path fill=\"#803f1d\" d=\"M445 237l14 13c6 5 12 10 13 9l1-1-28-23v2z\"/>\n      <path d=\"M464 260l-2 2-4-1-17-18 1-3h3z\"/>\n      <path fill=\"#202020\" d=\"M480 254s-2 5-6 4c-5-2-29-25-29-25v3s25 22 29 23c5 1 9-3 9-3l-3-2z\"/>\n      <path fill=\"#803f1d\" d=\"M442 241l12 13c4 4 8 7 10 7 1-1-1-3-1-3l-12-11-6-6h-3z\"/>\n      <path fill=\"#202020\" d=\"M444 241l22 20c3 1 8-2 8-2l-2-1s-1 3-5 2c-5-1-22-20-22-20l-1 1z\"/>\n      <path d=\"M452 260l-8-8-1-3-1-4 15 15-2 1h-2z\"/>\n      <path fill=\"#202020\" d=\"M465 260s-2 3-4 2c-3 0-4-2-4-2l-14-13v-3s15 17 18 17c2 1 3-2 3-2l1 1z\"/>\n      <path fill=\"#202020\" d=\"M457 260s-1 2-3 2l-2-2-9-10v-2s9 12 11 13c2 0 2-2 2-2l1 1z\"/>\n      <path fill=\"#b07229\" d=\"M448 233l9 8 4 1h-2l4 4 5 1h-3l4 4h6l-4 1 6 5-7-4-1 2-1-3c0-2-4-5-4-4l-1 2v-3l-5-4v2l-1-3-9-9z\"/>\n      <path d=\"M434 256s0 3-2 4l-4-6v-6l4 4 2 4zM445 255v-2l-1-2v-3l-1-2v-2h-1l-2 2-1 2 1 4 1 3 2 1 2-1z\"/>\n      <path d=\"M442 260v-4l-3-7-1-2-2-1-1 2v2l3 6 4 4z\"/>\n      <path fill=\"#202020\" d=\"M440 247l1 3 2 5-1 1 3 2v-3l-1-1-2-6 1-3 1 6 1 1-1-4v-3-2-2l1 1 1-2v-8l-9 11 3 4z\"/>\n      <path fill=\"#202020\" d=\"M440 246l1 6 1 4v4l-3-9-1-4h-1l3-1z\"/>\n      <path d=\"M439 262v-4l-4-6-3-3-2-3v5l4 7 5 4z\"/>\n      <path fill=\"#202020\" d=\"M426 248l1 2v2l2 5c1 2 2 4 3 3l2-2-2 2-3-9-1-1-2-2zM435 255l-2-4-2-2v-3l2 2 2 1 1 3-1 3z\"/>\n      <path fill=\"#5c3a1d\" d=\"M430 251l1 3 4 4-4-3-1-4z\"/>\n      <path fill=\"#202020\" d=\"M436 249l1-2h1l-1-1-2-2 1 3v2zM435 249l3 7 1 5-1-3-3-7v-2z\"/>\n      <path d=\"M439 246v-11l-4-8-1 1-4-2v6l7 13 2 1z\"/>\n      <path fill=\"#8b441f\" d=\"M425 251l2 1-1-4-10-13 9 16z\"/>\n      <path fill=\"#8b441f\" d=\"M431 246l-1 5c-2 0-11-13-13-14l-6-5 7 1 12 12 1 1z\"/>\n      <path fill=\"#202020\" d=\"M425 251l-1-3-1-3-7-10-3-2a20 20 0 0 0 0 3l5 7 7 8z\"/>\n      <path d=\"M435 249v-4l-5-13-2 1-3-3-2-2 1 5-1 2 5 7 7 7zM441 242l2-1-1-6-4-13h-1l-2-2 1 8 3 10 1 3 1 1z\"/>\n      <path fill=\"#202020\" d=\"M430 245l-5-6-2-4h-2c-2 0-3-2-3-2s-1 2 4 7c6 6 8 5 8 5z\"/>\n      <path fill=\"#8b441f\" d=\"M439 247v-12l-4-8 4 10-1 5-1-5-2-3 3 11c-2 0-8-13-8-13 0-1 0 0 0 0s5 16 9 15z\"/>\n      <path d=\"M442 215l3 6 1 6v5s0 9-1 10l-2-2-2-10-2-12 1-2h1l1-1z\"/>\n      <path fill=\"#8b441f\" d=\"M435 249v-3l-1 1-2-4-1-2-1 2-6-8h-1s7 15 12 14z\"/>\n      <path fill=\"#202020\" d=\"M432 243v-4l-2-7h-2l-3-2a49 49 0 0 0 7 13zM436 240l-3-9-3-5v4l3 4 3 6zM442 232l-1-7-2-7h1l2 2-1-4h-1-1v1h-1v5l2 5 2 5zM446 232s1-7-1-12c-1-4-3-5-3-5l3 8 1 9zM439 235l-2-9-1-5-2-1 1 5v2l2 3 2 5z\"/>\n      <path fill=\"#904720\" d=\"M443 244l-1-10-4-12 4 15c-1 1-2-4-2-4-1 0 3 9 1 9l-1-2v2s1 2 3 2zM444 240l-1-11-2-10 3 10 1 12-2-1v-1l1 1z\"/>\n      <path fill=\"#312317\" d=\"M431 249c1 0 1 3-1 2-1 0-4-2-4-4l4 4 1-5v3z\"/>\n      <path fill=\"#d2a567\" d=\"M439 213h3l2-3-1-4 1 3c0 3 1 6-3 7h-2v-3z\"/>\n      <path fill=\"#8f4620\" d=\"M436 207l3 6v5l-1-1-2-10z\"/>\n      <path fill=\"#1e2121\" d=\"M399 211l14 20 17-19-11-12z\"/>\n      <path d=\"M417 199l-1 3 2 5 2 3 4 2 1-2v-3h3l2-2 2-4v-1l-1-1-3-6-2 2-1 1-2-2-2 4-3-2z\"/>\n      <path fill=\"#5c3818\" d=\"M424 212l1-2v-8l-2-6c-1 1 2 5 1 10l-1 6h1zM425 204s2 4 3 2v-7l-2-4h1l1 4c1 2 2 7 0 8-1 1-3-2-3-2v-1z\"/>\n      <path fill=\"#8f4620\" d=\"M417 207l2-2 1 1 1 2 2 3 1 2h-1l-1 1-3-2-1-1-1-4z\"/>\n      <path fill=\"#d2a567\" d=\"M423 235a432 432 0 0 1-14-11l-1-4 3 1 5-2 1-2 6-3 3-2h7l2-4 3 6v8l-4-2s2 8 0 8l-4-3s1 7-1 7l-6-3s2 5 0 6z\"/>\n      <path fill=\"#8f4620\" d=\"M421 226l2 3v4c-1 1-3-1-4-4l-2-5 4 2zM436 209s2 11 1 11c-1 1-5-3-5-3l-6-9-1-1h3l8 2zM417 230l-2-2-4-4-3-4-1-1 1-1h1l8 6v6zM428 230l-7-6-5-6v-3h1l11 15zM429 225l-3-3-1-3 4 6zM432 224c-1 1-3-2-5-6l-3-3-2-1 1-1 1-1 2-1 5 11 1 2z\"/>\n      <path fill=\"#ab6d29\" d=\"M418 233l-2 1c-1 0-9-4-13-10l-4-7 2-2 12 15 5 3z\"/>\n      <path fill=\"#8f4620\" d=\"M418 233l-2 1s-4-1-9-7l-7-10v-2l2-1 8 13 8 6z\"/>\n      <path d=\"M426 228l-4-4-5-8 1-1v-2l1-1 2 1 3 4 1 2 2 5-4-3c0 1 4 6 3 7zM421 226l1 3c-1 0-1 1-2-1l-3-4-1 3-4-4-3-5v-3-3 1l1 1 5 5 1-1 3 6 2 2zM403 218l7 10c4 4 8 5 8 5l-11-13-4-2zM431 222l-4-4-2-7v-5l5 6 2 5-3-1 2 6zM436 218l-3-3-1-4-2-4v-5h2l3 3 1 5v8zM406 229l-5-8-2-4h1s1 5 6 10 7 5 7 5v4l-7-7z\"/>\n      <path fill=\"#202020\" d=\"M412 235l-8-9-6-8 1-2a61 61 0 0 0 13 19zM418 233l-8-8-4-5h2l3 5 7 8zM417 224l-4-5-3-5 5 4h1v3l1 3zM418 210v4l-1 1 2 3 3 3-2-4c-1-1-2-2-1-4l3 2 3 4-2-5-5-4z\"/>\n      <path fill=\"#202020\" d=\"M429 217l-2-5-2-7v4l-2 4h-2l1 1 2-1 1-2 2 3 2 3z\"/>\n      <path fill=\"#202020\" d=\"M425 205s3 3 4 2v-5h2l1-2 4 7 2 7-4-7c-1-4-2-5-3-5v4l2 5 1 4-2-3-2-2-2-2-3-1v-2z\"/>\n      <path fill=\"#171717\" d=\"M416 218l2 5a281 281 0 0 1-2-5z\"/>\n      <path fill=\"#8f4620\" d=\"M433 219h-1l1 3 2 1-1-2v-2h-1z\"/>\n      <path fill=\"#d2a567\" d=\"M402 200l-2 1-2 4 1 7a523 523 0 0 0 8 9l2-5v-4l2 3 4 3 3-5-5-13-3-1-8 1z\"/>\n      <path fill=\"#ab6d29\" d=\"M413 210l2 5v3s3-3 3-5l-1-8v-7l-1-1-3 5v8zM404 207l1 7 2 4 2-6-1-7-1-6-3 8z\"/>\n      <path fill=\"#45392d\" d=\"M397 197s-4 6-4 10c0 3 1 2 2 5l1 8 1-1v-22z\"/>\n      <path fill=\"#ab6d29\" d=\"M397 198s-4 6-3 9l1 5 2 8 2-2 2-2-1-3-1-3-1-1v-5l1-4v-2h-2z\"/>\n      <path fill=\"#dbad6c\" d=\"M416 208l-2-1-1-2v-1l3 4z\"/>\n      <path fill=\"#d2a567\" d=\"M398 199s-3 5-3 9l3 9v-1-12l1-4v-1h-1z\"/>\n      <path fill=\"#8f4620\" d=\"M404 200v2l-2 3-1 4 1-3 1-1 1 3-2 3v3l1-3 1-1 1 3 1-3 1-2v-1-6c1 0 3 0 2-1l-2-3-3 3z\"/>\n      <path fill=\"#dbad6c\" d=\"M416 211h-2l-1-1 1-1 1 1 1 1z\"/>\n      <path fill=\"#8f4620\" d=\"M400 212l-1 2-1 2v-4l-1-3c0-1 0 0 0 0v-3-2l-1 1-1 1 1-2 2-4 1-2h1l2 2-2 2s-1-1-1 4l1 6zM412 200v4l-2 2v3l1-2 1-1 1 2 1 4v-2h1l1 1-1-1-1-2-1-3 2 1 2 2-1-2v-3-3-3l-4 3z\"/>\n      <path fill=\"#1e2121\" d=\"M426 196l1 4 1 5-2-5-2-5-1 2 1 6-1-3-1-3-1 3 2 3-1-1-1-1v3l2 2-2-2h-1l1 4 2 4-2-4-2-11 2-2 2-6 1 5 2 2zM415 194l1 2 1 1c1 1-2 2-3 3l-5 2v-2l3-2 2-3 1-1zM400 199s1 3 2 3l5-4 1-2-1-1-5 5-2-1zM401 195l-1 3v1h-3v-2l2-1 2-1zM427 191l2 4 2 4-2-3-2-1v-2-2z\"/>\n      <path fill=\"#dbad6c\" d=\"M397 197h1l1-1 1-1v3l2 2 3-2 2-2 1 3c0 2 1 2 3 1l3-4 1-1 1-2 2-7-1-1-2 1-2-1h-1l-1 2-1 1h-3v-1l-1-1v-1l-4 3h-1l-2 3-1 2-2 3 1 1z\"/>\n      <path fill=\"#8f4620\" d=\"M412 189l-1 5-2 5 5-5 1-8-3 3zM416 186v3l-1 6 1 1c0 1 1 3 2 2l3-3 2-3c0-1 0 0 0 0l1 2 2 2 1-2-1-5-2-6-2-2-3 1-3 4z\"/>\n      <path fill=\"#ab6d29\" d=\"M422 181l1 5v0l-1-3v-2z\"/>\n      <path d=\"M427 191v3l-2-4-2-6-1-3h2l3 10zM418 197s4-2 4-8l-1-8s0 5-2 8l-2 6 1-1 1-2v3l-1 2zM415 186l-2 3-4 2 3-3v-3l-1 2-2 1 1-2v-1l2-3 1 3 2 1z\"/>\n      <path fill=\"#1e2121\" d=\"M426 179l1 5v7l-2-4-1-4-1-1h-1l1-2v-1h3zM418 192l3-6v-5h-2l-2-3v4l-2 4h2c2-1 2-3 2-3v3l-1 6z\"/>\n      <path fill=\"#8f4620\" d=\"M395 197l3-5a20785 20785 0 0 1 8-9l1 3 2 2-1 3-1 5v-5l-1 2-2 2 2-3v-2l-1 1h-1l1-1 1-2v-1-1l-2 1-1 2-2 3-1 4h-1l1-3 2-4h-1l-3 3-1 5h-2z\"/>\n      <path fill=\"#874f20\" d=\"M427 177s1 2-1 2h-3v-2h4z\"/>\n      <path fill=\"#b27129\" d=\"M402 181l-1 3-2 3 2 1 1-6v-1z\"/>\n      <path fill=\"#dbad6c\" d=\"M418 178s-1 8-3 8-3-4-3-4-1 6-4 6l-2-5-2 4c-3 2-5 1-5 0 0 0 3-2 3-6h1l2-2 4-2 2-2h1l2-2 4 3v2z\"/>\n      <path fill=\"#b27129\" d=\"M409 170l3 5 1-1 1 2c-1 1-2 3-1 5v-3l1-1 2 7 1-6c0-2 0 0 0 0 1 1 3 4 5 4l1-5-1-5-8-5-1 3h-4z\"/>\n      <path fill=\"#8f4620\" d=\"M420 169l1 3v8l-3-2-1-5-1-4v-2l2-1 2 3z\"/>\n      <path d=\"M420 167l3 5 3 5h1s-1 2-4 1l-2-6c-1-3-4-5-4-5l1-1 2 1z\"/>\n      <path fill=\"#1e2121\" d=\"M418 164l4 5 3 5 2 3h-1l-2-2-3-5-3-3 2 3 1 4-1-3-4-4 2 4 2 4-3-3-2-3-2-2 3-1 2-2z\"/>\n      <path fill=\"#8f4620\" d=\"M410 170h4l1 2-1 3-1-2-3-3z\"/>\n      <path fill=\"#b27129\" d=\"M411 175v5c0 3-2 6-3 6v-5l-1 2 1-4v-1l2-2 1-1z\"/>\n      <path fill=\"#8f4620\" d=\"M407 177l-2 1-1 2 1-1v2l-3 4 3-3 1-3 2-1 1 1v3l1-3 1-4h-1l-2-1-1 3z\"/>\n      <path fill=\"#dbad6c\" d=\"M418 162s1 2-1 4h-4l-5-2-3-1-1-1v-1h4l4 2h6v-1z\"/>\n      <path fill=\"#ab6d29\" d=\"M418 162l-1 2h-3l-4-2-5-1c-1 0 0 0 0 0h5l5 2 3-1z\"/>\n      <path d=\"M404 161h1l1-1v1h-2z\"/>\n      <path fill=\"#dbad6c\" d=\"M414 167s2 2 1 3l-3-1-6-3-3-1 1-1v-1h3l4 2 3 2zM410 169s3 5 2 6l-7-5-3 5-6-3 6-5v-1l3 1 4 1 1 1z\"/>\n      <path fill=\"#ab6d29\" d=\"M408 163l5 2 4 1-3 1-3-2-3-1v-1z\"/>\n      <path d=\"M404 162l3 1h2l-1 1-3-1h-1v-1z\"/>\n      <path fill=\"#ab6d29\" d=\"M414 169l1 1-2 1-3-1-3-2-4-1-1-1h1l4 1 4 1 2 1h1zM407 172l1 3-1 2-1 1-1-1v-2l-3-1 2-2v-2l3 2z\"/>\n      <path d=\"M403 165l2 1h4-1l3 1 3 2-3-1-4-1-5-1c-1 0 0 0 0 0l1-1z\"/>\n      <path fill=\"#ab6d29\" d=\"M412 174v1c-1 1-3 1-4-1l-1-1-3-2v-1l5 2 3 2z\"/>\n      <path d=\"M412 174s-1-2-6-4h-1l-1-1-3-1-1 1-1 1h3l2 1-2 3 2-2 2 1v-1l-1-2 4 2 3 2z\"/>\n      <path fill=\"#dbad6c\" d=\"M404 170s4 2 4 5c0 4-3 4-3 2l1 1 1-3-1-3-2-2z\"/>\n      <path fill=\"#6c3f18\" d=\"M389 161l-1 3-3 6c-3 3-5 3-4 4 0 2 1 1 2 1l5-7 1-5v-2z\"/>\n      <path fill=\"#dbad6c\" d=\"M402 155s1 3 1 7c-1 4-6 8-6 8l-9 6h-4l-1-1-1-1 1-2 3-3 2-2 1-4v-2 1l1 3-1 2 3-1 2-2 2-1 1-5v-3l1 3 1 3 1-1 1-2 1-3z\"/>\n      <path fill=\"#904720\" d=\"M403 177v2c0 2-1 3-2 3v-2l-2-2h-2l1-1 2-1 3 1z\"/>\n      <path fill=\"#ab6d29\" d=\"M401 177l2 1 1-3-1 2-2-2-3 1h2v1h1z\"/>\n      <path fill=\"#904720\" d=\"M389 171h2l5-1 2-2c1-1 4-3 4-6v-7s4 5 0 11c-2 4-5 5-5 5s5-1 5 0v3s2 0 3 2l-5-1-4 2h-2l-4 1-6-2 3-3 2-2z\"/>\n      <path fill=\"#ab6d29\" d=\"M399 161l2-3 1-3-1 3-2 3z\"/>\n      <path fill=\"#904720\" d=\"M398 157s2 6 0 8c-1 2-8 5-8 5s5-2 7-6l1-6v-1z\"/>\n      <path fill=\"#1e2121\" d=\"M391 171h4l3-3-2 2-1-2-1 2-3 1zM396 164s2-2 2-6-1-3-1-3l1 4-2 5zM399 165l3-2v-4l-1 3-2 3zM398 177s1-2 2-1l1 1-1-1-2 1zM394 174l4-2 4-1-3 3-4 1 4-2-5 1z\"/>\n      <path fill=\"#fff\" d=\"M389 169a3 4 68 0 1-4 6\"/>\n      <path fill=\"#f16e16\" d=\"M389 169a3 3 68 0 1-4 5\"/>\n      <path fill=\"#000\" d=\"M387 171a1 1 0 1 1-1 2\"/>\n      <path fill=\"#d5d3ca\" d=\"M387 173v-1 1z\"/>\n      <path fill=\"#ab6d29\" d=\"M390 167l2-5v-4l1 1 1 2-1 3 2-1 2-8v5c-1 4-2 4-5 6-1 1-3 2-5 6l-3 4 2-4 3-4 1-1z\"/>\n      <path fill=\"#904720\" d=\"M389 168l1-4-1-3 1 3-1 4z\"/>\n      <path d=\"M393 165l1-4-2-3s2 0 2 3l-1 4z\"/>\n      <path fill=\"#ab6d29\" d=\"M383 176v-2l2-3 3-4c0-1 2-4 1-6l-1 6-5 5-1 2v1l1 1z\"/>\n      <path fill=\"#6c4119\" d=\"M401 182l1-1-1-2-2-1-3-1 2 2h2l1 3z\"/>\n      <path fill=\"#6c4119\" d=\"M401 182s2-1 2-3v-1h2s-1 4-4 4z\"/>\n    </g>\n    <g fill=\"#f9c83a\">\n      <path fill=\"#bf802d\" d=\"M387 181l1 1 1 2 5-2 2-1-2-2h-3l-4 2z\"/>\n      <path d=\"M399 180l-1-2h-1l-4-1-2 1h-2l-3-1-2-1-3-1-2 2 1 1h-1s-4 2-4 6c-1 3 6 9 8 6 0 0-3-3-3-5 1-2 3-4 6-4l4-1h5c2 2-6 4-6 4v1s11-3 10-5z\"/>\n      <path fill=\"#fcf3d8\" d=\"M380 188s-4-1-4-4c0-4 4-6 4-6l2-2 2 1 2 1s-7 3-7 7l1 3z\"/>\n      <path fill=\"#fdeaaf\" d=\"M399 179h-1l-4-1h-7l-5-2-1 1-1 1c-1-1 1-3 2-3 3 0 6 3 8 3l4-1 5 2z\"/>\n      <path fill=\"#513625\" d=\"M387 182l3-1 3-1-2 2h-4z\"/>\n      <path d=\"M382 191l-4-2c-3-1-3-4-3-4s-1-3 2-5l2-2c1 0 0 0 0 0l-2 2-1 2-1 1v2l1 2 4 2 2 2z\"/>\n      <path fill=\"#8b5122\" d=\"M380 176l-1 1v1h1v-1a4 4 0 0 1 0-1h1-1z\"/>\n      <path d=\"M387 180l-5 1h6c2-1 6-2 7 0l-6 2v1l5-1 2-1 1-2-2-1h-5l-3 1z\"/>\n      <path fill=\"#8f4620\" d=\"M380 187l2 3h-2c-1 0-4-1-5-5v1l1 1 1 2 3 1 1 1 2-1-1-1-2-3v1z\"/>\n    </g>\n    <g fill=\"#816c2a\">\n      <path fill=\"#fcca3d\" d=\"M396 230v2-2zM390 185l-1-2h-1l1 3z\"/>\n      <path d=\"M396 234l-2-1-3-1a14 14 0 0 0 5 2zM396 230h-2-1l-2 1a5 5 0 0 1 3-1 30 30 0 0 1 2 0zM396 227l-3 1-3 2h1a24 24 0 0 1 5-3zM394 223l-1 2-1 1-2 2-1 1 2-2a114 114 0 0 0 3-2v-2zM391 221v3l-2 3v1l-1 1h1l2-5a6 6 0 0 0 0-3zM388 221a12 12 0 0 0 0 2v2a145 145 0 0 1-1 3v1l1-4 1-2-1-2zM386 221v4l-1 3 1-1v-2-4zM384 221a16 16 0 0 0 0 4l-1 3h1a30 30 0 0 1 0-3v-2-2zM382 222v3l-1 2-1 2h1l1-4v-3zM380 222a10 10 0 0 0 0 1l-1 2-1 2-1 1h-1 1l3-3v-2-1zM379 221v1l-2 2a9 9 0 0 1-2 2l3-2 1-3zM377 220l-1 1-1 1a10 10 0 0 1-2 1l1 1v-1l2-1 1-1v-1zM376 219h-1a23 23 0 0 1-1 2l-1 1 1-1 2-2z\"/>\n      <path d=\"M375 218l-1 1-1 1h1l2-1-1-1zM375 217l-1 1a14 14 0 0 1-1 0v1l2-1v-1zM374 216l-1 1 1-1h1-1zM375 213h-1l-1 2 1-1 1-1zM389 196h2v-1 1h-1 1-1 1-1l1-1v1-1 1-1 1-1 1-1h-1-1v1zM389 195l1-1h1l1-1h-1l-1 1h-1v1zM389 193l1-1 1-1h1v-1l-1 1-1 1h-1v1zM388 191l2-2 2-1-2 1-2 1v1zM386 189l5-3v-1l-5 3v1zM385 187l2-2 2-1v-1l-2 2-3 1 1 1zM383 186a173 173 0 0 1 5-4l-1 1-4 2v1z\"/>\n      <path fill=\"#78732e\" d=\"M386 181a402 402 0 0 0 4 4l2 5v1c0 2-1 5-3 7l-9 8-4 4-2 5 2 4a6 6 0 0 0 5 3l7-1 6 2c2 2 2 5 2 8a32 32 0 0 1-1 7v1h1l1-8c0-3-1-6-3-8-1-2-4-2-6-2h-7-1l-4-2-1-4 2-6 9-8c4-3 6-6 7-10v-1l-3-6-3-3h-1z\"/>\n      <path fill=\"#a8ac71\" d=\"M383 185h-1l1 1zM385 187l-1-1v1z\"/>\n      <path fill=\"#78732e\" d=\"M387 189l-1-1v1zM388 191v-1h-1l1 1zM389 193v-1h-1v1zM389 195v-1 1zM389 196v-1 1zM373 215v-1 1h-1 1z\"/>\n      <path fill=\"#fff\" d=\"M373 217h-1 1z\"/>\n      <path fill=\"#78732e\" d=\"M373 219v-1h-1v1z\"/>\n      <path fill=\"#fff\" d=\"M373 220zM373 222zM374 224l-1-1 1 1z\"/>\n      <path fill=\"#a8ac71\" d=\"M375 226h-1l1 1zM377 228h-1 1zM390 229h-1 1z\"/>\n      <path fill=\"#fff\" d=\"M391 230h-1 1z\"/>\n      <path fill=\"#a8ac71\" d=\"M391 231zM391 232z\"/>\n      <path fill=\"#fff\" d=\"M390 234h1-1zM371 166v1-1z\"/>\n    </g>\n    <g>\n      <path fill=\"#f9c83a\" d=\"M387 181c-1 0 0 0 0 0z\"/>\n      <path fill=\"#8f4620\" d=\"M387 181l-1 1 1-1z\"/>\n      <path fill=\"#977c2e\" d=\"M395 239l1-1v1h-1z\"/>\n    </g>\n  </g>\n</svg>\n";

	var loading_svg = '<svg class="line-short" version="1.1" viewBox="0 0 100 100">' +
	'<path  d="M36.788,81.008,50,50" stroke-linecap="round" stroke-width="6" fill="none"/>' +
	'</svg>' +
	'<svg class="smile" version="1.1" viewBox="0 0 100 100">' +
	'<g stroke-linecap="round" fill="none" transform="matrix(0.78036633,0,0,0.78036633,10.526512,18.003998)">' +
	'<path class="smile-outline" stroke-width="12" d="M75.242,57.51c-5.435,7.839-14.498,12.972-24.761,12.972-10.262,0-19.325-5.132-24.758-12.972"/>' +
	'<path class="smile-line" stroke-width="7.5" d="M75.242,57.51c-5.435,7.839-14.498,12.972-24.761,12.972-10.262,0-19.325-5.132-24.758-12.972"/>' +
	'</g>' +
	'</svg>' +
	'<svg class="line-large" version="1.1" viewBox="0 0 100 100">' +
	'<path stroke-linejoin="round" d="M50,50,66.687,92.266" stroke-linecap="round" stroke-miterlimit="4" stroke-dasharray="none" stroke-width="6" fill="none"/>' +
	'</svg>';

	var flag_wrapper = document.createElement('div');
	var is_app = typeof navigator !== 'undefined' && navigator.app;
	var supports_shadow_dom = 'attachShadow' in HTMLElement.prototype;

	flag_wrapper.className = 'aplazame-checkout-flag';

	function checkout (checkout_data, callbacks) {
	  var checkout_id = null, transaction = null;

	  if( typeof checkout_data === 'string' ) {
	    checkout_id = checkout_data;
	    checkout_data = null;
	    transaction = {};
	  } else {
	    transaction = checkout_data.transaction || checkout_data;
	    if( checkout_data === transaction ) checkout_data = null;
	  }

	  callbacks = callbacks || {};

	  log('transaction', transaction);

	  var checkout_url = transaction.host === 'location' ? ( location.protocol + '//' + location.host + '/' ) : api.checkout_url;

	  var on = {},
	      onError,
	      iframe_src = checkout_url + ( /\?/.test(checkout_url) ? '&' : '?' ) + 'iframe=checkout&t=' + new Date().getTime(),
	      error_loading = false,
	      error_message = false,
	      tmpOverlay = document.createElement('div'),
	      cssOverlay = cssHack('overlay'),
	      // cssBlur = cssHack('blur'),
	      cssLogo = cssHack('logo'),
	      cssModal = cssHack('modal'),
	      viewPortHack = document.createElement('meta'),
	      valid_result_status = ['success', 'pending', 'ko', 'dismiss', 'error'],
	      previous_scroll_top = bundle$1.scroll.top(),
	      _normalizePayload = function () {
	        transaction.__viewport__ = viewportInfo();

	        ['meta', 'merchant', 'order'].forEach(function (key) {
	          if( !bundle$1.isObject(transaction[key]) ) transaction[key] = {};
	        });

	        try {
	          checkoutNormalizeAPI(transaction, bundle$1.copy(api) );
	          log('api', transaction.api);

	          transactionNormalizer(transaction);
	          log('customer', transaction.customer);

	          on = checkoutNormalizerCallbacks(transaction, callbacks, location);
	          log('callbacks', on);
	        } catch (e) {
	          error_message = e.message;
	        }
	      };

	  viewPortHack.name = 'viewport';
	  viewPortHack.content = 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';

	  document.head.appendChild(viewPortHack);

	  onError = transaction.onError || bundle$1.noop;
	  delete transaction.onError;

	  if( !checkout_id ) _normalizePayload();

	  if( is_app ) transaction.meta.is_app = true;

	  tmpOverlay.className = 'aplazame-overlay aplazame-overlay-show';

	  cssOverlay.hack(true);
	  cssLogo.hack(true);

	  // cssBlur.hack(true);
	  // setTimeout(function () {
	  //   if( !error_loading ) {
	  //     _.addClass(document.body, 'aplazame-blur');
	  //   }
	  // }, 0);

	  tmpOverlay.innerHTML = '<div class="aplazame-logo-wrapper"><div class="logo-aplazame" style="width: 150px; height: 150px;">' +
	  loading_svg + '</div><div class="aplazame-overlay-loading-text">Cargando pasarela de pago...</div></div>';

	  document.body.appendChild(tmpOverlay);

	  var loadingText = tmpOverlay.querySelector('.aplazame-overlay-loading-text');

	  setTimeout(function () {
	    if( !error_loading ) {
	      tmpOverlay.querySelector('.logo-aplazame').className += ' animate';
	      if( (transaction.order || {}).currency === 'MXN' ) {
	        flag_wrapper.innerHTML = flag_svg_mx + '<div class="label">México</div>';
	      } else {
	        flag_wrapper.innerHTML = flag_svg_es + '<div class="label">España</div>';
	      }

	      document.body.appendChild( flag_wrapper );
	    }
	  }, 200);

	  // checkout_promise.then(function (res) {
	  //   console.log('checkout:then', res);
	  // }, function (res) {
	  //   console.log('checkout:catch', res);
	  // });

	  var checkout_shadow = null;
	  function _loadCheckoutShadow () {
	    if( !checkout_shadow ) checkout_shadow = new parole(function (resolve, reject) {

	      var script = document.createElement('script');
	      script.async = true;
	      script.onerror = reject;

	      window.__aplazame__checkout__ = function (checkout_loader) {
	        delete window.__aplazame__checkout__;
	        console.log('checkout_loader', checkout_loader);
	        resolve(checkout_loader);
	      };

	      console.log('checkout_url', checkout_url + 'checkout.js?build=' + Date.now()/(3600000) );
	      script.src = checkout_url + 'checkout.js?build=' + Date.now()/(3600000) + '&entrypoint=__aplazame__checkout__';

	      document.body.appendChild(script);
	    });
	    return checkout_shadow;
	  }

	  var shadow_dom_enabled = false;
	  parole.race([
	    new parole( supports_shadow_dom && shadow_dom_enabled ? function (resolveLoadingCheckout) {

	      _loadCheckoutShadow().then(function (checkout_loader) {
	        var checkout_container = document.createElement('div');
	        checkout_container.className = 'aplazame-modal';
	        document.body.insertBefore(checkout_container, document.body.firstChild);

	        console.log('_loadCheckoutShadow', checkout_data);

	        if( bundle$1.isMobile() ) bundle$1.scroll.goto(0);
	        checkout_loader.launch(transaction, {
	          el: checkout_container,
	          // shadow_dom: false,
	          onStatusChange: function (result_status) {
	            if( valid_result_status.indexOf(result_status) < 0 ) {
	              (console.error || console.log)('Wrong status returned by checkout', result_status );
	              // throw new Error(message);
	            }
	            on.statusChange(result_status);
	          },
	          onClose: function (result_status) {
	            on.close(result_status);
	          },
	        }, false).then(function () {
	          resolveLoadingCheckout();

	          cssModal.hack(true);
	          if( document.body.contains(flag_wrapper) ) document.body.removeChild( flag_wrapper );
	          cssOverlay.hack(false);
	          document.body.removeChild(tmpOverlay);
	          if( on.ready ) on.ready();
	          else log.debug('on.ready NOT defined');
	        });

	      });

	    } : function (resolveLoadingCheckout) {

	      var checkout_promise = checkout_id ?
	        apiHttp.get('checkout/' + checkout_id, bundle$1.merge({ api_version: 3 }, api) ).then(function (res) {
	          log('GET /checkout/' + checkout_id);
	          transaction = res.data.transaction;
	          _normalizePayload();
	          return res.data;
	        }) :
	        ( checkout_data ? parole.resolve(checkout_data) : apiHttp.post('checkout', transaction, bundle$1.merge({ api_version: 3 }, transaction.api) ).then(function (res) { return res.data; }) )
	        .then(function (checkout_data) {
	          log('checkout_id', checkout_data.id);
	          return checkout_data;
	        });

	      var iframe = bundle$1.getIFrame({
	            top: 0,
	            left: 0,
	            width: '100%',
	            height: '0',
	            background: 'transparent'
	          }),
	          postMessage = function (event_name, message, target) {
	            message.aplazame = 'checkout';
	            message.event = event_name;
	            (target || iframe.contentWindow).postMessage(message, '*');
	          };

	      iframe.id = 'aplazame-checkout-iframe';
	      iframe.className = 'aplazame-modal';

	      document.body.appendChild(iframe);
	      iframe.src = iframe_src;

	      window.checkout_iframe = iframe;

	      if (error_message) {
	        throw new Error(error_message);
	      }

	      var onMessage = function (e, message) {
	        // console.log('onMessage', message);

	        switch( message.event ) {
	          case 'get-checkout-data':
	            resolveLoadingCheckout();
	            checkout_promise.then(function (checkout_data) {
	              iframe.style.display = bundle$1.remove_style;
	              postMessage('checkout-data', {
	                data: checkout_data,
	              }, e.source);
	            }, function (res) {
	              iframe.style.display = bundle$1.remove_style;
	              postMessage('checkout-data', {
	                error: res,
	              }, e.source);
	            });
	            break;
	          case 'checkout-ready':
	            iframe.style.height = null;
	            if( bundle$1.isMobile() ) bundle$1.scroll.goto(0);
	            bundle$1.removeClass(iframe, 'hide');
	            cssModal.hack(true);
	            if( document.body.contains(flag_wrapper) ) document.body.removeChild( flag_wrapper );
	            cssOverlay.hack(false);
	            document.body.removeChild(tmpOverlay);
	            if( on.ready ) on.ready();
	            else log.debug('on.ready NOT defined');
	            break;
	          case 'loading-text': // only for iframe
	            loadingText.textContent = message.text;
	            break;
	          case 'adjust-height': // only for iframe
	            iframe.style.height = message.height + 'px';
	            postMessage('checkout-data', {
	              height: message.height,
	            }, e.source);
	            break;
	          case 'scroll-top': // only for iframe
	            if( message.animate ) bundle$1.scroll.animateTo(message.scroll_top);
	            else bundle$1.scroll.top(message.scroll_top);
	            break;
	          case 'open-link':
	            if( is_app )
	              navigator.app.loadUrl(message.href, { openExternal: true });
	            else
	              window.open(message.href, '_system');
	            break;
	          // case 'drop-blur':
	          //   _.removeClass(document.body, 'aplazame-blur');
	          //   _.addClass(document.body, 'aplazame-unblur');
	          //   setTimeout(function () {
	          //     cssBlur.hack(false);
	          //     _.removeClass(document.body, 'aplazame-blur');
	          //     _.removeClass(document.body, 'aplazame-unblur');
	          //   }, 600);
	          //   break;
	          case 'confirm':
	            log('aplazame.checkout:confirm', message);

	            var started = bundle$1.now();
	            browser.post( transaction.merchant.confirmation_url, message.data, {
	              headers: { contentType: 'application/json' },
	              params: bundle$1.extend(message.params || {}, {
	                order_id: message.data.checkout_token,
	                checkout_token: message.data.checkout_token
	              })
	            }).then(function (response) {
	              response.config.start = started;
	              postMessage('confirmation', {
	                result: 'success',
	                response: response
	              }, e.source);
	            }, function (response) {
	              response.config.start = started;
	              postMessage('confirmation', {
	                result: 'error',
	                response: response
	              }, e.source);
	            });
	            // confirmation_url
	            break;
	          case 'status-change':
	            if( valid_result_status.indexOf(message.status) < 0 ) {
	              (console.error || console.log)('Wrong status returned by checkout', message.result );
	              // throw new Error(message);
	            }
	            if( on.statusChange ) on.statusChange(message.status);
	            else log.debug('on.statusChange NOT defined');
	            break;
	          case 'close':
	            if( iframe ) {
	              if( bundle$1.isMobile() ) bundle$1.scroll.goto(previous_scroll_top);
	              document.body.removeChild(iframe);
	              cssModal.hack(false);
	              iframe = null;
	              document.head.removeChild(viewPortHack);

	              bundle$1.onMessage.off('checkout', onMessage);

	              if( valid_result_status.indexOf(message.result) < 0 ) {
	                (console.error || console.log)('Wrong result returned by checkout', message.result );
	                // throw new Error(message);
	              }

	              if( on.close ) on.close(message.result);
	              else log.debug('on.close NOT defined');

	              if( on[message.result] ) {
	                log('calling on.' + message.result);
	                on[message.result]();
	              } else log.debug('on.' + message.result, 'NOT defined');
	            }
	            break;
	        }
	      };

	      bundle$1.onMessage('checkout', onMessage);
	    }),
	    new parole(function (_resolve, reject) {
	      setTimeout(reject, 20000);
	    }).catch(function () { throw 'iframe-timeout'; }),
	  ]).catch(function (reason) {
	    error_loading = true;

	    log('Aplazame ' + reason);

	    bundle$1.removeClass(tmpOverlay.querySelector('.logo-aplazame'), 'animate');
	    loadingText.innerHTML = '<div class="text-error">Error cargando pasarela de pago</div><br/><div><a href="mailto:soporte@aplazame.com?subject=' + encodeURI('Checkout error: ' + reason) + '">soporte@aplazame.com</a></div>';
	    loadingText.style.lineHeight = '1.5';

	    onError(reason);
	  });

	}

	function getCartPrice () {
	  var ttp = document.querySelector('#total_price');
	  return ttp && ttp.textContent && bundle$1.parsePrice( ttp.textContent );
	}

	function button (options) {

	  if( !options ) {
	    throw new Error('aplazame.button requires parameters');
	  }

	  if( !options.id && !options.button && !options.selector ){
	    throw new Error('button can not be identified ( please use - id: \'button-id\' - or - button: \'#button-id\' - or - selector: \'#button-id\' (recomended) - )');
	  }

	  if( document.querySelector('#total_price') ) {
	    options.amount = getCartPrice() || options.amount;

	    if( !button.watching ) {
	      button.watching = true;
	      options.lastPrice = options.amount;

	      setInterval(function () {
	        var amount = getCartPrice();
	        if( amount && amount !== options.lastPrice ) {
	          options.amount = amount;
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
	    [].push.apply( elements, bundle$1.cssQuery(options.selector) );
	  }

	  if( options.description ) {
	    [].push.apply( elements, bundle$1.cssQuery(options.description) );
	  }

	  elButton = elButton || elements[0];

	  if( !options.$$running && options.selector ) {
	    options.$$running = true;
	  }

	  if( !options.forceUpdate && ( !elements.length || bundle$1.elementData(elButton, 'buttonInitialized') ) ) {
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
	    el.__input = ( el.nodeName === 'INPUT' || el.nodeName === 'BUTTON' ) ? el : el.querySelector('input, button');

	    if( el.__input ) {
	      el.__input.__disabled = el.__input.__disabled === undefined ? el.__input.hasAttribute('disabled') : el.__input.__disabled;
	      el.__input.__checked = el.__input.__checked === undefined ? el.__input.checked : el.__input.__checked;
	      if( el.__input.__checked !== undefined ) {
	        el.__input.checked = false;
	      }
	      if( !el.__input.__disabled ) {
	        el.__input.setAttribute('disabled', 'disabled');
	      }
	    }
	    el.style.display = 'none';
	  });

	  elements.forEach(function (el) {
	    bundle$1.elementData(el, 'buttonInitialized', true);
	  });

	  return button.check(options, function (allowed) {
	    if( allowed ) {
	      var elms = elements.slice();
	      elms.forEach(function (el) {
	        el.style.display = el.__display;
	        if ( el.__input ) {
	          if( !el.__input.__disabled && el.__input.hasAttribute('disabled') ) {
	            el.__input.removeAttribute('disabled');
	          }
	          if( el.__input.__checked !== undefined ) {
	            el.__input.checked = el.__input.__checked;
	          }
	        }

	      });
	    }
	  });
	}

	button.check = function (options, callback) {
	  if( bundle$1.isString(options) || bundle$1.isNumber(options) ) {
	    options = { amount: Number(options) };
	  }

	  var params = {
	    amount: options.amount,
	    currency: options.currency || 'EUR'
	  };

	  if( options.country ) {
	    params.country = options.country;
	  }

	  var checkPromise = apiHttp.get('checkout/button', { params: params });

	  if( bundle$1.isFunction(callback) ) {
	    checkPromise.then(function (response) { callback(response.data.allowed, response); }, function (response) { callback(false, response); });
	  }

	  return checkPromise;
	};

	var cache = [],
	    requestsCache = {};

	function simulator (amount, _options, callback, onError) {

	  if( bundle$1.isFunction(_options) ) {
	    onError = callback;
	    callback = _options;
	    _options = {};
	  } else {
	    _options = _options || {};
	  }

	  var data = {
	        params: {
	          amount: amount,
	          currency: _options.currency || 'EUR',
	          country: _options.country || 'ES',
	        }
	      },
	      hash = amount + ',' + JSON.stringify(data);

	  if( requestsCache[hash] ) {
	    return requestsCache[hash].then(function (result) {
	      (callback || bundle$1.noop)( result.choices, result.options );
	    });
	  }

	  if( _options.view ) {
	    data.params.view = _options.view;
	  }
	  if( _options.payday ) {
	    data.params.payday = _options.payday;
	  }
	  if( _options.publicKey || data.public_key ) {
	    data.public_key = _options.publicKey || data.public_key;
	  }

	  var foundCached = bundle$1.find(cache, function (item) {
	    return item.amount === amount;
	  });

	  requestsCache[hash] = ( !_options.noCache && foundCached ? parole.resolve(foundCached) : apiHttp.get('instalment-plan-simulator', data ).then(function (response) {
	      var result = {
	        amount: amount,
	        choices: response.data.choices[0].instalments,
	        options: response.data.options,
	        response: response
	      };
	      cache.push(result);

	      return result;
	    }) )
	    .then(function (result) {
	      (callback || bundle$1.noop)( result.choices, result.options );
	      return result;
	    }, function (response) {
	      if( response.status === 403 ) {
	        log('Aplazame[error]: Permiso denegado usando la clave pública', response.config.publicKey,
	          'Revisa la configuración de Aplazame, para cualquier duda puedes escribir a hola@aplazame.com');
	      } else if( bundle$1.key(response, 'data.error.fields.amount.0') ) {
	        log('Aplazame[error]: ' + response.data.error.fields.amount[0]);
	      } else if( bundle$1.key(response, 'data.error.message') ) {
	        log('Aplazame[error]: ' + response.data.error.message);
	      }
	      (onError || bundle$1.noop)(response);
	    });

	  return requestsCache[hash];
	}

	var last_scroll_top;

	var tmpOverlay = document.createElement('div'),
	    cssOverlay = cssHack('overlay'),
	    // cssBlur = cssHack('blur'),
	    cssModal = cssHack('modal');

	function modal (content) {

	  if( modal.iframe ) {
	    document.body.removeChild(modal.iframe);
	  }

	  cssOverlay.hack(true);
	  // cssBlur.hack(true);
	  cssModal.hack(true);

	  tmpOverlay.className = 'aplazame-overlay aplazame-overlay-show';
	  document.body.appendChild(tmpOverlay);

	  // setTimeout(function () {
	  //   _.addClass(document.body, 'aplazame-blur');
	  // }, 0);
	  setTimeout(function () {
	    bundle$1.removeClass(tmpOverlay, 'aplazame-overlay-show');
	  }, bundle$1.isMobile() ? 0 : 600 );

	  modal.iframe = bundle$1.getIFrame({
	        top: 0,
	        left: 0,
	        width: '100%',
	        height: '100%',
	        background: 'transparent'
	      });

	  modal.iframe.className = 'aplazame-modal';
	  // modal.iframe.style.display = 'none';
	  modal.iframe.content = content;

	  document.body.appendChild(modal.iframe);
	  modal.iframe.src = api.static_url + 'widgets/modal/modal.html?v=' + encodeURI(aplazameVersion);
	}

	bundle$1.onMessage('modal', function (e, message) {

	  switch( message.event ) {
	    case 'open':
	      modal.referrer = e.source;
	      modal.message = message;
	      modal(message.data);
	      break;
	    case 'opening':
	      modal.iframe.style.display = bundle$1.remove_style;
	      break;
	    case 'opened':
	      last_scroll_top = bundle$1.scroll.top();
	      e.source.postMessage({
	        aplazame: 'modal',
	        event: 'content',
	        content: modal.iframe.content,
	      }, '*');
	      break;
	    case 'resolved':
	      modal.referrer.postMessage({
	        aplazame: 'modal',
	        event: 'resolved',
	        name: modal.message.name,
	        value: message.value,
	      }, '*');
	      delete modal.referrer;
	      break;
	    case 'closing':
	      document.body.style.overflow = modal.iframe.overflow;
	      bundle$1.addClass(tmpOverlay, 'aplazame-overlay-hide');
	      // _.removeClass(document.body, 'aplazame-blur');
	      // _.addClass(document.body, 'aplazame-unblur');
	      // setTimeout(function () {
	      //   // cssBlur.hack(false);
	      //   _.removeClass(document.body, 'aplazame-unblur');
	      // }, _.isMobile() ? 0 : 600 );
	      break;
	    case 'close':
	      setTimeout(function () {
	        cssModal.hack(false);
	      }, bundle$1.isMobile() ? 0 : 100 );
	      document.body.removeChild(tmpOverlay);
	      bundle$1.removeClass(tmpOverlay, 'aplazame-overlay-hide');
	      bundle$1.scroll.goto(last_scroll_top);
	      if( modal.iframe ) {
	        document.body.removeChild(modal.iframe);

	        if( modal.referrer ) {
	          modal.referrer.postMessage({
	            aplazame: 'modal',
	            event: 'dismiss',
	            name: modal.message.name
	          }, '*');
	          delete modal.referrer;
	        }

	        if( modal.message ) {
	          delete modal.message;
	        }
	        delete modal.iframe;
	      }
	      break;
	  }

	});

	function processResponse(result, message, messageSrc, started) {

	  return function (response) {

	    var responsep = browser.plainResponse(response);
	    responsep.config = message;

	    messageSrc.postMessage({
	      aplazame: 'http',
	      event: 'response',
	      started: started,
	      elapsed: bundle$1.now() - started,
	      result: result,
	      response: responsep
	    }, '*');
	  };
	}

	function initHttpService () {
	  bundle$1.onMessage('http', function (e, message) {

	    var started = bundle$1.now();

	    browser( message.url, message )
	    .then(
	      processResponse('success', message, e.source, started),
	      processResponse('error', message, e.source, started)
	    );

	  });
	}


	// module.exports = { ready: true };

	function aplazameLoader (_, script) {
	  log.debug('(aplazame.js) script' + ( script.hasAttribute('data-aplazame') ? '[data-aplazame]' : '' ), script );

	  var data_aplazame = script.getAttribute('data-aplazame');
	  var params = _.deserialize(script.src.split(/[?#]/)[1] || '');
	      // options = script.src && (/[?#]/.test(script.src) ? _.deserialize(script.src.match(/(.*?)[?#](.*)/)[2]) : {}) || {};

	  if( data_aplazame ) {

	    if( /:/.test(data_aplazame) ) {
	      data_aplazame.split(',').forEach(function (part) {
	        var keys = part.match(/^([^:]+):(.*)/);
	        params[_.toUnderscoreCase(keys[1].trim())] = keys[2].trim();
	      });

	      log('data-aplazame: params', '"' + data_aplazame + '"' );

	      if( !params.public_key ) {
	        throw new Error('public_key missing in data-aplazame');
	      }
	    } else {
	      params.public_key = data_aplazame;
	    }
	  }

	  if( script.hasAttribute('data-api-host') ) {
	    params.host = script.getAttribute('data-api-host');
	  }

	  if( script.hasAttribute('data-sandbox') ) {
	    params.sandbox = script.getAttribute('data-sandbox');
	  }

	  if( script.hasAttribute('data-static-url') ) {
	    params.static_url = script.getAttribute('data-static-url');
	  }

	  if( script.hasAttribute('data-checkout-url') ) {
	    params.checkout_url = script.getAttribute('data-checkout-url');
	  }

	  if( script.hasAttribute('data-callback') ) {
	    params.callback = script.getAttribute('data-callback');
	  }

	  if( params.sandbox ) {
	    params.sandbox = params.sandbox === 'true' || params.sandbox === '1';
	  }

	  log('data-aplazame: params', params );

	  return params;
	}

	var num_listeners = 0;

	function _getLive (root) {

	  var listeners_all = [],
	      listeners = {},
	      ready_listeners = [],
	      dom_is_ready = document.readyState === 'complete',
	      each = Array.prototype.forEach,
	      filter = Array.prototype.filter;

	  function triggerEvent (element, eventName, data) {
	    var event = document.createEvent('HTMLEvents');
	    event.data = data;
	    event.initEvent(eventName, true, true);
	    element.dispatchEvent(event);
	    return event;
	  }

	  function _remove_item (list, item) {
	    for( var i = list.length - 1 ; i >= 0 ; i-- ) {
	      if( item === list[i] ) list.splice(i, 1);
	    }
	  }

	  function runListener (el, listener) {
	    if( el.__live__ && el.__live__[listener.id] ) return;
	    el.__live__ = el.__live__ || {};
	    el.__live__[listener.id] = true;
	    listener.fn.call(el, el);
	  }

	  function runSelector (selector) {
	    each.call( document.querySelectorAll(selector), function (el) {
	      listeners[selector].forEach(function (listener) {
	        runListener(el, listener);
	      });
	    });
	  }

	  function _runListener (listener) { listener(); }

	  function onNodesChanged () {
	    for( var listener_selector in listeners ) runSelector(listener_selector);
	    if( listeners_all.length ) listeners_all.forEach(_runListener);
	  }

	  function onDOMReady () {
	    dom_is_ready = true;
	    document.removeEventListener('DOMContentLoaded', onDOMReady);
	    window.removeEventListener('load', onDOMReady);

	    ready_listeners.forEach(_runListener);
	    onNodesChanged();
	  }

	  if( !dom_is_ready ) {
	    document.addEventListener('DOMContentLoaded', onDOMReady);
	    window.addEventListener('load', onDOMReady);
	  }

	  function onReady (listener) {
	    if( dom_is_ready ) return listener();
	    ready_listeners.push(listener);
	  }

	  onReady(function () {
	    if( root === document ) root = document.body;

	    var mutations_supported = 'MutationObserver' in window;
	    if( mutations_supported ) {
	      try{
	        new MutationObserver(function(mutations) {
	          onNodesChanged();

	          mutations.forEach(function(mutation) {
	            [].forEach.call(mutation.removedNodes, function (node) {
	              triggerEvent(node, 'detached');
	            });
	          });

	        }).observe(root, { childList: true, subtree: true });
	      } catch(err) {
	        mutations_supported = false;
	      }
	    }
	    if( !mutations_supported ) {
	      root.addEventListener('DOMSubtreeModified', onNodesChanged);
	    }
	    // eslint-disable-next-line
	    // console.log('mutations ' + ( mutations_supported ? '' : 'UN' ) + 'supported');
	  });

	  function _live (selector, listener_fn) {
	    if( selector instanceof Function ) return listeners_all.push(selector);

	    if( typeof selector !== 'string' ) throw new Error('selector should be a String');
	    if( !(listener_fn instanceof Function) ) throw new Error('listener should be a Function');

	    var listener = { id: '_' + ++num_listeners, fn: listener_fn };

	    listeners[selector] = listeners[selector] || [];
	    listeners[selector].push(listener);

	    if( dom_is_ready ) each.call( document.querySelectorAll(selector), function (el) {
	      runListener(el, listener);
	    });
	  }

	  _live.off = function (selector, listener) {
	    if( selector instanceof Function ) return _remove_item(listeners_all, selector);

	    if( typeof selector !== 'string' ) throw new Error('selector should be a String');
	    if( !(listener instanceof Function) ) throw new Error('handler should be a Function');

	    _remove_item(listeners, listener);
	  };

	  _live.byValue = function (selector, getValue) {
	    var value_listeners = {},
	        value_live_ready = false;

	    return function (name, listener_fn) {
	      var listener = {
	        id: '_' + ++num_listeners, fn: listener_fn,
	        filter: function (node) {
	          return getValue.call(node, node) === name;
	        }
	      };

	      value_listeners[name] = value_listeners[name] || [];
	      value_listeners[name].push(listener);

	      if( dom_is_ready && value_live_ready ) {
	        each.call( filter.call(document.querySelectorAll(selector), listener.filter), function (el) {
	          runListener(el, listener);
	        });
	      }

	      if( value_live_ready ) return;

	      value_live_ready = true;
	      _live(selector, function (el) {
	        for( var name in value_listeners ) {
	          value_listeners[name].forEach(function (listener) {
	            if( listener.filter(el) ) runListener(el, listener);
	          });
	        }
	      });
	    };
	  };

	  _live.ready = onReady;

	  return _live;
	}

	var $live = _getLive(document);
	$live.root = _getLive;
	$live.form = $live.byValue('form[name]', function () { return this.name; });

	var liveDom = $live;

	function buttonLoader (aplazame) {

	  liveDom('[data-aplazame-button]', function (btn) {
	    var btnId = btn.getAttribute('data-aplazame-button'),
	        btnParams = {
	          selector: '[data-aplazame-button' + ( btnId ? ('="' + btnId + '"') : '' ) + '], [data-aplazame-button-info' + ( btnId ? ('="' + btnId + '"') : '' ) + ']',
	          parent: btn.getAttribute('data-parent'),
	          public_key: btn.getAttribute('data-public-key'),
	          amount: btn.getAttribute('data-amount'),
	          currency: btn.getAttribute('data-currency') || undefined,
	          sandbox: btn.hasAttribute('data-sandbox') ? btn.getAttribute('data-sandbox') === 'true' : undefined,
	          country: btn.getAttribute('data-country') || undefined
	        };

	    aplazame.button(btnParams);
	  });

	}

	function widgetRawEjs(s) {
	s=s||{};var _='currency,getAmount,choice,custom_styles'.split(',');return Function.apply(null,_.concat('var _λ=\'\';_λ+=\'\\n<div class="aplazame-widget-instalments">\\n\\n  <span class="aplazame-widget-from">desde&nbsp;</span><!--\\n\\n  --><strong class="aplazame-widget-amount"><!--\\n    \';if( currency === \'EUR\' ) {_λ+=\'\\n    --><span class="aplazame-widget-price">\';_λ+=(getAmount(choice.amount, \',\', \'.\'));_λ+=\'</span><!--\\n    --><span class="aplazame-widget-currency">€</span><!--\\n    \';} else {_λ+=\'\\n    --><span class="aplazame-widget-currency">$</span><!--\\n    --><span class="aplazame-widget-price">\';_λ+=(getAmount(choice.amount, \'.\', \',\'));_λ+=\'</span><!--\\n    \';}_λ+=\'\\n  --></strong><!--\\n\\n  --><sub class="aplazame-widget-per-month">/mes</sub><!--\\n\\n  --><span class="aplazame-widget-instalments-wrapper"><!--\\n  --><span>&nbsp;en&nbsp;</span><!--\\n    --><em class="aplazame-widget-instalments-num">\';_λ+=(choice.num_instalments);_λ+=\'</em><!--\\n    --><span>&nbsp;\';_λ+=(choice.num_instalments === 1 ? \'cuota\' : \'cuotas\');_λ+=\'</span><!--\\n  --></span>\\n\\n</div>\\n\\n<style rel="stylesheet">\';_λ+=(custom_styles);_λ+=\'</style>\\n\';return _λ;')).apply(null, _.map(function (k) {return s[k];}));
	}

	function widgetRaw (widget) {

	  var widget_el = widget.el;

	  function _onClick () {
	    widget.showInfo();
	  }

	  function _unbind () {
	    widget_el.removeEventListener('click', _onClick);
	  }

	  return {
	    render: function () {
	      widget_el.innerHTML = widgetRawEjs(widget.simulator);

	      widget_el.addEventListener('click', _onClick);
	    },
	    unbind: _unbind,
	    detach: function () {
	      _unbind();
	      widget_el.innerHTML = '';
	    },
	  };

	}

	function widgetV3Ejs(s) {
	s=s||{};var _='type,preferences,zero_interest_campaign,choices,choice,getPrice,currency,getAmount,lighten,custom_styles,widget'.split(',');return Function.apply(null,_.concat('var _λ=\'\';_λ+=\'<div class="aplazame-widget aplazame-widget--type-\';_λ+=(type);_λ+=\' aplazame-widget--align-\';_λ+=(preferences.align || \'center\');_λ+=\'\';if( preferences.custom_styles && !preferences.api_custom_styles ){_λ+=\' aplazame-widget--custom-styles\';}_λ+=\'\';if( preferences.api_custom_styles )_λ+=\' aplazame-widget--api-custom-styles aplazame-styles\';_λ+=\'">\\n\\n  <div class="aplazame-widget-container">\\n\\n  \';if( preferences.smart_title ) {_λ+=\'\\n    <div class="aplazame-widget-smart-title">\';_λ+=(zero_interest_campaign ? ( preferences.title_zero_interest || \'¡Consíguelo sin intereses!\' ) : ( preferences.title_default || \'Págalo a plazos\' ));_λ+=\'</div>\\n  \';}_λ+=\'\\n\\n  <div class="aplazame-widget-instalments" \';if( type !== \'select\' && type !== \'big-button\' ){_λ+=\' data-action="showInfo"\';}_λ+=\'>\\n\\n    \';if( type === \'select\' ){_λ+=\'\\n    <select>\\n      \';for ( var i = 0, n = choices.length ; i < n ; i++ ) {_λ+=\'\\n      <option value="\';_λ+=(choices[i].num_instalments);_λ+=\'" \';_λ+=(choices[i] == choice ? \'selected\' : \'\');_λ+=\'><span class="apz-price_widget-amount">\';_λ+=(getPrice(choices[i].amount, currency));_λ+=\'/mes</span> en \';_λ+=(choices[i].num_instalments);_λ+=\' \';_λ+=(choices[i].num_instalments > 1 ? \'cuotas\' : \'cuota\');_λ+=\'</option>\\n      \';}_λ+=\'\\n    </select>\\n    \';}_λ+=\'\\n\\n    <span class="aplazame-widget-from">desde&nbsp;</span><!--\\n    --><strong class="aplazame-widget-amount"><!--\\n      \';if( currency === \'EUR\' )  {_λ+=\'\\n      --><span class="aplazame-widget-price">\';_λ+=(getAmount(choice.amount, \',\', \'.\'));_λ+=\'</span><!--\\n      --><span class="aplazame-widget-currency">€</span><!--\\n      \';} else {_λ+=\'\\n      --><span class="aplazame-widget-currency">$</span><!--\\n      --><span class="aplazame-widget-price">\';_λ+=(getAmount(choice.amount, \'.\', \',\'));_λ+=\'</span><!--\\n      \';}_λ+=\'\\n    --></strong><!--\\n    --><sub class="aplazame-widget-per-month">/mes</sub><!--\\n    --><span class="aplazame-widget-instalments-wrapper"><!--\\n      --><span class="aplazame-widget-instalments-pre-in">&nbsp;en&nbsp;</span><!--\\n      --><em class="aplazame-widget-instalments-num">\';_λ+=(choice.num_instalments);_λ+=\'</em><!--\\n      --><span class="aplazame-widget-instalments-post-instalments">&nbsp;cuotas</span><!--\\n    --></span>\\n\\n  </div>\\n\\n  \';if( type === \'big-button\' || preferences.show_instalments_buttons ){_λ+=\'\\n  <div class="aplazame-widget-choice-buttons-wrapper">\\n    <span class="aplazame-widget-choice-text-in">en&nbsp;</span>\\n    <span class="aplazame-widget-choice-button">\\n      <button type="button" class="aplazame-widget-choice-button-decrease" data-action="decreaseNumInstalments">\\n        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">\\n          <path d="m 3,6 h 6" stroke="currentColor" stroke-width="1"/>\\n        </svg>\\n      </button>\\n      <div class="aplazame-widget-choice-button-value">\';_λ+=(choice.num_instalments);_λ+=\'</div>\\n      <button type="button" class="aplazame-widget-choice-button-increase" data-action="increaseNumInstalments">\\n        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">\\n          <path d="m 3,6 h 6" stroke="currentColor" stroke-width="1"/>\\n          <path d="m 6,3 v 6" stroke="currentColor" stroke-width="1"/>\\n        </svg>\\n      </button>\\n    </span>\\n    <span class="aplazame-widget-choice-text-instalments">&nbsp;cuotas</span>\\n  </div>\\n  \';}_λ+=\'\\n\\n  \';if( preferences.branding ){_λ+=\'\\n  <div class="aplazame-widget-branding">\\n    <span class="aplazame-widget-with">con&nbsp;</span>\\n    <svg width="77" height="20" viewBox="0 0 77 20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fill-rule="evenodd"><path d="M28 11.2v-.6h-1.2c-1 0-1.4.2-1.4.8 0 .5.4.8 1 .8 1 0 1.5-.3 1.5-1m1.8 1.4c0 .4-.3.7-.7.7-.2 0-.4 0-.6-.3l-.2-.3c-.4.4-1 .7-2 .7-1.4 0-2.2-.7-2.2-2s1-2 2.6-2H28v-.2c0-.7-.5-1.2-1.5-1.2-.4 0-1 .2-1 .3H25c-.4 0-.6-.2-.6-.5 0-.2 0-.5.3-.6.4-.2 1-.4 2-.4 1.8 0 2.6 1 2.6 2.4v2c0 .4 0 .5.2.7l.2.2v.4M35 11.2v-1-1.3c-.3-.7-.7-1-1.3-1-.5 0-1 .3-1.2 1V11c.2.6.7 1 1.2 1 .6 0 1-.4 1.2-1M31 15V7.5c0-.5.2-.8.7-.8.4 0 .6.3.7.7.3-.4.8-.7 1.7-.7 1.2 0 2 .6 2.3 1.6.2.5.2 1 .2 1.7 0 .8 0 1.3-.2 1.8-.3 1-1 1.6-2.2 1.6-.8 0-1.3-.3-1.6-.8V15c0 .4-.3.7-.7.7-.5 0-.8-.3-.8-.8M39.5 13.3c-1.2 0-1.7-.6-1.7-1.8V5c0-.5.3-.8.7-.8.5 0 .8.3.8.8v6.4c0 .4 0 .6.5.6.4 0 .6.3.6.7 0 .3-.2.6-.7.6h-.2zM45 11.2v-.6h-1c-1 0-1.4.2-1.4.8 0 .5.4.8 1 .8 1 0 1.5-.3 1.5-1m2 1.4c0 .4-.4.7-.8.7-.2 0-.4 0-.6-.3l-.2-.3c-.4.4-1 .7-2 .7-1.4 0-2.2-.7-2.2-2s1-2 2.5-2H45v-.2c0-.7-.3-1.2-1.3-1.2-.5 0-1 .2-1.2.3H42c-.2 0-.5-.2-.5-.5 0-.2 0-.5.4-.6.3-.2 1-.4 2-.4 1.7 0 2.5 1 2.5 2.4V12l.3.2.2.4M48.5 13.3c-.4 0-.7-.3-.7-.7 0-.3.2-.5.5-1l3-3.4h-2.6c-.4 0-.7-.3-.7-.7 0-.3.3-.6.7-.6h3.7c.4 0 .7.2.7.5s0 .6-.4 1l-3 3.4h2.8c.4 0 .7.2.7.6 0 .4-.2.7-.6.7h-4zM58 11.2v-.6h-1.2c-1 0-1.4.2-1.4.8 0 .5.4.8 1 .8 1 0 1.5-.3 1.5-1m1.7 1.4c0 .4-.3.7-.7.7-.3 0-.5 0-.6-.3l-.2-.3c-.4.4-1 .7-2 .7-1.4 0-2.2-.7-2.2-2s1-2 2.5-2h1.3v-.2c0-.7-.3-1.2-1.3-1.2-.5 0-1 .2-1.2.3H55c-.4 0-.7-.2-.7-.5 0-.2 0-.5.4-.6.4-.2 1-.4 2-.4 1.7 0 2.6 1 2.6 2.4V12l.3.2v.4M60.8 7.6c0-.5.3-.8.8-.8.4 0 .7.3.7.7.3-.4 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5-.5 1-.8 2-.8 1.5 0 2.3 1 2.3 2.3v3.5c0 .5-.2.8-.6.8-.5 0-.8-.3-.8-.8v-3c0-1-.4-1.4-1.2-1.4-.7 0-1.2.6-1.2 1.5v3c0 .5-.3.8-.7.8-.5 0-.8-.3-.8-.8v-3c0-1-.4-1.4-1.2-1.4-.7 0-1.2.6-1.2 1.5v3c0 .5-.3.8-.7.8-.5 0-.8-.3-.8-.8v-5zM75.4 8.8c-.2-.5-.6-.8-1.2-.8s-1 .3-1.3.8l-.2.6h2.6v-.6m-3.8 2.8c-.2-.4-.3-1-.3-1.5 0-.6 0-1 .2-1.5.4-1 1.4-1.7 2.6-1.7 1.5 0 2.4.6 2.8 1.7L77 10c0 .3-.2.6-.5.6H73h-.2v.5c.3.7.8 1 1.6 1 .5 0 1 0 1.3-.4l.5-.2c.4 0 .6.3.6.7 0 .3 0 .5-.3.6-.5.5-1.2.8-2.3.8-1.3 0-2.3-.7-2.6-1.8M18 7.3c.4-.6.3-1.3-.2-1.6-.6-.4-1.3-.2-1.6.3-.8 1-1.8 2-3 2.6l-3-7.8c-.2-.4-.6-.7-1-.7-.5 0-1 .3-1 .8L5 7.5l2 1 2-4.2 2 5.2-2 .2C6 9.7 3.6 8.4 2 6 1.7 5.6 1 5.5.4 6 0 6 0 6.8.2 7.4c2 3 5.4 4.6 9 4.6 1 0 1.8 0 2.8-.4l3 7.6c.2.6.8 1 1.4.6.6-.2 1-1 .7-1.4l-3-7.6c1.7-.8 3-2 4-3.5zM2.8 13.7c-.3.6 0 1.3.6 1.5.6.3 1.2 0 1.5-.6l.8-2c-.7-.2-1.4-.5-2-1l-1 2z"/></g></svg>\\n  </div>\\n  \';}_λ+=\'\\n\\n  </div>\\n\\n</div>\\n\\n\';if( ( !preferences.custom_styles || preferences.api_custom_styles ) && type !== \'text\' ){_λ+=\'\\n<style rel="stylesheet">\\n  \';if(preferences.text_color) {_λ+=\'\\n  .aplazame-widget:not(.aplazame-widget--custom-styles) { color: \';_λ+=(preferences.text_color);_λ+=\'; }\\n  \';}_λ+=\'\\n\\n  \';if(preferences.btn_text_color) {_λ+=\'\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-big-button .aplazame-widget-container,\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-button .aplazame-widget-instalments,\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-select .aplazame-widget-instalments {\\n    color: \';_λ+=(preferences.btn_text_color);_λ+=\';\\n  }\\n\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-select .aplazame-widget-instalments::before {\\n    \';_λ+=(\'background-image: url("data:image/svg+xml,%3Csvg xmlns=\\\'http://www.w3.org/2000/svg\\\' height=\\\'12\\\' width=\\\'8\\\'%3E%3Cg fill=\\\'none\\\' fill-rule=\\\'evenodd\\\' stroke=\\\'\' + preferences.btn_text_color.replace(/#/g, \'%23\') + \'\\\'%3E%3Cpath d=\\\'M.752 3L3.966.5 7.252 3M.752 9l3.214 2.5L7.252 9\\\'/%3E%3C/g%3E%3C/svg%3E");\');_λ+=\'\\n  }\\n  \';}_λ+=\'\\n  \';if(preferences.btn_bg_color) {_λ+=\'\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-big-button .aplazame-widget-container,\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-button .aplazame-widget-instalments::before,\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-select .aplazame-widget-instalments::before {\\n    background-color: \';_λ+=(preferences.btn_bg_color);_λ+=\';\\n  }\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-button .aplazame-widget-instalments:hover::before,\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-select .aplazame-widget-instalments:hover::before {\\n    background-color: \';_λ+=(/^#/.test(preferences.btn_bg_color) ? lighten(preferences.btn_bg_color, -5) : preferences.btn_bg_color);_λ+=\';\\n  }\\n  \';}_λ+=\'\\n</style>\\n\';}_λ+=\'\\n\';if( preferences.api_custom_styles && custom_styles ){_λ+=\'\\n<!-- <style rel="stylesheet">\';_λ+=(custom_styles.replace(/\.aplazame-widget(?=[ \.])/g, \'.aplazame-widget:not(.aplazame-widget--custom-styles)\'));_λ+=\'</style> -->\\n<style rel="stylesheet">\';_λ+=(custom_styles);_λ+=\'</style>\\n\';}_λ+=\'\\n\';return _λ;')).apply(null, _.map(function (k) {return s[k];}));
	}

	function widgetV3 (widget) {

	  var widget_el = widget.el,
	      widget_wrapper_el,
	      click_el = widget_el,
	      remove_style = / Trident\//.test(navigator.userAgent) ? '' : null,
	      textSelector = function (selector, text) {
	        if( widget_el.querySelector(selector) ) widget_el.querySelector(selector).textContent = text;
	      },
	      selectNumInstalmentsChoice = function (choice) {
	        widget.simulator.choice = choice;
	        textSelector('.aplazame-widget-price', widget.simulator.getAmount(choice.amount) );
	        textSelector('.aplazame-widget-instalments-num', choice.num_instalments );
	        textSelector('.aplazame-widget-choice-button-value', choice.num_instalments );
	      },
	      selectNumInstalments = function (num_instalments) {
	        widget.simulator.choices.forEach(function (choice) {
	          if( choice.num_instalments === num_instalments ) selectNumInstalmentsChoice(choice);
	        });
	      },
	      styles_link = document.createElement('link'),
	      _onReady = function () {
	        window.removeEventListener('load', _onReady);
	        window.removeEventListener('DOMContentLoaded', _onReady);

	        styles_link.rel = 'stylesheet';
	        styles_link.href = widget.simulator.static_url + 'widgets/simulator/widget-v3.css';
	        styles_link.onload = function () {
	          widget_el.style.display = remove_style;
	        };

	        document.head.appendChild(styles_link);
	      };


	  if( !widget.simulator.preferences.custom_styles || widget.type !== 'text' ) {
	    widget_el.style.display = 'none';
	    if( document.readyState === 'complete' ) _onReady();
	    else {
	      window.addEventListener('load', _onReady);
	      window.addEventListener('DOMContentLoaded', _onReady);
	    }
	  }

	  function _onClick () {
	    widget.showInfo();
	  }

	  function _selectChange () {
	    selectNumInstalments( Number(widget_el.querySelector('select').value) );
	  }

	  function _increaseNumInstalments () {
	    var index = widget.simulator.choices.indexOf(widget.simulator.choice),
	        choice = widget.simulator.choices[index + 1];

	    bundle$1.toggleClass(widget_wrapper_el, '_first-choice', 0 >= index + 1 );
	    bundle$1.toggleClass(widget_wrapper_el, '_last-choice', widget.simulator.choices.length-1 <= index + 1 );
	    if( choice ) selectNumInstalmentsChoice(choice);
	  }

	  function _decreaseNumInstalments () {
	    var index = widget.simulator.choices.indexOf(widget.simulator.choice),
	        choice = widget.simulator.choices[index - 1];

	    bundle$1.toggleClass(widget_wrapper_el, '_first-choice', 0 >= index - 1 );
	    bundle$1.toggleClass(widget_wrapper_el, '_last-choice', widget.simulator.choices.length-1 <= index - 1 );
	    if( choice ) selectNumInstalmentsChoice(choice);
	  }

	  function _unbind () {
	    click_el.removeEventListener('click', _onClick);
	    widget_el.removeEventListener('click', _onClick);
	    if( widget_el.querySelector('select') ) {
	      widget_el.querySelector('select').removeEventListener('change', _selectChange);
	    }
	    if( widget_el.querySelector('.aplazame-widget-choice-button-increase') ) {
	      widget_el.querySelector('.aplazame-widget-choice-button-increase').removeEventListener('click', _increaseNumInstalments);
	    }
	    if( widget_el.querySelector('.aplazame-widget-choice-button-decrease') ) {
	      widget_el.querySelector('.aplazame-widget-choice-button-decrease').removeEventListener('click', _decreaseNumInstalments);
	    }
	  }

	  var handler = {
	    render: function () {
	      _unbind();
	      var type = widget.simulator.type;
	      widget_el.innerHTML = widgetV3Ejs(widget.simulator);
	      widget_wrapper_el = widget.el.querySelector('.aplazame-widget');

	      if( type === 'select' ) {
	        return widget_el.querySelector('select').addEventListener('change', _selectChange);
	      }

	      if( type === 'big-button' ) {
	        var index = widget.simulator.choices.indexOf(widget.simulator.choice);
	        bundle$1.toggleClass(widget_wrapper_el, '_last-choice',  widget.simulator.choices.length-1 <= index + 1 );
	        bundle$1.toggleClass(widget_wrapper_el, '_first-choice',  0 >= index - 1 );
	        widget_el.querySelector('.aplazame-widget-choice-button-decrease').addEventListener('click', _decreaseNumInstalments);
	        widget_el.querySelector('.aplazame-widget-choice-button-increase').addEventListener('click', _increaseNumInstalments);
	        return;
	      }

	      click_el = type === 'button' ? widget_el.querySelector('.aplazame-widget-instalments') : widget_el;
	      click_el.addEventListener('click', _onClick);
	    },
	    unbind: _unbind,
	    detach: function () {
	      document.head.removeChild(styles_link);
	      _unbind();
	    }
	  };

	  return handler;

	}

	function _widgetIframe (aplazame) {

	  var _ = aplazame._;

	  return function (widget) {

	    var widget_el = widget.el,
	        iframe = _.getIFrame({ width: '100%', height: '40px' }),
	        _onMessage = function (e, message) {
	          if( message.simulator_id !== widget.id ) return;

	          switch( message.event ) {
	            case 'require:data':
	              e.source.postMessage({
	                event: 'simulator:data',
	                data: widget.simulator_data
	              }, '*');
	              break;
	            case 'iframe:resize':
	              iframe.style.height = message.data.height + 'px';
	              break;
	            case 'widget:showInfo':
	              widget.showInfo();
	              break;
	          }
	        };

	    widget_el.appendChild( iframe );
	    iframe.src = widget.simulator.static_url + 'widgets/simulator/simulator.html?' + _.now() + '&simulator=' + widget.id;

	    _.onMessage('simulator', _onMessage);

	    return {
	      render: function () {
	        iframe.contentWindow.postMessage({
	          event: 'simulator:data',
	          data: widget.simulator_data
	        }, '*');
	      },
	      unbind: function () {
	        _.onMessage.off('simulator', _onMessage);
	      },
	      detach: function () {
	        this.unbind();
	        widget_el.innerHTML = '';
	      },
	    };

	  };

	}

	function modalInstalmentsEjs(s) {
	s=s||{};var _='static_url,choices,reference_annual_equivalent,getAmount,months,currency,country,merchant_annual_equivalent,data,max_choice'.split(',');return Function.apply(null,_.concat('var _λ=\'\';_λ+=\'<div class="card-content">\\n\\n  <header class="aplazame"></header>\\n\\n  <img src="\';_λ+=(static_url);_λ+=\'/widgets/assets/images/ilustrations/camara.svg" alt="Cámara" class="camera">\\n\\n  <section class="info">\\n    Elige la cuota que más te convenga\\n  </section>\\n    <div class="choices-wrapper expanded" data-open="true">\\n    \';for( var i = 0, n = choices.length; i < n ; i++ ) {_λ+=\'\\n      <button type="button" class="choice\';if( choices[i].annual_equivalent < reference_annual_equivalent ) {_λ+=\' _on_campaign\';}_λ+=\'">\\n        \';if( choices[i].annual_equivalent < reference_annual_equivalent ) {_λ+=\'\\n        <div class="tae-ribbon">\\n          <img src="\';_λ+=(static_url);_λ+=\'/widgets/assets/images/ilustrations/ribbon.svg" alt="TAE Reducido">\\n          <div>\';_λ+=(getAmount(choices[i].annual_equivalent).replace(/[,.]00$/,\' \').replace(/0$/,\'\') + \'% TAE\');_λ+=\'</div>\\n        </div>\\n        \';}_λ+=\'\\n        <div class="wrapper">\\n          <div class="num-instalments">\\n            <span>\';_λ+=(choices[i].num_instalments);_λ+=\'</span>&nbsp;<span>\';_λ+=(months(choices[i].num_instalments));_λ+=\'</span>\\n          </div>\\n          <div class="amount"><!--\\n            \';if( currency === \'EUR\' )  {_λ+=\'\\n            --><span class="amount-amount">\';_λ+=(getAmount(choices[i].amount, \',\', \'.\'));_λ+=\'</span><!--\\n            --><span class="amount-currency">&nbsp;€</span><!--\\n            \';} else {_λ+=\'\\n            --><span class="amount-currency">$</span><!--\\n            --><span class="amount-amount">\';_λ+=(getAmount(choices[i].amount, \'.\', \',\'));_λ+=\'</span><!--\\n            \';}_λ+=\'\\n            --><span class="amount-per-month">/mes</span>\\n          </div>\\n          <div class="amount"><!--\\n            \';if( currency === \'EUR\' )  {_λ+=\'\\n              --><span class="amount-amount">\';_λ+=(getAmount(choices[i].downpayment_amount, \',\', \'.\'));_λ+=\'</span><!--\\n              --><span class="amount-currency">&nbsp;€</span><!--\\n            \';} else {_λ+=\'\\n            --><span class="amount-currency">$</span><!--\\n              --><span class="amount-amount">\';_λ+=(getAmount(choices[i].downpayment_amount, \',\', \'.\'));_λ+=\'</span><!--\\n            \';}_λ+=\'\\n          --><span>&nbsp;\';_λ+=(country === \'MX\' ? \'enganche\' : \'entrada\');_λ+=\'</span>\\n          </div>\\n        </div>\\n      </button>\\n    \';}_λ+=\'\\n  </div>\\n  \\n\\n  <section class="tae">\\n    <img src="\';_λ+=(static_url);_λ+=\'/widgets/assets/images/ilustrations/tocadiscos.svg" alt="Tocadiscos" class="music">\\n    <p>\';_λ+=(country === \'MX\' ? \'CAT\' : \'TAE\');_λ+=\' máximo: \';_λ+=(getAmount(merchant_annual_equivalent));_λ+=\'%. Cantidades orientativas. Las finales dependerán del perfil de riesgo de cada cliente.</p></section>\\n\\n  <section class="how-it-works">\\n    <header>¿Cómo funciona?</header>\\n    <div class="info-wrapper">\\n      <div class="info">\\n        <h3>Elige Aplazame</h3>\\n        <!-- <p>en la tienda, cuando vayas a pagar el pedido. Puedes financiar compras de \';_λ+=(getAmount(9900));_λ+=\' € hasta \';_λ+=(parseInt(data.max_credit_amount/100));_λ+=\' €.</p> -->\\n        <p>en la tienda, cuando vayas a pagar el pedido. Puedes financiar compras hasta&nbsp;<span style="white-space: nowrap;">\';_λ+=(currency === \'EUR\' ? ( parseInt(data.max_credit_amount/100) + \' €\' ) : ( \'$\' + parseInt(data.max_credit_amount/100) ));_λ+=\'</span>.</p>\\n      </div>\\n      <div class="info">\\n        <h3>Decide cómo quieres pagar</h3>\\n        <p>Hasta en \';_λ+=(max_choice.num_instalments);_λ+=\' \';_λ+=(max_choice.num_instalments > 1 ? \'cuotas\' : \'cuota\');_λ+=\', pagando con tarjeta.</p>\\n      </div>\\n      <div class="info">\\n        <h3>Disfruta de tu compra</h3>\\n        <p>Desde Aplazame estaremos disponibles por si necesitas cualquier cosa. ¡A disfrutar!</p>\\n      </div>\\n    </div>\\n  </section>\\n\\n</div>\\n\\n<div class="cta">\\n  <div class="col-sm-6 button-wrapper">\\n    <button class="btn lg btn-block white" type="button" data-modal="dismiss">Volver a Tienda</button>\\n  </div>\\n  <div class="col-sm-6 button-wrapper">\\n    <a class="btn lg btn-block" href="http://aplazame.com/how/customers/" target="_blank">¿Quieres saber más?</a>\\n  </div>\\n</div>\\n\';return _λ;')).apply(null, _.map(function (k) {return s[k];}));
	}

	function _getSimulatorWidget (aplazame) {

	  var _ = aplazame._,
	      serial = 1,
	      widgetIframe = _widgetIframe(aplazame),
	      getWidgetHandler = function (type, version, preferences) {
	        if( type === 'raw' ) return widgetRaw;

	        if( version === 3 && !preferences.custom_styles || version === 2 ) {
	          return widgetIframe;
	        }

	        return widgetV3;
	      },
	      initWidgetHandler = null;

	  function maxInstalments (prev, choice) {
	    if( prev === null ) {
	      return choice;
	    } else {
	      return choice.num_instalments > prev.num_instalments ? choice : prev;
	    }
	  }

	  function maxAnnualEquivalent (prev, choice) {
	    if( prev === null ) {
	      return choice;
	    } else {
	      return choice.annual_equivalent > prev.annual_equivalent ? choice : prev;
	    }
	  }

	  function Widget (widget_el, options) {
	    this.id = serial++;
	    this.el = widget_el;
	    this.options = options || {};
	    this.api = api;
	  }

	  Widget.prototype.render = function (choices, data) {
	    if( !data.widget ) return;

	    var widget = this,
	        widget_version = data.widget.preferences && Number(data.widget.preferences.version) || 2,
	        widget_type = data.widget.type;

	    widget.type = widget_type;
	    widget.version = widget_version;

	    var simulator_data = widget.simulator_data || {
	      version: widget_version,
	      static_url: api.static_url,
	      custom_styles: data.widget.styles,
	      data: data,
	      currency: widget.options.currency,
	      country: widget.options.country,
	    };
	    simulator_data.type = widget_type;
	    simulator_data.preferences = data.widget.preferences || {};
	    widget.simulator_data = simulator_data;
	    simulator_data.choices = choices;

	    if( widget.simulator ) {
	      simulator_data.choice = (function (choices, num_instalments) {

	        var choice = choices[choices.length - 1];
	        choices.forEach(function (_choice) {
	          if( _choice.num_instalments === num_instalments ) choice = _choice;
	        });
	        return choice;

	      })(choices, widget.simulator.choice.num_instalments);
	    } else {
	      simulator_data.choice = choices[choices.length - 1];
	      // widget.simulator = Object.create(simulator_data);
	      widget.simulator = (function () {
	        function SimulatorData () {}
	        SimulatorData.prototype = simulator_data;
	        return new SimulatorData();
	      })();
	      widget.simulator.$widget = widget;
	      widget.simulator.getAmount = getAmount;
	      widget.simulator.getPrice = getPrice;
	      widget.simulator.lighten = color_tools.lightenHEX;
	      widget.simulator.brightness = color_tools.brightness;
	    }

	    simulator_data.zero_interest_campaign = choices.some(function (choice) {
	      return choice.annual_equivalent === 0;
	    });

	    widget.handler = (function (_initWidgetHandler) {

	      if( _initWidgetHandler === initWidgetHandler && widget.handler ) return widget.handler;

	      initWidgetHandler = _initWidgetHandler;
	      if( widget.handler ) widget.handler.detach();

	      return initWidgetHandler(widget);

	    })( getWidgetHandler(widget_type, widget_version, data.widget.preferences || {}) );

	    widget.handler.render();
	  };

	  Widget.prototype.showInfo = function () {
	    var widget = this,
	        choices = widget.simulator.choices,
	        data = widget.simulator.data;

	    if( widget.simulator_data.preferences.disable_modal ) return;

	    var highlighted_num_instalments = choices.filter(function( choice ){
	      return data.highlighted_num_instalments.indexOf( choice.num_instalments ) > -1;
	    });

	    modal({
	      size: 'lg',
	      card: { className: 'has-cta modal-instalments-info _v3' },
	      template: modalInstalmentsEjs({
	        widget: widget,
	        max_choice: choices.reduce(maxInstalments, null),
	        merchant_annual_equivalent: data.annual_equivalent || choices.reduce(maxAnnualEquivalent, null).annual_equivalent,
	        reference_annual_equivalent: data.reference_annual_equivalent,
	        choices: choices,
	        highlighted_num_instalments: highlighted_num_instalments,
	        data: data,
	        static_url: api.static_url,
	        _options: widget.options,
	        currency: widget.options.currency,
	        country: widget.options.country,
	        getAmount: _.getAmount,
	        months: function (m) {
	          return m > 1 ? 'meses' : 'mes';
	        },
	      }),
	    });

	  };

	  return Widget;
	}

	var cms_price_selector = [
	  'form#product_addtocart_form .special-price .price', // magento
	  'form#product_addtocart_form .regular-price .price', // magento
	  '#product-info .special-price .price', // magento
	  '#product-info .regular-price .price', // magento
	  '#our_price_display', // prestashop
	  '#main [itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"] .price ins .amount', // woocommerce
	  '#main [itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"] .price .amount', // woocommerce
	  '#main [itemtype="http://schema.org/Product"] .single_variation_wrap .amount', // woocommerce
	  'body.woocommerce-page .product-page-price .woocommerce-Price-amount', // woocommerce
	  '[itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"] [itemprop="price"]', // Schema.org
	];

	var cms_qty_selector = [
	  'form#product_addtocart_form input[name="qty"]', // magento
	  'form#buy_block input[name="qty"]', // prestashop
	  'input#quantity_wanted', // prestashop
	  '#quantity_wanted', // prestashop
	  'form#product-options-form button[data-id=qty]', // custom
	  '#main [itemtype="http://schema.org/Product"] form.cart input[name="quantity"]', // woocommerce
	  'body.woocommerce-page form.cart input[name="quantity"]', // woocommerce
	];

	function _matchFirstQuerySelector (query_seletors) {
	  for( var i = 0, n = query_seletors.length, matched_el ; i < n ; i++ ) {
	    matched_el = document.querySelector(query_seletors[i]);
	    if( matched_el ) return matched_el;
	  }
	}

	function _$ (el, selector) {
	  if( typeof el === 'string' ) return document.querySelector(el);
	  return el.querySelector(selector);
	}

	function _getQty (qty_selector, show_warning) {
	  // if( typeof qty_selector !== 'string' ) {
	  //   log('warning: data-qty should be an string. pe: form#article .final-price ');
	  //   return 1;
	  // }
	  var qty_el;

	  if( typeof qty_selector === 'string' ) qty_selector = qty_selector.split(/ *, */);
	  if( !(qty_selector instanceof Array) ) return 1;

	  try {
	    qty_el = _matchFirstQuerySelector(qty_selector);
	  } catch(err) {
	    if(show_warning) log(err.message + '\ndata-qty should be an string. pe: form#article .final-price ');
	    return 1;
	  }

	  if( !qty_el ) return 1;

	  switch( qty_el.nodeName ) {
	    case 'INPUT':
	      return Number( qty_el.value );
	    case 'SELECT':
	      return _$(qty_el, 'option[selected]') && Number( _$(qty_el, 'option[selected]').value );
	    default:
	      return Number( qty_el.textContent.trim() );
	  }
	}

	function qtyGetter (widget_el) {
	  var qty_selector = widget_el.getAttribute('data-qty'),
	      show_warning = typeof qty_selector === 'string';

	  // if( !qty_selector ) qty_selector = cms_qty_selector.join(', ');

	  return function () {
	    return _getQty(qty_selector || cms_qty_selector, show_warning) || 1;
	  };
	}

	function _matchSelector (selector) {
	  return document.querySelector(selector);
	}

	function _getAmount (price_selector) {
	  var price_el;
	  try {
	    price_el = _matchFirstQuerySelector(price_selector);
	  } catch(err) {}

	  if( !price_el ) return null;

	  // attempting read from input
	  var amount_str = price_el.value;

	  if( typeof amount_str === 'undefined' ) {
	    if( !/\d+[,.]\d+/.test(price_el.textContent) && price_el.children && price_el.children.length ) {
	      amount_str = '';

	      var part = price_el.firstChild, matched;

	      while( part ) {
	        if( /[,.]/.test(amount_str) ) {
	          return;
	        }
	        matched = ( part.toString() === '[object Text]' ? part.data : part.textContent ).replace(/&nbsp;/g, '').match(/[\d,.]+/);

	        if( matched ) {
	          amount_str += (amount_str && !/^[,.]/.test(matched[0]) ? '.' : '') + matched[0];
	        }

	        part = part.nextSibling;
	      }
	    } else if( price_el.textContent ) {
	      amount_str = (price_el.textContent || '').replace(/&nbsp;/g, '');
	    } else if( price_el.getAttribute('content') ) {
	      amount_str = price_el.getAttribute('content');
	    }
	  }

	  return amount_str && {
	    amount: parsePrice( amount_str ),
	    price_el: price_el,
	  } || null;
	}

	function getDataAmount (widget_el) {
	  var data_amount = widget_el.getAttribute('data-amount');

	  return typeof data_amount === 'string' ? Number(data_amount.trim()) : 0;
	}

	function amountGetter (widget_el) {
	  var price_selector = widget_el.getAttribute('data-price'),
	      last_price_el = null,
	      last_price_amount = null;

	  if( !price_selector ) {
	    var price_selector_tmp = bundle$1.find(cms_price_selector, _matchSelector);

	    if( price_selector_tmp ) log('auto-discovered price selector', price_selector_tmp);
	  }

	  if( typeof price_selector === 'string' ) price_selector = price_selector.split(/ *, */);

	  return function () {
	    var amount_result = _getAmount(price_selector || cms_price_selector);

	    if( !amount_result ) return getDataAmount(widget_el);

	    if( amount_result.price_el !== last_price_el || amount_result.amount !== last_price_amount ) {
	      log('price read from', amount_result.price_el, amount_result.amount );
	      last_price_el = amount_result.price_el;
	      last_price_amount = amount_result.amount;
	    }
	    return amount_result.amount;
	  };

	  // return price_selector ? function () {
	  //   var amount_result = _getAmount(price_selector);
	  //   if( !amount_result ) return getDataAmount(widget_el);
	  //   if( amount_result.price_el !== last_price_el || amount_result.amount !== last_price_amount ) {
	  //     log('price read from', amount_result.price_el, amount_result.amount );
	  //     last_price_el = amount_result.price_el;
	  //     last_price_amount = amount_result.amount;
	  //   }
	  //   return amount_result.amount;
	  // } : function () {
	  //   return getDataAmount(widget_el);
	  // };
	}

	function _attr(el, attr_name) {
	  return el.getAttribute(attr_name);
	}

	var custom_options_defaults = {
	  'btn_text_color': '#FFFFFF',
	  'branding': true,
	  'align': 'center',
	  'smart_title': true,
	  'text_color': '#333A3E',
	  'btn_bg_color': '#267BBD',
	  'custom_styles': false,
	  'disable_modal': false,
	  version: 3
	};

	var custom_options_set = {
	  'btn_text_color': 'btn-text-color',
	  'branding': 'branding',
	  'align': 'align',
	  'text_color': 'text-color',
	  'btn_bg_color': 'btn-bg-color',
	  'custom_styles': 'custom-styles',
	  'smart_title': 'title-smart',
	  'title_default': 'title-default',
	  'title_zero_interest': 'title-zero-interest',
	  'disable_modal': 'disable-modal',
	};

	function _getCustomOptions(widget_el) {
	  var custom_type = _attr(widget_el, 'data-type'),
	      custom_options = {},
	      custom_option_value,
	      has_custom_options = false,
	      key;

	  for( key in custom_options_defaults ) custom_options[key] = custom_options_defaults[key];

	  for( key in custom_options_set ) {
	    custom_option_value = _attr(widget_el, 'data-option-' + custom_options_set[key] );
	    if( typeof custom_option_value === 'string' ) {
	      custom_option_value = custom_option_value.trim();
	      if( custom_option_value === 'true' || custom_option_value === 'false' ) custom_options[key] = custom_option_value === 'true';
	      else custom_options[key] = custom_option_value;
	      has_custom_options = true;
	    }
	  }

	  return {
	    type: custom_type && custom_type.trim(),
	    preferences: has_custom_options ? custom_options : null
	  };
	}

	function simulatorLoader (aplazame) {

	  var Widget = _getSimulatorWidget(aplazame);

	  liveDom('[data-aplazame-simulator]', function (widget_el) {

	    log('[data-aplazame-simulator]', widget_el );

	    var simulator_options = {
	          view: widget_el.getAttribute('data-view') || 'product',
	          country: widget_el.getAttribute('data-country') || 'ES',
	          currency:  widget_el.getAttribute('data-currency') || 'EUR',
	        },
	        widget = new Widget(widget_el, {
	          currency:  widget_el.getAttribute('data-currency') || 'EUR',
	          country:  widget_el.getAttribute('data-country') || 'ES',
	        }),
	        custom_widget_options = _getCustomOptions(widget_el),
	        getAmount = amountGetter(widget_el),
	        getQty = qtyGetter(widget_el),
	        current_amount = getAmount(),
	        current_qty = getQty(),
	        qty_interval,
	        updateAmount = function (amount, qty, ignore_changes) {
	          log('updateAmount', amount, qty);
	          if( !amount ) return;

	          widget_el.style.opacity = 0.5;
	          aplazame.simulator( amount*qty, simulator_options, function (_choices, _options) {
	            if( !ignore_changes && qty !== undefined && qty !== current_qty ) return;

	            if( _options.widget.disabled ) {
	              if(qty_interval) clearInterval(qty_interval);
	              // _removeListener(onDomChanges);
	              liveDom.off(onDomChanges);
	              return;
	            }
	            // _options = _copy(_options);
	            if( custom_widget_options.type ) _options.widget.type = custom_widget_options.type;
	            if( custom_widget_options.preferences ) {
	              _options.widget.preferences = custom_widget_options.preferences;
	              _options.widget.styles = '';
	            } else {
	              _options.widget.preferences.api_custom_styles = 'custom_styles' in _options.widget.preferences;
	            }
	            widget.render(_choices, _options);
	            widget_el.style.opacity = null;
	          });
	        },
	        updateAmountAttempt = function (amount) {
	          var qty = getQty();

	          if( !amount || (amount === current_amount && qty === current_qty) ) return;

	          current_amount = amount;
	          current_qty = qty;

	          updateAmount(amount, current_qty);
	        },
	        onDomChanges = function () {
	          if( !document.body.contains(widget_el) ) return liveDom.off(onDomChanges);

	          updateAmountAttempt( getAmount() );
	        };

	    if( 'MutationObserver' in window ) (function (observer) {
	      observer.observe(widget_el, { attributes: true });
	    })(  new MutationObserver(function(mutations) {
	      mutations.forEach(function(mutation) {
	        if( mutation.attributeName === 'data-amount' ) {
	          updateAmountAttempt( getDataAmount(widget_el) );
	        } else if( /^data-type/.test(mutation.attributeName) || /^data-option-/.test(mutation.attributeName) ) {

	          custom_widget_options = _getCustomOptions(widget_el);

	          updateAmount(current_amount, current_qty);
	        }
	      });
	    }) );

	    qty_interval = setInterval(function () {
	      var qty = getQty();

	      if( qty === current_qty ) return;

	      current_qty = qty;
	      updateAmount(current_amount, qty);
	    }, 120);

	    var data_amount = widget_el.hasAttribute('data-amount') && getDataAmount(widget_el) || null;

	    if( data_amount && data_amount !== current_amount ) {
	      updateAmount( data_amount, current_qty, true );
	    } else {
	      updateAmount(current_amount, current_qty);
	    }
	    liveDom(onDomChanges);

	  });

	}

	/* global define */

	runInSandbox(function () {


	  browser.usePromise(parole);

	  function once (fn) {
	    var result;
	    return function () {
	      if( fn ) {
	        result = fn.apply(this, arguments);
	        fn = null;
	      }
	      return result;
	    };
	  }

	  var deserialize = deserialize$1.deserialize;

	  aplazame.checkout = checkout;
	  aplazame.button = button;
	  aplazame.simulator = simulator;
	  aplazame.modal = modal;

	  aplazame.info = function () {
	    return {
	      api: api,
	      log: log.history,
	      version: aplazameVersion,
	    };
	  };

	  aplazame.log = log;
	  aplazame.logs = log.dump;

	  initHttpService();

	  window.aplazame = aplazame;

	  events$1.on('ready', once(function () {
	    buttonLoader(aplazame);
	    simulatorLoader(aplazame);
	  }));

	  function findFirst( list, iteratee ) {
	    for( var i = 0, n = list.length ; i < n ; i++ ) {
	      if( iteratee(list[i]) ) return list[i];
	    }
	    return null;
	  }

	  function safeScript (script) {
	    if( script ) log('safeScript', script );
	    else log.warn('safeScript: currentScript MISSING');

	    var params = deserialize(script.src.split('?')[1] || '');

	    if( script && params.public_key ) {
	      log('safeScript: public_key in params', params );
	      return script;
	    }
	    if( script && script.getAttribute && script.getAttribute('data-aplazame') !== null ) {
	      log('safeScript: script has data-aplazame');
	      return script;
	    }

	    var isAplazameLoader = function (script) {
	      log('finding first isAplazameLoader');
	      if( script && script.src && (
	        script.src.trim().indexOf('https://aplazame.com/static/aplazame.js') === 0 ||
	        script.src.trim().indexOf('https://cdn.aplazame.com/aplazame.js') === 0
	      ) ) {
	        return script;
	      }
	    };

	    log('safeScript: find AplazameLoader');

	    return isAplazameLoader(script) ||
	           findFirst(document.querySelectorAll('script'), isAplazameLoader) ||
	           script || document.querySelector('script[data-aplazame]') ||
	           document.createElement('script');
	  }

	  var options = aplazameLoader(aplazame._, safeScript( aplazame._.currentScript() ) );

	  aplazame.init(options);

	  // support for requirejs like libraries
	  if( typeof define === 'function' && define.amd ) {
	    log.warn('AMD module');
	    define([], function () {
	      return aplazame;
	    });
	  } else log('NOT AMD module');

	  aplazame._.ready(function () {
	    if( api.callback ) {
	      if(  typeof window[api.callback] !== 'function' ) {
	        throw new Error('callback should be a global function');
	      }

	      window[api.callback](aplazame);
	    }
	  });

	});

}());
