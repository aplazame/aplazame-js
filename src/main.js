
(function (root) {
  'use strict';

  var iframeHtml = '::iframeHtml::',
      iframeStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      },
      api = {
        host: 'https://api.aplazame.com/',
        accept: 'application/vnd.aplazame{sandbox}-v{version}+json'
      };

  function Env () {}
    Env.prototype = {
      version: 1,
      sandbox: false
    };
  var env = new Env();

  // utility functions

  function replaceKeys (tmpl, keys) {
    return keys ? tmpl.replace(/\{([^\}]+)\}/g, function (match, key) {
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
    var matches = contentType.match(RE_contentType);
    return ( matches[3] === 'json' ) ? JSON.parse(data) : ( matches[3] === 'xml' ? xml : text );
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
        try { request = new ActiveXObject("Msxml2.XMLHTTP"); }
        catch (er) { request = new ActiveXObject("Microsoft.XMLHTTP"); }
    }
    if( request === null ) { throw "Browser does not support HTTP Request"; }

    request.open( ( options.method || 'get').toUpperCase(), url );

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
        headersCache = request.getAllResponseHeaders().replace(/\s*([^\:]+)\s*\:\s*([^\;\n]+)/g, function (match, key, value) {
            request.headers[headerToCamelCase(key)] = value.trim();
        });
      }
      return headersCache;
    };

    request.onreadystatechange = function(){
      if( request.readyState === 'complete' || request.readyState === 4 ) {
        var response = {
          data: parseContentType(contentType, text, xml),
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
          on.reject.push(onreject);
        }
      },
      error: function (onReject) {
        on.reject.push(onReject);
      }
    };
  }

  function apiOptions (options) {
    options = options || {};
    options.version = options.version || env.version;
    options.sandbox = ( options.sandbox === undefined ? env.sandbox : options.sandbox ) ? '.sandbox' : '';
    options.paramsStr = '';
    if( options.params ) {
      for( var key in options.params ) {
        options.paramsStr += ( options.paramsStr ? '&' : '?' ) + key + '=' + encodeURIComponent(options.params[key]);
      }
    }
    return options;
  }

  // aplazame methods

  function init (options) {
    if( !options ) {
      throw new Error('aplazame.init({options}) requires options');
    }
    if( !options.publicKey ) {
      throw new Error('aplazame.init({options}) requires at least the publicKey');
    }
    extend(env, options);
  }

  function getEnv () {
    return env;
  }

  function apiGet (options) {
    options = apiOptions(options);
    return http(api.host + options.paramsStr, {
      headers: {
        accept: replaceKeys(api.accept, options)
      }
    });
  }

  function apiPost (options) {
    options = apiOptions(options);
    return http(api.host + options.paramsStr, {
      method: 'post',
      headers: {
        accept: replaceKeys(api.accept, options)
      }
    });
  }

  function button (options) {
    // options:
    // ------------------
    // id: "CONTAINER_ID",
    // token: "<ACCESS_TOKEN>",
    // amount: 12050,
    // currency: "EUR",
    // sandbox: true
  }

  function checkout () {
    var iframe = document.createElement('iframe');
    iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(iframeHtml);
    extend(iframe.style, iframeStyle);
    iframe.frameBorder = '0';
    document.body.appendChild(iframe);
  }

  // globalizing aplazame object

  if( document.querySelector('script[data-aplazame]') ) {
    var script = document.querySelector('script[data-aplazame]'),
        initText = script.getAttribute('data-aplazame'),
        envOptions = {};
    if( /\s/.test(initText) ) {
      initText.split(',').forEach(function (part) {
        var keys = part.match(/^([^\:]+)\:(.*)/);
        envOptions[keys[1].trim()] = keys[2].trim();
      });
    } else {
      if( script.getAttribute('data-version') ) {
        envOptions.version = Number(script.getAttribute('data-version'));
      }
      if( script.getAttribute('data-sandbox') ) {
        envOptions.sandbox = script.getAttribute('data-sandbox') === 'true';
      }
    }
    init(envOptions);
  }

  root.aplazame = {
    init: init,
    getEnv: getEnv,
    checkout: checkout,
    button: button,
    apiGet: apiGet,
    apiPost: apiPost
  };

})(this);
