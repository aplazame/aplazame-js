function getAmount (amount) {
  var prefix = '';

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
  return prefix + ('' + amount).replace(/..$/, ',$&');
}

function parsePrice (price) {
  price = price.replace(' ', '');
  price = price.match(/[\d,.]+/);
  price = price && price[0] || '';
  price = price.replace(/([,.])0$/, '$100');
  var priceParts = ( '' + price ).replace(/[^0-9.,]/g, '').split(/[,.]/),
      amount = Number(priceParts.shift()),
      piece = priceParts.shift(), i, n;

  if( !piece ) {
    return amount*100;
  }

  while( piece ) {
    for( i = 0, n = piece.length ; i < n ; i++ ) {
      amount*=10;
    }
    amount += Number(piece);
    piece = priceParts.shift();
  }
  return amount;
}

module.exports = {
	getAmount: getAmount,
	parsePrice: parsePrice
};	