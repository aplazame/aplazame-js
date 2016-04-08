
global.aplazame = require('./core/core');

global.aplazame.checkout = require('./apps/checkout');
global.aplazame.button = require('./apps/button');
global.aplazame.simulator = require('./apps/simulator');
global.aplazame.modal = require('./apps/modal');

require('./apps/http-service');

require('./loaders/data-aplazame')(global.aplazame);
require('./loaders/data-button')(global.aplazame);
require('./loaders/data-simulator')(global.aplazame);

global.aplazame.info = function () {
  return {
    api: require('./core/api'),
    log: require('./tools/log').history,
    version: require('../.tmp/aplazame-version')
  };
};


global.$q = require('q-promise');
global.$http = require('http-browser');
