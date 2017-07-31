'use strict';

module.exports = function (aplazame) {

  var log = require('../tools/log'),
      $live = require('live-dom'),
      _amountGetter = require('./data-simulator-amount')(aplazame),
      Widget = require('./data-simulator-widget')(aplazame),
      dom_listeners = [],
      _removeListener = function (listener) {
        for( var i = dom_listeners.length - 1 ; i >= 0 ; i-- ) {
          if( listener === dom_listeners[i] ) dom_listeners.splice(i, 1);
        }
      },
      _debounce = function (fn, debounce_duration) {
        var debouncing = null;
        debounce_duration = debounce_duration || 80;
        return function () {
          var _this = this, _args = arguments;
          if( debouncing === null ) {
            fn.apply(_this, _args);
            debouncing = false;
          } else {
            if( debouncing ) clearTimeout(debouncing);
            debouncing = setTimeout(function () {
              debouncing = setTimeout(function () {
                debouncing = null;
              }, debounce_duration);
              fn.apply(_this, _args);
            }, debounce_duration);
          }
        };
      },
      onNodeChanges = window.MutationObserver ? function (onNodeChanged) {
        new MutationObserver(function(mutations) {
          mutations.forEach( onNodeChanged );
        }).observe(document.body, { childList: true, subtree: true });
      } : function (onNodeChanged) {
        document.body.addEventListener('DOMSubtreeModified', onNodeChanged);
      };

  onNodeChanges( _debounce(function () {
    dom_listeners.forEach(function (listener) {
      listener();
    });
  }) );

  $live('[data-aplazame-simulator]', function (widget_el) {

    var simulator_options = { view: widget_el.getAttribute('data-view') || 'product' },
        widget = new Widget(widget_el),
        amountGetter = _amountGetter(widget_el),
        current_amount = amountGetter() || widget_el.getAttribute('data-amount') && Number( widget_el.getAttribute('data-amount') ),
        updateAmount = function (amount) {
          current_amount = amount;
          aplazame.simulator( amount, simulator_options, function (_choices, _options) {
            widget.render(_choices, _options);
          });
        },
        onDomChanges = function () {
          if( !document.body.contains(widget_el) ) return _removeListener(onDomChanges);

          var amount = amountGetter();

          if( amount !== current_amount ) updateAmount(amount);
        };

    dom_listeners.push(onDomChanges);
    updateAmount(current_amount);

    console.log('[data-aplazame-simulator]', widget_el, amountGetter() );

  });

};
