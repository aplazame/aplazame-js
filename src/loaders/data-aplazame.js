'use strict';

module.exports = function (_, script) {
  var data_aplazame = script.getAttribute('data-aplazame'),
      options = script.src && (/[?#]/.test(script.src) ? _.deserialize(script.src.match(/(.*?)[?#](.*)/)[2]) : {}) || {};

  if( data_aplazame ) {

    if( /\:/.test(data_aplazame) ) {
      data_aplazame.split(',').forEach(function (part) {
        var keys = part.match(/^([^\:]+)\:(.*)/);
        options[_.toUnderscoreCase(keys[1].trim())] = keys[2].trim();
      });

      if( !options.public_key ) {
        throw new Error('public_key missing in data-aplazame');
      }
    } else {
      options.public_key = data_aplazame;
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
