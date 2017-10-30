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
      log = require('./tools/log');

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
    if( script && script.getAttribute && script.getAttribute('data-aplazame') !== null )
      return script;

    var is_aplazame_loader = function (script) {
      if( script && script.src && script.src.trim().indexOf('https://aplazame.com/static/aplazame.js') === 0 )
        return script;
    };

    return is_aplazame_loader(script) || findFirst(document.querySelectorAll('script'), is_aplazame_loader) || script || document.querySelector('script[data-aplazame]') || document.createElement('script');
  }

  var options = require('./loaders/data-aplazame')(aplazame._, safeScript(aplazame._.currentScript));

  aplazame.init(options);

  if (typeof define === 'function' && define.amd) {
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
