
module.exports = function (aplazame) {

  var _ = aplazame._;

  return function (widget) {

    var widget_el = widget.el,
        iframe = _.getIFrame({ width: '100%', height: '40px' });

    widget_el.appendChild( iframe );
    iframe.src = widget.simulator.static_url + 'widgets/simulator/simulator.html?' + _.now() + '&simulator=' + widget.id;

    _.onMessage('simulator', function (e, message) {
      if( message.simulator_id !== widget.id ) return;

      switch( message.event ) {
        case 'require:data':
          e.source.postMessage({
            event: 'simulator:data',
            data: widget.simulator_data
          }, '*');
          break;
        case 'iframe:resize':
          iframe.style.height = message.data.height + 'px';
          break;
        case 'widget:showInfo':
          widget.showInfo();
          break;
      }
    });

    return {
      render: function () {
        iframe.contentWindow.postMessage({
          event: 'simulator:data',
          data: widget.simulator_data
        }, '*');
      }
    };

  };

};
