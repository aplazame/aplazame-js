
var message_listeners = {}, no_listeners = [], simulator_id = -1,
    widgetV2 = require('./simulator-widget-v2'),
    widgetV3 = require('./simulator-widget-v3'),
    amount_tools = require('../../src/tools/amount-price'),
    color_tools = require('../../src/tools/colors'),
    widget = {
      id: simulator_id,
      el: document.body.querySelector('#main') || document.body,
      showInfo: function () {
        postMessage('widget:showInfo');
      }
    },
    widget_version,
    widget_type,
    widget_handler;

if( location.href.match(/[?&]simulator=(\w+?)(&|$)/) ) {
  simulator_id = Number(location.href.match(/[?&]simulator=(\w+?)(&|$)/)[1]);
}

function onMessage(event_name, handler) {
  message_listeners[event_name] = message_listeners[event_name] ||[];
  message_listeners[event_name].push(handler);
}

window.addEventListener('message', function (e) {
  var message = e.data;

  (message_listeners[message.event] || no_listeners).forEach(function (listener) {
    listener(message.data);
  });
});

function postMessage (event_name, data) {
  parent.window.postMessage({
    aplazame: 'simulator',
    event: event_name,
    data: data,
    simulator_id: simulator_id,
  }, '*');
}

onMessage('simulator:data', function (simulator_data) {

  var simulator = Object.create(simulator_data);

  simulator.getAmount = amount_tools.getAmount;
  simulator.getPrice = amount_tools.getPrice;
  simulator.lighten = color_tools.lightenHEX;
  simulator.brightness = color_tools.brightness;

  widget.simulator = simulator;

  if( !widget_handler || widget_version !== simulator_data.version || widget_type !== simulator_data.type ) {
    widget_handler = simulator.preferences.version === 3 ? widgetV3(widget) : widgetV2(widget);
    widget_type = simulator_data.type;
    widget_version = simulator_data.version;
  }

  widget_handler.render();
});

var iframe_height = document.body.clientHeight;
setInterval(function () {
  if( document.body.clientHeight !== iframe_height ) {
    iframe_height = document.body.clientHeight;
    postMessage('iframe:resize', { height: iframe_height });
  }
}, 40);

postMessage('require:data');
