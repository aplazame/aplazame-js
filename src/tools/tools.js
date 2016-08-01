// 'use strict';

require('./browser-polyfills');

// require('q-promise').usePolyfill();

var _ = require('nitro-tools/lib/kit-extend');

_.extend(_,
  require('nitro-tools/lib/kit-key'),
  require('nitro-tools/lib/kit-type'),
  require('nitro-tools/lib/kit-lists'),
  require('nitro-tools/lib/kit-path'),
  require('./colors'),
  require('./browser-tools'),
  require('./amount-price'),
  {
    liveDOM: require('./live-dom'),
    template: require('./template'),
    onMessage: require('./message-listener'),
    deserialize: require('./deserialize')
  }
);

_.log = require('./log');
_.noop = function (value) { return value; };

module.exports = _;
