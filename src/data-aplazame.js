var aplazame = require('./aplazame'),
    aplazameScript = document.querySelector('script[src*="aplazame.js"]') || document.querySelector('script[src*="aplazame.min.js"]');

if( aplazameScript ) {
  var href = aplazameScript.src.split('?'),
      sandboxMatch = href && href[1] && href[1].match(/sandbox\=([^&]*)/);

  if( sandboxMatch ) {
    aplazame.init({}, { sandbox: sandboxMatch[1] === '1' || sandboxMatch[1] === 'true' });
  }
}

if( document.querySelector('script[data-aplazame]') ) {

  var script = document.querySelector('script[data-aplazame]'),
      initText = script.getAttribute('data-aplazame'),
      envOptions = {},
      apiOptions = {};

  if( /\:/.test(initText) ) {
    initText.split(',').forEach(function (part) {
      var keys = part.match(/^([^\:]+)\:(.*)/);
      envOptions[keys[1].trim()] = keys[2].trim();
    });
  } else {
    if( initText ) {
      envOptions.publicKey = initText;
    }
  }

  if( script.getAttribute('data-version') ) {
    var matchVersion = script.getAttribute('data-version').match(/^v?(\d)(\.(\d))?$/);

    if( !matchVersion ) {
      throw new Error('malformed version, should be like \'v1.2\'');
    }

    apiOptions.version = Number(matchVersion[1]);

    if( matchVersion[3] !== undefined ) {
      apiOptions.checkoutVersion = Number(matchVersion[3]);
    }
  }

  if( script.getAttribute('data-sandbox') ) {
    apiOptions.sandbox = script.getAttribute('data-sandbox') === 'true';
  }
  if( script.getAttribute('data-analytics') ) {
    envOptions.analytics = script.getAttribute('data-analytics') === 'true';
  }

  aplazame.init(envOptions, apiOptions);
}
