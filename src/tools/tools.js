// 'use strict';

require('./browser-polyfills');

// require('q-promise').usePolyfill();

var _ = require('nitro-tools/lib/kit-extend');

_.extend(_,
  require('nitro-tools/lib/kit-key'),
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

function parsePrice (price) {
  price = price.replace(' ', '');
  price = price.match(/[\d,.]+/);
  price = price && price[0] || '';
  price = price.replace(/([,.])0$/, '$100');
  var priceParts = ( '' + price ).replace(/[^0-9.,]/g, '').split(/[,.]/),
      amount = Number(priceParts.shift()),
      piece = priceParts.shift(), i, n;

  if( !piece ) {
    return amount*100;
  }

  while( piece ) {
    for( i = 0, n = piece.length ; i < n ; i++ ) {
      amount*=10;
    }
    amount += Number(piece);
    piece = priceParts.shift();
  }
  return amount;
}

_.extend(_,
  require('./colors'),
  require('./browser-tools'),
  {
    liveDOM: require('./live-dom'),
    template: require('./template'),
    getAmount: getAmount,
    parsePrice: parsePrice,
    onMessage: require('./message-listener'),
    deserialize: require('./deserialize')
  }
);

module.exports = _;
