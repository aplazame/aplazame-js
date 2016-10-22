
require('./sandbox')(function () {
  'use strict';

  var aplazame = require('./core/core');

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

  require('./loaders/data-aplazame')(global.aplazame);
  aplazame._.ready(function () {
    var buttonsLookup = require('./loaders/data-button')(aplazame),
        widgetsLookup = require('./loaders/data-simulator')(aplazame),
        cb = require('./core/api').callback;

    if( cb ) {
      if(  typeof global[cb] !== 'function' ) {
        throw new Error('callback should be a global function');
      }
      global[cb](aplazame);
      buttonsLookup();
      widgetsLookup();
    }

  });

});
