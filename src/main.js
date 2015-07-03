
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
        host: 'https://api.aplazame.com',
        accept: 'application/vnd.aplazame{sandbox}-v{version}+json'
      };

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

  function html (url, options) {
    options = options || {};
    options.headers = options.headers || {};

    var request = null,
        on = { fulfill: [], reject: [] };

    try { // Firefox, Opera 8.0+, Safari
        request = new XMLHttpRequest();
    } catch (e) { // Internet Explorer
        try { request = new ActiveXObject("Msxml2.XMLHTTP"); }
        catch (e) { request = new ActiveXObject("Microsoft.XMLHTTP"); }
    }
    if( request === null ) { throw "Browser does not support HTTP Request"; }

    request.open( options.method.toUpperCase(), url );

    for( key in options.headers ) {
        request.setRequestHeader( toTitleSlug(key), options.headers[key] );
    }

    request.resolve = function ( response ) {
      on.fulfill.forEach(function (handler) {
        handler(response.data, response.status, response.headers, response.xhr);
      });
    };
    request.reject = function ( response ) {
      on.reject.forEach(function (handler) {
        handler(response.data, response.status, response.headers, response.xhr);
      });
    };

    var headersCache,
        getHeaders = function () {
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
          headers: getHeaders,
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

    return {
      success: function (onFulfill, onReject) {
        on.fulfill.push(onFulfill);
        onReject instanceof Function && on.reject.push(onreject);
      },
      error: function (onReject) {
        on.reject.push(onReject);
      }
    };
  };

  // aplazame methods

  function button () {}

  function checkout () {
    var iframe = document.createElement('iframe');
    iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(iframeHtml);
    extend(iframe.style, iframeStyle);
    iframe.frameBorder = '0';
    document.body.appendChild(iframe);
  }

  // globalizing aplazame object

  root.aplazame = {
    checkout: checkout,
    button: button
  };

})(this);
