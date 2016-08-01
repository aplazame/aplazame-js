
var messageTarget = {};

window.addEventListener('message', function (e) {
  var message = e.data,
      listener = messageTarget[message.aplazame];

  if( !e.used && listener ) {
    e.used = true;
    listener(e, message);
  }
});

module.exports = function (target, handler) {
  if( typeof target === 'string' && handler instanceof Function ) {
    messageTarget[target] = handler;
  }
};
