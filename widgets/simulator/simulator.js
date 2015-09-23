
var _ = require('../../src/utils');

_.template.lookup();

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

function showText () {
  main.innerHTML = _.template('info', {
    getAmount: getAmount,
    choice: selectedChoice
  });
  emitSize();
}

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

_.listen(main, 'click', function (e) {
  var action = e.target.getAttribute('data-action');
  if( action !== undefined ) {
    e.preventDefault();
  }

  switch( action ) {
    case 'showChoices':
      showChoices();
      break;
    case 'selectChoice':
      setChoice( choices[ Number(e.target.getAttribute('data-choice')) ] );
      showText();
      break;
    case 'showInfo':
      parent.window.postMessage({
        aplazame: 'modal',
        event: 'open',
        data: {
          title: 'Con Aplazame puedes comprar ahora y pagar después.',
          message: 'Elige los meses y la cuota que mejor que convenga.' +
'<br/>Aplazame es muy fácil de usar.</p>' +
'<ul><li>Ofrecemos la financiación al consumo más barata de España.</li>' +
'<li>Sin costes ocultos ni letra pequeña.</li>' +
'<li>Tomamos la decisión de manera instantánea, sin papeleos ni esperas.</li>' +
'<li>Disponible para compras superiores a XX€.</li>' +
'<li>¿Tienes alguna duda? Llámanos al 91 XXX o escríbenos un email a hola@aplazame.com.</li></ul>'
        }
      }, '*');
      break;
  }
});

showText();
