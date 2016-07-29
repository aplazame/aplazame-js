'use strict';

var apiDevHosts = [
  'demo-dev.aplazame.com',
  'magento.aplazame.com',
  'prestashop.aplazame.com',
  'presta.ovh2.germade.es'
];

module.exports = {
  host: ( /^js\.aplazame\.[a-z]+$/.test(location.hostname) || apiDevHosts.indexOf(location.hostname) >= 0 ) ? 'https://api-dev.aplazame.com/' : 'https://api.aplazame.com/',
  // host: 'https://api.aplazame.com/',
  baseUrl: 'https://aplazame.com/static/',
  version: 1,
  checkoutVersion: 1,
  sandbox: false
};
