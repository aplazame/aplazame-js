
if( !Element.prototype.matchesSelector ) {
  Element.prototype.matchesSelector = (
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector
  );
}

if( !Element.prototype.closest ) {
  Element.prototype.closest = function (selector) {
    var el = this;

    while( el ) {
      if( el.matchesSelector(selector) ) {
        break;
      }
      el = el.parentElement;
    }
    return el;
  };
}

if( !Element.prototype.addEventListener ) {
  if( Element.prototype.attachEvent ) {
    Element.prototype.addEventListener = function (eventName, listener) {
      return Element.prototype.attachEvent( 'on' + eventName, listener );
    };
    Element.prototype.removeEventListener = function (eventName, listener) {
      return Element.prototype.detachEvent( 'on' + eventName, listener );
    };
  } else {
    throw 'Browser not compatible with element events';
  }
}

(function (root) {
  'use strict';

  root.matchMedia = root.matchMedia || root.webkitMatchMedia || root.mozMatchMedia || root.msMatchMedia;
})(this);

// from https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/find#Polyfill
if (!Array.prototype.find) {
  Array.prototype.find = function(iteratee, thisArg) {
    if (this === null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof iteratee !== 'function') {
      throw new TypeError('predicate must be a function');
    }

    thisArg = thisArg === undefined ? this : thisArg;
    var value;

    for( var i = 0, len = this.length; i < len; i++ ) {
      value = this[i];
      if( iteratee.call(thisArg, value, i, this) ) {
        return value;
      }
    }
    return undefined;
  };
}
