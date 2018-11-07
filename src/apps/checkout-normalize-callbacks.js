

function _locationReplaceFn ( location, href ) {
  return href ? function () {
    location.replace(href);
  } : null;
}

function _removeFunctions (o) {
  for( var key in o ) {
    if( o[key] instanceof Function ) delete o[key];
  }
}

var status_list = 'success,pending,error,dismiss,ko,cancel,Ready,StatusChange,Close,KO'.split(',');

function _moveToCallbacks (merchant, callbacks) {
  status_list.forEach(function (status_key, i) {
    var status_fn = 'on' + status_key[0].toUpperCase() + status_key.substr(1),
        status_url = status_key + '_url';

    if( merchant[status_fn] && !callbacks[status_fn] ) callbacks[status_fn] = merchant[status_fn];
    if( i < 6 && merchant[status_url] && !callbacks[status_url] ) callbacks[status_url] = merchant[status_url];
  });

  _removeFunctions(merchant);
}

export default function checkoutNormalizerCallbacks(callbacks, location, merchant) {

  var _noop = function () {},
      on = { noop: _noop };

  if( merchant ) _moveToCallbacks(merchant, callbacks);

  var _onCancel = callbacks.onError || _locationReplaceFn(location, callbacks.cancel_url);
  
  // result callbacks when close
  on.dismiss = callbacks.onDismiss ||
      _locationReplaceFn(location, merchant.dismiss_url || '/') ||
      _locationReplaceFn(location, merchant.checkout_url || '/');

  on.success = callbacks.onSuccess || _locationReplaceFn(location, merchant.success_url);
  on.pending = callbacks.onPending || _locationReplaceFn(location, merchant.pending_url) || on.dismiss;
  on.ko = callbacks.onKO || callbacks.onKo || _locationReplaceFn(location, merchant.ko_url) || _onCancel || on.dismiss;

  // event callbacks
  on.ready = callbacks.onReady || _noop;
  on.statusChange = callbacks.onStatusChange || _noop;
  on.close = callbacks.onClose || _noop;

  // All functions must be removed as them can't be serialized by postMessage
  _removeFunctions(merchant);

  return on;
}
