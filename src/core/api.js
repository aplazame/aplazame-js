'use strict';

module.exports = {
  host: ( /^js\.aplazame\.[a-z]+$/.test(location.host) || location.host === 'demo.debug.aplazame.com' ) ? 'https://api.dev.aplazame.com/' : 'https://api.aplazame.com/',
  // host: 'https://api.aplazame.com/',
  baseUrl: 'https://aplazame.com/static/',
  version: 1,
  checkoutVersion: 1,
  sandbox: false
};
