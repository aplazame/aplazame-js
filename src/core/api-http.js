'use strict';

var acceptTmpl = 'application/vnd.aplazame{{sandbox}}.v{{version}}+json',
    _ = require('../tools/tools'),
    api = require('./api');

// aplazame methods

function apiOptions (options) {
  options = options || {};
  var publicKey = options.publicKey || api.publicKey;

  if( !publicKey ) {
    throw new Error('public key needs to be specified');
  }

  options = _.merge({}, {
    headers: {
      authorization: 'Bearer ' + publicKey
    }
  }, options);

  options.version = options.version || api.version;
  options.sandbox = ( options.sandbox === undefined ? api.sandbox : options.sandbox ) ? '.sandbox' : '';
  // options.paramsStr = '';
  // if( options.params ) {
  //   for( var key in options.params ) {
  //     options.paramsStr += ( options.paramsStr ? '&' : '?' ) + key + '=' + encodeURIComponent(options.params[key]);
  //   }
  // }

  return _.merge(options, {
    headers: {
      accept: _.replaceKeys(acceptTmpl, options)
    }
  });
}

module.exports = {
  get: function (path, options) {
    options = apiOptions(options);
    var url = path ? _.joinPath(api.host, path) : api.host;

    return _.http( url, options );
  },
  post: function (path, data, options) {
    options = apiOptions(options);
    var url = path ? _.joinPath(api.host, path) : api.host;

    return _.http( url, _.merge(options, { method: 'post', data: data }) );
  }
};
