
module.exports = function (aplazame) {

  var _ = aplazame._,
      modal = require('../apps/modal'),
      serial = 1,
      widgetRaw = require('../../widgets/simulator/simulator-widget-raw'),
      widgetV2 = require('../../widgets/simulator/simulator-widget-v2'),
      widgetV3 = require('../../widgets/simulator/simulator-widget-v3'),
      getWidgetHandler = function (type, version) {
        return type === 'raw' ? widgetRaw : (version === 3 ? widgetV3 : widgetV2 );
      },
      amount_tools = require('../../src/tools/amount-price'),
      color_tools = require('../../src/tools/colors');

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
  }

  Widget.prototype.render = function (choices, data) {
    if( !data.widget ) return;

    var widget = this,
        widget_version = data.widget.preferences && Number(data.widget.preferences.version) || 2,
        widget_type = data.widget.type;

    if( !widget.handler ) widget.handler = getWidgetHandler(widget_type, widget_version)(widget);
    else {
      if( widget.type !== widget_type || widget_version !== widget.version ) {
        widget.handler.unbind();
        widget.handler = getWidgetHandler(widget_type, widget_version)(widget);
      }
    }

    widget.type = widget_type;
    widget.version = widget_version;

    if( widget.simulator ) {
      widget.simulator.choice = (function (choices, num_instalments) {

        var choice = choices[choices.length - 1];
        choices.forEach(function (_choice) {
          if( _choice.num_instalments === num_instalments ) choice = _choice;
        });
        return choice;

      })(choices, widget.simulator.choice.num_instalments);
    } else {
      widget.simulator = {
        $widget: widget,
        choice: choices[choices.length - 1],
        preferences: data.widget.preferences || {},
        getAmount: amount_tools.getAmount,
        getPrice: amount_tools.getPrice,
        lighten: color_tools.lightenHEX,
        currency: widget.currency,
      };
    }

    widget.simulator.choices = choices;
    widget.simulator.data = data;

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
