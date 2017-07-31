
var renderWidget = require('../../.tmp/simulator/templates/widget-v3.tmpl');

module.exports = function (widget) {

  var widget_el = widget.el,
      click_el = widget_el,
      textSelector = function (selector, text) {
        if( widget_el.querySelector(selector) ) widget_el.querySelector(selector).textContent = text;
      },
      selectNumInstalments = function (num_instalments) {
        widget.simulator.choices.forEach(function (choice) {
          if( choice.num_instalments === num_instalments ) {
            widget.simulator.choice = choice;
            textSelector('.aplazame-widget-price', widget.simulator.getAmount(choice.amount) );
            textSelector('.aplazame-widget-instalments-num', choice.num_instalments );
            textSelector('.aplazame-widget-choice-button-value', choice.num_instalments );
          }
        });
      };

  function onClick () {
    widget.showInfo();
  }

  function selectChange () {
    selectNumInstalments( Number(widget_el.querySelector('select').value) );
  }

  function increaseNumInstalments () {
    selectNumInstalments(widget.simulator.choice.num_instalments + 1);
  }

  function decreaseNumInstalments () {
    selectNumInstalments(widget.simulator.choice.num_instalments - 1);
  }

  var handler = {
    render: function () {
      handler.unbind();
      widget_el.innerHTML = renderWidget(widget.simulator);

      if( widget.type === 'select' ) {
        return widget_el.querySelector('select').addEventListener('change', selectChange);
      }

      if( widget.type === 'big-button' ) {
        widget_el.querySelector('.aplazame-widget-choice-button-decrease').addEventListener('click', decreaseNumInstalments);
        widget_el.querySelector('.aplazame-widget-choice-button-increase').addEventListener('click', increaseNumInstalments);
        return;
      }

      if( widget.type === 'button' ) {
        click_el = widget_el.querySelector('.aplazame-widget-instalments');
      }

      click_el.addEventListener('click', onClick);
    },
    unbind: function () {
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
  };

  return handler;

};
