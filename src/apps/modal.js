'use strict';

var api = require('../core/api'),
    _ = require('../tools/tools'),
    lastScrollTop;

function modal (content, options) {

  // if( !modal.cached ) {
  //   return _.http.noCache( api.baseUrl + 'widgets/modal/modal.html' ).then(function (response) {
  //     modal.cached = _.template.compile( response.data.replace(/\n/g, '').replace(/<head\>/, '<head><base href="' + api.baseUrl + '" />') );
  //     modal(data, options);
  //   });
  // }

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

  // lastScrollTop = _.scrollTop();
  // console.log('scrollTop', lastScrollTop );
  // _.cssHack('modal').hack(true);

  // var cssBlur = _.cssHack('blur'),
  //     cssModal = _.cssHack('modal');

  // modal.iframe.overflow = document.body.style.overflow;

  document.body.appendChild(modal.iframe);
  modal.iframe.src = api.baseUrl + 'widgets/modal/modal.html';
  // _.writeIframe(modal.iframe, modal.cached(content || {}) );

  // document.body.style.overflow = 'hidden';
}

_.onMessage('modal', function (e, message) {

  console.log('message', 'modal', message);

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
