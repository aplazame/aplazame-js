'use strict';

function findFirst( list, iteratee ) {
  for( var i = 0, n = list.length ; i < n ; i++ ) {
    if( iteratee(list[i]) ) return list[i];
  }
  return null;
}

function safeScript (script) {
  if( script && script.getAttribute && script.getAttribute('data-aplazame') !== null )
    return script;

  if( script && script.src && script.src.trim().indexOf('https://aplazame.com/static/aplazame.com') === 0 )
    return script;

  script = findFirst(document.querySelectorAll('script'), function (script) {
    if( script && script.src && script.src.trim().indexOf('https://aplazame.com/static/aplazame.com') === 0 )
      return script;
  });

  console.log('safeScript IE', script ? script.src : 'missing');

  return script;
}

module.exports = function (aplazame) {

  var _ = aplazame._,
      script = safeScript(_.currentScript),
      dataAplazame = script.getAttribute('data-aplazame'),
      options = script.src && (/[?#]/.test(script.src) ? _.deserialize(script.src.match(/(.*?)[?#](.*)/)[2]) : {}) || {};

  if( options.sandbox ) {
    options.sandbox = options.sandbox === 'true' || options.sandbox === '1';
  }

  if( dataAplazame ) {

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

    if( script.getAttribute('data-static-url') ) {
      options.staticUrl = script.getAttribute('data-static-url');
    }

    if( script.getAttribute('data-checkout-url') ) {
      options.checkoutUrl = script.getAttribute('data-checkout-url');
    }

    if( script.getAttribute('data-callback') ) {
      // if( typeof global[script.getAttribute('data-callback')] !== 'function' ) {
      //   throw new Error('callback should be a global function');
      // }

      options.callback = script.getAttribute('data-callback');
      // _.ready(function () {
      //   global[script.getAttribute('data-callback')](aplazame);
      // });
    }
  }

  aplazame.init(options);

};
