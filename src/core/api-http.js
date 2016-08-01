'use strict';

var apzVersion = require('../../.tmp/aplazame-version'),
    _ = require('../tools/tools'),
    api = require('./api'),
    http = require('http-browser'),
    renderAccept = _.template.compile('application/vnd.aplazame<% if(sandbox){ %>.sandbox<% } %>.v<%= version %>+json'),
    acceptHeader = function (config) {
      var _api = _.copy(api);
      if( 'version' in config || 'apiVersion' in config ) {
        _api.version = 'version' in config ? config.version : config.apiVersion;
      }
      if( 'sandbox' in config ) {
        _api.sandbox = config.sandbox;
      }
      return renderAccept(_api);
    },
    authorizationHeader = function (config) {
      config.publicKey = config.publicKey || api.publicKey;
      return 'Bearer ' + config.publicKey;
    },
    pathJoin = function (path1, path2) {
      return path1.replace(/\/$/, '') + ( /^\//.test(path2) ? '' : '/' ) + path2;
    };

module.exports = {
  get: function (path, options) {
    var url = pathJoin(api.host, path);
    return http.get(url, _.merge(options, { headers: {
        xAjsVersion: apzVersion,
        accept: acceptHeader,
        authorization: authorizationHeader
      } }) );
  },
  post: function (path, data, options) {
    var url = pathJoin(api.host, path);
    return http.get(url, data, _.merge(options, { headers: {
        xAjsVersion: apzVersion,
        accept: acceptHeader,
        authorization: authorizationHeader
      }}) );
  }
};
