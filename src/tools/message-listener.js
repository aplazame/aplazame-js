
var messageTarget = {},
    showLogs = false;

window.addEventListener('message', function (e) {
  var message = e.data,
      listeners = messageTarget[message.aplazame];

  if( !listeners ) {
    return;
  }

  if( showLogs && !e.used ) {
    console.log('message', e, listeners);
  }

  if( !e.used ) {
    e.used = true;
    for( var i = 0, n = listeners.length ; i < n ; i++ ) {
      listeners[i](e, message);
    }
  }
}, true);

module.exports = function (target, handler, logs) {
  showLogs = logs;
  if( typeof target === 'string' && handler instanceof Function ) {
    messageTarget[target] = messageTarget[target] || [];
    messageTarget[target].push(handler);
  }
};
