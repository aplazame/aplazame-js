
import renderWidget from './templates/widget-raw.ejs';

export default function (widget) {

  var widget_el = widget.el;

  function _onClick () {
    widget.showInfo();
  }

  function _unbind () {
    widget_el.removeEventListener('click', _onClick);
  }

  return {
    render: function () {
      widget_el.innerHTML = renderWidget(widget.simulator);

      widget_el.addEventListener('click', _onClick);
    },
    unbind: _unbind,
    detach: function () {
      _unbind();
      widget_el.innerHTML = '';
    },
  };

}
