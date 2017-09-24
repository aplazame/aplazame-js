/* global describe, it */

var assert = require('assert'),
    Money = require('./money');

describe('Money', function () {

  it('Creates a Money object', function() {
    var moneyTest = Money(10, 'XX');

    assert.equal(moneyTest.amount, 10);
    assert.equal(moneyTest.currency, 'XX');
  });

  it('Money equals', function() {
    var moneyTest = Money(10, 'XX');

    assert.equal(true, moneyTest.equals(moneyTest));
  });

  it('Money with different amount', function() {
    var moneyTest = Money(10, 'XX');
    var moneyTest2 = Money(11, 'XX');

    assert.equal(false, moneyTest.equals(moneyTest2));
  });

  it('Money with different currency', function() {
    var moneyTest = Money(10, 'XX');
    var moneyTest2 = Money(10, 'XY');

    assert.equal(false, moneyTest.equals(moneyTest2));
  });

  it('Money with amount and currency different', function() {
    var moneyTest = Money(10, 'XX');
    var moneyTest2 = Money(11, 'XY');

    assert.equal(false, moneyTest.equals(moneyTest2));
  });
});
