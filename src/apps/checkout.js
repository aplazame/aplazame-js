'use strict';

var api = require('../core/api'),
    _ = require('../tools/tools');

function checkout (options) {

  options = options || {};
  var baseUrl = ( options.host === 'location' ? location.origin : options.host ) || 'https://aplazame.com/static/checkout/';

  if( !/\/$/.test(baseUrl) ) {
    baseUrl += '/';
  }

  var iframeSrc = baseUrl + 'iframe.html?' + new Date().getTime(),
      tmpOverlay = document.createElement('div'),
      cssOverlay = _.cssHack('overlay'),
      cssBlur = _.cssHack('blur'),
      cssModal = _.cssHack('modal');

  tmpOverlay.className = 'aplazame-overlay';

  cssOverlay.hack(true);

  cssBlur.hack(true);

  setTimeout(function () {
    _.addClass(document.body, 'aplazame-blur');
  }, 0);

  tmpOverlay.innerHTML = '<div class="aplazame-logo-wrapper"><div class="logo-aplazame" style="width: 150px; height: 150px;">' +
  '<svg class="line-short" version="1.1" viewBox="0 0 100 100">' +
  '<path  d="M36.788,81.008,50,50" stroke-linecap="round" stroke-width="6" fill="none"/>' +
  '</svg>' +
  '<svg class="smile" version="1.1" viewBox="0 0 100 100">' +
  '<g stroke-linecap="round" fill="none" transform="matrix(0.78036633,0,0,0.78036633,10.526512,18.003998)">' +
  '<path class="smile-outline" stroke-width="12" d="M75.242,57.51c-5.435,7.839-14.498,12.972-24.761,12.972-10.262,0-19.325-5.132-24.758-12.972"/>' +
  '<path class="smile-line" stroke-width="7.5" d="M75.242,57.51c-5.435,7.839-14.498,12.972-24.761,12.972-10.262,0-19.325-5.132-24.758-12.972"/>' +
  '</g>' +
  '</svg>' +
  '<svg class="line-large" version="1.1" viewBox="0 0 100 100">' +
  '<path stroke-linejoin="round" d="M50,50,66.687,92.266" stroke-linecap="round" stroke-miterlimit="4" stroke-dasharray="none" stroke-width="6" fill="none"/>' +
  '</svg>' +
  '</div>' +
  '<div class="aplazame-checkout-loading-text">cargando pasarela de pago...</div></div>';

  document.body.appendChild(tmpOverlay);

  var loadingText = tmpOverlay.querySelector('.aplazame-checkout-loading-text');

  setTimeout(function () {
    tmpOverlay.querySelector('.logo-aplazame').className += ' animate';
  }, 0);

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
        });

    iframe.className = 'aplazame-modal hide';

    // cssBlur.hack(true);

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
          e.source.postMessage({
            checkout: options
          }, '*');
          break;
        case 'show-iframe':
          // _.removeClass(iframe, 'hide');
          // cssModal.hack(true);
          // cssOverlay.hack(false);
          // document.body.removeChild(tmpOverlay);
          break;
        case 'loading-text':
          loadingText.textContent = message.text;
          break;
        case 'drop-blur':
          _.removeClass(document.body, 'aplazame-blur');
          _.addClass(document.body, 'aplazame-unblur');
          setTimeout(function () {
            document.head.removeChild(cssBlur);
          }, 400);
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
          if( iframe ) {
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

      // if( message.require === 'merchant' ) {
      //   cssModal.hack(true);
      //   _.addClass(document.body, 'aplazame-blur');
      //   cssOverlay.hack(false);
      //   document.body.removeChild(tmpOverlay);
      //   e.source.postMessage({
      //     checkout: options
      //   }, '*');
      // } else if( iframe && message.close ) {
      //   document.body.removeChild(iframe);
      //   cssModal.hack(false);
      //   iframe = null;
      //
      //   switch( message.close ) {
      //     case 'dismiss':
      //       location.replace(options.merchant.checkout_url || '/');
      //       break;
      //     case 'success':
      //       location.replace(options.merchant.success_url);
      //       break;
      //     case 'cancel':
      //       location.replace(options.merchant.cancel_url);
      //       break;
      //   }
      // }

    });

  }, function () {
    throw new Error('can not connect to ' + baseUrl);
  });

}

module.exports = checkout;
