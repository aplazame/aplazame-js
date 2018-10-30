
import Parole from 'parole';

import api from '../core/api';
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

import loadIframeCheckout from './checkout-app-iframe';

var flag_wrapper = document.createElement('div');
var is_app = typeof navigator !== 'undefined' && navigator.app;
// var supports_shadow_dom = 'attachShadow' in HTMLElement.prototype;
var valid_result_status = ['success', 'pending', 'ko', 'dismiss', 'error'];

flag_wrapper.className = 'aplazame-checkout-flag';

function _ajaxConfirm (confirmation_url, data, params) {
  var started = _.now();
  http.post( confirmation_url, data, {
    headers: { contentType: 'application/json' },
    params: _.extend(params || {}, {
      order_id: data.checkout_token,
      checkout_token: data.checkout_token
    })
  }).then(function (res) {
    res.config.start = started;
    return res;
  }, function (res) {
    res.config.start = started;
    throw res;
  });
}

function checkout (_checkout_data, callbacks) {
  callbacks = callbacks || {};

  var on = {};

  var viewport_hack = document.createElement('meta');
  viewport_hack.name = 'viewport';
  viewport_hack.content = 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
  document.head.appendChild(viewport_hack);

  var css_logo = cssHack('logo'),
      css_overlay = cssHack('overlay'),
      css_modal = cssHack('modal');

  css_overlay.hack(true);
  css_logo.hack(true);

  var loading_el = document.createElement('div');
  loading_el.className = 'aplazame-overlay aplazame-overlay-show';
  loading_el.innerHTML = '<div class="aplazame-logo-wrapper"><div class="logo-aplazame" style="width: 150px; height: 150px;">' +
                         loading_svg + '</div><div class="aplazame-overlay-loading-text">Cargando pasarela de pago...</div></div>';

  document.body.appendChild(loading_el);

  var loading_text_el = loading_el.querySelector('.aplazame-overlay-loading-text');
  loading_el.querySelector('.logo-aplazame').className += ' animate';

  var previous_scroll_top = _.scroll.top();

  var waiting_transaction = Parole.defer();
  waiting_transaction.promise.then(function (transaction) {
    if( (transaction.order || {}).currency === 'MXN' ) {
      flag_wrapper.innerHTML = flag_svg_mx + '<div class="label">México</div>';
    } else {
      flag_wrapper.innerHTML = flag_svg_es + '<div class="label">España</div>';
    }

    document.body.appendChild( flag_wrapper );

    transaction.__viewport__ = viewportInfo();

    ['meta', 'merchant', 'order'].forEach(function (key) {
      if( !_.isObject(transaction[key]) ) transaction[key] = {};
    });

    checkoutNormalizeAPI(transaction, _.copy(api) );
    log('api', transaction.api);

    checkoutNormalizeCustomer(transaction);
    log('customer', transaction.customer);

    on = checkoutNormalizeCallbacks(transaction, callbacks, location);
    log('callbacks', on);
  }).catch(function (err) {
    log.err('transaction error', err);
  });

  if( typeof _checkout_data === 'object' ) waiting_transaction.resolve(
    'transaction' in _checkout_data ?
    _checkout_data.transaction : _checkout_data
  );

  var ajax_confirmation_url = null;
  var loading_app = loadIframeCheckout(api.checkout_url, {
    ajaxConfirm: function (data, params) {
      return _ajaxConfirm(ajax_confirmation_url, data, params);
    },
  });

  loading_app
    .on('loading-text', function (loading_text) {
      log('loading_text_el', loading_text);
      loading_text_el.textContent = loading_text;
    })
    .on('open-link', function (link) {
      if( is_app )
        navigator.app.loadUrl(link.href, { openExternal: true });
      else
        window.open(link.href, '_system');
    })
    .on('status-change', function (result_status) {
      if( on.statusChange instanceof Function ) on.statusChange(result_status);
    })
    .on('close', function (result_status) {
      log.debug('checkout:close', result_status);
      if( _.isMobile() ) _.scroll.goto(previous_scroll_top);
      if( on.close instanceof Function ) on.close(result_status);

      if( valid_result_status.indexOf(result_status) < 0 ) {
        log.warn('checkout result_status not valid', result_status);
      }
      log('on.' + result_status, on[result_status] );
      if( on[result_status] instanceof Function ) on[result_status]();
    })
  ;

  fetchCheckout(_checkout_data).then(function (checkout_data) {
    loading_app.sendData(checkout_data);

    waiting_transaction.resolve(checkout_data.transaction);

    // retro-compatibility
    ajax_confirmation_url = checkout_data.transaction.merchant.confirmation_url;
  }, function (res) {
    loading_app.errorData(res);
  });

  return loading_app.then(function () {
    css_modal.hack(true);
    css_overlay.hack(false);
    document.body.removeChild(loading_el);
    if( document.body.contains(flag_wrapper) ) document.body.removeChild( flag_wrapper );
  }, function (reason) {
    log.error('Loading Checkout App', reason);

    _.removeClass(loading_el.querySelector('.logo-aplazame'), 'animate');
    loading_text_el.innerHTML = '<div class="text-error">Error cargando pasarela de pago</div><br/><div><a href="mailto:soporte@aplazame.com?subject=' + encodeURI('Checkout error: ' + reason) + '">soporte@aplazame.com</a></div>';
    loading_text_el.style.lineHeight = '1.5';

    console.error('Loading Checkout App', reason);

    throw reason;
  });

}

export default checkout;
