'use strict';

module.exports = function (aplazame) {

  var _ = aplazame._,
      script = document.currentScript,
      dataAplazame = script.getAttribute('data-aplazame'),
      options = script.src && (/\?/.test(script.src) ? _.deserialize(script.src.match(/(.*?)\?(.*)/)[2]) : {}) || {};

  if( options.sandbox ) {
    options.sandbox = options.sandbox === 'true' || options.sandbox === '1';
  }

  // if( script && script.src ) {

  //   _.merge(options, _.deserialize());

  //   if( script.src ) {
  //     options.baseUrl = script.src.match(/(.*)\/(.*)$/)[1];

  //     if( !/\/$/.test(options.baseUrl) ) {
  //       options.baseUrl += '/';
  //     }
  //   }

  //   var href = script.src.split('?'),
  //       sandboxMatch = href && href[1] && href[1].match(/sandbox\=([^&]*)/);

  //   if( sandboxMatch ) {
  //     options.sandbox = sandboxMatch[1] === '1' || sandboxMatch[1] === 'true';
  //   }
  // }

  if( dataAplazame ) {

    // var script = document.querySelector('script[data-aplazame]');

    if( /\:/.test(dataAplazame) ) {
      dataAplazame.split(',').forEach(function (part) {
        var keys = part.match(/^([^\:]+)\:(.*)/);
        options[keys[1].trim()] = keys[2].trim();
      });

      if( !options.publicKey ) {
        throw new Error('publicKey missing in data-aplazame');
      }
    } else {
      options.publicKey = dataAplazame;
    }

    if( script.getAttribute('data-api-host') ) {
      options.host = script.getAttribute('data-api-host');
    }

    if( script.getAttribute('data-version') ) {
      options.version = script.getAttribute('data-version');
    }

    if( script.getAttribute('data-sandbox') ) {
      options.sandbox = script.getAttribute('data-sandbox');
    }

    if( script.getAttribute('data-analytics') ) {
      options.analytics = script.getAttribute('data-analytics');
    }
  }

  aplazame.init(options);

};
