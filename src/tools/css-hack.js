

var cssHack = (function () {
  var cache = {},
      hacks = {
        overlay: require('../../.tmp/css-hacks/overlay'),
        blur: require('../../.tmp/css-hacks/blur'),
        logo: require('../../.tmp/css-hacks/logo'),
        modal: require('../../.tmp/css-hacks/modal')
      };

  return function hack (hackName) {
    if( !cache[hackName] ) {
      var style = document.createElement('style');
      style.setAttribute('rel', 'stylesheet');
      style.setAttribute('type', 'text/css');
      style.textContent = hacks[hackName];

      var enabled = false;

      style.hack = function (enable) {
        enable = enable === undefined || enable;

        if( enable ) {
          if( enabled ) { return; }
          enabled = true;
          document.head.appendChild(style);
        } else {
          if( !enabled ) { return; }
          enabled = false;
          document.head.removeChild(style);
        }
      };

      cache[hackName] = style;
    }
    return cache[hackName];
  };
})();

module.exports = cssHack;
