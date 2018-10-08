var _ = require('../../src/tools/tools'), Modal;

_.onMessage('modal', function (_e, message) {
  if( message.event === 'content' ) {
    Modal = Modal || require('../../node_modules/ng-aplazame/toolkit/modal')(_);

    // console.log('modal', message);
    var m = new Modal(_.extend(message.content, {
      init: function (mEl) {
        _.each( mEl.querySelectorAll('[data-modal]'), function (dModal) {
          _.on(dModal, 'click', function () {
            m.close();
          });
        });
      },
      beforeClose: function () {
        parent.window.postMessage({
          aplazame: 'modal',
          event: 'closing'
        }, '*');
      },
      onClose: function () {
        parent.window.postMessage({
          aplazame: 'modal',
          event: 'close'
        }, '*');
      }
    }));
  }
});

_.ready(function () {
  _.scroll.top(0);
  parent.window.postMessage({ aplazame: 'modal', event: 'opened' }, '*');
});
