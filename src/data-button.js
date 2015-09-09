var aplazame = require('./aplazame'),
    _ = require('./utils');

function buttonsLookup (element) {
  var btns = element.querySelectorAll('[data-aplazame-button]');

  if( btns.length ) {

    console.log('forEach:btns', btns);

    [].forEach.call(btns, function (btn) {
      var btnId = btn.getAttribute('data-aplazame-button'),
          btnParams = {
            selector: '[data-aplazame-button' + ( btnId ? ('=\"' + btnId + '\"') : '' ) + '], [data-aplazame-button-info' + ( btnId ? ('=\"' + btnId + '\"') : '' ) + ']',
            parent: btn.getAttribute('data-parent'),
            publicKey: btn.getAttribute('data-public-key'),
            amount: btn.getAttribute('data-amount'),
            currency: btn.getAttribute('data-currency') || undefined,
            sandbox: btn.getAttribute('data-sandbox') ? btn.getAttribute('data-sandbox') === 'true' : undefined,
            country: btn.getAttribute('data-country') || undefined
          };

      aplazame.button(btnParams);
    });

  }
}

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
         elements.each(function () {
           buttonsLookup(this);
         });
       }, 0);

       return response;
    };

  })(global.jQuery);
}

_.ready(function () {
  buttonsLookup(document);
});
