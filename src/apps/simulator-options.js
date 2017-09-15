'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools'),
    optionsPromise = null,
    log = require('../tools/log');

function simulatorOptions (callback, onError) {

  optionsPromise = ((optionsPromise)?optionsPromise:apiHttp.get('instalment-plan-simulator', { params: { fields: 'options' } } )
    .then(function (response) {
      return response.data.options;
    }))
    .then(function (response){
      (callback || _.noop)( response );
      return response;
    }, function (response) {
      if( response.status === 403 ) {
        log('Aplazame[error]: Permiso denegado usando la clave pública', response.config.publicKey,
          'Revisa la configuración de Aplazame, para cualquier duda puedes escribir a hola@aplazame.com');
      } else if( _.key(response, 'data.error.message') ) {
        log('Aplazame[error]: ' + response.data.error.message);
      }
      (onError || _.noop)(response);
    });

  return optionsPromise;
}

module.exports = simulatorOptions;
