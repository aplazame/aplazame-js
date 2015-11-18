'use strict';

module.exports = function (aplazame) {

  var _ = aplazame._,
      api = require('../core/api');

  function widgetsLookup (element) {
    if( !element.querySelectorAll ) {
      return;
    }

    var simulators = element.querySelectorAll('[data-aplazame-simulator]'),
        isMobile = window.matchMedia('( max-width: 768px )');

    if( simulators.length ) {

      var iframes = [],
          choices = [];

      _.listen(window, 'message', function (e) {
        var message = e.data;

        if( !e.used && message.aplazame === 'simulator' ) {
          e.used = true;

          switch (message.event) {
            case 'resize':
              iframes.forEach(function (iframe) {
                if( iframe.contentWindow === e.source ) {
                  iframe.style.height = message.data.height + 'px';
                }
              });
              break;
            case 'require:choices':
              e.source.postMessage({
                aplazame: 'simulator',
                event: 'choices',
                data: choices,
                mobile: isMobile.matches
              }, '*');
              break;
          }
        }
      });

      _.listen(window, 'resize', function (e) {

        iframes.forEach(function (iframe) {

          iframe.contentWindow.postMessage({
            aplazame: 'simulator',
            event: 'mobile',
            mobile: isMobile.matches
          }, '*');

        });

      });

      [].forEach.call(simulators, function (simulator) {

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

        aplazame.simulator(simulatorParams.amount, function (_choices) {
          var child = simulator.firstChild,
              now = new Date().getTime();

          choices = _choices;

          while( child ) {
            simulator.removeChild(child);
            child = simulator.firstChild;
          }

          _.http( api.baseUrl + 'widgets/simulator/simulator.html?' + now ).then(function (response) {
            var iframe = _.getIFrame({
              width: '100%'
            });

            iframes.push(iframe);
            // iframe.src = api.baseUrl + 'widgets/simulator/simulator.html?' + now;
            simulator.appendChild(iframe);

            _.writeIframe(iframe,
              response.data.replace(/<head\>/, '<head><base href="' + api.baseUrl + 'widgets/simulator/" />')
            );

            // _.writeIframe(iframe,
            //   response.data
            //     .replace(/<head\>/, '<head><base href="' + api.baseUrl + '" />')
            //     .replace(/\/\/ choices = \[\];/, 'choices = ' + JSON.stringify(choices) + ';')
            // );
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

  _.liveDOM.subscribe(widgetsLookup);

  _.ready(function () {
    widgetsLookup(document);
  });

};
