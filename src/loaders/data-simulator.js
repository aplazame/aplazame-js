'use strict';

module.exports = function (aplazame) {

  var $live = require('live-dom'),
      _amountGetter = require('./data-simulator-amount')(aplazame),
      Widget = require('./data-simulator-widget')(aplazame),
      Money = require('../tools/money'),
      log = require('../tools/log');

  $live('[data-aplazame-simulator]', function (widget_el) {

    var simulator_options = { view: widget_el.getAttribute('data-view') || 'product' },
        currency = widget_el.getAttribute('data-currency') || 'EUR',
        widget = new Widget(widget_el, {
          currency:  currency,
          country:  widget_el.getAttribute('data-country') || 'ES',
        }),
        amountGetter = _amountGetter(widget_el),
        qty_interval,
        getTotalPrice = function () {
          var amount = amountGetter() || widget_el.getAttribute('data-amount') && Number( widget_el.getAttribute('data-amount') );
          var qty = amountGetter.qtySelector ? ( amountGetter.getQty(amountGetter.qtySelector) || 1 ) : 1;

          return new Money(amount * qty, currency);
        },
        last_money = false,
        updateAmount = function (money) {
          log('updateAmount', money.amount, money.currency);
          if( !money.amount ) return;
          if( last_money && last_money.equals(money) ) return;
          last_money = money;
          widget_el.style.opacity = 0.5;
          aplazame.simulator( money, simulator_options)
            .then(function (result) {
              if( result.options.widget.disabled ) {
                if(qty_interval) clearInterval(qty_interval);
                // _removeListener(onDomChanges);
                $live.off(onDomChanges);
                return;
              }
              widget.render(result.choices, result.options);
            })
            .then(function () {
              widget_el.style.opacity = null;
            }, function () {
              widget_el.style.opacity = null;
            });
        },
        onDomChanges = function () {
          // if( !document.body.contains(widget_el) ) return _removeListener(onDomChanges);
          if( !document.body.contains(widget_el) ) return $live.off(onDomChanges);

          updateAmount(getTotalPrice());
        };

    if( amountGetter.qtySelector ) qty_interval = setInterval(function () {
      updateAmount(getTotalPrice());
    }, 120);

    // dom_listeners.push(onDomChanges);
    $live(onDomChanges);

    updateAmount(getTotalPrice());
  });

};
