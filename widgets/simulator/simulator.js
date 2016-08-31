
var _ = require('../../src/tools/tools'),
    template = _.template,
    each = Array.prototype.forEach,
    waitingForData;

template.put('modal-instalments', require('../../.tmp/simulator/templates/modal-instalments') );
template.put('widget-button', require('../../.tmp/simulator/templates/widget-button') );

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
            card: _.template('modal-instalments', {
              selectedChoice: currentMessage.$$choice,
              choices: currentMessage.choices,
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
      main.innerHTML = _.template('widget-button', {
        getAmount: _.getAmount,
        brightness: _.brightness,
        choice: currentMessage.$$choice,
        options: currentMessage.options,
        amount: currentMessage.amount,
        preferences: currentMessage.options.widget.preferences,
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
      loading: function (message) {
        _.addClass(main, 'loading');
      },
      abort: function (message) {
        _.removeClass(main, 'loading');
      }
    };

_.onMessage('simulator', function (e, message) {
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

waitingForData = setInterval(requireData, 250);
