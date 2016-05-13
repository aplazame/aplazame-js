'use strict';

module.exports = function (_) {
  var suscriptors = [],
      running = false;
      // nUpdates = 0;

  function initLiveDOM () {

    _.ready(function () {
      // var nUpdate = ++nUpdates;
      // setTimeout(function () {
      //   if( nUpdate !== nUpdates ) {
      //     return;
      //   }
        document.body.addEventListener('DOMSubtreeModified', function(event){
          for( var i = 0, n = suscriptors.length; i < n ; i++ ) {
            suscriptors[i](event.target);
          }
        }, false);
      // }, 50);
    });

  }

  return {
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

};
