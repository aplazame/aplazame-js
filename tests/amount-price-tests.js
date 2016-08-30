
var assert = require('assert'),
    _ = require('../src/tools/amount-price');

describe('amount getter && price parser', function () {

    it("only decimals", function() {
      assert.equal( _.parsePrice('29.00') , 2900);
    });
    it("thousands and decimals", function() {
      assert.equal( _.parsePrice('2,709.00') , 270900);
    });
    it("thousands and decimals inverse", function() {
      assert.equal( _.parsePrice('2.709,00') , 270900);
    });
    it("thousands no decimals", function() {
      assert.equal( _.parsePrice('2.709') , 270900);
    });
    it("thousands no decimals (comma)", function() {
      assert.equal( _.parsePrice('2,709') , 270900);
    });

});
