'use strict';
module.exports = function (amount, currency) {
  var _self = this;

  return {
    amount: amount,
    currency: currency,
    equals: function (money) {
      return (_self.amount === money.amount ) && (_self.currency === money.currency);
    }
  };
};
