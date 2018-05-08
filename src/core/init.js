'use strict';

var api = require('./api'),
    _ = require('../tools/tools'),
    events = require('./events');

module.exports = function init (options) {
  options = options || {};

  if( typeof options.sandbox === 'string' ) {
    options.sandbox = options.sandbox === 'true';
  }

  for( var key in options ) {
    api[_.toUnderscoreCase(key)] = options[key];
  }

  _.log('aplazame.init', options, api);

  if( api.public_key ) events.emit('ready');
};
