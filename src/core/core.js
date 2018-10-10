'use strict';

export default {
  _: require('../tools/tools'),
  init: require('./init'),
  apiGet: require('./api-http').get,
  apiPost: require('./api-http').post,
  apiDelete: require('./api-http')['delete'],
  apiPut: require('./api-http').put,
  version: require('../../.tmp/aplazame-version')
};
