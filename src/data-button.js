var aplazame = require('./aplazame'),
    _ = require('./utils');

_.ready(function () {
  var btn = document.querySelector('[data-aplazame-button]');

  if( btn ) {
    var btnParams = {
      button: '[data-aplazame-button]',
      description: '[data-aplazame-button-info]',
      parent: btn.getAttribute('data-parent'),
      publicKey: btn.getAttribute('data-public-key'),
      amount: btn.getAttribute('data-amount'),
      currency: btn.getAttribute('data-currency') || undefined,
      sandbox: btn.getAttribute('data-sandbox') ? btn.getAttribute('data-sandbox') === 'true' : undefined,
      country: btn.getAttribute('data-country') || undefined
    };

    aplazame.button(btnParams);
  }
});
