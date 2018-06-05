/* global define */

require('./sandbox')(function () {
  'use strict';

  require('http-rest/browser').usePromise(require('parole'));

  function once (fn) {
    var result;
    return function () {
      if( fn ) {
        result = fn.apply(this, arguments);
        fn = null;
      }
      return result;
    };
  }

  var aplazame = require('./core/core'),
      api = require('./core/api'),
      events = require('./core/events'),
      log = require('./tools/log'),
      deserialize = require('./tools/deserialize').deserialize;

  aplazame.checkout = require('./apps/checkout');
  aplazame.button = require('./apps/button');
  aplazame.simulator = require('./apps/simulator');
  aplazame.modal = require('./apps/modal');

  aplazame.info = function () {
    return {
      api: require('./core/api'),
      log: require('./tools/log').history,
      version: require('../.tmp/aplazame-version')
    };
  };

  aplazame.log = log;
  aplazame.logs = log.dump;

  require('./apps/http-service');

  global.aplazame = aplazame;

  events.on('ready', once(function () {
    require('./loaders/data-button')(aplazame);
    require('./loaders/data-simulator')(aplazame);
  }));

  function findFirst( list, iteratee ) {
    for( var i = 0, n = list.length ; i < n ; i++ ) {
      if( iteratee(list[i]) ) return list[i];
    }
    return null;
  }

  function safeScript (script) {
    log('safeScript', script && script.outerHTML );

    var params = deserialize(script.src.split('?')[1] || '');

    if( script && params.public_key ) {
      log('safeScript: public_key in params', params );
      return script;
    }
    if( script && script.getAttribute && script.getAttribute('data-aplazame') !== null ) {
      log('safeScript: script has data-aplazame', params );
      return script;
    }

    var isAplazameLoader = function (script) {
      log('finding first isAplazameLoader');
      if( script && script.src && (
        script.src.trim().indexOf('https://aplazame.com/static/aplazame.js') === 0 ||
        script.src.trim().indexOf('https://cdn.aplazame.com/aplazame.js') === 0
      ) ) {
        return script;
      }
    };

    return isAplazameLoader(script) ||
           findFirst(document.querySelectorAll('script'), isAplazameLoader) ||
           script || document.querySelector('script[data-aplazame]') ||
           document.createElement('script');
  }

  var options = require('./loaders/data-aplazame')(aplazame._, safeScript( aplazame._.currentScript() ) );

  log('_.currentScript', aplazame._.currentScript && aplazame._.currentScript.toString, aplazame._.currentScript.toString() );

  aplazame.init(options);

  // support for requirejs like libraries
  if( typeof define === 'function' && define.amd ) {
    define([], function () {
      return aplazame;
    });
  }

  aplazame._.ready(function () {
    if( api.callback ) {
      if(  typeof global[api.callback] !== 'function' ) {
        throw new Error('callback should be a global function');
      }

      global[api.callback](aplazame);
    }
  });

});
