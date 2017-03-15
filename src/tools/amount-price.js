
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

function parsePrice (price) {
  var matched = price.match(/((\d+[,. ])*)(\d+)/),
      main, tail;

  if( matched ) {
    tail = matched[3];
    main = matched[1].replace(/[^\d]/g, '');

    if( !main ) {
      return Number( tail + '00' );
    }

    if( tail.length === 1 ) {
      return Number(main + tail + '0');
    }

    if( tail.length !== 2 ) {
      tail += '00';
    }

    return Number(main + tail);
  }

  if( /\d+/.test(price) ) {
    return Number( price.replace(/[^\d]+/g, '') + '00' );
  }
}

module.exports = {
	getAmount: getAmount,
	parsePrice: parsePrice
};
