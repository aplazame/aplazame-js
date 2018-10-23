
module.exports = function (aplazame) {

  var _ = aplazame._,
      modal = require('../apps/modal'),
      serial = 1,
      api = require('../core/api'),
      widgetRaw = require('../../widgets/simulator/simulator-widget-raw'),
      // widgetV2 = require('../../widgets/simulator/simulator-widget-v2'),
      widgetV3 = require('../../widgets/simulator/simulator-widget-v3'),
      widgetIframe = require('./data-simulator-iframe')(aplazame),
      getWidgetHandler = function (type, version, preferences) {
        if( type === 'raw' ) return widgetRaw;

        if( version === 3 && !preferences.custom_styles || version === 2 ) {
          return widgetIframe;
        }

        return widgetV3;
      },
      initWidgetHandler = null,
      amount_tools = require('../tools/amount-price'),
      color_tools = require('../tools/colors');

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
      static_url: api.static_url,
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
      // widget.simulator = Object.create(simulator_data);
      widget.simulator = (function () {
        function SimulatorData () {}
        SimulatorData.prototype = simulator_data;
        return new SimulatorData();
      })();
      widget.simulator.$widget = widget;
      widget.simulator.getAmount = amount_tools.getAmount;
      widget.simulator.getPrice = amount_tools.getPrice;
      widget.simulator.lighten = color_tools.lightenHEX;
      widget.simulator.brightness = color_tools.brightness;
    }

    simulator_data.zero_interest_campaign = choices.some(function (choice) {
      return choice.annual_equivalent === 0;
    });

    widget.handler = (function (_initWidgetHandler) {

      if( _initWidgetHandler !== initWidgetHandler ) {
        if( widget.handler ) widget.handler.unbind();
        initWidgetHandler = _initWidgetHandler;
      }

      return initWidgetHandler(widget);

    })( getWidgetHandler(widget_type, widget_version, data.widget.preferences || {}) );

    widget.handler.render();
  };

  Widget.prototype.showInfo = function () {
    var widget = this,
        _renderModalInfo = require('../../.tmp/simulator/templates/modal-instalments.tmpl'),
        choices = widget.simulator.choices,
        data = widget.simulator.data;

    if( widget.simulator_data.preferences.disable_modal ) return;

    modal({
      size: 'lg',
      card: { className: 'has-cta modal-instalments-info _v3' },
      template: _renderModalInfo({
        widget: widget,
        max_choice: choices.reduce(maxInstalments, null),
        merchant_annual_equivalent: data.annual_equivalent || choices.reduce(maxAnnualEquivalent, null).annual_equivalent,
        reference_annual_equivalent: data.reference_annual_equivalent,
        choices: choices,
        data: data,
        static_url: api.static_url,
        _options: widget.options,
        currency: widget.options.currency,
        country: widget.options.country,
        getAmount: _.getAmount,
        months: function (m) {
          return m > 1 ? 'meses' : 'mes';
        }
      })
    });
  };

  return Widget;
};
