var _ = require('../../src/utils');

var modal = document.querySelector('.modal');

function closeModal (resolved, value) {
  modal.className = 'modal is-closing';

  setTimeout(function () {
    parent.window.postMessage({
      aplazame: 'modal',
      event: 'close',
      resolved: resolved,
      value: value
    }, '*');
  }, 600);
}
_.listen(document.body, 'click', function () {
  closeModal('dismiss', null);
});

[].forEach.call( document.querySelectorAll('[modal-resolve]'), function (element) {
  _.listen( element, 'click', function (e) {
    e.stopPropagation();
    closeModal(true, element.getAttribute('modal-resolve') );
  });
});

[].forEach.call( document.querySelectorAll('[modal-reject]'), function (element) {
  _.listen( element, 'click', function (e) {
    e.stopPropagation();
    closeModal(false, element.getAttribute('modal-reject') );
  });
});
