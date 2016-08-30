
var assert = require('assert'),
    _ = require('../src/tools/amount-price');

describe('amount getter && price parser', function () {

    it("parsePrice", function() {

      assert.equal( _.parsePrice('29.00') , 2900, 'only decimals');
      assert.equal( _.parsePrice('2,709.00') , 270900, 'only decimals');

    });

});
