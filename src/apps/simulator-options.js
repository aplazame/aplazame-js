'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools'),
    optionsPromise = null,
    log = require('../tools/log');

function simulatorOptions (callback, onError) {

  optionsPromise = (optionsPromise)?optionsPromise:apiHttp.get('instalment-plan-simulator', { params: { fields: 'options' } } )
    .then(function (response) {
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
  //Temp value
  optionsPromise = {
    d_deferred_rate: 0.35,
    annual_equivalent: 2450,
    calendar: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    downpayment_amount:0,
    downpayment_m:1,
    max_credit_amount : 250000,
    num_instalments : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  };

  return optionsPromise;
}

module.exports = simulatorOptions;
