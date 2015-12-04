
if( !Element.prototype.addEventListener ) {
  if( Element.prototype.attachEvent ) {
    Element.prototype.addEventListener = function (eventName, listener) {
      return Element.prototype.attachEvent( 'on' + eventName, listener );
    }
  } else {
    throw 'Browser not compatible with element events';
  }
}

if( !Element.prototype.matchesSelector ) {
  Element.prototype.matchesSelector = (
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector
  );
}

if( !Element.prototype.closest ) {
  Element.prototype.closest = function (selector) {
    var el = this;

    while( el ) {
      if( el.matchesSelector(selector) ) {
        break;
      }
      el = el.parentElement || el.parentNode;
    }
    return el;
  };
}

function _ready (callback) {
  if (/loaded|complete/.test(document.readyState)) {
    callback();
  } else {
    window.addEventListener('load', callback);
  }
}

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

_ready(function () {

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
