
var suscriptors = [],
    running = false,
    _ = require('./utils');

function initLiveDOM () {

  _.ready(function () {
    document.body.addEventListener('DOMSubtreeModified', function(event){
      // console.debug( 'DOM Changed at ', new Date(), event.target );
      for( var i = 0, n = suscriptors.length; i < n ; i++ ) {
        suscriptors[i](event.target);
      }
    }, false);
  });
  
}

module.exports = {
  subscribe: function (handler) {
    if( !running ) {
      initLiveDOM(true);
      running = true;
    }
    if( handler instanceof Function ) {
      suscriptors.push(handler);
    }
  }
};
