'use strict';

var api = require('../core/api'),
    _ = require('../tools/tools'),
    cssHack = require('../tools/css-hack'),
    aplazameVersion = require('../../.tmp/aplazame-version'),
    last_scroll_top;

var tmpOverlay = document.createElement('div'),
    cssOverlay = cssHack('overlay'),
    // cssBlur = cssHack('blur'),
    cssModal = cssHack('modal');

function modal (content) {

  if( modal.iframe ) {
    document.body.removeChild(modal.iframe);
  }

  cssOverlay.hack(true);
  // cssBlur.hack(true);
  cssModal.hack(true);

  tmpOverlay.className = 'aplazame-overlay aplazame-overlay-show';
  document.body.appendChild(tmpOverlay);

  // setTimeout(function () {
  //   _.addClass(document.body, 'aplazame-blur');
  // }, 0);
  setTimeout(function () {
    _.removeClass(tmpOverlay, 'aplazame-overlay-show');
  }, _.isMobile() ? 0 : 600 );

  modal.iframe = _.getIFrame({
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'transparent',
      });

  modal.iframe.className = 'aplazame-modal';
  // modal.iframe.style.display = 'none';
  modal.iframe.content = content;

  document.body.appendChild(modal.iframe);
  modal.iframe.src = api.static_url + 'widgets/modal/modal.html?v=' + encodeURI(aplazameVersion);
}

_.onMessage('modal', function (e, message) {

  switch( message.event ) {
    case 'open':
      modal.referrer = e.source;
      modal.message = message;
      modal(message.data);
      break;
    case 'opening':
      modal.iframe.style.display = _.remove_style;
      break;
    case 'opened':
      last_scroll_top = _.scroll.top();
      e.source.postMessage({
        aplazame: 'modal',
        event: 'content',
        content: modal.iframe.content,
      }, '*');
      break;
    case 'resolved':
      modal.referrer.postMessage({
        aplazame: 'modal',
        event: 'resolved',
        name: modal.message.name,
        value: message.value,
      }, '*');
      delete modal.referrer;
      break;
    case 'closing':
      document.body.style.overflow = modal.iframe.overflow;
      _.addClass(tmpOverlay, 'aplazame-overlay-hide');
      // _.removeClass(document.body, 'aplazame-blur');
      // _.addClass(document.body, 'aplazame-unblur');
      // setTimeout(function () {
      //   // cssBlur.hack(false);
      //   _.removeClass(document.body, 'aplazame-unblur');
      // }, _.isMobile() ? 0 : 600 );
      break;
    case 'close':
      setTimeout(function () {
        cssModal.hack(false);
      }, _.isMobile() ? 0 : 100 );
      document.body.removeChild(tmpOverlay);
      _.removeClass(tmpOverlay, 'aplazame-overlay-hide');
      _.scroll.goto(last_scroll_top);
      if( modal.iframe ) {
        document.body.removeChild(modal.iframe);

        if( modal.referrer ) {
          modal.referrer.postMessage({
            aplazame: 'modal',
            event: 'dismiss',
            name: modal.message.name
          }, '*');
          delete modal.referrer;
        }

        if( modal.message ) {
          delete modal.message;
        }
        delete modal.iframe;
      }
      break;
  }

});

module.exports = modal;
