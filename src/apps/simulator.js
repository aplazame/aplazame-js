

import log  from '../tools/log';
import apiHttp  from '../core/api-http';
import _  from '../tools/tools';
import $q  from 'parole';

var cache = [],
    requestsCache = {};

export default function simulator (amount, _options, callback, onError) {

  if (!isNaN(amount)) {

    if( _.isFunction(_options) ) {
      onError = callback;
      callback = _options;
      _options = {};
    } else {
      _options = _options || {};
    }

    var data = {
      params: {
        amount: amount,
        currency: _options.currency || 'EUR',
        country: _options.country || 'ES',
      }
    },
    hash = amount + ',' + JSON.stringify(data);

    if( requestsCache[hash] ) {
      return requestsCache[hash].then(function (result) {
        (callback || _.noop)( result.choices, result.options );
      });
    }

    if( _options.view ) {
      data.params.view = _options.view;
    }
    if( _options.payday ) {
      data.params.payday = _options.payday;
    }
    if( _options.publicKey || data.public_key ) {
      data.public_key = _options.publicKey || data.public_key;
    }

    var foundCached = _.find(cache, function (item) {
      return item.amount === amount;
    });

    requestsCache[hash] = ( !_options.noCache && foundCached ? $q.resolve(foundCached) : apiHttp.get('instalment-plan-simulator', data ).then(function (response) {
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
          log('Aplazame[error]: Permiso denegado usando la clave pública', response.config.publicKey,
            'Revisa la configuración de Aplazame, para cualquier duda puedes escribir a hola@aplazame.com');
        } else if( _.key(response, 'data.error.fields.amount.0') ) {
          log('Aplazame[error]: ' + response.data.error.fields.amount[0]);
        } else if( _.key(response, 'data.error.message') ) {
          log('Aplazame[error]: ' + response.data.error.message);
        }
        (onError || _.noop)(response);
    });
  } else {
    log('Aplazame[error]: El importe debe tener el formato correcto, asegúrate de que es un número');
  }
  return requestsCache[hash];
}
