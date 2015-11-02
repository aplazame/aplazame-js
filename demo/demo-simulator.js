/* globals aplazame */

var _ = require('../src/tools/tools');

_.template.lookup();

var form = document.querySelector('form[data-submit="updateValues"]'),
    results = document.querySelector('.demo-simulator-results'),
    amount = form.querySelector('input[name="amount"]');

amount.value = localStorage.getItem('demo-simulator-amount');

function getCents(value) {
  var values = value.split(/[,.]/);
  return '' + ( Number( values[0] ? 100*values[0] : 0 ) + Number( values[1] || 0 ) );
}

_.listen(form, 'submit', function (e) {
  console.log('gogogo!');
  e.preventDefault();

  localStorage.setItem('demo-simulator-amount', amount.value);

  var currentAmount = getCents( amount.value );

  results.innerHTML = '<div class="loading">cargando...</div>';

  aplazame.simulator(currentAmount, function (choices) {
    console.log('simulator', currentAmount, choices);
    results.innerHTML = _.template('results', {
      getAmount: _.getAmount,
      choices: choices,
      months: function (m) {
        return m > 1 ? 'meses' : 'mes';
      }
    });
  });
});
