
var suscriptors = [],
    running = false;

function initLiveDOM () {
  if( global.jQuery ) {
    (function ($) {

      var jqHtml = $.fn.html;

      $.fn.html = function () {
         var response = jqHtml.apply(this, arguments);
         if( !arguments.length ) {
           return response;
         }

         var elements = [].slice.call(this);

         setTimeout(function () {
           elements.forEach(function (el) {
             for( var i = 0, n = suscriptors.length; i < n ; i++ ) {
               suscriptors[i](el);
             }
           });
         }, 0);

         return response;
      };

    })(global.jQuery);
  }
}

module.exports = {
  subscribe: function (handler) {
    if( !running ) {
      initLiveDOM();
      running = true;
    }
    if( handler instanceof Function ) {
      suscriptors.push(handler);
    }
  }
};
