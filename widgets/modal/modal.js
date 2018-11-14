import _ from '../../src/tools/tools';
import _createModal from '../../node_modules/ng-aplazame/toolkit/modal';

var Modal;

_.onMessage('modal', function (_e, message) {
  if( message.event === 'content' ) {
    Modal = Modal || _createModal(_);

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
