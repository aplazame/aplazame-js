'use strict';

var api = require('../core/api'),
    _ = require('../tools/tools');

function modal (data, options) {

  if( !modal.cached ) {
    return _.http.noCache( api.baseUrl + 'widgets/modal/modal.html' ).then(function (response) {
      modal.cached = _.template.compile( response.data.replace(/\n/g, '').replace(/<head\>/, '<head><base href="' + api.baseUrl + '" />') );
      modal(data, options);
    });
  }

  options = options || {};

  modal.iframe = _.getIFrame({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'transparent',
        'z-index': 2147483647
      });

  modal.iframe.overflow = document.body.style.overflow;

  document.body.appendChild(modal.iframe);
  _.writeIframe(modal.iframe, modal.cached(data || {}) );

  document.body.style.overflow = 'hidden';
}

_.onMessage('modal', function (e, message) {

  switch( message.event ) {
    case 'open':
      modal.referrer = e.source;
      modal.message = message;
      modal(message.data);
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
