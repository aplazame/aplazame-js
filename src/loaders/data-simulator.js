'use strict';

module.exports = function (aplazame) {

  var $live = require('live-dom'),
      _amountGetter = require('./data-simulator-amount')(aplazame),
      Widget = require('./data-simulator-widget')(aplazame),
      log = require('../tools/log');

  $live('[data-aplazame-simulator]', function (widget_el) {

    var simulator_options = { view: widget_el.getAttribute('data-view') || 'product' },
        widget = new Widget(widget_el, {
          currency:  widget_el.getAttribute('data-currency') || 'EUR',
          country:  widget_el.getAttribute('data-country') || 'ES',
        }),
        amountGetter = _amountGetter(widget_el),
        qty_interval,
        getTotalAmount = function () {
          var amount = amountGetter() || widget_el.getAttribute('data-amount') && Number( widget_el.getAttribute('data-amount') );
          var qty = amountGetter.qtySelector ? ( amountGetter.getQty(amountGetter.qtySelector) || 1 ) : 1;

          return amount * qty;
        },
        last_amount = false,
        updateAmount = function (amount) {
          log('updateAmount', amount);
          if( !amount || amount === last_amount) return;
          last_amount = amount;
          widget_el.style.opacity = 0.5;
          aplazame.simulator( amount, simulator_options)
            .then(function (result) {
              if( result.options.widget.disabled ) {
                if(qty_interval) clearInterval(qty_interval);
                // _removeListener(onDomChanges);
                $live.off(onDomChanges);
                return;
              }
              widget.render(result.choices, result.options);
              widget_el.style.opacity = null;
            });
        },
        onDomChanges = function () {
          // if( !document.body.contains(widget_el) ) return _removeListener(onDomChanges);
          if( !document.body.contains(widget_el) ) return $live.off(onDomChanges);

          updateAmount(getTotalAmount());
        };

    if( amountGetter.qtySelector ) qty_interval = setInterval(function () {
      updateAmount(getTotalAmount());
    }, 120);

    // dom_listeners.push(onDomChanges);
    $live(onDomChanges);

    updateAmount(getTotalAmount());
  });

};
