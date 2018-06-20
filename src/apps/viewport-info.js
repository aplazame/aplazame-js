
var dE = document.documentElement;

module.exports = function () {

  var viewport = {};

  // http://ryanve.com/lab/dimensions/
  viewport.screen = window.screen ? {
    availWidth: screen.availWidth,
    availHeight: screen.availHeight,
    width: screen.width,
    height: screen.height,
    availLeft: screen.availLeft,
    availTop: screen.availTop,
    colorDepth: screen.colorDepth,
    orientation: screen.orientation ? {
      angle: screen.orientation.angle,
      type: screen.orientation.type,
    } : {}
  } : {};
  viewport.document = {
    clientWidth: dE.clientWidth,
    clientHeight: dE.clientHeight,
  };
  viewport.window = {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
  };

  return viewport;
  
};
