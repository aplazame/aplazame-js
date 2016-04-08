// 'use strict';

require('./browser-polyfills');

var _ = require('nitro-tools/lib/kit-extend');

_.extend(_,
  require('nitro-tools/lib/kit-type'),
  require('nitro-tools/lib/kit-lists'),
  require('nitro-tools/lib/kit-path')
);

_.log = require('./log');
_.noop = function (value) { return value; };

function getAmount (amount) {
  var prefix = '';

  if( amount < 0 ) {
    prefix = '-';
    amount = 0 - amount;
  }

  if( !amount ) {
    return '0,00';
  } else if( amount < 10 ) {
    return '0,0' + amount;
  } else if( amount < 100 ) {
    return '0,' + amount;
  }
  return prefix + ('' + amount).replace(/..$/, ',$&');
}

_.extend(_,
  require('./colors'),
  require('./browser-tools')(_),
  {
    liveDOM: require('./live-dom')(_),
    template: require('./template'),
    getAmount: getAmount,
    onMessage: require('./message-listener')(_)
  }
);

module.exports = _;
