'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools'),
    $q = require('q-promise'),
    cache = [];

function simulator (amount, _options, callback, onError) {
  if( _.isFunction(_options) ) {
    onError = callback;
    callback = _options;
    _options = {};
  } else {
    _options = _options || {};
  }
  var options = {
    params: {
      amount: amount
    }
  };
  if( _options.payday ) {
    options.params.payday = _options.payday;
  }
  if( _options.publicKey ) {
    options.publicKey = _options.publicKey;
  }

  var foundCached = _.find(cache, function (item) {
    return item.amount === amount;
  });

  var promise = !_options.noCache && foundCached ? $q.resolve(foundCached) : apiHttp.get('instalment-plan-simulator', options ).then(function (response) {
    var result = {
      amount: amount,
      choices: response.data.choices[0].instalments,
      options: response.data.options,
      response: response
    };
    cache.push(result);
    return result;
  }, onError);

  if( _.isFunction(callback) ) {
    promise.then(function (result) {
      callback( result.choices, result.options );
    });
  }

  return promise;
}

module.exports = simulator;
