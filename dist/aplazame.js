(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '0.0.350';
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

module.exports = function (Promise) {

	if( !Promise.defer ) {
		Promise.defer = function () {
		  var deferred = {};
		  deferred.promise = new Promise(function (resolve, reject) {
		    deferred.resolve = resolve;
		    deferred.reject = reject;
		  });
		  return deferred;
		};
	}

	function each (iterable, handler) {
		for( var i = 0, n = iterable.length; i < n ; i++ ) {
			handler(iterable[i], i);
		}
	}

	if( !Promise.all ) {
		Promise.all = function (iterable) {
		  return new Promise(function (resolve, reject) {
		    var pending = iterable.length,
		        results = [];
		    each(iterable, function (_promise, i) {

		      ( _promise.then ? _promise : Promise.resolve(_promise) ).then(function (result) {
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
		};
	}

	if( !Promise.race ) {
		Promise.race = function (iterable) {
		  return new Promise(function (resolve, reject) {
		    var done = false;

		    each(iterable, function (_promise, i) {
		      if( done ) {
		        return;
		      }
		      ( _promise.then ? _promise : Promise.resolve(_promise) ).then(function (result) {
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
		};
	}

	if( !Promise.resolve ) {
		Promise.resolve = function (result) {
		  return new Promise(function (resolve, reject) { resolve(result); });
		};
	}

	if( !Promise.reject ) {
		Promise.reject = function (reason) {
		  return new Promise(function (resolve, reject) { reject(reason); });
		};
	}

	return Promise;
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
    // setTimeout(function () {
    if( promise.$$uncough === uncough ) {
      throw new Error('Uncaught (in promise)');
    }
    // }, 0);
  }
}

function Promise (executor) {
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

Promise.prototype.then = function (onsucceeded, onRejected) {
  var _this = this,
      _promise = new Promise(function (resolve, reject) {
        _this.$$queue.push({ resolve: onsucceeded, reject: onRejected, deferred: { resolve: resolve, reject: reject } });
      });

  processQueue(this);

  return _promise;
};

Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
};

require('./promise-methods')(Promise);

module.exports = Promise;

},{"./promise-methods":18}],20:[function(require,module,exports){
(function (global){

module.exports = require('./qizer')( global.Promise ? require('./promise-methods')(global.Promise) : require('./promise-polyfill') );

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./promise-methods":18,"./promise-polyfill":19,"./qizer":21}],21:[function(require,module,exports){

module.exports = function (Promise) {

  function q (executor) {
    return new Promise(executor);
  }

  ['defer', 'resolve', 'reject', 'all', 'race'].forEach(function (fName) {
    q[fName] = Promise[fName];
  });

  q.when = function (p) { return ( p && p.then ) ? p : Promise.resolve(p); };
  q.usePolyfill = function () {
  	Promise = require('./promise-polyfill');
    ['defer', 'resolve', 'reject', 'all', 'race'].forEach(function (fName) {
      q[fName] = Promise[fName];
    });
  };

  return q;

};

},{"./promise-polyfill":19}],22:[function(require,module,exports){

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

},{"./browser-polyfills":23,"./deferred/animate":30,"./deferred/wait":31,"./fn/debounce":32,"./fn/ready":33,"./fn/template":34,"./utils/dom":35,"./utils/events":36,"./utils/normalize":37,"./utils/scroll/bundle":40,"classlist.js":9,"nitro-tools/extend":13,"nitro-tools/key":14,"nitro-tools/path":16,"nitro-tools/type":17}],30:[function(require,module,exports){

var $q = require('q-promise'),
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

},{"bezier-easing":8,"q-promise":20}],31:[function(require,module,exports){

var $q = require('q-promise'),
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
},{"q-promise":20}],32:[function(require,module,exports){

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
		$q = require('q-promise'),
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

},{"../../deferred/animate":30,"q-promise":20}],40:[function(require,module,exports){

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

  require('q-promise/no-native').usePolyfill();
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

},{"../.tmp/aplazame-version":1,"./apps/button":43,"./apps/checkout":44,"./apps/http-service":45,"./apps/modal":47,"./apps/simulator":48,"./core/api":50,"./core/core":51,"./loaders/data-aplazame":53,"./loaders/data-button":54,"./loaders/data-simulator":55,"./sandbox":56,"./tools/log":63,"q-promise/no-native":22}],43:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8udG1wL2FwbGF6YW1lLXZlcnNpb24uanMiLCIuLi8udG1wL2Nzcy1oYWNrcy9ibHVyLmpzIiwiLi4vLnRtcC9jc3MtaGFja3MvbG9nby5qcyIsIi4uLy50bXAvY3NzLWhhY2tzL21vZGFsLmpzIiwiLi4vLnRtcC9jc3MtaGFja3Mvb3ZlcmxheS5qcyIsIi4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy9tb2RhbC1pbnN0YWxtZW50cy5qcyIsIi4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy93aWRnZXQtcmF3LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Jlemllci1lYXNpbmcvc3JjL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NsYXNzbGlzdC5qcy9jbGFzc0xpc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvZXZlbnRzLXdyYXBwZXIvZXZlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2h0dHAtYnJvd3Nlci9zcmMvaHR0cC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy9fZXh0ZW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL25pdHJvLXRvb2xzL2V4dGVuZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy9rZXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbml0cm8tdG9vbHMvbGlzdHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbml0cm8tdG9vbHMvcGF0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3EtcHJvbWlzZS9saWIvcHJvbWlzZS1tZXRob2RzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3EtcHJvbWlzZS9saWIvcHJvbWlzZS1wb2x5ZmlsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9xLXByb21pc2UvbGliL3EuanMiLCIuLi9ub2RlX21vZHVsZXMvcS1wcm9taXNlL2xpYi9xaXplci5qcyIsIi4uL25vZGVfbW9kdWxlcy9xLXByb21pc2Uvbm8tbmF0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9icm93c2VyLXBvbHlmaWxscy9kYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMvZG9tLWNsb3Nlc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9icm93c2VyLXBvbHlmaWxscy9ldmVudC1saXN0ZW5lci5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2Jyb3dzZXItcG9seWZpbGxzL21hdGNoLW1lZGlhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMvbWF0Y2hlcy1zZWxlY3Rvci5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2J1bmRsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2RlZmVycmVkL2FuaW1hdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9kZWZlcnJlZC93YWl0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvZm4vZGVib3VuY2UuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9mbi9yZWFkeS5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2ZuL3RlbXBsYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvZG9tLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvZXZlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvbm9ybWFsaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsL2FuaW1hdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy91dGlscy9zY3JvbGwvYnVuZGxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsL3RvcC1jbGFzcy5qcyIsImFwbGF6YW1lLmpzIiwiYXBwcy9idXR0b24uanMiLCJhcHBzL2NoZWNrb3V0LmpzIiwiYXBwcy9odHRwLXNlcnZpY2UuanMiLCJhcHBzL2xvYWRpbmctc3ZnLmpzIiwiYXBwcy9tb2RhbC5qcyIsImFwcHMvc2ltdWxhdG9yLmpzIiwiY29yZS9hcGktaHR0cC5qcyIsImNvcmUvYXBpLmpzIiwiY29yZS9jb3JlLmpzIiwiY29yZS9pbml0LmpzIiwibG9hZGVycy9kYXRhLWFwbGF6YW1lLmpzIiwibG9hZGVycy9kYXRhLWJ1dHRvbi5qcyIsImxvYWRlcnMvZGF0YS1zaW11bGF0b3IuanMiLCJzYW5kYm94LmpzIiwidG9vbHMvYW1vdW50LXByaWNlLmpzIiwidG9vbHMvYnJvd3Nlci10b29scy5qcyIsInRvb2xzL2NvbG9ycy5qcyIsInRvb2xzL2Nzcy1oYWNrLmpzIiwidG9vbHMvZGVzZXJpYWxpemUuanMiLCJ0b29scy9saXZlLWRvbS5qcyIsInRvb2xzL2xvZy5qcyIsInRvb2xzL21lc3NhZ2UtbGlzdGVuZXIuanMiLCJ0b29scy90ZW1wbGF0ZS5qcyIsInRvb2xzL3Rvb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzlGQTtBQUNBO0FBQ0E7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeldBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gJzAuMC4zNTAnOyIsIm1vZHVsZS5leHBvcnRzID0gJ0Atd2Via2l0LWtleWZyYW1lcyBhcGxhemFtZS1ibHVyezAley13ZWJraXQtZmlsdGVyOmJsdXIoMCk7ZmlsdGVyOmJsdXIoMCk7fXRvey13ZWJraXQtZmlsdGVyOmJsdXIoM3B4KTtmaWx0ZXI6Ymx1cigzcHgpfX1Aa2V5ZnJhbWVzIGFwbGF6YW1lLWJsdXJ7MCV7LXdlYmtpdC1maWx0ZXI6Ymx1cigwKTtmaWx0ZXI6Ymx1cigwKX10b3std2Via2l0LWZpbHRlcjpibHVyKDNweCk7ZmlsdGVyOmJsdXIoM3B4KX19Ym9keS5hcGxhemFtZS1ibHVyPjpub3QoLmFwbGF6YW1lLW1vZGFsKTpub3QoLmFwbGF6YW1lLW92ZXJsYXkpey13ZWJraXQtZmlsdGVyOmJsdXIoM3B4KTtmaWx0ZXI6Ymx1cigzcHgpfUBtZWRpYSAobWluLXdpZHRoOjYwMXB4KXtib2R5LmFwbGF6YW1lLWJsdXI+Om5vdCguYXBsYXphbWUtbW9kYWwpOm5vdCguYXBsYXphbWUtb3ZlcmxheSl7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246LjRzO2FuaW1hdGlvbi1kdXJhdGlvbjouNHM7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphcGxhemFtZS1ibHVyO2FuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWJsdXJ9fWJvZHkuYXBsYXphbWUtdW5ibHVyPjpub3QoLmFwbGF6YW1lLW1vZGFsKTpub3QoLmFwbGF6YW1lLW92ZXJsYXkpey13ZWJraXQtZmlsdGVyOmJsdXIoMCk7ZmlsdGVyOmJsdXIoMCl9QG1lZGlhIChtaW4td2lkdGg6NjAxcHgpe2JvZHkuYXBsYXphbWUtdW5ibHVyPjpub3QoLmFwbGF6YW1lLW1vZGFsKTpub3QoLmFwbGF6YW1lLW92ZXJsYXkpey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi40czthbmltYXRpb24tZHVyYXRpb246LjRzOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtYmx1cjthbmltYXRpb24tbmFtZTphcGxhemFtZS1ibHVyOy13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjpyZXZlcnNlO2FuaW1hdGlvbi1kaXJlY3Rpb246cmV2ZXJzZX19JzsiLCJtb2R1bGUuZXhwb3J0cyA9ICdALXdlYmtpdC1rZXlmcmFtZXMgYXBsYXphbWUtbG9nby1sYXJnZXswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt9NjAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9OTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19QGtleWZyYW1lcyBhcGxhemFtZS1sb2dvLWxhcmdlezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTYwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfTkwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fUAtd2Via2l0LWtleWZyYW1lcyBhcGxhemFtZS1sb2dvLXNob3J0ezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTMwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX05MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1Aa2V5ZnJhbWVzIGFwbGF6YW1lLWxvZ28tc2hvcnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9MzAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTkwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fUAtd2Via2l0LWtleWZyYW1lcyBhcGxhemFtZS1sb2dvLXNtaWxlezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTkwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMnR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMnR1cm4pfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgydHVybik7dHJhbnNmb3JtOnJvdGF0ZSgydHVybil9fUBrZXlmcmFtZXMgYXBsYXphbWUtbG9nby1zbWlsZXswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX05MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDJ0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDJ0dXJuKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMnR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMnR1cm4pfX0ubG9nby1hcGxhemFtZXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoxNTBweDtoZWlnaHQ6MTUwcHh9LmxvZ28tYXBsYXphbWUgLmxpbmUtbGFyZ2UsLmxvZ28tYXBsYXphbWUgLmxpbmUtc2hvcnQsLmxvZ28tYXBsYXphbWUgLnNtaWxle3N0cm9rZTojZGRkfS5sb2dvLWFwbGF6YW1lIC5zbWlsZS1vdXRsaW5le3N0cm9rZTojNDg1MjU5fUBtZWRpYSAobWluLXdpZHRoOjQ4MHB4KXsubG9nby1hcGxhemFtZXt3aWR0aDoyMDBweDtoZWlnaHQ6MjAwcHh9fS5sb2dvLWFwbGF6YW1lIHN2Z3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ubG9nby1hcGxhemFtZS5hbmltYXRlIC5saW5lLWxhcmdlLC5sb2dvLWFwbGF6YW1lLmFuaW1hdGUgLmxpbmUtc2hvcnQsLmxvZ28tYXBsYXphbWUuYW5pbWF0ZSAuc21pbGV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTstd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7YW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkczstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxLjVzO2FuaW1hdGlvbi1kdXJhdGlvbjoxLjVzOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlfS5sb2dvLWFwbGF6YW1lLmFuaW1hdGUgLnNtaWxley13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtbG9nby1zbWlsZTthbmltYXRpb24tbmFtZTphcGxhemFtZS1sb2dvLXNtaWxlfS5sb2dvLWFwbGF6YW1lLmFuaW1hdGUgLmxpbmUtbGFyZ2V7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphcGxhemFtZS1sb2dvLWxhcmdlO2FuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWxvZ28tbGFyZ2V9LmxvZ28tYXBsYXphbWUuYW5pbWF0ZSAubGluZS1zaG9ydHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWxvZ28tc2hvcnQ7YW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtbG9nby1zaG9ydH0nOyIsIm1vZHVsZS5leHBvcnRzID0gJy5hcGxhemFtZS1tb2RhbHtoZWlnaHQ6MTAwJTtoZWlnaHQ6MTAwdmg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoyMTQ3NDgzNjQ3O31ib2R5e292ZXJmbG93OmhpZGRlbn1AbWVkaWEgKG1heC13aWR0aDo2MDBweCl7aHRtbHtiYWNrZ3JvdW5kLWNvbG9yOiMzMzNhM2V9Ym9keSxodG1se2hlaWdodDoxMDB2aDttYXJnaW46MDtwYWRkaW5nOjB9Ym9keT46bm90KC5hcGxhemFtZS1tb2RhbCl7ZGlzcGxheTpub25lfX1AbWVkaWEgKG1pbi13aWR0aDo2MDFweCl7LmFwbGF6YW1lLW1vZGFse3Bvc2l0aW9uOmZpeGVkfX0nOyIsIm1vZHVsZS5leHBvcnRzID0gJ0Atd2Via2l0LWtleWZyYW1lcyBhcGxhemFtZS1vdmVybGF5ezAle29wYWNpdHk6MDt9dG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGFwbGF6YW1lLW92ZXJsYXl7MCV7b3BhY2l0eTowfXRve29wYWNpdHk6MX19LmFwbGF6YW1lLW92ZXJsYXl7Zm9udC1mYW1pbHk6TW9udHNlcnJhdCxzYW5zLXNlcmlmO3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwdnc7aGVpZ2h0OjEwMHZoO2JhY2tncm91bmQ6cmdiYSg1Myw2NCw3MSwuOSk7dGV4dC1hbGlnbjpjZW50ZXI7ei1pbmRleDoyMTQ3NDgzNjQ2Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9LmFwbGF6YW1lLW92ZXJsYXk6YmVmb3Jle2NvbnRlbnQ6XFwnXFwnO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjUwdmh9LmFwbGF6YW1lLWxvZ28td3JhcHBlcntkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tdG9wOi01MCV9LmFwbGF6YW1lLW92ZXJsYXktbG9hZGluZy10ZXh0e2NvbG9yOiM5NWE2YjE7bWFyZ2luLXRvcDoxNHB4O2ZvbnQtc2l6ZToxNHB4fS5hcGxhemFtZS1vdmVybGF5LWxvYWRpbmctdGV4dCAudGV4dC1lcnJvcntjb2xvcjojZjA4MDgwfS5hcGxhemFtZS1vdmVybGF5LWxvYWRpbmctdGV4dCBhe2NvbG9yOiNmNWY1ZjU7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LmFwbGF6YW1lLW92ZXJsYXktbG9hZGluZy10ZXh0IGE6aG92ZXJ7Ym9yZGVyLWJvdHRvbToxcHggZG90dGVkICNmNWY1ZjV9LmFwbGF6YW1lLW92ZXJsYXl7LXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO2FuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHN9LmFwbGF6YW1lLW92ZXJsYXkuYXBsYXphbWUtb3ZlcmxheS1oaWRlLC5hcGxhemFtZS1vdmVybGF5LmFwbGF6YW1lLW92ZXJsYXktc2hvd3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi42czthbmltYXRpb24tZHVyYXRpb246LjZzOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtb3ZlcmxheTthbmltYXRpb24tbmFtZTphcGxhemFtZS1vdmVybGF5fS5hcGxhemFtZS1vdmVybGF5LmFwbGF6YW1lLW92ZXJsYXktaGlkZXstd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246cmV2ZXJzZTthbmltYXRpb24tZGlyZWN0aW9uOnJldmVyc2V9JzsiLCJtb2R1bGUuZXhwb3J0cyA9ICc8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+ICA8aGVhZGVyIGNsYXNzPVwiYXBsYXphbWVcIj48L2hlYWRlcj4gIDxzZWN0aW9uIGNsYXNzPVwiaW5mb1wiPiAgICBFbGlnZSBlbCBuw7ptZXJvIGRlIG1lc2VzIHkgbGEgY3VvdGEgcXVlIG3DoXMgdGUgY29udmVuZ2FuICA8L3NlY3Rpb24+ICA8ZGl2IGNsYXNzPVwiY2hvaWNlcy13cmFwcGVyXCI+ICAgIDwlIGZvciggdmFyIGkgPSBjaG9pY2VzLmxlbmd0aCAtIDEgOyBpID49IDAgOyBpLS0gKSB7ICU+ICAgIDxidXR0b24gbmctcmVwZWF0PVwiY2hvaWNlIGluIGNob2ljZXNcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjaG9pY2VcIiBuZy1jbGljaz1cInNlbGVjdENob2ljZShjaG9pY2UpXCIgbmctY2xhc3M9XCJ7IGFjdGl2ZTogY2hvaWNlID09PSBjdXJyZW50Q2hvaWNlIH1cIj4gICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPiAgICAgICAgPGRpdiBjbGFzcz1cIm51bS1pbnN0YWxtZW50c1wiPiAgICAgICAgICA8c3Bhbj48JT0gY2hvaWNlc1tpXS5udW1faW5zdGFsbWVudHMgJT48L3NwYW4+Jm5ic3A7PHNwYW4+PCU9IG1vbnRocyhjaG9pY2VzW2ldLm51bV9pbnN0YWxtZW50cykgJT48L3NwYW4+ICAgICAgICA8L2Rpdj4gICAgICAgIDxkaXYgY2xhc3M9XCJhbW91bnRcIj4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbW91bnQtYW1vdW50XCI+PCU9IGdldEFtb3VudChjaG9pY2VzW2ldLmFtb3VudCkgJT48L3NwYW4+PCEtLSAgICAgICAgICAtLT48c3BhbiBjbGFzcz1cImFtb3VudC1jdXJyZW5jeVwiPuKCrDwvc3Bhbj48IS0tICAgICAgICAgIC0tPjxzcGFuIGNsYXNzPVwiYW1vdW50LXBlci1tb250aFwiPi9tZXM8L3NwYW4+PC9kaXY+ICAgICAgPC9kaXY+ICAgIDwvYnV0dG9uPiAgICA8JSB9ICU+ICA8L2Rpdj4gIDxzZWN0aW9uIGNsYXNzPVwidGFlXCI+VEFFIG3DoXhpbW86IDwlPSBnZXRBbW91bnQoY2hvaWNlc1swXS5hbm51YWxfZXF1aXZhbGVudCkgJT4lPC9zZWN0aW9uPiAgPHNlY3Rpb24gY2xhc3M9XCJob3ctaXQtd29ya3NcIj4gICAgPGhlYWRlcj7Cv0PDs21vIGZ1bmNpb25hPzwvaGVhZGVyPiAgICA8ZGl2IGNsYXNzPVwiaW5mby13cmFwcGVyXCI+ICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj4gICAgICAgIDxoMz5FbGlnZSBBcGxhemFtZTwvaDM+ICAgICAgICA8cD5lbiBsYSB0aWVuZGEsIGN1YW5kbyB2YXlhcyBhIHBhZ2FyIGVsIHBlZGlkby48L3A+ICAgICAgPC9kaXY+ICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj4gICAgICAgIDxoMz5EZWNpZGUgY8OzbW8gcXVpZXJlcyBwYWdhcjwvaDM+ICAgICAgICA8cD5IYXN0YSBlbiAxMiBjdW90YXMsIHBhZ2FuZG8gY29uIHRhcmpldGEuPC9wPiAgICAgIDwvZGl2PiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+ICAgICAgICA8aDM+RGlzZnJ1dGEgZGUgdHUgY29tcHJhPC9oMz4gICAgICAgIDxwPkRlc2RlIEFwbGF6YW1lIGVzdGFyZW1vcyBkaXNwb25pYmxlcyBwb3Igc2kgbmVjZXNpdGFzIGN1YWxxdWllciBjb3NhLiDCoUEgZGlzZnJ1dGFyITwvcD4gICAgICA8L2Rpdj4gICAgPC9kaXY+ICA8L3NlY3Rpb24+PC9kaXY+PGRpdiBjbGFzcz1cImN0YVwiPiAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGJ1dHRvbi13cmFwcGVyXCI+ICAgIDxidXR0b24gY2xhc3M9XCJidG4gbGcgYnRuLWJsb2NrIHdoaXRlXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtbW9kYWw9XCJkaXNtaXNzXCI+Vm9sdmVyIGEgVGllbmRhPC9idXR0b24+ICA8L2Rpdj4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBidXR0b24td3JhcHBlclwiPiAgICA8YSBjbGFzcz1cImJ0biBsZyBidG4tYmxvY2tcIiBocmVmPVwiaHR0cDovL2FwbGF6YW1lLmNvbS9ob3cvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+wr9RdWllcmVzIHNhYmVyIG3DoXM/PC9hPiAgPC9kaXY+PC9kaXY+JzsiLCJtb2R1bGUuZXhwb3J0cyA9ICc8ZGl2IGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LWluc3RhbG1lbnRzXCI+ICA8c3BhbiBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1mcm9tXCI+ZGVzZGUmbmJzcDs8L3NwYW4+PCEtLSAgLS0+PHN0cm9uZyBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1hbW91bnRcIj4gICAgPHNwYW4gY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtcHJpY2VcIj48JT0gZ2V0QW1vdW50KGNob2ljZS5hbW91bnQpICU+PC9zcGFuPjwhLS0gICAgLS0+PHNwYW4gY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtY3VycmVuY3lcIj7igqw8L3NwYW4+ICA8L3N0cm9uZz48IS0tICAtLT48c3ViIGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LXBlci1tb250aFwiPi9tZXM8L3N1Yj48IS0tICAtLT48c3BhbiBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1pbnN0YWxtZW50cy13cmFwcGVyXCI+ICAgIDxzcGFuPiZuYnNwO2VuJm5ic3A7PC9zcGFuPiAgICA8ZW0gY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtaW5zdGFsbWVudHMtbnVtXCI+MTI8L2VtPiAgICA8c3Bhbj4mbmJzcDtjdW90YXM8L3NwYW4+ICA8L3NwYW4+PC9kaXY+PHN0eWxlIHJlbD1cInN0eWxlc2hlZXRcIj48JT0gb3B0aW9ucy53aWRnZXQuc3R5bGVzICU+PC9zdHlsZT4nOyIsIi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nXG4gKiBCZXppZXJFYXNpbmcgLSB1c2UgYmV6aWVyIGN1cnZlIGZvciB0cmFuc2l0aW9uIGVhc2luZyBmdW5jdGlvblxuICogYnkgR2HDq3RhbiBSZW5hdWRlYXUgMjAxNCAtIDIwMTUg4oCTIE1JVCBMaWNlbnNlXG4gKi9cblxuLy8gVGhlc2UgdmFsdWVzIGFyZSBlc3RhYmxpc2hlZCBieSBlbXBpcmljaXNtIHdpdGggdGVzdHMgKHRyYWRlb2ZmOiBwZXJmb3JtYW5jZSBWUyBwcmVjaXNpb24pXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA0O1xudmFyIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMTtcbnZhciBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDE7XG52YXIgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcblxudmFyIGtTcGxpbmVUYWJsZVNpemUgPSAxMTtcbnZhciBrU2FtcGxlU3RlcFNpemUgPSAxLjAgLyAoa1NwbGluZVRhYmxlU2l6ZSAtIDEuMCk7XG5cbnZhciBmbG9hdDMyQXJyYXlTdXBwb3J0ZWQgPSB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAnZnVuY3Rpb24nO1xuXG5mdW5jdGlvbiBBIChhQTEsIGFBMikgeyByZXR1cm4gMS4wIC0gMy4wICogYUEyICsgMy4wICogYUExOyB9XG5mdW5jdGlvbiBCIChhQTEsIGFBMikgeyByZXR1cm4gMy4wICogYUEyIC0gNi4wICogYUExOyB9XG5mdW5jdGlvbiBDIChhQTEpICAgICAgeyByZXR1cm4gMy4wICogYUExOyB9XG5cbi8vIFJldHVybnMgeCh0KSBnaXZlbiB0LCB4MSwgYW5kIHgyLCBvciB5KHQpIGdpdmVuIHQsIHkxLCBhbmQgeTIuXG5mdW5jdGlvbiBjYWxjQmV6aWVyIChhVCwgYUExLCBhQTIpIHsgcmV0dXJuICgoQShhQTEsIGFBMikgKiBhVCArIEIoYUExLCBhQTIpKSAqIGFUICsgQyhhQTEpKSAqIGFUOyB9XG5cbi8vIFJldHVybnMgZHgvZHQgZ2l2ZW4gdCwgeDEsIGFuZCB4Miwgb3IgZHkvZHQgZ2l2ZW4gdCwgeTEsIGFuZCB5Mi5cbmZ1bmN0aW9uIGdldFNsb3BlIChhVCwgYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIEEoYUExLCBhQTIpICogYVQgKiBhVCArIDIuMCAqIEIoYUExLCBhQTIpICogYVQgKyBDKGFBMSk7IH1cblxuZnVuY3Rpb24gYmluYXJ5U3ViZGl2aWRlIChhWCwgYUEsIGFCLCBtWDEsIG1YMikge1xuICB2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcbiAgZG8ge1xuICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgfVxuICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuICByZXR1cm4gY3VycmVudFQ7XG59XG5cbmZ1bmN0aW9uIG5ld3RvblJhcGhzb25JdGVyYXRlIChhWCwgYUd1ZXNzVCwgbVgxLCBtWDIpIHtcbiBmb3IgKHZhciBpID0gMDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgIHZhciBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG4gICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICB9XG4gICB2YXIgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiB9XG4gcmV0dXJuIGFHdWVzc1Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmV6aWVyIChtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgaWYgKCEoMCA8PSBtWDEgJiYgbVgxIDw9IDEgJiYgMCA8PSBtWDIgJiYgbVgyIDw9IDEpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdiZXppZXIgeCB2YWx1ZXMgbXVzdCBiZSBpbiBbMCwgMV0gcmFuZ2UnKTtcbiAgfVxuXG4gIC8vIFByZWNvbXB1dGUgc2FtcGxlcyB0YWJsZVxuICB2YXIgc2FtcGxlVmFsdWVzID0gZmxvYXQzMkFycmF5U3VwcG9ydGVkID8gbmV3IEZsb2F0MzJBcnJheShrU3BsaW5lVGFibGVTaXplKSA6IG5ldyBBcnJheShrU3BsaW5lVGFibGVTaXplKTtcbiAgaWYgKG1YMSAhPT0gbVkxIHx8IG1YMiAhPT0gbVkyKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrU3BsaW5lVGFibGVTaXplOyArK2kpIHtcbiAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRGb3JYIChhWCkge1xuICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wO1xuICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICB2YXIgbGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxO1xuXG4gICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT09IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgIGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xuICAgIH1cbiAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAvLyBJbnRlcnBvbGF0ZSB0byBwcm92aWRlIGFuIGluaXRpYWwgZ3Vlc3MgZm9yIHRcbiAgICB2YXIgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgdmFyIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICoga1NhbXBsZVN0ZXBTaXplO1xuXG4gICAgdmFyIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgIGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xuICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIEJlemllckVhc2luZyAoeCkge1xuICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xuICAgICAgcmV0dXJuIHg7IC8vIGxpbmVhclxuICAgIH1cbiAgICAvLyBCZWNhdXNlIEphdmFTY3JpcHQgbnVtYmVyIGFyZSBpbXByZWNpc2UsIHdlIHNob3VsZCBndWFyYW50ZWUgdGhlIGV4dHJlbWVzIGFyZSByaWdodC5cbiAgICBpZiAoeCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmICh4ID09PSAxKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGNCZXppZXIoZ2V0VEZvclgoeCksIG1ZMSwgbVkyKTtcbiAgfTtcbn07XG4iLCIvKlxuICogY2xhc3NMaXN0LmpzOiBDcm9zcy1icm93c2VyIGZ1bGwgZWxlbWVudC5jbGFzc0xpc3QgaW1wbGVtZW50YXRpb24uXG4gKiAxLjEuMjAxNTAzMTJcbiAqXG4gKiBCeSBFbGkgR3JleSwgaHR0cDovL2VsaWdyZXkuY29tXG4gKiBMaWNlbnNlOiBEZWRpY2F0ZWQgdG8gdGhlIHB1YmxpYyBkb21haW4uXG4gKiAgIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZWxpZ3JleS9jbGFzc0xpc3QuanMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuICovXG5cbi8qZ2xvYmFsIHNlbGYsIGRvY3VtZW50LCBET01FeGNlcHRpb24gKi9cblxuLyohIEBzb3VyY2UgaHR0cDovL3B1cmwuZWxpZ3JleS5jb20vZ2l0aHViL2NsYXNzTGlzdC5qcy9ibG9iL21hc3Rlci9jbGFzc0xpc3QuanMgKi9cblxuaWYgKFwiZG9jdW1lbnRcIiBpbiBzZWxmKSB7XG5cbi8vIEZ1bGwgcG9seWZpbGwgZm9yIGJyb3dzZXJzIHdpdGggbm8gY2xhc3NMaXN0IHN1cHBvcnRcbi8vIEluY2x1ZGluZyBJRSA8IEVkZ2UgbWlzc2luZyBTVkdFbGVtZW50LmNsYXNzTGlzdFxuaWYgKCEoXCJjbGFzc0xpc3RcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKSkgXG5cdHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyAmJiAhKFwiY2xhc3NMaXN0XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcImdcIikpKSB7XG5cbihmdW5jdGlvbiAodmlldykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaWYgKCEoJ0VsZW1lbnQnIGluIHZpZXcpKSByZXR1cm47XG5cbnZhclxuXHQgIGNsYXNzTGlzdFByb3AgPSBcImNsYXNzTGlzdFwiXG5cdCwgcHJvdG9Qcm9wID0gXCJwcm90b3R5cGVcIlxuXHQsIGVsZW1DdHJQcm90byA9IHZpZXcuRWxlbWVudFtwcm90b1Byb3BdXG5cdCwgb2JqQ3RyID0gT2JqZWN0XG5cdCwgc3RyVHJpbSA9IFN0cmluZ1twcm90b1Byb3BdLnRyaW0gfHwgZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpO1xuXHR9XG5cdCwgYXJySW5kZXhPZiA9IEFycmF5W3Byb3RvUHJvcF0uaW5kZXhPZiB8fCBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdHZhclxuXHRcdFx0ICBpID0gMFxuXHRcdFx0LCBsZW4gPSB0aGlzLmxlbmd0aFxuXHRcdDtcblx0XHRmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fVxuXHQvLyBWZW5kb3JzOiBwbGVhc2UgYWxsb3cgY29udGVudCBjb2RlIHRvIGluc3RhbnRpYXRlIERPTUV4Y2VwdGlvbnNcblx0LCBET01FeCA9IGZ1bmN0aW9uICh0eXBlLCBtZXNzYWdlKSB7XG5cdFx0dGhpcy5uYW1lID0gdHlwZTtcblx0XHR0aGlzLmNvZGUgPSBET01FeGNlcHRpb25bdHlwZV07XG5cdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblx0fVxuXHQsIGNoZWNrVG9rZW5BbmRHZXRJbmRleCA9IGZ1bmN0aW9uIChjbGFzc0xpc3QsIHRva2VuKSB7XG5cdFx0aWYgKHRva2VuID09PSBcIlwiKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXgoXG5cdFx0XHRcdCAgXCJTWU5UQVhfRVJSXCJcblx0XHRcdFx0LCBcIkFuIGludmFsaWQgb3IgaWxsZWdhbCBzdHJpbmcgd2FzIHNwZWNpZmllZFwiXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoL1xccy8udGVzdCh0b2tlbikpIHtcblx0XHRcdHRocm93IG5ldyBET01FeChcblx0XHRcdFx0ICBcIklOVkFMSURfQ0hBUkFDVEVSX0VSUlwiXG5cdFx0XHRcdCwgXCJTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXJcIlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGFyckluZGV4T2YuY2FsbChjbGFzc0xpc3QsIHRva2VuKTtcblx0fVxuXHQsIENsYXNzTGlzdCA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0dmFyXG5cdFx0XHQgIHRyaW1tZWRDbGFzc2VzID0gc3RyVHJpbS5jYWxsKGVsZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIilcblx0XHRcdCwgY2xhc3NlcyA9IHRyaW1tZWRDbGFzc2VzID8gdHJpbW1lZENsYXNzZXMuc3BsaXQoL1xccysvKSA6IFtdXG5cdFx0XHQsIGkgPSAwXG5cdFx0XHQsIGxlbiA9IGNsYXNzZXMubGVuZ3RoXG5cdFx0O1xuXHRcdGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdHRoaXMucHVzaChjbGFzc2VzW2ldKTtcblx0XHR9XG5cdFx0dGhpcy5fdXBkYXRlQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLnRvU3RyaW5nKCkpO1xuXHRcdH07XG5cdH1cblx0LCBjbGFzc0xpc3RQcm90byA9IENsYXNzTGlzdFtwcm90b1Byb3BdID0gW11cblx0LCBjbGFzc0xpc3RHZXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc0xpc3QodGhpcyk7XG5cdH1cbjtcbi8vIE1vc3QgRE9NRXhjZXB0aW9uIGltcGxlbWVudGF0aW9ucyBkb24ndCBhbGxvdyBjYWxsaW5nIERPTUV4Y2VwdGlvbidzIHRvU3RyaW5nKClcbi8vIG9uIG5vbi1ET01FeGNlcHRpb25zLiBFcnJvcidzIHRvU3RyaW5nKCkgaXMgc3VmZmljaWVudCBoZXJlLlxuRE9NRXhbcHJvdG9Qcm9wXSA9IEVycm9yW3Byb3RvUHJvcF07XG5jbGFzc0xpc3RQcm90by5pdGVtID0gZnVuY3Rpb24gKGkpIHtcblx0cmV0dXJuIHRoaXNbaV0gfHwgbnVsbDtcbn07XG5jbGFzc0xpc3RQcm90by5jb250YWlucyA9IGZ1bmN0aW9uICh0b2tlbikge1xuXHR0b2tlbiArPSBcIlwiO1xuXHRyZXR1cm4gY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKSAhPT0gLTE7XG59O1xuY2xhc3NMaXN0UHJvdG8uYWRkID0gZnVuY3Rpb24gKCkge1xuXHR2YXJcblx0XHQgIHRva2VucyA9IGFyZ3VtZW50c1xuXHRcdCwgaSA9IDBcblx0XHQsIGwgPSB0b2tlbnMubGVuZ3RoXG5cdFx0LCB0b2tlblxuXHRcdCwgdXBkYXRlZCA9IGZhbHNlXG5cdDtcblx0ZG8ge1xuXHRcdHRva2VuID0gdG9rZW5zW2ldICsgXCJcIjtcblx0XHRpZiAoY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKSA9PT0gLTEpIHtcblx0XHRcdHRoaXMucHVzaCh0b2tlbik7XG5cdFx0XHR1cGRhdGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0d2hpbGUgKCsraSA8IGwpO1xuXG5cdGlmICh1cGRhdGVkKSB7XG5cdFx0dGhpcy5fdXBkYXRlQ2xhc3NOYW1lKCk7XG5cdH1cbn07XG5jbGFzc0xpc3RQcm90by5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdHZhclxuXHRcdCAgdG9rZW5zID0gYXJndW1lbnRzXG5cdFx0LCBpID0gMFxuXHRcdCwgbCA9IHRva2Vucy5sZW5ndGhcblx0XHQsIHRva2VuXG5cdFx0LCB1cGRhdGVkID0gZmFsc2Vcblx0XHQsIGluZGV4XG5cdDtcblx0ZG8ge1xuXHRcdHRva2VuID0gdG9rZW5zW2ldICsgXCJcIjtcblx0XHRpbmRleCA9IGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbik7XG5cdFx0d2hpbGUgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0dGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0dXBkYXRlZCA9IHRydWU7XG5cdFx0XHRpbmRleCA9IGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbik7XG5cdFx0fVxuXHR9XG5cdHdoaWxlICgrK2kgPCBsKTtcblxuXHRpZiAodXBkYXRlZCkge1xuXHRcdHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpO1xuXHR9XG59O1xuY2xhc3NMaXN0UHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gKHRva2VuLCBmb3JjZSkge1xuXHR0b2tlbiArPSBcIlwiO1xuXG5cdHZhclxuXHRcdCAgcmVzdWx0ID0gdGhpcy5jb250YWlucyh0b2tlbilcblx0XHQsIG1ldGhvZCA9IHJlc3VsdCA/XG5cdFx0XHRmb3JjZSAhPT0gdHJ1ZSAmJiBcInJlbW92ZVwiXG5cdFx0OlxuXHRcdFx0Zm9yY2UgIT09IGZhbHNlICYmIFwiYWRkXCJcblx0O1xuXG5cdGlmIChtZXRob2QpIHtcblx0XHR0aGlzW21ldGhvZF0odG9rZW4pO1xuXHR9XG5cblx0aWYgKGZvcmNlID09PSB0cnVlIHx8IGZvcmNlID09PSBmYWxzZSkge1xuXHRcdHJldHVybiBmb3JjZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gIXJlc3VsdDtcblx0fVxufTtcbmNsYXNzTGlzdFByb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5qb2luKFwiIFwiKTtcbn07XG5cbmlmIChvYmpDdHIuZGVmaW5lUHJvcGVydHkpIHtcblx0dmFyIGNsYXNzTGlzdFByb3BEZXNjID0ge1xuXHRcdCAgZ2V0OiBjbGFzc0xpc3RHZXR0ZXJcblx0XHQsIGVudW1lcmFibGU6IHRydWVcblx0XHQsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHR9O1xuXHR0cnkge1xuXHRcdG9iakN0ci5kZWZpbmVQcm9wZXJ0eShlbGVtQ3RyUHJvdG8sIGNsYXNzTGlzdFByb3AsIGNsYXNzTGlzdFByb3BEZXNjKTtcblx0fSBjYXRjaCAoZXgpIHsgLy8gSUUgOCBkb2Vzbid0IHN1cHBvcnQgZW51bWVyYWJsZTp0cnVlXG5cdFx0aWYgKGV4Lm51bWJlciA9PT0gLTB4N0ZGNUVDNTQpIHtcblx0XHRcdGNsYXNzTGlzdFByb3BEZXNjLmVudW1lcmFibGUgPSBmYWxzZTtcblx0XHRcdG9iakN0ci5kZWZpbmVQcm9wZXJ0eShlbGVtQ3RyUHJvdG8sIGNsYXNzTGlzdFByb3AsIGNsYXNzTGlzdFByb3BEZXNjKTtcblx0XHR9XG5cdH1cbn0gZWxzZSBpZiAob2JqQ3RyW3Byb3RvUHJvcF0uX19kZWZpbmVHZXR0ZXJfXykge1xuXHRlbGVtQ3RyUHJvdG8uX19kZWZpbmVHZXR0ZXJfXyhjbGFzc0xpc3RQcm9wLCBjbGFzc0xpc3RHZXR0ZXIpO1xufVxuXG59KHNlbGYpKTtcblxufSBlbHNlIHtcbi8vIFRoZXJlIGlzIGZ1bGwgb3IgcGFydGlhbCBuYXRpdmUgY2xhc3NMaXN0IHN1cHBvcnQsIHNvIGp1c3QgY2hlY2sgaWYgd2UgbmVlZFxuLy8gdG8gbm9ybWFsaXplIHRoZSBhZGQvcmVtb3ZlIGFuZCB0b2dnbGUgQVBJcy5cblxuKGZ1bmN0aW9uICgpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0dmFyIHRlc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIik7XG5cblx0dGVzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImMxXCIsIFwiYzJcIik7XG5cblx0Ly8gUG9seWZpbGwgZm9yIElFIDEwLzExIGFuZCBGaXJlZm94IDwyNiwgd2hlcmUgY2xhc3NMaXN0LmFkZCBhbmRcblx0Ly8gY2xhc3NMaXN0LnJlbW92ZSBleGlzdCBidXQgc3VwcG9ydCBvbmx5IG9uZSBhcmd1bWVudCBhdCBhIHRpbWUuXG5cdGlmICghdGVzdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYzJcIikpIHtcblx0XHR2YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24obWV0aG9kKSB7XG5cdFx0XHR2YXIgb3JpZ2luYWwgPSBET01Ub2tlbkxpc3QucHJvdG90eXBlW21ldGhvZF07XG5cblx0XHRcdERPTVRva2VuTGlzdC5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHRva2VuKSB7XG5cdFx0XHRcdHZhciBpLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRcdHRva2VuID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0XHRcdG9yaWdpbmFsLmNhbGwodGhpcywgdG9rZW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0Y3JlYXRlTWV0aG9kKCdhZGQnKTtcblx0XHRjcmVhdGVNZXRob2QoJ3JlbW92ZScpO1xuXHR9XG5cblx0dGVzdEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImMzXCIsIGZhbHNlKTtcblxuXHQvLyBQb2x5ZmlsbCBmb3IgSUUgMTAgYW5kIEZpcmVmb3ggPDI0LCB3aGVyZSBjbGFzc0xpc3QudG9nZ2xlIGRvZXMgbm90XG5cdC8vIHN1cHBvcnQgdGhlIHNlY29uZCBhcmd1bWVudC5cblx0aWYgKHRlc3RFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImMzXCIpKSB7XG5cdFx0dmFyIF90b2dnbGUgPSBET01Ub2tlbkxpc3QucHJvdG90eXBlLnRvZ2dsZTtcblxuXHRcdERPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24odG9rZW4sIGZvcmNlKSB7XG5cdFx0XHRpZiAoMSBpbiBhcmd1bWVudHMgJiYgIXRoaXMuY29udGFpbnModG9rZW4pID09PSAhZm9yY2UpIHtcblx0XHRcdFx0cmV0dXJuIGZvcmNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIF90b2dnbGUuY2FsbCh0aGlzLCB0b2tlbik7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHR9XG5cblx0dGVzdEVsZW1lbnQgPSBudWxsO1xufSgpKTtcblxufVxuXG59XG5cbiIsIi8qXG4gKiBldmVudHMuanMgLSBTaW5nbGUgbGlicmFyeSB0byBoYW5kbGUgZ2VuZXJpYyBldmVudHNcblxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IEplc8O6cyBNYW51ZWwgR2VybWFkZSBDYXN0acOxZWlyYXMgPGplc3VzQGdlcm1hZGUuZXM+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqXG4gKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cbiAgaWYgKCB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyApIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIGlmKCByb290ICkge1xuICAgIGlmKCByb290LmRlZmluZSApIHtcbiAgICAgIHJvb3QuZGVmaW5lKCdFdmVudHMnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWN0b3J5KCk7IH0gKTtcbiAgICB9IGVsc2UgaWYoIHJvb3QuYW5ndWxhciApIHtcbiAgICAgIHJvb3QuYW5ndWxhci5tb2R1bGUoJ2V2ZW50c1dyYXBwZXInLCBbXSkuZmFjdG9yeSgnRXZlbnRzJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFjdG9yeSh0cnVlKTsgfSk7XG4gICAgfSBlbHNlIGlmKCAhcm9vdC5FdmVudHMgKSB7XG4gICAgICByb290LkV2ZW50cyA9IGZhY3RvcnkoKTtcbiAgICB9XG4gIH1cblxufSkodGhpcywgZnVuY3Rpb24gKG5nKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuICB2YXIgbWV0aG9kcyA9IHtcbiAgICBzdGQ6IHsgb246ICdvbicsIG9uY2U6ICdvbmNlJywgb2ZmOiAnb2ZmJywgdHJpZ2dlcjogJ3RyaWdnZXInIH0sXG4gICAgc2FmZTogeyBvbjogJyQkb24nLCBvbmNlOiAnJCRvbmNlJywgb2ZmOiAnJCRvZmYnLCB0cmlnZ2VyOiAnJCR0cmlnZ2VyJyB9XG4gIH07XG5cbiAgZnVuY3Rpb24gRXZlbnQgKG5hbWUsIGFyZ3MsIGNhbGxlcikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hcmdzID0gYXJncztcbiAgICB0aGlzLiQkYXJncyA9IFt0aGlzXS5jb25jYXQoYXJncyk7XG4gICAgdGhpcy5jYWxsZXIgPSBjYWxsZXI7XG4gIH1cblxuICBFdmVudC5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRNZXRob2RzIChuZ1NhZmUpIHtcbiAgICByZXR1cm4gbmdTYWZlID8gbWV0aG9kcy5zYWZlIDogbWV0aG9kcy5zdGQ7XG4gIH1cblxuXHRmdW5jdGlvbiBfYWRkTGlzdGVuZXIgKGhhbmRsZXJzLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgaWYoICEgaGFuZGxlciBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGhhbmRsZXJzLnB1c2goeyBoYW5kbGVyOiBoYW5kbGVyLCBjb250ZXh0OiBjb250ZXh0IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RyaWdnZXJFdmVudCAoZSwgaGFuZGxlcnMpIHtcbiAgICBpZiggaGFuZGxlcnMgKSB7XG4gICAgICBmb3IoIHZhciBpID0gMCwgbGVuID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICAgIGhhbmRsZXJzW2ldLmhhbmRsZXIuYXBwbHkoZS5jYWxsZXIsIGUuJCRhcmdzKTtcbiAgICAgICAgaWYoIGUuZGVmYXVsdFByZXZlbnRlZCApIHtcbiAgICAgICAgICByZXR1cm4gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBsZW47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2VtcHR5TGlzdGVuZXIgKGhhbmRsZXJzKSB7XG4gICAgaWYoIGhhbmRsZXJzICkge1xuICAgICAgaGFuZGxlcnMuc3BsaWNlKDAsIGhhbmRsZXJzLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX3JlbW92ZUxpc3RlbmVyIChoYW5kbGVycywgaGFuZGxlcikge1xuICAgIGlmKCBoYW5kbGVycyApIHtcbiAgICAgIGZvciggdmFyIGkgPSAwLCBsZW4gPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBsZW47ICkge1xuICAgICAgICBpZiggaGFuZGxlcnNbaV0uaGFuZGxlciA9PT0gaGFuZGxlciApIHtcbiAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgbGVuLS07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gRXZlbnRzICh0YXJnZXQsIG5nU2FmZSkge1xuICAgIHRhcmdldCA9IHRhcmdldCB8fCB0aGlzO1xuXG4gICAgdmFyIGxpc3RlbmVycyA9IHt9LFxuICAgICAgICBsaXN0ZW5lcnNPbmNlID0ge30sXG4gICAgICAgIG1ldGhvZCA9IGdldE1ldGhvZHMobmdTYWZlKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrRWFjaCAoX21ldGhvZCwgZXZlbnROYW1lLCBhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgICBpZiggZXZlbnROYW1lIGluc3RhbmNlb2YgQXJyYXkgKSB7XG4gICAgICAgIGV2ZW50TmFtZS5mb3JFYWNoKGZ1bmN0aW9uIChfZXZlbnROYW1lKSB7IHRhcmdldFtfbWV0aG9kXShfZXZlbnROYW1lLCBhcmcxLCBhcmcyLCBhcmczKTsgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYoIHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2V2ZW50IG5hbWUgc2hvdWxkIGJlIGEgc3RyaW5nJyk7XG4gICAgICB9XG4gICAgICBpZiggLyAvLnRlc3QoZXZlbnROYW1lKSApIHtcbiAgICAgICAgdGFyZ2V0W19tZXRob2RdKGV2ZW50TmFtZS5zcGxpdCgvICsvKSwgYXJnMSwgYXJnMiwgYXJnMyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRhcmdldFttZXRob2Qub25dID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlciwgY29udGV4dCkge1xuICAgICAgaWYoIGNoZWNrRWFjaChtZXRob2Qub24sIGV2ZW50TmFtZSwgaGFuZGxlciwgY29udGV4dCkgKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lcnNbZXZlbnROYW1lXSA9IGxpc3RlbmVyc1tldmVudE5hbWVdIHx8IFtdO1xuICAgICAgX2FkZExpc3RlbmVyKGxpc3RlbmVyc1tldmVudE5hbWVdLCBoYW5kbGVyLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcblxuICAgIHRhcmdldFttZXRob2Qub25jZV0gPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgICBpZiggY2hlY2tFYWNoKG1ldGhvZC5vbmNlLCBldmVudE5hbWUsIGhhbmRsZXIsIGNvbnRleHQpICkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfVxuICAgICAgbGlzdGVuZXJzT25jZVtldmVudE5hbWVdID0gbGlzdGVuZXJzT25jZVtldmVudE5hbWVdIHx8IFtdO1xuICAgICAgX2FkZExpc3RlbmVyKGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXSwgaGFuZGxlciwgY29udGV4dCk7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICB0YXJnZXRbbWV0aG9kLnRyaWdnZXJdID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgYXR0cnMsIGNhbGxlcikge1xuICAgICAgaWYoIGNoZWNrRWFjaChtZXRob2QudHJpZ2dlciwgZXZlbnROYW1lLCBhdHRycywgY2FsbGVyKSApIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICAgIHZhciBlID0gbmV3IEV2ZW50KGV2ZW50TmFtZSwgYXR0cnMsIGNhbGxlcik7XG5cbiAgICAgIF90cmlnZ2VyRXZlbnQoZSwgbGlzdGVuZXJzW2V2ZW50TmFtZV0pO1xuXG4gICAgICBpZiggIWUuZGVmYXVsdFByZXZlbnRlZCApIHtcbiAgICAgICAgdmFyIGxlbiA9IF90cmlnZ2VyRXZlbnQoZSwgbGlzdGVuZXJzT25jZVtldmVudE5hbWVdKTtcbiAgICAgICAgaWYoIGxlbiApIHtcbiAgICAgICAgICBsaXN0ZW5lcnNPbmNlW2V2ZW50TmFtZV0uc3BsaWNlKDAsIGxlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcblxuICAgIHRhcmdldFttZXRob2Qub2ZmXSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgIGlmKCBjaGVja0VhY2gobWV0aG9kLm9mZiwgZXZlbnROYW1lLCBoYW5kbGVyKSApIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICAgIGlmKCBoYW5kbGVyID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgIF9lbXB0eUxpc3RlbmVyKGxpc3RlbmVyc1tldmVudE5hbWVdKTtcbiAgICAgICAgX2VtcHR5TGlzdGVuZXIobGlzdGVuZXJzT25jZVtldmVudE5hbWVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcnNbZXZlbnROYW1lXSwgaGFuZGxlcik7XG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcnNPbmNlW2V2ZW50TmFtZV0sIGhhbmRsZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIEV2ZW50cztcbn0pO1xuIiwiXG4vLyBmYWN0b3J5IGh0dHBcblxudmFyICRxID0gcmVxdWlyZSgncS1wcm9taXNlJyksXG4gICAgXyA9IHJlcXVpcmUoJ25pdHJvLXRvb2xzL2V4dGVuZCcpO1xuXG5mdW5jdGlvbiByZXNvbHZlRnVuY3Rpb25zIChvLCBhcmdzLCB0aGlzQXJnKSB7XG4gIGZvciggdmFyIGtleSBpbiBvICkge1xuICAgIGlmKCBvW2tleV0gaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICAgIG9ba2V5XSA9IG9ba2V5XS5hcHBseSh0aGlzQXJnLCBhcmdzIHx8IFtdKTtcbiAgICB9IGVsc2UgaWYoIHR5cGVvZiBvW2tleV0gPT09ICdvYmplY3QnICYmIG9ba2V5XSAhPT0gbnVsbCApIHtcbiAgICAgIG9ba2V5XSA9IHJlc29sdmVGdW5jdGlvbnMob1trZXldLCBhcmdzLCB0aGlzQXJnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG87XG59XG5cbmZ1bmN0aW9uIGhlYWRlclRvVGl0bGVTbHVnKHRleHQpIHtcbiAgLy8gY29uc29sZS5sb2coJ2hlYWRlclRvVGl0bGVTbHVnJywgdGV4dCk7XG4gIHZhciBrZXkgPSB0ZXh0LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIGZ1bmN0aW9uIChtYXRjaCwgbG93ZXIsIHVwcGVyKSB7XG4gICAgICByZXR1cm4gbG93ZXIgKyAnLScgKyB1cHBlcjtcbiAgfSk7XG4gIGtleSA9IGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cigxKTtcblxuICByZXR1cm4ga2V5O1xufVxuXG5mdW5jdGlvbiBoZWFkZXJUb0NhbWVsQ2FzZSh0ZXh0KSB7XG4gIHZhciBrZXkgPSB0ZXh0WzBdLnRvTG93ZXJDYXNlKCkgKyB0ZXh0LnN1YnN0cigxKTtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC8oW2Etel0pLShbQS1aXSkvZywgZnVuY3Rpb24gKG1hdGNoLCBsb3dlciwgdXBwZXIpIHtcbiAgICByZXR1cm4gbG93ZXIgKyB1cHBlcjtcbiAgfSk7XG59XG5cbnZhciBSRV9jb250ZW50VHlwZSA9IC8oW15cXC9dKylcXC8oW14rXStcXCspPyguKikvO1xuZnVuY3Rpb24gcGFyc2VDb250ZW50VHlwZShjb250ZW50VHlwZSwgdGV4dCwgeG1sKSB7XG4gIHZhciBtYXRjaGVzID0gY29udGVudFR5cGUgJiYgY29udGVudFR5cGUubWF0Y2goUkVfY29udGVudFR5cGUpO1xuICByZXR1cm4gbWF0Y2hlcyAmJiAoIG1hdGNoZXNbM10gPT09ICdqc29uJyA/IEpTT04ucGFyc2UodGV4dCkgOiAoIG1hdGNoZXNbM10gPT09ICd4bWwnID8geG1sIDogdGV4dCApICk7XG59XG5cbmZ1bmN0aW9uIF9nZXRIZWFkZXJzIChyZXF1ZXN0KSB7XG4gIHZhciBoZWFkZXJzID0ge307XG4gIHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkucmVwbGFjZSgvXFxzKihbXlxcOl0rKVxccypcXDpcXHMqKFteXFw7XFxuXSspL2csIGZ1bmN0aW9uIChtYXRjaCwga2V5LCB2YWx1ZSkge1xuICAgICAgaGVhZGVyc1toZWFkZXJUb0NhbWVsQ2FzZShrZXkpXSA9IHZhbHVlLnRyaW0oKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRlcnM7XG59XG5cbmZ1bmN0aW9uIGhlYWRlcnNHZXR0ZXIgKHJlcXVlc3QpIHtcbiAgdmFyIGhlYWRlcnNDYWNoZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiggIWhlYWRlcnNDYWNoZSApIHtcbiAgICAgIGhlYWRlcnNDYWNoZSA9IF9nZXRIZWFkZXJzKHJlcXVlc3QpO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZGVyc0NhY2hlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVQYXJhbXMgKHBhcmFtcykge1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgZm9yKCB2YXIgcGFyYW0gaW4gcGFyYW1zICkge1xuICAgIHJlc3VsdCArPSAoIHJlc3VsdCA/ICcmJyA6ICcnICkgKyBwYXJhbSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNbcGFyYW1dKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBhZGRIZWFkZXJzVG9SZXF1ZXN0IChyZXEsIGhlYWRlcnMpIHtcbiAgZm9yKCB2YXIga2V5IGluIGhlYWRlcnMgKSB7XG4gICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoIGhlYWRlclRvVGl0bGVTbHVnKGtleSksIGhlYWRlcnNba2V5XSApO1xuICB9XG59XG5cbnZhciBkZWZhdWx0U2V0dGluZ3MgPSB7fTtcblxuaHR0cC5jb25maWcgPSBmdW5jdGlvbiAoc2V0dGluZ3MpIHtcbiAgXy5tZXJnZShkZWZhdWx0U2V0dGluZ3MsIHNldHRpbmdzKTtcbiAgcmV0dXJuIGh0dHA7XG59O1xuXG5mdW5jdGlvbiBodHRwICh1cmwsIGNvbmZpZykge1xuXG4gIGlmKCBjb25maWcgPT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyAmJiB1cmwgIT09IG51bGwgKSB7XG4gICAgY29uZmlnID0gdXJsO1xuICAgIHVybCA9IGNvbmZpZy51cmw7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSB1cmw7XG4gIH1cblxuICBjb25maWcgPSBfLm1lcmdlKF8uY29weShkZWZhdWx0U2V0dGluZ3MpLF8uY29weShjb25maWcpKTtcbiAgY29uZmlnID0gcmVzb2x2ZUZ1bmN0aW9ucyggY29uZmlnLCBbY29uZmlnXSwgbnVsbCApO1xuICBjb25maWcubWV0aG9kID0gKCBjb25maWcubWV0aG9kIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpO1xuXG4gIGlmKCB0eXBlb2YgY29uZmlnLnVybCAhPT0gJ3N0cmluZycgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1cmwgc2hvdWxkIGJlIGEgc3RyaW5nJyk7XG4gIH1cblxuICByZXR1cm4gJHEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgdmFyIHJlcXVlc3QgPSBudWxsO1xuXG4gICAgdHJ5IHsgLy8gRmlyZWZveCwgT3BlcmEgOC4wKywgU2FmYXJpXG4gICAgICAgIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB9IGNhdGNoIChlKSB7IC8vIEludGVybmV0IEV4cGxvcmVyXG4gICAgICAgIHRyeSB7IHJlcXVlc3QgPSBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAnKTsgfSAgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgICAgIGNhdGNoIChlcikgeyByZXF1ZXN0ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7IH0gIC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgIH1cbiAgICBpZiggcmVxdWVzdCA9PT0gbnVsbCApIHsgdGhyb3cgJ0Jyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBIVFRQIFJlcXVlc3QnOyB9XG5cbiAgICBpZiggY29uZmlnLnBhcmFtcyApIHtcbiAgICAgIHVybCArPSAoIC9cXD8vLnRlc3QodXJsKSA/ICcmJyA6ICc/JyApICsgc2VyaWFsaXplUGFyYW1zKCBjb25maWcucGFyYW1zICk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKCBjb25maWcubWV0aG9kLCB1cmwgKTtcblxuICAgIGlmKCBjb25maWcud2l0aENyZWRlbnRpYWxzICkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIGFkZEhlYWRlcnNUb1JlcXVlc3QocmVxdWVzdCwgY29uZmlnLmhlYWRlcnMgfHwge30gKTtcblxuICAgIHJlcXVlc3QuY29uZmlnID0gY29uZmlnO1xuICAgIGNvbmZpZy5zdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgaWYoIHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgPT09IDQgKSB7XG4gICAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICBkYXRhOiBwYXJzZUNvbnRlbnRUeXBlKHJlcXVlc3QuZ2V0UmVzcG9uc2VIZWFkZXIoJ2NvbnRlbnQtdHlwZScpLCByZXF1ZXN0LnJlc3BvbnNlVGV4dCwgcmVxdWVzdC5yZXNwb25zZVhNTCksXG4gICAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzR2V0dGVyKHJlcXVlc3QpLFxuICAgICAgICAgIHhocjogcmVxdWVzdFxuICAgICAgICB9O1xuICAgICAgICBpZiggcmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwICkge1xuICAgICAgICAgIHJlc29sdmUoIHJlc3BvbnNlICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCByZXNwb25zZSApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmKCBjb25maWcuY29udGVudFR5cGUgKSB7XG5cbiAgICAgIGlmKCBjb25maWcuZGF0YSAmJiBjb25maWcuY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi9qc29uJyAmJiB0eXBlb2YgY29uZmlnLmRhdGEgIT09ICdzdHJpbmcnICkge1xuICAgICAgICBjb25maWcuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZy5kYXRhKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiggY29uZmlnLmRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSApIHtcbiAgICAgIGNvbmZpZy5jb250ZW50VHlwZSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICB9IGVsc2UgaWYoIHR5cGVvZiBjb25maWcuZGF0YSA9PT0gJ29iamVjdCcgJiYgY29uZmlnLmRhdGEgIT09IG51bGwgKSB7XG4gICAgICBjb25maWcuY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICBpZiggY29uZmlnLmRhdGEgKSB7XG4gICAgICAgIGNvbmZpZy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnLmRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCBjb25maWcuY29udGVudFR5cGUgKSB7XG4gICAgICAvLyBhZGRIZWFkZXJzVG9SZXF1ZXN0KHJlcXVlc3QsIHsgY29udGVudFR5cGU6IGNvbmZpZy5jb250ZW50VHlwZSB9KTtcbiAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlciggJ0NvbnRlbnQtVHlwZScsIGNvbmZpZy5jb250ZW50VHlwZSApO1xuICAgIH1cblxuICAgIHJlcXVlc3Quc2VuZCggY29uZmlnLmRhdGEgKTtcblxuICB9KTtcbn1cblxuaHR0cC5zZXJpYWxpemUgPSBzZXJpYWxpemVQYXJhbXM7XG5cbmh0dHAubm9DYWNoZSA9IGZ1bmN0aW9uICh1cmwsIGNvbmZpZykge1xuICB1cmwgKz0gKCAvXFw/Ly50ZXN0KHVybCkgPyAnJicgOiAnPycgKSArICd0PScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgcmV0dXJuIGh0dHAodXJsLCBjb25maWcpO1xufTtcblxuaHR0cC5wbGFpblJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gIHJldHVybiB7XG4gICAgY29uZmlnOiByZXNwb25zZS5jb25maWcsXG4gICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcbiAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICBoZWFkZXJzOiByZXNwb25zZS5oZWFkZXJzKClcbiAgfTtcbn07XG5cblsnZ2V0JywgJ2RlbGV0ZSddLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICBodHRwW21ldGhvZF0gPSBmdW5jdGlvbiAodXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gaHR0cCh1cmwsIF8uZXh0ZW5kKF8uY29weShjb25maWcgfHwge30pLCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5bJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIGh0dHBbbWV0aG9kXSA9IGZ1bmN0aW9uICh1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiBodHRwKHVybCwgXy5leHRlbmQoXy5jb3B5KGNvbmZpZyB8fCB7fSksIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgZGF0YTogZGF0YSB8fCB7fVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG4vLyBiYXNlUGF0aFxuXG5mdW5jdGlvbiBiYXNlUGF0aCAoYnApIHtcbiAgaWYoIC9cXC8kLy50ZXN0KGJwKSApIHtcbiAgICBicCA9IGJwLnJlcGxhY2UoL1xcLyQvLCcnKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICBpZiggIXAgKSB7XG4gICAgICByZXR1cm4gYnA7XG4gICAgfVxuICAgIHJldHVybiBicCArICggL15cXC8vLnRlc3QocCkgPyAnJyA6ICcvJyApICsgcDtcbiAgfTtcbn1cblxuaHR0cC5iYXNlID0gZnVuY3Rpb24gKHVybCwgYmFzZUNvbmZpZykge1xuICB2YXIgYnAgPSBiYXNlUGF0aCh1cmwpLFxuICAgICAgYmFzZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBiYXNlZC5nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG5cbiAgYmFzZUNvbmZpZyA9IGJhc2VDb25maWcgfHwge307XG5cbiAgWydnZXQnLCAnZGVsZXRlJ10uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgYmFzZWRbbWV0aG9kXSA9IGZ1bmN0aW9uIChwLCBfY29uZmlnICkge1xuICAgICAgcmV0dXJuIGh0dHAoIGJwKHApLCBfLm1lcmdlKF8uY29weShiYXNlQ29uZmlnKSwgX2NvbmZpZywgeyBtZXRob2Q6IG1ldGhvZCB9KSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIGJhc2VkW21ldGhvZF0gPSBmdW5jdGlvbiAocCwgZGF0YSwgX2NvbmZpZyApIHtcbiAgICAgIHJldHVybiBodHRwKCBicChwKSwgXy5tZXJnZShfLmNvcHkoYmFzZUNvbmZpZyksIF9jb25maWcsIHsgbWV0aG9kOiBtZXRob2QsIGRhdGE6IGRhdGEgfSkgKTtcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gYmFzZWQ7XG59O1xuXG5odHRwLnJlc3BvbnNlRGF0YSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaHR0cDtcbiIsIlxudmFyIGFycmF5U2hpZnQgPSBbXS5zaGlmdDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQgKCkge1xuICB2YXIgZGVzdCA9IGFycmF5U2hpZnQuY2FsbChhcmd1bWVudHMpLFxuICAgICAgc3JjID0gYXJyYXlTaGlmdC5jYWxsKGFyZ3VtZW50cyksXG4gICAgICBrZXk7XG5cbiAgd2hpbGUoIHNyYyApIHtcbiAgICBmb3IoIGtleSBpbiBzcmMpIHtcbiAgICAgIGRlc3Rba2V5XSA9IHNyY1trZXldO1xuICAgIH1cbiAgICBzcmMgPSBhcnJheVNoaWZ0LmNhbGwoYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXN0O1xufTtcbiIsIlxudmFyIFJFXyQkID0gL15cXCRcXCQvLFxuICAgIGFycmF5U2hpZnQgPSBbXS5zaGlmdCxcbiAgICB0eXBlID0gcmVxdWlyZSgnLi90eXBlJyk7XG5cbmZ1bmN0aW9uIF9tZXJnZSAoKSB7XG4gICAgdmFyIGRlc3QgPSBhcnJheVNoaWZ0LmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgc3JjID0gYXJyYXlTaGlmdC5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgIGtleTtcblxuICAgIHdoaWxlKCBzcmMgKSB7XG5cbiAgICAgIGlmKCB0eXBlb2YgZGVzdCAhPT0gdHlwZW9mIHNyYyApIHtcbiAgICAgICAgICBkZXN0ID0gdHlwZS5pc0FycmF5KHNyYykgPyBbXSA6ICggdHlwZS5pc09iamVjdChzcmMpID8ge30gOiBzcmMgKTtcbiAgICAgIH1cblxuICAgICAgaWYoIHR5cGUuaXNPYmplY3Qoc3JjKSApIHtcblxuICAgICAgICBmb3IoIGtleSBpbiBzcmMgKSB7XG4gICAgICAgICAgaWYoIHNyY1trZXldID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICBkZXN0W2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSBlbHNlIGlmKCB0eXBlLmlzQXJyYXkoZGVzdFtrZXldKSApIHtcbiAgICAgICAgICAgIFtdLnB1c2guYXBwbHkoZGVzdFtrZXldLCBzcmNba2V5XSk7XG4gICAgICAgICAgfSBlbHNlIGlmKCB0eXBlLmlzT2JqZWN0KGRlc3Rba2V5XSkgKSB7XG4gICAgICAgICAgICBkZXN0W2tleV0gPSBfbWVyZ2UoZGVzdFtrZXldLCBzcmNba2V5XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3Rba2V5XSA9IHNyY1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3JjID0gYXJyYXlTaGlmdC5jYWxsKGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3Q7XG59XG5cbmZ1bmN0aW9uIG1hcE9iamVjdCAobywgaXRlcmF0ZWUpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmb3IoIHZhciBrZXkgaW4gbyApIHtcbiAgICByZXN1bHRba2V5XSA9IGl0ZXJhdGVlKG9ba2V5XSwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfY29weSAoc3JjKSB7XG4gIGlmKCB0eXBlLmlzQXJyYXkoc3JjKSApIHtcbiAgICByZXR1cm4gc3JjLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIF9jb3B5KGl0ZW0pO1xuICAgIH0pO1xuICB9XG4gIFxuICBpZiggdHlwZS5pc09iamVjdChzcmMpICkge1xuICAgIHJldHVybiBtYXBPYmplY3Qoc3JjLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIF9jb3B5KGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHNyYztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGV4dGVuZDogcmVxdWlyZSgnLi9fZXh0ZW5kJyksXG4gIG1lcmdlOiBfbWVyZ2UsXG4gIGNvcHk6IF9jb3B5XG59O1xuIiwiXG52YXIgdHlwZSA9IHJlcXVpcmUoJy4vdHlwZScpO1xuXG5mdW5jdGlvbiBfa2V5IChvLCBfa2V5LCB2YWx1ZSl7XG4gICAgaWYoICF0eXBlLmlzT2JqZWN0KG8pICkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cbiAgICB2YXIga2V5cyA9IF9rZXkuc3BsaXQoJy4nKSxcbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuXG4gICAgaWYoIHZhbHVlID09PSB1bmRlZmluZWQgKSB7XG4gICAgICB3aGlsZSAoa2V5KSB7XG4gICAgICAgIGlmKCB0eXBlLmlzT2JqZWN0KG8pICYmIGtleSBpbiBvICkge1xuICAgICAgICAgIG8gPSBvW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG87XG4gICAgfSBlbHNlIHtcblxuICAgICAgd2hpbGUgKGtleSkge1xuICAgICAgICBpZiggbyBpbnN0YW5jZW9mIE9iamVjdCApIHtcbiAgICAgICAgICBpZiAoIGtleXMubGVuZ3RoICl7XG4gICAgICAgICAgICBpZiggIShrZXkgaW4gbykgKSB7XG4gICAgICAgICAgICAgIG9ba2V5XSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbyA9IG9ba2V5XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAga2V5OiBfa2V5LFxuICBrZXlzOiBPYmplY3Qua2V5c1xufTtcbiIsIlxudmFyIHR5cGUgPSByZXF1aXJlKCcuL3R5cGUnKSxcbiAgICBhcnJTb21lID0gQXJyYXkucHJvdG90eXBlLnNvbWUsXG4gICAgYXJyRXZlcnkgPSBBcnJheS5wcm90b3R5cGUuZXZlcnksXG4gICAgYXJyRm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLFxuICAgIGFyck1hcCA9IEFycmF5LnByb3RvdHlwZS5tYXAsXG4gICAgYXJySW5kZXhPZiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBfZWFjaEluTGlzdCggbGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcgKSB7XG4gIHJldHVybiBhcnJGb3JFYWNoLmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xufVxuXG5mdW5jdGlvbiBfZWFjaEluT2JqZWN0KCBvLCBpdGVyYXRlZSwgdGhpc0FyZyApIHtcbiAgZm9yKCB2YXIga2V5IGluIG8gKSB7XG4gICAgaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBbb1trZXldLCBrZXldKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfbWF0Y2hBbGwgKG8sIGZpbHRlcnMpIHtcbiAgZm9yKCB2YXIga2V5IGluIGZpbHRlcnMgKSB7XG4gICAgaWYoIG9ba2V5XSAhPT0gZmlsdGVyc1trZXldICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gX21hdGNoQW55IChvLCBmaWx0ZXJzKSB7XG4gIGZvciggdmFyIGtleSBpbiBmaWx0ZXJzICkge1xuICAgIGlmKCBvW2tleV0gPT09IGZpbHRlcnNba2V5XSApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYXRlZUZuIChpdGVyYXRlZSkge1xuICBpZiggdHlwZS5pc0Z1bmN0aW9uKGl0ZXJhdGVlKSApIHtcbiAgICByZXR1cm4gaXRlcmF0ZWU7XG4gIH1cblxuICBpZiggdHlwZS5pc09iamVjdChpdGVyYXRlZSkgKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gX21hdGNoQWxsKGl0ZW0sIGl0ZXJhdGVlKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0gPT09IGl0ZXJhdGVlO1xuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBlYWNoIChvLCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICBpZiggbyAmJiBvLmxlbmd0aCApIHtcbiAgICBhcnJGb3JFYWNoLmNhbGwobywgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuICB9IGVsc2UgaWYoIHR5cGUuaXNPYmplY3QobykgKSB7XG4gICAgX2VhY2hJbk9iamVjdChvLCBpdGVyYXRlZSwgdGhpc0FyZyB8fCB0aGlzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbmRleE9mIChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICBpZiggIXR5cGUuaXNGdW5jdGlvbihpdGVyYXRlZSkgKSB7XG4gICAgcmV0dXJuIGFyckluZGV4T2YuY2FsbChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyk7XG4gIH1cblxuICBmb3IoIHZhciBpID0gMCwgbiA9IGxpc3QubGVuZ3RoOyBpIDwgbiA7IGkrKyApIHtcbiAgICBpZiggaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2ldLCBpKSApIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIF9pbmRleEJ5IChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICB2YXIgbWFwID0ge307XG5cblx0Zm9yKCB2YXIgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgbWFwW2l0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtpXSwgaSldID0gbGlzdFtpXTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG5mdW5jdGlvbiBpbmRleEJ5IChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuXHRpZiggdHlwZS5pc1N0cmluZyhpdGVyYXRlZSkgKSB7XG5cdFx0cmV0dXJuIF9pbmRleEJ5KGxpc3QsIGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtW2l0ZXJhdGVlXTsgfSwgdGhpc0FyZyk7XG5cdH0gZWxzZSBpZiggdHlwZS5pc0Z1bmN0aW9uKGl0ZXJhdGVlKSApIHtcblx0XHRyZXR1cm4gX2luZGV4QnkobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuXHR9XG5cdHJldHVybiB7fTtcbn1cblxuZnVuY3Rpb24gc29tZSAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgaXRlcmF0ZWUgPSBfaXRlcmF0ZWVGbihpdGVyYXRlZSk7XG5cbiAgaWYoIGxpc3QgJiYgbGlzdC5sZW5ndGggKSB7XG4gICAgcmV0dXJuIGFyclNvbWUuY2FsbChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyk7XG4gIH0gZWxzZSBpZiggdHlwZS5pc09iamVjdChsaXN0KSApIHtcbiAgICBmb3IoIHZhciBrZXkgaW4gbGlzdCApICB7XG4gICAgICBpZiggaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2tleV0sIGtleSkgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGV2ZXJ5IChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICBpdGVyYXRlZSA9IF9pdGVyYXRlZUZuKGl0ZXJhdGVlKTtcblxuICBpZiggbGlzdCAmJiBsaXN0Lmxlbmd0aCApIHtcbiAgICByZXR1cm4gYXJyRXZlcnkuY2FsbChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyk7XG4gIH0gZWxzZSBpZiggdHlwZS5pc09iamVjdChsaXN0KSApIHtcbiAgICBmb3IoIHZhciBrZXkgaW4gbGlzdCApICB7XG4gICAgICBpZiggIWl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtrZXldLCBrZXkpICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5mdW5jdGlvbiBtYXAgKGxpc3QsIF9pdGVyYXRlZSwgdGhpc0FyZykge1xuICB2YXIgaXRlcmF0ZWUgPSB0eXBlLmlzU3RyaW5nKF9pdGVyYXRlZSkgPyBmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbVtfaXRlcmF0ZWVdOyB9IDogX2l0ZXJhdGVlO1xuXG4gIGlmKCBsaXN0ICYmIGxpc3QubGVuZ3RoICkge1xuICAgIHJldHVybiBhcnJNYXAuY2FsbChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyk7XG4gIH0gZWxzZSBpZiggdHlwZS5pc09iamVjdChsaXN0KSApIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yKCB2YXIga2V5IGluIGxpc3QgKSAge1xuICAgICAgcmVzdWx0W2tleV0gPSBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3Rba2V5XSwga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcblxuZnVuY3Rpb24gbWFwMkxpc3QgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIGlmKCBsaXN0ICYmIGxpc3QubGVuZ3RoICkge1xuICAgIHJldHVybiBhcnJNYXAuY2FsbChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdLCBpID0gMDtcbiAgZm9yKCB2YXIga2V5IGluIGxpc3QgKSAge1xuICAgIHJlc3VsdFtpKytdID0gaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2tleV0sIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZSAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgICB0aGlzQXJnID0gdGhpc0FyZyA9PT0gdW5kZWZpbmVkID8gdGhpcyA6IHRoaXNBcmc7XG5cbiAgICBpdGVyYXRlZSA9IF9pdGVyYXRlZUZuKGl0ZXJhdGVlKTtcblxuICAgIGZvciggdmFyIGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRpZiggaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2ldKSApIHtcblx0XHRcdFx0XHRcdGxpc3Quc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHR9XG5cdFx0fVxufVxuXG5mdW5jdGlvbiBmaXJzdCAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcblx0XHR0aGlzQXJnID0gdGhpc0FyZyA9PT0gdW5kZWZpbmVkID8gdGhpcyA6IHRoaXNBcmc7XG5cblx0XHRpdGVyYXRlZSA9IF9pdGVyYXRlZUZuKGl0ZXJhdGVlKTtcblxuICAgIHZhciBpID0gYXJySW5kZXhPZi5jYWxsKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcblxuXHRcdGZvciggdmFyIGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aCA7IGkgPCBsZW4gOyBpKysgKSB7XG4gICAgICAgIGlmKCBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3RbaV0pICkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3RbaV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxhc3QgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG5cdFx0dGhpc0FyZyA9IHRoaXNBcmcgPT09IHVuZGVmaW5lZCA/IHRoaXMgOiB0aGlzQXJnO1xuXG5cdFx0aXRlcmF0ZWUgPSBfaXRlcmF0ZWVGbihpdGVyYXRlZSk7XG5cblx0XHRmb3IoIHZhciBpID0gbGlzdC5sZW5ndGggLSAxIDsgaSA+PSAwIDsgaS0tICkge1xuICAgICAgICBpZiggaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2ldKSApIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0W2ldO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXIgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gICAgdmFyIG5ld0xpc3QgPSBbXTtcblxuXHRcdHRoaXNBcmcgPSB0aGlzQXJnID09PSB1bmRlZmluZWQgPyB0aGlzIDogdGhpc0FyZztcblx0XHRpdGVyYXRlZSA9IF9pdGVyYXRlZUZuKGl0ZXJhdGVlKTtcblxuXHRcdGZvciggdmFyIGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aCA7IGkgPCBsZW4gOyBpKysgKSB7XG4gICAgICAgIGlmKCBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3RbaV0pICkge1xuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKGxpc3RbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0xpc3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBfbWF0Y2hBbGw6IF9tYXRjaEFsbCxcbiAgX21hdGNoQW55OiBfbWF0Y2hBbnksXG4gIGZpbmQ6IGZpcnN0LFxuICBmaXJzdDogZmlyc3QsXG4gIGxhc3Q6IGxhc3QsXG4gIGZpbHRlcjogZmlsdGVyLFxuICBlYWNoOiBlYWNoLFxuICBzb21lOiBzb21lLFxuICBldmVyeTogZXZlcnksXG4gIG1hcDogbWFwLFxuICBwbHVjazogbWFwLFxuICBtYXAyTGlzdDogbWFwMkxpc3QsXG4gIGluZGV4T2Y6IGluZGV4T2YsXG4gIGluZGV4Qnk6IGluZGV4QnksXG4gIHJlbW92ZTogcmVtb3ZlLFxuICBpZjogZnVuY3Rpb24gKHJlc3VsdCwgZm4pIHtcbiAgICBpZiggcmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgZm4gaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICAgIHJldHVybiBmbihyZXN1bHQpO1xuICAgIH1cbiAgfVxufTtcbiIsIlxudmFyIFJFX2RvdHNCYWNrID0gL1teXFwvXStcXC9cXC5cXC5cXC8vZyxcblx0Y2xlYXJTdHIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnJzsgfTtcblxuZnVuY3Rpb24gX2pvaW5QYXRoICgpIHtcbiAgICB2YXIgcGF0aCA9IChhcmd1bWVudHNbMF0gfHwgJycpLnJlcGxhY2UoL1xcLyQvLCAnJyksXG4gICAgXHRiYWNrRG90cztcblxuICAgIGZvciggdmFyIGkgPSAxLCBsYXN0ID0gYXJndW1lbnRzLmxlbmd0aCAtIDEgOyBpIDwgbGFzdCA7IGkrKyApIHtcbiAgICAgICAgcGF0aCArPSAnLycgKyBhcmd1bWVudHNbaV0ucmVwbGFjZSgvXlxcL3xcXC8kL2csICcnKTtcbiAgICB9XG4gICAgaWYoIGxhc3QgKSB7XG4gICAgICAgIHBhdGggKz0gYXJndW1lbnRzW2xhc3RdID8gKCAnLycgKyBhcmd1bWVudHNbbGFzdF0ucmVwbGFjZSgvXlxcLy8sICcnKSApIDogJyc7XG4gICAgfVxuXG4gICAgd2hpbGUoIFJFX2RvdHNCYWNrLnRlc3QocGF0aCkgKSB7XG4gICAgXHRwYXRoID0gcGF0aC5yZXBsYWNlKFJFX2RvdHNCYWNrLCBjbGVhclN0cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBqb2luUGF0aDogX2pvaW5QYXRoXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfaXNUeXBlICh0eXBlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIG8gPT09IHR5cGUpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIF9pbnN0YW5jZU9mIChfY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuICggbyBpbnN0YW5jZW9mIF9jb25zdHJ1Y3RvciApO1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1R5cGU6IGZ1bmN0aW9uICh0eXBlLCB2YWx1ZSkge1xuICAgIGlmKCB2YWx1ZSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgcmV0dXJuIF9pc1R5cGUodHlwZSk7XG4gICAgfVxuICAgIHJldHVybiBfaXNUeXBlKHR5cGUpKHZhbHVlKTtcbiAgfSxcbiAgaW5zdGFuY2VPZjogZnVuY3Rpb24gKFByb3RvLCB2YWx1ZSkge1xuICAgIGlmKCB2YWx1ZSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgcmV0dXJuIF9pbnN0YW5jZU9mKFByb3RvKTtcbiAgICB9XG4gICAgcmV0dXJuIF9pbnN0YW5jZU9mKFByb3RvKSh2YWx1ZSk7XG4gIH0sXG4gIGlzT2JqZWN0OiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbyAhPT0gbnVsbDtcbiAgfSxcblx0aXNGdW5jdGlvbjogX2lzVHlwZSgnZnVuY3Rpb24nKSxcblx0aXNTdHJpbmc6IF9pc1R5cGUoJ3N0cmluZycpLFxuXHRpc051bWJlcjogX2lzVHlwZSgnbnVtYmVyJyksXG5cdGlzQXJyYXk6IEFycmF5LmlzQXJyYXkgfHwgX2luc3RhbmNlT2YoQXJyYXkpLFxuXHRpc0RhdGU6IF9pbnN0YW5jZU9mKERhdGUpLFxuXHRpc1JlZ0V4cDogX2luc3RhbmNlT2YoUmVnRXhwKSxcblx0aXNFbGVtZW50OiBmdW5jdGlvbihvKSB7XG4gICAgcmV0dXJuIG8gJiYgby5ub2RlVHlwZSA9PT0gMTtcbiAgfSxcbiAgaXNVbmRlZmluZWQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xuICB9XG59O1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChQcm9taXNlKSB7XG5cblx0aWYoICFQcm9taXNlLmRlZmVyICkge1xuXHRcdFByb21pc2UuZGVmZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0ICB2YXIgZGVmZXJyZWQgPSB7fTtcblx0XHQgIGRlZmVycmVkLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0ICAgIGRlZmVycmVkLnJlc29sdmUgPSByZXNvbHZlO1xuXHRcdCAgICBkZWZlcnJlZC5yZWplY3QgPSByZWplY3Q7XG5cdFx0ICB9KTtcblx0XHQgIHJldHVybiBkZWZlcnJlZDtcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gZWFjaCAoaXRlcmFibGUsIGhhbmRsZXIpIHtcblx0XHRmb3IoIHZhciBpID0gMCwgbiA9IGl0ZXJhYmxlLmxlbmd0aDsgaSA8IG4gOyBpKysgKSB7XG5cdFx0XHRoYW5kbGVyKGl0ZXJhYmxlW2ldLCBpKTtcblx0XHR9XG5cdH1cblxuXHRpZiggIVByb21pc2UuYWxsICkge1xuXHRcdFByb21pc2UuYWxsID0gZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG5cdFx0ICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdCAgICB2YXIgcGVuZGluZyA9IGl0ZXJhYmxlLmxlbmd0aCxcblx0XHQgICAgICAgIHJlc3VsdHMgPSBbXTtcblx0XHQgICAgZWFjaChpdGVyYWJsZSwgZnVuY3Rpb24gKF9wcm9taXNlLCBpKSB7XG5cblx0XHQgICAgICAoIF9wcm9taXNlLnRoZW4gPyBfcHJvbWlzZSA6IFByb21pc2UucmVzb2x2ZShfcHJvbWlzZSkgKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHQgICAgICAgIHJlc3VsdHNbaV0gPSByZXN1bHQ7XG5cdFx0ICAgICAgICBpZiggLS1wZW5kaW5nID09PSAwICkge1xuXHRcdCAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcblx0XHQgICAgICAgIGlmKCBwZW5kaW5nICE9PSAtMSApIHtcblx0XHQgICAgICAgICAgcGVuZGluZyA9PT0gLTE7XG5cdFx0ICAgICAgICAgIHJlamVjdChyZWFzb24pO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgIH0pO1xuXHRcdCAgICB9KTtcblx0XHQgIH0pO1xuXHRcdH07XG5cdH1cblxuXHRpZiggIVByb21pc2UucmFjZSApIHtcblx0XHRQcm9taXNlLnJhY2UgPSBmdW5jdGlvbiAoaXRlcmFibGUpIHtcblx0XHQgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0ICAgIHZhciBkb25lID0gZmFsc2U7XG5cblx0XHQgICAgZWFjaChpdGVyYWJsZSwgZnVuY3Rpb24gKF9wcm9taXNlLCBpKSB7XG5cdFx0ICAgICAgaWYoIGRvbmUgKSB7XG5cdFx0ICAgICAgICByZXR1cm47XG5cdFx0ICAgICAgfVxuXHRcdCAgICAgICggX3Byb21pc2UudGhlbiA/IF9wcm9taXNlIDogUHJvbWlzZS5yZXNvbHZlKF9wcm9taXNlKSApLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdCAgICAgICAgaWYoICFkb25lICkge1xuXHRcdCAgICAgICAgICBkb25lID0gdHJ1ZTtcblx0XHQgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcblx0XHQgICAgICAgIGlmKCAhZG9uZSApIHtcblx0XHQgICAgICAgICAgZG9uZSA9IHRydWU7XG5cdFx0ICAgICAgICAgIHJlamVjdChyZWFzb24pO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgIH0pO1xuXHRcdCAgICB9KTtcblx0XHQgIH0pO1xuXHRcdH07XG5cdH1cblxuXHRpZiggIVByb21pc2UucmVzb2x2ZSApIHtcblx0XHRQcm9taXNlLnJlc29sdmUgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0ICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyByZXNvbHZlKHJlc3VsdCk7IH0pO1xuXHRcdH07XG5cdH1cblxuXHRpZiggIVByb21pc2UucmVqZWN0ICkge1xuXHRcdFByb21pc2UucmVqZWN0ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuXHRcdCAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgcmVqZWN0KHJlYXNvbik7IH0pO1xuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gUHJvbWlzZTtcbn07XG4iLCJcbmZ1bmN0aW9uIHN0ZXBSZXN1bHQgKHN0ZXAsIHZhbHVlLCB0eXBlKSB7XG4gIGlmKCB2YWx1ZSAmJiB2YWx1ZS50aGVuICkge1xuICAgIHZhbHVlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgc3RlcC5kZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgc3RlcC5kZWZlcnJlZC5yZWplY3QocmVhc29uKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBzdGVwLmRlZmVycmVkW3R5cGVdKHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcm9jZXNzUXVldWUocHJvbWlzZSkge1xuICBpZiggcHJvbWlzZS4kJHN1Y2NlZWRlZCA9PT0gdW5kZWZpbmVkICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBsZW4gPSBwcm9taXNlLiQkcXVldWUubGVuZ3RoLFxuICAgICAgc3RlcCA9IHByb21pc2UuJCRxdWV1ZS5zaGlmdCgpLFxuICAgICAgdHlwZSA9IHByb21pc2UuJCRzdWNjZWVkZWQgPyAncmVzb2x2ZScgOiAncmVqZWN0JyxcbiAgICAgIHVuY291Z2ggPSAhcHJvbWlzZS4kJHN1Y2NlZWRlZCAmJiBwcm9taXNlLiQkdW5jb3VnaHQrKztcblxuICB3aGlsZSggc3RlcCApIHtcblxuICAgIGlmKCBzdGVwW3R5cGVdICkge1xuICAgICAgdW5jb3VnaCA9IGZhbHNlO1xuXG4gICAgICB0cnkge1xuICAgICAgICBzdGVwUmVzdWx0KHN0ZXAsIHN0ZXBbdHlwZV0ocHJvbWlzZS4kJHZhbHVlKSwgJ3Jlc29sdmUnKTtcbiAgICAgIH0gY2F0Y2ggKHJlYXNvbikge1xuICAgICAgICBzdGVwUmVzdWx0KHN0ZXAsIHJlYXNvbiwgJ3JlamVjdCcpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ZXBSZXN1bHQoc3RlcCwgcHJvbWlzZS4kJHZhbHVlLCB0eXBlKTtcbiAgICB9XG5cbiAgICBzdGVwID0gcHJvbWlzZS4kJHF1ZXVlLnNoaWZ0KCk7XG4gIH1cblxuICBpZiggIXByb21pc2UuJCRzdWNjZWVkZWQgJiYgdW5jb3VnaCApIHtcbiAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiggcHJvbWlzZS4kJHVuY291Z2ggPT09IHVuY291Z2ggKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuY2F1Z2h0IChpbiBwcm9taXNlKScpO1xuICAgIH1cbiAgICAvLyB9LCAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBQcm9taXNlIChleGVjdXRvcikge1xuICBpZiggISggZXhlY3V0b3IgaW5zdGFuY2VvZiBGdW5jdGlvbiApICkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UgcmVzb2x2ZXIgdW5kZWZpbmVkIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICB2YXIgcCA9IHRoaXM7XG4gIHRoaXMuJCRxdWV1ZSA9IFtdO1xuICB0aGlzLiQkdW5jb3VnaCA9IDA7XG5cbiAgdHJ5IHtcbiAgICBleGVjdXRvcihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBwLiQkc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgIHAuJCR2YWx1ZSA9IHJlc3VsdDtcbiAgICAgIHByb2Nlc3NRdWV1ZShwKTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICBwLiQkc3VjY2VlZGVkID0gZmFsc2U7XG4gICAgICBwLiQkdmFsdWUgPSByZWFzb247XG4gICAgICBwcm9jZXNzUXVldWUocCk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHAuJCRzdWNjZWVkZWQgPSBmYWxzZTtcbiAgICBwLiQkdmFsdWUgPSBlcnI7XG4gICAgcHJvY2Vzc1F1ZXVlKHApO1xuICB9XG59XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25zdWNjZWVkZWQsIG9uUmVqZWN0ZWQpIHtcbiAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgIF9wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBfdGhpcy4kJHF1ZXVlLnB1c2goeyByZXNvbHZlOiBvbnN1Y2NlZWRlZCwgcmVqZWN0OiBvblJlamVjdGVkLCBkZWZlcnJlZDogeyByZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdCB9IH0pO1xuICAgICAgfSk7XG5cbiAgcHJvY2Vzc1F1ZXVlKHRoaXMpO1xuXG4gIHJldHVybiBfcHJvbWlzZTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xufTtcblxucmVxdWlyZSgnLi9wcm9taXNlLW1ldGhvZHMnKShQcm9taXNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vcWl6ZXInKSggZ2xvYmFsLlByb21pc2UgPyByZXF1aXJlKCcuL3Byb21pc2UtbWV0aG9kcycpKGdsb2JhbC5Qcm9taXNlKSA6IHJlcXVpcmUoJy4vcHJvbWlzZS1wb2x5ZmlsbCcpICk7XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFByb21pc2UpIHtcblxuICBmdW5jdGlvbiBxIChleGVjdXRvcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvcik7XG4gIH1cblxuICBbJ2RlZmVyJywgJ3Jlc29sdmUnLCAncmVqZWN0JywgJ2FsbCcsICdyYWNlJ10uZm9yRWFjaChmdW5jdGlvbiAoZk5hbWUpIHtcbiAgICBxW2ZOYW1lXSA9IFByb21pc2VbZk5hbWVdO1xuICB9KTtcblxuICBxLndoZW4gPSBmdW5jdGlvbiAocCkgeyByZXR1cm4gKCBwICYmIHAudGhlbiApID8gcCA6IFByb21pc2UucmVzb2x2ZShwKTsgfTtcbiAgcS51c2VQb2x5ZmlsbCA9IGZ1bmN0aW9uICgpIHtcbiAgXHRQcm9taXNlID0gcmVxdWlyZSgnLi9wcm9taXNlLXBvbHlmaWxsJyk7XG4gICAgWydkZWZlcicsICdyZXNvbHZlJywgJ3JlamVjdCcsICdhbGwnLCAncmFjZSddLmZvckVhY2goZnVuY3Rpb24gKGZOYW1lKSB7XG4gICAgICBxW2ZOYW1lXSA9IFByb21pc2VbZk5hbWVdO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBxO1xuXG59O1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL3FpemVyJykoIHJlcXVpcmUoJy4vbGliL3Byb21pc2UtcG9seWZpbGwnKSApO1xuIiwiXG4vLyByZXF1aXJlKCcuL2Jyb3dzZXItcG9seWZpbGxzL2N1cnJlbnQtc2NyaXB0Jyk7XG5yZXF1aXJlKCcuL2Jyb3dzZXItcG9seWZpbGxzL2RhdGUnKTtcbnJlcXVpcmUoJy4vYnJvd3Nlci1wb2x5ZmlsbHMvZG9tLWNsb3Nlc3QnKTtcbnJlcXVpcmUoJy4vYnJvd3Nlci1wb2x5ZmlsbHMvZXZlbnQtbGlzdGVuZXInKTtcbnJlcXVpcmUoJy4vYnJvd3Nlci1wb2x5ZmlsbHMvbWF0Y2gtbWVkaWEnKTtcbnJlcXVpcmUoJy4vYnJvd3Nlci1wb2x5ZmlsbHMvbWF0Y2hlcy1zZWxlY3RvcicpO1xuIiwiXG5pZiAoIURhdGUubm93KSB7XG4gIERhdGUubm93ID0gZnVuY3Rpb24gbm93KCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfTtcbn0iLCJcbmlmKCAhRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCApIHtcbiAgRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHZhciBlbCA9IHRoaXM7XG5cbiAgICB3aGlsZSggZWwgKSB7XG4gICAgICBpZiggZWwubWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKSApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfTtcbn0iLCJcbmlmKCAhRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciApIHtcbiAgaWYoIEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEV2ZW50ICkge1xuICAgIEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEV2ZW50KCAnb24nICsgZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAgIH07XG4gICAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUuZGV0YWNoRXZlbnQoICdvbicgKyBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyAnQnJvd3NlciBub3QgY29tcGF0aWJsZSB3aXRoIGVsZW1lbnQgZXZlbnRzJztcbiAgfVxufSIsIihmdW5jdGlvbiAocm9vdCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgcm9vdC5tYXRjaE1lZGlhID0gcm9vdC5tYXRjaE1lZGlhIHx8IHJvb3Qud2Via2l0TWF0Y2hNZWRpYSB8fCByb290Lm1vek1hdGNoTWVkaWEgfHwgcm9vdC5tc01hdGNoTWVkaWE7XG59KSh0aGlzKTsiLCJcbmlmKCAhRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc1NlbGVjdG9yICkge1xuICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3IgPSAoXG4gICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS5vTWF0Y2hlc1NlbGVjdG9yXG4gICk7XG59XG5cbiIsIlxucmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscycpO1xuLy8gZG9jdW1lbnQuY3VycmVudFNjcmlwdFxuLy8gRGF0ZS5ub3coKVxuLy8gSFRNTEVsZW1lbnQuY2xvc2VzdCgpXG4vLyBIVE1MRWxlbWVudC5hZGRFdmVudExpc3RlbmVyXG4vLyBIVE1MRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyXG4vLyB3aW5kb3cubWF0Y2hNZWRpYVxuLy8gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc1NlbGVjdG9yXG5cbnJlcXVpcmUoJ2NsYXNzbGlzdC5qcycpOyAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lcy9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbGFzc0xpc3RcblxudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ25pdHJvLXRvb2xzL2V4dGVuZCcpO1xuXG5mdW5jdGlvbiBfIChzZWxlY3Rvciwgc291cmNlKSB7XG4gIHJldHVybiBzb3VyY2UgJiYgdHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgP1xuXHRcdHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3Ioc291cmNlKSA6XG5cdFx0KHNvdXJjZSB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbl8ubm9vcCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbmV4dGVuZC5leHRlbmQoXywgZXh0ZW5kKTtcblxuXy5leHRlbmQoXyxcbiAgcmVxdWlyZSgnbml0cm8tdG9vbHMvdHlwZScpLFxuXHRyZXF1aXJlKCduaXRyby10b29scy9rZXknKSxcblx0cmVxdWlyZSgnbml0cm8tdG9vbHMvcGF0aCcpXG4pO1xuXG5fLmV4dGVuZChfLCB7XG5cdGFuaW1hdGU6IHJlcXVpcmUoJy4vZGVmZXJyZWQvYW5pbWF0ZScpLFxuXHR3YWl0OiByZXF1aXJlKCcuL2RlZmVycmVkL3dhaXQnKVxufSk7XG5cbl8uZXh0ZW5kKF8sIHtcblx0cmVhZHk6IHJlcXVpcmUoJy4vZm4vcmVhZHknKSxcblx0dGVtcGxhdGU6IHJlcXVpcmUoJy4vZm4vdGVtcGxhdGUnKSxcblx0ZGVib3VuY2U6IHJlcXVpcmUoJy4vZm4vZGVib3VuY2UnKVxufSk7XG5cbl8uZXh0ZW5kKF8sXG4gIHJlcXVpcmUoJy4vdXRpbHMvZXZlbnRzJyksXG5cdC8vIF8ub24oZWwsIGV2ZW50TmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSlcblx0Ly8gXy5vZmYoZWwsIGV2ZW50TmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSlcblx0Ly8gXy50cmlnZ2VyRXZlbnQoZWxlbWVudCwgZXZlbnROYW1lLCBkYXRhKVxuXG4gIHJlcXVpcmUoJy4vdXRpbHMvZG9tJylcbiAgLy8gXy5jcmVhdGUodGFnTmFtZSwgYXR0cnMpXG5cdC8vIF8uYXR0cihlbCwgbmFtZSwgdmFsdWUpXG4gIC8vIF8udG1wQ2xhc3MoZWwsIGNsYXNzTmFtZSwgZHVyYXRpb24sIGNiKVxuKTtcblxuXy5leHRlbmQoXywge1xuXHRub3JtYWxpemU6IHJlcXVpcmUoJy4vdXRpbHMvbm9ybWFsaXplJyksXG5cdC8vIF8udG91Y2hEZXZpY2UgPT09IHRydWUgfCBmYWxzZVxuXHQvLyBfLmlzTWFjID09PSB0cnVlIHwgZmFsc2Vcblx0Ly8gXy5pc0FuZHJvaWQgPT09IHRydWUgfCBmYWxzZVxuXG5cdHNjcm9sbDogcmVxdWlyZSgnLi91dGlscy9zY3JvbGwvYnVuZGxlJykgLy8gc2Nyb2xsIGlzIG5vdCBhdmFpbGFibGUgdW50aWwgZG9jdW1lbnQgaXMgcmVhZHlcblx0Ly8gXy5zY3JvbGwub24oIGhhbmRsZXIsIHVzZUNhcHR1cmUgKVxuXHQvLyBfLnNjcm9sbC5vZmYoIGhhbmRsZXIsIHVzZUNhcHR1cmUgKVxuXHQvLyBfLnNjcm9sbC50b3AoKVxuXHQvLyBfLnNjcm9sbC5nb3RvKHZhbHVlKVxuXHQvLyBfLnNjcm9sbC5hbmltYXRlVG8odmFsdWUgfCBIVE1MRWxlbWVudCwgY2FsbGJhY2ssIGR1cmF0aW9uKTogUHJvbWlzZVxuXHQvLyBfLHNjcm9sbC5pbkFuaW1hdGlvbiA9PT0gdHJ1ZSB8IGZhbHNlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBfO1xuIiwiXG52YXIgJHEgPSByZXF1aXJlKCdxLXByb21pc2UnKSxcbiAgICB0aW1pbmdGdW5jdGlvbnMgPSB7fSxcbiAgICBub29wID0gZnVuY3Rpb24gKCkge30sXG4gICAgZ2V0VGltaW5nRnVuY3Rpb24gPSBmdW5jdGlvbiAodGltaW5nRnVuY3Rpb25OYW1lKSB7XG4gICAgICBpZiggIXRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdICkge1xuICAgICAgICBpZiggdGltaW5nRnVuY3Rpb25OYW1lID09PSAnbGluZWFyJyApIHtcbiAgICAgICAgICB0aW1pbmdGdW5jdGlvbnNbdGltaW5nRnVuY3Rpb25OYW1lXSA9IGZ1bmN0aW9uICggdmFsdWUgKSB7IHJldHVybiB2YWx1ZTsgfTtcbiAgICAgICAgfSBlbHNlIGlmKCB0aW1pbmdGdW5jdGlvbk5hbWUgPT09ICdlYXNlJyApIHtcbiAgICAgICAgICB0aW1pbmdGdW5jdGlvbnNbdGltaW5nRnVuY3Rpb25OYW1lXSA9IHJlcXVpcmUoJ2Jlemllci1lYXNpbmcnKSguMTcsLjY3LC44MywuNjcpO1xuICAgICAgICB9IGVsc2UgaWYoIHRpbWluZ0Z1bmN0aW9uTmFtZSA9PT0gJ2Vhc2UtaW4nICkge1xuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdID0gcmVxdWlyZSgnYmV6aWVyLWVhc2luZycpKC40MiwwLDEsMSk7XG4gICAgICAgIH0gZWxzZSBpZiggdGltaW5nRnVuY3Rpb25OYW1lID09PSAnZWFzZS1vdXQnICkge1xuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdID0gcmVxdWlyZSgnYmV6aWVyLWVhc2luZycpKDAsMCwuNTgsMSk7XG4gICAgICAgIH0gZWxzZSBpZiggdGltaW5nRnVuY3Rpb25OYW1lID09PSAnZWFzZS1pbi1vdXQnICkge1xuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdID0gcmVxdWlyZSgnYmV6aWVyLWVhc2luZycpKC40MiwwLC41OCwxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdO1xuICAgIH07XG5cbmZ1bmN0aW9uIGFuaW1hdGUgKHByb2dyZXNzRm4sIGR1cmF0aW9uLCBhdEVuZCwgdGltaW5nRnVuY3Rpb25OYW1lKSB7XG4gIGlmICggZHVyYXRpb24gaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICBpZiAoIHR5cGVvZiBhdEVuZCA9PT0gJ251bWJlcicgKSB7XG4gICAgICBhdXggPSBkdXJhdGlvbjtcbiAgICAgIGR1cmF0aW9uID0gYXRFbmQ7XG4gICAgICBhdEVuZCA9IGF1eDtcbiAgICB9IGVsc2Uge1xuICAgICAgYXRFbmQgPSBkdXJhdGlvbjtcbiAgICAgIGR1cmF0aW9uID0gNDAwO1xuICAgIH1cbiAgfSBlbHNlIGlmICggZHVyYXRpb24gPT09IHVuZGVmaW5lZCApIHtcbiAgICBkdXJhdGlvbiA9IDQwMDtcbiAgfVxuXG4gIHRpbWluZ0Z1bmN0aW9uTmFtZSA9IHRpbWluZ0Z1bmN0aW9uTmFtZSB8fCAoIHR5cGVvZiBhdEVuZCA9PT0gJ3N0cmluZycgPyBhdEVuZCA6ICggdHlwZW9mIGR1cmF0aW9uID09PSAnc3RyaW5nJyA/IGR1cmF0aW9uIDogJ2Vhc2UnICkgKTtcblxuICBwcm9ncmVzc0ZuKGR1cmF0aW9uID09PSAwID8gMSA6IDApO1xuXG4gIHZhciBzdG9wcGVkID0gZmFsc2UsXG4gICAgICB0aW1pbmdGdW5jdGlvbiA9IGdldFRpbWluZ0Z1bmN0aW9uKHRpbWluZ0Z1bmN0aW9uTmFtZSksXG4gICAgICBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgaWYoIGR1cmF0aW9uID4gMCApIHtcbiAgICB2YXIgc3RhcnQgPSBEYXRlLm5vdygpLFxuICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZWxhcHNlZCA9IERhdGUubm93KCkgLSBzdGFydDtcblxuICAgICAgICAgIGlmKCBzdG9wcGVkICkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgfSBlbHNlIGlmKCBlbGFwc2VkID49IGR1cmF0aW9uICkge1xuICAgICAgICAgICAgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICBwcm9ncmVzc0ZuKDEpO1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICAgICAgKGF0RW5kIHx8IG5vb3ApKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2dyZXNzRm4oIHRpbWluZ0Z1bmN0aW9uKGVsYXBzZWQvZHVyYXRpb24pICk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMCk7XG4gIH1cblxuICBkZWZlcnJlZC5wcm9taXNlLnN0b3AgPSBmdW5jdGlvbiAocmVqZWN0KSB7XG4gICAgc3RvcHBlZCA9IHRydWU7XG4gICAgaWYoIHJlamVjdCApIHtcbiAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxuYW5pbWF0ZS50aW1lID0gZnVuY3Rpb24gKGVsKSB7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIGR1cmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmFuaW1hdGlvbkR1cmF0aW9uO1xuICBpZiggZHVyYXRpb24gKSB7XG4gICAgZHVyYXRpb24ucmVwbGFjZSgvKFswLTldKFxcLlswLTldKT8pKG0pP3MvLCBmdW5jdGlvbiAobWF0Y2hlZCwgdCwgZGVjaW1hbHMsIG1zKSB7XG4gICAgICB0aW1lICs9IG1zID8gTnVtYmVyKHQpIDogTnVtYmVyKHQpKjEwMDA7XG4gICAgfSk7XG4gIH1cbiAgaWYoIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5hbmltYXRpb25EZWxheSApIHtcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuYW5pbWF0aW9uRGVsYXkucmVwbGFjZSgvKFswLTldKFxcLlswLTldKT8pKG0pP3MvLCBmdW5jdGlvbiAobWF0Y2hlZCwgdCwgZGVjaW1hbHMsIG1zKSB7XG4gICAgICB0aW1lICs9IG1zID8gTnVtYmVyKHQpIDogTnVtYmVyKHQpKjEwMDA7XG4gICAgfSk7XG4gIH1cbiAgZHVyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkudHJhbnNpdGlvbkR1cmF0aW9uO1xuICBpZiggZHVyYXRpb24gKSB7XG4gICAgZHVyYXRpb24ucmVwbGFjZSgvKFswLTldKFxcLlswLTldKT8pKG0pP3MvLCBmdW5jdGlvbiAobWF0Y2hlZCwgdCwgZGVjaW1hbHMsIG1zKSB7XG4gICAgICB2YXIgdCA9IG1zID8gTnVtYmVyKHQpIDogTnVtYmVyKHQpKjEwMDA7XG4gICAgICBpZiggdCA+IHRpbWUgKSB7XG4gICAgICAgIHRpbWUgPSB0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKCdhbmltYXRpb25UaW1lJywgZWwsIHRpbWUpO1xuICByZXR1cm4gdGltZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYW5pbWF0ZTtcbiIsIlxudmFyICRxID0gcmVxdWlyZSgncS1wcm9taXNlJyksXG5cdHdhaXQgPSBmdW5jdGlvbiAoZGVsYXksIGNhbGxiYWNrKSB7XG5cdFx0aWYoIGRlbGF5IGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG5cdFx0XHRkZWxheSA9IFtjYWxsYmFjaywgY2FsbGJhY2sgPSBkZWxheV1bMF07XG5cdFx0fVxuXHRcdGlmKCBjYWxsYmFjayAmJiAhKGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pICkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBzaG91bGQgYmUgYSBGdW5jdGlvbicpO1xuXHRcdH1cblx0XHRpZiggdHlwZW9mIGRlbGF5ICE9PSAnbnVtYmVyJyApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignZGVsYXkgc2hvdWxkIGJlIGEgTnVtYmVyJyk7XG5cdFx0fVxuXHRcdHJldHVybiAkcShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRpZiggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgZGVsYXkpO1xuXHRcdH0pO1xuXHR9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdhaXQ7IiwiXG5mdW5jdGlvbiBkZWJvdW5jZSAoZm4sIHRpbWVzbG90KSB7XG4gIHZhciB0aW1lciA9IG51bGwsXG4gICAgICB0aW1lc2xvdCA9IHRpbWVzbG90IHx8IDgwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIGlmKCB0aW1lciApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGZuLmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICB9LCB0aW1lc2xvdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7IiwidmFyIHJlYWR5TGlzdGVuZXJzID0gW10sXG4gICAgaW5pdFJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGxpc3RlbmVycyA9IHJlYWR5TGlzdGVuZXJzO1xuICAgICAgcmVhZHlMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwobGlzdGVuZXJzLCBmdW5jdGlvbiAoY2IpIHsgY2IoKTsgfSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdFJlYWR5KTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdFJlYWR5KTtcbiAgICB9O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdFJlYWR5KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdFJlYWR5KTtcblxuZnVuY3Rpb24gcmVhZHkgKGNhbGxiYWNrKSB7XG4gIGlmKCBjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgIGlmKCByZWFkeUxpc3RlbmVycyApIHtcbiAgICAgIHJlYWR5TGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlYWR5O1xuIiwiXG5mdW5jdGlvbiB0ZW1wbGF0ZSAobmFtZSwgZGF0YSl7XG4gIHJldHVybiB0ZW1wbGF0ZS5jYWNoZVtuYW1lXShkYXRhIHx8IHt9KTtcbn1cblxudGVtcGxhdGUuY2FjaGUgPSB7fTtcblxudGVtcGxhdGUuY29tcGlsZSA9IGZ1bmN0aW9uICh0bXBsKSB7XG4gIC8vIEpvaG4gUmVzaWcgbWljcm8tdGVtcGxhdGVcbiAgcmV0dXJuIG5ldyBGdW5jdGlvbignb2JqJywgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgJ3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9OycgK1xuXG4gICAgLy8gSW50cm9kdWNlIHRoZSBkYXRhIGFzIGxvY2FsIHZhcmlhYmxlcyB1c2luZyB3aXRoKCl7fVxuICAgICd3aXRoKG9iail7cC5wdXNoKFxcJycgK1xuXG4gICAgLy8gQ29udmVydCB0aGUgdGVtcGxhdGUgaW50byBwdXJlIEphdmFTY3JpcHRcbiAgICB0bXBsLnRyaW0oKVxuICAgICAgLnJlcGxhY2UoL1tcXHJcXHRcXG5dL2csICcgJylcbiAgICAgIC5zcGxpdCgnPCUnKS5qb2luKCdcXHQnKVxuICAgICAgLnJlcGxhY2UoLygoXnwlPilbXlxcdF0qKScvZywgJyQxXFxyJylcbiAgICAgIC5yZXBsYWNlKC9cXHQ9KC4qPyklPi9nLCAnXFwnLCQxLFxcJycpXG4gICAgICAuc3BsaXQoJ1xcdCcpLmpvaW4oJ1xcJyk7JylcbiAgICAgIC5zcGxpdCgnJT4nKS5qb2luKCdwLnB1c2goXFwnJylcbiAgICAgIC5zcGxpdCgnXFxyJykuam9pbignXFxcXFxcJycpICsgJ1xcJyk7fXJldHVybiBwLmpvaW4oXFwnXFwnKTsnKTtcbn07XG5cbnRlbXBsYXRlLnB1dCA9IGZ1bmN0aW9uIChuYW1lLCB0bXBsKSB7XG4gIHRlbXBsYXRlLmNhY2hlW25hbWVdID0gdGVtcGxhdGUuY29tcGlsZSh0bXBsKTtcbn07XG5cbnRlbXBsYXRlLmxvb2t1cCA9IGZ1bmN0aW9uICgpIHtcbiAgW10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24veC10ZW1wbGF0ZVwiXVtkYXRhLXRlbXBsYXRlXScpLCBmdW5jdGlvbiAodG1wbCkge1xuICAgIHRlbXBsYXRlLnB1dCh0bXBsLmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpLCB0bXBsLnRleHQpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiXG52YXIgX2RvbSA9IHtcbiAgY3VycmVudFNjcmlwdDogZG9jdW1lbnQuY3VycmVudFNjcmlwdCB8fCAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG4gICAgcmV0dXJuIHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXTtcbiAgfSkoKSxcbiAgY3JlYXRlOiBmdW5jdGlvbiAodGFnTmFtZSwgYXR0cnMpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgaWYoIGF0dHJzICkge1xuICAgICAgaWYoIGF0dHJzLmh0bWwgKSB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGF0dHJzLmh0bWw7XG4gICAgICB9XG4gICAgICBmb3IoIHZhciBhdHRyIGluIGF0dHJzICkge1xuICAgICAgICBpZiggYXR0ciAhPT0gJ2h0bWwnICkge1xuICAgICAgICAgIGVsW2F0dHJdID0gYXR0cnNbYXR0cl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsO1xuICB9LFxuICBhdHRyOiBmdW5jdGlvbiAoZWwsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYoICEoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSAmJiBlbFswXSBpbnN0YW5jZW9mIEVsZW1lbnQgKSB7XG4gICAgICBlbCA9IGVsWzBdO1xuICAgIH1cbiAgICBpZiggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gIH0sXG4gIHRtcENsYXNzOiBmdW5jdGlvbiAoZWwsIGNsYXNzTmFtZSwgZHVyYXRpb24sIGNiKSB7XG4gICAgdmFyIGlzQ29sbGVjdGlvbiA9ICEoZWwgaW5zdGFuY2VvZiBFbGVtZW50ICkgJiYgZWwubGVuZ3RoO1xuXG4gICAgaWYoIGlzQ29sbGVjdGlvbiApIHtcbiAgICAgIFtdLmZvckVhY2guY2FsbChlbCwgZnVuY3Rpb24gKF9lbCkge1xuICAgICAgICBfZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiggaXNDb2xsZWN0aW9uICkge1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZWwsIGZ1bmN0aW9uIChfZWwpIHtcbiAgICAgICAgICBfZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmKCBjYiBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgIH0sIGR1cmF0aW9uIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBkdXJhdGlvbigpIDogZHVyYXRpb24gKTtcbiAgfSxcbiAgZm9ybVBhcmFtczogZnVuY3Rpb24gKGZvcm0pIHtcbiAgICBpZiggIShmb3JtIGluc3RhbmNlb2YgRWxlbWVudCkgJiYgZm9ybS5sZW5ndGggKSB7XG4gICAgICBmb3JtID0gZm9ybVswXTtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHt9O1xuICAgIFtdLmZvckVhY2guY2FsbChmb3JtLmVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGlmKCBlbC5uYW1lICYmICFlbC5kaXNhYmxlZCApIHtcbiAgICAgICAgaWYoIGVsLnR5cGUgPT09ICdyYWRpbycgKSB7XG4gICAgICAgICAgaWYoIGVsLmNoZWNrZWQgKSB7XG4gICAgICAgICAgICBkYXRhW2VsLm5hbWVdID0gZWwudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGFbZWwubmFtZV0gPSBlbC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9kb207XG4iLCJcbm1vZHVsZS5leHBvcnRzID0ge1xuICBvbjogZnVuY3Rpb24gKGVsLCBldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpIHtcbiAgICBpZiggdHlwZW9mIGVsID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihlbCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKTtcbiAgfSxcbiAgb2ZmOiBmdW5jdGlvbiAoZWwsIGV2ZW50TmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSkge1xuICAgIGlmKCB0eXBlb2YgZWwgPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGVsLCBldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgIH1cbiAgICByZXR1cm4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICB9LFxuICB0cmlnZ2VyRXZlbnQ6IGRvY3VtZW50LmNyZWF0ZUV2ZW50ID8gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiSFRNTEV2ZW50c1wiKTtcbiAgICBldmVudC5kYXRhID0gZGF0YTtcbiAgICBldmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHJldHVybiBldmVudDtcbiAgfSA6IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpO1xuICAgIGV2ZW50LmRhdGEgPSBkYXRhO1xuICAgIGVsZW1lbnQuZmlyZUV2ZW50KFwib25cIiArIGV2ZW50TmFtZSwgZXZlbnQpO1xuICAgIHJldHVybiBldmVudDtcbiAgfVxufTtcbiIsIlxudmFyIG5vcm1hbGl6ZSA9IHtcbiAgaXNUb3VjaERldmljZTogJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICBpc01hYzogL15NYWMvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKSxcbiAgaXNBbmRyb2lkOiAvXkFuZHJvaWQvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKVxufTtcblxuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoIG5vcm1hbGl6ZS5pc1RvdWNoRGV2aWNlID8gJ3RvdWNoJyA6ICduby10b3VjaCcgKTtcbmlmKCBub3JtYWxpemUuaXNNYWMgKSB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1tYWMnKTtcbn1cbmlmKCBub3JtYWxpemUuaXNBbmRyb2lkICkge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtYW5kcm9pZCcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZTtcbiIsIlxuZnVuY3Rpb24gZ2V0U2Nyb2xsUm9vdCAoKSB7XG4gICAgaWYoIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH0gZWxzZSBpZiAoIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gICAgfVxuXG4gICAgdmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgICBjYWNoZVRvcCA9ICgodHlwZW9mIHdpbmRvdy5wYWdlWU9mZnNldCAhPT0gXCJ1bmRlZmluZWRcIikgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiBudWxsKSB8fCBib2R5LnNjcm9sbFRvcCB8fCBodG1sLnNjcm9sbFRvcCwgLy8gY2FjaGUgdGhlIHdpbmRvdydzIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgIHJvb3Q7XG5cbiAgICBodG1sLnNjcm9sbFRvcCA9IGJvZHkuc2Nyb2xsVG9wID0gY2FjaGVUb3AgKyAoY2FjaGVUb3AgPiAwKSA/IC0xIDogMTtcbiAgICAvLyBmaW5kIHJvb3QgYnkgY2hlY2tpbmcgd2hpY2ggc2Nyb2xsVG9wIGhhcyBhIHZhbHVlIGxhcmdlciB0aGFuIHRoZSBjYWNoZS5cbiAgICByb290ID0gKGh0bWwuc2Nyb2xsVG9wICE9PSBjYWNoZVRvcCkgPyBodG1sIDogYm9keTtcblxuICAgIHJvb3Quc2Nyb2xsVG9wID0gY2FjaGVUb3A7IC8vIHJlc3RvcmUgdGhlIHdpbmRvdydzIHNjcm9sbCBwb3NpdGlvbiB0byBjYWNoZWQgdmFsdWVcblxuICAgIHJldHVybiByb290OyAvLyByZXR1cm4gdGhlIHNjcm9sbGluZyByb290IGVsZW1lbnRcbn1cblxudmFyIHJlYWR5ID0gcmVxdWlyZSgnLi4vZm4vcmVhZHknKSxcblx0c2Nyb2xsUm9vdCA9IHsgc2Nyb2xsVG9wOiAwIH1cbiAgICBzY3JvbGwgPSB7XG4gICAgICByb290OiBzY3JvbGxSb290LFxuICAgICAgb246IGZ1bmN0aW9uICggaGFuZGxlciwgdXNlQ2FwdHVyZSApIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICAgICAgfSxcbiAgICAgIG9mZjogZnVuY3Rpb24gKCBoYW5kbGVyLCB1c2VDYXB0dXJlICkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciwgdXNlQ2FwdHVyZSk7XG4gICAgICB9LFxuICAgICAgdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzY3JvbGwucm9vdC5zY3JvbGxUb3A7XG4gICAgICB9LFxuICAgICAgZ290bzogZnVuY3Rpb24gKCB2YWx1ZSApIHtcbiAgICAgICAgc2Nyb2xsLnJvb3Quc2Nyb2xsVG9wID0gdmFsdWU7XG4gICAgICB9XG4gICAgfTtcblxucmVhZHkoZnVuY3Rpb24gKCkge1xuICBzY3JvbGxSb290ID0gZ2V0U2Nyb2xsUm9vdCgpO1xuICBzY3JvbGwucm9vdCA9IHNjcm9sbFJvb3Q7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGw7XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNjcm9sbCkge1xuXHRcblx0dmFyIGFuaW1hdGUgPSByZXF1aXJlKCcuLi8uLi9kZWZlcnJlZC9hbmltYXRlJyksXG5cdFx0JHEgPSByZXF1aXJlKCdxLXByb21pc2UnKSxcblx0XHRub29wID0gZnVuY3Rpb24oKSB7fSxcblx0XHRzY3JvbGxBbmltYXRpb24gPSBhbmltYXRlKG5vb3AsIDApLFxuXHRcdGF1eDtcblxuXHRzY3JvbGwuYW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzY3JvbGxBbmltYXRpb247XG5cdH07XG5cblx0c2Nyb2xsLmFuaW1hdGVUbyA9IGZ1bmN0aW9uICh2YWx1ZSwgY2IsIGR1cmF0aW9uICkge1xuXHRcdGlmKCB2YWx1ZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdCAgcmV0dXJuICRxLnJlamVjdCgpO1xuXHRcdH1cblx0XHRpZiggdmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50ICkge1xuXHRcdCAgdmFsdWUgPSB2YWx1ZS5vZmZzZXRUb3A7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBjYiA9PT0gJ251bWJlcicgKSB7XG5cdFx0ICBhdXggPSBjYjtcblx0XHQgIGR1cmF0aW9uID0gY2I7XG5cdFx0ICBjYiA9IGF1eDtcblx0XHR9XG5cblx0XHR2YXIgc2Nyb2xsRnJvbSA9IHNjcm9sbC50b3AoKSxcblx0XHQgICAgc2Nyb2xsRGVsdGEgPSB2YWx1ZSAtIHNjcm9sbEZyb207XG5cblx0XHRzY3JvbGxBbmltYXRpb24uc3RvcCgpO1xuXHRcdHNjcm9sbC5pbkFuaW1hdGlvbiA9IHRydWU7XG5cdFx0c2Nyb2xsQW5pbWF0aW9uID0gYW5pbWF0ZShmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcblx0XHQgIHNjcm9sbC5nb3RvKCBzY3JvbGxGcm9tICsgc2Nyb2xsRGVsdGEqcHJvZ3Jlc3MgKTtcblx0XHR9LCBmdW5jdGlvbiAoKSB7XG5cdFx0ICBzY3JvbGwuaW5BbmltYXRpb24gPSBmYWxzZTtcblx0XHQgIChjYiB8fCBfLm5vb3ApKCk7XG5cdFx0fSwgZHVyYXRpb24gfHwgMzUwLCAnZWFzZS1vdXQnKTtcblxuXHRcdHJldHVybiBzY3JvbGxBbmltYXRpb247XG5cdH07XG5cblx0cmV0dXJuIHNjcm9sbDtcbn07XG4iLCJcbnZhciBzY3JvbGwgPSByZXF1aXJlKCcuLi9zY3JvbGwnKTtcblxucmVxdWlyZSgnLi90b3AtY2xhc3MnKShzY3JvbGwpO1xucmVxdWlyZSgnLi9hbmltYXRlJykoc2Nyb2xsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGw7IiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzY3JvbGwpIHtcblxuXHR2YXIgb25TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzY3JvbGwtdG9wJywgIXNjcm9sbC50b3AoKSApO1xuXHQgICAgfTtcblxuXHRzY3JvbGwub24ob25TY3JvbGwpO1xuXG5cdHJlcXVpcmUoJy4uLy4uL2ZuL3JlYWR5Jykob25TY3JvbGwpO1xuXG59O1xuIiwiXG5yZXF1aXJlKCcuL3NhbmRib3gnKShmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJykudXNlUG9seWZpbGwoKTtcbiAgLy8gaWYoIGRvY3VtZW50LmRvY3VtZW50TW9kZSB8fCAvRWRnZVxcLy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSApIHtcbiAgLy8gICByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJykudXNlUG9seWZpbGwoKTtcbiAgLy8gfVxuXG4gIHZhciBhcGxhemFtZSA9IHJlcXVpcmUoJy4vY29yZS9jb3JlJyk7XG5cbiAgYXBsYXphbWUuY2hlY2tvdXQgPSByZXF1aXJlKCcuL2FwcHMvY2hlY2tvdXQnKTtcbiAgYXBsYXphbWUuYnV0dG9uID0gcmVxdWlyZSgnLi9hcHBzL2J1dHRvbicpO1xuICBhcGxhemFtZS5zaW11bGF0b3IgPSByZXF1aXJlKCcuL2FwcHMvc2ltdWxhdG9yJyk7XG4gIGFwbGF6YW1lLm1vZGFsID0gcmVxdWlyZSgnLi9hcHBzL21vZGFsJyk7XG5cbiAgZ2xvYmFsLmFwbGF6YW1lID0gYXBsYXphbWU7XG5cbiAgYXBsYXphbWUuaW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBpOiByZXF1aXJlKCcuL2NvcmUvYXBpJyksXG4gICAgICBsb2c6IHJlcXVpcmUoJy4vdG9vbHMvbG9nJykuaGlzdG9yeSxcbiAgICAgIHZlcnNpb246IHJlcXVpcmUoJy4uLy50bXAvYXBsYXphbWUtdmVyc2lvbicpXG4gICAgfTtcbiAgfTtcblxuICBhcGxhemFtZS5sb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmVxdWlyZSgnLi90b29scy9sb2cnKS5oaXN0b3J5LmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKGwudGltZSk7XG4gICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBsLmFyZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlcXVpcmUoJy4vYXBwcy9odHRwLXNlcnZpY2UnKTtcblxuICByZXF1aXJlKCcuL2xvYWRlcnMvZGF0YS1hcGxhemFtZScpKGdsb2JhbC5hcGxhemFtZSk7XG4gIGFwbGF6YW1lLl8ucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIHZhciBidXR0b25zTG9va3VwID0gcmVxdWlyZSgnLi9sb2FkZXJzL2RhdGEtYnV0dG9uJykoZ2xvYmFsLmFwbGF6YW1lKSxcbiAgICAgICAgd2lkZ2V0c0xvb2t1cCA9IHJlcXVpcmUoJy4vbG9hZGVycy9kYXRhLXNpbXVsYXRvcicpKGdsb2JhbC5hcGxhemFtZSksXG4gICAgICAgIGNiID0gcmVxdWlyZSgnLi9jb3JlL2FwaScpLmNhbGxiYWNrO1xuXG4gICAgaWYoIGNiICkge1xuICAgICAgaWYoICB0eXBlb2YgZ2xvYmFsW2NiXSAhPT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBzaG91bGQgYmUgYSBnbG9iYWwgZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICAgIGdsb2JhbFtjYl0oYXBsYXphbWUpO1xuICAgICAgYnV0dG9uc0xvb2t1cCgpO1xuICAgICAgd2lkZ2V0c0xvb2t1cCgpO1xuICAgIH1cblxuICB9KTtcblxuICAvLyBnbG9iYWwuJHEgPSByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJyk7XG4gIC8vIGdsb2JhbC4kaHR0cCA9IHJlcXVpcmUoJ2h0dHAtYnJvd3NlcicpO1xuXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwaUh0dHAgPSByZXF1aXJlKCcuLi9jb3JlL2FwaS1odHRwJyksXG4gICAgXyA9IHJlcXVpcmUoJy4uL3Rvb2xzL3Rvb2xzJyk7XG5cbmZ1bmN0aW9uIGdldENhcnRQcmljZSAoKSB7XG4gIHJldHVybiBfLnBhcnNlUHJpY2UoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbF9wcmljZScpLnRleHRDb250ZW50ICk7XG59XG5cbmZ1bmN0aW9uIGJ1dHRvbiAob3B0aW9ucykge1xuXG4gIGlmKCAhb3B0aW9ucyApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2FwbGF6YW1lLmJ1dHRvbiByZXF1aXJlcyBwYXJhbWV0ZXJzJyk7XG4gIH1cblxuICBpZiggIW9wdGlvbnMuaWQgJiYgIW9wdGlvbnMuYnV0dG9uICYmICFvcHRpb25zLnNlbGVjdG9yICl7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdidXR0b24gY2FuIG5vdCBiZSBpZGVudGlmaWVkICggcGxlYXNlIHVzZSAtIGlkOiBcXCdidXR0b24taWRcXCcgLSBvciAtIGJ1dHRvbjogXFwnI2J1dHRvbi1pZFxcJyAtIG9yIC0gc2VsZWN0b3I6IFxcJyNidXR0b24taWRcXCcgKHJlY29tZW5kZWQpIC0gKScpO1xuICB9XG5cbiAgaWYoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbF9wcmljZScpICkge1xuICAgIG9wdGlvbnMuYW1vdW50ID0gZ2V0Q2FydFByaWNlKCkgfHwgb3B0aW9ucy5hbW91bnQ7XG5cbiAgICBpZiggIWJ1dHRvbi53YXRjaGluZyApIHtcbiAgICAgIGJ1dHRvbi53YXRjaGluZyA9IHRydWU7XG4gICAgICBvcHRpb25zLmxhc3RQcmljZSA9IG9wdGlvbnMuYW1vdW50O1xuXG4gICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhbW91bnQgPSBnZXRDYXJ0UHJpY2UoKTtcbiAgICAgICAgaWYoIGFtb3VudCAmJiBhbW91bnQgIT09IG9wdGlvbnMubGFzdFByaWNlICkge1xuICAgICAgICAgIG9wdGlvbnMuYW1vdW50ID0gYW1vdW50O1xuICAgICAgICAgIG9wdGlvbnMubGFzdFByaWNlID0gb3B0aW9ucy5hbW91bnQ7XG4gICAgICAgICAgb3B0aW9ucy5mb3JjZVVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgYnV0dG9uKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9LCA0MDApO1xuICAgIH1cbiAgfVxuXG4gIGlmKCAhb3B0aW9ucy5hbW91bnQgKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2J1dHRvbiBhbW91bnQgbWlzc2luZycpO1xuICB9XG5cbiAgdmFyIGVsZW1lbnRzLCBlbEJ1dHRvbjtcblxuICBpZiggb3B0aW9ucy5idXR0b24gKSB7XG4gICAgZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuYnV0dG9uKTtcbiAgfSBlbHNlIGlmKCBvcHRpb25zLmlkICkge1xuICAgIGVsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggKCAvXiMvLnRlc3Qob3B0aW9ucy5pZCkgPyAnJyA6ICcjJyApICsgb3B0aW9ucy5pZCApO1xuICB9XG5cbiAgZWxlbWVudHMgPSBlbEJ1dHRvbiA/IFtlbEJ1dHRvbl0gOiBbXTtcblxuICBpZiggb3B0aW9ucy5zZWxlY3RvciApIHtcbiAgICBbXS5wdXNoLmFwcGx5KCBlbGVtZW50cywgXy5jc3NRdWVyeShvcHRpb25zLnNlbGVjdG9yKSApO1xuICB9XG5cbiAgaWYoIG9wdGlvbnMuZGVzY3JpcHRpb24gKSB7XG4gICAgW10ucHVzaC5hcHBseSggZWxlbWVudHMsIF8uY3NzUXVlcnkob3B0aW9ucy5kZXNjcmlwdGlvbikgKTtcbiAgfVxuXG4gIGVsQnV0dG9uID0gZWxCdXR0b24gfHwgZWxlbWVudHNbMF07XG5cbiAgaWYoICFvcHRpb25zLiQkcnVubmluZyAmJiBvcHRpb25zLnNlbGVjdG9yICkge1xuICAgIG9wdGlvbnMuJCRydW5uaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKCAhb3B0aW9ucy5mb3JjZVVwZGF0ZSAmJiAoICFlbGVtZW50cy5sZW5ndGggfHwgXy5lbGVtZW50RGF0YShlbEJ1dHRvbiwgJ2J1dHRvbkluaXRpYWxpemVkJykgKSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvcHRpb25zLmZvcmNlVXBkYXRlID0gZmFsc2U7XG5cbiAgaWYoIGVsQnV0dG9uICYmIG9wdGlvbnMucGFyZW50ICkge1xuICAgIHZhciBwYXJlbnQgPSBlbEJ1dHRvbi5wYXJlbnRFbGVtZW50O1xuXG4gICAgd2hpbGUoIHBhcmVudCAmJiBwYXJlbnQgIT09IGRvY3VtZW50LmJvZHkgKSB7XG4gICAgICBpZiggcGFyZW50Lm1hdGNoZXNTZWxlY3RvcihvcHRpb25zLnBhcmVudCkgKSB7XG4gICAgICAgIGVsZW1lbnRzLnB1c2gocGFyZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH1cblxuICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmKCBlbC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgKSB7XG4gICAgICBlbC5fX2Rpc3BsYXkgPSBlbC5zdHlsZS5kaXNwbGF5O1xuICAgIH1cbiAgICBlbC5fX2lucHV0ID0gKCBlbC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyB8fCBlbC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicgKSA/IGVsIDogZWwucXVlcnlTZWxlY3RvcignaW5wdXQsIGJ1dHRvbicpO1xuXG4gICAgaWYoIGVsLl9faW5wdXQgKSB7XG4gICAgICBlbC5fX2lucHV0Ll9fZGlzYWJsZWQgPSBlbC5fX2lucHV0Ll9fZGlzYWJsZWQgPT09IHVuZGVmaW5lZCA/IGVsLl9faW5wdXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIDogZWwuX19pbnB1dC5fX2Rpc2FibGVkO1xuICAgICAgZWwuX19pbnB1dC5fX2NoZWNrZWQgPSBlbC5fX2lucHV0Ll9fY2hlY2tlZCA9PT0gdW5kZWZpbmVkID8gZWwuX19pbnB1dC5jaGVja2VkIDogZWwuX19pbnB1dC5fX2NoZWNrZWQ7XG4gICAgICBpZiggZWwuX19pbnB1dC5fX2NoZWNrZWQgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgZWwuX19pbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiggIWVsLl9faW5wdXQuX19kaXNhYmxlZCApIHtcbiAgICAgICAgZWwuX19pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgXy5lbGVtZW50RGF0YShlbCwgJ2J1dHRvbkluaXRpYWxpemVkJywgdHJ1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiBidXR0b24uY2hlY2sob3B0aW9ucywgZnVuY3Rpb24gKGFsbG93ZWQpIHtcbiAgICBpZiggYWxsb3dlZCApIHtcbiAgICAgIHZhciBlbG1zID0gZWxlbWVudHMuc2xpY2UoKTtcbiAgICAgIGVsbXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLl9fZGlzcGxheTtcbiAgICAgICAgaWYgKCBlbC5fX2lucHV0ICkge1xuICAgICAgICAgIGlmKCAhZWwuX19pbnB1dC5fX2Rpc2FibGVkICYmIGVsLl9faW5wdXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpICkge1xuICAgICAgICAgICAgZWwuX19pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKCBlbC5fX2lucHV0Ll9fY2hlY2tlZCAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgZWwuX19pbnB1dC5jaGVja2VkID0gZWwuX19pbnB1dC5fX2NoZWNrZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmJ1dHRvbi5jaGVjayA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICBpZiggXy5pc1N0cmluZyhvcHRpb25zKSB8fCBfLmlzTnVtYmVyKG9wdGlvbnMpICkge1xuICAgIG9wdGlvbnMgPSB7IGFtb3VudDogTnVtYmVyKG9wdGlvbnMpIH07XG4gIH1cblxuICB2YXIgcGFyYW1zID0ge1xuICAgIGFtb3VudDogb3B0aW9ucy5hbW91bnQsXG4gICAgY3VycmVuY3k6IG9wdGlvbnMuY3VycmVuY3kgfHwgJ0VVUidcbiAgfTtcblxuICBpZiggb3B0aW9ucy5jb3VudHJ5ICkge1xuICAgIHBhcmFtcy5jb3VudHJ5ID0gb3B0aW9ucy5jb3VudHJ5O1xuICB9XG5cbiAgdmFyIGNoZWNrUHJvbWlzZSA9IGFwaUh0dHAuZ2V0KCdjaGVja291dC9idXR0b24nLCB7IHBhcmFtczogcGFyYW1zIH0pO1xuXG4gIGlmKCBfLmlzRnVuY3Rpb24oY2FsbGJhY2spICkge1xuICAgIGNoZWNrUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkgeyBjYWxsYmFjayhyZXNwb25zZS5kYXRhLmFsbG93ZWQsIHJlc3BvbnNlKTsgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7IGNhbGxiYWNrKGZhbHNlLCByZXNwb25zZSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrUHJvbWlzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYnV0dG9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBpID0gcmVxdWlyZSgnLi4vY29yZS9hcGknKSxcbiAgICBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKSxcbiAgICBodHRwID0gcmVxdWlyZSgnaHR0cC1icm93c2VyJyksXG4gICAgJHEgPSByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJyksXG4gICAgY3NzSGFjayA9IHJlcXVpcmUoJy4uL3Rvb2xzL2Nzcy1oYWNrJyk7XG5cbmZ1bmN0aW9uIGNoZWNrb3V0IChvcHRpb25zKSB7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBiYXNlQ2hlY2tvdXQgPSAoIG9wdGlvbnMuaG9zdCA9PT0gJ2xvY2F0aW9uJyA/ICggbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCArICcvJyApIDogb3B0aW9ucy5ob3N0ICkgfHwgJ2h0dHBzOi8vYXBsYXphbWUuY29tL3N0YXRpYy9jaGVja291dC8nO1xuXG4gIGlmKCAhL1xcLyQvLnRlc3QoYmFzZUNoZWNrb3V0KSApIHtcbiAgICBiYXNlQ2hlY2tvdXQgKz0gJy8nO1xuICB9XG5cbiAgdmFyIG9uID0ge30sXG4gICAgICBpZnJhbWVTcmMgPSBiYXNlQ2hlY2tvdXQgKyAnaWZyYW1lLmh0bWw/JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgZXJyb3JMb2FkaW5nID0gZmFsc2UsXG4gICAgICB0bXBPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICBjc3NPdmVybGF5ID0gY3NzSGFjaygnb3ZlcmxheScpLFxuICAgICAgY3NzQmx1ciA9IGNzc0hhY2soJ2JsdXInKSxcbiAgICAgIGNzc0xvZ28gPSBjc3NIYWNrKCdsb2dvJyksXG4gICAgICBjc3NNb2RhbCA9IGNzc0hhY2soJ21vZGFsJyk7XG5cbiAgaWYoIG9wdGlvbnMubWVyY2hhbnQub25TdWNjZXNzICkge1xuICAgIG9uLnN1Y2Nlc3MgPSBvcHRpb25zLm1lcmNoYW50Lm9uU3VjY2VzcztcbiAgICBkZWxldGUgb3B0aW9ucy5tZXJjaGFudC5vblN1Y2Nlc3M7XG4gIH1cbiAgaWYoIG9wdGlvbnMubWVyY2hhbnQub25FcnJvciApIHtcbiAgICBvbi5lcnJvciA9IG9wdGlvbnMubWVyY2hhbnQub25FcnJvcjtcbiAgICBkZWxldGUgb3B0aW9ucy5tZXJjaGFudC5vbkVycm9yO1xuICB9XG4gIGlmKCBvcHRpb25zLm1lcmNoYW50Lm9uRGlzbWlzcyApIHtcbiAgICBvbi5kaXNtaXNzID0gb3B0aW9ucy5tZXJjaGFudC5vbkRpc21pc3M7XG4gICAgZGVsZXRlIG9wdGlvbnMubWVyY2hhbnQub25EaXNtaXNzO1xuICB9XG5cbiAgdG1wT3ZlcmxheS5jbGFzc05hbWUgPSAnYXBsYXphbWUtb3ZlcmxheSBhcGxhemFtZS1vdmVybGF5LXNob3cnO1xuXG4gIGNzc092ZXJsYXkuaGFjayh0cnVlKTtcbiAgY3NzTG9nby5oYWNrKHRydWUpO1xuICBjc3NCbHVyLmhhY2sodHJ1ZSk7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaWYoICFlcnJvckxvYWRpbmcgKSB7XG4gICAgICBfLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS1ibHVyJyk7XG4gICAgfVxuICB9LCAwKTtcblxuICB0bXBPdmVybGF5LmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiYXBsYXphbWUtbG9nby13cmFwcGVyXCI+PGRpdiBjbGFzcz1cImxvZ28tYXBsYXphbWVcIiBzdHlsZT1cIndpZHRoOiAxNTBweDsgaGVpZ2h0OiAxNTBweDtcIj4nICtcbiAgcmVxdWlyZSgnLi9sb2FkaW5nLXN2ZycpICsgJzwvZGl2PjxkaXYgY2xhc3M9XCJhcGxhemFtZS1vdmVybGF5LWxvYWRpbmctdGV4dFwiPkNhcmdhbmRvIHBhc2FyZWxhIGRlIHBhZ28uLi48L2Rpdj48L2Rpdj4nO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG1wT3ZlcmxheSk7XG5cbiAgdmFyIGxvYWRpbmdUZXh0ID0gdG1wT3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcuYXBsYXphbWUtb3ZlcmxheS1sb2FkaW5nLXRleHQnKTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiggIWVycm9yTG9hZGluZyApIHtcbiAgICAgIHRtcE92ZXJsYXkucXVlcnlTZWxlY3RvcignLmxvZ28tYXBsYXphbWUnKS5jbGFzc05hbWUgKz0gJyBhbmltYXRlJztcbiAgICB9XG4gIH0sIDIwMCk7XG5cbiAgb3B0aW9ucy5hcGkgPSBfLmNvcHkoYXBpKTtcblxuICByZXR1cm4gaHR0cCggaWZyYW1lU3JjICkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHZhciBpZnJhbWVIdG1sID0gcmVzcG9uc2UuZGF0YS5yZXBsYWNlKC88aGVhZFxcPi8sICc8aGVhZD48YmFzZSBocmVmPVwiJyArIGJhc2VDaGVja291dCArICdcIiAvPicpLFxuICAgICAgICAgIGlmcmFtZSA9IF8uZ2V0SUZyYW1lKHtcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaHR0cENoZWNrb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN0YXJ0ZWQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgcmV0dXJuIGh0dHAuYXBwbHkodGhpcywgYXJndW1lbnRzKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgYXBsYXphbWU6ICdjaGVja291dCcsXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdodHRwLXN1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHN0YXJ0ZWQ6IHN0YXJ0ZWQsXG4gICAgICAgICAgICAgICAgZWxhcHNlZDogRGF0ZS5ub3coKSAtIHN0YXJ0ZWQsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IGh0dHAucGxhaW5SZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBhcGxhemFtZTogJ2NoZWNrb3V0JyxcbiAgICAgICAgICAgICAgICBldmVudDogJ2h0dHAtZXJyb3InLFxuICAgICAgICAgICAgICAgIHN0YXJ0ZWQ6IHN0YXJ0ZWQsXG4gICAgICAgICAgICAgICAgZWxhcHNlZDogRGF0ZS5ub3coKSAtIHN0YXJ0ZWQsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IGh0dHAucGxhaW5SZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICBpZnJhbWUuY2xhc3NOYW1lID0gJ2FwbGF6YW1lLW1vZGFsJztcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgaWZyYW1lLnNyYyA9IGlmcmFtZVNyYztcblxuICAgICAgaWYoICFvcHRpb25zLm1lcmNoYW50ICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgbWVyY2hhbnQgcGFyYW1ldGVycycpO1xuICAgICAgfVxuXG4gICAgICBpZiggJ3NhbmRib3gnIGluIG9wdGlvbnMubWVyY2hhbnQgKSB7XG4gICAgICAgIGFwaS5zYW5kYm94ID0gb3B0aW9ucy5tZXJjaGFudC5zYW5kYm94O1xuICAgICAgfVxuXG4gICAgICBpZiggIW9wdGlvbnMubWVyY2hhbnQucHVibGljX2FwaV9rZXkgKSB7XG4gICAgICAgIGlmKCBhcGkucHVibGljS2V5ICkge1xuICAgICAgICAgIG9wdGlvbnMubWVyY2hhbnQucHVibGljX2FwaV9rZXkgPSBhcGkucHVibGljS2V5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBwdWJsaWMga2V5Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5vcmlnaW4gPSB7XG4gICAgICAgIGhyZWY6IGxvY2F0aW9uLmhyZWYsXG4gICAgICAgIGhvc3Q6IGxvY2F0aW9uLmhvc3QsXG4gICAgICAgIHByb3RvY29sOiBsb2NhdGlvbi5wcm90b2NvbCxcbiAgICAgICAgb3JpZ2luOiBsb2NhdGlvbi5vcmlnaW5cbiAgICAgIH07XG5cbiAgICAgIHZhciBvbk1lc3NhZ2UgPSBmdW5jdGlvbiAoZSwgbWVzc2FnZSkge1xuXG4gICAgICAgIHN3aXRjaCggbWVzc2FnZS5ldmVudCApIHtcbiAgICAgICAgICBjYXNlICdtZXJjaGFudCc6XG4gICAgICAgICAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gICAgICAgICAgICBlLnNvdXJjZS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgIGNoZWNrb3V0OiBvcHRpb25zXG4gICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnc2hvdy1pZnJhbWUnOlxuICAgICAgICAgICAgXy5yZW1vdmVDbGFzcyhpZnJhbWUsICdoaWRlJyk7XG4gICAgICAgICAgICBjc3NNb2RhbC5oYWNrKHRydWUpO1xuICAgICAgICAgICAgY3NzT3ZlcmxheS5oYWNrKGZhbHNlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG1wT3ZlcmxheSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdsb2FkaW5nLXRleHQnOlxuICAgICAgICAgICAgbG9hZGluZ1RleHQudGV4dENvbnRlbnQgPSBtZXNzYWdlLnRleHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdkcm9wLWJsdXInOlxuICAgICAgICAgICAgXy5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtYmx1cicpO1xuICAgICAgICAgICAgXy5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtdW5ibHVyJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgY3NzQmx1ci5oYWNrKGZhbHNlKTtcbiAgICAgICAgICAgICAgXy5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtYmx1cicpO1xuICAgICAgICAgICAgICBfLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS11bmJsdXInKTtcbiAgICAgICAgICAgIH0sIDYwMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjb25maXJtJzpcbiAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgIF8ubG9nKCdhcGxhemFtZS5jaGVja291dDpjb25maXJtJywgbWVzc2FnZSk7XG5cbiAgICAgICAgICAgIGh0dHBDaGVja291dCggb3B0aW9ucy5tZXJjaGFudC5jb25maXJtYXRpb25fdXJsLCB7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICBkYXRhOiBtZXNzYWdlLmRhdGEsXG4gICAgICAgICAgICAgIHBhcmFtczogXy5leHRlbmQobWVzc2FnZS5wYXJhbXMgfHwge30sIHtcbiAgICAgICAgICAgICAgICBvcmRlcl9pZDogbWVzc2FnZS5kYXRhLmNoZWNrb3V0X3Rva2VuLFxuICAgICAgICAgICAgICAgIGNoZWNrb3V0X3Rva2VuOiBtZXNzYWdlLmRhdGEuY2hlY2tvdXRfdG9rZW5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGUuc291cmNlLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBhcGxhemFtZTogJ2NoZWNrb3V0JyxcbiAgICAgICAgICAgICAgICBldmVudDogJ2NvbmZpcm1hdGlvbicsXG4gICAgICAgICAgICAgICAgcmVzdWx0OiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IGh0dHAucGxhaW5SZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgZS5zb3VyY2UucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGFwbGF6YW1lOiAnY2hlY2tvdXQnLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY29uZmlybWF0aW9uJyxcbiAgICAgICAgICAgICAgICByZXN1bHQ6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IGh0dHAucGxhaW5SZXNwb25zZShyZXNwb25zZSlcbiAgICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uZmlybWF0aW9uX3VybFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICAgICAgaWYoIGlmcmFtZSApIHtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgICAgICAgICAgICBjc3NNb2RhbC5oYWNrKGZhbHNlKTtcbiAgICAgICAgICAgICAgaWZyYW1lID0gbnVsbDtcblxuICAgICAgICAgICAgICBfLm9uTWVzc2FnZS5vZmYoJ2NoZWNrb3V0Jywgb25NZXNzYWdlKTtcblxuICAgICAgICAgICAgICBzd2l0Y2goIG1lc3NhZ2UucmVzdWx0ICkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBvbi5zdWNjZXNzID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgICAgICAgICAgICAgICBvbi5zdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoICFvcHRpb25zLm1lcmNoYW50LnN1Y2Nlc3NfdXJsICkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3N1Y2Nlc3NfdXJsIG1pc3NpbmcnKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2Uob3B0aW9ucy5tZXJjaGFudC5zdWNjZXNzX3VybCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjYW5jZWwnOlxuICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBvbi5lcnJvciA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgICAgICAgICAgICAgb24uZXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiggIW9wdGlvbnMubWVyY2hhbnQuY2FuY2VsX3VybCApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5jZWxfdXJsIG1pc3NpbmcnKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2Uob3B0aW9ucy5tZXJjaGFudC5jYW5jZWxfdXJsKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Rpc21pc3MnOlxuICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBvbi5kaXNtaXNzID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgICAgICAgICAgICAgICBvbi5kaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKG9wdGlvbnMubWVyY2hhbnQuY2hlY2tvdXRfdXJsIHx8ICcvJyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF8ub25NZXNzYWdlKCdjaGVja291dCcsIG9uTWVzc2FnZSk7XG5cbiAgICB9KS5jYXRjaChmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ2NhbiBub3QgY29ubmVjdCB0byAnICsgYmFzZUNoZWNrb3V0KTtcbiAgICAgIGVycm9yTG9hZGluZyA9IHRydWU7XG5cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FwbGF6YW1lICcgKyByZWFzb24pO1xuXG4gICAgICBfLnJlbW92ZUNsYXNzKHRtcE92ZXJsYXkucXVlcnlTZWxlY3RvcignLmxvZ28tYXBsYXphbWUnKSwgJ2FuaW1hdGUnKTtcbiAgICAgIGxvYWRpbmdUZXh0LmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwidGV4dC1lcnJvclwiPkVycm9yIGNhcmdhbmRvIHBhc2FyZWxhIGRlIHBhZ288L2Rpdj48YnIvPjxkaXY+PGEgaHJlZj1cIm1haWx0bzpzb3BvcnRlQGFwbGF6YW1lLmNvbT9zdWJqZWN0PScgKyBlbmNvZGVVUkkoJ0NoZWNrb3V0IGVycm9yOiAnICsgcmVhc29uKSArICdcIj5zb3BvcnRlQGFwbGF6YW1lLmNvbTwvYT48L2Rpdj4nO1xuICAgICAgbG9hZGluZ1RleHQuc3R5bGUubGluZUhlaWdodCA9ICcxLjUnO1xuXG4gICAgICAob3B0aW9ucy5vbkVycm9yIHx8IF8ubm9vcCkocmVhc29uKTtcbiAgICB9KTtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrb3V0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uL3Rvb2xzL3Rvb2xzJyksXG4gICAgaHR0cCA9IHJlcXVpcmUoJ2h0dHAtYnJvd3NlcicpO1xuXG5mdW5jdGlvbiBwcm9jZXNzUmVzcG9uc2UocmVzdWx0LCBtZXNzYWdlLCBtZXNzYWdlU3JjLCBzdGFydGVkKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgdmFyIHJlc3BvbnNlcCA9IGh0dHAucGxhaW5SZXNwb25zZShyZXNwb25zZSk7XG4gICAgcmVzcG9uc2VwLmNvbmZpZyA9IG1lc3NhZ2U7XG5cbiAgICBtZXNzYWdlU3JjLnBvc3RNZXNzYWdlKHtcbiAgICAgIGFwbGF6YW1lOiAnaHR0cCcsXG4gICAgICBldmVudDogJ3Jlc3BvbnNlJyxcbiAgICAgIHN0YXJ0ZWQ6IHN0YXJ0ZWQsXG4gICAgICBlbGFwc2VkOiBEYXRlLm5vdygpIC0gc3RhcnRlZCxcbiAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlcFxuICAgIH0sICcqJyk7XG4gIH07XG59XG5cbl8ub25NZXNzYWdlKCdodHRwJywgZnVuY3Rpb24gKGUsIG1lc3NhZ2UpIHtcblxuICB2YXIgc3RhcnRlZCA9IERhdGUubm93KCk7XG5cbiAgaHR0cCggbWVzc2FnZS51cmwsIG1lc3NhZ2UgKVxuICAgIC50aGVuKFxuICAgICAgcHJvY2Vzc1Jlc3BvbnNlKCdzdWNjZXNzJywgbWVzc2FnZSwgZS5zb3VyY2UsIHN0YXJ0ZWQpLFxuICAgICAgcHJvY2Vzc1Jlc3BvbnNlKCdlcnJvcicsIG1lc3NhZ2UsIGUuc291cmNlLCBzdGFydGVkKVxuICAgICk7XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVhZHk6IHRydWUgfTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSAnPHN2ZyBjbGFzcz1cImxpbmUtc2hvcnRcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+JyArXG4nPHBhdGggIGQ9XCJNMzYuNzg4LDgxLjAwOCw1MCw1MFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCI2XCIgZmlsbD1cIm5vbmVcIi8+JyArXG4nPC9zdmc+JyArXG4nPHN2ZyBjbGFzcz1cInNtaWxlXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPicgK1xuJzxnIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBmaWxsPVwibm9uZVwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjc4MDM2NjMzLDAsMCwwLjc4MDM2NjMzLDEwLjUyNjUxMiwxOC4wMDM5OTgpXCI+JyArXG4nPHBhdGggY2xhc3M9XCJzbWlsZS1vdXRsaW5lXCIgc3Ryb2tlLXdpZHRoPVwiMTJcIiBkPVwiTTc1LjI0Miw1Ny41MWMtNS40MzUsNy44MzktMTQuNDk4LDEyLjk3Mi0yNC43NjEsMTIuOTcyLTEwLjI2MiwwLTE5LjMyNS01LjEzMi0yNC43NTgtMTIuOTcyXCIvPicgK1xuJzxwYXRoIGNsYXNzPVwic21pbGUtbGluZVwiIHN0cm9rZS13aWR0aD1cIjcuNVwiIGQ9XCJNNzUuMjQyLDU3LjUxYy01LjQzNSw3LjgzOS0xNC40OTgsMTIuOTcyLTI0Ljc2MSwxMi45NzItMTAuMjYyLDAtMTkuMzI1LTUuMTMyLTI0Ljc1OC0xMi45NzJcIi8+JyArXG4nPC9nPicgK1xuJzwvc3ZnPicgK1xuJzxzdmcgY2xhc3M9XCJsaW5lLWxhcmdlXCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPicgK1xuJzxwYXRoIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZD1cIk01MCw1MCw2Ni42ODcsOTIuMjY2XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1taXRlcmxpbWl0PVwiNFwiIHN0cm9rZS1kYXNoYXJyYXk9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGZpbGw9XCJub25lXCIvPicgK1xuJzwvc3ZnPic7XG4iLCIndXNlIHN0cmljdCc7XG5cbndpbmRvdy5tYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEgfHwgd2luZG93LndlYmtpdE1hdGNoTWVkaWEgfHwgd2luZG93Lm1vek1hdGNoTWVkaWEgfHwgd2luZG93Lm1zTWF0Y2hNZWRpYTtcblxudmFyIGFwaSA9IHJlcXVpcmUoJy4uL2NvcmUvYXBpJyksXG4gICAgXyA9IHJlcXVpcmUoJy4uL3Rvb2xzL3Rvb2xzJyksXG4gICAgY3NzSGFjayA9IHJlcXVpcmUoJy4uL3Rvb2xzL2Nzcy1oYWNrJyksXG4gICAgYXBsYXphbWVWZXJzaW9uID0gcmVxdWlyZSgnLi4vLi4vLnRtcC9hcGxhemFtZS12ZXJzaW9uJyksXG4gICAgaXNNb2JpbGUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKCBtYXgtd2lkdGg6IDc2N3B4ICknKSxcbiAgICBsYXN0U2Nyb2xsVG9wO1xuXG52YXIgdG1wT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgIGNzc092ZXJsYXkgPSBjc3NIYWNrKCdvdmVybGF5JyksXG4gICAgY3NzQmx1ciA9IGNzc0hhY2soJ2JsdXInKSxcbiAgICBjc3NNb2RhbCA9IGNzc0hhY2soJ21vZGFsJyk7XG5cbmZ1bmN0aW9uIG1vZGFsIChjb250ZW50LCBvcHRpb25zKSB7XG5cbiAgaWYoIG1vZGFsLmlmcmFtZSApIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsLmlmcmFtZSk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBjc3NPdmVybGF5LmhhY2sodHJ1ZSk7XG4gIGNzc0JsdXIuaGFjayh0cnVlKTtcbiAgY3NzTW9kYWwuaGFjayh0cnVlKTtcblxuICB0bXBPdmVybGF5LmNsYXNzTmFtZSA9ICdhcGxhemFtZS1vdmVybGF5IGFwbGF6YW1lLW92ZXJsYXktc2hvdyc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG1wT3ZlcmxheSk7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgXy5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtYmx1cicpO1xuICB9LCAwKTtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgXy5yZW1vdmVDbGFzcyh0bXBPdmVybGF5LCAnYXBsYXphbWUtb3ZlcmxheS1zaG93Jyk7XG4gIH0sIGlzTW9iaWxlLm1hdGNoZXMgPyAwIDogNjAwICk7XG5cbiAgbW9kYWwuaWZyYW1lID0gXy5nZXRJRnJhbWUoe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnXG4gICAgICB9KTtcblxuICBtb2RhbC5pZnJhbWUuY2xhc3NOYW1lID0gJ2FwbGF6YW1lLW1vZGFsJztcbiAgLy8gbW9kYWwuaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIG1vZGFsLmlmcmFtZS5jb250ZW50ID0gY29udGVudDtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsLmlmcmFtZSk7XG4gIG1vZGFsLmlmcmFtZS5zcmMgPSBhcGkuc3RhdGljVXJsICsgJ3dpZGdldHMvbW9kYWwvbW9kYWwuaHRtbD92PScgKyBlbmNvZGVVUkkoYXBsYXphbWVWZXJzaW9uKTtcbn1cblxuXy5vbk1lc3NhZ2UoJ21vZGFsJywgZnVuY3Rpb24gKGUsIG1lc3NhZ2UpIHtcblxuICBzd2l0Y2goIG1lc3NhZ2UuZXZlbnQgKSB7XG4gICAgY2FzZSAnb3Blbic6XG4gICAgICBtb2RhbC5yZWZlcnJlciA9IGUuc291cmNlO1xuICAgICAgbW9kYWwubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICBtb2RhbChtZXNzYWdlLmRhdGEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnb3BlbmluZyc6XG4gICAgICBtb2RhbC5pZnJhbWUuc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdvcGVuZWQnOlxuICAgICAgbGFzdFNjcm9sbFRvcCA9IF8uc2Nyb2xsVG9wKCk7XG4gICAgICBlLnNvdXJjZS5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGFwbGF6YW1lOiAnbW9kYWwnLFxuICAgICAgICBldmVudDogJ2NvbnRlbnQnLFxuICAgICAgICBjb250ZW50OiBtb2RhbC5pZnJhbWUuY29udGVudFxuICAgICAgfSwgJyonKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Jlc29sdmVkJzpcbiAgICAgIG1vZGFsLnJlZmVycmVyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgYXBsYXphbWU6ICdtb2RhbCcsXG4gICAgICAgIGV2ZW50OiAncmVzb2x2ZWQnLFxuICAgICAgICBuYW1lOiBtb2RhbC5tZXNzYWdlLm5hbWUsXG4gICAgICAgIHZhbHVlOiBtZXNzYWdlLnZhbHVlXG4gICAgICB9LCAnKicpO1xuICAgICAgZGVsZXRlIG1vZGFsLnJlZmVycmVyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY2xvc2luZyc6XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gbW9kYWwuaWZyYW1lLm92ZXJmbG93O1xuICAgICAgXy5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtYmx1cicpO1xuICAgICAgXy5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtdW5ibHVyJyk7XG4gICAgICBfLmFkZENsYXNzKHRtcE92ZXJsYXksICdhcGxhemFtZS1vdmVybGF5LWhpZGUnKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjc3NCbHVyLmhhY2soZmFsc2UpO1xuICAgICAgICBfLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS11bmJsdXInKTtcbiAgICAgIH0sIGlzTW9iaWxlLm1hdGNoZXMgPyAwIDogNjAwICk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjbG9zZSc6XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3NzTW9kYWwuaGFjayhmYWxzZSk7XG4gICAgICB9LCBpc01vYmlsZS5tYXRjaGVzID8gMCA6IDEwMCApO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0bXBPdmVybGF5KTtcbiAgICAgIF8ucmVtb3ZlQ2xhc3ModG1wT3ZlcmxheSwgJ2FwbGF6YW1lLW92ZXJsYXktaGlkZScpO1xuICAgICAgXy5zY3JvbGxUb3AobGFzdFNjcm9sbFRvcCk7XG4gICAgICBpZiggbW9kYWwuaWZyYW1lICkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG1vZGFsLmlmcmFtZSk7XG5cbiAgICAgICAgaWYoIG1vZGFsLnJlZmVycmVyICkge1xuICAgICAgICAgIG1vZGFsLnJlZmVycmVyLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGFwbGF6YW1lOiAnbW9kYWwnLFxuICAgICAgICAgICAgZXZlbnQ6ICdkaXNtaXNzJyxcbiAgICAgICAgICAgIG5hbWU6IG1vZGFsLm1lc3NhZ2UubmFtZVxuICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgICAgZGVsZXRlIG1vZGFsLnJlZmVycmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIG1vZGFsLm1lc3NhZ2UgKSB7XG4gICAgICAgICAgZGVsZXRlIG1vZGFsLm1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIG1vZGFsLmlmcmFtZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vZGFsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBpSHR0cCA9IHJlcXVpcmUoJy4uL2NvcmUvYXBpLWh0dHAnKSxcbiAgICBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKSxcbiAgICAkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKSxcbiAgICBjYWNoZSA9IFtdLFxuICAgIHJlcXVlc3RzQ2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gc2ltdWxhdG9yIChhbW91bnQsIF9vcHRpb25zLCBjYWxsYmFjaywgb25FcnJvcikge1xuXG4gIGlmKCBfLmlzRnVuY3Rpb24oX29wdGlvbnMpICkge1xuICAgIG9uRXJyb3IgPSBjYWxsYmFjaztcbiAgICBjYWxsYmFjayA9IF9vcHRpb25zO1xuICAgIF9vcHRpb25zID0ge307XG4gIH0gZWxzZSB7XG4gICAgX29wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fTtcbiAgfVxuXG4gIHZhciBvcHRpb25zID0ge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBhbW91bnQ6IGFtb3VudFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaGFzaCA9IGFtb3VudCArICcsJyArIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpO1xuXG4gIGlmKCByZXF1ZXN0c0NhY2hlW2hhc2hdICkge1xuICAgIHJldHVybiByZXF1ZXN0c0NhY2hlW2hhc2hdLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgKGNhbGxiYWNrIHx8IF8ubm9vcCkoIHJlc3VsdC5jaG9pY2VzLCByZXN1bHQub3B0aW9ucyApO1xuICAgIH0pO1xuICB9XG5cbiAgaWYoIF9vcHRpb25zLnZpZXcgKSB7XG4gICAgb3B0aW9ucy5wYXJhbXMudmlldyA9IF9vcHRpb25zLnZpZXc7XG4gIH1cbiAgaWYoIF9vcHRpb25zLnBheWRheSApIHtcbiAgICBvcHRpb25zLnBhcmFtcy5wYXlkYXkgPSBfb3B0aW9ucy5wYXlkYXk7XG4gIH1cbiAgaWYoIF9vcHRpb25zLnB1YmxpY0tleSApIHtcbiAgICBvcHRpb25zLnB1YmxpY0tleSA9IF9vcHRpb25zLnB1YmxpY0tleTtcbiAgfVxuXG4gIHZhciBmb3VuZENhY2hlZCA9IF8uZmluZChjYWNoZSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbS5hbW91bnQgPT09IGFtb3VudDtcbiAgfSk7XG5cbiAgcmVxdWVzdHNDYWNoZVtoYXNoXSA9ICggIV9vcHRpb25zLm5vQ2FjaGUgJiYgZm91bmRDYWNoZWQgPyAkcS5yZXNvbHZlKGZvdW5kQ2FjaGVkKSA6IGFwaUh0dHAuZ2V0KCdpbnN0YWxtZW50LXBsYW4tc2ltdWxhdG9yJywgb3B0aW9ucyApLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBhbW91bnQ6IGFtb3VudCxcbiAgICAgICAgY2hvaWNlczogcmVzcG9uc2UuZGF0YS5jaG9pY2VzWzBdLmluc3RhbG1lbnRzLFxuICAgICAgICBvcHRpb25zOiByZXNwb25zZS5kYXRhLm9wdGlvbnMsXG4gICAgICAgIHJlc3BvbnNlOiByZXNwb25zZVxuICAgICAgfTtcbiAgICAgIGNhY2hlLnB1c2gocmVzdWx0KTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KSApXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgKGNhbGxiYWNrIHx8IF8ubm9vcCkoIHJlc3VsdC5jaG9pY2VzLCByZXN1bHQub3B0aW9ucyApO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGlmKCByZXNwb25zZS5zdGF0dXMgPT09IDQwMyApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQXBsYXphbWU6IFBlcm1pc28gZGVuZWdhZG8gdXNhbmRvIGxhIGNsYXZlIHDDumJsaWNhOiAnICsgcmVzcG9uc2UuY29uZmlnLnB1YmxpY0tleSk7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnUmV2aXNhIGxhIGNvbmZpZ3VyYWNpw7NuIGRlIEFwbGF6YW1lLCBwYXJhIGN1YWxxdWllciBkdWRhIHB1ZWRlcyBlc2NyaWJpciBhIGhvbGFAYXBsYXphbWUuY29tJyk7XG4gICAgICB9IGVsc2UgaWYoIF8ua2V5KHJlc3BvbnNlLCAnZGF0YS5lcnJvci5maWVsZHMuYW1vdW50LjAnKSApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQXBsYXphbWU6ICcgKyByZXNwb25zZS5kYXRhLmVycm9yLmZpZWxkcy5hbW91bnRbMF0pO1xuICAgICAgfSBlbHNlIGlmKCBfLmtleShyZXNwb25zZSwgJ2RhdGEuZXJyb3IubWVzc2FnZScpICkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBcGxhemFtZTogJyArIHJlc3BvbnNlLmRhdGEuZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICAob25FcnJvciB8fCBfLm5vb3ApKHJlc3BvbnNlKTtcbiAgICB9KTtcblxuICByZXR1cm4gcmVxdWVzdHNDYWNoZVtoYXNoXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaW11bGF0b3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcHpWZXJzaW9uID0gcmVxdWlyZSgnLi4vLi4vLnRtcC9hcGxhemFtZS12ZXJzaW9uJyksXG4gICAgXyA9IHJlcXVpcmUoJy4uL3Rvb2xzL3Rvb2xzJyksXG4gICAgYXBpID0gcmVxdWlyZSgnLi9hcGknKSxcbiAgICBodHRwID0gcmVxdWlyZSgnaHR0cC1icm93c2VyJyksXG4gICAgcmVuZGVyQWNjZXB0ID0gXy50ZW1wbGF0ZS5jb21waWxlKCdhcHBsaWNhdGlvbi92bmQuYXBsYXphbWU8JSBpZihzYW5kYm94KXsgJT4uc2FuZGJveDwlIH0gJT4udjwlPSB2ZXJzaW9uICU+K2pzb24nKSxcbiAgICBhY2NlcHRIZWFkZXIgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICB2YXIgX2FwaSA9IF8uY29weShhcGkpO1xuICAgICAgaWYoICd2ZXJzaW9uJyBpbiBjb25maWcgfHwgJ2FwaVZlcnNpb24nIGluIGNvbmZpZyApIHtcbiAgICAgICAgX2FwaS52ZXJzaW9uID0gJ3ZlcnNpb24nIGluIGNvbmZpZyA/IGNvbmZpZy52ZXJzaW9uIDogY29uZmlnLmFwaVZlcnNpb247XG4gICAgICB9XG4gICAgICBpZiggJ3NhbmRib3gnIGluIGNvbmZpZyApIHtcbiAgICAgICAgX2FwaS5zYW5kYm94ID0gY29uZmlnLnNhbmRib3g7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVuZGVyQWNjZXB0KF9hcGkpO1xuICAgIH0sXG4gICAgYXV0aG9yaXphdGlvbkhlYWRlciA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgIGNvbmZpZy5wdWJsaWNLZXkgPSBjb25maWcucHVibGljS2V5IHx8IGFwaS5wdWJsaWNLZXk7XG4gICAgICByZXR1cm4gJ0JlYXJlciAnICsgY29uZmlnLnB1YmxpY0tleTtcbiAgICB9O1xuXG52YXIgYXBpSHR0cCA9IHt9O1xuXG5fLmVhY2goWydnZXQnLCAnZGVsZXRlJ10sIGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgYXBpSHR0cFttZXRob2RdID0gZnVuY3Rpb24gKHBhdGgsIG9wdGlvbnMpIHtcbiAgICB2YXIgdXJsID0gXy5qb2luUGF0aChhcGkuaG9zdCwgcGF0aCk7XG4gICAgcmV0dXJuIGh0dHBbbWV0aG9kXSh1cmwsIF8ubWVyZ2Uob3B0aW9ucywgeyBoZWFkZXJzOiB7XG4gICAgICAgIHhBanNWZXJzaW9uOiBhcHpWZXJzaW9uLFxuICAgICAgICBhY2NlcHQ6IGFjY2VwdEhlYWRlcixcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYXV0aG9yaXphdGlvbkhlYWRlclxuICAgICAgfSB9KSApO1xuICB9O1xufSk7XG5cbl8uZWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgYXBpSHR0cFttZXRob2RdID0gZnVuY3Rpb24gKHBhdGgsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICB2YXIgdXJsID0gXy5qb2luUGF0aChhcGkuaG9zdCwgcGF0aCk7XG4gICAgcmV0dXJuIGh0dHBbbWV0aG9kXSh1cmwsIGRhdGEsIF8ubWVyZ2Uob3B0aW9ucywgeyBoZWFkZXJzOiB7XG4gICAgICAgIHhBanNWZXJzaW9uOiBhcHpWZXJzaW9uLFxuICAgICAgICBhY2NlcHQ6IGFjY2VwdEhlYWRlcixcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYXV0aG9yaXphdGlvbkhlYWRlclxuICAgICAgfSB9KSApO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXBpSHR0cDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGhvc3Q6ICdodHRwczovL2FwaS5hcGxhemFtZS5jb20vJyxcbiAgLy8gaG9zdDogJ2h0dHBzOi8vYXBpLmFwbGF6YW1lLmNvbS8nLFxuICBzdGF0aWNVcmw6ICdodHRwczovL2FwbGF6YW1lLmNvbS9zdGF0aWMvJyxcbiAgdmVyc2lvbjogMSxcbiAgY2hlY2tvdXRWZXJzaW9uOiAxLFxuICBzYW5kYm94OiBmYWxzZVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIF86IHJlcXVpcmUoJy4uL3Rvb2xzL3Rvb2xzJyksXG4gIGluaXQ6IHJlcXVpcmUoJy4vaW5pdCcpLFxuICBhcGlHZXQ6IHJlcXVpcmUoJy4vYXBpLWh0dHAnKS5nZXQsXG4gIGFwaVBvc3Q6IHJlcXVpcmUoJy4vYXBpLWh0dHAnKS5wb3N0LFxuICBhcGlEZWxldGU6IHJlcXVpcmUoJy4vYXBpLWh0dHAnKVsnZGVsZXRlJ10sXG4gIGFwaVB1dDogcmVxdWlyZSgnLi9hcGktaHR0cCcpLnB1dCxcbiAgdmVyc2lvbjogcmVxdWlyZSgnLi4vLi4vLnRtcC9hcGxhemFtZS12ZXJzaW9uJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcGkgPSByZXF1aXJlKCcuL2FwaScpLFxuICAgIF8gPSByZXF1aXJlKCcuLi90b29scy90b29scycpO1xuXG5mdW5jdGlvbiBpbml0IChvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGlmKCB0eXBlb2Ygb3B0aW9ucy52ZXJzaW9uID09PSAnc3RyaW5nJyApIHtcbiAgICB2YXIgbWF0Y2hWZXJzaW9uID0gb3B0aW9ucy52ZXJzaW9uLm1hdGNoKC9edj8oXFxkKShcXC4oXFxkKSk/JC8pO1xuXG4gICAgaWYoICFtYXRjaFZlcnNpb24gKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ZlcnNpb24gbWlzbWF0Y2gsIHNob3VsZCBiZSBsaWtlIFxcJ3YxLjJcXCcnKTtcbiAgICB9XG5cbiAgICBvcHRpb25zLnZlcnNpb24gPSBOdW1iZXIobWF0Y2hWZXJzaW9uWzFdKTtcblxuICAgIGlmKCBtYXRjaFZlcnNpb25bM10gIT09IHVuZGVmaW5lZCApIHtcbiAgICAgIG9wdGlvbnMuY2hlY2tvdXRWZXJzaW9uID0gTnVtYmVyKG1hdGNoVmVyc2lvblszXSk7XG4gICAgfVxuICB9XG5cbiAgaWYoIHR5cGVvZiBvcHRpb25zLnNhbmRib3ggPT09ICdzdHJpbmcnICkge1xuICAgIG9wdGlvbnMuc2FuZGJveCA9IG9wdGlvbnMuc2FuZGJveCA9PT0gJ3RydWUnO1xuICB9XG5cbiAgaWYoIHR5cGVvZiBvcHRpb25zLmFuYWx5dGljcyA9PT0gJ3N0cmluZycgKSB7XG4gICAgb3B0aW9ucy5hbmFseXRpY3MgPSBvcHRpb25zLmFuYWx5dGljcyA9PT0gJ3RydWUnO1xuICB9XG5cbiAgXy5leHRlbmQoYXBpLCBvcHRpb25zKTtcblxuICBfLmxvZygnYXBsYXphbWUuaW5pdCcsIGFwaSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBsYXphbWUpIHtcblxuICB2YXIgXyA9IGFwbGF6YW1lLl8sXG4gICAgICBzY3JpcHQgPSBfLmN1cnJlbnRTY3JpcHQsXG4gICAgICBkYXRhQXBsYXphbWUgPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWFwbGF6YW1lJyksXG4gICAgICBvcHRpb25zID0gc2NyaXB0LnNyYyAmJiAoL1xcPy8udGVzdChzY3JpcHQuc3JjKSA/IF8uZGVzZXJpYWxpemUoc2NyaXB0LnNyYy5tYXRjaCgvKC4qPylcXD8oLiopLylbMl0pIDoge30pIHx8IHt9O1xuXG4gIGlmKCBvcHRpb25zLnNhbmRib3ggKSB7XG4gICAgb3B0aW9ucy5zYW5kYm94ID0gb3B0aW9ucy5zYW5kYm94ID09PSAndHJ1ZScgfHwgb3B0aW9ucy5zYW5kYm94ID09PSAnMSc7XG4gIH1cblxuICBpZiggZGF0YUFwbGF6YW1lICkge1xuXG4gICAgaWYoIC9cXDovLnRlc3QoZGF0YUFwbGF6YW1lKSApIHtcbiAgICAgIGRhdGFBcGxhemFtZS5zcGxpdCgnLCcpLmZvckVhY2goZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgICAgdmFyIGtleXMgPSBwYXJ0Lm1hdGNoKC9eKFteXFw6XSspXFw6KC4qKS8pO1xuICAgICAgICBvcHRpb25zW2tleXNbMV0udHJpbSgpXSA9IGtleXNbMl0udHJpbSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmKCAhb3B0aW9ucy5wdWJsaWNLZXkgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncHVibGljS2V5IG1pc3NpbmcgaW4gZGF0YS1hcGxhemFtZScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLnB1YmxpY0tleSA9IGRhdGFBcGxhemFtZTtcbiAgICB9XG5cbiAgICBpZiggc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1hcGktaG9zdCcpICkge1xuICAgICAgb3B0aW9ucy5ob3N0ID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1hcGktaG9zdCcpO1xuICAgIH1cblxuICAgIGlmKCBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLXZlcnNpb24nKSApIHtcbiAgICAgIG9wdGlvbnMudmVyc2lvbiA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmVyc2lvbicpO1xuICAgIH1cblxuICAgIGlmKCBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLXNhbmRib3gnKSApIHtcbiAgICAgIG9wdGlvbnMuc2FuZGJveCA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2FuZGJveCcpO1xuICAgIH1cblxuICAgIGlmKCBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWFuYWx5dGljcycpICkge1xuICAgICAgb3B0aW9ucy5hbmFseXRpY3MgPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWFuYWx5dGljcycpO1xuICAgIH1cblxuICAgIGlmKCBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXRpYy11cmwnKSApIHtcbiAgICAgIG9wdGlvbnMuc3RhdGljVXJsID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGF0aWMtdXJsJyk7XG4gICAgfVxuXG4gICAgaWYoIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbGJhY2snKSApIHtcbiAgICAgIC8vIGlmKCB0eXBlb2YgZ2xvYmFsW3NjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbGJhY2snKV0gIT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAvLyAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgc2hvdWxkIGJlIGEgZ2xvYmFsIGZ1bmN0aW9uJyk7XG4gICAgICAvLyB9XG5cbiAgICAgIG9wdGlvbnMuY2FsbGJhY2sgPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWNhbGxiYWNrJyk7XG4gICAgICAvLyBfLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vICAgZ2xvYmFsW3NjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbGJhY2snKV0oYXBsYXphbWUpO1xuICAgICAgLy8gfSk7XG4gICAgfVxuICB9XG5cbiAgYXBsYXphbWUuaW5pdChvcHRpb25zKTtcblxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBsYXphbWUpIHtcbiAgdmFyIF8gPSBhcGxhemFtZS5fLFxuICAgICAgJHEgPSByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJyk7XG5cbiAgZnVuY3Rpb24gYnV0dG9uc0xvb2t1cCAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQgPSBlbGVtZW50IHx8IGRvY3VtZW50O1xuICAgIGlmKCAhZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgYnRucyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYXBsYXphbWUtYnV0dG9uXScpO1xuXG4gICAgaWYoIGJ0bnMubGVuZ3RoICkge1xuICAgICAgLy8gY29uc29sZS5sb2coJy5idG4ocyknLCBidG5zKTtcbiAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuXG4gICAgICBfLmVhY2goYnRucywgZnVuY3Rpb24gKGJ0bikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnLmJ0bicsIGFyZ3VtZW50cywgYnRucyk7XG4gICAgICAgIHZhciBidG5JZCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXBsYXphbWUtYnV0dG9uJyksXG4gICAgICAgICAgICBidG5QYXJhbXMgPSB7XG4gICAgICAgICAgICAgIHNlbGVjdG9yOiAnW2RhdGEtYXBsYXphbWUtYnV0dG9uJyArICggYnRuSWQgPyAoJz1cXFwiJyArIGJ0bklkICsgJ1xcXCInKSA6ICcnICkgKyAnXSwgW2RhdGEtYXBsYXphbWUtYnV0dG9uLWluZm8nICsgKCBidG5JZCA/ICgnPVxcXCInICsgYnRuSWQgKyAnXFxcIicpIDogJycgKSArICddJyxcbiAgICAgICAgICAgICAgcGFyZW50OiBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmVudCcpLFxuICAgICAgICAgICAgICBwdWJsaWNLZXk6IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHVibGljLWtleScpLFxuICAgICAgICAgICAgICBhbW91bnQ6IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW1vdW50JyksXG4gICAgICAgICAgICAgIGN1cnJlbmN5OiBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbmN5JykgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBzYW5kYm94OiBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXNhbmRib3gnKSA/IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2FuZGJveCcpID09PSAndHJ1ZScgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIGNvdW50cnk6IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY291bnRyeScpIHx8IHVuZGVmaW5lZFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBwcm9taXNlcy5wdXNoKCBhcGxhemFtZS5idXR0b24oYnRuUGFyYW1zKSApO1xuICAgICAgfSk7XG5cbiAgICAgIGlmKCBwcm9taXNlcy5sZW5ndGggKSB7XG4gICAgICAgIHJldHVybiAkcS5hbGwocHJvbWlzZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICRxLnJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICRxLnJlc29sdmUoKTtcbiAgICB9XG4gIH1cblxuICBfLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBidXR0b25zTG9va3VwKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBfLmxpdmVET00uc3Vic2NyaWJlKGJ1dHRvbnNMb29rdXApO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gYnV0dG9uc0xvb2t1cDtcblxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXBsYXphbWUpIHtcblxuICB2YXIgXyA9IGFwbGF6YW1lLl8sXG4gICAgICAkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKSxcbiAgICAgIEV2ZW50cyA9IHJlcXVpcmUoJ2V2ZW50cy13cmFwcGVyJyksXG4gICAgICBhcGkgPSByZXF1aXJlKCcuLi9jb3JlL2FwaScpLFxuICAgICAgaXNNb2JpbGUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKCBtYXgtd2lkdGg6IDc2N3B4ICknKSxcbiAgICAgIGVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcblxuICBmdW5jdGlvbiBnZXRRdHkgKHF0eVNlbGVjdG9yKSB7XG4gICAgaWYoICFfLmlzU3RyaW5nKHF0eVNlbGVjdG9yKSApIHtcbiAgICAgIGNvbnNvbGUud2Fybignd2FybmluZzogZGF0YS1xdHkgc2hvdWxkIGJlIGFuIHN0cmluZy4gcGU6IGZvcm0jYXJ0aWNsZSAuZmluYWwtcHJpY2UgJyk7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgdmFyIHF0eUVsZW1lbnQ7XG4gICAgdHJ5IHtcbiAgICAgIHF0eUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF0eVNlbGVjdG9yKTtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgY29uc29sZS53YXJuKGVyci5tZXNzYWdlICsgJ1xcbmRhdGEtcXR5IHNob3VsZCBiZSBhbiBzdHJpbmcuIHBlOiBmb3JtI2FydGljbGUgLmZpbmFsLXByaWNlICcpO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgc3dpdGNoKCBxdHlFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgKSB7XG4gICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgIHJldHVybiBOdW1iZXIoIHF0eUVsZW1lbnQudmFsdWUgKTtcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIHJldHVybiBOdW1iZXIoIHF0eUVsZW1lbnQucXVlcnlTZWxlY3Rvcignb3B0aW9uW3NlbGVjdGVkXScpLnZhbHVlICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gTnVtYmVyKCBxdHlFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjbXNQcmljZVNlbGVjdG9yID0gW1xuICAgICdmb3JtI3Byb2R1Y3RfYWRkdG9jYXJ0X2Zvcm0gLnNwZWNpYWwtcHJpY2UgLnByaWNlJywgLy8gbWFnZW50b1xuICAgICdmb3JtI3Byb2R1Y3RfYWRkdG9jYXJ0X2Zvcm0gLnJlZ3VsYXItcHJpY2UgLnByaWNlJywgLy8gbWFnZW50b1xuICAgICcjcHJvZHVjdC1pbmZvIC5zcGVjaWFsLXByaWNlIC5wcmljZScsIC8vIG1hZ2VudG9cbiAgICAnI3Byb2R1Y3QtaW5mbyAucmVndWxhci1wcmljZSAucHJpY2UnLCAvLyBtYWdlbnRvXG4gICAgJ2Zvcm0jYnV5X2Jsb2NrICNvdXJfcHJpY2VfZGlzcGxheScsIC8vIHByZXN0YXNob3BcbiAgICAnI21haW4gW2l0ZW10eXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvUHJvZHVjdFwiXSBbaXRlbXR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9PZmZlclwiXSAucHJpY2UgLmFtb3VudCcgLy8gd29vY29tbWVyY2VcbiAgXSxcbiAgY21zUXR5U2VsZWN0b3IgPSBbXG4gICAgJ2Zvcm0jcHJvZHVjdF9hZGR0b2NhcnRfZm9ybSBpbnB1dFtuYW1lPVwicXR5XCJdJywgLy8gbWFnZW50b1xuICAgICdmb3JtI2J1eV9ibG9jayBpbnB1dFtuYW1lPVwicXR5XCJdJywgLy8gcHJlc3Rhc2hvcFxuICAgICdmb3JtI3Byb2R1Y3Qtb3B0aW9ucy1mb3JtIGJ1dHRvbltkYXRhLWlkPXF0eV0nLCAvLyBjdXN0b21cbiAgICAnI21haW4gW2l0ZW10eXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvUHJvZHVjdFwiXSBmb3JtLmNhcnQgaW5wdXRbbmFtZT1cInF1YW50aXR5XCJdJyAvLyB3b29jb21tZXJjZVxuICBdO1xuXG4gIGZ1bmN0aW9uIG1hdGNoU2VsZWN0b3IgKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG5cbiAgZnVuY3Rpb24gYW1vdW50R2V0dGVyICh3aWRnZXRFbGVtZW50KSB7XG4gICAgdmFyIHByaWNlU2VsZWN0b3IgPSB3aWRnZXRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpLFxuICAgICAgICBxdHlTZWxlY3RvciA9IHdpZGdldEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXF0eScpLFxuICAgICAgICBhdXRvRGlzY292ZXJlZCA9IGZhbHNlO1xuXG4gICAgaWYoIHByaWNlU2VsZWN0b3IgKSB7XG4gICAgICAvLyB0cnl7XG4gICAgICAvLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJpY2VTZWxlY3Rvcik7XG4gICAgICAvLyB9IGNhdGNoKGVycikge1xuICAgICAgLy8gICBwcmljZVNlbGVjdG9yID0gbnVsbDtcbiAgICAgIC8vICAgY29uc29sZS53YXJuKGVyci5tZXNzYWdlKTtcbiAgICAgIC8vIH1cbiAgICAgIGlmKCBxdHlTZWxlY3RvciApIHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXR5U2VsZWN0b3IpO1xuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgIHF0eVNlbGVjdG9yID0gbnVsbDtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByaWNlU2VsZWN0b3IgPSBfLmZpbmQoY21zUHJpY2VTZWxlY3RvciwgbWF0Y2hTZWxlY3Rvcik7XG5cbiAgICAgIGlmKCBwcmljZVNlbGVjdG9yICkge1xuICAgICAgICBxdHlTZWxlY3RvciA9IF8uZmluZChjbXNRdHlTZWxlY3RvciwgbWF0Y2hTZWxlY3Rvcik7XG4gICAgICAgIGF1dG9EaXNjb3ZlcmVkID0gdHJ1ZTtcblxuICAgICAgICBfLmxvZygnYXV0by1kaXNjb3ZlcmVkIHByaWNlIHNlbGVjdG9yJywgcHJpY2VTZWxlY3RvciwgcXR5U2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBnZXR0ZXIgPSBwcmljZVNlbGVjdG9yID8gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHF0eSA9IHF0eVNlbGVjdG9yID8gZ2V0UXR5KCBxdHlTZWxlY3RvciApIDogMSwgcHJpY2VFbGVtZW50O1xuICAgICAgdHJ5IHtcbiAgICAgICAgcHJpY2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggcHJpY2VTZWxlY3RvciApO1xuICAgICAgfSBjYXRjaChlcnIpIHt9XG5cbiAgICAgIHZhciBhbW91bnQgPSBwcmljZUVsZW1lbnQgPyBwcmljZUVsZW1lbnQudmFsdWUgOiAnMCc7XG5cbiAgICAgIGlmKCB0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJyApIHtcbiAgICAgICAgaWYoICEvXFxkK1ssLl1cXGQrLy50ZXN0KHByaWNlRWxlbWVudC50ZXh0Q29udGVudCkgJiYgcHJpY2VFbGVtZW50LmNoaWxkcmVuICYmIHByaWNlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggKSB7XG4gICAgICAgICAgYW1vdW50ID0gJyc7XG5cbiAgICAgICAgICB2YXIgcGFydCA9IHByaWNlRWxlbWVudC5maXJzdENoaWxkLCBtYXRjaGVkO1xuXG4gICAgICAgICAgd2hpbGUoIHBhcnQgKSB7XG4gICAgICAgICAgICBpZiggL1ssLl0vLnRlc3QoYW1vdW50KSApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2hlZCA9ICggcGFydC50b1N0cmluZygpID09PSAnW29iamVjdCBUZXh0XScgPyBwYXJ0LmRhdGEgOiBwYXJ0LnRleHRDb250ZW50ICkubWF0Y2goL1tcXGQsLl0rLyk7XG5cbiAgICAgICAgICAgIGlmKCBtYXRjaGVkICkge1xuICAgICAgICAgICAgICBhbW91bnQgKz0gKGFtb3VudCAmJiAhL15bLC5dLy50ZXN0KG1hdGNoZWRbMF0pID8gJy4nIDogJycpICsgbWF0Y2hlZFswXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFydCA9IHBhcnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFtb3VudCA9IHByaWNlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gXy5wYXJzZVByaWNlKCBhbW91bnQgKTtcbiAgICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gcmV0dXJuIE51bWJlciggd2lkZ2V0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW1vdW50JykgKTtcbiAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgZ2V0dGVyLnByaWNlU2VsZWN0b3IgPSBwcmljZVNlbGVjdG9yO1xuICAgIGdldHRlci5xdHlTZWxlY3RvciA9IHF0eVNlbGVjdG9yO1xuICAgIGdldHRlci5hdXRvRGlzY292ZXJlZCA9IGF1dG9EaXNjb3ZlcmVkO1xuXG4gICAgcmV0dXJuIGdldHRlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIElmcmFtZSAodXJsKSB7XG4gICAgdmFyIGVsID0gXy5nZXRJRnJhbWUoeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc0MHB4JyB9KSxcbiAgICAgICAgaWZyYW1lID0gdGhpcztcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5lbC5zcmMgPSB1cmw7XG5cbiAgICBuZXcgRXZlbnRzICh0aGlzKTtcblxuICAgIHRoaXMub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy50cmlnZ2VyKCdsb2FkJywgbnVsbCwgdGhpcyk7XG4gICAgfTtcblxuICAgIF8ub25NZXNzYWdlKCdzaW11bGF0b3InLCBmdW5jdGlvbiAoZSwgbWVzc2FnZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ21lc3NhZ2Uuc2ltdWxhdG9yJywgZSwgbWVzc2FnZSk7XG4gICAgICBpZiggZS5zb3VyY2UgPT09IGVsLmNvbnRlbnRXaW5kb3cgKSB7XG4gICAgICAgIGlmcmFtZS50cmlnZ2VyKCdtZXNzYWdlOicgKyBtZXNzYWdlLmV2ZW50LCBbbWVzc2FnZV0sIHRoaXMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vbignbWVzc2FnZTpyZXNpemUnLCBmdW5jdGlvbiAoZSwgbWVzc2FnZSkge1xuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gbWVzc2FnZS5oZWlnaHQgKyAncHgnO1xuICAgIH0pO1xuICB9XG5cbiAgSWZyYW1lLnByb3RvdHlwZS5tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciBfZGF0YSA9IF8uZXh0ZW5kKHtcbiAgICAgIGFwbGF6YW1lOiAnc2ltdWxhdG9yJyxcbiAgICAgIGV2ZW50OiBldmVudE5hbWUsXG4gICAgICBtb2JpbGU6IGlzTW9iaWxlLm1hdGNoZXNcbiAgICB9LCBkYXRhIHx8IHt9KTtcbiAgICBpZiggdGhpcy5lbC5jb250ZW50V2luZG93ICkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2lmcmFtZSBtZXNzYWdlJywgZXZlbnROYW1lLCBfZGF0YSwgdGhpcyk7XG4gICAgICB0aGlzLmVsLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoX2RhdGEsICcqJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignaWZyYW1lIGNvbnRlbnRXaW5kb3cgbWlzc2luZycsIHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBtYXhJbnN0YWxtZW50cyAocHJldiwgY2hvaWNlKSB7XG4gICAgaWYoIHByZXYgPT09IG51bGwgKSB7XG4gICAgICByZXR1cm4gY2hvaWNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2hvaWNlLm51bV9pbnN0YWxtZW50cyA+IHByZXYubnVtX2luc3RhbG1lbnRzID8gY2hvaWNlIDogcHJldjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXaWRnZXQgKG1ldGEpIHtcbiAgICBpZiggIW1ldGEub3B0aW9ucy53aWRnZXQgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZ2V0V2lkZ2V0LnNlcmlhbCA9IGdldFdpZGdldC5zZXJpYWwgPyBnZXRXaWRnZXQuc2VyaWFsICsgMSA6IDE7XG5cbiAgICB2YXIgd2lkZ2V0LFxuICAgICAgICBpZCA9IGdldFdpZGdldC5zZXJpYWw7XG5cbiAgICBpZiggbWV0YS5vcHRpb25zLndpZGdldC50eXBlID09PSAnYnV0dG9uJyApIHtcbiAgICAgIHdpZGdldCA9IG5ldyBJZnJhbWUoIGFwaS5zdGF0aWNVcmwgKyAnd2lkZ2V0cy9zaW11bGF0b3Ivc2ltdWxhdG9yLmh0bWw/JyArIERhdGUubm93KCkgKyAnJnNpbXVsYXRvcj0nICsgaWQgKTtcblxuICAgICAgd2lkZ2V0Lm9uKCdtZXNzYWdlOnJlcXVpcmUuY2hvaWNlcyBjaG9pY2VzLnVwZGF0ZScsIGZ1bmN0aW9uIChlLCBtZXNzYWdlKSB7XG4gICAgICAgIGlmKCBtZXNzYWdlICYmIG1lc3NhZ2Uuc2ltdWxhdG9ySWQgJiYgbWVzc2FnZS5zaW11bGF0b3JJZCAhPT0gaWQgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUsIG1ldGEsIG1lc3NhZ2UpO1xuICAgICAgICB3aWRnZXQubWVzc2FnZSgnY2hvaWNlcycsIHtcbiAgICAgICAgICBhbW91bnQ6IG1ldGEuYW1vdW50LFxuICAgICAgICAgIGNob2ljZTogbWV0YS5jaG9pY2VzLnJlZHVjZShtYXhJbnN0YWxtZW50cywgbnVsbCksXG4gICAgICAgICAgY2hvaWNlczogbWV0YS5jaG9pY2VzLFxuICAgICAgICAgIG9wdGlvbnM6IG1ldGEub3B0aW9uc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB3aWRnZXQub24oJ2Nob2ljZXMudXBkYXRpbmcnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB3aWRnZXQubWVzc2FnZSgnbG9hZGluZycpO1xuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgXy50ZW1wbGF0ZS5wdXQoJ3dpZGdldC1yYXcnLCByZXF1aXJlKCcuLi8uLi8udG1wL3NpbXVsYXRvci90ZW1wbGF0ZXMvd2lkZ2V0LXJhdycpICk7XG4gICAgICB3aWRnZXQgPSB7IGVsOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSB9O1xuICAgICAgbmV3IEV2ZW50cyh3aWRnZXQpO1xuXG4gICAgICB3aWRnZXQuZWwuaW5uZXJIVE1MID0gXy50ZW1wbGF0ZSgnd2lkZ2V0LXJhdycsIHtcbiAgICAgICAgZ2V0QW1vdW50OiBfLmdldEFtb3VudCxcbiAgICAgICAgYW1vdW50OiBtZXRhLmFtb3VudCxcbiAgICAgICAgY2hvaWNlOiBtZXRhLmNob2ljZXMucmVkdWNlKG1heEluc3RhbG1lbnRzLCBudWxsKSxcbiAgICAgICAgY2hvaWNlczogbWV0YS5jaG9pY2VzLFxuICAgICAgICBvcHRpb25zOiBtZXRhLm9wdGlvbnNcbiAgICAgIH0pO1xuXG4gICAgICB3aWRnZXQuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgYXBsYXphbWU6ICdtb2RhbCcsXG4gICAgICAgICAgZXZlbnQ6ICdvcGVuJyxcbiAgICAgICAgICBuYW1lOiAnaW5zdGFsbWVudHMnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNhcmQ6IF8udGVtcGxhdGUuY29tcGlsZSggcmVxdWlyZSgnLi4vLi4vLnRtcC9zaW11bGF0b3IvdGVtcGxhdGVzL21vZGFsLWluc3RhbG1lbnRzJykgKSh7XG4gICAgICAgICAgICAgIHNlbGVjdGVkQ2hvaWNlOiBtZXRhLmNob2ljZXMucmVkdWNlKG1heEluc3RhbG1lbnRzLCBudWxsKSxcbiAgICAgICAgICAgICAgY2hvaWNlczogbWV0YS5jaG9pY2VzLFxuICAgICAgICAgICAgICBnZXRBbW91bnQ6IF8uZ2V0QW1vdW50LFxuICAgICAgICAgICAgICBtb250aHM6IGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG0gPiAxID8gJ21lc2VzJyA6ICdtZXMnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgJyonKTtcblxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2lkZ2V0LmlkID0gaWQ7XG5cbiAgICByZXR1cm4gd2lkZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VXaWRnZXQgKHdpZGdldCwgd2lkZ2V0V3JhcHBlciwgc2VsZWN0b3IpIHtcbiAgICBpZiggIXNlbGVjdG9yICkge1xuICAgICAgd2lkZ2V0V3JhcHBlci5hcHBlbmRDaGlsZCh3aWRnZXQuZWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwc2V1ZG9Mb2NhdG9yO1xuICAgIHNlbGVjdG9yID0gc2VsZWN0b3IudHJpbSgpLnJlcGxhY2UoLzooXFx3Kz8pJC8sIGZ1bmN0aW9uIChtYXRjaGVkLCBsb2NhdG9yKSB7XG4gICAgICBwc2V1ZG9Mb2NhdG9yID0gbG9jYXRvcjtcbiAgICAgIHJldHVybiAnJztcbiAgICB9KTtcblxuICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmKCBlbCApIHtcbiAgICAgIGlmKCBwc2V1ZG9Mb2NhdG9yICkge1xuICAgICAgICBzd2l0Y2goIHBzZXVkb0xvY2F0b3IgKSB7XG4gICAgICAgICAgY2FzZSAnYWZ0ZXInOlxuICAgICAgICAgICAgaWYoIGVsLm5leHRFbGVtZW50U2libGluZyApIHtcbiAgICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUod2lkZ2V0LmVsLCBlbC5uZXh0RWxlbWVudFNpYmxpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh3aWRnZXQuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYmVmb3JlJzpcbiAgICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHdpZGdldC5lbCwgZWwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncHNldWRvTG9jYXRvciAnICsgcHNldWRvTG9jYXRvciArICcgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQod2lkZ2V0LmVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBldmFsV2lkZ2V0ICh3aWRnZXRXcmFwcGVyKSB7XG4gICAgdmFyIG1ldGEsIHVwZGF0ZURhdGEgPSBmYWxzZSwgZGV0ZWN0ZWRBbW91bnQsIHNpbXVsYXRvck9wdGlvbnMgPSB7fTtcblxuICAgIGlmKCB3aWRnZXRXcmFwcGVyLl9fYXB6X3dpZGdldF9fICkge1xuICAgICAgbWV0YSA9IHdpZGdldFdyYXBwZXIuX19hcHpfd2lkZ2V0X187XG5cbiAgICAgIGRldGVjdGVkQW1vdW50ID0gbWV0YS5nZXRBbW91bnQoKTtcbiAgICAgIGlmKCBkZXRlY3RlZEFtb3VudCAmJiBtZXRhLmFtb3VudCAhPT0gZGV0ZWN0ZWRBbW91bnQgKSB7XG4gICAgICAgIHVwZGF0ZURhdGEgPSB0cnVlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh3aWRnZXRXcmFwcGVyLCBtZXRhLmFtb3VudCwgbWV0YS5nZXRBbW91bnQoKSApO1xuICAgICAgICBtZXRhLmFtb3VudCA9IG1ldGEuZ2V0QW1vdW50KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1ldGEgPSB7IGdldEFtb3VudDogYW1vdW50R2V0dGVyKHdpZGdldFdyYXBwZXIpIH07XG4gICAgICBtZXRhLmFtb3VudCA9IHdpZGdldFdyYXBwZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWFtb3VudCcpID8gTnVtYmVyKHdpZGdldFdyYXBwZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWFtb3VudCcpKSA6IG1ldGEuZ2V0QW1vdW50KCk7XG4gICAgICB1cGRhdGVEYXRhID0gdHJ1ZTtcbiAgICAgIGlmKCBtZXRhLmdldEFtb3VudC5xdHlTZWxlY3RvciApIHtcbiAgICAgICAgbWV0YS5xdHkgPSBnZXRRdHkobWV0YS5nZXRBbW91bnQucXR5U2VsZWN0b3IpIHx8IDE7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ25ldyB3YXRjaGVyJyk7XG4gICAgICAgIG1ldGEud2F0Y2hRdHkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYoICFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHdpZGdldFdyYXBwZXIpICkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChtZXRhLndhdGNoUXR5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHF0eSA9IGdldFF0eShtZXRhLmdldEFtb3VudC5xdHlTZWxlY3Rvcik7XG4gICAgICAgICAgaWYoIHF0eSAhPT0gbWV0YS5xdHkgKSB7XG4gICAgICAgICAgICBtZXRhLnF0eSA9IHF0eTtcbiAgICAgICAgICAgIGV2YWxXaWRnZXQod2lkZ2V0V3JhcHBlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAyNTApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCB3aWRnZXRXcmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3JykgKSB7XG4gICAgICBzaW11bGF0b3JPcHRpb25zLnZpZXcgPSB3aWRnZXRXcmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3Jyk7XG4gICAgfVxuXG4gICAgaWYoIG1ldGEuYW1vdW50ICYmIG1ldGEuZ2V0QW1vdW50LnF0eVNlbGVjdG9yICkge1xuICAgICAgbWV0YS5hbW91bnQgKj0gKCBnZXRRdHkobWV0YS5nZXRBbW91bnQucXR5U2VsZWN0b3IpIHx8IDEgKTtcbiAgICB9XG4gICAgaWYoIG1ldGEuYW1vdW50ICYmIHVwZGF0ZURhdGEgKSB7XG4gICAgICBpZiggbWV0YS53aWRnZXQgJiYgbWV0YS53aWRnZXQubWVzc2FnZSApIHtcbiAgICAgICAgbWV0YS53aWRnZXQubWVzc2FnZSgnbG9hZGluZycpO1xuICAgICAgfVxuICAgICAgYXBsYXphbWUuc2ltdWxhdG9yKCBtZXRhLmFtb3VudCwgc2ltdWxhdG9yT3B0aW9ucywgZnVuY3Rpb24gKF9jaG9pY2VzLCBfb3B0aW9ucykge1xuICAgICAgICBfb3B0aW9ucy53aWRnZXQgPSBfb3B0aW9ucy53aWRnZXQgfHwge307XG4gICAgICAgIG1ldGEuY2hvaWNlcyA9IF9jaG9pY2VzO1xuICAgICAgICBtZXRhLm9wdGlvbnMgPSBfb3B0aW9ucztcbiAgICAgICAgbWV0YS53aWRnZXQgPSBtZXRhLndpZGdldCB8fCBnZXRXaWRnZXQobWV0YSk7XG5cbiAgICAgICAgaWYoIG1ldGEud2lkZ2V0ICYmICFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKG1ldGEud2lkZ2V0LmVsKSApIHtcbiAgICAgICAgICBwbGFjZVdpZGdldChtZXRhLndpZGdldCwgd2lkZ2V0V3JhcHBlciwgd2lkZ2V0V3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9jYXRpb24nKSB8fCBfb3B0aW9ucy53aWRnZXQubG9jYXRpb24gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGEud2lkZ2V0LnRyaWdnZXIoJ2Nob2ljZXMudXBkYXRlJyk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCBtZXRhLndpZGdldCAmJiBtZXRhLndpZGdldC5tZXNzYWdlICkge1xuICAgICAgICAgIG1ldGEud2lkZ2V0Lm1lc3NhZ2UoJ2Fib3J0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIG1ldGEud2lkZ2V0ICYmIGRvY3VtZW50LmJvZHkuY29udGFpbnMobWV0YS53aWRnZXQuZWwpICkge1xuICAgICAgICAgIHZhciBwYXJlbnQgPSBtZXRhLndpZGdldC5lbC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChtZXRhLndpZGdldC5lbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHdpZGdldFdyYXBwZXIuX19hcHpfd2lkZ2V0X18gPSBtZXRhO1xuICB9XG5cbiAgZnVuY3Rpb24gd2lkZ2V0c0xvb2t1cCAoZWxlbWVudCkge1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuXG4gICAgZWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFwbGF6YW1lLXNpbXVsYXRvcl0nKSwgZXZhbFdpZGdldCApO1xuXG4gICAgcmV0dXJuIHByb21pc2VzLmxlbmd0aCA/ICRxLmFsbChwcm9taXNlcykgOiAkcS5yZXNvbHZlKCk7XG4gIH1cblxuICB3aWRnZXRzTG9va3VwKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgXy5saXZlRE9NLnN1YnNjcmliZSh3aWRnZXRzTG9va3VwKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHdpZGdldHNMb29rdXA7XG5cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9lcnJvckRhdGEoZXJyKSB7XG4gIChjb25zb2xlLmluZm8gfHwgY29uc29sZS5sb2cpKCclY1tub24gYmxvY2tpbmcgZXJyb3JdICVjYXBsYXphbWUuanNcXG5cXG4nLCAnZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjMjY3QkJEOycsICdjb2xvcjogIzI2N0JCRDsnKTtcblxuICB2YXIgZmlsZW5hbWUgPSBlcnIuZmlsZU5hbWUgPyBlcnIuZmlsZU5hbWUubGFzdEluZGV4T2YoJy8nKSA6ICc8bm90IGRlZmluZWQ+JztcbiAgdmFyIHN0YW1wID0gbmV3IERhdGUoKTtcbiAgdmFyIHN0ciA9ICclY25hbWU6ICVjJyArIGVyci5uYW1lICtcbiAgICAgICAgICAnXFxuJWNFcnJvcjogJWMnICsgZXJyLm1lc3NhZ2UgK1xuICAgICAgICAgICdcXG4lY0ZpbGU6ICVjJyArIGZpbGVuYW1lO1xuXG4gIGNvbnNvbGUubG9nKHN0ciwgJ2ZvbnQtd2VpZ2h0OiBib2xkOycsICdjb2xvcjogI2U3NGMzYzsnLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JywgJ2ZvbnQtd2VpZ2h0OiBub3JtYWw7IGNvbG9yOiAjZTc0YzNjOycsICdmb250LXdlaWdodDogYm9sZDsnLCAnZm9udC13ZWlnaHQ6IG5vcm1hbDsnKTtcbiAgaWYoIGVyci5zdGFjayApIHtcbiAgICBjb25zb2xlLmxvZygnJWMnICsgZXJyLnN0YWNrLCAnYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZlZTsgbGluZS1oZWlnaHQ6IDI7Jyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZnVuYykge1xuICB0cnl7IGZ1bmMoKTsgfVxuICBjYXRjaChlcnIpIHtcbiAgICBfZXJyb3JEYXRhKGVycik7XG4gIH1cbn07XG4iLCJcbmZ1bmN0aW9uIHRob3VzYW5kcyhhbW91bnQpIHtcbiAgaWYoIC9cXGR7M31cXGQrLy50ZXN0KGFtb3VudCkgKSB7XG4gICAgcmV0dXJuIHRob3VzYW5kcyhhbW91bnQucmVwbGFjZSgvKFxcZHszfT8pKFxcLnwkKS8sICcuJCYnKSk7XG4gIH1cbiAgcmV0dXJuIGFtb3VudDtcbn1cblxuZnVuY3Rpb24gZ2V0QW1vdW50IChhbW91bnQpIHtcbiAgdmFyIHByZWZpeCA9ICcnO1xuXG4gIGlmKCBhbW91bnQgPCAwICkge1xuICAgIHByZWZpeCA9ICctJztcbiAgICBhbW91bnQgPSAwIC0gYW1vdW50O1xuICB9XG5cbiAgaWYoICFhbW91bnQgKSB7XG4gICAgcmV0dXJuICcwLDAwJztcbiAgfSBlbHNlIGlmKCBhbW91bnQgPCAxMCApIHtcbiAgICByZXR1cm4gJzAsMCcgKyBhbW91bnQ7XG4gIH0gZWxzZSBpZiggYW1vdW50IDwgMTAwICkge1xuICAgIHJldHVybiAnMCwnICsgYW1vdW50O1xuICB9XG4gIHJldHVybiBwcmVmaXggKyAoJycgKyBhbW91bnQpLnJlcGxhY2UoLyhcXGQqKShcXGR7Mn0pJC8sIGZ1bmN0aW9uIChtYXRjaGVkLCBtYWluLCB0YWlsKSB7XG4gICAgcmV0dXJuIHRob3VzYW5kcyhtYWluKSArICcsJyArIHRhaWw7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwYXJzZVByaWNlIChwcmljZSkge1xuICB2YXIgbWF0Y2hlZCA9IHByaWNlLm1hdGNoKC8oKFxcZCtbLC4gXSkqKShcXGQrKS8pLFxuICAgICAgYW1vdW50LCBtYWluLCB0YWlsO1xuXG4gIGlmKCBtYXRjaGVkICkge1xuICAgIHRhaWwgPSBtYXRjaGVkWzNdO1xuICAgIG1haW4gPSBtYXRjaGVkWzFdLnJlcGxhY2UoL1teXFxkXS9nLCAnJyk7XG5cbiAgICBpZiggIW1haW4gKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKCB0YWlsICsgJzAwJyApO1xuICAgIH1cblxuICAgIGlmKCB0YWlsLmxlbmd0aCA9PT0gMSApIHtcbiAgICAgIHJldHVybiBOdW1iZXIobWFpbiArIHRhaWwgKyAnMCcpO1xuICAgIH1cblxuICAgIGlmKCB0YWlsLmxlbmd0aCAhPT0gMiApIHtcbiAgICAgIHRhaWwgKz0gJzAwJztcbiAgICB9XG5cbiAgICByZXR1cm4gTnVtYmVyKG1haW4gKyB0YWlsKTtcbiAgfVxuXG4gIGlmKCAvXFxkKy8udGVzdChwcmljZSkgKSB7XG4gICAgcmV0dXJuIE51bWJlciggcHJpY2UucmVwbGFjZSgvW15cXGRdKy9nLCAnJykgKyAnMDAnICk7XG4gIH1cblxuICBjb25zb2xlLndhcm4oJ3ByaWNlIGRhdGEgbWlzbWF0Y2gnLCBwcmljZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRnZXRBbW91bnQ6IGdldEFtb3VudCxcblx0cGFyc2VQcmljZTogcGFyc2VQcmljZVxufTtcbiIsIlxuZnVuY3Rpb24gX3JlYWR5IChfY2FsbGJhY2ssIGRlbGF5KSB7XG4gIHZhciBjYWxsYmFjayA9IGRlbGF5ID8gZnVuY3Rpb24gKCkgeyBzZXRUaW1lb3V0KF9jYWxsYmFjaywgZGVsYXkpOyB9IDogX2NhbGxiYWNrO1xuXG4gIGlmICgvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNhbGxiYWNrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kQnViYmxlQ2xvc2UgKHN0cikge1xuICB2YXIgbGV2ZWwgPSAwO1xuXG4gIGZvciggdmFyIGkgPSAwLCBsZW4gPSBzdHIubGVuZ3RoOyBpIDwgbGVuIDsgaSsrICkge1xuICAgIGlmKCBzdHJbaV0gPT09ICcoJyApIHtcbiAgICAgIGxldmVsKys7XG4gICAgfSBlbHNlIGlmKCBzdHJbaV0gPT09ICcpJyApIHtcbiAgICAgIGlmKCBsZXZlbCA9PT0gMCApIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXZlbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gaGFzU2VsZWN0b3IgKHNlbGVjdG9yLCByb290RWxlbWVudCkge1xuICB2YXIgc3BsaXRIYXMgPSBzZWxlY3Rvci5zcGxpdCgnOmhhcygnKTtcblxuICByZXR1cm4gc3BsaXRIYXMucmVkdWNlKGZ1bmN0aW9uIChtYXRjaGVzLCBwYXJ0aWFsKSB7XG5cbiAgICB2YXIgY2xvc2VQb3NpdGlvbiA9IGZpbmRCdWJibGVDbG9zZShwYXJ0aWFsKSxcbiAgICAgICAgaGFzRmlsdGVyID0gcGFydGlhbC5zdWJzdHIoMCwgY2xvc2VQb3NpdGlvbiksXG4gICAgICAgIHBhcnRpYWxRdWVyeSA9IHBhcnRpYWwuc3Vic3RyKGNsb3NlUG9zaXRpb24gKyAxKS50cmltKCk7XG5cbiAgICBpZiggY2xvc2VQb3NpdGlvbiA9PT0gLTEgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21hbGZvcm1lZCBzZWxlY3RvcicpO1xuICAgIH1cblxuICAgIG1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlcihmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcihoYXNGaWx0ZXIpO1xuICAgIH0pO1xuXG4gICAgaWYoIHBhcnRpYWxRdWVyeSApIHtcbiAgICAgIHZhciBzdWJtYXRjaGVzID0gW107XG5cbiAgICAgIG1hdGNoZXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBbXS5wdXNoLmFwcGx5KHN1Ym1hdGNoZXMsIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChwYXJ0aWFsUXVlcnkpICk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHN1Ym1hdGNoZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG5cbiAgfSwgW10uc2xpY2UuY2FsbCggKHJvb3RFbGVtZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKCBzcGxpdEhhcy5zaGlmdCgpICkgKSApO1xufVxuXG5mdW5jdGlvbiBxdWVyeVNlbGVjdG9yIChzZWxlY3Rvciwgcm9vdEVsZW1lbnQpIHtcbiAgLy8gJ3RyOmhhcyg+IC5yb3cpIGRpdjpoYXMoc3BhbikgaW1nJy5zcGxpdCgnOmhhcygnKTtcbiAgaWYoICFzZWxlY3RvciApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpZiggIS9cXDpoYXNcXCgvLnRlc3Qoc2VsZWN0b3IpICkge1xuICAgIHJldHVybiBbXS5zbGljZS5jYWxsKCAocm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICkgKTtcbiAgfVxuXG4gIHJldHVybiBoYXNTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbmZ1bmN0aW9uIGNzc1F1ZXJ5IChfc2VsZWN0b3IsIHJvb3RFbGVtZW50KSB7XG4gIHZhciBzZWxlY3RvcnMgPSBfc2VsZWN0b3Iuc3BsaXQoL1xccyosXFxzKi8pO1xuXG4gIHJldHVybiBzZWxlY3RvcnMucmVkdWNlKGZ1bmN0aW9uIChsaXN0LCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBsaXN0LmNvbmNhdCggcXVlcnlTZWxlY3RvcihzZWxlY3Rvciwgcm9vdEVsZW1lbnQpICk7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsVG9wICh2YWx1ZSkge1xuICBpZiggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gdmFsdWU7XG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbn1cblxuZnVuY3Rpb24gY2xlYXJFbGVtZW50IChlbCkge1xuICB2YXIgY2hpbGQgPSBlbC5maXJzdENoaWxkO1xuXG4gIHdoaWxlKCBjaGlsZCApIHtcbiAgICBlbC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgY2hpbGQgPSBlbC5maXJzdENoaWxkO1xuICB9XG59XG5cbi8vIHZhciBfY2xhc3NBY3Rpb25zID0ge1xuLy8gICBhZGQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QgPyBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4vLyAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4vLyAgIH0gOiBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4vLyAgICAgdmFyIFJFX0NMRUFOQ0xBU1MgPSBuZXcgUmVnRXhwKCdcXFxcYicgKyAoY2xhc3NOYW1lIHx8ICcnKSArICdcXFxcYicsJycpO1xuLy8gICAgIF9jbGFzc0FjdGlvbnMucmVtb3ZlKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4vLyAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuLy8gICB9LFxuLy8gICByZW1vdmU6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QgPyBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4vLyAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4vLyAgIH0gOiBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4vLyAgICAgdmFyIFJFX0NMRUFOQ0xBU1MgPSBuZXcgUmVnRXhwKCdcXFxcYicgKyAoY2xhc3NOYW1lIHx8ICcnKSArICdcXFxcYicsJycpO1xuLy8gICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShSRV9DTEVBTkNMQVNTLCcnKTtcbi8vICAgfSxcbi8vICAgYWN0aW9uOiBmdW5jdGlvbiAoYWN0aW9uLCB0b29scykge1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4vLyAgICAgICBpZiggY2xhc3NOYW1lLmluZGV4T2YoJyAnKSA+PSAwICkge1xuLy8gICAgICAgICBjbGFzc05hbWUuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbikge1xuLy8gICAgICAgICAgIF9jbGFzc0FjdGlvbnNbYWN0aW9uXShlbGVtZW50LCBjbik7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgX2NsYXNzQWN0aW9uc1thY3Rpb25dKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4vLyAgICAgICB9XG4vLyAgICAgICByZXR1cm4gdG9vbHM7XG4vLyAgICAgfTtcbi8vICAgfVxuLy8gfTtcblxuZnVuY3Rpb24gd3JpdGVJZnJhbWUgKGlmcmFtZSwgY29udGVudCkge1xuICB2YXIgaWZyYW1lRG9jID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIHRyeSB7IGlmcmFtZURvYy5jaGFyc2V0ID0gJ1VURi04JzsgfSBjYXRjaChlcnIpIHt9XG4gIGlmcmFtZURvYy5vcGVuKCk7XG4gIGlmcmFtZURvYy53cml0ZShjb250ZW50KTtcbiAgaWZyYW1lRG9jLmNsb3NlKCk7XG59XG5cbmZ1bmN0aW9uIGdldElGcmFtZSAoaWZyYW1lU3R5bGVzKSB7XG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgcmVxdWlyZSgnbml0cm8tdG9vbHMvZXh0ZW5kJykuZXh0ZW5kKGlmcmFtZS5zdHlsZSwgaWZyYW1lU3R5bGVzIHx8IHt9KTtcblxuICBpZnJhbWUuZnJhbWVCb3JkZXIgPSAnMCc7XG4gIC8vIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBpZnJhbWUub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgfTtcbiAgcmV0dXJuIGlmcmFtZTtcbn1cblxudmFyIF8gPSB7XG4gIHJlYWR5OiBfcmVhZHksXG4gIGdldElGcmFtZTogZ2V0SUZyYW1lLFxuICB3cml0ZUlmcmFtZTogd3JpdGVJZnJhbWUsXG4gIGNzc1F1ZXJ5OiBjc3NRdWVyeSxcbiAgc2Nyb2xsVG9wOiBzY3JvbGxUb3AsXG4gIGNsZWFyRWxlbWVudDogY2xlYXJFbGVtZW50LFxuICBlbGVtZW50RGF0YTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykuZGF0YXNldCA/IGZ1bmN0aW9uIChlbCwga2V5LCB2YWx1ZSkge1xuICAgIGlmKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgZWwuZGF0YXNldFtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBlbC5kYXRhc2V0W2tleV07XG4gIH0gOiBmdW5jdGlvbiAoZWwsIGtleSwgdmFsdWUpIHtcbiAgICBpZiggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS0nICsga2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIGtleSk7XG4gIH0sXG59O1xuXG4vLyB2YXIgYWRkQ2xhc3MgPSBfY2xhc3NBY3Rpb25zLmFjdGlvbignYWRkJywgXyApLFxuLy8gICAgIHJlbW92ZUNsYXNzID0gX2NsYXNzQWN0aW9ucy5hY3Rpb24oJ3JlbW92ZScsIF8gKTtcblxuLy8gXy5hZGRDbGFzcyA9IGFkZENsYXNzO1xuLy8gXy5yZW1vdmVDbGFzcyA9IHJlbW92ZUNsYXNzO1xuXG5fLmFkZENsYXNzID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbn07XG5cbl8ucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfO1xuIiwiXG5cbmZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHJldHVybiBbcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksIHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLCBwYXJzZUludChyZXN1bHRbM10sIDE2KV07XG59XG5cbmZ1bmN0aW9uIGJyaWdodG5lc3MgKGNvbG9yKSB7XG4gIHZhciByZ2IgPSBoZXhUb1JnYihjb2xvcik7XG4gIHZhciBvID0gTWF0aC5yb3VuZCgoKHBhcnNlSW50KHJnYlswXSkgKiAyOTkpICsgKHBhcnNlSW50KHJnYlsxXSkgKiA1ODcpICsgKHBhcnNlSW50KHJnYlsyXSkgKiAxMTQpKSAvMTAwMCk7XG4gIHJldHVybiBvIDwgMTAwID8gJ2RhcmsnIDogKCBvID4gMjMwID8gJ2xpZ2h0JyA6ICdtZWRpdW0nICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBoZXhUb1JnYjogaGV4VG9SZ2IsXG4gIGJyaWdodG5lc3M6IGJyaWdodG5lc3Ncbn07XG4iLCJcblxudmFyIGltcG9ydGFudENTUyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgICAgIHJldHVybiBjc3MucmVwbGFjZSgvOy9nLCAnICFpbXBvcnRhbnQ7JykucmVwbGFjZSgvOihbXjo7XSs/KX0vZywgZnVuY3Rpb24gKG1hdGNoZWQsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAnOicgKyB2YWx1ZSArICcgIWltcG9ydGFudDt9JztcbiAgICAgIH0pLnJlcGxhY2UoLyhcXGQrJXxmcm9tfHRvKXsoW159XSspL2csIGZ1bmN0aW9uIChtYXRjaGVkLCBwb3MsIGNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvcyArICd7JyArIGNvbnRlbnQucmVwbGFjZSgvICFpbXBvcnRhbnQ7L2csICc7Jyk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNzc0hhY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNhY2hlID0ge30sXG4gICAgICAgICAgaGFja3MgPSB7XG4gICAgICAgICAgICBvdmVybGF5OiBpbXBvcnRhbnRDU1MocmVxdWlyZSgnLi4vLi4vLnRtcC9jc3MtaGFja3Mvb3ZlcmxheScpKSxcbiAgICAgICAgICAgIGJsdXI6IGltcG9ydGFudENTUyhyZXF1aXJlKCcuLi8uLi8udG1wL2Nzcy1oYWNrcy9ibHVyJykpLFxuICAgICAgICAgICAgbG9nbzogaW1wb3J0YW50Q1NTKHJlcXVpcmUoJy4uLy4uLy50bXAvY3NzLWhhY2tzL2xvZ28nKSksXG4gICAgICAgICAgICBtb2RhbDogaW1wb3J0YW50Q1NTKHJlcXVpcmUoJy4uLy4uLy50bXAvY3NzLWhhY2tzL21vZGFsJykpXG4gICAgICAgICAgfTtcblxuICAgICAgLy8gY29uc29sZS5sb2coJ2Nzc0hhY2tzJywgaGFja3MpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaGFjayAoaGFja05hbWUpIHtcbiAgICAgICAgaWYoICFjYWNoZVtoYWNrTmFtZV0gKSB7XG4gICAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBoYWNrc1toYWNrTmFtZV07XG5cbiAgICAgICAgICB2YXIgZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgc3R5bGUuaGFjayA9IGZ1bmN0aW9uIChlbmFibGUpIHtcbiAgICAgICAgICAgIGVuYWJsZSA9IGVuYWJsZSA9PT0gdW5kZWZpbmVkIHx8IGVuYWJsZTtcblxuICAgICAgICAgICAgaWYoIGVuYWJsZSApIHtcbiAgICAgICAgICAgICAgaWYoIGVuYWJsZWQgKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgICBlbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiggIWVuYWJsZWQgKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgICBlbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjYWNoZVtoYWNrTmFtZV0gPSBzdHlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FjaGVbaGFja05hbWVdO1xuICAgICAgfTtcbiAgICB9KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNzc0hhY2s7XG4iLCJcblxuZnVuY3Rpb24gX2tleSAobywga2V5LCB2YWx1ZSkge1xuXHRrZXkuc3BsaXQoJy4nKS5mb3JFYWNoKGZ1bmN0aW9uIChrLCBpLCBrZXlzKSB7XG5cdFx0aWYoIGkgPT09IGtleXMubGVuZ3RoIC0gMSApIHtcblx0XHRcdG9ba10gPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b1trXSA9IG9ba10gfHwge307XG5cdFx0XHRvID0gb1trXTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjYW1lbENhc2UgKHRleHQpIHtcblx0cmV0dXJuIHRleHQucmVwbGFjZSgvXyhcXHcpL2csIGZ1bmN0aW9uIChtYXRjaGVkLCBsZXR0ZXIpIHtcblx0XHRyZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZSAocXVlcnlzdHJpbmcsIGRlY29kZSkge1xuXG5cdHZhciByZXN1bHQgPSB7fTtcblxuXHRxdWVyeXN0cmluZy5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24gKGtleVZhbHVlKSB7XG5cdFx0dmFyIG1hdGNoZWQgPSBrZXlWYWx1ZS5tYXRjaCgvKC4qPyk9KC4qKS8pO1xuXG5cdFx0aWYoICFtYXRjaGVkICkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcGFyc2UgJyArIGtleVZhbHVlKTtcblx0XHR9XG5cblx0XHRfa2V5KHJlc3VsdCwgY2FtZWxDYXNlKG1hdGNoZWRbMV0pLCBkZWNvZGUgPyBkZWNvZGVVUkkobWF0Y2hlZFsyXSkgOiBtYXRjaGVkWzJdICk7XG5cblx0fSk7XG5cblx0cmV0dXJuIHJlc3VsdDtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlc2VyaWFsaXplO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3VzY3JpcHRvcnMgPSBbXSxcbiAgICBydW5uaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGluaXRMaXZlRE9NICgpIHtcblxuICByZXF1aXJlKCcuL2Jyb3dzZXItdG9vbHMnKS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCBmdW5jdGlvbihldmVudCl7XG4gICAgICBmb3IoIHZhciBpID0gMCwgbiA9IHN1c2NyaXB0b3JzLmxlbmd0aDsgaSA8IG4gOyBpKysgKSB7XG4gICAgICAgIHN1c2NyaXB0b3JzW2ldKGV2ZW50LnRhcmdldCk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICB9KTtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3Vic2NyaWJlOiBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIGlmKCAhcnVubmluZyApIHtcbiAgICAgIGluaXRMaXZlRE9NKHRydWUpO1xuICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgfVxuICAgIGlmKCBoYW5kbGVyIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgICBzdXNjcmlwdG9ycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cbiAgfVxufTtcbiIsIlxuXG5mdW5jdGlvbiBnZXRFcnJvck9iamVjdCgpe1xuICAgIHRyeSB7IHRocm93IEVycm9yKCcnKTsgfSBjYXRjaChlcnIpIHsgcmV0dXJuIGVycjsgfVxufVxuXG5mdW5jdGlvbiBsb2cgKCkge1xuICB2YXIgZXJyID0gZ2V0RXJyb3JPYmplY3QoKSxcbiAgICAgIGNhbGxlcl9saW5lID0gZXJyLnN0YWNrLnNwbGl0KCdcXG4nKVs0XSB8fCAnJyxcbiAgICAgIGluZGV4ID0gY2FsbGVyX2xpbmUuaW5kZXhPZignYXQgJyk7XG5cbiAgbG9nLmhpc3RvcnkucHVzaCh7XG4gICAgdGltZTogbmV3IERhdGUoKSxcbiAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgdHJhY2s6IHtcbiAgICAgIGNhbGxlcl9saW5lOiBjYWxsZXJfbGluZSxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGNsZWFuOiBjYWxsZXJfbGluZS5zbGljZShpbmRleCArIDIsIGNhbGxlcl9saW5lLmxlbmd0aClcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbmxvZy5oaXN0b3J5ID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0gbG9nO1xuIiwiXG52YXIgbWVzc2FnZVRhcmdldCA9IHt9LFxuICAgIHNob3dMb2dzID0gZmFsc2U7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcbiAgdmFyIG1lc3NhZ2UgPSBlLmRhdGEsXG4gICAgICBsaXN0ZW5lcnMgPSBtZXNzYWdlVGFyZ2V0W21lc3NhZ2UuYXBsYXphbWVdO1xuXG4gIGlmKCAhbGlzdGVuZXJzICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCBzaG93TG9ncyAmJiAhZS51c2VkICkge1xuICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlJywgZSwgbGlzdGVuZXJzKTtcbiAgfVxuXG4gIGlmKCAhZS51c2VkICkge1xuICAgIGUudXNlZCA9IHRydWU7XG4gICAgZm9yKCB2YXIgaSA9IDAsIG4gPSBsaXN0ZW5lcnMubGVuZ3RoIDsgaSA8IG4gOyBpKysgKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0oZSwgbWVzc2FnZSk7XG4gICAgfVxuICB9XG59LCB0cnVlKTtcblxuZnVuY3Rpb24gb25NZXNzYWdlICh0YXJnZXQsIGhhbmRsZXIsIGxvZ3MpIHtcbiAgc2hvd0xvZ3MgPSBsb2dzO1xuICBpZiggdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgJiYgaGFuZGxlciBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgIG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XSA9IG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XSB8fCBbXTtcbiAgICBtZXNzYWdlVGFyZ2V0W3RhcmdldF0ucHVzaChoYW5kbGVyKTtcbiAgfVxufVxuXG5vbk1lc3NhZ2Uub2ZmID0gZnVuY3Rpb24gKHRhcmdldCwgaGFuZGxlcikge1xuICBpZiggdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgJiYgaGFuZGxlciBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgIG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XSA9IG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XSB8fCBbXTtcbiAgICB2YXIgaSA9IG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XS5pbmRleE9mKGhhbmRsZXIpO1xuICAgIGlmKCBpICE9PSAtMSApIHtcbiAgICAgIG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XS5zcGxpY2UoaSwxKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gb25NZXNzYWdlO1xuIiwiXG5mdW5jdGlvbiB0ZW1wbGF0ZSAobmFtZSwgZGF0YSl7XG4gIHJldHVybiB0ZW1wbGF0ZS5jYWNoZVtuYW1lXShkYXRhIHx8IHt9KTtcbn1cblxudGVtcGxhdGUuY2FjaGUgPSB7fTtcblxudGVtcGxhdGUuY29tcGlsZSA9IGZ1bmN0aW9uICh0bXBsKSB7XG4gIC8vIEpvaG4gUmVzaWcgbWljcm8tdGVtcGxhdGVcbiAgcmV0dXJuIG5ldyBGdW5jdGlvbignb2JqJywgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgJ3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9OycgK1xuXG4gICAgLy8gSW50cm9kdWNlIHRoZSBkYXRhIGFzIGxvY2FsIHZhcmlhYmxlcyB1c2luZyB3aXRoKCl7fVxuICAgICd3aXRoKG9iail7cC5wdXNoKFxcJycgK1xuXG4gICAgLy8gQ29udmVydCB0aGUgdGVtcGxhdGUgaW50byBwdXJlIEphdmFTY3JpcHRcbiAgICB0bXBsLnRyaW0oKVxuICAgICAgLnJlcGxhY2UoL1tcXHJcXHRcXG5dL2csICcgJylcbiAgICAgIC5zcGxpdCgnPCUnKS5qb2luKCdcXHQnKVxuICAgICAgLnJlcGxhY2UoLygoXnwlPilbXlxcdF0qKScvZywgJyQxXFxyJylcbiAgICAgIC5yZXBsYWNlKC9cXHQ9KC4qPyklPi9nLCAnXFwnLCQxLFxcJycpXG4gICAgICAuc3BsaXQoJ1xcdCcpLmpvaW4oJ1xcJyk7JylcbiAgICAgIC5zcGxpdCgnJT4nKS5qb2luKCdwLnB1c2goXFwnJylcbiAgICAgIC5zcGxpdCgnXFxyJykuam9pbignXFxcXFxcJycpICsgJ1xcJyk7fXJldHVybiBwLmpvaW4oXFwnXFwnKTsnKTtcbn07XG5cbnRlbXBsYXRlLnB1dCA9IGZ1bmN0aW9uIChuYW1lLCB0bXBsKSB7XG4gIHRlbXBsYXRlLmNhY2hlW25hbWVdID0gdGVtcGxhdGUuY29tcGlsZSh0bXBsKTtcbn07XG5cbnRlbXBsYXRlLmxvb2t1cCA9IGZ1bmN0aW9uICgpIHtcbiAgW10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24veC10ZW1wbGF0ZVwiXVtkYXRhLXRlbXBsYXRlXScpLCBmdW5jdGlvbiAodG1wbCkge1xuICAgIHRlbXBsYXRlLnB1dCh0bXBsLmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpLCB0bXBsLnRleHQpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7XG4iLCJcbnZhciBfID0gcmVxdWlyZSgndmFuaWxsYS10b29scycpO1xuXG5fLmV4dGVuZChfLFxuICByZXF1aXJlKCduaXRyby10b29scy9saXN0cycpLFxuICByZXF1aXJlKCduaXRyby10b29scy9wYXRoJyksXG4gIHJlcXVpcmUoJy4vY29sb3JzJyksXG4gIHJlcXVpcmUoJy4vYnJvd3Nlci10b29scycpLFxuICByZXF1aXJlKCcuL2Ftb3VudC1wcmljZScpLFxuICB7XG4gICAgbGl2ZURPTTogcmVxdWlyZSgnLi9saXZlLWRvbScpLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RlbXBsYXRlJyksXG4gICAgb25NZXNzYWdlOiByZXF1aXJlKCcuL21lc3NhZ2UtbGlzdGVuZXInKSxcbiAgICBkZXNlcmlhbGl6ZTogcmVxdWlyZSgnLi9kZXNlcmlhbGl6ZScpXG4gIH1cbik7XG5cbl8ubG9nID0gcmVxdWlyZSgnLi9sb2cnKTtcbl8ubm9vcCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gXztcbiJdfQ==