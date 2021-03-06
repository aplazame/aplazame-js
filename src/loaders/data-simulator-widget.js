
import modal from '../apps/modal';
import api from '../core/api';
import widgetRaw from '../../widgets/simulator/simulator-widget-raw';
// import widgetV2 from '../../widgets/simulator/simulator-widget-v2';
import widgetV3 from '../../widgets/simulator/simulator-widget-v3';
import _widgetIframe from './data-simulator-iframe';
import {getAmount, getPrice} from '../tools/amount-price';
import color_tools from '../tools/colors';

import _renderModalInfo from '../../widgets/simulator/templates/modal-instalments.ejs';

export default function (aplazame) {

  var _ = aplazame._,
      serial = 1,
      widgetIframe = _widgetIframe(aplazame),
      getWidgetHandler = function (type, version, preferences) {
        if( type === 'raw' ) return widgetRaw;

        if( version === 3 && !preferences.custom_styles || version === 2 ) {
          return widgetIframe;
        }

        return widgetV3;
      },
      initWidgetHandler = null;

  function maxInstalments (prev, choice) {
    if( prev === null ) {
      return choice;
    } else {
      return choice.num_instalments > prev.num_instalments ? choice : prev;
    }
  }

  function maxAnnualEquivalent (prev, choice) {
    if( prev === null ) {
      return choice;
    } else {
      return choice.annual_equivalent > prev.annual_equivalent ? choice : prev;
    }
  }

  function Widget (widget_el, options) {
    this.id = serial++;
    this.el = widget_el;
    this.options = options || {};
    this.api = api;
  }

  Widget.prototype.render = function (choices, data) {
    if( !data.widget ) return;

    var widget = this,
        widget_version = data.widget.preferences && Number(data.widget.preferences.version) || 2,
        widget_type = data.widget.type;

    widget.type = widget_type;
    widget.version = widget_version;

    var simulator_data = widget.simulator_data || {
      version: widget_version,
      widgets_base: api.widgets_base,
      custom_styles: data.widget.styles,
      data: data,
      currency: widget.options.currency,
      country: widget.options.country,
    };
    simulator_data.type = widget_type;
    simulator_data.preferences = data.widget.preferences || {};
    widget.simulator_data = simulator_data;
    simulator_data.choices = choices;


    if( widget.simulator ) {
      simulator_data.choice = (function (choices, num_instalments) {

        var choice = choices[choices.length - 1];
        choices.forEach(function (_choice) {
          if( _choice.num_instalments === num_instalments ) choice = _choice;
        });
        return choice;

      })(choices, widget.simulator.choice.num_instalments);
    } else {
      simulator_data.choice = choices[choices.length - 1];
      choices.forEach(function (_choice) {
        if( _choice.annual_equivalent < widget.simulator_data.data.annual_equivalent ) simulator_data.choice = _choice;
      });
      // widget.simulator = Object.create(simulator_data);
      widget.simulator = (function () {
        function SimulatorData () {}
        SimulatorData.prototype = simulator_data;
        return new SimulatorData();
      })();
      widget.simulator.$widget = widget;
      widget.simulator.getAmount = getAmount;
      widget.simulator.getPrice = getPrice;
      widget.simulator.lighten = color_tools.lightenHEX;
      widget.simulator.brightness = color_tools.brightness;
    }
    simulator_data.zero_interest_campaign = (simulator_data.choice.annual_equivalent === 0);

    widget.handler = (function (_initWidgetHandler) {

      if( _initWidgetHandler === initWidgetHandler && widget.handler ) return widget.handler;

      initWidgetHandler = _initWidgetHandler;
      if( widget.handler ) widget.handler.detach();

      return initWidgetHandler(widget);

    })( getWidgetHandler(widget_type, widget_version, data.widget.preferences || {}) );

    widget.handler.render();
  };

  Widget.prototype.showInfo = function () {
    var widget = this,
        choices = widget.simulator.choices,
        data = widget.simulator.data;

    if( widget.simulator_data.preferences.disable_modal ) return;

    var highlighted_num_instalments = choices.filter(function( choice ){
      return data.highlighted_num_instalments.indexOf( choice.num_instalments ) > -1;
    });

    modal({
      size: 'lg',
      card: { className: 'has-cta modal-instalments-info _v3' },
      template: _renderModalInfo({
        widget: widget,
        max_choice: choices.reduce(maxInstalments, null),
        merchant_annual_equivalent: data.annual_equivalent || choices.reduce(maxAnnualEquivalent, null).annual_equivalent,
        reference_annual_equivalent: data.reference_annual_equivalent,
        choices: choices,
        highlighted_num_instalments: highlighted_num_instalments,
        data: data,
        widgets_base: api.widgets_base,
        _options: widget.options,
        currency: widget.options.currency,
        country: widget.options.country,
        getAmount: _.getAmount,
        months: function (m) {
          return m > 1 ? 'meses' : 'mes';
        },
      }),
    });

  };

  return Widget;
}
