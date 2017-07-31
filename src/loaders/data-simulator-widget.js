
module.exports = function (aplazame) {

  var _ = aplazame._,
      modal = require('../apps/modal');

  function maxInstalments (prev, choice) {
    if( prev === null ) {
      return choice;
    } else {
      return choice.num_instalments > prev.num_instalments ? choice : prev;
    }
  }

  function Widget (widget_el, options) {
    this.el = widget_el;
    this.options = options || {};
  }

  Widget.prototype.render = function (choices, data) {
    if( !data.widget ) return;

    var widget = this,
        widget_version = data.widget.preferences && data.widget.preferences.version || 2,
        widget_type = data.widget.type;

    widget.simulator = {
      choices: choices,
      data: data,
    };

    console.log('widget.render', widget, widget_type, widget_version );
    console.log('widget.choices', choices );
    console.log('widget.data', data );

    widget.el.style.height = '100px';
    widget.el.style.backgroundColor = 'red';

    _.on(widget.el, 'click', function () {
      widget.showModalInfo();
    });

  };

  Widget.prototype.showModalInfo = function () {
    var widget = this,
        _renderModalTemplate = require('../../.tmp/simulator/templates/modal-instalments.tmpl'),
        choices = widget.simulator.choices,
        data = widget.simulator.data;

    modal({
      size: 'lg',
      card: {
        className: 'modal-instalments-info'
      },
      template: _renderModalTemplate({
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
