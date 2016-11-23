/* global describe, it */

var assert = require('assert'),
    checkoutNormalizer = require('./checkout-normalizer');

describe('checkout normalizer', function () {

  // Store last href so it can be inspected.
  var lastHref;

  var location = {
    host: 'example.com',
    href: 'http://example.com:8080/foo?bas=baz#fooId',
    origin: 'http://example.com',
    protocol: 'https:',
    replace: function( href ) {
      if (href) {
        lastHref = href;
      }

      return lastHref;
    }
  };

  var api = {
    publicKey: 'fooKey',
    sandbox: true
  };

  it('throw exception when merchant is not provided', function() {
    var checkout = {};

    assert.throws(
      function () {
        checkoutNormalizer(checkout, location, api);
      },
      /missing merchant parameters/
    );
  });

  it('throw exception when merchant.success_url is not provided', function() {
    var checkout = {
      merchant: {}
    };

    assert.throws(
      function () {
        checkoutNormalizer(checkout, location, api);
      },
      /success_url missing/
    );
  });

  it('throw exception when merchant.cancel_url is not provided', function() {
    var checkout = {
      merchant: {
        success_url: '/success_url'
      }
    };

    assert.throws(
      function () {
        checkoutNormalizer(checkout, location, api);
      },
      /cancel_url missing/
    );
  });

  it('minimum fields are provided', function() {
    var checkout = {
      merchant: {
        success_url: '/success_url',
        cancel_url: '/cancel_url'
      }
    };

    checkout = checkoutNormalizer(checkout, location, api);

    checkout.merchant.onSuccess();
    assert.equal(location.replace(), '/success_url');

    checkout.merchant.onError();
    assert.equal(location.replace(), '/cancel_url');

    checkout.merchant.onDismiss();
    assert.equal(location.replace(), '/');

    delete checkout.merchant.onSuccess;
    delete checkout.merchant.onError;
    delete checkout.merchant.onDismiss;

    assert.deepEqual(checkout, {
      api: {
        publicKey: 'fooKey',
        sandbox: true
      },
      merchant: {
        success_url: '/success_url',
        cancel_url: '/cancel_url',
        public_api_key: 'fooKey',
        sandbox: true
      },
      origin: {
        host: 'example.com',
        href: 'http://example.com:8080/foo?bas=baz#fooId',
        origin: 'http://example.com',
        protocol: 'https:'
      }
    });
  });

  it('provided public_api_key is preserved', function() {
    var checkout = {
      merchant: {
        public_api_key: 'customApiKey',
        success_url: '/success_url',
        cancel_url: '/cancel_url'
      }
    };

    checkout = checkoutNormalizer(checkout, location, api);

    assert.equal(checkout.merchant.public_api_key, 'customApiKey');
    assert.equal(checkout.api.publicKey, 'fooKey');
  });

  it('provided sandbox value is preserved', function() {
    var checkout = {
      merchant: {
        sandbox: false,
        success_url: '/success_url',
        cancel_url: '/cancel_url'
      }
    };

    checkout = checkoutNormalizer(checkout, location, api);

    assert.equal(checkout.merchant.sandbox, false);
    assert.equal(checkout.api.sandbox, true);
  });

  it('preserve keep birthday value when only the date is provided', function() {
    var checkout = {
      merchant: {
        sandbox: false,
        success_url: '/success_url',
        cancel_url: '/cancel_url'
      },
      customer: {
        birthday: '2000-12-31'
      }
    };

    checkout = checkoutNormalizer(checkout, location, api);

    assert.equal(checkout.customer.birthday, '2000-12-31');
  });

  it('strip time from birthday value when date time is provided', function() {
    var checkout = {
      merchant: {
        success_url: '/success_url',
        cancel_url: '/cancel_url'
      },
      customer: {
        birthday: '2000-12-31T23:59:59+0000'
      }
    };

    checkout = checkoutNormalizer(checkout, location, api);

    assert.equal(checkout.customer.birthday, '2000-12-31');
  });

  it('transform customer.type "existing" as "e" ', function() {
    var checkout = {
      merchant: {
        success_url: '/success_url',
        cancel_url: '/cancel_url'
      },
      customer: {
        type: 'existing'
      }
    };

    checkout = checkoutNormalizer(checkout, location, api);

    assert.equal(checkout.customer.type, 'e');
  });

  it('transform customer.type "guess" as "g" ', function() {
    var checkout = {
      merchant: {
        success_url: '/success_url',
        cancel_url: '/cancel_url'
      },
      customer: {
        type: 'guess'
      }
    };

    checkout = checkoutNormalizer(checkout, location, api);

    assert.equal(checkout.customer.type, 'g');
  });

  it('transform customer.type "new" as "n" ', function() {
    var checkout = {
      merchant: {
        success_url: '/success_url',
        cancel_url: '/cancel_url'
      },
      customer: {
        type: 'new'
      }
    };

    checkout = checkoutNormalizer(checkout, location, api);

    assert.equal(checkout.customer.type, 'n');
  });

  it('transform customer.gender "unknown" as "0" ', function() {
    var checkout = {
      merchant: {
        success_url: '/success_url',
        cancel_url: '/cancel_url'
      },
      customer: {
        gender: 'unknown'
      }
    };

    checkout = checkoutNormalizer(checkout, location, api);

    assert.equal(checkout.customer.gender, 0);
  });

  it('transform customer.gender "male" as "1" ', function() {
    var checkout = {
      merchant: {
        success_url: '/success_url',
        cancel_url: '/cancel_url'
      },
      customer: {
        gender: 'male'
      }
    };

    checkout = checkoutNormalizer(checkout, location, api);

    assert.equal(checkout.customer.gender, 1);
  });

  it('transform customer.gender "female" as "2" ', function() {
    var checkout = {
      merchant: {
        success_url: '/success_url',
        cancel_url: '/cancel_url'
      },
      customer: {
        gender: 'female'
      }
    };

    checkout = checkoutNormalizer(checkout, location, api);

    assert.equal(checkout.customer.gender, 2);
  });

  it('transform customer.gender "not_applicable" as "3" ', function() {
    var checkout = {
      merchant: {
        success_url: '/success_url',
        cancel_url: '/cancel_url'
      },
      customer: {
        gender: 'not_applicable'
      }
    };

    checkout = checkoutNormalizer(checkout, location, api);

    assert.equal(checkout.customer.gender, 3);
  });
});
