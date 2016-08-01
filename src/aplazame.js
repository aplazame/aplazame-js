
var aplazame = require('./core/core');

aplazame.checkout = require('./apps/checkout');
aplazame.button = require('./apps/button');
aplazame.simulator = require('./apps/simulator');
aplazame.modal = require('./apps/modal');

global.aplazame = aplazame;

require('./apps/http-service');

require('./loaders/data-aplazame')(global.aplazame);
aplazame._.ready(function () {  
  require('./loaders/data-button')(global.aplazame);
  require('./loaders/data-simulator')(global.aplazame);
});


global.aplazame.info = function () {
  return {
    api: require('./core/api'),
    log: require('./tools/log').history,
    version: require('../.tmp/aplazame-version')
  };
};

global.aplazame.log = function () {
  require('./tools/log').history.forEach(function (l) {
    console.log(l.time);
    console.log.apply(console, l.args);
  });
};


global.$q = require('q-promise');
global.$http = require('http-browser');
