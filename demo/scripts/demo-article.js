/* globals aplazame */

import Parole from 'parole';
import http from 'http-rest/browser';

function whenAplazameReady () {

  var country = document.body.getAttribute('data-country');
  var choices = document.querySelectorAll('.article-type-choices .article-type input');

  function amount2string (amount) {
    var cents = amount%100;
    var centsSeparator = country==='MX' ? '.':',';
    return parseInt(amount/100) + centsSeparator + ( cents < 10 ? '0' : '' ) + cents;
  }

  function toCurrency (amount) {
    if( amount < 0 ) {
      return '-' + toCurrency(-amount);
    }
    return (country==='MX' ? '$':'') + amount2string(amount) + (country==='MX' ? '':'€');
  }

  // console.log('price', price);

  [].forEach.call(choices, function (choice) {
    choice.addEventListener('change', function (_e) {
      var price = document.querySelector('[itemprop="price"]'),
          factor = Number( price.getAttribute('data-price-' + this.value) ) || 1;

      price.textContent = toCurrency( ( price ? Number( price.getAttribute('content') ) : 0 ) * factor );

      // console.log('change', this, e, this.value, factor, toCurrency( priceCents * factor ) );

    });
  });

  if( document.querySelector('article.article-sample') ) (function () {

    var qtyCtrl = document.querySelector('.qty-ctrl'),
        qtyInput = qtyCtrl.querySelector('input'),
        qtyMinus = qtyCtrl.querySelector('button.minus'),
        qtyPlus = qtyCtrl.querySelector('button.plus');

    qtyMinus.setAttribute('disabled', 'disabled');

    qtyMinus.addEventListener('click', function () {
      var newValue = Number(qtyInput.value) - 1;

      if( newValue < 1 ) {
        newValue = 1;
      }

      qtyInput.value = '' + newValue;

      if( newValue === 1 ) {
        qtyMinus.setAttribute('disabled', 'disabled');
      }
    });

    qtyPlus.addEventListener('click', function () {
      qtyInput.value = '' + ( Number(qtyInput.value) + 1 );
      qtyMinus.removeAttribute('disabled');
    });

  })();

  // checkout launching

  var params = {
    'checkout-json': 'checkout-' + country + '.json'
  };

  if( location.search ) {
    location.search.replace(/^\?/, '').split('&').forEach(function (part) {
      var param = part.match(/(.*?)=(.*)/);
      if( param ) {
        params[param[1].trim()] = param[2].trim();
      }
    });
  }

  // console.log('params', location.search.replace(/^\?/, '').split('&')[0].match(/(.*?)\=(.*)/) );

  var checkoutData = http(params['checkout-json']);

  http.usePromise(Parole);

  function randOrderId () {
    return 'test-' + new Date().getTime();
  }

  var matchOrderId = ( location.hash || '' ).match(/^#\/order\/([^&]*)/),
      orderId = matchOrderId && matchOrderId[1];

  if( orderId === 'random' ) {
    orderId = randOrderId();
  }

  window.loadCheckout = function () {

    checkoutData.then(function (response) {
      var data = response.data;

      if( typeof data === 'string' ) {
        try {
          data = JSON.parse(data);
        } catch(err) {
          console.error('received json is not valid');
        }
      }

      console.log('aplazame.info()', aplazame.info() );

      if( !orderId ) {
        orderId = randOrderId();
        location.hash = '/order/' + orderId;
      }

      data.order.id = orderId;

      data.merchant.public_api_key = document.body.getAttribute('data-public-key');
      data.merchant.sandbox = true;

      // data.merchant.onError = function () {
      //   console.log('whoops!!');
      // };
      //
      // data.merchant.onSuccess = function () {
      //   console.log('gogogo!!');
      // };
      //
      // data.merchant.onDismiss = function () {
      //   console.log('try again!!');
      // };
      // var checkout_url = aplazame.info().api.checkout_url;
      // aplazame.info().api.checkout_url = checkout_url + (/\?/.test(checkout_url) ? '&' : '?' ) + window.location.search.substr(1);

      aplazame.checkout(data, {
        onStatusChange: function (status) {
          console.log('onStatusChange', status);
        },
        onClose: function (result_status) {
          console.log('onClose', result_status);
        },
      });
    });

  };

  // setTimeout(function () {
  //
  //   var widget_wrapper = document.createElement('div');
  //   widget_wrapper.setAttribute('data-aplazame-simulator', '');
  //   widget_wrapper.setAttribute('data-amount', '1234');
  //   widget_wrapper.setAttribute('data-qty', 'form.details input[name=\'qty\']');
  //   document.body.appendChild(widget_wrapper);
  //
  // }, 3000);

}

window.apzReady = whenAplazameReady;

// aplazame._.ready();
