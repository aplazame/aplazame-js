'use strict';
function Money (amount, currency) {
  this.amount = amount;
  this.currency = currency;
}

Money.prototype.equals = function (money) {
	return (this.amount === money.amount ) && (this.currency === money.currency);
};

module.exports = Money;
