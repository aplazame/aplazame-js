'use strict';

var api = require('./api'),
    http = require('http-rest/browser');

// http.config({ headers: { Accept: 'application/json' } });

var apiHttp = http.base(function () { return api.host; }, {
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

module.exports = apiHttp;
