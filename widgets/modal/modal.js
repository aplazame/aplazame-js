var _ = require('../../src/utils');

var card = document.querySelector('.card'),
    modal = document.querySelector('.modal-wrapper');

function closeModal (e) {
  modal.className = 'modal-wrapper is-closing';

  setTimeout(function () {
    parent.window.postMessage({
      aplazame: 'modal',
      event: 'close'
    }, '*');
  }, 600);
}
_.listen(document.body, 'click', closeModal);

_.listen(card, 'click', function (e) {
  e.stopPropagation();
});
