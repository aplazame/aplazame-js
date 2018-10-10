/* global define */

import Parole from 'parole';
import runInSandbox from './sandbox';
import $http from 'http-rest/browser';

import lib_core from './core/core';

// var runInSandbox = require('./sandbox');

runInSandbox(function () {
  'use strict';

  $http.usePromise(Parole);

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

  var aplazame = lib_core,
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
    log('safeScript', script || 'NO currentScript' );

    var params = deserialize(script.src.split('?')[1] || '');

    if( script && params.public_key ) {
      log('safeScript: public_key in params', params );
      return script;
    }
    if( script && script.getAttribute && script.getAttribute('data-aplazame') !== null ) {
      log('safeScript: script has data-aplazame');
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

    log('safeScript: find AplazameLoader');

    return isAplazameLoader(script) ||
           findFirst(document.querySelectorAll('script'), isAplazameLoader) ||
           script || document.querySelector('script[data-aplazame]') ||
           document.createElement('script');
  }

  var options = require('./loaders/data-aplazame')(aplazame._, safeScript( aplazame._.currentScript() ) );

  aplazame.init(options);

  // support for requirejs like libraries
  if( typeof define === 'function' && define.amd ) {
    log.warn('AMD module');
    define([], function () {
      return aplazame;
    });
  } else log('NOT AMD module');

  aplazame._.ready(function () {
    if( api.callback ) {
      if(  typeof global[api.callback] !== 'function' ) {
        throw new Error('callback should be a global function');
      }

      global[api.callback](aplazame);
    }
  });

});
