'use strict';

var api = require('./api'),
    http = require('http-rest/browser');

// http.config({ headers: { Accept: 'application/json' } });

var apiHttp = http.base(function () { return api.host; }, {
  headers: {
    Accept: function (config) {
      return 'application/vnd.aplazame' + ( config.sandbox || api.sandbox ? '.sandbox' : '' ) + '.v' + (config.api_version || api.version)  + '+json';
    },
    Authorization: function (config) {
      return 'Bearer ' + (config.public_key || api.public_key);
    }
  }
});

module.exports = apiHttp;
