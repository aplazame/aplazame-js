/* global describe, it */

import assert from 'assert';
import checkoutNormalizeCustomer from './checkout-normalize-customer';

describe('checkout customer normalizer', function () {

  it('preserve keep birthday value when only the date is provided', function() {
    var checkout = {
      customer: {
        birthday: '2000-12-31'
      }
    };

    checkoutNormalizeCustomer(checkout);

    assert.equal(checkout.customer.birthday, '2000-12-31');
  });

  it('strip time from birthday value when date time is provided', function() {
    var checkout = {
      customer: {
        birthday: '2000-12-31T23:59:59+0000'
      }
    };

    checkoutNormalizeCustomer(checkout);

    assert.equal(checkout.customer.birthday, '2000-12-31');
  });

  it('transform customer.type "existing" as "e" ', function() {
    var checkout = {
      customer: {
        type: 'existing'
      }
    };

    checkoutNormalizeCustomer(checkout);

    assert.equal(checkout.customer.type, 'e');
  });

  it('transform customer.type "guess" as "g" ', function() {
    var checkout = {
      customer: {
        type: 'guess'
      }
    };

    checkoutNormalizeCustomer(checkout);

    assert.equal(checkout.customer.type, 'g');
  });

  it('transform customer.type "new" as "n" ', function() {
    var checkout = {
      customer: {
        type: 'new'
      }
    };

    checkoutNormalizeCustomer(checkout);

    assert.equal(checkout.customer.type, 'n');
  });

  it('transform customer.gender "unknown" as "0" ', function() {
    var checkout = {
      customer: {
        gender: 'unknown'
      }
    };

    checkoutNormalizeCustomer(checkout);

    assert.equal(checkout.customer.gender, 0);
  });

  it('transform customer.gender "male" as "1" ', function() {
    var checkout = {
      customer: {
        gender: 'male'
      }
    };

    checkoutNormalizeCustomer(checkout);

    assert.equal(checkout.customer.gender, 1);
  });

  it('transform customer.gender "female" as "2" ', function() {
    var checkout = {
      customer: {
        gender: 'female'
      }
    };

    checkoutNormalizeCustomer(checkout);

    assert.equal(checkout.customer.gender, 2);
  });

  it('transform customer.gender "not_applicable" as "3" ', function() {
    var checkout = {
      customer: {
        gender: 'not_applicable'
      }
    };

    checkoutNormalizeCustomer(checkout);

    assert.equal(checkout.customer.gender, 3);
  });


});
