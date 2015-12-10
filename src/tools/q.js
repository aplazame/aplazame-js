
var P = (function () {

  function processQueue(queue, err, result) {
    var step = queue.shift(), type = err ? 'catch' : 'then', value;

    while( step && !step[type] ) {
      step = queue.shift();
    }

    if( step && step[type] ) {
      try {
        processQueue(queue, false, step[type](result) );
      } catch (err) {
        processQueue(queue, true, err );
      }
    } else if( err ) {
      throw new Error('promise catch lost');
    } else {
      step = queue.finally.shift();
      while( step ) {
        step(result);
        step = queue.finally.shift();
      }
    }
  }

  function P (behavior) {
    if( !( behavior instanceof Function ) ) {
      throw new Error('promise argument should be a function');
    }

    var queue = [];
    queue.finally = [];

    setTimeout(function () {
      behavior(function (result) {
        processQueue(queue, false, result);
      }, function (reason) {
        processQueue(queue, true, reason);
      });
    }, 0);

    this.then = function (onResolve, onReject) {
      queue.push({ then: onResolve, catch: onReject });
      return this;
    };
    this.catch = function (onReject) {
      queue.push({ catch: onReject });
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
