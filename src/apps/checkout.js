'use strict';

var api = require('../core/api'),
    _ = require('../tools/tools'),
    checkoutNormalizer = require('./checkout-normalizer'),
    http = require('http-rest/browser'),
    cssHack = require('../tools/css-hack'),
    is_app = typeof navigator !== 'undefined' && navigator.app,
    log = require('../tools/log'),
    dE = document.documentElement,
    flag_svg_es = require('../templates/flag-es.svg'),
    flag_svg_mx = require('../templates/flag-mx.svg'),
    flag_wrapper = document.createElement('div');

flag_wrapper.className = 'aplazame-checkout-flag';
flag_wrapper.style = 'position: absolute; bottom: 0; left: 0; width: 100%; z-index: 2147483647 !important;';

function checkout (options, callbacks) {
  options = options || {};
  callbacks = callbacks || {};
  options.__viewport__ = {};

  // http://ryanve.com/lab/dimensions/
  options.__viewport__.screen = window.screen ? {
    availWidth: screen.availWidth,
    availHeight: screen.availHeight,
    width: screen.width,
    height: screen.height,
    availLeft: screen.availLeft,
    availTop: screen.availTop,
    colorDepth: screen.colorDepth,
    orientation: screen.orientation ? {
      angle: screen.orientation.angle,
      type: screen.orientation.type,
    } : {}
  } : {};
  options.__viewport__.document = {
    clientWidth: dE.clientWidth,
    clientHeight: dE.clientHeight,
  };
  options.__viewport__.window = {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
  };

  var checkout_url = options.host === 'location' ? ( location.protocol + '//' + location.host + '/' ) : api.checkout_url;

  var on = {},
      onError,
      iframeSrc = checkout_url + ( /\?/.test(checkout_url) ? '&' : '?' ) + 't=' + new Date().getTime(),
      errorLoading = false,
      errorMessage = false,
      tmpOverlay = document.createElement('div'),
      cssOverlay = cssHack('overlay'),
      cssBlur = cssHack('blur'),
      cssLogo = cssHack('logo'),
      cssModal = cssHack('modal'),
      viewPortHack = document.createElement('meta'),
      valid_result_status = ['success', 'pending', 'ko', 'dismiss', 'error'];

  viewPortHack.name = 'viewport';
  viewPortHack.content = 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';

  document.head.appendChild(viewPortHack);

  onError = options.onError || _.noop;
  delete options.onError;

  try {
    on = checkoutNormalizer(options, callbacks, location, _.copy(api) );
  } catch (e) {
    errorMessage = e.message;
  }

  if( is_app ) options.meta.is_app = true;

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

  return http( iframeSrc ).then(function (_iframe_response) {
      var iframe = _.getIFrame({
            top: 0,
            left: 0,
            width: '100%',
            height: '0',
            background: 'transparent'
          }),
          postMessage = function (event_name, message, target) {
            message.aplazame = 'checkout';
            message.event = event_name;
            (target || iframe.contentWindow).postMessage(message, '*');
          };

      iframe.id = 'aplazame-checkout-iframe';
      iframe.className = 'aplazame-modal';

      document.body.appendChild(iframe);
      iframe.src = iframeSrc;

      flag_wrapper.innerHTML = options.order.currency === 'MXN' ? flag_svg_mx : flag_svg_es;
      document.body.appendChild( flag_wrapper );

      if (errorMessage) {
        throw new Error(errorMessage);
      }

      var onMessage = function (e, message) {
        // console.log('onMessage', message);

        switch( message.event ) {
          case 'get-checkout-data':
            iframe.style.display = _.remove_style;
            postMessage('checkout-data', {
              checkout: options,
              data: options,
            }, e.source);
            break;
          case 'checkout-ready':
            _.removeClass(iframe, 'hide');
            cssModal.hack(true);
            cssOverlay.hack(false);
            document.body.removeChild(tmpOverlay);
            on.ready();
            break;
          case 'loading-text': // only for iframe
            loadingText.textContent = message.text;
            break;
          case 'open-link':
            if( is_app )
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

            var started = _.now();
            http.post( options.merchant.confirmation_url, message.data, {
              headers: { contentType: 'application/json' },
              params: _.extend(message.params || {}, {
                order_id: message.data.checkout_token,
                checkout_token: message.data.checkout_token
              })
            }).then(function (response) {
              response.config.start = started;
              postMessage('confirmation', {
                result: 'success',
                response: response
              }, e.source);
            }, function (response) {
              response.config.start = started;
              postMessage('confirmation', {
                result: 'error',
                response: response
              }, e.source);
            });
            // confirmation_url
            break;
          case 'status-change':
            if( valid_result_status.indexOf(message.status) < 0 ) {
              (console.error || console.log)('Wrong status returned by checkout', message.result );
              // throw new Error(message);
            }
            on.statusChange(message.status);
            break;
          case 'close':
            if( iframe ) {
              document.body.removeChild(iframe);
              cssModal.hack(false);
              iframe = null;
              document.head.removeChild(viewPortHack);

              _.onMessage.off('checkout', onMessage);

              if( valid_result_status.indexOf(message.result) < 0 ) {
                (console.error || console.log)('Wrong result returned by checkout', message.result );
                // throw new Error(message);
              }

              on.close(message.result);
              if( on[message.result] ) on[message.result]();
            }
            break;
        }
      };

      _.onMessage('checkout', onMessage);

    }).catch(function (reason) {
      errorLoading = true;

      log('Aplazame ' + reason);

      _.removeClass(tmpOverlay.querySelector('.logo-aplazame'), 'animate');
      loadingText.innerHTML = '<div class="text-error">Error cargando pasarela de pago</div><br/><div><a href="mailto:soporte@aplazame.com?subject=' + encodeURI('Checkout error: ' + reason) + '">soporte@aplazame.com</a></div>';
      loadingText.style.lineHeight = '1.5';

      onError(reason);
    });

}

module.exports = checkout;
