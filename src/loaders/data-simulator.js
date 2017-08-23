'use strict';

module.exports = function (aplazame) {

  var _ = aplazame._,
      $live = require('live-dom'),
      _amountGetter = require('./data-simulator-amount')(aplazame),
      Widget = require('./data-simulator-widget')(aplazame);

  $live('[data-aplazame-simulator]', function (widget_el) {

    var simulator_options = { view: widget_el.getAttribute('data-view') || 'product' },
        widget = new Widget(widget_el, {
          currency:  widget_el.getAttribute('data-currency') || 'EUR',
          country:  widget_el.getAttribute('data-country') || 'ES',
        }),
        amountGetter = _amountGetter(widget_el),
        current_amount = amountGetter() || widget_el.getAttribute('data-amount') && Number( widget_el.getAttribute('data-amount') ),
        current_qty = amountGetter.qtySelector ? ( amountGetter.getQty(amountGetter.qtySelector) || 1 ) : 1,
        qty_interval,
        updateAmount = function (amount, qty) {
          // console.log('updateAmount', amount, qty);
          current_amount = amount;
          if( qty !== undefined ) current_qty = qty;
          widget_el.style.opacity = 0.5;
          aplazame.simulator( amount*( qty === undefined ? current_qty : qty ), simulator_options, function (_choices, _options) {
            if( qty !== undefined && qty !== current_qty ) return;
            if( _options.widget.disabled ) {
              if(qty_interval) clearInterval(qty_interval);
              // _removeListener(onDomChanges);
              $live.off(onDomChanges);
              return;
            }
            widget.render(_choices, _options);
            widget_el.style.opacity = null;
          });
        },
        onDomChanges = _.debounce(function () {
          // if( !document.body.contains(widget_el) ) return _removeListener(onDomChanges);
          if( !document.body.contains(widget_el) ) return $live.off(onDomChanges);

          var amount = amountGetter();

          if( amount !== current_amount ) updateAmount(amount);
        });

    if( amountGetter.qtySelector ) qty_interval = setInterval(function () {
      var qty = amountGetter.getQty(amountGetter.qtySelector) || 1;

      if( qty === current_qty ) return;
      updateAmount(current_amount, qty);
    }, 120);

    // dom_listeners.push(onDomChanges);
    $live(onDomChanges);

    updateAmount(current_amount);

  });

};
