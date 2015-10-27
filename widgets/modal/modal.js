var _ = require('../../src/utils');

window.matchMedia = window.matchMedia || window.webkitMatchMedia || window.mozMatchMedia || window.msMatchMedia;

var modal = document.querySelector('.modal'),
    isMobile = window.matchMedia('( max-width: 767px )');

function closeModal (resolved, value) {
  modal.className = 'modal is-closing';

  setTimeout(function () {
    parent.window.postMessage({
      aplazame: 'modal',
      event: 'close',
      resolved: resolved,
      value: value
    }, '*');
  }, isMobile.matches ? 0 : 600 );
}

_.listen( modal.querySelector('.card'), 'click', function (e) {
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
    e.stopPropagation();
    closeModal(false, element.getAttribute('modal-reject') );
  });
});
