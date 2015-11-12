'use strict';

var _ = require('../tools/tools');

_.onMessage('http', function (e, message) {

  function processResponse(result) {

    return function (response) {
      
      var responsep = _.http.plainResponse(response);
      responsep.config = message;

      e.source.postMessage({
        aplazame: 'http',
        event: 'response',
        result: result,
        response: responsep
      }, '*');
    };
  }

  _.http( message.url, {
    method: message.method,
    contentType: message.contentType,
    data: message.data,
    params: message.params
  } ).then(processResponse('success'), processResponse('error'));

});

module.exports = { ready: true };
