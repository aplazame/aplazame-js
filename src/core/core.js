
import _ from '../tools/tools';
import init from './init';
import $http from './api-http';

import build_version from '../../.tmp/aplazame-version';

export default {
  _: _,
  init: init,
  apiGet: $http.get,
  apiPost: $http.post,
  apiDelete: $http['delete'],
  apiPut: $http.put,
  version: build_version,
};
