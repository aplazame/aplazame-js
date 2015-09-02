var aplazame = require('./aplazame'),
    simulators = document.querySelectorAll('[data-aplazame-simulator]');

if( simulators.length ) {

  var http = require('./http'),
      _ = require('./utils');

  [].forEach.call(simulators, function (simulator) {
    'use strict';

    var simulatorParams = {
      simulator: '[data-aplazame-simulator]',
      amount: simulator.getAttribute('data-amount'),
      publicKey: simulator.getAttribute('data-public-key')
    };

    simulator.innerHTML = 'cargando...';

    aplazame.simulator(simulatorParams.amount, function (choices) {
      var child = simulator.firstChild;
      while( child ) {
        simulator.removeChild(child);
        child = simulator.firstChild;
      }
      console.log('simulator', simulatorParams, choices);

      http('dist/widgets/simulator/simulator.html').then(function (response) {
        var iframe = _.getIFrame();
        simulator.appendChild(iframe);
        _.writeIframe(iframe, response.data.replace(/\/\/ choices = \[\];/, 'choices = ' + JSON.stringify(choices, null, '\t') + ';') );
      });
    });

  });
  // aplazame.button(btnParams);
} else {
  console.log('not simulator found!');
}
