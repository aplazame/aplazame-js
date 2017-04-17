'use strict';

var api = require('./api'),
    _ = require('../tools/tools'),
    events = require('./events');

function init (options) {
  options = options || {};

  if( typeof options.version === 'string' ) {
    var matchVersion = options.version.match(/^v?(\d)(\.(\d))?$/);

    if( !matchVersion ) {
      throw new Error('version mismatch, should be like \'v1.2\'');
    }

    options.version = Number(matchVersion[1]);

    if( matchVersion[3] !== undefined ) {
      options.checkoutVersion = Number(matchVersion[3]);
    }
  }

  if( typeof options.sandbox === 'string' ) {
    options.sandbox = options.sandbox === 'true';
  }

  _.extend(api, options);

  _.log('aplazame.init', api);

  if( api.publicKey ) events.emit('ready');
}

module.exports = init;
