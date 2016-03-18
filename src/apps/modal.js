'use strict';

var api = require('../core/api'),
    _ = require('../tools/tools'),
    aplazameVersion = require('../../.tmp/aplazame-version'),
    lastScrollTop;

function modal (content, options) {

  if( modal.iframe ) {
    document.body.removeChild(modal.iframe);
  }

  options = options || {};

  modal.iframe = _.getIFrame({
        top: 0,
        left: 0,
        width: '100%',
        height: '0',
        background: 'transparent',
        'z-index': 2147483647
      });

  modal.iframe.className = 'aplazame-modal';
  modal.iframe.content = content;

  document.body.appendChild(modal.iframe);
  modal.iframe.src = api.baseUrl + 'widgets/modal/modal.html?v=' + encodeURI(aplazameVersion);
}

_.onMessage('modal', function (e, message) {

  switch( message.event ) {
    case 'open':
      modal.referrer = e.source;
      modal.message = message;
      modal(message.data);
      break;
    case 'opened':
      lastScrollTop = _.scrollTop();
      _.cssHack('modal').hack(true);
      e.source.postMessage({
        aplazame: 'modal',
        event: 'content',
        content: modal.iframe.content
      }, '*');
      break;
    case 'resolved':
      modal.referrer.postMessage({
        aplazame: 'modal',
        event: 'resolved',
        name: modal.message.name,
        value: message.value
      }, '*');
      delete modal.referrer;
      break;
    case 'closing':
      document.body.style.overflow = modal.iframe.overflow;
      break;
    case 'close':
      _.cssHack('modal').hack(false);
      setTimeout(function () {
        _.scrollTop(lastScrollTop);
      }, 0);
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
