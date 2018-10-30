

import Parole from 'parole';
import api from '../core/api';
import apiHttp from '../core/api-http';
import _ from '../tools/tools';
import fetchCheckout from './checkout-fetch';
import checkoutNormalizeAPI from './checkout-normalize-api';
import checkoutNormalizeCustomer from './checkout-normalize-customer';
import checkoutNormalizeCallbacks from './checkout-normalize-callbacks';
import http from 'http-rest/browser';
import cssHack from '../tools/css-hack';
import log from '../tools/log';
import viewportInfo from './viewport-info';

import flag_svg_es from '../templates/flag-es.svg';
import flag_svg_mx from '../templates/flag-mx.svg';

import loading_svg from './loading-svg';

var flag_wrapper = document.createElement('div');
var is_app = typeof navigator !== 'undefined' && navigator.app;
var supports_shadow_dom = 'attachShadow' in HTMLElement.prototype;

flag_wrapper.className = 'aplazame-checkout-flag';

function _loadIframeCheckout () {
  return Parole(function (resolveLoadingApp, rejectLoadingApp) {
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
        },
        waiting_data = Parole.defer(),
        listeners = {},
        _on = function (event_name, listener) {
          if( !listeners[event_name] ) listeners[event_name] = [];
          listeners[event_name].push(listener);
        },
        _emit = function (event_name, args, this_arg) {
          if( !listeners[event_name] ) return;
          listeners[event_name].foreach(function (listener) {
            listener.apply(args, this_arg);
          });
        },
        app_ctrl = {
          sendData: function (checkout_data) {
            waiting_data.resolve(checkout_data);
          },
          errorData: function (res) {
            waiting_data.reject(res);
          },
          onReady: function (listener) {
            _on('ready', listener);
          },
          onLoadingText: function (listener) {
            _on('loading_text', listener);
          },
          onStatusChange: function (listener) {
            _on('status_change', listener);
          },
          onClose: function (listener) {
            _on('close', listener);
          },
        };

    function _onMessage (e, message) {
      // console.log('onMessage', message);

      switch( message.event ) {
        case 'get-checkout-data':
          resolveLoadingApp();
          waiting_data.promise.then(function (checkout_data) {
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
          _.removeClass(iframe, 'hide');
          _emit('ready');
          break;
        case 'loading-text': // only for iframe
          _emit('loading_text', [message.text]);
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
          log('aplazame.checkout:confirm', message);

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
          if( on.statusChange ) on.statusChange(message.status);
          else log.debug('on.statusChange NOT defined');
          break;
        case 'close':
          if( !iframe ) return;

          document.body.removeChild(iframe);
          iframe = null;

          cssModal.hack(false);
          document.head.removeChild(viewPortHack);

          _.onMessage.off('checkout', onMessage);

          if( valid_result_status.indexOf(message.result) < 0 ) {
            (console.error || console.log)('Wrong result returned by checkout', message.result );
            // throw new Error(message);
          }

          if( on.close ) on.close(message.result);
          else log.debug('on.close NOT defined');

          if( on[message.result] ) {
            log('calling on.' + message.result);
            on[message.result]();
          } else log.debug('on.' + message.result, 'NOT defined');
          break;
      }
    }

    _.onMessage('checkout', _onMessage);

    return app_ctrl;
  });
}

function checkout (_checkout_data, callbacks) {
  callbacks = callbacks || {};

  var viewport_hack = document.createElement('meta');
  viewport_hack.name = 'viewport';
  viewport_hack.content = 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
  document.head.appendChild(viewport_hack);

  var css_logo = cssHack('logo'),
      css_overlay = cssHack('overlay');

  css_overlay.hack(true);
  css_logo.hack(true);

  var loading_el = document.createElement('div');
  loading_el.className = 'aplazame-overlay aplazame-overlay-show';
  loading_el.innerHTML = '<div class="aplazame-logo-wrapper"><div class="logo-aplazame" style="width: 150px; height: 150px;">' +
                         loading_svg + '</div><div class="aplazame-overlay-loading-text">Cargando pasarela de pago...</div></div>';

  document.body.appendChild(tmpOverlay);

  var loading_app = _loadIframeCheckout({
    _ajaxConfirm: function (confirmation_url, data, options) {
      var started = _.now();
      return http.post( confirmation_url, data, {
        headers: { contentType: 'application/json' },
        params: _.extend(options.params || {}, {
          order_id: data.checkout_token,
          checkout_token: data.checkout_token
        })
      }).then(function (response) {
        response.config.start = started;
        return response;
      }, function (response) {
        response.config.start = started;
        throw response;
      });
    },
  });

  var loading_data = fetchCheckout(_checkout_data)

  loading_app.then(function (checkout_app) {
    var on = {};

    return loading_data.then(function (checkout_data) {
      on = checkoutNormalizeCallbacks(transaction, callbacks, location);

      checkout_app.sendData(checkout_data);
      checkout_app.onStatusChange(function () {

      });
      checkout_app.onClose(function () {

      });

      checkout_data.ajaxConfirm = function () {

      };

    }, function (res) {
      checkout_app.errorData(res);
    });

  }, function (reason) {
    log.error('Loading Checkout App', reason);

    _.removeClass(tmpOverlay.querySelector('.logo-aplazame'), 'animate');
    loadingText.innerHTML = '<div class="text-error">Error cargando pasarela de pago</div><br/><div><a href="mailto:soporte@aplazame.com?subject=' + encodeURI('Checkout error: ' + reason) + '">soporte@aplazame.com</a></div>';
    loadingText.style.lineHeight = '1.5';

    if( on.error ) on.error(reason);

    throw reason;
  });



  var checkout_id = null, transaction = null;

  if( typeof checkout_data === 'string' ) {
    checkout_id = checkout_data;
    checkout_data = null;
    transaction = {};
  } else {
    transaction = checkout_data.transaction || checkout_data;
    if( checkout_data === transaction ) checkout_data = null;
  }

  callbacks = callbacks || {};

  log('transaction', transaction);

  var checkout_url = transaction.host === 'location' ? ( location.protocol + '//' + location.host + '/' ) : api.checkout_url;

  var on = {},
      onError,
      iframe_src = checkout_url + ( /\?/.test(checkout_url) ? '&' : '?' ) + 'iframe=checkout&t=' + new Date().getTime(),
      error_loading = false,
      error_message = false,
      tmpOverlay = document.createElement('div'),
      cssOverlay = cssHack('overlay'),
      // cssBlur = cssHack('blur'),
      cssLogo = cssHack('logo'),
      cssModal = cssHack('modal'),
      viewPortHack = document.createElement('meta'),
      valid_result_status = ['success', 'pending', 'ko', 'dismiss', 'error'],
      previous_scroll_top = _.scroll.top(),
      _normalizePayload = function () {
        transaction.__viewport__ = viewportInfo();

        ['meta', 'merchant', 'order'].forEach(function (key) {
          if( !_.isObject(transaction[key]) ) transaction[key] = {};
        });

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
      };

  viewPortHack.name = 'viewport';
  viewPortHack.content = 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';

  document.head.appendChild(viewPortHack);

  onError = transaction.onError || _.noop;
  delete transaction.onError;

  if( !checkout_id ) _normalizePayload();

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
  loading_svg + '</div><div class="aplazame-overlay-loading-text">Cargando pasarela de pago...</div></div>';

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

  // checkout_promise.then(function (res) {
  //   console.log('checkout:then', res);
  // }, function (res) {
  //   console.log('checkout:catch', res);
  // });

  var checkout_shadow = null;
  function _loadCheckoutShadow () {
    if( !checkout_shadow ) checkout_shadow = new Parole(function (resolve, reject) {

      var script = document.createElement('script');
      script.async = true;
      script.onerror = reject;

      window.__aplazame__checkout__ = function (checkout_loader) {
        delete window.__aplazame__checkout__;
        console.log('checkout_loader', checkout_loader);
        resolve(checkout_loader);
      };

      console.log('checkout_url', checkout_url + 'checkout.js?build=' + Date.now()/(3600000) );
      script.src = checkout_url + 'checkout.js?build=' + Date.now()/(3600000) + '&entrypoint=__aplazame__checkout__';

      document.body.appendChild(script);
    });
    return checkout_shadow;
  }

  var shadow_dom_enabled = false;
  Parole.race([
    new Parole( supports_shadow_dom && shadow_dom_enabled ? function (resolveLoadingCheckout) {

      _loadCheckoutShadow().then(function (checkout_loader) {
        var checkout_container = document.createElement('div');
        checkout_container.className = 'aplazame-modal';
        document.body.insertBefore(checkout_container, document.body.firstChild);

        console.log('_loadCheckoutShadow', checkout_data);

        if( _.isMobile() ) _.scroll.goto(0);
        checkout_loader.launch(transaction, {
          el: checkout_container,
          // shadow_dom: false,
          onStatusChange: function (result_status) {
            if( valid_result_status.indexOf(result_status) < 0 ) {
              (console.error || console.log)('Wrong status returned by checkout', result_status );
              // throw new Error(message);
            }
            on.statusChange(result_status);
          },
          onClose: function (result_status) {
            on.close(result_status);
          },
        }, false).then(function () {
          resolveLoadingCheckout();

          cssModal.hack(true);
          if( document.body.contains(flag_wrapper) ) document.body.removeChild( flag_wrapper );
          cssOverlay.hack(false);
          document.body.removeChild(tmpOverlay);
          if( on.ready ) on.ready();
          else log.debug('on.ready NOT defined');
        });

      });

    } : function (resolveLoadingCheckout) {

      var checkout_promise = checkout_id ?
        apiHttp.get('checkout/' + checkout_id, _.merge({ api_version: 3 }, api) ).then(function (res) {
          log('GET /checkout/' + checkout_id);
          transaction = res.data.transaction;
          _normalizePayload();
          return res.data;
        }) :
        ( checkout_data ? Parole.resolve(checkout_data) : apiHttp.post('checkout', transaction, _.merge({ api_version: 3 }, transaction.api) ).then(function (res) { return res.data; }) )
        .then(function (checkout_data) {
          log('checkout_id', checkout_data.id);
          return checkout_data;
        });

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
      iframe.src = iframe_src;

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
            if( on.ready ) on.ready();
            else log.debug('on.ready NOT defined');
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
            log('aplazame.checkout:confirm', message);

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
            if( on.statusChange ) on.statusChange(message.status);
            else log.debug('on.statusChange NOT defined');
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

              if( on.close ) on.close(message.result);
              else log.debug('on.close NOT defined');

              if( on[message.result] ) {
                log('calling on.' + message.result);
                on[message.result]();
              } else log.debug('on.' + message.result, 'NOT defined');
            }
            break;
        }
      };

      _.onMessage('checkout', onMessage);
    }),
    new Parole(function (_resolve, reject) {
      setTimeout(reject, 20000);
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

export default checkout;
