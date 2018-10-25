
import overlay_css from '../../.tmp/css-hacks/overlay';
import blur_css from '../../.tmp/css-hacks/blur';
import logo_css from '../../.tmp/css-hacks/logo';
import modal_css from '../../.tmp/css-hacks/modal';

var importantCSS = function (css) {
      return css.replace(/;/g, ' !important;').replace(/:([^:;]+?)}/g, function (_matched, value) {
        return ':' + value + ' !important;}';
      }).replace(/(\d+%|from|to){([^}]+)/g, function (_matched, pos, content) {
        return pos + '{' + content.replace(/ !important;/g, ';');
      });
    },
    cssHack = (function () {
      var cache = {},
          hacks = {
            overlay: importantCSS(overlay_css),
            blur: importantCSS(blur_css),
            logo: importantCSS(logo_css),
            modal: importantCSS(modal_css),
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

export default cssHack;
