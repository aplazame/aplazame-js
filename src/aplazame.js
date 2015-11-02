
global.aplazame = require('./aplazame-core');

global.aplazame.checkout = require('./apps/checkout');
global.aplazame.button = require('./apps/button');
global.aplazame.simulator = require('./apps/simulator');
global.aplazame.modal = require('./apps/modal');

require('./loaders/data-aplazame')(global.aplazame);
require('./loaders/data-button')(global.aplazame);
require('./loaders/data-simulator')(global.aplazame);
