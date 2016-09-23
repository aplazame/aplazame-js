var _ = require('../../src/tools/tools'), Modal;

_.onMessage('modal', function (e, message) {
  if( message.event === 'content' ) {
    Modal = Modal || require('../../.bower_components/ng-aplazame/toolkit/modal')(_);

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
  _.scrollTop(0);
  parent.window.postMessage({ aplazame: 'modal', event: 'opened' }, '*');
});
