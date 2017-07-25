
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
    tmplModalInstalments = require('../../.tmp/simulator/templates/modal-instalments.tmpl'),
    tmplWidgetV2 = require('../../.tmp/simulator/templates/widget-v2.tmpl' ),
    tmplWidgetV3 = require('../../.tmp/simulator/templates/widget-v3.tmpl' ),
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
            template: tmplModalInstalments({
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
      // var min = currentMessage.choices[0].num_instalments;
      var max = currentMessage.choices[currentMessage.choices.length - 1].num_instalments;

      var tmplWidget = widgetSettings.preferences.version == 3 ? tmplWidgetV3 : tmplWidgetV2;

      var decimals_separator = currentMessage.currency === 'EUR' ? ',' : '.';
      var group_separator = currentMessage.currency === 'EUR' ? '.' : ',';

      // widgetSettings.type = 'select';
      // widgetSettings.type = 'big-button';

      main.innerHTML = tmplWidget({
        $widget: widgetSettings,
        preferences: widgetSettings.preferences,
        getAmount: function (amount, _decimals_separator, _group_separator) {
          return _.getAmount(amount, _decimals_separator || decimals_separator, _group_separator || group_separator);
        },
        getPrice: _.getPrice,
        brightness: _.brightness,
        lighten: _.lightenHEX,
        choice: currentMessage.$$choice,
        choices: currentMessage.choices,
        options: currentMessage.options,
        amount: currentMessage.amount,
        currency: currentMessage.currency,
        selectedNumInstalments: max,
        logo: require('../../.tmp/simulator/templates/logo.tmpl')({}),
        isMobile: currentMessage.isMobile,
      });
      emitSize();

      each.call( main.querySelectorAll('[data-action]'), function (element) {

        element.addEventListener('click', function (e) {
          var action = element.getAttribute('data-action');

          if( action !== undefined ) e.preventDefault();
          if( widgetActions[action] ) widgetActions[action]();
        });

      } );


      // switch (widgetSettings.type) {
      //   case 'number':
      //     var decreaseNumInstalmentsElement = document.getElementById('decreaseNumInstalments');
      //     var increaseNumInstalmentsElement = document.getElementById('increaseNumInstalments');
      //     var selectedNumInstalmentsElement = document.getElementById('selectedNumInstalments');
      //     var amount = document.getElementById('amount');
      //
      //     decreaseNumInstalmentsElement.addEventListener('click', function (e) {
      //       e.preventDefault();
      //       e.stopPropagation();
      //
      //       updateNumber(Number( selectedNumInstalmentsElement.textContent ) - 1)
      //     });
      //
      //     increaseNumInstalmentsElement.addEventListener('click', function (e) {
      //       e.preventDefault();
      //       e.stopPropagation();
      //
      //       updateNumber(Number( selectedNumInstalmentsElement.textContent ) + 1)
      //     });
      //
      //     var updateNumber = function (num_instalments) {
      //       if (num_instalments < min || num_instalments > max) {
      //         return;
      //       }
      //       if (num_instalments == min) {
      //         selectedNumInstalmentsElement.disabled = true;
      //         _.addClass(decreaseNumInstalmentsElement, 'apz-is-disabled');
      //       } else {
      //         selectedNumInstalmentsElement.disabled = false;
      //         _.removeClass(decreaseNumInstalmentsElement, 'apz-is-disabled');
      //       }
      //       if (num_instalments == max) {
      //         selectedNumInstalmentsElement.disabled = true;
      //         _.addClass(increaseNumInstalmentsElement, 'apz-is-disabled');
      //       } else {
      //         selectedNumInstalmentsElement.disabled = false;
      //         _.removeClass(increaseNumInstalmentsElement, 'apz-is-disabled');
      //       }
      //
      //       selectedNumInstalmentsElement.textContent = num_instalments;
      //       var selectedChoice = _.find(currentMessage.choices, function (choice) {
      //         return choice.num_instalments == num_instalments;
      //       });
      //       amount.textContent = _.getPrice(selectedChoice.amount, currentMessage.currency);
      //     };
      //     break;
      // }
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
