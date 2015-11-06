'use strict';

var api = require('../core/api'),
    _ = require('../tools/tools');

function checkout (options) {

  options = options || {};
  var baseUrl = ( options.host === 'location' ? location.origin : options.host ) || 'https://aplazame.com/static/checkout/';

  if( !/\/$/.test(baseUrl) ) {
    baseUrl += '/';
  }

  var iframeSrc = baseUrl + 'iframe.html?' + new Date().getTime();

  options.api = api;

  _.http( iframeSrc ).then(function (response) {
    // document.body.style.overflow = 'hidden';
    // var iframeHtml = response.data.replace(/(src|href)\s*=\s*\"(?!http|\/\/)/g, '$1=\"' + baseUrl);
    var iframeHtml = response.data.replace(/<head\>/, '<head><base href="' + baseUrl + '" />'),
        iframe = _.getIFrame({
          // position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '0',
          background: 'transparent',
          'z-index': 2147483647
        }),
        cssBlur = _.cssHack('blur'),
        cssModal = _.cssHack('modal');

    iframe.className = 'aplazame-modal';

    // blur.setAttribute('rel', 'stylesheet');
    // blur.textContent = 'body > *:not(.aplazame-checkout-iframe) { -webkit-filter: blur(3px); filter: blur(3px); }';

    // iframe.setAttribute('allowtransparency', 'true');
    // iframe.setAttribute('allowfullscreen', 'true');
    // iframe.setAttribute('sandbox', 'allow-scripts allow-pointer-lock allow-same-origin allow-popups allow-forms');

    document.body.appendChild(iframe);
    iframe.src = iframeSrc;
    // iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(iframeHtml);
    // _.writeIframe(iframe, iframeHtml);

    if( !options.merchant ) {
      throw new Error('missing merchant parameters');
    }

    if( !options.merchant.public_api_key ) {
      if( api.publicKey ) {
        options.merchant.public_api_key = api.publicKey;
      } else {
        throw new Error('missing public key');
      }
    }

    options.origin = {
      href: location.href,
      host: location.host,
      protocol: location.protocol,
      origin: location.origin
    };

    _.onMessage('checkout', function (e, message) {

      switch( message.event ) {
        case 'merchant':
          cssModal.hack(true);
          cssBlur.hack(true);
          e.source.postMessage({
            checkout: options
          }, '*');
          break;
        case 'drop-blur':
          document.head.removeChild(cssBlur);
          break;
        case 'success':
          console.log('aplazame.checkout:success', message);

          _.http( options.merchant.confirmation_url, {
            method: 'post',
            contentType: 'application/json',
            data: message.data,
            params: message.params
          } ).then(function (response) {
            e.source.postMessage({
              aplazame: 'checkout',
              event: 'confirmation',
              result: 'success',
              response: _.http.plainResponse(response)
            }, '*');
          }, function () {
            e.source.postMessage({
              aplazame: 'checkout',
              event: 'confirmation',
              result: 'error',
              response: _.http.plainResponse(response)
            }, '*');
          });
          // confirmation_url
          break;
        case 'close':
          if( iframe && message.close ) {
            document.body.removeChild(iframe);
            cssModal.hack(false);
            iframe = null;

            switch( message.result ) {
              case 'dismiss':
                location.replace(options.merchant.checkout_url || '/');
                break;
              case 'success':
                location.replace(options.merchant.success_url);
                break;
              case 'cancel':
                location.replace(options.merchant.cancel_url);
                break;
            }
          }
          break;
      }

      if( message.require === 'merchant' ) {
        cssModal.hack(true);
        cssBlur.hack(true);
        e.source.postMessage({
          checkout: options
        }, '*');
      } else if( iframe && message.close ) {
        document.body.removeChild(iframe);
        cssModal.hack(false);
        iframe = null;

        switch( message.close ) {
          case 'dismiss':
            location.replace(options.merchant.checkout_url || '/');
            break;
          case 'success':
            location.replace(options.merchant.success_url);
            break;
          case 'cancel':
            location.replace(options.merchant.cancel_url);
            break;
        }
      }

    });

  }, function () {
    throw new Error('can not connect to ' + baseUrl);
  });

}

module.exports = checkout;
