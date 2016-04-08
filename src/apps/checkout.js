'use strict';

var api = require('../core/api'),
    _ = require('../tools/tools'),
    http = require('http-browser'),
    $q = require('q-promise'),
    cssHack = require('../tools/css-hack');

function checkout (options) {

  options = options || {};
  var baseUrl = ( options.host === 'location' ? location.origin : options.host ) || 'https://aplazame.com/static/checkout/';

  if( !/\/$/.test(baseUrl) ) {
    baseUrl += '/';
  }

  var iframeSrc = baseUrl + 'iframe.html?' + new Date().getTime(),
      errorLoading = false,
      tmpOverlay = document.createElement('div'),
      cssOverlay = cssHack('overlay'),
      cssBlur = cssHack('blur'),
      cssLogo = cssHack('logo'),
      cssModal = cssHack('modal');

  tmpOverlay.className = 'aplazame-overlay aplazame-overlay-show';

  cssOverlay.hack(true);
  cssLogo.hack(true);
  cssBlur.hack(true);

  setTimeout(function () {
    if( !errorLoading ) {
      _.addClass(document.body, 'aplazame-blur');
    }
  }, 0);

  tmpOverlay.innerHTML = '<div class="aplazame-logo-wrapper"><div class="logo-aplazame" style="width: 150px; height: 150px;">' +
  require('./loading-svg') + '</div><div class="aplazame-overlay-loading-text">Cargando pasarela de pago...</div></div>';

  document.body.appendChild(tmpOverlay);

  var loadingText = tmpOverlay.querySelector('.aplazame-overlay-loading-text');

  setTimeout(function () {
    if( !errorLoading ) {
      tmpOverlay.querySelector('.logo-aplazame').className += ' animate';
    }
  }, 200);

  options.api = api;

  return http( iframeSrc ).then(function (response) {
      var iframeHtml = response.data.replace(/<head\>/, '<head><base href="' + baseUrl + '" />'),
          iframe = _.getIFrame({
            top: 0,
            left: 0,
            width: '100%',
            height: '0',
            background: 'transparent'
          });

      iframe.className = 'aplazame-modal';
      iframe.style.display = 'none';

      document.body.appendChild(iframe);
      iframe.src = iframeSrc;

      if( true || !options.merchant ) {
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
            iframe.style.display = null;
            e.source.postMessage({
              checkout: options
            }, '*');
            break;
          case 'show-iframe':
            _.removeClass(iframe, 'hide');
            cssModal.hack(true);
            cssOverlay.hack(false);
            document.body.removeChild(tmpOverlay);
            break;
          case 'loading-text':
            loadingText.textContent = message.text;
            break;
          case 'drop-blur':
            _.removeClass(document.body, 'aplazame-blur');
            _.addClass(document.body, 'aplazame-unblur');
            setTimeout(function () {
              document.head.removeChild(cssBlur);
            }, 600);
            break;
          case 'success':
            _.log('aplazame.checkout:success', message);

            http( options.merchant.confirmation_url, {
              method: 'post',
              contentType: 'application/json',
              data: message.data,
              params: message.params
            } ).then(function (response) {
              e.source.postMessage({
                aplazame: 'checkout',
                event: 'confirmation',
                result: 'success',
                response: http.plainResponse(response)
              }, '*');
            }, function () {
              e.source.postMessage({
                aplazame: 'checkout',
                event: 'confirmation',
                result: 'error',
                response: http.plainResponse(response)
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

      });

    }).catch(function (reason) {
      // throw new Error('can not connect to ' + baseUrl);
      errorLoading = true;

      console.error('Aplazame ' + reason);

      _.removeClass(tmpOverlay.querySelector('.logo-aplazame'), 'animate');
      loadingText.innerHTML = '<div class="text-error">Error cargando pasarela</div><br/><div>soporte: <a href="mailto:hola@aplazame.com?subject=' + encodeURI('Checkout error: ' + reason) + '">hola@aplazame.com</a></div>';
      loadingText.style.lineHeight = '1.5';

      (options.onError || _.noop)(reason);
    });

}

module.exports = checkout;
