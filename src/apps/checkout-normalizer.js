'use strict';

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
  checkout.merchant.onSuccess = checkout.merchant.onSuccess || function () {
    location.replace(checkout.merchant.success_url);
  };

  if (!checkout.merchant.onError && !checkout.merchant.cancel_url) {
    throw new Error('cancel_url missing');
  }
  checkout.merchant.onError = checkout.merchant.onError || function () {
    location.replace(checkout.merchant.cancel_url);
  };

  checkout.merchant.onDismiss = checkout.merchant.onDismiss || function () {
    location.replace(checkout.merchant.checkout_url || '/');
  };

  return checkout;
}

module.exports = checkoutNormalizer;
