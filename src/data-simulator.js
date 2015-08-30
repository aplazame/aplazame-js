var btns = document.querySelectorAll('[data-aplazame-simulator]');

if( btns.length ) {

  [].forEach.call(btns, function (btn) {
    var btnParams = {
      simulator: '[data-aplazame-simulator]',
      amount: btn.getAttribute('data-amount'),
      publicKey: btn.getAttribute('data-public-key')
    };

    btn.innerHTML = 'cargando...';

    aplazame.simulator(btnParams.amount, function (response) {
      console.log('simulator', btnParams, response);
      btn.innerHTML = 'loaded';
    });

  });
  // aplazame.button(btnParams);
} else {
  console.log('not simulator found!');
}
