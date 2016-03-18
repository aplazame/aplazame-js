// 'use strict';

var _ = require('./basic-tools');

_.extend(_, {
  liveDOM: require('./live-dom')(_),
  http: require('./http'),
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
}, require('./colors') );

module.exports = _;
