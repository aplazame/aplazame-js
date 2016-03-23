// 'use strict';

require('./browser-polyfills');

var _ = require('nitro-tools/lib/kit-extend');

_.extend(_,
  require('nitro-tools/lib/kit-type'),
  require('nitro-tools/lib/kit-lists'),
  require('nitro-tools/lib/kit-path')
);

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
    elementData: document.createElement('div').dataset ? function (el, key, value) {
      if( value !== undefined ) {
        el.dataset[key] = value;
      }
      return el.dataset[key];
    } : function (el, key, value) {
      if( value !== undefined ) {
        el.setAttribute('data-' + key, value);
      }
      return el.getAttribute('data-' + key);
    },
    onMessage: require('./message-listener')(_)
  }
);

module.exports = _;
