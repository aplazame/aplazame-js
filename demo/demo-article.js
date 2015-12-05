
aplazame._.ready(function () {

  function amount2string (amount) {
    var cents = amount%100;
    return parseInt(amount/100) + '.' + ( cents < 10 ? '0' : '' ) + cents;
  }

  function toEUR (amount) {
    if( amount < 0 ) {
      return '-' + toEUR(-amount);
    }
    return amount2string(amount) + '€';
  }

  var price = document.querySelector('[itemprop="price"]'),
      priceCents = Number( price.getAttribute('content') );
      choices = document.querySelectorAll('.article-type-choices .article-type input');

  console.log('price', price, priceCents);

  [].forEach.call(choices, function (choice) {
    choice.addEventListener('change', function (e) {
      var factor = Number( price.getAttribute('data-price-' + this.value) ) || 1;
      price.textContent = toEUR( priceCents * factor );

      // console.log('change', this, e, this.value, factor, toEUR( priceCents * factor ) );

    });
  });

});
