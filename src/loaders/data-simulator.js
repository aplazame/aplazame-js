'use strict';

module.exports = function (aplazame) {

  var _ = aplazame._,
      api = require('../core/api'),
      isMobile = window.matchMedia('( max-width: 767px )'),
      widgetForbidden = false,
      watchInterval;

  function parsePrice (price) {
     var priceParts = ( '' + price ).match(/(\d+)([,.](\d+))?/);
     var amount = Number(priceParts[1])*100 + Number(priceParts[3]);
     return amount;
  }

  function getQty (qtySelector) {
    if( !_.isString(qtySelector) ) {
      console.warn('warning: data-qty should be an string. pe: form#article .final-price ');
      return 1;
    }
    var qtyElement;
    try {
      qtyElement = document.querySelector(qtySelector);
    } catch(err) {
      console.warn(err.message + '\ndata-qty should be an string. pe: form#article .final-price ');
      return 1;
    }

    switch( qtyElement.nodeName.toLowerCase() ) {
      case 'input':
        return Number( qtyElement.value );
      case 'select':
        return Number( qtyElement.querySelector('option[selected]').value );
      default:
        return Number( qtyElement.textContent.trim() );
    }
  }

  var cmsPriceSelector = [
        'form#product_addtocart_form .special-price .price', // magento
        'form#product_addtocart_form .regular-price .price', // magento
        '#product-info .special-price .price', // magento
        '#product-info .regular-price .price', // magento
        'form#buy_block #our_price_display', // prestashop
        '#main [itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"] .price .amount' // woocommerce
      ],
      cmsQtySelector = [
        'form#product_addtocart_form input[name="qty"]', // magento
        'form#buy_block input[name="qty"]', // prestashop
        'form#product-options-form button[data-id=qty]', // custom
        '#main [itemtype="http://schema.org/Product"] form.cart input[name="quantity"]' // woocommerce
      ];

  function matchSelector (selector) {
    return document.querySelector(selector);
  }

  function readPrice (element) {
    var price = element.textContent.replace(/[^0-9,.]/g,''), addDot;

    if( /[.,]/.test(price) ) {
      return price;
    }

    return element.firstElementChild ? [].reduce.call(element.querySelectorAll('*'), function (prev, elem) {
      var value = elem.textContent.replace(/[^0-9,.]/g,'');
      if( addDot === undefined && prev && !/\./.test(prev) ) {
        addDot = true;
      }
      return prev + ( addDot ? '.' : '' ) + value;
    }, '') : element.textContent.replace(/[^0-9,.]/g,'');
  }

  function amountGetter (widgetElement) {
    var priceSelector = widgetElement.getAttribute('data-price'),
        qtySelector = widgetElement.getAttribute('data-qty');

    if( priceSelector ) {
      try{
        document.querySelector(priceSelector);
      } catch(err) {
        priceSelector = null;
        console.warn(err.message);
      }
      if( qtySelector ) {
        try{
          document.querySelector(qtySelector);
        } catch(err) {
          qtySelector = null;
          console.warn(err.message);
        }
      }
    } else {
      priceSelector = cmsPriceSelector.find(matchSelector);

      if( priceSelector ) {
        qtySelector = cmsQtySelector.find(matchSelector);
      }
    }

    var getter = priceSelector ? function () {
      var qty = qtySelector ? getQty( qtySelector ) : 1,
          priceElement = document.querySelector( priceSelector );

      return qty * parsePrice( priceElement.value !== undefined ? priceElement.value : readPrice(priceElement) );
    } : function () {
      return Number( widgetElement.getAttribute('data-amount') );
    };

    getter.priceSelector = priceSelector;
    getter.qtySelector = qtySelector;

    return getter;
  }

  function widgetsLookup (element) {
    if( !element.querySelectorAll ) {
      return;
    }

    var simulators = element.querySelectorAll('[data-aplazame-simulator]');

    if( simulators.length ) {

      var iframes = [],
          choices = [],
          options = {},
          currentAmount;

      _.listen(window, 'message', function (e) {
        var message = e.data;

        if( !e.used && message.aplazame === 'simulator' ) {
          e.used = true;

          switch (message.event) {
            case 'resize':
              iframes.forEach(function (iframe) {
                if( iframe.contentWindow === e.source ) {
                  iframe.style.height = message.data.height + 'px';
                }
              });
              break;
            case 'require:choices':
              e.source.postMessage({
                aplazame: 'simulator',
                event: 'choices',
                choices: choices,
                options: options,
                amount: currentAmount,
                mobile: isMobile.matches
              }, '*');
              break;
          }
        }
      });

      _.listen(window, 'resize', function (e) {

        iframes.forEach(function (iframe) {

          iframe.contentWindow.postMessage({
            aplazame: 'simulator',
            event: 'mobile',
            mobile: isMobile.matches
          }, '*');

        });

      });

      [].forEach.call(simulators, function (simulator) {

        if( _.elementData(simulator, 'checked') ) {
          return;
        }

        _.elementData(simulator, 'checked', true);

        var getAmount = amountGetter(simulator);
        currentAmount = currentAmount || Number( simulator.getAttribute('data-amount') ) || getAmount();

        var simulatorParams = {
              simulator: '[data-aplazame-simulator]',
              amount: currentAmount,
              publicKey: simulator.getAttribute('data-public-key')
            },
            iframe,
            choicesCache = {};

        simulator.innerHTML = '<div style="padding: 10px; text-align: center;">comprobando financiación...</div>';

        aplazame.simulator(simulatorParams.amount, function (_choices, _options) {
          var child = simulator.firstChild,
              now = new Date().getTime();

          choices = _choices;
          options = _options;

          _choices.$amount = simulatorParams.amount;
          choicesCache[simulatorParams.amount] = _choices;

          while( child ) {
            simulator.removeChild(child);
            child = simulator.firstChild;
          }

          // _.http( api.baseUrl + 'widgets/simulator/simulator.html?' + now ).then(function (response) {
            iframe = _.getIFrame({
              width: '100%'
            });

            iframes.push(iframe);
            iframe.src = api.baseUrl + 'widgets/simulator/simulator.html?' + now;
            simulator.appendChild(iframe);
            iframe.onerror = function () {
              simulator.innerHTML = '';
            };

            iframe.$$listeners = [];
            iframe.onload = function () {
              iframe.$$loaded = true;
              iframe.$$listeners.forEach(function (listener) {
                listener();
              });
            };

        }, function () {
          simulator.innerHTML = '';
          widgetForbidden = true;
          if( watchInterval ) {
            clearInterval(watchInterval);
          }
        });

        if( getAmount.priceSelector ) {
          var updateWidgetChoices = function () {
                console.log('updateWidgetChoices', choices, options);
                if( iframe.$$loaded && iframe.contentWindow ) {
                  console.log('updateWidgetChoices', choices, options, 'ok');
                  iframe.contentWindow.postMessage({
                    aplazame: 'simulator',
                    event: 'choices',
                    choices: choices,
                    options: options,
                    amount: currentAmount,
                    mobile: isMobile.matches
                  }, '*');
                } else {
                  iframe.$$listeners.push(updateWidgetChoices);
                }
              },
              onPriceChange = function (amount, previousAmount) {
                currentAmount = amount;

                console.log('priceChanged', amount, previousAmount);

                if( choicesCache[amount] ) {
                  updateWidgetChoices( choicesCache[amount] );
                } else {
                  if( iframe && iframe.contentWindow ) {
                    iframe.contentWindow.postMessage({
                      aplazame: 'simulator',
                      event: 'loading'
                    }, '*');
                  }
                  aplazame.simulator( amount, function (_choices) {
                    choicesCache[amount] = _choices;
                    if( amount === currentAmount ) {
                      choices = _choices;
                      updateWidgetChoices(_choices);
                    }
                  }, function (reason) {
                    console.log('error retrieving simulator choices', reason);
                  });
                }
              };

          var previousQty = getAmount.qtySelector ? getQty(getAmount.qtySelector) : 1;

          watchInterval = setInterval(function () {
            if( widgetForbidden ) {
              return;
            }
            var amount = getAmount(),
                qty = getAmount.qtySelector ? getQty(getAmount.qtySelector) : 1;

            if( amount && _.isNumber(amount) && amount !== currentAmount || qty !== previousQty ) {
              previousQty = qty;
              onPriceChange(amount, currentAmount);
            }
          }, 200);
        }

      });
    }
  }

  _.liveDOM.subscribe(widgetsLookup);

  _.ready(function () {
    widgetsLookup(document);
  });

};
