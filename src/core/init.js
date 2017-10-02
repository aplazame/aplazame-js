'use strict';

var api = require('./api'),
    _ = require('../tools/tools'),
    events = require('./events');

function init (options) {
  options = options || {};

  if( typeof options.sandbox === 'string' ) {
    options.sandbox = options.sandbox === 'true';
  }

  _.extend(api, options);

  _.log('aplazame.init', options, api);

  if( api.publicKey ) events.emit('ready');
}

module.exports = init;
