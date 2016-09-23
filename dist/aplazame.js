(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '0.0.347';
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

require('./browser-polyfills/current-script');
require('./browser-polyfills/date');
require('./browser-polyfills/dom-closest');
require('./browser-polyfills/event-listener');
require('./browser-polyfills/match-media');
require('./browser-polyfills/matches-selector');
},{"./browser-polyfills/current-script":23,"./browser-polyfills/date":24,"./browser-polyfills/dom-closest":25,"./browser-polyfills/event-listener":26,"./browser-polyfills/match-media":27,"./browser-polyfills/matches-selector":28}],23:[function(require,module,exports){

document.currentScript = document.currentScript || (function() {
   var scripts = document.getElementsByTagName('script');
   return scripts[scripts.length - 1];
 })();
},{}],24:[function(require,module,exports){

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

},{"./browser-polyfills":22,"./deferred/animate":30,"./deferred/wait":31,"./fn/debounce":32,"./fn/ready":33,"./fn/template":34,"./utils/dom":35,"./utils/events":36,"./utils/normalize":37,"./utils/scroll/bundle":40,"classlist.js":9,"nitro-tools/extend":13,"nitro-tools/key":14,"nitro-tools/path":16,"nitro-tools/type":17}],30:[function(require,module,exports){

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

if( document.documentMode || /Edge\//.test(navigator.userAgent) ) {
  require('q-promise').usePolyfill();
}

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


// global.$q = require('q-promise');
// global.$http = require('http-browser');

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../.tmp/aplazame-version":1,"./apps/button":43,"./apps/checkout":44,"./apps/http-service":45,"./apps/modal":47,"./apps/simulator":48,"./core/api":50,"./core/core":51,"./loaders/data-aplazame":53,"./loaders/data-button":54,"./loaders/data-simulator":55,"./tools/log":62,"q-promise":20}],43:[function(require,module,exports){
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

},{"../core/api-http":49,"../tools/tools":65}],44:[function(require,module,exports){
'use strict';

var api = require('../core/api'),
    _ = require('../tools/tools'),
    http = require('http-browser'),
    $q = require('q-promise'),
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

},{"../core/api":50,"../tools/css-hack":59,"../tools/tools":65,"./loading-svg":46,"http-browser":11,"q-promise":20}],45:[function(require,module,exports){
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

},{"../tools/tools":65,"http-browser":11}],46:[function(require,module,exports){

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

},{"../../.tmp/aplazame-version":1,"../core/api":50,"../tools/css-hack":59,"../tools/tools":65}],48:[function(require,module,exports){
'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools'),
    $q = require('q-promise'),
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

},{"../core/api-http":49,"../tools/tools":65,"q-promise":20}],49:[function(require,module,exports){
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

},{"../../.tmp/aplazame-version":1,"../tools/tools":65,"./api":50,"http-browser":11}],50:[function(require,module,exports){
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

},{"../../.tmp/aplazame-version":1,"../tools/tools":65,"./api-http":49,"./init":52}],52:[function(require,module,exports){
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

},{"../tools/tools":65,"./api":50}],53:[function(require,module,exports){
'use strict';

module.exports = function (aplazame) {

  var _ = aplazame._,
      script = document.currentScript,
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
      $q = require('q-promise');

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

},{"q-promise":20}],55:[function(require,module,exports){
'use strict';

module.exports = function (aplazame) {

  var _ = aplazame._,
      $q = require('q-promise'),
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

},{"../../.tmp/simulator/templates/modal-instalments":6,"../../.tmp/simulator/templates/widget-raw":7,"../core/api":50,"events-wrapper":10,"q-promise":20}],56:[function(require,module,exports){

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

},{}],57:[function(require,module,exports){

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

},{"nitro-tools/extend":13}],58:[function(require,module,exports){


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

},{}],59:[function(require,module,exports){


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

},{"../../.tmp/css-hacks/blur":2,"../../.tmp/css-hacks/logo":3,"../../.tmp/css-hacks/modal":4,"../../.tmp/css-hacks/overlay":5}],60:[function(require,module,exports){


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

},{}],61:[function(require,module,exports){
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

},{"./browser-tools":57}],62:[function(require,module,exports){


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

},{}],63:[function(require,module,exports){

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

},{}],64:[function(require,module,exports){

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

},{}],65:[function(require,module,exports){

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

},{"./amount-price":56,"./browser-tools":57,"./colors":58,"./deserialize":60,"./live-dom":61,"./log":62,"./message-listener":63,"./template":64,"nitro-tools/lists":15,"nitro-tools/path":16,"vanilla-tools":29}]},{},[42])
undefined
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8udG1wL2FwbGF6YW1lLXZlcnNpb24uanMiLCIuLi8udG1wL2Nzcy1oYWNrcy9ibHVyLmpzIiwiLi4vLnRtcC9jc3MtaGFja3MvbG9nby5qcyIsIi4uLy50bXAvY3NzLWhhY2tzL21vZGFsLmpzIiwiLi4vLnRtcC9jc3MtaGFja3Mvb3ZlcmxheS5qcyIsIi4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy9tb2RhbC1pbnN0YWxtZW50cy5qcyIsIi4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy93aWRnZXQtcmF3LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Jlemllci1lYXNpbmcvc3JjL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NsYXNzbGlzdC5qcy9jbGFzc0xpc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvZXZlbnRzLXdyYXBwZXIvZXZlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2h0dHAtYnJvd3Nlci9zcmMvaHR0cC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy9fZXh0ZW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL25pdHJvLXRvb2xzL2V4dGVuZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy9rZXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbml0cm8tdG9vbHMvbGlzdHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbml0cm8tdG9vbHMvcGF0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3EtcHJvbWlzZS9saWIvcHJvbWlzZS1tZXRob2RzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3EtcHJvbWlzZS9saWIvcHJvbWlzZS1wb2x5ZmlsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9xLXByb21pc2UvbGliL3EuanMiLCIuLi9ub2RlX21vZHVsZXMvcS1wcm9taXNlL2xpYi9xaXplci5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2Jyb3dzZXItcG9seWZpbGxzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMvY3VycmVudC1zY3JpcHQuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9icm93c2VyLXBvbHlmaWxscy9kYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMvZG9tLWNsb3Nlc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9icm93c2VyLXBvbHlmaWxscy9ldmVudC1saXN0ZW5lci5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2Jyb3dzZXItcG9seWZpbGxzL21hdGNoLW1lZGlhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMvbWF0Y2hlcy1zZWxlY3Rvci5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2J1bmRsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2RlZmVycmVkL2FuaW1hdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9kZWZlcnJlZC93YWl0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvZm4vZGVib3VuY2UuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9mbi9yZWFkeS5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2ZuL3RlbXBsYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvZG9tLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvZXZlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvbm9ybWFsaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsL2FuaW1hdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy91dGlscy9zY3JvbGwvYnVuZGxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsL3RvcC1jbGFzcy5qcyIsImFwbGF6YW1lLmpzIiwiYXBwcy9idXR0b24uanMiLCJhcHBzL2NoZWNrb3V0LmpzIiwiYXBwcy9odHRwLXNlcnZpY2UuanMiLCJhcHBzL2xvYWRpbmctc3ZnLmpzIiwiYXBwcy9tb2RhbC5qcyIsImFwcHMvc2ltdWxhdG9yLmpzIiwiY29yZS9hcGktaHR0cC5qcyIsImNvcmUvYXBpLmpzIiwiY29yZS9jb3JlLmpzIiwiY29yZS9pbml0LmpzIiwibG9hZGVycy9kYXRhLWFwbGF6YW1lLmpzIiwibG9hZGVycy9kYXRhLWJ1dHRvbi5qcyIsImxvYWRlcnMvZGF0YS1zaW11bGF0b3IuanMiLCJ0b29scy9hbW91bnQtcHJpY2UuanMiLCJ0b29scy9icm93c2VyLXRvb2xzLmpzIiwidG9vbHMvY29sb3JzLmpzIiwidG9vbHMvY3NzLWhhY2suanMiLCJ0b29scy9kZXNlcmlhbGl6ZS5qcyIsInRvb2xzL2xpdmUtZG9tLmpzIiwidG9vbHMvbG9nLmpzIiwidG9vbHMvbWVzc2FnZS1saXN0ZW5lci5qcyIsInRvb2xzL3RlbXBsYXRlLmpzIiwidG9vbHMvdG9vbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDOUZBO0FBQ0E7QUFDQTs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSAnMC4wLjM0Nyc7IiwibW9kdWxlLmV4cG9ydHMgPSAnQC13ZWJraXQta2V5ZnJhbWVzIGFwbGF6YW1lLWJsdXJ7MCV7LXdlYmtpdC1maWx0ZXI6Ymx1cigwKTtmaWx0ZXI6Ymx1cigwKTt9dG97LXdlYmtpdC1maWx0ZXI6Ymx1cigzcHgpO2ZpbHRlcjpibHVyKDNweCl9fUBrZXlmcmFtZXMgYXBsYXphbWUtYmx1cnswJXstd2Via2l0LWZpbHRlcjpibHVyKDApO2ZpbHRlcjpibHVyKDApfXRvey13ZWJraXQtZmlsdGVyOmJsdXIoM3B4KTtmaWx0ZXI6Ymx1cigzcHgpfX1ib2R5LmFwbGF6YW1lLWJsdXI+Om5vdCguYXBsYXphbWUtbW9kYWwpOm5vdCguYXBsYXphbWUtb3ZlcmxheSl7LXdlYmtpdC1maWx0ZXI6Ymx1cigzcHgpO2ZpbHRlcjpibHVyKDNweCl9QG1lZGlhIChtaW4td2lkdGg6NjAxcHgpe2JvZHkuYXBsYXphbWUtYmx1cj46bm90KC5hcGxhemFtZS1tb2RhbCk6bm90KC5hcGxhemFtZS1vdmVybGF5KXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjouNHM7YW5pbWF0aW9uLWR1cmF0aW9uOi40czstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWJsdXI7YW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtYmx1cn19Ym9keS5hcGxhemFtZS11bmJsdXI+Om5vdCguYXBsYXphbWUtbW9kYWwpOm5vdCguYXBsYXphbWUtb3ZlcmxheSl7LXdlYmtpdC1maWx0ZXI6Ymx1cigwKTtmaWx0ZXI6Ymx1cigwKX1AbWVkaWEgKG1pbi13aWR0aDo2MDFweCl7Ym9keS5hcGxhemFtZS11bmJsdXI+Om5vdCguYXBsYXphbWUtbW9kYWwpOm5vdCguYXBsYXphbWUtb3ZlcmxheSl7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246LjRzO2FuaW1hdGlvbi1kdXJhdGlvbjouNHM7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphcGxhemFtZS1ibHVyO2FuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWJsdXI7LXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOnJldmVyc2U7YW5pbWF0aW9uLWRpcmVjdGlvbjpyZXZlcnNlfX0nOyIsIm1vZHVsZS5leHBvcnRzID0gJ0Atd2Via2l0LWtleWZyYW1lcyBhcGxhemFtZS1sb2dvLWxhcmdlezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpO302MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX05MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfX1Aa2V5ZnJhbWVzIGFwbGF6YW1lLWxvZ28tbGFyZ2V7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9NjAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9OTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19QC13ZWJraXQta2V5ZnJhbWVzIGFwbGF6YW1lLWxvZ28tc2hvcnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9MzAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTkwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMXR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fUBrZXlmcmFtZXMgYXBsYXphbWUtbG9nby1zaG9ydHswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX0zMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9OTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxdHVybik7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDF0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19QC13ZWJraXQta2V5ZnJhbWVzIGFwbGF6YW1lLWxvZ28tc21pbGV7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9OTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgydHVybik7dHJhbnNmb3JtOnJvdGF0ZSgydHVybil9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDJ0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDJ0dXJuKX19QGtleWZyYW1lcyBhcGxhemFtZS1sb2dvLXNtaWxlezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTkwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMnR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMnR1cm4pfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgydHVybik7dHJhbnNmb3JtOnJvdGF0ZSgydHVybil9fS5sb2dvLWFwbGF6YW1le3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjE1MHB4O2hlaWdodDoxNTBweH0ubG9nby1hcGxhemFtZSAubGluZS1sYXJnZSwubG9nby1hcGxhemFtZSAubGluZS1zaG9ydCwubG9nby1hcGxhemFtZSAuc21pbGV7c3Ryb2tlOiNkZGR9LmxvZ28tYXBsYXphbWUgLnNtaWxlLW91dGxpbmV7c3Ryb2tlOiM0ODUyNTl9QG1lZGlhIChtaW4td2lkdGg6NDgwcHgpey5sb2dvLWFwbGF6YW1le3dpZHRoOjIwMHB4O2hlaWdodDoyMDBweH19LmxvZ28tYXBsYXphbWUgc3Zne3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5sb2dvLWFwbGF6YW1lLmFuaW1hdGUgLmxpbmUtbGFyZ2UsLmxvZ28tYXBsYXphbWUuYW5pbWF0ZSAubGluZS1zaG9ydCwubG9nby1hcGxhemFtZS5hbmltYXRlIC5zbWlsZXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApOy13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkczthbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjEuNXM7YW5pbWF0aW9uLWR1cmF0aW9uOjEuNXM7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGV9LmxvZ28tYXBsYXphbWUuYW5pbWF0ZSAuc21pbGV7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphcGxhemFtZS1sb2dvLXNtaWxlO2FuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWxvZ28tc21pbGV9LmxvZ28tYXBsYXphbWUuYW5pbWF0ZSAubGluZS1sYXJnZXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWxvZ28tbGFyZ2U7YW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtbG9nby1sYXJnZX0ubG9nby1hcGxhemFtZS5hbmltYXRlIC5saW5lLXNob3J0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtbG9nby1zaG9ydDthbmltYXRpb24tbmFtZTphcGxhemFtZS1sb2dvLXNob3J0fSc7IiwibW9kdWxlLmV4cG9ydHMgPSAnLmFwbGF6YW1lLW1vZGFse2hlaWdodDoxMDAlO2hlaWdodDoxMDB2aDtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjIxNDc0ODM2NDc7fWJvZHl7b3ZlcmZsb3c6aGlkZGVufUBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KXtodG1se2JhY2tncm91bmQtY29sb3I6IzMzM2EzZX1ib2R5LGh0bWx7aGVpZ2h0OjEwMHZoO21hcmdpbjowO3BhZGRpbmc6MH1ib2R5Pjpub3QoLmFwbGF6YW1lLW1vZGFsKXtkaXNwbGF5Om5vbmV9fUBtZWRpYSAobWluLXdpZHRoOjYwMXB4KXsuYXBsYXphbWUtbW9kYWx7cG9zaXRpb246Zml4ZWR9fSc7IiwibW9kdWxlLmV4cG9ydHMgPSAnQC13ZWJraXQta2V5ZnJhbWVzIGFwbGF6YW1lLW92ZXJsYXl7MCV7b3BhY2l0eTowO310b3tvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYXBsYXphbWUtb3ZlcmxheXswJXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX0uYXBsYXphbWUtb3ZlcmxheXtmb250LWZhbWlseTpNb250c2VycmF0LHNhbnMtc2VyaWY7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDB2dztoZWlnaHQ6MTAwdmg7YmFja2dyb3VuZDpyZ2JhKDUzLDY0LDcxLC45KTt0ZXh0LWFsaWduOmNlbnRlcjt6LWluZGV4OjIxNDc0ODM2NDY7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX0uYXBsYXphbWUtb3ZlcmxheTpiZWZvcmV7Y29udGVudDpcXCdcXCc7ZGlzcGxheTpibG9jaztoZWlnaHQ6NTB2aH0uYXBsYXphbWUtbG9nby13cmFwcGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi10b3A6LTUwJX0uYXBsYXphbWUtb3ZlcmxheS1sb2FkaW5nLXRleHR7Y29sb3I6Izk1YTZiMTttYXJnaW4tdG9wOjE0cHg7Zm9udC1zaXplOjE0cHh9LmFwbGF6YW1lLW92ZXJsYXktbG9hZGluZy10ZXh0IC50ZXh0LWVycm9ye2NvbG9yOiNmMDgwODB9LmFwbGF6YW1lLW92ZXJsYXktbG9hZGluZy10ZXh0IGF7Y29sb3I6I2Y1ZjVmNTtkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWRlY29yYXRpb246bm9uZX0uYXBsYXphbWUtb3ZlcmxheS1sb2FkaW5nLXRleHQgYTpob3Zlcntib3JkZXItYm90dG9tOjFweCBkb3R0ZWQgI2Y1ZjVmNX0uYXBsYXphbWUtb3ZlcmxheXstd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7YW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkc30uYXBsYXphbWUtb3ZlcmxheS5hcGxhemFtZS1vdmVybGF5LWhpZGUsLmFwbGF6YW1lLW92ZXJsYXkuYXBsYXphbWUtb3ZlcmxheS1zaG93ey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246LjZzO2FuaW1hdGlvbi1kdXJhdGlvbjouNnM7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphcGxhemFtZS1vdmVybGF5O2FuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLW92ZXJsYXl9LmFwbGF6YW1lLW92ZXJsYXkuYXBsYXphbWUtb3ZlcmxheS1oaWRley13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjpyZXZlcnNlO2FuaW1hdGlvbi1kaXJlY3Rpb246cmV2ZXJzZX0nOyIsIm1vZHVsZS5leHBvcnRzID0gJzxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj4gIDxoZWFkZXIgY2xhc3M9XCJhcGxhemFtZVwiPjwvaGVhZGVyPiAgPHNlY3Rpb24gY2xhc3M9XCJpbmZvXCI+ICAgIEVsaWdlIGVsIG7Dum1lcm8gZGUgbWVzZXMgeSBsYSBjdW90YSBxdWUgbcOhcyB0ZSBjb252ZW5nYW4gIDwvc2VjdGlvbj4gIDxkaXYgY2xhc3M9XCJjaG9pY2VzLXdyYXBwZXJcIj4gICAgPCUgZm9yKCB2YXIgaSA9IGNob2ljZXMubGVuZ3RoIC0gMSA7IGkgPj0gMCA7IGktLSApIHsgJT4gICAgPGJ1dHRvbiBuZy1yZXBlYXQ9XCJjaG9pY2UgaW4gY2hvaWNlc1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNob2ljZVwiIG5nLWNsaWNrPVwic2VsZWN0Q2hvaWNlKGNob2ljZSlcIiBuZy1jbGFzcz1cInsgYWN0aXZlOiBjaG9pY2UgPT09IGN1cnJlbnRDaG9pY2UgfVwiPiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCI+ICAgICAgICA8ZGl2IGNsYXNzPVwibnVtLWluc3RhbG1lbnRzXCI+ICAgICAgICAgIDxzcGFuPjwlPSBjaG9pY2VzW2ldLm51bV9pbnN0YWxtZW50cyAlPjwvc3Bhbj4mbmJzcDs8c3Bhbj48JT0gbW9udGhzKGNob2ljZXNbaV0ubnVtX2luc3RhbG1lbnRzKSAlPjwvc3Bhbj4gICAgICAgIDwvZGl2PiAgICAgICAgPGRpdiBjbGFzcz1cImFtb3VudFwiPiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFtb3VudC1hbW91bnRcIj48JT0gZ2V0QW1vdW50KGNob2ljZXNbaV0uYW1vdW50KSAlPjwvc3Bhbj48IS0tICAgICAgICAgIC0tPjxzcGFuIGNsYXNzPVwiYW1vdW50LWN1cnJlbmN5XCI+4oKsPC9zcGFuPjwhLS0gICAgICAgICAgLS0+PHNwYW4gY2xhc3M9XCJhbW91bnQtcGVyLW1vbnRoXCI+L21lczwvc3Bhbj48L2Rpdj4gICAgICA8L2Rpdj4gICAgPC9idXR0b24+ICAgIDwlIH0gJT4gIDwvZGl2PiAgPHNlY3Rpb24gY2xhc3M9XCJ0YWVcIj5UQUUgbcOheGltbzogPCU9IGdldEFtb3VudChjaG9pY2VzWzBdLmFubnVhbF9lcXVpdmFsZW50KSAlPiU8L3NlY3Rpb24+ICA8c2VjdGlvbiBjbGFzcz1cImhvdy1pdC13b3Jrc1wiPiAgICA8aGVhZGVyPsK/Q8OzbW8gZnVuY2lvbmE/PC9oZWFkZXI+ICAgIDxkaXYgY2xhc3M9XCJpbmZvLXdyYXBwZXJcIj4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPiAgICAgICAgPGgzPkVsaWdlIEFwbGF6YW1lPC9oMz4gICAgICAgIDxwPmVuIGxhIHRpZW5kYSwgY3VhbmRvIHZheWFzIGEgcGFnYXIgZWwgcGVkaWRvLjwvcD4gICAgICA8L2Rpdj4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPiAgICAgICAgPGgzPkRlY2lkZSBjw7NtbyBxdWllcmVzIHBhZ2FyPC9oMz4gICAgICAgIDxwPkhhc3RhIGVuIDEyIGN1b3RhcywgcGFnYW5kbyBjb24gdGFyamV0YS48L3A+ICAgICAgPC9kaXY+ICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj4gICAgICAgIDxoMz5EaXNmcnV0YSBkZSB0dSBjb21wcmE8L2gzPiAgICAgICAgPHA+RGVzZGUgQXBsYXphbWUgZXN0YXJlbW9zIGRpc3BvbmlibGVzIHBvciBzaSBuZWNlc2l0YXMgY3VhbHF1aWVyIGNvc2EuIMKhQSBkaXNmcnV0YXIhPC9wPiAgICAgIDwvZGl2PiAgICA8L2Rpdj4gIDwvc2VjdGlvbj48L2Rpdj48ZGl2IGNsYXNzPVwiY3RhXCI+ICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgYnV0dG9uLXdyYXBwZXJcIj4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBsZyBidG4tYmxvY2sgd2hpdGVcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1tb2RhbD1cImRpc21pc3NcIj5Wb2x2ZXIgYSBUaWVuZGE8L2J1dHRvbj4gIDwvZGl2PiAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGJ1dHRvbi13cmFwcGVyXCI+ICAgIDxhIGNsYXNzPVwiYnRuIGxnIGJ0bi1ibG9ja1wiIGhyZWY9XCJodHRwOi8vYXBsYXphbWUuY29tL2hvdy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj7Cv1F1aWVyZXMgc2FiZXIgbcOhcz88L2E+ICA8L2Rpdj48L2Rpdj4nOyIsIm1vZHVsZS5leHBvcnRzID0gJzxkaXYgY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtaW5zdGFsbWVudHNcIj4gIDxzcGFuIGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LWZyb21cIj5kZXNkZSZuYnNwOzwvc3Bhbj48IS0tICAtLT48c3Ryb25nIGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LWFtb3VudFwiPiAgICA8c3BhbiBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1wcmljZVwiPjwlPSBnZXRBbW91bnQoY2hvaWNlLmFtb3VudCkgJT48L3NwYW4+PCEtLSAgICAtLT48c3BhbiBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1jdXJyZW5jeVwiPuKCrDwvc3Bhbj4gIDwvc3Ryb25nPjwhLS0gIC0tPjxzdWIgY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtcGVyLW1vbnRoXCI+L21lczwvc3ViPjwhLS0gIC0tPjxzcGFuIGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LWluc3RhbG1lbnRzLXdyYXBwZXJcIj4gICAgPHNwYW4+Jm5ic3A7ZW4mbmJzcDs8L3NwYW4+ICAgIDxlbSBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1pbnN0YWxtZW50cy1udW1cIj4xMjwvZW0+ICAgIDxzcGFuPiZuYnNwO2N1b3Rhczwvc3Bhbj4gIDwvc3Bhbj48L2Rpdj48c3R5bGUgcmVsPVwic3R5bGVzaGVldFwiPjwlPSBvcHRpb25zLndpZGdldC5zdHlsZXMgJT48L3N0eWxlPic7IiwiLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmdcbiAqIEJlemllckVhc2luZyAtIHVzZSBiZXppZXIgY3VydmUgZm9yIHRyYW5zaXRpb24gZWFzaW5nIGZ1bmN0aW9uXG4gKiBieSBHYcOrdGFuIFJlbmF1ZGVhdSAyMDE0IC0gMjAxNSDigJMgTUlUIExpY2Vuc2VcbiAqL1xuXG4vLyBUaGVzZSB2YWx1ZXMgYXJlIGVzdGFibGlzaGVkIGJ5IGVtcGlyaWNpc20gd2l0aCB0ZXN0cyAodHJhZGVvZmY6IHBlcmZvcm1hbmNlIFZTIHByZWNpc2lvbilcbnZhciBORVdUT05fSVRFUkFUSU9OUyA9IDQ7XG52YXIgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xudmFyIFNVQkRJVklTSU9OX1BSRUNJU0lPTiA9IDAuMDAwMDAwMTtcbnZhciBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwO1xuXG52YXIga1NwbGluZVRhYmxlU2l6ZSA9IDExO1xudmFyIGtTYW1wbGVTdGVwU2l6ZSA9IDEuMCAvIChrU3BsaW5lVGFibGVTaXplIC0gMS4wKTtcblxudmFyIGZsb2F0MzJBcnJheVN1cHBvcnRlZCA9IHR5cGVvZiBGbG9hdDMyQXJyYXkgPT09ICdmdW5jdGlvbic7XG5cbmZ1bmN0aW9uIEEgKGFBMSwgYUEyKSB7IHJldHVybiAxLjAgLSAzLjAgKiBhQTIgKyAzLjAgKiBhQTE7IH1cbmZ1bmN0aW9uIEIgKGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBhQTIgLSA2LjAgKiBhQTE7IH1cbmZ1bmN0aW9uIEMgKGFBMSkgICAgICB7IHJldHVybiAzLjAgKiBhQTE7IH1cblxuLy8gUmV0dXJucyB4KHQpIGdpdmVuIHQsIHgxLCBhbmQgeDIsIG9yIHkodCkgZ2l2ZW4gdCwgeTEsIGFuZCB5Mi5cbmZ1bmN0aW9uIGNhbGNCZXppZXIgKGFULCBhQTEsIGFBMikgeyByZXR1cm4gKChBKGFBMSwgYUEyKSAqIGFUICsgQihhQTEsIGFBMikpICogYVQgKyBDKGFBMSkpICogYVQ7IH1cblxuLy8gUmV0dXJucyBkeC9kdCBnaXZlbiB0LCB4MSwgYW5kIHgyLCBvciBkeS9kdCBnaXZlbiB0LCB5MSwgYW5kIHkyLlxuZnVuY3Rpb24gZ2V0U2xvcGUgKGFULCBhQTEsIGFBMikgeyByZXR1cm4gMy4wICogQShhQTEsIGFBMikgKiBhVCAqIGFUICsgMi4wICogQihhQTEsIGFBMikgKiBhVCArIEMoYUExKTsgfVxuXG5mdW5jdGlvbiBiaW5hcnlTdWJkaXZpZGUgKGFYLCBhQSwgYUIsIG1YMSwgbVgyKSB7XG4gIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuICBkbyB7XG4gICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICB9IGVsc2Uge1xuICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICB9XG4gIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG4gIHJldHVybiBjdXJyZW50VDtcbn1cblxuZnVuY3Rpb24gbmV3dG9uUmFwaHNvbkl0ZXJhdGUgKGFYLCBhR3Vlc3NULCBtWDEsIG1YMikge1xuIGZvciAodmFyIGkgPSAwOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgdmFyIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgIH1cbiAgIHZhciBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuIH1cbiByZXR1cm4gYUd1ZXNzVDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiZXppZXIgKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICBpZiAoISgwIDw9IG1YMSAmJiBtWDEgPD0gMSAmJiAwIDw9IG1YMiAmJiBtWDIgPD0gMSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JlemllciB4IHZhbHVlcyBtdXN0IGJlIGluIFswLCAxXSByYW5nZScpO1xuICB9XG5cbiAgLy8gUHJlY29tcHV0ZSBzYW1wbGVzIHRhYmxlXG4gIHZhciBzYW1wbGVWYWx1ZXMgPSBmbG9hdDMyQXJyYXlTdXBwb3J0ZWQgPyBuZXcgRmxvYXQzMkFycmF5KGtTcGxpbmVUYWJsZVNpemUpIDogbmV3IEFycmF5KGtTcGxpbmVUYWJsZVNpemUpO1xuICBpZiAobVgxICE9PSBtWTEgfHwgbVgyICE9PSBtWTIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtTcGxpbmVUYWJsZVNpemU7ICsraSkge1xuICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICoga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VEZvclggKGFYKSB7XG4gICAgdmFyIGludGVydmFsU3RhcnQgPSAwLjA7XG4gICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgIHZhciBsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDE7XG5cbiAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgaW50ZXJ2YWxTdGFydCArPSBrU2FtcGxlU3RlcFNpemU7XG4gICAgfVxuICAgIC0tY3VycmVudFNhbXBsZTtcblxuICAgIC8vIEludGVycG9sYXRlIHRvIHByb3ZpZGUgYW4gaW5pdGlhbCBndWVzcyBmb3IgdFxuICAgIHZhciBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICB2YXIgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBrU2FtcGxlU3RlcFNpemU7XG5cbiAgICB2YXIgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gQmV6aWVyRWFzaW5nICh4KSB7XG4gICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgICByZXR1cm4geDsgLy8gbGluZWFyXG4gICAgfVxuICAgIC8vIEJlY2F1c2UgSmF2YVNjcmlwdCBudW1iZXIgYXJlIGltcHJlY2lzZSwgd2Ugc2hvdWxkIGd1YXJhbnRlZSB0aGUgZXh0cmVtZXMgYXJlIHJpZ2h0LlxuICAgIGlmICh4ID09PSAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKHggPT09IDEpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gY2FsY0JlemllcihnZXRURm9yWCh4KSwgbVkxLCBtWTIpO1xuICB9O1xufTtcbiIsIi8qXG4gKiBjbGFzc0xpc3QuanM6IENyb3NzLWJyb3dzZXIgZnVsbCBlbGVtZW50LmNsYXNzTGlzdCBpbXBsZW1lbnRhdGlvbi5cbiAqIDEuMS4yMDE1MDMxMlxuICpcbiAqIEJ5IEVsaSBHcmV5LCBodHRwOi8vZWxpZ3JleS5jb21cbiAqIExpY2Vuc2U6IERlZGljYXRlZCB0byB0aGUgcHVibGljIGRvbWFpbi5cbiAqICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L2NsYXNzTGlzdC5qcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4gKi9cblxuLypnbG9iYWwgc2VsZiwgZG9jdW1lbnQsIERPTUV4Y2VwdGlvbiAqL1xuXG4vKiEgQHNvdXJjZSBodHRwOi8vcHVybC5lbGlncmV5LmNvbS9naXRodWIvY2xhc3NMaXN0LmpzL2Jsb2IvbWFzdGVyL2NsYXNzTGlzdC5qcyAqL1xuXG5pZiAoXCJkb2N1bWVudFwiIGluIHNlbGYpIHtcblxuLy8gRnVsbCBwb2x5ZmlsbCBmb3IgYnJvd3NlcnMgd2l0aCBubyBjbGFzc0xpc3Qgc3VwcG9ydFxuLy8gSW5jbHVkaW5nIElFIDwgRWRnZSBtaXNzaW5nIFNWR0VsZW1lbnQuY2xhc3NMaXN0XG5pZiAoIShcImNsYXNzTGlzdFwiIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJfXCIpKSBcblx0fHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TICYmICEoXCJjbGFzc0xpc3RcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwiZ1wiKSkpIHtcblxuKGZ1bmN0aW9uICh2aWV3KSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5pZiAoISgnRWxlbWVudCcgaW4gdmlldykpIHJldHVybjtcblxudmFyXG5cdCAgY2xhc3NMaXN0UHJvcCA9IFwiY2xhc3NMaXN0XCJcblx0LCBwcm90b1Byb3AgPSBcInByb3RvdHlwZVwiXG5cdCwgZWxlbUN0clByb3RvID0gdmlldy5FbGVtZW50W3Byb3RvUHJvcF1cblx0LCBvYmpDdHIgPSBPYmplY3Rcblx0LCBzdHJUcmltID0gU3RyaW5nW3Byb3RvUHJvcF0udHJpbSB8fCBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIik7XG5cdH1cblx0LCBhcnJJbmRleE9mID0gQXJyYXlbcHJvdG9Qcm9wXS5pbmRleE9mIHx8IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0dmFyXG5cdFx0XHQgIGkgPSAwXG5cdFx0XHQsIGxlbiA9IHRoaXMubGVuZ3RoXG5cdFx0O1xuXHRcdGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkge1xuXHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIC0xO1xuXHR9XG5cdC8vIFZlbmRvcnM6IHBsZWFzZSBhbGxvdyBjb250ZW50IGNvZGUgdG8gaW5zdGFudGlhdGUgRE9NRXhjZXB0aW9uc1xuXHQsIERPTUV4ID0gZnVuY3Rpb24gKHR5cGUsIG1lc3NhZ2UpIHtcblx0XHR0aGlzLm5hbWUgPSB0eXBlO1xuXHRcdHRoaXMuY29kZSA9IERPTUV4Y2VwdGlvblt0eXBlXTtcblx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHR9XG5cdCwgY2hlY2tUb2tlbkFuZEdldEluZGV4ID0gZnVuY3Rpb24gKGNsYXNzTGlzdCwgdG9rZW4pIHtcblx0XHRpZiAodG9rZW4gPT09IFwiXCIpIHtcblx0XHRcdHRocm93IG5ldyBET01FeChcblx0XHRcdFx0ICBcIlNZTlRBWF9FUlJcIlxuXHRcdFx0XHQsIFwiQW4gaW52YWxpZCBvciBpbGxlZ2FsIHN0cmluZyB3YXMgc3BlY2lmaWVkXCJcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmICgvXFxzLy50ZXN0KHRva2VuKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4KFxuXHRcdFx0XHQgIFwiSU5WQUxJRF9DSEFSQUNURVJfRVJSXCJcblx0XHRcdFx0LCBcIlN0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3RlclwiXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gYXJySW5kZXhPZi5jYWxsKGNsYXNzTGlzdCwgdG9rZW4pO1xuXHR9XG5cdCwgQ2xhc3NMaXN0ID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHR2YXJcblx0XHRcdCAgdHJpbW1lZENsYXNzZXMgPSBzdHJUcmltLmNhbGwoZWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiKVxuXHRcdFx0LCBjbGFzc2VzID0gdHJpbW1lZENsYXNzZXMgPyB0cmltbWVkQ2xhc3Nlcy5zcGxpdCgvXFxzKy8pIDogW11cblx0XHRcdCwgaSA9IDBcblx0XHRcdCwgbGVuID0gY2xhc3Nlcy5sZW5ndGhcblx0XHQ7XG5cdFx0Zm9yICg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dGhpcy5wdXNoKGNsYXNzZXNbaV0pO1xuXHRcdH1cblx0XHR0aGlzLl91cGRhdGVDbGFzc05hbWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMudG9TdHJpbmcoKSk7XG5cdFx0fTtcblx0fVxuXHQsIGNsYXNzTGlzdFByb3RvID0gQ2xhc3NMaXN0W3Byb3RvUHJvcF0gPSBbXVxuXHQsIGNsYXNzTGlzdEdldHRlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gbmV3IENsYXNzTGlzdCh0aGlzKTtcblx0fVxuO1xuLy8gTW9zdCBET01FeGNlcHRpb24gaW1wbGVtZW50YXRpb25zIGRvbid0IGFsbG93IGNhbGxpbmcgRE9NRXhjZXB0aW9uJ3MgdG9TdHJpbmcoKVxuLy8gb24gbm9uLURPTUV4Y2VwdGlvbnMuIEVycm9yJ3MgdG9TdHJpbmcoKSBpcyBzdWZmaWNpZW50IGhlcmUuXG5ET01FeFtwcm90b1Byb3BdID0gRXJyb3JbcHJvdG9Qcm9wXTtcbmNsYXNzTGlzdFByb3RvLml0ZW0gPSBmdW5jdGlvbiAoaSkge1xuXHRyZXR1cm4gdGhpc1tpXSB8fCBudWxsO1xufTtcbmNsYXNzTGlzdFByb3RvLmNvbnRhaW5zID0gZnVuY3Rpb24gKHRva2VuKSB7XG5cdHRva2VuICs9IFwiXCI7XG5cdHJldHVybiBjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pICE9PSAtMTtcbn07XG5jbGFzc0xpc3RQcm90by5hZGQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhclxuXHRcdCAgdG9rZW5zID0gYXJndW1lbnRzXG5cdFx0LCBpID0gMFxuXHRcdCwgbCA9IHRva2Vucy5sZW5ndGhcblx0XHQsIHRva2VuXG5cdFx0LCB1cGRhdGVkID0gZmFsc2Vcblx0O1xuXHRkbyB7XG5cdFx0dG9rZW4gPSB0b2tlbnNbaV0gKyBcIlwiO1xuXHRcdGlmIChjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pID09PSAtMSkge1xuXHRcdFx0dGhpcy5wdXNoKHRva2VuKTtcblx0XHRcdHVwZGF0ZWQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXHR3aGlsZSAoKytpIDwgbCk7XG5cblx0aWYgKHVwZGF0ZWQpIHtcblx0XHR0aGlzLl91cGRhdGVDbGFzc05hbWUoKTtcblx0fVxufTtcbmNsYXNzTGlzdFByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0dmFyXG5cdFx0ICB0b2tlbnMgPSBhcmd1bWVudHNcblx0XHQsIGkgPSAwXG5cdFx0LCBsID0gdG9rZW5zLmxlbmd0aFxuXHRcdCwgdG9rZW5cblx0XHQsIHVwZGF0ZWQgPSBmYWxzZVxuXHRcdCwgaW5kZXhcblx0O1xuXHRkbyB7XG5cdFx0dG9rZW4gPSB0b2tlbnNbaV0gKyBcIlwiO1xuXHRcdGluZGV4ID0gY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKTtcblx0XHR3aGlsZSAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHR0aGlzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHR1cGRhdGVkID0gdHJ1ZTtcblx0XHRcdGluZGV4ID0gY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKTtcblx0XHR9XG5cdH1cblx0d2hpbGUgKCsraSA8IGwpO1xuXG5cdGlmICh1cGRhdGVkKSB7XG5cdFx0dGhpcy5fdXBkYXRlQ2xhc3NOYW1lKCk7XG5cdH1cbn07XG5jbGFzc0xpc3RQcm90by50b2dnbGUgPSBmdW5jdGlvbiAodG9rZW4sIGZvcmNlKSB7XG5cdHRva2VuICs9IFwiXCI7XG5cblx0dmFyXG5cdFx0ICByZXN1bHQgPSB0aGlzLmNvbnRhaW5zKHRva2VuKVxuXHRcdCwgbWV0aG9kID0gcmVzdWx0ID9cblx0XHRcdGZvcmNlICE9PSB0cnVlICYmIFwicmVtb3ZlXCJcblx0XHQ6XG5cdFx0XHRmb3JjZSAhPT0gZmFsc2UgJiYgXCJhZGRcIlxuXHQ7XG5cblx0aWYgKG1ldGhvZCkge1xuXHRcdHRoaXNbbWV0aG9kXSh0b2tlbik7XG5cdH1cblxuXHRpZiAoZm9yY2UgPT09IHRydWUgfHwgZm9yY2UgPT09IGZhbHNlKSB7XG5cdFx0cmV0dXJuIGZvcmNlO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAhcmVzdWx0O1xuXHR9XG59O1xuY2xhc3NMaXN0UHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLmpvaW4oXCIgXCIpO1xufTtcblxuaWYgKG9iakN0ci5kZWZpbmVQcm9wZXJ0eSkge1xuXHR2YXIgY2xhc3NMaXN0UHJvcERlc2MgPSB7XG5cdFx0ICBnZXQ6IGNsYXNzTGlzdEdldHRlclxuXHRcdCwgZW51bWVyYWJsZTogdHJ1ZVxuXHRcdCwgY29uZmlndXJhYmxlOiB0cnVlXG5cdH07XG5cdHRyeSB7XG5cdFx0b2JqQ3RyLmRlZmluZVByb3BlcnR5KGVsZW1DdHJQcm90bywgY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0UHJvcERlc2MpO1xuXHR9IGNhdGNoIChleCkgeyAvLyBJRSA4IGRvZXNuJ3Qgc3VwcG9ydCBlbnVtZXJhYmxlOnRydWVcblx0XHRpZiAoZXgubnVtYmVyID09PSAtMHg3RkY1RUM1NCkge1xuXHRcdFx0Y2xhc3NMaXN0UHJvcERlc2MuZW51bWVyYWJsZSA9IGZhbHNlO1xuXHRcdFx0b2JqQ3RyLmRlZmluZVByb3BlcnR5KGVsZW1DdHJQcm90bywgY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0UHJvcERlc2MpO1xuXHRcdH1cblx0fVxufSBlbHNlIGlmIChvYmpDdHJbcHJvdG9Qcm9wXS5fX2RlZmluZUdldHRlcl9fKSB7XG5cdGVsZW1DdHJQcm90by5fX2RlZmluZUdldHRlcl9fKGNsYXNzTGlzdFByb3AsIGNsYXNzTGlzdEdldHRlcik7XG59XG5cbn0oc2VsZikpO1xuXG59IGVsc2Uge1xuLy8gVGhlcmUgaXMgZnVsbCBvciBwYXJ0aWFsIG5hdGl2ZSBjbGFzc0xpc3Qgc3VwcG9ydCwgc28ganVzdCBjaGVjayBpZiB3ZSBuZWVkXG4vLyB0byBub3JtYWxpemUgdGhlIGFkZC9yZW1vdmUgYW5kIHRvZ2dsZSBBUElzLlxuXG4oZnVuY3Rpb24gKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHR2YXIgdGVzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKTtcblxuXHR0ZXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYzFcIiwgXCJjMlwiKTtcblxuXHQvLyBQb2x5ZmlsbCBmb3IgSUUgMTAvMTEgYW5kIEZpcmVmb3ggPDI2LCB3aGVyZSBjbGFzc0xpc3QuYWRkIGFuZFxuXHQvLyBjbGFzc0xpc3QucmVtb3ZlIGV4aXN0IGJ1dCBzdXBwb3J0IG9ubHkgb25lIGFyZ3VtZW50IGF0IGEgdGltZS5cblx0aWYgKCF0ZXN0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjMlwiKSkge1xuXHRcdHZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbihtZXRob2QpIHtcblx0XHRcdHZhciBvcmlnaW5hbCA9IERPTVRva2VuTGlzdC5wcm90b3R5cGVbbWV0aG9kXTtcblxuXHRcdFx0RE9NVG9rZW5MaXN0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odG9rZW4pIHtcblx0XHRcdFx0dmFyIGksIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdFx0dG9rZW4gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRcdFx0b3JpZ2luYWwuY2FsbCh0aGlzLCB0b2tlbik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fTtcblx0XHRjcmVhdGVNZXRob2QoJ2FkZCcpO1xuXHRcdGNyZWF0ZU1ldGhvZCgncmVtb3ZlJyk7XG5cdH1cblxuXHR0ZXN0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYzNcIiwgZmFsc2UpO1xuXG5cdC8vIFBvbHlmaWxsIGZvciBJRSAxMCBhbmQgRmlyZWZveCA8MjQsIHdoZXJlIGNsYXNzTGlzdC50b2dnbGUgZG9lcyBub3Rcblx0Ly8gc3VwcG9ydCB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuXHRpZiAodGVzdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYzNcIikpIHtcblx0XHR2YXIgX3RvZ2dsZSA9IERPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlO1xuXG5cdFx0RE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbih0b2tlbiwgZm9yY2UpIHtcblx0XHRcdGlmICgxIGluIGFyZ3VtZW50cyAmJiAhdGhpcy5jb250YWlucyh0b2tlbikgPT09ICFmb3JjZSkge1xuXHRcdFx0XHRyZXR1cm4gZm9yY2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gX3RvZ2dsZS5jYWxsKHRoaXMsIHRva2VuKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdH1cblxuXHR0ZXN0RWxlbWVudCA9IG51bGw7XG59KCkpO1xuXG59XG5cbn1cblxuIiwiLypcbiAqIGV2ZW50cy5qcyAtIFNpbmdsZSBsaWJyYXJ5IHRvIGhhbmRsZSBnZW5lcmljIGV2ZW50c1xuXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgSmVzw7pzIE1hbnVlbCBHZXJtYWRlIENhc3Rpw7FlaXJhcyA8amVzdXNAZ2VybWFkZS5lcz5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICpcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2UgaWYoIHJvb3QgKSB7XG4gICAgaWYoIHJvb3QuZGVmaW5lICkge1xuICAgICAgcm9vdC5kZWZpbmUoJ0V2ZW50cycsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhY3RvcnkoKTsgfSApO1xuICAgIH0gZWxzZSBpZiggcm9vdC5hbmd1bGFyICkge1xuICAgICAgcm9vdC5hbmd1bGFyLm1vZHVsZSgnZXZlbnRzV3JhcHBlcicsIFtdKS5mYWN0b3J5KCdFdmVudHMnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWN0b3J5KHRydWUpOyB9KTtcbiAgICB9IGVsc2UgaWYoICFyb290LkV2ZW50cyApIHtcbiAgICAgIHJvb3QuRXZlbnRzID0gZmFjdG9yeSgpO1xuICAgIH1cbiAgfVxuXG59KSh0aGlzLCBmdW5jdGlvbiAobmcpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBtZXRob2RzID0ge1xuICAgIHN0ZDogeyBvbjogJ29uJywgb25jZTogJ29uY2UnLCBvZmY6ICdvZmYnLCB0cmlnZ2VyOiAndHJpZ2dlcicgfSxcbiAgICBzYWZlOiB7IG9uOiAnJCRvbicsIG9uY2U6ICckJG9uY2UnLCBvZmY6ICckJG9mZicsIHRyaWdnZXI6ICckJHRyaWdnZXInIH1cbiAgfTtcblxuICBmdW5jdGlvbiBFdmVudCAobmFtZSwgYXJncywgY2FsbGVyKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgIHRoaXMuJCRhcmdzID0gW3RoaXNdLmNvbmNhdChhcmdzKTtcbiAgICB0aGlzLmNhbGxlciA9IGNhbGxlcjtcbiAgfVxuXG4gIEV2ZW50LnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldE1ldGhvZHMgKG5nU2FmZSkge1xuICAgIHJldHVybiBuZ1NhZmUgPyBtZXRob2RzLnNhZmUgOiBtZXRob2RzLnN0ZDtcbiAgfVxuXG5cdGZ1bmN0aW9uIF9hZGRMaXN0ZW5lciAoaGFuZGxlcnMsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICBpZiggISBoYW5kbGVyIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaGFuZGxlcnMucHVzaCh7IGhhbmRsZXI6IGhhbmRsZXIsIGNvbnRleHQ6IGNvbnRleHQgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfdHJpZ2dlckV2ZW50IChlLCBoYW5kbGVycykge1xuICAgIGlmKCBoYW5kbGVycyApIHtcbiAgICAgIGZvciggdmFyIGkgPSAwLCBsZW4gPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgICAgaGFuZGxlcnNbaV0uaGFuZGxlci5hcHBseShlLmNhbGxlciwgZS4kJGFyZ3MpO1xuICAgICAgICBpZiggZS5kZWZhdWx0UHJldmVudGVkICkge1xuICAgICAgICAgIHJldHVybiBpICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGxlbjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfZW1wdHlMaXN0ZW5lciAoaGFuZGxlcnMpIHtcbiAgICBpZiggaGFuZGxlcnMgKSB7XG4gICAgICBoYW5kbGVycy5zcGxpY2UoMCwgaGFuZGxlcnMubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfcmVtb3ZlTGlzdGVuZXIgKGhhbmRsZXJzLCBoYW5kbGVyKSB7XG4gICAgaWYoIGhhbmRsZXJzICkge1xuICAgICAgZm9yKCB2YXIgaSA9IDAsIGxlbiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGxlbjsgKSB7XG4gICAgICAgIGlmKCBoYW5kbGVyc1tpXS5oYW5kbGVyID09PSBoYW5kbGVyICkge1xuICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBsZW4tLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBFdmVudHMgKHRhcmdldCwgbmdTYWZlKSB7XG4gICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHRoaXM7XG5cbiAgICB2YXIgbGlzdGVuZXJzID0ge30sXG4gICAgICAgIGxpc3RlbmVyc09uY2UgPSB7fSxcbiAgICAgICAgbWV0aG9kID0gZ2V0TWV0aG9kcyhuZ1NhZmUpO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tFYWNoIChfbWV0aG9kLCBldmVudE5hbWUsIGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICAgIGlmKCBldmVudE5hbWUgaW5zdGFuY2VvZiBBcnJheSApIHtcbiAgICAgICAgZXZlbnROYW1lLmZvckVhY2goZnVuY3Rpb24gKF9ldmVudE5hbWUpIHsgdGFyZ2V0W19tZXRob2RdKF9ldmVudE5hbWUsIGFyZzEsIGFyZzIsIGFyZzMpOyB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiggdHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXZlbnQgbmFtZSBzaG91bGQgYmUgYSBzdHJpbmcnKTtcbiAgICAgIH1cbiAgICAgIGlmKCAvIC8udGVzdChldmVudE5hbWUpICkge1xuICAgICAgICB0YXJnZXRbX21ldGhvZF0oZXZlbnROYW1lLnNwbGl0KC8gKy8pLCBhcmcxLCBhcmcyLCBhcmczKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGFyZ2V0W21ldGhvZC5vbl0gPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgICBpZiggY2hlY2tFYWNoKG1ldGhvZC5vbiwgZXZlbnROYW1lLCBoYW5kbGVyLCBjb250ZXh0KSApIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICAgIGxpc3RlbmVyc1tldmVudE5hbWVdID0gbGlzdGVuZXJzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICBfYWRkTGlzdGVuZXIobGlzdGVuZXJzW2V2ZW50TmFtZV0sIGhhbmRsZXIsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuXG4gICAgdGFyZ2V0W21ldGhvZC5vbmNlXSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICAgIGlmKCBjaGVja0VhY2gobWV0aG9kLm9uY2UsIGV2ZW50TmFtZSwgaGFuZGxlciwgY29udGV4dCkgKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lcnNPbmNlW2V2ZW50TmFtZV0gPSBsaXN0ZW5lcnNPbmNlW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICBfYWRkTGlzdGVuZXIobGlzdGVuZXJzT25jZVtldmVudE5hbWVdLCBoYW5kbGVyLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcblxuICAgIHRhcmdldFttZXRob2QudHJpZ2dlcl0gPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBhdHRycywgY2FsbGVyKSB7XG4gICAgICBpZiggY2hlY2tFYWNoKG1ldGhvZC50cmlnZ2VyLCBldmVudE5hbWUsIGF0dHJzLCBjYWxsZXIpICkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfVxuICAgICAgdmFyIGUgPSBuZXcgRXZlbnQoZXZlbnROYW1lLCBhdHRycywgY2FsbGVyKTtcblxuICAgICAgX3RyaWdnZXJFdmVudChlLCBsaXN0ZW5lcnNbZXZlbnROYW1lXSk7XG5cbiAgICAgIGlmKCAhZS5kZWZhdWx0UHJldmVudGVkICkge1xuICAgICAgICB2YXIgbGVuID0gX3RyaWdnZXJFdmVudChlLCBsaXN0ZW5lcnNPbmNlW2V2ZW50TmFtZV0pO1xuICAgICAgICBpZiggbGVuICkge1xuICAgICAgICAgIGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXS5zcGxpY2UoMCwgbGVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuXG4gICAgdGFyZ2V0W21ldGhvZC5vZmZdID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgaWYoIGNoZWNrRWFjaChtZXRob2Qub2ZmLCBldmVudE5hbWUsIGhhbmRsZXIpICkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfVxuICAgICAgaWYoIGhhbmRsZXIgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgX2VtcHR5TGlzdGVuZXIobGlzdGVuZXJzW2V2ZW50TmFtZV0pO1xuICAgICAgICBfZW1wdHlMaXN0ZW5lcihsaXN0ZW5lcnNPbmNlW2V2ZW50TmFtZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKGxpc3RlbmVyc1tldmVudE5hbWVdLCBoYW5kbGVyKTtcbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXSwgaGFuZGxlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gRXZlbnRzO1xufSk7XG4iLCJcbi8vIGZhY3RvcnkgaHR0cFxuXG52YXIgJHEgPSByZXF1aXJlKCdxLXByb21pc2UnKSxcbiAgICBfID0gcmVxdWlyZSgnbml0cm8tdG9vbHMvZXh0ZW5kJyk7XG5cbmZ1bmN0aW9uIHJlc29sdmVGdW5jdGlvbnMgKG8sIGFyZ3MsIHRoaXNBcmcpIHtcbiAgZm9yKCB2YXIga2V5IGluIG8gKSB7XG4gICAgaWYoIG9ba2V5XSBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgICAgb1trZXldID0gb1trZXldLmFwcGx5KHRoaXNBcmcsIGFyZ3MgfHwgW10pO1xuICAgIH0gZWxzZSBpZiggdHlwZW9mIG9ba2V5XSA9PT0gJ29iamVjdCcgJiYgb1trZXldICE9PSBudWxsICkge1xuICAgICAgb1trZXldID0gcmVzb2x2ZUZ1bmN0aW9ucyhvW2tleV0sIGFyZ3MsIHRoaXNBcmcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbztcbn1cblxuZnVuY3Rpb24gaGVhZGVyVG9UaXRsZVNsdWcodGV4dCkge1xuICAvLyBjb25zb2xlLmxvZygnaGVhZGVyVG9UaXRsZVNsdWcnLCB0ZXh0KTtcbiAgdmFyIGtleSA9IHRleHQucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgZnVuY3Rpb24gKG1hdGNoLCBsb3dlciwgdXBwZXIpIHtcbiAgICAgIHJldHVybiBsb3dlciArICctJyArIHVwcGVyO1xuICB9KTtcbiAga2V5ID0ga2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyKDEpO1xuXG4gIHJldHVybiBrZXk7XG59XG5cbmZ1bmN0aW9uIGhlYWRlclRvQ2FtZWxDYXNlKHRleHQpIHtcbiAgdmFyIGtleSA9IHRleHRbMF0udG9Mb3dlckNhc2UoKSArIHRleHQuc3Vic3RyKDEpO1xuICByZXR1cm4ga2V5LnJlcGxhY2UoLyhbYS16XSktKFtBLVpdKS9nLCBmdW5jdGlvbiAobWF0Y2gsIGxvd2VyLCB1cHBlcikge1xuICAgIHJldHVybiBsb3dlciArIHVwcGVyO1xuICB9KTtcbn1cblxudmFyIFJFX2NvbnRlbnRUeXBlID0gLyhbXlxcL10rKVxcLyhbXitdK1xcKyk/KC4qKS87XG5mdW5jdGlvbiBwYXJzZUNvbnRlbnRUeXBlKGNvbnRlbnRUeXBlLCB0ZXh0LCB4bWwpIHtcbiAgdmFyIG1hdGNoZXMgPSBjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5tYXRjaChSRV9jb250ZW50VHlwZSk7XG4gIHJldHVybiBtYXRjaGVzICYmICggbWF0Y2hlc1szXSA9PT0gJ2pzb24nID8gSlNPTi5wYXJzZSh0ZXh0KSA6ICggbWF0Y2hlc1szXSA9PT0gJ3htbCcgPyB4bWwgOiB0ZXh0ICkgKTtcbn1cblxuZnVuY3Rpb24gX2dldEhlYWRlcnMgKHJlcXVlc3QpIHtcbiAgdmFyIGhlYWRlcnMgPSB7fTtcbiAgcmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS5yZXBsYWNlKC9cXHMqKFteXFw6XSspXFxzKlxcOlxccyooW15cXDtcXG5dKykvZywgZnVuY3Rpb24gKG1hdGNoLCBrZXksIHZhbHVlKSB7XG4gICAgICBoZWFkZXJzW2hlYWRlclRvQ2FtZWxDYXNlKGtleSldID0gdmFsdWUudHJpbSgpO1xuICB9KTtcblxuICByZXR1cm4gaGVhZGVycztcbn1cblxuZnVuY3Rpb24gaGVhZGVyc0dldHRlciAocmVxdWVzdCkge1xuICB2YXIgaGVhZGVyc0NhY2hlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmKCAhaGVhZGVyc0NhY2hlICkge1xuICAgICAgaGVhZGVyc0NhY2hlID0gX2dldEhlYWRlcnMocmVxdWVzdCk7XG4gICAgfVxuICAgIHJldHVybiBoZWFkZXJzQ2FjaGU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZVBhcmFtcyAocGFyYW1zKSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBmb3IoIHZhciBwYXJhbSBpbiBwYXJhbXMgKSB7XG4gICAgcmVzdWx0ICs9ICggcmVzdWx0ID8gJyYnIDogJycgKSArIHBhcmFtICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1twYXJhbV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGFkZEhlYWRlcnNUb1JlcXVlc3QgKHJlcSwgaGVhZGVycykge1xuICBmb3IoIHZhciBrZXkgaW4gaGVhZGVycyApIHtcbiAgICByZXEuc2V0UmVxdWVzdEhlYWRlciggaGVhZGVyVG9UaXRsZVNsdWcoa2V5KSwgaGVhZGVyc1trZXldICk7XG4gIH1cbn1cblxudmFyIGRlZmF1bHRTZXR0aW5ncyA9IHt9O1xuXG5odHRwLmNvbmZpZyA9IGZ1bmN0aW9uIChzZXR0aW5ncykge1xuICBfLm1lcmdlKGRlZmF1bHRTZXR0aW5ncywgc2V0dGluZ3MpO1xuICByZXR1cm4gaHR0cDtcbn07XG5cbmZ1bmN0aW9uIGh0dHAgKHVybCwgY29uZmlnKSB7XG5cbiAgaWYoIGNvbmZpZyA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnICYmIHVybCAhPT0gbnVsbCApIHtcbiAgICBjb25maWcgPSB1cmw7XG4gICAgdXJsID0gY29uZmlnLnVybDtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgY29uZmlnLnVybCA9IHVybDtcbiAgfVxuXG4gIGNvbmZpZyA9IF8ubWVyZ2UoXy5jb3B5KGRlZmF1bHRTZXR0aW5ncyksXy5jb3B5KGNvbmZpZykpO1xuICBjb25maWcgPSByZXNvbHZlRnVuY3Rpb25zKCBjb25maWcsIFtjb25maWddLCBudWxsICk7XG4gIGNvbmZpZy5tZXRob2QgPSAoIGNvbmZpZy5tZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG5cbiAgaWYoIHR5cGVvZiBjb25maWcudXJsICE9PSAnc3RyaW5nJyApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VybCBzaG91bGQgYmUgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIHJldHVybiAkcShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICB2YXIgcmVxdWVzdCA9IG51bGw7XG5cbiAgICB0cnkgeyAvLyBGaXJlZm94LCBPcGVyYSA4LjArLCBTYWZhcmlcbiAgICAgICAgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIH0gY2F0Y2ggKGUpIHsgLy8gSW50ZXJuZXQgRXhwbG9yZXJcbiAgICAgICAgdHJ5IHsgcmVxdWVzdCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUCcpOyB9ICAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICAgICAgY2F0Y2ggKGVyKSB7IHJlcXVlc3QgPSBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTsgfSAgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgfVxuICAgIGlmKCByZXF1ZXN0ID09PSBudWxsICkgeyB0aHJvdyAnQnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IEhUVFAgUmVxdWVzdCc7IH1cblxuICAgIGlmKCBjb25maWcucGFyYW1zICkge1xuICAgICAgdXJsICs9ICggL1xcPy8udGVzdCh1cmwpID8gJyYnIDogJz8nICkgKyBzZXJpYWxpemVQYXJhbXMoIGNvbmZpZy5wYXJhbXMgKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oIGNvbmZpZy5tZXRob2QsIHVybCApO1xuXG4gICAgaWYoIGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgYWRkSGVhZGVyc1RvUmVxdWVzdChyZXF1ZXN0LCBjb25maWcuaGVhZGVycyB8fCB7fSApO1xuXG4gICAgcmVxdWVzdC5jb25maWcgPSBjb25maWc7XG4gICAgY29uZmlnLnN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpZiggcmVxdWVzdC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8IHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCApIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgIGRhdGE6IHBhcnNlQ29udGVudFR5cGUocmVxdWVzdC5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJyksIHJlcXVlc3QucmVzcG9uc2VUZXh0LCByZXF1ZXN0LnJlc3BvbnNlWE1MKSxcbiAgICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNHZXR0ZXIocmVxdWVzdCksXG4gICAgICAgICAgeGhyOiByZXF1ZXN0XG4gICAgICAgIH07XG4gICAgICAgIGlmKCByZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDAgKSB7XG4gICAgICAgICAgcmVzb2x2ZSggcmVzcG9uc2UgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoIHJlc3BvbnNlICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYoIGNvbmZpZy5jb250ZW50VHlwZSApIHtcblxuICAgICAgaWYoIGNvbmZpZy5kYXRhICYmIGNvbmZpZy5jb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nICYmIHR5cGVvZiBjb25maWcuZGF0YSAhPT0gJ3N0cmluZycgKSB7XG4gICAgICAgIGNvbmZpZy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnLmRhdGEpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmKCBjb25maWcuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhICkge1xuICAgICAgY29uZmlnLmNvbnRlbnRUeXBlID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgIH0gZWxzZSBpZiggdHlwZW9mIGNvbmZpZy5kYXRhID09PSAnb2JqZWN0JyAmJiBjb25maWcuZGF0YSAhPT0gbnVsbCApIHtcbiAgICAgIGNvbmZpZy5jb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgIGlmKCBjb25maWcuZGF0YSApIHtcbiAgICAgICAgY29uZmlnLmRhdGEgPSBKU09OLnN0cmluZ2lmeShjb25maWcuZGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIGNvbmZpZy5jb250ZW50VHlwZSApIHtcbiAgICAgIC8vIGFkZEhlYWRlcnNUb1JlcXVlc3QocmVxdWVzdCwgeyBjb250ZW50VHlwZTogY29uZmlnLmNvbnRlbnRUeXBlIH0pO1xuICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCAnQ29udGVudC1UeXBlJywgY29uZmlnLmNvbnRlbnRUeXBlICk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5zZW5kKCBjb25maWcuZGF0YSApO1xuXG4gIH0pO1xufVxuXG5odHRwLnNlcmlhbGl6ZSA9IHNlcmlhbGl6ZVBhcmFtcztcblxuaHR0cC5ub0NhY2hlID0gZnVuY3Rpb24gKHVybCwgY29uZmlnKSB7XG4gIHVybCArPSAoIC9cXD8vLnRlc3QodXJsKSA/ICcmJyA6ICc/JyApICsgJ3Q9JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICByZXR1cm4gaHR0cCh1cmwsIGNvbmZpZyk7XG59O1xuXG5odHRwLnBsYWluUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgcmV0dXJuIHtcbiAgICBjb25maWc6IHJlc3BvbnNlLmNvbmZpZyxcbiAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxuICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlLmhlYWRlcnMoKVxuICB9O1xufTtcblxuWydnZXQnLCAnZGVsZXRlJ10uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIGh0dHBbbWV0aG9kXSA9IGZ1bmN0aW9uICh1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiBodHRwKHVybCwgXy5leHRlbmQoXy5jb3B5KGNvbmZpZyB8fCB7fSksIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kXG4gICAgfSkpO1xuICB9O1xufSk7XG5cblsncG9zdCcsICdwdXQnLCAncGF0Y2gnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgaHR0cFttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIGh0dHAodXJsLCBfLmV4dGVuZChfLmNvcHkoY29uZmlnIHx8IHt9KSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICBkYXRhOiBkYXRhIHx8IHt9XG4gICAgfSkpO1xuICB9O1xufSk7XG5cbi8vIGJhc2VQYXRoXG5cbmZ1bmN0aW9uIGJhc2VQYXRoIChicCkge1xuICBpZiggL1xcLyQvLnRlc3QoYnApICkge1xuICAgIGJwID0gYnAucmVwbGFjZSgvXFwvJC8sJycpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIGlmKCAhcCApIHtcbiAgICAgIHJldHVybiBicDtcbiAgICB9XG4gICAgcmV0dXJuIGJwICsgKCAvXlxcLy8udGVzdChwKSA/ICcnIDogJy8nICkgKyBwO1xuICB9O1xufVxuXG5odHRwLmJhc2UgPSBmdW5jdGlvbiAodXJsLCBiYXNlQ29uZmlnKSB7XG4gIHZhciBicCA9IGJhc2VQYXRoKHVybCksXG4gICAgICBiYXNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGJhc2VkLmdldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcblxuICBiYXNlQ29uZmlnID0gYmFzZUNvbmZpZyB8fCB7fTtcblxuICBbJ2dldCcsICdkZWxldGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICBiYXNlZFttZXRob2RdID0gZnVuY3Rpb24gKHAsIF9jb25maWcgKSB7XG4gICAgICByZXR1cm4gaHR0cCggYnAocCksIF8ubWVyZ2UoXy5jb3B5KGJhc2VDb25maWcpLCBfY29uZmlnLCB7IG1ldGhvZDogbWV0aG9kIH0pKTtcbiAgICB9O1xuICB9KTtcblxuICBbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgYmFzZWRbbWV0aG9kXSA9IGZ1bmN0aW9uIChwLCBkYXRhLCBfY29uZmlnICkge1xuICAgICAgcmV0dXJuIGh0dHAoIGJwKHApLCBfLm1lcmdlKF8uY29weShiYXNlQ29uZmlnKSwgX2NvbmZpZywgeyBtZXRob2Q6IG1ldGhvZCwgZGF0YTogZGF0YSB9KSApO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiBiYXNlZDtcbn07XG5cbmh0dHAucmVzcG9uc2VEYXRhID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBodHRwO1xuIiwiXG52YXIgYXJyYXlTaGlmdCA9IFtdLnNoaWZ0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG4gIHZhciBkZXN0ID0gYXJyYXlTaGlmdC5jYWxsKGFyZ3VtZW50cyksXG4gICAgICBzcmMgPSBhcnJheVNoaWZ0LmNhbGwoYXJndW1lbnRzKSxcbiAgICAgIGtleTtcblxuICB3aGlsZSggc3JjICkge1xuICAgIGZvcigga2V5IGluIHNyYykge1xuICAgICAgZGVzdFtrZXldID0gc3JjW2tleV07XG4gICAgfVxuICAgIHNyYyA9IGFycmF5U2hpZnQuY2FsbChhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuIiwiXG52YXIgUkVfJCQgPSAvXlxcJFxcJC8sXG4gICAgYXJyYXlTaGlmdCA9IFtdLnNoaWZ0LFxuICAgIHR5cGUgPSByZXF1aXJlKCcuL3R5cGUnKTtcblxuZnVuY3Rpb24gX21lcmdlICgpIHtcbiAgICB2YXIgZGVzdCA9IGFycmF5U2hpZnQuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICBzcmMgPSBhcnJheVNoaWZ0LmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAga2V5O1xuXG4gICAgd2hpbGUoIHNyYyApIHtcblxuICAgICAgaWYoIHR5cGVvZiBkZXN0ICE9PSB0eXBlb2Ygc3JjICkge1xuICAgICAgICAgIGRlc3QgPSB0eXBlLmlzQXJyYXkoc3JjKSA/IFtdIDogKCB0eXBlLmlzT2JqZWN0KHNyYykgPyB7fSA6IHNyYyApO1xuICAgICAgfVxuXG4gICAgICBpZiggdHlwZS5pc09iamVjdChzcmMpICkge1xuXG4gICAgICAgIGZvcigga2V5IGluIHNyYyApIHtcbiAgICAgICAgICBpZiggc3JjW2tleV0gPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIGRlc3Rba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9IGVsc2UgaWYoIHR5cGUuaXNBcnJheShkZXN0W2tleV0pICkge1xuICAgICAgICAgICAgW10ucHVzaC5hcHBseShkZXN0W2tleV0sIHNyY1trZXldKTtcbiAgICAgICAgICB9IGVsc2UgaWYoIHR5cGUuaXNPYmplY3QoZGVzdFtrZXldKSApIHtcbiAgICAgICAgICAgIGRlc3Rba2V5XSA9IF9tZXJnZShkZXN0W2tleV0sIHNyY1trZXldKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzdFtrZXldID0gc3JjW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzcmMgPSBhcnJheVNoaWZ0LmNhbGwoYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdDtcbn1cblxuZnVuY3Rpb24gbWFwT2JqZWN0IChvLCBpdGVyYXRlZSkge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZvciggdmFyIGtleSBpbiBvICkge1xuICAgIHJlc3VsdFtrZXldID0gaXRlcmF0ZWUob1trZXldLCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9jb3B5IChzcmMpIHtcbiAgaWYoIHR5cGUuaXNBcnJheShzcmMpICkge1xuICAgIHJldHVybiBzcmMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gX2NvcHkoaXRlbSk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIGlmKCB0eXBlLmlzT2JqZWN0KHNyYykgKSB7XG4gICAgcmV0dXJuIG1hcE9iamVjdChzcmMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gX2NvcHkoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3JjO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZXh0ZW5kOiByZXF1aXJlKCcuL19leHRlbmQnKSxcbiAgbWVyZ2U6IF9tZXJnZSxcbiAgY29weTogX2NvcHlcbn07XG4iLCJcbnZhciB0eXBlID0gcmVxdWlyZSgnLi90eXBlJyk7XG5cbmZ1bmN0aW9uIF9rZXkgKG8sIF9rZXksIHZhbHVlKXtcbiAgICBpZiggIXR5cGUuaXNPYmplY3QobykgKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblxuICAgIHZhciBrZXlzID0gX2tleS5zcGxpdCgnLicpLFxuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG5cbiAgICBpZiggdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgIHdoaWxlIChrZXkpIHtcbiAgICAgICAgaWYoIHR5cGUuaXNPYmplY3QobykgJiYga2V5IGluIG8gKSB7XG4gICAgICAgICAgbyA9IG9ba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbztcbiAgICB9IGVsc2Uge1xuXG4gICAgICB3aGlsZSAoa2V5KSB7XG4gICAgICAgIGlmKCBvIGluc3RhbmNlb2YgT2JqZWN0ICkge1xuICAgICAgICAgIGlmICgga2V5cy5sZW5ndGggKXtcbiAgICAgICAgICAgIGlmKCAhKGtleSBpbiBvKSApIHtcbiAgICAgICAgICAgICAgb1trZXldID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvID0gb1trZXldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBrZXk6IF9rZXksXG4gIGtleXM6IE9iamVjdC5rZXlzXG59O1xuIiwiXG52YXIgdHlwZSA9IHJlcXVpcmUoJy4vdHlwZScpLFxuICAgIGFyclNvbWUgPSBBcnJheS5wcm90b3R5cGUuc29tZSxcbiAgICBhcnJFdmVyeSA9IEFycmF5LnByb3RvdHlwZS5ldmVyeSxcbiAgICBhcnJGb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2gsXG4gICAgYXJyTWFwID0gQXJyYXkucHJvdG90eXBlLm1hcCxcbiAgICBhcnJJbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIF9lYWNoSW5MaXN0KCBsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyApIHtcbiAgcmV0dXJuIGFyckZvckVhY2guY2FsbChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyk7XG59XG5cbmZ1bmN0aW9uIF9lYWNoSW5PYmplY3QoIG8sIGl0ZXJhdGVlLCB0aGlzQXJnICkge1xuICBmb3IoIHZhciBrZXkgaW4gbyApIHtcbiAgICBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIFtvW2tleV0sIGtleV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9tYXRjaEFsbCAobywgZmlsdGVycykge1xuICBmb3IoIHZhciBrZXkgaW4gZmlsdGVycyApIHtcbiAgICBpZiggb1trZXldICE9PSBmaWx0ZXJzW2tleV0gKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBfbWF0Y2hBbnkgKG8sIGZpbHRlcnMpIHtcbiAgZm9yKCB2YXIga2V5IGluIGZpbHRlcnMgKSB7XG4gICAgaWYoIG9ba2V5XSA9PT0gZmlsdGVyc1trZXldICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhdGVlRm4gKGl0ZXJhdGVlKSB7XG4gIGlmKCB0eXBlLmlzRnVuY3Rpb24oaXRlcmF0ZWUpICkge1xuICAgIHJldHVybiBpdGVyYXRlZTtcbiAgfVxuXG4gIGlmKCB0eXBlLmlzT2JqZWN0KGl0ZXJhdGVlKSApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfbWF0Y2hBbGwoaXRlbSwgaXRlcmF0ZWUpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbSA9PT0gaXRlcmF0ZWU7XG4gIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGVhY2ggKG8sIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIGlmKCBvICYmIG8ubGVuZ3RoICkge1xuICAgIGFyckZvckVhY2guY2FsbChvLCBpdGVyYXRlZSwgdGhpc0FyZyk7XG4gIH0gZWxzZSBpZiggdHlwZS5pc09iamVjdChvKSApIHtcbiAgICBfZWFjaEluT2JqZWN0KG8sIGl0ZXJhdGVlLCB0aGlzQXJnIHx8IHRoaXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluZGV4T2YgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIGlmKCAhdHlwZS5pc0Z1bmN0aW9uKGl0ZXJhdGVlKSApIHtcbiAgICByZXR1cm4gYXJySW5kZXhPZi5jYWxsKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcbiAgfVxuXG4gIGZvciggdmFyIGkgPSAwLCBuID0gbGlzdC5sZW5ndGg7IGkgPCBuIDsgaSsrICkge1xuICAgIGlmKCBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3RbaV0sIGkpICkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gX2luZGV4QnkgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIHZhciBtYXAgPSB7fTtcblxuXHRmb3IoIHZhciBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBtYXBbaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2ldLCBpKV0gPSBsaXN0W2ldO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbmZ1bmN0aW9uIGluZGV4QnkgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG5cdGlmKCB0eXBlLmlzU3RyaW5nKGl0ZXJhdGVlKSApIHtcblx0XHRyZXR1cm4gX2luZGV4QnkobGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW1baXRlcmF0ZWVdOyB9LCB0aGlzQXJnKTtcblx0fSBlbHNlIGlmKCB0eXBlLmlzRnVuY3Rpb24oaXRlcmF0ZWUpICkge1xuXHRcdHJldHVybiBfaW5kZXhCeShsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyk7XG5cdH1cblx0cmV0dXJuIHt9O1xufVxuXG5mdW5jdGlvbiBzb21lIChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICBpdGVyYXRlZSA9IF9pdGVyYXRlZUZuKGl0ZXJhdGVlKTtcblxuICBpZiggbGlzdCAmJiBsaXN0Lmxlbmd0aCApIHtcbiAgICByZXR1cm4gYXJyU29tZS5jYWxsKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcbiAgfSBlbHNlIGlmKCB0eXBlLmlzT2JqZWN0KGxpc3QpICkge1xuICAgIGZvciggdmFyIGtleSBpbiBsaXN0ICkgIHtcbiAgICAgIGlmKCBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3Rba2V5XSwga2V5KSApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZXZlcnkgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIGl0ZXJhdGVlID0gX2l0ZXJhdGVlRm4oaXRlcmF0ZWUpO1xuXG4gIGlmKCBsaXN0ICYmIGxpc3QubGVuZ3RoICkge1xuICAgIHJldHVybiBhcnJFdmVyeS5jYWxsKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcbiAgfSBlbHNlIGlmKCB0eXBlLmlzT2JqZWN0KGxpc3QpICkge1xuICAgIGZvciggdmFyIGtleSBpbiBsaXN0ICkgIHtcbiAgICAgIGlmKCAhaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2tleV0sIGtleSkgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIG1hcCAobGlzdCwgX2l0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIHZhciBpdGVyYXRlZSA9IHR5cGUuaXNTdHJpbmcoX2l0ZXJhdGVlKSA/IGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtW19pdGVyYXRlZV07IH0gOiBfaXRlcmF0ZWU7XG5cbiAgaWYoIGxpc3QgJiYgbGlzdC5sZW5ndGggKSB7XG4gICAgcmV0dXJuIGFyck1hcC5jYWxsKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcbiAgfSBlbHNlIGlmKCB0eXBlLmlzT2JqZWN0KGxpc3QpICkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBmb3IoIHZhciBrZXkgaW4gbGlzdCApICB7XG4gICAgICByZXN1bHRba2V5XSA9IGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtrZXldLCBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuXG5mdW5jdGlvbiBtYXAyTGlzdCAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgaWYoIGxpc3QgJiYgbGlzdC5sZW5ndGggKSB7XG4gICAgcmV0dXJuIGFyck1hcC5jYWxsKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW10sIGkgPSAwO1xuICBmb3IoIHZhciBrZXkgaW4gbGlzdCApICB7XG4gICAgcmVzdWx0W2krK10gPSBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3Rba2V5XSwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlIChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICAgIHRoaXNBcmcgPSB0aGlzQXJnID09PSB1bmRlZmluZWQgPyB0aGlzIDogdGhpc0FyZztcblxuICAgIGl0ZXJhdGVlID0gX2l0ZXJhdGVlRm4oaXRlcmF0ZWUpO1xuXG4gICAgZm9yKCB2YXIgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdGlmKCBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3RbaV0pICkge1xuXHRcdFx0XHRcdFx0bGlzdC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdH1cblx0XHR9XG59XG5cbmZ1bmN0aW9uIGZpcnN0IChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuXHRcdHRoaXNBcmcgPSB0aGlzQXJnID09PSB1bmRlZmluZWQgPyB0aGlzIDogdGhpc0FyZztcblxuXHRcdGl0ZXJhdGVlID0gX2l0ZXJhdGVlRm4oaXRlcmF0ZWUpO1xuXG4gICAgdmFyIGkgPSBhcnJJbmRleE9mLmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuXG5cdFx0Zm9yKCB2YXIgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoIDsgaSA8IGxlbiA7IGkrKyApIHtcbiAgICAgICAgaWYoIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtpXSkgKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdFtpXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbGFzdCAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcblx0XHR0aGlzQXJnID0gdGhpc0FyZyA9PT0gdW5kZWZpbmVkID8gdGhpcyA6IHRoaXNBcmc7XG5cblx0XHRpdGVyYXRlZSA9IF9pdGVyYXRlZUZuKGl0ZXJhdGVlKTtcblxuXHRcdGZvciggdmFyIGkgPSBsaXN0Lmxlbmd0aCAtIDEgOyBpID49IDAgOyBpLS0gKSB7XG4gICAgICAgIGlmKCBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3RbaV0pICkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3RbaV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZpbHRlciAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgICB2YXIgbmV3TGlzdCA9IFtdO1xuXG5cdFx0dGhpc0FyZyA9IHRoaXNBcmcgPT09IHVuZGVmaW5lZCA/IHRoaXMgOiB0aGlzQXJnO1xuXHRcdGl0ZXJhdGVlID0gX2l0ZXJhdGVlRm4oaXRlcmF0ZWUpO1xuXG5cdFx0Zm9yKCB2YXIgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoIDsgaSA8IGxlbiA7IGkrKyApIHtcbiAgICAgICAgaWYoIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtpXSkgKSB7XG4gICAgICAgICAgICBuZXdMaXN0LnB1c2gobGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3TGlzdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIF9tYXRjaEFsbDogX21hdGNoQWxsLFxuICBfbWF0Y2hBbnk6IF9tYXRjaEFueSxcbiAgZmluZDogZmlyc3QsXG4gIGZpcnN0OiBmaXJzdCxcbiAgbGFzdDogbGFzdCxcbiAgZmlsdGVyOiBmaWx0ZXIsXG4gIGVhY2g6IGVhY2gsXG4gIHNvbWU6IHNvbWUsXG4gIGV2ZXJ5OiBldmVyeSxcbiAgbWFwOiBtYXAsXG4gIHBsdWNrOiBtYXAsXG4gIG1hcDJMaXN0OiBtYXAyTGlzdCxcbiAgaW5kZXhPZjogaW5kZXhPZixcbiAgaW5kZXhCeTogaW5kZXhCeSxcbiAgcmVtb3ZlOiByZW1vdmUsXG4gIGlmOiBmdW5jdGlvbiAocmVzdWx0LCBmbikge1xuICAgIGlmKCByZXN1bHQgIT09IHVuZGVmaW5lZCAmJiBmbiBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgICAgcmV0dXJuIGZuKHJlc3VsdCk7XG4gICAgfVxuICB9XG59O1xuIiwiXG52YXIgUkVfZG90c0JhY2sgPSAvW15cXC9dK1xcL1xcLlxcLlxcLy9nLFxuXHRjbGVhclN0ciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcnOyB9O1xuXG5mdW5jdGlvbiBfam9pblBhdGggKCkge1xuICAgIHZhciBwYXRoID0gKGFyZ3VtZW50c1swXSB8fCAnJykucmVwbGFjZSgvXFwvJC8sICcnKSxcbiAgICBcdGJhY2tEb3RzO1xuXG4gICAgZm9yKCB2YXIgaSA9IDEsIGxhc3QgPSBhcmd1bWVudHMubGVuZ3RoIC0gMSA7IGkgPCBsYXN0IDsgaSsrICkge1xuICAgICAgICBwYXRoICs9ICcvJyArIGFyZ3VtZW50c1tpXS5yZXBsYWNlKC9eXFwvfFxcLyQvZywgJycpO1xuICAgIH1cbiAgICBpZiggbGFzdCApIHtcbiAgICAgICAgcGF0aCArPSBhcmd1bWVudHNbbGFzdF0gPyAoICcvJyArIGFyZ3VtZW50c1tsYXN0XS5yZXBsYWNlKC9eXFwvLywgJycpICkgOiAnJztcbiAgICB9XG5cbiAgICB3aGlsZSggUkVfZG90c0JhY2sudGVzdChwYXRoKSApIHtcbiAgICBcdHBhdGggPSBwYXRoLnJlcGxhY2UoUkVfZG90c0JhY2ssIGNsZWFyU3RyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGpvaW5QYXRoOiBfam9pblBhdGhcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9pc1R5cGUgKHR5cGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgbyA9PT0gdHlwZSk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gX2luc3RhbmNlT2YgKF9jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gKCBvIGluc3RhbmNlb2YgX2NvbnN0cnVjdG9yICk7XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzVHlwZTogZnVuY3Rpb24gKHR5cGUsIHZhbHVlKSB7XG4gICAgaWYoIHZhbHVlID09PSB1bmRlZmluZWQgKSB7XG4gICAgICByZXR1cm4gX2lzVHlwZSh0eXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIF9pc1R5cGUodHlwZSkodmFsdWUpO1xuICB9LFxuICBpbnN0YW5jZU9mOiBmdW5jdGlvbiAoUHJvdG8sIHZhbHVlKSB7XG4gICAgaWYoIHZhbHVlID09PSB1bmRlZmluZWQgKSB7XG4gICAgICByZXR1cm4gX2luc3RhbmNlT2YoUHJvdG8pO1xuICAgIH1cbiAgICByZXR1cm4gX2luc3RhbmNlT2YoUHJvdG8pKHZhbHVlKTtcbiAgfSxcbiAgaXNPYmplY3Q6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBvICE9PSBudWxsO1xuICB9LFxuXHRpc0Z1bmN0aW9uOiBfaXNUeXBlKCdmdW5jdGlvbicpLFxuXHRpc1N0cmluZzogX2lzVHlwZSgnc3RyaW5nJyksXG5cdGlzTnVtYmVyOiBfaXNUeXBlKCdudW1iZXInKSxcblx0aXNBcnJheTogQXJyYXkuaXNBcnJheSB8fCBfaW5zdGFuY2VPZihBcnJheSksXG5cdGlzRGF0ZTogX2luc3RhbmNlT2YoRGF0ZSksXG5cdGlzUmVnRXhwOiBfaW5zdGFuY2VPZihSZWdFeHApLFxuXHRpc0VsZW1lbnQ6IGZ1bmN0aW9uKG8pIHtcbiAgICByZXR1cm4gbyAmJiBvLm5vZGVUeXBlID09PSAxO1xuICB9LFxuICBpc1VuZGVmaW5lZDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XG4gIH1cbn07XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFByb21pc2UpIHtcblxuXHRpZiggIVByb21pc2UuZGVmZXIgKSB7XG5cdFx0UHJvbWlzZS5kZWZlciA9IGZ1bmN0aW9uICgpIHtcblx0XHQgIHZhciBkZWZlcnJlZCA9IHt9O1xuXHRcdCAgZGVmZXJyZWQucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHQgICAgZGVmZXJyZWQucmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0ICAgIGRlZmVycmVkLnJlamVjdCA9IHJlamVjdDtcblx0XHQgIH0pO1xuXHRcdCAgcmV0dXJuIGRlZmVycmVkO1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBlYWNoIChpdGVyYWJsZSwgaGFuZGxlcikge1xuXHRcdGZvciggdmFyIGkgPSAwLCBuID0gaXRlcmFibGUubGVuZ3RoOyBpIDwgbiA7IGkrKyApIHtcblx0XHRcdGhhbmRsZXIoaXRlcmFibGVbaV0sIGkpO1xuXHRcdH1cblx0fVxuXG5cdGlmKCAhUHJvbWlzZS5hbGwgKSB7XG5cdFx0UHJvbWlzZS5hbGwgPSBmdW5jdGlvbiAoaXRlcmFibGUpIHtcblx0XHQgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0ICAgIHZhciBwZW5kaW5nID0gaXRlcmFibGUubGVuZ3RoLFxuXHRcdCAgICAgICAgcmVzdWx0cyA9IFtdO1xuXHRcdCAgICBlYWNoKGl0ZXJhYmxlLCBmdW5jdGlvbiAoX3Byb21pc2UsIGkpIHtcblxuXHRcdCAgICAgICggX3Byb21pc2UudGhlbiA/IF9wcm9taXNlIDogUHJvbWlzZS5yZXNvbHZlKF9wcm9taXNlKSApLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdCAgICAgICAgcmVzdWx0c1tpXSA9IHJlc3VsdDtcblx0XHQgICAgICAgIGlmKCAtLXBlbmRpbmcgPT09IDAgKSB7XG5cdFx0ICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuXHRcdCAgICAgICAgaWYoIHBlbmRpbmcgIT09IC0xICkge1xuXHRcdCAgICAgICAgICBwZW5kaW5nID09PSAtMTtcblx0XHQgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgfSk7XG5cdFx0ICAgIH0pO1xuXHRcdCAgfSk7XG5cdFx0fTtcblx0fVxuXG5cdGlmKCAhUHJvbWlzZS5yYWNlICkge1xuXHRcdFByb21pc2UucmFjZSA9IGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuXHRcdCAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHQgICAgdmFyIGRvbmUgPSBmYWxzZTtcblxuXHRcdCAgICBlYWNoKGl0ZXJhYmxlLCBmdW5jdGlvbiAoX3Byb21pc2UsIGkpIHtcblx0XHQgICAgICBpZiggZG9uZSApIHtcblx0XHQgICAgICAgIHJldHVybjtcblx0XHQgICAgICB9XG5cdFx0ICAgICAgKCBfcHJvbWlzZS50aGVuID8gX3Byb21pc2UgOiBQcm9taXNlLnJlc29sdmUoX3Byb21pc2UpICkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0ICAgICAgICBpZiggIWRvbmUgKSB7XG5cdFx0ICAgICAgICAgIGRvbmUgPSB0cnVlO1xuXHRcdCAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuXHRcdCAgICAgICAgaWYoICFkb25lICkge1xuXHRcdCAgICAgICAgICBkb25lID0gdHJ1ZTtcblx0XHQgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgfSk7XG5cdFx0ICAgIH0pO1xuXHRcdCAgfSk7XG5cdFx0fTtcblx0fVxuXG5cdGlmKCAhUHJvbWlzZS5yZXNvbHZlICkge1xuXHRcdFByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHQgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHJlc29sdmUocmVzdWx0KTsgfSk7XG5cdFx0fTtcblx0fVxuXG5cdGlmKCAhUHJvbWlzZS5yZWplY3QgKSB7XG5cdFx0UHJvbWlzZS5yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG5cdFx0ICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyByZWplY3QocmVhc29uKTsgfSk7XG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiBQcm9taXNlO1xufTtcbiIsIlxuZnVuY3Rpb24gc3RlcFJlc3VsdCAoc3RlcCwgdmFsdWUsIHR5cGUpIHtcbiAgaWYoIHZhbHVlICYmIHZhbHVlLnRoZW4gKSB7XG4gICAgdmFsdWUudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBzdGVwLmRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICBzdGVwLmRlZmVycmVkLnJlamVjdChyZWFzb24pO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHN0ZXAuZGVmZXJyZWRbdHlwZV0odmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NRdWV1ZShwcm9taXNlKSB7XG4gIGlmKCBwcm9taXNlLiQkc3VjY2VlZGVkID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGxlbiA9IHByb21pc2UuJCRxdWV1ZS5sZW5ndGgsXG4gICAgICBzdGVwID0gcHJvbWlzZS4kJHF1ZXVlLnNoaWZ0KCksXG4gICAgICB0eXBlID0gcHJvbWlzZS4kJHN1Y2NlZWRlZCA/ICdyZXNvbHZlJyA6ICdyZWplY3QnLFxuICAgICAgdW5jb3VnaCA9ICFwcm9taXNlLiQkc3VjY2VlZGVkICYmIHByb21pc2UuJCR1bmNvdWdodCsrO1xuXG4gIHdoaWxlKCBzdGVwICkge1xuXG4gICAgaWYoIHN0ZXBbdHlwZV0gKSB7XG4gICAgICB1bmNvdWdoID0gZmFsc2U7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHN0ZXBSZXN1bHQoc3RlcCwgc3RlcFt0eXBlXShwcm9taXNlLiQkdmFsdWUpLCAncmVzb2x2ZScpO1xuICAgICAgfSBjYXRjaCAocmVhc29uKSB7XG4gICAgICAgIHN0ZXBSZXN1bHQoc3RlcCwgcmVhc29uLCAncmVqZWN0Jyk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgc3RlcFJlc3VsdChzdGVwLCBwcm9taXNlLiQkdmFsdWUsIHR5cGUpO1xuICAgIH1cblxuICAgIHN0ZXAgPSBwcm9taXNlLiQkcXVldWUuc2hpZnQoKTtcbiAgfVxuXG4gIGlmKCAhcHJvbWlzZS4kJHN1Y2NlZWRlZCAmJiB1bmNvdWdoICkge1xuICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGlmKCBwcm9taXNlLiQkdW5jb3VnaCA9PT0gdW5jb3VnaCApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5jYXVnaHQgKGluIHByb21pc2UpJyk7XG4gICAgfVxuICAgIC8vIH0sIDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIFByb21pc2UgKGV4ZWN1dG9yKSB7XG4gIGlmKCAhKCBleGVjdXRvciBpbnN0YW5jZW9mIEZ1bmN0aW9uICkgKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZSByZXNvbHZlciB1bmRlZmluZWQgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIHZhciBwID0gdGhpcztcbiAgdGhpcy4kJHF1ZXVlID0gW107XG4gIHRoaXMuJCR1bmNvdWdoID0gMDtcblxuICB0cnkge1xuICAgIGV4ZWN1dG9yKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHAuJCRzdWNjZWVkZWQgPSB0cnVlO1xuICAgICAgcC4kJHZhbHVlID0gcmVzdWx0O1xuICAgICAgcHJvY2Vzc1F1ZXVlKHApO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHAuJCRzdWNjZWVkZWQgPSBmYWxzZTtcbiAgICAgIHAuJCR2YWx1ZSA9IHJlYXNvbjtcbiAgICAgIHByb2Nlc3NRdWV1ZShwKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcC4kJHN1Y2NlZWRlZCA9IGZhbHNlO1xuICAgIHAuJCR2YWx1ZSA9IGVycjtcbiAgICBwcm9jZXNzUXVldWUocCk7XG4gIH1cbn1cblxuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbnN1Y2NlZWRlZCwgb25SZWplY3RlZCkge1xuICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgX3Byb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIF90aGlzLiQkcXVldWUucHVzaCh7IHJlc29sdmU6IG9uc3VjY2VlZGVkLCByZWplY3Q6IG9uUmVqZWN0ZWQsIGRlZmVycmVkOiB7IHJlc29sdmU6IHJlc29sdmUsIHJlamVjdDogcmVqZWN0IH0gfSk7XG4gICAgICB9KTtcblxuICBwcm9jZXNzUXVldWUodGhpcyk7XG5cbiAgcmV0dXJuIF9wcm9taXNlO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG59O1xuXG5yZXF1aXJlKCcuL3Byb21pc2UtbWV0aG9kcycpKFByb21pc2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9xaXplcicpKCBnbG9iYWwuUHJvbWlzZSA/IHJlcXVpcmUoJy4vcHJvbWlzZS1tZXRob2RzJykoZ2xvYmFsLlByb21pc2UpIDogcmVxdWlyZSgnLi9wcm9taXNlLXBvbHlmaWxsJykgKTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUHJvbWlzZSkge1xuXG4gIGZ1bmN0aW9uIHEgKGV4ZWN1dG9yKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGV4ZWN1dG9yKTtcbiAgfVxuXG4gIFsnZGVmZXInLCAncmVzb2x2ZScsICdyZWplY3QnLCAnYWxsJywgJ3JhY2UnXS5mb3JFYWNoKGZ1bmN0aW9uIChmTmFtZSkge1xuICAgIHFbZk5hbWVdID0gUHJvbWlzZVtmTmFtZV07XG4gIH0pO1xuXG4gIHEud2hlbiA9IGZ1bmN0aW9uIChwKSB7IHJldHVybiAoIHAgJiYgcC50aGVuICkgPyBwIDogUHJvbWlzZS5yZXNvbHZlKHApOyB9O1xuICBxLnVzZVBvbHlmaWxsID0gZnVuY3Rpb24gKCkge1xuICBcdFByb21pc2UgPSByZXF1aXJlKCcuL3Byb21pc2UtcG9seWZpbGwnKTtcbiAgICBbJ2RlZmVyJywgJ3Jlc29sdmUnLCAncmVqZWN0JywgJ2FsbCcsICdyYWNlJ10uZm9yRWFjaChmdW5jdGlvbiAoZk5hbWUpIHtcbiAgICAgIHFbZk5hbWVdID0gUHJvbWlzZVtmTmFtZV07XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHE7XG5cbn07XG4iLCJcbnJlcXVpcmUoJy4vYnJvd3Nlci1wb2x5ZmlsbHMvY3VycmVudC1zY3JpcHQnKTtcbnJlcXVpcmUoJy4vYnJvd3Nlci1wb2x5ZmlsbHMvZGF0ZScpO1xucmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscy9kb20tY2xvc2VzdCcpO1xucmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscy9ldmVudC1saXN0ZW5lcicpO1xucmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscy9tYXRjaC1tZWRpYScpO1xucmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscy9tYXRjaGVzLXNlbGVjdG9yJyk7IiwiXG5kb2N1bWVudC5jdXJyZW50U2NyaXB0ID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdCB8fCAoZnVuY3Rpb24oKSB7XG4gICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbiAgIHJldHVybiBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV07XG4gfSkoKTsiLCJcbmlmICghRGF0ZS5ub3cpIHtcbiAgRGF0ZS5ub3cgPSBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9O1xufSIsIlxuaWYoICFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ICkge1xuICBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdmFyIGVsID0gdGhpcztcblxuICAgIHdoaWxlKCBlbCApIHtcbiAgICAgIGlmKCBlbC5tYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpICkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIGVsO1xuICB9O1xufSIsIlxuaWYoICFFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyICkge1xuICBpZiggRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoRXZlbnQgKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoRXZlbnQoICdvbicgKyBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gICAgfTtcbiAgICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5kZXRhY2hFdmVudCggJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRocm93ICdCcm93c2VyIG5vdCBjb21wYXRpYmxlIHdpdGggZWxlbWVudCBldmVudHMnO1xuICB9XG59IiwiKGZ1bmN0aW9uIChyb290KSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICByb290Lm1hdGNoTWVkaWEgPSByb290Lm1hdGNoTWVkaWEgfHwgcm9vdC53ZWJraXRNYXRjaE1lZGlhIHx8IHJvb3QubW96TWF0Y2hNZWRpYSB8fCByb290Lm1zTWF0Y2hNZWRpYTtcbn0pKHRoaXMpOyIsIlxuaWYoICFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3IgKSB7XG4gIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNTZWxlY3RvciA9IChcbiAgICBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3JcbiAgKTtcbn1cblxuIiwiXG5yZXF1aXJlKCcuL2Jyb3dzZXItcG9seWZpbGxzJyk7XG4vLyBkb2N1bWVudC5jdXJyZW50U2NyaXB0XG4vLyBEYXRlLm5vdygpXG4vLyBIVE1MRWxlbWVudC5jbG9zZXN0KClcbi8vIEhUTUxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXJcbi8vIEhUTUxFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXJcbi8vIHdpbmRvdy5tYXRjaE1lZGlhXG4vLyBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3JcblxucmVxdWlyZSgnY2xhc3NsaXN0LmpzJyk7IC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VzL2RvY3MvV2ViL0FQSS9FbGVtZW50L2NsYXNzTGlzdFxuXG52YXIgZXh0ZW5kID0gcmVxdWlyZSgnbml0cm8tdG9vbHMvZXh0ZW5kJyk7XG5cbmZ1bmN0aW9uIF8gKHNlbGVjdG9yLCBzb3VyY2UpIHtcbiAgcmV0dXJuIHNvdXJjZSAmJiB0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJyA/XG5cdFx0c2VsZWN0b3IucXVlcnlTZWxlY3Rvcihzb3VyY2UpIDpcblx0XHQoc291cmNlIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuXy5ub29wID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuZXh0ZW5kLmV4dGVuZChfLCBleHRlbmQpO1xuXG5fLmV4dGVuZChfLFxuICByZXF1aXJlKCduaXRyby10b29scy90eXBlJyksXG5cdHJlcXVpcmUoJ25pdHJvLXRvb2xzL2tleScpLFxuXHRyZXF1aXJlKCduaXRyby10b29scy9wYXRoJylcbik7XG5cbl8uZXh0ZW5kKF8sIHtcblx0YW5pbWF0ZTogcmVxdWlyZSgnLi9kZWZlcnJlZC9hbmltYXRlJyksXG5cdHdhaXQ6IHJlcXVpcmUoJy4vZGVmZXJyZWQvd2FpdCcpXG59KTtcblxuXy5leHRlbmQoXywge1xuXHRyZWFkeTogcmVxdWlyZSgnLi9mbi9yZWFkeScpLFxuXHR0ZW1wbGF0ZTogcmVxdWlyZSgnLi9mbi90ZW1wbGF0ZScpLFxuXHRkZWJvdW5jZTogcmVxdWlyZSgnLi9mbi9kZWJvdW5jZScpXG59KTtcblxuXy5leHRlbmQoXyxcbiAgcmVxdWlyZSgnLi91dGlscy9ldmVudHMnKSxcblx0Ly8gXy5vbihlbCwgZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKVxuXHQvLyBfLm9mZihlbCwgZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKVxuXHQvLyBfLnRyaWdnZXJFdmVudChlbGVtZW50LCBldmVudE5hbWUsIGRhdGEpXG5cbiAgcmVxdWlyZSgnLi91dGlscy9kb20nKVxuICAvLyBfLmNyZWF0ZSh0YWdOYW1lLCBhdHRycylcblx0Ly8gXy5hdHRyKGVsLCBuYW1lLCB2YWx1ZSlcbiAgLy8gXy50bXBDbGFzcyhlbCwgY2xhc3NOYW1lLCBkdXJhdGlvbiwgY2IpXG4pO1xuXG5fLmV4dGVuZChfLCB7XG5cdG5vcm1hbGl6ZTogcmVxdWlyZSgnLi91dGlscy9ub3JtYWxpemUnKSxcblx0Ly8gXy50b3VjaERldmljZSA9PT0gdHJ1ZSB8IGZhbHNlXG5cdC8vIF8uaXNNYWMgPT09IHRydWUgfCBmYWxzZVxuXHQvLyBfLmlzQW5kcm9pZCA9PT0gdHJ1ZSB8IGZhbHNlXG5cblx0c2Nyb2xsOiByZXF1aXJlKCcuL3V0aWxzL3Njcm9sbC9idW5kbGUnKSAvLyBzY3JvbGwgaXMgbm90IGF2YWlsYWJsZSB1bnRpbCBkb2N1bWVudCBpcyByZWFkeVxuXHQvLyBfLnNjcm9sbC5vbiggaGFuZGxlciwgdXNlQ2FwdHVyZSApXG5cdC8vIF8uc2Nyb2xsLm9mZiggaGFuZGxlciwgdXNlQ2FwdHVyZSApXG5cdC8vIF8uc2Nyb2xsLnRvcCgpXG5cdC8vIF8uc2Nyb2xsLmdvdG8odmFsdWUpXG5cdC8vIF8uc2Nyb2xsLmFuaW1hdGVUbyh2YWx1ZSB8IEhUTUxFbGVtZW50LCBjYWxsYmFjaywgZHVyYXRpb24pOiBQcm9taXNlXG5cdC8vIF8sc2Nyb2xsLmluQW5pbWF0aW9uID09PSB0cnVlIHwgZmFsc2Vcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IF87XG4iLCJcbnZhciAkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZScpLFxuICAgIHRpbWluZ0Z1bmN0aW9ucyA9IHt9LFxuICAgIG5vb3AgPSBmdW5jdGlvbiAoKSB7fSxcbiAgICBnZXRUaW1pbmdGdW5jdGlvbiA9IGZ1bmN0aW9uICh0aW1pbmdGdW5jdGlvbk5hbWUpIHtcbiAgICAgIGlmKCAhdGltaW5nRnVuY3Rpb25zW3RpbWluZ0Z1bmN0aW9uTmFtZV0gKSB7XG4gICAgICAgIGlmKCB0aW1pbmdGdW5jdGlvbk5hbWUgPT09ICdsaW5lYXInICkge1xuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdID0gZnVuY3Rpb24gKCB2YWx1ZSApIHsgcmV0dXJuIHZhbHVlOyB9O1xuICAgICAgICB9IGVsc2UgaWYoIHRpbWluZ0Z1bmN0aW9uTmFtZSA9PT0gJ2Vhc2UnICkge1xuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdID0gcmVxdWlyZSgnYmV6aWVyLWVhc2luZycpKC4xNywuNjcsLjgzLC42Nyk7XG4gICAgICAgIH0gZWxzZSBpZiggdGltaW5nRnVuY3Rpb25OYW1lID09PSAnZWFzZS1pbicgKSB7XG4gICAgICAgICAgdGltaW5nRnVuY3Rpb25zW3RpbWluZ0Z1bmN0aW9uTmFtZV0gPSByZXF1aXJlKCdiZXppZXItZWFzaW5nJykoLjQyLDAsMSwxKTtcbiAgICAgICAgfSBlbHNlIGlmKCB0aW1pbmdGdW5jdGlvbk5hbWUgPT09ICdlYXNlLW91dCcgKSB7XG4gICAgICAgICAgdGltaW5nRnVuY3Rpb25zW3RpbWluZ0Z1bmN0aW9uTmFtZV0gPSByZXF1aXJlKCdiZXppZXItZWFzaW5nJykoMCwwLC41OCwxKTtcbiAgICAgICAgfSBlbHNlIGlmKCB0aW1pbmdGdW5jdGlvbk5hbWUgPT09ICdlYXNlLWluLW91dCcgKSB7XG4gICAgICAgICAgdGltaW5nRnVuY3Rpb25zW3RpbWluZ0Z1bmN0aW9uTmFtZV0gPSByZXF1aXJlKCdiZXppZXItZWFzaW5nJykoLjQyLDAsLjU4LDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGltaW5nRnVuY3Rpb25zW3RpbWluZ0Z1bmN0aW9uTmFtZV07XG4gICAgfTtcblxuZnVuY3Rpb24gYW5pbWF0ZSAocHJvZ3Jlc3NGbiwgZHVyYXRpb24sIGF0RW5kLCB0aW1pbmdGdW5jdGlvbk5hbWUpIHtcbiAgaWYgKCBkdXJhdGlvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgIGlmICggdHlwZW9mIGF0RW5kID09PSAnbnVtYmVyJyApIHtcbiAgICAgIGF1eCA9IGR1cmF0aW9uO1xuICAgICAgZHVyYXRpb24gPSBhdEVuZDtcbiAgICAgIGF0RW5kID0gYXV4O1xuICAgIH0gZWxzZSB7XG4gICAgICBhdEVuZCA9IGR1cmF0aW9uO1xuICAgICAgZHVyYXRpb24gPSA0MDA7XG4gICAgfVxuICB9IGVsc2UgaWYgKCBkdXJhdGlvbiA9PT0gdW5kZWZpbmVkICkge1xuICAgIGR1cmF0aW9uID0gNDAwO1xuICB9XG5cbiAgdGltaW5nRnVuY3Rpb25OYW1lID0gdGltaW5nRnVuY3Rpb25OYW1lIHx8ICggdHlwZW9mIGF0RW5kID09PSAnc3RyaW5nJyA/IGF0RW5kIDogKCB0eXBlb2YgZHVyYXRpb24gPT09ICdzdHJpbmcnID8gZHVyYXRpb24gOiAnZWFzZScgKSApO1xuXG4gIHByb2dyZXNzRm4oZHVyYXRpb24gPT09IDAgPyAxIDogMCk7XG5cbiAgdmFyIHN0b3BwZWQgPSBmYWxzZSxcbiAgICAgIHRpbWluZ0Z1bmN0aW9uID0gZ2V0VGltaW5nRnVuY3Rpb24odGltaW5nRnVuY3Rpb25OYW1lKSxcbiAgICAgIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcblxuICBpZiggZHVyYXRpb24gPiAwICkge1xuICAgIHZhciBzdGFydCA9IERhdGUubm93KCksXG4gICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBlbGFwc2VkID0gRGF0ZS5ub3coKSAtIHN0YXJ0O1xuXG4gICAgICAgICAgaWYoIHN0b3BwZWQgKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICB9IGVsc2UgaWYoIGVsYXBzZWQgPj0gZHVyYXRpb24gKSB7XG4gICAgICAgICAgICBzdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb2dyZXNzRm4oMSk7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgICAgICAoYXRFbmQgfHwgbm9vcCkoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvZ3Jlc3NGbiggdGltaW5nRnVuY3Rpb24oZWxhcHNlZC9kdXJhdGlvbikgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwKTtcbiAgfVxuXG4gIGRlZmVycmVkLnByb21pc2Uuc3RvcCA9IGZ1bmN0aW9uIChyZWplY3QpIHtcbiAgICBzdG9wcGVkID0gdHJ1ZTtcbiAgICBpZiggcmVqZWN0ICkge1xuICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xufVxuXG5hbmltYXRlLnRpbWUgPSBmdW5jdGlvbiAoZWwpIHtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgZHVyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuYW5pbWF0aW9uRHVyYXRpb247XG4gIGlmKCBkdXJhdGlvbiApIHtcbiAgICBkdXJhdGlvbi5yZXBsYWNlKC8oWzAtOV0oXFwuWzAtOV0pPykobSk/cy8sIGZ1bmN0aW9uIChtYXRjaGVkLCB0LCBkZWNpbWFscywgbXMpIHtcbiAgICAgIHRpbWUgKz0gbXMgPyBOdW1iZXIodCkgOiBOdW1iZXIodCkqMTAwMDtcbiAgICB9KTtcbiAgfVxuICBpZiggd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmFuaW1hdGlvbkRlbGF5ICkge1xuICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5hbmltYXRpb25EZWxheS5yZXBsYWNlKC8oWzAtOV0oXFwuWzAtOV0pPykobSk/cy8sIGZ1bmN0aW9uIChtYXRjaGVkLCB0LCBkZWNpbWFscywgbXMpIHtcbiAgICAgIHRpbWUgKz0gbXMgPyBOdW1iZXIodCkgOiBOdW1iZXIodCkqMTAwMDtcbiAgICB9KTtcbiAgfVxuICBkdXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS50cmFuc2l0aW9uRHVyYXRpb247XG4gIGlmKCBkdXJhdGlvbiApIHtcbiAgICBkdXJhdGlvbi5yZXBsYWNlKC8oWzAtOV0oXFwuWzAtOV0pPykobSk/cy8sIGZ1bmN0aW9uIChtYXRjaGVkLCB0LCBkZWNpbWFscywgbXMpIHtcbiAgICAgIHZhciB0ID0gbXMgPyBOdW1iZXIodCkgOiBOdW1iZXIodCkqMTAwMDtcbiAgICAgIGlmKCB0ID4gdGltZSApIHtcbiAgICAgICAgdGltZSA9IHQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLy8gY29uc29sZS5sb2coJ2FuaW1hdGlvblRpbWUnLCBlbCwgdGltZSk7XG4gIHJldHVybiB0aW1lO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmltYXRlO1xuIiwiXG52YXIgJHEgPSByZXF1aXJlKCdxLXByb21pc2UnKSxcblx0d2FpdCA9IGZ1bmN0aW9uIChkZWxheSwgY2FsbGJhY2spIHtcblx0XHRpZiggZGVsYXkgaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcblx0XHRcdGRlbGF5ID0gW2NhbGxiYWNrLCBjYWxsYmFjayA9IGRlbGF5XVswXTtcblx0XHR9XG5cdFx0aWYoIGNhbGxiYWNrICYmICEoY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbikgKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIHNob3VsZCBiZSBhIEZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdGlmKCB0eXBlb2YgZGVsYXkgIT09ICdudW1iZXInICkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdkZWxheSBzaG91bGQgYmUgYSBOdW1iZXInKTtcblx0XHR9XG5cdFx0cmV0dXJuICRxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdGlmKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBkZWxheSk7XG5cdFx0fSk7XG5cdH07XG5cbm1vZHVsZS5leHBvcnRzID0gd2FpdDsiLCJcbmZ1bmN0aW9uIGRlYm91bmNlIChmbiwgdGltZXNsb3QpIHtcbiAgdmFyIHRpbWVyID0gbnVsbCxcbiAgICAgIHRpbWVzbG90ID0gdGltZXNsb3QgfHwgODA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgaWYoIHRpbWVyICkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZm4uYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgIH0sIHRpbWVzbG90KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTsiLCJ2YXIgcmVhZHlMaXN0ZW5lcnMgPSBbXSxcbiAgICBpbml0UmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gcmVhZHlMaXN0ZW5lcnM7XG4gICAgICByZWFkeUxpc3RlbmVycyA9IHVuZGVmaW5lZDtcbiAgICAgIFtdLmZvckVhY2guY2FsbChsaXN0ZW5lcnMsIGZ1bmN0aW9uIChjYikgeyBjYigpOyB9KTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0UmVhZHkpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0UmVhZHkpO1xuICAgIH07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0UmVhZHkpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0UmVhZHkpO1xuXG5mdW5jdGlvbiByZWFkeSAoY2FsbGJhY2spIHtcbiAgaWYoIGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgaWYoIHJlYWR5TGlzdGVuZXJzICkge1xuICAgICAgcmVhZHlMaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVhZHk7XG4iLCJcbmZ1bmN0aW9uIHRlbXBsYXRlIChuYW1lLCBkYXRhKXtcbiAgcmV0dXJuIHRlbXBsYXRlLmNhY2hlW25hbWVdKGRhdGEgfHwge30pO1xufVxuXG50ZW1wbGF0ZS5jYWNoZSA9IHt9O1xuXG50ZW1wbGF0ZS5jb21waWxlID0gZnVuY3Rpb24gKHRtcGwpIHtcbiAgLy8gSm9obiBSZXNpZyBtaWNyby10ZW1wbGF0ZVxuICByZXR1cm4gbmV3IEZ1bmN0aW9uKCdvYmonLCAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICAndmFyIHA9W10scHJpbnQ9ZnVuY3Rpb24oKXtwLnB1c2guYXBwbHkocCxhcmd1bWVudHMpO307JyArXG5cbiAgICAvLyBJbnRyb2R1Y2UgdGhlIGRhdGEgYXMgbG9jYWwgdmFyaWFibGVzIHVzaW5nIHdpdGgoKXt9XG4gICAgJ3dpdGgob2JqKXtwLnB1c2goXFwnJyArXG5cbiAgICAvLyBDb252ZXJ0IHRoZSB0ZW1wbGF0ZSBpbnRvIHB1cmUgSmF2YVNjcmlwdFxuICAgIHRtcGwudHJpbSgpXG4gICAgICAucmVwbGFjZSgvW1xcclxcdFxcbl0vZywgJyAnKVxuICAgICAgLnNwbGl0KCc8JScpLmpvaW4oJ1xcdCcpXG4gICAgICAucmVwbGFjZSgvKChefCU+KVteXFx0XSopJy9nLCAnJDFcXHInKVxuICAgICAgLnJlcGxhY2UoL1xcdD0oLio/KSU+L2csICdcXCcsJDEsXFwnJylcbiAgICAgIC5zcGxpdCgnXFx0Jykuam9pbignXFwnKTsnKVxuICAgICAgLnNwbGl0KCclPicpLmpvaW4oJ3AucHVzaChcXCcnKVxuICAgICAgLnNwbGl0KCdcXHInKS5qb2luKCdcXFxcXFwnJykgKyAnXFwnKTt9cmV0dXJuIHAuam9pbihcXCdcXCcpOycpO1xufTtcblxudGVtcGxhdGUucHV0ID0gZnVuY3Rpb24gKG5hbWUsIHRtcGwpIHtcbiAgdGVtcGxhdGUuY2FjaGVbbmFtZV0gPSB0ZW1wbGF0ZS5jb21waWxlKHRtcGwpO1xufTtcblxudGVtcGxhdGUubG9va3VwID0gZnVuY3Rpb24gKCkge1xuICBbXS5mb3JFYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0W3R5cGU9XCJhcHBsaWNhdGlvbi94LXRlbXBsYXRlXCJdW2RhdGEtdGVtcGxhdGVdJyksIGZ1bmN0aW9uICh0bXBsKSB7XG4gICAgdGVtcGxhdGUucHV0KHRtcGwuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJyksIHRtcGwudGV4dCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJcbnZhciBfZG9tID0ge1xuICBjcmVhdGU6IGZ1bmN0aW9uICh0YWdOYW1lLCBhdHRycykge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgXG4gICAgaWYoIGF0dHJzICkge1xuICAgICAgaWYoIGF0dHJzLmh0bWwgKSB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGF0dHJzLmh0bWw7XG4gICAgICB9XG4gICAgICBmb3IoIHZhciBhdHRyIGluIGF0dHJzICkge1xuICAgICAgICBpZiggYXR0ciAhPT0gJ2h0bWwnICkge1xuICAgICAgICAgIGVsW2F0dHJdID0gYXR0cnNbYXR0cl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsO1xuICB9LFxuICBhdHRyOiBmdW5jdGlvbiAoZWwsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYoICEoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSAmJiBlbFswXSBpbnN0YW5jZW9mIEVsZW1lbnQgKSB7XG4gICAgICBlbCA9IGVsWzBdO1xuICAgIH1cbiAgICBpZiggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gIH0sXG4gIHRtcENsYXNzOiBmdW5jdGlvbiAoZWwsIGNsYXNzTmFtZSwgZHVyYXRpb24sIGNiKSB7XG4gICAgdmFyIGlzQ29sbGVjdGlvbiA9ICEoZWwgaW5zdGFuY2VvZiBFbGVtZW50ICkgJiYgZWwubGVuZ3RoO1xuXG4gICAgaWYoIGlzQ29sbGVjdGlvbiApIHtcbiAgICAgIFtdLmZvckVhY2guY2FsbChlbCwgZnVuY3Rpb24gKF9lbCkge1xuICAgICAgICBfZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiggaXNDb2xsZWN0aW9uICkge1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZWwsIGZ1bmN0aW9uIChfZWwpIHtcbiAgICAgICAgICBfZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmKCBjYiBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgIH0sIGR1cmF0aW9uIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBkdXJhdGlvbigpIDogZHVyYXRpb24gKTtcbiAgfSxcbiAgZm9ybVBhcmFtczogZnVuY3Rpb24gKGZvcm0pIHtcbiAgICBpZiggIShmb3JtIGluc3RhbmNlb2YgRWxlbWVudCkgJiYgZm9ybS5sZW5ndGggKSB7XG4gICAgICBmb3JtID0gZm9ybVswXTtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHt9O1xuICAgIFtdLmZvckVhY2guY2FsbChmb3JtLmVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGlmKCBlbC5uYW1lICYmICFlbC5kaXNhYmxlZCApIHtcbiAgICAgICAgaWYoIGVsLnR5cGUgPT09ICdyYWRpbycgKSB7XG4gICAgICAgICAgaWYoIGVsLmNoZWNrZWQgKSB7XG4gICAgICAgICAgICBkYXRhW2VsLm5hbWVdID0gZWwudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGFbZWwubmFtZV0gPSBlbC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9kb207XG4iLCJcbm1vZHVsZS5leHBvcnRzID0ge1xuICBvbjogZnVuY3Rpb24gKGVsLCBldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpIHtcbiAgICBpZiggdHlwZW9mIGVsID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihlbCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKTtcbiAgfSxcbiAgb2ZmOiBmdW5jdGlvbiAoZWwsIGV2ZW50TmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSkge1xuICAgIGlmKCB0eXBlb2YgZWwgPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGVsLCBldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgIH1cbiAgICByZXR1cm4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICB9LFxuICB0cmlnZ2VyRXZlbnQ6IGRvY3VtZW50LmNyZWF0ZUV2ZW50ID8gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiSFRNTEV2ZW50c1wiKTtcbiAgICBldmVudC5kYXRhID0gZGF0YTtcbiAgICBldmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHJldHVybiBldmVudDtcbiAgfSA6IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpO1xuICAgIGV2ZW50LmRhdGEgPSBkYXRhO1xuICAgIGVsZW1lbnQuZmlyZUV2ZW50KFwib25cIiArIGV2ZW50TmFtZSwgZXZlbnQpO1xuICAgIHJldHVybiBldmVudDtcbiAgfVxufTtcbiIsIlxudmFyIG5vcm1hbGl6ZSA9IHtcbiAgaXNUb3VjaERldmljZTogJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICBpc01hYzogL15NYWMvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKSxcbiAgaXNBbmRyb2lkOiAvXkFuZHJvaWQvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKVxufTtcblxuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoIG5vcm1hbGl6ZS5pc1RvdWNoRGV2aWNlID8gJ3RvdWNoJyA6ICduby10b3VjaCcgKTtcbmlmKCBub3JtYWxpemUuaXNNYWMgKSB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1tYWMnKTtcbn1cbmlmKCBub3JtYWxpemUuaXNBbmRyb2lkICkge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtYW5kcm9pZCcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZTtcbiIsIlxuZnVuY3Rpb24gZ2V0U2Nyb2xsUm9vdCAoKSB7XG4gICAgaWYoIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH0gZWxzZSBpZiAoIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gICAgfVxuXG4gICAgdmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgICBjYWNoZVRvcCA9ICgodHlwZW9mIHdpbmRvdy5wYWdlWU9mZnNldCAhPT0gXCJ1bmRlZmluZWRcIikgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiBudWxsKSB8fCBib2R5LnNjcm9sbFRvcCB8fCBodG1sLnNjcm9sbFRvcCwgLy8gY2FjaGUgdGhlIHdpbmRvdydzIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgIHJvb3Q7XG5cbiAgICBodG1sLnNjcm9sbFRvcCA9IGJvZHkuc2Nyb2xsVG9wID0gY2FjaGVUb3AgKyAoY2FjaGVUb3AgPiAwKSA/IC0xIDogMTtcbiAgICAvLyBmaW5kIHJvb3QgYnkgY2hlY2tpbmcgd2hpY2ggc2Nyb2xsVG9wIGhhcyBhIHZhbHVlIGxhcmdlciB0aGFuIHRoZSBjYWNoZS5cbiAgICByb290ID0gKGh0bWwuc2Nyb2xsVG9wICE9PSBjYWNoZVRvcCkgPyBodG1sIDogYm9keTtcblxuICAgIHJvb3Quc2Nyb2xsVG9wID0gY2FjaGVUb3A7IC8vIHJlc3RvcmUgdGhlIHdpbmRvdydzIHNjcm9sbCBwb3NpdGlvbiB0byBjYWNoZWQgdmFsdWVcblxuICAgIHJldHVybiByb290OyAvLyByZXR1cm4gdGhlIHNjcm9sbGluZyByb290IGVsZW1lbnRcbn1cblxudmFyIHJlYWR5ID0gcmVxdWlyZSgnLi4vZm4vcmVhZHknKSxcblx0c2Nyb2xsUm9vdCA9IHsgc2Nyb2xsVG9wOiAwIH1cbiAgICBzY3JvbGwgPSB7XG4gICAgICByb290OiBzY3JvbGxSb290LFxuICAgICAgb246IGZ1bmN0aW9uICggaGFuZGxlciwgdXNlQ2FwdHVyZSApIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICAgICAgfSxcbiAgICAgIG9mZjogZnVuY3Rpb24gKCBoYW5kbGVyLCB1c2VDYXB0dXJlICkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciwgdXNlQ2FwdHVyZSk7XG4gICAgICB9LFxuICAgICAgdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzY3JvbGwucm9vdC5zY3JvbGxUb3A7XG4gICAgICB9LFxuICAgICAgZ290bzogZnVuY3Rpb24gKCB2YWx1ZSApIHtcbiAgICAgICAgc2Nyb2xsLnJvb3Quc2Nyb2xsVG9wID0gdmFsdWU7XG4gICAgICB9XG4gICAgfTtcblxucmVhZHkoZnVuY3Rpb24gKCkge1xuICBzY3JvbGxSb290ID0gZ2V0U2Nyb2xsUm9vdCgpO1xuICBzY3JvbGwucm9vdCA9IHNjcm9sbFJvb3Q7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGw7XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNjcm9sbCkge1xuXHRcblx0dmFyIGFuaW1hdGUgPSByZXF1aXJlKCcuLi8uLi9kZWZlcnJlZC9hbmltYXRlJyksXG5cdFx0JHEgPSByZXF1aXJlKCdxLXByb21pc2UnKSxcblx0XHRub29wID0gZnVuY3Rpb24oKSB7fSxcblx0XHRzY3JvbGxBbmltYXRpb24gPSBhbmltYXRlKG5vb3AsIDApLFxuXHRcdGF1eDtcblxuXHRzY3JvbGwuYW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBzY3JvbGxBbmltYXRpb247XG5cdH07XG5cblx0c2Nyb2xsLmFuaW1hdGVUbyA9IGZ1bmN0aW9uICh2YWx1ZSwgY2IsIGR1cmF0aW9uICkge1xuXHRcdGlmKCB2YWx1ZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdCAgcmV0dXJuICRxLnJlamVjdCgpO1xuXHRcdH1cblx0XHRpZiggdmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50ICkge1xuXHRcdCAgdmFsdWUgPSB2YWx1ZS5vZmZzZXRUb3A7XG5cdFx0fVxuXG5cdFx0aWYoIHR5cGVvZiBjYiA9PT0gJ251bWJlcicgKSB7XG5cdFx0ICBhdXggPSBjYjtcblx0XHQgIGR1cmF0aW9uID0gY2I7XG5cdFx0ICBjYiA9IGF1eDtcblx0XHR9XG5cblx0XHR2YXIgc2Nyb2xsRnJvbSA9IHNjcm9sbC50b3AoKSxcblx0XHQgICAgc2Nyb2xsRGVsdGEgPSB2YWx1ZSAtIHNjcm9sbEZyb207XG5cblx0XHRzY3JvbGxBbmltYXRpb24uc3RvcCgpO1xuXHRcdHNjcm9sbC5pbkFuaW1hdGlvbiA9IHRydWU7XG5cdFx0c2Nyb2xsQW5pbWF0aW9uID0gYW5pbWF0ZShmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcblx0XHQgIHNjcm9sbC5nb3RvKCBzY3JvbGxGcm9tICsgc2Nyb2xsRGVsdGEqcHJvZ3Jlc3MgKTtcblx0XHR9LCBmdW5jdGlvbiAoKSB7XG5cdFx0ICBzY3JvbGwuaW5BbmltYXRpb24gPSBmYWxzZTtcblx0XHQgIChjYiB8fCBfLm5vb3ApKCk7XG5cdFx0fSwgZHVyYXRpb24gfHwgMzUwLCAnZWFzZS1vdXQnKTtcblxuXHRcdHJldHVybiBzY3JvbGxBbmltYXRpb247XG5cdH07XG5cblx0cmV0dXJuIHNjcm9sbDtcbn07XG4iLCJcbnZhciBzY3JvbGwgPSByZXF1aXJlKCcuLi9zY3JvbGwnKTtcblxucmVxdWlyZSgnLi90b3AtY2xhc3MnKShzY3JvbGwpO1xucmVxdWlyZSgnLi9hbmltYXRlJykoc2Nyb2xsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGw7IiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzY3JvbGwpIHtcblxuXHR2YXIgb25TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdzY3JvbGwtdG9wJywgIXNjcm9sbC50b3AoKSApO1xuXHQgICAgfTtcblxuXHRzY3JvbGwub24ob25TY3JvbGwpO1xuXG5cdHJlcXVpcmUoJy4uLy4uL2ZuL3JlYWR5Jykob25TY3JvbGwpO1xuXG59O1xuIiwiXG5pZiggZG9jdW1lbnQuZG9jdW1lbnRNb2RlIHx8IC9FZGdlXFwvLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICkge1xuICByZXF1aXJlKCdxLXByb21pc2UnKS51c2VQb2x5ZmlsbCgpO1xufVxuXG52YXIgYXBsYXphbWUgPSByZXF1aXJlKCcuL2NvcmUvY29yZScpO1xuXG5hcGxhemFtZS5jaGVja291dCA9IHJlcXVpcmUoJy4vYXBwcy9jaGVja291dCcpO1xuYXBsYXphbWUuYnV0dG9uID0gcmVxdWlyZSgnLi9hcHBzL2J1dHRvbicpO1xuYXBsYXphbWUuc2ltdWxhdG9yID0gcmVxdWlyZSgnLi9hcHBzL3NpbXVsYXRvcicpO1xuYXBsYXphbWUubW9kYWwgPSByZXF1aXJlKCcuL2FwcHMvbW9kYWwnKTtcblxuZ2xvYmFsLmFwbGF6YW1lID0gYXBsYXphbWU7XG5cbmFwbGF6YW1lLmluZm8gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgYXBpOiByZXF1aXJlKCcuL2NvcmUvYXBpJyksXG4gICAgbG9nOiByZXF1aXJlKCcuL3Rvb2xzL2xvZycpLmhpc3RvcnksXG4gICAgdmVyc2lvbjogcmVxdWlyZSgnLi4vLnRtcC9hcGxhemFtZS12ZXJzaW9uJylcbiAgfTtcbn07XG5cbmFwbGF6YW1lLmxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmVxdWlyZSgnLi90b29scy9sb2cnKS5oaXN0b3J5LmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICBjb25zb2xlLmxvZyhsLnRpbWUpO1xuICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGwuYXJncyk7XG4gIH0pO1xufTtcblxucmVxdWlyZSgnLi9hcHBzL2h0dHAtc2VydmljZScpO1xuXG5yZXF1aXJlKCcuL2xvYWRlcnMvZGF0YS1hcGxhemFtZScpKGdsb2JhbC5hcGxhemFtZSk7XG5hcGxhemFtZS5fLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGJ1dHRvbnNMb29rdXAgPSByZXF1aXJlKCcuL2xvYWRlcnMvZGF0YS1idXR0b24nKShnbG9iYWwuYXBsYXphbWUpLFxuICAgICAgd2lkZ2V0c0xvb2t1cCA9IHJlcXVpcmUoJy4vbG9hZGVycy9kYXRhLXNpbXVsYXRvcicpKGdsb2JhbC5hcGxhemFtZSksXG4gICAgICBjYiA9IHJlcXVpcmUoJy4vY29yZS9hcGknKS5jYWxsYmFjaztcblxuICBpZiggY2IgKSB7XG4gICAgaWYoICB0eXBlb2YgZ2xvYmFsW2NiXSAhPT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgc2hvdWxkIGJlIGEgZ2xvYmFsIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIGdsb2JhbFtjYl0oYXBsYXphbWUpO1xuICAgIGJ1dHRvbnNMb29rdXAoKTtcbiAgICB3aWRnZXRzTG9va3VwKCk7XG4gIH1cblxufSk7XG5cblxuLy8gZ2xvYmFsLiRxID0gcmVxdWlyZSgncS1wcm9taXNlJyk7XG4vLyBnbG9iYWwuJGh0dHAgPSByZXF1aXJlKCdodHRwLWJyb3dzZXInKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwaUh0dHAgPSByZXF1aXJlKCcuLi9jb3JlL2FwaS1odHRwJyksXG4gICAgXyA9IHJlcXVpcmUoJy4uL3Rvb2xzL3Rvb2xzJyk7XG5cbmZ1bmN0aW9uIGdldENhcnRQcmljZSAoKSB7XG4gIHJldHVybiBfLnBhcnNlUHJpY2UoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbF9wcmljZScpLnRleHRDb250ZW50ICk7XG59XG5cbmZ1bmN0aW9uIGJ1dHRvbiAob3B0aW9ucykge1xuXG4gIGlmKCAhb3B0aW9ucyApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2FwbGF6YW1lLmJ1dHRvbiByZXF1aXJlcyBwYXJhbWV0ZXJzJyk7XG4gIH1cblxuICBpZiggIW9wdGlvbnMuaWQgJiYgIW9wdGlvbnMuYnV0dG9uICYmICFvcHRpb25zLnNlbGVjdG9yICl7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdidXR0b24gY2FuIG5vdCBiZSBpZGVudGlmaWVkICggcGxlYXNlIHVzZSAtIGlkOiBcXCdidXR0b24taWRcXCcgLSBvciAtIGJ1dHRvbjogXFwnI2J1dHRvbi1pZFxcJyAtIG9yIC0gc2VsZWN0b3I6IFxcJyNidXR0b24taWRcXCcgKHJlY29tZW5kZWQpIC0gKScpO1xuICB9XG5cbiAgaWYoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbF9wcmljZScpICkge1xuICAgIG9wdGlvbnMuYW1vdW50ID0gZ2V0Q2FydFByaWNlKCkgfHwgb3B0aW9ucy5hbW91bnQ7XG5cbiAgICBpZiggIWJ1dHRvbi53YXRjaGluZyApIHtcbiAgICAgIGJ1dHRvbi53YXRjaGluZyA9IHRydWU7XG4gICAgICBvcHRpb25zLmxhc3RQcmljZSA9IG9wdGlvbnMuYW1vdW50O1xuXG4gICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhbW91bnQgPSBnZXRDYXJ0UHJpY2UoKTtcbiAgICAgICAgaWYoIGFtb3VudCAmJiBhbW91bnQgIT09IG9wdGlvbnMubGFzdFByaWNlICkge1xuICAgICAgICAgIG9wdGlvbnMuYW1vdW50ID0gYW1vdW50O1xuICAgICAgICAgIG9wdGlvbnMubGFzdFByaWNlID0gb3B0aW9ucy5hbW91bnQ7XG4gICAgICAgICAgb3B0aW9ucy5mb3JjZVVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgYnV0dG9uKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9LCA0MDApO1xuICAgIH1cbiAgfVxuXG4gIGlmKCAhb3B0aW9ucy5hbW91bnQgKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2J1dHRvbiBhbW91bnQgbWlzc2luZycpO1xuICB9XG5cbiAgdmFyIGVsZW1lbnRzLCBlbEJ1dHRvbjtcblxuICBpZiggb3B0aW9ucy5idXR0b24gKSB7XG4gICAgZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuYnV0dG9uKTtcbiAgfSBlbHNlIGlmKCBvcHRpb25zLmlkICkge1xuICAgIGVsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggKCAvXiMvLnRlc3Qob3B0aW9ucy5pZCkgPyAnJyA6ICcjJyApICsgb3B0aW9ucy5pZCApO1xuICB9XG5cbiAgZWxlbWVudHMgPSBlbEJ1dHRvbiA/IFtlbEJ1dHRvbl0gOiBbXTtcblxuICBpZiggb3B0aW9ucy5zZWxlY3RvciApIHtcbiAgICBbXS5wdXNoLmFwcGx5KCBlbGVtZW50cywgXy5jc3NRdWVyeShvcHRpb25zLnNlbGVjdG9yKSApO1xuICB9XG5cbiAgaWYoIG9wdGlvbnMuZGVzY3JpcHRpb24gKSB7XG4gICAgW10ucHVzaC5hcHBseSggZWxlbWVudHMsIF8uY3NzUXVlcnkob3B0aW9ucy5kZXNjcmlwdGlvbikgKTtcbiAgfVxuXG4gIGVsQnV0dG9uID0gZWxCdXR0b24gfHwgZWxlbWVudHNbMF07XG5cbiAgaWYoICFvcHRpb25zLiQkcnVubmluZyAmJiBvcHRpb25zLnNlbGVjdG9yICkge1xuICAgIG9wdGlvbnMuJCRydW5uaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIGlmKCAhb3B0aW9ucy5mb3JjZVVwZGF0ZSAmJiAoICFlbGVtZW50cy5sZW5ndGggfHwgXy5lbGVtZW50RGF0YShlbEJ1dHRvbiwgJ2J1dHRvbkluaXRpYWxpemVkJykgKSApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvcHRpb25zLmZvcmNlVXBkYXRlID0gZmFsc2U7XG5cbiAgaWYoIGVsQnV0dG9uICYmIG9wdGlvbnMucGFyZW50ICkge1xuICAgIHZhciBwYXJlbnQgPSBlbEJ1dHRvbi5wYXJlbnRFbGVtZW50O1xuXG4gICAgd2hpbGUoIHBhcmVudCAmJiBwYXJlbnQgIT09IGRvY3VtZW50LmJvZHkgKSB7XG4gICAgICBpZiggcGFyZW50Lm1hdGNoZXNTZWxlY3RvcihvcHRpb25zLnBhcmVudCkgKSB7XG4gICAgICAgIGVsZW1lbnRzLnB1c2gocGFyZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gIH1cblxuICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmKCBlbC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScgKSB7XG4gICAgICBlbC5fX2Rpc3BsYXkgPSBlbC5zdHlsZS5kaXNwbGF5O1xuICAgIH1cbiAgICBlbC5fX2lucHV0ID0gKCBlbC5ub2RlTmFtZSA9PT0gJ0lOUFVUJyB8fCBlbC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicgKSA/IGVsIDogZWwucXVlcnlTZWxlY3RvcignaW5wdXQsIGJ1dHRvbicpO1xuXG4gICAgaWYoIGVsLl9faW5wdXQgKSB7XG4gICAgICBlbC5fX2lucHV0Ll9fZGlzYWJsZWQgPSBlbC5fX2lucHV0Ll9fZGlzYWJsZWQgPT09IHVuZGVmaW5lZCA/IGVsLl9faW5wdXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpIDogZWwuX19pbnB1dC5fX2Rpc2FibGVkO1xuICAgICAgZWwuX19pbnB1dC5fX2NoZWNrZWQgPSBlbC5fX2lucHV0Ll9fY2hlY2tlZCA9PT0gdW5kZWZpbmVkID8gZWwuX19pbnB1dC5jaGVja2VkIDogZWwuX19pbnB1dC5fX2NoZWNrZWQ7XG4gICAgICBpZiggZWwuX19pbnB1dC5fX2NoZWNrZWQgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgZWwuX19pbnB1dC5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiggIWVsLl9faW5wdXQuX19kaXNhYmxlZCApIHtcbiAgICAgICAgZWwuX19pbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgXy5lbGVtZW50RGF0YShlbCwgJ2J1dHRvbkluaXRpYWxpemVkJywgdHJ1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiBidXR0b24uY2hlY2sob3B0aW9ucywgZnVuY3Rpb24gKGFsbG93ZWQpIHtcbiAgICBpZiggYWxsb3dlZCApIHtcbiAgICAgIHZhciBlbG1zID0gZWxlbWVudHMuc2xpY2UoKTtcbiAgICAgIGVsbXMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLl9fZGlzcGxheTtcbiAgICAgICAgaWYgKCBlbC5fX2lucHV0ICkge1xuICAgICAgICAgIGlmKCAhZWwuX19pbnB1dC5fX2Rpc2FibGVkICYmIGVsLl9faW5wdXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpICkge1xuICAgICAgICAgICAgZWwuX19pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKCBlbC5fX2lucHV0Ll9fY2hlY2tlZCAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgZWwuX19pbnB1dC5jaGVja2VkID0gZWwuX19pbnB1dC5fX2NoZWNrZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmJ1dHRvbi5jaGVjayA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICBpZiggXy5pc1N0cmluZyhvcHRpb25zKSB8fCBfLmlzTnVtYmVyKG9wdGlvbnMpICkge1xuICAgIG9wdGlvbnMgPSB7IGFtb3VudDogTnVtYmVyKG9wdGlvbnMpIH07XG4gIH1cblxuICB2YXIgcGFyYW1zID0ge1xuICAgIGFtb3VudDogb3B0aW9ucy5hbW91bnQsXG4gICAgY3VycmVuY3k6IG9wdGlvbnMuY3VycmVuY3kgfHwgJ0VVUidcbiAgfTtcblxuICBpZiggb3B0aW9ucy5jb3VudHJ5ICkge1xuICAgIHBhcmFtcy5jb3VudHJ5ID0gb3B0aW9ucy5jb3VudHJ5O1xuICB9XG5cbiAgdmFyIGNoZWNrUHJvbWlzZSA9IGFwaUh0dHAuZ2V0KCdjaGVja291dC9idXR0b24nLCB7IHBhcmFtczogcGFyYW1zIH0pO1xuXG4gIGlmKCBfLmlzRnVuY3Rpb24oY2FsbGJhY2spICkge1xuICAgIGNoZWNrUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkgeyBjYWxsYmFjayhyZXNwb25zZS5kYXRhLmFsbG93ZWQsIHJlc3BvbnNlKTsgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7IGNhbGxiYWNrKGZhbHNlLCByZXNwb25zZSk7IH0pO1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrUHJvbWlzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYnV0dG9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBpID0gcmVxdWlyZSgnLi4vY29yZS9hcGknKSxcbiAgICBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKSxcbiAgICBodHRwID0gcmVxdWlyZSgnaHR0cC1icm93c2VyJyksXG4gICAgJHEgPSByZXF1aXJlKCdxLXByb21pc2UnKSxcbiAgICBjc3NIYWNrID0gcmVxdWlyZSgnLi4vdG9vbHMvY3NzLWhhY2snKTtcblxuZnVuY3Rpb24gY2hlY2tvdXQgKG9wdGlvbnMpIHtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGJhc2VDaGVja291dCA9ICggb3B0aW9ucy5ob3N0ID09PSAnbG9jYXRpb24nID8gKCBsb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyBsb2NhdGlvbi5ob3N0ICsgJy8nICkgOiBvcHRpb25zLmhvc3QgKSB8fCAnaHR0cHM6Ly9hcGxhemFtZS5jb20vc3RhdGljL2NoZWNrb3V0Lyc7XG5cbiAgaWYoICEvXFwvJC8udGVzdChiYXNlQ2hlY2tvdXQpICkge1xuICAgIGJhc2VDaGVja291dCArPSAnLyc7XG4gIH1cblxuICB2YXIgb24gPSB7fSxcbiAgICAgIGlmcmFtZVNyYyA9IGJhc2VDaGVja291dCArICdpZnJhbWUuaHRtbD8nICsgbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICBlcnJvckxvYWRpbmcgPSBmYWxzZSxcbiAgICAgIHRtcE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICAgIGNzc092ZXJsYXkgPSBjc3NIYWNrKCdvdmVybGF5JyksXG4gICAgICBjc3NCbHVyID0gY3NzSGFjaygnYmx1cicpLFxuICAgICAgY3NzTG9nbyA9IGNzc0hhY2soJ2xvZ28nKSxcbiAgICAgIGNzc01vZGFsID0gY3NzSGFjaygnbW9kYWwnKTtcblxuICBpZiggb3B0aW9ucy5tZXJjaGFudC5vblN1Y2Nlc3MgKSB7XG4gICAgb24uc3VjY2VzcyA9IG9wdGlvbnMubWVyY2hhbnQub25TdWNjZXNzO1xuICAgIGRlbGV0ZSBvcHRpb25zLm1lcmNoYW50Lm9uU3VjY2VzcztcbiAgfVxuICBpZiggb3B0aW9ucy5tZXJjaGFudC5vbkVycm9yICkge1xuICAgIG9uLmVycm9yID0gb3B0aW9ucy5tZXJjaGFudC5vbkVycm9yO1xuICAgIGRlbGV0ZSBvcHRpb25zLm1lcmNoYW50Lm9uRXJyb3I7XG4gIH1cbiAgaWYoIG9wdGlvbnMubWVyY2hhbnQub25EaXNtaXNzICkge1xuICAgIG9uLmRpc21pc3MgPSBvcHRpb25zLm1lcmNoYW50Lm9uRGlzbWlzcztcbiAgICBkZWxldGUgb3B0aW9ucy5tZXJjaGFudC5vbkRpc21pc3M7XG4gIH1cblxuICB0bXBPdmVybGF5LmNsYXNzTmFtZSA9ICdhcGxhemFtZS1vdmVybGF5IGFwbGF6YW1lLW92ZXJsYXktc2hvdyc7XG5cbiAgY3NzT3ZlcmxheS5oYWNrKHRydWUpO1xuICBjc3NMb2dvLmhhY2sodHJ1ZSk7XG4gIGNzc0JsdXIuaGFjayh0cnVlKTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiggIWVycm9yTG9hZGluZyApIHtcbiAgICAgIF8uYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLWJsdXInKTtcbiAgICB9XG4gIH0sIDApO1xuXG4gIHRtcE92ZXJsYXkuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJhcGxhemFtZS1sb2dvLXdyYXBwZXJcIj48ZGl2IGNsYXNzPVwibG9nby1hcGxhemFtZVwiIHN0eWxlPVwid2lkdGg6IDE1MHB4OyBoZWlnaHQ6IDE1MHB4O1wiPicgK1xuICByZXF1aXJlKCcuL2xvYWRpbmctc3ZnJykgKyAnPC9kaXY+PGRpdiBjbGFzcz1cImFwbGF6YW1lLW92ZXJsYXktbG9hZGluZy10ZXh0XCI+Q2FyZ2FuZG8gcGFzYXJlbGEgZGUgcGFnby4uLjwvZGl2PjwvZGl2Pic7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0bXBPdmVybGF5KTtcblxuICB2YXIgbG9hZGluZ1RleHQgPSB0bXBPdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5hcGxhemFtZS1vdmVybGF5LWxvYWRpbmctdGV4dCcpO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGlmKCAhZXJyb3JMb2FkaW5nICkge1xuICAgICAgdG1wT3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcubG9nby1hcGxhemFtZScpLmNsYXNzTmFtZSArPSAnIGFuaW1hdGUnO1xuICAgIH1cbiAgfSwgMjAwKTtcblxuICBvcHRpb25zLmFwaSA9IF8uY29weShhcGkpO1xuXG4gIHJldHVybiBodHRwKCBpZnJhbWVTcmMgKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgdmFyIGlmcmFtZUh0bWwgPSByZXNwb25zZS5kYXRhLnJlcGxhY2UoLzxoZWFkXFw+LywgJzxoZWFkPjxiYXNlIGhyZWY9XCInICsgYmFzZUNoZWNrb3V0ICsgJ1wiIC8+JyksXG4gICAgICAgICAgaWZyYW1lID0gXy5nZXRJRnJhbWUoe1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBodHRwQ2hlY2tvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3RhcnRlZCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICByZXR1cm4gaHR0cC5hcHBseSh0aGlzLCBhcmd1bWVudHMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBhcGxhemFtZTogJ2NoZWNrb3V0JyxcbiAgICAgICAgICAgICAgICBldmVudDogJ2h0dHAtc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgc3RhcnRlZDogc3RhcnRlZCxcbiAgICAgICAgICAgICAgICBlbGFwc2VkOiBEYXRlLm5vdygpIC0gc3RhcnRlZCxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogaHR0cC5wbGFpblJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGFwbGF6YW1lOiAnY2hlY2tvdXQnLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnaHR0cC1lcnJvcicsXG4gICAgICAgICAgICAgICAgc3RhcnRlZDogc3RhcnRlZCxcbiAgICAgICAgICAgICAgICBlbGFwc2VkOiBEYXRlLm5vdygpIC0gc3RhcnRlZCxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogaHR0cC5wbGFpblJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICAgICAgICB0aHJvdyByZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG5cbiAgICAgIGlmcmFtZS5jbGFzc05hbWUgPSAnYXBsYXphbWUtbW9kYWwnO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgICBpZnJhbWUuc3JjID0gaWZyYW1lU3JjO1xuXG4gICAgICBpZiggIW9wdGlvbnMubWVyY2hhbnQgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBtZXJjaGFudCBwYXJhbWV0ZXJzJyk7XG4gICAgICB9XG5cbiAgICAgIGlmKCAnc2FuZGJveCcgaW4gb3B0aW9ucy5tZXJjaGFudCApIHtcbiAgICAgICAgYXBpLnNhbmRib3ggPSBvcHRpb25zLm1lcmNoYW50LnNhbmRib3g7XG4gICAgICB9XG5cbiAgICAgIGlmKCAhb3B0aW9ucy5tZXJjaGFudC5wdWJsaWNfYXBpX2tleSApIHtcbiAgICAgICAgaWYoIGFwaS5wdWJsaWNLZXkgKSB7XG4gICAgICAgICAgb3B0aW9ucy5tZXJjaGFudC5wdWJsaWNfYXBpX2tleSA9IGFwaS5wdWJsaWNLZXk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHB1YmxpYyBrZXknKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvcHRpb25zLm9yaWdpbiA9IHtcbiAgICAgICAgaHJlZjogbG9jYXRpb24uaHJlZixcbiAgICAgICAgaG9zdDogbG9jYXRpb24uaG9zdCxcbiAgICAgICAgcHJvdG9jb2w6IGxvY2F0aW9uLnByb3RvY29sLFxuICAgICAgICBvcmlnaW46IGxvY2F0aW9uLm9yaWdpblxuICAgICAgfTtcblxuICAgICAgdmFyIG9uTWVzc2FnZSA9IGZ1bmN0aW9uIChlLCBtZXNzYWdlKSB7XG5cbiAgICAgICAgc3dpdGNoKCBtZXNzYWdlLmV2ZW50ICkge1xuICAgICAgICAgIGNhc2UgJ21lcmNoYW50JzpcbiAgICAgICAgICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgICAgIGUuc291cmNlLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgY2hlY2tvdXQ6IG9wdGlvbnNcbiAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdzaG93LWlmcmFtZSc6XG4gICAgICAgICAgICBfLnJlbW92ZUNsYXNzKGlmcmFtZSwgJ2hpZGUnKTtcbiAgICAgICAgICAgIGNzc01vZGFsLmhhY2sodHJ1ZSk7XG4gICAgICAgICAgICBjc3NPdmVybGF5LmhhY2soZmFsc2UpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0bXBPdmVybGF5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2xvYWRpbmctdGV4dCc6XG4gICAgICAgICAgICBsb2FkaW5nVGV4dC50ZXh0Q29udGVudCA9IG1lc3NhZ2UudGV4dDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Ryb3AtYmx1cic6XG4gICAgICAgICAgICBfLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS1ibHVyJyk7XG4gICAgICAgICAgICBfLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS11bmJsdXInKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjc3NCbHVyLmhhY2soZmFsc2UpO1xuICAgICAgICAgICAgICBfLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS1ibHVyJyk7XG4gICAgICAgICAgICAgIF8ucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLXVuYmx1cicpO1xuICAgICAgICAgICAgfSwgNjAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2NvbmZpcm0nOlxuICAgICAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICAgICAgXy5sb2coJ2FwbGF6YW1lLmNoZWNrb3V0OmNvbmZpcm0nLCBtZXNzYWdlKTtcblxuICAgICAgICAgICAgaHR0cENoZWNrb3V0KCBvcHRpb25zLm1lcmNoYW50LmNvbmZpcm1hdGlvbl91cmwsIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgIGRhdGE6IG1lc3NhZ2UuZGF0YSxcbiAgICAgICAgICAgICAgcGFyYW1zOiBfLmV4dGVuZChtZXNzYWdlLnBhcmFtcyB8fCB7fSwge1xuICAgICAgICAgICAgICAgIG9yZGVyX2lkOiBtZXNzYWdlLmRhdGEuY2hlY2tvdXRfdG9rZW4sXG4gICAgICAgICAgICAgICAgY2hlY2tvdXRfdG9rZW46IG1lc3NhZ2UuZGF0YS5jaGVja291dF90b2tlblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgZS5zb3VyY2UucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGFwbGF6YW1lOiAnY2hlY2tvdXQnLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY29uZmlybWF0aW9uJyxcbiAgICAgICAgICAgICAgICByZXN1bHQ6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogaHR0cC5wbGFpblJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBlLnNvdXJjZS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgYXBsYXphbWU6ICdjaGVja291dCcsXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdjb25maXJtYXRpb24nLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICByZXNwb25zZTogaHR0cC5wbGFpblJlc3BvbnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICB9LCAnKicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25maXJtYXRpb25fdXJsXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjbG9zZSc6XG4gICAgICAgICAgICBpZiggaWZyYW1lICkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgICAgICAgICAgIGNzc01vZGFsLmhhY2soZmFsc2UpO1xuICAgICAgICAgICAgICBpZnJhbWUgPSBudWxsO1xuXG4gICAgICAgICAgICAgIF8ub25NZXNzYWdlLm9mZignY2hlY2tvdXQnLCBvbk1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAgIHN3aXRjaCggbWVzc2FnZS5yZXN1bHQgKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIG9uLnN1Y2Nlc3MgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uLnN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiggIW9wdGlvbnMubWVyY2hhbnQuc3VjY2Vzc191cmwgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc3VjY2Vzc191cmwgbWlzc2luZycpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShvcHRpb25zLm1lcmNoYW50LnN1Y2Nlc3NfdXJsKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NhbmNlbCc6XG4gICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIG9uLmVycm9yID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgICAgICAgICAgICAgICBvbi5lcnJvcigpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKCAhb3B0aW9ucy5tZXJjaGFudC5jYW5jZWxfdXJsICkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbmNlbF91cmwgbWlzc2luZycpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShvcHRpb25zLm1lcmNoYW50LmNhbmNlbF91cmwpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZGlzbWlzcyc6XG4gICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIG9uLmRpc21pc3MgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uLmRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2Uob3B0aW9ucy5tZXJjaGFudC5jaGVja291dF91cmwgfHwgJy8nKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgXy5vbk1lc3NhZ2UoJ2NoZWNrb3V0Jywgb25NZXNzYWdlKTtcblxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcignY2FuIG5vdCBjb25uZWN0IHRvICcgKyBiYXNlQ2hlY2tvdXQpO1xuICAgICAgZXJyb3JMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgY29uc29sZS5lcnJvcignQXBsYXphbWUgJyArIHJlYXNvbik7XG5cbiAgICAgIF8ucmVtb3ZlQ2xhc3ModG1wT3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcubG9nby1hcGxhemFtZScpLCAnYW5pbWF0ZScpO1xuICAgICAgbG9hZGluZ1RleHQuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJ0ZXh0LWVycm9yXCI+RXJyb3IgY2FyZ2FuZG8gcGFzYXJlbGEgZGUgcGFnbzwvZGl2Pjxici8+PGRpdj48YSBocmVmPVwibWFpbHRvOnNvcG9ydGVAYXBsYXphbWUuY29tP3N1YmplY3Q9JyArIGVuY29kZVVSSSgnQ2hlY2tvdXQgZXJyb3I6ICcgKyByZWFzb24pICsgJ1wiPnNvcG9ydGVAYXBsYXphbWUuY29tPC9hPjwvZGl2Pic7XG4gICAgICBsb2FkaW5nVGV4dC5zdHlsZS5saW5lSGVpZ2h0ID0gJzEuNSc7XG5cbiAgICAgIChvcHRpb25zLm9uRXJyb3IgfHwgXy5ub29wKShyZWFzb24pO1xuICAgIH0pO1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tvdXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKSxcbiAgICBodHRwID0gcmVxdWlyZSgnaHR0cC1icm93c2VyJyk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NSZXNwb25zZShyZXN1bHQsIG1lc3NhZ2UsIG1lc3NhZ2VTcmMsIHN0YXJ0ZWQpIHtcblxuICByZXR1cm4gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICB2YXIgcmVzcG9uc2VwID0gaHR0cC5wbGFpblJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICByZXNwb25zZXAuY29uZmlnID0gbWVzc2FnZTtcblxuICAgIG1lc3NhZ2VTcmMucG9zdE1lc3NhZ2Uoe1xuICAgICAgYXBsYXphbWU6ICdodHRwJyxcbiAgICAgIGV2ZW50OiAncmVzcG9uc2UnLFxuICAgICAgc3RhcnRlZDogc3RhcnRlZCxcbiAgICAgIGVsYXBzZWQ6IERhdGUubm93KCkgLSBzdGFydGVkLFxuICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICByZXNwb25zZTogcmVzcG9uc2VwXG4gICAgfSwgJyonKTtcbiAgfTtcbn1cblxuXy5vbk1lc3NhZ2UoJ2h0dHAnLCBmdW5jdGlvbiAoZSwgbWVzc2FnZSkge1xuXG4gIHZhciBzdGFydGVkID0gRGF0ZS5ub3coKTtcblxuICBodHRwKCBtZXNzYWdlLnVybCwgbWVzc2FnZSApXG4gICAgLnRoZW4oXG4gICAgICBwcm9jZXNzUmVzcG9uc2UoJ3N1Y2Nlc3MnLCBtZXNzYWdlLCBlLnNvdXJjZSwgc3RhcnRlZCksXG4gICAgICBwcm9jZXNzUmVzcG9uc2UoJ2Vycm9yJywgbWVzc2FnZSwgZS5zb3VyY2UsIHN0YXJ0ZWQpXG4gICAgKTtcblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0geyByZWFkeTogdHJ1ZSB9O1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9ICc8c3ZnIGNsYXNzPVwibGluZS1zaG9ydFwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj4nICtcbic8cGF0aCAgZD1cIk0zNi43ODgsODEuMDA4LDUwLDUwXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjZcIiBmaWxsPVwibm9uZVwiLz4nICtcbic8L3N2Zz4nICtcbic8c3ZnIGNsYXNzPVwic21pbGVcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+JyArXG4nPGcgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIGZpbGw9XCJub25lXCIgdHJhbnNmb3JtPVwibWF0cml4KDAuNzgwMzY2MzMsMCwwLDAuNzgwMzY2MzMsMTAuNTI2NTEyLDE4LjAwMzk5OClcIj4nICtcbic8cGF0aCBjbGFzcz1cInNtaWxlLW91dGxpbmVcIiBzdHJva2Utd2lkdGg9XCIxMlwiIGQ9XCJNNzUuMjQyLDU3LjUxYy01LjQzNSw3LjgzOS0xNC40OTgsMTIuOTcyLTI0Ljc2MSwxMi45NzItMTAuMjYyLDAtMTkuMzI1LTUuMTMyLTI0Ljc1OC0xMi45NzJcIi8+JyArXG4nPHBhdGggY2xhc3M9XCJzbWlsZS1saW5lXCIgc3Ryb2tlLXdpZHRoPVwiNy41XCIgZD1cIk03NS4yNDIsNTcuNTFjLTUuNDM1LDcuODM5LTE0LjQ5OCwxMi45NzItMjQuNzYxLDEyLjk3Mi0xMC4yNjIsMC0xOS4zMjUtNS4xMzItMjQuNzU4LTEyLjk3MlwiLz4nICtcbic8L2c+JyArXG4nPC9zdmc+JyArXG4nPHN2ZyBjbGFzcz1cImxpbmUtbGFyZ2VcIiB2ZXJzaW9uPVwiMS4xXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+JyArXG4nPHBhdGggc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTUwLDUwLDY2LjY4Nyw5Mi4yNjZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLW1pdGVybGltaXQ9XCI0XCIgc3Ryb2tlLWRhc2hhcnJheT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCI2XCIgZmlsbD1cIm5vbmVcIi8+JyArXG4nPC9zdmc+JztcbiIsIid1c2Ugc3RyaWN0Jztcblxud2luZG93Lm1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSB8fCB3aW5kb3cud2Via2l0TWF0Y2hNZWRpYSB8fCB3aW5kb3cubW96TWF0Y2hNZWRpYSB8fCB3aW5kb3cubXNNYXRjaE1lZGlhO1xuXG52YXIgYXBpID0gcmVxdWlyZSgnLi4vY29yZS9hcGknKSxcbiAgICBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKSxcbiAgICBjc3NIYWNrID0gcmVxdWlyZSgnLi4vdG9vbHMvY3NzLWhhY2snKSxcbiAgICBhcGxhemFtZVZlcnNpb24gPSByZXF1aXJlKCcuLi8uLi8udG1wL2FwbGF6YW1lLXZlcnNpb24nKSxcbiAgICBpc01vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcoIG1heC13aWR0aDogNzY3cHggKScpLFxuICAgIGxhc3RTY3JvbGxUb3A7XG5cbnZhciB0bXBPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgY3NzT3ZlcmxheSA9IGNzc0hhY2soJ292ZXJsYXknKSxcbiAgICBjc3NCbHVyID0gY3NzSGFjaygnYmx1cicpLFxuICAgIGNzc01vZGFsID0gY3NzSGFjaygnbW9kYWwnKTtcblxuZnVuY3Rpb24gbW9kYWwgKGNvbnRlbnQsIG9wdGlvbnMpIHtcblxuICBpZiggbW9kYWwuaWZyYW1lICkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwuaWZyYW1lKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIGNzc092ZXJsYXkuaGFjayh0cnVlKTtcbiAgY3NzQmx1ci5oYWNrKHRydWUpO1xuICBjc3NNb2RhbC5oYWNrKHRydWUpO1xuXG4gIHRtcE92ZXJsYXkuY2xhc3NOYW1lID0gJ2FwbGF6YW1lLW92ZXJsYXkgYXBsYXphbWUtb3ZlcmxheS1zaG93JztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0bXBPdmVybGF5KTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBfLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS1ibHVyJyk7XG4gIH0sIDApO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBfLnJlbW92ZUNsYXNzKHRtcE92ZXJsYXksICdhcGxhemFtZS1vdmVybGF5LXNob3cnKTtcbiAgfSwgaXNNb2JpbGUubWF0Y2hlcyA/IDAgOiA2MDAgKTtcblxuICBtb2RhbC5pZnJhbWUgPSBfLmdldElGcmFtZSh7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCdcbiAgICAgIH0pO1xuXG4gIG1vZGFsLmlmcmFtZS5jbGFzc05hbWUgPSAnYXBsYXphbWUtbW9kYWwnO1xuICAvLyBtb2RhbC5pZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbW9kYWwuaWZyYW1lLmNvbnRlbnQgPSBjb250ZW50O1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwuaWZyYW1lKTtcbiAgbW9kYWwuaWZyYW1lLnNyYyA9IGFwaS5zdGF0aWNVcmwgKyAnd2lkZ2V0cy9tb2RhbC9tb2RhbC5odG1sP3Y9JyArIGVuY29kZVVSSShhcGxhemFtZVZlcnNpb24pO1xufVxuXG5fLm9uTWVzc2FnZSgnbW9kYWwnLCBmdW5jdGlvbiAoZSwgbWVzc2FnZSkge1xuXG4gIHN3aXRjaCggbWVzc2FnZS5ldmVudCApIHtcbiAgICBjYXNlICdvcGVuJzpcbiAgICAgIG1vZGFsLnJlZmVycmVyID0gZS5zb3VyY2U7XG4gICAgICBtb2RhbC5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgIG1vZGFsKG1lc3NhZ2UuZGF0YSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdvcGVuaW5nJzpcbiAgICAgIG1vZGFsLmlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ29wZW5lZCc6XG4gICAgICBsYXN0U2Nyb2xsVG9wID0gXy5zY3JvbGxUb3AoKTtcbiAgICAgIGUuc291cmNlLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgYXBsYXphbWU6ICdtb2RhbCcsXG4gICAgICAgIGV2ZW50OiAnY29udGVudCcsXG4gICAgICAgIGNvbnRlbnQ6IG1vZGFsLmlmcmFtZS5jb250ZW50XG4gICAgICB9LCAnKicpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncmVzb2x2ZWQnOlxuICAgICAgbW9kYWwucmVmZXJyZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBhcGxhemFtZTogJ21vZGFsJyxcbiAgICAgICAgZXZlbnQ6ICdyZXNvbHZlZCcsXG4gICAgICAgIG5hbWU6IG1vZGFsLm1lc3NhZ2UubmFtZSxcbiAgICAgICAgdmFsdWU6IG1lc3NhZ2UudmFsdWVcbiAgICAgIH0sICcqJyk7XG4gICAgICBkZWxldGUgbW9kYWwucmVmZXJyZXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdjbG9zaW5nJzpcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBtb2RhbC5pZnJhbWUub3ZlcmZsb3c7XG4gICAgICBfLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS1ibHVyJyk7XG4gICAgICBfLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdhcGxhemFtZS11bmJsdXInKTtcbiAgICAgIF8uYWRkQ2xhc3ModG1wT3ZlcmxheSwgJ2FwbGF6YW1lLW92ZXJsYXktaGlkZScpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNzc0JsdXIuaGFjayhmYWxzZSk7XG4gICAgICAgIF8ucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLXVuYmx1cicpO1xuICAgICAgfSwgaXNNb2JpbGUubWF0Y2hlcyA/IDAgOiA2MDAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjc3NNb2RhbC5oYWNrKGZhbHNlKTtcbiAgICAgIH0sIGlzTW9iaWxlLm1hdGNoZXMgPyAwIDogMTAwICk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRtcE92ZXJsYXkpO1xuICAgICAgXy5yZW1vdmVDbGFzcyh0bXBPdmVybGF5LCAnYXBsYXphbWUtb3ZlcmxheS1oaWRlJyk7XG4gICAgICBfLnNjcm9sbFRvcChsYXN0U2Nyb2xsVG9wKTtcbiAgICAgIGlmKCBtb2RhbC5pZnJhbWUgKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobW9kYWwuaWZyYW1lKTtcblxuICAgICAgICBpZiggbW9kYWwucmVmZXJyZXIgKSB7XG4gICAgICAgICAgbW9kYWwucmVmZXJyZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYXBsYXphbWU6ICdtb2RhbCcsXG4gICAgICAgICAgICBldmVudDogJ2Rpc21pc3MnLFxuICAgICAgICAgICAgbmFtZTogbW9kYWwubWVzc2FnZS5uYW1lXG4gICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgICBkZWxldGUgbW9kYWwucmVmZXJyZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggbW9kYWwubWVzc2FnZSApIHtcbiAgICAgICAgICBkZWxldGUgbW9kYWwubWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgbW9kYWwuaWZyYW1lO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbW9kYWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcGlIdHRwID0gcmVxdWlyZSgnLi4vY29yZS9hcGktaHR0cCcpLFxuICAgIF8gPSByZXF1aXJlKCcuLi90b29scy90b29scycpLFxuICAgICRxID0gcmVxdWlyZSgncS1wcm9taXNlJyksXG4gICAgY2FjaGUgPSBbXSxcbiAgICByZXF1ZXN0c0NhY2hlID0ge307XG5cbmZ1bmN0aW9uIHNpbXVsYXRvciAoYW1vdW50LCBfb3B0aW9ucywgY2FsbGJhY2ssIG9uRXJyb3IpIHtcblxuICBpZiggXy5pc0Z1bmN0aW9uKF9vcHRpb25zKSApIHtcbiAgICBvbkVycm9yID0gY2FsbGJhY2s7XG4gICAgY2FsbGJhY2sgPSBfb3B0aW9ucztcbiAgICBfb3B0aW9ucyA9IHt9O1xuICB9IGVsc2Uge1xuICAgIF9vcHRpb25zID0gX29wdGlvbnMgfHwge307XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYW1vdW50OiBhbW91bnRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhhc2ggPSBhbW91bnQgKyAnLCcgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcblxuICBpZiggcmVxdWVzdHNDYWNoZVtoYXNoXSApIHtcbiAgICByZXR1cm4gcmVxdWVzdHNDYWNoZVtoYXNoXS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIChjYWxsYmFjayB8fCBfLm5vb3ApKCByZXN1bHQuY2hvaWNlcywgcmVzdWx0Lm9wdGlvbnMgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmKCBfb3B0aW9ucy52aWV3ICkge1xuICAgIG9wdGlvbnMucGFyYW1zLnZpZXcgPSBfb3B0aW9ucy52aWV3O1xuICB9XG4gIGlmKCBfb3B0aW9ucy5wYXlkYXkgKSB7XG4gICAgb3B0aW9ucy5wYXJhbXMucGF5ZGF5ID0gX29wdGlvbnMucGF5ZGF5O1xuICB9XG4gIGlmKCBfb3B0aW9ucy5wdWJsaWNLZXkgKSB7XG4gICAgb3B0aW9ucy5wdWJsaWNLZXkgPSBfb3B0aW9ucy5wdWJsaWNLZXk7XG4gIH1cblxuICB2YXIgZm91bmRDYWNoZWQgPSBfLmZpbmQoY2FjaGUsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0uYW1vdW50ID09PSBhbW91bnQ7XG4gIH0pO1xuXG4gIHJlcXVlc3RzQ2FjaGVbaGFzaF0gPSAoICFfb3B0aW9ucy5ub0NhY2hlICYmIGZvdW5kQ2FjaGVkID8gJHEucmVzb2x2ZShmb3VuZENhY2hlZCkgOiBhcGlIdHRwLmdldCgnaW5zdGFsbWVudC1wbGFuLXNpbXVsYXRvcicsIG9wdGlvbnMgKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgIGNob2ljZXM6IHJlc3BvbnNlLmRhdGEuY2hvaWNlc1swXS5pbnN0YWxtZW50cyxcbiAgICAgICAgb3B0aW9uczogcmVzcG9uc2UuZGF0YS5vcHRpb25zLFxuICAgICAgICByZXNwb25zZTogcmVzcG9uc2VcbiAgICAgIH07XG4gICAgICBjYWNoZS5wdXNoKHJlc3VsdCk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSkgKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIChjYWxsYmFjayB8fCBfLm5vb3ApKCByZXN1bHQuY2hvaWNlcywgcmVzdWx0Lm9wdGlvbnMgKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiggcmVzcG9uc2Uuc3RhdHVzID09PSA0MDMgKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FwbGF6YW1lOiBQZXJtaXNvIGRlbmVnYWRvIHVzYW5kbyBsYSBjbGF2ZSBww7pibGljYTogJyArIHJlc3BvbnNlLmNvbmZpZy5wdWJsaWNLZXkpO1xuICAgICAgICBjb25zb2xlLmluZm8oJ1JldmlzYSBsYSBjb25maWd1cmFjacOzbiBkZSBBcGxhemFtZSwgcGFyYSBjdWFscXVpZXIgZHVkYSBwdWVkZXMgZXNjcmliaXIgYSBob2xhQGFwbGF6YW1lLmNvbScpO1xuICAgICAgfSBlbHNlIGlmKCBfLmtleShyZXNwb25zZSwgJ2RhdGEuZXJyb3IuZmllbGRzLmFtb3VudC4wJykgKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FwbGF6YW1lOiAnICsgcmVzcG9uc2UuZGF0YS5lcnJvci5maWVsZHMuYW1vdW50WzBdKTtcbiAgICAgIH0gZWxzZSBpZiggXy5rZXkocmVzcG9uc2UsICdkYXRhLmVycm9yLm1lc3NhZ2UnKSApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQXBsYXphbWU6ICcgKyByZXNwb25zZS5kYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgKG9uRXJyb3IgfHwgXy5ub29wKShyZXNwb25zZSk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHJlcXVlc3RzQ2FjaGVbaGFzaF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2ltdWxhdG9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXB6VmVyc2lvbiA9IHJlcXVpcmUoJy4uLy4uLy50bXAvYXBsYXphbWUtdmVyc2lvbicpLFxuICAgIF8gPSByZXF1aXJlKCcuLi90b29scy90b29scycpLFxuICAgIGFwaSA9IHJlcXVpcmUoJy4vYXBpJyksXG4gICAgaHR0cCA9IHJlcXVpcmUoJ2h0dHAtYnJvd3NlcicpLFxuICAgIHJlbmRlckFjY2VwdCA9IF8udGVtcGxhdGUuY29tcGlsZSgnYXBwbGljYXRpb24vdm5kLmFwbGF6YW1lPCUgaWYoc2FuZGJveCl7ICU+LnNhbmRib3g8JSB9ICU+LnY8JT0gdmVyc2lvbiAlPitqc29uJyksXG4gICAgYWNjZXB0SGVhZGVyID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgdmFyIF9hcGkgPSBfLmNvcHkoYXBpKTtcbiAgICAgIGlmKCAndmVyc2lvbicgaW4gY29uZmlnIHx8ICdhcGlWZXJzaW9uJyBpbiBjb25maWcgKSB7XG4gICAgICAgIF9hcGkudmVyc2lvbiA9ICd2ZXJzaW9uJyBpbiBjb25maWcgPyBjb25maWcudmVyc2lvbiA6IGNvbmZpZy5hcGlWZXJzaW9uO1xuICAgICAgfVxuICAgICAgaWYoICdzYW5kYm94JyBpbiBjb25maWcgKSB7XG4gICAgICAgIF9hcGkuc2FuZGJveCA9IGNvbmZpZy5zYW5kYm94O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlbmRlckFjY2VwdChfYXBpKTtcbiAgICB9LFxuICAgIGF1dGhvcml6YXRpb25IZWFkZXIgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICBjb25maWcucHVibGljS2V5ID0gY29uZmlnLnB1YmxpY0tleSB8fCBhcGkucHVibGljS2V5O1xuICAgICAgcmV0dXJuICdCZWFyZXIgJyArIGNvbmZpZy5wdWJsaWNLZXk7XG4gICAgfTtcblxudmFyIGFwaUh0dHAgPSB7fTtcblxuXy5lYWNoKFsnZ2V0JywgJ2RlbGV0ZSddLCBmdW5jdGlvbiAobWV0aG9kKSB7XG4gIGFwaUh0dHBbbWV0aG9kXSA9IGZ1bmN0aW9uIChwYXRoLCBvcHRpb25zKSB7XG4gICAgdmFyIHVybCA9IF8uam9pblBhdGgoYXBpLmhvc3QsIHBhdGgpO1xuICAgIHJldHVybiBodHRwW21ldGhvZF0odXJsLCBfLm1lcmdlKG9wdGlvbnMsIHsgaGVhZGVyczoge1xuICAgICAgICB4QWpzVmVyc2lvbjogYXB6VmVyc2lvbixcbiAgICAgICAgYWNjZXB0OiBhY2NlcHRIZWFkZXIsXG4gICAgICAgIGF1dGhvcml6YXRpb246IGF1dGhvcml6YXRpb25IZWFkZXJcbiAgICAgIH0gfSkgKTtcbiAgfTtcbn0pO1xuXG5fLmVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiAobWV0aG9kKSB7XG4gIGFwaUh0dHBbbWV0aG9kXSA9IGZ1bmN0aW9uIChwYXRoLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgdmFyIHVybCA9IF8uam9pblBhdGgoYXBpLmhvc3QsIHBhdGgpO1xuICAgIHJldHVybiBodHRwW21ldGhvZF0odXJsLCBkYXRhLCBfLm1lcmdlKG9wdGlvbnMsIHsgaGVhZGVyczoge1xuICAgICAgICB4QWpzVmVyc2lvbjogYXB6VmVyc2lvbixcbiAgICAgICAgYWNjZXB0OiBhY2NlcHRIZWFkZXIsXG4gICAgICAgIGF1dGhvcml6YXRpb246IGF1dGhvcml6YXRpb25IZWFkZXJcbiAgICAgIH0gfSkgKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwaUh0dHA7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBob3N0OiAnaHR0cHM6Ly9hcGkuYXBsYXphbWUuY29tLycsXG4gIC8vIGhvc3Q6ICdodHRwczovL2FwaS5hcGxhemFtZS5jb20vJyxcbiAgc3RhdGljVXJsOiAnaHR0cHM6Ly9hcGxhemFtZS5jb20vc3RhdGljLycsXG4gIHZlcnNpb246IDEsXG4gIGNoZWNrb3V0VmVyc2lvbjogMSxcbiAgc2FuZGJveDogZmFsc2Vcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBfOiByZXF1aXJlKCcuLi90b29scy90b29scycpLFxuICBpbml0OiByZXF1aXJlKCcuL2luaXQnKSxcbiAgYXBpR2V0OiByZXF1aXJlKCcuL2FwaS1odHRwJykuZ2V0LFxuICBhcGlQb3N0OiByZXF1aXJlKCcuL2FwaS1odHRwJykucG9zdCxcbiAgYXBpRGVsZXRlOiByZXF1aXJlKCcuL2FwaS1odHRwJylbJ2RlbGV0ZSddLFxuICBhcGlQdXQ6IHJlcXVpcmUoJy4vYXBpLWh0dHAnKS5wdXQsXG4gIHZlcnNpb246IHJlcXVpcmUoJy4uLy4uLy50bXAvYXBsYXphbWUtdmVyc2lvbicpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBpID0gcmVxdWlyZSgnLi9hcGknKSxcbiAgICBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKTtcblxuZnVuY3Rpb24gaW5pdCAob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiggdHlwZW9mIG9wdGlvbnMudmVyc2lvbiA9PT0gJ3N0cmluZycgKSB7XG4gICAgdmFyIG1hdGNoVmVyc2lvbiA9IG9wdGlvbnMudmVyc2lvbi5tYXRjaCgvXnY/KFxcZCkoXFwuKFxcZCkpPyQvKTtcblxuICAgIGlmKCAhbWF0Y2hWZXJzaW9uICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd2ZXJzaW9uIG1pc21hdGNoLCBzaG91bGQgYmUgbGlrZSBcXCd2MS4yXFwnJyk7XG4gICAgfVxuXG4gICAgb3B0aW9ucy52ZXJzaW9uID0gTnVtYmVyKG1hdGNoVmVyc2lvblsxXSk7XG5cbiAgICBpZiggbWF0Y2hWZXJzaW9uWzNdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICBvcHRpb25zLmNoZWNrb3V0VmVyc2lvbiA9IE51bWJlcihtYXRjaFZlcnNpb25bM10pO1xuICAgIH1cbiAgfVxuXG4gIGlmKCB0eXBlb2Ygb3B0aW9ucy5zYW5kYm94ID09PSAnc3RyaW5nJyApIHtcbiAgICBvcHRpb25zLnNhbmRib3ggPSBvcHRpb25zLnNhbmRib3ggPT09ICd0cnVlJztcbiAgfVxuXG4gIGlmKCB0eXBlb2Ygb3B0aW9ucy5hbmFseXRpY3MgPT09ICdzdHJpbmcnICkge1xuICAgIG9wdGlvbnMuYW5hbHl0aWNzID0gb3B0aW9ucy5hbmFseXRpY3MgPT09ICd0cnVlJztcbiAgfVxuXG4gIF8uZXh0ZW5kKGFwaSwgb3B0aW9ucyk7XG5cbiAgXy5sb2coJ2FwbGF6YW1lLmluaXQnLCBhcGkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFwbGF6YW1lKSB7XG5cbiAgdmFyIF8gPSBhcGxhemFtZS5fLFxuICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdCxcbiAgICAgIGRhdGFBcGxhemFtZSA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXBsYXphbWUnKSxcbiAgICAgIG9wdGlvbnMgPSBzY3JpcHQuc3JjICYmICgvXFw/Ly50ZXN0KHNjcmlwdC5zcmMpID8gXy5kZXNlcmlhbGl6ZShzY3JpcHQuc3JjLm1hdGNoKC8oLio/KVxcPyguKikvKVsyXSkgOiB7fSkgfHwge307XG5cbiAgaWYoIG9wdGlvbnMuc2FuZGJveCApIHtcbiAgICBvcHRpb25zLnNhbmRib3ggPSBvcHRpb25zLnNhbmRib3ggPT09ICd0cnVlJyB8fCBvcHRpb25zLnNhbmRib3ggPT09ICcxJztcbiAgfVxuXG4gIGlmKCBkYXRhQXBsYXphbWUgKSB7XG5cbiAgICBpZiggL1xcOi8udGVzdChkYXRhQXBsYXphbWUpICkge1xuICAgICAgZGF0YUFwbGF6YW1lLnNwbGl0KCcsJykuZm9yRWFjaChmdW5jdGlvbiAocGFydCkge1xuICAgICAgICB2YXIga2V5cyA9IHBhcnQubWF0Y2goL14oW15cXDpdKylcXDooLiopLyk7XG4gICAgICAgIG9wdGlvbnNba2V5c1sxXS50cmltKCldID0ga2V5c1syXS50cmltKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYoICFvcHRpb25zLnB1YmxpY0tleSApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwdWJsaWNLZXkgbWlzc2luZyBpbiBkYXRhLWFwbGF6YW1lJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdGlvbnMucHVibGljS2V5ID0gZGF0YUFwbGF6YW1lO1xuICAgIH1cblxuICAgIGlmKCBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWFwaS1ob3N0JykgKSB7XG4gICAgICBvcHRpb25zLmhvc3QgPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWFwaS1ob3N0Jyk7XG4gICAgfVxuXG4gICAgaWYoIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmVyc2lvbicpICkge1xuICAgICAgb3B0aW9ucy52ZXJzaW9uID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS12ZXJzaW9uJyk7XG4gICAgfVxuXG4gICAgaWYoIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2FuZGJveCcpICkge1xuICAgICAgb3B0aW9ucy5zYW5kYm94ID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1zYW5kYm94Jyk7XG4gICAgfVxuXG4gICAgaWYoIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5hbHl0aWNzJykgKSB7XG4gICAgICBvcHRpb25zLmFuYWx5dGljcyA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW5hbHl0aWNzJyk7XG4gICAgfVxuXG4gICAgaWYoIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGljLXVybCcpICkge1xuICAgICAgb3B0aW9ucy5zdGF0aWNVcmwgPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXRpYy11cmwnKTtcbiAgICB9XG5cbiAgICBpZiggc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1jYWxsYmFjaycpICkge1xuICAgICAgLy8gaWYoIHR5cGVvZiBnbG9iYWxbc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1jYWxsYmFjaycpXSAhPT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBzaG91bGQgYmUgYSBnbG9iYWwgZnVuY3Rpb24nKTtcbiAgICAgIC8vIH1cblxuICAgICAgb3B0aW9ucy5jYWxsYmFjayA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbGJhY2snKTtcbiAgICAgIC8vIF8ucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gICBnbG9iYWxbc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1jYWxsYmFjaycpXShhcGxhemFtZSk7XG4gICAgICAvLyB9KTtcbiAgICB9XG4gIH1cblxuICBhcGxhemFtZS5pbml0KG9wdGlvbnMpO1xuXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcGxhemFtZSkge1xuICB2YXIgXyA9IGFwbGF6YW1lLl8sXG4gICAgICAkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZScpO1xuXG4gIGZ1bmN0aW9uIGJ1dHRvbnNMb29rdXAgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50ID0gZWxlbWVudCB8fCBkb2N1bWVudDtcbiAgICBpZiggIWVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGJ0bnMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFwbGF6YW1lLWJ1dHRvbl0nKTtcblxuICAgIGlmKCBidG5zLmxlbmd0aCApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcuYnRuKHMpJywgYnRucyk7XG4gICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcblxuICAgICAgXy5lYWNoKGJ0bnMsIGZ1bmN0aW9uIChidG4pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJy5idG4nLCBhcmd1bWVudHMsIGJ0bnMpO1xuICAgICAgICB2YXIgYnRuSWQgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFwbGF6YW1lLWJ1dHRvbicpLFxuICAgICAgICAgICAgYnRuUGFyYW1zID0ge1xuICAgICAgICAgICAgICBzZWxlY3RvcjogJ1tkYXRhLWFwbGF6YW1lLWJ1dHRvbicgKyAoIGJ0bklkID8gKCc9XFxcIicgKyBidG5JZCArICdcXFwiJykgOiAnJyApICsgJ10sIFtkYXRhLWFwbGF6YW1lLWJ1dHRvbi1pbmZvJyArICggYnRuSWQgPyAoJz1cXFwiJyArIGJ0bklkICsgJ1xcXCInKSA6ICcnICkgKyAnXScsXG4gICAgICAgICAgICAgIHBhcmVudDogYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQnKSxcbiAgICAgICAgICAgICAgcHVibGljS2V5OiBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXB1YmxpYy1rZXknKSxcbiAgICAgICAgICAgICAgYW1vdW50OiBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFtb3VudCcpLFxuICAgICAgICAgICAgICBjdXJyZW5jeTogYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1jdXJyZW5jeScpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgc2FuZGJveDogYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1zYW5kYm94JykgPyBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXNhbmRib3gnKSA9PT0gJ3RydWUnIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBjb3VudHJ5OiBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWNvdW50cnknKSB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgcHJvbWlzZXMucHVzaCggYXBsYXphbWUuYnV0dG9uKGJ0blBhcmFtcykgKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiggcHJvbWlzZXMubGVuZ3RoICkge1xuICAgICAgICByZXR1cm4gJHEuYWxsKHByb21pc2VzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAkcS5yZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkcS5yZXNvbHZlKCk7XG4gICAgfVxuICB9XG5cbiAgXy5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgYnV0dG9uc0xvb2t1cCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgXy5saXZlRE9NLnN1YnNjcmliZShidXR0b25zTG9va3VwKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGJ1dHRvbnNMb29rdXA7XG5cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFwbGF6YW1lKSB7XG5cbiAgdmFyIF8gPSBhcGxhemFtZS5fLFxuICAgICAgJHEgPSByZXF1aXJlKCdxLXByb21pc2UnKSxcbiAgICAgIEV2ZW50cyA9IHJlcXVpcmUoJ2V2ZW50cy13cmFwcGVyJyksXG4gICAgICBhcGkgPSByZXF1aXJlKCcuLi9jb3JlL2FwaScpLFxuICAgICAgaXNNb2JpbGUgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKCBtYXgtd2lkdGg6IDc2N3B4ICknKSxcbiAgICAgIGVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcblxuICBmdW5jdGlvbiBnZXRRdHkgKHF0eVNlbGVjdG9yKSB7XG4gICAgaWYoICFfLmlzU3RyaW5nKHF0eVNlbGVjdG9yKSApIHtcbiAgICAgIGNvbnNvbGUud2Fybignd2FybmluZzogZGF0YS1xdHkgc2hvdWxkIGJlIGFuIHN0cmluZy4gcGU6IGZvcm0jYXJ0aWNsZSAuZmluYWwtcHJpY2UgJyk7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgdmFyIHF0eUVsZW1lbnQ7XG4gICAgdHJ5IHtcbiAgICAgIHF0eUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHF0eVNlbGVjdG9yKTtcbiAgICB9IGNhdGNoKGVycikge1xuICAgICAgY29uc29sZS53YXJuKGVyci5tZXNzYWdlICsgJ1xcbmRhdGEtcXR5IHNob3VsZCBiZSBhbiBzdHJpbmcuIHBlOiBmb3JtI2FydGljbGUgLmZpbmFsLXByaWNlICcpO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG4gICAgc3dpdGNoKCBxdHlFbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgKSB7XG4gICAgICBjYXNlICdpbnB1dCc6XG4gICAgICAgIHJldHVybiBOdW1iZXIoIHF0eUVsZW1lbnQudmFsdWUgKTtcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgIHJldHVybiBOdW1iZXIoIHF0eUVsZW1lbnQucXVlcnlTZWxlY3Rvcignb3B0aW9uW3NlbGVjdGVkXScpLnZhbHVlICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gTnVtYmVyKCBxdHlFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjbXNQcmljZVNlbGVjdG9yID0gW1xuICAgICdmb3JtI3Byb2R1Y3RfYWRkdG9jYXJ0X2Zvcm0gLnNwZWNpYWwtcHJpY2UgLnByaWNlJywgLy8gbWFnZW50b1xuICAgICdmb3JtI3Byb2R1Y3RfYWRkdG9jYXJ0X2Zvcm0gLnJlZ3VsYXItcHJpY2UgLnByaWNlJywgLy8gbWFnZW50b1xuICAgICcjcHJvZHVjdC1pbmZvIC5zcGVjaWFsLXByaWNlIC5wcmljZScsIC8vIG1hZ2VudG9cbiAgICAnI3Byb2R1Y3QtaW5mbyAucmVndWxhci1wcmljZSAucHJpY2UnLCAvLyBtYWdlbnRvXG4gICAgJ2Zvcm0jYnV5X2Jsb2NrICNvdXJfcHJpY2VfZGlzcGxheScsIC8vIHByZXN0YXNob3BcbiAgICAnI21haW4gW2l0ZW10eXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvUHJvZHVjdFwiXSBbaXRlbXR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9PZmZlclwiXSAucHJpY2UgLmFtb3VudCcgLy8gd29vY29tbWVyY2VcbiAgXSxcbiAgY21zUXR5U2VsZWN0b3IgPSBbXG4gICAgJ2Zvcm0jcHJvZHVjdF9hZGR0b2NhcnRfZm9ybSBpbnB1dFtuYW1lPVwicXR5XCJdJywgLy8gbWFnZW50b1xuICAgICdmb3JtI2J1eV9ibG9jayBpbnB1dFtuYW1lPVwicXR5XCJdJywgLy8gcHJlc3Rhc2hvcFxuICAgICdmb3JtI3Byb2R1Y3Qtb3B0aW9ucy1mb3JtIGJ1dHRvbltkYXRhLWlkPXF0eV0nLCAvLyBjdXN0b21cbiAgICAnI21haW4gW2l0ZW10eXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvUHJvZHVjdFwiXSBmb3JtLmNhcnQgaW5wdXRbbmFtZT1cInF1YW50aXR5XCJdJyAvLyB3b29jb21tZXJjZVxuICBdO1xuXG4gIGZ1bmN0aW9uIG1hdGNoU2VsZWN0b3IgKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG5cbiAgZnVuY3Rpb24gYW1vdW50R2V0dGVyICh3aWRnZXRFbGVtZW50KSB7XG4gICAgdmFyIHByaWNlU2VsZWN0b3IgPSB3aWRnZXRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpLFxuICAgICAgICBxdHlTZWxlY3RvciA9IHdpZGdldEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXF0eScpLFxuICAgICAgICBhdXRvRGlzY292ZXJlZCA9IGZhbHNlO1xuXG4gICAgaWYoIHByaWNlU2VsZWN0b3IgKSB7XG4gICAgICAvLyB0cnl7XG4gICAgICAvLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJpY2VTZWxlY3Rvcik7XG4gICAgICAvLyB9IGNhdGNoKGVycikge1xuICAgICAgLy8gICBwcmljZVNlbGVjdG9yID0gbnVsbDtcbiAgICAgIC8vICAgY29uc29sZS53YXJuKGVyci5tZXNzYWdlKTtcbiAgICAgIC8vIH1cbiAgICAgIGlmKCBxdHlTZWxlY3RvciApIHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXR5U2VsZWN0b3IpO1xuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgIHF0eVNlbGVjdG9yID0gbnVsbDtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByaWNlU2VsZWN0b3IgPSBfLmZpbmQoY21zUHJpY2VTZWxlY3RvciwgbWF0Y2hTZWxlY3Rvcik7XG5cbiAgICAgIGlmKCBwcmljZVNlbGVjdG9yICkge1xuICAgICAgICBxdHlTZWxlY3RvciA9IF8uZmluZChjbXNRdHlTZWxlY3RvciwgbWF0Y2hTZWxlY3Rvcik7XG4gICAgICAgIGF1dG9EaXNjb3ZlcmVkID0gdHJ1ZTtcblxuICAgICAgICBfLmxvZygnYXV0by1kaXNjb3ZlcmVkIHByaWNlIHNlbGVjdG9yJywgcHJpY2VTZWxlY3RvciwgcXR5U2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBnZXR0ZXIgPSBwcmljZVNlbGVjdG9yID8gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHF0eSA9IHF0eVNlbGVjdG9yID8gZ2V0UXR5KCBxdHlTZWxlY3RvciApIDogMSwgcHJpY2VFbGVtZW50O1xuICAgICAgdHJ5IHtcbiAgICAgICAgcHJpY2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggcHJpY2VTZWxlY3RvciApO1xuICAgICAgfSBjYXRjaChlcnIpIHt9XG5cbiAgICAgIHZhciBhbW91bnQgPSBwcmljZUVsZW1lbnQgPyBwcmljZUVsZW1lbnQudmFsdWUgOiAnMCc7XG5cbiAgICAgIGlmKCB0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJyApIHtcbiAgICAgICAgaWYoICEvXFxkK1ssLl1cXGQrLy50ZXN0KHByaWNlRWxlbWVudC50ZXh0Q29udGVudCkgJiYgcHJpY2VFbGVtZW50LmNoaWxkcmVuICYmIHByaWNlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggKSB7XG4gICAgICAgICAgYW1vdW50ID0gJyc7XG5cbiAgICAgICAgICB2YXIgcGFydCA9IHByaWNlRWxlbWVudC5maXJzdENoaWxkLCBtYXRjaGVkO1xuXG4gICAgICAgICAgd2hpbGUoIHBhcnQgKSB7XG4gICAgICAgICAgICBpZiggL1ssLl0vLnRlc3QoYW1vdW50KSApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2hlZCA9ICggcGFydC50b1N0cmluZygpID09PSAnW29iamVjdCBUZXh0XScgPyBwYXJ0LmRhdGEgOiBwYXJ0LnRleHRDb250ZW50ICkubWF0Y2goL1tcXGQsLl0rLyk7XG5cbiAgICAgICAgICAgIGlmKCBtYXRjaGVkICkge1xuICAgICAgICAgICAgICBhbW91bnQgKz0gKGFtb3VudCAmJiAhL15bLC5dLy50ZXN0KG1hdGNoZWRbMF0pID8gJy4nIDogJycpICsgbWF0Y2hlZFswXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFydCA9IHBhcnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFtb3VudCA9IHByaWNlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gXy5wYXJzZVByaWNlKCBhbW91bnQgKTtcbiAgICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gcmV0dXJuIE51bWJlciggd2lkZ2V0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW1vdW50JykgKTtcbiAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgZ2V0dGVyLnByaWNlU2VsZWN0b3IgPSBwcmljZVNlbGVjdG9yO1xuICAgIGdldHRlci5xdHlTZWxlY3RvciA9IHF0eVNlbGVjdG9yO1xuICAgIGdldHRlci5hdXRvRGlzY292ZXJlZCA9IGF1dG9EaXNjb3ZlcmVkO1xuXG4gICAgcmV0dXJuIGdldHRlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIElmcmFtZSAodXJsKSB7XG4gICAgdmFyIGVsID0gXy5nZXRJRnJhbWUoeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc0MHB4JyB9KSxcbiAgICAgICAgaWZyYW1lID0gdGhpcztcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5lbC5zcmMgPSB1cmw7XG5cbiAgICBuZXcgRXZlbnRzICh0aGlzKTtcblxuICAgIHRoaXMub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy50cmlnZ2VyKCdsb2FkJywgbnVsbCwgdGhpcyk7XG4gICAgfTtcblxuICAgIF8ub25NZXNzYWdlKCdzaW11bGF0b3InLCBmdW5jdGlvbiAoZSwgbWVzc2FnZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ21lc3NhZ2Uuc2ltdWxhdG9yJywgZSwgbWVzc2FnZSk7XG4gICAgICBpZiggZS5zb3VyY2UgPT09IGVsLmNvbnRlbnRXaW5kb3cgKSB7XG4gICAgICAgIGlmcmFtZS50cmlnZ2VyKCdtZXNzYWdlOicgKyBtZXNzYWdlLmV2ZW50LCBbbWVzc2FnZV0sIHRoaXMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vbignbWVzc2FnZTpyZXNpemUnLCBmdW5jdGlvbiAoZSwgbWVzc2FnZSkge1xuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gbWVzc2FnZS5oZWlnaHQgKyAncHgnO1xuICAgIH0pO1xuICB9XG5cbiAgSWZyYW1lLnByb3RvdHlwZS5tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciBfZGF0YSA9IF8uZXh0ZW5kKHtcbiAgICAgIGFwbGF6YW1lOiAnc2ltdWxhdG9yJyxcbiAgICAgIGV2ZW50OiBldmVudE5hbWUsXG4gICAgICBtb2JpbGU6IGlzTW9iaWxlLm1hdGNoZXNcbiAgICB9LCBkYXRhIHx8IHt9KTtcbiAgICBpZiggdGhpcy5lbC5jb250ZW50V2luZG93ICkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2lmcmFtZSBtZXNzYWdlJywgZXZlbnROYW1lLCBfZGF0YSwgdGhpcyk7XG4gICAgICB0aGlzLmVsLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoX2RhdGEsICcqJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignaWZyYW1lIGNvbnRlbnRXaW5kb3cgbWlzc2luZycsIHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBtYXhJbnN0YWxtZW50cyAocHJldiwgY2hvaWNlKSB7XG4gICAgaWYoIHByZXYgPT09IG51bGwgKSB7XG4gICAgICByZXR1cm4gY2hvaWNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2hvaWNlLm51bV9pbnN0YWxtZW50cyA+IHByZXYubnVtX2luc3RhbG1lbnRzID8gY2hvaWNlIDogcHJldjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXaWRnZXQgKG1ldGEpIHtcbiAgICBpZiggIW1ldGEub3B0aW9ucy53aWRnZXQgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZ2V0V2lkZ2V0LnNlcmlhbCA9IGdldFdpZGdldC5zZXJpYWwgPyBnZXRXaWRnZXQuc2VyaWFsICsgMSA6IDE7XG5cbiAgICB2YXIgd2lkZ2V0LFxuICAgICAgICBpZCA9IGdldFdpZGdldC5zZXJpYWw7XG5cbiAgICBpZiggbWV0YS5vcHRpb25zLndpZGdldC50eXBlID09PSAnYnV0dG9uJyApIHtcbiAgICAgIHdpZGdldCA9IG5ldyBJZnJhbWUoIGFwaS5zdGF0aWNVcmwgKyAnd2lkZ2V0cy9zaW11bGF0b3Ivc2ltdWxhdG9yLmh0bWw/JyArIERhdGUubm93KCkgKyAnJnNpbXVsYXRvcj0nICsgaWQgKTtcblxuICAgICAgd2lkZ2V0Lm9uKCdtZXNzYWdlOnJlcXVpcmUuY2hvaWNlcyBjaG9pY2VzLnVwZGF0ZScsIGZ1bmN0aW9uIChlLCBtZXNzYWdlKSB7XG4gICAgICAgIGlmKCBtZXNzYWdlICYmIG1lc3NhZ2Uuc2ltdWxhdG9ySWQgJiYgbWVzc2FnZS5zaW11bGF0b3JJZCAhPT0gaWQgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUsIG1ldGEsIG1lc3NhZ2UpO1xuICAgICAgICB3aWRnZXQubWVzc2FnZSgnY2hvaWNlcycsIHtcbiAgICAgICAgICBhbW91bnQ6IG1ldGEuYW1vdW50LFxuICAgICAgICAgIGNob2ljZTogbWV0YS5jaG9pY2VzLnJlZHVjZShtYXhJbnN0YWxtZW50cywgbnVsbCksXG4gICAgICAgICAgY2hvaWNlczogbWV0YS5jaG9pY2VzLFxuICAgICAgICAgIG9wdGlvbnM6IG1ldGEub3B0aW9uc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB3aWRnZXQub24oJ2Nob2ljZXMudXBkYXRpbmcnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB3aWRnZXQubWVzc2FnZSgnbG9hZGluZycpO1xuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgXy50ZW1wbGF0ZS5wdXQoJ3dpZGdldC1yYXcnLCByZXF1aXJlKCcuLi8uLi8udG1wL3NpbXVsYXRvci90ZW1wbGF0ZXMvd2lkZ2V0LXJhdycpICk7XG4gICAgICB3aWRnZXQgPSB7IGVsOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSB9O1xuICAgICAgbmV3IEV2ZW50cyh3aWRnZXQpO1xuXG4gICAgICB3aWRnZXQuZWwuaW5uZXJIVE1MID0gXy50ZW1wbGF0ZSgnd2lkZ2V0LXJhdycsIHtcbiAgICAgICAgZ2V0QW1vdW50OiBfLmdldEFtb3VudCxcbiAgICAgICAgYW1vdW50OiBtZXRhLmFtb3VudCxcbiAgICAgICAgY2hvaWNlOiBtZXRhLmNob2ljZXMucmVkdWNlKG1heEluc3RhbG1lbnRzLCBudWxsKSxcbiAgICAgICAgY2hvaWNlczogbWV0YS5jaG9pY2VzLFxuICAgICAgICBvcHRpb25zOiBtZXRhLm9wdGlvbnNcbiAgICAgIH0pO1xuXG4gICAgICB3aWRnZXQuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgYXBsYXphbWU6ICdtb2RhbCcsXG4gICAgICAgICAgZXZlbnQ6ICdvcGVuJyxcbiAgICAgICAgICBuYW1lOiAnaW5zdGFsbWVudHMnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNhcmQ6IF8udGVtcGxhdGUuY29tcGlsZSggcmVxdWlyZSgnLi4vLi4vLnRtcC9zaW11bGF0b3IvdGVtcGxhdGVzL21vZGFsLWluc3RhbG1lbnRzJykgKSh7XG4gICAgICAgICAgICAgIHNlbGVjdGVkQ2hvaWNlOiBtZXRhLmNob2ljZXMucmVkdWNlKG1heEluc3RhbG1lbnRzLCBudWxsKSxcbiAgICAgICAgICAgICAgY2hvaWNlczogbWV0YS5jaG9pY2VzLFxuICAgICAgICAgICAgICBnZXRBbW91bnQ6IF8uZ2V0QW1vdW50LFxuICAgICAgICAgICAgICBtb250aHM6IGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG0gPiAxID8gJ21lc2VzJyA6ICdtZXMnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgJyonKTtcblxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2lkZ2V0LmlkID0gaWQ7XG5cbiAgICByZXR1cm4gd2lkZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VXaWRnZXQgKHdpZGdldCwgd2lkZ2V0V3JhcHBlciwgc2VsZWN0b3IpIHtcbiAgICBpZiggIXNlbGVjdG9yICkge1xuICAgICAgd2lkZ2V0V3JhcHBlci5hcHBlbmRDaGlsZCh3aWRnZXQuZWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwc2V1ZG9Mb2NhdG9yO1xuICAgIHNlbGVjdG9yID0gc2VsZWN0b3IudHJpbSgpLnJlcGxhY2UoLzooXFx3Kz8pJC8sIGZ1bmN0aW9uIChtYXRjaGVkLCBsb2NhdG9yKSB7XG4gICAgICBwc2V1ZG9Mb2NhdG9yID0gbG9jYXRvcjtcbiAgICAgIHJldHVybiAnJztcbiAgICB9KTtcblxuICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmKCBlbCApIHtcbiAgICAgIGlmKCBwc2V1ZG9Mb2NhdG9yICkge1xuICAgICAgICBzd2l0Y2goIHBzZXVkb0xvY2F0b3IgKSB7XG4gICAgICAgICAgY2FzZSAnYWZ0ZXInOlxuICAgICAgICAgICAgaWYoIGVsLm5leHRFbGVtZW50U2libGluZyApIHtcbiAgICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUod2lkZ2V0LmVsLCBlbC5uZXh0RWxlbWVudFNpYmxpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh3aWRnZXQuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYmVmb3JlJzpcbiAgICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHdpZGdldC5lbCwgZWwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncHNldWRvTG9jYXRvciAnICsgcHNldWRvTG9jYXRvciArICcgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQod2lkZ2V0LmVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBldmFsV2lkZ2V0ICh3aWRnZXRXcmFwcGVyKSB7XG4gICAgdmFyIG1ldGEsIHVwZGF0ZURhdGEgPSBmYWxzZSwgZGV0ZWN0ZWRBbW91bnQsIHNpbXVsYXRvck9wdGlvbnMgPSB7fTtcblxuICAgIGlmKCB3aWRnZXRXcmFwcGVyLl9fYXB6X3dpZGdldF9fICkge1xuICAgICAgbWV0YSA9IHdpZGdldFdyYXBwZXIuX19hcHpfd2lkZ2V0X187XG5cbiAgICAgIGRldGVjdGVkQW1vdW50ID0gbWV0YS5nZXRBbW91bnQoKTtcbiAgICAgIGlmKCBkZXRlY3RlZEFtb3VudCAmJiBtZXRhLmFtb3VudCAhPT0gZGV0ZWN0ZWRBbW91bnQgKSB7XG4gICAgICAgIHVwZGF0ZURhdGEgPSB0cnVlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh3aWRnZXRXcmFwcGVyLCBtZXRhLmFtb3VudCwgbWV0YS5nZXRBbW91bnQoKSApO1xuICAgICAgICBtZXRhLmFtb3VudCA9IG1ldGEuZ2V0QW1vdW50KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1ldGEgPSB7IGdldEFtb3VudDogYW1vdW50R2V0dGVyKHdpZGdldFdyYXBwZXIpIH07XG4gICAgICBtZXRhLmFtb3VudCA9IHdpZGdldFdyYXBwZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWFtb3VudCcpID8gTnVtYmVyKHdpZGdldFdyYXBwZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWFtb3VudCcpKSA6IG1ldGEuZ2V0QW1vdW50KCk7XG4gICAgICB1cGRhdGVEYXRhID0gdHJ1ZTtcbiAgICAgIGlmKCBtZXRhLmdldEFtb3VudC5xdHlTZWxlY3RvciApIHtcbiAgICAgICAgbWV0YS5xdHkgPSBnZXRRdHkobWV0YS5nZXRBbW91bnQucXR5U2VsZWN0b3IpIHx8IDE7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ25ldyB3YXRjaGVyJyk7XG4gICAgICAgIG1ldGEud2F0Y2hRdHkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYoICFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHdpZGdldFdyYXBwZXIpICkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChtZXRhLndhdGNoUXR5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHF0eSA9IGdldFF0eShtZXRhLmdldEFtb3VudC5xdHlTZWxlY3Rvcik7XG4gICAgICAgICAgaWYoIHF0eSAhPT0gbWV0YS5xdHkgKSB7XG4gICAgICAgICAgICBtZXRhLnF0eSA9IHF0eTtcbiAgICAgICAgICAgIGV2YWxXaWRnZXQod2lkZ2V0V3JhcHBlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAyNTApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCB3aWRnZXRXcmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3JykgKSB7XG4gICAgICBzaW11bGF0b3JPcHRpb25zLnZpZXcgPSB3aWRnZXRXcmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3Jyk7XG4gICAgfVxuXG4gICAgaWYoIG1ldGEuYW1vdW50ICYmIG1ldGEuZ2V0QW1vdW50LnF0eVNlbGVjdG9yICkge1xuICAgICAgbWV0YS5hbW91bnQgKj0gKCBnZXRRdHkobWV0YS5nZXRBbW91bnQucXR5U2VsZWN0b3IpIHx8IDEgKTtcbiAgICB9XG4gICAgaWYoIG1ldGEuYW1vdW50ICYmIHVwZGF0ZURhdGEgKSB7XG4gICAgICBpZiggbWV0YS53aWRnZXQgJiYgbWV0YS53aWRnZXQubWVzc2FnZSApIHtcbiAgICAgICAgbWV0YS53aWRnZXQubWVzc2FnZSgnbG9hZGluZycpO1xuICAgICAgfVxuICAgICAgYXBsYXphbWUuc2ltdWxhdG9yKCBtZXRhLmFtb3VudCwgc2ltdWxhdG9yT3B0aW9ucywgZnVuY3Rpb24gKF9jaG9pY2VzLCBfb3B0aW9ucykge1xuICAgICAgICBfb3B0aW9ucy53aWRnZXQgPSBfb3B0aW9ucy53aWRnZXQgfHwge307XG4gICAgICAgIG1ldGEuY2hvaWNlcyA9IF9jaG9pY2VzO1xuICAgICAgICBtZXRhLm9wdGlvbnMgPSBfb3B0aW9ucztcbiAgICAgICAgbWV0YS53aWRnZXQgPSBtZXRhLndpZGdldCB8fCBnZXRXaWRnZXQobWV0YSk7XG5cbiAgICAgICAgaWYoIG1ldGEud2lkZ2V0ICYmICFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKG1ldGEud2lkZ2V0LmVsKSApIHtcbiAgICAgICAgICBwbGFjZVdpZGdldChtZXRhLndpZGdldCwgd2lkZ2V0V3JhcHBlciwgd2lkZ2V0V3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtbG9jYXRpb24nKSB8fCBfb3B0aW9ucy53aWRnZXQubG9jYXRpb24gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGEud2lkZ2V0LnRyaWdnZXIoJ2Nob2ljZXMudXBkYXRlJyk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCBtZXRhLndpZGdldCAmJiBtZXRhLndpZGdldC5tZXNzYWdlICkge1xuICAgICAgICAgIG1ldGEud2lkZ2V0Lm1lc3NhZ2UoJ2Fib3J0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIG1ldGEud2lkZ2V0ICYmIGRvY3VtZW50LmJvZHkuY29udGFpbnMobWV0YS53aWRnZXQuZWwpICkge1xuICAgICAgICAgIHZhciBwYXJlbnQgPSBtZXRhLndpZGdldC5lbC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChtZXRhLndpZGdldC5lbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHdpZGdldFdyYXBwZXIuX19hcHpfd2lkZ2V0X18gPSBtZXRhO1xuICB9XG5cbiAgZnVuY3Rpb24gd2lkZ2V0c0xvb2t1cCAoZWxlbWVudCkge1xuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuXG4gICAgZWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFwbGF6YW1lLXNpbXVsYXRvcl0nKSwgZXZhbFdpZGdldCApO1xuXG4gICAgcmV0dXJuIHByb21pc2VzLmxlbmd0aCA/ICRxLmFsbChwcm9taXNlcykgOiAkcS5yZXNvbHZlKCk7XG4gIH1cblxuICB3aWRnZXRzTG9va3VwKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgXy5saXZlRE9NLnN1YnNjcmliZSh3aWRnZXRzTG9va3VwKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHdpZGdldHNMb29rdXA7XG5cbn07XG4iLCJcbmZ1bmN0aW9uIHRob3VzYW5kcyhhbW91bnQpIHtcbiAgaWYoIC9cXGR7M31cXGQrLy50ZXN0KGFtb3VudCkgKSB7XG4gICAgcmV0dXJuIHRob3VzYW5kcyhhbW91bnQucmVwbGFjZSgvKFxcZHszfT8pKFxcLnwkKS8sICcuJCYnKSk7XG4gIH1cbiAgcmV0dXJuIGFtb3VudDtcbn1cblxuZnVuY3Rpb24gZ2V0QW1vdW50IChhbW91bnQpIHtcbiAgdmFyIHByZWZpeCA9ICcnO1xuXG4gIGlmKCBhbW91bnQgPCAwICkge1xuICAgIHByZWZpeCA9ICctJztcbiAgICBhbW91bnQgPSAwIC0gYW1vdW50O1xuICB9XG5cbiAgaWYoICFhbW91bnQgKSB7XG4gICAgcmV0dXJuICcwLDAwJztcbiAgfSBlbHNlIGlmKCBhbW91bnQgPCAxMCApIHtcbiAgICByZXR1cm4gJzAsMCcgKyBhbW91bnQ7XG4gIH0gZWxzZSBpZiggYW1vdW50IDwgMTAwICkge1xuICAgIHJldHVybiAnMCwnICsgYW1vdW50O1xuICB9XG4gIHJldHVybiBwcmVmaXggKyAoJycgKyBhbW91bnQpLnJlcGxhY2UoLyhcXGQqKShcXGR7Mn0pJC8sIGZ1bmN0aW9uIChtYXRjaGVkLCBtYWluLCB0YWlsKSB7XG4gICAgcmV0dXJuIHRob3VzYW5kcyhtYWluKSArICcsJyArIHRhaWw7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwYXJzZVByaWNlIChwcmljZSkge1xuICB2YXIgbWF0Y2hlZCA9IHByaWNlLm1hdGNoKC8oKFxcZCtbLC4gXSkqKShcXGQrKS8pLFxuICAgICAgYW1vdW50LCBtYWluLCB0YWlsO1xuXG4gIGlmKCBtYXRjaGVkICkge1xuICAgIHRhaWwgPSBtYXRjaGVkWzNdO1xuICAgIG1haW4gPSBtYXRjaGVkWzFdLnJlcGxhY2UoL1teXFxkXS9nLCAnJyk7XG5cbiAgICBpZiggIW1haW4gKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKCB0YWlsICsgJzAwJyApO1xuICAgIH1cblxuICAgIGlmKCB0YWlsLmxlbmd0aCA9PT0gMSApIHtcbiAgICAgIHJldHVybiBOdW1iZXIobWFpbiArIHRhaWwgKyAnMCcpO1xuICAgIH1cblxuICAgIGlmKCB0YWlsLmxlbmd0aCAhPT0gMiApIHtcbiAgICAgIHRhaWwgKz0gJzAwJztcbiAgICB9XG5cbiAgICByZXR1cm4gTnVtYmVyKG1haW4gKyB0YWlsKTtcbiAgfVxuXG4gIGlmKCAvXFxkKy8udGVzdChwcmljZSkgKSB7XG4gICAgcmV0dXJuIE51bWJlciggcHJpY2UucmVwbGFjZSgvW15cXGRdKy9nLCAnJykgKyAnMDAnICk7XG4gIH1cblxuICBjb25zb2xlLndhcm4oJ3ByaWNlIGRhdGEgbWlzbWF0Y2gnLCBwcmljZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRnZXRBbW91bnQ6IGdldEFtb3VudCxcblx0cGFyc2VQcmljZTogcGFyc2VQcmljZVxufTtcbiIsIlxuZnVuY3Rpb24gX3JlYWR5IChfY2FsbGJhY2ssIGRlbGF5KSB7XG4gIHZhciBjYWxsYmFjayA9IGRlbGF5ID8gZnVuY3Rpb24gKCkgeyBzZXRUaW1lb3V0KF9jYWxsYmFjaywgZGVsYXkpOyB9IDogX2NhbGxiYWNrO1xuXG4gIGlmICgvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNhbGxiYWNrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kQnViYmxlQ2xvc2UgKHN0cikge1xuICB2YXIgbGV2ZWwgPSAwO1xuXG4gIGZvciggdmFyIGkgPSAwLCBsZW4gPSBzdHIubGVuZ3RoOyBpIDwgbGVuIDsgaSsrICkge1xuICAgIGlmKCBzdHJbaV0gPT09ICcoJyApIHtcbiAgICAgIGxldmVsKys7XG4gICAgfSBlbHNlIGlmKCBzdHJbaV0gPT09ICcpJyApIHtcbiAgICAgIGlmKCBsZXZlbCA9PT0gMCApIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXZlbC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gaGFzU2VsZWN0b3IgKHNlbGVjdG9yLCByb290RWxlbWVudCkge1xuICB2YXIgc3BsaXRIYXMgPSBzZWxlY3Rvci5zcGxpdCgnOmhhcygnKTtcblxuICByZXR1cm4gc3BsaXRIYXMucmVkdWNlKGZ1bmN0aW9uIChtYXRjaGVzLCBwYXJ0aWFsKSB7XG5cbiAgICB2YXIgY2xvc2VQb3NpdGlvbiA9IGZpbmRCdWJibGVDbG9zZShwYXJ0aWFsKSxcbiAgICAgICAgaGFzRmlsdGVyID0gcGFydGlhbC5zdWJzdHIoMCwgY2xvc2VQb3NpdGlvbiksXG4gICAgICAgIHBhcnRpYWxRdWVyeSA9IHBhcnRpYWwuc3Vic3RyKGNsb3NlUG9zaXRpb24gKyAxKS50cmltKCk7XG5cbiAgICBpZiggY2xvc2VQb3NpdGlvbiA9PT0gLTEgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ21hbGZvcm1lZCBzZWxlY3RvcicpO1xuICAgIH1cblxuICAgIG1hdGNoZXMgPSBtYXRjaGVzLmZpbHRlcihmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcihoYXNGaWx0ZXIpO1xuICAgIH0pO1xuXG4gICAgaWYoIHBhcnRpYWxRdWVyeSApIHtcbiAgICAgIHZhciBzdWJtYXRjaGVzID0gW107XG5cbiAgICAgIG1hdGNoZXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBbXS5wdXNoLmFwcGx5KHN1Ym1hdGNoZXMsIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChwYXJ0aWFsUXVlcnkpICk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHN1Ym1hdGNoZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG5cbiAgfSwgW10uc2xpY2UuY2FsbCggKHJvb3RFbGVtZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKCBzcGxpdEhhcy5zaGlmdCgpICkgKSApO1xufVxuXG5mdW5jdGlvbiBxdWVyeVNlbGVjdG9yIChzZWxlY3Rvciwgcm9vdEVsZW1lbnQpIHtcbiAgLy8gJ3RyOmhhcyg+IC5yb3cpIGRpdjpoYXMoc3BhbikgaW1nJy5zcGxpdCgnOmhhcygnKTtcbiAgaWYoICFzZWxlY3RvciApIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpZiggIS9cXDpoYXNcXCgvLnRlc3Qoc2VsZWN0b3IpICkge1xuICAgIHJldHVybiBbXS5zbGljZS5jYWxsKCAocm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICkgKTtcbiAgfVxuXG4gIHJldHVybiBoYXNTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbmZ1bmN0aW9uIGNzc1F1ZXJ5IChfc2VsZWN0b3IsIHJvb3RFbGVtZW50KSB7XG4gIHZhciBzZWxlY3RvcnMgPSBfc2VsZWN0b3Iuc3BsaXQoL1xccyosXFxzKi8pO1xuXG4gIHJldHVybiBzZWxlY3RvcnMucmVkdWNlKGZ1bmN0aW9uIChsaXN0LCBzZWxlY3Rvcikge1xuICAgIHJldHVybiBsaXN0LmNvbmNhdCggcXVlcnlTZWxlY3RvcihzZWxlY3Rvciwgcm9vdEVsZW1lbnQpICk7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsVG9wICh2YWx1ZSkge1xuICBpZiggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gdmFsdWU7XG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbn1cblxuZnVuY3Rpb24gY2xlYXJFbGVtZW50IChlbCkge1xuICB2YXIgY2hpbGQgPSBlbC5maXJzdENoaWxkO1xuXG4gIHdoaWxlKCBjaGlsZCApIHtcbiAgICBlbC5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgY2hpbGQgPSBlbC5maXJzdENoaWxkO1xuICB9XG59XG5cbi8vIHZhciBfY2xhc3NBY3Rpb25zID0ge1xuLy8gICBhZGQ6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QgPyBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4vLyAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4vLyAgIH0gOiBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4vLyAgICAgdmFyIFJFX0NMRUFOQ0xBU1MgPSBuZXcgUmVnRXhwKCdcXFxcYicgKyAoY2xhc3NOYW1lIHx8ICcnKSArICdcXFxcYicsJycpO1xuLy8gICAgIF9jbGFzc0FjdGlvbnMucmVtb3ZlKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4vLyAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuLy8gICB9LFxuLy8gICByZW1vdmU6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QgPyBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4vLyAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4vLyAgIH0gOiBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4vLyAgICAgdmFyIFJFX0NMRUFOQ0xBU1MgPSBuZXcgUmVnRXhwKCdcXFxcYicgKyAoY2xhc3NOYW1lIHx8ICcnKSArICdcXFxcYicsJycpO1xuLy8gICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShSRV9DTEVBTkNMQVNTLCcnKTtcbi8vICAgfSxcbi8vICAgYWN0aW9uOiBmdW5jdGlvbiAoYWN0aW9uLCB0b29scykge1xuLy8gICAgIHJldHVybiBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4vLyAgICAgICBpZiggY2xhc3NOYW1lLmluZGV4T2YoJyAnKSA+PSAwICkge1xuLy8gICAgICAgICBjbGFzc05hbWUuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbikge1xuLy8gICAgICAgICAgIF9jbGFzc0FjdGlvbnNbYWN0aW9uXShlbGVtZW50LCBjbik7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgX2NsYXNzQWN0aW9uc1thY3Rpb25dKGVsZW1lbnQsIGNsYXNzTmFtZSk7XG4vLyAgICAgICB9XG4vLyAgICAgICByZXR1cm4gdG9vbHM7XG4vLyAgICAgfTtcbi8vICAgfVxuLy8gfTtcblxuZnVuY3Rpb24gd3JpdGVJZnJhbWUgKGlmcmFtZSwgY29udGVudCkge1xuICB2YXIgaWZyYW1lRG9jID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIHRyeSB7IGlmcmFtZURvYy5jaGFyc2V0ID0gJ1VURi04JzsgfSBjYXRjaChlcnIpIHt9XG4gIGlmcmFtZURvYy5vcGVuKCk7XG4gIGlmcmFtZURvYy53cml0ZShjb250ZW50KTtcbiAgaWZyYW1lRG9jLmNsb3NlKCk7XG59XG5cbmZ1bmN0aW9uIGdldElGcmFtZSAoaWZyYW1lU3R5bGVzKSB7XG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgcmVxdWlyZSgnbml0cm8tdG9vbHMvZXh0ZW5kJykuZXh0ZW5kKGlmcmFtZS5zdHlsZSwgaWZyYW1lU3R5bGVzIHx8IHt9KTtcblxuICBpZnJhbWUuZnJhbWVCb3JkZXIgPSAnMCc7XG4gIC8vIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBpZnJhbWUub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgfTtcbiAgcmV0dXJuIGlmcmFtZTtcbn1cblxudmFyIF8gPSB7XG4gIHJlYWR5OiBfcmVhZHksXG4gIGdldElGcmFtZTogZ2V0SUZyYW1lLFxuICB3cml0ZUlmcmFtZTogd3JpdGVJZnJhbWUsXG4gIGNzc1F1ZXJ5OiBjc3NRdWVyeSxcbiAgc2Nyb2xsVG9wOiBzY3JvbGxUb3AsXG4gIGNsZWFyRWxlbWVudDogY2xlYXJFbGVtZW50LFxuICBlbGVtZW50RGF0YTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykuZGF0YXNldCA/IGZ1bmN0aW9uIChlbCwga2V5LCB2YWx1ZSkge1xuICAgIGlmKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgZWwuZGF0YXNldFtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBlbC5kYXRhc2V0W2tleV07XG4gIH0gOiBmdW5jdGlvbiAoZWwsIGtleSwgdmFsdWUpIHtcbiAgICBpZiggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS0nICsga2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIGtleSk7XG4gIH0sXG59O1xuXG4vLyB2YXIgYWRkQ2xhc3MgPSBfY2xhc3NBY3Rpb25zLmFjdGlvbignYWRkJywgXyApLFxuLy8gICAgIHJlbW92ZUNsYXNzID0gX2NsYXNzQWN0aW9ucy5hY3Rpb24oJ3JlbW92ZScsIF8gKTtcblxuLy8gXy5hZGRDbGFzcyA9IGFkZENsYXNzO1xuLy8gXy5yZW1vdmVDbGFzcyA9IHJlbW92ZUNsYXNzO1xuXG5fLmFkZENsYXNzID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbn07XG5cbl8ucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfO1xuIiwiXG5cbmZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHJldHVybiBbcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksIHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLCBwYXJzZUludChyZXN1bHRbM10sIDE2KV07XG59XG5cbmZ1bmN0aW9uIGJyaWdodG5lc3MgKGNvbG9yKSB7XG4gIHZhciByZ2IgPSBoZXhUb1JnYihjb2xvcik7XG4gIHZhciBvID0gTWF0aC5yb3VuZCgoKHBhcnNlSW50KHJnYlswXSkgKiAyOTkpICsgKHBhcnNlSW50KHJnYlsxXSkgKiA1ODcpICsgKHBhcnNlSW50KHJnYlsyXSkgKiAxMTQpKSAvMTAwMCk7XG4gIHJldHVybiBvIDwgMTAwID8gJ2RhcmsnIDogKCBvID4gMjMwID8gJ2xpZ2h0JyA6ICdtZWRpdW0nICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBoZXhUb1JnYjogaGV4VG9SZ2IsXG4gIGJyaWdodG5lc3M6IGJyaWdodG5lc3Ncbn07XG4iLCJcblxudmFyIGltcG9ydGFudENTUyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgICAgIHJldHVybiBjc3MucmVwbGFjZSgvOy9nLCAnICFpbXBvcnRhbnQ7JykucmVwbGFjZSgvOihbXjo7XSs/KX0vZywgZnVuY3Rpb24gKG1hdGNoZWQsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAnOicgKyB2YWx1ZSArICcgIWltcG9ydGFudDt9JztcbiAgICAgIH0pLnJlcGxhY2UoLyhcXGQrJXxmcm9tfHRvKXsoW159XSspL2csIGZ1bmN0aW9uIChtYXRjaGVkLCBwb3MsIGNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvcyArICd7JyArIGNvbnRlbnQucmVwbGFjZSgvICFpbXBvcnRhbnQ7L2csICc7Jyk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNzc0hhY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNhY2hlID0ge30sXG4gICAgICAgICAgaGFja3MgPSB7XG4gICAgICAgICAgICBvdmVybGF5OiBpbXBvcnRhbnRDU1MocmVxdWlyZSgnLi4vLi4vLnRtcC9jc3MtaGFja3Mvb3ZlcmxheScpKSxcbiAgICAgICAgICAgIGJsdXI6IGltcG9ydGFudENTUyhyZXF1aXJlKCcuLi8uLi8udG1wL2Nzcy1oYWNrcy9ibHVyJykpLFxuICAgICAgICAgICAgbG9nbzogaW1wb3J0YW50Q1NTKHJlcXVpcmUoJy4uLy4uLy50bXAvY3NzLWhhY2tzL2xvZ28nKSksXG4gICAgICAgICAgICBtb2RhbDogaW1wb3J0YW50Q1NTKHJlcXVpcmUoJy4uLy4uLy50bXAvY3NzLWhhY2tzL21vZGFsJykpXG4gICAgICAgICAgfTtcblxuICAgICAgLy8gY29uc29sZS5sb2coJ2Nzc0hhY2tzJywgaGFja3MpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaGFjayAoaGFja05hbWUpIHtcbiAgICAgICAgaWYoICFjYWNoZVtoYWNrTmFtZV0gKSB7XG4gICAgICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBoYWNrc1toYWNrTmFtZV07XG5cbiAgICAgICAgICB2YXIgZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgc3R5bGUuaGFjayA9IGZ1bmN0aW9uIChlbmFibGUpIHtcbiAgICAgICAgICAgIGVuYWJsZSA9IGVuYWJsZSA9PT0gdW5kZWZpbmVkIHx8IGVuYWJsZTtcblxuICAgICAgICAgICAgaWYoIGVuYWJsZSApIHtcbiAgICAgICAgICAgICAgaWYoIGVuYWJsZWQgKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgICBlbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiggIWVuYWJsZWQgKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgICBlbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjYWNoZVtoYWNrTmFtZV0gPSBzdHlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FjaGVbaGFja05hbWVdO1xuICAgICAgfTtcbiAgICB9KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNzc0hhY2s7XG4iLCJcblxuZnVuY3Rpb24gX2tleSAobywga2V5LCB2YWx1ZSkge1xuXHRrZXkuc3BsaXQoJy4nKS5mb3JFYWNoKGZ1bmN0aW9uIChrLCBpLCBrZXlzKSB7XG5cdFx0aWYoIGkgPT09IGtleXMubGVuZ3RoIC0gMSApIHtcblx0XHRcdG9ba10gPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0b1trXSA9IG9ba10gfHwge307XG5cdFx0XHRvID0gb1trXTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjYW1lbENhc2UgKHRleHQpIHtcblx0cmV0dXJuIHRleHQucmVwbGFjZSgvXyhcXHcpL2csIGZ1bmN0aW9uIChtYXRjaGVkLCBsZXR0ZXIpIHtcblx0XHRyZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZSAocXVlcnlzdHJpbmcsIGRlY29kZSkge1xuXG5cdHZhciByZXN1bHQgPSB7fTtcblxuXHRxdWVyeXN0cmluZy5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24gKGtleVZhbHVlKSB7XG5cdFx0dmFyIG1hdGNoZWQgPSBrZXlWYWx1ZS5tYXRjaCgvKC4qPyk9KC4qKS8pO1xuXG5cdFx0aWYoICFtYXRjaGVkICkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcGFyc2UgJyArIGtleVZhbHVlKTtcblx0XHR9XG5cblx0XHRfa2V5KHJlc3VsdCwgY2FtZWxDYXNlKG1hdGNoZWRbMV0pLCBkZWNvZGUgPyBkZWNvZGVVUkkobWF0Y2hlZFsyXSkgOiBtYXRjaGVkWzJdICk7XG5cblx0fSk7XG5cblx0cmV0dXJuIHJlc3VsdDtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlc2VyaWFsaXplO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3VzY3JpcHRvcnMgPSBbXSxcbiAgICBydW5uaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGluaXRMaXZlRE9NICgpIHtcblxuICByZXF1aXJlKCcuL2Jyb3dzZXItdG9vbHMnKS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdET01TdWJ0cmVlTW9kaWZpZWQnLCBmdW5jdGlvbihldmVudCl7XG4gICAgICBmb3IoIHZhciBpID0gMCwgbiA9IHN1c2NyaXB0b3JzLmxlbmd0aDsgaSA8IG4gOyBpKysgKSB7XG4gICAgICAgIHN1c2NyaXB0b3JzW2ldKGV2ZW50LnRhcmdldCk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICB9KTtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3Vic2NyaWJlOiBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIGlmKCAhcnVubmluZyApIHtcbiAgICAgIGluaXRMaXZlRE9NKHRydWUpO1xuICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgfVxuICAgIGlmKCBoYW5kbGVyIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgICBzdXNjcmlwdG9ycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cbiAgfVxufTtcbiIsIlxuXG5mdW5jdGlvbiBnZXRFcnJvck9iamVjdCgpe1xuICAgIHRyeSB7IHRocm93IEVycm9yKCcnKTsgfSBjYXRjaChlcnIpIHsgcmV0dXJuIGVycjsgfVxufVxuXG5mdW5jdGlvbiBsb2cgKCkge1xuICB2YXIgZXJyID0gZ2V0RXJyb3JPYmplY3QoKSxcbiAgICAgIGNhbGxlcl9saW5lID0gZXJyLnN0YWNrLnNwbGl0KCdcXG4nKVs0XSB8fCAnJyxcbiAgICAgIGluZGV4ID0gY2FsbGVyX2xpbmUuaW5kZXhPZignYXQgJyk7XG5cbiAgbG9nLmhpc3RvcnkucHVzaCh7XG4gICAgdGltZTogbmV3IERhdGUoKSxcbiAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgdHJhY2s6IHtcbiAgICAgIGNhbGxlcl9saW5lOiBjYWxsZXJfbGluZSxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGNsZWFuOiBjYWxsZXJfbGluZS5zbGljZShpbmRleCArIDIsIGNhbGxlcl9saW5lLmxlbmd0aClcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbmxvZy5oaXN0b3J5ID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0gbG9nO1xuIiwiXG52YXIgbWVzc2FnZVRhcmdldCA9IHt9LFxuICAgIHNob3dMb2dzID0gZmFsc2U7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcbiAgdmFyIG1lc3NhZ2UgPSBlLmRhdGEsXG4gICAgICBsaXN0ZW5lcnMgPSBtZXNzYWdlVGFyZ2V0W21lc3NhZ2UuYXBsYXphbWVdO1xuXG4gIGlmKCAhbGlzdGVuZXJzICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCBzaG93TG9ncyAmJiAhZS51c2VkICkge1xuICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlJywgZSwgbGlzdGVuZXJzKTtcbiAgfVxuXG4gIGlmKCAhZS51c2VkICkge1xuICAgIGUudXNlZCA9IHRydWU7XG4gICAgZm9yKCB2YXIgaSA9IDAsIG4gPSBsaXN0ZW5lcnMubGVuZ3RoIDsgaSA8IG4gOyBpKysgKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0oZSwgbWVzc2FnZSk7XG4gICAgfVxuICB9XG59LCB0cnVlKTtcblxuZnVuY3Rpb24gb25NZXNzYWdlICh0YXJnZXQsIGhhbmRsZXIsIGxvZ3MpIHtcbiAgc2hvd0xvZ3MgPSBsb2dzO1xuICBpZiggdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgJiYgaGFuZGxlciBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgIG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XSA9IG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XSB8fCBbXTtcbiAgICBtZXNzYWdlVGFyZ2V0W3RhcmdldF0ucHVzaChoYW5kbGVyKTtcbiAgfVxufVxuXG5vbk1lc3NhZ2Uub2ZmID0gZnVuY3Rpb24gKHRhcmdldCwgaGFuZGxlcikge1xuICBpZiggdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgJiYgaGFuZGxlciBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgIG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XSA9IG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XSB8fCBbXTtcbiAgICB2YXIgaSA9IG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XS5pbmRleE9mKGhhbmRsZXIpO1xuICAgIGlmKCBpICE9PSAtMSApIHtcbiAgICAgIG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XS5zcGxpY2UoaSwxKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gb25NZXNzYWdlO1xuIiwiXG5mdW5jdGlvbiB0ZW1wbGF0ZSAobmFtZSwgZGF0YSl7XG4gIHJldHVybiB0ZW1wbGF0ZS5jYWNoZVtuYW1lXShkYXRhIHx8IHt9KTtcbn1cblxudGVtcGxhdGUuY2FjaGUgPSB7fTtcblxudGVtcGxhdGUuY29tcGlsZSA9IGZ1bmN0aW9uICh0bXBsKSB7XG4gIC8vIEpvaG4gUmVzaWcgbWljcm8tdGVtcGxhdGVcbiAgcmV0dXJuIG5ldyBGdW5jdGlvbignb2JqJywgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgJ3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9OycgK1xuXG4gICAgLy8gSW50cm9kdWNlIHRoZSBkYXRhIGFzIGxvY2FsIHZhcmlhYmxlcyB1c2luZyB3aXRoKCl7fVxuICAgICd3aXRoKG9iail7cC5wdXNoKFxcJycgK1xuXG4gICAgLy8gQ29udmVydCB0aGUgdGVtcGxhdGUgaW50byBwdXJlIEphdmFTY3JpcHRcbiAgICB0bXBsLnRyaW0oKVxuICAgICAgLnJlcGxhY2UoL1tcXHJcXHRcXG5dL2csICcgJylcbiAgICAgIC5zcGxpdCgnPCUnKS5qb2luKCdcXHQnKVxuICAgICAgLnJlcGxhY2UoLygoXnwlPilbXlxcdF0qKScvZywgJyQxXFxyJylcbiAgICAgIC5yZXBsYWNlKC9cXHQ9KC4qPyklPi9nLCAnXFwnLCQxLFxcJycpXG4gICAgICAuc3BsaXQoJ1xcdCcpLmpvaW4oJ1xcJyk7JylcbiAgICAgIC5zcGxpdCgnJT4nKS5qb2luKCdwLnB1c2goXFwnJylcbiAgICAgIC5zcGxpdCgnXFxyJykuam9pbignXFxcXFxcJycpICsgJ1xcJyk7fXJldHVybiBwLmpvaW4oXFwnXFwnKTsnKTtcbn07XG5cbnRlbXBsYXRlLnB1dCA9IGZ1bmN0aW9uIChuYW1lLCB0bXBsKSB7XG4gIHRlbXBsYXRlLmNhY2hlW25hbWVdID0gdGVtcGxhdGUuY29tcGlsZSh0bXBsKTtcbn07XG5cbnRlbXBsYXRlLmxvb2t1cCA9IGZ1bmN0aW9uICgpIHtcbiAgW10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24veC10ZW1wbGF0ZVwiXVtkYXRhLXRlbXBsYXRlXScpLCBmdW5jdGlvbiAodG1wbCkge1xuICAgIHRlbXBsYXRlLnB1dCh0bXBsLmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpLCB0bXBsLnRleHQpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7XG4iLCJcbnZhciBfID0gcmVxdWlyZSgndmFuaWxsYS10b29scycpO1xuXG5fLmV4dGVuZChfLFxuICByZXF1aXJlKCduaXRyby10b29scy9saXN0cycpLFxuICByZXF1aXJlKCduaXRyby10b29scy9wYXRoJyksXG4gIHJlcXVpcmUoJy4vY29sb3JzJyksXG4gIHJlcXVpcmUoJy4vYnJvd3Nlci10b29scycpLFxuICByZXF1aXJlKCcuL2Ftb3VudC1wcmljZScpLFxuICB7XG4gICAgbGl2ZURPTTogcmVxdWlyZSgnLi9saXZlLWRvbScpLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RlbXBsYXRlJyksXG4gICAgb25NZXNzYWdlOiByZXF1aXJlKCcuL21lc3NhZ2UtbGlzdGVuZXInKSxcbiAgICBkZXNlcmlhbGl6ZTogcmVxdWlyZSgnLi9kZXNlcmlhbGl6ZScpXG4gIH1cbik7XG5cbl8ubG9nID0gcmVxdWlyZSgnLi9sb2cnKTtcbl8ubm9vcCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gXztcbiJdfQ==