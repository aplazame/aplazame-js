

import api from './api';
import _ from '../tools/tools';
import events from './events';

export default function init (options) {
  options = options || {};

  if( typeof options.sandbox === 'string' ) {
    options.sandbox = options.sandbox === 'true';
  }

  for( var key in options ) {
    api[_.toUnderscoreCase(key)] = options[key];
  }

  _.log('aplazame.init', options, api);

  if( api.public_key ) events.emit('ready');
}
