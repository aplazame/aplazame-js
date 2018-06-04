'use strict';

module.exports = function checkoutNormalizeAPI(transaction, api_defaults) {

  var merchant = transaction.merchant,
      transaction_api = transaction.api || {};

  if( !merchant ) throw new Error('missing merchant parameters');

  transaction_api.host = transaction_api.host || api_defaults.host;

  transaction_api.public_key = transaction_api.public_key || merchant.public_api_key || api_defaults.public_key;
  transaction_api.sandbox = 'sandbox' in transaction_api ? transaction_api.sandbox : ( 'sandbox' in merchant ? merchant.sandbox : api_defaults.sandbox );

  transaction.api = transaction_api;

  return transaction_api;
};
