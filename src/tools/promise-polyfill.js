
var P = (function () {

  function processListeners(listeners, err, result) {
    var step = listeners.shift(), type = err ? 'catch' : 'then', value;

    while( step && !step[type] ) {
      step = listeners.shift();
    }

    if( step && step[type] ) {
      try {
        processListeners(listeners, false, step[type](result) );
      } catch (err) {
        processListeners(listeners, true, err );
      }
    }
  }

  function P (behavior) {
    if( !( behavior instanceof Function ) ) {
      throw new Error('promise argument should be a function');
    }

    var listeners = [];

    setTimeout(function () {
      behavior(function (result) {
        processListeners(listeners, false, result);
      }, function (reason) {
        processListeners(listeners, true, reason);
      });
    }, 0);

    this.then = function (onResolve, onReject) {
      listeners.push({ then: onResolve, catch: onReject });
      return this;
    };
    this.catch = function (onReject) {
      listeners.push({ catch: onReject });
      return this;
    };
  }

  P.resolve = function (result) {
    return new P(function (resolve, reject) { resolve(result); });
  };

  P.reject = function (reason) {
    return new P(function (resolve, reject) { reject(reason); });
  };

  return P;

})();

module.exports = (function (Promise) {

  function q (fn) { return new Promise(fn); }

  ['resolve', 'reject'].forEach(function (fnName) { q[fnName] = Promise[fnName]; });
  q.when = function (p) { return ( p && p.then ) ? p : P.resolve(p); };

  return q;

})(global.Promise || P);
