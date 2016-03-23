

var cssHack = (function () {
  var cache = {},
      hacks = {
        overlay: '.aplazame-overlay { font-family: \'Montserrat\', sans-serif; position: fixed; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; width: 100vw; height: 100vh; background: rgba(53, 64, 71, 0.9); text-align:center;} .aplazame-overlay::before{content:\'\';display:block;height:50vh;}.aplazame-logo-wrapper{display:inline-block;margin-top:-50%;} .aplazame-checkout-loading-text{color:#95A6B1;margin-top:14px;font-size:14px;}' +
                '@-webkit-keyframes aplazame-overlay{0%{opacity:0}to{opacity:1}}@keyframes aplazame-overlay{0%{opacity:0}to{opacity:1}}.aplazame-overlay{-webkit-animation-fill-mode:both;animation-fill-mode:both}.aplazame-overlay.aplazame-overlay-show{opacity:1}.aplazame-overlay.aplazame-overlay-hide,.aplazame-overlay.aplazame-overlay-show{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:aplazame-overlay;animation-name:aplazame-overlay}.aplazame-overlay.aplazame-overlay-hide{-webkit-animation-direction:reverse;animation-direction:reverse;opacity:0}' +
                  '@keyframes aplazame-logo-large{0%{transform:rotate(0deg)}60%,90%,to{transform:rotate(1turn)}}@keyframes aplazame-logo-short{0%,30%{transform:rotate(0deg)}90%,to{transform:rotate(1turn)}}@keyframes aplazame-logo-smile{0%{transform:rotate(0deg)}90%,to{transform:rotate(2turn)}}.logo-aplazame{position:relative;display:inline-block;width:150px;height:150px}.logo-aplazame .line-large,.logo-aplazame .line-short,.logo-aplazame .smile{stroke:#ddd}.logo-aplazame .smile-outline{stroke:#485259}@media (min-width:480px){.logo-aplazame{width:200px;height:200px}}.logo-aplazame svg{position:absolute;top:0;left:0;width:100%;height:100%}.logo-aplazame.animate .line-large,.logo-aplazame.animate .line-short,.logo-aplazame.animate .smile{transform:translateZ(0);animation-fill-mode:forwards;animation-duration:1.5s;animation-iteration-count:infinite}.logo-aplazame.animate .smile{animation-name:aplazame-logo-smile}.logo-aplazame.animate .line-large{animation-name:aplazame-logo-large}.logo-aplazame.animate .line-short{animation-name:aplazame-logo-short}',
        // blur: 'body > *:not(.aplazame-modal):not(.aplazame-overlay) { -webkit-filter: blur(0px); filter: blur(0px); transition: all 0.4s linear; } body.aplazame-blur > *:not(.aplazame-modal):not(.aplazame-overlay) { -webkit-filter: blur(3px); filter: blur(3px); }',
        blur: '@-webkit-keyframes aplazame-blur{0%{opacity:0;-webkit-filter:blur(0);filter:blur(0)}to{opacity:1;-webkit-filter:blur(3px);filter:blur(3px)}}@keyframes aplazame-blur{0%{opacity:0;-webkit-filter:blur(0);filter:blur(0)}to{opacity:1;-webkit-filter:blur(3px);filter:blur(3px)}}@media (max-width:600px){body{-webkit-transition:all .4s linear;transition:all .4s linear}}body.aplazame-blur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-filter:blur(3px);filter:blur(3px)}@media (min-width:601px){body.aplazame-blur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:aplazame-blur;animation-name:aplazame-blur}}body.aplazame-unblur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-filter:blur(0);filter:blur(0)}@media (min-width:601px){body.aplazame-unblur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:aplazame-blur;animation-name:aplazame-blur;-webkit-animation-direction:reverse;animation-direction:reverse}}',
        // modal: '.aplazame-modal { height: 100%; } html, body { margin: 0; padding: 0; } @media (max-width: 767px) { body > *:not(.aplazame-modal) { display: none; } }'
        modal: '.aplazame-modal { height: 100%; } body { overflow: hidden; } .aplazame-modal.hide {display:none;}' +
               '@media (max-width: 600px) { html { background-color: #333A3E; } html, body { height: 100%; margin: 0; padding: 0; } body > *:not(.aplazame-modal) { display: none; } iframe.aplazame-modal { position: absolute; } }' +
               '@media (min-width: 601px) { .aplazame-modal { position: fixed; } }'
        // overflow: '/* html { height: 100%; } body { overflow: hidden; } */',
        // inputFocus: 'html, body { height: 100vh; overflow: hidden; }'
      };

  return function hack (hackName) {
    if( !cache[hackName] ) {
      var style = document.createElement('style');
      style.setAttribute('rel', 'stylesheet');
      style.setAttribute('type', 'text/css');
      style.textContent = hacks[hackName].replace(/;/g, ' !important;');

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
