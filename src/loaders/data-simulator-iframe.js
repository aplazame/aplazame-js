
module.exports = function (aplazame) {

  var _ = aplazame._,
      api = require('../core/api'),
      iframe = _.getIFrame({ width: '100%', height: '40px' });

  return function (widget) {

    var widget_el = widget.el;

    return {
      render: function () {
        widget_el.appendChild( iframe );
        iframe.src = api.staticUrl + 'widgets/simulator/simulator.html?' + _.now() + '&simulator=' + id;

      }
    };

  };

};
