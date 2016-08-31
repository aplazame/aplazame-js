
var assert = require('assert'),
    _ = require('../src/tools/amount-price');

describe('amount getter', function () {

    it("only decimals", function() {
      assert.equal( _.parsePrice('29.00') , 2900);
    });

    it("thousands and decimals", function() {
      assert.equal( _.parsePrice('2,709.00') , 270900);
    });

    it("thousands and decimals inverse", function() {
      assert.equal( _.parsePrice('2.709,00') , 270900);
    });

    it("thousands and decimals dots", function() {
      assert.equal( _.parsePrice('2.709.00') , 270900);
    });

    it("thousands and decimals commas", function() {
      assert.equal( _.parsePrice('2,709,00') , 270900);
    });

    it("thousands no decimals", function() {
      assert.equal( _.parsePrice('2.709') , 270900);
    });

    it("thousands no decimals (comma)", function() {
      assert.equal( _.parsePrice('2,709') , 270900);
    });

    it("decimals only (1)", function() {
      assert.equal( _.parsePrice('2') , 200);
    });

    it("decimals only (2)", function() {
      assert.equal( _.parsePrice('27') , 2700);
    });

    it("decimals only (3)", function() {
      assert.equal( _.parsePrice('270') , 27000);
    });

    it("decimals only (4)", function() {
      assert.equal( _.parsePrice('2709') , 270900);
    });

});

describe('amount getter', function () {

    it("only decimals", function() {
      assert.equal( _.getAmount(2900) , '29,00');
    });

    it("thousands", function() {
      assert.equal( _.getAmount(290000) , '2.900,00');
    });

    it("thousands (2)", function() {
      assert.equal( _.getAmount(9118716) , '91.187,16');
    });

    it("thousands (3)", function() {
      assert.equal( _.getAmount(91871987) , '918.719,87');
    });

    it("millions", function() {
      assert.equal( _.getAmount(916981761) , '9.169.817,61');
    });

    it("millions (2)", function() {
      assert.equal( _.getAmount(9816981761) , '98.169.817,61');
    });

    it("millions (3)", function() {
      assert.equal( _.getAmount(98716981761) , '987.169.817,61');
    });

    it("negative only decimals", function() {
      assert.equal( _.getAmount(-2900) , '-29,00');
    });

    it("negative thousands", function() {
      assert.equal( _.getAmount(-290000) , '-2.900,00');
    });

    it("negative thousands (2)", function() {
      assert.equal( _.getAmount(-9118716) , '-91.187,16');
    });

    it("negative thousands (3)", function() {
      assert.equal( _.getAmount(-91871987) , '-918.719,87');
    });

    it("negative millions", function() {
      assert.equal( _.getAmount(-916981761) , '-9.169.817,61');
    });

    it("negative millions (2)", function() {
      assert.equal( _.getAmount(-9816981761) , '-98.169.817,61');
    });

    it("negative millions (3)", function() {
      assert.equal( _.getAmount(-98716981761) , '-987.169.817,61');
    });

});
