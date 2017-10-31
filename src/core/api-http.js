'use strict';

var api = require('./api'),
    http = require('http-rest/browser');

// http.config({ headers: { Accept: 'application/json' } });

var apiHttp = http.base(function () { return api.host; }, {
  headers: {
    Accept: function (config) {
      config.sandbox = api.sandbox;
      return 'application/vnd.aplazame' + ( api.sandbox ? '.sandbox' : '' ) + '.v' + api.version  + '+json';
    },
    Authorization: function (config) {
      config.publicKey = config.publicKey || api.publicKey;
      return 'Bearer ' + config.publicKey;
    }
  }
});

module.exports = apiHttp;
