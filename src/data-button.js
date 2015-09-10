var aplazame = require('./aplazame'),
    _ = require('./utils');

function buttonsLookup () {
  var btns = document.querySelectorAll('[data-aplazame-button]');

  if( btns.length ) {

    [].forEach.call(btns, function (btn) {
      if( _.elementData(btn, 'checked') ) {
        return;
      }
      _.elementData(btn, 'checked', true);
      
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

require('./live-dom').subscribe(buttonsLookup);

_.ready(function () {
  buttonsLookup();
});
