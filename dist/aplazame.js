(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '0.0.360';
},{}],2:[function(require,module,exports){
module.exports = '@-webkit-keyframes aplazame-blur{0%{-webkit-filter:blur(0);filter:blur(0);}to{-webkit-filter:blur(3px);filter:blur(3px)}}@keyframes aplazame-blur{0%{-webkit-filter:blur(0);filter:blur(0)}to{-webkit-filter:blur(3px);filter:blur(3px)}}body.aplazame-blur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-filter:blur(3px);filter:blur(3px)}@media (min-width:601px){body.aplazame-blur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:aplazame-blur;animation-name:aplazame-blur}}body.aplazame-unblur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-filter:blur(0);filter:blur(0)}@media (min-width:601px){body.aplazame-unblur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:aplazame-blur;animation-name:aplazame-blur;-webkit-animation-direction:reverse;animation-direction:reverse}}';
},{}],3:[function(require,module,exports){
module.exports = '@-webkit-keyframes aplazame-logo-large{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}60%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes aplazame-logo-large{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}60%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes aplazame-logo-short{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}30%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes aplazame-logo-short{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}30%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes aplazame-logo-smile{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(2turn);transform:rotate(2turn)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}@keyframes aplazame-logo-smile{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(2turn);transform:rotate(2turn)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}.logo-aplazame{position:relative;display:inline-block;width:150px;height:150px}.logo-aplazame .line-large,.logo-aplazame .line-short,.logo-aplazame .smile{stroke:#ddd}.logo-aplazame .smile-outline{stroke:#485259}@media (min-width:480px){.logo-aplazame{width:200px;height:200px}}.logo-aplazame svg{position:absolute;top:0;left:0;width:100%;height:100%}.logo-aplazame.animate .line-large,.logo-aplazame.animate .line-short,.logo-aplazame.animate .smile{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.logo-aplazame.animate .smile{-webkit-animation-name:aplazame-logo-smile;animation-name:aplazame-logo-smile}.logo-aplazame.animate .line-large{-webkit-animation-name:aplazame-logo-large;animation-name:aplazame-logo-large}.logo-aplazame.animate .line-short{-webkit-animation-name:aplazame-logo-short;animation-name:aplazame-logo-short}';
},{}],4:[function(require,module,exports){
module.exports = '.aplazame-modal{height:100%;height:100vh;position:relative;z-index:2147483647;}body{overflow:hidden}@media (max-width:600px){html{background-color:#333a3e}body,html{height:100vh;margin:0;padding:0}body>:not(.aplazame-modal){display:none}}@media (min-width:601px){.aplazame-modal{position:fixed}}';
},{}],5:[function(require,module,exports){
module.exports = '@-webkit-keyframes aplazame-overlay{0%{opacity:0;}to{opacity:1}}@keyframes aplazame-overlay{0%{opacity:0}to{opacity:1}}.aplazame-overlay{font-family:Montserrat,sans-serif;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;width:100vw;height:100vh;background:rgba(53,64,71,.9);text-align:center;z-index:2147483646;-webkit-transform:translateZ(0);transform:translateZ(0)}.aplazame-overlay:before{content:\'\';display:block;height:50vh}.aplazame-logo-wrapper{display:inline-block;margin-top:-50%}.aplazame-overlay-loading-text{color:#95a6b1;margin-top:14px;font-size:14px}.aplazame-overlay-loading-text .text-error{color:#f08080}.aplazame-overlay-loading-text a{color:#f5f5f5;display:inline-block;text-decoration:none}.aplazame-overlay-loading-text a:hover{border-bottom:1px dotted #f5f5f5}.aplazame-overlay{-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.aplazame-overlay.aplazame-overlay-hide,.aplazame-overlay.aplazame-overlay-show{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-name:aplazame-overlay;animation-name:aplazame-overlay}.aplazame-overlay.aplazame-overlay-hide{-webkit-animation-direction:reverse;animation-direction:reverse}';
},{}],6:[function(require,module,exports){
module.exports = '<div class="card-content">  <header class="aplazame"></header>  <section class="info">    Elige el número de meses y la cuota que más te convengan  </section>  <div class="choices-wrapper">    <% for( var i = choices.length - 1 ; i >= 0 ; i-- ) { %>    <button ng-repeat="choice in choices" type="button" class="choice" ng-click="selectChoice(choice)" ng-class="{ active: choice === currentChoice }">      <div class="wrapper">        <div class="num-instalments">          <span><%= choices[i].num_instalments %></span>&nbsp;<span><%= months(choices[i].num_instalments) %></span>        </div>        <div class="amount">          <span class="amount-amount"><%= getAmount(choices[i].amount) %></span><!--          --><span class="amount-currency">€</span><!--          --><span class="amount-per-month">/mes</span></div>      </div>    </button>    <% } %>  </div>  <section class="tae">TAE máximo: <%= getAmount(choices[0].annual_equivalent) %>%</section>  <section class="how-it-works">    <header>¿Cómo funciona?</header>    <div class="info-wrapper">      <div class="info">        <h3>Elige Aplazame</h3>        <p>en la tienda, cuando vayas a pagar el pedido.</p>      </div>      <div class="info">        <h3>Decide cómo quieres pagar</h3>        <p>Hasta en 12 cuotas, pagando con tarjeta.</p>      </div>      <div class="info">        <h3>Disfruta de tu compra</h3>        <p>Desde Aplazame estaremos disponibles por si necesitas cualquier cosa. ¡A disfrutar!</p>      </div>    </div>  </section></div><div class="cta">  <div class="col-sm-6 button-wrapper">    <button class="btn lg btn-block white" type="button" data-modal="dismiss">Volver a Tienda</button>  </div>  <div class="col-sm-6 button-wrapper">    <a class="btn lg btn-block" href="http://aplazame.com/how/customers/" target="_blank">¿Quieres saber más?</a>  </div></div>';
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
    '#main [itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"] .price ins .amount', // woocommerce
    '#main [itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"] .price .amount', // woocommerce
    '[itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"] [itemprop="price"]' // Schema.org
  ],
  cmsQtySelector = [
    'form#product_addtocart_form input[name="qty"]', // magento
    'form#buy_block input[name="qty"]', // prestashop
    '#quantity_wanted', // prestashop
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8udG1wL2FwbGF6YW1lLXZlcnNpb24uanMiLCIuLi8udG1wL2Nzcy1oYWNrcy9ibHVyLmpzIiwiLi4vLnRtcC9jc3MtaGFja3MvbG9nby5qcyIsIi4uLy50bXAvY3NzLWhhY2tzL21vZGFsLmpzIiwiLi4vLnRtcC9jc3MtaGFja3Mvb3ZlcmxheS5qcyIsIi4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy9tb2RhbC1pbnN0YWxtZW50cy5qcyIsIi4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy93aWRnZXQtcmF3LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Jlemllci1lYXNpbmcvc3JjL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NsYXNzbGlzdC5qcy9jbGFzc0xpc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvZXZlbnRzLXdyYXBwZXIvZXZlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2h0dHAtYnJvd3Nlci9zcmMvaHR0cC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy9fZXh0ZW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL25pdHJvLXRvb2xzL2V4dGVuZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy9rZXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbml0cm8tdG9vbHMvbGlzdHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbml0cm8tdG9vbHMvcGF0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3EtcHJvbWlzZS9saWIvcHJvbWlzZS1tZXRob2RzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3EtcHJvbWlzZS9saWIvcHJvbWlzZS1wb2x5ZmlsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9xLXByb21pc2UvbGliL3EuanMiLCIuLi9ub2RlX21vZHVsZXMvcS1wcm9taXNlL2xpYi9xaXplci5qcyIsIi4uL25vZGVfbW9kdWxlcy9xLXByb21pc2Uvbm8tbmF0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9icm93c2VyLXBvbHlmaWxscy9kYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMvZG9tLWNsb3Nlc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9icm93c2VyLXBvbHlmaWxscy9ldmVudC1saXN0ZW5lci5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2Jyb3dzZXItcG9seWZpbGxzL21hdGNoLW1lZGlhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMvbWF0Y2hlcy1zZWxlY3Rvci5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2J1bmRsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2RlZmVycmVkL2FuaW1hdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9kZWZlcnJlZC93YWl0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvZm4vZGVib3VuY2UuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9mbi9yZWFkeS5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2ZuL3RlbXBsYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvZG9tLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvZXZlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvbm9ybWFsaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsL2FuaW1hdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy91dGlscy9zY3JvbGwvYnVuZGxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsL3RvcC1jbGFzcy5qcyIsImFwbGF6YW1lLmpzIiwiYXBwcy9idXR0b24uanMiLCJhcHBzL2NoZWNrb3V0LmpzIiwiYXBwcy9odHRwLXNlcnZpY2UuanMiLCJhcHBzL2xvYWRpbmctc3ZnLmpzIiwiYXBwcy9tb2RhbC5qcyIsImFwcHMvc2ltdWxhdG9yLmpzIiwiY29yZS9hcGktaHR0cC5qcyIsImNvcmUvYXBpLmpzIiwiY29yZS9jb3JlLmpzIiwiY29yZS9pbml0LmpzIiwibG9hZGVycy9kYXRhLWFwbGF6YW1lLmpzIiwibG9hZGVycy9kYXRhLWJ1dHRvbi5qcyIsImxvYWRlcnMvZGF0YS1zaW11bGF0b3IuanMiLCJzYW5kYm94LmpzIiwidG9vbHMvYW1vdW50LXByaWNlLmpzIiwidG9vbHMvYnJvd3Nlci10b29scy5qcyIsInRvb2xzL2NvbG9ycy5qcyIsInRvb2xzL2Nzcy1oYWNrLmpzIiwidG9vbHMvZGVzZXJpYWxpemUuanMiLCJ0b29scy9saXZlLWRvbS5qcyIsInRvb2xzL2xvZy5qcyIsInRvb2xzL21lc3NhZ2UtbGlzdGVuZXIuanMiLCJ0b29scy90ZW1wbGF0ZS5qcyIsInRvb2xzL3Rvb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzVGQTtBQUNBO0FBQ0E7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSAnMC4wLjM2MCc7IiwibW9kdWxlLmV4cG9ydHMgPSAnQC13ZWJraXQta2V5ZnJhbWVzIGFwbGF6YW1lLWJsdXJ7MCV7LXdlYmtpdC1maWx0ZXI6Ymx1cigwKTtmaWx0ZXI6Ymx1cigwKTt9dG97LXdlYmtpdC1maWx0ZXI6Ymx1cigzcHgpO2ZpbHRlcjpibHVyKDNweCl9fUBrZXlmcmFtZXMgYXBsYXphbWUtYmx1cnswJXstd2Via2l0LWZpbHRlcjpibHVyKDApO2ZpbHRlcjpibHVyKDApfXRvey13ZWJraXQtZmlsdGVyOmJsdXIoM3B4KTtmaWx0ZXI6Ymx1cigzcHgpfX1ib2R5LmFwbGF6YW1lLWJsdXI+Om5vdCguYXBsYXphbWUtbW9kYWwpOm5vdCguYXBsYXphbWUtb3ZlcmxheSl7LXdlYmtpdC1maWx0ZXI6Ymx1cigzcHgpO2ZpbHRlcjpibHVyKDNweCl9QG1lZGlhIChtaW4td2lkdGg6NjAxcHgpe2JvZHkuYXBsYXphbWUtYmx1cj46bm90KC5hcGxhemFtZS1tb2RhbCk6bm90KC5hcGxhemFtZS1vdmVybGF5KXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNHM7YW5pbWF0aW9uLWR1cmF0aW9uOi40czstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWJsdXI7YW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtYmx1cn19Ym9keS5hcGxhemFtZS11bmJsdXI+Om5vdCguYXBsYXphbWUtbW9kYWwpOm5vdCguYXBsYXphbWUtb3ZlcmxheSl7LXdlYmtpdC1maWx0ZXI6Ymx1cigwKTtmaWx0ZXI6Ymx1cigwKX1AbWVkaWEgKG1pbi13aWR0aDo2MDFweCl7Ym9keS5hcGxhemFtZS11bmJsdXI+Om5vdCguYXBsYXphbWUtbW9kYWwpOm5vdCguYXBsYXphbWUtb3ZlcmxheSl7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246LjRzO2FuaW1hdGlvbi1kdXJhdGlvbjouNHM7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphcGxhemFtZS1ibHVyO2FuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWJsdXI7LXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOnJldmVyc2U7YW5pbWF0aW9uLWRpcmVjdGlvbjpyZXZlcnNlfX0nOyIsIm1vZHVsZS5leHBvcnRzID0gJ0Atd2Via2l0LWtleWZyYW1lcyBhcGxhemFtZS1sb2dvLWxhcmdlezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpO302MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX05MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1Aa2V5ZnJhbWVzIGFwbGF6YW1lLWxvZ28tbGFyZ2V7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9NjAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9OTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19QC13ZWJraXQta2V5ZnJhbWVzIGFwbGF6YW1lLWxvZ28tc2hvcnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9MzAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTkwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fUBrZXlmcmFtZXMgYXBsYXphbWUtbG9nby1zaG9ydHswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX0zMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9OTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19QC13ZWJraXQta2V5ZnJhbWVzIGFwbGF6YW1lLWxvZ28tc21pbGV7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9OTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgydHVybik7dHJhbnNmb3JtOnJvdGF0ZSgydHVybil9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDJ0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDJ0dXJuKX19QGtleWZyYW1lcyBhcGxhemFtZS1sb2dvLXNtaWxlezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTkwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMnR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMnR1cm4pfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgydHVybik7dHJhbnNmb3JtOnJvdGF0ZSgydHVybil9fS5sb2dvLWFwbGF6YW1le3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjE1MHB4O2hlaWdodDoxNTBweH0ubG9nby1hcGxhemFtZSAubGluZS1sYXJnZSwubG9nby1hcGxhemFtZSAubGluZS1zaG9ydCwubG9nby1hcGxhemFtZSAuc21pbGV7c3Ryb2tlOiNkZGR9LmxvZ28tYXBsYXphbWUgLnNtaWxlLW91dGxpbmV7c3Ryb2tlOiM0ODUyNTl9QG1lZGlhIChtaW4td2lkdGg6NDgwcHgpey5sb2dvLWFwbGF6YW1le3dpZHRoOjIwMHB4O2hlaWdodDoyMDBweH19LmxvZ28tYXBsYXphbWUgc3Zne3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5sb2dvLWFwbGF6YW1lLmFuaW1hdGUgLmxpbmUtbGFyZ2UsLmxvZ28tYXBsYXphbWUuYW5pbWF0ZSAubGluZS1zaG9ydCwubG9nby1hcGxhemFtZS5hbmltYXRlIC5zbWlsZXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApOy13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkczthbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjEuNXM7YW5pbWF0aW9uLWR1cmF0aW9uOjEuNXM7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGV9LmxvZ28tYXBsYXphbWUuYW5pbWF0ZSAuc21pbGV7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphcGxhemFtZS1sb2dvLXNtaWxlO2FuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWxvZ28tc21pbGV9LmxvZ28tYXBsYXphbWUuYW5pbWF0ZSAubGluZS1sYXJnZXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWxvZ28tbGFyZ2U7YW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtbG9nby1sYXJnZX0ubG9nby1hcGxhemFtZS5hbmltYXRlIC5saW5lLXNob3J0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtbG9nby1zaG9ydDthbmltYXRpb24tbmFtZTphcGxhemFtZS1sb2dvLXNob3J0fSc7IiwibW9kdWxlLmV4cG9ydHMgPSAnLmFwbGF6YW1lLW1vZGFse2hlaWdodDoxMDAlO2hlaWdodDoxMDB2aDtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjIxNDc0ODM2NDc7fWJvZHl7b3ZlcmZsb3c6aGlkZGVufUBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KXtodG1se2JhY2tncm91bmQtY29sb3I6IzMzM2EzZX1ib2R5LGh0bWx7aGVpZ2h0OjEwMHZoO21hcmdpbjowO3BhZGRpbmc6MH1ib2R5Pjpub3QoLmFwbGF6YW1lLW1vZGFsKXtkaXNwbGF5Om5vbmV9fUBtZWRpYSAobWluLXdpZHRoOjYwMXB4KXsuYXBsYXphbWUtbW9kYWx7cG9zaXRpb246Zml4ZWR9fSc7IiwibW9kdWxlLmV4cG9ydHMgPSAnQC13ZWJraXQta2V5ZnJhbWVzIGFwbGF6YW1lLW92ZXJsYXl7MCV7b3BhY2l0eTowO310b3tvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYXBsYXphbWUtb3ZlcmxheXswJXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX0uYXBsYXphbWUtb3ZlcmxheXtmb250LWZhbWlseTpNb250c2VycmF0LHNhbnMtc2VyaWY7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDB2dztoZWlnaHQ6MTAwdmg7YmFja2dyb3VuZDpyZ2JhKDUzLDY0LDcxLC45KTt0ZXh0LWFsaWduOmNlbnRlcjt6LWluZGV4OjIxNDc0ODM2NDY7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX0uYXBsYXphbWUtb3ZlcmxheTpiZWZvcmV7Y29udGVudDpcXCdcXCc7ZGlzcGxheTpibG9jaztoZWlnaHQ6NTB2aH0uYXBsYXphbWUtbG9nby13cmFwcGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi10b3A6LTUwJX0uYXBsYXphbWUtb3ZlcmxheS1sb2FkaW5nLXRleHR7Y29sb3I6Izk1YTZiMTttYXJnaW4tdG9wOjE0cHg7Zm9udC1zaXplOjE0cHh9LmFwbGF6YW1lLW92ZXJsYXktbG9hZGluZy10ZXh0IC50ZXh0LWVycm9ye2NvbG9yOiNmMDgwODB9LmFwbGF6YW1lLW92ZXJsYXktbG9hZGluZy10ZXh0IGF7Y29sb3I6I2Y1ZjVmNTtkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWRlY29yYXRpb246bm9uZX0uYXBsYXphbWUtb3ZlcmxheS1sb2FkaW5nLXRleHQgYTpob3Zlcntib3JkZXItYm90dG9tOjFweCBkb3R0ZWQgI2Y1ZjVmNX0uYXBsYXphbWUtb3ZlcmxheXstd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7YW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkc30uYXBsYXphbWUtb3ZlcmxheS5hcGxhemFtZS1vdmVybGF5LWhpZGUsLmFwbGF6YW1lLW92ZXJsYXkuYXBsYXphbWUtb3ZlcmxheS1zaG93ey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246LjZzO2FuaW1hdGlvbi1kdXJhdGlvbjouNnM7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphcGxhemFtZS1vdmVybGF5O2FuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLW92ZXJsYXl9LmFwbGF6YW1lLW92ZXJsYXkuYXBsYXphbWUtb3ZlcmxheS1oaWRley13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjpyZXZlcnNlO2FuaW1hdGlvbi1kaXJlY3Rpb246cmV2ZXJzZX0nOyIsIm1vZHVsZS5leHBvcnRzID0gJzxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj4gIDxoZWFkZXIgY2xhc3M9XCJhcGxhemFtZVwiPjwvaGVhZGVyPiAgPHNlY3Rpb24gY2xhc3M9XCJpbmZvXCI+ICAgIEVsaWdlIGVsIG7Dum1lcm8gZGUgbWVzZXMgeSBsYSBjdW90YSBxdWUgbcOhcyB0ZSBjb252ZW5nYW4gIDwvc2VjdGlvbj4gIDxkaXYgY2xhc3M9XCJjaG9pY2VzLXdyYXBwZXJcIj4gICAgPCUgZm9yKCB2YXIgaSA9IGNob2ljZXMubGVuZ3RoIC0gMSA7IGkgPj0gMCA7IGktLSApIHsgJT4gICAgPGJ1dHRvbiBuZy1yZXBlYXQ9XCJjaG9pY2UgaW4gY2hvaWNlc1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNob2ljZVwiIG5nLWNsaWNrPVwic2VsZWN0Q2hvaWNlKGNob2ljZSlcIiBuZy1jbGFzcz1cInsgYWN0aXZlOiBjaG9pY2UgPT09IGN1cnJlbnRDaG9pY2UgfVwiPiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+ICAgICAgICA8ZGl2IGNsYXNzPVwibnVtLWluc3RhbG1lbnRzXCI+ICAgICAgICAgIDxzcGFuPjwlPSBjaG9pY2VzW2ldLm51bV9pbnN0YWxtZW50cyAlPjwvc3Bhbj4mbmJzcDs8c3Bhbj48JT0gbW9udGhzKGNob2ljZXNbaV0ubnVtX2luc3RhbG1lbnRzKSAlPjwvc3Bhbj4gICAgICAgIDwvZGl2PiAgICAgICAgPGRpdiBjbGFzcz1cImFtb3VudFwiPiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFtb3VudC1hbW91bnRcIj48JT0gZ2V0QW1vdW50KGNob2ljZXNbaV0uYW1vdW50KSAlPjwvc3Bhbj48IS0tICAgICAgICAgIC0tPjxzcGFuIGNsYXNzPVwiYW1vdW50LWN1cnJlbmN5XCI+4oKsPC9zcGFuPjwhLS0gICAgICAgICAgLS0+PHNwYW4gY2xhc3M9XCJhbW91bnQtcGVyLW1vbnRoXCI+L21lczwvc3Bhbj48L2Rpdj4gICAgICA8L2Rpdj4gICAgPC9idXR0b24+ICAgIDwlIH0gJT4gIDwvZGl2PiAgPHNlY3Rpb24gY2xhc3M9XCJ0YWVcIj5UQUUgbcOheGltbzogPCU9IGdldEFtb3VudChjaG9pY2VzWzBdLmFubnVhbF9lcXVpdmFsZW50KSAlPiU8L3NlY3Rpb24+ICA8c2VjdGlvbiBjbGFzcz1cImhvdy1pdC13b3Jrc1wiPiAgICA8aGVhZGVyPsK/Q8OzbW8gZnVuY2lvbmE/PC9oZWFkZXI+ICAgIDxkaXYgY2xhc3M9XCJpbmZvLXdyYXBwZXJcIj4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPiAgICAgICAgPGgzPkVsaWdlIEFwbGF6YW1lPC9oMz4gICAgICAgIDxwPmVuIGxhIHRpZW5kYSwgY3VhbmRvIHZheWFzIGEgcGFnYXIgZWwgcGVkaWRvLjwvcD4gICAgICA8L2Rpdj4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPiAgICAgICAgPGgzPkRlY2lkZSBjw7NtbyBxdWllcmVzIHBhZ2FyPC9oMz4gICAgICAgIDxwPkhhc3RhIGVuIDEyIGN1b3RhcywgcGFnYW5kbyBjb24gdGFyamV0YS48L3A+ICAgICAgPC9kaXY+ICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj4gICAgICAgIDxoMz5EaXNmcnV0YSBkZSB0dSBjb21wcmE8L2gzPiAgICAgICAgPHA+RGVzZGUgQXBsYXphbWUgZXN0YXJlbW9zIGRpc3BvbmlibGVzIHBvciBzaSBuZWNlc2l0YXMgY3VhbHF1aWVyIGNvc2EuIMKhQSBkaXNmcnV0YXIhPC9wPiAgICAgIDwvZGl2PiAgICA8L2Rpdj4gIDwvc2VjdGlvbj48L2Rpdj48ZGl2IGNsYXNzPVwiY3RhXCI+ICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgYnV0dG9uLXdyYXBwZXJcIj4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBsZyBidG4tYmxvY2sgd2hpdGVcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1tb2RhbD1cImRpc21pc3NcIj5Wb2x2ZXIgYSBUaWVuZGE8L2J1dHRvbj4gIDwvZGl2PiAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGJ1dHRvbi13cmFwcGVyXCI+ICAgIDxhIGNsYXNzPVwiYnRuIGxnIGJ0bi1ibG9ja1wiIGhyZWY9XCJodHRwOi8vYXBsYXphbWUuY29tL2hvdy9jdXN0b21lcnMvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+wr9RdWllcmVzIHNhYmVyIG3DoXM/PC9hPiAgPC9kaXY+PC9kaXY+JzsiLCJtb2R1bGUuZXhwb3J0cyA9ICc8ZGl2IGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LWluc3RhbG1lbnRzXCI+ICA8c3BhbiBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1mcm9tXCI+ZGVzZGUmbmJzcDs8L3NwYW4+PCEtLSAgLS0+PHN0cm9uZyBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1hbW91bnRcIj4gICAgPHNwYW4gY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtcHJpY2VcIj48JT0gZ2V0QW1vdW50KGNob2ljZS5hbW91bnQpICU+PC9zcGFuPjwhLS0gICAgLS0+PHNwYW4gY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtY3VycmVuY3lcIj7igqw8L3NwYW4+ICA8L3N0cm9uZz48IS0tICAtLT48c3ViIGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LXBlci1tb250aFwiPi9tZXM8L3N1Yj48IS0tICAtLT48c3BhbiBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1pbnN0YWxtZW50cy13cmFwcGVyXCI+ICAgIDxzcGFuPiZuYnNwO2VuJm5ic3A7PC9zcGFuPiAgICA8ZW0gY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtaW5zdGFsbWVudHMtbnVtXCI+MTI8L2VtPiAgICA8c3Bhbj4mbmJzcDtjdW90YXM8L3NwYW4+ICA8L3NwYW4+PC9kaXY+PHN0eWxlIHJlbD1cInN0eWxlc2hlZXRcIj48JT0gb3B0aW9ucy53aWRnZXQuc3R5bGVzICU+PC9zdHlsZT4nOyIsIi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nXG4gKiBCZXppZXJFYXNpbmcgLSB1c2UgYmV6aWVyIGN1cnZlIGZvciB0cmFuc2l0aW9uIGVhc2luZyBmdW5jdGlvblxuICogYnkgR2HDq3RhbiBSZW5hdWRlYXUgMjAxNCAtIDIwMTUg4oCTIE1JVCBMaWNlbnNlXG4gKi9cblxuLy8gVGhlc2UgdmFsdWVzIGFyZSBlc3RhYmxpc2hlZCBieSBlbXBpcmljaXNtIHdpdGggdGVzdHMgKHRyYWRlb2ZmOiBwZXJmb3JtYW5jZSBWUyBwcmVjaXNpb24pXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA0O1xudmFyIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMTtcbnZhciBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDE7XG52YXIgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcblxudmFyIGtTcGxpbmVUYWJsZVNpemUgPSAxMTtcbnZhciBrU2FtcGxlU3RlcFNpemUgPSAxLjAgLyAoa1NwbGluZVRhYmxlU2l6ZSAtIDEuMCk7XG5cbnZhciBmbG9hdDMyQXJyYXlTdXBwb3J0ZWQgPSB0eXBlb2YgRmxvYXQzMkFycmF5ID09PSAnZnVuY3Rpb24nO1xuXG5mdW5jdGlvbiBBIChhQTEsIGFBMikgeyByZXR1cm4gMS4wIC0gMy4wICogYUEyICsgMy4wICogYUExOyB9XG5mdW5jdGlvbiBCIChhQTEsIGFBMikgeyByZXR1cm4gMy4wICogYUEyIC0gNi4wICogYUExOyB9XG5mdW5jdGlvbiBDIChhQTEpICAgICAgeyByZXR1cm4gMy4wICogYUExOyB9XG5cbi8vIFJldHVybnMgeCh0KSBnaXZlbiB0LCB4MSwgYW5kIHgyLCBvciB5KHQpIGdpdmVuIHQsIHkxLCBhbmQgeTIuXG5mdW5jdGlvbiBjYWxjQmV6aWVyIChhVCwgYUExLCBhQTIpIHsgcmV0dXJuICgoQShhQTEsIGFBMikgKiBhVCArIEIoYUExLCBhQTIpKSAqIGFUICsgQyhhQTEpKSAqIGFUOyB9XG5cbi8vIFJldHVybnMgZHgvZHQgZ2l2ZW4gdCwgeDEsIGFuZCB4Miwgb3IgZHkvZHQgZ2l2ZW4gdCwgeTEsIGFuZCB5Mi5cbmZ1bmN0aW9uIGdldFNsb3BlIChhVCwgYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIEEoYUExLCBhQTIpICogYVQgKiBhVCArIDIuMCAqIEIoYUExLCBhQTIpICogYVQgKyBDKGFBMSk7IH1cblxuZnVuY3Rpb24gYmluYXJ5U3ViZGl2aWRlIChhWCwgYUEsIGFCLCBtWDEsIG1YMikge1xuICB2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcbiAgZG8ge1xuICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgfVxuICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuICByZXR1cm4gY3VycmVudFQ7XG59XG5cbmZ1bmN0aW9uIG5ld3RvblJhcGhzb25JdGVyYXRlIChhWCwgYUd1ZXNzVCwgbVgxLCBtWDIpIHtcbiBmb3IgKHZhciBpID0gMDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgIHZhciBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG4gICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICB9XG4gICB2YXIgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiB9XG4gcmV0dXJuIGFHdWVzc1Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmV6aWVyIChtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgaWYgKCEoMCA8PSBtWDEgJiYgbVgxIDw9IDEgJiYgMCA8PSBtWDIgJiYgbVgyIDw9IDEpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdiZXppZXIgeCB2YWx1ZXMgbXVzdCBiZSBpbiBbMCwgMV0gcmFuZ2UnKTtcbiAgfVxuXG4gIC8vIFByZWNvbXB1dGUgc2FtcGxlcyB0YWJsZVxuICB2YXIgc2FtcGxlVmFsdWVzID0gZmxvYXQzMkFycmF5U3VwcG9ydGVkID8gbmV3IEZsb2F0MzJBcnJheShrU3BsaW5lVGFibGVTaXplKSA6IG5ldyBBcnJheShrU3BsaW5lVGFibGVTaXplKTtcbiAgaWYgKG1YMSAhPT0gbVkxIHx8IG1YMiAhPT0gbVkyKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrU3BsaW5lVGFibGVTaXplOyArK2kpIHtcbiAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRGb3JYIChhWCkge1xuICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wO1xuICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICB2YXIgbGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxO1xuXG4gICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT09IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgIGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xuICAgIH1cbiAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAvLyBJbnRlcnBvbGF0ZSB0byBwcm92aWRlIGFuIGluaXRpYWwgZ3Vlc3MgZm9yIHRcbiAgICB2YXIgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgdmFyIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICoga1NhbXBsZVN0ZXBTaXplO1xuXG4gICAgdmFyIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgIGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xuICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIEJlemllckVhc2luZyAoeCkge1xuICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xuICAgICAgcmV0dXJuIHg7IC8vIGxpbmVhclxuICAgIH1cbiAgICAvLyBCZWNhdXNlIEphdmFTY3JpcHQgbnVtYmVyIGFyZSBpbXByZWNpc2UsIHdlIHNob3VsZCBndWFyYW50ZWUgdGhlIGV4dHJlbWVzIGFyZSByaWdodC5cbiAgICBpZiAoeCA9PT0gMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmICh4ID09PSAxKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGNCZXppZXIoZ2V0VEZvclgoeCksIG1ZMSwgbVkyKTtcbiAgfTtcbn07XG4iLCIvKlxuICogY2xhc3NMaXN0LmpzOiBDcm9zcy1icm93c2VyIGZ1bGwgZWxlbWVudC5jbGFzc0xpc3QgaW1wbGVtZW50YXRpb24uXG4gKiAxLjEuMjAxNTAzMTJcbiAqXG4gKiBCeSBFbGkgR3JleSwgaHR0cDovL2VsaWdyZXkuY29tXG4gKiBMaWNlbnNlOiBEZWRpY2F0ZWQgdG8gdGhlIHB1YmxpYyBkb21haW4uXG4gKiAgIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZWxpZ3JleS9jbGFzc0xpc3QuanMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuICovXG5cbi8qZ2xvYmFsIHNlbGYsIGRvY3VtZW50LCBET01FeGNlcHRpb24gKi9cblxuLyohIEBzb3VyY2UgaHR0cDovL3B1cmwuZWxpZ3JleS5jb20vZ2l0aHViL2NsYXNzTGlzdC5qcy9ibG9iL21hc3Rlci9jbGFzc0xpc3QuanMgKi9cblxuaWYgKFwiZG9jdW1lbnRcIiBpbiBzZWxmKSB7XG5cbi8vIEZ1bGwgcG9seWZpbGwgZm9yIGJyb3dzZXJzIHdpdGggbm8gY2xhc3NMaXN0IHN1cHBvcnRcbi8vIEluY2x1ZGluZyBJRSA8IEVkZ2UgbWlzc2luZyBTVkdFbGVtZW50LmNsYXNzTGlzdFxuaWYgKCEoXCJjbGFzc0xpc3RcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKSkgXG5cdHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyAmJiAhKFwiY2xhc3NMaXN0XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcImdcIikpKSB7XG5cbihmdW5jdGlvbiAodmlldykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaWYgKCEoJ0VsZW1lbnQnIGluIHZpZXcpKSByZXR1cm47XG5cbnZhclxuXHQgIGNsYXNzTGlzdFByb3AgPSBcImNsYXNzTGlzdFwiXG5cdCwgcHJvdG9Qcm9wID0gXCJwcm90b3R5cGVcIlxuXHQsIGVsZW1DdHJQcm90byA9IHZpZXcuRWxlbWVudFtwcm90b1Byb3BdXG5cdCwgb2JqQ3RyID0gT2JqZWN0XG5cdCwgc3RyVHJpbSA9IFN0cmluZ1twcm90b1Byb3BdLnRyaW0gfHwgZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLnJlcGxhY2UoL15cXHMrfFxccyskL2csIFwiXCIpO1xuXHR9XG5cdCwgYXJySW5kZXhPZiA9IEFycmF5W3Byb3RvUHJvcF0uaW5kZXhPZiB8fCBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdHZhclxuXHRcdFx0ICBpID0gMFxuXHRcdFx0LCBsZW4gPSB0aGlzLmxlbmd0aFxuXHRcdDtcblx0XHRmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoaSBpbiB0aGlzICYmIHRoaXNbaV0gPT09IGl0ZW0pIHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiAtMTtcblx0fVxuXHQvLyBWZW5kb3JzOiBwbGVhc2UgYWxsb3cgY29udGVudCBjb2RlIHRvIGluc3RhbnRpYXRlIERPTUV4Y2VwdGlvbnNcblx0LCBET01FeCA9IGZ1bmN0aW9uICh0eXBlLCBtZXNzYWdlKSB7XG5cdFx0dGhpcy5uYW1lID0gdHlwZTtcblx0XHR0aGlzLmNvZGUgPSBET01FeGNlcHRpb25bdHlwZV07XG5cdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblx0fVxuXHQsIGNoZWNrVG9rZW5BbmRHZXRJbmRleCA9IGZ1bmN0aW9uIChjbGFzc0xpc3QsIHRva2VuKSB7XG5cdFx0aWYgKHRva2VuID09PSBcIlwiKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXgoXG5cdFx0XHRcdCAgXCJTWU5UQVhfRVJSXCJcblx0XHRcdFx0LCBcIkFuIGludmFsaWQgb3IgaWxsZWdhbCBzdHJpbmcgd2FzIHNwZWNpZmllZFwiXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAoL1xccy8udGVzdCh0b2tlbikpIHtcblx0XHRcdHRocm93IG5ldyBET01FeChcblx0XHRcdFx0ICBcIklOVkFMSURfQ0hBUkFDVEVSX0VSUlwiXG5cdFx0XHRcdCwgXCJTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXJcIlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGFyckluZGV4T2YuY2FsbChjbGFzc0xpc3QsIHRva2VuKTtcblx0fVxuXHQsIENsYXNzTGlzdCA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0dmFyXG5cdFx0XHQgIHRyaW1tZWRDbGFzc2VzID0gc3RyVHJpbS5jYWxsKGVsZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIilcblx0XHRcdCwgY2xhc3NlcyA9IHRyaW1tZWRDbGFzc2VzID8gdHJpbW1lZENsYXNzZXMuc3BsaXQoL1xccysvKSA6IFtdXG5cdFx0XHQsIGkgPSAwXG5cdFx0XHQsIGxlbiA9IGNsYXNzZXMubGVuZ3RoXG5cdFx0O1xuXHRcdGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdHRoaXMucHVzaChjbGFzc2VzW2ldKTtcblx0XHR9XG5cdFx0dGhpcy5fdXBkYXRlQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLnRvU3RyaW5nKCkpO1xuXHRcdH07XG5cdH1cblx0LCBjbGFzc0xpc3RQcm90byA9IENsYXNzTGlzdFtwcm90b1Byb3BdID0gW11cblx0LCBjbGFzc0xpc3RHZXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc0xpc3QodGhpcyk7XG5cdH1cbjtcbi8vIE1vc3QgRE9NRXhjZXB0aW9uIGltcGxlbWVudGF0aW9ucyBkb24ndCBhbGxvdyBjYWxsaW5nIERPTUV4Y2VwdGlvbidzIHRvU3RyaW5nKClcbi8vIG9uIG5vbi1ET01FeGNlcHRpb25zLiBFcnJvcidzIHRvU3RyaW5nKCkgaXMgc3VmZmljaWVudCBoZXJlLlxuRE9NRXhbcHJvdG9Qcm9wXSA9IEVycm9yW3Byb3RvUHJvcF07XG5jbGFzc0xpc3RQcm90by5pdGVtID0gZnVuY3Rpb24gKGkpIHtcblx0cmV0dXJuIHRoaXNbaV0gfHwgbnVsbDtcbn07XG5jbGFzc0xpc3RQcm90by5jb250YWlucyA9IGZ1bmN0aW9uICh0b2tlbikge1xuXHR0b2tlbiArPSBcIlwiO1xuXHRyZXR1cm4gY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKSAhPT0gLTE7XG59O1xuY2xhc3NMaXN0UHJvdG8uYWRkID0gZnVuY3Rpb24gKCkge1xuXHR2YXJcblx0XHQgIHRva2VucyA9IGFyZ3VtZW50c1xuXHRcdCwgaSA9IDBcblx0XHQsIGwgPSB0b2tlbnMubGVuZ3RoXG5cdFx0LCB0b2tlblxuXHRcdCwgdXBkYXRlZCA9IGZhbHNlXG5cdDtcblx0ZG8ge1xuXHRcdHRva2VuID0gdG9rZW5zW2ldICsgXCJcIjtcblx0XHRpZiAoY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKSA9PT0gLTEpIHtcblx0XHRcdHRoaXMucHVzaCh0b2tlbik7XG5cdFx0XHR1cGRhdGVkID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0d2hpbGUgKCsraSA8IGwpO1xuXG5cdGlmICh1cGRhdGVkKSB7XG5cdFx0dGhpcy5fdXBkYXRlQ2xhc3NOYW1lKCk7XG5cdH1cbn07XG5jbGFzc0xpc3RQcm90by5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdHZhclxuXHRcdCAgdG9rZW5zID0gYXJndW1lbnRzXG5cdFx0LCBpID0gMFxuXHRcdCwgbCA9IHRva2Vucy5sZW5ndGhcblx0XHQsIHRva2VuXG5cdFx0LCB1cGRhdGVkID0gZmFsc2Vcblx0XHQsIGluZGV4XG5cdDtcblx0ZG8ge1xuXHRcdHRva2VuID0gdG9rZW5zW2ldICsgXCJcIjtcblx0XHRpbmRleCA9IGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbik7XG5cdFx0d2hpbGUgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0dGhpcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0dXBkYXRlZCA9IHRydWU7XG5cdFx0XHRpbmRleCA9IGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbik7XG5cdFx0fVxuXHR9XG5cdHdoaWxlICgrK2kgPCBsKTtcblxuXHRpZiAodXBkYXRlZCkge1xuXHRcdHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpO1xuXHR9XG59O1xuY2xhc3NMaXN0UHJvdG8udG9nZ2xlID0gZnVuY3Rpb24gKHRva2VuLCBmb3JjZSkge1xuXHR0b2tlbiArPSBcIlwiO1xuXG5cdHZhclxuXHRcdCAgcmVzdWx0ID0gdGhpcy5jb250YWlucyh0b2tlbilcblx0XHQsIG1ldGhvZCA9IHJlc3VsdCA/XG5cdFx0XHRmb3JjZSAhPT0gdHJ1ZSAmJiBcInJlbW92ZVwiXG5cdFx0OlxuXHRcdFx0Zm9yY2UgIT09IGZhbHNlICYmIFwiYWRkXCJcblx0O1xuXG5cdGlmIChtZXRob2QpIHtcblx0XHR0aGlzW21ldGhvZF0odG9rZW4pO1xuXHR9XG5cblx0aWYgKGZvcmNlID09PSB0cnVlIHx8IGZvcmNlID09PSBmYWxzZSkge1xuXHRcdHJldHVybiBmb3JjZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gIXJlc3VsdDtcblx0fVxufTtcbmNsYXNzTGlzdFByb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5qb2luKFwiIFwiKTtcbn07XG5cbmlmIChvYmpDdHIuZGVmaW5lUHJvcGVydHkpIHtcblx0dmFyIGNsYXNzTGlzdFByb3BEZXNjID0ge1xuXHRcdCAgZ2V0OiBjbGFzc0xpc3RHZXR0ZXJcblx0XHQsIGVudW1lcmFibGU6IHRydWVcblx0XHQsIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHR9O1xuXHR0cnkge1xuXHRcdG9iakN0ci5kZWZpbmVQcm9wZXJ0eShlbGVtQ3RyUHJvdG8sIGNsYXNzTGlzdFByb3AsIGNsYXNzTGlzdFByb3BEZXNjKTtcblx0fSBjYXRjaCAoZXgpIHsgLy8gSUUgOCBkb2Vzbid0IHN1cHBvcnQgZW51bWVyYWJsZTp0cnVlXG5cdFx0aWYgKGV4Lm51bWJlciA9PT0gLTB4N0ZGNUVDNTQpIHtcblx0XHRcdGNsYXNzTGlzdFByb3BEZXNjLmVudW1lcmFibGUgPSBmYWxzZTtcblx0XHRcdG9iakN0ci5kZWZpbmVQcm9wZXJ0eShlbGVtQ3RyUHJvdG8sIGNsYXNzTGlzdFByb3AsIGNsYXNzTGlzdFByb3BEZXNjKTtcblx0XHR9XG5cdH1cbn0gZWxzZSBpZiAob2JqQ3RyW3Byb3RvUHJvcF0uX19kZWZpbmVHZXR0ZXJfXykge1xuXHRlbGVtQ3RyUHJvdG8uX19kZWZpbmVHZXR0ZXJfXyhjbGFzc0xpc3RQcm9wLCBjbGFzc0xpc3RHZXR0ZXIpO1xufVxuXG59KHNlbGYpKTtcblxufSBlbHNlIHtcbi8vIFRoZXJlIGlzIGZ1bGwgb3IgcGFydGlhbCBuYXRpdmUgY2xhc3NMaXN0IHN1cHBvcnQsIHNvIGp1c3QgY2hlY2sgaWYgd2UgbmVlZFxuLy8gdG8gbm9ybWFsaXplIHRoZSBhZGQvcmVtb3ZlIGFuZCB0b2dnbGUgQVBJcy5cblxuKGZ1bmN0aW9uICgpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0dmFyIHRlc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIik7XG5cblx0dGVzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImMxXCIsIFwiYzJcIik7XG5cblx0Ly8gUG9seWZpbGwgZm9yIElFIDEwLzExIGFuZCBGaXJlZm94IDwyNiwgd2hlcmUgY2xhc3NMaXN0LmFkZCBhbmRcblx0Ly8gY2xhc3NMaXN0LnJlbW92ZSBleGlzdCBidXQgc3VwcG9ydCBvbmx5IG9uZSBhcmd1bWVudCBhdCBhIHRpbWUuXG5cdGlmICghdGVzdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYzJcIikpIHtcblx0XHR2YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24obWV0aG9kKSB7XG5cdFx0XHR2YXIgb3JpZ2luYWwgPSBET01Ub2tlbkxpc3QucHJvdG90eXBlW21ldGhvZF07XG5cblx0XHRcdERPTVRva2VuTGlzdC5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHRva2VuKSB7XG5cdFx0XHRcdHZhciBpLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0XHRcdHRva2VuID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0XHRcdG9yaWdpbmFsLmNhbGwodGhpcywgdG9rZW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0Y3JlYXRlTWV0aG9kKCdhZGQnKTtcblx0XHRjcmVhdGVNZXRob2QoJ3JlbW92ZScpO1xuXHR9XG5cblx0dGVzdEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImMzXCIsIGZhbHNlKTtcblxuXHQvLyBQb2x5ZmlsbCBmb3IgSUUgMTAgYW5kIEZpcmVmb3ggPDI0LCB3aGVyZSBjbGFzc0xpc3QudG9nZ2xlIGRvZXMgbm90XG5cdC8vIHN1cHBvcnQgdGhlIHNlY29uZCBhcmd1bWVudC5cblx0aWYgKHRlc3RFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImMzXCIpKSB7XG5cdFx0dmFyIF90b2dnbGUgPSBET01Ub2tlbkxpc3QucHJvdG90eXBlLnRvZ2dsZTtcblxuXHRcdERPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24odG9rZW4sIGZvcmNlKSB7XG5cdFx0XHRpZiAoMSBpbiBhcmd1bWVudHMgJiYgIXRoaXMuY29udGFpbnModG9rZW4pID09PSAhZm9yY2UpIHtcblx0XHRcdFx0cmV0dXJuIGZvcmNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIF90b2dnbGUuY2FsbCh0aGlzLCB0b2tlbik7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHR9XG5cblx0dGVzdEVsZW1lbnQgPSBudWxsO1xufSgpKTtcblxufVxuXG59XG5cbiIsIi8qXG4gKiBldmVudHMuanMgLSBTaW5nbGUgbGlicmFyeSB0byBoYW5kbGUgZ2VuZXJpYyBldmVudHNcblxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0IEplc8O6cyBNYW51ZWwgR2VybWFkZSBDYXN0acOxZWlyYXMgPGplc3VzQGdlcm1hZGUuZXM+XG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqXG4gKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cbiAgaWYgKCB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyApIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIGlmKCByb290ICkge1xuICAgIGlmKCByb290LmRlZmluZSApIHtcbiAgICAgIHJvb3QuZGVmaW5lKCdFdmVudHMnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWN0b3J5KCk7IH0gKTtcbiAgICB9IGVsc2UgaWYoIHJvb3QuYW5ndWxhciApIHtcbiAgICAgIHJvb3QuYW5ndWxhci5tb2R1bGUoJ2V2ZW50c1dyYXBwZXInLCBbXSkuZmFjdG9yeSgnRXZlbnRzJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFjdG9yeSh0cnVlKTsgfSk7XG4gICAgfSBlbHNlIGlmKCAhcm9vdC5FdmVudHMgKSB7XG4gICAgICByb290LkV2ZW50cyA9IGZhY3RvcnkoKTtcbiAgICB9XG4gIH1cblxufSkodGhpcywgZnVuY3Rpb24gKG5nKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuICB2YXIgbWV0aG9kcyA9IHtcbiAgICBzdGQ6IHsgb246ICdvbicsIG9uY2U6ICdvbmNlJywgb2ZmOiAnb2ZmJywgdHJpZ2dlcjogJ3RyaWdnZXInIH0sXG4gICAgc2FmZTogeyBvbjogJyQkb24nLCBvbmNlOiAnJCRvbmNlJywgb2ZmOiAnJCRvZmYnLCB0cmlnZ2VyOiAnJCR0cmlnZ2VyJyB9XG4gIH07XG5cbiAgZnVuY3Rpb24gRXZlbnQgKG5hbWUsIGFyZ3MsIGNhbGxlcikge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hcmdzID0gYXJncztcbiAgICB0aGlzLiQkYXJncyA9IFt0aGlzXS5jb25jYXQoYXJncyk7XG4gICAgdGhpcy5jYWxsZXIgPSBjYWxsZXI7XG4gIH1cblxuICBFdmVudC5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcbiAgfTtcblxuICBmdW5jdGlvbiBnZXRNZXRob2RzIChuZ1NhZmUpIHtcbiAgICByZXR1cm4gbmdTYWZlID8gbWV0aG9kcy5zYWZlIDogbWV0aG9kcy5zdGQ7XG4gIH1cblxuXHRmdW5jdGlvbiBfYWRkTGlzdGVuZXIgKGhhbmRsZXJzLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgaWYoICEgaGFuZGxlciBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGhhbmRsZXJzLnB1c2goeyBoYW5kbGVyOiBoYW5kbGVyLCBjb250ZXh0OiBjb250ZXh0IH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RyaWdnZXJFdmVudCAoZSwgaGFuZGxlcnMpIHtcbiAgICBpZiggaGFuZGxlcnMgKSB7XG4gICAgICBmb3IoIHZhciBpID0gMCwgbGVuID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICAgIGhhbmRsZXJzW2ldLmhhbmRsZXIuYXBwbHkoZS5jYWxsZXIsIGUuJCRhcmdzKTtcbiAgICAgICAgaWYoIGUuZGVmYXVsdFByZXZlbnRlZCApIHtcbiAgICAgICAgICByZXR1cm4gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBsZW47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2VtcHR5TGlzdGVuZXIgKGhhbmRsZXJzKSB7XG4gICAgaWYoIGhhbmRsZXJzICkge1xuICAgICAgaGFuZGxlcnMuc3BsaWNlKDAsIGhhbmRsZXJzLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX3JlbW92ZUxpc3RlbmVyIChoYW5kbGVycywgaGFuZGxlcikge1xuICAgIGlmKCBoYW5kbGVycyApIHtcbiAgICAgIGZvciggdmFyIGkgPSAwLCBsZW4gPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBsZW47ICkge1xuICAgICAgICBpZiggaGFuZGxlcnNbaV0uaGFuZGxlciA9PT0gaGFuZGxlciApIHtcbiAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgbGVuLS07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gRXZlbnRzICh0YXJnZXQsIG5nU2FmZSkge1xuICAgIHRhcmdldCA9IHRhcmdldCB8fCB0aGlzO1xuXG4gICAgdmFyIGxpc3RlbmVycyA9IHt9LFxuICAgICAgICBsaXN0ZW5lcnNPbmNlID0ge30sXG4gICAgICAgIG1ldGhvZCA9IGdldE1ldGhvZHMobmdTYWZlKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrRWFjaCAoX21ldGhvZCwgZXZlbnROYW1lLCBhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgICBpZiggZXZlbnROYW1lIGluc3RhbmNlb2YgQXJyYXkgKSB7XG4gICAgICAgIGV2ZW50TmFtZS5mb3JFYWNoKGZ1bmN0aW9uIChfZXZlbnROYW1lKSB7IHRhcmdldFtfbWV0aG9kXShfZXZlbnROYW1lLCBhcmcxLCBhcmcyLCBhcmczKTsgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYoIHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2V2ZW50IG5hbWUgc2hvdWxkIGJlIGEgc3RyaW5nJyk7XG4gICAgICB9XG4gICAgICBpZiggLyAvLnRlc3QoZXZlbnROYW1lKSApIHtcbiAgICAgICAgdGFyZ2V0W19tZXRob2RdKGV2ZW50TmFtZS5zcGxpdCgvICsvKSwgYXJnMSwgYXJnMiwgYXJnMyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRhcmdldFttZXRob2Qub25dID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlciwgY29udGV4dCkge1xuICAgICAgaWYoIGNoZWNrRWFjaChtZXRob2Qub24sIGV2ZW50TmFtZSwgaGFuZGxlciwgY29udGV4dCkgKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lcnNbZXZlbnROYW1lXSA9IGxpc3RlbmVyc1tldmVudE5hbWVdIHx8IFtdO1xuICAgICAgX2FkZExpc3RlbmVyKGxpc3RlbmVyc1tldmVudE5hbWVdLCBoYW5kbGVyLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcblxuICAgIHRhcmdldFttZXRob2Qub25jZV0gPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgICBpZiggY2hlY2tFYWNoKG1ldGhvZC5vbmNlLCBldmVudE5hbWUsIGhhbmRsZXIsIGNvbnRleHQpICkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfVxuICAgICAgbGlzdGVuZXJzT25jZVtldmVudE5hbWVdID0gbGlzdGVuZXJzT25jZVtldmVudE5hbWVdIHx8IFtdO1xuICAgICAgX2FkZExpc3RlbmVyKGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXSwgaGFuZGxlciwgY29udGV4dCk7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICB0YXJnZXRbbWV0aG9kLnRyaWdnZXJdID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgYXR0cnMsIGNhbGxlcikge1xuICAgICAgaWYoIGNoZWNrRWFjaChtZXRob2QudHJpZ2dlciwgZXZlbnROYW1lLCBhdHRycywgY2FsbGVyKSApIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICAgIHZhciBlID0gbmV3IEV2ZW50KGV2ZW50TmFtZSwgYXR0cnMsIGNhbGxlcik7XG5cbiAgICAgIF90cmlnZ2VyRXZlbnQoZSwgbGlzdGVuZXJzW2V2ZW50TmFtZV0pO1xuXG4gICAgICBpZiggIWUuZGVmYXVsdFByZXZlbnRlZCApIHtcbiAgICAgICAgdmFyIGxlbiA9IF90cmlnZ2VyRXZlbnQoZSwgbGlzdGVuZXJzT25jZVtldmVudE5hbWVdKTtcbiAgICAgICAgaWYoIGxlbiApIHtcbiAgICAgICAgICBsaXN0ZW5lcnNPbmNlW2V2ZW50TmFtZV0uc3BsaWNlKDAsIGxlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcblxuICAgIHRhcmdldFttZXRob2Qub2ZmXSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgIGlmKCBjaGVja0VhY2gobWV0aG9kLm9mZiwgZXZlbnROYW1lLCBoYW5kbGVyKSApIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICAgIGlmKCBoYW5kbGVyID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgIF9lbXB0eUxpc3RlbmVyKGxpc3RlbmVyc1tldmVudE5hbWVdKTtcbiAgICAgICAgX2VtcHR5TGlzdGVuZXIobGlzdGVuZXJzT25jZVtldmVudE5hbWVdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcnNbZXZlbnROYW1lXSwgaGFuZGxlcik7XG4gICAgICAgIF9yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcnNPbmNlW2V2ZW50TmFtZV0sIGhhbmRsZXIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIEV2ZW50cztcbn0pO1xuIiwiXG4vLyBmYWN0b3J5IGh0dHBcblxudmFyICRxID0gcmVxdWlyZSgncS1wcm9taXNlJyksXG4gICAgXyA9IHJlcXVpcmUoJ25pdHJvLXRvb2xzL2V4dGVuZCcpO1xuXG5mdW5jdGlvbiByZXNvbHZlRnVuY3Rpb25zIChvLCBhcmdzLCB0aGlzQXJnKSB7XG4gIGZvciggdmFyIGtleSBpbiBvICkge1xuICAgIGlmKCBvW2tleV0gaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICAgIG9ba2V5XSA9IG9ba2V5XS5hcHBseSh0aGlzQXJnLCBhcmdzIHx8IFtdKTtcbiAgICB9IGVsc2UgaWYoIHR5cGVvZiBvW2tleV0gPT09ICdvYmplY3QnICYmIG9ba2V5XSAhPT0gbnVsbCApIHtcbiAgICAgIG9ba2V5XSA9IHJlc29sdmVGdW5jdGlvbnMob1trZXldLCBhcmdzLCB0aGlzQXJnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG87XG59XG5cbmZ1bmN0aW9uIGhlYWRlclRvVGl0bGVTbHVnKHRleHQpIHtcbiAgLy8gY29uc29sZS5sb2coJ2hlYWRlclRvVGl0bGVTbHVnJywgdGV4dCk7XG4gIHZhciBrZXkgPSB0ZXh0LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIGZ1bmN0aW9uIChtYXRjaCwgbG93ZXIsIHVwcGVyKSB7XG4gICAgICByZXR1cm4gbG93ZXIgKyAnLScgKyB1cHBlcjtcbiAgfSk7XG4gIGtleSA9IGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cigxKTtcblxuICByZXR1cm4ga2V5O1xufVxuXG5mdW5jdGlvbiBoZWFkZXJUb0NhbWVsQ2FzZSh0ZXh0KSB7XG4gIHZhciBrZXkgPSB0ZXh0WzBdLnRvTG93ZXJDYXNlKCkgKyB0ZXh0LnN1YnN0cigxKTtcbiAgcmV0dXJuIGtleS5yZXBsYWNlKC8oW2Etel0pLShbQS1aXSkvZywgZnVuY3Rpb24gKG1hdGNoLCBsb3dlciwgdXBwZXIpIHtcbiAgICByZXR1cm4gbG93ZXIgKyB1cHBlcjtcbiAgfSk7XG59XG5cbnZhciBSRV9jb250ZW50VHlwZSA9IC8oW15cXC9dKylcXC8oW14rXStcXCspPyguKikvO1xuZnVuY3Rpb24gcGFyc2VDb250ZW50VHlwZShjb250ZW50VHlwZSwgdGV4dCwgeG1sKSB7XG4gIHZhciBtYXRjaGVzID0gY29udGVudFR5cGUgJiYgY29udGVudFR5cGUubWF0Y2goUkVfY29udGVudFR5cGUpO1xuICByZXR1cm4gbWF0Y2hlcyAmJiAoIG1hdGNoZXNbM10gPT09ICdqc29uJyA/IEpTT04ucGFyc2UodGV4dCkgOiAoIG1hdGNoZXNbM10gPT09ICd4bWwnID8geG1sIDogdGV4dCApICk7XG59XG5cbmZ1bmN0aW9uIF9nZXRIZWFkZXJzIChyZXF1ZXN0KSB7XG4gIHZhciBoZWFkZXJzID0ge307XG4gIHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkucmVwbGFjZSgvXFxzKihbXlxcOl0rKVxccypcXDpcXHMqKFteXFw7XFxuXSspL2csIGZ1bmN0aW9uIChtYXRjaCwga2V5LCB2YWx1ZSkge1xuICAgICAgaGVhZGVyc1toZWFkZXJUb0NhbWVsQ2FzZShrZXkpXSA9IHZhbHVlLnRyaW0oKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhlYWRlcnM7XG59XG5cbmZ1bmN0aW9uIGhlYWRlcnNHZXR0ZXIgKHJlcXVlc3QpIHtcbiAgdmFyIGhlYWRlcnNDYWNoZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiggIWhlYWRlcnNDYWNoZSApIHtcbiAgICAgIGhlYWRlcnNDYWNoZSA9IF9nZXRIZWFkZXJzKHJlcXVlc3QpO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZGVyc0NhY2hlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVQYXJhbXMgKHBhcmFtcykge1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgZm9yKCB2YXIgcGFyYW0gaW4gcGFyYW1zICkge1xuICAgIHJlc3VsdCArPSAoIHJlc3VsdCA/ICcmJyA6ICcnICkgKyBwYXJhbSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNbcGFyYW1dKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBhZGRIZWFkZXJzVG9SZXF1ZXN0IChyZXEsIGhlYWRlcnMpIHtcbiAgZm9yKCB2YXIga2V5IGluIGhlYWRlcnMgKSB7XG4gICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoIGhlYWRlclRvVGl0bGVTbHVnKGtleSksIGhlYWRlcnNba2V5XSApO1xuICB9XG59XG5cbnZhciBkZWZhdWx0U2V0dGluZ3MgPSB7fTtcblxuaHR0cC5jb25maWcgPSBmdW5jdGlvbiAoc2V0dGluZ3MpIHtcbiAgXy5tZXJnZShkZWZhdWx0U2V0dGluZ3MsIHNldHRpbmdzKTtcbiAgcmV0dXJuIGh0dHA7XG59O1xuXG5mdW5jdGlvbiBodHRwICh1cmwsIGNvbmZpZykge1xuXG4gIGlmKCBjb25maWcgPT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0JyAmJiB1cmwgIT09IG51bGwgKSB7XG4gICAgY29uZmlnID0gdXJsO1xuICAgIHVybCA9IGNvbmZpZy51cmw7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSB1cmw7XG4gIH1cblxuICBjb25maWcgPSBfLm1lcmdlKF8uY29weShkZWZhdWx0U2V0dGluZ3MpLF8uY29weShjb25maWcpKTtcbiAgY29uZmlnID0gcmVzb2x2ZUZ1bmN0aW9ucyggY29uZmlnLCBbY29uZmlnXSwgbnVsbCApO1xuICBjb25maWcubWV0aG9kID0gKCBjb25maWcubWV0aG9kIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpO1xuXG4gIGlmKCB0eXBlb2YgY29uZmlnLnVybCAhPT0gJ3N0cmluZycgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1cmwgc2hvdWxkIGJlIGEgc3RyaW5nJyk7XG4gIH1cblxuICByZXR1cm4gJHEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgdmFyIHJlcXVlc3QgPSBudWxsO1xuXG4gICAgdHJ5IHsgLy8gRmlyZWZveCwgT3BlcmEgOC4wKywgU2FmYXJpXG4gICAgICAgIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB9IGNhdGNoIChlKSB7IC8vIEludGVybmV0IEV4cGxvcmVyXG4gICAgICAgIHRyeSB7IHJlcXVlc3QgPSBuZXcgQWN0aXZlWE9iamVjdCgnTXN4bWwyLlhNTEhUVFAnKTsgfSAgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgICAgIGNhdGNoIChlcikgeyByZXF1ZXN0ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7IH0gIC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgIH1cbiAgICBpZiggcmVxdWVzdCA9PT0gbnVsbCApIHsgdGhyb3cgJ0Jyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBIVFRQIFJlcXVlc3QnOyB9XG5cbiAgICBpZiggY29uZmlnLnBhcmFtcyApIHtcbiAgICAgIHVybCArPSAoIC9cXD8vLnRlc3QodXJsKSA/ICcmJyA6ICc/JyApICsgc2VyaWFsaXplUGFyYW1zKCBjb25maWcucGFyYW1zICk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKCBjb25maWcubWV0aG9kLCB1cmwgKTtcblxuICAgIGlmKCBjb25maWcud2l0aENyZWRlbnRpYWxzICkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIGFkZEhlYWRlcnNUb1JlcXVlc3QocmVxdWVzdCwgY29uZmlnLmhlYWRlcnMgfHwge30gKTtcblxuICAgIHJlcXVlc3QuY29uZmlnID0gY29uZmlnO1xuICAgIGNvbmZpZy5zdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuICAgICAgaWYoIHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgPT09IDQgKSB7XG4gICAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICBkYXRhOiBwYXJzZUNvbnRlbnRUeXBlKHJlcXVlc3QuZ2V0UmVzcG9uc2VIZWFkZXIoJ2NvbnRlbnQtdHlwZScpLCByZXF1ZXN0LnJlc3BvbnNlVGV4dCwgcmVxdWVzdC5yZXNwb25zZVhNTCksXG4gICAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzR2V0dGVyKHJlcXVlc3QpLFxuICAgICAgICAgIHhocjogcmVxdWVzdFxuICAgICAgICB9O1xuICAgICAgICBpZiggcmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwICkge1xuICAgICAgICAgIHJlc29sdmUoIHJlc3BvbnNlICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCByZXNwb25zZSApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmKCBjb25maWcuY29udGVudFR5cGUgKSB7XG5cbiAgICAgIGlmKCBjb25maWcuZGF0YSAmJiBjb25maWcuY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi9qc29uJyAmJiB0eXBlb2YgY29uZmlnLmRhdGEgIT09ICdzdHJpbmcnICkge1xuICAgICAgICBjb25maWcuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZy5kYXRhKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiggY29uZmlnLmRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSApIHtcbiAgICAgIGNvbmZpZy5jb250ZW50VHlwZSA9ICdtdWx0aXBhcnQvZm9ybS1kYXRhJztcbiAgICB9IGVsc2UgaWYoIHR5cGVvZiBjb25maWcuZGF0YSA9PT0gJ29iamVjdCcgJiYgY29uZmlnLmRhdGEgIT09IG51bGwgKSB7XG4gICAgICBjb25maWcuY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAgICBpZiggY29uZmlnLmRhdGEgKSB7XG4gICAgICAgIGNvbmZpZy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnLmRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCBjb25maWcuY29udGVudFR5cGUgKSB7XG4gICAgICAvLyBhZGRIZWFkZXJzVG9SZXF1ZXN0KHJlcXVlc3QsIHsgY29udGVudFR5cGU6IGNvbmZpZy5jb250ZW50VHlwZSB9KTtcbiAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlciggJ0NvbnRlbnQtVHlwZScsIGNvbmZpZy5jb250ZW50VHlwZSApO1xuICAgIH1cblxuICAgIHJlcXVlc3Quc2VuZCggY29uZmlnLmRhdGEgKTtcblxuICB9KTtcbn1cblxuaHR0cC5zZXJpYWxpemUgPSBzZXJpYWxpemVQYXJhbXM7XG5cbmh0dHAubm9DYWNoZSA9IGZ1bmN0aW9uICh1cmwsIGNvbmZpZykge1xuICB1cmwgKz0gKCAvXFw/Ly50ZXN0KHVybCkgPyAnJicgOiAnPycgKSArICd0PScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgcmV0dXJuIGh0dHAodXJsLCBjb25maWcpO1xufTtcblxuaHR0cC5wbGFpblJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gIHJldHVybiB7XG4gICAgY29uZmlnOiByZXNwb25zZS5jb25maWcsXG4gICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcbiAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICBoZWFkZXJzOiByZXNwb25zZS5oZWFkZXJzKClcbiAgfTtcbn07XG5cblsnZ2V0JywgJ2RlbGV0ZSddLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICBodHRwW21ldGhvZF0gPSBmdW5jdGlvbiAodXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gaHR0cCh1cmwsIF8uZXh0ZW5kKF8uY29weShjb25maWcgfHwge30pLCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5bJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIGh0dHBbbWV0aG9kXSA9IGZ1bmN0aW9uICh1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiBodHRwKHVybCwgXy5leHRlbmQoXy5jb3B5KGNvbmZpZyB8fCB7fSksIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgZGF0YTogZGF0YSB8fCB7fVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG4vLyBiYXNlUGF0aFxuXG5mdW5jdGlvbiBiYXNlUGF0aCAoYnApIHtcbiAgaWYoIC9cXC8kLy50ZXN0KGJwKSApIHtcbiAgICBicCA9IGJwLnJlcGxhY2UoL1xcLyQvLCcnKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICBpZiggIXAgKSB7XG4gICAgICByZXR1cm4gYnA7XG4gICAgfVxuICAgIHJldHVybiBicCArICggL15cXC8vLnRlc3QocCkgPyAnJyA6ICcvJyApICsgcDtcbiAgfTtcbn1cblxuaHR0cC5iYXNlID0gZnVuY3Rpb24gKHVybCwgYmFzZUNvbmZpZykge1xuICB2YXIgYnAgPSBiYXNlUGF0aCh1cmwpLFxuICAgICAgYmFzZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBiYXNlZC5nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG5cbiAgYmFzZUNvbmZpZyA9IGJhc2VDb25maWcgfHwge307XG5cbiAgWydnZXQnLCAnZGVsZXRlJ10uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgYmFzZWRbbWV0aG9kXSA9IGZ1bmN0aW9uIChwLCBfY29uZmlnICkge1xuICAgICAgcmV0dXJuIGh0dHAoIGJwKHApLCBfLm1lcmdlKF8uY29weShiYXNlQ29uZmlnKSwgX2NvbmZpZywgeyBtZXRob2Q6IG1ldGhvZCB9KSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIGJhc2VkW21ldGhvZF0gPSBmdW5jdGlvbiAocCwgZGF0YSwgX2NvbmZpZyApIHtcbiAgICAgIHJldHVybiBodHRwKCBicChwKSwgXy5tZXJnZShfLmNvcHkoYmFzZUNvbmZpZyksIF9jb25maWcsIHsgbWV0aG9kOiBtZXRob2QsIGRhdGE6IGRhdGEgfSkgKTtcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gYmFzZWQ7XG59O1xuXG5odHRwLnJlc3BvbnNlRGF0YSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaHR0cDtcbiIsIlxudmFyIGFycmF5U2hpZnQgPSBbXS5zaGlmdDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQgKCkge1xuICB2YXIgZGVzdCA9IGFycmF5U2hpZnQuY2FsbChhcmd1bWVudHMpLFxuICAgICAgc3JjID0gYXJyYXlTaGlmdC5jYWxsKGFyZ3VtZW50cyksXG4gICAgICBrZXk7XG5cbiAgd2hpbGUoIHNyYyApIHtcbiAgICBmb3IoIGtleSBpbiBzcmMpIHtcbiAgICAgIGRlc3Rba2V5XSA9IHNyY1trZXldO1xuICAgIH1cbiAgICBzcmMgPSBhcnJheVNoaWZ0LmNhbGwoYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXN0O1xufTtcbiIsIlxudmFyIFJFXyQkID0gL15cXCRcXCQvLFxuICAgIGFycmF5U2hpZnQgPSBbXS5zaGlmdCxcbiAgICB0eXBlID0gcmVxdWlyZSgnLi90eXBlJyk7XG5cbmZ1bmN0aW9uIF9tZXJnZSAoKSB7XG4gICAgdmFyIGRlc3QgPSBhcnJheVNoaWZ0LmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgc3JjID0gYXJyYXlTaGlmdC5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgIGtleTtcblxuICAgIHdoaWxlKCBzcmMgKSB7XG5cbiAgICAgIGlmKCB0eXBlb2YgZGVzdCAhPT0gdHlwZW9mIHNyYyApIHtcbiAgICAgICAgICBkZXN0ID0gdHlwZS5pc0FycmF5KHNyYykgPyBbXSA6ICggdHlwZS5pc09iamVjdChzcmMpID8ge30gOiBzcmMgKTtcbiAgICAgIH1cblxuICAgICAgaWYoIHR5cGUuaXNPYmplY3Qoc3JjKSApIHtcblxuICAgICAgICBmb3IoIGtleSBpbiBzcmMgKSB7XG4gICAgICAgICAgaWYoIHNyY1trZXldID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICBkZXN0W2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSBlbHNlIGlmKCB0eXBlLmlzQXJyYXkoZGVzdFtrZXldKSApIHtcbiAgICAgICAgICAgIFtdLnB1c2guYXBwbHkoZGVzdFtrZXldLCBzcmNba2V5XSk7XG4gICAgICAgICAgfSBlbHNlIGlmKCB0eXBlLmlzT2JqZWN0KGRlc3Rba2V5XSkgKSB7XG4gICAgICAgICAgICBkZXN0W2tleV0gPSBfbWVyZ2UoZGVzdFtrZXldLCBzcmNba2V5XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3Rba2V5XSA9IHNyY1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3JjID0gYXJyYXlTaGlmdC5jYWxsKGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc3Q7XG59XG5cbmZ1bmN0aW9uIG1hcE9iamVjdCAobywgaXRlcmF0ZWUpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmb3IoIHZhciBrZXkgaW4gbyApIHtcbiAgICByZXN1bHRba2V5XSA9IGl0ZXJhdGVlKG9ba2V5XSwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBfY29weSAoc3JjKSB7XG4gIGlmKCB0eXBlLmlzQXJyYXkoc3JjKSApIHtcbiAgICByZXR1cm4gc3JjLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIF9jb3B5KGl0ZW0pO1xuICAgIH0pO1xuICB9XG4gIFxuICBpZiggdHlwZS5pc09iamVjdChzcmMpICkge1xuICAgIHJldHVybiBtYXBPYmplY3Qoc3JjLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIF9jb3B5KGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHNyYztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGV4dGVuZDogcmVxdWlyZSgnLi9fZXh0ZW5kJyksXG4gIG1lcmdlOiBfbWVyZ2UsXG4gIGNvcHk6IF9jb3B5XG59O1xuIiwiXG52YXIgdHlwZSA9IHJlcXVpcmUoJy4vdHlwZScpO1xuXG5mdW5jdGlvbiBfa2V5IChvLCBfa2V5LCB2YWx1ZSl7XG4gICAgaWYoICF0eXBlLmlzT2JqZWN0KG8pICkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cbiAgICB2YXIga2V5cyA9IF9rZXkuc3BsaXQoJy4nKSxcbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuXG4gICAgaWYoIHZhbHVlID09PSB1bmRlZmluZWQgKSB7XG4gICAgICB3aGlsZSAoa2V5KSB7XG4gICAgICAgIGlmKCB0eXBlLmlzT2JqZWN0KG8pICYmIGtleSBpbiBvICkge1xuICAgICAgICAgIG8gPSBvW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG87XG4gICAgfSBlbHNlIHtcblxuICAgICAgd2hpbGUgKGtleSkge1xuICAgICAgICBpZiggbyBpbnN0YW5jZW9mIE9iamVjdCApIHtcbiAgICAgICAgICBpZiAoIGtleXMubGVuZ3RoICl7XG4gICAgICAgICAgICBpZiggIShrZXkgaW4gbykgKSB7XG4gICAgICAgICAgICAgIG9ba2V5XSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbyA9IG9ba2V5XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAga2V5OiBfa2V5LFxuICBrZXlzOiBPYmplY3Qua2V5c1xufTtcbiIsIlxudmFyIHR5cGUgPSByZXF1aXJlKCcuL3R5cGUnKSxcbiAgICBhcnJTb21lID0gQXJyYXkucHJvdG90eXBlLnNvbWUsXG4gICAgYXJyRXZlcnkgPSBBcnJheS5wcm90b3R5cGUuZXZlcnksXG4gICAgYXJyRm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLFxuICAgIGFyck1hcCA9IEFycmF5LnByb3RvdHlwZS5tYXAsXG4gICAgYXJySW5kZXhPZiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBfZWFjaEluTGlzdCggbGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcgKSB7XG4gIHJldHVybiBhcnJGb3JFYWNoLmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xufVxuXG5mdW5jdGlvbiBfZWFjaEluT2JqZWN0KCBvLCBpdGVyYXRlZSwgdGhpc0FyZyApIHtcbiAgZm9yKCB2YXIga2V5IGluIG8gKSB7XG4gICAgaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBbb1trZXldLCBrZXldKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfbWF0Y2hBbGwgKG8sIGZpbHRlcnMpIHtcbiAgZm9yKCB2YXIga2V5IGluIGZpbHRlcnMgKSB7XG4gICAgaWYoIG9ba2V5XSAhPT0gZmlsdGVyc1trZXldICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gX21hdGNoQW55IChvLCBmaWx0ZXJzKSB7XG4gIGZvciggdmFyIGtleSBpbiBmaWx0ZXJzICkge1xuICAgIGlmKCBvW2tleV0gPT09IGZpbHRlcnNba2V5XSApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYXRlZUZuIChpdGVyYXRlZSkge1xuICBpZiggdHlwZS5pc0Z1bmN0aW9uKGl0ZXJhdGVlKSApIHtcbiAgICByZXR1cm4gaXRlcmF0ZWU7XG4gIH1cblxuICBpZiggdHlwZS5pc09iamVjdChpdGVyYXRlZSkgKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gX21hdGNoQWxsKGl0ZW0sIGl0ZXJhdGVlKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0gPT09IGl0ZXJhdGVlO1xuICB9O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBlYWNoIChvLCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICBpZiggbyAmJiBvLmxlbmd0aCApIHtcbiAgICBhcnJGb3JFYWNoLmNhbGwobywgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuICB9IGVsc2UgaWYoIHR5cGUuaXNPYmplY3QobykgKSB7XG4gICAgX2VhY2hJbk9iamVjdChvLCBpdGVyYXRlZSwgdGhpc0FyZyB8fCB0aGlzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbmRleE9mIChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICBpZiggIXR5cGUuaXNGdW5jdGlvbihpdGVyYXRlZSkgKSB7XG4gICAgcmV0dXJuIGFyckluZGV4T2YuY2FsbChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyk7XG4gIH1cblxuICBmb3IoIHZhciBpID0gMCwgbiA9IGxpc3QubGVuZ3RoOyBpIDwgbiA7IGkrKyApIHtcbiAgICBpZiggaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2ldLCBpKSApIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIF9pbmRleEJ5IChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICB2YXIgbWFwID0ge307XG5cblx0Zm9yKCB2YXIgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgbWFwW2l0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtpXSwgaSldID0gbGlzdFtpXTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG5mdW5jdGlvbiBpbmRleEJ5IChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuXHRpZiggdHlwZS5pc1N0cmluZyhpdGVyYXRlZSkgKSB7XG5cdFx0cmV0dXJuIF9pbmRleEJ5KGxpc3QsIGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtW2l0ZXJhdGVlXTsgfSwgdGhpc0FyZyk7XG5cdH0gZWxzZSBpZiggdHlwZS5pc0Z1bmN0aW9uKGl0ZXJhdGVlKSApIHtcblx0XHRyZXR1cm4gX2luZGV4QnkobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuXHR9XG5cdHJldHVybiB7fTtcbn1cblxuZnVuY3Rpb24gc29tZSAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgaXRlcmF0ZWUgPSBfaXRlcmF0ZWVGbihpdGVyYXRlZSk7XG5cbiAgaWYoIGxpc3QgJiYgbGlzdC5sZW5ndGggKSB7XG4gICAgcmV0dXJuIGFyclNvbWUuY2FsbChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyk7XG4gIH0gZWxzZSBpZiggdHlwZS5pc09iamVjdChsaXN0KSApIHtcbiAgICBmb3IoIHZhciBrZXkgaW4gbGlzdCApICB7XG4gICAgICBpZiggaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2tleV0sIGtleSkgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGV2ZXJ5IChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICBpdGVyYXRlZSA9IF9pdGVyYXRlZUZuKGl0ZXJhdGVlKTtcblxuICBpZiggbGlzdCAmJiBsaXN0Lmxlbmd0aCApIHtcbiAgICByZXR1cm4gYXJyRXZlcnkuY2FsbChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyk7XG4gIH0gZWxzZSBpZiggdHlwZS5pc09iamVjdChsaXN0KSApIHtcbiAgICBmb3IoIHZhciBrZXkgaW4gbGlzdCApICB7XG4gICAgICBpZiggIWl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtrZXldLCBrZXkpICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5mdW5jdGlvbiBtYXAgKGxpc3QsIF9pdGVyYXRlZSwgdGhpc0FyZykge1xuICB2YXIgaXRlcmF0ZWUgPSB0eXBlLmlzU3RyaW5nKF9pdGVyYXRlZSkgPyBmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbVtfaXRlcmF0ZWVdOyB9IDogX2l0ZXJhdGVlO1xuXG4gIGlmKCBsaXN0ICYmIGxpc3QubGVuZ3RoICkge1xuICAgIHJldHVybiBhcnJNYXAuY2FsbChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyk7XG4gIH0gZWxzZSBpZiggdHlwZS5pc09iamVjdChsaXN0KSApIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yKCB2YXIga2V5IGluIGxpc3QgKSAge1xuICAgICAgcmVzdWx0W2tleV0gPSBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3Rba2V5XSwga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcblxuZnVuY3Rpb24gbWFwMkxpc3QgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIGlmKCBsaXN0ICYmIGxpc3QubGVuZ3RoICkge1xuICAgIHJldHVybiBhcnJNYXAuY2FsbChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdLCBpID0gMDtcbiAgZm9yKCB2YXIga2V5IGluIGxpc3QgKSAge1xuICAgIHJlc3VsdFtpKytdID0gaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2tleV0sIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmZ1bmN0aW9uIHJlbW92ZSAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgICB0aGlzQXJnID0gdGhpc0FyZyA9PT0gdW5kZWZpbmVkID8gdGhpcyA6IHRoaXNBcmc7XG5cbiAgICBpdGVyYXRlZSA9IF9pdGVyYXRlZUZuKGl0ZXJhdGVlKTtcblxuICAgIGZvciggdmFyIGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRpZiggaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2ldKSApIHtcblx0XHRcdFx0XHRcdGxpc3Quc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHR9XG5cdFx0fVxufVxuXG5mdW5jdGlvbiBmaXJzdCAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcblx0XHR0aGlzQXJnID0gdGhpc0FyZyA9PT0gdW5kZWZpbmVkID8gdGhpcyA6IHRoaXNBcmc7XG5cblx0XHRpdGVyYXRlZSA9IF9pdGVyYXRlZUZuKGl0ZXJhdGVlKTtcblxuICAgIHZhciBpID0gYXJySW5kZXhPZi5jYWxsKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcblxuXHRcdGZvciggdmFyIGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aCA7IGkgPCBsZW4gOyBpKysgKSB7XG4gICAgICAgIGlmKCBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3RbaV0pICkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3RbaV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxhc3QgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG5cdFx0dGhpc0FyZyA9IHRoaXNBcmcgPT09IHVuZGVmaW5lZCA/IHRoaXMgOiB0aGlzQXJnO1xuXG5cdFx0aXRlcmF0ZWUgPSBfaXRlcmF0ZWVGbihpdGVyYXRlZSk7XG5cblx0XHRmb3IoIHZhciBpID0gbGlzdC5sZW5ndGggLSAxIDsgaSA+PSAwIDsgaS0tICkge1xuICAgICAgICBpZiggaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2ldKSApIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0W2ldO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXIgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gICAgdmFyIG5ld0xpc3QgPSBbXTtcblxuXHRcdHRoaXNBcmcgPSB0aGlzQXJnID09PSB1bmRlZmluZWQgPyB0aGlzIDogdGhpc0FyZztcblx0XHRpdGVyYXRlZSA9IF9pdGVyYXRlZUZuKGl0ZXJhdGVlKTtcblxuXHRcdGZvciggdmFyIGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aCA7IGkgPCBsZW4gOyBpKysgKSB7XG4gICAgICAgIGlmKCBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3RbaV0pICkge1xuICAgICAgICAgICAgbmV3TGlzdC5wdXNoKGxpc3RbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0xpc3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBfbWF0Y2hBbGw6IF9tYXRjaEFsbCxcbiAgX21hdGNoQW55OiBfbWF0Y2hBbnksXG4gIGZpbmQ6IGZpcnN0LFxuICBmaXJzdDogZmlyc3QsXG4gIGxhc3Q6IGxhc3QsXG4gIGZpbHRlcjogZmlsdGVyLFxuICBlYWNoOiBlYWNoLFxuICBzb21lOiBzb21lLFxuICBldmVyeTogZXZlcnksXG4gIG1hcDogbWFwLFxuICBwbHVjazogbWFwLFxuICBtYXAyTGlzdDogbWFwMkxpc3QsXG4gIGluZGV4T2Y6IGluZGV4T2YsXG4gIGluZGV4Qnk6IGluZGV4QnksXG4gIHJlbW92ZTogcmVtb3ZlLFxuICBpZjogZnVuY3Rpb24gKHJlc3VsdCwgZm4pIHtcbiAgICBpZiggcmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgZm4gaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICAgIHJldHVybiBmbihyZXN1bHQpO1xuICAgIH1cbiAgfVxufTtcbiIsIlxudmFyIFJFX2RvdHNCYWNrID0gL1teXFwvXStcXC9cXC5cXC5cXC8vZyxcblx0Y2xlYXJTdHIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnJzsgfTtcblxuZnVuY3Rpb24gX2pvaW5QYXRoICgpIHtcbiAgICB2YXIgcGF0aCA9IChhcmd1bWVudHNbMF0gfHwgJycpLnJlcGxhY2UoL1xcLyQvLCAnJyksXG4gICAgXHRiYWNrRG90cztcblxuICAgIGZvciggdmFyIGkgPSAxLCBsYXN0ID0gYXJndW1lbnRzLmxlbmd0aCAtIDEgOyBpIDwgbGFzdCA7IGkrKyApIHtcbiAgICAgICAgcGF0aCArPSAnLycgKyBhcmd1bWVudHNbaV0ucmVwbGFjZSgvXlxcL3xcXC8kL2csICcnKTtcbiAgICB9XG4gICAgaWYoIGxhc3QgKSB7XG4gICAgICAgIHBhdGggKz0gYXJndW1lbnRzW2xhc3RdID8gKCAnLycgKyBhcmd1bWVudHNbbGFzdF0ucmVwbGFjZSgvXlxcLy8sICcnKSApIDogJyc7XG4gICAgfVxuXG4gICAgd2hpbGUoIFJFX2RvdHNCYWNrLnRlc3QocGF0aCkgKSB7XG4gICAgXHRwYXRoID0gcGF0aC5yZXBsYWNlKFJFX2RvdHNCYWNrLCBjbGVhclN0cik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhdGg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBqb2luUGF0aDogX2pvaW5QYXRoXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfaXNUeXBlICh0eXBlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIG8gPT09IHR5cGUpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIF9pbnN0YW5jZU9mIChfY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuICggbyBpbnN0YW5jZW9mIF9jb25zdHJ1Y3RvciApO1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1R5cGU6IGZ1bmN0aW9uICh0eXBlLCB2YWx1ZSkge1xuICAgIGlmKCB2YWx1ZSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgcmV0dXJuIF9pc1R5cGUodHlwZSk7XG4gICAgfVxuICAgIHJldHVybiBfaXNUeXBlKHR5cGUpKHZhbHVlKTtcbiAgfSxcbiAgaW5zdGFuY2VPZjogZnVuY3Rpb24gKFByb3RvLCB2YWx1ZSkge1xuICAgIGlmKCB2YWx1ZSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgcmV0dXJuIF9pbnN0YW5jZU9mKFByb3RvKTtcbiAgICB9XG4gICAgcmV0dXJuIF9pbnN0YW5jZU9mKFByb3RvKSh2YWx1ZSk7XG4gIH0sXG4gIGlzT2JqZWN0OiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCcgJiYgbyAhPT0gbnVsbDtcbiAgfSxcblx0aXNGdW5jdGlvbjogX2lzVHlwZSgnZnVuY3Rpb24nKSxcblx0aXNTdHJpbmc6IF9pc1R5cGUoJ3N0cmluZycpLFxuXHRpc051bWJlcjogX2lzVHlwZSgnbnVtYmVyJyksXG5cdGlzQXJyYXk6IEFycmF5LmlzQXJyYXkgfHwgX2luc3RhbmNlT2YoQXJyYXkpLFxuXHRpc0RhdGU6IF9pbnN0YW5jZU9mKERhdGUpLFxuXHRpc1JlZ0V4cDogX2luc3RhbmNlT2YoUmVnRXhwKSxcblx0aXNFbGVtZW50OiBmdW5jdGlvbihvKSB7XG4gICAgcmV0dXJuIG8gJiYgby5ub2RlVHlwZSA9PT0gMTtcbiAgfSxcbiAgaXNVbmRlZmluZWQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xuICB9XG59O1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChxUHJvbWlzZSkge1xuXG5cdGZ1bmN0aW9uIGVhY2ggKGl0ZXJhYmxlLCBoYW5kbGVyKSB7XG5cdFx0Zm9yKCB2YXIgaSA9IDAsIG4gPSBpdGVyYWJsZS5sZW5ndGg7IGkgPCBuIDsgaSsrICkge1xuXHRcdFx0aGFuZGxlcihpdGVyYWJsZVtpXSwgaSk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gcVJlc29sdmUgKHJlc3VsdCkge1xuXHQgIHJldHVybiBxUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHJlc29sdmUocmVzdWx0KTsgfSk7XG5cdH07XG5cblx0ZnVuY3Rpb24gcVJlamVjdCAocmVhc29uKSB7XG5cdCAgcmV0dXJuIHFQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgcmVqZWN0KHJlYXNvbik7IH0pO1xuXHR9O1xuXG5cdHZhciBtZXRob2RzID0ge1xuXHRcdHJlc29sdmU6IHFSZXNvbHZlLFxuXHRcdHJlamVjdDogcVJlamVjdCxcblx0XHRkZWZlcjogZnVuY3Rpb24gKCkge1xuXHRcdCAgdmFyIGRlZmVycmVkID0ge307XG5cdFx0ICBkZWZlcnJlZC5wcm9taXNlID0gcVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdCAgICBkZWZlcnJlZC5yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHQgICAgZGVmZXJyZWQucmVqZWN0ID0gcmVqZWN0O1xuXHRcdCAgfSk7XG5cdFx0ICByZXR1cm4gZGVmZXJyZWQ7XG5cdFx0fSxcblx0XHRhbGw6IGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuXHRcdCAgcmV0dXJuIHFQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHQgICAgdmFyIHBlbmRpbmcgPSBpdGVyYWJsZS5sZW5ndGgsXG5cdFx0ICAgICAgICByZXN1bHRzID0gW107XG5cdFx0ICAgIGVhY2goaXRlcmFibGUsIGZ1bmN0aW9uIChfcHJvbWlzZSwgaSkge1xuXG5cdFx0ICAgICAgKCBfcHJvbWlzZS50aGVuID8gX3Byb21pc2UgOiBxUmVzb2x2ZShfcHJvbWlzZSkgKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHQgICAgICAgIHJlc3VsdHNbaV0gPSByZXN1bHQ7XG5cdFx0ICAgICAgICBpZiggLS1wZW5kaW5nID09PSAwICkge1xuXHRcdCAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcblx0XHQgICAgICAgIGlmKCBwZW5kaW5nICE9PSAtMSApIHtcblx0XHQgICAgICAgICAgcGVuZGluZyA9PT0gLTE7XG5cdFx0ICAgICAgICAgIHJlamVjdChyZWFzb24pO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgIH0pO1xuXHRcdCAgICB9KTtcblx0XHQgIH0pO1xuXHRcdH0sXG5cdFx0cmFjZTogZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG5cdFx0ICByZXR1cm4gcVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdCAgICB2YXIgZG9uZSA9IGZhbHNlO1xuXG5cdFx0ICAgIGVhY2goaXRlcmFibGUsIGZ1bmN0aW9uIChfcHJvbWlzZSwgaSkge1xuXHRcdCAgICAgIGlmKCBkb25lICkge1xuXHRcdCAgICAgICAgcmV0dXJuO1xuXHRcdCAgICAgIH1cblx0XHQgICAgICAoIF9wcm9taXNlLnRoZW4gPyBfcHJvbWlzZSA6IHFSZXNvbHZlKF9wcm9taXNlKSApLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdCAgICAgICAgaWYoICFkb25lICkge1xuXHRcdCAgICAgICAgICBkb25lID0gdHJ1ZTtcblx0XHQgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcblx0XHQgICAgICAgIGlmKCAhZG9uZSApIHtcblx0XHQgICAgICAgICAgZG9uZSA9IHRydWU7XG5cdFx0ICAgICAgICAgIHJlamVjdChyZWFzb24pO1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICAgIH0pO1xuXHRcdCAgICB9KTtcblx0XHQgIH0pO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKHEsIG92ZXJyaWRlKSB7XG5cdFx0Zm9yKCB2YXIga2V5IGluIG1ldGhvZHMgKSB7XG5cdFx0XHRpZiggIXFba2V5XSB8fCBvdmVycmlkZSApIHtcblx0XHRcdFx0cVtrZXldID0gbWV0aG9kc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcTtcblx0fTtcbn07XG4iLCJcbmZ1bmN0aW9uIHN0ZXBSZXN1bHQgKHN0ZXAsIHZhbHVlLCB0eXBlKSB7XG4gIGlmKCB2YWx1ZSAmJiB2YWx1ZS50aGVuICkge1xuICAgIHZhbHVlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgc3RlcC5kZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgc3RlcC5kZWZlcnJlZC5yZWplY3QocmVhc29uKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBzdGVwLmRlZmVycmVkW3R5cGVdKHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcm9jZXNzUXVldWUocHJvbWlzZSkge1xuICBpZiggcHJvbWlzZS4kJHN1Y2NlZWRlZCA9PT0gdW5kZWZpbmVkICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBsZW4gPSBwcm9taXNlLiQkcXVldWUubGVuZ3RoLFxuICAgICAgc3RlcCA9IHByb21pc2UuJCRxdWV1ZS5zaGlmdCgpLFxuICAgICAgdHlwZSA9IHByb21pc2UuJCRzdWNjZWVkZWQgPyAncmVzb2x2ZScgOiAncmVqZWN0JyxcbiAgICAgIHVuY291Z2ggPSAhcHJvbWlzZS4kJHN1Y2NlZWRlZCAmJiBwcm9taXNlLiQkdW5jb3VnaHQrKztcblxuICB3aGlsZSggc3RlcCApIHtcblxuICAgIGlmKCBzdGVwW3R5cGVdICkge1xuICAgICAgdW5jb3VnaCA9IGZhbHNlO1xuXG4gICAgICB0cnkge1xuICAgICAgICBzdGVwUmVzdWx0KHN0ZXAsIHN0ZXBbdHlwZV0ocHJvbWlzZS4kJHZhbHVlKSwgJ3Jlc29sdmUnKTtcbiAgICAgIH0gY2F0Y2ggKHJlYXNvbikge1xuICAgICAgICBzdGVwUmVzdWx0KHN0ZXAsIHJlYXNvbiwgJ3JlamVjdCcpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ZXBSZXN1bHQoc3RlcCwgcHJvbWlzZS4kJHZhbHVlLCB0eXBlKTtcbiAgICB9XG5cbiAgICBzdGVwID0gcHJvbWlzZS4kJHF1ZXVlLnNoaWZ0KCk7XG4gIH1cblxuICBpZiggIXByb21pc2UuJCRzdWNjZWVkZWQgJiYgdW5jb3VnaCApIHtcbiAgICBpZiggcHJvbWlzZS4kJHVuY291Z2ggPT09IHVuY291Z2ggKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuY2F1Z2h0IChpbiBwcm9taXNlKScpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBQIChleGVjdXRvcikge1xuICBpZiggISggZXhlY3V0b3IgaW5zdGFuY2VvZiBGdW5jdGlvbiApICkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb21pc2UgcmVzb2x2ZXIgdW5kZWZpbmVkIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gIH1cblxuICB2YXIgcCA9IHRoaXM7XG4gIHRoaXMuJCRxdWV1ZSA9IFtdO1xuICB0aGlzLiQkdW5jb3VnaCA9IDA7XG5cbiAgdHJ5IHtcbiAgICBleGVjdXRvcihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBwLiQkc3VjY2VlZGVkID0gdHJ1ZTtcbiAgICAgIHAuJCR2YWx1ZSA9IHJlc3VsdDtcbiAgICAgIHByb2Nlc3NRdWV1ZShwKTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICBwLiQkc3VjY2VlZGVkID0gZmFsc2U7XG4gICAgICBwLiQkdmFsdWUgPSByZWFzb247XG4gICAgICBwcm9jZXNzUXVldWUocCk7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHAuJCRzdWNjZWVkZWQgPSBmYWxzZTtcbiAgICBwLiQkdmFsdWUgPSBlcnI7XG4gICAgcHJvY2Vzc1F1ZXVlKHApO1xuICB9XG59XG5cblAucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25zdWNjZWVkZWQsIG9uUmVqZWN0ZWQpIHtcbiAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgIF9wcm9taXNlID0gbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBfdGhpcy4kJHF1ZXVlLnB1c2goeyByZXNvbHZlOiBvbnN1Y2NlZWRlZCwgcmVqZWN0OiBvblJlamVjdGVkLCBkZWZlcnJlZDogeyByZXNvbHZlOiByZXNvbHZlLCByZWplY3Q6IHJlamVjdCB9IH0pO1xuICAgICAgfSk7XG5cbiAgcHJvY2Vzc1F1ZXVlKHRoaXMpO1xuXG4gIHJldHVybiBfcHJvbWlzZTtcbn07XG5cblAucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xufTtcblxucmVxdWlyZSgnLi9wcm9taXNlLW1ldGhvZHMnKShmdW5jdGlvbiAoZXhlY3V0b3IpIHsgcmV0dXJuIG5ldyBQKGV4ZWN1dG9yKTsgfSkoUCwgdHJ1ZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUDtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3FpemVyJykoIGdsb2JhbC5Qcm9taXNlID8gcmVxdWlyZSgnLi9wcm9taXNlLW1ldGhvZHMnKShmdW5jdGlvbiAoZXhlY3V0b3IpIHsgcmV0dXJuIG5ldyBnbG9iYWwuUHJvbWlzZShleGVjdXRvcik7IH0pKGdsb2JhbC5Qcm9taXNlKSA6IHJlcXVpcmUoJy4vcHJvbWlzZS1wb2x5ZmlsbCcpICk7XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFByb21pc2UpIHtcblxuICBmdW5jdGlvbiBxIChleGVjdXRvcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvcik7XG4gIH1cblxuICByZXF1aXJlKCcuL3Byb21pc2UtbWV0aG9kcycpKHEpKHEsIHRydWUpO1xuXG4gIHEud2hlbiA9IGZ1bmN0aW9uIChwKSB7IHJldHVybiAoIHAgJiYgcC50aGVuICkgPyBwIDogUHJvbWlzZS5yZXNvbHZlKHApOyB9O1xuICBxLnVzZVBvbHlmaWxsID0gZnVuY3Rpb24gKCkge1xuICBcdFByb21pc2UgPSByZXF1aXJlKCcuL3Byb21pc2UtcG9seWZpbGwnKTtcbiAgfTtcblxuICByZXR1cm4gcTtcblxufTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9xaXplcicpKCByZXF1aXJlKCcuL2xpYi9wcm9taXNlLXBvbHlmaWxsJykgKTtcbiIsIlxuLy8gcmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscy9jdXJyZW50LXNjcmlwdCcpO1xucmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscy9kYXRlJyk7XG5yZXF1aXJlKCcuL2Jyb3dzZXItcG9seWZpbGxzL2RvbS1jbG9zZXN0Jyk7XG5yZXF1aXJlKCcuL2Jyb3dzZXItcG9seWZpbGxzL2V2ZW50LWxpc3RlbmVyJyk7XG5yZXF1aXJlKCcuL2Jyb3dzZXItcG9seWZpbGxzL21hdGNoLW1lZGlhJyk7XG5yZXF1aXJlKCcuL2Jyb3dzZXItcG9seWZpbGxzL21hdGNoZXMtc2VsZWN0b3InKTtcbiIsIlxuaWYgKCFEYXRlLm5vdykge1xuICBEYXRlLm5vdyA9IGZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH07XG59IiwiXG5pZiggIUVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgKSB7XG4gIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgZWwgPSB0aGlzO1xuXG4gICAgd2hpbGUoIGVsICkge1xuICAgICAgaWYoIGVsLm1hdGNoZXNTZWxlY3RvcihzZWxlY3RvcikgKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH07XG59IiwiXG5pZiggIUVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgKSB7XG4gIGlmKCBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hFdmVudCApIHtcbiAgICBFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hFdmVudCggJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgICB9O1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIEVsZW1lbnQucHJvdG90eXBlLmRldGFjaEV2ZW50KCAnb24nICsgZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgJ0Jyb3dzZXIgbm90IGNvbXBhdGlibGUgd2l0aCBlbGVtZW50IGV2ZW50cyc7XG4gIH1cbn0iLCIoZnVuY3Rpb24gKHJvb3QpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHJvb3QubWF0Y2hNZWRpYSA9IHJvb3QubWF0Y2hNZWRpYSB8fCByb290LndlYmtpdE1hdGNoTWVkaWEgfHwgcm9vdC5tb3pNYXRjaE1lZGlhIHx8IHJvb3QubXNNYXRjaE1lZGlhO1xufSkodGhpcyk7IiwiXG5pZiggIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNTZWxlY3RvciApIHtcbiAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc1NlbGVjdG9yID0gKFxuICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUub01hdGNoZXNTZWxlY3RvclxuICApO1xufVxuXG4iLCJcbnJlcXVpcmUoJy4vYnJvd3Nlci1wb2x5ZmlsbHMnKTtcbi8vIGRvY3VtZW50LmN1cnJlbnRTY3JpcHRcbi8vIERhdGUubm93KClcbi8vIEhUTUxFbGVtZW50LmNsb3Nlc3QoKVxuLy8gSFRNTEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lclxuLy8gSFRNTEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lclxuLy8gd2luZG93Lm1hdGNoTWVkaWFcbi8vIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNTZWxlY3RvclxuXG5yZXF1aXJlKCdjbGFzc2xpc3QuanMnKTsgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZXMvZG9jcy9XZWIvQVBJL0VsZW1lbnQvY2xhc3NMaXN0XG5cbnZhciBleHRlbmQgPSByZXF1aXJlKCduaXRyby10b29scy9leHRlbmQnKTtcblxuZnVuY3Rpb24gXyAoc2VsZWN0b3IsIHNvdXJjZSkge1xuICByZXR1cm4gc291cmNlICYmIHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnID9cblx0XHRzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKHNvdXJjZSkgOlxuXHRcdChzb3VyY2UgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xufVxuXG5fLm5vb3AgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXy5xID0gcmVxdWlyZSgncS1wcm9taXNlL25vLW5hdGl2ZScpO1xuXG5leHRlbmQuZXh0ZW5kKF8sIGV4dGVuZCk7XG5cbl8uZXh0ZW5kKF8sXG4gIHJlcXVpcmUoJ25pdHJvLXRvb2xzL3R5cGUnKSxcblx0cmVxdWlyZSgnbml0cm8tdG9vbHMva2V5JyksXG5cdHJlcXVpcmUoJ25pdHJvLXRvb2xzL3BhdGgnKVxuKTtcblxuXy5leHRlbmQoXywge1xuXHRhbmltYXRlOiByZXF1aXJlKCcuL2RlZmVycmVkL2FuaW1hdGUnKSxcblx0d2FpdDogcmVxdWlyZSgnLi9kZWZlcnJlZC93YWl0Jylcbn0pO1xuXG5fLmV4dGVuZChfLCB7XG5cdHJlYWR5OiByZXF1aXJlKCcuL2ZuL3JlYWR5JyksXG5cdHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZuL3RlbXBsYXRlJyksXG5cdGRlYm91bmNlOiByZXF1aXJlKCcuL2ZuL2RlYm91bmNlJylcbn0pO1xuXG5fLmV4dGVuZChfLFxuICByZXF1aXJlKCcuL3V0aWxzL2V2ZW50cycpLFxuXHQvLyBfLm9uKGVsLCBldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpXG5cdC8vIF8ub2ZmKGVsLCBldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpXG5cdC8vIF8udHJpZ2dlckV2ZW50KGVsZW1lbnQsIGV2ZW50TmFtZSwgZGF0YSlcblxuICByZXF1aXJlKCcuL3V0aWxzL2RvbScpXG4gIC8vIF8uY3JlYXRlKHRhZ05hbWUsIGF0dHJzKVxuXHQvLyBfLmF0dHIoZWwsIG5hbWUsIHZhbHVlKVxuICAvLyBfLnRtcENsYXNzKGVsLCBjbGFzc05hbWUsIGR1cmF0aW9uLCBjYilcbik7XG5cbl8uZXh0ZW5kKF8sIHtcblx0bm9ybWFsaXplOiByZXF1aXJlKCcuL3V0aWxzL25vcm1hbGl6ZScpLFxuXHQvLyBfLnRvdWNoRGV2aWNlID09PSB0cnVlIHwgZmFsc2Vcblx0Ly8gXy5pc01hYyA9PT0gdHJ1ZSB8IGZhbHNlXG5cdC8vIF8uaXNBbmRyb2lkID09PSB0cnVlIHwgZmFsc2VcblxuXHRzY3JvbGw6IHJlcXVpcmUoJy4vdXRpbHMvc2Nyb2xsL2J1bmRsZScpIC8vIHNjcm9sbCBpcyBub3QgYXZhaWxhYmxlIHVudGlsIGRvY3VtZW50IGlzIHJlYWR5XG5cdC8vIF8uc2Nyb2xsLm9uKCBoYW5kbGVyLCB1c2VDYXB0dXJlIClcblx0Ly8gXy5zY3JvbGwub2ZmKCBoYW5kbGVyLCB1c2VDYXB0dXJlIClcblx0Ly8gXy5zY3JvbGwudG9wKClcblx0Ly8gXy5zY3JvbGwuZ290byh2YWx1ZSlcblx0Ly8gXy5zY3JvbGwuYW5pbWF0ZVRvKHZhbHVlIHwgSFRNTEVsZW1lbnQsIGNhbGxiYWNrLCBkdXJhdGlvbik6IFByb21pc2Vcblx0Ly8gXyxzY3JvbGwuaW5BbmltYXRpb24gPT09IHRydWUgfCBmYWxzZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gXztcbiIsIlxudmFyICRxID0gcmVxdWlyZSgncS1wcm9taXNlL25vLW5hdGl2ZScpLFxuICAgIHRpbWluZ0Z1bmN0aW9ucyA9IHt9LFxuICAgIG5vb3AgPSBmdW5jdGlvbiAoKSB7fSxcbiAgICBnZXRUaW1pbmdGdW5jdGlvbiA9IGZ1bmN0aW9uICh0aW1pbmdGdW5jdGlvbk5hbWUpIHtcbiAgICAgIGlmKCAhdGltaW5nRnVuY3Rpb25zW3RpbWluZ0Z1bmN0aW9uTmFtZV0gKSB7XG4gICAgICAgIGlmKCB0aW1pbmdGdW5jdGlvbk5hbWUgPT09ICdsaW5lYXInICkge1xuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdID0gZnVuY3Rpb24gKCB2YWx1ZSApIHsgcmV0dXJuIHZhbHVlOyB9O1xuICAgICAgICB9IGVsc2UgaWYoIHRpbWluZ0Z1bmN0aW9uTmFtZSA9PT0gJ2Vhc2UnICkge1xuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdID0gcmVxdWlyZSgnYmV6aWVyLWVhc2luZycpKC4xNywuNjcsLjgzLC42Nyk7XG4gICAgICAgIH0gZWxzZSBpZiggdGltaW5nRnVuY3Rpb25OYW1lID09PSAnZWFzZS1pbicgKSB7XG4gICAgICAgICAgdGltaW5nRnVuY3Rpb25zW3RpbWluZ0Z1bmN0aW9uTmFtZV0gPSByZXF1aXJlKCdiZXppZXItZWFzaW5nJykoLjQyLDAsMSwxKTtcbiAgICAgICAgfSBlbHNlIGlmKCB0aW1pbmdGdW5jdGlvbk5hbWUgPT09ICdlYXNlLW91dCcgKSB7XG4gICAgICAgICAgdGltaW5nRnVuY3Rpb25zW3RpbWluZ0Z1bmN0aW9uTmFtZV0gPSByZXF1aXJlKCdiZXppZXItZWFzaW5nJykoMCwwLC41OCwxKTtcbiAgICAgICAgfSBlbHNlIGlmKCB0aW1pbmdGdW5jdGlvbk5hbWUgPT09ICdlYXNlLWluLW91dCcgKSB7XG4gICAgICAgICAgdGltaW5nRnVuY3Rpb25zW3RpbWluZ0Z1bmN0aW9uTmFtZV0gPSByZXF1aXJlKCdiZXppZXItZWFzaW5nJykoLjQyLDAsLjU4LDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGltaW5nRnVuY3Rpb25zW3RpbWluZ0Z1bmN0aW9uTmFtZV07XG4gICAgfTtcblxuZnVuY3Rpb24gYW5pbWF0ZSAocHJvZ3Jlc3NGbiwgZHVyYXRpb24sIGF0RW5kLCB0aW1pbmdGdW5jdGlvbk5hbWUpIHtcbiAgaWYgKCBkdXJhdGlvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgIGlmICggdHlwZW9mIGF0RW5kID09PSAnbnVtYmVyJyApIHtcbiAgICAgIGF1eCA9IGR1cmF0aW9uO1xuICAgICAgZHVyYXRpb24gPSBhdEVuZDtcbiAgICAgIGF0RW5kID0gYXV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBhdEVuZCA9IGR1cmF0aW9uO1xuICAgICAgZHVyYXRpb24gPSA0MDA7XG4gICAgfVxuICB9IGVsc2UgaWYgKCBkdXJhdGlvbiA9PT0gdW5kZWZpbmVkICkge1xuICAgIGR1cmF0aW9uID0gNDAwO1xuICB9XG5cbiAgdGltaW5nRnVuY3Rpb25OYW1lID0gdGltaW5nRnVuY3Rpb25OYW1lIHx8ICggdHlwZW9mIGF0RW5kID09PSAnc3RyaW5nJyA/IGF0RW5kIDogKCB0eXBlb2YgZHVyYXRpb24gPT09ICdzdHJpbmcnID8gZHVyYXRpb24gOiAnZWFzZScgKSApO1xuXG4gIHByb2dyZXNzRm4oZHVyYXRpb24gPT09IDAgPyAxIDogMCk7XG5cbiAgdmFyIHN0b3BwZWQgPSBmYWxzZSxcbiAgICAgIHRpbWluZ0Z1bmN0aW9uID0gZ2V0VGltaW5nRnVuY3Rpb24odGltaW5nRnVuY3Rpb25OYW1lKSxcbiAgICAgIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICBpZiggZHVyYXRpb24gPiAwICkge1xuICAgIHZhciBzdGFydCA9IERhdGUubm93KCksXG4gICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIHN0YXJ0O1xuXG4gICAgICAgICAgaWYoIHN0b3BwZWQgKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICB9IGVsc2UgaWYoIGVsYXBzZWQgPj0gZHVyYXRpb24gKSB7XG4gICAgICAgICAgICBzdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb2dyZXNzRm4oMSk7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgICAgICAoYXRFbmQgfHwgbm9vcCkoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvZ3Jlc3NGbiggdGltaW5nRnVuY3Rpb24oZWxhcHNlZC9kdXJhdGlvbikgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwKTtcbiAgfVxuXG4gIGRlZmVycmVkLnByb21pc2Uuc3RvcCA9IGZ1bmN0aW9uIChyZWplY3QpIHtcbiAgICBzdG9wcGVkID0gdHJ1ZTtcbiAgICBpZiggcmVqZWN0ICkge1xuICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufVxuXG5hbmltYXRlLnRpbWUgPSBmdW5jdGlvbiAoZWwpIHtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgZHVyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuYW5pbWF0aW9uRHVyYXRpb247XG4gIGlmKCBkdXJhdGlvbiApIHtcbiAgICBkdXJhdGlvbi5yZXBsYWNlKC8oWzAtOV0oXFwuWzAtOV0pPykobSk/cy8sIGZ1bmN0aW9uIChtYXRjaGVkLCB0LCBkZWNpbWFscywgbXMpIHtcbiAgICAgIHRpbWUgKz0gbXMgPyBOdW1iZXIodCkgOiBOdW1iZXIodCkqMTAwMDtcbiAgICB9KTtcbiAgfVxuICBpZiggd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmFuaW1hdGlvbkRlbGF5ICkge1xuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5hbmltYXRpb25EZWxheS5yZXBsYWNlKC8oWzAtOV0oXFwuWzAtOV0pPykobSk/cy8sIGZ1bmN0aW9uIChtYXRjaGVkLCB0LCBkZWNpbWFscywgbXMpIHtcbiAgICAgIHRpbWUgKz0gbXMgPyBOdW1iZXIodCkgOiBOdW1iZXIodCkqMTAwMDtcbiAgICB9KTtcbiAgfVxuICBkdXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS50cmFuc2l0aW9uRHVyYXRpb247XG4gIGlmKCBkdXJhdGlvbiApIHtcbiAgICBkdXJhdGlvbi5yZXBsYWNlKC8oWzAtOV0oXFwuWzAtOV0pPykobSk/cy8sIGZ1bmN0aW9uIChtYXRjaGVkLCB0LCBkZWNpbWFscywgbXMpIHtcbiAgICAgIHZhciB0ID0gbXMgPyBOdW1iZXIodCkgOiBOdW1iZXIodCkqMTAwMDtcbiAgICAgIGlmKCB0ID4gdGltZSApIHtcbiAgICAgICAgdGltZSA9IHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLy8gY29uc29sZS5sb2coJ2FuaW1hdGlvblRpbWUnLCBlbCwgdGltZSk7XG4gIHJldHVybiB0aW1lO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmltYXRlO1xuIiwiXG52YXIgJHEgPSByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJyksXG5cdHdhaXQgPSBmdW5jdGlvbiAoZGVsYXksIGNhbGxiYWNrKSB7XG5cdFx0aWYoIGRlbGF5IGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG5cdFx0XHRkZWxheSA9IFtjYWxsYmFjaywgY2FsbGJhY2sgPSBkZWxheV1bMF07XG5cdFx0fVxuXHRcdGlmKCBjYWxsYmFjayAmJiAhKGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pICkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBzaG91bGQgYmUgYSBGdW5jdGlvbicpO1xuXHRcdH1cblx0XHRpZiggdHlwZW9mIGRlbGF5ICE9PSAnbnVtYmVyJyApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignZGVsYXkgc2hvdWxkIGJlIGEgTnVtYmVyJyk7XG5cdFx0fVxuXHRcdHJldHVybiAkcShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0XHRpZiggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgZGVsYXkpO1xuXHRcdH0pO1xuXHR9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdhaXQ7XG4iLCJcbmZ1bmN0aW9uIGRlYm91bmNlIChmbiwgdGltZXNsb3QpIHtcbiAgdmFyIHRpbWVyID0gbnVsbCxcbiAgICAgIHRpbWVzbG90ID0gdGltZXNsb3QgfHwgODA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgaWYoIHRpbWVyICkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZm4uYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgIH0sIHRpbWVzbG90KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTsiLCJ2YXIgcmVhZHlMaXN0ZW5lcnMgPSBbXSxcbiAgICBpbml0UmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gcmVhZHlMaXN0ZW5lcnM7XG4gICAgICByZWFkeUxpc3RlbmVycyA9IHVuZGVmaW5lZDtcbiAgICAgIFtdLmZvckVhY2guY2FsbChsaXN0ZW5lcnMsIGZ1bmN0aW9uIChjYikgeyBjYigpOyB9KTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0UmVhZHkpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0UmVhZHkpO1xuICAgIH07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0UmVhZHkpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0UmVhZHkpO1xuXG5mdW5jdGlvbiByZWFkeSAoY2FsbGJhY2spIHtcbiAgaWYoIGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgaWYoIHJlYWR5TGlzdGVuZXJzICkge1xuICAgICAgcmVhZHlMaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVhZHk7XG4iLCJcbmZ1bmN0aW9uIHRlbXBsYXRlIChuYW1lLCBkYXRhKXtcbiAgcmV0dXJuIHRlbXBsYXRlLmNhY2hlW25hbWVdKGRhdGEgfHwge30pO1xufVxuXG50ZW1wbGF0ZS5jYWNoZSA9IHt9O1xuXG50ZW1wbGF0ZS5jb21waWxlID0gZnVuY3Rpb24gKHRtcGwpIHtcbiAgLy8gSm9obiBSZXNpZyBtaWNyby10ZW1wbGF0ZVxuICByZXR1cm4gbmV3IEZ1bmN0aW9uKCdvYmonLCAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICAndmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307JyArXG5cbiAgICAvLyBJbnRyb2R1Y2UgdGhlIGRhdGEgYXMgbG9jYWwgdmFyaWFibGVzIHVzaW5nIHdpdGgoKXt9XG4gICAgJ3dpdGgob2JqKXtwLnB1c2goXFwnJyArXG5cbiAgICAvLyBDb252ZXJ0IHRoZSB0ZW1wbGF0ZSBpbnRvIHB1cmUgSmF2YVNjcmlwdFxuICAgIHRtcGwudHJpbSgpXG4gICAgICAucmVwbGFjZSgvW1xcclxcdFxcbl0vZywgJyAnKVxuICAgICAgLnNwbGl0KCc8JScpLmpvaW4oJ1xcdCcpXG4gICAgICAucmVwbGFjZSgvKChefCU+KVteXFx0XSopJy9nLCAnJDFcXHInKVxuICAgICAgLnJlcGxhY2UoL1xcdD0oLio/KSU+L2csICdcXCcsJDEsXFwnJylcbiAgICAgIC5zcGxpdCgnXFx0Jykuam9pbignXFwnKTsnKVxuICAgICAgLnNwbGl0KCclPicpLmpvaW4oJ3AucHVzaChcXCcnKVxuICAgICAgLnNwbGl0KCdcXHInKS5qb2luKCdcXFxcXFwnJykgKyAnXFwnKTt9cmV0dXJuIHAuam9pbihcXCdcXCcpOycpO1xufTtcblxudGVtcGxhdGUucHV0ID0gZnVuY3Rpb24gKG5hbWUsIHRtcGwpIHtcbiAgdGVtcGxhdGUuY2FjaGVbbmFtZV0gPSB0ZW1wbGF0ZS5jb21waWxlKHRtcGwpO1xufTtcblxudGVtcGxhdGUubG9va3VwID0gZnVuY3Rpb24gKCkge1xuICBbXS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W3R5cGU9XCJhcHBsaWNhdGlvbi94LXRlbXBsYXRlXCJdW2RhdGEtdGVtcGxhdGVdJyksIGZ1bmN0aW9uICh0bXBsKSB7XG4gICAgdGVtcGxhdGUucHV0KHRtcGwuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyksIHRtcGwudGV4dCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJcbnZhciBfZG9tID0ge1xuICBjdXJyZW50U2NyaXB0OiBkb2N1bWVudC5jdXJyZW50U2NyaXB0IHx8IChmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbiAgICByZXR1cm4gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdO1xuICB9KSgpLFxuICBjcmVhdGU6IGZ1bmN0aW9uICh0YWdOYW1lLCBhdHRycykge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBpZiggYXR0cnMgKSB7XG4gICAgICBpZiggYXR0cnMuaHRtbCApIHtcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gYXR0cnMuaHRtbDtcbiAgICAgIH1cbiAgICAgIGZvciggdmFyIGF0dHIgaW4gYXR0cnMgKSB7XG4gICAgICAgIGlmKCBhdHRyICE9PSAnaHRtbCcgKSB7XG4gICAgICAgICAgZWxbYXR0cl0gPSBhdHRyc1thdHRyXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWw7XG4gIH0sXG4gIGF0dHI6IGZ1bmN0aW9uIChlbCwgbmFtZSwgdmFsdWUpIHtcbiAgICBpZiggIShlbCBpbnN0YW5jZW9mIEVsZW1lbnQpICYmIGVsWzBdIGluc3RhbmNlb2YgRWxlbWVudCApIHtcbiAgICAgIGVsID0gZWxbMF07XG4gICAgfVxuICAgIGlmKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgfSxcbiAgdG1wQ2xhc3M6IGZ1bmN0aW9uIChlbCwgY2xhc3NOYW1lLCBkdXJhdGlvbiwgY2IpIHtcbiAgICB2YXIgaXNDb2xsZWN0aW9uID0gIShlbCBpbnN0YW5jZW9mIEVsZW1lbnQgKSAmJiBlbC5sZW5ndGg7XG5cbiAgICBpZiggaXNDb2xsZWN0aW9uICkge1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGVsLCBmdW5jdGlvbiAoX2VsKSB7XG4gICAgICAgIF9lbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmKCBpc0NvbGxlY3Rpb24gKSB7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChlbCwgZnVuY3Rpb24gKF9lbCkge1xuICAgICAgICAgIF9lbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfVxuICAgICAgaWYoIGNiIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgICAgIGNiKCk7XG4gICAgICB9XG4gICAgfSwgZHVyYXRpb24gaW5zdGFuY2VvZiBGdW5jdGlvbiA/IGR1cmF0aW9uKCkgOiBkdXJhdGlvbiApO1xuICB9LFxuICBmb3JtUGFyYW1zOiBmdW5jdGlvbiAoZm9ybSkge1xuICAgIGlmKCAhKGZvcm0gaW5zdGFuY2VvZiBFbGVtZW50KSAmJiBmb3JtLmxlbmd0aCApIHtcbiAgICAgIGZvcm0gPSBmb3JtWzBdO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0ge307XG4gICAgW10uZm9yRWFjaC5jYWxsKGZvcm0uZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgaWYoIGVsLm5hbWUgJiYgIWVsLmRpc2FibGVkICkge1xuICAgICAgICBpZiggZWwudHlwZSA9PT0gJ3JhZGlvJyApIHtcbiAgICAgICAgICBpZiggZWwuY2hlY2tlZCApIHtcbiAgICAgICAgICAgIGRhdGFbZWwubmFtZV0gPSBlbC52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGF0YVtlbC5uYW1lXSA9IGVsLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gX2RvbTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9uOiBmdW5jdGlvbiAoZWwsIGV2ZW50TmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSkge1xuICAgIGlmKCB0eXBlb2YgZWwgPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGVsLCBldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgIH1cbiAgICByZXR1cm4gZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICB9LFxuICBvZmY6IGZ1bmN0aW9uIChlbCwgZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKSB7XG4gICAgaWYoIHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgfVxuICAgIHJldHVybiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSk7XG4gIH0sXG4gIHRyaWdnZXJFdmVudDogZG9jdW1lbnQuY3JlYXRlRXZlbnQgPyBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJIVE1MRXZlbnRzXCIpO1xuICAgIGV2ZW50LmRhdGEgPSBkYXRhO1xuICAgIGV2ZW50LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9IDogZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCk7XG4gICAgZXZlbnQuZGF0YSA9IGRhdGE7XG4gICAgZWxlbWVudC5maXJlRXZlbnQoXCJvblwiICsgZXZlbnROYW1lLCBldmVudCk7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG59O1xuIiwiXG52YXIgbm9ybWFsaXplID0ge1xuICBpc1RvdWNoRGV2aWNlOiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gIGlzTWFjOiAvXk1hYy8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pLFxuICBpc0FuZHJvaWQ6IC9eQW5kcm9pZC8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pXG59O1xuXG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCggbm9ybWFsaXplLmlzVG91Y2hEZXZpY2UgPyAndG91Y2gnIDogJ25vLXRvdWNoJyApO1xuaWYoIG5vcm1hbGl6ZS5pc01hYyApIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLW1hYycpO1xufVxuaWYoIG5vcm1hbGl6ZS5pc0FuZHJvaWQgKSB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1hbmRyb2lkJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplO1xuIiwiXG5mdW5jdGlvbiBnZXRTY3JvbGxSb290ICgpIHtcbiAgICBpZiggZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCApIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfSBlbHNlIGlmICggZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcbiAgICB9XG5cbiAgICB2YXIgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgYm9keSA9IGRvY3VtZW50LmJvZHksXG4gICAgICAgIGNhY2hlVG9wID0gKCh0eXBlb2Ygd2luZG93LnBhZ2VZT2Zmc2V0ICE9PSBcInVuZGVmaW5lZFwiKSA/IHdpbmRvdy5wYWdlWU9mZnNldCA6IG51bGwpIHx8IGJvZHkuc2Nyb2xsVG9wIHx8IGh0bWwuc2Nyb2xsVG9wLCAvLyBjYWNoZSB0aGUgd2luZG93J3MgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICAgICAgcm9vdDtcblxuICAgIGh0bWwuc2Nyb2xsVG9wID0gYm9keS5zY3JvbGxUb3AgPSBjYWNoZVRvcCArIChjYWNoZVRvcCA+IDApID8gLTEgOiAxO1xuICAgIC8vIGZpbmQgcm9vdCBieSBjaGVja2luZyB3aGljaCBzY3JvbGxUb3AgaGFzIGEgdmFsdWUgbGFyZ2VyIHRoYW4gdGhlIGNhY2hlLlxuICAgIHJvb3QgPSAoaHRtbC5zY3JvbGxUb3AgIT09IGNhY2hlVG9wKSA/IGh0bWwgOiBib2R5O1xuXG4gICAgcm9vdC5zY3JvbGxUb3AgPSBjYWNoZVRvcDsgLy8gcmVzdG9yZSB0aGUgd2luZG93J3Mgc2Nyb2xsIHBvc2l0aW9uIHRvIGNhY2hlZCB2YWx1ZVxuXG4gICAgcmV0dXJuIHJvb3Q7IC8vIHJldHVybiB0aGUgc2Nyb2xsaW5nIHJvb3QgZWxlbWVudFxufVxuXG52YXIgcmVhZHkgPSByZXF1aXJlKCcuLi9mbi9yZWFkeScpLFxuXHRzY3JvbGxSb290ID0geyBzY3JvbGxUb3A6IDAgfVxuICAgIHNjcm9sbCA9IHtcbiAgICAgIHJvb3Q6IHNjcm9sbFJvb3QsXG4gICAgICBvbjogZnVuY3Rpb24gKCBoYW5kbGVyLCB1c2VDYXB0dXJlICkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciwgdXNlQ2FwdHVyZSk7XG4gICAgICB9LFxuICAgICAgb2ZmOiBmdW5jdGlvbiAoIGhhbmRsZXIsIHVzZUNhcHR1cmUgKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyLCB1c2VDYXB0dXJlKTtcbiAgICAgIH0sXG4gICAgICB0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNjcm9sbC5yb290LnNjcm9sbFRvcDtcbiAgICAgIH0sXG4gICAgICBnb3RvOiBmdW5jdGlvbiAoIHZhbHVlICkge1xuICAgICAgICBzY3JvbGwucm9vdC5zY3JvbGxUb3AgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIHNjcm9sbFJvb3QgPSBnZXRTY3JvbGxSb290KCk7XG4gIHNjcm9sbC5yb290ID0gc2Nyb2xsUm9vdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNjcm9sbDtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2Nyb2xsKSB7XG5cblx0dmFyIGFuaW1hdGUgPSByZXF1aXJlKCcuLi8uLi9kZWZlcnJlZC9hbmltYXRlJyksXG5cdFx0XHQkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKSxcblx0XHRcdG5vb3AgPSBmdW5jdGlvbigpIHt9LFxuXHRcdFx0c2Nyb2xsQW5pbWF0aW9uID0gYW5pbWF0ZShub29wLCAwKSxcblx0XHRcdGF1eDtcblxuXHRzY3JvbGwuYW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzY3JvbGxBbmltYXRpb247XG5cdH07XG5cblx0c2Nyb2xsLmFuaW1hdGVUbyA9IGZ1bmN0aW9uICh2YWx1ZSwgY2IsIGR1cmF0aW9uICkge1xuXHRcdGlmKCB2YWx1ZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdCAgcmV0dXJuICRxLnJlamVjdCgpO1xuXHRcdH1cblx0XHRpZiggdmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50ICkge1xuXHRcdCAgdmFsdWUgPSB2YWx1ZS5vZmZzZXRUb3A7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBjYiA9PT0gJ251bWJlcicgKSB7XG5cdFx0ICBhdXggPSBjYjtcblx0XHQgIGR1cmF0aW9uID0gY2I7XG5cdFx0ICBjYiA9IGF1eDtcblx0XHR9XG5cblx0XHR2YXIgc2Nyb2xsRnJvbSA9IHNjcm9sbC50b3AoKSxcblx0XHQgICAgc2Nyb2xsRGVsdGEgPSB2YWx1ZSAtIHNjcm9sbEZyb207XG5cblx0XHRzY3JvbGxBbmltYXRpb24uc3RvcCgpO1xuXHRcdHNjcm9sbC5pbkFuaW1hdGlvbiA9IHRydWU7XG5cdFx0c2Nyb2xsQW5pbWF0aW9uID0gYW5pbWF0ZShmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcblx0XHQgIHNjcm9sbC5nb3RvKCBzY3JvbGxGcm9tICsgc2Nyb2xsRGVsdGEqcHJvZ3Jlc3MgKTtcblx0XHR9LCBmdW5jdGlvbiAoKSB7XG5cdFx0ICBzY3JvbGwuaW5BbmltYXRpb24gPSBmYWxzZTtcblx0XHQgIChjYiB8fCBfLm5vb3ApKCk7XG5cdFx0fSwgZHVyYXRpb24gfHwgMzUwLCAnZWFzZS1vdXQnKTtcblxuXHRcdHJldHVybiBzY3JvbGxBbmltYXRpb247XG5cdH07XG5cblx0cmV0dXJuIHNjcm9sbDtcbn07XG4iLCJcbnZhciBzY3JvbGwgPSByZXF1aXJlKCcuLi9zY3JvbGwnKTtcblxucmVxdWlyZSgnLi90b3AtY2xhc3MnKShzY3JvbGwpO1xucmVxdWlyZSgnLi9hbmltYXRlJykoc2Nyb2xsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGw7IiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzY3JvbGwpIHtcblxuXHR2YXIgb25TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzY3JvbGwtdG9wJywgIXNjcm9sbC50b3AoKSApO1xuXHQgICAgfTtcblxuXHRzY3JvbGwub24ob25TY3JvbGwpO1xuXG5cdHJlcXVpcmUoJy4uLy4uL2ZuL3JlYWR5Jykob25TY3JvbGwpO1xuXG59O1xuIiwiXG5yZXF1aXJlKCcuL3NhbmRib3gnKShmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBpZiggZG9jdW1lbnQuZG9jdW1lbnRNb2RlIHx8IC9FZGdlXFwvLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICkge1xuICAvLyAgIHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKS51c2VQb2x5ZmlsbCgpO1xuICAvLyB9XG5cbiAgdmFyIGFwbGF6YW1lID0gcmVxdWlyZSgnLi9jb3JlL2NvcmUnKTtcblxuICBhcGxhemFtZS5jaGVja291dCA9IHJlcXVpcmUoJy4vYXBwcy9jaGVja291dCcpO1xuICBhcGxhemFtZS5idXR0b24gPSByZXF1aXJlKCcuL2FwcHMvYnV0dG9uJyk7XG4gIGFwbGF6YW1lLnNpbXVsYXRvciA9IHJlcXVpcmUoJy4vYXBwcy9zaW11bGF0b3InKTtcbiAgYXBsYXphbWUubW9kYWwgPSByZXF1aXJlKCcuL2FwcHMvbW9kYWwnKTtcblxuICBnbG9iYWwuYXBsYXphbWUgPSBhcGxhemFtZTtcblxuICBhcGxhemFtZS5pbmZvID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhcGk6IHJlcXVpcmUoJy4vY29yZS9hcGknKSxcbiAgICAgIGxvZzogcmVxdWlyZSgnLi90b29scy9sb2cnKS5oaXN0b3J5LFxuICAgICAgdmVyc2lvbjogcmVxdWlyZSgnLi4vLnRtcC9hcGxhemFtZS12ZXJzaW9uJylcbiAgICB9O1xuICB9O1xuXG4gIGFwbGF6YW1lLmxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXF1aXJlKCcuL3Rvb2xzL2xvZycpLmhpc3RvcnkuZm9yRWFjaChmdW5jdGlvbiAobCkge1xuICAgICAgY29uc29sZS5sb2cobC50aW1lKTtcbiAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGwuYXJncyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVxdWlyZSgnLi9hcHBzL2h0dHAtc2VydmljZScpO1xuXG4gIHJlcXVpcmUoJy4vbG9hZGVycy9kYXRhLWFwbGF6YW1lJykoZ2xvYmFsLmFwbGF6YW1lKTtcbiAgYXBsYXphbWUuXy5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJ1dHRvbnNMb29rdXAgPSByZXF1aXJlKCcuL2xvYWRlcnMvZGF0YS1idXR0b24nKShnbG9iYWwuYXBsYXphbWUpLFxuICAgICAgICB3aWRnZXRzTG9va3VwID0gcmVxdWlyZSgnLi9sb2FkZXJzL2RhdGEtc2ltdWxhdG9yJykoZ2xvYmFsLmFwbGF6YW1lKSxcbiAgICAgICAgY2IgPSByZXF1aXJlKCcuL2NvcmUvYXBpJykuY2FsbGJhY2s7XG5cbiAgICBpZiggY2IgKSB7XG4gICAgICBpZiggIHR5cGVvZiBnbG9iYWxbY2JdICE9PSAnZnVuY3Rpb24nICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIHNob3VsZCBiZSBhIGdsb2JhbCBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgICAgZ2xvYmFsW2NiXShhcGxhemFtZSk7XG4gICAgICBidXR0b25zTG9va3VwKCk7XG4gICAgICB3aWRnZXRzTG9va3VwKCk7XG4gICAgfVxuXG4gIH0pO1xuXG4gIC8vIGdsb2JhbC4kcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKTtcbiAgLy8gZ2xvYmFsLiRodHRwID0gcmVxdWlyZSgnaHR0cC1icm93c2VyJyk7XG5cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBpSHR0cCA9IHJlcXVpcmUoJy4uL2NvcmUvYXBpLWh0dHAnKSxcbiAgICBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKTtcblxuZnVuY3Rpb24gZ2V0Q2FydFByaWNlICgpIHtcbiAgcmV0dXJuIF8ucGFyc2VQcmljZSggZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsX3ByaWNlJykudGV4dENvbnRlbnQgKTtcbn1cblxuZnVuY3Rpb24gYnV0dG9uIChvcHRpb25zKSB7XG5cbiAgaWYoICFvcHRpb25zICkge1xuICAgIHRocm93IG5ldyBFcnJvcignYXBsYXphbWUuYnV0dG9uIHJlcXVpcmVzIHBhcmFtZXRlcnMnKTtcbiAgfVxuXG4gIGlmKCAhb3B0aW9ucy5pZCAmJiAhb3B0aW9ucy5idXR0b24gJiYgIW9wdGlvbnMuc2VsZWN0b3IgKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2J1dHRvbiBjYW4gbm90IGJlIGlkZW50aWZpZWQgKCBwbGVhc2UgdXNlIC0gaWQ6IFxcJ2J1dHRvbi1pZFxcJyAtIG9yIC0gYnV0dG9uOiBcXCcjYnV0dG9uLWlkXFwnIC0gb3IgLSBzZWxlY3RvcjogXFwnI2J1dHRvbi1pZFxcJyAocmVjb21lbmRlZCkgLSApJyk7XG4gIH1cblxuICBpZiggZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsX3ByaWNlJykgKSB7XG4gICAgb3B0aW9ucy5hbW91bnQgPSBnZXRDYXJ0UHJpY2UoKSB8fCBvcHRpb25zLmFtb3VudDtcblxuICAgIGlmKCAhYnV0dG9uLndhdGNoaW5nICkge1xuICAgICAgYnV0dG9uLndhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIG9wdGlvbnMubGFzdFByaWNlID0gb3B0aW9ucy5hbW91bnQ7XG5cbiAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFtb3VudCA9IGdldENhcnRQcmljZSgpO1xuICAgICAgICBpZiggYW1vdW50ICYmIGFtb3VudCAhPT0gb3B0aW9ucy5sYXN0UHJpY2UgKSB7XG4gICAgICAgICAgb3B0aW9ucy5hbW91bnQgPSBhbW91bnQ7XG4gICAgICAgICAgb3B0aW9ucy5sYXN0UHJpY2UgPSBvcHRpb25zLmFtb3VudDtcbiAgICAgICAgICBvcHRpb25zLmZvcmNlVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICBidXR0b24ob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0sIDQwMCk7XG4gICAgfVxuICB9XG5cbiAgaWYoICFvcHRpb25zLmFtb3VudCApe1xuICAgIHRocm93IG5ldyBFcnJvcignYnV0dG9uIGFtb3VudCBtaXNzaW5nJyk7XG4gIH1cblxuICB2YXIgZWxlbWVudHMsIGVsQnV0dG9uO1xuXG4gIGlmKCBvcHRpb25zLmJ1dHRvbiApIHtcbiAgICBlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5idXR0b24pO1xuICB9IGVsc2UgaWYoIG9wdGlvbnMuaWQgKSB7XG4gICAgZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAoIC9eIy8udGVzdChvcHRpb25zLmlkKSA/ICcnIDogJyMnICkgKyBvcHRpb25zLmlkICk7XG4gIH1cblxuICBlbGVtZW50cyA9IGVsQnV0dG9uID8gW2VsQnV0dG9uXSA6IFtdO1xuXG4gIGlmKCBvcHRpb25zLnNlbGVjdG9yICkge1xuICAgIFtdLnB1c2guYXBwbHkoIGVsZW1lbnRzLCBfLmNzc1F1ZXJ5KG9wdGlvbnMuc2VsZWN0b3IpICk7XG4gIH1cblxuICBpZiggb3B0aW9ucy5kZXNjcmlwdGlvbiApIHtcbiAgICBbXS5wdXNoLmFwcGx5KCBlbGVtZW50cywgXy5jc3NRdWVyeShvcHRpb25zLmRlc2NyaXB0aW9uKSApO1xuICB9XG5cbiAgZWxCdXR0b24gPSBlbEJ1dHRvbiB8fCBlbGVtZW50c1swXTtcblxuICBpZiggIW9wdGlvbnMuJCRydW5uaW5nICYmIG9wdGlvbnMuc2VsZWN0b3IgKSB7XG4gICAgb3B0aW9ucy4kJHJ1bm5pbmcgPSB0cnVlO1xuICB9XG5cbiAgaWYoICFvcHRpb25zLmZvcmNlVXBkYXRlICYmICggIWVsZW1lbnRzLmxlbmd0aCB8fCBfLmVsZW1lbnREYXRhKGVsQnV0dG9uLCAnYnV0dG9uSW5pdGlhbGl6ZWQnKSApICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG9wdGlvbnMuZm9yY2VVcGRhdGUgPSBmYWxzZTtcblxuICBpZiggZWxCdXR0b24gJiYgb3B0aW9ucy5wYXJlbnQgKSB7XG4gICAgdmFyIHBhcmVudCA9IGVsQnV0dG9uLnBhcmVudEVsZW1lbnQ7XG5cbiAgICB3aGlsZSggcGFyZW50ICYmIHBhcmVudCAhPT0gZG9jdW1lbnQuYm9keSApIHtcbiAgICAgIGlmKCBwYXJlbnQubWF0Y2hlc1NlbGVjdG9yKG9wdGlvbnMucGFyZW50KSApIHtcbiAgICAgICAgZWxlbWVudHMucHVzaChwYXJlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYoIGVsLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJyApIHtcbiAgICAgIGVsLl9fZGlzcGxheSA9IGVsLnN0eWxlLmRpc3BsYXk7XG4gICAgfVxuICAgIGVsLl9faW5wdXQgPSAoIGVsLm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IGVsLm5vZGVOYW1lID09PSAnQlVUVE9OJyApID8gZWwgOiBlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCwgYnV0dG9uJyk7XG5cbiAgICBpZiggZWwuX19pbnB1dCApIHtcbiAgICAgIGVsLl9faW5wdXQuX19kaXNhYmxlZCA9IGVsLl9faW5wdXQuX19kaXNhYmxlZCA9PT0gdW5kZWZpbmVkID8gZWwuX19pbnB1dC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgOiBlbC5fX2lucHV0Ll9fZGlzYWJsZWQ7XG4gICAgICBlbC5fX2lucHV0Ll9fY2hlY2tlZCA9IGVsLl9faW5wdXQuX19jaGVja2VkID09PSB1bmRlZmluZWQgPyBlbC5fX2lucHV0LmNoZWNrZWQgOiBlbC5fX2lucHV0Ll9fY2hlY2tlZDtcbiAgICAgIGlmKCBlbC5fX2lucHV0Ll9fY2hlY2tlZCAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICBlbC5fX2lucHV0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmKCAhZWwuX19pbnB1dC5fX2Rpc2FibGVkICkge1xuICAgICAgICBlbC5fX2lucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG5cbiAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBfLmVsZW1lbnREYXRhKGVsLCAnYnV0dG9uSW5pdGlhbGl6ZWQnLCB0cnVlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGJ1dHRvbi5jaGVjayhvcHRpb25zLCBmdW5jdGlvbiAoYWxsb3dlZCkge1xuICAgIGlmKCBhbGxvd2VkICkge1xuICAgICAgdmFyIGVsbXMgPSBlbGVtZW50cy5zbGljZSgpO1xuICAgICAgZWxtcy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX19kaXNwbGF5O1xuICAgICAgICBpZiAoIGVsLl9faW5wdXQgKSB7XG4gICAgICAgICAgaWYoICFlbC5fX2lucHV0Ll9fZGlzYWJsZWQgJiYgZWwuX19pbnB1dC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgKSB7XG4gICAgICAgICAgICBlbC5fX2lucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoIGVsLl9faW5wdXQuX19jaGVja2VkICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICBlbC5fX2lucHV0LmNoZWNrZWQgPSBlbC5fX2lucHV0Ll9fY2hlY2tlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuYnV0dG9uLmNoZWNrID0gZnVuY3Rpb24gKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gIGlmKCBfLmlzU3RyaW5nKG9wdGlvbnMpIHx8IF8uaXNOdW1iZXIob3B0aW9ucykgKSB7XG4gICAgb3B0aW9ucyA9IHsgYW1vdW50OiBOdW1iZXIob3B0aW9ucykgfTtcbiAgfVxuXG4gIHZhciBwYXJhbXMgPSB7XG4gICAgYW1vdW50OiBvcHRpb25zLmFtb3VudCxcbiAgICBjdXJyZW5jeTogb3B0aW9ucy5jdXJyZW5jeSB8fCAnRVVSJ1xuICB9O1xuXG4gIGlmKCBvcHRpb25zLmNvdW50cnkgKSB7XG4gICAgcGFyYW1zLmNvdW50cnkgPSBvcHRpb25zLmNvdW50cnk7XG4gIH1cblxuICB2YXIgY2hlY2tQcm9taXNlID0gYXBpSHR0cC5nZXQoJ2NoZWNrb3V0L2J1dHRvbicsIHsgcGFyYW1zOiBwYXJhbXMgfSk7XG5cbiAgaWYoIF8uaXNGdW5jdGlvbihjYWxsYmFjaykgKSB7XG4gICAgY2hlY2tQcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7IGNhbGxiYWNrKHJlc3BvbnNlLmRhdGEuYWxsb3dlZCwgcmVzcG9uc2UpOyB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHsgY2FsbGJhY2soZmFsc2UsIHJlc3BvbnNlKTsgfSk7XG4gIH1cblxuICByZXR1cm4gY2hlY2tQcm9taXNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBidXR0b247XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcGkgPSByZXF1aXJlKCcuLi9jb3JlL2FwaScpLFxuICAgIF8gPSByZXF1aXJlKCcuLi90b29scy90b29scycpLFxuICAgIGh0dHAgPSByZXF1aXJlKCdodHRwLWJyb3dzZXInKSxcbiAgICAkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKSxcbiAgICBjc3NIYWNrID0gcmVxdWlyZSgnLi4vdG9vbHMvY3NzLWhhY2snKTtcblxuZnVuY3Rpb24gY2hlY2tvdXQgKG9wdGlvbnMpIHtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGJhc2VDaGVja291dCA9ICggb3B0aW9ucy5ob3N0ID09PSAnbG9jYXRpb24nID8gKCBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy8nICkgOiBvcHRpb25zLmhvc3QgKSB8fCAnaHR0cHM6Ly9hcGxhemFtZS5jb20vc3RhdGljL2NoZWNrb3V0Lyc7XG5cbiAgaWYoICEvXFwvJC8udGVzdChiYXNlQ2hlY2tvdXQpICkge1xuICAgIGJhc2VDaGVja291dCArPSAnLyc7XG4gIH1cblxuICB2YXIgb24gPSB7fSxcbiAgICAgIGlmcmFtZVNyYyA9IGJhc2VDaGVja291dCArICdpZnJhbWUuaHRtbD8nICsgbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICBlcnJvckxvYWRpbmcgPSBmYWxzZSxcbiAgICAgIHRtcE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIGNzc092ZXJsYXkgPSBjc3NIYWNrKCdvdmVybGF5JyksXG4gICAgICBjc3NCbHVyID0gY3NzSGFjaygnYmx1cicpLFxuICAgICAgY3NzTG9nbyA9IGNzc0hhY2soJ2xvZ28nKSxcbiAgICAgIGNzc01vZGFsID0gY3NzSGFjaygnbW9kYWwnKTtcblxuICBpZiggb3B0aW9ucy5tZXJjaGFudC5vblN1Y2Nlc3MgKSB7XG4gICAgb24uc3VjY2VzcyA9IG9wdGlvbnMubWVyY2hhbnQub25TdWNjZXNzO1xuICAgIGRlbGV0ZSBvcHRpb25zLm1lcmNoYW50Lm9uU3VjY2VzcztcbiAgfVxuICBpZiggb3B0aW9ucy5tZXJjaGFudC5vbkVycm9yICkge1xuICAgIG9uLmVycm9yID0gb3B0aW9ucy5tZXJjaGFudC5vbkVycm9yO1xuICAgIGRlbGV0ZSBvcHRpb25zLm1lcmNoYW50Lm9uRXJyb3I7XG4gIH1cbiAgaWYoIG9wdGlvbnMubWVyY2hhbnQub25EaXNtaXNzICkge1xuICAgIG9uLmRpc21pc3MgPSBvcHRpb25zLm1lcmNoYW50Lm9uRGlzbWlzcztcbiAgICBkZWxldGUgb3B0aW9ucy5tZXJjaGFudC5vbkRpc21pc3M7XG4gIH1cblxuICB0bXBPdmVybGF5LmNsYXNzTmFtZSA9ICdhcGxhemFtZS1vdmVybGF5IGFwbGF6YW1lLW92ZXJsYXktc2hvdyc7XG5cbiAgY3NzT3ZlcmxheS5oYWNrKHRydWUpO1xuICBjc3NMb2dvLmhhY2sodHJ1ZSk7XG4gIGNzc0JsdXIuaGFjayh0cnVlKTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiggIWVycm9yTG9hZGluZyApIHtcbiAgICAgIF8uYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLWJsdXInKTtcbiAgICB9XG4gIH0sIDApO1xuXG4gIHRtcE92ZXJsYXkuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJhcGxhemFtZS1sb2dvLXdyYXBwZXJcIj48ZGl2IGNsYXNzPVwibG9nby1hcGxhemFtZVwiIHN0eWxlPVwid2lkdGg6IDE1MHB4OyBoZWlnaHQ6IDE1MHB4O1wiPicgK1xuICByZXF1aXJlKCcuL2xvYWRpbmctc3ZnJykgKyAnPC9kaXY+PGRpdiBjbGFzcz1cImFwbGF6YW1lLW92ZXJsYXktbG9hZGluZy10ZXh0XCI+Q2FyZ2FuZG8gcGFzYXJlbGEgZGUgcGFnby4uLjwvZGl2PjwvZGl2Pic7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0bXBPdmVybGF5KTtcblxuICB2YXIgbG9hZGluZ1RleHQgPSB0bXBPdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5hcGxhemFtZS1vdmVybGF5LWxvYWRpbmctdGV4dCcpO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGlmKCAhZXJyb3JMb2FkaW5nICkge1xuICAgICAgdG1wT3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcubG9nby1hcGxhemFtZScpLmNsYXNzTmFtZSArPSAnIGFuaW1hdGUnO1xuICAgIH1cbiAgfSwgMjAwKTtcblxuICBvcHRpb25zLmFwaSA9IF8uY29weShhcGkpO1xuXG4gIHJldHVybiBodHRwKCBpZnJhbWVTcmMgKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgdmFyIGlmcmFtZUh0bWwgPSByZXNwb25zZS5kYXRhLnJlcGxhY2UoLzxoZWFkXFw+LywgJzxoZWFkPjxiYXNlIGhyZWY9XCInICsgYmFzZUNoZWNrb3V0ICsgJ1wiIC8+JyksXG4gICAgICAgICAgaWZyYW1lID0gXy5nZXRJRnJhbWUoe1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBodHRwQ2hlY2tvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3RhcnRlZCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICByZXR1cm4gaHR0cC5hcHBseSh0aGlzLCBhcmd1bWVudHMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBhcGxhemFtZTogJ2NoZWNrb3V0JyxcbiAgICAgICAgICAgICAgICBldmVudDogJ2h0dHAtc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgc3RhcnRlZDogc3RhcnRlZCxcbiAgICAgICAgICAgICAgICBlbGFwc2VkOiBEYXRlLm5vdygpIC0gc3RhcnRlZCxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogaHR0cC5wbGFpblJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGFwbGF6YW1lOiAnY2hlY2tvdXQnLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnaHR0cC1lcnJvcicsXG4gICAgICAgICAgICAgICAgc3RhcnRlZDogc3RhcnRlZCxcbiAgICAgICAgICAgICAgICBlbGFwc2VkOiBEYXRlLm5vdygpIC0gc3RhcnRlZCxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogaHR0cC5wbGFpblJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICAgICAgICB0aHJvdyByZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG5cbiAgICAgIGlmcmFtZS5jbGFzc05hbWUgPSAnYXBsYXphbWUtbW9kYWwnO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICBpZnJhbWUuc3JjID0gaWZyYW1lU3JjO1xuXG4gICAgICBpZiggIW9wdGlvbnMubWVyY2hhbnQgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBtZXJjaGFudCBwYXJhbWV0ZXJzJyk7XG4gICAgICB9XG5cbiAgICAgIGlmKCAnc2FuZGJveCcgaW4gb3B0aW9ucy5tZXJjaGFudCApIHtcbiAgICAgICAgYXBpLnNhbmRib3ggPSBvcHRpb25zLm1lcmNoYW50LnNhbmRib3g7XG4gICAgICB9XG5cbiAgICAgIGlmKCAhb3B0aW9ucy5tZXJjaGFudC5wdWJsaWNfYXBpX2tleSApIHtcbiAgICAgICAgaWYoIGFwaS5wdWJsaWNLZXkgKSB7XG4gICAgICAgICAgb3B0aW9ucy5tZXJjaGFudC5wdWJsaWNfYXBpX2tleSA9IGFwaS5wdWJsaWNLZXk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHB1YmxpYyBrZXknKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvcHRpb25zLm9yaWdpbiA9IHtcbiAgICAgICAgaHJlZjogbG9jYXRpb24uaHJlZixcbiAgICAgICAgaG9zdDogbG9jYXRpb24uaG9zdCxcbiAgICAgICAgcHJvdG9jb2w6IGxvY2F0aW9uLnByb3RvY29sLFxuICAgICAgICBvcmlnaW46IGxvY2F0aW9uLm9yaWdpblxuICAgICAgfTtcblxuICAgICAgdmFyIG9uTWVzc2FnZSA9IGZ1bmN0aW9uIChlLCBtZXNzYWdlKSB7XG5cbiAgICAgICAgc3dpdGNoKCBtZXNzYWdlLmV2ZW50ICkge1xuICAgICAgICAgIGNhc2UgJ21lcmNoYW50JzpcbiAgICAgICAgICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgICAgIGUuc291cmNlLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgY2hlY2tvdXQ6IG9wdGlvbnNcbiAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzaG93LWlmcmFtZSc6XG4gICAgICAgICAgICBfLnJlbW92ZUNsYXNzKGlmcmFtZSwgJ2hpZGUnKTtcbiAgICAgICAgICAgIGNzc01vZGFsLmhhY2sodHJ1ZSk7XG4gICAgICAgICAgICBjc3NPdmVybGF5LmhhY2soZmFsc2UpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0bXBPdmVybGF5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2xvYWRpbmctdGV4dCc6XG4gICAgICAgICAgICBsb2FkaW5nVGV4dC50ZXh0Q29udGVudCA9IG1lc3NhZ2UudGV4dDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Ryb3AtYmx1cic6XG4gICAgICAgICAgICBfLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS1ibHVyJyk7XG4gICAgICAgICAgICBfLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS11bmJsdXInKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjc3NCbHVyLmhhY2soZmFsc2UpO1xuICAgICAgICAgICAgICBfLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS1ibHVyJyk7XG4gICAgICAgICAgICAgIF8ucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLXVuYmx1cicpO1xuICAgICAgICAgICAgfSwgNjAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NvbmZpcm0nOlxuICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgXy5sb2coJ2FwbGF6YW1lLmNoZWNrb3V0OmNvbmZpcm0nLCBtZXNzYWdlKTtcblxuICAgICAgICAgICAgaHR0cENoZWNrb3V0KCBvcHRpb25zLm1lcmNoYW50LmNvbmZpcm1hdGlvbl91cmwsIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgIGRhdGE6IG1lc3NhZ2UuZGF0YSxcbiAgICAgICAgICAgICAgcGFyYW1zOiBfLmV4dGVuZChtZXNzYWdlLnBhcmFtcyB8fCB7fSwge1xuICAgICAgICAgICAgICAgIG9yZGVyX2lkOiBtZXNzYWdlLmRhdGEuY2hlY2tvdXRfdG9rZW4sXG4gICAgICAgICAgICAgICAgY2hlY2tvdXRfdG9rZW46IG1lc3NhZ2UuZGF0YS5jaGVja291dF90b2tlblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgZS5zb3VyY2UucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGFwbGF6YW1lOiAnY2hlY2tvdXQnLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY29uZmlybWF0aW9uJyxcbiAgICAgICAgICAgICAgICByZXN1bHQ6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogaHR0cC5wbGFpblJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBlLnNvdXJjZS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgYXBsYXphbWU6ICdjaGVja291dCcsXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdjb25maXJtYXRpb24nLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogaHR0cC5wbGFpblJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25maXJtYXRpb25fdXJsXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjbG9zZSc6XG4gICAgICAgICAgICBpZiggaWZyYW1lICkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgICAgICAgICAgIGNzc01vZGFsLmhhY2soZmFsc2UpO1xuICAgICAgICAgICAgICBpZnJhbWUgPSBudWxsO1xuXG4gICAgICAgICAgICAgIF8ub25NZXNzYWdlLm9mZignY2hlY2tvdXQnLCBvbk1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgIHN3aXRjaCggbWVzc2FnZS5yZXN1bHQgKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIG9uLnN1Y2Nlc3MgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uLnN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiggIW9wdGlvbnMubWVyY2hhbnQuc3VjY2Vzc191cmwgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc3VjY2Vzc191cmwgbWlzc2luZycpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShvcHRpb25zLm1lcmNoYW50LnN1Y2Nlc3NfdXJsKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NhbmNlbCc6XG4gICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIG9uLmVycm9yID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgICAgICAgICAgICAgICBvbi5lcnJvcigpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKCAhb3B0aW9ucy5tZXJjaGFudC5jYW5jZWxfdXJsICkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbmNlbF91cmwgbWlzc2luZycpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShvcHRpb25zLm1lcmNoYW50LmNhbmNlbF91cmwpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZGlzbWlzcyc6XG4gICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIG9uLmRpc21pc3MgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uLmRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2Uob3B0aW9ucy5tZXJjaGFudC5jaGVja291dF91cmwgfHwgJy8nKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgXy5vbk1lc3NhZ2UoJ2NoZWNrb3V0Jywgb25NZXNzYWdlKTtcblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcignY2FuIG5vdCBjb25uZWN0IHRvICcgKyBiYXNlQ2hlY2tvdXQpO1xuICAgICAgZXJyb3JMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgY29uc29sZS5lcnJvcignQXBsYXphbWUgJyArIHJlYXNvbik7XG5cbiAgICAgIF8ucmVtb3ZlQ2xhc3ModG1wT3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcubG9nby1hcGxhemFtZScpLCAnYW5pbWF0ZScpO1xuICAgICAgbG9hZGluZ1RleHQuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJ0ZXh0LWVycm9yXCI+RXJyb3IgY2FyZ2FuZG8gcGFzYXJlbGEgZGUgcGFnbzwvZGl2Pjxici8+PGRpdj48YSBocmVmPVwibWFpbHRvOnNvcG9ydGVAYXBsYXphbWUuY29tP3N1YmplY3Q9JyArIGVuY29kZVVSSSgnQ2hlY2tvdXQgZXJyb3I6ICcgKyByZWFzb24pICsgJ1wiPnNvcG9ydGVAYXBsYXphbWUuY29tPC9hPjwvZGl2Pic7XG4gICAgICBsb2FkaW5nVGV4dC5zdHlsZS5saW5lSGVpZ2h0ID0gJzEuNSc7XG5cbiAgICAgIChvcHRpb25zLm9uRXJyb3IgfHwgXy5ub29wKShyZWFzb24pO1xuICAgIH0pO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tvdXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKSxcbiAgICBodHRwID0gcmVxdWlyZSgnaHR0cC1icm93c2VyJyk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NSZXNwb25zZShyZXN1bHQsIG1lc3NhZ2UsIG1lc3NhZ2VTcmMsIHN0YXJ0ZWQpIHtcblxuICByZXR1cm4gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICB2YXIgcmVzcG9uc2VwID0gaHR0cC5wbGFpblJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICByZXNwb25zZXAuY29uZmlnID0gbWVzc2FnZTtcblxuICAgIG1lc3NhZ2VTcmMucG9zdE1lc3NhZ2Uoe1xuICAgICAgYXBsYXphbWU6ICdodHRwJyxcbiAgICAgIGV2ZW50OiAncmVzcG9uc2UnLFxuICAgICAgc3RhcnRlZDogc3RhcnRlZCxcbiAgICAgIGVsYXBzZWQ6IERhdGUubm93KCkgLSBzdGFydGVkLFxuICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICByZXNwb25zZTogcmVzcG9uc2VwXG4gICAgfSwgJyonKTtcbiAgfTtcbn1cblxuXy5vbk1lc3NhZ2UoJ2h0dHAnLCBmdW5jdGlvbiAoZSwgbWVzc2FnZSkge1xuXG4gIHZhciBzdGFydGVkID0gRGF0ZS5ub3coKTtcblxuICBodHRwKCBtZXNzYWdlLnVybCwgbWVzc2FnZSApXG4gICAgLnRoZW4oXG4gICAgICBwcm9jZXNzUmVzcG9uc2UoJ3N1Y2Nlc3MnLCBtZXNzYWdlLCBlLnNvdXJjZSwgc3RhcnRlZCksXG4gICAgICBwcm9jZXNzUmVzcG9uc2UoJ2Vycm9yJywgbWVzc2FnZSwgZS5zb3VyY2UsIHN0YXJ0ZWQpXG4gICAgKTtcblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0geyByZWFkeTogdHJ1ZSB9O1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9ICc8c3ZnIGNsYXNzPVwibGluZS1zaG9ydFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj4nICtcbic8cGF0aCAgZD1cIk0zNi43ODgsODEuMDA4LDUwLDUwXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjZcIiBmaWxsPVwibm9uZVwiLz4nICtcbic8L3N2Zz4nICtcbic8c3ZnIGNsYXNzPVwic21pbGVcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+JyArXG4nPGcgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIGZpbGw9XCJub25lXCIgdHJhbnNmb3JtPVwibWF0cml4KDAuNzgwMzY2MzMsMCwwLDAuNzgwMzY2MzMsMTAuNTI2NTEyLDE4LjAwMzk5OClcIj4nICtcbic8cGF0aCBjbGFzcz1cInNtaWxlLW91dGxpbmVcIiBzdHJva2Utd2lkdGg9XCIxMlwiIGQ9XCJNNzUuMjQyLDU3LjUxYy01LjQzNSw3LjgzOS0xNC40OTgsMTIuOTcyLTI0Ljc2MSwxMi45NzItMTAuMjYyLDAtMTkuMzI1LTUuMTMyLTI0Ljc1OC0xMi45NzJcIi8+JyArXG4nPHBhdGggY2xhc3M9XCJzbWlsZS1saW5lXCIgc3Ryb2tlLXdpZHRoPVwiNy41XCIgZD1cIk03NS4yNDIsNTcuNTFjLTUuNDM1LDcuODM5LTE0LjQ5OCwxMi45NzItMjQuNzYxLDEyLjk3Mi0xMC4yNjIsMC0xOS4zMjUtNS4xMzItMjQuNzU4LTEyLjk3MlwiLz4nICtcbic8L2c+JyArXG4nPC9zdmc+JyArXG4nPHN2ZyBjbGFzcz1cImxpbmUtbGFyZ2VcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+JyArXG4nPHBhdGggc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTUwLDUwLDY2LjY4Nyw5Mi4yNjZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCI0XCIgc3Ryb2tlLWRhc2hhcnJheT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCI2XCIgZmlsbD1cIm5vbmVcIi8+JyArXG4nPC9zdmc+JztcbiIsIid1c2Ugc3RyaWN0Jztcblxud2luZG93Lm1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSB8fCB3aW5kb3cud2Via2l0TWF0Y2hNZWRpYSB8fCB3aW5kb3cubW96TWF0Y2hNZWRpYSB8fCB3aW5kb3cubXNNYXRjaE1lZGlhO1xuXG52YXIgYXBpID0gcmVxdWlyZSgnLi4vY29yZS9hcGknKSxcbiAgICBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKSxcbiAgICBjc3NIYWNrID0gcmVxdWlyZSgnLi4vdG9vbHMvY3NzLWhhY2snKSxcbiAgICBhcGxhemFtZVZlcnNpb24gPSByZXF1aXJlKCcuLi8uLi8udG1wL2FwbGF6YW1lLXZlcnNpb24nKSxcbiAgICBpc01vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcoIG1heC13aWR0aDogNzY3cHggKScpLFxuICAgIGxhc3RTY3JvbGxUb3A7XG5cbnZhciB0bXBPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgY3NzT3ZlcmxheSA9IGNzc0hhY2soJ292ZXJsYXknKSxcbiAgICBjc3NCbHVyID0gY3NzSGFjaygnYmx1cicpLFxuICAgIGNzc01vZGFsID0gY3NzSGFjaygnbW9kYWwnKTtcblxuZnVuY3Rpb24gbW9kYWwgKGNvbnRlbnQsIG9wdGlvbnMpIHtcblxuICBpZiggbW9kYWwuaWZyYW1lICkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwuaWZyYW1lKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGNzc092ZXJsYXkuaGFjayh0cnVlKTtcbiAgY3NzQmx1ci5oYWNrKHRydWUpO1xuICBjc3NNb2RhbC5oYWNrKHRydWUpO1xuXG4gIHRtcE92ZXJsYXkuY2xhc3NOYW1lID0gJ2FwbGF6YW1lLW92ZXJsYXkgYXBsYXphbWUtb3ZlcmxheS1zaG93JztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0bXBPdmVybGF5KTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBfLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS1ibHVyJyk7XG4gIH0sIDApO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBfLnJlbW92ZUNsYXNzKHRtcE92ZXJsYXksICdhcGxhemFtZS1vdmVybGF5LXNob3cnKTtcbiAgfSwgaXNNb2JpbGUubWF0Y2hlcyA/IDAgOiA2MDAgKTtcblxuICBtb2RhbC5pZnJhbWUgPSBfLmdldElGcmFtZSh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCdcbiAgICAgIH0pO1xuXG4gIG1vZGFsLmlmcmFtZS5jbGFzc05hbWUgPSAnYXBsYXphbWUtbW9kYWwnO1xuICAvLyBtb2RhbC5pZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbW9kYWwuaWZyYW1lLmNvbnRlbnQgPSBjb250ZW50O1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwuaWZyYW1lKTtcbiAgbW9kYWwuaWZyYW1lLnNyYyA9IGFwaS5zdGF0aWNVcmwgKyAnd2lkZ2V0cy9tb2RhbC9tb2RhbC5odG1sP3Y9JyArIGVuY29kZVVSSShhcGxhemFtZVZlcnNpb24pO1xufVxuXG5fLm9uTWVzc2FnZSgnbW9kYWwnLCBmdW5jdGlvbiAoZSwgbWVzc2FnZSkge1xuXG4gIHN3aXRjaCggbWVzc2FnZS5ldmVudCApIHtcbiAgICBjYXNlICdvcGVuJzpcbiAgICAgIG1vZGFsLnJlZmVycmVyID0gZS5zb3VyY2U7XG4gICAgICBtb2RhbC5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgIG1vZGFsKG1lc3NhZ2UuZGF0YSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdvcGVuaW5nJzpcbiAgICAgIG1vZGFsLmlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ29wZW5lZCc6XG4gICAgICBsYXN0U2Nyb2xsVG9wID0gXy5zY3JvbGxUb3AoKTtcbiAgICAgIGUuc291cmNlLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgYXBsYXphbWU6ICdtb2RhbCcsXG4gICAgICAgIGV2ZW50OiAnY29udGVudCcsXG4gICAgICAgIGNvbnRlbnQ6IG1vZGFsLmlmcmFtZS5jb250ZW50XG4gICAgICB9LCAnKicpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmVzb2x2ZWQnOlxuICAgICAgbW9kYWwucmVmZXJyZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBhcGxhemFtZTogJ21vZGFsJyxcbiAgICAgICAgZXZlbnQ6ICdyZXNvbHZlZCcsXG4gICAgICAgIG5hbWU6IG1vZGFsLm1lc3NhZ2UubmFtZSxcbiAgICAgICAgdmFsdWU6IG1lc3NhZ2UudmFsdWVcbiAgICAgIH0sICcqJyk7XG4gICAgICBkZWxldGUgbW9kYWwucmVmZXJyZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjbG9zaW5nJzpcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBtb2RhbC5pZnJhbWUub3ZlcmZsb3c7XG4gICAgICBfLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS1ibHVyJyk7XG4gICAgICBfLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS11bmJsdXInKTtcbiAgICAgIF8uYWRkQ2xhc3ModG1wT3ZlcmxheSwgJ2FwbGF6YW1lLW92ZXJsYXktaGlkZScpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNzc0JsdXIuaGFjayhmYWxzZSk7XG4gICAgICAgIF8ucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLXVuYmx1cicpO1xuICAgICAgfSwgaXNNb2JpbGUubWF0Y2hlcyA/IDAgOiA2MDAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjc3NNb2RhbC5oYWNrKGZhbHNlKTtcbiAgICAgIH0sIGlzTW9iaWxlLm1hdGNoZXMgPyAwIDogMTAwICk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRtcE92ZXJsYXkpO1xuICAgICAgXy5yZW1vdmVDbGFzcyh0bXBPdmVybGF5LCAnYXBsYXphbWUtb3ZlcmxheS1oaWRlJyk7XG4gICAgICBfLnNjcm9sbFRvcChsYXN0U2Nyb2xsVG9wKTtcbiAgICAgIGlmKCBtb2RhbC5pZnJhbWUgKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwuaWZyYW1lKTtcblxuICAgICAgICBpZiggbW9kYWwucmVmZXJyZXIgKSB7XG4gICAgICAgICAgbW9kYWwucmVmZXJyZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYXBsYXphbWU6ICdtb2RhbCcsXG4gICAgICAgICAgICBldmVudDogJ2Rpc21pc3MnLFxuICAgICAgICAgICAgbmFtZTogbW9kYWwubWVzc2FnZS5uYW1lXG4gICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgICBkZWxldGUgbW9kYWwucmVmZXJyZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggbW9kYWwubWVzc2FnZSApIHtcbiAgICAgICAgICBkZWxldGUgbW9kYWwubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgbW9kYWwuaWZyYW1lO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kYWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcGlIdHRwID0gcmVxdWlyZSgnLi4vY29yZS9hcGktaHR0cCcpLFxuICAgIF8gPSByZXF1aXJlKCcuLi90b29scy90b29scycpLFxuICAgICRxID0gcmVxdWlyZSgncS1wcm9taXNlL25vLW5hdGl2ZScpLFxuICAgIGNhY2hlID0gW10sXG4gICAgcmVxdWVzdHNDYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiBzaW11bGF0b3IgKGFtb3VudCwgX29wdGlvbnMsIGNhbGxiYWNrLCBvbkVycm9yKSB7XG5cbiAgaWYoIF8uaXNGdW5jdGlvbihfb3B0aW9ucykgKSB7XG4gICAgb25FcnJvciA9IGNhbGxiYWNrO1xuICAgIGNhbGxiYWNrID0gX29wdGlvbnM7XG4gICAgX29wdGlvbnMgPSB7fTtcbiAgfSBlbHNlIHtcbiAgICBfb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9O1xuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGFtb3VudDogYW1vdW50XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBoYXNoID0gYW1vdW50ICsgJywnICsgSlNPTi5zdHJpbmdpZnkob3B0aW9ucyk7XG5cbiAgaWYoIHJlcXVlc3RzQ2FjaGVbaGFzaF0gKSB7XG4gICAgcmV0dXJuIHJlcXVlc3RzQ2FjaGVbaGFzaF0udGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAoY2FsbGJhY2sgfHwgXy5ub29wKSggcmVzdWx0LmNob2ljZXMsIHJlc3VsdC5vcHRpb25zICk7XG4gICAgfSk7XG4gIH1cblxuICBpZiggX29wdGlvbnMudmlldyApIHtcbiAgICBvcHRpb25zLnBhcmFtcy52aWV3ID0gX29wdGlvbnMudmlldztcbiAgfVxuICBpZiggX29wdGlvbnMucGF5ZGF5ICkge1xuICAgIG9wdGlvbnMucGFyYW1zLnBheWRheSA9IF9vcHRpb25zLnBheWRheTtcbiAgfVxuICBpZiggX29wdGlvbnMucHVibGljS2V5ICkge1xuICAgIG9wdGlvbnMucHVibGljS2V5ID0gX29wdGlvbnMucHVibGljS2V5O1xuICB9XG5cbiAgdmFyIGZvdW5kQ2FjaGVkID0gXy5maW5kKGNhY2hlLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBpdGVtLmFtb3VudCA9PT0gYW1vdW50O1xuICB9KTtcblxuICByZXF1ZXN0c0NhY2hlW2hhc2hdID0gKCAhX29wdGlvbnMubm9DYWNoZSAmJiBmb3VuZENhY2hlZCA/ICRxLnJlc29sdmUoZm91bmRDYWNoZWQpIDogYXBpSHR0cC5nZXQoJ2luc3RhbG1lbnQtcGxhbi1zaW11bGF0b3InLCBvcHRpb25zICkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIGFtb3VudDogYW1vdW50LFxuICAgICAgICBjaG9pY2VzOiByZXNwb25zZS5kYXRhLmNob2ljZXNbMF0uaW5zdGFsbWVudHMsXG4gICAgICAgIG9wdGlvbnM6IHJlc3BvbnNlLmRhdGEub3B0aW9ucyxcbiAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlXG4gICAgICB9O1xuICAgICAgY2FjaGUucHVzaChyZXN1bHQpO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pIClcbiAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAoY2FsbGJhY2sgfHwgXy5ub29wKSggcmVzdWx0LmNob2ljZXMsIHJlc3VsdC5vcHRpb25zICk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYoIHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzICkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBcGxhemFtZTogUGVybWlzbyBkZW5lZ2FkbyB1c2FuZG8gbGEgY2xhdmUgcMO6YmxpY2E6ICcgKyByZXNwb25zZS5jb25maWcucHVibGljS2V5KTtcbiAgICAgICAgY29uc29sZS5pbmZvKCdSZXZpc2EgbGEgY29uZmlndXJhY2nDs24gZGUgQXBsYXphbWUsIHBhcmEgY3VhbHF1aWVyIGR1ZGEgcHVlZGVzIGVzY3JpYmlyIGEgaG9sYUBhcGxhemFtZS5jb20nKTtcbiAgICAgIH0gZWxzZSBpZiggXy5rZXkocmVzcG9uc2UsICdkYXRhLmVycm9yLmZpZWxkcy5hbW91bnQuMCcpICkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBcGxhemFtZTogJyArIHJlc3BvbnNlLmRhdGEuZXJyb3IuZmllbGRzLmFtb3VudFswXSk7XG4gICAgICB9IGVsc2UgaWYoIF8ua2V5KHJlc3BvbnNlLCAnZGF0YS5lcnJvci5tZXNzYWdlJykgKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FwbGF6YW1lOiAnICsgcmVzcG9uc2UuZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIChvbkVycm9yIHx8IF8ubm9vcCkocmVzcG9uc2UpO1xuICAgIH0pO1xuXG4gIHJldHVybiByZXF1ZXN0c0NhY2hlW2hhc2hdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbXVsYXRvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwelZlcnNpb24gPSByZXF1aXJlKCcuLi8uLi8udG1wL2FwbGF6YW1lLXZlcnNpb24nKSxcbiAgICBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKSxcbiAgICBhcGkgPSByZXF1aXJlKCcuL2FwaScpLFxuICAgIGh0dHAgPSByZXF1aXJlKCdodHRwLWJyb3dzZXInKSxcbiAgICByZW5kZXJBY2NlcHQgPSBfLnRlbXBsYXRlLmNvbXBpbGUoJ2FwcGxpY2F0aW9uL3ZuZC5hcGxhemFtZTwlIGlmKHNhbmRib3gpeyAlPi5zYW5kYm94PCUgfSAlPi52PCU9IHZlcnNpb24gJT4ranNvbicpLFxuICAgIGFjY2VwdEhlYWRlciA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgIHZhciBfYXBpID0gXy5jb3B5KGFwaSk7XG4gICAgICBpZiggJ3ZlcnNpb24nIGluIGNvbmZpZyB8fCAnYXBpVmVyc2lvbicgaW4gY29uZmlnICkge1xuICAgICAgICBfYXBpLnZlcnNpb24gPSAndmVyc2lvbicgaW4gY29uZmlnID8gY29uZmlnLnZlcnNpb24gOiBjb25maWcuYXBpVmVyc2lvbjtcbiAgICAgIH1cbiAgICAgIGlmKCAnc2FuZGJveCcgaW4gY29uZmlnICkge1xuICAgICAgICBfYXBpLnNhbmRib3ggPSBjb25maWcuc2FuZGJveDtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZW5kZXJBY2NlcHQoX2FwaSk7XG4gICAgfSxcbiAgICBhdXRob3JpemF0aW9uSGVhZGVyID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgY29uZmlnLnB1YmxpY0tleSA9IGNvbmZpZy5wdWJsaWNLZXkgfHwgYXBpLnB1YmxpY0tleTtcbiAgICAgIHJldHVybiAnQmVhcmVyICcgKyBjb25maWcucHVibGljS2V5O1xuICAgIH07XG5cbnZhciBhcGlIdHRwID0ge307XG5cbl8uZWFjaChbJ2dldCcsICdkZWxldGUnXSwgZnVuY3Rpb24gKG1ldGhvZCkge1xuICBhcGlIdHRwW21ldGhvZF0gPSBmdW5jdGlvbiAocGF0aCwgb3B0aW9ucykge1xuICAgIHZhciB1cmwgPSBfLmpvaW5QYXRoKGFwaS5ob3N0LCBwYXRoKTtcbiAgICByZXR1cm4gaHR0cFttZXRob2RdKHVybCwgXy5tZXJnZShvcHRpb25zLCB7IGhlYWRlcnM6IHtcbiAgICAgICAgeEFqc1ZlcnNpb246IGFwelZlcnNpb24sXG4gICAgICAgIGFjY2VwdDogYWNjZXB0SGVhZGVyLFxuICAgICAgICBhdXRob3JpemF0aW9uOiBhdXRob3JpemF0aW9uSGVhZGVyXG4gICAgICB9IH0pICk7XG4gIH07XG59KTtcblxuXy5lYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gKG1ldGhvZCkge1xuICBhcGlIdHRwW21ldGhvZF0gPSBmdW5jdGlvbiAocGF0aCwgZGF0YSwgb3B0aW9ucykge1xuICAgIHZhciB1cmwgPSBfLmpvaW5QYXRoKGFwaS5ob3N0LCBwYXRoKTtcbiAgICByZXR1cm4gaHR0cFttZXRob2RdKHVybCwgZGF0YSwgXy5tZXJnZShvcHRpb25zLCB7IGhlYWRlcnM6IHtcbiAgICAgICAgeEFqc1ZlcnNpb246IGFwelZlcnNpb24sXG4gICAgICAgIGFjY2VwdDogYWNjZXB0SGVhZGVyLFxuICAgICAgICBhdXRob3JpemF0aW9uOiBhdXRob3JpemF0aW9uSGVhZGVyXG4gICAgICB9IH0pICk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcGlIdHRwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaG9zdDogJ2h0dHBzOi8vYXBpLmFwbGF6YW1lLmNvbS8nLFxuICAvLyBob3N0OiAnaHR0cHM6Ly9hcGkuYXBsYXphbWUuY29tLycsXG4gIHN0YXRpY1VybDogJ2h0dHBzOi8vYXBsYXphbWUuY29tL3N0YXRpYy8nLFxuICB2ZXJzaW9uOiAxLFxuICBjaGVja291dFZlcnNpb246IDEsXG4gIHNhbmRib3g6IGZhbHNlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgXzogcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKSxcbiAgaW5pdDogcmVxdWlyZSgnLi9pbml0JyksXG4gIGFwaUdldDogcmVxdWlyZSgnLi9hcGktaHR0cCcpLmdldCxcbiAgYXBpUG9zdDogcmVxdWlyZSgnLi9hcGktaHR0cCcpLnBvc3QsXG4gIGFwaURlbGV0ZTogcmVxdWlyZSgnLi9hcGktaHR0cCcpWydkZWxldGUnXSxcbiAgYXBpUHV0OiByZXF1aXJlKCcuL2FwaS1odHRwJykucHV0LFxuICB2ZXJzaW9uOiByZXF1aXJlKCcuLi8uLi8udG1wL2FwbGF6YW1lLXZlcnNpb24nKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwaSA9IHJlcXVpcmUoJy4vYXBpJyksXG4gICAgXyA9IHJlcXVpcmUoJy4uL3Rvb2xzL3Rvb2xzJyk7XG5cbmZ1bmN0aW9uIGluaXQgKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYoIHR5cGVvZiBvcHRpb25zLnZlcnNpb24gPT09ICdzdHJpbmcnICkge1xuICAgIHZhciBtYXRjaFZlcnNpb24gPSBvcHRpb25zLnZlcnNpb24ubWF0Y2goL152PyhcXGQpKFxcLihcXGQpKT8kLyk7XG5cbiAgICBpZiggIW1hdGNoVmVyc2lvbiApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndmVyc2lvbiBtaXNtYXRjaCwgc2hvdWxkIGJlIGxpa2UgXFwndjEuMlxcJycpO1xuICAgIH1cblxuICAgIG9wdGlvbnMudmVyc2lvbiA9IE51bWJlcihtYXRjaFZlcnNpb25bMV0pO1xuXG4gICAgaWYoIG1hdGNoVmVyc2lvblszXSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgb3B0aW9ucy5jaGVja291dFZlcnNpb24gPSBOdW1iZXIobWF0Y2hWZXJzaW9uWzNdKTtcbiAgICB9XG4gIH1cblxuICBpZiggdHlwZW9mIG9wdGlvbnMuc2FuZGJveCA9PT0gJ3N0cmluZycgKSB7XG4gICAgb3B0aW9ucy5zYW5kYm94ID0gb3B0aW9ucy5zYW5kYm94ID09PSAndHJ1ZSc7XG4gIH1cblxuICBpZiggdHlwZW9mIG9wdGlvbnMuYW5hbHl0aWNzID09PSAnc3RyaW5nJyApIHtcbiAgICBvcHRpb25zLmFuYWx5dGljcyA9IG9wdGlvbnMuYW5hbHl0aWNzID09PSAndHJ1ZSc7XG4gIH1cblxuICBfLmV4dGVuZChhcGksIG9wdGlvbnMpO1xuXG4gIF8ubG9nKCdhcGxhemFtZS5pbml0JywgYXBpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcGxhemFtZSkge1xuXG4gIHZhciBfID0gYXBsYXphbWUuXyxcbiAgICAgIHNjcmlwdCA9IF8uY3VycmVudFNjcmlwdCxcbiAgICAgIGRhdGFBcGxhemFtZSA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXBsYXphbWUnKSxcbiAgICAgIG9wdGlvbnMgPSBzY3JpcHQuc3JjICYmICgvXFw/Ly50ZXN0KHNjcmlwdC5zcmMpID8gXy5kZXNlcmlhbGl6ZShzY3JpcHQuc3JjLm1hdGNoKC8oLio/KVxcPyguKikvKVsyXSkgOiB7fSkgfHwge307XG5cbiAgaWYoIG9wdGlvbnMuc2FuZGJveCApIHtcbiAgICBvcHRpb25zLnNhbmRib3ggPSBvcHRpb25zLnNhbmRib3ggPT09ICd0cnVlJyB8fCBvcHRpb25zLnNhbmRib3ggPT09ICcxJztcbiAgfVxuXG4gIGlmKCBkYXRhQXBsYXphbWUgKSB7XG5cbiAgICBpZiggL1xcOi8udGVzdChkYXRhQXBsYXphbWUpICkge1xuICAgICAgZGF0YUFwbGF6YW1lLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbiAocGFydCkge1xuICAgICAgICB2YXIga2V5cyA9IHBhcnQubWF0Y2goL14oW15cXDpdKylcXDooLiopLyk7XG4gICAgICAgIG9wdGlvbnNba2V5c1sxXS50cmltKCldID0ga2V5c1syXS50cmltKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYoICFvcHRpb25zLnB1YmxpY0tleSApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwdWJsaWNLZXkgbWlzc2luZyBpbiBkYXRhLWFwbGF6YW1lJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMucHVibGljS2V5ID0gZGF0YUFwbGF6YW1lO1xuICAgIH1cblxuICAgIGlmKCBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWFwaS1ob3N0JykgKSB7XG4gICAgICBvcHRpb25zLmhvc3QgPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWFwaS1ob3N0Jyk7XG4gICAgfVxuXG4gICAgaWYoIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmVyc2lvbicpICkge1xuICAgICAgb3B0aW9ucy52ZXJzaW9uID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS12ZXJzaW9uJyk7XG4gICAgfVxuXG4gICAgaWYoIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2FuZGJveCcpICkge1xuICAgICAgb3B0aW9ucy5zYW5kYm94ID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1zYW5kYm94Jyk7XG4gICAgfVxuXG4gICAgaWYoIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5hbHl0aWNzJykgKSB7XG4gICAgICBvcHRpb25zLmFuYWx5dGljcyA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5hbHl0aWNzJyk7XG4gICAgfVxuXG4gICAgaWYoIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGljLXVybCcpICkge1xuICAgICAgb3B0aW9ucy5zdGF0aWNVcmwgPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXRpYy11cmwnKTtcbiAgICB9XG5cbiAgICBpZiggc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1jYWxsYmFjaycpICkge1xuICAgICAgLy8gaWYoIHR5cGVvZiBnbG9iYWxbc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1jYWxsYmFjaycpXSAhPT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBzaG91bGQgYmUgYSBnbG9iYWwgZnVuY3Rpb24nKTtcbiAgICAgIC8vIH1cblxuICAgICAgb3B0aW9ucy5jYWxsYmFjayA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbGJhY2snKTtcbiAgICAgIC8vIF8ucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gICBnbG9iYWxbc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1jYWxsYmFjaycpXShhcGxhemFtZSk7XG4gICAgICAvLyB9KTtcbiAgICB9XG4gIH1cblxuICBhcGxhemFtZS5pbml0KG9wdGlvbnMpO1xuXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcGxhemFtZSkge1xuICB2YXIgXyA9IGFwbGF6YW1lLl8sXG4gICAgICAkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKTtcblxuICBmdW5jdGlvbiBidXR0b25zTG9va3VwIChlbGVtZW50KSB7XG4gICAgZWxlbWVudCA9IGVsZW1lbnQgfHwgZG9jdW1lbnQ7XG4gICAgaWYoICFlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBidG5zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hcGxhemFtZS1idXR0b25dJyk7XG5cbiAgICBpZiggYnRucy5sZW5ndGggKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnLmJ0bihzKScsIGJ0bnMpO1xuICAgICAgdmFyIHByb21pc2VzID0gW107XG5cbiAgICAgIF8uZWFjaChidG5zLCBmdW5jdGlvbiAoYnRuKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCcuYnRuJywgYXJndW1lbnRzLCBidG5zKTtcbiAgICAgICAgdmFyIGJ0bklkID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hcGxhemFtZS1idXR0b24nKSxcbiAgICAgICAgICAgIGJ0blBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgc2VsZWN0b3I6ICdbZGF0YS1hcGxhemFtZS1idXR0b24nICsgKCBidG5JZCA/ICgnPVxcXCInICsgYnRuSWQgKyAnXFxcIicpIDogJycgKSArICddLCBbZGF0YS1hcGxhemFtZS1idXR0b24taW5mbycgKyAoIGJ0bklkID8gKCc9XFxcIicgKyBidG5JZCArICdcXFwiJykgOiAnJyApICsgJ10nLFxuICAgICAgICAgICAgICBwYXJlbnQ6IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFyZW50JyksXG4gICAgICAgICAgICAgIHB1YmxpY0tleTogYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1wdWJsaWMta2V5JyksXG4gICAgICAgICAgICAgIGFtb3VudDogYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1hbW91bnQnKSxcbiAgICAgICAgICAgICAgY3VycmVuY3k6IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3VycmVuY3knKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIHNhbmRib3g6IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2FuZGJveCcpID8gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1zYW5kYm94JykgPT09ICd0cnVlJyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgY291bnRyeTogYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1jb3VudHJ5JykgfHwgdW5kZWZpbmVkXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHByb21pc2VzLnB1c2goIGFwbGF6YW1lLmJ1dHRvbihidG5QYXJhbXMpICk7XG4gICAgICB9KTtcblxuICAgICAgaWYoIHByb21pc2VzLmxlbmd0aCApIHtcbiAgICAgICAgcmV0dXJuICRxLmFsbChwcm9taXNlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJHEucmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJHEucmVzb2x2ZSgpO1xuICAgIH1cbiAgfVxuXG4gIF8ucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGJ1dHRvbnNMb29rdXAoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIF8ubGl2ZURPTS5zdWJzY3JpYmUoYnV0dG9uc0xvb2t1cCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBidXR0b25zTG9va3VwO1xuXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcGxhemFtZSkge1xuXG4gIHZhciBfID0gYXBsYXphbWUuXyxcbiAgICAgICRxID0gcmVxdWlyZSgncS1wcm9taXNlL25vLW5hdGl2ZScpLFxuICAgICAgRXZlbnRzID0gcmVxdWlyZSgnZXZlbnRzLXdyYXBwZXInKSxcbiAgICAgIGFwaSA9IHJlcXVpcmUoJy4uL2NvcmUvYXBpJyksXG4gICAgICBpc01vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcoIG1heC13aWR0aDogNzY3cHggKScpLFxuICAgICAgZWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuXG4gIGZ1bmN0aW9uIGdldFF0eSAocXR5U2VsZWN0b3IpIHtcbiAgICBpZiggIV8uaXNTdHJpbmcocXR5U2VsZWN0b3IpICkge1xuICAgICAgY29uc29sZS53YXJuKCd3YXJuaW5nOiBkYXRhLXF0eSBzaG91bGQgYmUgYW4gc3RyaW5nLiBwZTogZm9ybSNhcnRpY2xlIC5maW5hbC1wcmljZSAnKTtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICB2YXIgcXR5RWxlbWVudDtcbiAgICB0cnkge1xuICAgICAgcXR5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXR5U2VsZWN0b3IpO1xuICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICBjb25zb2xlLndhcm4oZXJyLm1lc3NhZ2UgKyAnXFxuZGF0YS1xdHkgc2hvdWxkIGJlIGFuIHN0cmluZy4gcGU6IGZvcm0jYXJ0aWNsZSAuZmluYWwtcHJpY2UgJyk7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICBzd2l0Y2goIHF0eUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSApIHtcbiAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgcmV0dXJuIE51bWJlciggcXR5RWxlbWVudC52YWx1ZSApO1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgcmV0dXJuIE51bWJlciggcXR5RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bc2VsZWN0ZWRdJykudmFsdWUgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBOdW1iZXIoIHF0eUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpICk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNtc1ByaWNlU2VsZWN0b3IgPSBbXG4gICAgJ2Zvcm0jcHJvZHVjdF9hZGR0b2NhcnRfZm9ybSAuc3BlY2lhbC1wcmljZSAucHJpY2UnLCAvLyBtYWdlbnRvXG4gICAgJ2Zvcm0jcHJvZHVjdF9hZGR0b2NhcnRfZm9ybSAucmVndWxhci1wcmljZSAucHJpY2UnLCAvLyBtYWdlbnRvXG4gICAgJyNwcm9kdWN0LWluZm8gLnNwZWNpYWwtcHJpY2UgLnByaWNlJywgLy8gbWFnZW50b1xuICAgICcjcHJvZHVjdC1pbmZvIC5yZWd1bGFyLXByaWNlIC5wcmljZScsIC8vIG1hZ2VudG9cbiAgICAnZm9ybSNidXlfYmxvY2sgI291cl9wcmljZV9kaXNwbGF5JywgLy8gcHJlc3Rhc2hvcFxuICAgICcjbWFpbiBbaXRlbXR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9Qcm9kdWN0XCJdIFtpdGVtdHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL09mZmVyXCJdIC5wcmljZSBpbnMgLmFtb3VudCcsIC8vIHdvb2NvbW1lcmNlXG4gICAgJyNtYWluIFtpdGVtdHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL1Byb2R1Y3RcIl0gW2l0ZW10eXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvT2ZmZXJcIl0gLnByaWNlIC5hbW91bnQnLCAvLyB3b29jb21tZXJjZVxuICAgICdbaXRlbXR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9Qcm9kdWN0XCJdIFtpdGVtdHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL09mZmVyXCJdIFtpdGVtcHJvcD1cInByaWNlXCJdJyAvLyBTY2hlbWEub3JnXG4gIF0sXG4gIGNtc1F0eVNlbGVjdG9yID0gW1xuICAgICdmb3JtI3Byb2R1Y3RfYWRkdG9jYXJ0X2Zvcm0gaW5wdXRbbmFtZT1cInF0eVwiXScsIC8vIG1hZ2VudG9cbiAgICAnZm9ybSNidXlfYmxvY2sgaW5wdXRbbmFtZT1cInF0eVwiXScsIC8vIHByZXN0YXNob3BcbiAgICAnI3F1YW50aXR5X3dhbnRlZCcsIC8vIHByZXN0YXNob3BcbiAgICAnZm9ybSNwcm9kdWN0LW9wdGlvbnMtZm9ybSBidXR0b25bZGF0YS1pZD1xdHldJywgLy8gY3VzdG9tXG4gICAgJyNtYWluIFtpdGVtdHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL1Byb2R1Y3RcIl0gZm9ybS5jYXJ0IGlucHV0W25hbWU9XCJxdWFudGl0eVwiXScgLy8gd29vY29tbWVyY2VcbiAgXTtcblxuICBmdW5jdGlvbiBtYXRjaFNlbGVjdG9yIChzZWxlY3Rvcikge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFtb3VudEdldHRlciAod2lkZ2V0RWxlbWVudCkge1xuICAgIHZhciBwcmljZVNlbGVjdG9yID0gd2lkZ2V0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJpY2UnKSxcbiAgICAgICAgcXR5U2VsZWN0b3IgPSB3aWRnZXRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1xdHknKSxcbiAgICAgICAgYXV0b0Rpc2NvdmVyZWQgPSBmYWxzZTtcblxuICAgIGlmKCBwcmljZVNlbGVjdG9yICkge1xuICAgICAgLy8gdHJ5e1xuICAgICAgLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByaWNlU2VsZWN0b3IpO1xuICAgICAgLy8gfSBjYXRjaChlcnIpIHtcbiAgICAgIC8vICAgcHJpY2VTZWxlY3RvciA9IG51bGw7XG4gICAgICAvLyAgIGNvbnNvbGUud2FybihlcnIubWVzc2FnZSk7XG4gICAgICAvLyB9XG4gICAgICBpZiggcXR5U2VsZWN0b3IgKSB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF0eVNlbGVjdG9yKTtcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICBxdHlTZWxlY3RvciA9IG51bGw7XG4gICAgICAgICAgY29uc29sZS53YXJuKGVyci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcmljZVNlbGVjdG9yID0gXy5maW5kKGNtc1ByaWNlU2VsZWN0b3IsIG1hdGNoU2VsZWN0b3IpO1xuXG4gICAgICBpZiggcHJpY2VTZWxlY3RvciApIHtcbiAgICAgICAgcXR5U2VsZWN0b3IgPSBfLmZpbmQoY21zUXR5U2VsZWN0b3IsIG1hdGNoU2VsZWN0b3IpO1xuICAgICAgICBhdXRvRGlzY292ZXJlZCA9IHRydWU7XG5cbiAgICAgICAgXy5sb2coJ2F1dG8tZGlzY292ZXJlZCBwcmljZSBzZWxlY3RvcicsIHByaWNlU2VsZWN0b3IsIHF0eVNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZ2V0dGVyID0gcHJpY2VTZWxlY3RvciA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBxdHkgPSBxdHlTZWxlY3RvciA/IGdldFF0eSggcXR5U2VsZWN0b3IgKSA6IDEsIHByaWNlRWxlbWVudDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHByaWNlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHByaWNlU2VsZWN0b3IgKTtcbiAgICAgIH0gY2F0Y2goZXJyKSB7fVxuXG4gICAgICB2YXIgYW1vdW50ID0gcHJpY2VFbGVtZW50ID8gcHJpY2VFbGVtZW50LnZhbHVlIDogJzAnO1xuXG4gICAgICBpZiggdHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcgKSB7XG4gICAgICAgIGlmKCAhL1xcZCtbLC5dXFxkKy8udGVzdChwcmljZUVsZW1lbnQudGV4dENvbnRlbnQpICYmIHByaWNlRWxlbWVudC5jaGlsZHJlbiAmJiBwcmljZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoICkge1xuICAgICAgICAgIGFtb3VudCA9ICcnO1xuXG4gICAgICAgICAgdmFyIHBhcnQgPSBwcmljZUVsZW1lbnQuZmlyc3RDaGlsZCwgbWF0Y2hlZDtcblxuICAgICAgICAgIHdoaWxlKCBwYXJ0ICkge1xuICAgICAgICAgICAgaWYoIC9bLC5dLy50ZXN0KGFtb3VudCkgKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoZWQgPSAoIHBhcnQudG9TdHJpbmcoKSA9PT0gJ1tvYmplY3QgVGV4dF0nID8gcGFydC5kYXRhIDogcGFydC50ZXh0Q29udGVudCApLm1hdGNoKC9bXFxkLC5dKy8pO1xuXG4gICAgICAgICAgICBpZiggbWF0Y2hlZCApIHtcbiAgICAgICAgICAgICAgYW1vdW50ICs9IChhbW91bnQgJiYgIS9eWywuXS8udGVzdChtYXRjaGVkWzBdKSA/ICcuJyA6ICcnKSArIG1hdGNoZWRbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhcnQgPSBwYXJ0Lm5leHRTaWJsaW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbW91bnQgPSBwcmljZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF8ucGFyc2VQcmljZSggYW1vdW50ICk7XG4gICAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHJldHVybiBOdW1iZXIoIHdpZGdldEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWFtb3VudCcpICk7XG4gICAgICByZXR1cm47XG4gICAgfTtcblxuICAgIGdldHRlci5wcmljZVNlbGVjdG9yID0gcHJpY2VTZWxlY3RvcjtcbiAgICBnZXR0ZXIucXR5U2VsZWN0b3IgPSBxdHlTZWxlY3RvcjtcbiAgICBnZXR0ZXIuYXV0b0Rpc2NvdmVyZWQgPSBhdXRvRGlzY292ZXJlZDtcblxuICAgIHJldHVybiBnZXR0ZXI7XG4gIH1cblxuICBmdW5jdGlvbiBJZnJhbWUgKHVybCkge1xuICAgIHZhciBlbCA9IF8uZ2V0SUZyYW1lKHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnNDBweCcgfSksXG4gICAgICAgIGlmcmFtZSA9IHRoaXM7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuZWwuc3JjID0gdXJsO1xuXG4gICAgbmV3IEV2ZW50cyAodGhpcyk7XG5cbiAgICB0aGlzLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudHJpZ2dlcignbG9hZCcsIG51bGwsIHRoaXMpO1xuICAgIH07XG5cbiAgICBfLm9uTWVzc2FnZSgnc2ltdWxhdG9yJywgZnVuY3Rpb24gKGUsIG1lc3NhZ2UpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdtZXNzYWdlLnNpbXVsYXRvcicsIGUsIG1lc3NhZ2UpO1xuICAgICAgaWYoIGUuc291cmNlID09PSBlbC5jb250ZW50V2luZG93ICkge1xuICAgICAgICBpZnJhbWUudHJpZ2dlcignbWVzc2FnZTonICsgbWVzc2FnZS5ldmVudCwgW21lc3NhZ2VdLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub24oJ21lc3NhZ2U6cmVzaXplJywgZnVuY3Rpb24gKGUsIG1lc3NhZ2UpIHtcbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9IG1lc3NhZ2UuaGVpZ2h0ICsgJ3B4JztcbiAgICB9KTtcbiAgfVxuXG4gIElmcmFtZS5wcm90b3R5cGUubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgX2RhdGEgPSBfLmV4dGVuZCh7XG4gICAgICBhcGxhemFtZTogJ3NpbXVsYXRvcicsXG4gICAgICBldmVudDogZXZlbnROYW1lLFxuICAgICAgbW9iaWxlOiBpc01vYmlsZS5tYXRjaGVzXG4gICAgfSwgZGF0YSB8fCB7fSk7XG4gICAgaWYoIHRoaXMuZWwuY29udGVudFdpbmRvdyApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpZnJhbWUgbWVzc2FnZScsIGV2ZW50TmFtZSwgX2RhdGEsIHRoaXMpO1xuICAgICAgdGhpcy5lbC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKF9kYXRhLCAnKicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2lmcmFtZSBjb250ZW50V2luZG93IG1pc3NpbmcnLCB0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gbWF4SW5zdGFsbWVudHMgKHByZXYsIGNob2ljZSkge1xuICAgIGlmKCBwcmV2ID09PSBudWxsICkge1xuICAgICAgcmV0dXJuIGNob2ljZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNob2ljZS5udW1faW5zdGFsbWVudHMgPiBwcmV2Lm51bV9pbnN0YWxtZW50cyA/IGNob2ljZSA6IHByZXY7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2lkZ2V0IChtZXRhKSB7XG4gICAgaWYoICFtZXRhLm9wdGlvbnMud2lkZ2V0ICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGdldFdpZGdldC5zZXJpYWwgPSBnZXRXaWRnZXQuc2VyaWFsID8gZ2V0V2lkZ2V0LnNlcmlhbCArIDEgOiAxO1xuXG4gICAgdmFyIHdpZGdldCxcbiAgICAgICAgaWQgPSBnZXRXaWRnZXQuc2VyaWFsO1xuXG4gICAgaWYoIG1ldGEub3B0aW9ucy53aWRnZXQudHlwZSA9PT0gJ2J1dHRvbicgKSB7XG4gICAgICB3aWRnZXQgPSBuZXcgSWZyYW1lKCBhcGkuc3RhdGljVXJsICsgJ3dpZGdldHMvc2ltdWxhdG9yL3NpbXVsYXRvci5odG1sPycgKyBEYXRlLm5vdygpICsgJyZzaW11bGF0b3I9JyArIGlkICk7XG5cbiAgICAgIHdpZGdldC5vbignbWVzc2FnZTpyZXF1aXJlLmNob2ljZXMgY2hvaWNlcy51cGRhdGUnLCBmdW5jdGlvbiAoZSwgbWVzc2FnZSkge1xuICAgICAgICBpZiggbWVzc2FnZSAmJiBtZXNzYWdlLnNpbXVsYXRvcklkICYmIG1lc3NhZ2Uuc2ltdWxhdG9ySWQgIT09IGlkICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLCBtZXRhLCBtZXNzYWdlKTtcbiAgICAgICAgd2lkZ2V0Lm1lc3NhZ2UoJ2Nob2ljZXMnLCB7XG4gICAgICAgICAgYW1vdW50OiBtZXRhLmFtb3VudCxcbiAgICAgICAgICBjaG9pY2U6IG1ldGEuY2hvaWNlcy5yZWR1Y2UobWF4SW5zdGFsbWVudHMsIG51bGwpLFxuICAgICAgICAgIGNob2ljZXM6IG1ldGEuY2hvaWNlcyxcbiAgICAgICAgICBvcHRpb25zOiBtZXRhLm9wdGlvbnNcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgd2lkZ2V0Lm9uKCdjaG9pY2VzLnVwZGF0aW5nJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgd2lkZ2V0Lm1lc3NhZ2UoJ2xvYWRpbmcnKTtcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIF8udGVtcGxhdGUucHV0KCd3aWRnZXQtcmF3JywgcmVxdWlyZSgnLi4vLi4vLnRtcC9zaW11bGF0b3IvdGVtcGxhdGVzL3dpZGdldC1yYXcnKSApO1xuICAgICAgd2lkZ2V0ID0geyBlbDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgfTtcbiAgICAgIG5ldyBFdmVudHMod2lkZ2V0KTtcblxuICAgICAgd2lkZ2V0LmVsLmlubmVySFRNTCA9IF8udGVtcGxhdGUoJ3dpZGdldC1yYXcnLCB7XG4gICAgICAgIGdldEFtb3VudDogXy5nZXRBbW91bnQsXG4gICAgICAgIGFtb3VudDogbWV0YS5hbW91bnQsXG4gICAgICAgIGNob2ljZTogbWV0YS5jaG9pY2VzLnJlZHVjZShtYXhJbnN0YWxtZW50cywgbnVsbCksXG4gICAgICAgIGNob2ljZXM6IG1ldGEuY2hvaWNlcyxcbiAgICAgICAgb3B0aW9uczogbWV0YS5vcHRpb25zXG4gICAgICB9KTtcblxuICAgICAgd2lkZ2V0LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIGFwbGF6YW1lOiAnbW9kYWwnLFxuICAgICAgICAgIGV2ZW50OiAnb3BlbicsXG4gICAgICAgICAgbmFtZTogJ2luc3RhbG1lbnRzJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjYXJkOiBfLnRlbXBsYXRlLmNvbXBpbGUoIHJlcXVpcmUoJy4uLy4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy9tb2RhbC1pbnN0YWxtZW50cycpICkoe1xuICAgICAgICAgICAgICBzZWxlY3RlZENob2ljZTogbWV0YS5jaG9pY2VzLnJlZHVjZShtYXhJbnN0YWxtZW50cywgbnVsbCksXG4gICAgICAgICAgICAgIGNob2ljZXM6IG1ldGEuY2hvaWNlcyxcbiAgICAgICAgICAgICAgZ2V0QW1vdW50OiBfLmdldEFtb3VudCxcbiAgICAgICAgICAgICAgbW9udGhzOiBmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtID4gMSA/ICdtZXNlcycgOiAnbWVzJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sICcqJyk7XG5cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHdpZGdldC5pZCA9IGlkO1xuXG4gICAgcmV0dXJuIHdpZGdldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlV2lkZ2V0ICh3aWRnZXQsIHdpZGdldFdyYXBwZXIsIHNlbGVjdG9yKSB7XG4gICAgaWYoICFzZWxlY3RvciApIHtcbiAgICAgIHdpZGdldFdyYXBwZXIuYXBwZW5kQ2hpbGQod2lkZ2V0LmVsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHNldWRvTG9jYXRvcjtcbiAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnRyaW0oKS5yZXBsYWNlKC86KFxcdys/KSQvLCBmdW5jdGlvbiAobWF0Y2hlZCwgbG9jYXRvcikge1xuICAgICAgcHNldWRvTG9jYXRvciA9IGxvY2F0b3I7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG5cbiAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiggZWwgKSB7XG4gICAgICBpZiggcHNldWRvTG9jYXRvciApIHtcbiAgICAgICAgc3dpdGNoKCBwc2V1ZG9Mb2NhdG9yICkge1xuICAgICAgICAgIGNhc2UgJ2FmdGVyJzpcbiAgICAgICAgICAgIGlmKCBlbC5uZXh0RWxlbWVudFNpYmxpbmcgKSB7XG4gICAgICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHdpZGdldC5lbCwgZWwubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQod2lkZ2V0LmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2JlZm9yZSc6XG4gICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZSh3aWRnZXQuZWwsIGVsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BzZXVkb0xvY2F0b3IgJyArIHBzZXVkb0xvY2F0b3IgKyAnIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKHdpZGdldC5lbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZXZhbFdpZGdldCAod2lkZ2V0V3JhcHBlcikge1xuICAgIHZhciBtZXRhLCB1cGRhdGVEYXRhID0gZmFsc2UsIGRldGVjdGVkQW1vdW50LCBzaW11bGF0b3JPcHRpb25zID0ge307XG5cbiAgICBpZiggd2lkZ2V0V3JhcHBlci5fX2Fwel93aWRnZXRfXyApIHtcbiAgICAgIG1ldGEgPSB3aWRnZXRXcmFwcGVyLl9fYXB6X3dpZGdldF9fO1xuXG4gICAgICBkZXRlY3RlZEFtb3VudCA9IG1ldGEuZ2V0QW1vdW50KCk7XG4gICAgICBpZiggZGV0ZWN0ZWRBbW91bnQgJiYgbWV0YS5hbW91bnQgIT09IGRldGVjdGVkQW1vdW50ICkge1xuICAgICAgICB1cGRhdGVEYXRhID0gdHJ1ZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2lkZ2V0V3JhcHBlciwgbWV0YS5hbW91bnQsIG1ldGEuZ2V0QW1vdW50KCkgKTtcbiAgICAgICAgbWV0YS5hbW91bnQgPSBtZXRhLmdldEFtb3VudCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtZXRhID0geyBnZXRBbW91bnQ6IGFtb3VudEdldHRlcih3aWRnZXRXcmFwcGVyKSB9O1xuICAgICAgbWV0YS5hbW91bnQgPSB3aWRnZXRXcmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1hbW91bnQnKSA/IE51bWJlcih3aWRnZXRXcmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1hbW91bnQnKSkgOiBtZXRhLmdldEFtb3VudCgpO1xuICAgICAgdXBkYXRlRGF0YSA9IHRydWU7XG4gICAgICBpZiggbWV0YS5nZXRBbW91bnQucXR5U2VsZWN0b3IgKSB7XG4gICAgICAgIG1ldGEucXR5ID0gZ2V0UXR5KG1ldGEuZ2V0QW1vdW50LnF0eVNlbGVjdG9yKSB8fCAxO1xuICAgICAgICAvLyBjb25zb2xlLmRlYnVnKCduZXcgd2F0Y2hlcicpO1xuICAgICAgICBtZXRhLndhdGNoUXR5ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmKCAhZG9jdW1lbnQuYm9keS5jb250YWlucyh3aWRnZXRXcmFwcGVyKSApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobWV0YS53YXRjaFF0eSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBxdHkgPSBnZXRRdHkobWV0YS5nZXRBbW91bnQucXR5U2VsZWN0b3IpO1xuICAgICAgICAgIGlmKCBxdHkgIT09IG1ldGEucXR5ICkge1xuICAgICAgICAgICAgbWV0YS5xdHkgPSBxdHk7XG4gICAgICAgICAgICBldmFsV2lkZ2V0KHdpZGdldFdyYXBwZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMjUwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggd2lkZ2V0V3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlldycpICkge1xuICAgICAgc2ltdWxhdG9yT3B0aW9ucy52aWV3ID0gd2lkZ2V0V3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlldycpO1xuICAgIH1cblxuICAgIGlmKCBtZXRhLmFtb3VudCAmJiBtZXRhLmdldEFtb3VudC5xdHlTZWxlY3RvciApIHtcbiAgICAgIG1ldGEuYW1vdW50ICo9ICggZ2V0UXR5KG1ldGEuZ2V0QW1vdW50LnF0eVNlbGVjdG9yKSB8fCAxICk7XG4gICAgfVxuICAgIGlmKCBtZXRhLmFtb3VudCAmJiB1cGRhdGVEYXRhICkge1xuICAgICAgaWYoIG1ldGEud2lkZ2V0ICYmIG1ldGEud2lkZ2V0Lm1lc3NhZ2UgKSB7XG4gICAgICAgIG1ldGEud2lkZ2V0Lm1lc3NhZ2UoJ2xvYWRpbmcnKTtcbiAgICAgIH1cbiAgICAgIGFwbGF6YW1lLnNpbXVsYXRvciggbWV0YS5hbW91bnQsIHNpbXVsYXRvck9wdGlvbnMsIGZ1bmN0aW9uIChfY2hvaWNlcywgX29wdGlvbnMpIHtcbiAgICAgICAgX29wdGlvbnMud2lkZ2V0ID0gX29wdGlvbnMud2lkZ2V0IHx8IHt9O1xuICAgICAgICBpZiggX29wdGlvbnMud2lkZ2V0LmRpc2FibGVkICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGEuY2hvaWNlcyA9IF9jaG9pY2VzO1xuICAgICAgICBtZXRhLm9wdGlvbnMgPSBfb3B0aW9ucztcblxuICAgICAgICBtZXRhLndpZGdldCA9IG1ldGEud2lkZ2V0IHx8IGdldFdpZGdldChtZXRhKTtcblxuICAgICAgICBpZiggbWV0YS53aWRnZXQgJiYgIWRvY3VtZW50LmJvZHkuY29udGFpbnMobWV0YS53aWRnZXQuZWwpICkge1xuICAgICAgICAgIHBsYWNlV2lkZ2V0KG1ldGEud2lkZ2V0LCB3aWRnZXRXcmFwcGVyLCB3aWRnZXRXcmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1sb2NhdGlvbicpIHx8IF9vcHRpb25zLndpZGdldC5sb2NhdGlvbiApO1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0YS53aWRnZXQudHJpZ2dlcignY2hvaWNlcy51cGRhdGUnKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoIG1ldGEud2lkZ2V0ICYmIG1ldGEud2lkZ2V0Lm1lc3NhZ2UgKSB7XG4gICAgICAgICAgbWV0YS53aWRnZXQubWVzc2FnZSgnYWJvcnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggbWV0YS53aWRnZXQgJiYgZG9jdW1lbnQuYm9keS5jb250YWlucyhtZXRhLndpZGdldC5lbCkgKSB7XG4gICAgICAgICAgdmFyIHBhcmVudCA9IG1ldGEud2lkZ2V0LmVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKG1ldGEud2lkZ2V0LmVsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2lkZ2V0V3JhcHBlci5fX2Fwel93aWRnZXRfXyA9IG1ldGE7XG4gIH1cblxuICBmdW5jdGlvbiB3aWRnZXRzTG9va3VwIChlbGVtZW50KSB7XG4gICAgdmFyIHByb21pc2VzID0gW107XG5cbiAgICBlYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYXBsYXphbWUtc2ltdWxhdG9yXScpLCBldmFsV2lkZ2V0ICk7XG5cbiAgICByZXR1cm4gcHJvbWlzZXMubGVuZ3RoID8gJHEuYWxsKHByb21pc2VzKSA6ICRxLnJlc29sdmUoKTtcbiAgfVxuXG4gIHdpZGdldHNMb29rdXAoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICBfLmxpdmVET00uc3Vic2NyaWJlKHdpZGdldHNMb29rdXApO1xuICB9KTtcblxuICByZXR1cm4gd2lkZ2V0c0xvb2t1cDtcblxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2Vycm9yRGF0YShlcnIpIHtcbiAgKGNvbnNvbGUuaW5mbyB8fCBjb25zb2xlLmxvZykoJyVjW25vbiBibG9ja2luZyBlcnJvcl0gJWNhcGxhemFtZS5qc1xcblxcbicsICdmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICMyNjdCQkQ7JywgJ2NvbG9yOiAjMjY3QkJEOycpO1xuXG4gIHZhciBmaWxlbmFtZSA9IGVyci5maWxlTmFtZSA/IGVyci5maWxlTmFtZS5sYXN0SW5kZXhPZignLycpIDogJzxub3QgZGVmaW5lZD4nO1xuICB2YXIgc3RhbXAgPSBuZXcgRGF0ZSgpO1xuICB2YXIgc3RyID0gJyVjbmFtZTogJWMnICsgZXJyLm5hbWUgK1xuICAgICAgICAgICdcXG4lY0Vycm9yOiAlYycgKyBlcnIubWVzc2FnZSArXG4gICAgICAgICAgJ1xcbiVjRmlsZTogJWMnICsgZmlsZW5hbWU7XG5cbiAgY29uc29sZS5sb2coc3RyLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JywgJ2NvbG9yOiAjZTc0YzNjOycsICdmb250LXdlaWdodDogYm9sZDsnLCAnZm9udC13ZWlnaHQ6IG5vcm1hbDsgY29sb3I6ICNlNzRjM2M7JywgJ2ZvbnQtd2VpZ2h0OiBib2xkOycsICdmb250LXdlaWdodDogbm9ybWFsOycpO1xuICBpZiggZXJyLnN0YWNrICkge1xuICAgIGNvbnNvbGUubG9nKCclYycgKyBlcnIuc3RhY2ssICdiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmVlOyBsaW5lLWhlaWdodDogMjsnKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gIHRyeXsgZnVuYygpOyB9XG4gIGNhdGNoKGVycikge1xuICAgIF9lcnJvckRhdGEoZXJyKTtcbiAgfVxufTtcbiIsIlxuZnVuY3Rpb24gdGhvdXNhbmRzKGFtb3VudCkge1xuICBpZiggL1xcZHszfVxcZCsvLnRlc3QoYW1vdW50KSApIHtcbiAgICByZXR1cm4gdGhvdXNhbmRzKGFtb3VudC5yZXBsYWNlKC8oXFxkezN9PykoXFwufCQpLywgJy4kJicpKTtcbiAgfVxuICByZXR1cm4gYW1vdW50O1xufVxuXG5mdW5jdGlvbiBnZXRBbW91bnQgKGFtb3VudCkge1xuICB2YXIgcHJlZml4ID0gJyc7XG5cbiAgaWYoIGFtb3VudCA8IDAgKSB7XG4gICAgcHJlZml4ID0gJy0nO1xuICAgIGFtb3VudCA9IDAgLSBhbW91bnQ7XG4gIH1cblxuICBpZiggIWFtb3VudCApIHtcbiAgICByZXR1cm4gJzAsMDAnO1xuICB9IGVsc2UgaWYoIGFtb3VudCA8IDEwICkge1xuICAgIHJldHVybiAnMCwwJyArIGFtb3VudDtcbiAgfSBlbHNlIGlmKCBhbW91bnQgPCAxMDAgKSB7XG4gICAgcmV0dXJuICcwLCcgKyBhbW91bnQ7XG4gIH1cbiAgcmV0dXJuIHByZWZpeCArICgnJyArIGFtb3VudCkucmVwbGFjZSgvKFxcZCopKFxcZHsyfSkkLywgZnVuY3Rpb24gKG1hdGNoZWQsIG1haW4sIHRhaWwpIHtcbiAgICByZXR1cm4gdGhvdXNhbmRzKG1haW4pICsgJywnICsgdGFpbDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUHJpY2UgKHByaWNlKSB7XG4gIHZhciBtYXRjaGVkID0gcHJpY2UubWF0Y2goLygoXFxkK1ssLiBdKSopKFxcZCspLyksXG4gICAgICBhbW91bnQsIG1haW4sIHRhaWw7XG5cbiAgaWYoIG1hdGNoZWQgKSB7XG4gICAgdGFpbCA9IG1hdGNoZWRbM107XG4gICAgbWFpbiA9IG1hdGNoZWRbMV0ucmVwbGFjZSgvW15cXGRdL2csICcnKTtcblxuICAgIGlmKCAhbWFpbiApIHtcbiAgICAgIHJldHVybiBOdW1iZXIoIHRhaWwgKyAnMDAnICk7XG4gICAgfVxuXG4gICAgaWYoIHRhaWwubGVuZ3RoID09PSAxICkge1xuICAgICAgcmV0dXJuIE51bWJlcihtYWluICsgdGFpbCArICcwJyk7XG4gICAgfVxuXG4gICAgaWYoIHRhaWwubGVuZ3RoICE9PSAyICkge1xuICAgICAgdGFpbCArPSAnMDAnO1xuICAgIH1cblxuICAgIHJldHVybiBOdW1iZXIobWFpbiArIHRhaWwpO1xuICB9XG5cbiAgaWYoIC9cXGQrLy50ZXN0KHByaWNlKSApIHtcbiAgICByZXR1cm4gTnVtYmVyKCBwcmljZS5yZXBsYWNlKC9bXlxcZF0rL2csICcnKSArICcwMCcgKTtcbiAgfVxuXG4gIGNvbnNvbGUud2FybigncHJpY2UgZGF0YSBtaXNtYXRjaCcsIHByaWNlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGdldEFtb3VudDogZ2V0QW1vdW50LFxuXHRwYXJzZVByaWNlOiBwYXJzZVByaWNlXG59O1xuIiwiXG5mdW5jdGlvbiBfcmVhZHkgKF9jYWxsYmFjaywgZGVsYXkpIHtcbiAgdmFyIGNhbGxiYWNrID0gZGVsYXkgPyBmdW5jdGlvbiAoKSB7IHNldFRpbWVvdXQoX2NhbGxiYWNrLCBkZWxheSk7IH0gOiBfY2FsbGJhY2s7XG5cbiAgaWYgKC9sb2FkZWR8Y29tcGxldGUvLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSkpIHtcbiAgICBjYWxsYmFjaygpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2FsbGJhY2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRCdWJibGVDbG9zZSAoc3RyKSB7XG4gIHZhciBsZXZlbCA9IDA7XG5cbiAgZm9yKCB2YXIgaSA9IDAsIGxlbiA9IHN0ci5sZW5ndGg7IGkgPCBsZW4gOyBpKysgKSB7XG4gICAgaWYoIHN0cltpXSA9PT0gJygnICkge1xuICAgICAgbGV2ZWwrKztcbiAgICB9IGVsc2UgaWYoIHN0cltpXSA9PT0gJyknICkge1xuICAgICAgaWYoIGxldmVsID09PSAwICkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsLS07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBoYXNTZWxlY3RvciAoc2VsZWN0b3IsIHJvb3RFbGVtZW50KSB7XG4gIHZhciBzcGxpdEhhcyA9IHNlbGVjdG9yLnNwbGl0KCc6aGFzKCcpO1xuXG4gIHJldHVybiBzcGxpdEhhcy5yZWR1Y2UoZnVuY3Rpb24gKG1hdGNoZXMsIHBhcnRpYWwpIHtcblxuICAgIHZhciBjbG9zZVBvc2l0aW9uID0gZmluZEJ1YmJsZUNsb3NlKHBhcnRpYWwpLFxuICAgICAgICBoYXNGaWx0ZXIgPSBwYXJ0aWFsLnN1YnN0cigwLCBjbG9zZVBvc2l0aW9uKSxcbiAgICAgICAgcGFydGlhbFF1ZXJ5ID0gcGFydGlhbC5zdWJzdHIoY2xvc2VQb3NpdGlvbiArIDEpLnRyaW0oKTtcblxuICAgIGlmKCBjbG9zZVBvc2l0aW9uID09PSAtMSApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWFsZm9ybWVkIHNlbGVjdG9yJyk7XG4gICAgfVxuXG4gICAgbWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGhhc0ZpbHRlcik7XG4gICAgfSk7XG5cbiAgICBpZiggcGFydGlhbFF1ZXJ5ICkge1xuICAgICAgdmFyIHN1Ym1hdGNoZXMgPSBbXTtcblxuICAgICAgbWF0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIFtdLnB1c2guYXBwbHkoc3VibWF0Y2hlcywgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHBhcnRpYWxRdWVyeSkgKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc3VibWF0Y2hlcztcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcblxuICB9LCBbXS5zbGljZS5jYWxsKCAocm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoIHNwbGl0SGFzLnNoaWZ0KCkgKSApICk7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5U2VsZWN0b3IgKHNlbGVjdG9yLCByb290RWxlbWVudCkge1xuICAvLyAndHI6aGFzKD4gLnJvdykgZGl2OmhhcyhzcGFuKSBpbWcnLnNwbGl0KCc6aGFzKCcpO1xuICBpZiggIXNlbGVjdG9yICkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGlmKCAhL1xcOmhhc1xcKC8udGVzdChzZWxlY3RvcikgKSB7XG4gICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoIChyb290RWxlbWVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKSApO1xuICB9XG5cbiAgcmV0dXJuIGhhc1NlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuZnVuY3Rpb24gY3NzUXVlcnkgKF9zZWxlY3Rvciwgcm9vdEVsZW1lbnQpIHtcbiAgdmFyIHNlbGVjdG9ycyA9IF9zZWxlY3Rvci5zcGxpdCgvXFxzKixcXHMqLyk7XG5cbiAgcmV0dXJuIHNlbGVjdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKGxpc3QsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGxpc3QuY29uY2F0KCBxdWVyeVNlbGVjdG9yKHNlbGVjdG9yLCByb290RWxlbWVudCkgKTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxUb3AgKHZhbHVlKSB7XG4gIGlmKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSB2YWx1ZTtcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xufVxuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQgKGVsKSB7XG4gIHZhciBjaGlsZCA9IGVsLmZpcnN0Q2hpbGQ7XG5cbiAgd2hpbGUoIGNoaWxkICkge1xuICAgIGVsLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICBjaGlsZCA9IGVsLmZpcnN0Q2hpbGQ7XG4gIH1cbn1cblxuLy8gdmFyIF9jbGFzc0FjdGlvbnMgPSB7XG4vLyAgIGFkZDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdCA/IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbi8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbi8vICAgfSA6IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbi8vICAgICB2YXIgUkVfQ0xFQU5DTEFTUyA9IG5ldyBSZWdFeHAoJ1xcXFxiJyArIChjbGFzc05hbWUgfHwgJycpICsgJ1xcXFxiJywnJyk7XG4vLyAgICAgX2NsYXNzQWN0aW9ucy5yZW1vdmUoZWxlbWVudCwgY2xhc3NOYW1lKTtcbi8vICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG4vLyAgIH0sXG4vLyAgIHJlbW92ZTogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdCA/IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbi8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbi8vICAgfSA6IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbi8vICAgICB2YXIgUkVfQ0xFQU5DTEFTUyA9IG5ldyBSZWdFeHAoJ1xcXFxiJyArIChjbGFzc05hbWUgfHwgJycpICsgJ1xcXFxiJywnJyk7XG4vLyAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKFJFX0NMRUFOQ0xBU1MsJycpO1xuLy8gICB9LFxuLy8gICBhY3Rpb246IGZ1bmN0aW9uIChhY3Rpb24sIHRvb2xzKSB7XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbi8vICAgICAgIGlmKCBjbGFzc05hbWUuaW5kZXhPZignICcpID49IDAgKSB7XG4vLyAgICAgICAgIGNsYXNzTmFtZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGNuKSB7XG4vLyAgICAgICAgICAgX2NsYXNzQWN0aW9uc1thY3Rpb25dKGVsZW1lbnQsIGNuKTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBfY2xhc3NBY3Rpb25zW2FjdGlvbl0oZWxlbWVudCwgY2xhc3NOYW1lKTtcbi8vICAgICAgIH1cbi8vICAgICAgIHJldHVybiB0b29scztcbi8vICAgICB9O1xuLy8gICB9XG4vLyB9O1xuXG5mdW5jdGlvbiB3cml0ZUlmcmFtZSAoaWZyYW1lLCBjb250ZW50KSB7XG4gIHZhciBpZnJhbWVEb2MgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgdHJ5IHsgaWZyYW1lRG9jLmNoYXJzZXQgPSAnVVRGLTgnOyB9IGNhdGNoKGVycikge31cbiAgaWZyYW1lRG9jLm9wZW4oKTtcbiAgaWZyYW1lRG9jLndyaXRlKGNvbnRlbnQpO1xuICBpZnJhbWVEb2MuY2xvc2UoKTtcbn1cblxuZnVuY3Rpb24gZ2V0SUZyYW1lIChpZnJhbWVTdHlsZXMpIHtcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICByZXF1aXJlKCduaXRyby10b29scy9leHRlbmQnKS5leHRlbmQoaWZyYW1lLnN0eWxlLCBpZnJhbWVTdHlsZXMgfHwge30pO1xuXG4gIGlmcmFtZS5mcmFtZUJvcmRlciA9ICcwJztcbiAgLy8gaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGlmcmFtZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICB9O1xuICByZXR1cm4gaWZyYW1lO1xufVxuXG52YXIgXyA9IHtcbiAgcmVhZHk6IF9yZWFkeSxcbiAgZ2V0SUZyYW1lOiBnZXRJRnJhbWUsXG4gIHdyaXRlSWZyYW1lOiB3cml0ZUlmcmFtZSxcbiAgY3NzUXVlcnk6IGNzc1F1ZXJ5LFxuICBzY3JvbGxUb3A6IHNjcm9sbFRvcCxcbiAgY2xlYXJFbGVtZW50OiBjbGVhckVsZW1lbnQsXG4gIGVsZW1lbnREYXRhOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5kYXRhc2V0ID8gZnVuY3Rpb24gKGVsLCBrZXksIHZhbHVlKSB7XG4gICAgaWYoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICBlbC5kYXRhc2V0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGVsLmRhdGFzZXRba2V5XTtcbiAgfSA6IGZ1bmN0aW9uIChlbCwga2V5LCB2YWx1ZSkge1xuICAgIGlmKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLScgKyBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsga2V5KTtcbiAgfSxcbn07XG5cbi8vIHZhciBhZGRDbGFzcyA9IF9jbGFzc0FjdGlvbnMuYWN0aW9uKCdhZGQnLCBfICksXG4vLyAgICAgcmVtb3ZlQ2xhc3MgPSBfY2xhc3NBY3Rpb25zLmFjdGlvbigncmVtb3ZlJywgXyApO1xuXG4vLyBfLmFkZENsYXNzID0gYWRkQ2xhc3M7XG4vLyBfLnJlbW92ZUNsYXNzID0gcmVtb3ZlQ2xhc3M7XG5cbl8uYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xufTtcblxuXy5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF87XG4iLCJcblxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgcmV0dXJuIFtwYXJzZUludChyZXN1bHRbMV0sIDE2KSwgcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksIHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXTtcbn1cblxuZnVuY3Rpb24gYnJpZ2h0bmVzcyAoY29sb3IpIHtcbiAgdmFyIHJnYiA9IGhleFRvUmdiKGNvbG9yKTtcbiAgdmFyIG8gPSBNYXRoLnJvdW5kKCgocGFyc2VJbnQocmdiWzBdKSAqIDI5OSkgKyAocGFyc2VJbnQocmdiWzFdKSAqIDU4NykgKyAocGFyc2VJbnQocmdiWzJdKSAqIDExNCkpIC8xMDAwKTtcbiAgcmV0dXJuIG8gPCAxMDAgPyAnZGFyaycgOiAoIG8gPiAyMzAgPyAnbGlnaHQnIDogJ21lZGl1bScgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGhleFRvUmdiOiBoZXhUb1JnYixcbiAgYnJpZ2h0bmVzczogYnJpZ2h0bmVzc1xufTtcbiIsIlxuXG52YXIgaW1wb3J0YW50Q1NTID0gZnVuY3Rpb24gKGNzcykge1xuICAgICAgcmV0dXJuIGNzcy5yZXBsYWNlKC87L2csICcgIWltcG9ydGFudDsnKS5yZXBsYWNlKC86KFteOjtdKz8pfS9nLCBmdW5jdGlvbiAobWF0Y2hlZCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICc6JyArIHZhbHVlICsgJyAhaW1wb3J0YW50O30nO1xuICAgICAgfSkucmVwbGFjZSgvKFxcZCslfGZyb218dG8peyhbXn1dKykvZywgZnVuY3Rpb24gKG1hdGNoZWQsIHBvcywgY29udGVudCkge1xuICAgICAgICByZXR1cm4gcG9zICsgJ3snICsgY29udGVudC5yZXBsYWNlKC8gIWltcG9ydGFudDsvZywgJzsnKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY3NzSGFjayA9IChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2FjaGUgPSB7fSxcbiAgICAgICAgICBoYWNrcyA9IHtcbiAgICAgICAgICAgIG92ZXJsYXk6IGltcG9ydGFudENTUyhyZXF1aXJlKCcuLi8uLi8udG1wL2Nzcy1oYWNrcy9vdmVybGF5JykpLFxuICAgICAgICAgICAgYmx1cjogaW1wb3J0YW50Q1NTKHJlcXVpcmUoJy4uLy4uLy50bXAvY3NzLWhhY2tzL2JsdXInKSksXG4gICAgICAgICAgICBsb2dvOiBpbXBvcnRhbnRDU1MocmVxdWlyZSgnLi4vLi4vLnRtcC9jc3MtaGFja3MvbG9nbycpKSxcbiAgICAgICAgICAgIG1vZGFsOiBpbXBvcnRhbnRDU1MocmVxdWlyZSgnLi4vLi4vLnRtcC9jc3MtaGFja3MvbW9kYWwnKSlcbiAgICAgICAgICB9O1xuXG4gICAgICAvLyBjb25zb2xlLmxvZygnY3NzSGFja3MnLCBoYWNrcyk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiBoYWNrIChoYWNrTmFtZSkge1xuICAgICAgICBpZiggIWNhY2hlW2hhY2tOYW1lXSApIHtcbiAgICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGhhY2tzW2hhY2tOYW1lXTtcblxuICAgICAgICAgIHZhciBlbmFibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBzdHlsZS5oYWNrID0gZnVuY3Rpb24gKGVuYWJsZSkge1xuICAgICAgICAgICAgZW5hYmxlID0gZW5hYmxlID09PSB1bmRlZmluZWQgfHwgZW5hYmxlO1xuXG4gICAgICAgICAgICBpZiggZW5hYmxlICkge1xuICAgICAgICAgICAgICBpZiggZW5hYmxlZCApIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgIGVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmKCAhZW5hYmxlZCApIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgIGVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChzdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNhY2hlW2hhY2tOYW1lXSA9IHN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZVtoYWNrTmFtZV07XG4gICAgICB9O1xuICAgIH0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gY3NzSGFjaztcbiIsIlxuXG5mdW5jdGlvbiBfa2V5IChvLCBrZXksIHZhbHVlKSB7XG5cdGtleS5zcGxpdCgnLicpLmZvckVhY2goZnVuY3Rpb24gKGssIGksIGtleXMpIHtcblx0XHRpZiggaSA9PT0ga2V5cy5sZW5ndGggLSAxICkge1xuXHRcdFx0b1trXSA9IHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvW2tdID0gb1trXSB8fCB7fTtcblx0XHRcdG8gPSBvW2tdO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNhbWVsQ2FzZSAodGV4dCkge1xuXHRyZXR1cm4gdGV4dC5yZXBsYWNlKC9fKFxcdykvZywgZnVuY3Rpb24gKG1hdGNoZWQsIGxldHRlcikge1xuXHRcdHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplIChxdWVyeXN0cmluZywgZGVjb2RlKSB7XG5cblx0dmFyIHJlc3VsdCA9IHt9O1xuXG5cdHF1ZXJ5c3RyaW5nLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbiAoa2V5VmFsdWUpIHtcblx0XHR2YXIgbWF0Y2hlZCA9IGtleVZhbHVlLm1hdGNoKC8oLio/KT0oLiopLyk7XG5cblx0XHRpZiggIW1hdGNoZWQgKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCBwYXJzZSAnICsga2V5VmFsdWUpO1xuXHRcdH1cblxuXHRcdF9rZXkocmVzdWx0LCBjYW1lbENhc2UobWF0Y2hlZFsxXSksIGRlY29kZSA/IGRlY29kZVVSSShtYXRjaGVkWzJdKSA6IG1hdGNoZWRbMl0gKTtcblxuXHR9KTtcblxuXHRyZXR1cm4gcmVzdWx0O1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVzZXJpYWxpemU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzdXNjcmlwdG9ycyA9IFtdLFxuICAgIHJ1bm5pbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gaW5pdExpdmVET00gKCkge1xuXG4gIHJlcXVpcmUoJy4vYnJvd3Nlci10b29scycpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTVN1YnRyZWVNb2RpZmllZCcsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGZvciggdmFyIGkgPSAwLCBuID0gc3VzY3JpcHRvcnMubGVuZ3RoOyBpIDwgbiA7IGkrKyApIHtcbiAgICAgICAgc3VzY3JpcHRvcnNbaV0oZXZlbnQudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG4gIH0pO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdWJzY3JpYmU6IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgaWYoICFydW5uaW5nICkge1xuICAgICAgaW5pdExpdmVET00odHJ1ZSk7XG4gICAgICBydW5uaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoIGhhbmRsZXIgaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICAgIHN1c2NyaXB0b3JzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuICB9XG59O1xuIiwiXG5cbmZ1bmN0aW9uIGdldEVycm9yT2JqZWN0KCl7XG4gICAgdHJ5IHsgdGhyb3cgRXJyb3IoJycpOyB9IGNhdGNoKGVycikgeyByZXR1cm4gZXJyOyB9XG59XG5cbmZ1bmN0aW9uIGxvZyAoKSB7XG4gIHZhciBlcnIgPSBnZXRFcnJvck9iamVjdCgpLFxuICAgICAgY2FsbGVyX2xpbmUgPSBlcnIuc3RhY2suc3BsaXQoJ1xcbicpWzRdIHx8ICcnLFxuICAgICAgaW5kZXggPSBjYWxsZXJfbGluZS5pbmRleE9mKCdhdCAnKTtcblxuICBsb2cuaGlzdG9yeS5wdXNoKHtcbiAgICB0aW1lOiBuZXcgRGF0ZSgpLFxuICAgIGFyZ3M6IGFyZ3VtZW50cyxcbiAgICB0cmFjazoge1xuICAgICAgY2FsbGVyX2xpbmU6IGNhbGxlcl9saW5lLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgY2xlYW46IGNhbGxlcl9saW5lLnNsaWNlKGluZGV4ICsgMiwgY2FsbGVyX2xpbmUubGVuZ3RoKVxuICAgIH1cbiAgfSk7XG5cbiAgLy8gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxubG9nLmhpc3RvcnkgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBsb2c7XG4iLCJcbnZhciBtZXNzYWdlVGFyZ2V0ID0ge30sXG4gICAgc2hvd0xvZ3MgPSBmYWxzZTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZSkge1xuICB2YXIgbWVzc2FnZSA9IGUuZGF0YSxcbiAgICAgIGxpc3RlbmVycyA9IG1lc3NhZ2VUYXJnZXRbbWVzc2FnZS5hcGxhemFtZV07XG5cbiAgaWYoICFsaXN0ZW5lcnMgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYoIHNob3dMb2dzICYmICFlLnVzZWQgKSB7XG4gICAgY29uc29sZS5sb2coJ21lc3NhZ2UnLCBlLCBsaXN0ZW5lcnMpO1xuICB9XG5cbiAgaWYoICFlLnVzZWQgKSB7XG4gICAgZS51c2VkID0gdHJ1ZTtcbiAgICBmb3IoIHZhciBpID0gMCwgbiA9IGxpc3RlbmVycy5sZW5ndGggOyBpIDwgbiA7IGkrKyApIHtcbiAgICAgIGxpc3RlbmVyc1tpXShlLCBtZXNzYWdlKTtcbiAgICB9XG4gIH1cbn0sIHRydWUpO1xuXG5mdW5jdGlvbiBvbk1lc3NhZ2UgKHRhcmdldCwgaGFuZGxlciwgbG9ncykge1xuICBzaG93TG9ncyA9IGxvZ3M7XG4gIGlmKCB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyAmJiBoYW5kbGVyIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgbWVzc2FnZVRhcmdldFt0YXJnZXRdID0gbWVzc2FnZVRhcmdldFt0YXJnZXRdIHx8IFtdO1xuICAgIG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XS5wdXNoKGhhbmRsZXIpO1xuICB9XG59XG5cbm9uTWVzc2FnZS5vZmYgPSBmdW5jdGlvbiAodGFyZ2V0LCBoYW5kbGVyKSB7XG4gIGlmKCB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyAmJiBoYW5kbGVyIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgbWVzc2FnZVRhcmdldFt0YXJnZXRdID0gbWVzc2FnZVRhcmdldFt0YXJnZXRdIHx8IFtdO1xuICAgIHZhciBpID0gbWVzc2FnZVRhcmdldFt0YXJnZXRdLmluZGV4T2YoaGFuZGxlcik7XG4gICAgaWYoIGkgIT09IC0xICkge1xuICAgICAgbWVzc2FnZVRhcmdldFt0YXJnZXRdLnNwbGljZShpLDEpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBvbk1lc3NhZ2U7XG4iLCJcbmZ1bmN0aW9uIHRlbXBsYXRlIChuYW1lLCBkYXRhKXtcbiAgcmV0dXJuIHRlbXBsYXRlLmNhY2hlW25hbWVdKGRhdGEgfHwge30pO1xufVxuXG50ZW1wbGF0ZS5jYWNoZSA9IHt9O1xuXG50ZW1wbGF0ZS5jb21waWxlID0gZnVuY3Rpb24gKHRtcGwpIHtcbiAgLy8gSm9obiBSZXNpZyBtaWNyby10ZW1wbGF0ZVxuICByZXR1cm4gbmV3IEZ1bmN0aW9uKCdvYmonLCAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICAndmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307JyArXG5cbiAgICAvLyBJbnRyb2R1Y2UgdGhlIGRhdGEgYXMgbG9jYWwgdmFyaWFibGVzIHVzaW5nIHdpdGgoKXt9XG4gICAgJ3dpdGgob2JqKXtwLnB1c2goXFwnJyArXG5cbiAgICAvLyBDb252ZXJ0IHRoZSB0ZW1wbGF0ZSBpbnRvIHB1cmUgSmF2YVNjcmlwdFxuICAgIHRtcGwudHJpbSgpXG4gICAgICAucmVwbGFjZSgvW1xcclxcdFxcbl0vZywgJyAnKVxuICAgICAgLnNwbGl0KCc8JScpLmpvaW4oJ1xcdCcpXG4gICAgICAucmVwbGFjZSgvKChefCU+KVteXFx0XSopJy9nLCAnJDFcXHInKVxuICAgICAgLnJlcGxhY2UoL1xcdD0oLio/KSU+L2csICdcXCcsJDEsXFwnJylcbiAgICAgIC5zcGxpdCgnXFx0Jykuam9pbignXFwnKTsnKVxuICAgICAgLnNwbGl0KCclPicpLmpvaW4oJ3AucHVzaChcXCcnKVxuICAgICAgLnNwbGl0KCdcXHInKS5qb2luKCdcXFxcXFwnJykgKyAnXFwnKTt9cmV0dXJuIHAuam9pbihcXCdcXCcpOycpO1xufTtcblxudGVtcGxhdGUucHV0ID0gZnVuY3Rpb24gKG5hbWUsIHRtcGwpIHtcbiAgdGVtcGxhdGUuY2FjaGVbbmFtZV0gPSB0ZW1wbGF0ZS5jb21waWxlKHRtcGwpO1xufTtcblxudGVtcGxhdGUubG9va3VwID0gZnVuY3Rpb24gKCkge1xuICBbXS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W3R5cGU9XCJhcHBsaWNhdGlvbi94LXRlbXBsYXRlXCJdW2RhdGEtdGVtcGxhdGVdJyksIGZ1bmN0aW9uICh0bXBsKSB7XG4gICAgdGVtcGxhdGUucHV0KHRtcGwuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyksIHRtcGwudGV4dCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTtcbiIsIlxudmFyIF8gPSByZXF1aXJlKCd2YW5pbGxhLXRvb2xzJyk7XG5cbl8uZXh0ZW5kKF8sXG4gIHJlcXVpcmUoJ25pdHJvLXRvb2xzL2xpc3RzJyksXG4gIHJlcXVpcmUoJ25pdHJvLXRvb2xzL3BhdGgnKSxcbiAgcmVxdWlyZSgnLi9jb2xvcnMnKSxcbiAgcmVxdWlyZSgnLi9icm93c2VyLXRvb2xzJyksXG4gIHJlcXVpcmUoJy4vYW1vdW50LXByaWNlJyksXG4gIHtcbiAgICBsaXZlRE9NOiByZXF1aXJlKCcuL2xpdmUtZG9tJyksXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdGVtcGxhdGUnKSxcbiAgICBvbk1lc3NhZ2U6IHJlcXVpcmUoJy4vbWVzc2FnZS1saXN0ZW5lcicpLFxuICAgIGRlc2VyaWFsaXplOiByZXF1aXJlKCcuL2Rlc2VyaWFsaXplJylcbiAgfVxuKTtcblxuXy5sb2cgPSByZXF1aXJlKCcuL2xvZycpO1xuXy5ub29wID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBfO1xuIl19