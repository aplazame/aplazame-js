/* global describe, it */

var assert = require('assert'),
    checkoutNormalizeCallbacks = require('./checkout-normalize-callbacks'),
    callbacks = {},
    location = {
      replace: function (href) {
        this.href = href;
      }
    };

describe('checkout callbacks normalizer', function () {

  it('throw exception when merchant is not provided', function() {
    var checkout = {};

    assert.throws(
      function () {
        checkoutNormalizeCallbacks(checkout, callbacks, location);
      },
      /missing merchant parameters/
    );
  });

  it('minimum fields are provided', function() {
    var checkout = {
      merchant: {
        success_url: '/success_url',
        cancel_url: '/cancel_url'
      }
    };

    var on = checkoutNormalizeCallbacks(checkout, callbacks, location);

    on.success();
    assert.equal(location.href, '/success_url');

    on.cancel();
    assert.equal(location.href, '/cancel_url');

    on.dismiss();
    assert.equal(location.href, '/');
  });

  it('merchant callbacks are normalized', function() {
    var onSuccess = function () { /* onSuccess */ },
        onPending = function () { /* onPending */ },
        onKO = function () { /* onKO */ },
        onDismiss = function () { /* onDismiss */ };

    var checkout = {
      merchant: {
        onSuccess: onSuccess,
        onPending: onPending,
        onKO: onKO,
        onDismiss: onDismiss,
      }
    };

    var on = checkoutNormalizeCallbacks(checkout, callbacks, location);

    assert.strictEqual(on.success, onSuccess, 'on.success');
    assert.strictEqual(on.pending, onPending, 'on.pending');
    assert.strictEqual(on.ko, onKO, 'on.ko');
    assert.strictEqual(on.dismiss, onDismiss, 'on.dismiss');
  });

  it('callbacks are normalized', function() {
    var onSuccess = function () { /* onSuccess */ },
        onPending = function () { /* onPending */ },
        onKO = function () { /* onKO */ },
        onDismiss = function () { /* onDismiss */ };

    var checkout = {
      merchant: {}
    };

    var on = checkoutNormalizeCallbacks(checkout, {
      onSuccess: onSuccess,
      onPending: onPending,
      onKO: onKO,
      onDismiss: onDismiss,
    }, location);

    assert.strictEqual(on.success, onSuccess, 'on.success');
    assert.strictEqual(on.pending, onPending, 'on.pending');
    assert.strictEqual(on.ko, onKO, 'on.ko');
    assert.strictEqual(on.dismiss, onDismiss, 'on.dismiss');
  });

  it('onPending defaults to onDismiss when missing', function() {
    var onDismiss = function () { /* onDismiss */ };

    var checkout = {
      merchant: {
        onDismiss: onDismiss
      }
    };

    var on = checkoutNormalizeCallbacks(checkout, {}, location);

    assert.strictEqual(on.pending, onDismiss, 'on.pending');
    assert.strictEqual(on.dismiss, onDismiss, 'on.dismiss');
  });


});
