'use strict';

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

function checkoutNormalizer(checkout, callbacks, location, api) {
  checkout.origin = {
    host: location.host,
    href: location.href,
    origin: location.origin,
    protocol: location.protocol
  };

  checkout.api = api;

  var _noop = function () {},
      merchant = checkout.merchant,
      on = {};

  if( !merchant ) {
    throw new Error('missing merchant parameters');
  }

  // We put public_api_key as soon as possible so we can track the merchant from our API and notify him about any issue.
  merchant.public_api_key = merchant.public_api_key || api.publicKey;
  merchant.sandbox = merchant.sandbox === undefined ? api.sandbox : merchant.sandbox;

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

  if( !on.success && !merchant.success_url && on.close === _noop ) {
    throw new Error('success_url missing');
  }
  on.success = on.success || _locationReplaceFn(location, merchant.success_url);

  if( !on.cancel && !merchant.cancel_url && on.close === _noop ) {
    throw new Error('cancel_url missing');
  }
  on.cancel = on.cancel || _locationReplaceFn(location, merchant.cancel_url);

  on.dismiss = on.dismiss || _locationReplaceFn(location, merchant.checkout_url || '/');

  on.ko = on.ko || _locationReplaceFn(location, merchant.ko_url) || on.dismiss;

  if( !on.pending ) {
    on.pending = merchant.pending_url ? _locationReplaceFn(location, merchant.pending_url) : on.dismiss;
  }

  // All functions must be removed as them can't be serialized by postMessage
  _removeFunctions(merchant);

  var customer = checkout.customer;

  if( customer ) {
    if( customer.birthday ) {
      // Strip time from value
      customer.birthday = customer.birthday.split('T')[0];
    }

    switch ( customer.type ) {
      case 'existing':
        customer.type = 'e';
        break;
      case 'guess':
        customer.type = 'g';
        break;
      case 'new':
        customer.type = 'n';
        break;
    }

    switch (customer.gender) {
      case 'unknown':
        customer.gender = 0;
        break;
      case 'male':
        customer.gender = 1;
        break;
      case 'female':
        customer.gender = 2;
        break;
      case 'not_applicable':
        customer.gender = 3;
        break;
    }
  }

  return on;
}

module.exports = checkoutNormalizer;
