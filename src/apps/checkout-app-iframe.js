
import Azazel from 'azazel';
import Parole from 'parole';

import log from '../tools/log';
import _ from '../tools/tools';

export default function loadIframeCheckout (checkout_url, options) {
  var loading_app = Parole.defer();

  options = options || {};

  var iframe_el = _.getIFrame({
        top: 0,
        left: 0,
        width: '100%',
        height: '0',
        background: 'transparent'
      }),
      iframe_src = checkout_url + ( /\?/.test(checkout_url) ? '&' : '?' ) + 'iframe=checkout&t=' + new Date().getTime(),
      postMessage = function (event_name, message, target) {
        message.aplazame = 'checkout';
        message.event = event_name;
        (target || iframe_el.contentWindow).postMessage(message, '*');
      },
      waiting_data = Parole.defer(),
      ctrl_events = new Azazel(),
      _emit = function (event_name, args) {
        ctrl_events.emit(event_name, args);
      };

  _.extend(loading_app.promise, {
    on: function (event_name, listener) {
      ctrl_events.on(event_name, listener);
      return loading_app.promise;
    },
    sendData: function (checkout_data) {
      waiting_data.resolve(checkout_data);
    },
    errorData: function (res) {
      waiting_data.reject(res);
    },
  });


  iframe_el.id = 'aplazame-checkout-iframe';
  iframe_el.className = 'aplazame-modal';
  document.body.appendChild(iframe_el);
  iframe_el.src = iframe_src;


  setTimeout(function () {
    loading_app.reject('iframe-timeout');
  }, 20000);

  function _onMessage (e, message) {
    var event_name = message.event;

    switch( event_name ) {
      case 'get-checkout-data':
        waiting_data.promise.then(function (checkout_data) {
          iframe_el.style.display = _.remove_style;
          postMessage('checkout-data', {
            data: checkout_data,
          }, e.source);
        }, function (res) {
          iframe_el.style.display = _.remove_style;
          postMessage('checkout-data', {
            error: res,
          }, e.source);
        });
        break;
      case 'checkout-ready':
        loading_app.resolve();
        iframe_el.style.height = null;
        _.removeClass(iframe_el, 'hide');
        _emit(event_name);
        break;
      case 'loading-text': // only for iframe
        _emit(event_name, [message.text]);
        break;
      case 'adjust-height': // only for iframe
        iframe_el.style.height = message.height + 'px';
        postMessage('checkout-data', {
          height: message.height,
        }, e.source);
        break;
      case 'scroll-top': // only for iframe
        if( message.animate ) _.scroll.animateTo(message.scroll_top);
        else _.scroll.top(message.scroll_top);
        break;
      case 'open-link':
        _emit(event_name, [{ href: message.href }]);
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

        if( !options.ajaxConfirm ) break;

        options.ajaxConfirm(message.data, message.params).then(function (res) {
          postMessage('confirmation', {
            result: 'success',
            response: res
          }, e.source);
        }, function (res) {
          postMessage('confirmation', {
            result: 'error',
            response: res
          }, e.source);
        });
        break;
      case 'status-change':
        _emit(event_name, [message.status]);
        break;
      case 'close':
        if( iframe_el ) {
          document.body.removeChild(iframe_el);
          iframe_el = null;
        }

        _emit(event_name, [message.result]);
        _.onMessage.off('checkout', _onMessage);
        break;
    }
  }

  _.onMessage('checkout', _onMessage);

  return loading_app.promise;
}
