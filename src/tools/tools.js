
import _ from 'vanilla-tools';

import nitro_tools_lists from 'nitro-tools/lists';
import nitro_tools_path from 'nitro-tools/path';

import log from './log';

import colors from './colors';
import browser_tools from './browser-tools';
import {getAmount, getPrice, parsePrice} from './amount-price';
import deserialize from './deserialize';
import template from './template';
import message_listener from './message-listener';

_.extend(_,
  nitro_tools_lists,
  nitro_tools_path,
  colors,
  browser_tools,
  deserialize,
  {
    getAmount: getAmount,
    getPrice: getPrice,
    parsePrice: parsePrice
  },
  {
    remove_style: / Trident\//.test(navigator.userAgent) ? '' : null,
    template: template,
    onMessage: message_listener,
  }
);

_.log = log;
_.noop = function (value) { return value; };

var _now = Date.now || function () { return new Date().getTime(); };

_.debounce = function (fn, debounce_duration) {
  var debouncing = null,
      last_hit = _now(),
      runHit = function (_this, _args) {
        fn.apply(_this, _args);
        last_hit = _now();
        debouncing = setTimeout(function () {
          debouncing = null;
        }, debounce_duration);
      };
  debounce_duration = debounce_duration || 80;

  return function () {
    var _this = this, _args = arguments;

    if( !debouncing || _now() - last_hit > debounce_duration ) {
      runHit(_this, _args);
    } else {
      clearTimeout(debouncing);
      debouncing = setTimeout(function () {
        runHit(_this, _args);
      }, debounce_duration);
    }
  };
};

export default _;
