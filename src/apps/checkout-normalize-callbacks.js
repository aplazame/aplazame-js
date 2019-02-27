

function _locationReplaceFn ( location, href ) {
  return href ? function () {
    location.replace(href);
  } : null;
}

export default function checkoutNormalizerCallbacks(transaction, callbacks, location) {

  var _noop = function () {},
      merchant = transaction.merchant || {},
      on = { noop: _noop };

  callbacks = Object.create(callbacks)
  Object.keys(merchant).forEach(function (_prop) {
    if( merchant[_prop] instanceof Function ) {
      callbacks[_prop] = merchant[_prop]
      delete merchant[_prop]
    }
  })

  on.dismiss = callbacks.onDismiss || _locationReplaceFn(location, merchant.checkout_url || '/')

  on.success = callbacks.onSuccess || _locationReplaceFn(location, merchant.success_url)
  
  on.pending = callbacks.onPending ||
    _locationReplaceFn(location, merchant.pending_url) ||
    on.dismiss 

  on.error = callbacks.onError ||
    _locationReplaceFn(location, merchant.error_url) ||
    _locationReplaceFn(location, merchant.cancel_url)

  on.ko = callbacks.onKO || _locationReplaceFn(location, merchant.ko_url) || on.dismiss

  // event callbacks
  on.ready = callbacks.onReady || merchant.onReady || _noop
  on.statusChange = callbacks.onStatusChange || merchant.onStatusChange || _noop
  on.close = callbacks.onClose || merchant.onClose || _noop

  return on
}
