
import $live from 'live-dom';

export default function (aplazame) {

  $live('[data-aplazame-button]', function (btn) {
    var btnId = btn.getAttribute('data-aplazame-button'),
        btnParams = {
          selector: '[data-aplazame-button' + ( btnId ? ('="' + btnId + '"') : '' ) + '], [data-aplazame-button-info' + ( btnId ? ('="' + btnId + '"') : '' ) + ']',
          parent: btn.getAttribute('data-parent'),
          public_key: btn.getAttribute('data-public-key'),
          amount: btn.getAttribute('data-amount'),
          currency: btn.getAttribute('data-currency') || undefined,
          sandbox: btn.hasAttribute('data-sandbox') ? btn.getAttribute('data-sandbox') === 'true' : undefined,
          country: btn.getAttribute('data-country') || undefined
        };

    aplazame.button(btnParams);
  });

}
