
import log from './log';

var messageTarget = {},
    showLogs = false,
    _remove = function (list, iteratee, this_arg) {
      for( var i = list.length - 1 ; i >= 0 ; i-- ) {
        if( iteratee.call(this_arg || list[i], list[i], i) ) list.splice(i, 1);
      }
    };

window.addEventListener('message', function (e) {
  var message = e.data ||{},
      listeners = messageTarget[message.aplazame];

  if( !listeners ) return;

  if( showLogs && !e.used ) {
    log('message', e, listeners);
  }

  if( !e.used ) {
    e.used = true;
    for( var i = 0, n = listeners.length ; i < n ; i++ ) {
      listeners[i](e, message);
    }
  }
}, true);

function onMessage (target, handler, logs) {
  showLogs = logs;
  if( typeof target === 'string' && handler instanceof Function ) {
    messageTarget[target] = messageTarget[target] || [];
    messageTarget[target].push(handler);
  }
}

onMessage.off = function (target, handler) {
  if( typeof target === 'string' && handler instanceof Function ) {
    messageTarget[target] = messageTarget[target] || [];
    _remove(messageTarget[target] || [], function (_handler) {
      return _handler === handler;
    });
  }
};

export default onMessage;
