'use strict';

module.exports = function (aplazame) {

  var _ = aplazame._,
      api = require('../core/api'),
      isMobile = window.matchMedia('( max-width: 767px )');

  function parsePrice (price) {
     var priceParts = ( '' + price ).match(/(\d+)([,.](\d+))?/);
     var amount = Number(priceParts[1])*100 + Number(priceParts[3]);
     return amount;
  }

  function getQty (qtyElement) {
    switch( qtyElement.nodeName.toLowerCase() ) {
      case 'input':
        return qtyElement.value;
      case 'select':
        return qtyElement.querySelector('option[selected]').value;
      default:
        return qtyElement.textContent;
    }
  }

  function amountGetter (widgetElement) {
    var priceSelector = widgetElement.getAttribute('data-price'),
        qtySelector = widgetElement.getAttribute('data-qty');

    return priceSelector ? function () {
      var qty = qtySelector ? getQty( document.querySelector(qtySelector) ) : 1,
          priceElement = document.querySelector( priceSelector );

      return qty * parsePrice( priceElement.value !== undefined ? priceElement.value : priceElement.textContent );
    } : function () {
      return widgetElement.getAttribute('data-amount');
    };
  }

  function widgetsLookup (element) {
    if( !element.querySelectorAll ) {
      return;
    }

    var simulators = element.querySelectorAll('[data-aplazame-simulator]');

    if( simulators.length ) {

      var iframes = [],
          choices = [],
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
        currentAmount = getAmount();

        var simulatorParams = {
              simulator: '[data-aplazame-simulator]',
              amount: currentAmount,
              publicKey: simulator.getAttribute('data-public-key')
            },
            iframe,
            choicesCache = {};

        console.log('simulator', simulator, getAmount() );

        simulator.innerHTML = '<div style="padding: 10px; text-align: center;">comprobando financiación...</div>';

        aplazame.simulator(simulatorParams.amount, function (_choices) {
          var child = simulator.firstChild,
              now = new Date().getTime();

          choices = _choices;
          _choices.$amount = simulatorParams.amount;
          choicesCache[simulatorParams.amount] = _choices;

          while( child ) {
            simulator.removeChild(child);
            child = simulator.firstChild;
          }

          _.http( api.baseUrl + 'widgets/simulator/simulator.html?' + now ).then(function (response) {
            iframe = _.getIFrame({
              width: '100%'
            });

            iframes.push(iframe);
            iframe.src = api.baseUrl + 'widgets/simulator/simulator.html?' + now;
            simulator.appendChild(iframe);

            // _.writeIframe(iframe,
            //   response.data.replace(/<head\>/, '<head><base href="' + api.baseUrl + 'widgets/simulator/" />')
            // );

            // _.writeIframe(iframe,
            //   response.data
            //     .replace(/<head\>/, '<head><base href="' + api.baseUrl + '" />')
            //     .replace(/\/\/ choices = \[\];/, 'choices = ' + JSON.stringify(choices) + ';')
            // );
          }, function () {
            simulator.innerHTML = '';
          });
        }, function () {
          simulator.innerHTML = '';
        });

        if( simulator.getAttribute('data-price') ) {
          var priceElement = document.querySelector( simulator.getAttribute('data-price') ),
              qtyElement = simulator.getAttribute('data-qty') && document.querySelector( simulator.getAttribute('data-qty') ),
              updateWidgetChoices = function (choices) {
                iframe.contentWindow.postMessage({
                  aplazame: 'simulator',
                  event: 'choices',
                  choices: choices,
                  amount: currentAmount,
                  mobile: isMobile.matches
                }, '*');
              },
              onPriceChange = function (e) {
                currentAmount = getAmount();
                if( choicesCache[currentAmount] ) {
                  updateWidgetChoices( choicesCache[currentAmount] );
                } else {
                  iframe.contentWindow.postMessage({
                    aplazame: 'simulator',
                    event: 'loading'
                  }, '*');
                  aplazame.simulator( currentAmount, function (_choices) {
                    choices = _choices;
                    choicesCache[currentAmount] = _choices;
                    updateWidgetChoices(_choices);
                  });
                }
              };

          priceElement.addEventListener('DOMSubtreeModified', onPriceChange);
          priceElement.addEventListener('change', onPriceChange);

          if( qtyElement ) {
            var previousQty = getQty(qtyElement);

            setInterval(function () {
              var qty = getQty(qtyElement);

              if( qty !== previousQty ) {
                previousQty = qty;
                onPriceChange();
              }
            }, 50);

            // qtyElement.addEventListener('DOMSubtreeModified', onPriceChange);
            // qtyElement.addEventListener('change', onPriceChange);
          }
        }

      });
      // aplazame.button(btnParams);
    }
  }

  _.liveDOM.subscribe(widgetsLookup);

  _.ready(function () {
    widgetsLookup(document);
  });

};
