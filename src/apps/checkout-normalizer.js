'use strict';

function _locationReplaceFn ( location, href ) {
  return function () {
    location.replace(href);
  };
}

function checkoutNormalizer(checkout, location, api) {
  checkout.origin = {
    host: location.host,
    href: location.href,
    origin: location.origin,
    protocol: location.protocol
  };

  checkout.api = api;

  var merchant = checkout.merchant;

  if( !merchant ) {
    throw new Error('missing merchant parameters');
  }

  if( !merchant.public_api_key && !api.publicKey ) {
    throw new Error('missing public key');
  }

  // We put public_api_key as soon as possible so we can track the merchant from our API and notify him about any issue.
  merchant.public_api_key = merchant.public_api_key || api.publicKey;
  merchant.sandbox = merchant.sandbox === undefined ? api.sandbox : merchant.sandbox;

  if (!merchant.onSuccess && !merchant.success_url) {
    throw new Error('success_url missing');
  }
  merchant.onSuccess = merchant.onSuccess || _locationReplaceFn(location, merchant.success_url);

  if (!merchant.onError && !merchant.cancel_url) {
    throw new Error('cancel_url missing');
  }
  merchant.onError = merchant.onError || _locationReplaceFn(location, merchant.cancel_url);
  merchant.onKO = merchant.onKO || _locationReplaceFn(location, merchant.ko_url || merchant.checkout_url || '/');

  merchant.onDismiss = merchant.onDismiss || _locationReplaceFn(location, merchant.checkout_url || '/');

  if( !merchant.onPending ) {
    merchant.onPending = merchant.pending_url ? _locationReplaceFn(location, merchant.pending_url) : merchant.onDismiss;
  }

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

  return checkout;
}

module.exports = checkoutNormalizer;
