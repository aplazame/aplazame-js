'use strict';

module.exports = function (aplazame) {

  var aplazameScript = document.querySelector('script[src*="aplazame.js"]') || document.querySelector('script[src*="aplazame.min.js"]'),
      options = {};

  if( aplazameScript ) {

    if( aplazameScript.src ) {
      options.baseUrl = aplazameScript.src.match(/(.*)\/(.*)$/)[1];

      if( !/\/$/.test(options.baseUrl) ) {
        options.baseUrl += '/';
      }
    }

    var href = aplazameScript.src.split('?'),
        sandboxMatch = href && href[1] && href[1].match(/sandbox\=([^&]*)/);

    if( sandboxMatch ) {
      options.sandbox = sandboxMatch[1] === '1' || sandboxMatch[1] === 'true';
    }
  }

  if( document.querySelector('script[data-aplazame]') ) {

    var script = document.querySelector('script[data-aplazame]'),
        initText = script.getAttribute('data-aplazame');

    if( /\:/.test(initText) ) {
      initText.split(',').forEach(function (part) {
        var keys = part.match(/^([^\:]+)\:(.*)/);
        options[keys[1].trim()] = keys[2].trim();
      });
    } else {
      if( initText ) {
        options.publicKey = initText;
      }
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
