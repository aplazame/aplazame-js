
import log from '../tools/log';

function _getAttrParams (dest, el, _map) {
  Object.keys(_map).forEach(function (_key) {
    if( el.hasAttribute(_map[_key]) ) {
      dest[_key] = el.getAttribute(_map[_key])
    }
  })
}

export default function (_, script) {
  log.debug('(aplazame.js) script' + ( script.hasAttribute('data-aplazame') ? '[data-aplazame]' : '' ), script );

  var data_aplazame = script.getAttribute('data-aplazame');
  var params = _.deserialize(script.src.split(/[?#]/)[1] || '');
      // options = script.src && (/[?#]/.test(script.src) ? _.deserialize(script.src.match(/(.*?)[?#](.*)/)[2]) : {}) || {};

  if( data_aplazame ) {

    if( /:/.test(data_aplazame) ) {
      data_aplazame.split(',').forEach(function (part) {
        var keys = part.match(/^([^:]+):(.*)/);
        params[_.toUnderscoreCase(keys[1].trim())] = keys[2].trim();
      });

      log('data-aplazame: params', '"' + data_aplazame + '"' );

      if( !params.public_key ) {
        throw new Error('public_key missing in data-aplazame');
      }
    } else {
      params.public_key = data_aplazame;
    }
  }

  _getAttrParams(params, script, {
    host: 'data-api-host',
    sandbox: 'data-sandbox',
    widgets_base: 'data-widgets-base',
    checkout_url: 'data-checkout-url',
    callback: 'data-callback',
  })

  if( params.sandbox ) {
    params.sandbox = params.sandbox === 'true' || params.sandbox === '1'
  }

  log('data-aplazame: params', params)

  return params;
}
