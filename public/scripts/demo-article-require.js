require(['aplazame'], function (aplazame) {

  aplazame.init({
    sandbox: true,
    publicKey: document.body.getAttribute('data-public-key')
  });

  console.log('demo-article-require', arguments);

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

    var choices = document.querySelectorAll('.article-type-choices .article-type input');

    // console.log('price', price);

    [].forEach.call(choices, function (choice) {
      choice.addEventListener('change', function (_e) {
        var price = document.querySelector('[itemprop="price"]'),
            factor = Number( price.getAttribute('data-price-' + this.value) ) || 1;

        price.textContent = toEUR( ( price ? Number( price.getAttribute('content') ) : 0 ) * factor );

        // console.log('change', this, e, this.value, factor, toEUR( priceCents * factor ) );

      });
    });


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

    // checkout launching

    var params = {
      'checkout-json': 'checkout-ES.json'
    };

    if( location.search ) {
      location.search.replace(/^\?/, '').split('&').forEach(function (part) {
        var param = part.match(/(.*?)\=(.*)/);
        if( param ) {
          params[param[1].trim()] = param[2].trim();
        }
      });
    }

    function jsonGet (url, onSuccess, onError) {
      var request = new XMLHttpRequest();

      request.onreadystatechange = function() {
        if(request.readyState === 4) {
          if(request.status === 200) {
            if( onSuccess ) onSuccess(JSON.parse(request.responseText));
          } else {
            if( onError ) onError(request);
          }
        }
      };

      request.open('GET', url, true);
      request.send();
    }

    // console.log('params', location.search.replace(/^\?/, '').split('&')[0].match(/(.*?)\=(.*)/) );

    // var http = require('http-rest/browser'),
    //     checkoutData = http(params['checkout-json']);

    function randOrderId (_timeout) {
      return 'test-' + new Date().getTime();
    }

    var matchOrderId = ( location.hash || '' ).match(/^#\/order\/([^&]*)/),
        orderId = matchOrderId && matchOrderId[1];

    if( orderId === 'random' ) {
      orderId = randOrderId();
    }

    window.loadCheckout = function () {

      jsonGet(params['checkout-json'], function (data) {
        if( typeof data === 'string' ) {
          try {
            data = JSON.parse(data);
          } catch(err) {
            console.error('received json is not valid');
          }
        }

        if( aplazame.info().api.host === 'https://api-dev.aplazame.com/' ) {
          data.merchant.confirmation_url = data.merchant.confirmation_url.replace('//demo.aplazame.com/', '//demo-dev.aplazame.com/');
        }

        if( !orderId ) {
          orderId = randOrderId();
          location.hash = '/order/' + orderId;
        }

        data.order.id = orderId;

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

  });

});
