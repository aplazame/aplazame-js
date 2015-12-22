'use strict';

module.exports = function (aplazame) {
  var _ = aplazame._;

  function buttonsLookup (element) {
    if( !element.querySelectorAll ) {
      return;
    }
    var btns = element.querySelectorAll('[data-aplazame-button]');

    if( btns.length ) {

      [].forEach.call(btns, function (btn) {
        var btnId = btn.getAttribute('data-aplazame-button'),
            btnParams = {
              selector: '[data-aplazame-button' + ( btnId ? ('=\"' + btnId + '\"') : '' ) + '], [data-aplazame-button-info' + ( btnId ? ('=\"' + btnId + '\"') : '' ) + ']',
              parent: btn.getAttribute('data-parent'),
              publicKey: btn.getAttribute('data-public-key'),
              amount: btn.getAttribute('data-amount'),
              currency: btn.getAttribute('data-currency') || undefined,
              sandbox: btn.getAttribute('data-sandbox') ? btn.getAttribute('data-sandbox') === 'true' : undefined,
              country: btn.getAttribute('data-country') || undefined
            };

        aplazame.button(btnParams);
      });

    }
  }

  _.liveDOM.subscribe(buttonsLookup);

  _.ready(function () {
    buttonsLookup(document);
  });

};
