'use strict';

module.exports = function (_, script) {
  var dataAplazame = script.getAttribute('data-aplazame'),
      options = script.src && (/[?#]/.test(script.src) ? _.deserialize(script.src.match(/(.*?)[?#](.*)/)[2]) : {}) || {};

  if( dataAplazame ) {

    if( /:/.test(dataAplazame) ) {
      dataAplazame.split(',').forEach(function (part) {
        var keys = part.match(/^([^:]+):(.*)/);
        options[keys[1].trim()] = keys[2].trim();
      });

      if( !options.publicKey ) {
        throw new Error('publicKey missing in data-aplazame');
      }
    } else {
      options.publicKey = dataAplazame;
    }
  }

  if( script.getAttribute('data-api-host') ) {
    options.host = script.getAttribute('data-api-host');
  }

  if( script.getAttribute('data-sandbox') ) {
    options.sandbox = script.getAttribute('data-sandbox');
  }

  if( script.getAttribute('data-static-url') ) {
    options.static_url = script.getAttribute('data-static-url');
  }

  if( script.getAttribute('data-checkout-url') ) {
    options.checkout_url = script.getAttribute('data-checkout-url');
  }

  if( script.getAttribute('data-callback') ) {
    options.callback = script.getAttribute('data-callback');
  }

  if( options.sandbox ) {
    options.sandbox = options.sandbox === 'true' || options.sandbox === '1';
  }

  return options;
};
