'use strict';

var suscriptors = [],
    running = false,
    waiting = false,
    lastTarget = null,
    triggerListeners = function (target) {
      for( var i = 0, n = suscriptors.length; i < n ; i++ ) {
        suscriptors[i](target);
      }
    },
    waitTimer = function () {
      waiting = true;
      setTimeout(function () {
        waiting = false;
        if( lastTarget ) {
          var target = lastTarget;
          lastTarget = null;
          waitTimer();
          triggerListeners(target);
        }
      }, 250);
    };

function initLiveDOM () {

  require('./browser-tools').ready(function () {
    function nodeChanged (event) {
      console.log('nodeChanged', event);
      if( waiting ) {
        lastTarget = event.target;
        return;
      }
      waitTimer();
      triggerListeners(event.target);
    }

    if( window.MutationObserver ) {
      new MutationObserver(function(mutations) {
        mutations.forEach(nodeChanged);
      }).observe(document.body, { childList: true, subtree: true });
    } else {
      document.body.addEventListener('DOMSubtreeModified', nodeChanged);
    }
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
      handler(document.body);
    }
  }
};
