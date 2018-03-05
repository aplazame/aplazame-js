'use strict';

function _attr(el, attr_name) {
  return el.getAttribute(attr_name);
}

var custom_options_defaults = {
  'btn_text_color': '#FFFFFF',
  'branding': true,
  'align': 'center',
  'smart_title': true,
  'text_color': '#333A3E',
  'btn_bg_color': '#267BBD',
  'custom_styles': false,
  version: 3
};

var custom_options_set = {
  'btn_text_color': 'btn-text-color',
  'branding': 'branding',
  'align': 'align',
  'smart_title': 'smart-title',
  'text_color': 'text-color',
  'btn_bg_color': 'btn-bg-color',
  'custom_styles': 'custom-styles',
};

function _getCustomOptions(widget_el) {
  var custom_type = _attr(widget_el, 'data-type'),
      custom_options = {},
      custom_option_value,
      has_custom_options = false,
      key;

  for( key in custom_options_defaults ) custom_options[key] = custom_options_defaults[key];

  for( key in custom_options_set ) {
    custom_option_value = _attr(widget_el, 'data-option-' + custom_options_set[key] );
    if( typeof custom_option_value === 'string' ) {
      custom_option_value = custom_option_value.trim();
      if( custom_option_value === 'true' || custom_option_value === 'false' ) custom_options[key] = custom_option_value === 'true';
      else custom_options[key] = custom_option_value;
      has_custom_options = true;
    }
  }

  return {
    type: custom_type && custom_type.trim(),
    preferences: has_custom_options ? custom_options : null
  };
}

function _copy (o) {
  return JSON.parse(JSON.stringify(o));
}

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
        custom_widget_options = _getCustomOptions(widget_el),
        amountGetter = _amountGetter(widget_el),
        current_amount = amountGetter() || widget_el.getAttribute('data-amount') && Number( widget_el.getAttribute('data-amount') ),
        current_qty = amountGetter.qtySelector ? ( amountGetter.getQty(amountGetter.qtySelector) || 1 ) : 1,
        qty_interval,
        updateAmount = function (amount, qty) {
          log('updateAmount', amount, qty);
          if( !amount ) return;
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
            // _options = _copy(_options);
            console.log('_options.widget', _copy(_options.widget) );
            if( custom_widget_options.type ) _options.widget.type = custom_widget_options.type;
            if( custom_widget_options.preferences ) {
              _options.widget.preferences = custom_widget_options.preferences;
              _options.widget.styles = '';
            }
            console.log('custom_options.widget', _copy(_options.widget) );
            widget.render(_choices, _options);
            widget_el.style.opacity = null;
          });
        },
        onDomChanges = function () {
          // if( !document.body.contains(widget_el) ) return _removeListener(onDomChanges);
          if( !document.body.contains(widget_el) ) return $live.off(onDomChanges);

          amountGetter = _amountGetter(widget_el);
          var amount = amountGetter();

          if( amount && amount !== current_amount ) updateAmount(amount);
        };

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
