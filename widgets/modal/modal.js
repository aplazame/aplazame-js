var _ = require('../../src/utils');

var box = document.querySelector('.box');

function closeModal (e) {
  document.body.className = 'closing';

  setTimeout(function () {
    parent.window.postMessage({
      aplazame: 'modal',
      event: 'close'
    }, '*');
  }, 400);
}
_.listen(document.body, 'click', closeModal);

_.listen(box, 'click', function (e) {
  e.stopPropagation();
});
