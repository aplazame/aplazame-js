/* global describe, it, beforeEach */

import assert from 'assert';
import checkoutNormalizeAPI from './checkout-normalize-api';

describe('checkout API normalizer', function () {
  var api;

  beforeEach(function () {
    api = {
      public_key: 'fooKey',
      sandbox: true
    };
  });

  it('throw exception when merchant is not provided', function() {
    var transaction = {};

    assert.throws(
      function () {
        checkoutNormalizeAPI(transaction, api);
      },
      /missing merchant parameters/
    );
  });

  it('provided public_api_key is preserved', function() {
    var transaction = {
      merchant: {
        public_api_key: 'customApiKey',
      }
    };

    checkoutNormalizeAPI(transaction, api);

    assert.equal(api.public_key, 'fooKey');
    assert.equal(transaction.api.public_key, 'customApiKey');
  });

  it('using api_defaults public_key', function() {
    var transaction = {
      merchant: {}
    };

    checkoutNormalizeAPI(transaction, api);

    assert.equal(api.public_key, 'fooKey', 'api_defaults');
    assert.equal(transaction.merchant.public_api_key, undefined, 'transaction.merchant');
    assert.equal(transaction.api.public_key, 'fooKey', 'transaction.api');
  });

  it('provided sandbox value is preserved', function() {
    var transaction = {
      merchant: {
        sandbox: false,
        success_url: '/success_url',
        cancel_url: '/cancel_url'
      }
    };

    checkoutNormalizeAPI(transaction, api);

    assert.equal(api.sandbox, true, 'api_defaults');
    assert.equal(transaction.merchant.sandbox, false, 'merchant');
    assert.equal(transaction.api.sandbox, false, 'transaction.api');
  });

  it('using api_defaults sandbox', function() {
    var transaction = {
      merchant: {}
    };

    checkoutNormalizeAPI(transaction, api);

    assert.equal(api.sandbox, true, 'api_defaults');
    assert.equal(transaction.merchant.sandbox, undefined, 'transaction.merchant');
    assert.equal(transaction.api.sandbox, true, 'transaction.api');
  });

});
