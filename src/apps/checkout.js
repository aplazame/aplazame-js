'use strict';

var Parole = require('parole');

var api = require('../core/api'),
    apiHttp = require('../core/api-http'),
    _ = require('../tools/tools'),
    checkoutNormalizeAPI = require('./checkout-normalize-api'),
    checkoutNormalizeCustomer = require('./checkout-normalize-customer'),
    checkoutNormalizeCallbacks = require('./checkout-normalize-callbacks'),
    http = require('http-rest/browser'),
    cssHack = require('../tools/css-hack'),
    is_app = typeof navigator !== 'undefined' && navigator.app,
    log = require('../tools/log'),
    viewportInfo = require('./viewport-info'),
    flag_svg_es = require('../templates/flag-es.svg'),
    flag_svg_mx = require('../templates/flag-mx.svg'),
    flag_wrapper = document.createElement('div');

flag_wrapper.className = 'aplazame-checkout-flag';

function checkout (checkout_data, callbacks) {
  var checkout_id = null, transaction;

  if( typeof checkout_data === 'string' ) {
    checkout_id = checkout_data;
    checkout_data = null;
    transaction = {};
  } else {
    transaction = checkout_data.transaction || checkout_data;
    if( checkout_data === transaction ) checkout_data = null;
  }

  ['meta', 'merchant', 'order'].forEach(function (key) {
    if( !_.isObject(transaction[key]) ) transaction[key] = {};
  });

  callbacks = callbacks || {};
  transaction.__viewport__ = viewportInfo();

  var checkout_url = transaction.host === 'location' ? ( location.protocol + '//' + location.host + '/' ) : api.checkout_url;

  var on = {},
      onError,
      iframeSrc = checkout_url + ( /\?/.test(checkout_url) ? '&' : '?' ) + 'iframe=checkout&t=' + new Date().getTime(),
      error_loading = false,
      error_message = false,
      tmpOverlay = document.createElement('div'),
      cssOverlay = cssHack('overlay'),
      // cssBlur = cssHack('blur'),
      cssLogo = cssHack('logo'),
      cssModal = cssHack('modal'),
      viewPortHack = document.createElement('meta'),
      valid_result_status = ['success', 'pending', 'ko', 'dismiss', 'error'],
      previous_scroll_top = _.scroll.top();

  viewPortHack.name = 'viewport';
  viewPortHack.content = 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';

  document.head.appendChild(viewPortHack);

  onError = transaction.onError || _.noop;
  delete transaction.onError;

  try {
    checkoutNormalizeAPI(transaction, _.copy(api) );
    log('api', transaction.api);

    checkoutNormalizeCustomer(transaction);
    log('customer', transaction.customer);

    on = checkoutNormalizeCallbacks(transaction, callbacks, location);
    log('callbacks', on);
  } catch (e) {
    error_message = e.message;
  }

  if( is_app ) transaction.meta.is_app = true;

  tmpOverlay.className = 'aplazame-overlay aplazame-overlay-show';

  cssOverlay.hack(true);
  cssLogo.hack(true);

  // cssBlur.hack(true);
  // setTimeout(function () {
  //   if( !error_loading ) {
  //     _.addClass(document.body, 'aplazame-blur');
  //   }
  // }, 0);

  tmpOverlay.innerHTML = '<div class="aplazame-logo-wrapper"><div class="logo-aplazame" style="width: 150px; height: 150px;">' +
  require('./loading-svg') + '</div><div class="aplazame-overlay-loading-text">Cargando pasarela de pago...</div></div>';

  document.body.appendChild(tmpOverlay);

  var loadingText = tmpOverlay.querySelector('.aplazame-overlay-loading-text');

  setTimeout(function () {
    if( !error_loading ) {
      tmpOverlay.querySelector('.logo-aplazame').className += ' animate';
      if( (transaction.order || {}).currency === 'MXN' ) {
        flag_wrapper.innerHTML = flag_svg_mx + '<div class="label">México</div>';
      } else {
        flag_wrapper.innerHTML = flag_svg_es + '<div class="label">España</div>';
      }

      document.body.appendChild( flag_wrapper );
    }
  }, 200);

  var checkout_promise = checkout_id ?
    apiHttp.get('checkout/' + checkout_id, { api_version: 3 }).then(function (res) { return res.data; }) :
    ( checkout_data ? Parole.resolve(checkout_data) : apiHttp.post('checkout', transaction, { api_version: 3 }).then(function (res) { return res.data; }) );

  // checkout_promise.then(function (res) {
  //   console.log('checkout:then', res);
  // }, function (res) {
  //   console.log('checkout:catch', res);
  // });

  Parole.race([
    new Parole(function (resolveLoadingCheckout) {
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

      window.checkout_iframe = iframe;

      if (error_message) {
        throw new Error(error_message);
      }

      var onMessage = function (e, message) {
        // console.log('onMessage', message);

        switch( message.event ) {
          case 'get-checkout-data':
            resolveLoadingCheckout();
            checkout_promise.then(function (checkout_data) {
              iframe.style.display = _.remove_style;
              postMessage('checkout-data', {
                data: checkout_data,
              }, e.source);
            }, function (res) {
              iframe.style.display = _.remove_style;
              postMessage('checkout-data', {
                error: res,
              }, e.source);
            });
            break;
          case 'checkout-ready':
            iframe.style.height = null;
            if( _.isMobile() ) _.scroll.goto(0);
            _.removeClass(iframe, 'hide');
            cssModal.hack(true);
            if( document.body.contains(flag_wrapper) ) document.body.removeChild( flag_wrapper );
            cssOverlay.hack(false);
            document.body.removeChild(tmpOverlay);
            on.ready();
            break;
          case 'loading-text': // only for iframe
            loadingText.textContent = message.text;
            break;
          case 'adjust-height': // only for iframe
            iframe.style.height = message.height + 'px';
            postMessage('checkout-data', {
              height: message.height,
            }, e.source);
            break;
          case 'scroll-top': // only for iframe
            if( message.animate ) _.scroll.animateTo(message.scroll_top);
            else _.scroll.top(message.scroll_top);
            break;
          case 'open-link':
            if( is_app )
              navigator.app.loadUrl(message.href, { openExternal: true });
            else
              window.open(message.href, '_system');
            break;
          // case 'drop-blur':
          //   _.removeClass(document.body, 'aplazame-blur');
          //   _.addClass(document.body, 'aplazame-unblur');
          //   setTimeout(function () {
          //     cssBlur.hack(false);
          //     _.removeClass(document.body, 'aplazame-blur');
          //     _.removeClass(document.body, 'aplazame-unblur');
          //   }, 600);
          //   break;
          case 'confirm':
            _.log('aplazame.checkout:confirm', message);

            var started = _.now();
            http.post( transaction.merchant.confirmation_url, message.data, {
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
              if( _.isMobile() ) _.scroll.goto(previous_scroll_top);
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
    }),
    new Parole(function (_resolve, reject) {
      setTimeout(reject, 10000);
    }).catch(function () { throw 'iframe-timeout'; }),
  ]).catch(function (reason) {
    error_loading = true;

    log('Aplazame ' + reason);

    _.removeClass(tmpOverlay.querySelector('.logo-aplazame'), 'animate');
    loadingText.innerHTML = '<div class="text-error">Error cargando pasarela de pago</div><br/><div><a href="mailto:soporte@aplazame.com?subject=' + encodeURI('Checkout error: ' + reason) + '">soporte@aplazame.com</a></div>';
    loadingText.style.lineHeight = '1.5';

    onError(reason);
  });

}

module.exports = checkout;
