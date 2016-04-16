var _ = require('../../src/tools/tools');

window.matchMedia = window.matchMedia || window.webkitMatchMedia || window.mozMatchMedia || window.msMatchMedia;

var modal, card,
    isMobile = window.matchMedia('( max-width: 767px )');

_.ready(function () {
  var _m = document.querySelector('.modal');
  _m.className = _m.className.replace(' is-opening', '');
}, 600);

function closeModal (resolved, value) {
  modal.className += ' is-closing';

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
  }, isMobile.matches ? 0 : 500 );
}

function initListeners () {
  card.addEventListener('click', function (e) {
    e.stopPropagation();
  });
  card.addEventListener('touchstart', function (e) {
    e.stopPropagation();
  });
  card.addEventListener('touchend', function (e) {
    e.stopPropagation();
  });

  document.body.addEventListener('click', function () {
    closeModal(false);
  });

  var touched;
  document.body.addEventListener('touchstart', function (e) {
    touched = { x: e.pageX, y: e.pageY };
  });
  document.body.addEventListener('touchend', function (e) {
    if( e.pageX === touched.x && e.pageY === touched.y ) {
      closeModal(false);
    }
  });

  [].forEach.call( document.querySelectorAll('[modal-resolve]'), function (element) {
    element.addEventListener('click', function (e) {
      closeModal(true, element.getAttribute('modal-resolve') );
    });
  });

  [].forEach.call( document.querySelectorAll('[modal-reject]'), function (element) {
    element.addEventListener( 'click', function (e) {
      // e.stopPropagation();
      closeModal(false, element.getAttribute('modal-reject') );
    });
  });

  [].forEach.call( document.querySelectorAll('[data-widget="active-group"]'), function (element) {

    var currentChoice;

    [].forEach.call( document.querySelectorAll('[data-widget="active-toggle"]'), function (toggle) {
      toggle.addEventListener('click', function (e) {
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
    var container = document.querySelector('.modals-container');
    _.tmpClass(container, 'opening-wrapper', isMobile.matches ? 0 : 600 );
    container.innerHTML = message.content.card;

    parent.window.postMessage({ aplazame: 'modal', event: 'opening' }, '*');

    modal = document.querySelector('.modal');
    card = document.querySelector('.card');

    _.addClass(modal, 'is-opening');

    initListeners();
  }
});

_.ready(function () {
  parent.window.postMessage({ aplazame: 'modal', event: 'opened' }, '*');
});
