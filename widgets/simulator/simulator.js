
var _ = require('../../src/tools/tools'),
    choices = [];

_.template.lookup();

_.template.put('modal-instalments', require('../../.tmp/simulator/templates/modal-instalments.js') );
_.template.put('modal-info', require('../../.tmp/simulator/templates/modal-info.js') );

var main = document.getElementById('main'),
    selectedChoice, choices = window.choices;

function emitSize () {
  setTimeout(function () {
    parent.window.postMessage({
      aplazame: 'simulator',
      event: 'resize',
      data: {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      }
    }, '*');
  },1);
}

_.listen(window, 'load', emitSize);
_.listen(window, 'resize', emitSize);

function showChoices () {
  main.innerHTML = _.template('choices', { selectedChoice: selectedChoice, choices: choices });
  emitSize();
}

function setChoice (choice) {
  selectedChoice = choice;
  return choice;
}

function runAction (action, data) {
  switch( action ) {
    case 'showChoices':
      showChoices();
      break;
    case 'showInfo':
      parent.window.postMessage({
        aplazame: 'modal',
        event: 'open',
        name: 'info',
        data: {
          cardClass: 'hola-adios',
          card: _.template('modal-info', { creditThreshold: 100 })
        }
      }, '*');
      break;
    case 'changeInstalments':
      parent.window.postMessage({
        aplazame: 'modal',
        event: 'open',
        name: 'instalments',
        data: {
          cardClass: 'hola-adios',
          card: _.template('modal-instalments', {
            selectedChoice: selectedChoice,
            choices: choices,
            getAmount: _.getAmount,
            months: function (m) {
              return m > 1 ? 'meses' : 'mes';
            }
          })
        }
      }, '*');
      break;
  }
}

function maxInstalments (prev, choice) {
  if( prev === null ) {
    return choice;
  } else {
    return choice.num_instalments > prev.num_instalments ? choice : prev;
  }
}

var isMobile,
    renderWidget = function (mobile) {
      isMobile = mobile === undefined || mobile;

      _.removeClass(main, 'loading');
      main.innerHTML = _.template('widget', {
        getAmount: _.getAmount,
        choice: selectedChoice,
        isMobile: isMobile
      });
      emitSize();

      [].forEach.call( main.querySelectorAll('[data-action]'), function (element) {

        _.listen(element, 'click', function (e) {
          var action = element.getAttribute('data-action');

          if( action !== undefined ) {
            e.preventDefault();
          }

          runAction(action);
        });

      } );
    },
    setMobile = function (mobile) {
      if( isMobile === undefined || isMobile !== mobile ) {
        isMobile = mobile;

        if( isMobile ) {
          _.addClass( document.querySelector('.widget-item-instalments'), 'mobile' );
        } else {
          _.removeClass( document.querySelector('.widget-item-instalments'), 'mobile' );
        }
      }
    },
    messageSimulator = {
      choices: function (message) {
        choices = message.data;
        setChoice( choices.reduce(maxInstalments, null) );
        renderWidget(message.mobile);
      },
      mobile: function (message) {
        setMobile(message.mobile);
      },
      loading: function (message) {
        _.addClass(main, 'loading');
      }
    };

_.onMessage('simulator', function (e, message) {
  if( messageSimulator[message.event] ) {
    messageSimulator[message.event](message);
  }
});

parent.window.postMessage({
  aplazame: 'simulator',
  event: 'require:choices'
}, '*');
