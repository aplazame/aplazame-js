
var renderWidget = require('../../.tmp/simulator/templates/widget-v2.tmpl');

module.exports = function (widget) {

  var widget_el = widget.el;

  function onClick () {
    widget.showInfo();
  }

  return {
    render: function () {
      widget_el.innerHTML = renderWidget(widget.simulator);

      (widget_el.querySelector('button') || widget_el).addEventListener('click', onClick);
    },
    unbind: function () {
      widget_el.removeEventListener('click', onClick);
    }
  };

};
