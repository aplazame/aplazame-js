
import Azazel from 'azazel';
import Parole from 'parole';

// import log from '../tools/log';
import _ from '../tools/tools';

var checkout_shadow = null;
function _loadCheckoutShadow (checkout_url) {
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

export default function loadShadowCheckout (checkout_url, options) {
  var loading_app = Parole.defer(),
      waiting_data = Parole.defer(),
      ctrl_events = new Azazel(),
      _emit = function (event_name, args) {
        console.log('_emit', event_name, args, ctrl_events);
        ctrl_events.emit(event_name, args);
      };

  options = options || {};

  _.extend(loading_app.promise, {
    on: function (event_name, listener) {
      ctrl_events.on(event_name, listener);
      return loading_app.promise;
    },
    sendData: function (checkout_data) {
      console.log('sendData', checkout_data);
      waiting_data.resolve(checkout_data);
    },
    errorData: function (res) {
      console.log('errorData', res);
      waiting_data.reject(res);
    },
  });

  _loadCheckoutShadow(checkout_url).then(function (checkout_loader) {
    var checkout_container = document.createElement('div');
    checkout_container.className = 'aplazame-modal';
    document.body.insertBefore(checkout_container, document.body.firstChild);

    waiting_data.promise.then(function (checkout_data) {

      checkout_loader.launch(checkout_data, {
        el: checkout_container,
        // shadow_dom: false,
        onStatusChange: function (result_status) {
          _emit('status-change', [result_status]);
        },
        onClose: function (result_status) {
          _emit('close', [result_status]);
        },
        ajaxConfirm: options.ajaxConfirm,
      }, false).then(function () {
        loading_app.resolve();
      });

    });

  });

  return loading_app;
}
