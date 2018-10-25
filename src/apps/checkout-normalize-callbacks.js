

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

export default function checkoutNormalizerCallbacks(transaction, callbacks, location) {

  var _noop = function () {},
      merchant = transaction.merchant,
      on = { noop: _noop };

  if( !merchant ) throw new Error('missing merchant parameters');

  // result callbacks when close
  on.success = callbacks.onSuccess || merchant.onSuccess;
  on.pending = callbacks.onPending || merchant.onPending;
  on.cancel = callbacks.onError || merchant.onError;
  on.ko = callbacks.onKO || merchant.onKO;
  on.dismiss = callbacks.onDismiss || merchant.onDismiss;

  // event callbacks
  on.ready = callbacks.onReady || merchant.onReady || _noop;
  on.statusChange = callbacks.onStatusChange || merchant.onStatusChange || _noop;
  on.close = callbacks.onClose || merchant.onClose || _noop;

  // if( !on.success && !merchant.success_url && on.close === _noop ) {
  //   throw new Error('success_url missing');
  // }
  on.success = on.success || _locationReplaceFn(location, merchant.success_url);

  // if( !on.cancel && !merchant.cancel_url && on.close === _noop ) {
  //   throw new Error('cancel_url missing');
  // }
  on.cancel = on.cancel || _locationReplaceFn(location, merchant.cancel_url);

  on.dismiss = on.dismiss || _locationReplaceFn(location, merchant.checkout_url || '/');

  on.ko = on.ko || _locationReplaceFn(location, merchant.ko_url) || on.dismiss;

  if( !on.pending ) {
    on.pending = merchant.pending_url ? _locationReplaceFn(location, merchant.pending_url) : on.dismiss;
  }

  // All functions must be removed as them can't be serialized by postMessage
  _removeFunctions(merchant);

  return on;
}
