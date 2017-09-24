'use strict';

var apzVersion = require('../../.tmp/aplazame-version'),
    _ = require('../tools/tools'),
    api = require('./api'),
    http = require('http-browser'),
    renderAccept = _.template.compile('application/vnd.aplazame<% if(sandbox){ %>.sandbox<% } %>.v<%= version %>+json'),
    acceptHeader = function (config) {
      var _api = _.copy(api);
      if( 'sandbox' in config ) {
        _api.sandbox = config.sandbox;
      }
      return renderAccept(_api);
    },
    authorizationHeader = function (config) {
      config.publicKey = config.publicKey || api.publicKey;
      return 'Bearer ' + config.publicKey;
    };

http.config({ headers: { Accept: 'application/json' } });

var apiHttp = {};

_.each(['get', 'delete'], function (method) {
  apiHttp[method] = function (path, options) {
    var url = _.joinPath(api.host, path);
    return http[method](url, _.merge(options, { headers: {
        xAjsVersion: apzVersion,
        accept: acceptHeader,
        authorization: authorizationHeader
      } }) );
  };
});

_.each(['post', 'put', 'patch'], function (method) {
  apiHttp[method] = function (path, data, options) {
    var url = _.joinPath(api.host, path);
    return http[method](url, data, _.merge(options, { headers: {
        xAjsVersion: apzVersion,
        accept: acceptHeader,
        authorization: authorizationHeader
      } }) );
  };
});

module.exports = apiHttp;
