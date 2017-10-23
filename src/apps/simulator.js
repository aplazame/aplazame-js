'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools'),
    log = require('../tools/log'),
    requests_cache = {};

function simulator (params, options) {
  options = options || {};

  var hash = JSON.stringify(params);
  if( !options.noCache && requests_cache[hash] ) return requests_cache[hash];

  var request = apiHttp.get('instalment-plan-simulator', { params: params })
    .then(function (response) {
      return {
        params: params,
        choices: response.data.choices[0].instalments,
        options: response.data.options,
        response: response
      };
    }, function (response) {
      if( response.status === 403 ) {
        log('Aplazame[error]: Permiso denegado usando la clave pública', response.config.publicKey,
          'Revisa la configuración de Aplazame, para cualquier duda puedes escribir a hola@aplazame.com');
      } else if( _.key(response, 'data.error.fields.amount.0') ) {
        log('Aplazame[error]: ' + response.data.error.fields.amount[0]);
      } else if( _.key(response, 'data.error.message') ) {
        log('Aplazame[error]: ' + response.data.error.message);
      }
      throw response;
    });

  if( !options.noCache ) requests_cache[hash] = request;

  return request;
}

module.exports = simulator;
