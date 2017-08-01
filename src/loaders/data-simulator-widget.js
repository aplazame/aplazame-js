
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
      amount_tools = require('../tools/amount-price'),
      color_tools = require('../tools/colors');

  function maxInstalments (prev, choice) {
    if( prev === null ) {
      return choice;
    } else {
      return choice.num_instalments > prev.num_instalments ? choice : prev;
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
        widget_type = data.widget.type,
        simulator_data = {
          type: widget_type,
          version: widget_version,
          preferences: data.widget.preferences || {},
          choice: choices[choices.length - 1],
          currency: 'EUR',
          static_url: api.staticUrl,
          custom_styles: data.widget.styles,
          choices: choices,
          data: data,
        };

    widget.type = widget_type;
    widget.version = widget_version;
    widget.simulator_data = simulator_data;

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
      widget.simulator = Object.create(simulator_data);
      widget.simulator.$widget = widget;
      widget.simulator.getAmount = amount_tools.getAmount;
      widget.simulator.getPrice = amount_tools.getPrice;
      widget.simulator.lighten = color_tools.lightenHEX;
      widget.simulator.brightness = color_tools.brightness;
    }

    if( !widget.handler ) widget.handler = getWidgetHandler(widget_type, widget_version, data.widget.preferences || {})(widget);
    else {
      if( widget.type !== widget_type || widget_version !== widget.version ) {
        widget.handler.unbind();
        widget.handler = getWidgetHandler(widget_type, widget_version, data.widget.preferences || {})(widget);
      }
    }

    widget.handler.render();

  };

  Widget.prototype.showInfo = function () {
    var widget = this,
        _renderModalInfo = require('../../.tmp/simulator/templates/modal-instalments.tmpl'),
        choices = widget.simulator.choices,
        data = widget.simulator.data;

    modal({
      size: 'lg',
      card: {
        className: 'modal-instalments-info'
      },
      template: _renderModalInfo({
        selectedChoice: choices.reduce(maxInstalments, null),
        choices: choices,
        data: data,
        currency: widget.options.currency || 'EUR',
        country: widget.country || 'ES',
        getAmount: _.getAmount,
        months: function (m) {
          return m > 1 ? 'meses' : 'mes';
        }
      })
    });
  };

  return Widget;
};
