
var assert = require('assert'),
    _ = require('../src/tools/amount-price');

describe('amount getter', function () {

    it("only cents", function() {
      assert.equal( _.parsePrice('29.00') , 2900);
      assert.equal( _.parsePrice('29.00€') , 2900);
      assert.equal( _.parsePrice('29.00 €') , 2900);
      assert.equal( _.parsePrice('$ 29.00€') , 2900);
      assert.equal( _.parsePrice('$29.00€') , 2900);
      assert.equal( _.parsePrice('$  29.00€') , 2900);
      assert.equal( _.parsePrice('29.00   €') , 2900);
    });

    it("only cents (2)", function() {
      assert.equal( _.parsePrice('29.34') , 2934);
      assert.equal( _.parsePrice('29.34€') , 2934);
      assert.equal( _.parsePrice('29.34 €') , 2934);
      assert.equal( _.parsePrice('$ 29.34') , 2934);
      assert.equal( _.parsePrice('$29.34') , 2934);
    });

    it("only cents comma", function() {
      assert.equal( _.parsePrice('29,00') , 2900);
      assert.equal( _.parsePrice('29,00€') , 2900);
      assert.equal( _.parsePrice('29,00 €') , 2900);
      assert.equal( _.parsePrice('$ 29,00') , 2900);
      assert.equal( _.parsePrice('$29,00') , 2900);
    });

    it("only cents comma (2)", function() {
      assert.equal( _.parsePrice('29,12') , 2912);
      assert.equal( _.parsePrice('29,12 €') , 2912);
      assert.equal( _.parsePrice('29,12€') , 2912);
      assert.equal( _.parsePrice('$29,12') , 2912);
      assert.equal( _.parsePrice('$ 29,12') , 2912);
    });

    it("only one decimal", function() {
      assert.equal( _.parsePrice('29.0') , 2900);
      assert.equal( _.parsePrice('29.0 €') , 2900);
      assert.equal( _.parsePrice('29.0€') , 2900);
      assert.equal( _.parsePrice('$ 29.0') , 2900);
      assert.equal( _.parsePrice('$29.0') , 2900);
    });

    it("only one decimal (2)", function() {
      assert.equal( _.parsePrice('29.8') , 2980);
      assert.equal( _.parsePrice('29.8 €') , 2980);
      assert.equal( _.parsePrice('29.8€') , 2980);
      assert.equal( _.parsePrice('$ 29.8') , 2980);
      assert.equal( _.parsePrice('$29.8') , 2980);
    });

    it("only one decimal comma", function() {
      assert.equal( _.parsePrice('29,0') , 2900);
      assert.equal( _.parsePrice('29,0 €') , 2900);
      assert.equal( _.parsePrice('29,0€') , 2900);
      assert.equal( _.parsePrice('$ 29,0') , 2900);
      assert.equal( _.parsePrice('$29,0') , 2900);
    });

    it("only one decimal comma (2)", function() {
      assert.equal( _.parsePrice('29,8') , 2980);
      assert.equal( _.parsePrice('29,8 €') , 2980);
      assert.equal( _.parsePrice('29,8€') , 2980);
      assert.equal( _.parsePrice('$ 29,8') , 2980);
      assert.equal( _.parsePrice('$29,8') , 2980);
    });

    it("thousands and cents", function() {
      assert.equal( _.parsePrice('2,709.00') , 270900);
      assert.equal( _.parsePrice('2,709.00 €') , 270900);
      assert.equal( _.parsePrice('2,709.00€') , 270900);
      assert.equal( _.parsePrice('$ 2,709.00') , 270900);
      assert.equal( _.parsePrice('$2,709.00') , 270900);
    });

    it("thousands and cents (2)", function() {
      assert.equal( _.parsePrice('2,709.82') , 270982);
      assert.equal( _.parsePrice('2,709.82 €') , 270982);
      assert.equal( _.parsePrice('2,709.82€') , 270982);
      assert.equal( _.parsePrice('$ 2,709.82') , 270982);
      assert.equal( _.parsePrice('$2,709.82') , 270982);
    });

    it("thousands and cents inverse", function() {
      assert.equal( _.parsePrice('2.709,00') , 270900);
      assert.equal( _.parsePrice('2.709,00 €') , 270900);
      assert.equal( _.parsePrice('2.709,00€') , 270900);
      assert.equal( _.parsePrice('$ 2.709,00') , 270900);
      assert.equal( _.parsePrice('$2.709,00') , 270900);
    });

    it("thousands and cents inverse (2)", function() {
      assert.equal( _.parsePrice('2.709,63') , 270963);
      assert.equal( _.parsePrice('2.709,63 €') , 270963);
      assert.equal( _.parsePrice('2.709,63€') , 270963);
      assert.equal( _.parsePrice('$ 2.709,63') , 270963);
      assert.equal( _.parsePrice('$2.709,63') , 270963);
    });

    it("thousands and cents dots", function() {
      assert.equal( _.parsePrice('2.709.00') , 270900);
      assert.equal( _.parsePrice('2.709.00 €') , 270900);
      assert.equal( _.parsePrice('2.709.00€') , 270900);
      assert.equal( _.parsePrice('$ 2.709.00') , 270900);
      assert.equal( _.parsePrice('$2.709.00') , 270900);
    });

    it("thousands and cents dots (2)", function() {
      assert.equal( _.parsePrice('2.709.83') , 270983);
      assert.equal( _.parsePrice('2.709.83 €') , 270983);
      assert.equal( _.parsePrice('2.709.83€') , 270983);
      assert.equal( _.parsePrice('$ 2.709.83') , 270983);
      assert.equal( _.parsePrice('$2.709.83') , 270983);
    });

    it("thousands and cents commas", function() {
      assert.equal( _.parsePrice('2,709,00') , 270900);
      assert.equal( _.parsePrice('2,709,00 €') , 270900);
      assert.equal( _.parsePrice('2,709,00€') , 270900);
      assert.equal( _.parsePrice('$ 2,709,00') , 270900);
      assert.equal( _.parsePrice('$2,709,00') , 270900);
    });

    it("thousands and cents commas (2)", function() {
      assert.equal( _.parsePrice('2,709,38') , 270938);
      assert.equal( _.parsePrice('2,709,38 €') , 270938);
      assert.equal( _.parsePrice('2,709,38€') , 270938);
      assert.equal( _.parsePrice('$ 2,709,38') , 270938);
      assert.equal( _.parsePrice('$2,709,38') , 270938);
    });

    it("thousands and decimal", function() {
      assert.equal( _.parsePrice('2,709.0') , 270900);
      assert.equal( _.parsePrice('2,709.0 €') , 270900);
      assert.equal( _.parsePrice('2,709.0€') , 270900);
      assert.equal( _.parsePrice('$ 2,709.0') , 270900);
      assert.equal( _.parsePrice('$2,709.0') , 270900);
    });

    it("thousands and decimal (2)", function() {
      assert.equal( _.parsePrice('2,709.4') , 270940);
      assert.equal( _.parsePrice('2,709.4 €') , 270940);
      assert.equal( _.parsePrice('2,709.4€') , 270940);
      assert.equal( _.parsePrice('$ 2,709.4') , 270940);
      assert.equal( _.parsePrice('$2,709.4') , 270940);
    });

    it("thousands and decimal inverse", function() {
      assert.equal( _.parsePrice('2.709,0'), 270900);
      assert.equal( _.parsePrice('2.709,0 €'), 270900);
      assert.equal( _.parsePrice('2.709,0€'), 270900);
      assert.equal( _.parsePrice('$ 2.709,0'), 270900);
      assert.equal( _.parsePrice('$2.709,0'), 270900);
    });

    it("thousands and decimal inverse (2)", function() {
      assert.equal( _.parsePrice('2.709,2'), 270920);
      assert.equal( _.parsePrice('2.709,2 €'), 270920);
      assert.equal( _.parsePrice('2.709,2€'), 270920);
      assert.equal( _.parsePrice('$ 2.709,2'), 270920);
      assert.equal( _.parsePrice('$2.709,2'), 270920);
    });

    it("thousands and decimal dots", function() {
      assert.equal( _.parsePrice('2.709.0'), 270900);
      assert.equal( _.parsePrice('2.709.0 €'), 270900);
      assert.equal( _.parsePrice('2.709.0€'), 270900);
      assert.equal( _.parsePrice('$ 2.709.0'), 270900);
      assert.equal( _.parsePrice('$2.709.0'), 270900);
    });

    it("thousands and decimal dots (2)", function() {
      assert.equal( _.parsePrice('2.709.7'), 270970);
      assert.equal( _.parsePrice('2.709.7 €'), 270970);
      assert.equal( _.parsePrice('2.709.7€'), 270970);
      assert.equal( _.parsePrice('$ 2.709.7'), 270970);
      assert.equal( _.parsePrice('$2.709.7'), 270970);
    });

    it("thousands and decimal commas", function() {
      assert.equal( _.parsePrice('2,709,0'), 270900);
      assert.equal( _.parsePrice('2,709,0 €'), 270900);
      assert.equal( _.parsePrice('2,709,0€'), 270900);
      assert.equal( _.parsePrice('$ 2,709,0'), 270900);
      assert.equal( _.parsePrice('$2,709,0'), 270900);
    });

    it("thousands and decimal commas (2)", function() {
      assert.equal( _.parsePrice('2,709,9') , 270990);
      assert.equal( _.parsePrice('2,709,9 €') , 270990);
      assert.equal( _.parsePrice('2,709,9€') , 270990);
      assert.equal( _.parsePrice('$ 2,709,9') , 270990);
      assert.equal( _.parsePrice('$2,709,9') , 270990);
    });

    it("thousands no cents", function() {
      assert.equal( _.parsePrice('2.709') , 270900);
      assert.equal( _.parsePrice('lkjhslkjh 2.709 aalkhjgal') , 270900);
      assert.equal( _.parsePrice('as a2.709 lskjhlskjh') , 270900);
      assert.equal( _.parsePrice('ssd 2.709 ¿?') , 270900);
      assert.equal( _.parsePrice('2.709') , 270900);
    });

    it("thousands no cents (comma)", function() {
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

    it("millions", function() {
      assert.equal( _.parsePrice('1981092,70') , 198109270);
    });

    it("millions thousands", function() {
      assert.equal( _.parsePrice('1.981.092,70') , 198109270);
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
