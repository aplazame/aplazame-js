'use strict';

var _ = require('../tools/tools'),
    http = require('http-browser');

function processResponse(result, message, messageSrc, started) {

  return function (response) {

    var responsep = http.plainResponse(response);
    responsep.config = message;

    messageSrc.postMessage({
      aplazame: 'http',
      event: 'response',
      started: started,
      elapsed: Date.now() - started,
      result: result,
      response: responsep
    }, '*');
  };
}

_.onMessage('http', function (e, message) {

  var started = Date.now();

  http( message.url, message )
    .then(
      processResponse('success', message, e.source, started),
      processResponse('error', message, e.source, started)
    );

});

module.exports = { ready: true };
