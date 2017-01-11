/* global define */

require('./sandbox')(function () {
  'use strict';

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
      events = require('./core/events');

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

  aplazame.log = function () {
    require('./tools/log').history.forEach(function (l) {
      console.log(l.time);
      console.log.apply(console, l.args);
    });
  };

  require('./apps/http-service');

  global.aplazame = aplazame;

  require('./loaders/data-aplazame')(aplazame);

  var runLaunchers = once(function () {
    require('./loaders/data-button')(aplazame);
    require('./loaders/data-simulator')(aplazame);
  });

  if( api.publicKey ) runLaunchers();
  events.on('init', runLaunchers);

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
