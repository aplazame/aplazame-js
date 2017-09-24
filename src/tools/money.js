'use strict';
module.exports = function (amount, currency) {
  return {
    amount: amount,
    currency: currency,
    equals: function (money) {
      return (this.amount === money.amount ) && (this.currency === money.currency);
    }
  };
};
