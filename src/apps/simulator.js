'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools'),
    $q = require('parole'),
    cache = [],
    requestsCache = {};

function simulator (amount, _options, callback, onError) {

  if( _.isFunction(_options) ) {
    onError = callback;
    callback = _options;
    _options = {};
  } else {
    _options = _options || {};
  }

  var options = {
        params: {
          amount: amount
        }
      },
      hash = amount + ',' + JSON.stringify(options);

  if( requestsCache[hash] ) {
    return requestsCache[hash].then(function (result) {
      (callback || _.noop)( result.choices, result.options );
    });
  }

  if( _options.view ) {
    options.params.view = _options.view;
  }
  if( _options.payday ) {
    options.params.payday = _options.payday;
  }
  if( _options.publicKey ) {
    options.publicKey = _options.publicKey;
  }

  var foundCached = _.find(cache, function (item) {
    return item.amount === amount;
  });

  requestsCache[hash] = ( !_options.noCache && foundCached ? $q.resolve(foundCached) : apiHttp.get('instalment-plan-simulator', options ).then(function (response) {
      var result = {
        amount: amount,
        choices: response.data.choices[0].instalments,
        options: response.data.options,
        response: response
      };
      cache.push(result);

      return result;
    }) )
    .then(function (result) {
      (callback || _.noop)( result.choices, result.options );
      return result;
    }, function (response) {
      if( response.status === 403 ) {
        console.log('Aplazame[error]: Permiso denegado usando la clave pública: ' + response.config.publicKey);
        console.info('Revisa la configuración de Aplazame, para cualquier duda puedes escribir a hola@aplazame.com');
      } else if( _.key(response, 'data.error.fields.amount.0') ) {
        console.log('Aplazame[error]: ' + response.data.error.fields.amount[0]);
      } else if( _.key(response, 'data.error.message') ) {
        console.log('Aplazame[error]: ' + response.data.error.message);
      }
      (onError || _.noop)(response);
    });

  return requestsCache[hash];
}

module.exports = simulator;
