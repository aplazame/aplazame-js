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

  if( !checkout.merchant ) {
    throw new Error('missing merchant parameters');
  }

  if( !checkout.merchant.public_api_key && !api.publicKey ) {
    throw new Error('missing public key');
  }

  // We put public_api_key as soon as possible so we can track the merchant from our API and notify him about any issue.
  checkout.merchant.public_api_key = checkout.merchant.public_api_key || api.publicKey;
  checkout.merchant.sandbox = checkout.merchant.sandbox === undefined ? api.sandbox : checkout.merchant.sandbox;

  if (!checkout.merchant.onSuccess && !checkout.merchant.success_url) {
    throw new Error('success_url missing');
  }
  checkout.merchant.onSuccess = checkout.merchant.onSuccess || _locationReplaceFn(location, checkout.merchant.success_url);

  if (!checkout.merchant.onError && !checkout.merchant.cancel_url) {
    throw new Error('cancel_url missing');
  }
  checkout.merchant.onError = checkout.merchant.onError || _locationReplaceFn(location, checkout.merchant.cancel_url);

  checkout.merchant.onDismiss = checkout.merchant.onDismiss || _locationReplaceFn(location, checkout.merchant.checkout_url || '/');

  if( !checkout.merchant.onPending ) {
    checkout.merchant.onPending = checkout.merchant.pending_url ? _locationReplaceFn(location, checkout.merchant.pending_url) : checkout.merchant.onDismiss;
  }

  if (checkout.customer) {
    if (checkout.customer.birthday) {
      // Strip time from value
      checkout.customer.birthday = checkout.customer.birthday.split('T')[0];
    }

    switch (checkout.customer.type) {
      case 'existing':
        checkout.customer.type = 'e';
        break;
      case 'guess':
        checkout.customer.type = 'g';
        break;
      case 'new':
        checkout.customer.type = 'n';
        break;
    }

    switch (checkout.customer.gender) {
      case 'unknown':
        checkout.customer.gender = 0;
        break;
      case 'male':
        checkout.customer.gender = 1;
        break;
      case 'female':
        checkout.customer.gender = 2;
        break;
      case 'not_applicable':
        checkout.customer.gender = 3;
        break;
    }
  }

  return checkout;
}

module.exports = checkoutNormalizer;
