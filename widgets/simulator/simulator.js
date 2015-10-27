
var _ = require('../../src/utils');

_.template.lookup();

_.template.put('modal-instalments', require('../../.tmp/simulator/templates/modal-instalments.js') )
_.template.put('modal-info', require('../../.tmp/simulator/templates/modal-info.js') )

var main = document.getElementById('main'),
    selectedChoice, choices = window.choices;

function getAmount (amount) {
  var prefix = '';

  if( amount < 0 ) {
    prefix = '-';
    amount = 0 - amount;
  }

  if( !amount ) {
    return '0,00';
  } else if( amount < 10 ) {
    return '0,0' + amount;
  } else if( amount < 100 ) {
    return '0,' + amount;
  }
  return prefix + ('' + amount).replace(/..$/, ',$&');
}

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

function maxInstalments (prev, choice) {
  if( prev === null ) {
    return choice;
  } else {
    return choice.num_instalments > prev.num_instalments ? choice : prev;
  }
}

setChoice( choices.reduce(maxInstalments, null) );

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
            choices: choices,
            getAmount: getAmount
          })
        }
      }, '*');
      break;
  }
}

function renderWidget () {
  main.innerHTML = _.template('widget', {
    getAmount: getAmount,
    choice: selectedChoice
  });
  emitSize();

  [].forEach.call( main.querySelectorAll('[data-action]'), function (element) {

    console.log('[data-action]', element);
    _.listen(element, 'click', function (e) {
      var action = element.getAttribute('data-action');

      console.log('data-action');

      if( action !== undefined ) {
        e.preventDefault();
      }

      runAction(action);
    });

  } );
}

renderWidget();

_.listen(window, 'message', function (e) {
  var message = e.data;


  if( message.aplazame === 'modal' && message.event === 'closed' ) {
    if( message.name === 'instalments' && message.resolved ) {
      console.log('simulator message', message, choices[ Number(message.value) ]);
      setChoice( choices[ Number(message.value) ] );
      renderWidget();
    }
  }
});
