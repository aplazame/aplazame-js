'use strict';

function _locationReplaceFn ( location, href ) {
  return href ? function () {
    location.replace(href);
  } : null;
}

// function _removeFunctions (o) {
//   for( var key in o ) {
//     if( o[key] instanceof Function ) delete o[key];
//   }
// }

// function _showLog () {
//   var _type = this.type,
//       _args = arguments,
//       _log = _type && console[_type] instanceof Function ? console[_type] : console.log;
//
//   return function () {
//     _log.apply(console, _args);
//   };
// }

function _throwError (error) {
  console.log('\nYou may want to take a look at our documentation:\n\nhttps://aplazame.com/docs/api/checkout-parameters/#merchant\n\n');
  return function () {
    throw error;
  };
}

module.exports = function checkoutNormalizerCallbacks(transaction, callbacks, location) {

  var _noop = function () {},
      merchant = transaction.merchant,
      on = { noop: _noop };

if( !merchant ) throw new Error('missing merchant parameters');

'onReady onStatusChange onClose onSuccess onPending onKO onKo onDismiss success_url pending_url ko_url dismiss_url onError cancel_url error_url checkout_url'.split(/ +/).forEach(function (key) {
  // Copying merchants params to callbacks object
  if( merchant[key] ) callbacks[key] = callbacks[key] || merchant[key];

  // All functions must be removed as them can't be serialized by postMessage
  if( merchant[key] instanceof Function ) delete merchant[key];
});

// result callbacks when close
  on.success = callbacks.onSuccess || _locationReplaceFn(location, callbacks.success_url );

  on.pending = callbacks.onPending || _locationReplaceFn(location, callbacks.pending_url );

  on.ko = callbacks.onKO || callbacks.onKo || _locationReplaceFn(location, callbacks.ko_url );

  on.dismiss = callbacks.onDismiss || _locationReplaceFn(location, callbacks.dismiss_url );

  on.error = callbacks.onError || _locationReplaceFn(location, callbacks.error_url );

// event callbacks
  on.ready = callbacks.onReady || merchant.onReady || _noop;
  on.statusChange = callbacks.onStatusChange || merchant.onStatusChange || _noop;
  on.close = callbacks.onClose || merchant.onClose || _noop;


// normalizing old callbacks

  on.dismiss = on.dismiss || _locationReplaceFn(location, merchant.checkout_url);

  on.error = on.error || _locationReplaceFn(location, callbacks.cancel_url );


// fullfilling callbacks
  if( !on.success && !on.statusChange && !on.close ) _throwError('success callback must be defined if statusChange or onClose missing')();

  on.pending = on.pending || on.success;

  on.dismiss = on.dismiss || _locationReplaceFn(location, '/');

  if( !on.error && !on.statusChange && !on.close ) _throwError('ko callback must be defined if statusChange or onClose missing')();

  on.ko = on.ko || on.error;

  return on;
};
