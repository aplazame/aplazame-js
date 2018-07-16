'use strict';

var log = require('../tools/log');

module.exports = function (_, script) {
  log('data-aplazame', script );

  var data_aplazame = script.getAttribute('data-aplazame');
  var params = _.deserialize(script.src.split(/[?#]/)[1] || '');
      // options = script.src && (/[?#]/.test(script.src) ? _.deserialize(script.src.match(/(.*?)[?#](.*)/)[2]) : {}) || {};

  if( data_aplazame ) {

    if( /:/.test(data_aplazame) ) {
      data_aplazame.split(',').forEach(function (part) {
        var keys = part.match(/^([^:]+):(.*)/);
        params[_.toUnderscoreCase(keys[1].trim())] = keys[2].trim();
      });

      log('data-aplazame: params', '"' + data_aplazame + '"' );

      if( !params.public_key ) {
        throw new Error('public_key missing in data-aplazame');
      }
    } else {
      params.public_key = data_aplazame;
    }
  }

  if( script.hasAttribute('data-api-host') ) {
    params.host = script.getAttribute('data-api-host');
  }

  if( script.hasAttribute('data-sandbox') ) {
    params.sandbox = script.getAttribute('data-sandbox');
  }

  if( script.hasAttribute('data-static-url') ) {
    params.static_url = script.getAttribute('data-static-url');
  }

  if( script.hasAttribute('data-checkout-url') ) {
    params.checkout_url = script.getAttribute('data-checkout-url');
  }

  if( script.hasAttribute('data-callback') ) {
    params.callback = script.getAttribute('data-callback');
  }

  if( params.sandbox ) {
    params.sandbox = params.sandbox === 'true' || params.sandbox === '1';
  }

  log('data-aplazame: params', params );

  return params;
};
