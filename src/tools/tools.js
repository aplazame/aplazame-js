
var _ = require('vanilla-tools');

_.extend(_,
  require('nitro-tools/lists'),
  require('nitro-tools/path'),
  require('./colors'),
  require('./browser-tools'),
  require('./amount-price'),
  {
    template: require('./template'),
    onMessage: require('./message-listener'),
    deserialize: require('./deserialize')
  }
);

_.log = require('./log');
_.noop = function (value) { return value; };

_.debounce = function (fn, debounce_duration) {
  var debouncing = null;
  debounce_duration = debounce_duration || 80;
  return function () {
    var _this = this, _args = arguments;
    if( debouncing === null ) {
      fn.apply(_this, _args);
      debouncing = false;
    } else {
      if( debouncing ) clearTimeout(debouncing);
      debouncing = setTimeout(function () {
        debouncing = setTimeout(function () {
          debouncing = null;
        }, debounce_duration);
        fn.apply(_this, _args);
      }, debounce_duration);
    }
  };
};

module.exports = _;
