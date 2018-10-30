/* global define */

import Parole from 'parole';
import runInSandbox from './sandbox';
import $http from 'http-rest/browser';

import log from './tools/log';

import build_version from '../.tmp/aplazame-version';

import aplazame from './core/core';
import api from './core/api';
import events from './core/events';

import _deserialize from './tools/deserialize';

import aplazame_checkout from './apps/checkout';
import aplazame_button from './apps/button';
import aplazame_simulator from './apps/simulator';
import aplazame_modal from './apps/modal';

import initHttpService from './apps/http-service';

import aplazameLoader from './loaders/data-aplazame';
import buttonLoader from './loaders/data-button';
import simulatorLoader from './loaders/data-simulator';

runInSandbox(function () {


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

  var deserialize = _deserialize.deserialize;

  aplazame.checkout = aplazame_checkout;
  aplazame.button = aplazame_button;
  aplazame.simulator = aplazame_simulator;
  aplazame.modal = aplazame_modal;

  aplazame.info = function () {
    return {
      api: api,
      log: log.history,
      version: build_version,
    };
  };

  aplazame.log = log;
  aplazame.logs = log.dump;

  initHttpService();

  window.aplazame = aplazame;

  events.on('ready', once(function () {
    buttonLoader(aplazame);
    simulatorLoader(aplazame);
  }));

  function findFirst( list, iteratee ) {
    for( var i = 0, n = list.length ; i < n ; i++ ) {
      if( iteratee(list[i]) ) return list[i];
    }
    return null;
  }

  function safeScript (script) {
    if( script ) log('safeScript', script );
    else log.warn('safeScript: currentScript MISSING');

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

  var options = aplazameLoader(aplazame._, safeScript( aplazame._.currentScript() ) );

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
      if(  typeof window[api.callback] !== 'function' ) {
        throw new Error('callback should be a global function');
      }

      window[api.callback](aplazame);
    }
  });

});
