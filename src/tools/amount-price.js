
function thousands(amount, groupSeparator) {
  if( /\d{3}\d+/.test(amount) ) {
    return thousands(amount.replace(/(\d{3}?)(\.|$)/, groupSeparator + '$&'), groupSeparator);
  }
  return amount;
}

function getAmount (amount, decimalsSeparator, groupSeparator) {
  var prefix = '';
  decimalsSeparator = decimalsSeparator || ',';
  groupSeparator = groupSeparator || '.';

  if( amount < 0 ) {
    prefix = '-';
    amount = 0 - amount;
  }

  if( !amount ) {
    return '0,00';
  } else if( amount < 10 ) {
    return '0,0' + amount;
  } else if( amount < 100 ) {
    return '0,' + amount;
  }
  return prefix + ('' + amount).replace(/(\d*)(\d{2})$/, function (_matched, main, tail) {
    return thousands(main, groupSeparator) + decimalsSeparator + tail;
  });
}

function getPrice (amount, currency) {
  var prefix = '', suffix = '', decimalsSeparator, groupSeparator;

  switch (currency) {
    case 'EUR':
      suffix = ' €';
      decimalsSeparator = ',';
      groupSeparator = '.';
      break;
    case 'MXN':
      prefix = '$ ';
      decimalsSeparator = '.';
      groupSeparator = ',';
      break;
  }

  return prefix + getAmount(amount, decimalsSeparator, groupSeparator) + suffix;
}

function parsePrice (price) {
  var matched = price.match(/((\d+[,. ])*)(\d+)/),
      main, tail;

  if( matched ) {
    tail = matched[3];
    main = matched[1].replace(/[^\d]/g, '');

    if( !main ) {
      return Number( tail + '00' );
    }

    if( tail.length === 1 ) return Number(main + tail + '0');

    if( tail.length === 2 ) return Number(main + tail);

    // if tail length is 3 we assume there is no decimals
    if( tail.length === 3 ) return Number(main + tail + '00');

    if( tail.length > 3 ) return Number(main)*100 + Math.round( Number('0.' + tail)*100 );

    return Number(main);
  }

  if( /\d+/.test(price) ) {
    return Number( price.replace(/[^\d]+/g, '') + '00' );
  }
}

export default {
	getAmount: getAmount,
	getPrice: getPrice,
	parsePrice: parsePrice
};
