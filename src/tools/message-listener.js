
var messageTarget = {};

window.addEventListener('message', function (e) {
  var message = e.data,
      listeners = messageTarget[message.aplazame] || [];

  if( !e.used ) {
    e.used = true;
    for( var i = 0, n = listeners.length ; i < n ; i++ ) {
      listeners[i](e, message);
    }
  }
});

module.exports = function (target, handler) {
  if( typeof target === 'string' && handler instanceof Function ) {
    messageTarget[target] = messageTarget[target] || [];
    messageTarget[target].push(handler);
  }
};
