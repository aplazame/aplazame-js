// 'use strict';

require('./browser-polyfills');

// require('q-promise').usePolyfill();

var _ = require('nitro-tools/extend');

_.extend(_,
  require('nitro-tools/key'),
  require('nitro-tools/type'),
  // require('nitro-tools/lists'),
  {
    each: function (list, iteratee, thisArg) {
      for( var i = 0, n = list.length ; i < n ; i++ ) {
        iteratee.call(list[i], list[i], i);
      }
    },
    find: function (list, iteratee, thisArg) {
      for( var i = 0, n = list.length ; i < n ; i++ ) {
        if( iteratee.call(list[i], list[i], i) ) {
          return list[i];
        }
      }
      return null;
    }
  },
  require('nitro-tools/path'),
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
