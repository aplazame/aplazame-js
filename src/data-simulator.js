var aplazame = require('./aplazame-core'),
    _ = require('./utils');

function widgetsLookup (element) {
  var simulators = element.querySelectorAll('[data-aplazame-simulator]');

  if( simulators.length ) {

    var http = require('./http'),
        iframes = [];

    _.listen(window, 'message', function (e) {
      var message = e.data;


      if( message.aplazame === 'simulator' ) {
        iframes.forEach(function (iframe) {
          if( iframe.contentWindow === e.source ) {
            iframe.style.height = message.data.height + 'px';
          }
        });
      }
    });

    [].forEach.call(simulators, function (simulator) {
      'use strict';

      if( _.elementData(simulator, 'checked') ) {
        return;
      }

      _.elementData(simulator, 'checked', true);

      var simulatorParams = {
        simulator: '[data-aplazame-simulator]',
        amount: simulator.getAttribute('data-amount'),
        publicKey: simulator.getAttribute('data-public-key')
      };

      simulator.innerHTML = 'cargando cuotas...';

      aplazame.simulator(simulatorParams.amount, function (choices) {
        var child = simulator.firstChild;
        while( child ) {
          simulator.removeChild(child);
          child = simulator.firstChild;
        }

        http( aplazame.getEnv('baseUrl') + 'widgets/simulator/simulator.html?' + new Date().getTime() ).then(function (response) {
          var iframe = _.getIFrame({
            width: '100%'
          });
          iframes.push(iframe);
          simulator.appendChild(iframe);
          _.writeIframe(iframe,
            response.data
              .replace(/<head\>/, '<head><base href="' + aplazame.baseUrl() + '" />')
              .replace(/\/\/ choices = \[\];/, 'choices = ' + JSON.stringify(choices) + ';')
          );
        }, function () {
          simulator.innerHTML = '';
        });
      }, function () {
        simulator.innerHTML = '';
      });

    });
    // aplazame.button(btnParams);
  }
}

require('./live-dom').subscribe(widgetsLookup);

_.ready(function () {
  widgetsLookup(document);

  aplazame.modal({
    title: 'hola',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  });
});
