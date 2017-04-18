
var _ = require('../../src/tools/tools'),
    each = Array.prototype.forEach,
    waitingForData;

function emitSize () {
  setTimeout(function () {
    parent.window.postMessage({
      aplazame: 'simulator',
      event: 'resize',
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }, '*');
  },1);
}

window.addEventListener('load', emitSize);
window.addEventListener('resize', emitSize);

function maxInstalments (prev, choice) {
  if( prev === null ) {
    return choice;
  } else {
    return choice.num_instalments > prev.num_instalments ? choice : prev;
  }
}

var main = document.getElementById('main'), currentMessage,
    widgetActions = {
      showInfo: function () {
        parent.window.postMessage({
          aplazame: 'modal',
          event: 'open',
          name: 'instalments',
          data: {
            size: 'lg',
            card: {
              className: 'modal-instalments-info'
            },
            template: require('../../.tmp/simulator/templates/modal-instalments.tmpl')({
              selectedChoice: currentMessage.$$choice,
              choices: currentMessage.choices,
              currency: currentMessage.currency,
              country: currentMessage.country,
              getAmount: _.getAmount,
              months: function (m) {
                return m > 1 ? 'meses' : 'mes';
              }
            })
          }
        }, '*');
      }
    },
    renderWidget = function () {
      _.removeClass(main, 'loading');
      var widgetSettings = currentMessage.options.widget;

      var tmplWidget;
      switch (widgetSettings.type) {
        case 'button2':
          tmplWidget = require('../../.tmp/simulator/widgets_v2/widget-button.tmpl');
          break;
        case 'number':
          tmplWidget = require('../../.tmp/simulator/widgets_v2/widget-number.tmpl');
          break;
        case 'plain':
          tmplWidget = require('../../.tmp/simulator/widgets_v2/widget-plain.tmpl');
          break;
        case 'select':
          tmplWidget = require('../../.tmp/simulator/widgets_v2/widget-select.tmpl');
          break;
        default:
          tmplWidget = require('../../.tmp/simulator/widgets_v1/widget-button.tmpl');
      }

      main.innerHTML = tmplWidget({
        getAmount: _.getAmount,
        getPrice: _.getPrice,
        brightness: _.brightness,
        choice: currentMessage.$$choice,
        choices: currentMessage.choices,
        options: currentMessage.options,
        amount: currentMessage.amount,
        currency: currentMessage.currency,
        preferredNumInstalments: 2,
        preferences: widgetSettings.preferences,
        logo: require('../../.tmp/simulator/templates/logo.tmpl')({}),
        isMobile: currentMessage.isMobile
      });
      emitSize();

      each.call( main.querySelectorAll('[data-action]'), function (element) {

        element.addEventListener('click', function (e) {
          var action = element.getAttribute('data-action');

          if( action !== undefined ) {
            e.preventDefault();
          }

          if( widgetActions[action] ) {
            widgetActions[action]();
          }
        });

      } );


      switch (widgetSettings.type) {
        case 'number':
          var min = 1;
          var max = 12;

          var decreaseNumInstalmentsElement = document.getElementById('decreaseNumInstalments');
          var increaseNumInstalmentsElement = document.getElementById('increaseNumInstalments');
          var preferredNumInstalmentsElement = document.getElementById('preferredNumInstalments');
          var amount = document.getElementById('amount');

          decreaseNumInstalmentsElement.addEventListener('click', function (e) {
            e.preventDefault();

            updateNumber(Number( preferredNumInstalmentsElement.textContent ) - 1)
          });

          increaseNumInstalmentsElement.addEventListener('click', function (e) {
            e.preventDefault();

            updateNumber(Number( preferredNumInstalmentsElement.textContent ) + 1)
          });

          var updateNumber = function (num_instalments) {
            if (num_instalments < min || num_instalments > max) {
              return;
            }
            if (num_instalments == min) {
              preferredNumInstalmentsElement.disabled = true;
              _.addClass(decreaseNumInstalmentsElement, 'apz-is-disabled');
            } else {
              preferredNumInstalmentsElement.disabled = false;
              _.removeClass(decreaseNumInstalmentsElement, 'apz-is-disabled');
            }
            if (num_instalments == max) {
              preferredNumInstalmentsElement.disabled = true;
              _.addClass(increaseNumInstalmentsElement, 'apz-is-disabled');
            } else {
              preferredNumInstalmentsElement.disabled = false;
              _.removeClass(increaseNumInstalmentsElement, 'apz-is-disabled');
            }

            preferredNumInstalmentsElement.textContent = num_instalments;
            amount.textContent = _.getPrice(currentMessage.choices[num_instalments - 1].amount, currentMessage.currency);
          };
          break;
      }
    },
    onMessage = {
      choices: function (message) {
        if( waitingForData ) {
          clearInterval(waitingForData);
        }
        currentMessage = message;
        currentMessage.$$choice = currentMessage.choices.reduce(maxInstalments, null);

        var price = document.getElementById('.aplazame-widget-button .amount .price');

        if( price ) {
          price.textContent = _.getAmount(currentMessage.$$choice.amount);
        } else {
          renderWidget();
        }

      },
      loading: function (_message) {
        _.addClass(main, 'loading');
      },
      abort: function (_message) {
        _.removeClass(main, 'loading');
      }
    };

_.onMessage('simulator', function (_e, message) {
  if( onMessage[message.event] ) {
    onMessage[message.event](message);
  }
});

var simulatorId = -1;

if( location.href.match(/[\?&]simulator=(\w+?)(\&|$)/) ) {
  simulatorId = Number(location.href.match(/[\?&]simulator=(\w+?)(\&|$)/)[1]);
}

function requireData () {
  parent.window.postMessage({
    aplazame: 'simulator',
    event: 'require.choices',
    simulatorId: simulatorId
  }, '*');
}

requireData();
