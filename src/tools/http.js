// factory http

var $q = require('./q');

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

function _getHeaders (request) {
  var headers = {};
  request.getAllResponseHeaders().replace(/\s*([^\:]+)\s*\:\s*([^\;\n]+)/g, function (match, key, value) {
      headers[headerToCamelCase(key)] = value.trim();
  });

  return headers;
}

function http (url, config) {

  return $q(function (resolve, reject) {

    config = config || {};
    config.headers = config.headers || {};
    config.url = url;

    var request = null;

    try { // Firefox, Opera 8.0+, Safari
        request = new XMLHttpRequest();
    } catch (e) { // Internet Explorer
        try { request = new ActiveXObject('Msxml2.XMLHTTP'); }  // jshint ignore:line
        catch (er) { request = new ActiveXObject('Microsoft.XMLHTTP'); }  // jshint ignore:line
    }
    if( request === null ) { throw 'Browser does not support HTTP Request'; }

    if( config.params ) {
      var i = 0;
      for( var param in config.params ) {
        url += ( i++ ? '&' : ( /\?/.test(url) ? '&' : '?' ) ) + param + '=' + encodeURIComponent(config.params[param]);
      }
    }

    request.open( ( config.method || 'get').toUpperCase(), url );

    if( config.withCredentials ) {
      request.withCredentials = true;
    }

    for( var key in config.headers ) {
        request.setRequestHeader( headerToTitleSlug(key), config.headers[key] );
    }

    request.onreadystatechange = function(){
      if( request.readyState === 'complete' || request.readyState === 4 ) {
        var response = {
          config: request.config,
          data: parseContentType(request.getResponseHeader('content-type'), request.responseText, request.responseXML),
          status: request.status,
          headers: (function () {
            var headersCache;
            return function () {
              if( !headersCache ) {
                headersCache = _getHeaders(request);
              }
              return headersCache;
            };
          })(),
          xhr: request
        };
        if( request.status >= 200 && request.status < 300 ) {
          resolve( response );
        } else {
          reject( response );
        }
      }
    };

    request.config = config;

    if( config.contentType ) {
      request.setRequestHeader( 'Content-Type', config.contentType );

      if( config.contentType === 'application/json' && typeof config.data !== 'string' ) {
        config.data = JSON.stringify(config.data);
      }

    } else {
      if( typeof config.data === 'string' ) {
        config.contentType = 'text/html';
      } else {
        config.contentType = 'application/json';
        config.data = JSON.stringify(config.data);
      }
    }

    request.send( config.data );

  });
}

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

module.exports = http;
