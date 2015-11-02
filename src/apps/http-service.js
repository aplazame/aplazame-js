'use strict';

var _ = require('../tools/tools');

_.onMessage('http', function (e, message) {

  _.http( message.url, {
    method: message.method,
    contentType: message.contentType,
    data: message.data,
    params: message.params
  } ).then(function (response) {
    e.source.postMessage({
      aplazame: 'http',
      event: 'response',
      result: 'success',
      response: _.http.plainResponse(response)
    }, '*');
  }, function (response) {
    e.source.postMessage({
      aplazame: 'http',
      event: 'response',
      result: 'error',
      response: _.http.plainResponse(response)
    }, '*');
  });

});

module.exports = { ready: true };
