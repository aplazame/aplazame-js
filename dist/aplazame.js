(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '0.0.357';
},{}],2:[function(require,module,exports){
module.exports = '@-webkit-keyframes aplazame-blur{0%{-webkit-filter:blur(0);filter:blur(0);}to{-webkit-filter:blur(3px);filter:blur(3px)}}@keyframes aplazame-blur{0%{-webkit-filter:blur(0);filter:blur(0)}to{-webkit-filter:blur(3px);filter:blur(3px)}}body.aplazame-blur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-filter:blur(3px);filter:blur(3px)}@media (min-width:601px){body.aplazame-blur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:aplazame-blur;animation-name:aplazame-blur}}body.aplazame-unblur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-filter:blur(0);filter:blur(0)}@media (min-width:601px){body.aplazame-unblur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:aplazame-blur;animation-name:aplazame-blur;-webkit-animation-direction:reverse;animation-direction:reverse}}';
},{}],3:[function(require,module,exports){
module.exports = '@-webkit-keyframes aplazame-logo-large{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}60%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes aplazame-logo-large{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}60%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes aplazame-logo-short{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}30%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes aplazame-logo-short{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}30%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes aplazame-logo-smile{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(2turn);transform:rotate(2turn)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}@keyframes aplazame-logo-smile{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(2turn);transform:rotate(2turn)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}.logo-aplazame{position:relative;display:inline-block;width:150px;height:150px}.logo-aplazame .line-large,.logo-aplazame .line-short,.logo-aplazame .smile{stroke:#ddd}.logo-aplazame .smile-outline{stroke:#485259}@media (min-width:480px){.logo-aplazame{width:200px;height:200px}}.logo-aplazame svg{position:absolute;top:0;left:0;width:100%;height:100%}.logo-aplazame.animate .line-large,.logo-aplazame.animate .line-short,.logo-aplazame.animate .smile{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.logo-aplazame.animate .smile{-webkit-animation-name:aplazame-logo-smile;animation-name:aplazame-logo-smile}.logo-aplazame.animate .line-large{-webkit-animation-name:aplazame-logo-large;animation-name:aplazame-logo-large}.logo-aplazame.animate .line-short{-webkit-animation-name:aplazame-logo-short;animation-name:aplazame-logo-short}';
},{}],4:[function(require,module,exports){
module.exports = '.aplazame-modal{height:100%;height:100vh;position:relative;z-index:2147483647;}body{overflow:hidden}@media (max-width:600px){html{background-color:#333a3e}body,html{height:100vh;margin:0;padding:0}body>:not(.aplazame-modal){display:none}}@media (min-width:601px){.aplazame-modal{position:fixed}}';
},{}],5:[function(require,module,exports){
module.exports = '@-webkit-keyframes aplazame-overlay{0%{opacity:0;}to{opacity:1}}@keyframes aplazame-overlay{0%{opacity:0}to{opacity:1}}.aplazame-overlay{font-family:Montserrat,sans-serif;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;width:100vw;height:100vh;background:rgba(53,64,71,.9);text-align:center;z-index:2147483646;-webkit-transform:translateZ(0);transform:translateZ(0)}.aplazame-overlay:before{content:\'\';display:block;height:50vh}.aplazame-logo-wrapper{display:inline-block;margin-top:-50%}.aplazame-overlay-loading-text{color:#95a6b1;margin-top:14px;font-size:14px}.aplazame-overlay-loading-text .text-error{color:#f08080}.aplazame-overlay-loading-text a{color:#f5f5f5;display:inline-block;text-decoration:none}.aplazame-overlay-loading-text a:hover{border-bottom:1px dotted #f5f5f5}.aplazame-overlay{-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.aplazame-overlay.aplazame-overlay-hide,.aplazame-overlay.aplazame-overlay-show{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-name:aplazame-overlay;animation-name:aplazame-overlay}.aplazame-overlay.aplazame-overlay-hide{-webkit-animation-direction:reverse;animation-direction:reverse}';
},{}],6:[function(require,module,exports){
module.exports = '<div class="card-content">  <header class="aplazame"></header>  <section class="info">    Elige el número de meses y la cuota que más te convengan  </section>  <div class="choices-wrapper">    <% for( var i = choices.length - 1 ; i >= 0 ; i-- ) { %>    <button ng-repeat="choice in choices" type="button" class="choice" ng-click="selectChoice(choice)" ng-class="{ active: choice === currentChoice }">      <div class="wrapper">        <div class="num-instalments">          <span><%= choices[i].num_instalments %></span>&nbsp;<span><%= months(choices[i].num_instalments) %></span>        </div>        <div class="amount">          <span class="amount-amount"><%= getAmount(choices[i].amount) %></span><!--          --><span class="amount-currency">€</span><!--          --><span class="amount-per-month">/mes</span></div>      </div>    </button>    <% } %>  </div>  <section class="tae">TAE máximo: <%= getAmount(choices[0].annual_equivalent) %>%</section>  <section class="how-it-works">    <header>¿Cómo funciona?</header>    <div class="info-wrapper">      <div class="info">        <h3>Elige Aplazame</h3>        <p>en la tienda, cuando vayas a pagar el pedido.</p>      </div>      <div class="info">        <h3>Decide cómo quieres pagar</h3>        <p>Hasta en 12 cuotas, pagando con tarjeta.</p>      </div>      <div class="info">        <h3>Disfruta de tu compra</h3>        <p>Desde Aplazame estaremos disponibles por si necesitas cualquier cosa. ¡A disfrutar!</p>      </div>    </div>  </section></div><div class="cta">  <div class="col-sm-6 button-wrapper">    <button class="btn lg btn-block white" type="button" data-modal="dismiss">Volver a Tienda</button>  </div>  <div class="col-sm-6 button-wrapper">    <a class="btn lg btn-block" href="http://aplazame.com/how/" target="_blank">¿Quieres saber más?</a>  </div></div>';
},{}],7:[function(require,module,exports){
module.exports = '<div class="aplazame-widget-instalments">  <span class="aplazame-widget-from">desde&nbsp;</span><!--  --><strong class="aplazame-widget-amount">    <span class="aplazame-widget-price"><%= getAmount(choice.amount) %></span><!--    --><span class="aplazame-widget-currency">€</span>  </strong><!--  --><sub class="aplazame-widget-per-month">/mes</sub><!--  --><span class="aplazame-widget-instalments-wrapper">    <span>&nbsp;en&nbsp;</span>    <em class="aplazame-widget-instalments-num">12</em>    <span>&nbsp;cuotas</span>  </span></div><style rel="stylesheet"><%= options.widget.styles %></style>';
},{}],8:[function(require,module,exports){
/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  if (mX1 !== mY1 || mX2 !== mY2) {
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    if (mX1 === mY1 && mX2 === mY2) {
      return x; // linear
    }
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};

},{}],9:[function(require,module,exports){
/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20150312
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ("document" in self) {

// Full polyfill for browsers with no classList support
// Including IE < Edge missing SVGElement.classList
if (!("classList" in document.createElement("_")) 
	|| document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

(function (view) {

"use strict";

if (!('Element' in view)) return;

var
	  classListProp = "classList"
	, protoProp = "prototype"
	, elemCtrProto = view.Element[protoProp]
	, objCtr = Object
	, strTrim = String[protoProp].trim || function () {
		return this.replace(/^\s+|\s+$/g, "");
	}
	, arrIndexOf = Array[protoProp].indexOf || function (item) {
		var
			  i = 0
			, len = this.length
		;
		for (; i < len; i++) {
			if (i in this && this[i] === item) {
				return i;
			}
		}
		return -1;
	}
	// Vendors: please allow content code to instantiate DOMExceptions
	, DOMEx = function (type, message) {
		this.name = type;
		this.code = DOMException[type];
		this.message = message;
	}
	, checkTokenAndGetIndex = function (classList, token) {
		if (token === "") {
			throw new DOMEx(
				  "SYNTAX_ERR"
				, "An invalid or illegal string was specified"
			);
		}
		if (/\s/.test(token)) {
			throw new DOMEx(
				  "INVALID_CHARACTER_ERR"
				, "String contains an invalid character"
			);
		}
		return arrIndexOf.call(classList, token);
	}
	, ClassList = function (elem) {
		var
			  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
			, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
			, i = 0
			, len = classes.length
		;
		for (; i < len; i++) {
			this.push(classes[i]);
		}
		this._updateClassName = function () {
			elem.setAttribute("class", this.toString());
		};
	}
	, classListProto = ClassList[protoProp] = []
	, classListGetter = function () {
		return new ClassList(this);
	}
;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
DOMEx[protoProp] = Error[protoProp];
classListProto.item = function (i) {
	return this[i] || null;
};
classListProto.contains = function (token) {
	token += "";
	return checkTokenAndGetIndex(this, token) !== -1;
};
classListProto.add = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
	;
	do {
		token = tokens[i] + "";
		if (checkTokenAndGetIndex(this, token) === -1) {
			this.push(token);
			updated = true;
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.remove = function () {
	var
		  tokens = arguments
		, i = 0
		, l = tokens.length
		, token
		, updated = false
		, index
	;
	do {
		token = tokens[i] + "";
		index = checkTokenAndGetIndex(this, token);
		while (index !== -1) {
			this.splice(index, 1);
			updated = true;
			index = checkTokenAndGetIndex(this, token);
		}
	}
	while (++i < l);

	if (updated) {
		this._updateClassName();
	}
};
classListProto.toggle = function (token, force) {
	token += "";

	var
		  result = this.contains(token)
		, method = result ?
			force !== true && "remove"
		:
			force !== false && "add"
	;

	if (method) {
		this[method](token);
	}

	if (force === true || force === false) {
		return force;
	} else {
		return !result;
	}
};
classListProto.toString = function () {
	return this.join(" ");
};

if (objCtr.defineProperty) {
	var classListPropDesc = {
		  get: classListGetter
		, enumerable: true
		, configurable: true
	};
	try {
		objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	} catch (ex) { // IE 8 doesn't support enumerable:true
		if (ex.number === -0x7FF5EC54) {
			classListPropDesc.enumerable = false;
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		}
	}
} else if (objCtr[protoProp].__defineGetter__) {
	elemCtrProto.__defineGetter__(classListProp, classListGetter);
}

}(self));

} else {
// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.

(function () {
	"use strict";

	var testElement = document.createElement("_");

	testElement.classList.add("c1", "c2");

	// Polyfill for IE 10/11 and Firefox <26, where classList.add and
	// classList.remove exist but support only one argument at a time.
	if (!testElement.classList.contains("c2")) {
		var createMethod = function(method) {
			var original = DOMTokenList.prototype[method];

			DOMTokenList.prototype[method] = function(token) {
				var i, len = arguments.length;

				for (i = 0; i < len; i++) {
					token = arguments[i];
					original.call(this, token);
				}
			};
		};
		createMethod('add');
		createMethod('remove');
	}

	testElement.classList.toggle("c3", false);

	// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	// support the second argument.
	if (testElement.classList.contains("c3")) {
		var _toggle = DOMTokenList.prototype.toggle;

		DOMTokenList.prototype.toggle = function(token, force) {
			if (1 in arguments && !this.contains(token) === !force) {
				return force;
			} else {
				return _toggle.call(this, token);
			}
		};

	}

	testElement = null;
}());

}

}


},{}],10:[function(require,module,exports){
/*
 * events.js - Single library to handle generic events

 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Jesús Manuel Germade Castiñeiras <jesus@germade.es>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

(function (root, factory) {

  if ( typeof module !== 'undefined' ) {
    module.exports = factory();
  } else if( root ) {
    if( root.define ) {
      root.define('Events', function () { return factory(); } );
    } else if( root.angular ) {
      root.angular.module('eventsWrapper', []).factory('Events', function () { return factory(true); });
    } else if( !root.Events ) {
      root.Events = factory();
    }
  }

})(this, function (ng) {
	'use strict';

  var methods = {
    std: { on: 'on', once: 'once', off: 'off', trigger: 'trigger' },
    safe: { on: '$$on', once: '$$once', off: '$$off', trigger: '$$trigger' }
  };

  function Event (name, args, caller) {
    this.name = name;
    this.args = args;
    this.$$args = [this].concat(args);
    this.caller = caller;
  }

  Event.prototype.preventDefault = function () {
    this.defaultPrevented = true;
  };

  function getMethods (ngSafe) {
    return ngSafe ? methods.safe : methods.std;
  }

	function _addListener (handlers, handler, context) {
    if( ! handler instanceof Function ) {
        return false;
    }
    handlers.push({ handler: handler, context: context });
  }

  function _triggerEvent (e, handlers) {
    if( handlers ) {
      for( var i = 0, len = handlers.length; i < len; i++ ) {
        handlers[i].handler.apply(e.caller, e.$$args);
        if( e.defaultPrevented ) {
          return i + 1;
        }
      }
      return len;
    }
  }

  function _emptyListener (handlers) {
    if( handlers ) {
      handlers.splice(0, handlers.length);
    }
  }

  function _removeListener (handlers, handler) {
    if( handlers ) {
      for( var i = 0, len = handlers.length; i < len; ) {
        if( handlers[i].handler === handler ) {
          handlers.splice(i, 1);
          len--;
        } else {
          i++;
        }
      }
    }
  }

  function Events (target, ngSafe) {
    target = target || this;

    var listeners = {},
        listenersOnce = {},
        method = getMethods(ngSafe);

    function checkEach (_method, eventName, arg1, arg2, arg3) {
      if( eventName instanceof Array ) {
        eventName.forEach(function (_eventName) { target[_method](_eventName, arg1, arg2, arg3); });
        return true;
      }
      if( typeof eventName !== 'string' ) {
        throw new Error('event name should be a string');
      }
      if( / /.test(eventName) ) {
        target[_method](eventName.split(/ +/), arg1, arg2, arg3);
        return true;
      }
    }

    target[method.on] = function (eventName, handler, context) {
      if( checkEach(method.on, eventName, handler, context) ) {
        return target;
      }
      listeners[eventName] = listeners[eventName] || [];
      _addListener(listeners[eventName], handler, context);
      return target;
    };

    target[method.once] = function (eventName, handler, context) {
      if( checkEach(method.once, eventName, handler, context) ) {
        return target;
      }
      listenersOnce[eventName] = listenersOnce[eventName] || [];
      _addListener(listenersOnce[eventName], handler, context);
      return target;
    };

    target[method.trigger] = function (eventName, attrs, caller) {
      if( checkEach(method.trigger, eventName, attrs, caller) ) {
        return target;
      }
      var e = new Event(eventName, attrs, caller);

      _triggerEvent(e, listeners[eventName]);

      if( !e.defaultPrevented ) {
        var len = _triggerEvent(e, listenersOnce[eventName]);
        if( len ) {
          listenersOnce[eventName].splice(0, len);
        }
      }
      return target;
    };

    target[method.off] = function (eventName, handler) {
      if( checkEach(method.off, eventName, handler) ) {
        return target;
      }
      if( handler === undefined ) {
        _emptyListener(listeners[eventName]);
        _emptyListener(listenersOnce[eventName]);
      } else {
        _removeListener(listeners[eventName], handler);
        _removeListener(listenersOnce[eventName], handler);
      }
      return target;
    };
  }

  return Events;
});

},{}],11:[function(require,module,exports){

// factory http

var $q = require('q-promise'),
    _ = require('nitro-tools/extend');

function resolveFunctions (o, args, thisArg) {
  for( var key in o ) {
    if( o[key] instanceof Function ) {
      o[key] = o[key].apply(thisArg, args || []);
    } else if( typeof o[key] === 'object' && o[key] !== null ) {
      o[key] = resolveFunctions(o[key], args, thisArg);
    }
  }
  return o;
}

function headerToTitleSlug(text) {
  // console.log('headerToTitleSlug', text);
  var key = text.replace(/([a-z])([A-Z])/g, function (match, lower, upper) {
      return lower + '-' + upper;
  });
  key = key[0].toUpperCase() + key.substr(1);

  return key;
}

function headerToCamelCase(text) {
  var key = text[0].toLowerCase() + text.substr(1);
  return key.replace(/([a-z])-([A-Z])/g, function (match, lower, upper) {
    return lower + upper;
  });
}

var RE_contentType = /([^\/]+)\/([^+]+\+)?(.*)/;
function parseContentType(contentType, text, xml) {
  var matches = contentType && contentType.match(RE_contentType);
  return matches && ( matches[3] === 'json' ? JSON.parse(text) : ( matches[3] === 'xml' ? xml : text ) );
}

function _getHeaders (request) {
  var headers = {};
  request.getAllResponseHeaders().replace(/\s*([^\:]+)\s*\:\s*([^\;\n]+)/g, function (match, key, value) {
      headers[headerToCamelCase(key)] = value.trim();
  });

  return headers;
}

function headersGetter (request) {
  var headersCache;
  return function () {
    if( !headersCache ) {
      headersCache = _getHeaders(request);
    }
    return headersCache;
  };
}

function serializeParams (params) {
  var result = '';

  for( var param in params ) {
    result += ( result ? '&' : '' ) + param + '=' + encodeURIComponent(params[param]);
  }
  return result;
}

function addHeadersToRequest (req, headers) {
  for( var key in headers ) {
    req.setRequestHeader( headerToTitleSlug(key), headers[key] );
  }
}

var defaultSettings = {};

http.config = function (settings) {
  _.merge(defaultSettings, settings);
  return http;
};

function http (url, config) {

  if( config === undefined && typeof url === 'object' && url !== null ) {
    config = url;
    url = config.url;
  } else {
    config = config || {};
    config.url = url;
  }

  config = _.merge(_.copy(defaultSettings),_.copy(config));
  config = resolveFunctions( config, [config], null );
  config.method = ( config.method || 'GET').toUpperCase();

  if( typeof config.url !== 'string' ) {
    throw new Error('url should be a string');
  }

  return $q(function (resolve, reject) {

    var request = null;

    try { // Firefox, Opera 8.0+, Safari
        request = new XMLHttpRequest();
    } catch (e) { // Internet Explorer
        try { request = new ActiveXObject('Msxml2.XMLHTTP'); }  // jshint ignore:line
        catch (er) { request = new ActiveXObject('Microsoft.XMLHTTP'); }  // jshint ignore:line
    }
    if( request === null ) { throw 'Browser does not support HTTP Request'; }

    if( config.params ) {
      url += ( /\?/.test(url) ? '&' : '?' ) + serializeParams( config.params );
    }

    request.open( config.method, url );

    if( config.withCredentials ) {
      request.withCredentials = true;
    }

    addHeadersToRequest(request, config.headers || {} );

    request.config = config;
    config.start = new Date().getTime();

    request.onreadystatechange = function(){
      if( request.readyState === 'complete' || request.readyState === 4 ) {
        var response = {
          config: config,
          data: parseContentType(request.getResponseHeader('content-type'), request.responseText, request.responseXML),
          status: request.status,
          headers: headersGetter(request),
          xhr: request
        };
        if( request.status >= 200 && request.status < 400 ) {
          resolve( response );
        } else {
          reject( response );
        }
      }
    };

    if( config.contentType ) {

      if( config.data && config.contentType === 'application/json' && typeof config.data !== 'string' ) {
        config.data = JSON.stringify(config.data);
      }

    } else if( config.data instanceof FormData ) {
      config.contentType = 'multipart/form-data';
    } else if( typeof config.data === 'object' && config.data !== null ) {
      config.contentType = 'application/json';
      if( config.data ) {
        config.data = JSON.stringify(config.data);
      }
    }

    if( config.contentType ) {
      // addHeadersToRequest(request, { contentType: config.contentType });
      request.setRequestHeader( 'Content-Type', config.contentType );
    }

    request.send( config.data );

  });
}

http.serialize = serializeParams;

http.noCache = function (url, config) {
  url += ( /\?/.test(url) ? '&' : '?' ) + 't=' + new Date().getTime();
  return http(url, config);
};

http.plainResponse = function (response) {
  return {
    config: response.config,
    data: response.data,
    status: response.status,
    headers: response.headers()
  };
};

['get', 'delete'].forEach(function (method) {
  http[method] = function (url, config) {
    return http(url, _.extend(_.copy(config || {}), {
      method: method
    }));
  };
});

['post', 'put', 'patch'].forEach(function (method) {
  http[method] = function (url, data, config) {
    return http(url, _.extend(_.copy(config || {}), {
      method: method,
      data: data || {}
    }));
  };
});

// basePath

function basePath (bp) {
  if( /\/$/.test(bp) ) {
    bp = bp.replace(/\/$/,'');
  }
  return function (p) {
    if( !p ) {
      return bp;
    }
    return bp + ( /^\//.test(p) ? '' : '/' ) + p;
  };
}

http.base = function (url, baseConfig) {
  var bp = basePath(url),
      based = function () {
        return based.get.apply(this, arguments);
      };

  baseConfig = baseConfig || {};

  ['get', 'delete'].forEach(function (method) {
    based[method] = function (p, _config ) {
      return http( bp(p), _.merge(_.copy(baseConfig), _config, { method: method }));
    };
  });

  ['post', 'put', 'patch'].forEach(function (method) {
    based[method] = function (p, data, _config ) {
      return http( bp(p), _.merge(_.copy(baseConfig), _config, { method: method, data: data }) );
    };
  });

  return based;
};

http.responseData = function (response) {
  return response.data;
};

module.exports = http;

},{"nitro-tools/extend":13,"q-promise":20}],12:[function(require,module,exports){

var arrayShift = [].shift;

module.exports = function extend () {
  var dest = arrayShift.call(arguments),
      src = arrayShift.call(arguments),
      key;

  while( src ) {
    for( key in src) {
      dest[key] = src[key];
    }
    src = arrayShift.call(arguments);
  }

  return dest;
};

},{}],13:[function(require,module,exports){

var RE_$$ = /^\$\$/,
    arrayShift = [].shift,
    type = require('./type');

function _merge () {
    var dest = arrayShift.call(arguments),
        src = arrayShift.call(arguments),
        key;

    while( src ) {

      if( typeof dest !== typeof src ) {
          dest = type.isArray(src) ? [] : ( type.isObject(src) ? {} : src );
      }

      if( type.isObject(src) ) {

        for( key in src ) {
          if( src[key] === undefined ) {
            dest[key] = undefined;
          } else if( type.isArray(dest[key]) ) {
            [].push.apply(dest[key], src[key]);
          } else if( type.isObject(dest[key]) ) {
            dest[key] = _merge(dest[key], src[key]);
          } else {
            dest[key] = src[key];
          }
        }
      }
      src = arrayShift.call(arguments);
    }

    return dest;
}

function mapObject (o, iteratee) {
  var result = {};
  for( var key in o ) {
    result[key] = iteratee(o[key], key);
  }
  return result;
}

function _copy (src) {
  if( type.isArray(src) ) {
    return src.map(function (item) {
      return _copy(item);
    });
  }
  
  if( type.isObject(src) ) {
    return mapObject(src, function (item) {
      return _copy(item);
    });
  }

  return src;
}

module.exports = {
  extend: require('./_extend'),
  merge: _merge,
  copy: _copy
};

},{"./_extend":12,"./type":17}],14:[function(require,module,exports){

var type = require('./type');

function _key (o, _key, value){
    if( !type.isObject(o) ) {
			return undefined;
		}

    var keys = _key.split('.'),
        key = keys.shift();

    if( value === undefined ) {
      while (key) {
        if( type.isObject(o) && key in o ) {
          o = o[key];
        } else {
          return;
        }
        key = keys.shift();
      }

      return o;
    } else {

      while (key) {
        if( o instanceof Object ) {
          if ( keys.length ){
            if( !(key in o) ) {
              o[key] = {};
            }
            o = o[key];
          } else {
            o[key] = value;
            return true;
          }
        }
        key = keys.shift();
      }

      return false;
    }
}

module.exports = {
  key: _key,
  keys: Object.keys
};

},{"./type":17}],15:[function(require,module,exports){

var type = require('./type'),
    arrSome = Array.prototype.some,
    arrEvery = Array.prototype.every,
    arrForEach = Array.prototype.forEach,
    arrMap = Array.prototype.map,
    arrIndexOf = Array.prototype.indexOf;

// -----------------------------------------

function _eachInList( list, iteratee, thisArg ) {
  return arrForEach.call(list, iteratee, thisArg);
}

function _eachInObject( o, iteratee, thisArg ) {
  for( var key in o ) {
    iteratee.call(thisArg, [o[key], key]);
  }
}

function _matchAll (o, filters) {
  for( var key in filters ) {
    if( o[key] !== filters[key] ) {
      return false;
    }
  }
  return true;
}

function _matchAny (o, filters) {
  for( var key in filters ) {
    if( o[key] === filters[key] ) {
      return true;
    }
  }
  return false;
}

function _iterateeFn (iteratee) {
  if( type.isFunction(iteratee) ) {
    return iteratee;
  }

  if( type.isObject(iteratee) ) {
    return function (item) {
      return _matchAll(item, iteratee);
    };
  }

  return function (item) {
    return item === iteratee;
  };
}

// -----------------------------------------

function each (o, iteratee, thisArg) {
  if( o && o.length ) {
    arrForEach.call(o, iteratee, thisArg);
  } else if( type.isObject(o) ) {
    _eachInObject(o, iteratee, thisArg || this);
  }
}

function indexOf (list, iteratee, thisArg) {
  if( !type.isFunction(iteratee) ) {
    return arrIndexOf.call(list, iteratee, thisArg);
  }

  for( var i = 0, n = list.length; i < n ; i++ ) {
    if( iteratee.call(thisArg, list[i], i) ) {
      return i;
    }
  }
  return -1;
}

function _indexBy (list, iteratee, thisArg) {
  var map = {};

	for( var i = 0, len = list.length; i < len; i++ ) {
    map[iteratee.call(thisArg, list[i], i)] = list[i];
  }
  return map;
}

function indexBy (list, iteratee, thisArg) {
	if( type.isString(iteratee) ) {
		return _indexBy(list, function (item) { return item[iteratee]; }, thisArg);
	} else if( type.isFunction(iteratee) ) {
		return _indexBy(list, iteratee, thisArg);
	}
	return {};
}

function some (list, iteratee, thisArg) {
  iteratee = _iterateeFn(iteratee);

  if( list && list.length ) {
    return arrSome.call(list, iteratee, thisArg);
  } else if( type.isObject(list) ) {
    for( var key in list )  {
      if( iteratee.call(thisArg, list[key], key) ) {
        return true;
      }
    }
    return false;
  }
};

function every (list, iteratee, thisArg) {
  iteratee = _iterateeFn(iteratee);

  if( list && list.length ) {
    return arrEvery.call(list, iteratee, thisArg);
  } else if( type.isObject(list) ) {
    for( var key in list )  {
      if( !iteratee.call(thisArg, list[key], key) ) {
        return false;
      }
    }
    return true;
  }
};

function map (list, _iteratee, thisArg) {
  var iteratee = type.isString(_iteratee) ? function (item) { return item[_iteratee]; } : _iteratee;

  if( list && list.length ) {
    return arrMap.call(list, iteratee, thisArg);
  } else if( type.isObject(list) ) {
    var result = {};
    for( var key in list )  {
      result[key] = iteratee.call(thisArg, list[key], key);
    }
    return result;
  }
};

function map2List (list, iteratee, thisArg) {
  if( list && list.length ) {
    return arrMap.call(list, iteratee, thisArg);
  }
  var result = [], i = 0;
  for( var key in list )  {
    result[i++] = iteratee.call(thisArg, list[key], key);
  }
  return result;
};

function remove (list, iteratee, thisArg) {
    thisArg = thisArg === undefined ? this : thisArg;

    iteratee = _iterateeFn(iteratee);

    for( var i = 0, len = list.length; i < len; i++ ) {
				if( iteratee.call(thisArg, list[i]) ) {
						list.splice(i, 1);
						i--;
				}
		}
}

function first (list, iteratee, thisArg) {
		thisArg = thisArg === undefined ? this : thisArg;

		iteratee = _iterateeFn(iteratee);

    var i = arrIndexOf.call(list, iteratee, thisArg);

		for( var i = 0, len = list.length ; i < len ; i++ ) {
        if( iteratee.call(thisArg, list[i]) ) {
            return list[i];
        }
    }
}

function last (list, iteratee, thisArg) {
		thisArg = thisArg === undefined ? this : thisArg;

		iteratee = _iterateeFn(iteratee);

		for( var i = list.length - 1 ; i >= 0 ; i-- ) {
        if( iteratee.call(thisArg, list[i]) ) {
            return list[i];
        }
    }
}

function filter (list, iteratee, thisArg) {
    var newList = [];

		thisArg = thisArg === undefined ? this : thisArg;
		iteratee = _iterateeFn(iteratee);

		for( var i = 0, len = list.length ; i < len ; i++ ) {
        if( iteratee.call(thisArg, list[i]) ) {
            newList.push(list[i]);
        }
    }

    return newList;
}

module.exports = {
  _matchAll: _matchAll,
  _matchAny: _matchAny,
  find: first,
  first: first,
  last: last,
  filter: filter,
  each: each,
  some: some,
  every: every,
  map: map,
  pluck: map,
  map2List: map2List,
  indexOf: indexOf,
  indexBy: indexBy,
  remove: remove,
  if: function (result, fn) {
    if( result !== undefined && fn instanceof Function ) {
      return fn(result);
    }
  }
};

},{"./type":17}],16:[function(require,module,exports){

var RE_dotsBack = /[^\/]+\/\.\.\//g,
	clearStr = function () { return ''; };

function _joinPath () {
    var path = (arguments[0] || '').replace(/\/$/, ''),
    	backDots;

    for( var i = 1, last = arguments.length - 1 ; i < last ; i++ ) {
        path += '/' + arguments[i].replace(/^\/|\/$/g, '');
    }
    if( last ) {
        path += arguments[last] ? ( '/' + arguments[last].replace(/^\//, '') ) : '';
    }

    while( RE_dotsBack.test(path) ) {
    	path = path.replace(RE_dotsBack, clearStr);
    }

    return path;
}

module.exports = {
  joinPath: _joinPath
};

},{}],17:[function(require,module,exports){
'use strict';

function _isType (type) {
    return function (o) {
        return (typeof o === type);
    };
}

function _instanceOf (_constructor) {
    return function (o) {
        return ( o instanceof _constructor );
    };
}

module.exports = {
  isType: function (type, value) {
    if( value === undefined ) {
      return _isType(type);
    }
    return _isType(type)(value);
  },
  instanceOf: function (Proto, value) {
    if( value === undefined ) {
      return _instanceOf(Proto);
    }
    return _instanceOf(Proto)(value);
  },
  isObject: function (o) {
    return typeof o === 'object' && o !== null;
  },
	isFunction: _isType('function'),
	isString: _isType('string'),
	isNumber: _isType('number'),
	isArray: Array.isArray || _instanceOf(Array),
	isDate: _instanceOf(Date),
	isRegExp: _instanceOf(RegExp),
	isElement: function(o) {
    return o && o.nodeType === 1;
  },
  isUndefined: function (value) {
    return value === undefined;
  }
};

},{}],18:[function(require,module,exports){

module.exports = function (qPromise) {

	function each (iterable, handler) {
		for( var i = 0, n = iterable.length; i < n ; i++ ) {
			handler(iterable[i], i);
		}
	}

	function qResolve (result) {
	  return qPromise(function (resolve, reject) { resolve(result); });
	};

	function qReject (reason) {
	  return qPromise(function (resolve, reject) { reject(reason); });
	};

	var methods = {
		resolve: qResolve,
		reject: qReject,
		defer: function () {
		  var deferred = {};
		  deferred.promise = qPromise(function (resolve, reject) {
		    deferred.resolve = resolve;
		    deferred.reject = reject;
		  });
		  return deferred;
		},
		all: function (iterable) {
		  return qPromise(function (resolve, reject) {
		    var pending = iterable.length,
		        results = [];
		    each(iterable, function (_promise, i) {

		      ( _promise.then ? _promise : qResolve(_promise) ).then(function (result) {
		        results[i] = result;
		        if( --pending === 0 ) {
		          resolve(results);
		        }
		      }, function (reason) {
		        if( pending !== -1 ) {
		          pending === -1;
		          reject(reason);
		        }
		      });
		    });
		  });
		},
		race: function (iterable) {
		  return qPromise(function (resolve, reject) {
		    var done = false;

		    each(iterable, function (_promise, i) {
		      if( done ) {
		        return;
		      }
		      ( _promise.then ? _promise : qResolve(_promise) ).then(function (result) {
		        if( !done ) {
		          done = true;
		          resolve(result);
		        }
		      }, function (reason) {
		        if( !done ) {
		          done = true;
		          reject(reason);
		        }
		      });
		    });
		  });
		}
	};

	return function (q, override) {
		for( var key in methods ) {
			if( !q[key] || override ) {
				q[key] = methods[key];
			}
		}
		return q;
	};
};

},{}],19:[function(require,module,exports){

function stepResult (step, value, type) {
  if( value && value.then ) {
    value.then(function (result) {
      step.deferred.resolve(result);
    }, function (reason) {
      step.deferred.reject(reason);
    });
  } else {
    step.deferred[type](value);
  }
}

function processQueue(promise) {
  if( promise.$$succeeded === undefined ) {
    return;
  }

  var len = promise.$$queue.length,
      step = promise.$$queue.shift(),
      type = promise.$$succeeded ? 'resolve' : 'reject',
      uncough = !promise.$$succeeded && promise.$$uncought++;

  while( step ) {

    if( step[type] ) {
      uncough = false;

      try {
        stepResult(step, step[type](promise.$$value), 'resolve');
      } catch (reason) {
        stepResult(step, reason, 'reject');
      }

    } else {
      stepResult(step, promise.$$value, type);
    }

    step = promise.$$queue.shift();
  }

  if( !promise.$$succeeded && uncough ) {
    if( promise.$$uncough === uncough ) {
      throw new Error('Uncaught (in promise)');
    }
  }
}

function P (executor) {
  if( !( executor instanceof Function ) ) {
    throw new TypeError('Promise resolver undefined is not a function');
  }

  var p = this;
  this.$$queue = [];
  this.$$uncough = 0;

  try {
    executor(function (result) {
      p.$$succeeded = true;
      p.$$value = result;
      processQueue(p);
    }, function (reason) {
      p.$$succeeded = false;
      p.$$value = reason;
      processQueue(p);
    });
  } catch (err) {
    p.$$succeeded = false;
    p.$$value = err;
    processQueue(p);
  }
}

P.prototype.then = function (onsucceeded, onRejected) {
  var _this = this,
      _promise = new P(function (resolve, reject) {
        _this.$$queue.push({ resolve: onsucceeded, reject: onRejected, deferred: { resolve: resolve, reject: reject } });
      });

  processQueue(this);

  return _promise;
};

P.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
};

require('./promise-methods')(function (executor) { return new P(executor); })(P, true);

module.exports = P;

},{"./promise-methods":18}],20:[function(require,module,exports){
(function (global){

module.exports = require('./qizer')( global.Promise ? require('./promise-methods')(function (executor) { return new global.Promise(executor); })(global.Promise) : require('./promise-polyfill') );

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./promise-methods":18,"./promise-polyfill":19,"./qizer":21}],21:[function(require,module,exports){

module.exports = function (Promise) {

  function q (executor) {
    return new Promise(executor);
  }

  require('./promise-methods')(q)(q, true);

  q.when = function (p) { return ( p && p.then ) ? p : Promise.resolve(p); };
  q.usePolyfill = function () {
  	Promise = require('./promise-polyfill');
  };

  return q;

};

},{"./promise-methods":18,"./promise-polyfill":19}],22:[function(require,module,exports){

module.exports = require('./lib/qizer')( require('./lib/promise-polyfill') );

},{"./lib/promise-polyfill":19,"./lib/qizer":21}],23:[function(require,module,exports){

// require('./browser-polyfills/current-script');
require('./browser-polyfills/date');
require('./browser-polyfills/dom-closest');
require('./browser-polyfills/event-listener');
require('./browser-polyfills/match-media');
require('./browser-polyfills/matches-selector');

},{"./browser-polyfills/date":24,"./browser-polyfills/dom-closest":25,"./browser-polyfills/event-listener":26,"./browser-polyfills/match-media":27,"./browser-polyfills/matches-selector":28}],24:[function(require,module,exports){

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
},{}],25:[function(require,module,exports){

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
},{}],26:[function(require,module,exports){

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
},{}],27:[function(require,module,exports){
(function (root) {
  'use strict';

  root.matchMedia = root.matchMedia || root.webkitMatchMedia || root.mozMatchMedia || root.msMatchMedia;
})(this);
},{}],28:[function(require,module,exports){

if( !Element.prototype.matchesSelector ) {
  Element.prototype.matchesSelector = (
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector
  );
}


},{}],29:[function(require,module,exports){

require('./browser-polyfills');
// document.currentScript
// Date.now()
// HTMLElement.closest()
// HTMLElement.addEventListener
// HTMLElement.removeEventListener
// window.matchMedia
// Element.prototype.matchesSelector

require('classlist.js'); // https://developer.mozilla.org/es/docs/Web/API/Element/classList

var extend = require('nitro-tools/extend');

function _ (selector, source) {
  return source && typeof source === 'string' ?
		selector.querySelector(source) :
		(source || document).querySelector(selector);
}

_.noop = function (value) { return value; };
_.q = require('q-promise/no-native');

extend.extend(_, extend);

_.extend(_,
  require('nitro-tools/type'),
	require('nitro-tools/key'),
	require('nitro-tools/path')
);

_.extend(_, {
	animate: require('./deferred/animate'),
	wait: require('./deferred/wait')
});

_.extend(_, {
	ready: require('./fn/ready'),
	template: require('./fn/template'),
	debounce: require('./fn/debounce')
});

_.extend(_,
  require('./utils/events'),
	// _.on(el, eventName, handler, useCapture)
	// _.off(el, eventName, handler, useCapture)
	// _.triggerEvent(element, eventName, data)

  require('./utils/dom')
  // _.create(tagName, attrs)
	// _.attr(el, name, value)
  // _.tmpClass(el, className, duration, cb)
);

_.extend(_, {
	normalize: require('./utils/normalize'),
	// _.touchDevice === true | false
	// _.isMac === true | false
	// _.isAndroid === true | false

	scroll: require('./utils/scroll/bundle') // scroll is not available until document is ready
	// _.scroll.on( handler, useCapture )
	// _.scroll.off( handler, useCapture )
	// _.scroll.top()
	// _.scroll.goto(value)
	// _.scroll.animateTo(value | HTMLElement, callback, duration): Promise
	// _,scroll.inAnimation === true | false
});

module.exports = _;

},{"./browser-polyfills":23,"./deferred/animate":30,"./deferred/wait":31,"./fn/debounce":32,"./fn/ready":33,"./fn/template":34,"./utils/dom":35,"./utils/events":36,"./utils/normalize":37,"./utils/scroll/bundle":40,"classlist.js":9,"nitro-tools/extend":13,"nitro-tools/key":14,"nitro-tools/path":16,"nitro-tools/type":17,"q-promise/no-native":22}],30:[function(require,module,exports){

var $q = require('q-promise/no-native'),
    timingFunctions = {},
    noop = function () {},
    getTimingFunction = function (timingFunctionName) {
      if( !timingFunctions[timingFunctionName] ) {
        if( timingFunctionName === 'linear' ) {
          timingFunctions[timingFunctionName] = function ( value ) { return value; };
        } else if( timingFunctionName === 'ease' ) {
          timingFunctions[timingFunctionName] = require('bezier-easing')(.17,.67,.83,.67);
        } else if( timingFunctionName === 'ease-in' ) {
          timingFunctions[timingFunctionName] = require('bezier-easing')(.42,0,1,1);
        } else if( timingFunctionName === 'ease-out' ) {
          timingFunctions[timingFunctionName] = require('bezier-easing')(0,0,.58,1);
        } else if( timingFunctionName === 'ease-in-out' ) {
          timingFunctions[timingFunctionName] = require('bezier-easing')(.42,0,.58,1);
        }
      }
      return timingFunctions[timingFunctionName];
    };

function animate (progressFn, duration, atEnd, timingFunctionName) {
  if ( duration instanceof Function ) {
    if ( typeof atEnd === 'number' ) {
      aux = duration;
      duration = atEnd;
      atEnd = aux;
    } else {
      atEnd = duration;
      duration = 400;
    }
  } else if ( duration === undefined ) {
    duration = 400;
  }

  timingFunctionName = timingFunctionName || ( typeof atEnd === 'string' ? atEnd : ( typeof duration === 'string' ? duration : 'ease' ) );

  progressFn(duration === 0 ? 1 : 0);

  var stopped = false,
      timingFunction = getTimingFunction(timingFunctionName),
      deferred = $q.defer();

  if( duration > 0 ) {
    var start = Date.now(),
        interval = setInterval(function () {
          var elapsed = Date.now() - start;

          if( stopped ) {
            clearInterval(interval);
          } else if( elapsed >= duration ) {
            stopped = true;
            progressFn(1);
            deferred.resolve();
            (atEnd || noop)();
          } else {
            progressFn( timingFunction(elapsed/duration) );
          }
        }, 10);
  }

  deferred.promise.stop = function (reject) {
    stopped = true;
    if( reject ) {
      deferred.reject();
    }
  };

  return deferred.promise;
}

animate.time = function (el) {
  var time = 0;
  var duration = window.getComputedStyle(el).animationDuration;
  if( duration ) {
    duration.replace(/([0-9](\.[0-9])?)(m)?s/, function (matched, t, decimals, ms) {
      time += ms ? Number(t) : Number(t)*1000;
    });
  }
  if( window.getComputedStyle(el).animationDelay ) {
    window.getComputedStyle(el).animationDelay.replace(/([0-9](\.[0-9])?)(m)?s/, function (matched, t, decimals, ms) {
      time += ms ? Number(t) : Number(t)*1000;
    });
  }
  duration = window.getComputedStyle(el).transitionDuration;
  if( duration ) {
    duration.replace(/([0-9](\.[0-9])?)(m)?s/, function (matched, t, decimals, ms) {
      var t = ms ? Number(t) : Number(t)*1000;
      if( t > time ) {
        time = t;
      }
    });
  }
  // console.log('animationTime', el, time);
  return time;
};

module.exports = animate;

},{"bezier-easing":8,"q-promise/no-native":22}],31:[function(require,module,exports){

var $q = require('q-promise/no-native'),
	wait = function (delay, callback) {
		if( delay instanceof Function ) {
			delay = [callback, callback = delay][0];
		}
		if( callback && !(callback instanceof Function) ) {
			throw new Error('callback should be a Function');
		}
		if( typeof delay !== 'number' ) {
			throw new Error('delay should be a Number');
		}
		return $q(function (resolve, reject) {
			setTimeout(function () {
				resolve();
				if( callback ) {
					callback();
				}
			}, delay);
		});
	};

module.exports = wait;

},{"q-promise/no-native":22}],32:[function(require,module,exports){

function debounce (fn, timeslot) {
  var timer = null,
      timeslot = timeslot || 80;

  return function () {
    var _this = this, args = arguments;

    if( timer ) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(function () {
      fn.apply(_this, args);
    }, timeslot);
  };
}

module.exports = debounce;
},{}],33:[function(require,module,exports){
var readyListeners = [],
    initReady = function () {
      var listeners = readyListeners;
      readyListeners = undefined;
      [].forEach.call(listeners, function (cb) { cb(); });
      document.removeEventListener('DOMContentLoaded', initReady);
      window.removeEventListener('load', initReady);
    };

document.addEventListener('DOMContentLoaded', initReady);
window.addEventListener('load', initReady);

function ready (callback) {
  if( callback instanceof Function ) {
    if( readyListeners ) {
      readyListeners.push(callback);
    } else {
      callback();
    }
  }
}

module.exports = ready;

},{}],34:[function(require,module,exports){

function template (name, data){
  return template.cache[name](data || {});
}

template.cache = {};

template.compile = function (tmpl) {
  // John Resig micro-template
  return new Function('obj', // jshint ignore:line
    'var p=[],print=function(){p.push.apply(p,arguments);};' +

    // Introduce the data as local variables using with(){}
    'with(obj){p.push(\'' +

    // Convert the template into pure JavaScript
    tmpl.trim()
      .replace(/[\r\t\n]/g, ' ')
      .split('<%').join('\t')
      .replace(/((^|%>)[^\t]*)'/g, '$1\r')
      .replace(/\t=(.*?)%>/g, '\',$1,\'')
      .split('\t').join('\');')
      .split('%>').join('p.push(\'')
      .split('\r').join('\\\'') + '\');}return p.join(\'\');');
};

template.put = function (name, tmpl) {
  template.cache[name] = template.compile(tmpl);
};

template.lookup = function () {
  [].forEach.call(document.querySelectorAll('script[type="application/x-template"][data-template]'), function (tmpl) {
    template.put(tmpl.getAttribute('data-template'), tmpl.text);
  });
};

module.exports = template;
},{}],35:[function(require,module,exports){

var _dom = {
  currentScript: document.currentScript || (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })(),
  create: function (tagName, attrs) {
    var el = document.createElement(tagName);

    if( attrs ) {
      if( attrs.html ) {
        el.innerHTML = attrs.html;
      }
      for( var attr in attrs ) {
        if( attr !== 'html' ) {
          el[attr] = attrs[attr];
        }
      }
    }
    return el;
  },
  attr: function (el, name, value) {
    if( !(el instanceof Element) && el[0] instanceof Element ) {
      el = el[0];
    }
    if( value !== undefined ) {
      el.setAttribute(name, value);
    }
    return el.getAttribute(name);
  },
  tmpClass: function (el, className, duration, cb) {
    var isCollection = !(el instanceof Element ) && el.length;

    if( isCollection ) {
      [].forEach.call(el, function (_el) {
        _el.classList.add(className);
      });
    } else {
      el.classList.add(className);
    }
    setTimeout(function () {
      if( isCollection ) {
        [].forEach.call(el, function (_el) {
          _el.classList.remove(className);
        });
      } else {
        el.classList.remove(className);
      }
      if( cb instanceof Function ) {
        cb();
      }
    }, duration instanceof Function ? duration() : duration );
  },
  formParams: function (form) {
    if( !(form instanceof Element) && form.length ) {
      form = form[0];
    }

    var data = {};
    [].forEach.call(form.elements, function (el) {
      if( el.name && !el.disabled ) {
        if( el.type === 'radio' ) {
          if( el.checked ) {
            data[el.name] = el.value;
          }
        } else {
          data[el.name] = el.value;
        }
      }
    });
    return data;
  }
};

module.exports = _dom;

},{}],36:[function(require,module,exports){

module.exports = {
  on: function (el, eventName, handler, useCapture) {
    if( typeof el === 'string' ) {
      return document.documentElement.addEventListener(el, eventName, handler);
    }
    return el.addEventListener(eventName, handler, useCapture);
  },
  off: function (el, eventName, handler, useCapture) {
    if( typeof el === 'string' ) {
      return document.documentElement.removeEventListener(el, eventName, handler);
    }
    return el.removeEventListener(eventName, handler, useCapture);
  },
  triggerEvent: document.createEvent ? function (element, eventName, data) {
    var event = document.createEvent("HTMLEvents");
    event.data = data;
    event.initEvent(eventName, true, true);
    element.dispatchEvent(event);
    return event;
  } : function (element, eventName, data) {
    var event = document.createEventObject();
    event.data = data;
    element.fireEvent("on" + eventName, event);
    return event;
  }
};

},{}],37:[function(require,module,exports){

var normalize = {
  isTouchDevice: 'ontouchstart' in document.documentElement,
  isMac: /^Mac/.test(navigator.platform),
  isAndroid: /^Android/.test(navigator.platform)
};

document.documentElement.classList.add( normalize.isTouchDevice ? 'touch' : 'no-touch' );
if( normalize.isMac ) {
  document.documentElement.classList.add('is-mac');
}
if( normalize.isAndroid ) {
  document.documentElement.classList.add('is-android');
}

module.exports = normalize;

},{}],38:[function(require,module,exports){

function getScrollRoot () {
    if( document.documentElement.scrollTop ) {
      return document.documentElement;
    } else if ( document.body.scrollTop ) {
      return document.body;
    }

    var html = document.documentElement, body = document.body,
        cacheTop = ((typeof window.pageYOffset !== "undefined") ? window.pageYOffset : null) || body.scrollTop || html.scrollTop, // cache the window's current scroll position
        root;

    html.scrollTop = body.scrollTop = cacheTop + (cacheTop > 0) ? -1 : 1;
    // find root by checking which scrollTop has a value larger than the cache.
    root = (html.scrollTop !== cacheTop) ? html : body;

    root.scrollTop = cacheTop; // restore the window's scroll position to cached value

    return root; // return the scrolling root element
}

var ready = require('../fn/ready'),
	scrollRoot = { scrollTop: 0 }
    scroll = {
      root: scrollRoot,
      on: function ( handler, useCapture ) {
        return document.addEventListener('scroll', handler, useCapture);
      },
      off: function ( handler, useCapture ) {
        return document.removeEventListener('scroll', handler, useCapture);
      },
      top: function () {
        return scroll.root.scrollTop;
      },
      goto: function ( value ) {
        scroll.root.scrollTop = value;
      }
    };

ready(function () {
  scrollRoot = getScrollRoot();
  scroll.root = scrollRoot;
});

module.exports = scroll;

},{"../fn/ready":33}],39:[function(require,module,exports){

module.exports = function (scroll) {

	var animate = require('../../deferred/animate'),
			$q = require('q-promise/no-native'),
			noop = function() {},
			scrollAnimation = animate(noop, 0),
			aux;

	scroll.animation = function () {
		return scrollAnimation;
	};

	scroll.animateTo = function (value, cb, duration ) {
		if( value === undefined ) {
		  return $q.reject();
		}
		if( value instanceof Element ) {
		  value = value.offsetTop;
		}

		if( typeof cb === 'number' ) {
		  aux = cb;
		  duration = cb;
		  cb = aux;
		}

		var scrollFrom = scroll.top(),
		    scrollDelta = value - scrollFrom;

		scrollAnimation.stop();
		scroll.inAnimation = true;
		scrollAnimation = animate(function (progress) {
		  scroll.goto( scrollFrom + scrollDelta*progress );
		}, function () {
		  scroll.inAnimation = false;
		  (cb || _.noop)();
		}, duration || 350, 'ease-out');

		return scrollAnimation;
	};

	return scroll;
};

},{"../../deferred/animate":30,"q-promise/no-native":22}],40:[function(require,module,exports){

var scroll = require('../scroll');

require('./top-class')(scroll);
require('./animate')(scroll);

module.exports = scroll;
},{"../scroll":38,"./animate":39,"./top-class":41}],41:[function(require,module,exports){

module.exports = function (scroll) {

	var onScroll = function () {
	      document.documentElement.classList.toggle('scroll-top', !scroll.top() );
	    };

	scroll.on(onScroll);

	require('../../fn/ready')(onScroll);

};

},{"../../fn/ready":33}],42:[function(require,module,exports){
(function (global){

require('./sandbox')(function () {
  'use strict';

  // if( document.documentMode || /Edge\//.test(navigator.userAgent) ) {
  //   require('q-promise/no-native').usePolyfill();
  // }

  var aplazame = require('./core/core');

  aplazame.checkout = require('./apps/checkout');
  aplazame.button = require('./apps/button');
  aplazame.simulator = require('./apps/simulator');
  aplazame.modal = require('./apps/modal');

  global.aplazame = aplazame;

  aplazame.info = function () {
    return {
      api: require('./core/api'),
      log: require('./tools/log').history,
      version: require('../.tmp/aplazame-version')
    };
  };

  aplazame.log = function () {
    require('./tools/log').history.forEach(function (l) {
      console.log(l.time);
      console.log.apply(console, l.args);
    });
  };

  require('./apps/http-service');

  require('./loaders/data-aplazame')(global.aplazame);
  aplazame._.ready(function () {
    var buttonsLookup = require('./loaders/data-button')(global.aplazame),
        widgetsLookup = require('./loaders/data-simulator')(global.aplazame),
        cb = require('./core/api').callback;

    if( cb ) {
      if(  typeof global[cb] !== 'function' ) {
        throw new Error('callback should be a global function');
      }
      global[cb](aplazame);
      buttonsLookup();
      widgetsLookup();
    }

  });

  // global.$q = require('q-promise/no-native');
  // global.$http = require('http-browser');

});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../.tmp/aplazame-version":1,"./apps/button":43,"./apps/checkout":44,"./apps/http-service":45,"./apps/modal":47,"./apps/simulator":48,"./core/api":50,"./core/core":51,"./loaders/data-aplazame":53,"./loaders/data-button":54,"./loaders/data-simulator":55,"./sandbox":56,"./tools/log":63}],43:[function(require,module,exports){
'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools');

function getCartPrice () {
  return _.parsePrice( document.querySelector('#total_price').textContent );
}

function button (options) {

  if( !options ) {
    throw new Error('aplazame.button requires parameters');
  }

  if( !options.id && !options.button && !options.selector ){
    throw new Error('button can not be identified ( please use - id: \'button-id\' - or - button: \'#button-id\' - or - selector: \'#button-id\' (recomended) - )');
  }

  if( document.querySelector('#total_price') ) {
    options.amount = getCartPrice() || options.amount;

    if( !button.watching ) {
      button.watching = true;
      options.lastPrice = options.amount;

      setInterval(function () {
        var amount = getCartPrice();
        if( amount && amount !== options.lastPrice ) {
          options.amount = amount;
          options.lastPrice = options.amount;
          options.forceUpdate = true;
          button(options);
        }
      }, 400);
    }
  }

  if( !options.amount ){
    throw new Error('button amount missing');
  }

  var elements, elButton;

  if( options.button ) {
    elButton = document.querySelector(options.button);
  } else if( options.id ) {
    elButton = document.querySelector( ( /^#/.test(options.id) ? '' : '#' ) + options.id );
  }

  elements = elButton ? [elButton] : [];

  if( options.selector ) {
    [].push.apply( elements, _.cssQuery(options.selector) );
  }

  if( options.description ) {
    [].push.apply( elements, _.cssQuery(options.description) );
  }

  elButton = elButton || elements[0];

  if( !options.$$running && options.selector ) {
    options.$$running = true;
  }

  if( !options.forceUpdate && ( !elements.length || _.elementData(elButton, 'buttonInitialized') ) ) {
    return;
  }

  options.forceUpdate = false;

  if( elButton && options.parent ) {
    var parent = elButton.parentElement;

    while( parent && parent !== document.body ) {
      if( parent.matchesSelector(options.parent) ) {
        elements.push(parent);
        break;
      }
      parent = parent.parentElement;
    }
  }

  elements.forEach(function (el) {
    if( el.style.display !== 'none' ) {
      el.__display = el.style.display;
    }
    el.__input = ( el.nodeName === 'INPUT' || el.nodeName === 'BUTTON' ) ? el : el.querySelector('input, button');

    if( el.__input ) {
      el.__input.__disabled = el.__input.__disabled === undefined ? el.__input.hasAttribute('disabled') : el.__input.__disabled;
      el.__input.__checked = el.__input.__checked === undefined ? el.__input.checked : el.__input.__checked;
      if( el.__input.__checked !== undefined ) {
        el.__input.checked = false;
      }
      if( !el.__input.__disabled ) {
        el.__input.setAttribute('disabled', 'disabled');
      }
    }
    el.style.display = 'none';
  });

  elements.forEach(function (el) {
    _.elementData(el, 'buttonInitialized', true);
  });

  return button.check(options, function (allowed) {
    if( allowed ) {
      var elms = elements.slice();
      elms.forEach(function (el) {
        el.style.display = el.__display;
        if ( el.__input ) {
          if( !el.__input.__disabled && el.__input.hasAttribute('disabled') ) {
            el.__input.removeAttribute('disabled');
          }
          if( el.__input.__checked !== undefined ) {
            el.__input.checked = el.__input.__checked;
          }
        }

      });
    }
  });
}

button.check = function (options, callback) {
  if( _.isString(options) || _.isNumber(options) ) {
    options = { amount: Number(options) };
  }

  var params = {
    amount: options.amount,
    currency: options.currency || 'EUR'
  };

  if( options.country ) {
    params.country = options.country;
  }

  var checkPromise = apiHttp.get('checkout/button', { params: params });

  if( _.isFunction(callback) ) {
    checkPromise.then(function (response) { callback(response.data.allowed, response); }, function (response) { callback(false, response); });
  }

  return checkPromise;
};

module.exports = button;

},{"../core/api-http":49,"../tools/tools":66}],44:[function(require,module,exports){
'use strict';

var api = require('../core/api'),
    _ = require('../tools/tools'),
    http = require('http-browser'),
    $q = require('q-promise/no-native'),
    cssHack = require('../tools/css-hack');

function checkout (options) {

  options = options || {};
  var baseCheckout = ( options.host === 'location' ? ( location.protocol + '//' + location.host + '/' ) : options.host ) || 'https://aplazame.com/static/checkout/';

  if( !/\/$/.test(baseCheckout) ) {
    baseCheckout += '/';
  }

  var on = {},
      iframeSrc = baseCheckout + 'iframe.html?' + new Date().getTime(),
      errorLoading = false,
      tmpOverlay = document.createElement('div'),
      cssOverlay = cssHack('overlay'),
      cssBlur = cssHack('blur'),
      cssLogo = cssHack('logo'),
      cssModal = cssHack('modal');

  if( options.merchant.onSuccess ) {
    on.success = options.merchant.onSuccess;
    delete options.merchant.onSuccess;
  }
  if( options.merchant.onError ) {
    on.error = options.merchant.onError;
    delete options.merchant.onError;
  }
  if( options.merchant.onDismiss ) {
    on.dismiss = options.merchant.onDismiss;
    delete options.merchant.onDismiss;
  }

  tmpOverlay.className = 'aplazame-overlay aplazame-overlay-show';

  cssOverlay.hack(true);
  cssLogo.hack(true);
  cssBlur.hack(true);

  setTimeout(function () {
    if( !errorLoading ) {
      _.addClass(document.body, 'aplazame-blur');
    }
  }, 0);

  tmpOverlay.innerHTML = '<div class="aplazame-logo-wrapper"><div class="logo-aplazame" style="width: 150px; height: 150px;">' +
  require('./loading-svg') + '</div><div class="aplazame-overlay-loading-text">Cargando pasarela de pago...</div></div>';

  document.body.appendChild(tmpOverlay);

  var loadingText = tmpOverlay.querySelector('.aplazame-overlay-loading-text');

  setTimeout(function () {
    if( !errorLoading ) {
      tmpOverlay.querySelector('.logo-aplazame').className += ' animate';
    }
  }, 200);

  options.api = _.copy(api);

  return http( iframeSrc ).then(function (response) {
      var iframeHtml = response.data.replace(/<head\>/, '<head><base href="' + baseCheckout + '" />'),
          iframe = _.getIFrame({
            top: 0,
            left: 0,
            width: '100%',
            height: '0',
            background: 'transparent'
          }),
          httpCheckout = function () {
            var started = Date.now();
            return http.apply(this, arguments).then(function (response) {
              iframe.contentWindow.postMessage({
                aplazame: 'checkout',
                event: 'http-success',
                started: started,
                elapsed: Date.now() - started,
                response: http.plainResponse(response)
              }, '*');
              return response;
            }, function (response) {
              iframe.contentWindow.postMessage({
                aplazame: 'checkout',
                event: 'http-error',
                started: started,
                elapsed: Date.now() - started,
                response: http.plainResponse(response)
              }, '*');
              throw response;
            });
          };

      iframe.className = 'aplazame-modal';

      document.body.appendChild(iframe);
      iframe.src = iframeSrc;

      if( !options.merchant ) {
        throw new Error('missing merchant parameters');
      }

      if( 'sandbox' in options.merchant ) {
        api.sandbox = options.merchant.sandbox;
      }

      if( !options.merchant.public_api_key ) {
        if( api.publicKey ) {
          options.merchant.public_api_key = api.publicKey;
        } else {
          throw new Error('missing public key');
        }
      }

      options.origin = {
        href: location.href,
        host: location.host,
        protocol: location.protocol,
        origin: location.origin
      };

      var onMessage = function (e, message) {

        switch( message.event ) {
          case 'merchant':
            iframe.style.display = null;
            e.source.postMessage({
              checkout: options
            }, '*');
            break;
          case 'show-iframe':
            _.removeClass(iframe, 'hide');
            cssModal.hack(true);
            cssOverlay.hack(false);
            document.body.removeChild(tmpOverlay);
            break;
          case 'loading-text':
            loadingText.textContent = message.text;
            break;
          case 'drop-blur':
            _.removeClass(document.body, 'aplazame-blur');
            _.addClass(document.body, 'aplazame-unblur');
            setTimeout(function () {
              cssBlur.hack(false);
              _.removeClass(document.body, 'aplazame-blur');
              _.removeClass(document.body, 'aplazame-unblur');
            }, 600);
            break;
          case 'confirm':
          case 'success':
            _.log('aplazame.checkout:confirm', message);

            httpCheckout( options.merchant.confirmation_url, {
              method: 'post',
              contentType: 'application/json',
              data: message.data,
              params: _.extend(message.params || {}, {
                order_id: message.data.checkout_token,
                checkout_token: message.data.checkout_token
              })
            }).then(function (response) {
              e.source.postMessage({
                aplazame: 'checkout',
                event: 'confirmation',
                result: 'success',
                response: http.plainResponse(response)
              }, '*');
            }, function () {
              e.source.postMessage({
                aplazame: 'checkout',
                event: 'confirmation',
                result: 'error',
                response: http.plainResponse(response)
              }, '*');
            });
            // confirmation_url
            break;
          case 'close':
            if( iframe ) {
              document.body.removeChild(iframe);
              cssModal.hack(false);
              iframe = null;

              _.onMessage.off('checkout', onMessage);

              switch( message.result ) {
                case 'success':
                  if( typeof on.success === 'function' ) {
                    on.success();
                  } else if( !options.merchant.success_url ) {
                    throw new Error('success_url missing');
                  } else {
                    location.replace(options.merchant.success_url);
                  }
                  break;
                case 'cancel':
                  if( typeof on.error === 'function' ) {
                    on.error();
                  } else if( !options.merchant.cancel_url ) {
                    throw new Error('cancel_url missing');
                  } else {
                    location.replace(options.merchant.cancel_url);
                  }
                  break;
                case 'dismiss':
                  if( typeof on.dismiss === 'function' ) {
                    on.dismiss();
                  } else {
                    location.replace(options.merchant.checkout_url || '/');
                  }
                  break;
              }
            }
            break;
        }
      };

      _.onMessage('checkout', onMessage);

    }).catch(function (reason) {
      // throw new Error('can not connect to ' + baseCheckout);
      errorLoading = true;

      console.error('Aplazame ' + reason);

      _.removeClass(tmpOverlay.querySelector('.logo-aplazame'), 'animate');
      loadingText.innerHTML = '<div class="text-error">Error cargando pasarela de pago</div><br/><div><a href="mailto:soporte@aplazame.com?subject=' + encodeURI('Checkout error: ' + reason) + '">soporte@aplazame.com</a></div>';
      loadingText.style.lineHeight = '1.5';

      (options.onError || _.noop)(reason);
    });

}

module.exports = checkout;

},{"../core/api":50,"../tools/css-hack":60,"../tools/tools":66,"./loading-svg":46,"http-browser":11,"q-promise/no-native":22}],45:[function(require,module,exports){
'use strict';

var _ = require('../tools/tools'),
    http = require('http-browser');

function processResponse(result, message, messageSrc, started) {

  return function (response) {

    var responsep = http.plainResponse(response);
    responsep.config = message;

    messageSrc.postMessage({
      aplazame: 'http',
      event: 'response',
      started: started,
      elapsed: Date.now() - started,
      result: result,
      response: responsep
    }, '*');
  };
}

_.onMessage('http', function (e, message) {

  var started = Date.now();

  http( message.url, message )
    .then(
      processResponse('success', message, e.source, started),
      processResponse('error', message, e.source, started)
    );

});

module.exports = { ready: true };

},{"../tools/tools":66,"http-browser":11}],46:[function(require,module,exports){

module.exports = '<svg class="line-short" version="1.1" viewBox="0 0 100 100">' +
'<path  d="M36.788,81.008,50,50" stroke-linecap="round" stroke-width="6" fill="none"/>' +
'</svg>' +
'<svg class="smile" version="1.1" viewBox="0 0 100 100">' +
'<g stroke-linecap="round" fill="none" transform="matrix(0.78036633,0,0,0.78036633,10.526512,18.003998)">' +
'<path class="smile-outline" stroke-width="12" d="M75.242,57.51c-5.435,7.839-14.498,12.972-24.761,12.972-10.262,0-19.325-5.132-24.758-12.972"/>' +
'<path class="smile-line" stroke-width="7.5" d="M75.242,57.51c-5.435,7.839-14.498,12.972-24.761,12.972-10.262,0-19.325-5.132-24.758-12.972"/>' +
'</g>' +
'</svg>' +
'<svg class="line-large" version="1.1" viewBox="0 0 100 100">' +
'<path stroke-linejoin="round" d="M50,50,66.687,92.266" stroke-linecap="round" stroke-miterlimit="4" stroke-dasharray="none" stroke-width="6" fill="none"/>' +
'</svg>';

},{}],47:[function(require,module,exports){
'use strict';

window.matchMedia = window.matchMedia || window.webkitMatchMedia || window.mozMatchMedia || window.msMatchMedia;

var api = require('../core/api'),
    _ = require('../tools/tools'),
    cssHack = require('../tools/css-hack'),
    aplazameVersion = require('../../.tmp/aplazame-version'),
    isMobile = window.matchMedia('( max-width: 767px )'),
    lastScrollTop;

var tmpOverlay = document.createElement('div'),
    cssOverlay = cssHack('overlay'),
    cssBlur = cssHack('blur'),
    cssModal = cssHack('modal');

function modal (content, options) {

  if( modal.iframe ) {
    document.body.removeChild(modal.iframe);
  }

  options = options || {};

  cssOverlay.hack(true);
  cssBlur.hack(true);
  cssModal.hack(true);

  tmpOverlay.className = 'aplazame-overlay aplazame-overlay-show';
  document.body.appendChild(tmpOverlay);

  setTimeout(function () {
    _.addClass(document.body, 'aplazame-blur');
  }, 0);
  setTimeout(function () {
    _.removeClass(tmpOverlay, 'aplazame-overlay-show');
  }, isMobile.matches ? 0 : 600 );

  modal.iframe = _.getIFrame({
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'transparent'
      });

  modal.iframe.className = 'aplazame-modal';
  // modal.iframe.style.display = 'none';
  modal.iframe.content = content;

  document.body.appendChild(modal.iframe);
  modal.iframe.src = api.staticUrl + 'widgets/modal/modal.html?v=' + encodeURI(aplazameVersion);
}

_.onMessage('modal', function (e, message) {

  switch( message.event ) {
    case 'open':
      modal.referrer = e.source;
      modal.message = message;
      modal(message.data);
      break;
    case 'opening':
      modal.iframe.style.display = null;
      break;
    case 'opened':
      lastScrollTop = _.scrollTop();
      e.source.postMessage({
        aplazame: 'modal',
        event: 'content',
        content: modal.iframe.content
      }, '*');
      break;
    case 'resolved':
      modal.referrer.postMessage({
        aplazame: 'modal',
        event: 'resolved',
        name: modal.message.name,
        value: message.value
      }, '*');
      delete modal.referrer;
      break;
    case 'closing':
      document.body.style.overflow = modal.iframe.overflow;
      _.removeClass(document.body, 'aplazame-blur');
      _.addClass(document.body, 'aplazame-unblur');
      _.addClass(tmpOverlay, 'aplazame-overlay-hide');
      setTimeout(function () {
        cssBlur.hack(false);
        _.removeClass(document.body, 'aplazame-unblur');
      }, isMobile.matches ? 0 : 600 );
      break;
    case 'close':
      setTimeout(function () {
        cssModal.hack(false);
      }, isMobile.matches ? 0 : 100 );
      document.body.removeChild(tmpOverlay);
      _.removeClass(tmpOverlay, 'aplazame-overlay-hide');
      _.scrollTop(lastScrollTop);
      if( modal.iframe ) {
        document.body.removeChild(modal.iframe);

        if( modal.referrer ) {
          modal.referrer.postMessage({
            aplazame: 'modal',
            event: 'dismiss',
            name: modal.message.name
          }, '*');
          delete modal.referrer;
        }

        if( modal.message ) {
          delete modal.message;
        }
        delete modal.iframe;
      }
      break;
  }

});

module.exports = modal;

},{"../../.tmp/aplazame-version":1,"../core/api":50,"../tools/css-hack":60,"../tools/tools":66}],48:[function(require,module,exports){
'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools'),
    $q = require('q-promise/no-native'),
    cache = [],
    requestsCache = {};

function simulator (amount, _options, callback, onError) {

  if( _.isFunction(_options) ) {
    onError = callback;
    callback = _options;
    _options = {};
  } else {
    _options = _options || {};
  }

  var options = {
        params: {
          amount: amount
        }
      },
      hash = amount + ',' + JSON.stringify(options);

  if( requestsCache[hash] ) {
    return requestsCache[hash].then(function (result) {
      (callback || _.noop)( result.choices, result.options );
    });
  }

  if( _options.view ) {
    options.params.view = _options.view;
  }
  if( _options.payday ) {
    options.params.payday = _options.payday;
  }
  if( _options.publicKey ) {
    options.publicKey = _options.publicKey;
  }

  var foundCached = _.find(cache, function (item) {
    return item.amount === amount;
  });

  requestsCache[hash] = ( !_options.noCache && foundCached ? $q.resolve(foundCached) : apiHttp.get('instalment-plan-simulator', options ).then(function (response) {
      var result = {
        amount: amount,
        choices: response.data.choices[0].instalments,
        options: response.data.options,
        response: response
      };
      cache.push(result);

      return result;
    }) )
    .then(function (result) {
      (callback || _.noop)( result.choices, result.options );
      return result;
    }, function (response) {
      if( response.status === 403 ) {
        console.error('Aplazame: Permiso denegado usando la clave pública: ' + response.config.publicKey);
        console.info('Revisa la configuración de Aplazame, para cualquier duda puedes escribir a hola@aplazame.com');
      } else if( _.key(response, 'data.error.fields.amount.0') ) {
        console.error('Aplazame: ' + response.data.error.fields.amount[0]);
      } else if( _.key(response, 'data.error.message') ) {
        console.error('Aplazame: ' + response.data.error.message);
      }
      (onError || _.noop)(response);
    });

  return requestsCache[hash];
}

module.exports = simulator;

},{"../core/api-http":49,"../tools/tools":66,"q-promise/no-native":22}],49:[function(require,module,exports){
'use strict';

var apzVersion = require('../../.tmp/aplazame-version'),
    _ = require('../tools/tools'),
    api = require('./api'),
    http = require('http-browser'),
    renderAccept = _.template.compile('application/vnd.aplazame<% if(sandbox){ %>.sandbox<% } %>.v<%= version %>+json'),
    acceptHeader = function (config) {
      var _api = _.copy(api);
      if( 'version' in config || 'apiVersion' in config ) {
        _api.version = 'version' in config ? config.version : config.apiVersion;
      }
      if( 'sandbox' in config ) {
        _api.sandbox = config.sandbox;
      }
      return renderAccept(_api);
    },
    authorizationHeader = function (config) {
      config.publicKey = config.publicKey || api.publicKey;
      return 'Bearer ' + config.publicKey;
    };

var apiHttp = {};

_.each(['get', 'delete'], function (method) {
  apiHttp[method] = function (path, options) {
    var url = _.joinPath(api.host, path);
    return http[method](url, _.merge(options, { headers: {
        xAjsVersion: apzVersion,
        accept: acceptHeader,
        authorization: authorizationHeader
      } }) );
  };
});

_.each(['post', 'put', 'patch'], function (method) {
  apiHttp[method] = function (path, data, options) {
    var url = _.joinPath(api.host, path);
    return http[method](url, data, _.merge(options, { headers: {
        xAjsVersion: apzVersion,
        accept: acceptHeader,
        authorization: authorizationHeader
      } }) );
  };
});

module.exports = apiHttp;

},{"../../.tmp/aplazame-version":1,"../tools/tools":66,"./api":50,"http-browser":11}],50:[function(require,module,exports){
'use strict';

module.exports = {
  host: 'https://api.aplazame.com/',
  // host: 'https://api.aplazame.com/',
  staticUrl: 'https://aplazame.com/static/',
  version: 1,
  checkoutVersion: 1,
  sandbox: false
};

},{}],51:[function(require,module,exports){
'use strict';

module.exports = {
  _: require('../tools/tools'),
  init: require('./init'),
  apiGet: require('./api-http').get,
  apiPost: require('./api-http').post,
  apiDelete: require('./api-http')['delete'],
  apiPut: require('./api-http').put,
  version: require('../../.tmp/aplazame-version')
};

},{"../../.tmp/aplazame-version":1,"../tools/tools":66,"./api-http":49,"./init":52}],52:[function(require,module,exports){
'use strict';

var api = require('./api'),
    _ = require('../tools/tools');

function init (options) {
  options = options || {};

  if( typeof options.version === 'string' ) {
    var matchVersion = options.version.match(/^v?(\d)(\.(\d))?$/);

    if( !matchVersion ) {
      throw new Error('version mismatch, should be like \'v1.2\'');
    }

    options.version = Number(matchVersion[1]);

    if( matchVersion[3] !== undefined ) {
      options.checkoutVersion = Number(matchVersion[3]);
    }
  }

  if( typeof options.sandbox === 'string' ) {
    options.sandbox = options.sandbox === 'true';
  }

  if( typeof options.analytics === 'string' ) {
    options.analytics = options.analytics === 'true';
  }

  _.extend(api, options);

  _.log('aplazame.init', api);
}

module.exports = init;

},{"../tools/tools":66,"./api":50}],53:[function(require,module,exports){
'use strict';

module.exports = function (aplazame) {

  var _ = aplazame._,
      script = _.currentScript,
      dataAplazame = script.getAttribute('data-aplazame'),
      options = script.src && (/\?/.test(script.src) ? _.deserialize(script.src.match(/(.*?)\?(.*)/)[2]) : {}) || {};

  if( options.sandbox ) {
    options.sandbox = options.sandbox === 'true' || options.sandbox === '1';
  }

  if( dataAplazame ) {

    if( /\:/.test(dataAplazame) ) {
      dataAplazame.split(',').forEach(function (part) {
        var keys = part.match(/^([^\:]+)\:(.*)/);
        options[keys[1].trim()] = keys[2].trim();
      });

      if( !options.publicKey ) {
        throw new Error('publicKey missing in data-aplazame');
      }
    } else {
      options.publicKey = dataAplazame;
    }

    if( script.getAttribute('data-api-host') ) {
      options.host = script.getAttribute('data-api-host');
    }

    if( script.getAttribute('data-version') ) {
      options.version = script.getAttribute('data-version');
    }

    if( script.getAttribute('data-sandbox') ) {
      options.sandbox = script.getAttribute('data-sandbox');
    }

    if( script.getAttribute('data-analytics') ) {
      options.analytics = script.getAttribute('data-analytics');
    }

    if( script.getAttribute('data-static-url') ) {
      options.staticUrl = script.getAttribute('data-static-url');
    }

    if( script.getAttribute('data-callback') ) {
      // if( typeof global[script.getAttribute('data-callback')] !== 'function' ) {
      //   throw new Error('callback should be a global function');
      // }

      options.callback = script.getAttribute('data-callback');
      // _.ready(function () {
      //   global[script.getAttribute('data-callback')](aplazame);
      // });
    }
  }

  aplazame.init(options);

};

},{}],54:[function(require,module,exports){
'use strict';

module.exports = function (aplazame) {
  var _ = aplazame._,
      $q = require('q-promise/no-native');

  function buttonsLookup (element) {
    element = element || document;
    if( !element.querySelectorAll ) {
      return;
    }
    var btns = element.querySelectorAll('[data-aplazame-button]');

    if( btns.length ) {
      // console.log('.btn(s)', btns);
      var promises = [];

      _.each(btns, function (btn) {
        // console.log('.btn', arguments, btns);
        var btnId = btn.getAttribute('data-aplazame-button'),
            btnParams = {
              selector: '[data-aplazame-button' + ( btnId ? ('=\"' + btnId + '\"') : '' ) + '], [data-aplazame-button-info' + ( btnId ? ('=\"' + btnId + '\"') : '' ) + ']',
              parent: btn.getAttribute('data-parent'),
              publicKey: btn.getAttribute('data-public-key'),
              amount: btn.getAttribute('data-amount'),
              currency: btn.getAttribute('data-currency') || undefined,
              sandbox: btn.getAttribute('data-sandbox') ? btn.getAttribute('data-sandbox') === 'true' : undefined,
              country: btn.getAttribute('data-country') || undefined
            };

        promises.push( aplazame.button(btnParams) );
      });

      if( promises.length ) {
        return $q.all(promises);
      } else {
        return $q.resolve();
      }
    } else {
      return $q.resolve();
    }
  }

  _.ready(function () {
    buttonsLookup().then(function () {
      _.liveDOM.subscribe(buttonsLookup);
    });
  });

  return buttonsLookup;

};

},{"q-promise/no-native":22}],55:[function(require,module,exports){
'use strict';

module.exports = function (aplazame) {

  var _ = aplazame._,
      $q = require('q-promise/no-native'),
      Events = require('events-wrapper'),
      api = require('../core/api'),
      isMobile = window.matchMedia('( max-width: 767px )'),
      each = Array.prototype.forEach;

  function getQty (qtySelector) {
    if( !_.isString(qtySelector) ) {
      console.warn('warning: data-qty should be an string. pe: form#article .final-price ');
      return 1;
    }
    var qtyElement;
    try {
      qtyElement = document.querySelector(qtySelector);
    } catch(err) {
      console.warn(err.message + '\ndata-qty should be an string. pe: form#article .final-price ');
      return 1;
    }

    switch( qtyElement.nodeName.toLowerCase() ) {
      case 'input':
        return Number( qtyElement.value );
      case 'select':
        return Number( qtyElement.querySelector('option[selected]').value );
      default:
        return Number( qtyElement.textContent.trim() );
    }
  }

  var cmsPriceSelector = [
    'form#product_addtocart_form .special-price .price', // magento
    'form#product_addtocart_form .regular-price .price', // magento
    '#product-info .special-price .price', // magento
    '#product-info .regular-price .price', // magento
    'form#buy_block #our_price_display', // prestashop
    '#main [itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"] .price .amount ins', // woocommerce
    '#main [itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"] .price .amount' // woocommerce
  ],
  cmsQtySelector = [
    'form#product_addtocart_form input[name="qty"]', // magento
    'form#buy_block input[name="qty"]', // prestashop
    'form#product-options-form button[data-id=qty]', // custom
    '#main [itemtype="http://schema.org/Product"] form.cart input[name="quantity"]' // woocommerce
  ];

  function matchSelector (selector) {
    return document.querySelector(selector);
  }

  function amountGetter (widgetElement) {
    var priceSelector = widgetElement.getAttribute('data-price'),
        qtySelector = widgetElement.getAttribute('data-qty'),
        autoDiscovered = false;

    if( priceSelector ) {
      // try{
      //   document.querySelector(priceSelector);
      // } catch(err) {
      //   priceSelector = null;
      //   console.warn(err.message);
      // }
      if( qtySelector ) {
        try{
          document.querySelector(qtySelector);
        } catch(err) {
          qtySelector = null;
          console.warn(err.message);
        }
      }
    } else {
      priceSelector = _.find(cmsPriceSelector, matchSelector);

      if( priceSelector ) {
        qtySelector = _.find(cmsQtySelector, matchSelector);
        autoDiscovered = true;

        _.log('auto-discovered price selector', priceSelector, qtySelector);
      }
    }

    var getter = priceSelector ? function () {
      var qty = qtySelector ? getQty( qtySelector ) : 1, priceElement;
      try {
        priceElement = document.querySelector( priceSelector );
      } catch(err) {}

      var amount = priceElement ? priceElement.value : '0';

      if( typeof amount === 'undefined' ) {
        if( !/\d+[,.]\d+/.test(priceElement.textContent) && priceElement.children && priceElement.children.length ) {
          amount = '';

          var part = priceElement.firstChild, matched;

          while( part ) {
            if( /[,.]/.test(amount) ) {
              return;
            }
            matched = ( part.toString() === '[object Text]' ? part.data : part.textContent ).match(/[\d,.]+/);

            if( matched ) {
              amount += (amount && !/^[,.]/.test(matched[0]) ? '.' : '') + matched[0];
            }

            part = part.nextSibling;
          }
        } else {
          amount = priceElement.textContent;
        }
      }

      return _.parsePrice( amount );
    } : function () {
      // return Number( widgetElement.getAttribute('data-amount') );
      return;
    };

    getter.priceSelector = priceSelector;
    getter.qtySelector = qtySelector;
    getter.autoDiscovered = autoDiscovered;

    return getter;
  }

  function Iframe (url) {
    var el = _.getIFrame({ width: '100%', height: '40px' }),
        iframe = this;
    this.el = el;
    this.el.src = url;

    new Events (this);

    this.onload = function () {
      this.trigger('load', null, this);
    };

    _.onMessage('simulator', function (e, message) {
      // console.log('message.simulator', e, message);
      if( e.source === el.contentWindow ) {
        iframe.trigger('message:' + message.event, [message], this);
      }
    });

    this.on('message:resize', function (e, message) {
      el.style.height = message.height + 'px';
    });
  }

  Iframe.prototype.message = function (eventName, data) {
    var _data = _.extend({
      aplazame: 'simulator',
      event: eventName,
      mobile: isMobile.matches
    }, data || {});
    if( this.el.contentWindow ) {
      // console.log('iframe message', eventName, _data, this);
      this.el.contentWindow.postMessage(_data, '*');
    } else {
      console.warn('iframe contentWindow missing', this);
    }
  };

  function maxInstalments (prev, choice) {
    if( prev === null ) {
      return choice;
    } else {
      return choice.num_instalments > prev.num_instalments ? choice : prev;
    }
  }

  function getWidget (meta) {
    if( !meta.options.widget ) {
      return;
    }

    getWidget.serial = getWidget.serial ? getWidget.serial + 1 : 1;

    var widget,
        id = getWidget.serial;

    if( meta.options.widget.type === 'button' ) {
      widget = new Iframe( api.staticUrl + 'widgets/simulator/simulator.html?' + Date.now() + '&simulator=' + id );

      widget.on('message:require.choices choices.update', function (e, message) {
        if( message && message.simulatorId && message.simulatorId !== id ) {
          return;
        }
        // console.log(e, meta, message);
        widget.message('choices', {
          amount: meta.amount,
          choice: meta.choices.reduce(maxInstalments, null),
          choices: meta.choices,
          options: meta.options
        });
      });

      widget.on('choices.updating', function (e) {
        widget.message('loading');
      });

    } else {
      _.template.put('widget-raw', require('../../.tmp/simulator/templates/widget-raw') );
      widget = { el: document.createElement('div') };
      new Events(widget);

      widget.el.innerHTML = _.template('widget-raw', {
        getAmount: _.getAmount,
        amount: meta.amount,
        choice: meta.choices.reduce(maxInstalments, null),
        choices: meta.choices,
        options: meta.options
      });

      widget.el.addEventListener('click', function () {
        window.postMessage({
          aplazame: 'modal',
          event: 'open',
          name: 'instalments',
          data: {
            card: _.template.compile( require('../../.tmp/simulator/templates/modal-instalments') )({
              selectedChoice: meta.choices.reduce(maxInstalments, null),
              choices: meta.choices,
              getAmount: _.getAmount,
              months: function (m) {
                return m > 1 ? 'meses' : 'mes';
              }
            })
          }
        }, '*');

      });
    }

    widget.id = id;

    return widget;
  }

  function placeWidget (widget, widgetWrapper, selector) {
    if( !selector ) {
      widgetWrapper.appendChild(widget.el);
      return;
    }

    var pseudoLocator;
    selector = selector.trim().replace(/:(\w+?)$/, function (matched, locator) {
      pseudoLocator = locator;
      return '';
    });

    var el = document.querySelector(selector);
    if( el ) {
      if( pseudoLocator ) {
        switch( pseudoLocator ) {
          case 'after':
            if( el.nextElementSibling ) {
              el.parentElement.insertBefore(widget.el, el.nextElementSibling);
            } else {
              el.parentElement.appendChild(widget.el);
            }
            break;
          case 'before':
            el.parentElement.insertBefore(widget.el, el);
            break;
          default:
            throw new Error('pseudoLocator ' + pseudoLocator + ' not defined');
        }
      } else {
        el.appendChild(widget.el);
      }
    }
  }

  function evalWidget (widgetWrapper) {
    var meta, updateData = false, detectedAmount, simulatorOptions = {};

    if( widgetWrapper.__apz_widget__ ) {
      meta = widgetWrapper.__apz_widget__;

      detectedAmount = meta.getAmount();
      if( detectedAmount && meta.amount !== detectedAmount ) {
        updateData = true;
        // console.log(widgetWrapper, meta.amount, meta.getAmount() );
        meta.amount = meta.getAmount();
      }
    } else {
      meta = { getAmount: amountGetter(widgetWrapper) };
      meta.amount = widgetWrapper.getAttribute('data-amount') ? Number(widgetWrapper.getAttribute('data-amount')) : meta.getAmount();
      updateData = true;
      if( meta.getAmount.qtySelector ) {
        meta.qty = getQty(meta.getAmount.qtySelector) || 1;
        // console.debug('new watcher');
        meta.watchQty = setInterval(function () {
          if( !document.body.contains(widgetWrapper) ) {
            clearInterval(meta.watchQty);
            return;
          }
          var qty = getQty(meta.getAmount.qtySelector);
          if( qty !== meta.qty ) {
            meta.qty = qty;
            evalWidget(widgetWrapper);
          }
        }, 250);
      }
    }

    if( widgetWrapper.getAttribute('data-view') ) {
      simulatorOptions.view = widgetWrapper.getAttribute('data-view');
    }

    if( meta.amount && meta.getAmount.qtySelector ) {
      meta.amount *= ( getQty(meta.getAmount.qtySelector) || 1 );
    }
    if( meta.amount && updateData ) {
      if( meta.widget && meta.widget.message ) {
        meta.widget.message('loading');
      }
      aplazame.simulator( meta.amount, simulatorOptions, function (_choices, _options) {
        _options.widget = _options.widget || {};
        if( _options.widget.disabled ) {
          return;
        }

        meta.choices = _choices;
        meta.options = _options;

        meta.widget = meta.widget || getWidget(meta);

        if( meta.widget && !document.body.contains(meta.widget.el) ) {
          placeWidget(meta.widget, widgetWrapper, widgetWrapper.getAttribute('data-location') || _options.widget.location );
        }

        meta.widget.trigger('choices.update');
      }, function () {
        if( meta.widget && meta.widget.message ) {
          meta.widget.message('abort');
        }
        if( meta.widget && document.body.contains(meta.widget.el) ) {
          var parent = meta.widget.el.parentElement;
          parent.removeChild(meta.widget.el);
        }
      });
    }

    widgetWrapper.__apz_widget__ = meta;
  }

  function widgetsLookup (element) {
    var promises = [];

    each.call(document.querySelectorAll('[data-aplazame-simulator]'), evalWidget );

    return promises.length ? $q.all(promises) : $q.resolve();
  }

  widgetsLookup().then(function () {
    _.liveDOM.subscribe(widgetsLookup);
  });

  return widgetsLookup;

};

},{"../../.tmp/simulator/templates/modal-instalments":6,"../../.tmp/simulator/templates/widget-raw":7,"../core/api":50,"events-wrapper":10,"q-promise/no-native":22}],56:[function(require,module,exports){
'use strict';

function _errorData(err) {
  (console.info || console.log)('%c[non blocking error] %caplazame.js\n\n', 'font-weight: bold; color: #267BBD;', 'color: #267BBD;');

  var filename = err.fileName ? err.fileName.lastIndexOf('/') : '<not defined>';
  var stamp = new Date();
  var str = '%cname: %c' + err.name +
          '\n%cError: %c' + err.message +
          '\n%cFile: %c' + filename;

  console.log(str, 'font-weight: bold;', 'color: #e74c3c;', 'font-weight: bold;', 'font-weight: normal; color: #e74c3c;', 'font-weight: bold;', 'font-weight: normal;');
  if( err.stack ) {
    console.log('%c' + err.stack, 'background-color: #ffffee; line-height: 2;');
  }
}

module.exports = function (func) {
  try{ func(); }
  catch(err) {
    _errorData(err);
  }
};

},{}],57:[function(require,module,exports){

function thousands(amount) {
  if( /\d{3}\d+/.test(amount) ) {
    return thousands(amount.replace(/(\d{3}?)(\.|$)/, '.$&'));
  }
  return amount;
}

function getAmount (amount) {
  var prefix = '';

  if( amount < 0 ) {
    prefix = '-';
    amount = 0 - amount;
  }

  if( !amount ) {
    return '0,00';
  } else if( amount < 10 ) {
    return '0,0' + amount;
  } else if( amount < 100 ) {
    return '0,' + amount;
  }
  return prefix + ('' + amount).replace(/(\d*)(\d{2})$/, function (matched, main, tail) {
    return thousands(main) + ',' + tail;
  });
}

function parsePrice (price) {
  var matched = price.match(/((\d+[,. ])*)(\d+)/),
      amount, main, tail;

  if( matched ) {
    tail = matched[3];
    main = matched[1].replace(/[^\d]/g, '');

    if( !main ) {
      return Number( tail + '00' );
    }

    if( tail.length === 1 ) {
      return Number(main + tail + '0');
    }

    if( tail.length !== 2 ) {
      tail += '00';
    }

    return Number(main + tail);
  }

  if( /\d+/.test(price) ) {
    return Number( price.replace(/[^\d]+/g, '') + '00' );
  }

  console.warn('price data mismatch', price);
}

module.exports = {
	getAmount: getAmount,
	parsePrice: parsePrice
};

},{}],58:[function(require,module,exports){

function _ready (_callback, delay) {
  var callback = delay ? function () { setTimeout(_callback, delay); } : _callback;

  if (/loaded|complete/.test(document.readyState)) {
    callback();
  } else {
    window.addEventListener('load', callback);
  }
}

function findBubbleClose (str) {
  var level = 0;

  for( var i = 0, len = str.length; i < len ; i++ ) {
    if( str[i] === '(' ) {
      level++;
    } else if( str[i] === ')' ) {
      if( level === 0 ) {
        return i;
      } else {
        level--;
      }
    }
  }

  return -1;
}

function hasSelector (selector, rootElement) {
  var splitHas = selector.split(':has(');

  return splitHas.reduce(function (matches, partial) {

    var closePosition = findBubbleClose(partial),
        hasFilter = partial.substr(0, closePosition),
        partialQuery = partial.substr(closePosition + 1).trim();

    if( closePosition === -1 ) {
      throw new Error('malformed selector');
    }

    matches = matches.filter(function (element) {
      return element.querySelector(hasFilter);
    });

    if( partialQuery ) {
      var submatches = [];

      matches.forEach(function (element) {
        [].push.apply(submatches, element.querySelectorAll(partialQuery) );
      });

      return submatches;
    }

    return matches;

  }, [].slice.call( (rootElement || document).querySelectorAll( splitHas.shift() ) ) );
}

function querySelector (selector, rootElement) {
  // 'tr:has(> .row) div:has(span) img'.split(':has(');
  if( !selector ) {
    return [];
  }

  if( !/\:has\(/.test(selector) ) {
    return [].slice.call( (rootElement || document).querySelectorAll( selector ) );
  }

  return hasSelector(selector);
}

function cssQuery (_selector, rootElement) {
  var selectors = _selector.split(/\s*,\s*/);

  return selectors.reduce(function (list, selector) {
    return list.concat( querySelector(selector, rootElement) );
  }, []);
}

function scrollTop (value) {
  if( value !== undefined ) {
    document.documentElement.scrollTop = value;
    document.body.scrollTop = value;
  }
  return document.documentElement.scrollTop || document.body.scrollTop;
}

function clearElement (el) {
  var child = el.firstChild;

  while( child ) {
    el.removeChild(child);
    child = el.firstChild;
  }
}

// var _classActions = {
//   add: document.documentElement.classList ? function (element, className) {
//     element.classList.add(className);
//   } : function (element, className) {
//     var RE_CLEANCLASS = new RegExp('\\b' + (className || '') + '\\b','');
//     _classActions.remove(element, className);
//     element.className += ' ' + className;
//   },
//   remove: document.documentElement.classList ? function (element, className) {
//     element.classList.remove(className);
//   } : function (element, className) {
//     var RE_CLEANCLASS = new RegExp('\\b' + (className || '') + '\\b','');
//     element.className = element.className.replace(RE_CLEANCLASS,'');
//   },
//   action: function (action, tools) {
//     return function (element, className) {
//       if( className.indexOf(' ') >= 0 ) {
//         className.split(' ').forEach(function (cn) {
//           _classActions[action](element, cn);
//         });
//       } else {
//         _classActions[action](element, className);
//       }
//       return tools;
//     };
//   }
// };

function writeIframe (iframe, content) {
  var iframeDoc = iframe.contentWindow.document;
  try { iframeDoc.charset = 'UTF-8'; } catch(err) {}
  iframeDoc.open();
  iframeDoc.write(content);
  iframeDoc.close();
}

function getIFrame (iframeStyles) {
  var iframe = document.createElement('iframe');
  require('nitro-tools/extend').extend(iframe.style, iframeStyles || {});

  iframe.frameBorder = '0';
  // iframe.style.display = 'none';
  iframe.onload = function () {
    iframe.style.display = null;
  };
  return iframe;
}

var _ = {
  ready: _ready,
  getIFrame: getIFrame,
  writeIframe: writeIframe,
  cssQuery: cssQuery,
  scrollTop: scrollTop,
  clearElement: clearElement,
  elementData: document.createElement('div').dataset ? function (el, key, value) {
    if( value !== undefined ) {
      el.dataset[key] = value;
    }
    return el.dataset[key];
  } : function (el, key, value) {
    if( value !== undefined ) {
      el.setAttribute('data-' + key, value);
    }
    return el.getAttribute('data-' + key);
  },
};

// var addClass = _classActions.action('add', _ ),
//     removeClass = _classActions.action('remove', _ );

// _.addClass = addClass;
// _.removeClass = removeClass;

_.addClass = function (element, className) {
  element.classList.add(className);
};

_.removeClass = function (element, className) {
  element.classList.remove(className);
};

module.exports = _;

},{"nitro-tools/extend":13}],59:[function(require,module,exports){


function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
}

function brightness (color) {
  var rgb = hexToRgb(color);
  var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) /1000);
  return o < 100 ? 'dark' : ( o > 230 ? 'light' : 'medium' );
}

module.exports = {
  hexToRgb: hexToRgb,
  brightness: brightness
};

},{}],60:[function(require,module,exports){


var importantCSS = function (css) {
      return css.replace(/;/g, ' !important;').replace(/:([^:;]+?)}/g, function (matched, value) {
        return ':' + value + ' !important;}';
      }).replace(/(\d+%|from|to){([^}]+)/g, function (matched, pos, content) {
        return pos + '{' + content.replace(/ !important;/g, ';');
      });
    },
    cssHack = (function () {
      var cache = {},
          hacks = {
            overlay: importantCSS(require('../../.tmp/css-hacks/overlay')),
            blur: importantCSS(require('../../.tmp/css-hacks/blur')),
            logo: importantCSS(require('../../.tmp/css-hacks/logo')),
            modal: importantCSS(require('../../.tmp/css-hacks/modal'))
          };

      // console.log('cssHacks', hacks);

      return function hack (hackName) {
        if( !cache[hackName] ) {
          var style = document.createElement('style');
          style.setAttribute('rel', 'stylesheet');
          style.setAttribute('type', 'text/css');
          style.textContent = hacks[hackName];

          var enabled = false;

          style.hack = function (enable) {
            enable = enable === undefined || enable;

            if( enable ) {
              if( enabled ) { return; }
              enabled = true;
              document.head.appendChild(style);
            } else {
              if( !enabled ) { return; }
              enabled = false;
              document.head.removeChild(style);
            }
          };

          cache[hackName] = style;
        }
        return cache[hackName];
      };
    })();

module.exports = cssHack;

},{"../../.tmp/css-hacks/blur":2,"../../.tmp/css-hacks/logo":3,"../../.tmp/css-hacks/modal":4,"../../.tmp/css-hacks/overlay":5}],61:[function(require,module,exports){


function _key (o, key, value) {
	key.split('.').forEach(function (k, i, keys) {
		if( i === keys.length - 1 ) {
			o[k] = value;
		} else {
			o[k] = o[k] || {};
			o = o[k];
		}
	});
}

function camelCase (text) {
	return text.replace(/_(\w)/g, function (matched, letter) {
		return letter.toUpperCase();
	});
}

function deserialize (querystring, decode) {

	var result = {};

	querystring.split('&').forEach(function (keyValue) {
		var matched = keyValue.match(/(.*?)=(.*)/);

		if( !matched ) {
			throw new Error('could not parse ' + keyValue);
		}

		_key(result, camelCase(matched[1]), decode ? decodeURI(matched[2]) : matched[2] );

	});

	return result;

}

module.exports = deserialize;

},{}],62:[function(require,module,exports){
'use strict';

var suscriptors = [],
    running = false;

function initLiveDOM () {

  require('./browser-tools').ready(function () {
    document.body.addEventListener('DOMSubtreeModified', function(event){
      for( var i = 0, n = suscriptors.length; i < n ; i++ ) {
        suscriptors[i](event.target);
      }
    }, false);
  });

}

module.exports = {
  subscribe: function (handler) {
    if( !running ) {
      initLiveDOM(true);
      running = true;
    }
    if( handler instanceof Function ) {
      suscriptors.push(handler);
    }
  }
};

},{"./browser-tools":58}],63:[function(require,module,exports){


function getErrorObject(){
    try { throw Error(''); } catch(err) { return err; }
}

function log () {
  var err = getErrorObject(),
      caller_line = err.stack.split('\n')[4] || '',
      index = caller_line.indexOf('at ');

  log.history.push({
    time: new Date(),
    args: arguments,
    track: {
      caller_line: caller_line,
      index: index,
      clean: caller_line.slice(index + 2, caller_line.length)
    }
  });

  // console.log.apply(console, arguments);
}

log.history = [];

module.exports = log;

},{}],64:[function(require,module,exports){

var messageTarget = {},
    showLogs = false;

window.addEventListener('message', function (e) {
  var message = e.data,
      listeners = messageTarget[message.aplazame];

  if( !listeners ) {
    return;
  }

  if( showLogs && !e.used ) {
    console.log('message', e, listeners);
  }

  if( !e.used ) {
    e.used = true;
    for( var i = 0, n = listeners.length ; i < n ; i++ ) {
      listeners[i](e, message);
    }
  }
}, true);

function onMessage (target, handler, logs) {
  showLogs = logs;
  if( typeof target === 'string' && handler instanceof Function ) {
    messageTarget[target] = messageTarget[target] || [];
    messageTarget[target].push(handler);
  }
}

onMessage.off = function (target, handler) {
  if( typeof target === 'string' && handler instanceof Function ) {
    messageTarget[target] = messageTarget[target] || [];
    var i = messageTarget[target].indexOf(handler);
    if( i !== -1 ) {
      messageTarget[target].splice(i,1);
    }
  }
};

module.exports = onMessage;

},{}],65:[function(require,module,exports){

function template (name, data){
  return template.cache[name](data || {});
}

template.cache = {};

template.compile = function (tmpl) {
  // John Resig micro-template
  return new Function('obj', // jshint ignore:line
    'var p=[],print=function(){p.push.apply(p,arguments);};' +

    // Introduce the data as local variables using with(){}
    'with(obj){p.push(\'' +

    // Convert the template into pure JavaScript
    tmpl.trim()
      .replace(/[\r\t\n]/g, ' ')
      .split('<%').join('\t')
      .replace(/((^|%>)[^\t]*)'/g, '$1\r')
      .replace(/\t=(.*?)%>/g, '\',$1,\'')
      .split('\t').join('\');')
      .split('%>').join('p.push(\'')
      .split('\r').join('\\\'') + '\');}return p.join(\'\');');
};

template.put = function (name, tmpl) {
  template.cache[name] = template.compile(tmpl);
};

template.lookup = function () {
  [].forEach.call(document.querySelectorAll('script[type="application/x-template"][data-template]'), function (tmpl) {
    template.put(tmpl.getAttribute('data-template'), tmpl.text);
  });
};

module.exports = template;

},{}],66:[function(require,module,exports){

var _ = require('vanilla-tools');

_.extend(_,
  require('nitro-tools/lists'),
  require('nitro-tools/path'),
  require('./colors'),
  require('./browser-tools'),
  require('./amount-price'),
  {
    liveDOM: require('./live-dom'),
    template: require('./template'),
    onMessage: require('./message-listener'),
    deserialize: require('./deserialize')
  }
);

_.log = require('./log');
_.noop = function (value) { return value; };

module.exports = _;

},{"./amount-price":57,"./browser-tools":58,"./colors":59,"./deserialize":61,"./live-dom":62,"./log":63,"./message-listener":64,"./template":65,"nitro-tools/lists":15,"nitro-tools/path":16,"vanilla-tools":29}]},{},[42])
undefined
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8udG1wL2FwbGF6YW1lLXZlcnNpb24uanMiLCIuLi8udG1wL2Nzcy1oYWNrcy9ibHVyLmpzIiwiLi4vLnRtcC9jc3MtaGFja3MvbG9nby5qcyIsIi4uLy50bXAvY3NzLWhhY2tzL21vZGFsLmpzIiwiLi4vLnRtcC9jc3MtaGFja3Mvb3ZlcmxheS5qcyIsIi4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy9tb2RhbC1pbnN0YWxtZW50cy5qcyIsIi4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy93aWRnZXQtcmF3LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Jlemllci1lYXNpbmcvc3JjL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NsYXNzbGlzdC5qcy9jbGFzc0xpc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvZXZlbnRzLXdyYXBwZXIvZXZlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2h0dHAtYnJvd3Nlci9zcmMvaHR0cC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy9fZXh0ZW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL25pdHJvLXRvb2xzL2V4dGVuZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy9rZXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbml0cm8tdG9vbHMvbGlzdHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbml0cm8tdG9vbHMvcGF0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3EtcHJvbWlzZS9saWIvcHJvbWlzZS1tZXRob2RzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3EtcHJvbWlzZS9saWIvcHJvbWlzZS1wb2x5ZmlsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9xLXByb21pc2UvbGliL3EuanMiLCIuLi9ub2RlX21vZHVsZXMvcS1wcm9taXNlL2xpYi9xaXplci5qcyIsIi4uL25vZGVfbW9kdWxlcy9xLXByb21pc2Uvbm8tbmF0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9icm93c2VyLXBvbHlmaWxscy9kYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMvZG9tLWNsb3Nlc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9icm93c2VyLXBvbHlmaWxscy9ldmVudC1saXN0ZW5lci5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2Jyb3dzZXItcG9seWZpbGxzL21hdGNoLW1lZGlhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMvbWF0Y2hlcy1zZWxlY3Rvci5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2J1bmRsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2RlZmVycmVkL2FuaW1hdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9kZWZlcnJlZC93YWl0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvZm4vZGVib3VuY2UuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9mbi9yZWFkeS5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2ZuL3RlbXBsYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvZG9tLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvZXZlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvbm9ybWFsaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsL2FuaW1hdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy91dGlscy9zY3JvbGwvYnVuZGxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsL3RvcC1jbGFzcy5qcyIsImFwbGF6YW1lLmpzIiwiYXBwcy9idXR0b24uanMiLCJhcHBzL2NoZWNrb3V0LmpzIiwiYXBwcy9odHRwLXNlcnZpY2UuanMiLCJhcHBzL2xvYWRpbmctc3ZnLmpzIiwiYXBwcy9tb2RhbC5qcyIsImFwcHMvc2ltdWxhdG9yLmpzIiwiY29yZS9hcGktaHR0cC5qcyIsImNvcmUvYXBpLmpzIiwiY29yZS9jb3JlLmpzIiwiY29yZS9pbml0LmpzIiwibG9hZGVycy9kYXRhLWFwbGF6YW1lLmpzIiwibG9hZGVycy9kYXRhLWJ1dHRvbi5qcyIsImxvYWRlcnMvZGF0YS1zaW11bGF0b3IuanMiLCJzYW5kYm94LmpzIiwidG9vbHMvYW1vdW50LXByaWNlLmpzIiwidG9vbHMvYnJvd3Nlci10b29scy5qcyIsInRvb2xzL2NvbG9ycy5qcyIsInRvb2xzL2Nzcy1oYWNrLmpzIiwidG9vbHMvZGVzZXJpYWxpemUuanMiLCJ0b29scy9saXZlLWRvbS5qcyIsInRvb2xzL2xvZy5qcyIsInRvb2xzL21lc3NhZ2UtbGlzdGVuZXIuanMiLCJ0b29scy90ZW1wbGF0ZS5qcyIsInRvb2xzL3Rvb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzVGQTtBQUNBO0FBQ0E7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9XQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9ICcwLjAuMzU3JzsiLCJtb2R1bGUuZXhwb3J0cyA9ICdALXdlYmtpdC1rZXlmcmFtZXMgYXBsYXphbWUtYmx1cnswJXstd2Via2l0LWZpbHRlcjpibHVyKDApO2ZpbHRlcjpibHVyKDApO310b3std2Via2l0LWZpbHRlcjpibHVyKDNweCk7ZmlsdGVyOmJsdXIoM3B4KX19QGtleWZyYW1lcyBhcGxhemFtZS1ibHVyezAley13ZWJraXQtZmlsdGVyOmJsdXIoMCk7ZmlsdGVyOmJsdXIoMCl9dG97LXdlYmtpdC1maWx0ZXI6Ymx1cigzcHgpO2ZpbHRlcjpibHVyKDNweCl9fWJvZHkuYXBsYXphbWUtYmx1cj46bm90KC5hcGxhemFtZS1tb2RhbCk6bm90KC5hcGxhemFtZS1vdmVybGF5KXstd2Via2l0LWZpbHRlcjpibHVyKDNweCk7ZmlsdGVyOmJsdXIoM3B4KX1AbWVkaWEgKG1pbi13aWR0aDo2MDFweCl7Ym9keS5hcGxhemFtZS1ibHVyPjpub3QoLmFwbGF6YW1lLW1vZGFsKTpub3QoLmFwbGF6YW1lLW92ZXJsYXkpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi40czthbmltYXRpb24tZHVyYXRpb246LjRzOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtYmx1cjthbmltYXRpb24tbmFtZTphcGxhemFtZS1ibHVyfX1ib2R5LmFwbGF6YW1lLXVuYmx1cj46bm90KC5hcGxhemFtZS1tb2RhbCk6bm90KC5hcGxhemFtZS1vdmVybGF5KXstd2Via2l0LWZpbHRlcjpibHVyKDApO2ZpbHRlcjpibHVyKDApfUBtZWRpYSAobWluLXdpZHRoOjYwMXB4KXtib2R5LmFwbGF6YW1lLXVuYmx1cj46bm90KC5hcGxhemFtZS1tb2RhbCk6bm90KC5hcGxhemFtZS1vdmVybGF5KXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNHM7YW5pbWF0aW9uLWR1cmF0aW9uOi40czstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWJsdXI7YW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtYmx1cjstd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246cmV2ZXJzZTthbmltYXRpb24tZGlyZWN0aW9uOnJldmVyc2V9fSc7IiwibW9kdWxlLmV4cG9ydHMgPSAnQC13ZWJraXQta2V5ZnJhbWVzIGFwbGF6YW1lLWxvZ28tbGFyZ2V7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyk7fTYwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfTkwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fUBrZXlmcmFtZXMgYXBsYXphbWUtbG9nby1sYXJnZXswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX02MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX05MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1ALXdlYmtpdC1rZXlmcmFtZXMgYXBsYXphbWUtbG9nby1zaG9ydHswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX0zMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9OTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19QGtleWZyYW1lcyBhcGxhemFtZS1sb2dvLXNob3J0ezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTMwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX05MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1ALXdlYmtpdC1rZXlmcmFtZXMgYXBsYXphbWUtbG9nby1zbWlsZXswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX05MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDJ0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDJ0dXJuKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMnR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMnR1cm4pfX1Aa2V5ZnJhbWVzIGFwbGF6YW1lLWxvZ28tc21pbGV7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9OTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgydHVybik7dHJhbnNmb3JtOnJvdGF0ZSgydHVybil9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDJ0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDJ0dXJuKX19LmxvZ28tYXBsYXphbWV7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTUwcHg7aGVpZ2h0OjE1MHB4fS5sb2dvLWFwbGF6YW1lIC5saW5lLWxhcmdlLC5sb2dvLWFwbGF6YW1lIC5saW5lLXNob3J0LC5sb2dvLWFwbGF6YW1lIC5zbWlsZXtzdHJva2U6I2RkZH0ubG9nby1hcGxhemFtZSAuc21pbGUtb3V0bGluZXtzdHJva2U6IzQ4NTI1OX1AbWVkaWEgKG1pbi13aWR0aDo0ODBweCl7LmxvZ28tYXBsYXphbWV7d2lkdGg6MjAwcHg7aGVpZ2h0OjIwMHB4fX0ubG9nby1hcGxhemFtZSBzdmd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LmxvZ28tYXBsYXphbWUuYW5pbWF0ZSAubGluZS1sYXJnZSwubG9nby1hcGxhemFtZS5hbmltYXRlIC5saW5lLXNob3J0LC5sb2dvLWFwbGF6YW1lLmFuaW1hdGUgLnNtaWxley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7LXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO2FuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS41czthbmltYXRpb24tZHVyYXRpb246MS41czstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZX0ubG9nby1hcGxhemFtZS5hbmltYXRlIC5zbWlsZXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWxvZ28tc21pbGU7YW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtbG9nby1zbWlsZX0ubG9nby1hcGxhemFtZS5hbmltYXRlIC5saW5lLWxhcmdley13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtbG9nby1sYXJnZTthbmltYXRpb24tbmFtZTphcGxhemFtZS1sb2dvLWxhcmdlfS5sb2dvLWFwbGF6YW1lLmFuaW1hdGUgLmxpbmUtc2hvcnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphcGxhemFtZS1sb2dvLXNob3J0O2FuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWxvZ28tc2hvcnR9JzsiLCJtb2R1bGUuZXhwb3J0cyA9ICcuYXBsYXphbWUtbW9kYWx7aGVpZ2h0OjEwMCU7aGVpZ2h0OjEwMHZoO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MjE0NzQ4MzY0Nzt9Ym9keXtvdmVyZmxvdzpoaWRkZW59QG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpe2h0bWx7YmFja2dyb3VuZC1jb2xvcjojMzMzYTNlfWJvZHksaHRtbHtoZWlnaHQ6MTAwdmg7bWFyZ2luOjA7cGFkZGluZzowfWJvZHk+Om5vdCguYXBsYXphbWUtbW9kYWwpe2Rpc3BsYXk6bm9uZX19QG1lZGlhIChtaW4td2lkdGg6NjAxcHgpey5hcGxhemFtZS1tb2RhbHtwb3NpdGlvbjpmaXhlZH19JzsiLCJtb2R1bGUuZXhwb3J0cyA9ICdALXdlYmtpdC1rZXlmcmFtZXMgYXBsYXphbWUtb3ZlcmxheXswJXtvcGFjaXR5OjA7fXRve29wYWNpdHk6MX19QGtleWZyYW1lcyBhcGxhemFtZS1vdmVybGF5ezAle29wYWNpdHk6MH10b3tvcGFjaXR5OjF9fS5hcGxhemFtZS1vdmVybGF5e2ZvbnQtZmFtaWx5Ok1vbnRzZXJyYXQsc2Fucy1zZXJpZjtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3dpZHRoOjEwMHZ3O2hlaWdodDoxMDB2aDtiYWNrZ3JvdW5kOnJnYmEoNTMsNjQsNzEsLjkpO3RleHQtYWxpZ246Y2VudGVyO3otaW5kZXg6MjE0NzQ4MzY0Njstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfS5hcGxhemFtZS1vdmVybGF5OmJlZm9yZXtjb250ZW50OlxcJ1xcJztkaXNwbGF5OmJsb2NrO2hlaWdodDo1MHZofS5hcGxhemFtZS1sb2dvLXdyYXBwZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXRvcDotNTAlfS5hcGxhemFtZS1vdmVybGF5LWxvYWRpbmctdGV4dHtjb2xvcjojOTVhNmIxO21hcmdpbi10b3A6MTRweDtmb250LXNpemU6MTRweH0uYXBsYXphbWUtb3ZlcmxheS1sb2FkaW5nLXRleHQgLnRleHQtZXJyb3J7Y29sb3I6I2YwODA4MH0uYXBsYXphbWUtb3ZlcmxheS1sb2FkaW5nLXRleHQgYXtjb2xvcjojZjVmNWY1O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtZGVjb3JhdGlvbjpub25lfS5hcGxhemFtZS1vdmVybGF5LWxvYWRpbmctdGV4dCBhOmhvdmVye2JvcmRlci1ib3R0b206MXB4IGRvdHRlZCAjZjVmNWY1fS5hcGxhemFtZS1vdmVybGF5ey13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkczthbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzfS5hcGxhemFtZS1vdmVybGF5LmFwbGF6YW1lLW92ZXJsYXktaGlkZSwuYXBsYXphbWUtb3ZlcmxheS5hcGxhemFtZS1vdmVybGF5LXNob3d7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNnM7YW5pbWF0aW9uLWR1cmF0aW9uOi42czstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLW92ZXJsYXk7YW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtb3ZlcmxheX0uYXBsYXphbWUtb3ZlcmxheS5hcGxhemFtZS1vdmVybGF5LWhpZGV7LXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOnJldmVyc2U7YW5pbWF0aW9uLWRpcmVjdGlvbjpyZXZlcnNlfSc7IiwibW9kdWxlLmV4cG9ydHMgPSAnPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPiAgPGhlYWRlciBjbGFzcz1cImFwbGF6YW1lXCI+PC9oZWFkZXI+ICA8c2VjdGlvbiBjbGFzcz1cImluZm9cIj4gICAgRWxpZ2UgZWwgbsO6bWVybyBkZSBtZXNlcyB5IGxhIGN1b3RhIHF1ZSBtw6FzIHRlIGNvbnZlbmdhbiAgPC9zZWN0aW9uPiAgPGRpdiBjbGFzcz1cImNob2ljZXMtd3JhcHBlclwiPiAgICA8JSBmb3IoIHZhciBpID0gY2hvaWNlcy5sZW5ndGggLSAxIDsgaSA+PSAwIDsgaS0tICkgeyAlPiAgICA8YnV0dG9uIG5nLXJlcGVhdD1cImNob2ljZSBpbiBjaG9pY2VzXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2hvaWNlXCIgbmctY2xpY2s9XCJzZWxlY3RDaG9pY2UoY2hvaWNlKVwiIG5nLWNsYXNzPVwieyBhY3RpdmU6IGNob2ljZSA9PT0gY3VycmVudENob2ljZSB9XCI+ICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj4gICAgICAgIDxkaXYgY2xhc3M9XCJudW0taW5zdGFsbWVudHNcIj4gICAgICAgICAgPHNwYW4+PCU9IGNob2ljZXNbaV0ubnVtX2luc3RhbG1lbnRzICU+PC9zcGFuPiZuYnNwOzxzcGFuPjwlPSBtb250aHMoY2hvaWNlc1tpXS5udW1faW5zdGFsbWVudHMpICU+PC9zcGFuPiAgICAgICAgPC9kaXY+ICAgICAgICA8ZGl2IGNsYXNzPVwiYW1vdW50XCI+ICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW1vdW50LWFtb3VudFwiPjwlPSBnZXRBbW91bnQoY2hvaWNlc1tpXS5hbW91bnQpICU+PC9zcGFuPjwhLS0gICAgICAgICAgLS0+PHNwYW4gY2xhc3M9XCJhbW91bnQtY3VycmVuY3lcIj7igqw8L3NwYW4+PCEtLSAgICAgICAgICAtLT48c3BhbiBjbGFzcz1cImFtb3VudC1wZXItbW9udGhcIj4vbWVzPC9zcGFuPjwvZGl2PiAgICAgIDwvZGl2PiAgICA8L2J1dHRvbj4gICAgPCUgfSAlPiAgPC9kaXY+ICA8c2VjdGlvbiBjbGFzcz1cInRhZVwiPlRBRSBtw6F4aW1vOiA8JT0gZ2V0QW1vdW50KGNob2ljZXNbMF0uYW5udWFsX2VxdWl2YWxlbnQpICU+JTwvc2VjdGlvbj4gIDxzZWN0aW9uIGNsYXNzPVwiaG93LWl0LXdvcmtzXCI+ICAgIDxoZWFkZXI+wr9Dw7NtbyBmdW5jaW9uYT88L2hlYWRlcj4gICAgPGRpdiBjbGFzcz1cImluZm8td3JhcHBlclwiPiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+ICAgICAgICA8aDM+RWxpZ2UgQXBsYXphbWU8L2gzPiAgICAgICAgPHA+ZW4gbGEgdGllbmRhLCBjdWFuZG8gdmF5YXMgYSBwYWdhciBlbCBwZWRpZG8uPC9wPiAgICAgIDwvZGl2PiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+ICAgICAgICA8aDM+RGVjaWRlIGPDs21vIHF1aWVyZXMgcGFnYXI8L2gzPiAgICAgICAgPHA+SGFzdGEgZW4gMTIgY3VvdGFzLCBwYWdhbmRvIGNvbiB0YXJqZXRhLjwvcD4gICAgICA8L2Rpdj4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPiAgICAgICAgPGgzPkRpc2ZydXRhIGRlIHR1IGNvbXByYTwvaDM+ICAgICAgICA8cD5EZXNkZSBBcGxhemFtZSBlc3RhcmVtb3MgZGlzcG9uaWJsZXMgcG9yIHNpIG5lY2VzaXRhcyBjdWFscXVpZXIgY29zYS4gwqFBIGRpc2ZydXRhciE8L3A+ICAgICAgPC9kaXY+ICAgIDwvZGl2PiAgPC9zZWN0aW9uPjwvZGl2PjxkaXYgY2xhc3M9XCJjdGFcIj4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBidXR0b24td3JhcHBlclwiPiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGxnIGJ0bi1ibG9jayB3aGl0ZVwiIHR5cGU9XCJidXR0b25cIiBkYXRhLW1vZGFsPVwiZGlzbWlzc1wiPlZvbHZlciBhIFRpZW5kYTwvYnV0dG9uPiAgPC9kaXY+ICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgYnV0dG9uLXdyYXBwZXJcIj4gICAgPGEgY2xhc3M9XCJidG4gbGcgYnRuLWJsb2NrXCIgaHJlZj1cImh0dHA6Ly9hcGxhemFtZS5jb20vaG93L1wiIHRhcmdldD1cIl9ibGFua1wiPsK/UXVpZXJlcyBzYWJlciBtw6FzPzwvYT4gIDwvZGl2PjwvZGl2Pic7IiwibW9kdWxlLmV4cG9ydHMgPSAnPGRpdiBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1pbnN0YWxtZW50c1wiPiAgPHNwYW4gY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtZnJvbVwiPmRlc2RlJm5ic3A7PC9zcGFuPjwhLS0gIC0tPjxzdHJvbmcgY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtYW1vdW50XCI+ICAgIDxzcGFuIGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LXByaWNlXCI+PCU9IGdldEFtb3VudChjaG9pY2UuYW1vdW50KSAlPjwvc3Bhbj48IS0tICAgIC0tPjxzcGFuIGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LWN1cnJlbmN5XCI+4oKsPC9zcGFuPiAgPC9zdHJvbmc+PCEtLSAgLS0+PHN1YiBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1wZXItbW9udGhcIj4vbWVzPC9zdWI+PCEtLSAgLS0+PHNwYW4gY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtaW5zdGFsbWVudHMtd3JhcHBlclwiPiAgICA8c3Bhbj4mbmJzcDtlbiZuYnNwOzwvc3Bhbj4gICAgPGVtIGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LWluc3RhbG1lbnRzLW51bVwiPjEyPC9lbT4gICAgPHNwYW4+Jm5ic3A7Y3VvdGFzPC9zcGFuPiAgPC9zcGFuPjwvZGl2PjxzdHlsZSByZWw9XCJzdHlsZXNoZWV0XCI+PCU9IG9wdGlvbnMud2lkZ2V0LnN0eWxlcyAlPjwvc3R5bGU+JzsiLCIvKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZ1xuICogQmV6aWVyRWFzaW5nIC0gdXNlIGJlemllciBjdXJ2ZSBmb3IgdHJhbnNpdGlvbiBlYXNpbmcgZnVuY3Rpb25cbiAqIGJ5IEdhw6t0YW4gUmVuYXVkZWF1IDIwMTQgLSAyMDE1IOKAkyBNSVQgTGljZW5zZVxuICovXG5cbi8vIFRoZXNlIHZhbHVlcyBhcmUgZXN0YWJsaXNoZWQgYnkgZW1waXJpY2lzbSB3aXRoIHRlc3RzICh0cmFkZW9mZjogcGVyZm9ybWFuY2UgVlMgcHJlY2lzaW9uKVxudmFyIE5FV1RPTl9JVEVSQVRJT05TID0gNDtcbnZhciBORVdUT05fTUlOX1NMT1BFID0gMC4wMDE7XG52YXIgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxO1xudmFyIFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TID0gMTA7XG5cbnZhciBrU3BsaW5lVGFibGVTaXplID0gMTE7XG52YXIga1NhbXBsZVN0ZXBTaXplID0gMS4wIC8gKGtTcGxpbmVUYWJsZVNpemUgLSAxLjApO1xuXG52YXIgZmxvYXQzMkFycmF5U3VwcG9ydGVkID0gdHlwZW9mIEZsb2F0MzJBcnJheSA9PT0gJ2Z1bmN0aW9uJztcblxuZnVuY3Rpb24gQSAoYUExLCBhQTIpIHsgcmV0dXJuIDEuMCAtIDMuMCAqIGFBMiArIDMuMCAqIGFBMTsgfVxuZnVuY3Rpb24gQiAoYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIGFBMiAtIDYuMCAqIGFBMTsgfVxuZnVuY3Rpb24gQyAoYUExKSAgICAgIHsgcmV0dXJuIDMuMCAqIGFBMTsgfVxuXG4vLyBSZXR1cm5zIHgodCkgZ2l2ZW4gdCwgeDEsIGFuZCB4Miwgb3IgeSh0KSBnaXZlbiB0LCB5MSwgYW5kIHkyLlxuZnVuY3Rpb24gY2FsY0JlemllciAoYVQsIGFBMSwgYUEyKSB7IHJldHVybiAoKEEoYUExLCBhQTIpICogYVQgKyBCKGFBMSwgYUEyKSkgKiBhVCArIEMoYUExKSkgKiBhVDsgfVxuXG4vLyBSZXR1cm5zIGR4L2R0IGdpdmVuIHQsIHgxLCBhbmQgeDIsIG9yIGR5L2R0IGdpdmVuIHQsIHkxLCBhbmQgeTIuXG5mdW5jdGlvbiBnZXRTbG9wZSAoYVQsIGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBBKGFBMSwgYUEyKSAqIGFUICogYVQgKyAyLjAgKiBCKGFBMSwgYUEyKSAqIGFUICsgQyhhQTEpOyB9XG5cbmZ1bmN0aW9uIGJpbmFyeVN1YmRpdmlkZSAoYVgsIGFBLCBhQiwgbVgxLCBtWDIpIHtcbiAgdmFyIGN1cnJlbnRYLCBjdXJyZW50VCwgaSA9IDA7XG4gIGRvIHtcbiAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICBhQiA9IGN1cnJlbnRUO1xuICAgIH0gZWxzZSB7XG4gICAgICBhQSA9IGN1cnJlbnRUO1xuICAgIH1cbiAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcbiAgcmV0dXJuIGN1cnJlbnRUO1xufVxuXG5mdW5jdGlvbiBuZXd0b25SYXBoc29uSXRlcmF0ZSAoYVgsIGFHdWVzc1QsIG1YMSwgbVgyKSB7XG4gZm9yICh2YXIgaSA9IDA7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICB2YXIgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgIHJldHVybiBhR3Vlc3NUO1xuICAgfVxuICAgdmFyIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gfVxuIHJldHVybiBhR3Vlc3NUO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJlemllciAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gIGlmICghKDAgPD0gbVgxICYmIG1YMSA8PSAxICYmIDAgPD0gbVgyICYmIG1YMiA8PSAxKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignYmV6aWVyIHggdmFsdWVzIG11c3QgYmUgaW4gWzAsIDFdIHJhbmdlJyk7XG4gIH1cblxuICAvLyBQcmVjb21wdXRlIHNhbXBsZXMgdGFibGVcbiAgdmFyIHNhbXBsZVZhbHVlcyA9IGZsb2F0MzJBcnJheVN1cHBvcnRlZCA/IG5ldyBGbG9hdDMyQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSkgOiBuZXcgQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSk7XG4gIGlmIChtWDEgIT09IG1ZMSB8fCBtWDIgIT09IG1ZMikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga1NwbGluZVRhYmxlU2l6ZTsgKytpKSB7XG4gICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRURm9yWCAoYVgpIHtcbiAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMDtcbiAgICB2YXIgY3VycmVudFNhbXBsZSA9IDE7XG4gICAgdmFyIGxhc3RTYW1wbGUgPSBrU3BsaW5lVGFibGVTaXplIC0gMTtcblxuICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9PSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICBpbnRlcnZhbFN0YXJ0ICs9IGtTYW1wbGVTdGVwU2l6ZTtcbiAgICB9XG4gICAgLS1jdXJyZW50U2FtcGxlO1xuXG4gICAgLy8gSW50ZXJwb2xhdGUgdG8gcHJvdmlkZSBhbiBpbml0aWFsIGd1ZXNzIGZvciB0XG4gICAgdmFyIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlICsgMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgIHZhciBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIGtTYW1wbGVTdGVwU2l6ZTtcblxuICAgIHZhciBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBCZXppZXJFYXNpbmcgKHgpIHtcbiAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgIHJldHVybiB4OyAvLyBsaW5lYXJcbiAgICB9XG4gICAgLy8gQmVjYXVzZSBKYXZhU2NyaXB0IG51bWJlciBhcmUgaW1wcmVjaXNlLCB3ZSBzaG91bGQgZ3VhcmFudGVlIHRoZSBleHRyZW1lcyBhcmUgcmlnaHQuXG4gICAgaWYgKHggPT09IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoeCA9PT0gMSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiBjYWxjQmV6aWVyKGdldFRGb3JYKHgpLCBtWTEsIG1ZMik7XG4gIH07XG59O1xuIiwiLypcbiAqIGNsYXNzTGlzdC5qczogQ3Jvc3MtYnJvd3NlciBmdWxsIGVsZW1lbnQuY2xhc3NMaXN0IGltcGxlbWVudGF0aW9uLlxuICogMS4xLjIwMTUwMzEyXG4gKlxuICogQnkgRWxpIEdyZXksIGh0dHA6Ly9lbGlncmV5LmNvbVxuICogTGljZW5zZTogRGVkaWNhdGVkIHRvIHRoZSBwdWJsaWMgZG9tYWluLlxuICogICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VsaWdyZXkvY2xhc3NMaXN0LmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiAqL1xuXG4vKmdsb2JhbCBzZWxmLCBkb2N1bWVudCwgRE9NRXhjZXB0aW9uICovXG5cbi8qISBAc291cmNlIGh0dHA6Ly9wdXJsLmVsaWdyZXkuY29tL2dpdGh1Yi9jbGFzc0xpc3QuanMvYmxvYi9tYXN0ZXIvY2xhc3NMaXN0LmpzICovXG5cbmlmIChcImRvY3VtZW50XCIgaW4gc2VsZikge1xuXG4vLyBGdWxsIHBvbHlmaWxsIGZvciBicm93c2VycyB3aXRoIG5vIGNsYXNzTGlzdCBzdXBwb3J0XG4vLyBJbmNsdWRpbmcgSUUgPCBFZGdlIG1pc3NpbmcgU1ZHRWxlbWVudC5jbGFzc0xpc3RcbmlmICghKFwiY2xhc3NMaXN0XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIikpIFxuXHR8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgJiYgIShcImNsYXNzTGlzdFwiIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJnXCIpKSkge1xuXG4oZnVuY3Rpb24gKHZpZXcpIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmlmICghKCdFbGVtZW50JyBpbiB2aWV3KSkgcmV0dXJuO1xuXG52YXJcblx0ICBjbGFzc0xpc3RQcm9wID0gXCJjbGFzc0xpc3RcIlxuXHQsIHByb3RvUHJvcCA9IFwicHJvdG90eXBlXCJcblx0LCBlbGVtQ3RyUHJvdG8gPSB2aWV3LkVsZW1lbnRbcHJvdG9Qcm9wXVxuXHQsIG9iakN0ciA9IE9iamVjdFxuXHQsIHN0clRyaW0gPSBTdHJpbmdbcHJvdG9Qcm9wXS50cmltIHx8IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKTtcblx0fVxuXHQsIGFyckluZGV4T2YgPSBBcnJheVtwcm90b1Byb3BdLmluZGV4T2YgfHwgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHR2YXJcblx0XHRcdCAgaSA9IDBcblx0XHRcdCwgbGVuID0gdGhpcy5sZW5ndGhcblx0XHQ7XG5cdFx0Zm9yICg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSB7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gLTE7XG5cdH1cblx0Ly8gVmVuZG9yczogcGxlYXNlIGFsbG93IGNvbnRlbnQgY29kZSB0byBpbnN0YW50aWF0ZSBET01FeGNlcHRpb25zXG5cdCwgRE9NRXggPSBmdW5jdGlvbiAodHlwZSwgbWVzc2FnZSkge1xuXHRcdHRoaXMubmFtZSA9IHR5cGU7XG5cdFx0dGhpcy5jb2RlID0gRE9NRXhjZXB0aW9uW3R5cGVdO1xuXHRcdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdH1cblx0LCBjaGVja1Rva2VuQW5kR2V0SW5kZXggPSBmdW5jdGlvbiAoY2xhc3NMaXN0LCB0b2tlbikge1xuXHRcdGlmICh0b2tlbiA9PT0gXCJcIikge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4KFxuXHRcdFx0XHQgIFwiU1lOVEFYX0VSUlwiXG5cdFx0XHRcdCwgXCJBbiBpbnZhbGlkIG9yIGlsbGVnYWwgc3RyaW5nIHdhcyBzcGVjaWZpZWRcIlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKC9cXHMvLnRlc3QodG9rZW4pKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXgoXG5cdFx0XHRcdCAgXCJJTlZBTElEX0NIQVJBQ1RFUl9FUlJcIlxuXHRcdFx0XHQsIFwiU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyXCJcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiBhcnJJbmRleE9mLmNhbGwoY2xhc3NMaXN0LCB0b2tlbik7XG5cdH1cblx0LCBDbGFzc0xpc3QgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdHZhclxuXHRcdFx0ICB0cmltbWVkQ2xhc3NlcyA9IHN0clRyaW0uY2FsbChlbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIpXG5cdFx0XHQsIGNsYXNzZXMgPSB0cmltbWVkQ2xhc3NlcyA/IHRyaW1tZWRDbGFzc2VzLnNwbGl0KC9cXHMrLykgOiBbXVxuXHRcdFx0LCBpID0gMFxuXHRcdFx0LCBsZW4gPSBjbGFzc2VzLmxlbmd0aFxuXHRcdDtcblx0XHRmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR0aGlzLnB1c2goY2xhc3Nlc1tpXSk7XG5cdFx0fVxuXHRcdHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdGhpcy50b1N0cmluZygpKTtcblx0XHR9O1xuXHR9XG5cdCwgY2xhc3NMaXN0UHJvdG8gPSBDbGFzc0xpc3RbcHJvdG9Qcm9wXSA9IFtdXG5cdCwgY2xhc3NMaXN0R2V0dGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuZXcgQ2xhc3NMaXN0KHRoaXMpO1xuXHR9XG47XG4vLyBNb3N0IERPTUV4Y2VwdGlvbiBpbXBsZW1lbnRhdGlvbnMgZG9uJ3QgYWxsb3cgY2FsbGluZyBET01FeGNlcHRpb24ncyB0b1N0cmluZygpXG4vLyBvbiBub24tRE9NRXhjZXB0aW9ucy4gRXJyb3IncyB0b1N0cmluZygpIGlzIHN1ZmZpY2llbnQgaGVyZS5cbkRPTUV4W3Byb3RvUHJvcF0gPSBFcnJvcltwcm90b1Byb3BdO1xuY2xhc3NMaXN0UHJvdG8uaXRlbSA9IGZ1bmN0aW9uIChpKSB7XG5cdHJldHVybiB0aGlzW2ldIHx8IG51bGw7XG59O1xuY2xhc3NMaXN0UHJvdG8uY29udGFpbnMgPSBmdW5jdGlvbiAodG9rZW4pIHtcblx0dG9rZW4gKz0gXCJcIjtcblx0cmV0dXJuIGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbikgIT09IC0xO1xufTtcbmNsYXNzTGlzdFByb3RvLmFkZCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyXG5cdFx0ICB0b2tlbnMgPSBhcmd1bWVudHNcblx0XHQsIGkgPSAwXG5cdFx0LCBsID0gdG9rZW5zLmxlbmd0aFxuXHRcdCwgdG9rZW5cblx0XHQsIHVwZGF0ZWQgPSBmYWxzZVxuXHQ7XG5cdGRvIHtcblx0XHR0b2tlbiA9IHRva2Vuc1tpXSArIFwiXCI7XG5cdFx0aWYgKGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbikgPT09IC0xKSB7XG5cdFx0XHR0aGlzLnB1c2godG9rZW4pO1xuXHRcdFx0dXBkYXRlZCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdHdoaWxlICgrK2kgPCBsKTtcblxuXHRpZiAodXBkYXRlZCkge1xuXHRcdHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpO1xuXHR9XG59O1xuY2xhc3NMaXN0UHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHR2YXJcblx0XHQgIHRva2VucyA9IGFyZ3VtZW50c1xuXHRcdCwgaSA9IDBcblx0XHQsIGwgPSB0b2tlbnMubGVuZ3RoXG5cdFx0LCB0b2tlblxuXHRcdCwgdXBkYXRlZCA9IGZhbHNlXG5cdFx0LCBpbmRleFxuXHQ7XG5cdGRvIHtcblx0XHR0b2tlbiA9IHRva2Vuc1tpXSArIFwiXCI7XG5cdFx0aW5kZXggPSBjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pO1xuXHRcdHdoaWxlIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHVwZGF0ZWQgPSB0cnVlO1xuXHRcdFx0aW5kZXggPSBjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pO1xuXHRcdH1cblx0fVxuXHR3aGlsZSAoKytpIDwgbCk7XG5cblx0aWYgKHVwZGF0ZWQpIHtcblx0XHR0aGlzLl91cGRhdGVDbGFzc05hbWUoKTtcblx0fVxufTtcbmNsYXNzTGlzdFByb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uICh0b2tlbiwgZm9yY2UpIHtcblx0dG9rZW4gKz0gXCJcIjtcblxuXHR2YXJcblx0XHQgIHJlc3VsdCA9IHRoaXMuY29udGFpbnModG9rZW4pXG5cdFx0LCBtZXRob2QgPSByZXN1bHQgP1xuXHRcdFx0Zm9yY2UgIT09IHRydWUgJiYgXCJyZW1vdmVcIlxuXHRcdDpcblx0XHRcdGZvcmNlICE9PSBmYWxzZSAmJiBcImFkZFwiXG5cdDtcblxuXHRpZiAobWV0aG9kKSB7XG5cdFx0dGhpc1ttZXRob2RdKHRva2VuKTtcblx0fVxuXG5cdGlmIChmb3JjZSA9PT0gdHJ1ZSB8fCBmb3JjZSA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gZm9yY2U7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuICFyZXN1bHQ7XG5cdH1cbn07XG5jbGFzc0xpc3RQcm90by50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuam9pbihcIiBcIik7XG59O1xuXG5pZiAob2JqQ3RyLmRlZmluZVByb3BlcnR5KSB7XG5cdHZhciBjbGFzc0xpc3RQcm9wRGVzYyA9IHtcblx0XHQgIGdldDogY2xhc3NMaXN0R2V0dGVyXG5cdFx0LCBlbnVtZXJhYmxlOiB0cnVlXG5cdFx0LCBjb25maWd1cmFibGU6IHRydWVcblx0fTtcblx0dHJ5IHtcblx0XHRvYmpDdHIuZGVmaW5lUHJvcGVydHkoZWxlbUN0clByb3RvLCBjbGFzc0xpc3RQcm9wLCBjbGFzc0xpc3RQcm9wRGVzYyk7XG5cdH0gY2F0Y2ggKGV4KSB7IC8vIElFIDggZG9lc24ndCBzdXBwb3J0IGVudW1lcmFibGU6dHJ1ZVxuXHRcdGlmIChleC5udW1iZXIgPT09IC0weDdGRjVFQzU0KSB7XG5cdFx0XHRjbGFzc0xpc3RQcm9wRGVzYy5lbnVtZXJhYmxlID0gZmFsc2U7XG5cdFx0XHRvYmpDdHIuZGVmaW5lUHJvcGVydHkoZWxlbUN0clByb3RvLCBjbGFzc0xpc3RQcm9wLCBjbGFzc0xpc3RQcm9wRGVzYyk7XG5cdFx0fVxuXHR9XG59IGVsc2UgaWYgKG9iakN0cltwcm90b1Byb3BdLl9fZGVmaW5lR2V0dGVyX18pIHtcblx0ZWxlbUN0clByb3RvLl9fZGVmaW5lR2V0dGVyX18oY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0R2V0dGVyKTtcbn1cblxufShzZWxmKSk7XG5cbn0gZWxzZSB7XG4vLyBUaGVyZSBpcyBmdWxsIG9yIHBhcnRpYWwgbmF0aXZlIGNsYXNzTGlzdCBzdXBwb3J0LCBzbyBqdXN0IGNoZWNrIGlmIHdlIG5lZWRcbi8vIHRvIG5vcm1hbGl6ZSB0aGUgYWRkL3JlbW92ZSBhbmQgdG9nZ2xlIEFQSXMuXG5cbihmdW5jdGlvbiAoKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdHZhciB0ZXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJfXCIpO1xuXG5cdHRlc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjMVwiLCBcImMyXCIpO1xuXG5cdC8vIFBvbHlmaWxsIGZvciBJRSAxMC8xMSBhbmQgRmlyZWZveCA8MjYsIHdoZXJlIGNsYXNzTGlzdC5hZGQgYW5kXG5cdC8vIGNsYXNzTGlzdC5yZW1vdmUgZXhpc3QgYnV0IHN1cHBvcnQgb25seSBvbmUgYXJndW1lbnQgYXQgYSB0aW1lLlxuXHRpZiAoIXRlc3RFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImMyXCIpKSB7XG5cdFx0dmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuXHRcdFx0dmFyIG9yaWdpbmFsID0gRE9NVG9rZW5MaXN0LnByb3RvdHlwZVttZXRob2RdO1xuXG5cdFx0XHRET01Ub2tlbkxpc3QucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih0b2tlbikge1xuXHRcdFx0XHR2YXIgaSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcblxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0XHR0b2tlbiA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdFx0XHRvcmlnaW5hbC5jYWxsKHRoaXMsIHRva2VuKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdGNyZWF0ZU1ldGhvZCgnYWRkJyk7XG5cdFx0Y3JlYXRlTWV0aG9kKCdyZW1vdmUnKTtcblx0fVxuXG5cdHRlc3RFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjM1wiLCBmYWxzZSk7XG5cblx0Ly8gUG9seWZpbGwgZm9yIElFIDEwIGFuZCBGaXJlZm94IDwyNCwgd2hlcmUgY2xhc3NMaXN0LnRvZ2dsZSBkb2VzIG5vdFxuXHQvLyBzdXBwb3J0IHRoZSBzZWNvbmQgYXJndW1lbnQuXG5cdGlmICh0ZXN0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjM1wiKSkge1xuXHRcdHZhciBfdG9nZ2xlID0gRE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGU7XG5cblx0XHRET01Ub2tlbkxpc3QucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKHRva2VuLCBmb3JjZSkge1xuXHRcdFx0aWYgKDEgaW4gYXJndW1lbnRzICYmICF0aGlzLmNvbnRhaW5zKHRva2VuKSA9PT0gIWZvcmNlKSB7XG5cdFx0XHRcdHJldHVybiBmb3JjZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBfdG9nZ2xlLmNhbGwodGhpcywgdG9rZW4pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0fVxuXG5cdHRlc3RFbGVtZW50ID0gbnVsbDtcbn0oKSk7XG5cbn1cblxufVxuXG4iLCIvKlxuICogZXZlbnRzLmpzIC0gU2luZ2xlIGxpYnJhcnkgdG8gaGFuZGxlIGdlbmVyaWMgZXZlbnRzXG5cbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBKZXPDunMgTWFudWVsIEdlcm1hZGUgQ2FzdGnDsWVpcmFzIDxqZXN1c0BnZXJtYWRlLmVzPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKlxuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXG4gIGlmICggdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSBpZiggcm9vdCApIHtcbiAgICBpZiggcm9vdC5kZWZpbmUgKSB7XG4gICAgICByb290LmRlZmluZSgnRXZlbnRzJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFjdG9yeSgpOyB9ICk7XG4gICAgfSBlbHNlIGlmKCByb290LmFuZ3VsYXIgKSB7XG4gICAgICByb290LmFuZ3VsYXIubW9kdWxlKCdldmVudHNXcmFwcGVyJywgW10pLmZhY3RvcnkoJ0V2ZW50cycsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhY3RvcnkodHJ1ZSk7IH0pO1xuICAgIH0gZWxzZSBpZiggIXJvb3QuRXZlbnRzICkge1xuICAgICAgcm9vdC5FdmVudHMgPSBmYWN0b3J5KCk7XG4gICAgfVxuICB9XG5cbn0pKHRoaXMsIGZ1bmN0aW9uIChuZykge1xuXHQndXNlIHN0cmljdCc7XG5cbiAgdmFyIG1ldGhvZHMgPSB7XG4gICAgc3RkOiB7IG9uOiAnb24nLCBvbmNlOiAnb25jZScsIG9mZjogJ29mZicsIHRyaWdnZXI6ICd0cmlnZ2VyJyB9LFxuICAgIHNhZmU6IHsgb246ICckJG9uJywgb25jZTogJyQkb25jZScsIG9mZjogJyQkb2ZmJywgdHJpZ2dlcjogJyQkdHJpZ2dlcicgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIEV2ZW50IChuYW1lLCBhcmdzLCBjYWxsZXIpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgdGhpcy4kJGFyZ3MgPSBbdGhpc10uY29uY2F0KGFyZ3MpO1xuICAgIHRoaXMuY2FsbGVyID0gY2FsbGVyO1xuICB9XG5cbiAgRXZlbnQucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0TWV0aG9kcyAobmdTYWZlKSB7XG4gICAgcmV0dXJuIG5nU2FmZSA/IG1ldGhvZHMuc2FmZSA6IG1ldGhvZHMuc3RkO1xuICB9XG5cblx0ZnVuY3Rpb24gX2FkZExpc3RlbmVyIChoYW5kbGVycywgaGFuZGxlciwgY29udGV4dCkge1xuICAgIGlmKCAhIGhhbmRsZXIgaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBoYW5kbGVycy5wdXNoKHsgaGFuZGxlcjogaGFuZGxlciwgY29udGV4dDogY29udGV4dCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90cmlnZ2VyRXZlbnQgKGUsIGhhbmRsZXJzKSB7XG4gICAgaWYoIGhhbmRsZXJzICkge1xuICAgICAgZm9yKCB2YXIgaSA9IDAsIGxlbiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgICBoYW5kbGVyc1tpXS5oYW5kbGVyLmFwcGx5KGUuY2FsbGVyLCBlLiQkYXJncyk7XG4gICAgICAgIGlmKCBlLmRlZmF1bHRQcmV2ZW50ZWQgKSB7XG4gICAgICAgICAgcmV0dXJuIGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbGVuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9lbXB0eUxpc3RlbmVyIChoYW5kbGVycykge1xuICAgIGlmKCBoYW5kbGVycyApIHtcbiAgICAgIGhhbmRsZXJzLnNwbGljZSgwLCBoYW5kbGVycy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZW1vdmVMaXN0ZW5lciAoaGFuZGxlcnMsIGhhbmRsZXIpIHtcbiAgICBpZiggaGFuZGxlcnMgKSB7XG4gICAgICBmb3IoIHZhciBpID0gMCwgbGVuID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgbGVuOyApIHtcbiAgICAgICAgaWYoIGhhbmRsZXJzW2ldLmhhbmRsZXIgPT09IGhhbmRsZXIgKSB7XG4gICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGxlbi0tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEV2ZW50cyAodGFyZ2V0LCBuZ1NhZmUpIHtcbiAgICB0YXJnZXQgPSB0YXJnZXQgfHwgdGhpcztcblxuICAgIHZhciBsaXN0ZW5lcnMgPSB7fSxcbiAgICAgICAgbGlzdGVuZXJzT25jZSA9IHt9LFxuICAgICAgICBtZXRob2QgPSBnZXRNZXRob2RzKG5nU2FmZSk7XG5cbiAgICBmdW5jdGlvbiBjaGVja0VhY2ggKF9tZXRob2QsIGV2ZW50TmFtZSwgYXJnMSwgYXJnMiwgYXJnMykge1xuICAgICAgaWYoIGV2ZW50TmFtZSBpbnN0YW5jZW9mIEFycmF5ICkge1xuICAgICAgICBldmVudE5hbWUuZm9yRWFjaChmdW5jdGlvbiAoX2V2ZW50TmFtZSkgeyB0YXJnZXRbX21ldGhvZF0oX2V2ZW50TmFtZSwgYXJnMSwgYXJnMiwgYXJnMyk7IH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmKCB0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdldmVudCBuYW1lIHNob3VsZCBiZSBhIHN0cmluZycpO1xuICAgICAgfVxuICAgICAgaWYoIC8gLy50ZXN0KGV2ZW50TmFtZSkgKSB7XG4gICAgICAgIHRhcmdldFtfbWV0aG9kXShldmVudE5hbWUuc3BsaXQoLyArLyksIGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0YXJnZXRbbWV0aG9kLm9uXSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICAgIGlmKCBjaGVja0VhY2gobWV0aG9kLm9uLCBldmVudE5hbWUsIGhhbmRsZXIsIGNvbnRleHQpICkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfVxuICAgICAgbGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBsaXN0ZW5lcnNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgIF9hZGRMaXN0ZW5lcihsaXN0ZW5lcnNbZXZlbnROYW1lXSwgaGFuZGxlciwgY29udGV4dCk7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICB0YXJnZXRbbWV0aG9kLm9uY2VdID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlciwgY29udGV4dCkge1xuICAgICAgaWYoIGNoZWNrRWFjaChtZXRob2Qub25jZSwgZXZlbnROYW1lLCBoYW5kbGVyLCBjb250ZXh0KSApIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICAgIGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXSA9IGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgIF9hZGRMaXN0ZW5lcihsaXN0ZW5lcnNPbmNlW2V2ZW50TmFtZV0sIGhhbmRsZXIsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuXG4gICAgdGFyZ2V0W21ldGhvZC50cmlnZ2VyXSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGF0dHJzLCBjYWxsZXIpIHtcbiAgICAgIGlmKCBjaGVja0VhY2gobWV0aG9kLnRyaWdnZXIsIGV2ZW50TmFtZSwgYXR0cnMsIGNhbGxlcikgKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgICB2YXIgZSA9IG5ldyBFdmVudChldmVudE5hbWUsIGF0dHJzLCBjYWxsZXIpO1xuXG4gICAgICBfdHJpZ2dlckV2ZW50KGUsIGxpc3RlbmVyc1tldmVudE5hbWVdKTtcblxuICAgICAgaWYoICFlLmRlZmF1bHRQcmV2ZW50ZWQgKSB7XG4gICAgICAgIHZhciBsZW4gPSBfdHJpZ2dlckV2ZW50KGUsIGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXSk7XG4gICAgICAgIGlmKCBsZW4gKSB7XG4gICAgICAgICAgbGlzdGVuZXJzT25jZVtldmVudE5hbWVdLnNwbGljZSgwLCBsZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICB0YXJnZXRbbWV0aG9kLm9mZl0gPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICBpZiggY2hlY2tFYWNoKG1ldGhvZC5vZmYsIGV2ZW50TmFtZSwgaGFuZGxlcikgKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgICBpZiggaGFuZGxlciA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICBfZW1wdHlMaXN0ZW5lcihsaXN0ZW5lcnNbZXZlbnROYW1lXSk7XG4gICAgICAgIF9lbXB0eUxpc3RlbmVyKGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXJzW2V2ZW50TmFtZV0sIGhhbmRsZXIpO1xuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXJzT25jZVtldmVudE5hbWVdLCBoYW5kbGVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBFdmVudHM7XG59KTtcbiIsIlxuLy8gZmFjdG9yeSBodHRwXG5cbnZhciAkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZScpLFxuICAgIF8gPSByZXF1aXJlKCduaXRyby10b29scy9leHRlbmQnKTtcblxuZnVuY3Rpb24gcmVzb2x2ZUZ1bmN0aW9ucyAobywgYXJncywgdGhpc0FyZykge1xuICBmb3IoIHZhciBrZXkgaW4gbyApIHtcbiAgICBpZiggb1trZXldIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgICBvW2tleV0gPSBvW2tleV0uYXBwbHkodGhpc0FyZywgYXJncyB8fCBbXSk7XG4gICAgfSBlbHNlIGlmKCB0eXBlb2Ygb1trZXldID09PSAnb2JqZWN0JyAmJiBvW2tleV0gIT09IG51bGwgKSB7XG4gICAgICBvW2tleV0gPSByZXNvbHZlRnVuY3Rpb25zKG9ba2V5XSwgYXJncywgdGhpc0FyZyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJUb1RpdGxlU2x1Zyh0ZXh0KSB7XG4gIC8vIGNvbnNvbGUubG9nKCdoZWFkZXJUb1RpdGxlU2x1ZycsIHRleHQpO1xuICB2YXIga2V5ID0gdGV4dC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBmdW5jdGlvbiAobWF0Y2gsIGxvd2VyLCB1cHBlcikge1xuICAgICAgcmV0dXJuIGxvd2VyICsgJy0nICsgdXBwZXI7XG4gIH0pO1xuICBrZXkgPSBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHIoMSk7XG5cbiAgcmV0dXJuIGtleTtcbn1cblxuZnVuY3Rpb24gaGVhZGVyVG9DYW1lbENhc2UodGV4dCkge1xuICB2YXIga2V5ID0gdGV4dFswXS50b0xvd2VyQ2FzZSgpICsgdGV4dC5zdWJzdHIoMSk7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvKFthLXpdKS0oW0EtWl0pL2csIGZ1bmN0aW9uIChtYXRjaCwgbG93ZXIsIHVwcGVyKSB7XG4gICAgcmV0dXJuIGxvd2VyICsgdXBwZXI7XG4gIH0pO1xufVxuXG52YXIgUkVfY29udGVudFR5cGUgPSAvKFteXFwvXSspXFwvKFteK10rXFwrKT8oLiopLztcbmZ1bmN0aW9uIHBhcnNlQ29udGVudFR5cGUoY29udGVudFR5cGUsIHRleHQsIHhtbCkge1xuICB2YXIgbWF0Y2hlcyA9IGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLm1hdGNoKFJFX2NvbnRlbnRUeXBlKTtcbiAgcmV0dXJuIG1hdGNoZXMgJiYgKCBtYXRjaGVzWzNdID09PSAnanNvbicgPyBKU09OLnBhcnNlKHRleHQpIDogKCBtYXRjaGVzWzNdID09PSAneG1sJyA/IHhtbCA6IHRleHQgKSApO1xufVxuXG5mdW5jdGlvbiBfZ2V0SGVhZGVycyAocmVxdWVzdCkge1xuICB2YXIgaGVhZGVycyA9IHt9O1xuICByZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnJlcGxhY2UoL1xccyooW15cXDpdKylcXHMqXFw6XFxzKihbXlxcO1xcbl0rKS9nLCBmdW5jdGlvbiAobWF0Y2gsIGtleSwgdmFsdWUpIHtcbiAgICAgIGhlYWRlcnNbaGVhZGVyVG9DYW1lbENhc2Uoa2V5KV0gPSB2YWx1ZS50cmltKCk7XG4gIH0pO1xuXG4gIHJldHVybiBoZWFkZXJzO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJzR2V0dGVyIChyZXF1ZXN0KSB7XG4gIHZhciBoZWFkZXJzQ2FjaGU7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYoICFoZWFkZXJzQ2FjaGUgKSB7XG4gICAgICBoZWFkZXJzQ2FjaGUgPSBfZ2V0SGVhZGVycyhyZXF1ZXN0KTtcbiAgICB9XG4gICAgcmV0dXJuIGhlYWRlcnNDYWNoZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplUGFyYW1zIChwYXJhbXMpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGZvciggdmFyIHBhcmFtIGluIHBhcmFtcyApIHtcbiAgICByZXN1bHQgKz0gKCByZXN1bHQgPyAnJicgOiAnJyApICsgcGFyYW0gKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW3BhcmFtXSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gYWRkSGVhZGVyc1RvUmVxdWVzdCAocmVxLCBoZWFkZXJzKSB7XG4gIGZvciggdmFyIGtleSBpbiBoZWFkZXJzICkge1xuICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCBoZWFkZXJUb1RpdGxlU2x1ZyhrZXkpLCBoZWFkZXJzW2tleV0gKTtcbiAgfVxufVxuXG52YXIgZGVmYXVsdFNldHRpbmdzID0ge307XG5cbmh0dHAuY29uZmlnID0gZnVuY3Rpb24gKHNldHRpbmdzKSB7XG4gIF8ubWVyZ2UoZGVmYXVsdFNldHRpbmdzLCBzZXR0aW5ncyk7XG4gIHJldHVybiBodHRwO1xufTtcblxuZnVuY3Rpb24gaHR0cCAodXJsLCBjb25maWcpIHtcblxuICBpZiggY29uZmlnID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgJiYgdXJsICE9PSBudWxsICkge1xuICAgIGNvbmZpZyA9IHVybDtcbiAgICB1cmwgPSBjb25maWcudXJsO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBjb25maWcudXJsID0gdXJsO1xuICB9XG5cbiAgY29uZmlnID0gXy5tZXJnZShfLmNvcHkoZGVmYXVsdFNldHRpbmdzKSxfLmNvcHkoY29uZmlnKSk7XG4gIGNvbmZpZyA9IHJlc29sdmVGdW5jdGlvbnMoIGNvbmZpZywgW2NvbmZpZ10sIG51bGwgKTtcbiAgY29uZmlnLm1ldGhvZCA9ICggY29uZmlnLm1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcblxuICBpZiggdHlwZW9mIGNvbmZpZy51cmwgIT09ICdzdHJpbmcnICkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXJsIHNob3VsZCBiZSBhIHN0cmluZycpO1xuICB9XG5cbiAgcmV0dXJuICRxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblxuICAgIHZhciByZXF1ZXN0ID0gbnVsbDtcblxuICAgIHRyeSB7IC8vIEZpcmVmb3gsIE9wZXJhIDguMCssIFNhZmFyaVxuICAgICAgICByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgfSBjYXRjaCAoZSkgeyAvLyBJbnRlcm5ldCBFeHBsb3JlclxuICAgICAgICB0cnkgeyByZXF1ZXN0ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7IH0gIC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgICAgICBjYXRjaCAoZXIpIHsgcmVxdWVzdCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpOyB9ICAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICB9XG4gICAgaWYoIHJlcXVlc3QgPT09IG51bGwgKSB7IHRocm93ICdCcm93c2VyIGRvZXMgbm90IHN1cHBvcnQgSFRUUCBSZXF1ZXN0JzsgfVxuXG4gICAgaWYoIGNvbmZpZy5wYXJhbXMgKSB7XG4gICAgICB1cmwgKz0gKCAvXFw/Ly50ZXN0KHVybCkgPyAnJicgOiAnPycgKSArIHNlcmlhbGl6ZVBhcmFtcyggY29uZmlnLnBhcmFtcyApO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3BlbiggY29uZmlnLm1ldGhvZCwgdXJsICk7XG5cbiAgICBpZiggY29uZmlnLndpdGhDcmVkZW50aWFscyApIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBhZGRIZWFkZXJzVG9SZXF1ZXN0KHJlcXVlc3QsIGNvbmZpZy5oZWFkZXJzIHx8IHt9ICk7XG5cbiAgICByZXF1ZXN0LmNvbmZpZyA9IGNvbmZpZztcbiAgICBjb25maWcuc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICAgIGlmKCByZXF1ZXN0LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgcmVxdWVzdC5yZWFkeVN0YXRlID09PSA0ICkge1xuICAgICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgZGF0YTogcGFyc2VDb250ZW50VHlwZShyZXF1ZXN0LmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKSwgcmVxdWVzdC5yZXNwb25zZVRleHQsIHJlcXVlc3QucmVzcG9uc2VYTUwpLFxuICAgICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVyc0dldHRlcihyZXF1ZXN0KSxcbiAgICAgICAgICB4aHI6IHJlcXVlc3RcbiAgICAgICAgfTtcbiAgICAgICAgaWYoIHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCApIHtcbiAgICAgICAgICByZXNvbHZlKCByZXNwb25zZSApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCggcmVzcG9uc2UgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiggY29uZmlnLmNvbnRlbnRUeXBlICkge1xuXG4gICAgICBpZiggY29uZmlnLmRhdGEgJiYgY29uZmlnLmNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vanNvbicgJiYgdHlwZW9mIGNvbmZpZy5kYXRhICE9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgY29uZmlnLmRhdGEgPSBKU09OLnN0cmluZ2lmeShjb25maWcuZGF0YSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYoIGNvbmZpZy5kYXRhIGluc3RhbmNlb2YgRm9ybURhdGEgKSB7XG4gICAgICBjb25maWcuY29udGVudFR5cGUgPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgfSBlbHNlIGlmKCB0eXBlb2YgY29uZmlnLmRhdGEgPT09ICdvYmplY3QnICYmIGNvbmZpZy5kYXRhICE9PSBudWxsICkge1xuICAgICAgY29uZmlnLmNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgaWYoIGNvbmZpZy5kYXRhICkge1xuICAgICAgICBjb25maWcuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZy5kYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggY29uZmlnLmNvbnRlbnRUeXBlICkge1xuICAgICAgLy8gYWRkSGVhZGVyc1RvUmVxdWVzdChyZXF1ZXN0LCB7IGNvbnRlbnRUeXBlOiBjb25maWcuY29udGVudFR5cGUgfSk7XG4gICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoICdDb250ZW50LVR5cGUnLCBjb25maWcuY29udGVudFR5cGUgKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0LnNlbmQoIGNvbmZpZy5kYXRhICk7XG5cbiAgfSk7XG59XG5cbmh0dHAuc2VyaWFsaXplID0gc2VyaWFsaXplUGFyYW1zO1xuXG5odHRwLm5vQ2FjaGUgPSBmdW5jdGlvbiAodXJsLCBjb25maWcpIHtcbiAgdXJsICs9ICggL1xcPy8udGVzdCh1cmwpID8gJyYnIDogJz8nICkgKyAndD0nICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIHJldHVybiBodHRwKHVybCwgY29uZmlnKTtcbn07XG5cbmh0dHAucGxhaW5SZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICByZXR1cm4ge1xuICAgIGNvbmZpZzogcmVzcG9uc2UuY29uZmlnLFxuICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXG4gICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgaGVhZGVyczogcmVzcG9uc2UuaGVhZGVycygpXG4gIH07XG59O1xuXG5bJ2dldCcsICdkZWxldGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgaHR0cFttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIGh0dHAodXJsLCBfLmV4dGVuZChfLmNvcHkoY29uZmlnIHx8IHt9KSwge1xuICAgICAgbWV0aG9kOiBtZXRob2RcbiAgICB9KSk7XG4gIH07XG59KTtcblxuWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICBodHRwW21ldGhvZF0gPSBmdW5jdGlvbiAodXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gaHR0cCh1cmwsIF8uZXh0ZW5kKF8uY29weShjb25maWcgfHwge30pLCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIGRhdGE6IGRhdGEgfHwge31cbiAgICB9KSk7XG4gIH07XG59KTtcblxuLy8gYmFzZVBhdGhcblxuZnVuY3Rpb24gYmFzZVBhdGggKGJwKSB7XG4gIGlmKCAvXFwvJC8udGVzdChicCkgKSB7XG4gICAgYnAgPSBicC5yZXBsYWNlKC9cXC8kLywnJyk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgaWYoICFwICkge1xuICAgICAgcmV0dXJuIGJwO1xuICAgIH1cbiAgICByZXR1cm4gYnAgKyAoIC9eXFwvLy50ZXN0KHApID8gJycgOiAnLycgKSArIHA7XG4gIH07XG59XG5cbmh0dHAuYmFzZSA9IGZ1bmN0aW9uICh1cmwsIGJhc2VDb25maWcpIHtcbiAgdmFyIGJwID0gYmFzZVBhdGgodXJsKSxcbiAgICAgIGJhc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYmFzZWQuZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuXG4gIGJhc2VDb25maWcgPSBiYXNlQ29uZmlnIHx8IHt9O1xuXG4gIFsnZ2V0JywgJ2RlbGV0ZSddLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIGJhc2VkW21ldGhvZF0gPSBmdW5jdGlvbiAocCwgX2NvbmZpZyApIHtcbiAgICAgIHJldHVybiBodHRwKCBicChwKSwgXy5tZXJnZShfLmNvcHkoYmFzZUNvbmZpZyksIF9jb25maWcsIHsgbWV0aG9kOiBtZXRob2QgfSkpO1xuICAgIH07XG4gIH0pO1xuXG4gIFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICBiYXNlZFttZXRob2RdID0gZnVuY3Rpb24gKHAsIGRhdGEsIF9jb25maWcgKSB7XG4gICAgICByZXR1cm4gaHR0cCggYnAocCksIF8ubWVyZ2UoXy5jb3B5KGJhc2VDb25maWcpLCBfY29uZmlnLCB7IG1ldGhvZDogbWV0aG9kLCBkYXRhOiBkYXRhIH0pICk7XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIGJhc2VkO1xufTtcblxuaHR0cC5yZXNwb25zZURhdGEgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGh0dHA7XG4iLCJcbnZhciBhcnJheVNoaWZ0ID0gW10uc2hpZnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0ZW5kICgpIHtcbiAgdmFyIGRlc3QgPSBhcnJheVNoaWZ0LmNhbGwoYXJndW1lbnRzKSxcbiAgICAgIHNyYyA9IGFycmF5U2hpZnQuY2FsbChhcmd1bWVudHMpLFxuICAgICAga2V5O1xuXG4gIHdoaWxlKCBzcmMgKSB7XG4gICAgZm9yKCBrZXkgaW4gc3JjKSB7XG4gICAgICBkZXN0W2tleV0gPSBzcmNba2V5XTtcbiAgICB9XG4gICAgc3JjID0gYXJyYXlTaGlmdC5jYWxsKGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVzdDtcbn07XG4iLCJcbnZhciBSRV8kJCA9IC9eXFwkXFwkLyxcbiAgICBhcnJheVNoaWZ0ID0gW10uc2hpZnQsXG4gICAgdHlwZSA9IHJlcXVpcmUoJy4vdHlwZScpO1xuXG5mdW5jdGlvbiBfbWVyZ2UgKCkge1xuICAgIHZhciBkZXN0ID0gYXJyYXlTaGlmdC5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgIHNyYyA9IGFycmF5U2hpZnQuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICBrZXk7XG5cbiAgICB3aGlsZSggc3JjICkge1xuXG4gICAgICBpZiggdHlwZW9mIGRlc3QgIT09IHR5cGVvZiBzcmMgKSB7XG4gICAgICAgICAgZGVzdCA9IHR5cGUuaXNBcnJheShzcmMpID8gW10gOiAoIHR5cGUuaXNPYmplY3Qoc3JjKSA/IHt9IDogc3JjICk7XG4gICAgICB9XG5cbiAgICAgIGlmKCB0eXBlLmlzT2JqZWN0KHNyYykgKSB7XG5cbiAgICAgICAgZm9yKCBrZXkgaW4gc3JjICkge1xuICAgICAgICAgIGlmKCBzcmNba2V5XSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgZGVzdFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gZWxzZSBpZiggdHlwZS5pc0FycmF5KGRlc3Rba2V5XSkgKSB7XG4gICAgICAgICAgICBbXS5wdXNoLmFwcGx5KGRlc3Rba2V5XSwgc3JjW2tleV0pO1xuICAgICAgICAgIH0gZWxzZSBpZiggdHlwZS5pc09iamVjdChkZXN0W2tleV0pICkge1xuICAgICAgICAgICAgZGVzdFtrZXldID0gX21lcmdlKGRlc3Rba2V5XSwgc3JjW2tleV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0W2tleV0gPSBzcmNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNyYyA9IGFycmF5U2hpZnQuY2FsbChhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBkZXN0O1xufVxuXG5mdW5jdGlvbiBtYXBPYmplY3QgKG8sIGl0ZXJhdGVlKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZm9yKCB2YXIga2V5IGluIG8gKSB7XG4gICAgcmVzdWx0W2tleV0gPSBpdGVyYXRlZShvW2tleV0sIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2NvcHkgKHNyYykge1xuICBpZiggdHlwZS5pc0FycmF5KHNyYykgKSB7XG4gICAgcmV0dXJuIHNyYy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfY29weShpdGVtKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgaWYoIHR5cGUuaXNPYmplY3Qoc3JjKSApIHtcbiAgICByZXR1cm4gbWFwT2JqZWN0KHNyYywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfY29weShpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzcmM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBleHRlbmQ6IHJlcXVpcmUoJy4vX2V4dGVuZCcpLFxuICBtZXJnZTogX21lcmdlLFxuICBjb3B5OiBfY29weVxufTtcbiIsIlxudmFyIHR5cGUgPSByZXF1aXJlKCcuL3R5cGUnKTtcblxuZnVuY3Rpb24gX2tleSAobywgX2tleSwgdmFsdWUpe1xuICAgIGlmKCAhdHlwZS5pc09iamVjdChvKSApIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG4gICAgdmFyIGtleXMgPSBfa2V5LnNwbGl0KCcuJyksXG4gICAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcblxuICAgIGlmKCB2YWx1ZSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgd2hpbGUgKGtleSkge1xuICAgICAgICBpZiggdHlwZS5pc09iamVjdChvKSAmJiBrZXkgaW4gbyApIHtcbiAgICAgICAgICBvID0gb1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIHdoaWxlIChrZXkpIHtcbiAgICAgICAgaWYoIG8gaW5zdGFuY2VvZiBPYmplY3QgKSB7XG4gICAgICAgICAgaWYgKCBrZXlzLmxlbmd0aCApe1xuICAgICAgICAgICAgaWYoICEoa2V5IGluIG8pICkge1xuICAgICAgICAgICAgICBvW2tleV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG8gPSBvW2tleV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGtleTogX2tleSxcbiAga2V5czogT2JqZWN0LmtleXNcbn07XG4iLCJcbnZhciB0eXBlID0gcmVxdWlyZSgnLi90eXBlJyksXG4gICAgYXJyU29tZSA9IEFycmF5LnByb3RvdHlwZS5zb21lLFxuICAgIGFyckV2ZXJ5ID0gQXJyYXkucHJvdG90eXBlLmV2ZXJ5LFxuICAgIGFyckZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCxcbiAgICBhcnJNYXAgPSBBcnJheS5wcm90b3R5cGUubWFwLFxuICAgIGFyckluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gX2VhY2hJbkxpc3QoIGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnICkge1xuICByZXR1cm4gYXJyRm9yRWFjaC5jYWxsKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcbn1cblxuZnVuY3Rpb24gX2VhY2hJbk9iamVjdCggbywgaXRlcmF0ZWUsIHRoaXNBcmcgKSB7XG4gIGZvciggdmFyIGtleSBpbiBvICkge1xuICAgIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgW29ba2V5XSwga2V5XSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX21hdGNoQWxsIChvLCBmaWx0ZXJzKSB7XG4gIGZvciggdmFyIGtleSBpbiBmaWx0ZXJzICkge1xuICAgIGlmKCBvW2tleV0gIT09IGZpbHRlcnNba2V5XSApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIF9tYXRjaEFueSAobywgZmlsdGVycykge1xuICBmb3IoIHZhciBrZXkgaW4gZmlsdGVycyApIHtcbiAgICBpZiggb1trZXldID09PSBmaWx0ZXJzW2tleV0gKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBfaXRlcmF0ZWVGbiAoaXRlcmF0ZWUpIHtcbiAgaWYoIHR5cGUuaXNGdW5jdGlvbihpdGVyYXRlZSkgKSB7XG4gICAgcmV0dXJuIGl0ZXJhdGVlO1xuICB9XG5cbiAgaWYoIHR5cGUuaXNPYmplY3QoaXRlcmF0ZWUpICkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIF9tYXRjaEFsbChpdGVtLCBpdGVyYXRlZSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBpdGVtID09PSBpdGVyYXRlZTtcbiAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZWFjaCAobywgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgaWYoIG8gJiYgby5sZW5ndGggKSB7XG4gICAgYXJyRm9yRWFjaC5jYWxsKG8sIGl0ZXJhdGVlLCB0aGlzQXJnKTtcbiAgfSBlbHNlIGlmKCB0eXBlLmlzT2JqZWN0KG8pICkge1xuICAgIF9lYWNoSW5PYmplY3QobywgaXRlcmF0ZWUsIHRoaXNBcmcgfHwgdGhpcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5kZXhPZiAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgaWYoICF0eXBlLmlzRnVuY3Rpb24oaXRlcmF0ZWUpICkge1xuICAgIHJldHVybiBhcnJJbmRleE9mLmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuICB9XG5cbiAgZm9yKCB2YXIgaSA9IDAsIG4gPSBsaXN0Lmxlbmd0aDsgaSA8IG4gOyBpKysgKSB7XG4gICAgaWYoIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtpXSwgaSkgKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBfaW5kZXhCeSAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgdmFyIG1hcCA9IHt9O1xuXG5cdGZvciggdmFyIGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIG1hcFtpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3RbaV0sIGkpXSA9IGxpc3RbaV07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuZnVuY3Rpb24gaW5kZXhCeSAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcblx0aWYoIHR5cGUuaXNTdHJpbmcoaXRlcmF0ZWUpICkge1xuXHRcdHJldHVybiBfaW5kZXhCeShsaXN0LCBmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbVtpdGVyYXRlZV07IH0sIHRoaXNBcmcpO1xuXHR9IGVsc2UgaWYoIHR5cGUuaXNGdW5jdGlvbihpdGVyYXRlZSkgKSB7XG5cdFx0cmV0dXJuIF9pbmRleEJ5KGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcblx0fVxuXHRyZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIHNvbWUgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIGl0ZXJhdGVlID0gX2l0ZXJhdGVlRm4oaXRlcmF0ZWUpO1xuXG4gIGlmKCBsaXN0ICYmIGxpc3QubGVuZ3RoICkge1xuICAgIHJldHVybiBhcnJTb21lLmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuICB9IGVsc2UgaWYoIHR5cGUuaXNPYmplY3QobGlzdCkgKSB7XG4gICAgZm9yKCB2YXIga2V5IGluIGxpc3QgKSAge1xuICAgICAgaWYoIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtrZXldLCBrZXkpICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5mdW5jdGlvbiBldmVyeSAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgaXRlcmF0ZWUgPSBfaXRlcmF0ZWVGbihpdGVyYXRlZSk7XG5cbiAgaWYoIGxpc3QgJiYgbGlzdC5sZW5ndGggKSB7XG4gICAgcmV0dXJuIGFyckV2ZXJ5LmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuICB9IGVsc2UgaWYoIHR5cGUuaXNPYmplY3QobGlzdCkgKSB7XG4gICAgZm9yKCB2YXIga2V5IGluIGxpc3QgKSAge1xuICAgICAgaWYoICFpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3Rba2V5XSwga2V5KSApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gbWFwIChsaXN0LCBfaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgdmFyIGl0ZXJhdGVlID0gdHlwZS5pc1N0cmluZyhfaXRlcmF0ZWUpID8gZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW1bX2l0ZXJhdGVlXTsgfSA6IF9pdGVyYXRlZTtcblxuICBpZiggbGlzdCAmJiBsaXN0Lmxlbmd0aCApIHtcbiAgICByZXR1cm4gYXJyTWFwLmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuICB9IGVsc2UgaWYoIHR5cGUuaXNPYmplY3QobGlzdCkgKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZvciggdmFyIGtleSBpbiBsaXN0ICkgIHtcbiAgICAgIHJlc3VsdFtrZXldID0gaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2tleV0sIGtleSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIG1hcDJMaXN0IChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICBpZiggbGlzdCAmJiBsaXN0Lmxlbmd0aCApIHtcbiAgICByZXR1cm4gYXJyTWFwLmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXSwgaSA9IDA7XG4gIGZvciggdmFyIGtleSBpbiBsaXN0ICkgIHtcbiAgICByZXN1bHRbaSsrXSA9IGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtrZXldLCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiByZW1vdmUgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gICAgdGhpc0FyZyA9IHRoaXNBcmcgPT09IHVuZGVmaW5lZCA/IHRoaXMgOiB0aGlzQXJnO1xuXG4gICAgaXRlcmF0ZWUgPSBfaXRlcmF0ZWVGbihpdGVyYXRlZSk7XG5cbiAgICBmb3IoIHZhciBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0aWYoIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtpXSkgKSB7XG5cdFx0XHRcdFx0XHRsaXN0LnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0fVxuXHRcdH1cbn1cblxuZnVuY3Rpb24gZmlyc3QgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG5cdFx0dGhpc0FyZyA9IHRoaXNBcmcgPT09IHVuZGVmaW5lZCA/IHRoaXMgOiB0aGlzQXJnO1xuXG5cdFx0aXRlcmF0ZWUgPSBfaXRlcmF0ZWVGbihpdGVyYXRlZSk7XG5cbiAgICB2YXIgaSA9IGFyckluZGV4T2YuY2FsbChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyk7XG5cblx0XHRmb3IoIHZhciBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGggOyBpIDwgbGVuIDsgaSsrICkge1xuICAgICAgICBpZiggaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2ldKSApIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0W2ldO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsYXN0IChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuXHRcdHRoaXNBcmcgPSB0aGlzQXJnID09PSB1bmRlZmluZWQgPyB0aGlzIDogdGhpc0FyZztcblxuXHRcdGl0ZXJhdGVlID0gX2l0ZXJhdGVlRm4oaXRlcmF0ZWUpO1xuXG5cdFx0Zm9yKCB2YXIgaSA9IGxpc3QubGVuZ3RoIC0gMSA7IGkgPj0gMCA7IGktLSApIHtcbiAgICAgICAgaWYoIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtpXSkgKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdFtpXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyIChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICAgIHZhciBuZXdMaXN0ID0gW107XG5cblx0XHR0aGlzQXJnID0gdGhpc0FyZyA9PT0gdW5kZWZpbmVkID8gdGhpcyA6IHRoaXNBcmc7XG5cdFx0aXRlcmF0ZWUgPSBfaXRlcmF0ZWVGbihpdGVyYXRlZSk7XG5cblx0XHRmb3IoIHZhciBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGggOyBpIDwgbGVuIDsgaSsrICkge1xuICAgICAgICBpZiggaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2ldKSApIHtcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaChsaXN0W2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdMaXN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgX21hdGNoQWxsOiBfbWF0Y2hBbGwsXG4gIF9tYXRjaEFueTogX21hdGNoQW55LFxuICBmaW5kOiBmaXJzdCxcbiAgZmlyc3Q6IGZpcnN0LFxuICBsYXN0OiBsYXN0LFxuICBmaWx0ZXI6IGZpbHRlcixcbiAgZWFjaDogZWFjaCxcbiAgc29tZTogc29tZSxcbiAgZXZlcnk6IGV2ZXJ5LFxuICBtYXA6IG1hcCxcbiAgcGx1Y2s6IG1hcCxcbiAgbWFwMkxpc3Q6IG1hcDJMaXN0LFxuICBpbmRleE9mOiBpbmRleE9mLFxuICBpbmRleEJ5OiBpbmRleEJ5LFxuICByZW1vdmU6IHJlbW92ZSxcbiAgaWY6IGZ1bmN0aW9uIChyZXN1bHQsIGZuKSB7XG4gICAgaWYoIHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIGZuIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgICByZXR1cm4gZm4ocmVzdWx0KTtcbiAgICB9XG4gIH1cbn07XG4iLCJcbnZhciBSRV9kb3RzQmFjayA9IC9bXlxcL10rXFwvXFwuXFwuXFwvL2csXG5cdGNsZWFyU3RyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJyc7IH07XG5cbmZ1bmN0aW9uIF9qb2luUGF0aCAoKSB7XG4gICAgdmFyIHBhdGggPSAoYXJndW1lbnRzWzBdIHx8ICcnKS5yZXBsYWNlKC9cXC8kLywgJycpLFxuICAgIFx0YmFja0RvdHM7XG5cbiAgICBmb3IoIHZhciBpID0gMSwgbGFzdCA9IGFyZ3VtZW50cy5sZW5ndGggLSAxIDsgaSA8IGxhc3QgOyBpKysgKSB7XG4gICAgICAgIHBhdGggKz0gJy8nICsgYXJndW1lbnRzW2ldLnJlcGxhY2UoL15cXC98XFwvJC9nLCAnJyk7XG4gICAgfVxuICAgIGlmKCBsYXN0ICkge1xuICAgICAgICBwYXRoICs9IGFyZ3VtZW50c1tsYXN0XSA/ICggJy8nICsgYXJndW1lbnRzW2xhc3RdLnJlcGxhY2UoL15cXC8vLCAnJykgKSA6ICcnO1xuICAgIH1cblxuICAgIHdoaWxlKCBSRV9kb3RzQmFjay50ZXN0KHBhdGgpICkge1xuICAgIFx0cGF0aCA9IHBhdGgucmVwbGFjZShSRV9kb3RzQmFjaywgY2xlYXJTdHIpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgam9pblBhdGg6IF9qb2luUGF0aFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2lzVHlwZSAodHlwZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBvID09PSB0eXBlKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBfaW5zdGFuY2VPZiAoX2NvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiAoIG8gaW5zdGFuY2VvZiBfY29uc3RydWN0b3IgKTtcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNUeXBlOiBmdW5jdGlvbiAodHlwZSwgdmFsdWUpIHtcbiAgICBpZiggdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgIHJldHVybiBfaXNUeXBlKHR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gX2lzVHlwZSh0eXBlKSh2YWx1ZSk7XG4gIH0sXG4gIGluc3RhbmNlT2Y6IGZ1bmN0aW9uIChQcm90bywgdmFsdWUpIHtcbiAgICBpZiggdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgIHJldHVybiBfaW5zdGFuY2VPZihQcm90byk7XG4gICAgfVxuICAgIHJldHVybiBfaW5zdGFuY2VPZihQcm90bykodmFsdWUpO1xuICB9LFxuICBpc09iamVjdDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGw7XG4gIH0sXG5cdGlzRnVuY3Rpb246IF9pc1R5cGUoJ2Z1bmN0aW9uJyksXG5cdGlzU3RyaW5nOiBfaXNUeXBlKCdzdHJpbmcnKSxcblx0aXNOdW1iZXI6IF9pc1R5cGUoJ251bWJlcicpLFxuXHRpc0FycmF5OiBBcnJheS5pc0FycmF5IHx8IF9pbnN0YW5jZU9mKEFycmF5KSxcblx0aXNEYXRlOiBfaW5zdGFuY2VPZihEYXRlKSxcblx0aXNSZWdFeHA6IF9pbnN0YW5jZU9mKFJlZ0V4cCksXG5cdGlzRWxlbWVudDogZnVuY3Rpb24obykge1xuICAgIHJldHVybiBvICYmIG8ubm9kZVR5cGUgPT09IDE7XG4gIH0sXG4gIGlzVW5kZWZpbmVkOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZDtcbiAgfVxufTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocVByb21pc2UpIHtcblxuXHRmdW5jdGlvbiBlYWNoIChpdGVyYWJsZSwgaGFuZGxlcikge1xuXHRcdGZvciggdmFyIGkgPSAwLCBuID0gaXRlcmFibGUubGVuZ3RoOyBpIDwgbiA7IGkrKyApIHtcblx0XHRcdGhhbmRsZXIoaXRlcmFibGVbaV0sIGkpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHFSZXNvbHZlIChyZXN1bHQpIHtcblx0ICByZXR1cm4gcVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyByZXNvbHZlKHJlc3VsdCk7IH0pO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIHFSZWplY3QgKHJlYXNvbikge1xuXHQgIHJldHVybiBxUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHJlamVjdChyZWFzb24pOyB9KTtcblx0fTtcblxuXHR2YXIgbWV0aG9kcyA9IHtcblx0XHRyZXNvbHZlOiBxUmVzb2x2ZSxcblx0XHRyZWplY3Q6IHFSZWplY3QsXG5cdFx0ZGVmZXI6IGZ1bmN0aW9uICgpIHtcblx0XHQgIHZhciBkZWZlcnJlZCA9IHt9O1xuXHRcdCAgZGVmZXJyZWQucHJvbWlzZSA9IHFQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHQgICAgZGVmZXJyZWQucmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0ICAgIGRlZmVycmVkLnJlamVjdCA9IHJlamVjdDtcblx0XHQgIH0pO1xuXHRcdCAgcmV0dXJuIGRlZmVycmVkO1xuXHRcdH0sXG5cdFx0YWxsOiBmdW5jdGlvbiAoaXRlcmFibGUpIHtcblx0XHQgIHJldHVybiBxUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0ICAgIHZhciBwZW5kaW5nID0gaXRlcmFibGUubGVuZ3RoLFxuXHRcdCAgICAgICAgcmVzdWx0cyA9IFtdO1xuXHRcdCAgICBlYWNoKGl0ZXJhYmxlLCBmdW5jdGlvbiAoX3Byb21pc2UsIGkpIHtcblxuXHRcdCAgICAgICggX3Byb21pc2UudGhlbiA/IF9wcm9taXNlIDogcVJlc29sdmUoX3Byb21pc2UpICkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0ICAgICAgICByZXN1bHRzW2ldID0gcmVzdWx0O1xuXHRcdCAgICAgICAgaWYoIC0tcGVuZGluZyA9PT0gMCApIHtcblx0XHQgICAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG5cdFx0ICAgICAgICBpZiggcGVuZGluZyAhPT0gLTEgKSB7XG5cdFx0ICAgICAgICAgIHBlbmRpbmcgPT09IC0xO1xuXHRcdCAgICAgICAgICByZWplY3QocmVhc29uKTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICB9KTtcblx0XHQgICAgfSk7XG5cdFx0ICB9KTtcblx0XHR9LFxuXHRcdHJhY2U6IGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuXHRcdCAgcmV0dXJuIHFQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHQgICAgdmFyIGRvbmUgPSBmYWxzZTtcblxuXHRcdCAgICBlYWNoKGl0ZXJhYmxlLCBmdW5jdGlvbiAoX3Byb21pc2UsIGkpIHtcblx0XHQgICAgICBpZiggZG9uZSApIHtcblx0XHQgICAgICAgIHJldHVybjtcblx0XHQgICAgICB9XG5cdFx0ICAgICAgKCBfcHJvbWlzZS50aGVuID8gX3Byb21pc2UgOiBxUmVzb2x2ZShfcHJvbWlzZSkgKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHQgICAgICAgIGlmKCAhZG9uZSApIHtcblx0XHQgICAgICAgICAgZG9uZSA9IHRydWU7XG5cdFx0ICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG5cdFx0ICAgICAgICBpZiggIWRvbmUgKSB7XG5cdFx0ICAgICAgICAgIGRvbmUgPSB0cnVlO1xuXHRcdCAgICAgICAgICByZWplY3QocmVhc29uKTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICB9KTtcblx0XHQgICAgfSk7XG5cdFx0ICB9KTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChxLCBvdmVycmlkZSkge1xuXHRcdGZvciggdmFyIGtleSBpbiBtZXRob2RzICkge1xuXHRcdFx0aWYoICFxW2tleV0gfHwgb3ZlcnJpZGUgKSB7XG5cdFx0XHRcdHFba2V5XSA9IG1ldGhvZHNba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHE7XG5cdH07XG59O1xuIiwiXG5mdW5jdGlvbiBzdGVwUmVzdWx0IChzdGVwLCB2YWx1ZSwgdHlwZSkge1xuICBpZiggdmFsdWUgJiYgdmFsdWUudGhlbiApIHtcbiAgICB2YWx1ZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHN0ZXAuZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHN0ZXAuZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc3RlcC5kZWZlcnJlZFt0eXBlXSh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1F1ZXVlKHByb21pc2UpIHtcbiAgaWYoIHByb21pc2UuJCRzdWNjZWVkZWQgPT09IHVuZGVmaW5lZCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbGVuID0gcHJvbWlzZS4kJHF1ZXVlLmxlbmd0aCxcbiAgICAgIHN0ZXAgPSBwcm9taXNlLiQkcXVldWUuc2hpZnQoKSxcbiAgICAgIHR5cGUgPSBwcm9taXNlLiQkc3VjY2VlZGVkID8gJ3Jlc29sdmUnIDogJ3JlamVjdCcsXG4gICAgICB1bmNvdWdoID0gIXByb21pc2UuJCRzdWNjZWVkZWQgJiYgcHJvbWlzZS4kJHVuY291Z2h0Kys7XG5cbiAgd2hpbGUoIHN0ZXAgKSB7XG5cbiAgICBpZiggc3RlcFt0eXBlXSApIHtcbiAgICAgIHVuY291Z2ggPSBmYWxzZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc3RlcFJlc3VsdChzdGVwLCBzdGVwW3R5cGVdKHByb21pc2UuJCR2YWx1ZSksICdyZXNvbHZlJyk7XG4gICAgICB9IGNhdGNoIChyZWFzb24pIHtcbiAgICAgICAgc3RlcFJlc3VsdChzdGVwLCByZWFzb24sICdyZWplY3QnKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBzdGVwUmVzdWx0KHN0ZXAsIHByb21pc2UuJCR2YWx1ZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgc3RlcCA9IHByb21pc2UuJCRxdWV1ZS5zaGlmdCgpO1xuICB9XG5cbiAgaWYoICFwcm9taXNlLiQkc3VjY2VlZGVkICYmIHVuY291Z2ggKSB7XG4gICAgaWYoIHByb21pc2UuJCR1bmNvdWdoID09PSB1bmNvdWdoICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNhdWdodCAoaW4gcHJvbWlzZSknKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gUCAoZXhlY3V0b3IpIHtcbiAgaWYoICEoIGV4ZWN1dG9yIGluc3RhbmNlb2YgRnVuY3Rpb24gKSApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlIHJlc29sdmVyIHVuZGVmaW5lZCBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgdmFyIHAgPSB0aGlzO1xuICB0aGlzLiQkcXVldWUgPSBbXTtcbiAgdGhpcy4kJHVuY291Z2ggPSAwO1xuXG4gIHRyeSB7XG4gICAgZXhlY3V0b3IoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgcC4kJHN1Y2NlZWRlZCA9IHRydWU7XG4gICAgICBwLiQkdmFsdWUgPSByZXN1bHQ7XG4gICAgICBwcm9jZXNzUXVldWUocCk7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgcC4kJHN1Y2NlZWRlZCA9IGZhbHNlO1xuICAgICAgcC4kJHZhbHVlID0gcmVhc29uO1xuICAgICAgcHJvY2Vzc1F1ZXVlKHApO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBwLiQkc3VjY2VlZGVkID0gZmFsc2U7XG4gICAgcC4kJHZhbHVlID0gZXJyO1xuICAgIHByb2Nlc3NRdWV1ZShwKTtcbiAgfVxufVxuXG5QLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uc3VjY2VlZGVkLCBvblJlamVjdGVkKSB7XG4gIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICBfcHJvbWlzZSA9IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgX3RoaXMuJCRxdWV1ZS5wdXNoKHsgcmVzb2x2ZTogb25zdWNjZWVkZWQsIHJlamVjdDogb25SZWplY3RlZCwgZGVmZXJyZWQ6IHsgcmVzb2x2ZTogcmVzb2x2ZSwgcmVqZWN0OiByZWplY3QgfSB9KTtcbiAgICAgIH0pO1xuXG4gIHByb2Nlc3NRdWV1ZSh0aGlzKTtcblxuICByZXR1cm4gX3Byb21pc2U7XG59O1xuXG5QLnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbn07XG5cbnJlcXVpcmUoJy4vcHJvbWlzZS1tZXRob2RzJykoZnVuY3Rpb24gKGV4ZWN1dG9yKSB7IHJldHVybiBuZXcgUChleGVjdXRvcik7IH0pKFAsIHRydWUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFA7XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9xaXplcicpKCBnbG9iYWwuUHJvbWlzZSA/IHJlcXVpcmUoJy4vcHJvbWlzZS1tZXRob2RzJykoZnVuY3Rpb24gKGV4ZWN1dG9yKSB7IHJldHVybiBuZXcgZ2xvYmFsLlByb21pc2UoZXhlY3V0b3IpOyB9KShnbG9iYWwuUHJvbWlzZSkgOiByZXF1aXJlKCcuL3Byb21pc2UtcG9seWZpbGwnKSApO1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChQcm9taXNlKSB7XG5cbiAgZnVuY3Rpb24gcSAoZXhlY3V0b3IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpO1xuICB9XG5cbiAgcmVxdWlyZSgnLi9wcm9taXNlLW1ldGhvZHMnKShxKShxLCB0cnVlKTtcblxuICBxLndoZW4gPSBmdW5jdGlvbiAocCkgeyByZXR1cm4gKCBwICYmIHAudGhlbiApID8gcCA6IFByb21pc2UucmVzb2x2ZShwKTsgfTtcbiAgcS51c2VQb2x5ZmlsbCA9IGZ1bmN0aW9uICgpIHtcbiAgXHRQcm9taXNlID0gcmVxdWlyZSgnLi9wcm9taXNlLXBvbHlmaWxsJyk7XG4gIH07XG5cbiAgcmV0dXJuIHE7XG5cbn07XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvcWl6ZXInKSggcmVxdWlyZSgnLi9saWIvcHJvbWlzZS1wb2x5ZmlsbCcpICk7XG4iLCJcbi8vIHJlcXVpcmUoJy4vYnJvd3Nlci1wb2x5ZmlsbHMvY3VycmVudC1zY3JpcHQnKTtcbnJlcXVpcmUoJy4vYnJvd3Nlci1wb2x5ZmlsbHMvZGF0ZScpO1xucmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscy9kb20tY2xvc2VzdCcpO1xucmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscy9ldmVudC1saXN0ZW5lcicpO1xucmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscy9tYXRjaC1tZWRpYScpO1xucmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscy9tYXRjaGVzLXNlbGVjdG9yJyk7XG4iLCJcbmlmICghRGF0ZS5ub3cpIHtcbiAgRGF0ZS5ub3cgPSBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9O1xufSIsIlxuaWYoICFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ICkge1xuICBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdmFyIGVsID0gdGhpcztcblxuICAgIHdoaWxlKCBlbCApIHtcbiAgICAgIGlmKCBlbC5tYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpICkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIGVsO1xuICB9O1xufSIsIlxuaWYoICFFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyICkge1xuICBpZiggRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoRXZlbnQgKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoRXZlbnQoICdvbicgKyBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gICAgfTtcbiAgICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5kZXRhY2hFdmVudCggJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRocm93ICdCcm93c2VyIG5vdCBjb21wYXRpYmxlIHdpdGggZWxlbWVudCBldmVudHMnO1xuICB9XG59IiwiKGZ1bmN0aW9uIChyb290KSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICByb290Lm1hdGNoTWVkaWEgPSByb290Lm1hdGNoTWVkaWEgfHwgcm9vdC53ZWJraXRNYXRjaE1lZGlhIHx8IHJvb3QubW96TWF0Y2hNZWRpYSB8fCByb290Lm1zTWF0Y2hNZWRpYTtcbn0pKHRoaXMpOyIsIlxuaWYoICFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3IgKSB7XG4gIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNTZWxlY3RvciA9IChcbiAgICBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3JcbiAgKTtcbn1cblxuIiwiXG5yZXF1aXJlKCcuL2Jyb3dzZXItcG9seWZpbGxzJyk7XG4vLyBkb2N1bWVudC5jdXJyZW50U2NyaXB0XG4vLyBEYXRlLm5vdygpXG4vLyBIVE1MRWxlbWVudC5jbG9zZXN0KClcbi8vIEhUTUxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXJcbi8vIEhUTUxFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXJcbi8vIHdpbmRvdy5tYXRjaE1lZGlhXG4vLyBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3JcblxucmVxdWlyZSgnY2xhc3NsaXN0LmpzJyk7IC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VzL2RvY3MvV2ViL0FQSS9FbGVtZW50L2NsYXNzTGlzdFxuXG52YXIgZXh0ZW5kID0gcmVxdWlyZSgnbml0cm8tdG9vbHMvZXh0ZW5kJyk7XG5cbmZ1bmN0aW9uIF8gKHNlbGVjdG9yLCBzb3VyY2UpIHtcbiAgcmV0dXJuIHNvdXJjZSAmJiB0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJyA/XG5cdFx0c2VsZWN0b3IucXVlcnlTZWxlY3Rvcihzb3VyY2UpIDpcblx0XHQoc291cmNlIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuXy5ub29wID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcbl8ucSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKTtcblxuZXh0ZW5kLmV4dGVuZChfLCBleHRlbmQpO1xuXG5fLmV4dGVuZChfLFxuICByZXF1aXJlKCduaXRyby10b29scy90eXBlJyksXG5cdHJlcXVpcmUoJ25pdHJvLXRvb2xzL2tleScpLFxuXHRyZXF1aXJlKCduaXRyby10b29scy9wYXRoJylcbik7XG5cbl8uZXh0ZW5kKF8sIHtcblx0YW5pbWF0ZTogcmVxdWlyZSgnLi9kZWZlcnJlZC9hbmltYXRlJyksXG5cdHdhaXQ6IHJlcXVpcmUoJy4vZGVmZXJyZWQvd2FpdCcpXG59KTtcblxuXy5leHRlbmQoXywge1xuXHRyZWFkeTogcmVxdWlyZSgnLi9mbi9yZWFkeScpLFxuXHR0ZW1wbGF0ZTogcmVxdWlyZSgnLi9mbi90ZW1wbGF0ZScpLFxuXHRkZWJvdW5jZTogcmVxdWlyZSgnLi9mbi9kZWJvdW5jZScpXG59KTtcblxuXy5leHRlbmQoXyxcbiAgcmVxdWlyZSgnLi91dGlscy9ldmVudHMnKSxcblx0Ly8gXy5vbihlbCwgZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKVxuXHQvLyBfLm9mZihlbCwgZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKVxuXHQvLyBfLnRyaWdnZXJFdmVudChlbGVtZW50LCBldmVudE5hbWUsIGRhdGEpXG5cbiAgcmVxdWlyZSgnLi91dGlscy9kb20nKVxuICAvLyBfLmNyZWF0ZSh0YWdOYW1lLCBhdHRycylcblx0Ly8gXy5hdHRyKGVsLCBuYW1lLCB2YWx1ZSlcbiAgLy8gXy50bXBDbGFzcyhlbCwgY2xhc3NOYW1lLCBkdXJhdGlvbiwgY2IpXG4pO1xuXG5fLmV4dGVuZChfLCB7XG5cdG5vcm1hbGl6ZTogcmVxdWlyZSgnLi91dGlscy9ub3JtYWxpemUnKSxcblx0Ly8gXy50b3VjaERldmljZSA9PT0gdHJ1ZSB8IGZhbHNlXG5cdC8vIF8uaXNNYWMgPT09IHRydWUgfCBmYWxzZVxuXHQvLyBfLmlzQW5kcm9pZCA9PT0gdHJ1ZSB8IGZhbHNlXG5cblx0c2Nyb2xsOiByZXF1aXJlKCcuL3V0aWxzL3Njcm9sbC9idW5kbGUnKSAvLyBzY3JvbGwgaXMgbm90IGF2YWlsYWJsZSB1bnRpbCBkb2N1bWVudCBpcyByZWFkeVxuXHQvLyBfLnNjcm9sbC5vbiggaGFuZGxlciwgdXNlQ2FwdHVyZSApXG5cdC8vIF8uc2Nyb2xsLm9mZiggaGFuZGxlciwgdXNlQ2FwdHVyZSApXG5cdC8vIF8uc2Nyb2xsLnRvcCgpXG5cdC8vIF8uc2Nyb2xsLmdvdG8odmFsdWUpXG5cdC8vIF8uc2Nyb2xsLmFuaW1hdGVUbyh2YWx1ZSB8IEhUTUxFbGVtZW50LCBjYWxsYmFjaywgZHVyYXRpb24pOiBQcm9taXNlXG5cdC8vIF8sc2Nyb2xsLmluQW5pbWF0aW9uID09PSB0cnVlIHwgZmFsc2Vcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IF87XG4iLCJcbnZhciAkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKSxcbiAgICB0aW1pbmdGdW5jdGlvbnMgPSB7fSxcbiAgICBub29wID0gZnVuY3Rpb24gKCkge30sXG4gICAgZ2V0VGltaW5nRnVuY3Rpb24gPSBmdW5jdGlvbiAodGltaW5nRnVuY3Rpb25OYW1lKSB7XG4gICAgICBpZiggIXRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdICkge1xuICAgICAgICBpZiggdGltaW5nRnVuY3Rpb25OYW1lID09PSAnbGluZWFyJyApIHtcbiAgICAgICAgICB0aW1pbmdGdW5jdGlvbnNbdGltaW5nRnVuY3Rpb25OYW1lXSA9IGZ1bmN0aW9uICggdmFsdWUgKSB7IHJldHVybiB2YWx1ZTsgfTtcbiAgICAgICAgfSBlbHNlIGlmKCB0aW1pbmdGdW5jdGlvbk5hbWUgPT09ICdlYXNlJyApIHtcbiAgICAgICAgICB0aW1pbmdGdW5jdGlvbnNbdGltaW5nRnVuY3Rpb25OYW1lXSA9IHJlcXVpcmUoJ2Jlemllci1lYXNpbmcnKSguMTcsLjY3LC44MywuNjcpO1xuICAgICAgICB9IGVsc2UgaWYoIHRpbWluZ0Z1bmN0aW9uTmFtZSA9PT0gJ2Vhc2UtaW4nICkge1xuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdID0gcmVxdWlyZSgnYmV6aWVyLWVhc2luZycpKC40MiwwLDEsMSk7XG4gICAgICAgIH0gZWxzZSBpZiggdGltaW5nRnVuY3Rpb25OYW1lID09PSAnZWFzZS1vdXQnICkge1xuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdID0gcmVxdWlyZSgnYmV6aWVyLWVhc2luZycpKDAsMCwuNTgsMSk7XG4gICAgICAgIH0gZWxzZSBpZiggdGltaW5nRnVuY3Rpb25OYW1lID09PSAnZWFzZS1pbi1vdXQnICkge1xuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdID0gcmVxdWlyZSgnYmV6aWVyLWVhc2luZycpKC40MiwwLC41OCwxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdO1xuICAgIH07XG5cbmZ1bmN0aW9uIGFuaW1hdGUgKHByb2dyZXNzRm4sIGR1cmF0aW9uLCBhdEVuZCwgdGltaW5nRnVuY3Rpb25OYW1lKSB7XG4gIGlmICggZHVyYXRpb24gaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICBpZiAoIHR5cGVvZiBhdEVuZCA9PT0gJ251bWJlcicgKSB7XG4gICAgICBhdXggPSBkdXJhdGlvbjtcbiAgICAgIGR1cmF0aW9uID0gYXRFbmQ7XG4gICAgICBhdEVuZCA9IGF1eDtcbiAgICB9IGVsc2Uge1xuICAgICAgYXRFbmQgPSBkdXJhdGlvbjtcbiAgICAgIGR1cmF0aW9uID0gNDAwO1xuICAgIH1cbiAgfSBlbHNlIGlmICggZHVyYXRpb24gPT09IHVuZGVmaW5lZCApIHtcbiAgICBkdXJhdGlvbiA9IDQwMDtcbiAgfVxuXG4gIHRpbWluZ0Z1bmN0aW9uTmFtZSA9IHRpbWluZ0Z1bmN0aW9uTmFtZSB8fCAoIHR5cGVvZiBhdEVuZCA9PT0gJ3N0cmluZycgPyBhdEVuZCA6ICggdHlwZW9mIGR1cmF0aW9uID09PSAnc3RyaW5nJyA/IGR1cmF0aW9uIDogJ2Vhc2UnICkgKTtcblxuICBwcm9ncmVzc0ZuKGR1cmF0aW9uID09PSAwID8gMSA6IDApO1xuXG4gIHZhciBzdG9wcGVkID0gZmFsc2UsXG4gICAgICB0aW1pbmdGdW5jdGlvbiA9IGdldFRpbWluZ0Z1bmN0aW9uKHRpbWluZ0Z1bmN0aW9uTmFtZSksXG4gICAgICBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgaWYoIGR1cmF0aW9uID4gMCApIHtcbiAgICB2YXIgc3RhcnQgPSBEYXRlLm5vdygpLFxuICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZWxhcHNlZCA9IERhdGUubm93KCkgLSBzdGFydDtcblxuICAgICAgICAgIGlmKCBzdG9wcGVkICkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgfSBlbHNlIGlmKCBlbGFwc2VkID49IGR1cmF0aW9uICkge1xuICAgICAgICAgICAgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICBwcm9ncmVzc0ZuKDEpO1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICAgICAgKGF0RW5kIHx8IG5vb3ApKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2dyZXNzRm4oIHRpbWluZ0Z1bmN0aW9uKGVsYXBzZWQvZHVyYXRpb24pICk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMCk7XG4gIH1cblxuICBkZWZlcnJlZC5wcm9taXNlLnN0b3AgPSBmdW5jdGlvbiAocmVqZWN0KSB7XG4gICAgc3RvcHBlZCA9IHRydWU7XG4gICAgaWYoIHJlamVjdCApIHtcbiAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxuYW5pbWF0ZS50aW1lID0gZnVuY3Rpb24gKGVsKSB7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIGR1cmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmFuaW1hdGlvbkR1cmF0aW9uO1xuICBpZiggZHVyYXRpb24gKSB7XG4gICAgZHVyYXRpb24ucmVwbGFjZSgvKFswLTldKFxcLlswLTldKT8pKG0pP3MvLCBmdW5jdGlvbiAobWF0Y2hlZCwgdCwgZGVjaW1hbHMsIG1zKSB7XG4gICAgICB0aW1lICs9IG1zID8gTnVtYmVyKHQpIDogTnVtYmVyKHQpKjEwMDA7XG4gICAgfSk7XG4gIH1cbiAgaWYoIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5hbmltYXRpb25EZWxheSApIHtcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuYW5pbWF0aW9uRGVsYXkucmVwbGFjZSgvKFswLTldKFxcLlswLTldKT8pKG0pP3MvLCBmdW5jdGlvbiAobWF0Y2hlZCwgdCwgZGVjaW1hbHMsIG1zKSB7XG4gICAgICB0aW1lICs9IG1zID8gTnVtYmVyKHQpIDogTnVtYmVyKHQpKjEwMDA7XG4gICAgfSk7XG4gIH1cbiAgZHVyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkudHJhbnNpdGlvbkR1cmF0aW9uO1xuICBpZiggZHVyYXRpb24gKSB7XG4gICAgZHVyYXRpb24ucmVwbGFjZSgvKFswLTldKFxcLlswLTldKT8pKG0pP3MvLCBmdW5jdGlvbiAobWF0Y2hlZCwgdCwgZGVjaW1hbHMsIG1zKSB7XG4gICAgICB2YXIgdCA9IG1zID8gTnVtYmVyKHQpIDogTnVtYmVyKHQpKjEwMDA7XG4gICAgICBpZiggdCA+IHRpbWUgKSB7XG4gICAgICAgIHRpbWUgPSB0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKCdhbmltYXRpb25UaW1lJywgZWwsIHRpbWUpO1xuICByZXR1cm4gdGltZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYW5pbWF0ZTtcbiIsIlxudmFyICRxID0gcmVxdWlyZSgncS1wcm9taXNlL25vLW5hdGl2ZScpLFxuXHR3YWl0ID0gZnVuY3Rpb24gKGRlbGF5LCBjYWxsYmFjaykge1xuXHRcdGlmKCBkZWxheSBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuXHRcdFx0ZGVsYXkgPSBbY2FsbGJhY2ssIGNhbGxiYWNrID0gZGVsYXldWzBdO1xuXHRcdH1cblx0XHRpZiggY2FsbGJhY2sgJiYgIShjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgc2hvdWxkIGJlIGEgRnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0aWYoIHR5cGVvZiBkZWxheSAhPT0gJ251bWJlcicgKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2RlbGF5IHNob3VsZCBiZSBhIE51bWJlcicpO1xuXHRcdH1cblx0XHRyZXR1cm4gJHEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0aWYoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIGRlbGF5KTtcblx0XHR9KTtcblx0fTtcblxubW9kdWxlLmV4cG9ydHMgPSB3YWl0O1xuIiwiXG5mdW5jdGlvbiBkZWJvdW5jZSAoZm4sIHRpbWVzbG90KSB7XG4gIHZhciB0aW1lciA9IG51bGwsXG4gICAgICB0aW1lc2xvdCA9IHRpbWVzbG90IHx8IDgwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIGlmKCB0aW1lciApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGZuLmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICB9LCB0aW1lc2xvdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7IiwidmFyIHJlYWR5TGlzdGVuZXJzID0gW10sXG4gICAgaW5pdFJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGxpc3RlbmVycyA9IHJlYWR5TGlzdGVuZXJzO1xuICAgICAgcmVhZHlMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwobGlzdGVuZXJzLCBmdW5jdGlvbiAoY2IpIHsgY2IoKTsgfSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdFJlYWR5KTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdFJlYWR5KTtcbiAgICB9O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdFJlYWR5KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdFJlYWR5KTtcblxuZnVuY3Rpb24gcmVhZHkgKGNhbGxiYWNrKSB7XG4gIGlmKCBjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgIGlmKCByZWFkeUxpc3RlbmVycyApIHtcbiAgICAgIHJlYWR5TGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlYWR5O1xuIiwiXG5mdW5jdGlvbiB0ZW1wbGF0ZSAobmFtZSwgZGF0YSl7XG4gIHJldHVybiB0ZW1wbGF0ZS5jYWNoZVtuYW1lXShkYXRhIHx8IHt9KTtcbn1cblxudGVtcGxhdGUuY2FjaGUgPSB7fTtcblxudGVtcGxhdGUuY29tcGlsZSA9IGZ1bmN0aW9uICh0bXBsKSB7XG4gIC8vIEpvaG4gUmVzaWcgbWljcm8tdGVtcGxhdGVcbiAgcmV0dXJuIG5ldyBGdW5jdGlvbignb2JqJywgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgJ3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9OycgK1xuXG4gICAgLy8gSW50cm9kdWNlIHRoZSBkYXRhIGFzIGxvY2FsIHZhcmlhYmxlcyB1c2luZyB3aXRoKCl7fVxuICAgICd3aXRoKG9iail7cC5wdXNoKFxcJycgK1xuXG4gICAgLy8gQ29udmVydCB0aGUgdGVtcGxhdGUgaW50byBwdXJlIEphdmFTY3JpcHRcbiAgICB0bXBsLnRyaW0oKVxuICAgICAgLnJlcGxhY2UoL1tcXHJcXHRcXG5dL2csICcgJylcbiAgICAgIC5zcGxpdCgnPCUnKS5qb2luKCdcXHQnKVxuICAgICAgLnJlcGxhY2UoLygoXnwlPilbXlxcdF0qKScvZywgJyQxXFxyJylcbiAgICAgIC5yZXBsYWNlKC9cXHQ9KC4qPyklPi9nLCAnXFwnLCQxLFxcJycpXG4gICAgICAuc3BsaXQoJ1xcdCcpLmpvaW4oJ1xcJyk7JylcbiAgICAgIC5zcGxpdCgnJT4nKS5qb2luKCdwLnB1c2goXFwnJylcbiAgICAgIC5zcGxpdCgnXFxyJykuam9pbignXFxcXFxcJycpICsgJ1xcJyk7fXJldHVybiBwLmpvaW4oXFwnXFwnKTsnKTtcbn07XG5cbnRlbXBsYXRlLnB1dCA9IGZ1bmN0aW9uIChuYW1lLCB0bXBsKSB7XG4gIHRlbXBsYXRlLmNhY2hlW25hbWVdID0gdGVtcGxhdGUuY29tcGlsZSh0bXBsKTtcbn07XG5cbnRlbXBsYXRlLmxvb2t1cCA9IGZ1bmN0aW9uICgpIHtcbiAgW10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24veC10ZW1wbGF0ZVwiXVtkYXRhLXRlbXBsYXRlXScpLCBmdW5jdGlvbiAodG1wbCkge1xuICAgIHRlbXBsYXRlLnB1dCh0bXBsLmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpLCB0bXBsLnRleHQpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiXG52YXIgX2RvbSA9IHtcbiAgY3VycmVudFNjcmlwdDogZG9jdW1lbnQuY3VycmVudFNjcmlwdCB8fCAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG4gICAgcmV0dXJuIHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXTtcbiAgfSkoKSxcbiAgY3JlYXRlOiBmdW5jdGlvbiAodGFnTmFtZSwgYXR0cnMpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgaWYoIGF0dHJzICkge1xuICAgICAgaWYoIGF0dHJzLmh0bWwgKSB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGF0dHJzLmh0bWw7XG4gICAgICB9XG4gICAgICBmb3IoIHZhciBhdHRyIGluIGF0dHJzICkge1xuICAgICAgICBpZiggYXR0ciAhPT0gJ2h0bWwnICkge1xuICAgICAgICAgIGVsW2F0dHJdID0gYXR0cnNbYXR0cl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsO1xuICB9LFxuICBhdHRyOiBmdW5jdGlvbiAoZWwsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYoICEoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSAmJiBlbFswXSBpbnN0YW5jZW9mIEVsZW1lbnQgKSB7XG4gICAgICBlbCA9IGVsWzBdO1xuICAgIH1cbiAgICBpZiggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gIH0sXG4gIHRtcENsYXNzOiBmdW5jdGlvbiAoZWwsIGNsYXNzTmFtZSwgZHVyYXRpb24sIGNiKSB7XG4gICAgdmFyIGlzQ29sbGVjdGlvbiA9ICEoZWwgaW5zdGFuY2VvZiBFbGVtZW50ICkgJiYgZWwubGVuZ3RoO1xuXG4gICAgaWYoIGlzQ29sbGVjdGlvbiApIHtcbiAgICAgIFtdLmZvckVhY2guY2FsbChlbCwgZnVuY3Rpb24gKF9lbCkge1xuICAgICAgICBfZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiggaXNDb2xsZWN0aW9uICkge1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZWwsIGZ1bmN0aW9uIChfZWwpIHtcbiAgICAgICAgICBfZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmKCBjYiBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgIH0sIGR1cmF0aW9uIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBkdXJhdGlvbigpIDogZHVyYXRpb24gKTtcbiAgfSxcbiAgZm9ybVBhcmFtczogZnVuY3Rpb24gKGZvcm0pIHtcbiAgICBpZiggIShmb3JtIGluc3RhbmNlb2YgRWxlbWVudCkgJiYgZm9ybS5sZW5ndGggKSB7XG4gICAgICBmb3JtID0gZm9ybVswXTtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHt9O1xuICAgIFtdLmZvckVhY2guY2FsbChmb3JtLmVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGlmKCBlbC5uYW1lICYmICFlbC5kaXNhYmxlZCApIHtcbiAgICAgICAgaWYoIGVsLnR5cGUgPT09ICdyYWRpbycgKSB7XG4gICAgICAgICAgaWYoIGVsLmNoZWNrZWQgKSB7XG4gICAgICAgICAgICBkYXRhW2VsLm5hbWVdID0gZWwudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGFbZWwubmFtZV0gPSBlbC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9kb207XG4iLCJcbm1vZHVsZS5leHBvcnRzID0ge1xuICBvbjogZnVuY3Rpb24gKGVsLCBldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpIHtcbiAgICBpZiggdHlwZW9mIGVsID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihlbCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKTtcbiAgfSxcbiAgb2ZmOiBmdW5jdGlvbiAoZWwsIGV2ZW50TmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSkge1xuICAgIGlmKCB0eXBlb2YgZWwgPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGVsLCBldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgIH1cbiAgICByZXR1cm4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICB9LFxuICB0cmlnZ2VyRXZlbnQ6IGRvY3VtZW50LmNyZWF0ZUV2ZW50ID8gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiSFRNTEV2ZW50c1wiKTtcbiAgICBldmVudC5kYXRhID0gZGF0YTtcbiAgICBldmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHJldHVybiBldmVudDtcbiAgfSA6IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpO1xuICAgIGV2ZW50LmRhdGEgPSBkYXRhO1xuICAgIGVsZW1lbnQuZmlyZUV2ZW50KFwib25cIiArIGV2ZW50TmFtZSwgZXZlbnQpO1xuICAgIHJldHVybiBldmVudDtcbiAgfVxufTtcbiIsIlxudmFyIG5vcm1hbGl6ZSA9IHtcbiAgaXNUb3VjaERldmljZTogJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICBpc01hYzogL15NYWMvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKSxcbiAgaXNBbmRyb2lkOiAvXkFuZHJvaWQvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKVxufTtcblxuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoIG5vcm1hbGl6ZS5pc1RvdWNoRGV2aWNlID8gJ3RvdWNoJyA6ICduby10b3VjaCcgKTtcbmlmKCBub3JtYWxpemUuaXNNYWMgKSB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1tYWMnKTtcbn1cbmlmKCBub3JtYWxpemUuaXNBbmRyb2lkICkge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtYW5kcm9pZCcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZTtcbiIsIlxuZnVuY3Rpb24gZ2V0U2Nyb2xsUm9vdCAoKSB7XG4gICAgaWYoIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH0gZWxzZSBpZiAoIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gICAgfVxuXG4gICAgdmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgICBjYWNoZVRvcCA9ICgodHlwZW9mIHdpbmRvdy5wYWdlWU9mZnNldCAhPT0gXCJ1bmRlZmluZWRcIikgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiBudWxsKSB8fCBib2R5LnNjcm9sbFRvcCB8fCBodG1sLnNjcm9sbFRvcCwgLy8gY2FjaGUgdGhlIHdpbmRvdydzIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgIHJvb3Q7XG5cbiAgICBodG1sLnNjcm9sbFRvcCA9IGJvZHkuc2Nyb2xsVG9wID0gY2FjaGVUb3AgKyAoY2FjaGVUb3AgPiAwKSA/IC0xIDogMTtcbiAgICAvLyBmaW5kIHJvb3QgYnkgY2hlY2tpbmcgd2hpY2ggc2Nyb2xsVG9wIGhhcyBhIHZhbHVlIGxhcmdlciB0aGFuIHRoZSBjYWNoZS5cbiAgICByb290ID0gKGh0bWwuc2Nyb2xsVG9wICE9PSBjYWNoZVRvcCkgPyBodG1sIDogYm9keTtcblxuICAgIHJvb3Quc2Nyb2xsVG9wID0gY2FjaGVUb3A7IC8vIHJlc3RvcmUgdGhlIHdpbmRvdydzIHNjcm9sbCBwb3NpdGlvbiB0byBjYWNoZWQgdmFsdWVcblxuICAgIHJldHVybiByb290OyAvLyByZXR1cm4gdGhlIHNjcm9sbGluZyByb290IGVsZW1lbnRcbn1cblxudmFyIHJlYWR5ID0gcmVxdWlyZSgnLi4vZm4vcmVhZHknKSxcblx0c2Nyb2xsUm9vdCA9IHsgc2Nyb2xsVG9wOiAwIH1cbiAgICBzY3JvbGwgPSB7XG4gICAgICByb290OiBzY3JvbGxSb290LFxuICAgICAgb246IGZ1bmN0aW9uICggaGFuZGxlciwgdXNlQ2FwdHVyZSApIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICAgICAgfSxcbiAgICAgIG9mZjogZnVuY3Rpb24gKCBoYW5kbGVyLCB1c2VDYXB0dXJlICkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciwgdXNlQ2FwdHVyZSk7XG4gICAgICB9LFxuICAgICAgdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzY3JvbGwucm9vdC5zY3JvbGxUb3A7XG4gICAgICB9LFxuICAgICAgZ290bzogZnVuY3Rpb24gKCB2YWx1ZSApIHtcbiAgICAgICAgc2Nyb2xsLnJvb3Quc2Nyb2xsVG9wID0gdmFsdWU7XG4gICAgICB9XG4gICAgfTtcblxucmVhZHkoZnVuY3Rpb24gKCkge1xuICBzY3JvbGxSb290ID0gZ2V0U2Nyb2xsUm9vdCgpO1xuICBzY3JvbGwucm9vdCA9IHNjcm9sbFJvb3Q7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGw7XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNjcm9sbCkge1xuXG5cdHZhciBhbmltYXRlID0gcmVxdWlyZSgnLi4vLi4vZGVmZXJyZWQvYW5pbWF0ZScpLFxuXHRcdFx0JHEgPSByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJyksXG5cdFx0XHRub29wID0gZnVuY3Rpb24oKSB7fSxcblx0XHRcdHNjcm9sbEFuaW1hdGlvbiA9IGFuaW1hdGUobm9vcCwgMCksXG5cdFx0XHRhdXg7XG5cblx0c2Nyb2xsLmFuaW1hdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc2Nyb2xsQW5pbWF0aW9uO1xuXHR9O1xuXG5cdHNjcm9sbC5hbmltYXRlVG8gPSBmdW5jdGlvbiAodmFsdWUsIGNiLCBkdXJhdGlvbiApIHtcblx0XHRpZiggdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcblx0XHQgIHJldHVybiAkcS5yZWplY3QoKTtcblx0XHR9XG5cdFx0aWYoIHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudCApIHtcblx0XHQgIHZhbHVlID0gdmFsdWUub2Zmc2V0VG9wO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgY2IgPT09ICdudW1iZXInICkge1xuXHRcdCAgYXV4ID0gY2I7XG5cdFx0ICBkdXJhdGlvbiA9IGNiO1xuXHRcdCAgY2IgPSBhdXg7XG5cdFx0fVxuXG5cdFx0dmFyIHNjcm9sbEZyb20gPSBzY3JvbGwudG9wKCksXG5cdFx0ICAgIHNjcm9sbERlbHRhID0gdmFsdWUgLSBzY3JvbGxGcm9tO1xuXG5cdFx0c2Nyb2xsQW5pbWF0aW9uLnN0b3AoKTtcblx0XHRzY3JvbGwuaW5BbmltYXRpb24gPSB0cnVlO1xuXHRcdHNjcm9sbEFuaW1hdGlvbiA9IGFuaW1hdGUoZnVuY3Rpb24gKHByb2dyZXNzKSB7XG5cdFx0ICBzY3JvbGwuZ290byggc2Nyb2xsRnJvbSArIHNjcm9sbERlbHRhKnByb2dyZXNzICk7XG5cdFx0fSwgZnVuY3Rpb24gKCkge1xuXHRcdCAgc2Nyb2xsLmluQW5pbWF0aW9uID0gZmFsc2U7XG5cdFx0ICAoY2IgfHwgXy5ub29wKSgpO1xuXHRcdH0sIGR1cmF0aW9uIHx8IDM1MCwgJ2Vhc2Utb3V0Jyk7XG5cblx0XHRyZXR1cm4gc2Nyb2xsQW5pbWF0aW9uO1xuXHR9O1xuXG5cdHJldHVybiBzY3JvbGw7XG59O1xuIiwiXG52YXIgc2Nyb2xsID0gcmVxdWlyZSgnLi4vc2Nyb2xsJyk7XG5cbnJlcXVpcmUoJy4vdG9wLWNsYXNzJykoc2Nyb2xsKTtcbnJlcXVpcmUoJy4vYW5pbWF0ZScpKHNjcm9sbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2Nyb2xsOyIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2Nyb2xsKSB7XG5cblx0dmFyIG9uU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2Nyb2xsLXRvcCcsICFzY3JvbGwudG9wKCkgKTtcblx0ICAgIH07XG5cblx0c2Nyb2xsLm9uKG9uU2Nyb2xsKTtcblxuXHRyZXF1aXJlKCcuLi8uLi9mbi9yZWFkeScpKG9uU2Nyb2xsKTtcblxufTtcbiIsIlxucmVxdWlyZSgnLi9zYW5kYm94JykoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gaWYoIGRvY3VtZW50LmRvY3VtZW50TW9kZSB8fCAvRWRnZVxcLy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSApIHtcbiAgLy8gICByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJykudXNlUG9seWZpbGwoKTtcbiAgLy8gfVxuXG4gIHZhciBhcGxhemFtZSA9IHJlcXVpcmUoJy4vY29yZS9jb3JlJyk7XG5cbiAgYXBsYXphbWUuY2hlY2tvdXQgPSByZXF1aXJlKCcuL2FwcHMvY2hlY2tvdXQnKTtcbiAgYXBsYXphbWUuYnV0dG9uID0gcmVxdWlyZSgnLi9hcHBzL2J1dHRvbicpO1xuICBhcGxhemFtZS5zaW11bGF0b3IgPSByZXF1aXJlKCcuL2FwcHMvc2ltdWxhdG9yJyk7XG4gIGFwbGF6YW1lLm1vZGFsID0gcmVxdWlyZSgnLi9hcHBzL21vZGFsJyk7XG5cbiAgZ2xvYmFsLmFwbGF6YW1lID0gYXBsYXphbWU7XG5cbiAgYXBsYXphbWUuaW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBpOiByZXF1aXJlKCcuL2NvcmUvYXBpJyksXG4gICAgICBsb2c6IHJlcXVpcmUoJy4vdG9vbHMvbG9nJykuaGlzdG9yeSxcbiAgICAgIHZlcnNpb246IHJlcXVpcmUoJy4uLy50bXAvYXBsYXphbWUtdmVyc2lvbicpXG4gICAgfTtcbiAgfTtcblxuICBhcGxhemFtZS5sb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmVxdWlyZSgnLi90b29scy9sb2cnKS5oaXN0b3J5LmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKGwudGltZSk7XG4gICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBsLmFyZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlcXVpcmUoJy4vYXBwcy9odHRwLXNlcnZpY2UnKTtcblxuICByZXF1aXJlKCcuL2xvYWRlcnMvZGF0YS1hcGxhemFtZScpKGdsb2JhbC5hcGxhemFtZSk7XG4gIGFwbGF6YW1lLl8ucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIHZhciBidXR0b25zTG9va3VwID0gcmVxdWlyZSgnLi9sb2FkZXJzL2RhdGEtYnV0dG9uJykoZ2xvYmFsLmFwbGF6YW1lKSxcbiAgICAgICAgd2lkZ2V0c0xvb2t1cCA9IHJlcXVpcmUoJy4vbG9hZGVycy9kYXRhLXNpbXVsYXRvcicpKGdsb2JhbC5hcGxhemFtZSksXG4gICAgICAgIGNiID0gcmVxdWlyZSgnLi9jb3JlL2FwaScpLmNhbGxiYWNrO1xuXG4gICAgaWYoIGNiICkge1xuICAgICAgaWYoICB0eXBlb2YgZ2xvYmFsW2NiXSAhPT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBzaG91bGQgYmUgYSBnbG9iYWwgZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICAgIGdsb2JhbFtjYl0oYXBsYXphbWUpO1xuICAgICAgYnV0dG9uc0xvb2t1cCgpO1xuICAgICAgd2lkZ2V0c0xvb2t1cCgpO1xuICAgIH1cblxuICB9KTtcblxuICAvLyBnbG9iYWwuJHEgPSByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJyk7XG4gIC8vIGdsb2JhbC4kaHR0cCA9IHJlcXVpcmUoJ2h0dHAtYnJvd3NlcicpO1xuXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwaUh0dHAgPSByZXF1aXJlKCcuLi9jb3JlL2FwaS1odHRwJyksXG4gICAgXyA9IHJlcXVpcmUoJy4uL3Rvb2xzL3Rvb2xzJyk7XG5cbmZ1bmN0aW9uIGdldENhcnRQcmljZSAoKSB7XG4gIHJldHVybiBfLnBhcnNlUHJpY2UoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbF9wcmljZScpLnRleHRDb250ZW50ICk7XG59XG5cbmZ1bmN0aW9uIGJ1dHRvbiAob3B0aW9ucykge1xuXG4gIGlmKCAhb3B0aW9ucyApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2FwbGF6YW1lLmJ1dHRvbiByZXF1aXJlcyBwYXJhbWV0ZXJzJyk7XG4gIH1cblxuICBpZiggIW9wdGlvbnMuaWQgJiYgIW9wdGlvbnMuYnV0dG9uICYmICFvcHRpb25zLnNlbGVjdG9yICl7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdidXR0b24gY2FuIG5vdCBiZSBpZGVudGlmaWVkICggcGxlYXNlIHVzZSAtIGlkOiBcXCdidXR0b24taWRcXCcgLSBvciAtIGJ1dHRvbjogXFwnI2J1dHRvbi1pZFxcJyAtIG9yIC0gc2VsZWN0b3I6IFxcJyNidXR0b24taWRcXCcgKHJlY29tZW5kZWQpIC0gKScpO1xuICB9XG5cbiAgaWYoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbF9wcmljZScpICkge1xuICAgIG9wdGlvbnMuYW1vdW50ID0gZ2V0Q2FydFByaWNlKCkgfHwgb3B0aW9ucy5hbW91bnQ7XG5cbiAgICBpZiggIWJ1dHRvbi53YXRjaGluZyApIHtcbiAgICAgIGJ1dHRvbi53YXRjaGluZyA9IHRydWU7XG4gICAgICBvcHRpb25zLmxhc3RQcmljZSA9IG9wdGlvbnMuYW1vdW50O1xuXG4gICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhbW91bnQgPSBnZXRDYXJ0UHJpY2UoKTtcbiAgICAgICAgaWYoIGFtb3VudCAmJiBhbW91bnQgIT09IG9wdGlvbnMubGFzdFByaWNlICkge1xuICAgICAgICAgIG9wdGlvbnMuYW1vdW50ID0gYW1vdW50O1xuICAgICAgICAgIG9wdGlvbnMubGFzdFByaWNlID0gb3B0aW9ucy5hbW91bnQ7XG4gICAgICAgICAgb3B0aW9ucy5mb3JjZVVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgYnV0dG9uKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9LCA0MDApO1xuICAgIH1cbiAgfVxuXG4gIGlmKCAhb3B0aW9ucy5hbW91bnQgKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2J1dHRvbiBhbW91bnQgbWlzc2luZycpO1xuICB9XG5cbiAgdmFyIGVsZW1lbnRzLCBlbEJ1dHRvbjtcblxuICBpZiggb3B0aW9ucy5idXR0b24gKSB7XG4gICAgZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuYnV0dG9uKTtcbiAgfSBlbHNlIGlmKCBvcHRpb25zLmlkICkge1xuICAgIGVsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggKCAvXiMvLnRlc3Qob3B0aW9ucy5pZCkgPyAnJyA6ICcjJyApICsgb3B0aW9ucy5pZCApO1xuICB9XG5cbiAgZWxlbWVudHMgPSBlbEJ1dHRvbiA/IFtlbEJ1dHRvbl0gOiBbXTtcblxuICBpZiggb3B0aW9ucy5zZWxlY3RvciApIHtcbiAgICBbXS5wdXNoLmFwcGx5KCBlbGVtZW50cywgXy5jc3NRdWVyeShvcHRpb25zLnNlbGVjdG9yKSApO1xuICB9XG5cbiAgaWYoIG9wdGlvbnMuZGVzY3JpcHRpb24gKSB7XG4gICAgW10ucHVzaC5hcHBseSggZWxlbWVudHMsIF8uY3NzUXVlcnkob3B0aW9ucy5kZXNjcmlwdGlvbikgKTtcbiAgfVxuXG4gIGVsQnV0dG9uID0gZWxCdXR0b24gfHwgZWxlbWVudHNbMF07XG5cbiAgaWYoICFvcHRpb25zLiQkcnVubmluZyAmJiBvcHRpb25zLnNlbGVjdG9yICkge1xuICAgIG9wdGlvbnMuJCRydW5uaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKCAhb3B0aW9ucy5mb3JjZVVwZGF0ZSAmJiAoICFlbGVtZW50cy5sZW5ndGggfHwgXy5lbGVtZW50RGF0YShlbEJ1dHRvbiwgJ2J1dHRvbkluaXRpYWxpemVkJykgKSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvcHRpb25zLmZvcmNlVXBkYXRlID0gZmFsc2U7XG5cbiAgaWYoIGVsQnV0dG9uICYmIG9wdGlvbnMucGFyZW50ICkge1xuICAgIHZhciBwYXJlbnQgPSBlbEJ1dHRvbi5wYXJlbnRFbGVtZW50O1xuXG4gICAgd2hpbGUoIHBhcmVudCAmJiBwYXJlbnQgIT09IGRvY3VtZW50LmJvZHkgKSB7XG4gICAgICBpZiggcGFyZW50Lm1hdGNoZXNTZWxlY3RvcihvcHRpb25zLnBhcmVudCkgKSB7XG4gICAgICAgIGVsZW1lbnRzLnB1c2gocGFyZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH1cblxuICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmKCBlbC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgKSB7XG4gICAgICBlbC5fX2Rpc3BsYXkgPSBlbC5zdHlsZS5kaXNwbGF5O1xuICAgIH1cbiAgICBlbC5fX2lucHV0ID0gKCBlbC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyB8fCBlbC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicgKSA/IGVsIDogZWwucXVlcnlTZWxlY3RvcignaW5wdXQsIGJ1dHRvbicpO1xuXG4gICAgaWYoIGVsLl9faW5wdXQgKSB7XG4gICAgICBlbC5fX2lucHV0Ll9fZGlzYWJsZWQgPSBlbC5fX2lucHV0Ll9fZGlzYWJsZWQgPT09IHVuZGVmaW5lZCA/IGVsLl9faW5wdXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIDogZWwuX19pbnB1dC5fX2Rpc2FibGVkO1xuICAgICAgZWwuX19pbnB1dC5fX2NoZWNrZWQgPSBlbC5fX2lucHV0Ll9fY2hlY2tlZCA9PT0gdW5kZWZpbmVkID8gZWwuX19pbnB1dC5jaGVja2VkIDogZWwuX19pbnB1dC5fX2NoZWNrZWQ7XG4gICAgICBpZiggZWwuX19pbnB1dC5fX2NoZWNrZWQgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgZWwuX19pbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiggIWVsLl9faW5wdXQuX19kaXNhYmxlZCApIHtcbiAgICAgICAgZWwuX19pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgXy5lbGVtZW50RGF0YShlbCwgJ2J1dHRvbkluaXRpYWxpemVkJywgdHJ1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiBidXR0b24uY2hlY2sob3B0aW9ucywgZnVuY3Rpb24gKGFsbG93ZWQpIHtcbiAgICBpZiggYWxsb3dlZCApIHtcbiAgICAgIHZhciBlbG1zID0gZWxlbWVudHMuc2xpY2UoKTtcbiAgICAgIGVsbXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLl9fZGlzcGxheTtcbiAgICAgICAgaWYgKCBlbC5fX2lucHV0ICkge1xuICAgICAgICAgIGlmKCAhZWwuX19pbnB1dC5fX2Rpc2FibGVkICYmIGVsLl9faW5wdXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpICkge1xuICAgICAgICAgICAgZWwuX19pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKCBlbC5fX2lucHV0Ll9fY2hlY2tlZCAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgZWwuX19pbnB1dC5jaGVja2VkID0gZWwuX19pbnB1dC5fX2NoZWNrZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmJ1dHRvbi5jaGVjayA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICBpZiggXy5pc1N0cmluZyhvcHRpb25zKSB8fCBfLmlzTnVtYmVyKG9wdGlvbnMpICkge1xuICAgIG9wdGlvbnMgPSB7IGFtb3VudDogTnVtYmVyKG9wdGlvbnMpIH07XG4gIH1cblxuICB2YXIgcGFyYW1zID0ge1xuICAgIGFtb3VudDogb3B0aW9ucy5hbW91bnQsXG4gICAgY3VycmVuY3k6IG9wdGlvbnMuY3VycmVuY3kgfHwgJ0VVUidcbiAgfTtcblxuICBpZiggb3B0aW9ucy5jb3VudHJ5ICkge1xuICAgIHBhcmFtcy5jb3VudHJ5ID0gb3B0aW9ucy5jb3VudHJ5O1xuICB9XG5cbiAgdmFyIGNoZWNrUHJvbWlzZSA9IGFwaUh0dHAuZ2V0KCdjaGVja291dC9idXR0b24nLCB7IHBhcmFtczogcGFyYW1zIH0pO1xuXG4gIGlmKCBfLmlzRnVuY3Rpb24oY2FsbGJhY2spICkge1xuICAgIGNoZWNrUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkgeyBjYWxsYmFjayhyZXNwb25zZS5kYXRhLmFsbG93ZWQsIHJlc3BvbnNlKTsgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7IGNhbGxiYWNrKGZhbHNlLCByZXNwb25zZSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrUHJvbWlzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYnV0dG9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBpID0gcmVxdWlyZSgnLi4vY29yZS9hcGknKSxcbiAgICBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKSxcbiAgICBodHRwID0gcmVxdWlyZSgnaHR0cC1icm93c2VyJyksXG4gICAgJHEgPSByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJyksXG4gICAgY3NzSGFjayA9IHJlcXVpcmUoJy4uL3Rvb2xzL2Nzcy1oYWNrJyk7XG5cbmZ1bmN0aW9uIGNoZWNrb3V0IChvcHRpb25zKSB7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBiYXNlQ2hlY2tvdXQgPSAoIG9wdGlvbnMuaG9zdCA9PT0gJ2xvY2F0aW9uJyA/ICggbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCArICcvJyApIDogb3B0aW9ucy5ob3N0ICkgfHwgJ2h0dHBzOi8vYXBsYXphbWUuY29tL3N0YXRpYy9jaGVja291dC8nO1xuXG4gIGlmKCAhL1xcLyQvLnRlc3QoYmFzZUNoZWNrb3V0KSApIHtcbiAgICBiYXNlQ2hlY2tvdXQgKz0gJy8nO1xuICB9XG5cbiAgdmFyIG9uID0ge30sXG4gICAgICBpZnJhbWVTcmMgPSBiYXNlQ2hlY2tvdXQgKyAnaWZyYW1lLmh0bWw/JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgZXJyb3JMb2FkaW5nID0gZmFsc2UsXG4gICAgICB0bXBPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBjc3NPdmVybGF5ID0gY3NzSGFjaygnb3ZlcmxheScpLFxuICAgICAgY3NzQmx1ciA9IGNzc0hhY2soJ2JsdXInKSxcbiAgICAgIGNzc0xvZ28gPSBjc3NIYWNrKCdsb2dvJyksXG4gICAgICBjc3NNb2RhbCA9IGNzc0hhY2soJ21vZGFsJyk7XG5cbiAgaWYoIG9wdGlvbnMubWVyY2hhbnQub25TdWNjZXNzICkge1xuICAgIG9uLnN1Y2Nlc3MgPSBvcHRpb25zLm1lcmNoYW50Lm9uU3VjY2VzcztcbiAgICBkZWxldGUgb3B0aW9ucy5tZXJjaGFudC5vblN1Y2Nlc3M7XG4gIH1cbiAgaWYoIG9wdGlvbnMubWVyY2hhbnQub25FcnJvciApIHtcbiAgICBvbi5lcnJvciA9IG9wdGlvbnMubWVyY2hhbnQub25FcnJvcjtcbiAgICBkZWxldGUgb3B0aW9ucy5tZXJjaGFudC5vbkVycm9yO1xuICB9XG4gIGlmKCBvcHRpb25zLm1lcmNoYW50Lm9uRGlzbWlzcyApIHtcbiAgICBvbi5kaXNtaXNzID0gb3B0aW9ucy5tZXJjaGFudC5vbkRpc21pc3M7XG4gICAgZGVsZXRlIG9wdGlvbnMubWVyY2hhbnQub25EaXNtaXNzO1xuICB9XG5cbiAgdG1wT3ZlcmxheS5jbGFzc05hbWUgPSAnYXBsYXphbWUtb3ZlcmxheSBhcGxhemFtZS1vdmVybGF5LXNob3cnO1xuXG4gIGNzc092ZXJsYXkuaGFjayh0cnVlKTtcbiAgY3NzTG9nby5oYWNrKHRydWUpO1xuICBjc3NCbHVyLmhhY2sodHJ1ZSk7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaWYoICFlcnJvckxvYWRpbmcgKSB7XG4gICAgICBfLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS1ibHVyJyk7XG4gICAgfVxuICB9LCAwKTtcblxuICB0bXBPdmVybGF5LmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiYXBsYXphbWUtbG9nby13cmFwcGVyXCI+PGRpdiBjbGFzcz1cImxvZ28tYXBsYXphbWVcIiBzdHlsZT1cIndpZHRoOiAxNTBweDsgaGVpZ2h0OiAxNTBweDtcIj4nICtcbiAgcmVxdWlyZSgnLi9sb2FkaW5nLXN2ZycpICsgJzwvZGl2PjxkaXYgY2xhc3M9XCJhcGxhemFtZS1vdmVybGF5LWxvYWRpbmctdGV4dFwiPkNhcmdhbmRvIHBhc2FyZWxhIGRlIHBhZ28uLi48L2Rpdj48L2Rpdj4nO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG1wT3ZlcmxheSk7XG5cbiAgdmFyIGxvYWRpbmdUZXh0ID0gdG1wT3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcuYXBsYXphbWUtb3ZlcmxheS1sb2FkaW5nLXRleHQnKTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiggIWVycm9yTG9hZGluZyApIHtcbiAgICAgIHRtcE92ZXJsYXkucXVlcnlTZWxlY3RvcignLmxvZ28tYXBsYXphbWUnKS5jbGFzc05hbWUgKz0gJyBhbmltYXRlJztcbiAgICB9XG4gIH0sIDIwMCk7XG5cbiAgb3B0aW9ucy5hcGkgPSBfLmNvcHkoYXBpKTtcblxuICByZXR1cm4gaHR0cCggaWZyYW1lU3JjICkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHZhciBpZnJhbWVIdG1sID0gcmVzcG9uc2UuZGF0YS5yZXBsYWNlKC88aGVhZFxcPi8sICc8aGVhZD48YmFzZSBocmVmPVwiJyArIGJhc2VDaGVja291dCArICdcIiAvPicpLFxuICAgICAgICAgIGlmcmFtZSA9IF8uZ2V0SUZyYW1lKHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaHR0cENoZWNrb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN0YXJ0ZWQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgcmV0dXJuIGh0dHAuYXBwbHkodGhpcywgYXJndW1lbnRzKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgYXBsYXphbWU6ICdjaGVja291dCcsXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdodHRwLXN1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHN0YXJ0ZWQ6IHN0YXJ0ZWQsXG4gICAgICAgICAgICAgICAgZWxhcHNlZDogRGF0ZS5ub3coKSAtIHN0YXJ0ZWQsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IGh0dHAucGxhaW5SZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBhcGxhemFtZTogJ2NoZWNrb3V0JyxcbiAgICAgICAgICAgICAgICBldmVudDogJ2h0dHAtZXJyb3InLFxuICAgICAgICAgICAgICAgIHN0YXJ0ZWQ6IHN0YXJ0ZWQsXG4gICAgICAgICAgICAgICAgZWxhcHNlZDogRGF0ZS5ub3coKSAtIHN0YXJ0ZWQsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IGh0dHAucGxhaW5SZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICBpZnJhbWUuY2xhc3NOYW1lID0gJ2FwbGF6YW1lLW1vZGFsJztcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgaWZyYW1lLnNyYyA9IGlmcmFtZVNyYztcblxuICAgICAgaWYoICFvcHRpb25zLm1lcmNoYW50ICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgbWVyY2hhbnQgcGFyYW1ldGVycycpO1xuICAgICAgfVxuXG4gICAgICBpZiggJ3NhbmRib3gnIGluIG9wdGlvbnMubWVyY2hhbnQgKSB7XG4gICAgICAgIGFwaS5zYW5kYm94ID0gb3B0aW9ucy5tZXJjaGFudC5zYW5kYm94O1xuICAgICAgfVxuXG4gICAgICBpZiggIW9wdGlvbnMubWVyY2hhbnQucHVibGljX2FwaV9rZXkgKSB7XG4gICAgICAgIGlmKCBhcGkucHVibGljS2V5ICkge1xuICAgICAgICAgIG9wdGlvbnMubWVyY2hhbnQucHVibGljX2FwaV9rZXkgPSBhcGkucHVibGljS2V5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBwdWJsaWMga2V5Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5vcmlnaW4gPSB7XG4gICAgICAgIGhyZWY6IGxvY2F0aW9uLmhyZWYsXG4gICAgICAgIGhvc3Q6IGxvY2F0aW9uLmhvc3QsXG4gICAgICAgIHByb3RvY29sOiBsb2NhdGlvbi5wcm90b2NvbCxcbiAgICAgICAgb3JpZ2luOiBsb2NhdGlvbi5vcmlnaW5cbiAgICAgIH07XG5cbiAgICAgIHZhciBvbk1lc3NhZ2UgPSBmdW5jdGlvbiAoZSwgbWVzc2FnZSkge1xuXG4gICAgICAgIHN3aXRjaCggbWVzc2FnZS5ldmVudCApIHtcbiAgICAgICAgICBjYXNlICdtZXJjaGFudCc6XG4gICAgICAgICAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gICAgICAgICAgICBlLnNvdXJjZS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgIGNoZWNrb3V0OiBvcHRpb25zXG4gICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnc2hvdy1pZnJhbWUnOlxuICAgICAgICAgICAgXy5yZW1vdmVDbGFzcyhpZnJhbWUsICdoaWRlJyk7XG4gICAgICAgICAgICBjc3NNb2RhbC5oYWNrKHRydWUpO1xuICAgICAgICAgICAgY3NzT3ZlcmxheS5oYWNrKGZhbHNlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG1wT3ZlcmxheSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdsb2FkaW5nLXRleHQnOlxuICAgICAgICAgICAgbG9hZGluZ1RleHQudGV4dENvbnRlbnQgPSBtZXNzYWdlLnRleHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdkcm9wLWJsdXInOlxuICAgICAgICAgICAgXy5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtYmx1cicpO1xuICAgICAgICAgICAgXy5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtdW5ibHVyJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgY3NzQmx1ci5oYWNrKGZhbHNlKTtcbiAgICAgICAgICAgICAgXy5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtYmx1cicpO1xuICAgICAgICAgICAgICBfLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS11bmJsdXInKTtcbiAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjb25maXJtJzpcbiAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgIF8ubG9nKCdhcGxhemFtZS5jaGVja291dDpjb25maXJtJywgbWVzc2FnZSk7XG5cbiAgICAgICAgICAgIGh0dHBDaGVja291dCggb3B0aW9ucy5tZXJjaGFudC5jb25maXJtYXRpb25fdXJsLCB7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICBkYXRhOiBtZXNzYWdlLmRhdGEsXG4gICAgICAgICAgICAgIHBhcmFtczogXy5leHRlbmQobWVzc2FnZS5wYXJhbXMgfHwge30sIHtcbiAgICAgICAgICAgICAgICBvcmRlcl9pZDogbWVzc2FnZS5kYXRhLmNoZWNrb3V0X3Rva2VuLFxuICAgICAgICAgICAgICAgIGNoZWNrb3V0X3Rva2VuOiBtZXNzYWdlLmRhdGEuY2hlY2tvdXRfdG9rZW5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGUuc291cmNlLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBhcGxhemFtZTogJ2NoZWNrb3V0JyxcbiAgICAgICAgICAgICAgICBldmVudDogJ2NvbmZpcm1hdGlvbicsXG4gICAgICAgICAgICAgICAgcmVzdWx0OiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IGh0dHAucGxhaW5SZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgZS5zb3VyY2UucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGFwbGF6YW1lOiAnY2hlY2tvdXQnLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY29uZmlybWF0aW9uJyxcbiAgICAgICAgICAgICAgICByZXN1bHQ6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IGh0dHAucGxhaW5SZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uZmlybWF0aW9uX3VybFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICAgICAgaWYoIGlmcmFtZSApIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgICAgICAgICAgICBjc3NNb2RhbC5oYWNrKGZhbHNlKTtcbiAgICAgICAgICAgICAgaWZyYW1lID0gbnVsbDtcblxuICAgICAgICAgICAgICBfLm9uTWVzc2FnZS5vZmYoJ2NoZWNrb3V0Jywgb25NZXNzYWdlKTtcblxuICAgICAgICAgICAgICBzd2l0Y2goIG1lc3NhZ2UucmVzdWx0ICkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBvbi5zdWNjZXNzID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgICAgICAgICAgICAgICBvbi5zdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoICFvcHRpb25zLm1lcmNoYW50LnN1Y2Nlc3NfdXJsICkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3N1Y2Nlc3NfdXJsIG1pc3NpbmcnKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2Uob3B0aW9ucy5tZXJjaGFudC5zdWNjZXNzX3VybCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjYW5jZWwnOlxuICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBvbi5lcnJvciA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgICAgICAgICAgICAgb24uZXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiggIW9wdGlvbnMubWVyY2hhbnQuY2FuY2VsX3VybCApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5jZWxfdXJsIG1pc3NpbmcnKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2Uob3B0aW9ucy5tZXJjaGFudC5jYW5jZWxfdXJsKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Rpc21pc3MnOlxuICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBvbi5kaXNtaXNzID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgICAgICAgICAgICAgICBvbi5kaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKG9wdGlvbnMubWVyY2hhbnQuY2hlY2tvdXRfdXJsIHx8ICcvJyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF8ub25NZXNzYWdlKCdjaGVja291dCcsIG9uTWVzc2FnZSk7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ2NhbiBub3QgY29ubmVjdCB0byAnICsgYmFzZUNoZWNrb3V0KTtcbiAgICAgIGVycm9yTG9hZGluZyA9IHRydWU7XG5cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FwbGF6YW1lICcgKyByZWFzb24pO1xuXG4gICAgICBfLnJlbW92ZUNsYXNzKHRtcE92ZXJsYXkucXVlcnlTZWxlY3RvcignLmxvZ28tYXBsYXphbWUnKSwgJ2FuaW1hdGUnKTtcbiAgICAgIGxvYWRpbmdUZXh0LmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwidGV4dC1lcnJvclwiPkVycm9yIGNhcmdhbmRvIHBhc2FyZWxhIGRlIHBhZ288L2Rpdj48YnIvPjxkaXY+PGEgaHJlZj1cIm1haWx0bzpzb3BvcnRlQGFwbGF6YW1lLmNvbT9zdWJqZWN0PScgKyBlbmNvZGVVUkkoJ0NoZWNrb3V0IGVycm9yOiAnICsgcmVhc29uKSArICdcIj5zb3BvcnRlQGFwbGF6YW1lLmNvbTwvYT48L2Rpdj4nO1xuICAgICAgbG9hZGluZ1RleHQuc3R5bGUubGluZUhlaWdodCA9ICcxLjUnO1xuXG4gICAgICAob3B0aW9ucy5vbkVycm9yIHx8IF8ubm9vcCkocmVhc29uKTtcbiAgICB9KTtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrb3V0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uL3Rvb2xzL3Rvb2xzJyksXG4gICAgaHR0cCA9IHJlcXVpcmUoJ2h0dHAtYnJvd3NlcicpO1xuXG5mdW5jdGlvbiBwcm9jZXNzUmVzcG9uc2UocmVzdWx0LCBtZXNzYWdlLCBtZXNzYWdlU3JjLCBzdGFydGVkKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgdmFyIHJlc3BvbnNlcCA9IGh0dHAucGxhaW5SZXNwb25zZShyZXNwb25zZSk7XG4gICAgcmVzcG9uc2VwLmNvbmZpZyA9IG1lc3NhZ2U7XG5cbiAgICBtZXNzYWdlU3JjLnBvc3RNZXNzYWdlKHtcbiAgICAgIGFwbGF6YW1lOiAnaHR0cCcsXG4gICAgICBldmVudDogJ3Jlc3BvbnNlJyxcbiAgICAgIHN0YXJ0ZWQ6IHN0YXJ0ZWQsXG4gICAgICBlbGFwc2VkOiBEYXRlLm5vdygpIC0gc3RhcnRlZCxcbiAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlcFxuICAgIH0sICcqJyk7XG4gIH07XG59XG5cbl8ub25NZXNzYWdlKCdodHRwJywgZnVuY3Rpb24gKGUsIG1lc3NhZ2UpIHtcblxuICB2YXIgc3RhcnRlZCA9IERhdGUubm93KCk7XG5cbiAgaHR0cCggbWVzc2FnZS51cmwsIG1lc3NhZ2UgKVxuICAgIC50aGVuKFxuICAgICAgcHJvY2Vzc1Jlc3BvbnNlKCdzdWNjZXNzJywgbWVzc2FnZSwgZS5zb3VyY2UsIHN0YXJ0ZWQpLFxuICAgICAgcHJvY2Vzc1Jlc3BvbnNlKCdlcnJvcicsIG1lc3NhZ2UsIGUuc291cmNlLCBzdGFydGVkKVxuICAgICk7XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVhZHk6IHRydWUgfTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSAnPHN2ZyBjbGFzcz1cImxpbmUtc2hvcnRcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+JyArXG4nPHBhdGggIGQ9XCJNMzYuNzg4LDgxLjAwOCw1MCw1MFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCI2XCIgZmlsbD1cIm5vbmVcIi8+JyArXG4nPC9zdmc+JyArXG4nPHN2ZyBjbGFzcz1cInNtaWxlXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPicgK1xuJzxnIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBmaWxsPVwibm9uZVwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjc4MDM2NjMzLDAsMCwwLjc4MDM2NjMzLDEwLjUyNjUxMiwxOC4wMDM5OTgpXCI+JyArXG4nPHBhdGggY2xhc3M9XCJzbWlsZS1vdXRsaW5lXCIgc3Ryb2tlLXdpZHRoPVwiMTJcIiBkPVwiTTc1LjI0Miw1Ny41MWMtNS40MzUsNy44MzktMTQuNDk4LDEyLjk3Mi0yNC43NjEsMTIuOTcyLTEwLjI2MiwwLTE5LjMyNS01LjEzMi0yNC43NTgtMTIuOTcyXCIvPicgK1xuJzxwYXRoIGNsYXNzPVwic21pbGUtbGluZVwiIHN0cm9rZS13aWR0aD1cIjcuNVwiIGQ9XCJNNzUuMjQyLDU3LjUxYy01LjQzNSw3LjgzOS0xNC40OTgsMTIuOTcyLTI0Ljc2MSwxMi45NzItMTAuMjYyLDAtMTkuMzI1LTUuMTMyLTI0Ljc1OC0xMi45NzJcIi8+JyArXG4nPC9nPicgK1xuJzwvc3ZnPicgK1xuJzxzdmcgY2xhc3M9XCJsaW5lLWxhcmdlXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPicgK1xuJzxwYXRoIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZD1cIk01MCw1MCw2Ni42ODcsOTIuMjY2XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1taXRlcmxpbWl0PVwiNFwiIHN0cm9rZS1kYXNoYXJyYXk9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGZpbGw9XCJub25lXCIvPicgK1xuJzwvc3ZnPic7XG4iLCIndXNlIHN0cmljdCc7XG5cbndpbmRvdy5tYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEgfHwgd2luZG93LndlYmtpdE1hdGNoTWVkaWEgfHwgd2luZG93Lm1vek1hdGNoTWVkaWEgfHwgd2luZG93Lm1zTWF0Y2hNZWRpYTtcblxudmFyIGFwaSA9IHJlcXVpcmUoJy4uL2NvcmUvYXBpJyksXG4gICAgXyA9IHJlcXVpcmUoJy4uL3Rvb2xzL3Rvb2xzJyksXG4gICAgY3NzSGFjayA9IHJlcXVpcmUoJy4uL3Rvb2xzL2Nzcy1oYWNrJyksXG4gICAgYXBsYXphbWVWZXJzaW9uID0gcmVxdWlyZSgnLi4vLi4vLnRtcC9hcGxhemFtZS12ZXJzaW9uJyksXG4gICAgaXNNb2JpbGUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKCBtYXgtd2lkdGg6IDc2N3B4ICknKSxcbiAgICBsYXN0U2Nyb2xsVG9wO1xuXG52YXIgdG1wT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgIGNzc092ZXJsYXkgPSBjc3NIYWNrKCdvdmVybGF5JyksXG4gICAgY3NzQmx1ciA9IGNzc0hhY2soJ2JsdXInKSxcbiAgICBjc3NNb2RhbCA9IGNzc0hhY2soJ21vZGFsJyk7XG5cbmZ1bmN0aW9uIG1vZGFsIChjb250ZW50LCBvcHRpb25zKSB7XG5cbiAgaWYoIG1vZGFsLmlmcmFtZSApIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsLmlmcmFtZSk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBjc3NPdmVybGF5LmhhY2sodHJ1ZSk7XG4gIGNzc0JsdXIuaGFjayh0cnVlKTtcbiAgY3NzTW9kYWwuaGFjayh0cnVlKTtcblxuICB0bXBPdmVybGF5LmNsYXNzTmFtZSA9ICdhcGxhemFtZS1vdmVybGF5IGFwbGF6YW1lLW92ZXJsYXktc2hvdyc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG1wT3ZlcmxheSk7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgXy5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtYmx1cicpO1xuICB9LCAwKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgXy5yZW1vdmVDbGFzcyh0bXBPdmVybGF5LCAnYXBsYXphbWUtb3ZlcmxheS1zaG93Jyk7XG4gIH0sIGlzTW9iaWxlLm1hdGNoZXMgPyAwIDogNjAwICk7XG5cbiAgbW9kYWwuaWZyYW1lID0gXy5nZXRJRnJhbWUoe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnXG4gICAgICB9KTtcblxuICBtb2RhbC5pZnJhbWUuY2xhc3NOYW1lID0gJ2FwbGF6YW1lLW1vZGFsJztcbiAgLy8gbW9kYWwuaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIG1vZGFsLmlmcmFtZS5jb250ZW50ID0gY29udGVudDtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsLmlmcmFtZSk7XG4gIG1vZGFsLmlmcmFtZS5zcmMgPSBhcGkuc3RhdGljVXJsICsgJ3dpZGdldHMvbW9kYWwvbW9kYWwuaHRtbD92PScgKyBlbmNvZGVVUkkoYXBsYXphbWVWZXJzaW9uKTtcbn1cblxuXy5vbk1lc3NhZ2UoJ21vZGFsJywgZnVuY3Rpb24gKGUsIG1lc3NhZ2UpIHtcblxuICBzd2l0Y2goIG1lc3NhZ2UuZXZlbnQgKSB7XG4gICAgY2FzZSAnb3Blbic6XG4gICAgICBtb2RhbC5yZWZlcnJlciA9IGUuc291cmNlO1xuICAgICAgbW9kYWwubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICBtb2RhbChtZXNzYWdlLmRhdGEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnb3BlbmluZyc6XG4gICAgICBtb2RhbC5pZnJhbWUuc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdvcGVuZWQnOlxuICAgICAgbGFzdFNjcm9sbFRvcCA9IF8uc2Nyb2xsVG9wKCk7XG4gICAgICBlLnNvdXJjZS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGFwbGF6YW1lOiAnbW9kYWwnLFxuICAgICAgICBldmVudDogJ2NvbnRlbnQnLFxuICAgICAgICBjb250ZW50OiBtb2RhbC5pZnJhbWUuY29udGVudFxuICAgICAgfSwgJyonKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Jlc29sdmVkJzpcbiAgICAgIG1vZGFsLnJlZmVycmVyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgYXBsYXphbWU6ICdtb2RhbCcsXG4gICAgICAgIGV2ZW50OiAncmVzb2x2ZWQnLFxuICAgICAgICBuYW1lOiBtb2RhbC5tZXNzYWdlLm5hbWUsXG4gICAgICAgIHZhbHVlOiBtZXNzYWdlLnZhbHVlXG4gICAgICB9LCAnKicpO1xuICAgICAgZGVsZXRlIG1vZGFsLnJlZmVycmVyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY2xvc2luZyc6XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gbW9kYWwuaWZyYW1lLm92ZXJmbG93O1xuICAgICAgXy5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtYmx1cicpO1xuICAgICAgXy5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtdW5ibHVyJyk7XG4gICAgICBfLmFkZENsYXNzKHRtcE92ZXJsYXksICdhcGxhemFtZS1vdmVybGF5LWhpZGUnKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjc3NCbHVyLmhhY2soZmFsc2UpO1xuICAgICAgICBfLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS11bmJsdXInKTtcbiAgICAgIH0sIGlzTW9iaWxlLm1hdGNoZXMgPyAwIDogNjAwICk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjbG9zZSc6XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3NzTW9kYWwuaGFjayhmYWxzZSk7XG4gICAgICB9LCBpc01vYmlsZS5tYXRjaGVzID8gMCA6IDEwMCApO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0bXBPdmVybGF5KTtcbiAgICAgIF8ucmVtb3ZlQ2xhc3ModG1wT3ZlcmxheSwgJ2FwbGF6YW1lLW92ZXJsYXktaGlkZScpO1xuICAgICAgXy5zY3JvbGxUb3AobGFzdFNjcm9sbFRvcCk7XG4gICAgICBpZiggbW9kYWwuaWZyYW1lICkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsLmlmcmFtZSk7XG5cbiAgICAgICAgaWYoIG1vZGFsLnJlZmVycmVyICkge1xuICAgICAgICAgIG1vZGFsLnJlZmVycmVyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGFwbGF6YW1lOiAnbW9kYWwnLFxuICAgICAgICAgICAgZXZlbnQ6ICdkaXNtaXNzJyxcbiAgICAgICAgICAgIG5hbWU6IG1vZGFsLm1lc3NhZ2UubmFtZVxuICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgICAgZGVsZXRlIG1vZGFsLnJlZmVycmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIG1vZGFsLm1lc3NhZ2UgKSB7XG4gICAgICAgICAgZGVsZXRlIG1vZGFsLm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIG1vZGFsLmlmcmFtZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGFsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBpSHR0cCA9IHJlcXVpcmUoJy4uL2NvcmUvYXBpLWh0dHAnKSxcbiAgICBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKSxcbiAgICAkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKSxcbiAgICBjYWNoZSA9IFtdLFxuICAgIHJlcXVlc3RzQ2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gc2ltdWxhdG9yIChhbW91bnQsIF9vcHRpb25zLCBjYWxsYmFjaywgb25FcnJvcikge1xuXG4gIGlmKCBfLmlzRnVuY3Rpb24oX29wdGlvbnMpICkge1xuICAgIG9uRXJyb3IgPSBjYWxsYmFjaztcbiAgICBjYWxsYmFjayA9IF9vcHRpb25zO1xuICAgIF9vcHRpb25zID0ge307XG4gIH0gZWxzZSB7XG4gICAgX29wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fTtcbiAgfVxuXG4gIHZhciBvcHRpb25zID0ge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBhbW91bnQ6IGFtb3VudFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaGFzaCA9IGFtb3VudCArICcsJyArIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpO1xuXG4gIGlmKCByZXF1ZXN0c0NhY2hlW2hhc2hdICkge1xuICAgIHJldHVybiByZXF1ZXN0c0NhY2hlW2hhc2hdLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgKGNhbGxiYWNrIHx8IF8ubm9vcCkoIHJlc3VsdC5jaG9pY2VzLCByZXN1bHQub3B0aW9ucyApO1xuICAgIH0pO1xuICB9XG5cbiAgaWYoIF9vcHRpb25zLnZpZXcgKSB7XG4gICAgb3B0aW9ucy5wYXJhbXMudmlldyA9IF9vcHRpb25zLnZpZXc7XG4gIH1cbiAgaWYoIF9vcHRpb25zLnBheWRheSApIHtcbiAgICBvcHRpb25zLnBhcmFtcy5wYXlkYXkgPSBfb3B0aW9ucy5wYXlkYXk7XG4gIH1cbiAgaWYoIF9vcHRpb25zLnB1YmxpY0tleSApIHtcbiAgICBvcHRpb25zLnB1YmxpY0tleSA9IF9vcHRpb25zLnB1YmxpY0tleTtcbiAgfVxuXG4gIHZhciBmb3VuZENhY2hlZCA9IF8uZmluZChjYWNoZSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5hbW91bnQgPT09IGFtb3VudDtcbiAgfSk7XG5cbiAgcmVxdWVzdHNDYWNoZVtoYXNoXSA9ICggIV9vcHRpb25zLm5vQ2FjaGUgJiYgZm91bmRDYWNoZWQgPyAkcS5yZXNvbHZlKGZvdW5kQ2FjaGVkKSA6IGFwaUh0dHAuZ2V0KCdpbnN0YWxtZW50LXBsYW4tc2ltdWxhdG9yJywgb3B0aW9ucyApLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgY2hvaWNlczogcmVzcG9uc2UuZGF0YS5jaG9pY2VzWzBdLmluc3RhbG1lbnRzLFxuICAgICAgICBvcHRpb25zOiByZXNwb25zZS5kYXRhLm9wdGlvbnMsXG4gICAgICAgIHJlc3BvbnNlOiByZXNwb25zZVxuICAgICAgfTtcbiAgICAgIGNhY2hlLnB1c2gocmVzdWx0KTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KSApXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgKGNhbGxiYWNrIHx8IF8ubm9vcCkoIHJlc3VsdC5jaG9pY2VzLCByZXN1bHQub3B0aW9ucyApO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGlmKCByZXNwb25zZS5zdGF0dXMgPT09IDQwMyApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQXBsYXphbWU6IFBlcm1pc28gZGVuZWdhZG8gdXNhbmRvIGxhIGNsYXZlIHDDumJsaWNhOiAnICsgcmVzcG9uc2UuY29uZmlnLnB1YmxpY0tleSk7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnUmV2aXNhIGxhIGNvbmZpZ3VyYWNpw7NuIGRlIEFwbGF6YW1lLCBwYXJhIGN1YWxxdWllciBkdWRhIHB1ZWRlcyBlc2NyaWJpciBhIGhvbGFAYXBsYXphbWUuY29tJyk7XG4gICAgICB9IGVsc2UgaWYoIF8ua2V5KHJlc3BvbnNlLCAnZGF0YS5lcnJvci5maWVsZHMuYW1vdW50LjAnKSApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQXBsYXphbWU6ICcgKyByZXNwb25zZS5kYXRhLmVycm9yLmZpZWxkcy5hbW91bnRbMF0pO1xuICAgICAgfSBlbHNlIGlmKCBfLmtleShyZXNwb25zZSwgJ2RhdGEuZXJyb3IubWVzc2FnZScpICkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBcGxhemFtZTogJyArIHJlc3BvbnNlLmRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICAob25FcnJvciB8fCBfLm5vb3ApKHJlc3BvbnNlKTtcbiAgICB9KTtcblxuICByZXR1cm4gcmVxdWVzdHNDYWNoZVtoYXNoXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaW11bGF0b3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcHpWZXJzaW9uID0gcmVxdWlyZSgnLi4vLi4vLnRtcC9hcGxhemFtZS12ZXJzaW9uJyksXG4gICAgXyA9IHJlcXVpcmUoJy4uL3Rvb2xzL3Rvb2xzJyksXG4gICAgYXBpID0gcmVxdWlyZSgnLi9hcGknKSxcbiAgICBodHRwID0gcmVxdWlyZSgnaHR0cC1icm93c2VyJyksXG4gICAgcmVuZGVyQWNjZXB0ID0gXy50ZW1wbGF0ZS5jb21waWxlKCdhcHBsaWNhdGlvbi92bmQuYXBsYXphbWU8JSBpZihzYW5kYm94KXsgJT4uc2FuZGJveDwlIH0gJT4udjwlPSB2ZXJzaW9uICU+K2pzb24nKSxcbiAgICBhY2NlcHRIZWFkZXIgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICB2YXIgX2FwaSA9IF8uY29weShhcGkpO1xuICAgICAgaWYoICd2ZXJzaW9uJyBpbiBjb25maWcgfHwgJ2FwaVZlcnNpb24nIGluIGNvbmZpZyApIHtcbiAgICAgICAgX2FwaS52ZXJzaW9uID0gJ3ZlcnNpb24nIGluIGNvbmZpZyA/IGNvbmZpZy52ZXJzaW9uIDogY29uZmlnLmFwaVZlcnNpb247XG4gICAgICB9XG4gICAgICBpZiggJ3NhbmRib3gnIGluIGNvbmZpZyApIHtcbiAgICAgICAgX2FwaS5zYW5kYm94ID0gY29uZmlnLnNhbmRib3g7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVuZGVyQWNjZXB0KF9hcGkpO1xuICAgIH0sXG4gICAgYXV0aG9yaXphdGlvbkhlYWRlciA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgIGNvbmZpZy5wdWJsaWNLZXkgPSBjb25maWcucHVibGljS2V5IHx8IGFwaS5wdWJsaWNLZXk7XG4gICAgICByZXR1cm4gJ0JlYXJlciAnICsgY29uZmlnLnB1YmxpY0tleTtcbiAgICB9O1xuXG52YXIgYXBpSHR0cCA9IHt9O1xuXG5fLmVhY2goWydnZXQnLCAnZGVsZXRlJ10sIGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgYXBpSHR0cFttZXRob2RdID0gZnVuY3Rpb24gKHBhdGgsIG9wdGlvbnMpIHtcbiAgICB2YXIgdXJsID0gXy5qb2luUGF0aChhcGkuaG9zdCwgcGF0aCk7XG4gICAgcmV0dXJuIGh0dHBbbWV0aG9kXSh1cmwsIF8ubWVyZ2Uob3B0aW9ucywgeyBoZWFkZXJzOiB7XG4gICAgICAgIHhBanNWZXJzaW9uOiBhcHpWZXJzaW9uLFxuICAgICAgICBhY2NlcHQ6IGFjY2VwdEhlYWRlcixcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYXV0aG9yaXphdGlvbkhlYWRlclxuICAgICAgfSB9KSApO1xuICB9O1xufSk7XG5cbl8uZWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgYXBpSHR0cFttZXRob2RdID0gZnVuY3Rpb24gKHBhdGgsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICB2YXIgdXJsID0gXy5qb2luUGF0aChhcGkuaG9zdCwgcGF0aCk7XG4gICAgcmV0dXJuIGh0dHBbbWV0aG9kXSh1cmwsIGRhdGEsIF8ubWVyZ2Uob3B0aW9ucywgeyBoZWFkZXJzOiB7XG4gICAgICAgIHhBanNWZXJzaW9uOiBhcHpWZXJzaW9uLFxuICAgICAgICBhY2NlcHQ6IGFjY2VwdEhlYWRlcixcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYXV0aG9yaXphdGlvbkhlYWRlclxuICAgICAgfSB9KSApO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXBpSHR0cDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGhvc3Q6ICdodHRwczovL2FwaS5hcGxhemFtZS5jb20vJyxcbiAgLy8gaG9zdDogJ2h0dHBzOi8vYXBpLmFwbGF6YW1lLmNvbS8nLFxuICBzdGF0aWNVcmw6ICdodHRwczovL2FwbGF6YW1lLmNvbS9zdGF0aWMvJyxcbiAgdmVyc2lvbjogMSxcbiAgY2hlY2tvdXRWZXJzaW9uOiAxLFxuICBzYW5kYm94OiBmYWxzZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIF86IHJlcXVpcmUoJy4uL3Rvb2xzL3Rvb2xzJyksXG4gIGluaXQ6IHJlcXVpcmUoJy4vaW5pdCcpLFxuICBhcGlHZXQ6IHJlcXVpcmUoJy4vYXBpLWh0dHAnKS5nZXQsXG4gIGFwaVBvc3Q6IHJlcXVpcmUoJy4vYXBpLWh0dHAnKS5wb3N0LFxuICBhcGlEZWxldGU6IHJlcXVpcmUoJy4vYXBpLWh0dHAnKVsnZGVsZXRlJ10sXG4gIGFwaVB1dDogcmVxdWlyZSgnLi9hcGktaHR0cCcpLnB1dCxcbiAgdmVyc2lvbjogcmVxdWlyZSgnLi4vLi4vLnRtcC9hcGxhemFtZS12ZXJzaW9uJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcGkgPSByZXF1aXJlKCcuL2FwaScpLFxuICAgIF8gPSByZXF1aXJlKCcuLi90b29scy90b29scycpO1xuXG5mdW5jdGlvbiBpbml0IChvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmKCB0eXBlb2Ygb3B0aW9ucy52ZXJzaW9uID09PSAnc3RyaW5nJyApIHtcbiAgICB2YXIgbWF0Y2hWZXJzaW9uID0gb3B0aW9ucy52ZXJzaW9uLm1hdGNoKC9edj8oXFxkKShcXC4oXFxkKSk/JC8pO1xuXG4gICAgaWYoICFtYXRjaFZlcnNpb24gKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ZlcnNpb24gbWlzbWF0Y2gsIHNob3VsZCBiZSBsaWtlIFxcJ3YxLjJcXCcnKTtcbiAgICB9XG5cbiAgICBvcHRpb25zLnZlcnNpb24gPSBOdW1iZXIobWF0Y2hWZXJzaW9uWzFdKTtcblxuICAgIGlmKCBtYXRjaFZlcnNpb25bM10gIT09IHVuZGVmaW5lZCApIHtcbiAgICAgIG9wdGlvbnMuY2hlY2tvdXRWZXJzaW9uID0gTnVtYmVyKG1hdGNoVmVyc2lvblszXSk7XG4gICAgfVxuICB9XG5cbiAgaWYoIHR5cGVvZiBvcHRpb25zLnNhbmRib3ggPT09ICdzdHJpbmcnICkge1xuICAgIG9wdGlvbnMuc2FuZGJveCA9IG9wdGlvbnMuc2FuZGJveCA9PT0gJ3RydWUnO1xuICB9XG5cbiAgaWYoIHR5cGVvZiBvcHRpb25zLmFuYWx5dGljcyA9PT0gJ3N0cmluZycgKSB7XG4gICAgb3B0aW9ucy5hbmFseXRpY3MgPSBvcHRpb25zLmFuYWx5dGljcyA9PT0gJ3RydWUnO1xuICB9XG5cbiAgXy5leHRlbmQoYXBpLCBvcHRpb25zKTtcblxuICBfLmxvZygnYXBsYXphbWUuaW5pdCcsIGFwaSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBsYXphbWUpIHtcblxuICB2YXIgXyA9IGFwbGF6YW1lLl8sXG4gICAgICBzY3JpcHQgPSBfLmN1cnJlbnRTY3JpcHQsXG4gICAgICBkYXRhQXBsYXphbWUgPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWFwbGF6YW1lJyksXG4gICAgICBvcHRpb25zID0gc2NyaXB0LnNyYyAmJiAoL1xcPy8udGVzdChzY3JpcHQuc3JjKSA/IF8uZGVzZXJpYWxpemUoc2NyaXB0LnNyYy5tYXRjaCgvKC4qPylcXD8oLiopLylbMl0pIDoge30pIHx8IHt9O1xuXG4gIGlmKCBvcHRpb25zLnNhbmRib3ggKSB7XG4gICAgb3B0aW9ucy5zYW5kYm94ID0gb3B0aW9ucy5zYW5kYm94ID09PSAndHJ1ZScgfHwgb3B0aW9ucy5zYW5kYm94ID09PSAnMSc7XG4gIH1cblxuICBpZiggZGF0YUFwbGF6YW1lICkge1xuXG4gICAgaWYoIC9cXDovLnRlc3QoZGF0YUFwbGF6YW1lKSApIHtcbiAgICAgIGRhdGFBcGxhemFtZS5zcGxpdCgnLCcpLmZvckVhY2goZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgICAgdmFyIGtleXMgPSBwYXJ0Lm1hdGNoKC9eKFteXFw6XSspXFw6KC4qKS8pO1xuICAgICAgICBvcHRpb25zW2tleXNbMV0udHJpbSgpXSA9IGtleXNbMl0udHJpbSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmKCAhb3B0aW9ucy5wdWJsaWNLZXkgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncHVibGljS2V5IG1pc3NpbmcgaW4gZGF0YS1hcGxhemFtZScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLnB1YmxpY0tleSA9IGRhdGFBcGxhemFtZTtcbiAgICB9XG5cbiAgICBpZiggc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1hcGktaG9zdCcpICkge1xuICAgICAgb3B0aW9ucy5ob3N0ID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1hcGktaG9zdCcpO1xuICAgIH1cblxuICAgIGlmKCBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLXZlcnNpb24nKSApIHtcbiAgICAgIG9wdGlvbnMudmVyc2lvbiA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmVyc2lvbicpO1xuICAgIH1cblxuICAgIGlmKCBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLXNhbmRib3gnKSApIHtcbiAgICAgIG9wdGlvbnMuc2FuZGJveCA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2FuZGJveCcpO1xuICAgIH1cblxuICAgIGlmKCBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWFuYWx5dGljcycpICkge1xuICAgICAgb3B0aW9ucy5hbmFseXRpY3MgPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWFuYWx5dGljcycpO1xuICAgIH1cblxuICAgIGlmKCBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXRpYy11cmwnKSApIHtcbiAgICAgIG9wdGlvbnMuc3RhdGljVXJsID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGF0aWMtdXJsJyk7XG4gICAgfVxuXG4gICAgaWYoIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbGJhY2snKSApIHtcbiAgICAgIC8vIGlmKCB0eXBlb2YgZ2xvYmFsW3NjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbGJhY2snKV0gIT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAvLyAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgc2hvdWxkIGJlIGEgZ2xvYmFsIGZ1bmN0aW9uJyk7XG4gICAgICAvLyB9XG5cbiAgICAgIG9wdGlvbnMuY2FsbGJhY2sgPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWNhbGxiYWNrJyk7XG4gICAgICAvLyBfLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vICAgZ2xvYmFsW3NjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbGJhY2snKV0oYXBsYXphbWUpO1xuICAgICAgLy8gfSk7XG4gICAgfVxuICB9XG5cbiAgYXBsYXphbWUuaW5pdChvcHRpb25zKTtcblxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBsYXphbWUpIHtcbiAgdmFyIF8gPSBhcGxhemFtZS5fLFxuICAgICAgJHEgPSByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJyk7XG5cbiAgZnVuY3Rpb24gYnV0dG9uc0xvb2t1cCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQgPSBlbGVtZW50IHx8IGRvY3VtZW50O1xuICAgIGlmKCAhZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgYnRucyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYXBsYXphbWUtYnV0dG9uXScpO1xuXG4gICAgaWYoIGJ0bnMubGVuZ3RoICkge1xuICAgICAgLy8gY29uc29sZS5sb2coJy5idG4ocyknLCBidG5zKTtcbiAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuXG4gICAgICBfLmVhY2goYnRucywgZnVuY3Rpb24gKGJ0bikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnLmJ0bicsIGFyZ3VtZW50cywgYnRucyk7XG4gICAgICAgIHZhciBidG5JZCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXBsYXphbWUtYnV0dG9uJyksXG4gICAgICAgICAgICBidG5QYXJhbXMgPSB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiAnW2RhdGEtYXBsYXphbWUtYnV0dG9uJyArICggYnRuSWQgPyAoJz1cXFwiJyArIGJ0bklkICsgJ1xcXCInKSA6ICcnICkgKyAnXSwgW2RhdGEtYXBsYXphbWUtYnV0dG9uLWluZm8nICsgKCBidG5JZCA/ICgnPVxcXCInICsgYnRuSWQgKyAnXFxcIicpIDogJycgKSArICddJyxcbiAgICAgICAgICAgICAgcGFyZW50OiBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmVudCcpLFxuICAgICAgICAgICAgICBwdWJsaWNLZXk6IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHVibGljLWtleScpLFxuICAgICAgICAgICAgICBhbW91bnQ6IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW1vdW50JyksXG4gICAgICAgICAgICAgIGN1cnJlbmN5OiBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbmN5JykgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBzYW5kYm94OiBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXNhbmRib3gnKSA/IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2FuZGJveCcpID09PSAndHJ1ZScgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIGNvdW50cnk6IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY291bnRyeScpIHx8IHVuZGVmaW5lZFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBwcm9taXNlcy5wdXNoKCBhcGxhemFtZS5idXR0b24oYnRuUGFyYW1zKSApO1xuICAgICAgfSk7XG5cbiAgICAgIGlmKCBwcm9taXNlcy5sZW5ndGggKSB7XG4gICAgICAgIHJldHVybiAkcS5hbGwocHJvbWlzZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICRxLnJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICRxLnJlc29sdmUoKTtcbiAgICB9XG4gIH1cblxuICBfLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBidXR0b25zTG9va3VwKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBfLmxpdmVET00uc3Vic2NyaWJlKGJ1dHRvbnNMb29rdXApO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gYnV0dG9uc0xvb2t1cDtcblxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBsYXphbWUpIHtcblxuICB2YXIgXyA9IGFwbGF6YW1lLl8sXG4gICAgICAkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKSxcbiAgICAgIEV2ZW50cyA9IHJlcXVpcmUoJ2V2ZW50cy13cmFwcGVyJyksXG4gICAgICBhcGkgPSByZXF1aXJlKCcuLi9jb3JlL2FwaScpLFxuICAgICAgaXNNb2JpbGUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKCBtYXgtd2lkdGg6IDc2N3B4ICknKSxcbiAgICAgIGVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcblxuICBmdW5jdGlvbiBnZXRRdHkgKHF0eVNlbGVjdG9yKSB7XG4gICAgaWYoICFfLmlzU3RyaW5nKHF0eVNlbGVjdG9yKSApIHtcbiAgICAgIGNvbnNvbGUud2Fybignd2FybmluZzogZGF0YS1xdHkgc2hvdWxkIGJlIGFuIHN0cmluZy4gcGU6IGZvcm0jYXJ0aWNsZSAuZmluYWwtcHJpY2UgJyk7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgdmFyIHF0eUVsZW1lbnQ7XG4gICAgdHJ5IHtcbiAgICAgIHF0eUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF0eVNlbGVjdG9yKTtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgY29uc29sZS53YXJuKGVyci5tZXNzYWdlICsgJ1xcbmRhdGEtcXR5IHNob3VsZCBiZSBhbiBzdHJpbmcuIHBlOiBmb3JtI2FydGljbGUgLmZpbmFsLXByaWNlICcpO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgc3dpdGNoKCBxdHlFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgKSB7XG4gICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgIHJldHVybiBOdW1iZXIoIHF0eUVsZW1lbnQudmFsdWUgKTtcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIHJldHVybiBOdW1iZXIoIHF0eUVsZW1lbnQucXVlcnlTZWxlY3Rvcignb3B0aW9uW3NlbGVjdGVkXScpLnZhbHVlICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gTnVtYmVyKCBxdHlFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjbXNQcmljZVNlbGVjdG9yID0gW1xuICAgICdmb3JtI3Byb2R1Y3RfYWRkdG9jYXJ0X2Zvcm0gLnNwZWNpYWwtcHJpY2UgLnByaWNlJywgLy8gbWFnZW50b1xuICAgICdmb3JtI3Byb2R1Y3RfYWRkdG9jYXJ0X2Zvcm0gLnJlZ3VsYXItcHJpY2UgLnByaWNlJywgLy8gbWFnZW50b1xuICAgICcjcHJvZHVjdC1pbmZvIC5zcGVjaWFsLXByaWNlIC5wcmljZScsIC8vIG1hZ2VudG9cbiAgICAnI3Byb2R1Y3QtaW5mbyAucmVndWxhci1wcmljZSAucHJpY2UnLCAvLyBtYWdlbnRvXG4gICAgJ2Zvcm0jYnV5X2Jsb2NrICNvdXJfcHJpY2VfZGlzcGxheScsIC8vIHByZXN0YXNob3BcbiAgICAnI21haW4gW2l0ZW10eXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvUHJvZHVjdFwiXSBbaXRlbXR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9PZmZlclwiXSAucHJpY2UgLmFtb3VudCBpbnMnLCAvLyB3b29jb21tZXJjZVxuICAgICcjbWFpbiBbaXRlbXR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9Qcm9kdWN0XCJdIFtpdGVtdHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL09mZmVyXCJdIC5wcmljZSAuYW1vdW50JyAvLyB3b29jb21tZXJjZVxuICBdLFxuICBjbXNRdHlTZWxlY3RvciA9IFtcbiAgICAnZm9ybSNwcm9kdWN0X2FkZHRvY2FydF9mb3JtIGlucHV0W25hbWU9XCJxdHlcIl0nLCAvLyBtYWdlbnRvXG4gICAgJ2Zvcm0jYnV5X2Jsb2NrIGlucHV0W25hbWU9XCJxdHlcIl0nLCAvLyBwcmVzdGFzaG9wXG4gICAgJ2Zvcm0jcHJvZHVjdC1vcHRpb25zLWZvcm0gYnV0dG9uW2RhdGEtaWQ9cXR5XScsIC8vIGN1c3RvbVxuICAgICcjbWFpbiBbaXRlbXR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9Qcm9kdWN0XCJdIGZvcm0uY2FydCBpbnB1dFtuYW1lPVwicXVhbnRpdHlcIl0nIC8vIHdvb2NvbW1lcmNlXG4gIF07XG5cbiAgZnVuY3Rpb24gbWF0Y2hTZWxlY3RvciAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cblxuICBmdW5jdGlvbiBhbW91bnRHZXR0ZXIgKHdpZGdldEVsZW1lbnQpIHtcbiAgICB2YXIgcHJpY2VTZWxlY3RvciA9IHdpZGdldEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXByaWNlJyksXG4gICAgICAgIHF0eVNlbGVjdG9yID0gd2lkZ2V0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcXR5JyksXG4gICAgICAgIGF1dG9EaXNjb3ZlcmVkID0gZmFsc2U7XG5cbiAgICBpZiggcHJpY2VTZWxlY3RvciApIHtcbiAgICAgIC8vIHRyeXtcbiAgICAgIC8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwcmljZVNlbGVjdG9yKTtcbiAgICAgIC8vIH0gY2F0Y2goZXJyKSB7XG4gICAgICAvLyAgIHByaWNlU2VsZWN0b3IgPSBudWxsO1xuICAgICAgLy8gICBjb25zb2xlLndhcm4oZXJyLm1lc3NhZ2UpO1xuICAgICAgLy8gfVxuICAgICAgaWYoIHF0eVNlbGVjdG9yICkge1xuICAgICAgICB0cnl7XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdHlTZWxlY3Rvcik7XG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgcXR5U2VsZWN0b3IgPSBudWxsO1xuICAgICAgICAgIGNvbnNvbGUud2FybihlcnIubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcHJpY2VTZWxlY3RvciA9IF8uZmluZChjbXNQcmljZVNlbGVjdG9yLCBtYXRjaFNlbGVjdG9yKTtcblxuICAgICAgaWYoIHByaWNlU2VsZWN0b3IgKSB7XG4gICAgICAgIHF0eVNlbGVjdG9yID0gXy5maW5kKGNtc1F0eVNlbGVjdG9yLCBtYXRjaFNlbGVjdG9yKTtcbiAgICAgICAgYXV0b0Rpc2NvdmVyZWQgPSB0cnVlO1xuXG4gICAgICAgIF8ubG9nKCdhdXRvLWRpc2NvdmVyZWQgcHJpY2Ugc2VsZWN0b3InLCBwcmljZVNlbGVjdG9yLCBxdHlTZWxlY3Rvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGdldHRlciA9IHByaWNlU2VsZWN0b3IgPyBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcXR5ID0gcXR5U2VsZWN0b3IgPyBnZXRRdHkoIHF0eVNlbGVjdG9yICkgOiAxLCBwcmljZUVsZW1lbnQ7XG4gICAgICB0cnkge1xuICAgICAgICBwcmljZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCBwcmljZVNlbGVjdG9yICk7XG4gICAgICB9IGNhdGNoKGVycikge31cblxuICAgICAgdmFyIGFtb3VudCA9IHByaWNlRWxlbWVudCA/IHByaWNlRWxlbWVudC52YWx1ZSA6ICcwJztcblxuICAgICAgaWYoIHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnICkge1xuICAgICAgICBpZiggIS9cXGQrWywuXVxcZCsvLnRlc3QocHJpY2VFbGVtZW50LnRleHRDb250ZW50KSAmJiBwcmljZUVsZW1lbnQuY2hpbGRyZW4gJiYgcHJpY2VFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCApIHtcbiAgICAgICAgICBhbW91bnQgPSAnJztcblxuICAgICAgICAgIHZhciBwYXJ0ID0gcHJpY2VFbGVtZW50LmZpcnN0Q2hpbGQsIG1hdGNoZWQ7XG5cbiAgICAgICAgICB3aGlsZSggcGFydCApIHtcbiAgICAgICAgICAgIGlmKCAvWywuXS8udGVzdChhbW91bnQpICkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaGVkID0gKCBwYXJ0LnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IFRleHRdJyA/IHBhcnQuZGF0YSA6IHBhcnQudGV4dENvbnRlbnQgKS5tYXRjaCgvW1xcZCwuXSsvKTtcblxuICAgICAgICAgICAgaWYoIG1hdGNoZWQgKSB7XG4gICAgICAgICAgICAgIGFtb3VudCArPSAoYW1vdW50ICYmICEvXlssLl0vLnRlc3QobWF0Y2hlZFswXSkgPyAnLicgOiAnJykgKyBtYXRjaGVkWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYXJ0ID0gcGFydC5uZXh0U2libGluZztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYW1vdW50ID0gcHJpY2VFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfLnBhcnNlUHJpY2UoIGFtb3VudCApO1xuICAgIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyByZXR1cm4gTnVtYmVyKCB3aWRnZXRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1hbW91bnQnKSApO1xuICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICBnZXR0ZXIucHJpY2VTZWxlY3RvciA9IHByaWNlU2VsZWN0b3I7XG4gICAgZ2V0dGVyLnF0eVNlbGVjdG9yID0gcXR5U2VsZWN0b3I7XG4gICAgZ2V0dGVyLmF1dG9EaXNjb3ZlcmVkID0gYXV0b0Rpc2NvdmVyZWQ7XG5cbiAgICByZXR1cm4gZ2V0dGVyO1xuICB9XG5cbiAgZnVuY3Rpb24gSWZyYW1lICh1cmwpIHtcbiAgICB2YXIgZWwgPSBfLmdldElGcmFtZSh7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzQwcHgnIH0pLFxuICAgICAgICBpZnJhbWUgPSB0aGlzO1xuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLmVsLnNyYyA9IHVybDtcblxuICAgIG5ldyBFdmVudHMgKHRoaXMpO1xuXG4gICAgdGhpcy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ2xvYWQnLCBudWxsLCB0aGlzKTtcbiAgICB9O1xuXG4gICAgXy5vbk1lc3NhZ2UoJ3NpbXVsYXRvcicsIGZ1bmN0aW9uIChlLCBtZXNzYWdlKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnbWVzc2FnZS5zaW11bGF0b3InLCBlLCBtZXNzYWdlKTtcbiAgICAgIGlmKCBlLnNvdXJjZSA9PT0gZWwuY29udGVudFdpbmRvdyApIHtcbiAgICAgICAgaWZyYW1lLnRyaWdnZXIoJ21lc3NhZ2U6JyArIG1lc3NhZ2UuZXZlbnQsIFttZXNzYWdlXSwgdGhpcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKCdtZXNzYWdlOnJlc2l6ZScsIGZ1bmN0aW9uIChlLCBtZXNzYWdlKSB7XG4gICAgICBlbC5zdHlsZS5oZWlnaHQgPSBtZXNzYWdlLmhlaWdodCArICdweCc7XG4gICAgfSk7XG4gIH1cblxuICBJZnJhbWUucHJvdG90eXBlLm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgdmFyIF9kYXRhID0gXy5leHRlbmQoe1xuICAgICAgYXBsYXphbWU6ICdzaW11bGF0b3InLFxuICAgICAgZXZlbnQ6IGV2ZW50TmFtZSxcbiAgICAgIG1vYmlsZTogaXNNb2JpbGUubWF0Y2hlc1xuICAgIH0sIGRhdGEgfHwge30pO1xuICAgIGlmKCB0aGlzLmVsLmNvbnRlbnRXaW5kb3cgKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaWZyYW1lIG1lc3NhZ2UnLCBldmVudE5hbWUsIF9kYXRhLCB0aGlzKTtcbiAgICAgIHRoaXMuZWwuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShfZGF0YSwgJyonKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdpZnJhbWUgY29udGVudFdpbmRvdyBtaXNzaW5nJywgdGhpcyk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIG1heEluc3RhbG1lbnRzIChwcmV2LCBjaG9pY2UpIHtcbiAgICBpZiggcHJldiA9PT0gbnVsbCApIHtcbiAgICAgIHJldHVybiBjaG9pY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjaG9pY2UubnVtX2luc3RhbG1lbnRzID4gcHJldi5udW1faW5zdGFsbWVudHMgPyBjaG9pY2UgOiBwcmV2O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdpZGdldCAobWV0YSkge1xuICAgIGlmKCAhbWV0YS5vcHRpb25zLndpZGdldCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBnZXRXaWRnZXQuc2VyaWFsID0gZ2V0V2lkZ2V0LnNlcmlhbCA/IGdldFdpZGdldC5zZXJpYWwgKyAxIDogMTtcblxuICAgIHZhciB3aWRnZXQsXG4gICAgICAgIGlkID0gZ2V0V2lkZ2V0LnNlcmlhbDtcblxuICAgIGlmKCBtZXRhLm9wdGlvbnMud2lkZ2V0LnR5cGUgPT09ICdidXR0b24nICkge1xuICAgICAgd2lkZ2V0ID0gbmV3IElmcmFtZSggYXBpLnN0YXRpY1VybCArICd3aWRnZXRzL3NpbXVsYXRvci9zaW11bGF0b3IuaHRtbD8nICsgRGF0ZS5ub3coKSArICcmc2ltdWxhdG9yPScgKyBpZCApO1xuXG4gICAgICB3aWRnZXQub24oJ21lc3NhZ2U6cmVxdWlyZS5jaG9pY2VzIGNob2ljZXMudXBkYXRlJywgZnVuY3Rpb24gKGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgaWYoIG1lc3NhZ2UgJiYgbWVzc2FnZS5zaW11bGF0b3JJZCAmJiBtZXNzYWdlLnNpbXVsYXRvcklkICE9PSBpZCApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coZSwgbWV0YSwgbWVzc2FnZSk7XG4gICAgICAgIHdpZGdldC5tZXNzYWdlKCdjaG9pY2VzJywge1xuICAgICAgICAgIGFtb3VudDogbWV0YS5hbW91bnQsXG4gICAgICAgICAgY2hvaWNlOiBtZXRhLmNob2ljZXMucmVkdWNlKG1heEluc3RhbG1lbnRzLCBudWxsKSxcbiAgICAgICAgICBjaG9pY2VzOiBtZXRhLmNob2ljZXMsXG4gICAgICAgICAgb3B0aW9uczogbWV0YS5vcHRpb25zXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHdpZGdldC5vbignY2hvaWNlcy51cGRhdGluZycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHdpZGdldC5tZXNzYWdlKCdsb2FkaW5nJyk7XG4gICAgICB9KTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBfLnRlbXBsYXRlLnB1dCgnd2lkZ2V0LXJhdycsIHJlcXVpcmUoJy4uLy4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy93aWRnZXQtcmF3JykgKTtcbiAgICAgIHdpZGdldCA9IHsgZWw6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIH07XG4gICAgICBuZXcgRXZlbnRzKHdpZGdldCk7XG5cbiAgICAgIHdpZGdldC5lbC5pbm5lckhUTUwgPSBfLnRlbXBsYXRlKCd3aWRnZXQtcmF3Jywge1xuICAgICAgICBnZXRBbW91bnQ6IF8uZ2V0QW1vdW50LFxuICAgICAgICBhbW91bnQ6IG1ldGEuYW1vdW50LFxuICAgICAgICBjaG9pY2U6IG1ldGEuY2hvaWNlcy5yZWR1Y2UobWF4SW5zdGFsbWVudHMsIG51bGwpLFxuICAgICAgICBjaG9pY2VzOiBtZXRhLmNob2ljZXMsXG4gICAgICAgIG9wdGlvbnM6IG1ldGEub3B0aW9uc1xuICAgICAgfSk7XG5cbiAgICAgIHdpZGdldC5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICBhcGxhemFtZTogJ21vZGFsJyxcbiAgICAgICAgICBldmVudDogJ29wZW4nLFxuICAgICAgICAgIG5hbWU6ICdpbnN0YWxtZW50cycsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY2FyZDogXy50ZW1wbGF0ZS5jb21waWxlKCByZXF1aXJlKCcuLi8uLi8udG1wL3NpbXVsYXRvci90ZW1wbGF0ZXMvbW9kYWwtaW5zdGFsbWVudHMnKSApKHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRDaG9pY2U6IG1ldGEuY2hvaWNlcy5yZWR1Y2UobWF4SW5zdGFsbWVudHMsIG51bGwpLFxuICAgICAgICAgICAgICBjaG9pY2VzOiBtZXRhLmNob2ljZXMsXG4gICAgICAgICAgICAgIGdldEFtb3VudDogXy5nZXRBbW91bnQsXG4gICAgICAgICAgICAgIG1vbnRoczogZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbSA+IDEgPyAnbWVzZXMnIDogJ21lcyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9LCAnKicpO1xuXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB3aWRnZXQuaWQgPSBpZDtcblxuICAgIHJldHVybiB3aWRnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVdpZGdldCAod2lkZ2V0LCB3aWRnZXRXcmFwcGVyLCBzZWxlY3Rvcikge1xuICAgIGlmKCAhc2VsZWN0b3IgKSB7XG4gICAgICB3aWRnZXRXcmFwcGVyLmFwcGVuZENoaWxkKHdpZGdldC5lbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBzZXVkb0xvY2F0b3I7XG4gICAgc2VsZWN0b3IgPSBzZWxlY3Rvci50cmltKCkucmVwbGFjZSgvOihcXHcrPykkLywgZnVuY3Rpb24gKG1hdGNoZWQsIGxvY2F0b3IpIHtcbiAgICAgIHBzZXVkb0xvY2F0b3IgPSBsb2NhdG9yO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuXG4gICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYoIGVsICkge1xuICAgICAgaWYoIHBzZXVkb0xvY2F0b3IgKSB7XG4gICAgICAgIHN3aXRjaCggcHNldWRvTG9jYXRvciApIHtcbiAgICAgICAgICBjYXNlICdhZnRlcic6XG4gICAgICAgICAgICBpZiggZWwubmV4dEVsZW1lbnRTaWJsaW5nICkge1xuICAgICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZSh3aWRnZXQuZWwsIGVsLm5leHRFbGVtZW50U2libGluZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHdpZGdldC5lbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdiZWZvcmUnOlxuICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUod2lkZ2V0LmVsLCBlbCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwc2V1ZG9Mb2NhdG9yICcgKyBwc2V1ZG9Mb2NhdG9yICsgJyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5hcHBlbmRDaGlsZCh3aWRnZXQuZWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGV2YWxXaWRnZXQgKHdpZGdldFdyYXBwZXIpIHtcbiAgICB2YXIgbWV0YSwgdXBkYXRlRGF0YSA9IGZhbHNlLCBkZXRlY3RlZEFtb3VudCwgc2ltdWxhdG9yT3B0aW9ucyA9IHt9O1xuXG4gICAgaWYoIHdpZGdldFdyYXBwZXIuX19hcHpfd2lkZ2V0X18gKSB7XG4gICAgICBtZXRhID0gd2lkZ2V0V3JhcHBlci5fX2Fwel93aWRnZXRfXztcblxuICAgICAgZGV0ZWN0ZWRBbW91bnQgPSBtZXRhLmdldEFtb3VudCgpO1xuICAgICAgaWYoIGRldGVjdGVkQW1vdW50ICYmIG1ldGEuYW1vdW50ICE9PSBkZXRlY3RlZEFtb3VudCApIHtcbiAgICAgICAgdXBkYXRlRGF0YSA9IHRydWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdpZGdldFdyYXBwZXIsIG1ldGEuYW1vdW50LCBtZXRhLmdldEFtb3VudCgpICk7XG4gICAgICAgIG1ldGEuYW1vdW50ID0gbWV0YS5nZXRBbW91bnQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWV0YSA9IHsgZ2V0QW1vdW50OiBhbW91bnRHZXR0ZXIod2lkZ2V0V3JhcHBlcikgfTtcbiAgICAgIG1ldGEuYW1vdW50ID0gd2lkZ2V0V3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW1vdW50JykgPyBOdW1iZXIod2lkZ2V0V3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW1vdW50JykpIDogbWV0YS5nZXRBbW91bnQoKTtcbiAgICAgIHVwZGF0ZURhdGEgPSB0cnVlO1xuICAgICAgaWYoIG1ldGEuZ2V0QW1vdW50LnF0eVNlbGVjdG9yICkge1xuICAgICAgICBtZXRhLnF0eSA9IGdldFF0eShtZXRhLmdldEFtb3VudC5xdHlTZWxlY3RvcikgfHwgMTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygnbmV3IHdhdGNoZXInKTtcbiAgICAgICAgbWV0YS53YXRjaFF0eSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiggIWRvY3VtZW50LmJvZHkuY29udGFpbnMod2lkZ2V0V3JhcHBlcikgKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKG1ldGEud2F0Y2hRdHkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgcXR5ID0gZ2V0UXR5KG1ldGEuZ2V0QW1vdW50LnF0eVNlbGVjdG9yKTtcbiAgICAgICAgICBpZiggcXR5ICE9PSBtZXRhLnF0eSApIHtcbiAgICAgICAgICAgIG1ldGEucXR5ID0gcXR5O1xuICAgICAgICAgICAgZXZhbFdpZGdldCh3aWRnZXRXcmFwcGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDI1MCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIHdpZGdldFdyYXBwZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXcnKSApIHtcbiAgICAgIHNpbXVsYXRvck9wdGlvbnMudmlldyA9IHdpZGdldFdyYXBwZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXcnKTtcbiAgICB9XG5cbiAgICBpZiggbWV0YS5hbW91bnQgJiYgbWV0YS5nZXRBbW91bnQucXR5U2VsZWN0b3IgKSB7XG4gICAgICBtZXRhLmFtb3VudCAqPSAoIGdldFF0eShtZXRhLmdldEFtb3VudC5xdHlTZWxlY3RvcikgfHwgMSApO1xuICAgIH1cbiAgICBpZiggbWV0YS5hbW91bnQgJiYgdXBkYXRlRGF0YSApIHtcbiAgICAgIGlmKCBtZXRhLndpZGdldCAmJiBtZXRhLndpZGdldC5tZXNzYWdlICkge1xuICAgICAgICBtZXRhLndpZGdldC5tZXNzYWdlKCdsb2FkaW5nJyk7XG4gICAgICB9XG4gICAgICBhcGxhemFtZS5zaW11bGF0b3IoIG1ldGEuYW1vdW50LCBzaW11bGF0b3JPcHRpb25zLCBmdW5jdGlvbiAoX2Nob2ljZXMsIF9vcHRpb25zKSB7XG4gICAgICAgIF9vcHRpb25zLndpZGdldCA9IF9vcHRpb25zLndpZGdldCB8fCB7fTtcbiAgICAgICAgaWYoIF9vcHRpb25zLndpZGdldC5kaXNhYmxlZCApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBtZXRhLmNob2ljZXMgPSBfY2hvaWNlcztcbiAgICAgICAgbWV0YS5vcHRpb25zID0gX29wdGlvbnM7XG5cbiAgICAgICAgbWV0YS53aWRnZXQgPSBtZXRhLndpZGdldCB8fCBnZXRXaWRnZXQobWV0YSk7XG5cbiAgICAgICAgaWYoIG1ldGEud2lkZ2V0ICYmICFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKG1ldGEud2lkZ2V0LmVsKSApIHtcbiAgICAgICAgICBwbGFjZVdpZGdldChtZXRhLndpZGdldCwgd2lkZ2V0V3JhcHBlciwgd2lkZ2V0V3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9jYXRpb24nKSB8fCBfb3B0aW9ucy53aWRnZXQubG9jYXRpb24gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGEud2lkZ2V0LnRyaWdnZXIoJ2Nob2ljZXMudXBkYXRlJyk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCBtZXRhLndpZGdldCAmJiBtZXRhLndpZGdldC5tZXNzYWdlICkge1xuICAgICAgICAgIG1ldGEud2lkZ2V0Lm1lc3NhZ2UoJ2Fib3J0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIG1ldGEud2lkZ2V0ICYmIGRvY3VtZW50LmJvZHkuY29udGFpbnMobWV0YS53aWRnZXQuZWwpICkge1xuICAgICAgICAgIHZhciBwYXJlbnQgPSBtZXRhLndpZGdldC5lbC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChtZXRhLndpZGdldC5lbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHdpZGdldFdyYXBwZXIuX19hcHpfd2lkZ2V0X18gPSBtZXRhO1xuICB9XG5cbiAgZnVuY3Rpb24gd2lkZ2V0c0xvb2t1cCAoZWxlbWVudCkge1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuXG4gICAgZWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFwbGF6YW1lLXNpbXVsYXRvcl0nKSwgZXZhbFdpZGdldCApO1xuXG4gICAgcmV0dXJuIHByb21pc2VzLmxlbmd0aCA/ICRxLmFsbChwcm9taXNlcykgOiAkcS5yZXNvbHZlKCk7XG4gIH1cblxuICB3aWRnZXRzTG9va3VwKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgXy5saXZlRE9NLnN1YnNjcmliZSh3aWRnZXRzTG9va3VwKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHdpZGdldHNMb29rdXA7XG5cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9lcnJvckRhdGEoZXJyKSB7XG4gIChjb25zb2xlLmluZm8gfHwgY29uc29sZS5sb2cpKCclY1tub24gYmxvY2tpbmcgZXJyb3JdICVjYXBsYXphbWUuanNcXG5cXG4nLCAnZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjMjY3QkJEOycsICdjb2xvcjogIzI2N0JCRDsnKTtcblxuICB2YXIgZmlsZW5hbWUgPSBlcnIuZmlsZU5hbWUgPyBlcnIuZmlsZU5hbWUubGFzdEluZGV4T2YoJy8nKSA6ICc8bm90IGRlZmluZWQ+JztcbiAgdmFyIHN0YW1wID0gbmV3IERhdGUoKTtcbiAgdmFyIHN0ciA9ICclY25hbWU6ICVjJyArIGVyci5uYW1lICtcbiAgICAgICAgICAnXFxuJWNFcnJvcjogJWMnICsgZXJyLm1lc3NhZ2UgK1xuICAgICAgICAgICdcXG4lY0ZpbGU6ICVjJyArIGZpbGVuYW1lO1xuXG4gIGNvbnNvbGUubG9nKHN0ciwgJ2ZvbnQtd2VpZ2h0OiBib2xkOycsICdjb2xvcjogI2U3NGMzYzsnLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JywgJ2ZvbnQtd2VpZ2h0OiBub3JtYWw7IGNvbG9yOiAjZTc0YzNjOycsICdmb250LXdlaWdodDogYm9sZDsnLCAnZm9udC13ZWlnaHQ6IG5vcm1hbDsnKTtcbiAgaWYoIGVyci5zdGFjayApIHtcbiAgICBjb25zb2xlLmxvZygnJWMnICsgZXJyLnN0YWNrLCAnYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZlZTsgbGluZS1oZWlnaHQ6IDI7Jyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnVuYykge1xuICB0cnl7IGZ1bmMoKTsgfVxuICBjYXRjaChlcnIpIHtcbiAgICBfZXJyb3JEYXRhKGVycik7XG4gIH1cbn07XG4iLCJcbmZ1bmN0aW9uIHRob3VzYW5kcyhhbW91bnQpIHtcbiAgaWYoIC9cXGR7M31cXGQrLy50ZXN0KGFtb3VudCkgKSB7XG4gICAgcmV0dXJuIHRob3VzYW5kcyhhbW91bnQucmVwbGFjZSgvKFxcZHszfT8pKFxcLnwkKS8sICcuJCYnKSk7XG4gIH1cbiAgcmV0dXJuIGFtb3VudDtcbn1cblxuZnVuY3Rpb24gZ2V0QW1vdW50IChhbW91bnQpIHtcbiAgdmFyIHByZWZpeCA9ICcnO1xuXG4gIGlmKCBhbW91bnQgPCAwICkge1xuICAgIHByZWZpeCA9ICctJztcbiAgICBhbW91bnQgPSAwIC0gYW1vdW50O1xuICB9XG5cbiAgaWYoICFhbW91bnQgKSB7XG4gICAgcmV0dXJuICcwLDAwJztcbiAgfSBlbHNlIGlmKCBhbW91bnQgPCAxMCApIHtcbiAgICByZXR1cm4gJzAsMCcgKyBhbW91bnQ7XG4gIH0gZWxzZSBpZiggYW1vdW50IDwgMTAwICkge1xuICAgIHJldHVybiAnMCwnICsgYW1vdW50O1xuICB9XG4gIHJldHVybiBwcmVmaXggKyAoJycgKyBhbW91bnQpLnJlcGxhY2UoLyhcXGQqKShcXGR7Mn0pJC8sIGZ1bmN0aW9uIChtYXRjaGVkLCBtYWluLCB0YWlsKSB7XG4gICAgcmV0dXJuIHRob3VzYW5kcyhtYWluKSArICcsJyArIHRhaWw7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwYXJzZVByaWNlIChwcmljZSkge1xuICB2YXIgbWF0Y2hlZCA9IHByaWNlLm1hdGNoKC8oKFxcZCtbLC4gXSkqKShcXGQrKS8pLFxuICAgICAgYW1vdW50LCBtYWluLCB0YWlsO1xuXG4gIGlmKCBtYXRjaGVkICkge1xuICAgIHRhaWwgPSBtYXRjaGVkWzNdO1xuICAgIG1haW4gPSBtYXRjaGVkWzFdLnJlcGxhY2UoL1teXFxkXS9nLCAnJyk7XG5cbiAgICBpZiggIW1haW4gKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKCB0YWlsICsgJzAwJyApO1xuICAgIH1cblxuICAgIGlmKCB0YWlsLmxlbmd0aCA9PT0gMSApIHtcbiAgICAgIHJldHVybiBOdW1iZXIobWFpbiArIHRhaWwgKyAnMCcpO1xuICAgIH1cblxuICAgIGlmKCB0YWlsLmxlbmd0aCAhPT0gMiApIHtcbiAgICAgIHRhaWwgKz0gJzAwJztcbiAgICB9XG5cbiAgICByZXR1cm4gTnVtYmVyKG1haW4gKyB0YWlsKTtcbiAgfVxuXG4gIGlmKCAvXFxkKy8udGVzdChwcmljZSkgKSB7XG4gICAgcmV0dXJuIE51bWJlciggcHJpY2UucmVwbGFjZSgvW15cXGRdKy9nLCAnJykgKyAnMDAnICk7XG4gIH1cblxuICBjb25zb2xlLndhcm4oJ3ByaWNlIGRhdGEgbWlzbWF0Y2gnLCBwcmljZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRnZXRBbW91bnQ6IGdldEFtb3VudCxcblx0cGFyc2VQcmljZTogcGFyc2VQcmljZVxufTtcbiIsIlxuZnVuY3Rpb24gX3JlYWR5IChfY2FsbGJhY2ssIGRlbGF5KSB7XG4gIHZhciBjYWxsYmFjayA9IGRlbGF5ID8gZnVuY3Rpb24gKCkgeyBzZXRUaW1lb3V0KF9jYWxsYmFjaywgZGVsYXkpOyB9IDogX2NhbGxiYWNrO1xuXG4gIGlmICgvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNhbGxiYWNrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kQnViYmxlQ2xvc2UgKHN0cikge1xuICB2YXIgbGV2ZWwgPSAwO1xuXG4gIGZvciggdmFyIGkgPSAwLCBsZW4gPSBzdHIubGVuZ3RoOyBpIDwgbGVuIDsgaSsrICkge1xuICAgIGlmKCBzdHJbaV0gPT09ICcoJyApIHtcbiAgICAgIGxldmVsKys7XG4gICAgfSBlbHNlIGlmKCBzdHJbaV0gPT09ICcpJyApIHtcbiAgICAgIGlmKCBsZXZlbCA9PT0gMCApIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXZlbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gaGFzU2VsZWN0b3IgKHNlbGVjdG9yLCByb290RWxlbWVudCkge1xuICB2YXIgc3BsaXRIYXMgPSBzZWxlY3Rvci5zcGxpdCgnOmhhcygnKTtcblxuICByZXR1cm4gc3BsaXRIYXMucmVkdWNlKGZ1bmN0aW9uIChtYXRjaGVzLCBwYXJ0aWFsKSB7XG5cbiAgICB2YXIgY2xvc2VQb3NpdGlvbiA9IGZpbmRCdWJibGVDbG9zZShwYXJ0aWFsKSxcbiAgICAgICAgaGFzRmlsdGVyID0gcGFydGlhbC5zdWJzdHIoMCwgY2xvc2VQb3NpdGlvbiksXG4gICAgICAgIHBhcnRpYWxRdWVyeSA9IHBhcnRpYWwuc3Vic3RyKGNsb3NlUG9zaXRpb24gKyAxKS50cmltKCk7XG5cbiAgICBpZiggY2xvc2VQb3NpdGlvbiA9PT0gLTEgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21hbGZvcm1lZCBzZWxlY3RvcicpO1xuICAgIH1cblxuICAgIG1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlcihmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcihoYXNGaWx0ZXIpO1xuICAgIH0pO1xuXG4gICAgaWYoIHBhcnRpYWxRdWVyeSApIHtcbiAgICAgIHZhciBzdWJtYXRjaGVzID0gW107XG5cbiAgICAgIG1hdGNoZXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBbXS5wdXNoLmFwcGx5KHN1Ym1hdGNoZXMsIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChwYXJ0aWFsUXVlcnkpICk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHN1Ym1hdGNoZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG5cbiAgfSwgW10uc2xpY2UuY2FsbCggKHJvb3RFbGVtZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKCBzcGxpdEhhcy5zaGlmdCgpICkgKSApO1xufVxuXG5mdW5jdGlvbiBxdWVyeVNlbGVjdG9yIChzZWxlY3Rvciwgcm9vdEVsZW1lbnQpIHtcbiAgLy8gJ3RyOmhhcyg+IC5yb3cpIGRpdjpoYXMoc3BhbikgaW1nJy5zcGxpdCgnOmhhcygnKTtcbiAgaWYoICFzZWxlY3RvciApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpZiggIS9cXDpoYXNcXCgvLnRlc3Qoc2VsZWN0b3IpICkge1xuICAgIHJldHVybiBbXS5zbGljZS5jYWxsKCAocm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICkgKTtcbiAgfVxuXG4gIHJldHVybiBoYXNTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbmZ1bmN0aW9uIGNzc1F1ZXJ5IChfc2VsZWN0b3IsIHJvb3RFbGVtZW50KSB7XG4gIHZhciBzZWxlY3RvcnMgPSBfc2VsZWN0b3Iuc3BsaXQoL1xccyosXFxzKi8pO1xuXG4gIHJldHVybiBzZWxlY3RvcnMucmVkdWNlKGZ1bmN0aW9uIChsaXN0LCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBsaXN0LmNvbmNhdCggcXVlcnlTZWxlY3RvcihzZWxlY3Rvciwgcm9vdEVsZW1lbnQpICk7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsVG9wICh2YWx1ZSkge1xuICBpZiggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gdmFsdWU7XG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbn1cblxuZnVuY3Rpb24gY2xlYXJFbGVtZW50IChlbCkge1xuICB2YXIgY2hpbGQgPSBlbC5maXJzdENoaWxkO1xuXG4gIHdoaWxlKCBjaGlsZCApIHtcbiAgICBlbC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgY2hpbGQgPSBlbC5maXJzdENoaWxkO1xuICB9XG59XG5cbi8vIHZhciBfY2xhc3NBY3Rpb25zID0ge1xuLy8gICBhZGQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QgPyBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4vLyAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4vLyAgIH0gOiBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4vLyAgICAgdmFyIFJFX0NMRUFOQ0xBU1MgPSBuZXcgUmVnRXhwKCdcXFxcYicgKyAoY2xhc3NOYW1lIHx8ICcnKSArICdcXFxcYicsJycpO1xuLy8gICAgIF9jbGFzc0FjdGlvbnMucmVtb3ZlKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4vLyAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuLy8gICB9LFxuLy8gICByZW1vdmU6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QgPyBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4vLyAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4vLyAgIH0gOiBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4vLyAgICAgdmFyIFJFX0NMRUFOQ0xBU1MgPSBuZXcgUmVnRXhwKCdcXFxcYicgKyAoY2xhc3NOYW1lIHx8ICcnKSArICdcXFxcYicsJycpO1xuLy8gICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShSRV9DTEVBTkNMQVNTLCcnKTtcbi8vICAgfSxcbi8vICAgYWN0aW9uOiBmdW5jdGlvbiAoYWN0aW9uLCB0b29scykge1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4vLyAgICAgICBpZiggY2xhc3NOYW1lLmluZGV4T2YoJyAnKSA+PSAwICkge1xuLy8gICAgICAgICBjbGFzc05hbWUuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbikge1xuLy8gICAgICAgICAgIF9jbGFzc0FjdGlvbnNbYWN0aW9uXShlbGVtZW50LCBjbik7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgX2NsYXNzQWN0aW9uc1thY3Rpb25dKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4vLyAgICAgICB9XG4vLyAgICAgICByZXR1cm4gdG9vbHM7XG4vLyAgICAgfTtcbi8vICAgfVxuLy8gfTtcblxuZnVuY3Rpb24gd3JpdGVJZnJhbWUgKGlmcmFtZSwgY29udGVudCkge1xuICB2YXIgaWZyYW1lRG9jID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIHRyeSB7IGlmcmFtZURvYy5jaGFyc2V0ID0gJ1VURi04JzsgfSBjYXRjaChlcnIpIHt9XG4gIGlmcmFtZURvYy5vcGVuKCk7XG4gIGlmcmFtZURvYy53cml0ZShjb250ZW50KTtcbiAgaWZyYW1lRG9jLmNsb3NlKCk7XG59XG5cbmZ1bmN0aW9uIGdldElGcmFtZSAoaWZyYW1lU3R5bGVzKSB7XG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgcmVxdWlyZSgnbml0cm8tdG9vbHMvZXh0ZW5kJykuZXh0ZW5kKGlmcmFtZS5zdHlsZSwgaWZyYW1lU3R5bGVzIHx8IHt9KTtcblxuICBpZnJhbWUuZnJhbWVCb3JkZXIgPSAnMCc7XG4gIC8vIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBpZnJhbWUub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgfTtcbiAgcmV0dXJuIGlmcmFtZTtcbn1cblxudmFyIF8gPSB7XG4gIHJlYWR5OiBfcmVhZHksXG4gIGdldElGcmFtZTogZ2V0SUZyYW1lLFxuICB3cml0ZUlmcmFtZTogd3JpdGVJZnJhbWUsXG4gIGNzc1F1ZXJ5OiBjc3NRdWVyeSxcbiAgc2Nyb2xsVG9wOiBzY3JvbGxUb3AsXG4gIGNsZWFyRWxlbWVudDogY2xlYXJFbGVtZW50LFxuICBlbGVtZW50RGF0YTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykuZGF0YXNldCA/IGZ1bmN0aW9uIChlbCwga2V5LCB2YWx1ZSkge1xuICAgIGlmKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgZWwuZGF0YXNldFtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBlbC5kYXRhc2V0W2tleV07XG4gIH0gOiBmdW5jdGlvbiAoZWwsIGtleSwgdmFsdWUpIHtcbiAgICBpZiggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS0nICsga2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIGtleSk7XG4gIH0sXG59O1xuXG4vLyB2YXIgYWRkQ2xhc3MgPSBfY2xhc3NBY3Rpb25zLmFjdGlvbignYWRkJywgXyApLFxuLy8gICAgIHJlbW92ZUNsYXNzID0gX2NsYXNzQWN0aW9ucy5hY3Rpb24oJ3JlbW92ZScsIF8gKTtcblxuLy8gXy5hZGRDbGFzcyA9IGFkZENsYXNzO1xuLy8gXy5yZW1vdmVDbGFzcyA9IHJlbW92ZUNsYXNzO1xuXG5fLmFkZENsYXNzID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbn07XG5cbl8ucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfO1xuIiwiXG5cbmZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHJldHVybiBbcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksIHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLCBwYXJzZUludChyZXN1bHRbM10sIDE2KV07XG59XG5cbmZ1bmN0aW9uIGJyaWdodG5lc3MgKGNvbG9yKSB7XG4gIHZhciByZ2IgPSBoZXhUb1JnYihjb2xvcik7XG4gIHZhciBvID0gTWF0aC5yb3VuZCgoKHBhcnNlSW50KHJnYlswXSkgKiAyOTkpICsgKHBhcnNlSW50KHJnYlsxXSkgKiA1ODcpICsgKHBhcnNlSW50KHJnYlsyXSkgKiAxMTQpKSAvMTAwMCk7XG4gIHJldHVybiBvIDwgMTAwID8gJ2RhcmsnIDogKCBvID4gMjMwID8gJ2xpZ2h0JyA6ICdtZWRpdW0nICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBoZXhUb1JnYjogaGV4VG9SZ2IsXG4gIGJyaWdodG5lc3M6IGJyaWdodG5lc3Ncbn07XG4iLCJcblxudmFyIGltcG9ydGFudENTUyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgICAgIHJldHVybiBjc3MucmVwbGFjZSgvOy9nLCAnICFpbXBvcnRhbnQ7JykucmVwbGFjZSgvOihbXjo7XSs/KX0vZywgZnVuY3Rpb24gKG1hdGNoZWQsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAnOicgKyB2YWx1ZSArICcgIWltcG9ydGFudDt9JztcbiAgICAgIH0pLnJlcGxhY2UoLyhcXGQrJXxmcm9tfHRvKXsoW159XSspL2csIGZ1bmN0aW9uIChtYXRjaGVkLCBwb3MsIGNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvcyArICd7JyArIGNvbnRlbnQucmVwbGFjZSgvICFpbXBvcnRhbnQ7L2csICc7Jyk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNzc0hhY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNhY2hlID0ge30sXG4gICAgICAgICAgaGFja3MgPSB7XG4gICAgICAgICAgICBvdmVybGF5OiBpbXBvcnRhbnRDU1MocmVxdWlyZSgnLi4vLi4vLnRtcC9jc3MtaGFja3Mvb3ZlcmxheScpKSxcbiAgICAgICAgICAgIGJsdXI6IGltcG9ydGFudENTUyhyZXF1aXJlKCcuLi8uLi8udG1wL2Nzcy1oYWNrcy9ibHVyJykpLFxuICAgICAgICAgICAgbG9nbzogaW1wb3J0YW50Q1NTKHJlcXVpcmUoJy4uLy4uLy50bXAvY3NzLWhhY2tzL2xvZ28nKSksXG4gICAgICAgICAgICBtb2RhbDogaW1wb3J0YW50Q1NTKHJlcXVpcmUoJy4uLy4uLy50bXAvY3NzLWhhY2tzL21vZGFsJykpXG4gICAgICAgICAgfTtcblxuICAgICAgLy8gY29uc29sZS5sb2coJ2Nzc0hhY2tzJywgaGFja3MpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaGFjayAoaGFja05hbWUpIHtcbiAgICAgICAgaWYoICFjYWNoZVtoYWNrTmFtZV0gKSB7XG4gICAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBoYWNrc1toYWNrTmFtZV07XG5cbiAgICAgICAgICB2YXIgZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgc3R5bGUuaGFjayA9IGZ1bmN0aW9uIChlbmFibGUpIHtcbiAgICAgICAgICAgIGVuYWJsZSA9IGVuYWJsZSA9PT0gdW5kZWZpbmVkIHx8IGVuYWJsZTtcblxuICAgICAgICAgICAgaWYoIGVuYWJsZSApIHtcbiAgICAgICAgICAgICAgaWYoIGVuYWJsZWQgKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgICBlbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiggIWVuYWJsZWQgKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgICBlbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjYWNoZVtoYWNrTmFtZV0gPSBzdHlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FjaGVbaGFja05hbWVdO1xuICAgICAgfTtcbiAgICB9KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNzc0hhY2s7XG4iLCJcblxuZnVuY3Rpb24gX2tleSAobywga2V5LCB2YWx1ZSkge1xuXHRrZXkuc3BsaXQoJy4nKS5mb3JFYWNoKGZ1bmN0aW9uIChrLCBpLCBrZXlzKSB7XG5cdFx0aWYoIGkgPT09IGtleXMubGVuZ3RoIC0gMSApIHtcblx0XHRcdG9ba10gPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b1trXSA9IG9ba10gfHwge307XG5cdFx0XHRvID0gb1trXTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjYW1lbENhc2UgKHRleHQpIHtcblx0cmV0dXJuIHRleHQucmVwbGFjZSgvXyhcXHcpL2csIGZ1bmN0aW9uIChtYXRjaGVkLCBsZXR0ZXIpIHtcblx0XHRyZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZSAocXVlcnlzdHJpbmcsIGRlY29kZSkge1xuXG5cdHZhciByZXN1bHQgPSB7fTtcblxuXHRxdWVyeXN0cmluZy5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24gKGtleVZhbHVlKSB7XG5cdFx0dmFyIG1hdGNoZWQgPSBrZXlWYWx1ZS5tYXRjaCgvKC4qPyk9KC4qKS8pO1xuXG5cdFx0aWYoICFtYXRjaGVkICkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcGFyc2UgJyArIGtleVZhbHVlKTtcblx0XHR9XG5cblx0XHRfa2V5KHJlc3VsdCwgY2FtZWxDYXNlKG1hdGNoZWRbMV0pLCBkZWNvZGUgPyBkZWNvZGVVUkkobWF0Y2hlZFsyXSkgOiBtYXRjaGVkWzJdICk7XG5cblx0fSk7XG5cblx0cmV0dXJuIHJlc3VsdDtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlc2VyaWFsaXplO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3VzY3JpcHRvcnMgPSBbXSxcbiAgICBydW5uaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGluaXRMaXZlRE9NICgpIHtcblxuICByZXF1aXJlKCcuL2Jyb3dzZXItdG9vbHMnKS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCBmdW5jdGlvbihldmVudCl7XG4gICAgICBmb3IoIHZhciBpID0gMCwgbiA9IHN1c2NyaXB0b3JzLmxlbmd0aDsgaSA8IG4gOyBpKysgKSB7XG4gICAgICAgIHN1c2NyaXB0b3JzW2ldKGV2ZW50LnRhcmdldCk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICB9KTtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3Vic2NyaWJlOiBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIGlmKCAhcnVubmluZyApIHtcbiAgICAgIGluaXRMaXZlRE9NKHRydWUpO1xuICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgfVxuICAgIGlmKCBoYW5kbGVyIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgICBzdXNjcmlwdG9ycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cbiAgfVxufTtcbiIsIlxuXG5mdW5jdGlvbiBnZXRFcnJvck9iamVjdCgpe1xuICAgIHRyeSB7IHRocm93IEVycm9yKCcnKTsgfSBjYXRjaChlcnIpIHsgcmV0dXJuIGVycjsgfVxufVxuXG5mdW5jdGlvbiBsb2cgKCkge1xuICB2YXIgZXJyID0gZ2V0RXJyb3JPYmplY3QoKSxcbiAgICAgIGNhbGxlcl9saW5lID0gZXJyLnN0YWNrLnNwbGl0KCdcXG4nKVs0XSB8fCAnJyxcbiAgICAgIGluZGV4ID0gY2FsbGVyX2xpbmUuaW5kZXhPZignYXQgJyk7XG5cbiAgbG9nLmhpc3RvcnkucHVzaCh7XG4gICAgdGltZTogbmV3IERhdGUoKSxcbiAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgdHJhY2s6IHtcbiAgICAgIGNhbGxlcl9saW5lOiBjYWxsZXJfbGluZSxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGNsZWFuOiBjYWxsZXJfbGluZS5zbGljZShpbmRleCArIDIsIGNhbGxlcl9saW5lLmxlbmd0aClcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbmxvZy5oaXN0b3J5ID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0gbG9nO1xuIiwiXG52YXIgbWVzc2FnZVRhcmdldCA9IHt9LFxuICAgIHNob3dMb2dzID0gZmFsc2U7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcbiAgdmFyIG1lc3NhZ2UgPSBlLmRhdGEsXG4gICAgICBsaXN0ZW5lcnMgPSBtZXNzYWdlVGFyZ2V0W21lc3NhZ2UuYXBsYXphbWVdO1xuXG4gIGlmKCAhbGlzdGVuZXJzICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCBzaG93TG9ncyAmJiAhZS51c2VkICkge1xuICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlJywgZSwgbGlzdGVuZXJzKTtcbiAgfVxuXG4gIGlmKCAhZS51c2VkICkge1xuICAgIGUudXNlZCA9IHRydWU7XG4gICAgZm9yKCB2YXIgaSA9IDAsIG4gPSBsaXN0ZW5lcnMubGVuZ3RoIDsgaSA8IG4gOyBpKysgKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0oZSwgbWVzc2FnZSk7XG4gICAgfVxuICB9XG59LCB0cnVlKTtcblxuZnVuY3Rpb24gb25NZXNzYWdlICh0YXJnZXQsIGhhbmRsZXIsIGxvZ3MpIHtcbiAgc2hvd0xvZ3MgPSBsb2dzO1xuICBpZiggdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgJiYgaGFuZGxlciBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgIG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XSA9IG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XSB8fCBbXTtcbiAgICBtZXNzYWdlVGFyZ2V0W3RhcmdldF0ucHVzaChoYW5kbGVyKTtcbiAgfVxufVxuXG5vbk1lc3NhZ2Uub2ZmID0gZnVuY3Rpb24gKHRhcmdldCwgaGFuZGxlcikge1xuICBpZiggdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgJiYgaGFuZGxlciBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgIG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XSA9IG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XSB8fCBbXTtcbiAgICB2YXIgaSA9IG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XS5pbmRleE9mKGhhbmRsZXIpO1xuICAgIGlmKCBpICE9PSAtMSApIHtcbiAgICAgIG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XS5zcGxpY2UoaSwxKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gb25NZXNzYWdlO1xuIiwiXG5mdW5jdGlvbiB0ZW1wbGF0ZSAobmFtZSwgZGF0YSl7XG4gIHJldHVybiB0ZW1wbGF0ZS5jYWNoZVtuYW1lXShkYXRhIHx8IHt9KTtcbn1cblxudGVtcGxhdGUuY2FjaGUgPSB7fTtcblxudGVtcGxhdGUuY29tcGlsZSA9IGZ1bmN0aW9uICh0bXBsKSB7XG4gIC8vIEpvaG4gUmVzaWcgbWljcm8tdGVtcGxhdGVcbiAgcmV0dXJuIG5ldyBGdW5jdGlvbignb2JqJywgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgJ3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9OycgK1xuXG4gICAgLy8gSW50cm9kdWNlIHRoZSBkYXRhIGFzIGxvY2FsIHZhcmlhYmxlcyB1c2luZyB3aXRoKCl7fVxuICAgICd3aXRoKG9iail7cC5wdXNoKFxcJycgK1xuXG4gICAgLy8gQ29udmVydCB0aGUgdGVtcGxhdGUgaW50byBwdXJlIEphdmFTY3JpcHRcbiAgICB0bXBsLnRyaW0oKVxuICAgICAgLnJlcGxhY2UoL1tcXHJcXHRcXG5dL2csICcgJylcbiAgICAgIC5zcGxpdCgnPCUnKS5qb2luKCdcXHQnKVxuICAgICAgLnJlcGxhY2UoLygoXnwlPilbXlxcdF0qKScvZywgJyQxXFxyJylcbiAgICAgIC5yZXBsYWNlKC9cXHQ9KC4qPyklPi9nLCAnXFwnLCQxLFxcJycpXG4gICAgICAuc3BsaXQoJ1xcdCcpLmpvaW4oJ1xcJyk7JylcbiAgICAgIC5zcGxpdCgnJT4nKS5qb2luKCdwLnB1c2goXFwnJylcbiAgICAgIC5zcGxpdCgnXFxyJykuam9pbignXFxcXFxcJycpICsgJ1xcJyk7fXJldHVybiBwLmpvaW4oXFwnXFwnKTsnKTtcbn07XG5cbnRlbXBsYXRlLnB1dCA9IGZ1bmN0aW9uIChuYW1lLCB0bXBsKSB7XG4gIHRlbXBsYXRlLmNhY2hlW25hbWVdID0gdGVtcGxhdGUuY29tcGlsZSh0bXBsKTtcbn07XG5cbnRlbXBsYXRlLmxvb2t1cCA9IGZ1bmN0aW9uICgpIHtcbiAgW10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24veC10ZW1wbGF0ZVwiXVtkYXRhLXRlbXBsYXRlXScpLCBmdW5jdGlvbiAodG1wbCkge1xuICAgIHRlbXBsYXRlLnB1dCh0bXBsLmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpLCB0bXBsLnRleHQpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7XG4iLCJcbnZhciBfID0gcmVxdWlyZSgndmFuaWxsYS10b29scycpO1xuXG5fLmV4dGVuZChfLFxuICByZXF1aXJlKCduaXRyby10b29scy9saXN0cycpLFxuICByZXF1aXJlKCduaXRyby10b29scy9wYXRoJyksXG4gIHJlcXVpcmUoJy4vY29sb3JzJyksXG4gIHJlcXVpcmUoJy4vYnJvd3Nlci10b29scycpLFxuICByZXF1aXJlKCcuL2Ftb3VudC1wcmljZScpLFxuICB7XG4gICAgbGl2ZURPTTogcmVxdWlyZSgnLi9saXZlLWRvbScpLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RlbXBsYXRlJyksXG4gICAgb25NZXNzYWdlOiByZXF1aXJlKCcuL21lc3NhZ2UtbGlzdGVuZXInKSxcbiAgICBkZXNlcmlhbGl6ZTogcmVxdWlyZSgnLi9kZXNlcmlhbGl6ZScpXG4gIH1cbik7XG5cbl8ubG9nID0gcmVxdWlyZSgnLi9sb2cnKTtcbl8ubm9vcCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gXztcbiJdfQ==