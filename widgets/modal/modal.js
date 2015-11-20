var _ = require('../../src/tools/tools');

window.matchMedia = window.matchMedia || window.webkitMatchMedia || window.mozMatchMedia || window.msMatchMedia;

var modal, card,
    isMobile = window.matchMedia('( max-width: 767px )');

function closeModal (resolved, value) {
  modal.className = modal.className.replace(' is-opening', '') + ' is-closing';

  parent.window.postMessage({
    aplazame: 'modal',
    event: 'closing'
  }, '*');

  if( resolved ) {
    parent.window.postMessage({
      aplazame: 'modal',
      event: 'resolved',
      value: value
    }, '*');
  }

  setTimeout(function () {
    parent.window.postMessage({
      aplazame: 'modal',
      event: 'close'
    }, '*');
  }, isMobile.matches ? 0 : 600 );
}

function initListeners () {
  _.listen( card, 'click', function (e) {
    e.stopPropagation();
  });

  _.listen(document.body, 'click', function () {
    closeModal(false);
  });

  [].forEach.call( document.querySelectorAll('[modal-resolve]'), function (element) {
    _.listen( element, 'click', function (e) {
      closeModal(true, element.getAttribute('modal-resolve') );
    });
  });

  [].forEach.call( document.querySelectorAll('[modal-reject]'), function (element) {
    _.listen( element, 'click', function (e) {
      // e.stopPropagation();
      closeModal(false, element.getAttribute('modal-reject') );
    });
  });

  [].forEach.call( document.querySelectorAll('[data-widget="active-group"]'), function (element) {

    var currentChoice;

    [].forEach.call( document.querySelectorAll('[data-widget="active-toggle"]'), function (toggle) {
      _.listen( toggle, 'click', function (e) {
        if( currentChoice ) {
          _.removeClass(currentChoice, 'active');
        }
        _.addClass(toggle, 'active');
        currentChoice = toggle;
      });
    });

  });
}

_.onMessage('modal', function (e, message) {
  if( message.event === 'content' ) {
    document.body.innerHTML = message.content.card;
    modal = document.querySelector('.modal');
    card = document.querySelector('.card');
    modal.className += ' is-opening';
    // if( message.modalClass ) {
    //   modal.className = modal.className + ' ' + message.modalClass;
    // }
    initListeners();
  }
});

parent.window.postMessage({ aplazame: 'modal', event: 'opened' }, '*');
