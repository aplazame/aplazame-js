'use strict';

module.exports = function (aplazame) {

  var $live = require('live-dom'),
      _amountGetter = require('./data-simulator-amount')(aplazame),
      Widget = require('./data-simulator-widget')(aplazame),
      log = require('../tools/log'),
      deserialize = require('../tools/deserialize').deserialize;

  $live('[data-aplazame-simulator]', function (widget_el) {

    var simulator_options = { view: widget_el.getAttribute('data-view') || 'product' },
        widget = new Widget(widget_el, {
          currency:  widget_el.getAttribute('data-currency') || 'EUR',
          country:  widget_el.getAttribute('data-country') || 'ES',
        }),
        custom_widget_options = widget_el.getAttribute('data-options') && (function (attr_content) {

          try{
            // assume JSON if colon present
            var custom_options = /:/.test(attr_content) ?
              JSON.parse( attr_content.replace(/&quot;/g, '"') ) :
              // JSON examples
              // data-options=“{&quot;text_color&quot;:&quot;#ff0000&quot;,&quot;btn_text_color&quot;:&quot;#00ff00&quot;,&quot;btn_bg_color&quot;:&quot;#0000ff&quot;,&quot;smart_title&quot;:true,&quot;branding&quot;:false}”
              // [important! single quotes] data-options='{"text_color":"#ff0000","btn_text_color":"#00ff00","btn_bg_color":"#0000ff","smart_title":true,"branding":false}'
              deserialize( attr_content.trim() );
              // querystring example
              // data-options="text_color=#ff0000&btn_text_color=#00ff00&btn_bg_color=#0000ff&smart_title=true&branding=false"
          } catch(err) {
            throw new Error('data-options should use JSON or querystring format');
          }
          // settings.align (optional, default: center)

          // custom_options.smart_title (optional, default: false)
          if( typeof custom_options.smart_title === 'string' ) custom_options.smart_title = custom_options.smart_title === 'true';

          // custom_options.branding (optional, default: true)
          if( typeof custom_options.branding === 'string' ) custom_options.branding = custom_options.branding === 'true';

          if( !( 'branding' in custom_options ) ) custom_options.branding = true;

          if( !custom_options.text_color ) throw new Error('text_color missing in data-options (color of text outside button)');
          if( !custom_options.btn_text_color ) throw new Error('btn_text_color missing in data-options (color of text inside button)');
          if( !custom_options.btn_bg_color ) throw new Error('btn_bg_color missing in data-options (background color button)');

          return custom_options;

        })( widget_el.getAttribute('data-options') ),
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
            if( custom_widget_options ) _options.widget = custom_widget_options;
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
