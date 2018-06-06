'use strict';

module.exports = function transactionNormalizer(transaction) {

  var customer = transaction.customer;
  if( !customer ) return;

  if( customer.birthday ) {
    // Strip time from value
    customer.birthday = customer.birthday.split('T')[0];
  }

  switch ( customer.type ) {
    case 'existing':
      customer.type = 'e';
      break;
    case 'guess':
      customer.type = 'g';
      break;
    case 'new':
      customer.type = 'n';
      break;
  }

  switch (customer.gender) {
    case 'unknown':
      customer.gender = 0;
      break;
    case 'male':
      customer.gender = 1;
      break;
    case 'female':
      customer.gender = 2;
      break;
    case 'not_applicable':
      customer.gender = 3;
      break;
  }

  return customer;
};
