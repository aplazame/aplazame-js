
var message_listeners = {}, no_listeners = [], simulator_id = -1,
    widgetV2 = require('./simulator-widget-v2'),
    widgetV3 = require('./simulator-widget-v3'),
    amount_tools = require('../../src/tools/amount-price'),
    color_tools = require('../../src/tools/colors'),
    widget = {
      id: simulator_id,
      el: document.body,
      showInfo: function () {
        postMessage('widget:showInfo');
      }
    },
    widget_version,
    widget_type,
    widget_handler;

if( location.href.match(/[\?&]simulator=(\w+?)(\&|$)/) ) {
  simulator_id = Number(location.href.match(/[\?&]simulator=(\w+?)(\&|$)/)[1]);
}

function onMessage(event_name, handler) {
  message_listeners[event_name] = message_listeners[event_name] || [];
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

  // console.log('render:widget', widget);
});

var iframe_height = document.body.clientHeight;
setInterval(function () {
  if( document.body.clientHeight !== iframe_height ) {
    iframe_height = document.body.clientHeight;
    postMessage('iframe:resize', { height: iframe_height });
  }
}, 40);

postMessage('require:data');

console.log('simulator.js running');


// var _ = require('../../src/tools/tools'),
//     each = Array.prototype.forEach,
//     waitingForData;
//
// function emitSize () {
//   setTimeout(function () {
//     parent.window.postMessage({
//       aplazame: 'simulator',
//       event: 'resize',
//       width: document.body.clientWidth,
//       height: document.body.clientHeight
//     }, '*');
//   },1);
// }
//
// window.addEventListener('load', emitSize);
// window.addEventListener('resize', emitSize);
//
// function maxInstalments (prev, choice) {
//   if( prev === null ) {
//     return choice;
//   } else {
//     return choice.num_instalments > prev.num_instalments ? choice : prev;
//   }
// }
//
// var main = document.getElementById('main'), currentMessage,
//     tmplWidgetV2 = require('../../.tmp/simulator/templates/widget-v2.tmpl' ),
//     tmplWidgetV3 = require('../../.tmp/simulator/templates/widget-v3.tmpl' ),
//     widgetActions = {
//       showInfo: function () {
//         parent.window.postMessage({
//           aplazame: 'widget',
//           event: 'showInfo',
//         }, '*');
//       }
//     },
//     renderWidget = function () {
//       _.removeClass(main, 'loading');
//       var widgetSettings = currentMessage.options.widget;
//       // var min = currentMessage.choices[0].num_instalments;
//       var max = currentMessage.choices[currentMessage.choices.length - 1].num_instalments;
//
//       var tmplWidget = widgetSettings.preferences.version == 3 ? tmplWidgetV3 : tmplWidgetV2;
//
//       var decimals_separator = currentMessage.currency === 'EUR' ? ',' : '.';
//       var group_separator = currentMessage.currency === 'EUR' ? '.' : ',';
//
//       // widgetSettings.type = 'select';
//       // widgetSettings.type = 'big-button';
//
//       main.innerHTML = tmplWidget({
//         $widget: widgetSettings,
//         preferences: widgetSettings.preferences,
//         getAmount: function (amount, _decimals_separator, _group_separator) {
//           return _.getAmount(amount, _decimals_separator || decimals_separator, _group_separator || group_separator);
//         },
//         getPrice: _.getPrice,
//         brightness: _.brightness,
//         lighten: _.lightenHEX,
//         choice: currentMessage.$$choice,
//         choices: currentMessage.choices,
//         options: currentMessage.options,
//         amount: currentMessage.amount,
//         currency: currentMessage.currency,
//         selectedNumInstalments: max,
//         logo: require('../../.tmp/simulator/templates/logo.tmpl')({}),
//         isMobile: currentMessage.isMobile,
//       });
//       emitSize();
//
//       each.call( main.querySelectorAll('[data-action]'), function (element) {
//
//         element.addEventListener('click', function (e) {
//           var action = element.getAttribute('data-action');
//
//           if( action !== undefined ) e.preventDefault();
//           if( widgetActions[action] ) widgetActions[action]();
//         });
//
//       } );
//     },
//     onMessage = {
//       choices: function (message) {
//         if( waitingForData ) {
//           clearInterval(waitingForData);
//         }
//         currentMessage = message;
//         currentMessage.$$choice = currentMessage.choices.reduce(maxInstalments, null);
//
//         var price = document.getElementById('.aplazame-widget-button .amount .price');
//
//         if( price ) {
//           price.textContent = _.getAmount(currentMessage.$$choice.amount);
//         } else {
//           renderWidget();
//         }
//
//       },
//       loading: function (_message) {
//         _.addClass(main, 'loading');
//       },
//       abort: function (_message) {
//         _.removeClass(main, 'loading');
//       }
//     };
//
// _.onMessage('simulator', function (_e, message) {
//   if( onMessage[message.event] ) {
//     onMessage[message.event](message);
//   }
// });
//
// var simulatorId = -1;
//
// if( location.href.match(/[\?&]simulator=(\w+?)(\&|$)/) ) {
//   simulatorId = Number(location.href.match(/[\?&]simulator=(\w+?)(\&|$)/)[1]);
// }
//
// function requireData () {
//   parent.window.postMessage({
//     aplazame: 'simulator',
//     event: 'require.choices',
//     simulatorId: simulatorId
//   }, '*');
// }
//
// requireData();
