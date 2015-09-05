
var _ = require('../../utils');

_.template.lookup();

var main = document.getElementById('main'),
    choice, choices = window.choices;

function showText () {
  main.innerHTML = _.template('info', choice);
}

function showChoices () {
  main.innerHTML = _.template('choices', { choices: choices });
}

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

function setChoice (data) {
  choice = _.extend({ getAmount: getAmount }, data );
  return choice;
}

setChoice( choices.reduce(function (prev, choice) {
  if( prev === null ) {
    return choice;
  } else {
    return choice.num_instalments > prev.num_instalments ? choice : prev;
  }
}, null) );

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
      setChoice(choices[ Number(e.target.getAttribute('data-choice')) ]);
      showText();
      break;
  }
});

showText();
