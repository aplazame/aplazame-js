

import _ from '../tools/tools';
import http from 'http-rest/browser';

function processResponse(result, message, messageSrc, started) {

  return function (response) {

    var responsep = http.plainResponse(response);
    responsep.config = message;

    messageSrc.postMessage({
      aplazame: 'http',
      event: 'response',
      started: started,
      elapsed: _.now() - started,
      result: result,
      response: responsep
    }, '*');
  };
}

export default function () {
  _.onMessage('http', function (e, message) {

    var started = _.now();

    http( message.url, message )
    .then(
      processResponse('success', message, e.source, started),
      processResponse('error', message, e.source, started)
    );

  });
}


// module.exports = { ready: true };
