
var renderWidget = require('../../.tmp/simulator/templates/widget-v2.tmpl');

module.exports = function (widget) {

  var widget_el = widget.el,
      button_el = null;

  function _onClick () {
    widget.showInfo();
  }

  function _unbind () {
    widget_el.removeEventListener('click', _onClick);
    if( button_el ) button_el.removeEventListener('click', _onClick);
  }

  return {
    render: function () {
      widget_el.innerHTML = renderWidget(widget.simulator);

      button_el = widget_el.querySelector('button');

      (button_el || widget_el).addEventListener('click', _onClick);
    },
    unbind: _unbind,
    detach: function () {
      _unbind();
      widget_el.innerHTML = '';
    },
  };

};
