
var renderWidget = require('../../.tmp/simulator/templates/widget-v3.tmpl');

module.exports = function (widget) {

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
      onReady = function () {
        window.removeEventListener('load', onReady);
        window.removeEventListener('DOMContentLoaded', onReady);

        styles_link.rel = 'stylesheet';
        styles_link.href = widget.simulator.static_url + 'widgets/simulator/widget-v3.css';
        styles_link.onload = function () {
          widget_el.style.display = remove_style;
        };

        document.head.appendChild(styles_link);
      };


  if( !widget.simulator.preferences.custom_styles || widget.type !== 'text' ) {
    widget_el.style.display = 'none';
    if( document.readyState === 'complete' ) onReady();
    else {
      window.addEventListener('load', onReady);
      window.addEventListener('DOMContentLoaded', onReady);
    }
  }

  function onClick () {
    widget.showInfo();
  }

  function selectChange () {
    selectNumInstalments( Number(widget_el.querySelector('select').value) );
  }

  function increaseNumInstalments () {
    var index = widget.simulator.choices.indexOf(widget.simulator.choice),
        choice = widget.simulator.choices[index + 1];
    if( choice ) selectNumInstalmentsChoice(choice);
  }

  function decreaseNumInstalments () {
    var index = widget.simulator.choices.indexOf(widget.simulator.choice),
        choice = widget.simulator.choices[index - 1];
    if( choice ) selectNumInstalmentsChoice(choice);
  }

  function unbind () {
    click_el.removeEventListener('click', onClick);
    if( widget_el.querySelector('select') ) {
      widget_el.querySelector('select').removeEventListener('change', selectChange);
    }
    if( widget_el.querySelector('.aplazame-widget-choice-button-increase') ) {
      widget_el.querySelector('.aplazame-widget-choice-button-increase').removeEventListener('click', increaseNumInstalments);
    }
    if( widget_el.querySelector('.aplazame-widget-choice-button-decrease') ) {
      widget_el.querySelector('.aplazame-widget-choice-button-decrease').removeEventListener('click', decreaseNumInstalments);
    }
  }

  var handler = {
    render: function () {
      unbind();
      var type = widget.simulator.type;
      widget_el.innerHTML = renderWidget(widget.simulator);

      if( type === 'select' ) {
        return widget_el.querySelector('select').addEventListener('change', selectChange);
      }

      if( type === 'big-button' ) {
        widget_el.querySelector('.aplazame-widget-choice-button-decrease').addEventListener('click', decreaseNumInstalments);
        widget_el.querySelector('.aplazame-widget-choice-button-increase').addEventListener('click', increaseNumInstalments);
        return;
      }

      if( type === 'button' ) {
        click_el = widget_el.querySelector('.aplazame-widget-instalments');
      }

      click_el.addEventListener('click', onClick);
    },
    detach: function () {
      document.head.removeChild(styles_link);
      unbind();
    }
  };

  return handler;

};
