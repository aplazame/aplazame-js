'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools'),
    Money = require('../tools/money'),
    requestsCache = {},
    log = require('../tools/log');

function simulator (money, _options) {
  _options = _options || {};

  if( typeof money === 'number' ) money = new Money(money, 'EUR');
  else if( !(money instanceof Money) ) {
    if( !money.amount ) throw new Error('money should be a number or a Money object like');
    else money = new Money(money.amount, money.currency);
  }

  var options = {
    params: {
      amount: money.amount,
      currency: money.currency,
    }
  };

  if( _options.view ) {
    options.params.view = _options.view;
  }
  if( _options.payday ) {
    options.params.payday = _options.payday;
  }

  var hash = JSON.stringify(options);
  if( !_options.noCache && requestsCache[hash] ) {
    return requestsCache[hash];
  }

  var request = apiHttp.get('instalment-plan-simulator', options )
    .then(function (response) {
      return {
        money: money,
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

  if ( !_options.noCache ) {
    requestsCache[hash] = request;
  }

  return request;
}

module.exports = simulator;
