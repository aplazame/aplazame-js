
import _renderWidget from './templates/widget-v3.ejs';

export default function (widget) {

  var widget_el = widget.el,
      click_el = widget_el,
      remove_style = / Trident\//.test(navigator.userAgent) ? '' : null,
      textSelector = function (selector, text) {
        if( widget_el.querySelector(selector) ) widget_el.querySelector(selector).textContent = text;
      },
      selectNumInstalmentsChoice = function (choice) {
        widget.simulator.choice = choice;
        textSelector('.aplazame-widget-price', widget.simulator.getAmount(choice.amount) );
        textSelector('.aplazame-widget-instalments-num', choice.num_instalments );
        textSelector('.aplazame-widget-choice-button-value', choice.num_instalments );
      },
      selectNumInstalments = function (num_instalments) {
        widget.simulator.choices.forEach(function (choice) {
          if( choice.num_instalments === num_instalments ) selectNumInstalmentsChoice(choice);
        });
      },
      styles_link = document.createElement('link'),
      _onReady = function () {
        window.removeEventListener('load', _onReady);
        window.removeEventListener('DOMContentLoaded', _onReady);

        styles_link.rel = 'stylesheet';
        styles_link.href = widget.simulator.static_url + 'widgets/simulator/widget-v3.css';
        styles_link.onload = function () {
          widget_el.style.display = remove_style;
        };

        document.head.appendChild(styles_link);
      };


  if( !widget.simulator.preferences.custom_styles || widget.type !== 'text' ) {
    widget_el.style.display = 'none';
    if( document.readyState === 'complete' ) _onReady();
    else {
      window.addEventListener('load', _onReady);
      window.addEventListener('DOMContentLoaded', _onReady);
    }
  }

  function _onClick () {
    widget.showInfo();
  }

  function _selectChange () {
    selectNumInstalments( Number(widget_el.querySelector('select').value) );
  }

  function _increaseNumInstalments () {
    var index = widget.simulator.choices.indexOf(widget.simulator.choice),
        choice = widget.simulator.choices[index + 1];
    if( choice ) selectNumInstalmentsChoice(choice);
  }

  function _decreaseNumInstalments () {
    var index = widget.simulator.choices.indexOf(widget.simulator.choice),
        choice = widget.simulator.choices[index - 1];
    if( choice ) selectNumInstalmentsChoice(choice);
  }

  function _unbind () {
    click_el.removeEventListener('click', _onClick);
    widget_el.removeEventListener('click', _onClick);
    if( widget_el.querySelector('select') ) {
      widget_el.querySelector('select').removeEventListener('change', _selectChange);
    }
    if( widget_el.querySelector('.aplazame-widget-choice-button-increase') ) {
      widget_el.querySelector('.aplazame-widget-choice-button-increase').removeEventListener('click', _increaseNumInstalments);
    }
    if( widget_el.querySelector('.aplazame-widget-choice-button-decrease') ) {
      widget_el.querySelector('.aplazame-widget-choice-button-decrease').removeEventListener('click', _decreaseNumInstalments);
    }
  }

  var handler = {
    render: function () {
      _unbind();
      var type = widget.simulator.type;
      widget_el.innerHTML = _renderWidget(widget.simulator);

      if( type === 'select' ) {
        return widget_el.querySelector('select').addEventListener('change', _selectChange);
      }

      if( type === 'big-button' ) {
        widget_el.querySelector('.aplazame-widget-choice-button-decrease').addEventListener('click', _decreaseNumInstalments);
        widget_el.querySelector('.aplazame-widget-choice-button-increase').addEventListener('click', _increaseNumInstalments);
        return;
      }

      click_el = type === 'button' ? widget_el.querySelector('.aplazame-widget-instalments') : widget_el;
      click_el.addEventListener('click', _onClick);
    },
    unbind: _unbind,
    detach: function () {
      document.head.removeChild(styles_link);
      _unbind();
    }
  };

  return handler;

}
