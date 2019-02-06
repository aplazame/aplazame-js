
import $live from 'live-dom';

export default function (aplazame) {

  $live('[data-aplazame-button]', function (btn_el) {
    var btnId = btn_el.getAttribute('data-aplazame-button'),
        _attr_id = btnId ? ('="' + btnId + '"') : '',
        _checkout_type = btn_el.getAttribute('data-type'),
        btnParams = {
          selector: typeof _checkout_type === 'string' ?
            ('[data-aplazame-button' + _attr_id + '][data-type="' + _checkout_type + '"], [data-aplazame-button-info' + _attr_id + '][data-type="' + _checkout_type + '"]') :
            ('[data-aplazame-button' + _attr_id + ']:not([data-type]), [data-aplazame-button-info' + _attr_id + ']:not([data-type])'),
          parent: btn_el.getAttribute('data-parent'),
          public_key: btn_el.getAttribute('data-public-key'),
          amount: btn_el.getAttribute('data-amount'),
          checkout_type: _checkout_type || 'instalments',
          currency: btn_el.getAttribute('data-currency') || undefined,
          sandbox: btn_el.hasAttribute('data-sandbox') ? btn_el.getAttribute('data-sandbox') === 'true' : undefined,
          country: btn_el.getAttribute('data-country') || undefined
        };

    aplazame.button(btnParams);
  });

}
