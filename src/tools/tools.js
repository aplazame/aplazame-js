
import _ from 'vanilla-tools';

import nitro_tools_lists from 'nitro-tools/lists';
import nitro_tools_path from 'nitro-tools/path';
import colors from './colors';

_.extend(_,
  nitro_tools_lists,
  nitro_tools_path,
  colors,
  require('./browser-tools'),
  require('./amount-price'),
  require('./deserialize'),
  {
    remove_style: / Trident\//.test(navigator.userAgent) ? '' : null,
    template: require('./template'),
    onMessage: require('./message-listener'),
  }
);

_.log = require('./log');
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

module.exports = _;
