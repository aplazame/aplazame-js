
module.exports = function (_) {

  var messageTarget = {};

  window.addEventListener('message', function (e) {
    var message = e.data,
        listener = messageTarget[message.aplazame];

    if( !e.used && listener ) {
      e.used = true;
      listener(e, message);
    }
  });

  return function (target, handler) {
    if( _.isString(target) && _.isFunction(handler) ) {
      messageTarget[target] = handler;
    }
  };

};
