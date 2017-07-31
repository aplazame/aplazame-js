'use strict';

module.exports = function (aplazame) {

  var _ = aplazame._,
      // log = require('../tools/log'),
      $live = require('live-dom'),
      _amountGetter = require('./data-simulator-amount')(aplazame),
      Widget = require('./data-simulator-widget')(aplazame),
      dom_listeners = [],
      _removeListener = function (listener) {
        for( var i = dom_listeners.length - 1 ; i >= 0 ; i-- ) {
          if( listener === dom_listeners[i] ) dom_listeners.splice(i, 1);
        }
      },
      onNodeChanges = window.MutationObserver ? function (onNodeChanged) {
        new MutationObserver(function(mutations) {
          mutations.forEach( onNodeChanged );
        }).observe(document.body, { childList: true, subtree: true });
      } : function (onNodeChanged) {
        document.body.addEventListener('DOMSubtreeModified', onNodeChanged);
      };

  onNodeChanges( _.debounce(function () {
    dom_listeners.forEach(function (listener) {
      listener();
    });
  }) );

  $live('[data-aplazame-simulator]', function (widget_el) {

    var simulator_options = { view: widget_el.getAttribute('data-view') || 'product' },
        widget = new Widget(widget_el),
        amountGetter = _amountGetter(widget_el),
        current_amount = amountGetter() || widget_el.getAttribute('data-amount') && Number( widget_el.getAttribute('data-amount') ),
        current_qty = amountGetter.qtySelector ? ( amountGetter.getQty(amountGetter.qtySelector) || 1 ) : 1,
        updateAmount = function (amount, qty) {
          console.log('updateAmount', amount, qty);
          current_amount = amount;
          if( qty !== undefined ) current_qty = qty;
          aplazame.simulator( amount*( qty === undefined ? current_qty : qty ), simulator_options, function (_choices, _options) {
            if( qty !== undefined && qty !== current_qty ) return;
            widget.render(_choices, _options);
          });
        },
        onDomChanges = function () {
          if( !document.body.contains(widget_el) ) return _removeListener(onDomChanges);

          var amount = amountGetter();

          if( amount !== current_amount ) updateAmount(amount);
        };

    if( amountGetter.qtySelector ) setInterval(function () {
      var qty = amountGetter.getQty(amountGetter.qtySelector) || 1;

      if( qty === current_qty ) return;
      updateAmount(current_amount, qty);
    }, 200);

    dom_listeners.push(onDomChanges);
    updateAmount(current_amount);

    console.log('[data-aplazame-simulator]', widget_el, amountGetter() );

  });

};
