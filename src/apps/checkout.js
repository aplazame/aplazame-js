'use strict';

var api = require('../core/api'),
    _ = require('../tools/tools'),
    checkoutNormalizer = require('./checkout-normalizer'),
    http = require('http-browser'),
    cssHack = require('../tools/css-hack'),
    isApp = typeof navigator !== 'undefined' && navigator.app,
    log = require('../tools/log');

function getBaseCheckout(options) {
  var baseCheckout = ( options.host === 'location' ? ( location.protocol + '//' + location.host + '/' ) : options.host ) || ( api.checkoutUrl || api.staticUrl ) + 'checkout/';

  // Append trailing slash if not exists.
  if (!/\/$/.test(baseCheckout)) {
    baseCheckout += '/';
  }

  return baseCheckout;
}

function checkout (options) {

  options = options || {};
  var baseCheckout = getBaseCheckout(options);

  var on = {},
      onError,
      merchant,
      iframeSrc = baseCheckout + 'iframe.html?' + new Date().getTime(),
      errorLoading = false,
      errorMessage = false,
      tmpOverlay = document.createElement('div'),
      cssOverlay = cssHack('overlay'),
      cssBlur = cssHack('blur'),
      cssLogo = cssHack('logo'),
      cssModal = cssHack('modal'),
      viewPortHack = document.createElement('meta');

  viewPortHack.name = 'viewport';
  viewPortHack.content = 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';

  document.head.appendChild(viewPortHack);

  onError = options.onError || _.noop;
  delete options.onError;

  try {
    options = checkoutNormalizer(options, location, _.copy(api) );
    merchant = options ? options.merchant : null;
    on.success = merchant.onSuccess;
    on.pending = merchant.onPending;
    on.cancel = merchant.onError;
    on.ko = merchant.onKO;
    on.dismiss = merchant.onDismiss;
  } catch (e) {
    errorMessage = e.message;
  }

  if (merchant) {
    // All functions must be removed as them can't be serialized by postMessage
    delete merchant.onSuccess;
    delete merchant.onPending;
    delete merchant.onError;
    delete merchant.onKO;
    delete merchant.onDismiss;
  }

  if( isApp ) {
    options.meta = options.meta || {};
    options.meta.is_app = true;
  }

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

  return http( iframeSrc ).then(function (response) {
      var iframe = _.getIFrame({
            top: 0,
            left: 0,
            width: '100%',
            height: '0',
            background: 'transparent'
          }),
          postMessage = function (event_name, message, target) {
            message.aplazame = 'checkout';
            message.event_name = event_name;
            (target || iframe.contentWindow).postMessage(message, '*');
          },
          httpCheckout = function () {
            var started = _.now();
            return http.apply(this, arguments).then(function (response) {
              postMessage('http-success', {
                started: started,
                elapsed: _.now() - started,
                response: http.plainResponse(response)
              });
              return response;
            }, function (response) {
              postMessage('http-error', {
                started: started,
                elapsed: _.now() - started,
                response: http.plainResponse(response)
              });
              throw response;
            });
          };

      iframe.id = 'aplazame-checkout-iframe';
      iframe.className = 'aplazame-modal';

      document.body.appendChild(iframe);
      iframe.src = iframeSrc;

      if (errorMessage) {
        throw new Error(errorMessage);
      }

      var onMessage = function (e, message) {
        console.log('onMessage', message);

        switch( message.event ) {
          case 'merchant':
            iframe.style.display = _.remove_style;
            postMessage('merchant-data', {
              checkout: options
            }, e.source);
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
          case 'open-link':
            if( isApp )
              navigator.app.loadUrl(message.href, { openExternal: true });
            else
              window.open(message.href, '_system');
            break;
          case 'drop-blur':
            _.removeClass(document.body, 'aplazame-blur');
            _.addClass(document.body, 'aplazame-unblur');
            setTimeout(function () {
              cssBlur.hack(false);
              _.removeClass(document.body, 'aplazame-blur');
              _.removeClass(document.body, 'aplazame-unblur');
            }, 600);
            break;
          case 'confirm':
            _.log('aplazame.checkout:confirm', message);

            httpCheckout( options.merchant.confirmation_url, {
              method: 'post',
              contentType: 'application/json',
              data: message.data,
              params: _.extend(message.params || {}, {
                order_id: message.data.checkout_token,
                checkout_token: message.data.checkout_token
              })
            }).then(function (response) {
              postMessage('confirmation', {
                result: 'success',
                response: http.plainResponse(response)
              }, e.source);
            }, function () {
              postMessage('confirmation', {
                result: 'error',
                response: http.plainResponse(response)
              }, e.source);
            });
            // confirmation_url
            break;
          case 'close':
            if( iframe ) {
              document.body.removeChild(iframe);
              cssModal.hack(false);
              iframe = null;
              document.head.removeChild(viewPortHack);

              _.onMessage.off('checkout', onMessage);

              if( on[message.result] ) on[message.result]();
            }
            break;
        }
      };

      _.onMessage('checkout', onMessage);

    }).catch(function (reason) {
      // throw new Error('can not connect to ' + baseCheckout);
      errorLoading = true;

      log('Aplazame ' + reason);

      _.removeClass(tmpOverlay.querySelector('.logo-aplazame'), 'animate');
      loadingText.innerHTML = '<div class="text-error">Error cargando pasarela de pago</div><br/><div><a href="mailto:soporte@aplazame.com?subject=' + encodeURI('Checkout error: ' + reason) + '">soporte@aplazame.com</a></div>';
      loadingText.style.lineHeight = '1.5';

      onError(reason);
    });

}

module.exports = checkout;
