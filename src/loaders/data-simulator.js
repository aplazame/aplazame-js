
import $live from 'live-dom';

import log from '../tools/log';

import _getSimulatorWidget from './data-simulator-widget';
import {amountGetter, qtyGetter, getDataAmount} from './data-simulator-amount';

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
  'disable_modal': false,
  version: 3
};

var custom_options_set = {
  'btn_text_color': 'btn-text-color',
  'branding': 'branding',
  'align': 'align',
  'text_color': 'text-color',
  'btn_bg_color': 'btn-bg-color',
  'custom_styles': 'custom-styles',
  'smart_title': 'title-smart',
  'title_default': 'title-default',
  'title_zero_interest': 'title-zero-interest',
  'disable_modal': 'disable-modal',
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

export default function (aplazame) {

  var Widget = _getSimulatorWidget(aplazame);

  $live('[data-aplazame-simulator]', function (widget_el) {

    log('[data-aplazame-simulator]', widget_el );

    var simulator_options = {
          view: widget_el.getAttribute('data-view') || 'product',
          country: widget_el.getAttribute('data-country') || 'ES',
          currency:  widget_el.getAttribute('data-currency') || 'EUR',
        },
        widget = new Widget(widget_el, {
          currency:  widget_el.getAttribute('data-currency') || 'EUR',
          country:  widget_el.getAttribute('data-country') || 'ES',
        }),
        custom_widget_options = _getCustomOptions(widget_el),
        getAmount = amountGetter(widget_el),
        getQty = qtyGetter(widget_el),
        current_amount = getAmount(),
        current_qty = getQty(),
        qty_interval,
        updateAmount = function (amount, qty) {
          log('updateAmount', amount, qty);
          console.log('updateAmount', amount, qty);
          if( !amount ) return;

          widget_el.style.opacity = 0.5;
          aplazame.simulator( amount*qty, simulator_options, function (_choices, _options) {
            if( qty !== undefined && qty !== current_qty ) return;
            if( _options.widget.disabled ) {
              if(qty_interval) clearInterval(qty_interval);
              // _removeListener(onDomChanges);
              $live.off(onDomChanges);
              return;
            }
            // _options = _copy(_options);
            if( custom_widget_options.type ) _options.widget.type = custom_widget_options.type;
            if( custom_widget_options.preferences ) {
              _options.widget.preferences = custom_widget_options.preferences;
              _options.widget.styles = '';
            } else {
              _options.widget.preferences.api_custom_styles = 'custom_styles' in _options.widget.preferences;
            }
            widget.render(_choices, _options);
            widget_el.style.opacity = null;
          });
        },
        onDomChanges = function () {
          // if( !document.body.contains(widget_el) ) return _removeListener(onDomChanges);
          if( !document.body.contains(widget_el) ) return $live.off(onDomChanges);

          var amount = getAmount(),
              qty = getQty();

          if( !amount || (amount === current_amount && qty === current_qty) ) return;

          current_amount = amount;
          current_qty = qty;

          updateAmount(amount, current_qty);
        };

    if( 'MutationObserver' in window ) (function (observer) {
      observer.observe(widget_el, { attributes: true });
    })(  new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if( /^data-type/.test(mutation.attributeName) || /^data-option-/.test(mutation.attributeName) ) {

          custom_widget_options = _getCustomOptions(widget_el);

          updateAmount(current_amount, current_qty);
        }
      });
    }) );

    qty_interval = setInterval(function () {
      var qty = getQty();

      console.log('qty changed', qty, qty !== current_qty );

      if( qty === current_qty ) return;

      current_qty = qty;
      updateAmount(current_amount, qty);
    }, 120);

    if( getDataAmount(widget_el) !== current_amount ) {
      //
    }
    updateAmount(current_amount, current_qty);
    $live(onDomChanges);

  });

}
