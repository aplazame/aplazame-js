(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '0.0.365';
},{}],2:[function(require,module,exports){
module.exports = '@keyframes aplazame-blur{0%{-webkit-filter:blur(0);filter:blur(0);}to{-webkit-filter:blur(3px);filter:blur(3px)}}body.aplazame-blur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-filter:blur(3px);filter:blur(3px)}@media (min-width:601px){body.aplazame-blur>:not(.aplazame-modal):not(.aplazame-overlay){animation-duration:.4s;animation-name:aplazame-blur}}body.aplazame-unblur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-filter:blur(0);filter:blur(0)}@media (min-width:601px){body.aplazame-unblur>:not(.aplazame-modal):not(.aplazame-overlay){animation-duration:.4s;animation-name:aplazame-blur;animation-direction:reverse}}';
},{}],3:[function(require,module,exports){
module.exports = '@keyframes aplazame-logo-smile{0%{transform:rotate(0deg);}90%{transform:rotate(2turn)}to{transform:rotate(2turn)}}@keyframes aplazame-logo-short{0%{transform:rotate(0deg)}30%{transform:rotate(0deg)}90%{transform:rotate(1turn)}to{transform:rotate(1turn)}}@keyframes aplazame-logo-large{0%{transform:rotate(0deg)}60%{transform:rotate(1turn)}90%{transform:rotate(1turn)}to{transform:rotate(1turn)}}.logo-aplazame{position:relative;display:inline-block;width:150px;height:150px}.logo-aplazame .line-large,.logo-aplazame .line-short,.logo-aplazame .smile{stroke:#ddd}.logo-aplazame .smile-outline{stroke:#485259}@media (min-width:480px){.logo-aplazame{width:200px;height:200px}}.logo-aplazame svg{position:absolute;top:0;left:0;width:100%;height:100%}.logo-aplazame.animate .line-large,.logo-aplazame.animate .line-short,.logo-aplazame.animate .smile{transform:translateZ(0);animation-fill-mode:forwards;animation-duration:1.5s;animation-iteration-count:infinite}.logo-aplazame.animate .smile{animation-name:aplazame-logo-smile}.logo-aplazame.animate .line-large{animation-name:aplazame-logo-large}.logo-aplazame.animate .line-short{animation-name:aplazame-logo-short}';
},{}],4:[function(require,module,exports){
module.exports = '.aplazame-modal{height:100%;height:100vh;position:relative;z-index:2147483647;}body{overflow:hidden}@media (max-width:600px){html{background-color:#333a3e}body,html{height:100vh;margin:0;padding:0}body>:not(.aplazame-modal){display:none}}@media (min-width:601px){.aplazame-modal{position:fixed}}';
},{}],5:[function(require,module,exports){
module.exports = '@keyframes aplazame-overlay{0%{opacity:0;}to{opacity:1}}.aplazame-overlay{font-family:Montserrat,sans-serif;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;width:100vw;height:100vh;background:rgba(53,64,71,.9);text-align:center;z-index:2147483646;transform:translateZ(0)}.aplazame-overlay:before{content:\'\';display:block;height:50vh}.aplazame-logo-wrapper{display:inline-block;margin-top:-50%}.aplazame-overlay-loading-text{color:#95a6b1;margin-top:14px;font-size:14px}.aplazame-overlay-loading-text .text-error{color:#f08080}.aplazame-overlay-loading-text a{color:#f5f5f5;display:inline-block;text-decoration:none}.aplazame-overlay-loading-text a:hover{border-bottom:1px dotted #f5f5f5}.aplazame-overlay{animation-fill-mode:forwards}.aplazame-overlay.aplazame-overlay-hide,.aplazame-overlay.aplazame-overlay-show{transform:translateZ(0);animation-duration:.6s;animation-name:aplazame-overlay}.aplazame-overlay.aplazame-overlay-hide{animation-direction:reverse}';
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

var RE_contentType = /([^\/]+)\/([^+]+\+)?([^;]*)/;
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
    scrollRoot = { scrollTop: 0 },
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
		  aux = duration;
		  duration = cb;
		  cb = typeof aux === 'function' ? aux : noop;
		}

		var scrollFrom = scroll.top(),
		    scrollDelta = value - scrollFrom;

		scrollAnimation.stop();
		scroll.inAnimation = true;
		scrollAnimation = animate(function (progress) {
		  scroll.goto( scrollFrom + scrollDelta*progress );
		}, function () {
		  scroll.inAnimation = false;
		  (cb || noop)();
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

  var aplazame = require('./core/core');

  aplazame.checkout = require('./apps/checkout');
  aplazame.button = require('./apps/button');
  aplazame.simulator = require('./apps/simulator');
  aplazame.modal = require('./apps/modal');

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

  global.aplazame = aplazame;

  require('./loaders/data-aplazame')(global.aplazame);
  aplazame._.ready(function () {
    var buttonsLookup = require('./loaders/data-button')(aplazame),
        widgetsLookup = require('./loaders/data-simulator')(aplazame),
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

});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../.tmp/aplazame-version":1,"./apps/button":43,"./apps/checkout":44,"./apps/http-service":45,"./apps/modal":47,"./apps/simulator":48,"./core/api":50,"./core/core":51,"./loaders/data-aplazame":53,"./loaders/data-button":54,"./loaders/data-simulator":55,"./sandbox":56,"./tools/log":63}],43:[function(require,module,exports){
'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools');

function getCartPrice () {
  var ttp = document.querySelector('#total_price');
  return ttp && ttp.textContent && _.parsePrice( ttp.textContent );
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
        } else if( priceElement.textContent ) {
          amount = priceElement.textContent;
        } else if( priceElement.getAttribute('content') ) {
          amount = priceElement.getAttribute('content');
        }
      }

      return amount && _.parsePrice( amount );
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

      widget.render = function () {
        widget.message('choices', {
          amount: meta.amount,
          choice: meta.choices.reduce(maxInstalments, null),
          choices: meta.choices,
          options: meta.options
        });
      };

      widget.on('choices.updating', function (e) {
        widget.message('loading');
      });

    } else {
      _.template.put('widget-raw', require('../../.tmp/simulator/templates/widget-raw') );
      widget = { el: document.createElement('div') };
      new Events(widget);

      widget.on('choices.updating', function (e) {
        widget.el.style.opacity = 0.5;
      });

      widget.render = function () {
        widget.el.style.opacity = null;
        widget.el.innerHTML = _.template('widget-raw', {
          getAmount: _.getAmount,
          amount: meta.amount,
          choice: meta.choices.reduce(maxInstalments, null),
          choices: meta.choices,
          options: meta.options
        });
      };

      widget.el.addEventListener('click', function () {
        window.postMessage({
          aplazame: 'modal',
          event: 'open',
          name: 'instalments',
          data: {
            size: 'lg',
            card: {
              className: 'modal-instalments-info'
            },
            template: _.template.compile( require('../../.tmp/simulator/templates/modal-instalments') )({
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

    widget.render();

    widget.on('message:require.choices choices.update', function (e, message) {
      if( message && message.simulatorId && message.simulatorId !== id ) {
        return;
      }
      // console.log(e, meta, message);
      widget.render();
    });

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
      // if( meta.widget && meta.widget.message ) {
      if( meta.widget ) {
        // meta.widget.message('loading');
        meta.widget.trigger('choices.updating');
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
    running = false,
    waiting = false,
    lastTarget = null,
    triggerListeners = function (target) {
      for( var i = 0, n = suscriptors.length; i < n ; i++ ) {
        suscriptors[i](target);
      }
    },
    waitTimer = function () {
      waiting = true;
      setTimeout(function () {
        waiting = false;
        if( lastTarget ) {
          var target = lastTarget;
          lastTarget = null;
          waitTimer();
          triggerListeners(lastTarget);
        }
      }, 250);
    };

function initLiveDOM () {

  require('./browser-tools').ready(function () {
    document.body.addEventListener('DOMSubtreeModified', function (event) {
      if( waiting ) {
        lastTarget = event.target;
        return;
      }
      waitTimer();
      triggerListeners(event.target);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8udG1wL2FwbGF6YW1lLXZlcnNpb24uanMiLCIuLi8udG1wL2Nzcy1oYWNrcy9ibHVyLmpzIiwiLi4vLnRtcC9jc3MtaGFja3MvbG9nby5qcyIsIi4uLy50bXAvY3NzLWhhY2tzL21vZGFsLmpzIiwiLi4vLnRtcC9jc3MtaGFja3Mvb3ZlcmxheS5qcyIsIi4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy9tb2RhbC1pbnN0YWxtZW50cy5qcyIsIi4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy93aWRnZXQtcmF3LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Jlemllci1lYXNpbmcvc3JjL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NsYXNzbGlzdC5qcy9jbGFzc0xpc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvZXZlbnRzLXdyYXBwZXIvZXZlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2h0dHAtYnJvd3Nlci9zcmMvaHR0cC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy9fZXh0ZW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL25pdHJvLXRvb2xzL2V4dGVuZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy9rZXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbml0cm8tdG9vbHMvbGlzdHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbml0cm8tdG9vbHMvcGF0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3EtcHJvbWlzZS9saWIvcHJvbWlzZS1tZXRob2RzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3EtcHJvbWlzZS9saWIvcHJvbWlzZS1wb2x5ZmlsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9xLXByb21pc2UvbGliL3EuanMiLCIuLi9ub2RlX21vZHVsZXMvcS1wcm9taXNlL2xpYi9xaXplci5qcyIsIi4uL25vZGVfbW9kdWxlcy9xLXByb21pc2Uvbm8tbmF0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9icm93c2VyLXBvbHlmaWxscy9kYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMvZG9tLWNsb3Nlc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9icm93c2VyLXBvbHlmaWxscy9ldmVudC1saXN0ZW5lci5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2Jyb3dzZXItcG9seWZpbGxzL21hdGNoLW1lZGlhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMvbWF0Y2hlcy1zZWxlY3Rvci5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2J1bmRsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2RlZmVycmVkL2FuaW1hdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9kZWZlcnJlZC93YWl0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvZm4vZGVib3VuY2UuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9mbi9yZWFkeS5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2ZuL3RlbXBsYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvZG9tLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvZXZlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvbm9ybWFsaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsL2FuaW1hdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy91dGlscy9zY3JvbGwvYnVuZGxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsL3RvcC1jbGFzcy5qcyIsImFwbGF6YW1lLmpzIiwiYXBwcy9idXR0b24uanMiLCJhcHBzL2NoZWNrb3V0LmpzIiwiYXBwcy9odHRwLXNlcnZpY2UuanMiLCJhcHBzL2xvYWRpbmctc3ZnLmpzIiwiYXBwcy9tb2RhbC5qcyIsImFwcHMvc2ltdWxhdG9yLmpzIiwiY29yZS9hcGktaHR0cC5qcyIsImNvcmUvYXBpLmpzIiwiY29yZS9jb3JlLmpzIiwiY29yZS9pbml0LmpzIiwibG9hZGVycy9kYXRhLWFwbGF6YW1lLmpzIiwibG9hZGVycy9kYXRhLWJ1dHRvbi5qcyIsImxvYWRlcnMvZGF0YS1zaW11bGF0b3IuanMiLCJzYW5kYm94LmpzIiwidG9vbHMvYW1vdW50LXByaWNlLmpzIiwidG9vbHMvYnJvd3Nlci10b29scy5qcyIsInRvb2xzL2NvbG9ycy5qcyIsInRvb2xzL2Nzcy1oYWNrLmpzIiwidG9vbHMvZGVzZXJpYWxpemUuanMiLCJ0b29scy9saXZlLWRvbS5qcyIsInRvb2xzL2xvZy5qcyIsInRvb2xzL21lc3NhZ2UtbGlzdGVuZXIuanMiLCJ0b29scy90ZW1wbGF0ZS5qcyIsInRvb2xzL3Rvb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzVGQTtBQUNBO0FBQ0E7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9ICcwLjAuMzY1JzsiLCJtb2R1bGUuZXhwb3J0cyA9ICdAa2V5ZnJhbWVzIGFwbGF6YW1lLWJsdXJ7MCV7LXdlYmtpdC1maWx0ZXI6Ymx1cigwKTtmaWx0ZXI6Ymx1cigwKTt9dG97LXdlYmtpdC1maWx0ZXI6Ymx1cigzcHgpO2ZpbHRlcjpibHVyKDNweCl9fWJvZHkuYXBsYXphbWUtYmx1cj46bm90KC5hcGxhemFtZS1tb2RhbCk6bm90KC5hcGxhemFtZS1vdmVybGF5KXstd2Via2l0LWZpbHRlcjpibHVyKDNweCk7ZmlsdGVyOmJsdXIoM3B4KX1AbWVkaWEgKG1pbi13aWR0aDo2MDFweCl7Ym9keS5hcGxhemFtZS1ibHVyPjpub3QoLmFwbGF6YW1lLW1vZGFsKTpub3QoLmFwbGF6YW1lLW92ZXJsYXkpe2FuaW1hdGlvbi1kdXJhdGlvbjouNHM7YW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtYmx1cn19Ym9keS5hcGxhemFtZS11bmJsdXI+Om5vdCguYXBsYXphbWUtbW9kYWwpOm5vdCguYXBsYXphbWUtb3ZlcmxheSl7LXdlYmtpdC1maWx0ZXI6Ymx1cigwKTtmaWx0ZXI6Ymx1cigwKX1AbWVkaWEgKG1pbi13aWR0aDo2MDFweCl7Ym9keS5hcGxhemFtZS11bmJsdXI+Om5vdCguYXBsYXphbWUtbW9kYWwpOm5vdCguYXBsYXphbWUtb3ZlcmxheSl7YW5pbWF0aW9uLWR1cmF0aW9uOi40czthbmltYXRpb24tbmFtZTphcGxhemFtZS1ibHVyO2FuaW1hdGlvbi1kaXJlY3Rpb246cmV2ZXJzZX19JzsiLCJtb2R1bGUuZXhwb3J0cyA9ICdAa2V5ZnJhbWVzIGFwbGF6YW1lLWxvZ28tc21pbGV7MCV7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt9OTAle3RyYW5zZm9ybTpyb3RhdGUoMnR1cm4pfXRve3RyYW5zZm9ybTpyb3RhdGUoMnR1cm4pfX1Aa2V5ZnJhbWVzIGFwbGF6YW1lLWxvZ28tc2hvcnR7MCV7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX0zMCV7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX05MCV7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9dG97dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fUBrZXlmcmFtZXMgYXBsYXphbWUtbG9nby1sYXJnZXswJXt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTYwJXt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX05MCV7dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9dG97dHJhbnNmb3JtOnJvdGF0ZSgxdHVybil9fS5sb2dvLWFwbGF6YW1le3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjE1MHB4O2hlaWdodDoxNTBweH0ubG9nby1hcGxhemFtZSAubGluZS1sYXJnZSwubG9nby1hcGxhemFtZSAubGluZS1zaG9ydCwubG9nby1hcGxhemFtZSAuc21pbGV7c3Ryb2tlOiNkZGR9LmxvZ28tYXBsYXphbWUgLnNtaWxlLW91dGxpbmV7c3Ryb2tlOiM0ODUyNTl9QG1lZGlhIChtaW4td2lkdGg6NDgwcHgpey5sb2dvLWFwbGF6YW1le3dpZHRoOjIwMHB4O2hlaWdodDoyMDBweH19LmxvZ28tYXBsYXphbWUgc3Zne3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5sb2dvLWFwbGF6YW1lLmFuaW1hdGUgLmxpbmUtbGFyZ2UsLmxvZ28tYXBsYXphbWUuYW5pbWF0ZSAubGluZS1zaG9ydCwubG9nby1hcGxhemFtZS5hbmltYXRlIC5zbWlsZXt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTthbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO2FuaW1hdGlvbi1kdXJhdGlvbjoxLjVzO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGV9LmxvZ28tYXBsYXphbWUuYW5pbWF0ZSAuc21pbGV7YW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtbG9nby1zbWlsZX0ubG9nby1hcGxhemFtZS5hbmltYXRlIC5saW5lLWxhcmdle2FuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWxvZ28tbGFyZ2V9LmxvZ28tYXBsYXphbWUuYW5pbWF0ZSAubGluZS1zaG9ydHthbmltYXRpb24tbmFtZTphcGxhemFtZS1sb2dvLXNob3J0fSc7IiwibW9kdWxlLmV4cG9ydHMgPSAnLmFwbGF6YW1lLW1vZGFse2hlaWdodDoxMDAlO2hlaWdodDoxMDB2aDtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjIxNDc0ODM2NDc7fWJvZHl7b3ZlcmZsb3c6aGlkZGVufUBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KXtodG1se2JhY2tncm91bmQtY29sb3I6IzMzM2EzZX1ib2R5LGh0bWx7aGVpZ2h0OjEwMHZoO21hcmdpbjowO3BhZGRpbmc6MH1ib2R5Pjpub3QoLmFwbGF6YW1lLW1vZGFsKXtkaXNwbGF5Om5vbmV9fUBtZWRpYSAobWluLXdpZHRoOjYwMXB4KXsuYXBsYXphbWUtbW9kYWx7cG9zaXRpb246Zml4ZWR9fSc7IiwibW9kdWxlLmV4cG9ydHMgPSAnQGtleWZyYW1lcyBhcGxhemFtZS1vdmVybGF5ezAle29wYWNpdHk6MDt9dG97b3BhY2l0eToxfX0uYXBsYXphbWUtb3ZlcmxheXtmb250LWZhbWlseTpNb250c2VycmF0LHNhbnMtc2VyaWY7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDB2dztoZWlnaHQ6MTAwdmg7YmFja2dyb3VuZDpyZ2JhKDUzLDY0LDcxLC45KTt0ZXh0LWFsaWduOmNlbnRlcjt6LWluZGV4OjIxNDc0ODM2NDY7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9LmFwbGF6YW1lLW92ZXJsYXk6YmVmb3Jle2NvbnRlbnQ6XFwnXFwnO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjUwdmh9LmFwbGF6YW1lLWxvZ28td3JhcHBlcntkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tdG9wOi01MCV9LmFwbGF6YW1lLW92ZXJsYXktbG9hZGluZy10ZXh0e2NvbG9yOiM5NWE2YjE7bWFyZ2luLXRvcDoxNHB4O2ZvbnQtc2l6ZToxNHB4fS5hcGxhemFtZS1vdmVybGF5LWxvYWRpbmctdGV4dCAudGV4dC1lcnJvcntjb2xvcjojZjA4MDgwfS5hcGxhemFtZS1vdmVybGF5LWxvYWRpbmctdGV4dCBhe2NvbG9yOiNmNWY1ZjU7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1kZWNvcmF0aW9uOm5vbmV9LmFwbGF6YW1lLW92ZXJsYXktbG9hZGluZy10ZXh0IGE6aG92ZXJ7Ym9yZGVyLWJvdHRvbToxcHggZG90dGVkICNmNWY1ZjV9LmFwbGF6YW1lLW92ZXJsYXl7YW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkc30uYXBsYXphbWUtb3ZlcmxheS5hcGxhemFtZS1vdmVybGF5LWhpZGUsLmFwbGF6YW1lLW92ZXJsYXkuYXBsYXphbWUtb3ZlcmxheS1zaG93e3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2FuaW1hdGlvbi1kdXJhdGlvbjouNnM7YW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtb3ZlcmxheX0uYXBsYXphbWUtb3ZlcmxheS5hcGxhemFtZS1vdmVybGF5LWhpZGV7YW5pbWF0aW9uLWRpcmVjdGlvbjpyZXZlcnNlfSc7IiwibW9kdWxlLmV4cG9ydHMgPSAnPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPiAgPGhlYWRlciBjbGFzcz1cImFwbGF6YW1lXCI+PC9oZWFkZXI+ICA8c2VjdGlvbiBjbGFzcz1cImluZm9cIj4gICAgRWxpZ2UgZWwgbsO6bWVybyBkZSBtZXNlcyB5IGxhIGN1b3RhIHF1ZSBtw6FzIHRlIGNvbnZlbmdhbiAgPC9zZWN0aW9uPiAgPGRpdiBjbGFzcz1cImNob2ljZXMtd3JhcHBlclwiPiAgICA8JSBmb3IoIHZhciBpID0gY2hvaWNlcy5sZW5ndGggLSAxIDsgaSA+PSAwIDsgaS0tICkgeyAlPiAgICA8YnV0dG9uIG5nLXJlcGVhdD1cImNob2ljZSBpbiBjaG9pY2VzXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2hvaWNlXCIgbmctY2xpY2s9XCJzZWxlY3RDaG9pY2UoY2hvaWNlKVwiIG5nLWNsYXNzPVwieyBhY3RpdmU6IGNob2ljZSA9PT0gY3VycmVudENob2ljZSB9XCI+ICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj4gICAgICAgIDxkaXYgY2xhc3M9XCJudW0taW5zdGFsbWVudHNcIj4gICAgICAgICAgPHNwYW4+PCU9IGNob2ljZXNbaV0ubnVtX2luc3RhbG1lbnRzICU+PC9zcGFuPiZuYnNwOzxzcGFuPjwlPSBtb250aHMoY2hvaWNlc1tpXS5udW1faW5zdGFsbWVudHMpICU+PC9zcGFuPiAgICAgICAgPC9kaXY+ICAgICAgICA8ZGl2IGNsYXNzPVwiYW1vdW50XCI+ICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYW1vdW50LWFtb3VudFwiPjwlPSBnZXRBbW91bnQoY2hvaWNlc1tpXS5hbW91bnQpICU+PC9zcGFuPjwhLS0gICAgICAgICAgLS0+PHNwYW4gY2xhc3M9XCJhbW91bnQtY3VycmVuY3lcIj7igqw8L3NwYW4+PCEtLSAgICAgICAgICAtLT48c3BhbiBjbGFzcz1cImFtb3VudC1wZXItbW9udGhcIj4vbWVzPC9zcGFuPjwvZGl2PiAgICAgIDwvZGl2PiAgICA8L2J1dHRvbj4gICAgPCUgfSAlPiAgPC9kaXY+ICA8c2VjdGlvbiBjbGFzcz1cInRhZVwiPlRBRSBtw6F4aW1vOiA8JT0gZ2V0QW1vdW50KGNob2ljZXNbMF0uYW5udWFsX2VxdWl2YWxlbnQpICU+JTwvc2VjdGlvbj4gIDxzZWN0aW9uIGNsYXNzPVwiaG93LWl0LXdvcmtzXCI+ICAgIDxoZWFkZXI+wr9Dw7NtbyBmdW5jaW9uYT88L2hlYWRlcj4gICAgPGRpdiBjbGFzcz1cImluZm8td3JhcHBlclwiPiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+ICAgICAgICA8aDM+RWxpZ2UgQXBsYXphbWU8L2gzPiAgICAgICAgPHA+ZW4gbGEgdGllbmRhLCBjdWFuZG8gdmF5YXMgYSBwYWdhciBlbCBwZWRpZG8uPC9wPiAgICAgIDwvZGl2PiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+ICAgICAgICA8aDM+RGVjaWRlIGPDs21vIHF1aWVyZXMgcGFnYXI8L2gzPiAgICAgICAgPHA+SGFzdGEgZW4gMTIgY3VvdGFzLCBwYWdhbmRvIGNvbiB0YXJqZXRhLjwvcD4gICAgICA8L2Rpdj4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPiAgICAgICAgPGgzPkRpc2ZydXRhIGRlIHR1IGNvbXByYTwvaDM+ICAgICAgICA8cD5EZXNkZSBBcGxhemFtZSBlc3RhcmVtb3MgZGlzcG9uaWJsZXMgcG9yIHNpIG5lY2VzaXRhcyBjdWFscXVpZXIgY29zYS4gwqFBIGRpc2ZydXRhciE8L3A+ICAgICAgPC9kaXY+ICAgIDwvZGl2PiAgPC9zZWN0aW9uPjwvZGl2PjxkaXYgY2xhc3M9XCJjdGFcIj4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBidXR0b24td3JhcHBlclwiPiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGxnIGJ0bi1ibG9jayB3aGl0ZVwiIHR5cGU9XCJidXR0b25cIiBkYXRhLW1vZGFsPVwiZGlzbWlzc1wiPlZvbHZlciBhIFRpZW5kYTwvYnV0dG9uPiAgPC9kaXY+ICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgYnV0dG9uLXdyYXBwZXJcIj4gICAgPGEgY2xhc3M9XCJidG4gbGcgYnRuLWJsb2NrXCIgaHJlZj1cImh0dHA6Ly9hcGxhemFtZS5jb20vaG93L2N1c3RvbWVycy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj7Cv1F1aWVyZXMgc2FiZXIgbcOhcz88L2E+ICA8L2Rpdj48L2Rpdj4nOyIsIm1vZHVsZS5leHBvcnRzID0gJzxkaXYgY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtaW5zdGFsbWVudHNcIj4gIDxzcGFuIGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LWZyb21cIj5kZXNkZSZuYnNwOzwvc3Bhbj48IS0tICAtLT48c3Ryb25nIGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LWFtb3VudFwiPiAgICA8c3BhbiBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1wcmljZVwiPjwlPSBnZXRBbW91bnQoY2hvaWNlLmFtb3VudCkgJT48L3NwYW4+PCEtLSAgICAtLT48c3BhbiBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1jdXJyZW5jeVwiPuKCrDwvc3Bhbj4gIDwvc3Ryb25nPjwhLS0gIC0tPjxzdWIgY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtcGVyLW1vbnRoXCI+L21lczwvc3ViPjwhLS0gIC0tPjxzcGFuIGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LWluc3RhbG1lbnRzLXdyYXBwZXJcIj4gICAgPHNwYW4+Jm5ic3A7ZW4mbmJzcDs8L3NwYW4+ICAgIDxlbSBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1pbnN0YWxtZW50cy1udW1cIj4xMjwvZW0+ICAgIDxzcGFuPiZuYnNwO2N1b3Rhczwvc3Bhbj4gIDwvc3Bhbj48L2Rpdj48c3R5bGUgcmVsPVwic3R5bGVzaGVldFwiPjwlPSBvcHRpb25zLndpZGdldC5zdHlsZXMgJT48L3N0eWxlPic7IiwiLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmdcbiAqIEJlemllckVhc2luZyAtIHVzZSBiZXppZXIgY3VydmUgZm9yIHRyYW5zaXRpb24gZWFzaW5nIGZ1bmN0aW9uXG4gKiBieSBHYcOrdGFuIFJlbmF1ZGVhdSAyMDE0IC0gMjAxNSDigJMgTUlUIExpY2Vuc2VcbiAqL1xuXG4vLyBUaGVzZSB2YWx1ZXMgYXJlIGVzdGFibGlzaGVkIGJ5IGVtcGlyaWNpc20gd2l0aCB0ZXN0cyAodHJhZGVvZmY6IHBlcmZvcm1hbmNlIFZTIHByZWNpc2lvbilcbnZhciBORVdUT05fSVRFUkFUSU9OUyA9IDQ7XG52YXIgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xudmFyIFNVQkRJVklTSU9OX1BSRUNJU0lPTiA9IDAuMDAwMDAwMTtcbnZhciBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwO1xuXG52YXIga1NwbGluZVRhYmxlU2l6ZSA9IDExO1xudmFyIGtTYW1wbGVTdGVwU2l6ZSA9IDEuMCAvIChrU3BsaW5lVGFibGVTaXplIC0gMS4wKTtcblxudmFyIGZsb2F0MzJBcnJheVN1cHBvcnRlZCA9IHR5cGVvZiBGbG9hdDMyQXJyYXkgPT09ICdmdW5jdGlvbic7XG5cbmZ1bmN0aW9uIEEgKGFBMSwgYUEyKSB7IHJldHVybiAxLjAgLSAzLjAgKiBhQTIgKyAzLjAgKiBhQTE7IH1cbmZ1bmN0aW9uIEIgKGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBhQTIgLSA2LjAgKiBhQTE7IH1cbmZ1bmN0aW9uIEMgKGFBMSkgICAgICB7IHJldHVybiAzLjAgKiBhQTE7IH1cblxuLy8gUmV0dXJucyB4KHQpIGdpdmVuIHQsIHgxLCBhbmQgeDIsIG9yIHkodCkgZ2l2ZW4gdCwgeTEsIGFuZCB5Mi5cbmZ1bmN0aW9uIGNhbGNCZXppZXIgKGFULCBhQTEsIGFBMikgeyByZXR1cm4gKChBKGFBMSwgYUEyKSAqIGFUICsgQihhQTEsIGFBMikpICogYVQgKyBDKGFBMSkpICogYVQ7IH1cblxuLy8gUmV0dXJucyBkeC9kdCBnaXZlbiB0LCB4MSwgYW5kIHgyLCBvciBkeS9kdCBnaXZlbiB0LCB5MSwgYW5kIHkyLlxuZnVuY3Rpb24gZ2V0U2xvcGUgKGFULCBhQTEsIGFBMikgeyByZXR1cm4gMy4wICogQShhQTEsIGFBMikgKiBhVCAqIGFUICsgMi4wICogQihhQTEsIGFBMikgKiBhVCArIEMoYUExKTsgfVxuXG5mdW5jdGlvbiBiaW5hcnlTdWJkaXZpZGUgKGFYLCBhQSwgYUIsIG1YMSwgbVgyKSB7XG4gIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuICBkbyB7XG4gICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICB9IGVsc2Uge1xuICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICB9XG4gIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG4gIHJldHVybiBjdXJyZW50VDtcbn1cblxuZnVuY3Rpb24gbmV3dG9uUmFwaHNvbkl0ZXJhdGUgKGFYLCBhR3Vlc3NULCBtWDEsIG1YMikge1xuIGZvciAodmFyIGkgPSAwOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgdmFyIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgIH1cbiAgIHZhciBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuIH1cbiByZXR1cm4gYUd1ZXNzVDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiZXppZXIgKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICBpZiAoISgwIDw9IG1YMSAmJiBtWDEgPD0gMSAmJiAwIDw9IG1YMiAmJiBtWDIgPD0gMSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JlemllciB4IHZhbHVlcyBtdXN0IGJlIGluIFswLCAxXSByYW5nZScpO1xuICB9XG5cbiAgLy8gUHJlY29tcHV0ZSBzYW1wbGVzIHRhYmxlXG4gIHZhciBzYW1wbGVWYWx1ZXMgPSBmbG9hdDMyQXJyYXlTdXBwb3J0ZWQgPyBuZXcgRmxvYXQzMkFycmF5KGtTcGxpbmVUYWJsZVNpemUpIDogbmV3IEFycmF5KGtTcGxpbmVUYWJsZVNpemUpO1xuICBpZiAobVgxICE9PSBtWTEgfHwgbVgyICE9PSBtWTIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtTcGxpbmVUYWJsZVNpemU7ICsraSkge1xuICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICoga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VEZvclggKGFYKSB7XG4gICAgdmFyIGludGVydmFsU3RhcnQgPSAwLjA7XG4gICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgIHZhciBsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDE7XG5cbiAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgaW50ZXJ2YWxTdGFydCArPSBrU2FtcGxlU3RlcFNpemU7XG4gICAgfVxuICAgIC0tY3VycmVudFNhbXBsZTtcblxuICAgIC8vIEludGVycG9sYXRlIHRvIHByb3ZpZGUgYW4gaW5pdGlhbCBndWVzcyBmb3IgdFxuICAgIHZhciBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICB2YXIgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBrU2FtcGxlU3RlcFNpemU7XG5cbiAgICB2YXIgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gQmV6aWVyRWFzaW5nICh4KSB7XG4gICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgICByZXR1cm4geDsgLy8gbGluZWFyXG4gICAgfVxuICAgIC8vIEJlY2F1c2UgSmF2YVNjcmlwdCBudW1iZXIgYXJlIGltcHJlY2lzZSwgd2Ugc2hvdWxkIGd1YXJhbnRlZSB0aGUgZXh0cmVtZXMgYXJlIHJpZ2h0LlxuICAgIGlmICh4ID09PSAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKHggPT09IDEpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gY2FsY0JlemllcihnZXRURm9yWCh4KSwgbVkxLCBtWTIpO1xuICB9O1xufTtcbiIsIi8qXG4gKiBjbGFzc0xpc3QuanM6IENyb3NzLWJyb3dzZXIgZnVsbCBlbGVtZW50LmNsYXNzTGlzdCBpbXBsZW1lbnRhdGlvbi5cbiAqIDEuMS4yMDE1MDMxMlxuICpcbiAqIEJ5IEVsaSBHcmV5LCBodHRwOi8vZWxpZ3JleS5jb21cbiAqIExpY2Vuc2U6IERlZGljYXRlZCB0byB0aGUgcHVibGljIGRvbWFpbi5cbiAqICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L2NsYXNzTGlzdC5qcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4gKi9cblxuLypnbG9iYWwgc2VsZiwgZG9jdW1lbnQsIERPTUV4Y2VwdGlvbiAqL1xuXG4vKiEgQHNvdXJjZSBodHRwOi8vcHVybC5lbGlncmV5LmNvbS9naXRodWIvY2xhc3NMaXN0LmpzL2Jsb2IvbWFzdGVyL2NsYXNzTGlzdC5qcyAqL1xuXG5pZiAoXCJkb2N1bWVudFwiIGluIHNlbGYpIHtcblxuLy8gRnVsbCBwb2x5ZmlsbCBmb3IgYnJvd3NlcnMgd2l0aCBubyBjbGFzc0xpc3Qgc3VwcG9ydFxuLy8gSW5jbHVkaW5nIElFIDwgRWRnZSBtaXNzaW5nIFNWR0VsZW1lbnQuY2xhc3NMaXN0XG5pZiAoIShcImNsYXNzTGlzdFwiIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJfXCIpKSBcblx0fHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TICYmICEoXCJjbGFzc0xpc3RcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFwiZ1wiKSkpIHtcblxuKGZ1bmN0aW9uICh2aWV3KSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5pZiAoISgnRWxlbWVudCcgaW4gdmlldykpIHJldHVybjtcblxudmFyXG5cdCAgY2xhc3NMaXN0UHJvcCA9IFwiY2xhc3NMaXN0XCJcblx0LCBwcm90b1Byb3AgPSBcInByb3RvdHlwZVwiXG5cdCwgZWxlbUN0clByb3RvID0gdmlldy5FbGVtZW50W3Byb3RvUHJvcF1cblx0LCBvYmpDdHIgPSBPYmplY3Rcblx0LCBzdHJUcmltID0gU3RyaW5nW3Byb3RvUHJvcF0udHJpbSB8fCBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgXCJcIik7XG5cdH1cblx0LCBhcnJJbmRleE9mID0gQXJyYXlbcHJvdG9Qcm9wXS5pbmRleE9mIHx8IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0dmFyXG5cdFx0XHQgIGkgPSAwXG5cdFx0XHQsIGxlbiA9IHRoaXMubGVuZ3RoXG5cdFx0O1xuXHRcdGZvciAoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkge1xuXHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIC0xO1xuXHR9XG5cdC8vIFZlbmRvcnM6IHBsZWFzZSBhbGxvdyBjb250ZW50IGNvZGUgdG8gaW5zdGFudGlhdGUgRE9NRXhjZXB0aW9uc1xuXHQsIERPTUV4ID0gZnVuY3Rpb24gKHR5cGUsIG1lc3NhZ2UpIHtcblx0XHR0aGlzLm5hbWUgPSB0eXBlO1xuXHRcdHRoaXMuY29kZSA9IERPTUV4Y2VwdGlvblt0eXBlXTtcblx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHR9XG5cdCwgY2hlY2tUb2tlbkFuZEdldEluZGV4ID0gZnVuY3Rpb24gKGNsYXNzTGlzdCwgdG9rZW4pIHtcblx0XHRpZiAodG9rZW4gPT09IFwiXCIpIHtcblx0XHRcdHRocm93IG5ldyBET01FeChcblx0XHRcdFx0ICBcIlNZTlRBWF9FUlJcIlxuXHRcdFx0XHQsIFwiQW4gaW52YWxpZCBvciBpbGxlZ2FsIHN0cmluZyB3YXMgc3BlY2lmaWVkXCJcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmICgvXFxzLy50ZXN0KHRva2VuKSkge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4KFxuXHRcdFx0XHQgIFwiSU5WQUxJRF9DSEFSQUNURVJfRVJSXCJcblx0XHRcdFx0LCBcIlN0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3RlclwiXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gYXJySW5kZXhPZi5jYWxsKGNsYXNzTGlzdCwgdG9rZW4pO1xuXHR9XG5cdCwgQ2xhc3NMaXN0ID0gZnVuY3Rpb24gKGVsZW0pIHtcblx0XHR2YXJcblx0XHRcdCAgdHJpbW1lZENsYXNzZXMgPSBzdHJUcmltLmNhbGwoZWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiKVxuXHRcdFx0LCBjbGFzc2VzID0gdHJpbW1lZENsYXNzZXMgPyB0cmltbWVkQ2xhc3Nlcy5zcGxpdCgvXFxzKy8pIDogW11cblx0XHRcdCwgaSA9IDBcblx0XHRcdCwgbGVuID0gY2xhc3Nlcy5sZW5ndGhcblx0XHQ7XG5cdFx0Zm9yICg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dGhpcy5wdXNoKGNsYXNzZXNbaV0pO1xuXHRcdH1cblx0XHR0aGlzLl91cGRhdGVDbGFzc05hbWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMudG9TdHJpbmcoKSk7XG5cdFx0fTtcblx0fVxuXHQsIGNsYXNzTGlzdFByb3RvID0gQ2xhc3NMaXN0W3Byb3RvUHJvcF0gPSBbXVxuXHQsIGNsYXNzTGlzdEdldHRlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gbmV3IENsYXNzTGlzdCh0aGlzKTtcblx0fVxuO1xuLy8gTW9zdCBET01FeGNlcHRpb24gaW1wbGVtZW50YXRpb25zIGRvbid0IGFsbG93IGNhbGxpbmcgRE9NRXhjZXB0aW9uJ3MgdG9TdHJpbmcoKVxuLy8gb24gbm9uLURPTUV4Y2VwdGlvbnMuIEVycm9yJ3MgdG9TdHJpbmcoKSBpcyBzdWZmaWNpZW50IGhlcmUuXG5ET01FeFtwcm90b1Byb3BdID0gRXJyb3JbcHJvdG9Qcm9wXTtcbmNsYXNzTGlzdFByb3RvLml0ZW0gPSBmdW5jdGlvbiAoaSkge1xuXHRyZXR1cm4gdGhpc1tpXSB8fCBudWxsO1xufTtcbmNsYXNzTGlzdFByb3RvLmNvbnRhaW5zID0gZnVuY3Rpb24gKHRva2VuKSB7XG5cdHRva2VuICs9IFwiXCI7XG5cdHJldHVybiBjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pICE9PSAtMTtcbn07XG5jbGFzc0xpc3RQcm90by5hZGQgPSBmdW5jdGlvbiAoKSB7XG5cdHZhclxuXHRcdCAgdG9rZW5zID0gYXJndW1lbnRzXG5cdFx0LCBpID0gMFxuXHRcdCwgbCA9IHRva2Vucy5sZW5ndGhcblx0XHQsIHRva2VuXG5cdFx0LCB1cGRhdGVkID0gZmFsc2Vcblx0O1xuXHRkbyB7XG5cdFx0dG9rZW4gPSB0b2tlbnNbaV0gKyBcIlwiO1xuXHRcdGlmIChjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pID09PSAtMSkge1xuXHRcdFx0dGhpcy5wdXNoKHRva2VuKTtcblx0XHRcdHVwZGF0ZWQgPSB0cnVlO1xuXHRcdH1cblx0fVxuXHR3aGlsZSAoKytpIDwgbCk7XG5cblx0aWYgKHVwZGF0ZWQpIHtcblx0XHR0aGlzLl91cGRhdGVDbGFzc05hbWUoKTtcblx0fVxufTtcbmNsYXNzTGlzdFByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0dmFyXG5cdFx0ICB0b2tlbnMgPSBhcmd1bWVudHNcblx0XHQsIGkgPSAwXG5cdFx0LCBsID0gdG9rZW5zLmxlbmd0aFxuXHRcdCwgdG9rZW5cblx0XHQsIHVwZGF0ZWQgPSBmYWxzZVxuXHRcdCwgaW5kZXhcblx0O1xuXHRkbyB7XG5cdFx0dG9rZW4gPSB0b2tlbnNbaV0gKyBcIlwiO1xuXHRcdGluZGV4ID0gY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKTtcblx0XHR3aGlsZSAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHR0aGlzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHR1cGRhdGVkID0gdHJ1ZTtcblx0XHRcdGluZGV4ID0gY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKTtcblx0XHR9XG5cdH1cblx0d2hpbGUgKCsraSA8IGwpO1xuXG5cdGlmICh1cGRhdGVkKSB7XG5cdFx0dGhpcy5fdXBkYXRlQ2xhc3NOYW1lKCk7XG5cdH1cbn07XG5jbGFzc0xpc3RQcm90by50b2dnbGUgPSBmdW5jdGlvbiAodG9rZW4sIGZvcmNlKSB7XG5cdHRva2VuICs9IFwiXCI7XG5cblx0dmFyXG5cdFx0ICByZXN1bHQgPSB0aGlzLmNvbnRhaW5zKHRva2VuKVxuXHRcdCwgbWV0aG9kID0gcmVzdWx0ID9cblx0XHRcdGZvcmNlICE9PSB0cnVlICYmIFwicmVtb3ZlXCJcblx0XHQ6XG5cdFx0XHRmb3JjZSAhPT0gZmFsc2UgJiYgXCJhZGRcIlxuXHQ7XG5cblx0aWYgKG1ldGhvZCkge1xuXHRcdHRoaXNbbWV0aG9kXSh0b2tlbik7XG5cdH1cblxuXHRpZiAoZm9yY2UgPT09IHRydWUgfHwgZm9yY2UgPT09IGZhbHNlKSB7XG5cdFx0cmV0dXJuIGZvcmNlO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAhcmVzdWx0O1xuXHR9XG59O1xuY2xhc3NMaXN0UHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLmpvaW4oXCIgXCIpO1xufTtcblxuaWYgKG9iakN0ci5kZWZpbmVQcm9wZXJ0eSkge1xuXHR2YXIgY2xhc3NMaXN0UHJvcERlc2MgPSB7XG5cdFx0ICBnZXQ6IGNsYXNzTGlzdEdldHRlclxuXHRcdCwgZW51bWVyYWJsZTogdHJ1ZVxuXHRcdCwgY29uZmlndXJhYmxlOiB0cnVlXG5cdH07XG5cdHRyeSB7XG5cdFx0b2JqQ3RyLmRlZmluZVByb3BlcnR5KGVsZW1DdHJQcm90bywgY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0UHJvcERlc2MpO1xuXHR9IGNhdGNoIChleCkgeyAvLyBJRSA4IGRvZXNuJ3Qgc3VwcG9ydCBlbnVtZXJhYmxlOnRydWVcblx0XHRpZiAoZXgubnVtYmVyID09PSAtMHg3RkY1RUM1NCkge1xuXHRcdFx0Y2xhc3NMaXN0UHJvcERlc2MuZW51bWVyYWJsZSA9IGZhbHNlO1xuXHRcdFx0b2JqQ3RyLmRlZmluZVByb3BlcnR5KGVsZW1DdHJQcm90bywgY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0UHJvcERlc2MpO1xuXHRcdH1cblx0fVxufSBlbHNlIGlmIChvYmpDdHJbcHJvdG9Qcm9wXS5fX2RlZmluZUdldHRlcl9fKSB7XG5cdGVsZW1DdHJQcm90by5fX2RlZmluZUdldHRlcl9fKGNsYXNzTGlzdFByb3AsIGNsYXNzTGlzdEdldHRlcik7XG59XG5cbn0oc2VsZikpO1xuXG59IGVsc2Uge1xuLy8gVGhlcmUgaXMgZnVsbCBvciBwYXJ0aWFsIG5hdGl2ZSBjbGFzc0xpc3Qgc3VwcG9ydCwgc28ganVzdCBjaGVjayBpZiB3ZSBuZWVkXG4vLyB0byBub3JtYWxpemUgdGhlIGFkZC9yZW1vdmUgYW5kIHRvZ2dsZSBBUElzLlxuXG4oZnVuY3Rpb24gKCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHR2YXIgdGVzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKTtcblxuXHR0ZXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYzFcIiwgXCJjMlwiKTtcblxuXHQvLyBQb2x5ZmlsbCBmb3IgSUUgMTAvMTEgYW5kIEZpcmVmb3ggPDI2LCB3aGVyZSBjbGFzc0xpc3QuYWRkIGFuZFxuXHQvLyBjbGFzc0xpc3QucmVtb3ZlIGV4aXN0IGJ1dCBzdXBwb3J0IG9ubHkgb25lIGFyZ3VtZW50IGF0IGEgdGltZS5cblx0aWYgKCF0ZXN0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjMlwiKSkge1xuXHRcdHZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbihtZXRob2QpIHtcblx0XHRcdHZhciBvcmlnaW5hbCA9IERPTVRva2VuTGlzdC5wcm90b3R5cGVbbWV0aG9kXTtcblxuXHRcdFx0RE9NVG9rZW5MaXN0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odG9rZW4pIHtcblx0XHRcdFx0dmFyIGksIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRcdFx0dG9rZW4gPSBhcmd1bWVudHNbaV07XG5cdFx0XHRcdFx0b3JpZ2luYWwuY2FsbCh0aGlzLCB0b2tlbik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fTtcblx0XHRjcmVhdGVNZXRob2QoJ2FkZCcpO1xuXHRcdGNyZWF0ZU1ldGhvZCgncmVtb3ZlJyk7XG5cdH1cblxuXHR0ZXN0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYzNcIiwgZmFsc2UpO1xuXG5cdC8vIFBvbHlmaWxsIGZvciBJRSAxMCBhbmQgRmlyZWZveCA8MjQsIHdoZXJlIGNsYXNzTGlzdC50b2dnbGUgZG9lcyBub3Rcblx0Ly8gc3VwcG9ydCB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuXHRpZiAodGVzdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYzNcIikpIHtcblx0XHR2YXIgX3RvZ2dsZSA9IERPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlO1xuXG5cdFx0RE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbih0b2tlbiwgZm9yY2UpIHtcblx0XHRcdGlmICgxIGluIGFyZ3VtZW50cyAmJiAhdGhpcy5jb250YWlucyh0b2tlbikgPT09ICFmb3JjZSkge1xuXHRcdFx0XHRyZXR1cm4gZm9yY2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gX3RvZ2dsZS5jYWxsKHRoaXMsIHRva2VuKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdH1cblxuXHR0ZXN0RWxlbWVudCA9IG51bGw7XG59KCkpO1xuXG59XG5cbn1cblxuIiwiLypcbiAqIGV2ZW50cy5qcyAtIFNpbmdsZSBsaWJyYXJ5IHRvIGhhbmRsZSBnZW5lcmljIGV2ZW50c1xuXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQgSmVzw7pzIE1hbnVlbCBHZXJtYWRlIENhc3Rpw7FlaXJhcyA8amVzdXNAZ2VybWFkZS5lcz5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICpcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblxuICBpZiAoIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICkge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2UgaWYoIHJvb3QgKSB7XG4gICAgaWYoIHJvb3QuZGVmaW5lICkge1xuICAgICAgcm9vdC5kZWZpbmUoJ0V2ZW50cycsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhY3RvcnkoKTsgfSApO1xuICAgIH0gZWxzZSBpZiggcm9vdC5hbmd1bGFyICkge1xuICAgICAgcm9vdC5hbmd1bGFyLm1vZHVsZSgnZXZlbnRzV3JhcHBlcicsIFtdKS5mYWN0b3J5KCdFdmVudHMnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWN0b3J5KHRydWUpOyB9KTtcbiAgICB9IGVsc2UgaWYoICFyb290LkV2ZW50cyApIHtcbiAgICAgIHJvb3QuRXZlbnRzID0gZmFjdG9yeSgpO1xuICAgIH1cbiAgfVxuXG59KSh0aGlzLCBmdW5jdGlvbiAobmcpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBtZXRob2RzID0ge1xuICAgIHN0ZDogeyBvbjogJ29uJywgb25jZTogJ29uY2UnLCBvZmY6ICdvZmYnLCB0cmlnZ2VyOiAndHJpZ2dlcicgfSxcbiAgICBzYWZlOiB7IG9uOiAnJCRvbicsIG9uY2U6ICckJG9uY2UnLCBvZmY6ICckJG9mZicsIHRyaWdnZXI6ICckJHRyaWdnZXInIH1cbiAgfTtcblxuICBmdW5jdGlvbiBFdmVudCAobmFtZSwgYXJncywgY2FsbGVyKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgIHRoaXMuJCRhcmdzID0gW3RoaXNdLmNvbmNhdChhcmdzKTtcbiAgICB0aGlzLmNhbGxlciA9IGNhbGxlcjtcbiAgfVxuXG4gIEV2ZW50LnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldE1ldGhvZHMgKG5nU2FmZSkge1xuICAgIHJldHVybiBuZ1NhZmUgPyBtZXRob2RzLnNhZmUgOiBtZXRob2RzLnN0ZDtcbiAgfVxuXG5cdGZ1bmN0aW9uIF9hZGRMaXN0ZW5lciAoaGFuZGxlcnMsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICBpZiggISBoYW5kbGVyIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaGFuZGxlcnMucHVzaCh7IGhhbmRsZXI6IGhhbmRsZXIsIGNvbnRleHQ6IGNvbnRleHQgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfdHJpZ2dlckV2ZW50IChlLCBoYW5kbGVycykge1xuICAgIGlmKCBoYW5kbGVycyApIHtcbiAgICAgIGZvciggdmFyIGkgPSAwLCBsZW4gPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICAgICAgaGFuZGxlcnNbaV0uaGFuZGxlci5hcHBseShlLmNhbGxlciwgZS4kJGFyZ3MpO1xuICAgICAgICBpZiggZS5kZWZhdWx0UHJldmVudGVkICkge1xuICAgICAgICAgIHJldHVybiBpICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGxlbjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfZW1wdHlMaXN0ZW5lciAoaGFuZGxlcnMpIHtcbiAgICBpZiggaGFuZGxlcnMgKSB7XG4gICAgICBoYW5kbGVycy5zcGxpY2UoMCwgaGFuZGxlcnMubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfcmVtb3ZlTGlzdGVuZXIgKGhhbmRsZXJzLCBoYW5kbGVyKSB7XG4gICAgaWYoIGhhbmRsZXJzICkge1xuICAgICAgZm9yKCB2YXIgaSA9IDAsIGxlbiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGxlbjsgKSB7XG4gICAgICAgIGlmKCBoYW5kbGVyc1tpXS5oYW5kbGVyID09PSBoYW5kbGVyICkge1xuICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBsZW4tLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBFdmVudHMgKHRhcmdldCwgbmdTYWZlKSB7XG4gICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHRoaXM7XG5cbiAgICB2YXIgbGlzdGVuZXJzID0ge30sXG4gICAgICAgIGxpc3RlbmVyc09uY2UgPSB7fSxcbiAgICAgICAgbWV0aG9kID0gZ2V0TWV0aG9kcyhuZ1NhZmUpO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tFYWNoIChfbWV0aG9kLCBldmVudE5hbWUsIGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICAgIGlmKCBldmVudE5hbWUgaW5zdGFuY2VvZiBBcnJheSApIHtcbiAgICAgICAgZXZlbnROYW1lLmZvckVhY2goZnVuY3Rpb24gKF9ldmVudE5hbWUpIHsgdGFyZ2V0W19tZXRob2RdKF9ldmVudE5hbWUsIGFyZzEsIGFyZzIsIGFyZzMpOyB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiggdHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZXZlbnQgbmFtZSBzaG91bGQgYmUgYSBzdHJpbmcnKTtcbiAgICAgIH1cbiAgICAgIGlmKCAvIC8udGVzdChldmVudE5hbWUpICkge1xuICAgICAgICB0YXJnZXRbX21ldGhvZF0oZXZlbnROYW1lLnNwbGl0KC8gKy8pLCBhcmcxLCBhcmcyLCBhcmczKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGFyZ2V0W21ldGhvZC5vbl0gPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgICBpZiggY2hlY2tFYWNoKG1ldGhvZC5vbiwgZXZlbnROYW1lLCBoYW5kbGVyLCBjb250ZXh0KSApIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICAgIGxpc3RlbmVyc1tldmVudE5hbWVdID0gbGlzdGVuZXJzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICBfYWRkTGlzdGVuZXIobGlzdGVuZXJzW2V2ZW50TmFtZV0sIGhhbmRsZXIsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuXG4gICAgdGFyZ2V0W21ldGhvZC5vbmNlXSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICAgIGlmKCBjaGVja0VhY2gobWV0aG9kLm9uY2UsIGV2ZW50TmFtZSwgaGFuZGxlciwgY29udGV4dCkgKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lcnNPbmNlW2V2ZW50TmFtZV0gPSBsaXN0ZW5lcnNPbmNlW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICBfYWRkTGlzdGVuZXIobGlzdGVuZXJzT25jZVtldmVudE5hbWVdLCBoYW5kbGVyLCBjb250ZXh0KTtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcblxuICAgIHRhcmdldFttZXRob2QudHJpZ2dlcl0gPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBhdHRycywgY2FsbGVyKSB7XG4gICAgICBpZiggY2hlY2tFYWNoKG1ldGhvZC50cmlnZ2VyLCBldmVudE5hbWUsIGF0dHJzLCBjYWxsZXIpICkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfVxuICAgICAgdmFyIGUgPSBuZXcgRXZlbnQoZXZlbnROYW1lLCBhdHRycywgY2FsbGVyKTtcblxuICAgICAgX3RyaWdnZXJFdmVudChlLCBsaXN0ZW5lcnNbZXZlbnROYW1lXSk7XG5cbiAgICAgIGlmKCAhZS5kZWZhdWx0UHJldmVudGVkICkge1xuICAgICAgICB2YXIgbGVuID0gX3RyaWdnZXJFdmVudChlLCBsaXN0ZW5lcnNPbmNlW2V2ZW50TmFtZV0pO1xuICAgICAgICBpZiggbGVuICkge1xuICAgICAgICAgIGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXS5zcGxpY2UoMCwgbGVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuXG4gICAgdGFyZ2V0W21ldGhvZC5vZmZdID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgICAgaWYoIGNoZWNrRWFjaChtZXRob2Qub2ZmLCBldmVudE5hbWUsIGhhbmRsZXIpICkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfVxuICAgICAgaWYoIGhhbmRsZXIgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgX2VtcHR5TGlzdGVuZXIobGlzdGVuZXJzW2V2ZW50TmFtZV0pO1xuICAgICAgICBfZW1wdHlMaXN0ZW5lcihsaXN0ZW5lcnNPbmNlW2V2ZW50TmFtZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKGxpc3RlbmVyc1tldmVudE5hbWVdLCBoYW5kbGVyKTtcbiAgICAgICAgX3JlbW92ZUxpc3RlbmVyKGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXSwgaGFuZGxlcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gRXZlbnRzO1xufSk7XG4iLCJcbi8vIGZhY3RvcnkgaHR0cFxuXG52YXIgJHEgPSByZXF1aXJlKCdxLXByb21pc2UnKSxcbiAgICBfID0gcmVxdWlyZSgnbml0cm8tdG9vbHMvZXh0ZW5kJyk7XG5cbmZ1bmN0aW9uIHJlc29sdmVGdW5jdGlvbnMgKG8sIGFyZ3MsIHRoaXNBcmcpIHtcbiAgZm9yKCB2YXIga2V5IGluIG8gKSB7XG4gICAgaWYoIG9ba2V5XSBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgICAgb1trZXldID0gb1trZXldLmFwcGx5KHRoaXNBcmcsIGFyZ3MgfHwgW10pO1xuICAgIH0gZWxzZSBpZiggdHlwZW9mIG9ba2V5XSA9PT0gJ29iamVjdCcgJiYgb1trZXldICE9PSBudWxsICkge1xuICAgICAgb1trZXldID0gcmVzb2x2ZUZ1bmN0aW9ucyhvW2tleV0sIGFyZ3MsIHRoaXNBcmcpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbztcbn1cblxuZnVuY3Rpb24gaGVhZGVyVG9UaXRsZVNsdWcodGV4dCkge1xuICAvLyBjb25zb2xlLmxvZygnaGVhZGVyVG9UaXRsZVNsdWcnLCB0ZXh0KTtcbiAgdmFyIGtleSA9IHRleHQucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgZnVuY3Rpb24gKG1hdGNoLCBsb3dlciwgdXBwZXIpIHtcbiAgICAgIHJldHVybiBsb3dlciArICctJyArIHVwcGVyO1xuICB9KTtcbiAga2V5ID0ga2V5WzBdLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyKDEpO1xuXG4gIHJldHVybiBrZXk7XG59XG5cbmZ1bmN0aW9uIGhlYWRlclRvQ2FtZWxDYXNlKHRleHQpIHtcbiAgdmFyIGtleSA9IHRleHRbMF0udG9Mb3dlckNhc2UoKSArIHRleHQuc3Vic3RyKDEpO1xuICByZXR1cm4ga2V5LnJlcGxhY2UoLyhbYS16XSktKFtBLVpdKS9nLCBmdW5jdGlvbiAobWF0Y2gsIGxvd2VyLCB1cHBlcikge1xuICAgIHJldHVybiBsb3dlciArIHVwcGVyO1xuICB9KTtcbn1cblxudmFyIFJFX2NvbnRlbnRUeXBlID0gLyhbXlxcL10rKVxcLyhbXitdK1xcKyk/KFteO10qKS87XG5mdW5jdGlvbiBwYXJzZUNvbnRlbnRUeXBlKGNvbnRlbnRUeXBlLCB0ZXh0LCB4bWwpIHtcbiAgdmFyIG1hdGNoZXMgPSBjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5tYXRjaChSRV9jb250ZW50VHlwZSk7XG4gIHJldHVybiBtYXRjaGVzICYmICggbWF0Y2hlc1szXSA9PT0gJ2pzb24nID8gSlNPTi5wYXJzZSh0ZXh0KSA6ICggbWF0Y2hlc1szXSA9PT0gJ3htbCcgPyB4bWwgOiB0ZXh0ICkgKTtcbn1cblxuZnVuY3Rpb24gX2dldEhlYWRlcnMgKHJlcXVlc3QpIHtcbiAgdmFyIGhlYWRlcnMgPSB7fTtcbiAgcmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS5yZXBsYWNlKC9cXHMqKFteXFw6XSspXFxzKlxcOlxccyooW15cXDtcXG5dKykvZywgZnVuY3Rpb24gKG1hdGNoLCBrZXksIHZhbHVlKSB7XG4gICAgICBoZWFkZXJzW2hlYWRlclRvQ2FtZWxDYXNlKGtleSldID0gdmFsdWUudHJpbSgpO1xuICB9KTtcblxuICByZXR1cm4gaGVhZGVycztcbn1cblxuZnVuY3Rpb24gaGVhZGVyc0dldHRlciAocmVxdWVzdCkge1xuICB2YXIgaGVhZGVyc0NhY2hlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmKCAhaGVhZGVyc0NhY2hlICkge1xuICAgICAgaGVhZGVyc0NhY2hlID0gX2dldEhlYWRlcnMocmVxdWVzdCk7XG4gICAgfVxuICAgIHJldHVybiBoZWFkZXJzQ2FjaGU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZVBhcmFtcyAocGFyYW1zKSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBmb3IoIHZhciBwYXJhbSBpbiBwYXJhbXMgKSB7XG4gICAgcmVzdWx0ICs9ICggcmVzdWx0ID8gJyYnIDogJycgKSArIHBhcmFtICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1twYXJhbV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGFkZEhlYWRlcnNUb1JlcXVlc3QgKHJlcSwgaGVhZGVycykge1xuICBmb3IoIHZhciBrZXkgaW4gaGVhZGVycyApIHtcbiAgICByZXEuc2V0UmVxdWVzdEhlYWRlciggaGVhZGVyVG9UaXRsZVNsdWcoa2V5KSwgaGVhZGVyc1trZXldICk7XG4gIH1cbn1cblxudmFyIGRlZmF1bHRTZXR0aW5ncyA9IHt9O1xuXG5odHRwLmNvbmZpZyA9IGZ1bmN0aW9uIChzZXR0aW5ncykge1xuICBfLm1lcmdlKGRlZmF1bHRTZXR0aW5ncywgc2V0dGluZ3MpO1xuICByZXR1cm4gaHR0cDtcbn07XG5cbmZ1bmN0aW9uIGh0dHAgKHVybCwgY29uZmlnKSB7XG5cbiAgaWYoIGNvbmZpZyA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnICYmIHVybCAhPT0gbnVsbCApIHtcbiAgICBjb25maWcgPSB1cmw7XG4gICAgdXJsID0gY29uZmlnLnVybDtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gICAgY29uZmlnLnVybCA9IHVybDtcbiAgfVxuXG4gIGNvbmZpZyA9IF8ubWVyZ2UoXy5jb3B5KGRlZmF1bHRTZXR0aW5ncyksXy5jb3B5KGNvbmZpZykpO1xuICBjb25maWcgPSByZXNvbHZlRnVuY3Rpb25zKCBjb25maWcsIFtjb25maWddLCBudWxsICk7XG4gIGNvbmZpZy5tZXRob2QgPSAoIGNvbmZpZy5tZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG5cbiAgaWYoIHR5cGVvZiBjb25maWcudXJsICE9PSAnc3RyaW5nJyApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VybCBzaG91bGQgYmUgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIHJldHVybiAkcShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICB2YXIgcmVxdWVzdCA9IG51bGw7XG5cbiAgICB0cnkgeyAvLyBGaXJlZm94LCBPcGVyYSA4LjArLCBTYWZhcmlcbiAgICAgICAgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIH0gY2F0Y2ggKGUpIHsgLy8gSW50ZXJuZXQgRXhwbG9yZXJcbiAgICAgICAgdHJ5IHsgcmVxdWVzdCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNc3htbDIuWE1MSFRUUCcpOyB9ICAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICAgICAgY2F0Y2ggKGVyKSB7IHJlcXVlc3QgPSBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTsgfSAgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgfVxuICAgIGlmKCByZXF1ZXN0ID09PSBudWxsICkgeyB0aHJvdyAnQnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IEhUVFAgUmVxdWVzdCc7IH1cblxuICAgIGlmKCBjb25maWcucGFyYW1zICkge1xuICAgICAgdXJsICs9ICggL1xcPy8udGVzdCh1cmwpID8gJyYnIDogJz8nICkgKyBzZXJpYWxpemVQYXJhbXMoIGNvbmZpZy5wYXJhbXMgKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oIGNvbmZpZy5tZXRob2QsIHVybCApO1xuXG4gICAgaWYoIGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgYWRkSGVhZGVyc1RvUmVxdWVzdChyZXF1ZXN0LCBjb25maWcuaGVhZGVycyB8fCB7fSApO1xuXG4gICAgcmVxdWVzdC5jb25maWcgPSBjb25maWc7XG4gICAgY29uZmlnLnN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpZiggcmVxdWVzdC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnIHx8IHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCApIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgIGRhdGE6IHBhcnNlQ29udGVudFR5cGUocmVxdWVzdC5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJyksIHJlcXVlc3QucmVzcG9uc2VUZXh0LCByZXF1ZXN0LnJlc3BvbnNlWE1MKSxcbiAgICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNHZXR0ZXIocmVxdWVzdCksXG4gICAgICAgICAgeGhyOiByZXF1ZXN0XG4gICAgICAgIH07XG4gICAgICAgIGlmKCByZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDAgKSB7XG4gICAgICAgICAgcmVzb2x2ZSggcmVzcG9uc2UgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoIHJlc3BvbnNlICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYoIGNvbmZpZy5jb250ZW50VHlwZSApIHtcblxuICAgICAgaWYoIGNvbmZpZy5kYXRhICYmIGNvbmZpZy5jb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nICYmIHR5cGVvZiBjb25maWcuZGF0YSAhPT0gJ3N0cmluZycgKSB7XG4gICAgICAgIGNvbmZpZy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoY29uZmlnLmRhdGEpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIGlmKCBjb25maWcuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhICkge1xuICAgICAgY29uZmlnLmNvbnRlbnRUeXBlID0gJ211bHRpcGFydC9mb3JtLWRhdGEnO1xuICAgIH0gZWxzZSBpZiggdHlwZW9mIGNvbmZpZy5kYXRhID09PSAnb2JqZWN0JyAmJiBjb25maWcuZGF0YSAhPT0gbnVsbCApIHtcbiAgICAgIGNvbmZpZy5jb250ZW50VHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJztcbiAgICAgIGlmKCBjb25maWcuZGF0YSApIHtcbiAgICAgICAgY29uZmlnLmRhdGEgPSBKU09OLnN0cmluZ2lmeShjb25maWcuZGF0YSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIGNvbmZpZy5jb250ZW50VHlwZSApIHtcbiAgICAgIC8vIGFkZEhlYWRlcnNUb1JlcXVlc3QocmVxdWVzdCwgeyBjb250ZW50VHlwZTogY29uZmlnLmNvbnRlbnRUeXBlIH0pO1xuICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCAnQ29udGVudC1UeXBlJywgY29uZmlnLmNvbnRlbnRUeXBlICk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5zZW5kKCBjb25maWcuZGF0YSApO1xuXG4gIH0pO1xufVxuXG5odHRwLnNlcmlhbGl6ZSA9IHNlcmlhbGl6ZVBhcmFtcztcblxuaHR0cC5ub0NhY2hlID0gZnVuY3Rpb24gKHVybCwgY29uZmlnKSB7XG4gIHVybCArPSAoIC9cXD8vLnRlc3QodXJsKSA/ICcmJyA6ICc/JyApICsgJ3Q9JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICByZXR1cm4gaHR0cCh1cmwsIGNvbmZpZyk7XG59O1xuXG5odHRwLnBsYWluUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgcmV0dXJuIHtcbiAgICBjb25maWc6IHJlc3BvbnNlLmNvbmZpZyxcbiAgICBkYXRhOiByZXNwb25zZS5kYXRhLFxuICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlLmhlYWRlcnMoKVxuICB9O1xufTtcblxuWydnZXQnLCAnZGVsZXRlJ10uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIGh0dHBbbWV0aG9kXSA9IGZ1bmN0aW9uICh1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiBodHRwKHVybCwgXy5leHRlbmQoXy5jb3B5KGNvbmZpZyB8fCB7fSksIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kXG4gICAgfSkpO1xuICB9O1xufSk7XG5cblsncG9zdCcsICdwdXQnLCAncGF0Y2gnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgaHR0cFttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIGh0dHAodXJsLCBfLmV4dGVuZChfLmNvcHkoY29uZmlnIHx8IHt9KSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICBkYXRhOiBkYXRhIHx8IHt9XG4gICAgfSkpO1xuICB9O1xufSk7XG5cbi8vIGJhc2VQYXRoXG5cbmZ1bmN0aW9uIGJhc2VQYXRoIChicCkge1xuICBpZiggL1xcLyQvLnRlc3QoYnApICkge1xuICAgIGJwID0gYnAucmVwbGFjZSgvXFwvJC8sJycpO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgIGlmKCAhcCApIHtcbiAgICAgIHJldHVybiBicDtcbiAgICB9XG4gICAgcmV0dXJuIGJwICsgKCAvXlxcLy8udGVzdChwKSA/ICcnIDogJy8nICkgKyBwO1xuICB9O1xufVxuXG5odHRwLmJhc2UgPSBmdW5jdGlvbiAodXJsLCBiYXNlQ29uZmlnKSB7XG4gIHZhciBicCA9IGJhc2VQYXRoKHVybCksXG4gICAgICBiYXNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGJhc2VkLmdldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcblxuICBiYXNlQ29uZmlnID0gYmFzZUNvbmZpZyB8fCB7fTtcblxuICBbJ2dldCcsICdkZWxldGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICBiYXNlZFttZXRob2RdID0gZnVuY3Rpb24gKHAsIF9jb25maWcgKSB7XG4gICAgICByZXR1cm4gaHR0cCggYnAocCksIF8ubWVyZ2UoXy5jb3B5KGJhc2VDb25maWcpLCBfY29uZmlnLCB7IG1ldGhvZDogbWV0aG9kIH0pKTtcbiAgICB9O1xuICB9KTtcblxuICBbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgYmFzZWRbbWV0aG9kXSA9IGZ1bmN0aW9uIChwLCBkYXRhLCBfY29uZmlnICkge1xuICAgICAgcmV0dXJuIGh0dHAoIGJwKHApLCBfLm1lcmdlKF8uY29weShiYXNlQ29uZmlnKSwgX2NvbmZpZywgeyBtZXRob2Q6IG1ldGhvZCwgZGF0YTogZGF0YSB9KSApO1xuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiBiYXNlZDtcbn07XG5cbmh0dHAucmVzcG9uc2VEYXRhID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBodHRwO1xuIiwiXG52YXIgYXJyYXlTaGlmdCA9IFtdLnNoaWZ0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG4gIHZhciBkZXN0ID0gYXJyYXlTaGlmdC5jYWxsKGFyZ3VtZW50cyksXG4gICAgICBzcmMgPSBhcnJheVNoaWZ0LmNhbGwoYXJndW1lbnRzKSxcbiAgICAgIGtleTtcblxuICB3aGlsZSggc3JjICkge1xuICAgIGZvcigga2V5IGluIHNyYykge1xuICAgICAgZGVzdFtrZXldID0gc3JjW2tleV07XG4gICAgfVxuICAgIHNyYyA9IGFycmF5U2hpZnQuY2FsbChhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuIiwiXG52YXIgUkVfJCQgPSAvXlxcJFxcJC8sXG4gICAgYXJyYXlTaGlmdCA9IFtdLnNoaWZ0LFxuICAgIHR5cGUgPSByZXF1aXJlKCcuL3R5cGUnKTtcblxuZnVuY3Rpb24gX21lcmdlICgpIHtcbiAgICB2YXIgZGVzdCA9IGFycmF5U2hpZnQuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICBzcmMgPSBhcnJheVNoaWZ0LmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAga2V5O1xuXG4gICAgd2hpbGUoIHNyYyApIHtcblxuICAgICAgaWYoIHR5cGVvZiBkZXN0ICE9PSB0eXBlb2Ygc3JjICkge1xuICAgICAgICAgIGRlc3QgPSB0eXBlLmlzQXJyYXkoc3JjKSA/IFtdIDogKCB0eXBlLmlzT2JqZWN0KHNyYykgPyB7fSA6IHNyYyApO1xuICAgICAgfVxuXG4gICAgICBpZiggdHlwZS5pc09iamVjdChzcmMpICkge1xuXG4gICAgICAgIGZvcigga2V5IGluIHNyYyApIHtcbiAgICAgICAgICBpZiggc3JjW2tleV0gPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIGRlc3Rba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9IGVsc2UgaWYoIHR5cGUuaXNBcnJheShkZXN0W2tleV0pICkge1xuICAgICAgICAgICAgW10ucHVzaC5hcHBseShkZXN0W2tleV0sIHNyY1trZXldKTtcbiAgICAgICAgICB9IGVsc2UgaWYoIHR5cGUuaXNPYmplY3QoZGVzdFtrZXldKSApIHtcbiAgICAgICAgICAgIGRlc3Rba2V5XSA9IF9tZXJnZShkZXN0W2tleV0sIHNyY1trZXldKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzdFtrZXldID0gc3JjW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzcmMgPSBhcnJheVNoaWZ0LmNhbGwoYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzdDtcbn1cblxuZnVuY3Rpb24gbWFwT2JqZWN0IChvLCBpdGVyYXRlZSkge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZvciggdmFyIGtleSBpbiBvICkge1xuICAgIHJlc3VsdFtrZXldID0gaXRlcmF0ZWUob1trZXldLCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIF9jb3B5IChzcmMpIHtcbiAgaWYoIHR5cGUuaXNBcnJheShzcmMpICkge1xuICAgIHJldHVybiBzcmMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gX2NvcHkoaXRlbSk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIGlmKCB0eXBlLmlzT2JqZWN0KHNyYykgKSB7XG4gICAgcmV0dXJuIG1hcE9iamVjdChzcmMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gX2NvcHkoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3JjO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZXh0ZW5kOiByZXF1aXJlKCcuL19leHRlbmQnKSxcbiAgbWVyZ2U6IF9tZXJnZSxcbiAgY29weTogX2NvcHlcbn07XG4iLCJcbnZhciB0eXBlID0gcmVxdWlyZSgnLi90eXBlJyk7XG5cbmZ1bmN0aW9uIF9rZXkgKG8sIF9rZXksIHZhbHVlKXtcbiAgICBpZiggIXR5cGUuaXNPYmplY3QobykgKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblxuICAgIHZhciBrZXlzID0gX2tleS5zcGxpdCgnLicpLFxuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG5cbiAgICBpZiggdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgIHdoaWxlIChrZXkpIHtcbiAgICAgICAgaWYoIHR5cGUuaXNPYmplY3QobykgJiYga2V5IGluIG8gKSB7XG4gICAgICAgICAgbyA9IG9ba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbztcbiAgICB9IGVsc2Uge1xuXG4gICAgICB3aGlsZSAoa2V5KSB7XG4gICAgICAgIGlmKCBvIGluc3RhbmNlb2YgT2JqZWN0ICkge1xuICAgICAgICAgIGlmICgga2V5cy5sZW5ndGggKXtcbiAgICAgICAgICAgIGlmKCAhKGtleSBpbiBvKSApIHtcbiAgICAgICAgICAgICAgb1trZXldID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvID0gb1trZXldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBrZXk6IF9rZXksXG4gIGtleXM6IE9iamVjdC5rZXlzXG59O1xuIiwiXG52YXIgdHlwZSA9IHJlcXVpcmUoJy4vdHlwZScpLFxuICAgIGFyclNvbWUgPSBBcnJheS5wcm90b3R5cGUuc29tZSxcbiAgICBhcnJFdmVyeSA9IEFycmF5LnByb3RvdHlwZS5ldmVyeSxcbiAgICBhcnJGb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2gsXG4gICAgYXJyTWFwID0gQXJyYXkucHJvdG90eXBlLm1hcCxcbiAgICBhcnJJbmRleE9mID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIF9lYWNoSW5MaXN0KCBsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyApIHtcbiAgcmV0dXJuIGFyckZvckVhY2guY2FsbChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyk7XG59XG5cbmZ1bmN0aW9uIF9lYWNoSW5PYmplY3QoIG8sIGl0ZXJhdGVlLCB0aGlzQXJnICkge1xuICBmb3IoIHZhciBrZXkgaW4gbyApIHtcbiAgICBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIFtvW2tleV0sIGtleV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9tYXRjaEFsbCAobywgZmlsdGVycykge1xuICBmb3IoIHZhciBrZXkgaW4gZmlsdGVycyApIHtcbiAgICBpZiggb1trZXldICE9PSBmaWx0ZXJzW2tleV0gKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBfbWF0Y2hBbnkgKG8sIGZpbHRlcnMpIHtcbiAgZm9yKCB2YXIga2V5IGluIGZpbHRlcnMgKSB7XG4gICAgaWYoIG9ba2V5XSA9PT0gZmlsdGVyc1trZXldICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhdGVlRm4gKGl0ZXJhdGVlKSB7XG4gIGlmKCB0eXBlLmlzRnVuY3Rpb24oaXRlcmF0ZWUpICkge1xuICAgIHJldHVybiBpdGVyYXRlZTtcbiAgfVxuXG4gIGlmKCB0eXBlLmlzT2JqZWN0KGl0ZXJhdGVlKSApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfbWF0Y2hBbGwoaXRlbSwgaXRlcmF0ZWUpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbSA9PT0gaXRlcmF0ZWU7XG4gIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGVhY2ggKG8sIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIGlmKCBvICYmIG8ubGVuZ3RoICkge1xuICAgIGFyckZvckVhY2guY2FsbChvLCBpdGVyYXRlZSwgdGhpc0FyZyk7XG4gIH0gZWxzZSBpZiggdHlwZS5pc09iamVjdChvKSApIHtcbiAgICBfZWFjaEluT2JqZWN0KG8sIGl0ZXJhdGVlLCB0aGlzQXJnIHx8IHRoaXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluZGV4T2YgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIGlmKCAhdHlwZS5pc0Z1bmN0aW9uKGl0ZXJhdGVlKSApIHtcbiAgICByZXR1cm4gYXJySW5kZXhPZi5jYWxsKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcbiAgfVxuXG4gIGZvciggdmFyIGkgPSAwLCBuID0gbGlzdC5sZW5ndGg7IGkgPCBuIDsgaSsrICkge1xuICAgIGlmKCBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3RbaV0sIGkpICkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gX2luZGV4QnkgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIHZhciBtYXAgPSB7fTtcblxuXHRmb3IoIHZhciBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcbiAgICBtYXBbaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2ldLCBpKV0gPSBsaXN0W2ldO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbmZ1bmN0aW9uIGluZGV4QnkgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG5cdGlmKCB0eXBlLmlzU3RyaW5nKGl0ZXJhdGVlKSApIHtcblx0XHRyZXR1cm4gX2luZGV4QnkobGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW1baXRlcmF0ZWVdOyB9LCB0aGlzQXJnKTtcblx0fSBlbHNlIGlmKCB0eXBlLmlzRnVuY3Rpb24oaXRlcmF0ZWUpICkge1xuXHRcdHJldHVybiBfaW5kZXhCeShsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyk7XG5cdH1cblx0cmV0dXJuIHt9O1xufVxuXG5mdW5jdGlvbiBzb21lIChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICBpdGVyYXRlZSA9IF9pdGVyYXRlZUZuKGl0ZXJhdGVlKTtcblxuICBpZiggbGlzdCAmJiBsaXN0Lmxlbmd0aCApIHtcbiAgICByZXR1cm4gYXJyU29tZS5jYWxsKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcbiAgfSBlbHNlIGlmKCB0eXBlLmlzT2JqZWN0KGxpc3QpICkge1xuICAgIGZvciggdmFyIGtleSBpbiBsaXN0ICkgIHtcbiAgICAgIGlmKCBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3Rba2V5XSwga2V5KSApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZXZlcnkgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIGl0ZXJhdGVlID0gX2l0ZXJhdGVlRm4oaXRlcmF0ZWUpO1xuXG4gIGlmKCBsaXN0ICYmIGxpc3QubGVuZ3RoICkge1xuICAgIHJldHVybiBhcnJFdmVyeS5jYWxsKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcbiAgfSBlbHNlIGlmKCB0eXBlLmlzT2JqZWN0KGxpc3QpICkge1xuICAgIGZvciggdmFyIGtleSBpbiBsaXN0ICkgIHtcbiAgICAgIGlmKCAhaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2tleV0sIGtleSkgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIG1hcCAobGlzdCwgX2l0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIHZhciBpdGVyYXRlZSA9IHR5cGUuaXNTdHJpbmcoX2l0ZXJhdGVlKSA/IGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtW19pdGVyYXRlZV07IH0gOiBfaXRlcmF0ZWU7XG5cbiAgaWYoIGxpc3QgJiYgbGlzdC5sZW5ndGggKSB7XG4gICAgcmV0dXJuIGFyck1hcC5jYWxsKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcbiAgfSBlbHNlIGlmKCB0eXBlLmlzT2JqZWN0KGxpc3QpICkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBmb3IoIHZhciBrZXkgaW4gbGlzdCApICB7XG4gICAgICByZXN1bHRba2V5XSA9IGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtrZXldLCBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuXG5mdW5jdGlvbiBtYXAyTGlzdCAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgaWYoIGxpc3QgJiYgbGlzdC5sZW5ndGggKSB7XG4gICAgcmV0dXJuIGFyck1hcC5jYWxsKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW10sIGkgPSAwO1xuICBmb3IoIHZhciBrZXkgaW4gbGlzdCApICB7XG4gICAgcmVzdWx0W2krK10gPSBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3Rba2V5XSwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlIChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICAgIHRoaXNBcmcgPSB0aGlzQXJnID09PSB1bmRlZmluZWQgPyB0aGlzIDogdGhpc0FyZztcblxuICAgIGl0ZXJhdGVlID0gX2l0ZXJhdGVlRm4oaXRlcmF0ZWUpO1xuXG4gICAgZm9yKCB2YXIgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdGlmKCBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3RbaV0pICkge1xuXHRcdFx0XHRcdFx0bGlzdC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdH1cblx0XHR9XG59XG5cbmZ1bmN0aW9uIGZpcnN0IChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuXHRcdHRoaXNBcmcgPSB0aGlzQXJnID09PSB1bmRlZmluZWQgPyB0aGlzIDogdGhpc0FyZztcblxuXHRcdGl0ZXJhdGVlID0gX2l0ZXJhdGVlRm4oaXRlcmF0ZWUpO1xuXG4gICAgdmFyIGkgPSBhcnJJbmRleE9mLmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuXG5cdFx0Zm9yKCB2YXIgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoIDsgaSA8IGxlbiA7IGkrKyApIHtcbiAgICAgICAgaWYoIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtpXSkgKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdFtpXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbGFzdCAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcblx0XHR0aGlzQXJnID0gdGhpc0FyZyA9PT0gdW5kZWZpbmVkID8gdGhpcyA6IHRoaXNBcmc7XG5cblx0XHRpdGVyYXRlZSA9IF9pdGVyYXRlZUZuKGl0ZXJhdGVlKTtcblxuXHRcdGZvciggdmFyIGkgPSBsaXN0Lmxlbmd0aCAtIDEgOyBpID49IDAgOyBpLS0gKSB7XG4gICAgICAgIGlmKCBpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3RbaV0pICkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3RbaV07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZpbHRlciAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgICB2YXIgbmV3TGlzdCA9IFtdO1xuXG5cdFx0dGhpc0FyZyA9IHRoaXNBcmcgPT09IHVuZGVmaW5lZCA/IHRoaXMgOiB0aGlzQXJnO1xuXHRcdGl0ZXJhdGVlID0gX2l0ZXJhdGVlRm4oaXRlcmF0ZWUpO1xuXG5cdFx0Zm9yKCB2YXIgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoIDsgaSA8IGxlbiA7IGkrKyApIHtcbiAgICAgICAgaWYoIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtpXSkgKSB7XG4gICAgICAgICAgICBuZXdMaXN0LnB1c2gobGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3TGlzdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIF9tYXRjaEFsbDogX21hdGNoQWxsLFxuICBfbWF0Y2hBbnk6IF9tYXRjaEFueSxcbiAgZmluZDogZmlyc3QsXG4gIGZpcnN0OiBmaXJzdCxcbiAgbGFzdDogbGFzdCxcbiAgZmlsdGVyOiBmaWx0ZXIsXG4gIGVhY2g6IGVhY2gsXG4gIHNvbWU6IHNvbWUsXG4gIGV2ZXJ5OiBldmVyeSxcbiAgbWFwOiBtYXAsXG4gIHBsdWNrOiBtYXAsXG4gIG1hcDJMaXN0OiBtYXAyTGlzdCxcbiAgaW5kZXhPZjogaW5kZXhPZixcbiAgaW5kZXhCeTogaW5kZXhCeSxcbiAgcmVtb3ZlOiByZW1vdmUsXG4gIGlmOiBmdW5jdGlvbiAocmVzdWx0LCBmbikge1xuICAgIGlmKCByZXN1bHQgIT09IHVuZGVmaW5lZCAmJiBmbiBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgICAgcmV0dXJuIGZuKHJlc3VsdCk7XG4gICAgfVxuICB9XG59O1xuIiwiXG52YXIgUkVfZG90c0JhY2sgPSAvW15cXC9dK1xcL1xcLlxcLlxcLy9nLFxuXHRjbGVhclN0ciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcnOyB9O1xuXG5mdW5jdGlvbiBfam9pblBhdGggKCkge1xuICAgIHZhciBwYXRoID0gKGFyZ3VtZW50c1swXSB8fCAnJykucmVwbGFjZSgvXFwvJC8sICcnKSxcbiAgICBcdGJhY2tEb3RzO1xuXG4gICAgZm9yKCB2YXIgaSA9IDEsIGxhc3QgPSBhcmd1bWVudHMubGVuZ3RoIC0gMSA7IGkgPCBsYXN0IDsgaSsrICkge1xuICAgICAgICBwYXRoICs9ICcvJyArIGFyZ3VtZW50c1tpXS5yZXBsYWNlKC9eXFwvfFxcLyQvZywgJycpO1xuICAgIH1cbiAgICBpZiggbGFzdCApIHtcbiAgICAgICAgcGF0aCArPSBhcmd1bWVudHNbbGFzdF0gPyAoICcvJyArIGFyZ3VtZW50c1tsYXN0XS5yZXBsYWNlKC9eXFwvLywgJycpICkgOiAnJztcbiAgICB9XG5cbiAgICB3aGlsZSggUkVfZG90c0JhY2sudGVzdChwYXRoKSApIHtcbiAgICBcdHBhdGggPSBwYXRoLnJlcGxhY2UoUkVfZG90c0JhY2ssIGNsZWFyU3RyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGpvaW5QYXRoOiBfam9pblBhdGhcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9pc1R5cGUgKHR5cGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgbyA9PT0gdHlwZSk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gX2luc3RhbmNlT2YgKF9jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gKCBvIGluc3RhbmNlb2YgX2NvbnN0cnVjdG9yICk7XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzVHlwZTogZnVuY3Rpb24gKHR5cGUsIHZhbHVlKSB7XG4gICAgaWYoIHZhbHVlID09PSB1bmRlZmluZWQgKSB7XG4gICAgICByZXR1cm4gX2lzVHlwZSh0eXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIF9pc1R5cGUodHlwZSkodmFsdWUpO1xuICB9LFxuICBpbnN0YW5jZU9mOiBmdW5jdGlvbiAoUHJvdG8sIHZhbHVlKSB7XG4gICAgaWYoIHZhbHVlID09PSB1bmRlZmluZWQgKSB7XG4gICAgICByZXR1cm4gX2luc3RhbmNlT2YoUHJvdG8pO1xuICAgIH1cbiAgICByZXR1cm4gX2luc3RhbmNlT2YoUHJvdG8pKHZhbHVlKTtcbiAgfSxcbiAgaXNPYmplY3Q6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvID09PSAnb2JqZWN0JyAmJiBvICE9PSBudWxsO1xuICB9LFxuXHRpc0Z1bmN0aW9uOiBfaXNUeXBlKCdmdW5jdGlvbicpLFxuXHRpc1N0cmluZzogX2lzVHlwZSgnc3RyaW5nJyksXG5cdGlzTnVtYmVyOiBfaXNUeXBlKCdudW1iZXInKSxcblx0aXNBcnJheTogQXJyYXkuaXNBcnJheSB8fCBfaW5zdGFuY2VPZihBcnJheSksXG5cdGlzRGF0ZTogX2luc3RhbmNlT2YoRGF0ZSksXG5cdGlzUmVnRXhwOiBfaW5zdGFuY2VPZihSZWdFeHApLFxuXHRpc0VsZW1lbnQ6IGZ1bmN0aW9uKG8pIHtcbiAgICByZXR1cm4gbyAmJiBvLm5vZGVUeXBlID09PSAxO1xuICB9LFxuICBpc1VuZGVmaW5lZDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XG4gIH1cbn07XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHFQcm9taXNlKSB7XG5cblx0ZnVuY3Rpb24gZWFjaCAoaXRlcmFibGUsIGhhbmRsZXIpIHtcblx0XHRmb3IoIHZhciBpID0gMCwgbiA9IGl0ZXJhYmxlLmxlbmd0aDsgaSA8IG4gOyBpKysgKSB7XG5cdFx0XHRoYW5kbGVyKGl0ZXJhYmxlW2ldLCBpKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBxUmVzb2x2ZSAocmVzdWx0KSB7XG5cdCAgcmV0dXJuIHFQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgcmVzb2x2ZShyZXN1bHQpOyB9KTtcblx0fTtcblxuXHRmdW5jdGlvbiBxUmVqZWN0IChyZWFzb24pIHtcblx0ICByZXR1cm4gcVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyByZWplY3QocmVhc29uKTsgfSk7XG5cdH07XG5cblx0dmFyIG1ldGhvZHMgPSB7XG5cdFx0cmVzb2x2ZTogcVJlc29sdmUsXG5cdFx0cmVqZWN0OiBxUmVqZWN0LFxuXHRcdGRlZmVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0ICB2YXIgZGVmZXJyZWQgPSB7fTtcblx0XHQgIGRlZmVycmVkLnByb21pc2UgPSBxUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0ICAgIGRlZmVycmVkLnJlc29sdmUgPSByZXNvbHZlO1xuXHRcdCAgICBkZWZlcnJlZC5yZWplY3QgPSByZWplY3Q7XG5cdFx0ICB9KTtcblx0XHQgIHJldHVybiBkZWZlcnJlZDtcblx0XHR9LFxuXHRcdGFsbDogZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG5cdFx0ICByZXR1cm4gcVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdCAgICB2YXIgcGVuZGluZyA9IGl0ZXJhYmxlLmxlbmd0aCxcblx0XHQgICAgICAgIHJlc3VsdHMgPSBbXTtcblx0XHQgICAgZWFjaChpdGVyYWJsZSwgZnVuY3Rpb24gKF9wcm9taXNlLCBpKSB7XG5cblx0XHQgICAgICAoIF9wcm9taXNlLnRoZW4gPyBfcHJvbWlzZSA6IHFSZXNvbHZlKF9wcm9taXNlKSApLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdCAgICAgICAgcmVzdWx0c1tpXSA9IHJlc3VsdDtcblx0XHQgICAgICAgIGlmKCAtLXBlbmRpbmcgPT09IDAgKSB7XG5cdFx0ICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuXHRcdCAgICAgICAgaWYoIHBlbmRpbmcgIT09IC0xICkge1xuXHRcdCAgICAgICAgICBwZW5kaW5nID09PSAtMTtcblx0XHQgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgfSk7XG5cdFx0ICAgIH0pO1xuXHRcdCAgfSk7XG5cdFx0fSxcblx0XHRyYWNlOiBmdW5jdGlvbiAoaXRlcmFibGUpIHtcblx0XHQgIHJldHVybiBxUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0ICAgIHZhciBkb25lID0gZmFsc2U7XG5cblx0XHQgICAgZWFjaChpdGVyYWJsZSwgZnVuY3Rpb24gKF9wcm9taXNlLCBpKSB7XG5cdFx0ICAgICAgaWYoIGRvbmUgKSB7XG5cdFx0ICAgICAgICByZXR1cm47XG5cdFx0ICAgICAgfVxuXHRcdCAgICAgICggX3Byb21pc2UudGhlbiA/IF9wcm9taXNlIDogcVJlc29sdmUoX3Byb21pc2UpICkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0ICAgICAgICBpZiggIWRvbmUgKSB7XG5cdFx0ICAgICAgICAgIGRvbmUgPSB0cnVlO1xuXHRcdCAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuXHRcdCAgICAgICAgaWYoICFkb25lICkge1xuXHRcdCAgICAgICAgICBkb25lID0gdHJ1ZTtcblx0XHQgICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG5cdFx0ICAgICAgICB9XG5cdFx0ICAgICAgfSk7XG5cdFx0ICAgIH0pO1xuXHRcdCAgfSk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiBmdW5jdGlvbiAocSwgb3ZlcnJpZGUpIHtcblx0XHRmb3IoIHZhciBrZXkgaW4gbWV0aG9kcyApIHtcblx0XHRcdGlmKCAhcVtrZXldIHx8IG92ZXJyaWRlICkge1xuXHRcdFx0XHRxW2tleV0gPSBtZXRob2RzW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBxO1xuXHR9O1xufTtcbiIsIlxuZnVuY3Rpb24gc3RlcFJlc3VsdCAoc3RlcCwgdmFsdWUsIHR5cGUpIHtcbiAgaWYoIHZhbHVlICYmIHZhbHVlLnRoZW4gKSB7XG4gICAgdmFsdWUudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBzdGVwLmRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICBzdGVwLmRlZmVycmVkLnJlamVjdChyZWFzb24pO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHN0ZXAuZGVmZXJyZWRbdHlwZV0odmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NRdWV1ZShwcm9taXNlKSB7XG4gIGlmKCBwcm9taXNlLiQkc3VjY2VlZGVkID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGxlbiA9IHByb21pc2UuJCRxdWV1ZS5sZW5ndGgsXG4gICAgICBzdGVwID0gcHJvbWlzZS4kJHF1ZXVlLnNoaWZ0KCksXG4gICAgICB0eXBlID0gcHJvbWlzZS4kJHN1Y2NlZWRlZCA/ICdyZXNvbHZlJyA6ICdyZWplY3QnLFxuICAgICAgdW5jb3VnaCA9ICFwcm9taXNlLiQkc3VjY2VlZGVkICYmIHByb21pc2UuJCR1bmNvdWdodCsrO1xuXG4gIHdoaWxlKCBzdGVwICkge1xuXG4gICAgaWYoIHN0ZXBbdHlwZV0gKSB7XG4gICAgICB1bmNvdWdoID0gZmFsc2U7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHN0ZXBSZXN1bHQoc3RlcCwgc3RlcFt0eXBlXShwcm9taXNlLiQkdmFsdWUpLCAncmVzb2x2ZScpO1xuICAgICAgfSBjYXRjaCAocmVhc29uKSB7XG4gICAgICAgIHN0ZXBSZXN1bHQoc3RlcCwgcmVhc29uLCAncmVqZWN0Jyk7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgc3RlcFJlc3VsdChzdGVwLCBwcm9taXNlLiQkdmFsdWUsIHR5cGUpO1xuICAgIH1cblxuICAgIHN0ZXAgPSBwcm9taXNlLiQkcXVldWUuc2hpZnQoKTtcbiAgfVxuXG4gIGlmKCAhcHJvbWlzZS4kJHN1Y2NlZWRlZCAmJiB1bmNvdWdoICkge1xuICAgIGlmKCBwcm9taXNlLiQkdW5jb3VnaCA9PT0gdW5jb3VnaCApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5jYXVnaHQgKGluIHByb21pc2UpJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIFAgKGV4ZWN1dG9yKSB7XG4gIGlmKCAhKCBleGVjdXRvciBpbnN0YW5jZW9mIEZ1bmN0aW9uICkgKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZSByZXNvbHZlciB1bmRlZmluZWQgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIHZhciBwID0gdGhpcztcbiAgdGhpcy4kJHF1ZXVlID0gW107XG4gIHRoaXMuJCR1bmNvdWdoID0gMDtcblxuICB0cnkge1xuICAgIGV4ZWN1dG9yKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHAuJCRzdWNjZWVkZWQgPSB0cnVlO1xuICAgICAgcC4kJHZhbHVlID0gcmVzdWx0O1xuICAgICAgcHJvY2Vzc1F1ZXVlKHApO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHAuJCRzdWNjZWVkZWQgPSBmYWxzZTtcbiAgICAgIHAuJCR2YWx1ZSA9IHJlYXNvbjtcbiAgICAgIHByb2Nlc3NRdWV1ZShwKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcC4kJHN1Y2NlZWRlZCA9IGZhbHNlO1xuICAgIHAuJCR2YWx1ZSA9IGVycjtcbiAgICBwcm9jZXNzUXVldWUocCk7XG4gIH1cbn1cblxuUC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbnN1Y2NlZWRlZCwgb25SZWplY3RlZCkge1xuICB2YXIgX3RoaXMgPSB0aGlzLFxuICAgICAgX3Byb21pc2UgPSBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIF90aGlzLiQkcXVldWUucHVzaCh7IHJlc29sdmU6IG9uc3VjY2VlZGVkLCByZWplY3Q6IG9uUmVqZWN0ZWQsIGRlZmVycmVkOiB7IHJlc29sdmU6IHJlc29sdmUsIHJlamVjdDogcmVqZWN0IH0gfSk7XG4gICAgICB9KTtcblxuICBwcm9jZXNzUXVldWUodGhpcyk7XG5cbiAgcmV0dXJuIF9wcm9taXNlO1xufTtcblxuUC5wcm90b3R5cGUuY2F0Y2ggPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG59O1xuXG5yZXF1aXJlKCcuL3Byb21pc2UtbWV0aG9kcycpKGZ1bmN0aW9uIChleGVjdXRvcikgeyByZXR1cm4gbmV3IFAoZXhlY3V0b3IpOyB9KShQLCB0cnVlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQO1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vcWl6ZXInKSggZ2xvYmFsLlByb21pc2UgPyByZXF1aXJlKCcuL3Byb21pc2UtbWV0aG9kcycpKGZ1bmN0aW9uIChleGVjdXRvcikgeyByZXR1cm4gbmV3IGdsb2JhbC5Qcm9taXNlKGV4ZWN1dG9yKTsgfSkoZ2xvYmFsLlByb21pc2UpIDogcmVxdWlyZSgnLi9wcm9taXNlLXBvbHlmaWxsJykgKTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUHJvbWlzZSkge1xuXG4gIGZ1bmN0aW9uIHEgKGV4ZWN1dG9yKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGV4ZWN1dG9yKTtcbiAgfVxuXG4gIHJlcXVpcmUoJy4vcHJvbWlzZS1tZXRob2RzJykocSkocSwgdHJ1ZSk7XG5cbiAgcS53aGVuID0gZnVuY3Rpb24gKHApIHsgcmV0dXJuICggcCAmJiBwLnRoZW4gKSA/IHAgOiBQcm9taXNlLnJlc29sdmUocCk7IH07XG4gIHEudXNlUG9seWZpbGwgPSBmdW5jdGlvbiAoKSB7XG4gIFx0UHJvbWlzZSA9IHJlcXVpcmUoJy4vcHJvbWlzZS1wb2x5ZmlsbCcpO1xuICB9O1xuXG4gIHJldHVybiBxO1xuXG59O1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL3FpemVyJykoIHJlcXVpcmUoJy4vbGliL3Byb21pc2UtcG9seWZpbGwnKSApO1xuIiwiXG4vLyByZXF1aXJlKCcuL2Jyb3dzZXItcG9seWZpbGxzL2N1cnJlbnQtc2NyaXB0Jyk7XG5yZXF1aXJlKCcuL2Jyb3dzZXItcG9seWZpbGxzL2RhdGUnKTtcbnJlcXVpcmUoJy4vYnJvd3Nlci1wb2x5ZmlsbHMvZG9tLWNsb3Nlc3QnKTtcbnJlcXVpcmUoJy4vYnJvd3Nlci1wb2x5ZmlsbHMvZXZlbnQtbGlzdGVuZXInKTtcbnJlcXVpcmUoJy4vYnJvd3Nlci1wb2x5ZmlsbHMvbWF0Y2gtbWVkaWEnKTtcbnJlcXVpcmUoJy4vYnJvd3Nlci1wb2x5ZmlsbHMvbWF0Y2hlcy1zZWxlY3RvcicpO1xuIiwiXG5pZiAoIURhdGUubm93KSB7XG4gIERhdGUubm93ID0gZnVuY3Rpb24gbm93KCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfTtcbn0iLCJcbmlmKCAhRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCApIHtcbiAgRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHZhciBlbCA9IHRoaXM7XG5cbiAgICB3aGlsZSggZWwgKSB7XG4gICAgICBpZiggZWwubWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKSApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfTtcbn0iLCJcbmlmKCAhRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciApIHtcbiAgaWYoIEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEV2ZW50ICkge1xuICAgIEVsZW1lbnQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaEV2ZW50KCAnb24nICsgZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAgIH07XG4gICAgRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUuZGV0YWNoRXZlbnQoICdvbicgKyBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyAnQnJvd3NlciBub3QgY29tcGF0aWJsZSB3aXRoIGVsZW1lbnQgZXZlbnRzJztcbiAgfVxufSIsIihmdW5jdGlvbiAocm9vdCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgcm9vdC5tYXRjaE1lZGlhID0gcm9vdC5tYXRjaE1lZGlhIHx8IHJvb3Qud2Via2l0TWF0Y2hNZWRpYSB8fCByb290Lm1vek1hdGNoTWVkaWEgfHwgcm9vdC5tc01hdGNoTWVkaWE7XG59KSh0aGlzKTsiLCJcbmlmKCAhRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc1NlbGVjdG9yICkge1xuICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3IgPSAoXG4gICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS5vTWF0Y2hlc1NlbGVjdG9yXG4gICk7XG59XG5cbiIsIlxucmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscycpO1xuLy8gZG9jdW1lbnQuY3VycmVudFNjcmlwdFxuLy8gRGF0ZS5ub3coKVxuLy8gSFRNTEVsZW1lbnQuY2xvc2VzdCgpXG4vLyBIVE1MRWxlbWVudC5hZGRFdmVudExpc3RlbmVyXG4vLyBIVE1MRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyXG4vLyB3aW5kb3cubWF0Y2hNZWRpYVxuLy8gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc1NlbGVjdG9yXG5cbnJlcXVpcmUoJ2NsYXNzbGlzdC5qcycpOyAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lcy9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbGFzc0xpc3RcblxudmFyIGV4dGVuZCA9IHJlcXVpcmUoJ25pdHJvLXRvb2xzL2V4dGVuZCcpO1xuXG5mdW5jdGlvbiBfIChzZWxlY3Rvciwgc291cmNlKSB7XG4gIHJldHVybiBzb3VyY2UgJiYgdHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgP1xuXHRcdHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3Ioc291cmNlKSA6XG5cdFx0KHNvdXJjZSB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbl8ubm9vcCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5fLnEgPSByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJyk7XG5cbmV4dGVuZC5leHRlbmQoXywgZXh0ZW5kKTtcblxuXy5leHRlbmQoXyxcbiAgcmVxdWlyZSgnbml0cm8tdG9vbHMvdHlwZScpLFxuXHRyZXF1aXJlKCduaXRyby10b29scy9rZXknKSxcblx0cmVxdWlyZSgnbml0cm8tdG9vbHMvcGF0aCcpXG4pO1xuXG5fLmV4dGVuZChfLCB7XG5cdGFuaW1hdGU6IHJlcXVpcmUoJy4vZGVmZXJyZWQvYW5pbWF0ZScpLFxuXHR3YWl0OiByZXF1aXJlKCcuL2RlZmVycmVkL3dhaXQnKVxufSk7XG5cbl8uZXh0ZW5kKF8sIHtcblx0cmVhZHk6IHJlcXVpcmUoJy4vZm4vcmVhZHknKSxcblx0dGVtcGxhdGU6IHJlcXVpcmUoJy4vZm4vdGVtcGxhdGUnKSxcblx0ZGVib3VuY2U6IHJlcXVpcmUoJy4vZm4vZGVib3VuY2UnKVxufSk7XG5cbl8uZXh0ZW5kKF8sXG4gIHJlcXVpcmUoJy4vdXRpbHMvZXZlbnRzJyksXG5cdC8vIF8ub24oZWwsIGV2ZW50TmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSlcblx0Ly8gXy5vZmYoZWwsIGV2ZW50TmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSlcblx0Ly8gXy50cmlnZ2VyRXZlbnQoZWxlbWVudCwgZXZlbnROYW1lLCBkYXRhKVxuXG4gIHJlcXVpcmUoJy4vdXRpbHMvZG9tJylcbiAgLy8gXy5jcmVhdGUodGFnTmFtZSwgYXR0cnMpXG5cdC8vIF8uYXR0cihlbCwgbmFtZSwgdmFsdWUpXG4gIC8vIF8udG1wQ2xhc3MoZWwsIGNsYXNzTmFtZSwgZHVyYXRpb24sIGNiKVxuKTtcblxuXy5leHRlbmQoXywge1xuXHRub3JtYWxpemU6IHJlcXVpcmUoJy4vdXRpbHMvbm9ybWFsaXplJyksXG5cdC8vIF8udG91Y2hEZXZpY2UgPT09IHRydWUgfCBmYWxzZVxuXHQvLyBfLmlzTWFjID09PSB0cnVlIHwgZmFsc2Vcblx0Ly8gXy5pc0FuZHJvaWQgPT09IHRydWUgfCBmYWxzZVxuXG5cdHNjcm9sbDogcmVxdWlyZSgnLi91dGlscy9zY3JvbGwvYnVuZGxlJykgLy8gc2Nyb2xsIGlzIG5vdCBhdmFpbGFibGUgdW50aWwgZG9jdW1lbnQgaXMgcmVhZHlcblx0Ly8gXy5zY3JvbGwub24oIGhhbmRsZXIsIHVzZUNhcHR1cmUgKVxuXHQvLyBfLnNjcm9sbC5vZmYoIGhhbmRsZXIsIHVzZUNhcHR1cmUgKVxuXHQvLyBfLnNjcm9sbC50b3AoKVxuXHQvLyBfLnNjcm9sbC5nb3RvKHZhbHVlKVxuXHQvLyBfLnNjcm9sbC5hbmltYXRlVG8odmFsdWUgfCBIVE1MRWxlbWVudCwgY2FsbGJhY2ssIGR1cmF0aW9uKTogUHJvbWlzZVxuXHQvLyBfLHNjcm9sbC5pbkFuaW1hdGlvbiA9PT0gdHJ1ZSB8IGZhbHNlXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBfO1xuIiwiXG52YXIgJHEgPSByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJyksXG4gICAgdGltaW5nRnVuY3Rpb25zID0ge30sXG4gICAgbm9vcCA9IGZ1bmN0aW9uICgpIHt9LFxuICAgIGdldFRpbWluZ0Z1bmN0aW9uID0gZnVuY3Rpb24gKHRpbWluZ0Z1bmN0aW9uTmFtZSkge1xuICAgICAgaWYoICF0aW1pbmdGdW5jdGlvbnNbdGltaW5nRnVuY3Rpb25OYW1lXSApIHtcbiAgICAgICAgaWYoIHRpbWluZ0Z1bmN0aW9uTmFtZSA9PT0gJ2xpbmVhcicgKSB7XG4gICAgICAgICAgdGltaW5nRnVuY3Rpb25zW3RpbWluZ0Z1bmN0aW9uTmFtZV0gPSBmdW5jdGlvbiAoIHZhbHVlICkgeyByZXR1cm4gdmFsdWU7IH07XG4gICAgICAgIH0gZWxzZSBpZiggdGltaW5nRnVuY3Rpb25OYW1lID09PSAnZWFzZScgKSB7XG4gICAgICAgICAgdGltaW5nRnVuY3Rpb25zW3RpbWluZ0Z1bmN0aW9uTmFtZV0gPSByZXF1aXJlKCdiZXppZXItZWFzaW5nJykoLjE3LC42NywuODMsLjY3KTtcbiAgICAgICAgfSBlbHNlIGlmKCB0aW1pbmdGdW5jdGlvbk5hbWUgPT09ICdlYXNlLWluJyApIHtcbiAgICAgICAgICB0aW1pbmdGdW5jdGlvbnNbdGltaW5nRnVuY3Rpb25OYW1lXSA9IHJlcXVpcmUoJ2Jlemllci1lYXNpbmcnKSguNDIsMCwxLDEpO1xuICAgICAgICB9IGVsc2UgaWYoIHRpbWluZ0Z1bmN0aW9uTmFtZSA9PT0gJ2Vhc2Utb3V0JyApIHtcbiAgICAgICAgICB0aW1pbmdGdW5jdGlvbnNbdGltaW5nRnVuY3Rpb25OYW1lXSA9IHJlcXVpcmUoJ2Jlemllci1lYXNpbmcnKSgwLDAsLjU4LDEpO1xuICAgICAgICB9IGVsc2UgaWYoIHRpbWluZ0Z1bmN0aW9uTmFtZSA9PT0gJ2Vhc2UtaW4tb3V0JyApIHtcbiAgICAgICAgICB0aW1pbmdGdW5jdGlvbnNbdGltaW5nRnVuY3Rpb25OYW1lXSA9IHJlcXVpcmUoJ2Jlemllci1lYXNpbmcnKSguNDIsMCwuNTgsMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aW1pbmdGdW5jdGlvbnNbdGltaW5nRnVuY3Rpb25OYW1lXTtcbiAgICB9O1xuXG5mdW5jdGlvbiBhbmltYXRlIChwcm9ncmVzc0ZuLCBkdXJhdGlvbiwgYXRFbmQsIHRpbWluZ0Z1bmN0aW9uTmFtZSkge1xuICBpZiAoIGR1cmF0aW9uIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgaWYgKCB0eXBlb2YgYXRFbmQgPT09ICdudW1iZXInICkge1xuICAgICAgYXV4ID0gZHVyYXRpb247XG4gICAgICBkdXJhdGlvbiA9IGF0RW5kO1xuICAgICAgYXRFbmQgPSBhdXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF0RW5kID0gZHVyYXRpb247XG4gICAgICBkdXJhdGlvbiA9IDQwMDtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIGR1cmF0aW9uID09PSB1bmRlZmluZWQgKSB7XG4gICAgZHVyYXRpb24gPSA0MDA7XG4gIH1cblxuICB0aW1pbmdGdW5jdGlvbk5hbWUgPSB0aW1pbmdGdW5jdGlvbk5hbWUgfHwgKCB0eXBlb2YgYXRFbmQgPT09ICdzdHJpbmcnID8gYXRFbmQgOiAoIHR5cGVvZiBkdXJhdGlvbiA9PT0gJ3N0cmluZycgPyBkdXJhdGlvbiA6ICdlYXNlJyApICk7XG5cbiAgcHJvZ3Jlc3NGbihkdXJhdGlvbiA9PT0gMCA/IDEgOiAwKTtcblxuICB2YXIgc3RvcHBlZCA9IGZhbHNlLFxuICAgICAgdGltaW5nRnVuY3Rpb24gPSBnZXRUaW1pbmdGdW5jdGlvbih0aW1pbmdGdW5jdGlvbk5hbWUpLFxuICAgICAgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gIGlmKCBkdXJhdGlvbiA+IDAgKSB7XG4gICAgdmFyIHN0YXJ0ID0gRGF0ZS5ub3coKSxcbiAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gc3RhcnQ7XG5cbiAgICAgICAgICBpZiggc3RvcHBlZCApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgIH0gZWxzZSBpZiggZWxhcHNlZCA+PSBkdXJhdGlvbiApIHtcbiAgICAgICAgICAgIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgcHJvZ3Jlc3NGbigxKTtcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgICAgICAgICAgIChhdEVuZCB8fCBub29wKSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9ncmVzc0ZuKCB0aW1pbmdGdW5jdGlvbihlbGFwc2VkL2R1cmF0aW9uKSApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTApO1xuICB9XG5cbiAgZGVmZXJyZWQucHJvbWlzZS5zdG9wID0gZnVuY3Rpb24gKHJlamVjdCkge1xuICAgIHN0b3BwZWQgPSB0cnVlO1xuICAgIGlmKCByZWplY3QgKSB7XG4gICAgICBkZWZlcnJlZC5yZWplY3QoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG59XG5cbmFuaW1hdGUudGltZSA9IGZ1bmN0aW9uIChlbCkge1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBkdXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5hbmltYXRpb25EdXJhdGlvbjtcbiAgaWYoIGR1cmF0aW9uICkge1xuICAgIGR1cmF0aW9uLnJlcGxhY2UoLyhbMC05XShcXC5bMC05XSk/KShtKT9zLywgZnVuY3Rpb24gKG1hdGNoZWQsIHQsIGRlY2ltYWxzLCBtcykge1xuICAgICAgdGltZSArPSBtcyA/IE51bWJlcih0KSA6IE51bWJlcih0KSoxMDAwO1xuICAgIH0pO1xuICB9XG4gIGlmKCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuYW5pbWF0aW9uRGVsYXkgKSB7XG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmFuaW1hdGlvbkRlbGF5LnJlcGxhY2UoLyhbMC05XShcXC5bMC05XSk/KShtKT9zLywgZnVuY3Rpb24gKG1hdGNoZWQsIHQsIGRlY2ltYWxzLCBtcykge1xuICAgICAgdGltZSArPSBtcyA/IE51bWJlcih0KSA6IE51bWJlcih0KSoxMDAwO1xuICAgIH0pO1xuICB9XG4gIGR1cmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgaWYoIGR1cmF0aW9uICkge1xuICAgIGR1cmF0aW9uLnJlcGxhY2UoLyhbMC05XShcXC5bMC05XSk/KShtKT9zLywgZnVuY3Rpb24gKG1hdGNoZWQsIHQsIGRlY2ltYWxzLCBtcykge1xuICAgICAgdmFyIHQgPSBtcyA/IE51bWJlcih0KSA6IE51bWJlcih0KSoxMDAwO1xuICAgICAgaWYoIHQgPiB0aW1lICkge1xuICAgICAgICB0aW1lID0gdDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvLyBjb25zb2xlLmxvZygnYW5pbWF0aW9uVGltZScsIGVsLCB0aW1lKTtcbiAgcmV0dXJuIHRpbWU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuaW1hdGU7XG4iLCJcbnZhciAkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKSxcblx0d2FpdCA9IGZ1bmN0aW9uIChkZWxheSwgY2FsbGJhY2spIHtcblx0XHRpZiggZGVsYXkgaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcblx0XHRcdGRlbGF5ID0gW2NhbGxiYWNrLCBjYWxsYmFjayA9IGRlbGF5XVswXTtcblx0XHR9XG5cdFx0aWYoIGNhbGxiYWNrICYmICEoY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbikgKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIHNob3VsZCBiZSBhIEZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdGlmKCB0eXBlb2YgZGVsYXkgIT09ICdudW1iZXInICkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdkZWxheSBzaG91bGQgYmUgYSBOdW1iZXInKTtcblx0XHR9XG5cdFx0cmV0dXJuICRxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdGlmKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCBkZWxheSk7XG5cdFx0fSk7XG5cdH07XG5cbm1vZHVsZS5leHBvcnRzID0gd2FpdDtcbiIsIlxuZnVuY3Rpb24gZGVib3VuY2UgKGZuLCB0aW1lc2xvdCkge1xuICB2YXIgdGltZXIgPSBudWxsLFxuICAgICAgdGltZXNsb3QgPSB0aW1lc2xvdCB8fCA4MDtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICBpZiggdGltZXIgKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBmbi5hcHBseShfdGhpcywgYXJncyk7XG4gICAgfSwgdGltZXNsb3QpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlOyIsInZhciByZWFkeUxpc3RlbmVycyA9IFtdLFxuICAgIGluaXRSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMgPSByZWFkeUxpc3RlbmVycztcbiAgICAgIHJlYWR5TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuICAgICAgW10uZm9yRWFjaC5jYWxsKGxpc3RlbmVycywgZnVuY3Rpb24gKGNiKSB7IGNiKCk7IH0pO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRSZWFkeSk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXRSZWFkeSk7XG4gICAgfTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRSZWFkeSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGluaXRSZWFkeSk7XG5cbmZ1bmN0aW9uIHJlYWR5IChjYWxsYmFjaykge1xuICBpZiggY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICBpZiggcmVhZHlMaXN0ZW5lcnMgKSB7XG4gICAgICByZWFkeUxpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWFkeTtcbiIsIlxuZnVuY3Rpb24gdGVtcGxhdGUgKG5hbWUsIGRhdGEpe1xuICByZXR1cm4gdGVtcGxhdGUuY2FjaGVbbmFtZV0oZGF0YSB8fCB7fSk7XG59XG5cbnRlbXBsYXRlLmNhY2hlID0ge307XG5cbnRlbXBsYXRlLmNvbXBpbGUgPSBmdW5jdGlvbiAodG1wbCkge1xuICAvLyBKb2huIFJlc2lnIG1pY3JvLXRlbXBsYXRlXG4gIHJldHVybiBuZXcgRnVuY3Rpb24oJ29iaicsIC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgICd2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTsnICtcblxuICAgIC8vIEludHJvZHVjZSB0aGUgZGF0YSBhcyBsb2NhbCB2YXJpYWJsZXMgdXNpbmcgd2l0aCgpe31cbiAgICAnd2l0aChvYmope3AucHVzaChcXCcnICtcblxuICAgIC8vIENvbnZlcnQgdGhlIHRlbXBsYXRlIGludG8gcHVyZSBKYXZhU2NyaXB0XG4gICAgdG1wbC50cmltKClcbiAgICAgIC5yZXBsYWNlKC9bXFxyXFx0XFxuXS9nLCAnICcpXG4gICAgICAuc3BsaXQoJzwlJykuam9pbignXFx0JylcbiAgICAgIC5yZXBsYWNlKC8oKF58JT4pW15cXHRdKiknL2csICckMVxccicpXG4gICAgICAucmVwbGFjZSgvXFx0PSguKj8pJT4vZywgJ1xcJywkMSxcXCcnKVxuICAgICAgLnNwbGl0KCdcXHQnKS5qb2luKCdcXCcpOycpXG4gICAgICAuc3BsaXQoJyU+Jykuam9pbigncC5wdXNoKFxcJycpXG4gICAgICAuc3BsaXQoJ1xccicpLmpvaW4oJ1xcXFxcXCcnKSArICdcXCcpO31yZXR1cm4gcC5qb2luKFxcJ1xcJyk7Jyk7XG59O1xuXG50ZW1wbGF0ZS5wdXQgPSBmdW5jdGlvbiAobmFtZSwgdG1wbCkge1xuICB0ZW1wbGF0ZS5jYWNoZVtuYW1lXSA9IHRlbXBsYXRlLmNvbXBpbGUodG1wbCk7XG59O1xuXG50ZW1wbGF0ZS5sb29rdXAgPSBmdW5jdGlvbiAoKSB7XG4gIFtdLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHRbdHlwZT1cImFwcGxpY2F0aW9uL3gtdGVtcGxhdGVcIl1bZGF0YS10ZW1wbGF0ZV0nKSwgZnVuY3Rpb24gKHRtcGwpIHtcbiAgICB0ZW1wbGF0ZS5wdXQodG1wbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKSwgdG1wbC50ZXh0KTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsIlxudmFyIF9kb20gPSB7XG4gIGN1cnJlbnRTY3JpcHQ6IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgfHwgKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuICAgIHJldHVybiBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV07XG4gIH0pKCksXG4gIGNyZWF0ZTogZnVuY3Rpb24gKHRhZ05hbWUsIGF0dHJzKSB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIGlmKCBhdHRycyApIHtcbiAgICAgIGlmKCBhdHRycy5odG1sICkge1xuICAgICAgICBlbC5pbm5lckhUTUwgPSBhdHRycy5odG1sO1xuICAgICAgfVxuICAgICAgZm9yKCB2YXIgYXR0ciBpbiBhdHRycyApIHtcbiAgICAgICAgaWYoIGF0dHIgIT09ICdodG1sJyApIHtcbiAgICAgICAgICBlbFthdHRyXSA9IGF0dHJzW2F0dHJdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbDtcbiAgfSxcbiAgYXR0cjogZnVuY3Rpb24gKGVsLCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmKCAhKGVsIGluc3RhbmNlb2YgRWxlbWVudCkgJiYgZWxbMF0gaW5zdGFuY2VvZiBFbGVtZW50ICkge1xuICAgICAgZWwgPSBlbFswXTtcbiAgICB9XG4gICAgaWYoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICB9LFxuICB0bXBDbGFzczogZnVuY3Rpb24gKGVsLCBjbGFzc05hbWUsIGR1cmF0aW9uLCBjYikge1xuICAgIHZhciBpc0NvbGxlY3Rpb24gPSAhKGVsIGluc3RhbmNlb2YgRWxlbWVudCApICYmIGVsLmxlbmd0aDtcblxuICAgIGlmKCBpc0NvbGxlY3Rpb24gKSB7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwoZWwsIGZ1bmN0aW9uIChfZWwpIHtcbiAgICAgICAgX2VsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYoIGlzQ29sbGVjdGlvbiApIHtcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGVsLCBmdW5jdGlvbiAoX2VsKSB7XG4gICAgICAgICAgX2VsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgICBpZiggY2IgaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICAgICAgY2IoKTtcbiAgICAgIH1cbiAgICB9LCBkdXJhdGlvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gZHVyYXRpb24oKSA6IGR1cmF0aW9uICk7XG4gIH0sXG4gIGZvcm1QYXJhbXM6IGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgaWYoICEoZm9ybSBpbnN0YW5jZW9mIEVsZW1lbnQpICYmIGZvcm0ubGVuZ3RoICkge1xuICAgICAgZm9ybSA9IGZvcm1bMF07XG4gICAgfVxuXG4gICAgdmFyIGRhdGEgPSB7fTtcbiAgICBbXS5mb3JFYWNoLmNhbGwoZm9ybS5lbGVtZW50cywgZnVuY3Rpb24gKGVsKSB7XG4gICAgICBpZiggZWwubmFtZSAmJiAhZWwuZGlzYWJsZWQgKSB7XG4gICAgICAgIGlmKCBlbC50eXBlID09PSAncmFkaW8nICkge1xuICAgICAgICAgIGlmKCBlbC5jaGVja2VkICkge1xuICAgICAgICAgICAgZGF0YVtlbC5uYW1lXSA9IGVsLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhW2VsLm5hbWVdID0gZWwudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfZG9tO1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb246IGZ1bmN0aW9uIChlbCwgZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKSB7XG4gICAgaWYoIHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZWwsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgfVxuICAgIHJldHVybiBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSk7XG4gIH0sXG4gIG9mZjogZnVuY3Rpb24gKGVsLCBldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpIHtcbiAgICBpZiggdHlwZW9mIGVsID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKTtcbiAgfSxcbiAgdHJpZ2dlckV2ZW50OiBkb2N1bWVudC5jcmVhdGVFdmVudCA/IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkhUTUxFdmVudHNcIik7XG4gICAgZXZlbnQuZGF0YSA9IGRhdGE7XG4gICAgZXZlbnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH0gOiBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnRPYmplY3QoKTtcbiAgICBldmVudC5kYXRhID0gZGF0YTtcbiAgICBlbGVtZW50LmZpcmVFdmVudChcIm9uXCIgKyBldmVudE5hbWUsIGV2ZW50KTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cbn07XG4iLCJcbnZhciBub3JtYWxpemUgPSB7XG4gIGlzVG91Y2hEZXZpY2U6ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgaXNNYWM6IC9eTWFjLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSksXG4gIGlzQW5kcm9pZDogL15BbmRyb2lkLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSlcbn07XG5cbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCBub3JtYWxpemUuaXNUb3VjaERldmljZSA/ICd0b3VjaCcgOiAnbm8tdG91Y2gnICk7XG5pZiggbm9ybWFsaXplLmlzTWFjICkge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtbWFjJyk7XG59XG5pZiggbm9ybWFsaXplLmlzQW5kcm9pZCApIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWFuZHJvaWQnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemU7XG4iLCJcbmZ1bmN0aW9uIGdldFNjcm9sbFJvb3QgKCkge1xuICAgIGlmKCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9IGVsc2UgaWYgKCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCApIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICAgIH1cblxuICAgIHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBib2R5ID0gZG9jdW1lbnQuYm9keSxcbiAgICAgICAgY2FjaGVUb3AgPSAoKHR5cGVvZiB3aW5kb3cucGFnZVlPZmZzZXQgIT09IFwidW5kZWZpbmVkXCIpID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogbnVsbCkgfHwgYm9keS5zY3JvbGxUb3AgfHwgaHRtbC5zY3JvbGxUb3AsIC8vIGNhY2hlIHRoZSB3aW5kb3cncyBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgICAgICByb290O1xuXG4gICAgaHRtbC5zY3JvbGxUb3AgPSBib2R5LnNjcm9sbFRvcCA9IGNhY2hlVG9wICsgKGNhY2hlVG9wID4gMCkgPyAtMSA6IDE7XG4gICAgLy8gZmluZCByb290IGJ5IGNoZWNraW5nIHdoaWNoIHNjcm9sbFRvcCBoYXMgYSB2YWx1ZSBsYXJnZXIgdGhhbiB0aGUgY2FjaGUuXG4gICAgcm9vdCA9IChodG1sLnNjcm9sbFRvcCAhPT0gY2FjaGVUb3ApID8gaHRtbCA6IGJvZHk7XG5cbiAgICByb290LnNjcm9sbFRvcCA9IGNhY2hlVG9wOyAvLyByZXN0b3JlIHRoZSB3aW5kb3cncyBzY3JvbGwgcG9zaXRpb24gdG8gY2FjaGVkIHZhbHVlXG5cbiAgICByZXR1cm4gcm9vdDsgLy8gcmV0dXJuIHRoZSBzY3JvbGxpbmcgcm9vdCBlbGVtZW50XG59XG5cbnZhciByZWFkeSA9IHJlcXVpcmUoJy4uL2ZuL3JlYWR5JyksXG4gICAgc2Nyb2xsUm9vdCA9IHsgc2Nyb2xsVG9wOiAwIH0sXG4gICAgc2Nyb2xsID0ge1xuICAgICAgcm9vdDogc2Nyb2xsUm9vdCxcbiAgICAgIG9uOiBmdW5jdGlvbiAoIGhhbmRsZXIsIHVzZUNhcHR1cmUgKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyLCB1c2VDYXB0dXJlKTtcbiAgICAgIH0sXG4gICAgICBvZmY6IGZ1bmN0aW9uICggaGFuZGxlciwgdXNlQ2FwdHVyZSApIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICAgICAgfSxcbiAgICAgIHRvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc2Nyb2xsLnJvb3Quc2Nyb2xsVG9wO1xuICAgICAgfSxcbiAgICAgIGdvdG86IGZ1bmN0aW9uICggdmFsdWUgKSB7XG4gICAgICAgIHNjcm9sbC5yb290LnNjcm9sbFRvcCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH07XG5cbnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgc2Nyb2xsUm9vdCA9IGdldFNjcm9sbFJvb3QoKTtcbiAgc2Nyb2xsLnJvb3QgPSBzY3JvbGxSb290O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2Nyb2xsO1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzY3JvbGwpIHtcblxuXHR2YXIgYW5pbWF0ZSA9IHJlcXVpcmUoJy4uLy4uL2RlZmVycmVkL2FuaW1hdGUnKSxcblx0XHRcdCRxID0gcmVxdWlyZSgncS1wcm9taXNlL25vLW5hdGl2ZScpLFxuXHRcdFx0bm9vcCA9IGZ1bmN0aW9uKCkge30sXG5cdFx0XHRzY3JvbGxBbmltYXRpb24gPSBhbmltYXRlKG5vb3AsIDApLFxuXHRcdFx0YXV4O1xuXG5cdHNjcm9sbC5hbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHNjcm9sbEFuaW1hdGlvbjtcblx0fTtcblxuXHRzY3JvbGwuYW5pbWF0ZVRvID0gZnVuY3Rpb24gKHZhbHVlLCBjYiwgZHVyYXRpb24gKSB7XG5cdFx0aWYoIHZhbHVlID09PSB1bmRlZmluZWQgKSB7XG5cdFx0ICByZXR1cm4gJHEucmVqZWN0KCk7XG5cdFx0fVxuXHRcdGlmKCB2YWx1ZSBpbnN0YW5jZW9mIEVsZW1lbnQgKSB7XG5cdFx0ICB2YWx1ZSA9IHZhbHVlLm9mZnNldFRvcDtcblx0XHR9XG5cblx0XHRpZiggdHlwZW9mIGNiID09PSAnbnVtYmVyJyApIHtcblx0XHQgIGF1eCA9IGR1cmF0aW9uO1xuXHRcdCAgZHVyYXRpb24gPSBjYjtcblx0XHQgIGNiID0gdHlwZW9mIGF1eCA9PT0gJ2Z1bmN0aW9uJyA/IGF1eCA6IG5vb3A7XG5cdFx0fVxuXG5cdFx0dmFyIHNjcm9sbEZyb20gPSBzY3JvbGwudG9wKCksXG5cdFx0ICAgIHNjcm9sbERlbHRhID0gdmFsdWUgLSBzY3JvbGxGcm9tO1xuXG5cdFx0c2Nyb2xsQW5pbWF0aW9uLnN0b3AoKTtcblx0XHRzY3JvbGwuaW5BbmltYXRpb24gPSB0cnVlO1xuXHRcdHNjcm9sbEFuaW1hdGlvbiA9IGFuaW1hdGUoZnVuY3Rpb24gKHByb2dyZXNzKSB7XG5cdFx0ICBzY3JvbGwuZ290byggc2Nyb2xsRnJvbSArIHNjcm9sbERlbHRhKnByb2dyZXNzICk7XG5cdFx0fSwgZnVuY3Rpb24gKCkge1xuXHRcdCAgc2Nyb2xsLmluQW5pbWF0aW9uID0gZmFsc2U7XG5cdFx0ICAoY2IgfHwgbm9vcCkoKTtcblx0XHR9LCBkdXJhdGlvbiB8fCAzNTAsICdlYXNlLW91dCcpO1xuXG5cdFx0cmV0dXJuIHNjcm9sbEFuaW1hdGlvbjtcblx0fTtcblxuXHRyZXR1cm4gc2Nyb2xsO1xufTtcbiIsIlxudmFyIHNjcm9sbCA9IHJlcXVpcmUoJy4uL3Njcm9sbCcpO1xuXG5yZXF1aXJlKCcuL3RvcC1jbGFzcycpKHNjcm9sbCk7XG5yZXF1aXJlKCcuL2FuaW1hdGUnKShzY3JvbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNjcm9sbDsiLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNjcm9sbCkge1xuXG5cdHZhciBvblNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ3Njcm9sbC10b3AnLCAhc2Nyb2xsLnRvcCgpICk7XG5cdCAgICB9O1xuXG5cdHNjcm9sbC5vbihvblNjcm9sbCk7XG5cblx0cmVxdWlyZSgnLi4vLi4vZm4vcmVhZHknKShvblNjcm9sbCk7XG5cbn07XG4iLCJcbnJlcXVpcmUoJy4vc2FuZGJveCcpKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBhcGxhemFtZSA9IHJlcXVpcmUoJy4vY29yZS9jb3JlJyk7XG5cbiAgYXBsYXphbWUuY2hlY2tvdXQgPSByZXF1aXJlKCcuL2FwcHMvY2hlY2tvdXQnKTtcbiAgYXBsYXphbWUuYnV0dG9uID0gcmVxdWlyZSgnLi9hcHBzL2J1dHRvbicpO1xuICBhcGxhemFtZS5zaW11bGF0b3IgPSByZXF1aXJlKCcuL2FwcHMvc2ltdWxhdG9yJyk7XG4gIGFwbGF6YW1lLm1vZGFsID0gcmVxdWlyZSgnLi9hcHBzL21vZGFsJyk7XG5cbiAgYXBsYXphbWUuaW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYXBpOiByZXF1aXJlKCcuL2NvcmUvYXBpJyksXG4gICAgICBsb2c6IHJlcXVpcmUoJy4vdG9vbHMvbG9nJykuaGlzdG9yeSxcbiAgICAgIHZlcnNpb246IHJlcXVpcmUoJy4uLy50bXAvYXBsYXphbWUtdmVyc2lvbicpXG4gICAgfTtcbiAgfTtcblxuICBhcGxhemFtZS5sb2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmVxdWlyZSgnLi90b29scy9sb2cnKS5oaXN0b3J5LmZvckVhY2goZnVuY3Rpb24gKGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKGwudGltZSk7XG4gICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBsLmFyZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlcXVpcmUoJy4vYXBwcy9odHRwLXNlcnZpY2UnKTtcblxuICBnbG9iYWwuYXBsYXphbWUgPSBhcGxhemFtZTtcblxuICByZXF1aXJlKCcuL2xvYWRlcnMvZGF0YS1hcGxhemFtZScpKGdsb2JhbC5hcGxhemFtZSk7XG4gIGFwbGF6YW1lLl8ucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIHZhciBidXR0b25zTG9va3VwID0gcmVxdWlyZSgnLi9sb2FkZXJzL2RhdGEtYnV0dG9uJykoYXBsYXphbWUpLFxuICAgICAgICB3aWRnZXRzTG9va3VwID0gcmVxdWlyZSgnLi9sb2FkZXJzL2RhdGEtc2ltdWxhdG9yJykoYXBsYXphbWUpLFxuICAgICAgICBjYiA9IHJlcXVpcmUoJy4vY29yZS9hcGknKS5jYWxsYmFjaztcblxuICAgIGlmKCBjYiApIHtcbiAgICAgIGlmKCAgdHlwZW9mIGdsb2JhbFtjYl0gIT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgc2hvdWxkIGJlIGEgZ2xvYmFsIGZ1bmN0aW9uJyk7XG4gICAgICB9XG4gICAgICBnbG9iYWxbY2JdKGFwbGF6YW1lKTtcbiAgICAgIGJ1dHRvbnNMb29rdXAoKTtcbiAgICAgIHdpZGdldHNMb29rdXAoKTtcbiAgICB9XG5cbiAgfSk7XG5cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBpSHR0cCA9IHJlcXVpcmUoJy4uL2NvcmUvYXBpLWh0dHAnKSxcbiAgICBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKTtcblxuZnVuY3Rpb24gZ2V0Q2FydFByaWNlICgpIHtcbiAgdmFyIHR0cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbF9wcmljZScpO1xuICByZXR1cm4gdHRwICYmIHR0cC50ZXh0Q29udGVudCAmJiBfLnBhcnNlUHJpY2UoIHR0cC50ZXh0Q29udGVudCApO1xufVxuXG5mdW5jdGlvbiBidXR0b24gKG9wdGlvbnMpIHtcblxuICBpZiggIW9wdGlvbnMgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdhcGxhemFtZS5idXR0b24gcmVxdWlyZXMgcGFyYW1ldGVycycpO1xuICB9XG5cbiAgaWYoICFvcHRpb25zLmlkICYmICFvcHRpb25zLmJ1dHRvbiAmJiAhb3B0aW9ucy5zZWxlY3RvciApe1xuICAgIHRocm93IG5ldyBFcnJvcignYnV0dG9uIGNhbiBub3QgYmUgaWRlbnRpZmllZCAoIHBsZWFzZSB1c2UgLSBpZDogXFwnYnV0dG9uLWlkXFwnIC0gb3IgLSBidXR0b246IFxcJyNidXR0b24taWRcXCcgLSBvciAtIHNlbGVjdG9yOiBcXCcjYnV0dG9uLWlkXFwnIChyZWNvbWVuZGVkKSAtICknKTtcbiAgfVxuXG4gIGlmKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWxfcHJpY2UnKSApIHtcbiAgICBvcHRpb25zLmFtb3VudCA9IGdldENhcnRQcmljZSgpIHx8IG9wdGlvbnMuYW1vdW50O1xuXG4gICAgaWYoICFidXR0b24ud2F0Y2hpbmcgKSB7XG4gICAgICBidXR0b24ud2F0Y2hpbmcgPSB0cnVlO1xuICAgICAgb3B0aW9ucy5sYXN0UHJpY2UgPSBvcHRpb25zLmFtb3VudDtcblxuICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYW1vdW50ID0gZ2V0Q2FydFByaWNlKCk7XG4gICAgICAgIGlmKCBhbW91bnQgJiYgYW1vdW50ICE9PSBvcHRpb25zLmxhc3RQcmljZSApIHtcbiAgICAgICAgICBvcHRpb25zLmFtb3VudCA9IGFtb3VudDtcbiAgICAgICAgICBvcHRpb25zLmxhc3RQcmljZSA9IG9wdGlvbnMuYW1vdW50O1xuICAgICAgICAgIG9wdGlvbnMuZm9yY2VVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgIGJ1dHRvbihvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSwgNDAwKTtcbiAgICB9XG4gIH1cblxuICBpZiggIW9wdGlvbnMuYW1vdW50ICl7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdidXR0b24gYW1vdW50IG1pc3NpbmcnKTtcbiAgfVxuXG4gIHZhciBlbGVtZW50cywgZWxCdXR0b247XG5cbiAgaWYoIG9wdGlvbnMuYnV0dG9uICkge1xuICAgIGVsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmJ1dHRvbik7XG4gIH0gZWxzZSBpZiggb3B0aW9ucy5pZCApIHtcbiAgICBlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICggL14jLy50ZXN0KG9wdGlvbnMuaWQpID8gJycgOiAnIycgKSArIG9wdGlvbnMuaWQgKTtcbiAgfVxuXG4gIGVsZW1lbnRzID0gZWxCdXR0b24gPyBbZWxCdXR0b25dIDogW107XG5cbiAgaWYoIG9wdGlvbnMuc2VsZWN0b3IgKSB7XG4gICAgW10ucHVzaC5hcHBseSggZWxlbWVudHMsIF8uY3NzUXVlcnkob3B0aW9ucy5zZWxlY3RvcikgKTtcbiAgfVxuXG4gIGlmKCBvcHRpb25zLmRlc2NyaXB0aW9uICkge1xuICAgIFtdLnB1c2guYXBwbHkoIGVsZW1lbnRzLCBfLmNzc1F1ZXJ5KG9wdGlvbnMuZGVzY3JpcHRpb24pICk7XG4gIH1cblxuICBlbEJ1dHRvbiA9IGVsQnV0dG9uIHx8IGVsZW1lbnRzWzBdO1xuXG4gIGlmKCAhb3B0aW9ucy4kJHJ1bm5pbmcgJiYgb3B0aW9ucy5zZWxlY3RvciApIHtcbiAgICBvcHRpb25zLiQkcnVubmluZyA9IHRydWU7XG4gIH1cblxuICBpZiggIW9wdGlvbnMuZm9yY2VVcGRhdGUgJiYgKCAhZWxlbWVudHMubGVuZ3RoIHx8IF8uZWxlbWVudERhdGEoZWxCdXR0b24sICdidXR0b25Jbml0aWFsaXplZCcpICkgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3B0aW9ucy5mb3JjZVVwZGF0ZSA9IGZhbHNlO1xuXG4gIGlmKCBlbEJ1dHRvbiAmJiBvcHRpb25zLnBhcmVudCApIHtcbiAgICB2YXIgcGFyZW50ID0gZWxCdXR0b24ucGFyZW50RWxlbWVudDtcblxuICAgIHdoaWxlKCBwYXJlbnQgJiYgcGFyZW50ICE9PSBkb2N1bWVudC5ib2R5ICkge1xuICAgICAgaWYoIHBhcmVudC5tYXRjaGVzU2VsZWN0b3Iob3B0aW9ucy5wYXJlbnQpICkge1xuICAgICAgICBlbGVtZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiggZWwuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICkge1xuICAgICAgZWwuX19kaXNwbGF5ID0gZWwuc3R5bGUuZGlzcGxheTtcbiAgICB9XG4gICAgZWwuX19pbnB1dCA9ICggZWwubm9kZU5hbWUgPT09ICdJTlBVVCcgfHwgZWwubm9kZU5hbWUgPT09ICdCVVRUT04nICkgPyBlbCA6IGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LCBidXR0b24nKTtcblxuICAgIGlmKCBlbC5fX2lucHV0ICkge1xuICAgICAgZWwuX19pbnB1dC5fX2Rpc2FibGVkID0gZWwuX19pbnB1dC5fX2Rpc2FibGVkID09PSB1bmRlZmluZWQgPyBlbC5fX2lucHV0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSA6IGVsLl9faW5wdXQuX19kaXNhYmxlZDtcbiAgICAgIGVsLl9faW5wdXQuX19jaGVja2VkID0gZWwuX19pbnB1dC5fX2NoZWNrZWQgPT09IHVuZGVmaW5lZCA/IGVsLl9faW5wdXQuY2hlY2tlZCA6IGVsLl9faW5wdXQuX19jaGVja2VkO1xuICAgICAgaWYoIGVsLl9faW5wdXQuX19jaGVja2VkICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgIGVsLl9faW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYoICFlbC5fX2lucHV0Ll9fZGlzYWJsZWQgKSB7XG4gICAgICAgIGVsLl9faW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcblxuICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIF8uZWxlbWVudERhdGEoZWwsICdidXR0b25Jbml0aWFsaXplZCcsIHRydWUpO1xuICB9KTtcblxuICByZXR1cm4gYnV0dG9uLmNoZWNrKG9wdGlvbnMsIGZ1bmN0aW9uIChhbGxvd2VkKSB7XG4gICAgaWYoIGFsbG93ZWQgKSB7XG4gICAgICB2YXIgZWxtcyA9IGVsZW1lbnRzLnNsaWNlKCk7XG4gICAgICBlbG1zLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBlbC5fX2Rpc3BsYXk7XG4gICAgICAgIGlmICggZWwuX19pbnB1dCApIHtcbiAgICAgICAgICBpZiggIWVsLl9faW5wdXQuX19kaXNhYmxlZCAmJiBlbC5fX2lucHV0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSApIHtcbiAgICAgICAgICAgIGVsLl9faW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiggZWwuX19pbnB1dC5fX2NoZWNrZWQgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIGVsLl9faW5wdXQuY2hlY2tlZCA9IGVsLl9faW5wdXQuX19jaGVja2VkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5idXR0b24uY2hlY2sgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgaWYoIF8uaXNTdHJpbmcob3B0aW9ucykgfHwgXy5pc051bWJlcihvcHRpb25zKSApIHtcbiAgICBvcHRpb25zID0geyBhbW91bnQ6IE51bWJlcihvcHRpb25zKSB9O1xuICB9XG5cbiAgdmFyIHBhcmFtcyA9IHtcbiAgICBhbW91bnQ6IG9wdGlvbnMuYW1vdW50LFxuICAgIGN1cnJlbmN5OiBvcHRpb25zLmN1cnJlbmN5IHx8ICdFVVInXG4gIH07XG5cbiAgaWYoIG9wdGlvbnMuY291bnRyeSApIHtcbiAgICBwYXJhbXMuY291bnRyeSA9IG9wdGlvbnMuY291bnRyeTtcbiAgfVxuXG4gIHZhciBjaGVja1Byb21pc2UgPSBhcGlIdHRwLmdldCgnY2hlY2tvdXQvYnV0dG9uJywgeyBwYXJhbXM6IHBhcmFtcyB9KTtcblxuICBpZiggXy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSApIHtcbiAgICBjaGVja1Byb21pc2UudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgY2FsbGJhY2socmVzcG9uc2UuZGF0YS5hbGxvd2VkLCByZXNwb25zZSk7IH0sIGZ1bmN0aW9uIChyZXNwb25zZSkgeyBjYWxsYmFjayhmYWxzZSwgcmVzcG9uc2UpOyB9KTtcbiAgfVxuXG4gIHJldHVybiBjaGVja1Byb21pc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1dHRvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwaSA9IHJlcXVpcmUoJy4uL2NvcmUvYXBpJyksXG4gICAgXyA9IHJlcXVpcmUoJy4uL3Rvb2xzL3Rvb2xzJyksXG4gICAgaHR0cCA9IHJlcXVpcmUoJ2h0dHAtYnJvd3NlcicpLFxuICAgICRxID0gcmVxdWlyZSgncS1wcm9taXNlL25vLW5hdGl2ZScpLFxuICAgIGNzc0hhY2sgPSByZXF1aXJlKCcuLi90b29scy9jc3MtaGFjaycpO1xuXG5mdW5jdGlvbiBjaGVja291dCAob3B0aW9ucykge1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgYmFzZUNoZWNrb3V0ID0gKCBvcHRpb25zLmhvc3QgPT09ICdsb2NhdGlvbicgPyAoIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyAnLycgKSA6IG9wdGlvbnMuaG9zdCApIHx8ICdodHRwczovL2FwbGF6YW1lLmNvbS9zdGF0aWMvY2hlY2tvdXQvJztcblxuICBpZiggIS9cXC8kLy50ZXN0KGJhc2VDaGVja291dCkgKSB7XG4gICAgYmFzZUNoZWNrb3V0ICs9ICcvJztcbiAgfVxuXG4gIHZhciBvbiA9IHt9LFxuICAgICAgaWZyYW1lU3JjID0gYmFzZUNoZWNrb3V0ICsgJ2lmcmFtZS5odG1sPycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgIGVycm9yTG9hZGluZyA9IGZhbHNlLFxuICAgICAgdG1wT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgY3NzT3ZlcmxheSA9IGNzc0hhY2soJ292ZXJsYXknKSxcbiAgICAgIGNzc0JsdXIgPSBjc3NIYWNrKCdibHVyJyksXG4gICAgICBjc3NMb2dvID0gY3NzSGFjaygnbG9nbycpLFxuICAgICAgY3NzTW9kYWwgPSBjc3NIYWNrKCdtb2RhbCcpO1xuXG4gIGlmKCBvcHRpb25zLm1lcmNoYW50Lm9uU3VjY2VzcyApIHtcbiAgICBvbi5zdWNjZXNzID0gb3B0aW9ucy5tZXJjaGFudC5vblN1Y2Nlc3M7XG4gICAgZGVsZXRlIG9wdGlvbnMubWVyY2hhbnQub25TdWNjZXNzO1xuICB9XG4gIGlmKCBvcHRpb25zLm1lcmNoYW50Lm9uRXJyb3IgKSB7XG4gICAgb24uZXJyb3IgPSBvcHRpb25zLm1lcmNoYW50Lm9uRXJyb3I7XG4gICAgZGVsZXRlIG9wdGlvbnMubWVyY2hhbnQub25FcnJvcjtcbiAgfVxuICBpZiggb3B0aW9ucy5tZXJjaGFudC5vbkRpc21pc3MgKSB7XG4gICAgb24uZGlzbWlzcyA9IG9wdGlvbnMubWVyY2hhbnQub25EaXNtaXNzO1xuICAgIGRlbGV0ZSBvcHRpb25zLm1lcmNoYW50Lm9uRGlzbWlzcztcbiAgfVxuXG4gIHRtcE92ZXJsYXkuY2xhc3NOYW1lID0gJ2FwbGF6YW1lLW92ZXJsYXkgYXBsYXphbWUtb3ZlcmxheS1zaG93JztcblxuICBjc3NPdmVybGF5LmhhY2sodHJ1ZSk7XG4gIGNzc0xvZ28uaGFjayh0cnVlKTtcbiAgY3NzQmx1ci5oYWNrKHRydWUpO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGlmKCAhZXJyb3JMb2FkaW5nICkge1xuICAgICAgXy5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtYmx1cicpO1xuICAgIH1cbiAgfSwgMCk7XG5cbiAgdG1wT3ZlcmxheS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImFwbGF6YW1lLWxvZ28td3JhcHBlclwiPjxkaXYgY2xhc3M9XCJsb2dvLWFwbGF6YW1lXCIgc3R5bGU9XCJ3aWR0aDogMTUwcHg7IGhlaWdodDogMTUwcHg7XCI+JyArXG4gIHJlcXVpcmUoJy4vbG9hZGluZy1zdmcnKSArICc8L2Rpdj48ZGl2IGNsYXNzPVwiYXBsYXphbWUtb3ZlcmxheS1sb2FkaW5nLXRleHRcIj5DYXJnYW5kbyBwYXNhcmVsYSBkZSBwYWdvLi4uPC9kaXY+PC9kaXY+JztcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRtcE92ZXJsYXkpO1xuXG4gIHZhciBsb2FkaW5nVGV4dCA9IHRtcE92ZXJsYXkucXVlcnlTZWxlY3RvcignLmFwbGF6YW1lLW92ZXJsYXktbG9hZGluZy10ZXh0Jyk7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaWYoICFlcnJvckxvYWRpbmcgKSB7XG4gICAgICB0bXBPdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLWFwbGF6YW1lJykuY2xhc3NOYW1lICs9ICcgYW5pbWF0ZSc7XG4gICAgfVxuICB9LCAyMDApO1xuXG4gIG9wdGlvbnMuYXBpID0gXy5jb3B5KGFwaSk7XG5cbiAgcmV0dXJuIGh0dHAoIGlmcmFtZVNyYyApLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICB2YXIgaWZyYW1lSHRtbCA9IHJlc3BvbnNlLmRhdGEucmVwbGFjZSgvPGhlYWRcXD4vLCAnPGhlYWQ+PGJhc2UgaHJlZj1cIicgKyBiYXNlQ2hlY2tvdXQgKyAnXCIgLz4nKSxcbiAgICAgICAgICBpZnJhbWUgPSBfLmdldElGcmFtZSh7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzAnLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGh0dHBDaGVja291dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzdGFydGVkID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHJldHVybiBodHRwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGFwbGF6YW1lOiAnY2hlY2tvdXQnLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnaHR0cC1zdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBzdGFydGVkOiBzdGFydGVkLFxuICAgICAgICAgICAgICAgIGVsYXBzZWQ6IERhdGUubm93KCkgLSBzdGFydGVkLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBodHRwLnBsYWluUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgYXBsYXphbWU6ICdjaGVja291dCcsXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdodHRwLWVycm9yJyxcbiAgICAgICAgICAgICAgICBzdGFydGVkOiBzdGFydGVkLFxuICAgICAgICAgICAgICAgIGVsYXBzZWQ6IERhdGUubm93KCkgLSBzdGFydGVkLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBodHRwLnBsYWluUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcblxuICAgICAgaWZyYW1lLmNsYXNzTmFtZSA9ICdhcGxhemFtZS1tb2RhbCc7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgIGlmcmFtZS5zcmMgPSBpZnJhbWVTcmM7XG5cbiAgICAgIGlmKCAhb3B0aW9ucy5tZXJjaGFudCApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIG1lcmNoYW50IHBhcmFtZXRlcnMnKTtcbiAgICAgIH1cblxuICAgICAgaWYoICdzYW5kYm94JyBpbiBvcHRpb25zLm1lcmNoYW50ICkge1xuICAgICAgICBhcGkuc2FuZGJveCA9IG9wdGlvbnMubWVyY2hhbnQuc2FuZGJveDtcbiAgICAgIH1cblxuICAgICAgaWYoICFvcHRpb25zLm1lcmNoYW50LnB1YmxpY19hcGlfa2V5ICkge1xuICAgICAgICBpZiggYXBpLnB1YmxpY0tleSApIHtcbiAgICAgICAgICBvcHRpb25zLm1lcmNoYW50LnB1YmxpY19hcGlfa2V5ID0gYXBpLnB1YmxpY0tleTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgcHVibGljIGtleScpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMub3JpZ2luID0ge1xuICAgICAgICBocmVmOiBsb2NhdGlvbi5ocmVmLFxuICAgICAgICBob3N0OiBsb2NhdGlvbi5ob3N0LFxuICAgICAgICBwcm90b2NvbDogbG9jYXRpb24ucHJvdG9jb2wsXG4gICAgICAgIG9yaWdpbjogbG9jYXRpb24ub3JpZ2luXG4gICAgICB9O1xuXG4gICAgICB2YXIgb25NZXNzYWdlID0gZnVuY3Rpb24gKGUsIG1lc3NhZ2UpIHtcblxuICAgICAgICBzd2l0Y2goIG1lc3NhZ2UuZXZlbnQgKSB7XG4gICAgICAgICAgY2FzZSAnbWVyY2hhbnQnOlxuICAgICAgICAgICAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgICAgICAgICAgZS5zb3VyY2UucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICBjaGVja291dDogb3B0aW9uc1xuICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3Nob3ctaWZyYW1lJzpcbiAgICAgICAgICAgIF8ucmVtb3ZlQ2xhc3MoaWZyYW1lLCAnaGlkZScpO1xuICAgICAgICAgICAgY3NzTW9kYWwuaGFjayh0cnVlKTtcbiAgICAgICAgICAgIGNzc092ZXJsYXkuaGFjayhmYWxzZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRtcE92ZXJsYXkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbG9hZGluZy10ZXh0JzpcbiAgICAgICAgICAgIGxvYWRpbmdUZXh0LnRleHRDb250ZW50ID0gbWVzc2FnZS50ZXh0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZHJvcC1ibHVyJzpcbiAgICAgICAgICAgIF8ucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLWJsdXInKTtcbiAgICAgICAgICAgIF8uYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLXVuYmx1cicpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGNzc0JsdXIuaGFjayhmYWxzZSk7XG4gICAgICAgICAgICAgIF8ucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLWJsdXInKTtcbiAgICAgICAgICAgICAgXy5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtdW5ibHVyJyk7XG4gICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY29uZmlybSc6XG4gICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgICBfLmxvZygnYXBsYXphbWUuY2hlY2tvdXQ6Y29uZmlybScsIG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICBodHRwQ2hlY2tvdXQoIG9wdGlvbnMubWVyY2hhbnQuY29uZmlybWF0aW9uX3VybCwge1xuICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgZGF0YTogbWVzc2FnZS5kYXRhLFxuICAgICAgICAgICAgICBwYXJhbXM6IF8uZXh0ZW5kKG1lc3NhZ2UucGFyYW1zIHx8IHt9LCB7XG4gICAgICAgICAgICAgICAgb3JkZXJfaWQ6IG1lc3NhZ2UuZGF0YS5jaGVja291dF90b2tlbixcbiAgICAgICAgICAgICAgICBjaGVja291dF90b2tlbjogbWVzc2FnZS5kYXRhLmNoZWNrb3V0X3Rva2VuXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBlLnNvdXJjZS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgYXBsYXphbWU6ICdjaGVja291dCcsXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdjb25maXJtYXRpb24nLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBodHRwLnBsYWluUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGUuc291cmNlLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBhcGxhemFtZTogJ2NoZWNrb3V0JyxcbiAgICAgICAgICAgICAgICBldmVudDogJ2NvbmZpcm1hdGlvbicsXG4gICAgICAgICAgICAgICAgcmVzdWx0OiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBodHRwLnBsYWluUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNvbmZpcm1hdGlvbl91cmxcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgICAgICAgIGlmKCBpZnJhbWUgKSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgICAgICAgY3NzTW9kYWwuaGFjayhmYWxzZSk7XG4gICAgICAgICAgICAgIGlmcmFtZSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgXy5vbk1lc3NhZ2Uub2ZmKCdjaGVja291dCcsIG9uTWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgc3dpdGNoKCBtZXNzYWdlLnJlc3VsdCApIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2Ygb24uc3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgICAgICAgICAgICAgb24uc3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKCAhb3B0aW9ucy5tZXJjaGFudC5zdWNjZXNzX3VybCApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzdWNjZXNzX3VybCBtaXNzaW5nJyk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKG9wdGlvbnMubWVyY2hhbnQuc3VjY2Vzc191cmwpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2FuY2VsJzpcbiAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2Ygb24uZXJyb3IgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uLmVycm9yKCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoICFvcHRpb25zLm1lcmNoYW50LmNhbmNlbF91cmwgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2FuY2VsX3VybCBtaXNzaW5nJyk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKG9wdGlvbnMubWVyY2hhbnQuY2FuY2VsX3VybCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdkaXNtaXNzJzpcbiAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2Ygb24uZGlzbWlzcyA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgICAgICAgICAgICAgb24uZGlzbWlzcygpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShvcHRpb25zLm1lcmNoYW50LmNoZWNrb3V0X3VybCB8fCAnLycpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfLm9uTWVzc2FnZSgnY2hlY2tvdXQnLCBvbk1lc3NhZ2UpO1xuXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdjYW4gbm90IGNvbm5lY3QgdG8gJyArIGJhc2VDaGVja291dCk7XG4gICAgICBlcnJvckxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICBjb25zb2xlLmVycm9yKCdBcGxhemFtZSAnICsgcmVhc29uKTtcblxuICAgICAgXy5yZW1vdmVDbGFzcyh0bXBPdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLWFwbGF6YW1lJyksICdhbmltYXRlJyk7XG4gICAgICBsb2FkaW5nVGV4dC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cInRleHQtZXJyb3JcIj5FcnJvciBjYXJnYW5kbyBwYXNhcmVsYSBkZSBwYWdvPC9kaXY+PGJyLz48ZGl2PjxhIGhyZWY9XCJtYWlsdG86c29wb3J0ZUBhcGxhemFtZS5jb20/c3ViamVjdD0nICsgZW5jb2RlVVJJKCdDaGVja291dCBlcnJvcjogJyArIHJlYXNvbikgKyAnXCI+c29wb3J0ZUBhcGxhemFtZS5jb208L2E+PC9kaXY+JztcbiAgICAgIGxvYWRpbmdUZXh0LnN0eWxlLmxpbmVIZWlnaHQgPSAnMS41JztcblxuICAgICAgKG9wdGlvbnMub25FcnJvciB8fCBfLm5vb3ApKHJlYXNvbik7XG4gICAgfSk7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja291dDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF8gPSByZXF1aXJlKCcuLi90b29scy90b29scycpLFxuICAgIGh0dHAgPSByZXF1aXJlKCdodHRwLWJyb3dzZXInKTtcblxuZnVuY3Rpb24gcHJvY2Vzc1Jlc3BvbnNlKHJlc3VsdCwgbWVzc2FnZSwgbWVzc2FnZVNyYywgc3RhcnRlZCkge1xuXG4gIHJldHVybiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgIHZhciByZXNwb25zZXAgPSBodHRwLnBsYWluUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIHJlc3BvbnNlcC5jb25maWcgPSBtZXNzYWdlO1xuXG4gICAgbWVzc2FnZVNyYy5wb3N0TWVzc2FnZSh7XG4gICAgICBhcGxhemFtZTogJ2h0dHAnLFxuICAgICAgZXZlbnQ6ICdyZXNwb25zZScsXG4gICAgICBzdGFydGVkOiBzdGFydGVkLFxuICAgICAgZWxhcHNlZDogRGF0ZS5ub3coKSAtIHN0YXJ0ZWQsXG4gICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgIHJlc3BvbnNlOiByZXNwb25zZXBcbiAgICB9LCAnKicpO1xuICB9O1xufVxuXG5fLm9uTWVzc2FnZSgnaHR0cCcsIGZ1bmN0aW9uIChlLCBtZXNzYWdlKSB7XG5cbiAgdmFyIHN0YXJ0ZWQgPSBEYXRlLm5vdygpO1xuXG4gIGh0dHAoIG1lc3NhZ2UudXJsLCBtZXNzYWdlIClcbiAgICAudGhlbihcbiAgICAgIHByb2Nlc3NSZXNwb25zZSgnc3VjY2VzcycsIG1lc3NhZ2UsIGUuc291cmNlLCBzdGFydGVkKSxcbiAgICAgIHByb2Nlc3NSZXNwb25zZSgnZXJyb3InLCBtZXNzYWdlLCBlLnNvdXJjZSwgc3RhcnRlZClcbiAgICApO1xuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IHJlYWR5OiB0cnVlIH07XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gJzxzdmcgY2xhc3M9XCJsaW5lLXNob3J0XCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPicgK1xuJzxwYXRoICBkPVwiTTM2Ljc4OCw4MS4wMDgsNTAsNTBcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGZpbGw9XCJub25lXCIvPicgK1xuJzwvc3ZnPicgK1xuJzxzdmcgY2xhc3M9XCJzbWlsZVwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj4nICtcbic8ZyBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgZmlsbD1cIm5vbmVcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMC43ODAzNjYzMywwLDAsMC43ODAzNjYzMywxMC41MjY1MTIsMTguMDAzOTk4KVwiPicgK1xuJzxwYXRoIGNsYXNzPVwic21pbGUtb3V0bGluZVwiIHN0cm9rZS13aWR0aD1cIjEyXCIgZD1cIk03NS4yNDIsNTcuNTFjLTUuNDM1LDcuODM5LTE0LjQ5OCwxMi45NzItMjQuNzYxLDEyLjk3Mi0xMC4yNjIsMC0xOS4zMjUtNS4xMzItMjQuNzU4LTEyLjk3MlwiLz4nICtcbic8cGF0aCBjbGFzcz1cInNtaWxlLWxpbmVcIiBzdHJva2Utd2lkdGg9XCI3LjVcIiBkPVwiTTc1LjI0Miw1Ny41MWMtNS40MzUsNy44MzktMTQuNDk4LDEyLjk3Mi0yNC43NjEsMTIuOTcyLTEwLjI2MiwwLTE5LjMyNS01LjEzMi0yNC43NTgtMTIuOTcyXCIvPicgK1xuJzwvZz4nICtcbic8L3N2Zz4nICtcbic8c3ZnIGNsYXNzPVwibGluZS1sYXJnZVwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj4nICtcbic8cGF0aCBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNTAsNTAsNjYuNjg3LDkyLjI2NlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjRcIiBzdHJva2UtZGFzaGFycmF5PVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjZcIiBmaWxsPVwibm9uZVwiLz4nICtcbic8L3N2Zz4nO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG53aW5kb3cubWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhIHx8IHdpbmRvdy53ZWJraXRNYXRjaE1lZGlhIHx8IHdpbmRvdy5tb3pNYXRjaE1lZGlhIHx8IHdpbmRvdy5tc01hdGNoTWVkaWE7XG5cbnZhciBhcGkgPSByZXF1aXJlKCcuLi9jb3JlL2FwaScpLFxuICAgIF8gPSByZXF1aXJlKCcuLi90b29scy90b29scycpLFxuICAgIGNzc0hhY2sgPSByZXF1aXJlKCcuLi90b29scy9jc3MtaGFjaycpLFxuICAgIGFwbGF6YW1lVmVyc2lvbiA9IHJlcXVpcmUoJy4uLy4uLy50bXAvYXBsYXphbWUtdmVyc2lvbicpLFxuICAgIGlzTW9iaWxlID0gd2luZG93Lm1hdGNoTWVkaWEoJyggbWF4LXdpZHRoOiA3NjdweCApJyksXG4gICAgbGFzdFNjcm9sbFRvcDtcblxudmFyIHRtcE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICBjc3NPdmVybGF5ID0gY3NzSGFjaygnb3ZlcmxheScpLFxuICAgIGNzc0JsdXIgPSBjc3NIYWNrKCdibHVyJyksXG4gICAgY3NzTW9kYWwgPSBjc3NIYWNrKCdtb2RhbCcpO1xuXG5mdW5jdGlvbiBtb2RhbCAoY29udGVudCwgb3B0aW9ucykge1xuXG4gIGlmKCBtb2RhbC5pZnJhbWUgKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbC5pZnJhbWUpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgY3NzT3ZlcmxheS5oYWNrKHRydWUpO1xuICBjc3NCbHVyLmhhY2sodHJ1ZSk7XG4gIGNzc01vZGFsLmhhY2sodHJ1ZSk7XG5cbiAgdG1wT3ZlcmxheS5jbGFzc05hbWUgPSAnYXBsYXphbWUtb3ZlcmxheSBhcGxhemFtZS1vdmVybGF5LXNob3cnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRtcE92ZXJsYXkpO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIF8uYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLWJsdXInKTtcbiAgfSwgMCk7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIF8ucmVtb3ZlQ2xhc3ModG1wT3ZlcmxheSwgJ2FwbGF6YW1lLW92ZXJsYXktc2hvdycpO1xuICB9LCBpc01vYmlsZS5tYXRjaGVzID8gMCA6IDYwMCApO1xuXG4gIG1vZGFsLmlmcmFtZSA9IF8uZ2V0SUZyYW1lKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xuICAgICAgfSk7XG5cbiAgbW9kYWwuaWZyYW1lLmNsYXNzTmFtZSA9ICdhcGxhemFtZS1tb2RhbCc7XG4gIC8vIG1vZGFsLmlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBtb2RhbC5pZnJhbWUuY29udGVudCA9IGNvbnRlbnQ7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbC5pZnJhbWUpO1xuICBtb2RhbC5pZnJhbWUuc3JjID0gYXBpLnN0YXRpY1VybCArICd3aWRnZXRzL21vZGFsL21vZGFsLmh0bWw/dj0nICsgZW5jb2RlVVJJKGFwbGF6YW1lVmVyc2lvbik7XG59XG5cbl8ub25NZXNzYWdlKCdtb2RhbCcsIGZ1bmN0aW9uIChlLCBtZXNzYWdlKSB7XG5cbiAgc3dpdGNoKCBtZXNzYWdlLmV2ZW50ICkge1xuICAgIGNhc2UgJ29wZW4nOlxuICAgICAgbW9kYWwucmVmZXJyZXIgPSBlLnNvdXJjZTtcbiAgICAgIG1vZGFsLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgbW9kYWwobWVzc2FnZS5kYXRhKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ29wZW5pbmcnOlxuICAgICAgbW9kYWwuaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnb3BlbmVkJzpcbiAgICAgIGxhc3RTY3JvbGxUb3AgPSBfLnNjcm9sbFRvcCgpO1xuICAgICAgZS5zb3VyY2UucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBhcGxhemFtZTogJ21vZGFsJyxcbiAgICAgICAgZXZlbnQ6ICdjb250ZW50JyxcbiAgICAgICAgY29udGVudDogbW9kYWwuaWZyYW1lLmNvbnRlbnRcbiAgICAgIH0sICcqJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyZXNvbHZlZCc6XG4gICAgICBtb2RhbC5yZWZlcnJlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGFwbGF6YW1lOiAnbW9kYWwnLFxuICAgICAgICBldmVudDogJ3Jlc29sdmVkJyxcbiAgICAgICAgbmFtZTogbW9kYWwubWVzc2FnZS5uYW1lLFxuICAgICAgICB2YWx1ZTogbWVzc2FnZS52YWx1ZVxuICAgICAgfSwgJyonKTtcbiAgICAgIGRlbGV0ZSBtb2RhbC5yZWZlcnJlcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Nsb3NpbmcnOlxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IG1vZGFsLmlmcmFtZS5vdmVyZmxvdztcbiAgICAgIF8ucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLWJsdXInKTtcbiAgICAgIF8uYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLXVuYmx1cicpO1xuICAgICAgXy5hZGRDbGFzcyh0bXBPdmVybGF5LCAnYXBsYXphbWUtb3ZlcmxheS1oaWRlJyk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3NzQmx1ci5oYWNrKGZhbHNlKTtcbiAgICAgICAgXy5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtdW5ibHVyJyk7XG4gICAgICB9LCBpc01vYmlsZS5tYXRjaGVzID8gMCA6IDYwMCApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY2xvc2UnOlxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNzc01vZGFsLmhhY2soZmFsc2UpO1xuICAgICAgfSwgaXNNb2JpbGUubWF0Y2hlcyA/IDAgOiAxMDAgKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG1wT3ZlcmxheSk7XG4gICAgICBfLnJlbW92ZUNsYXNzKHRtcE92ZXJsYXksICdhcGxhemFtZS1vdmVybGF5LWhpZGUnKTtcbiAgICAgIF8uc2Nyb2xsVG9wKGxhc3RTY3JvbGxUb3ApO1xuICAgICAgaWYoIG1vZGFsLmlmcmFtZSApIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbC5pZnJhbWUpO1xuXG4gICAgICAgIGlmKCBtb2RhbC5yZWZlcnJlciApIHtcbiAgICAgICAgICBtb2RhbC5yZWZlcnJlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBhcGxhemFtZTogJ21vZGFsJyxcbiAgICAgICAgICAgIGV2ZW50OiAnZGlzbWlzcycsXG4gICAgICAgICAgICBuYW1lOiBtb2RhbC5tZXNzYWdlLm5hbWVcbiAgICAgICAgICB9LCAnKicpO1xuICAgICAgICAgIGRlbGV0ZSBtb2RhbC5yZWZlcnJlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCBtb2RhbC5tZXNzYWdlICkge1xuICAgICAgICAgIGRlbGV0ZSBtb2RhbC5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBtb2RhbC5pZnJhbWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2RhbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwaUh0dHAgPSByZXF1aXJlKCcuLi9jb3JlL2FwaS1odHRwJyksXG4gICAgXyA9IHJlcXVpcmUoJy4uL3Rvb2xzL3Rvb2xzJyksXG4gICAgJHEgPSByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJyksXG4gICAgY2FjaGUgPSBbXSxcbiAgICByZXF1ZXN0c0NhY2hlID0ge307XG5cbmZ1bmN0aW9uIHNpbXVsYXRvciAoYW1vdW50LCBfb3B0aW9ucywgY2FsbGJhY2ssIG9uRXJyb3IpIHtcblxuICBpZiggXy5pc0Z1bmN0aW9uKF9vcHRpb25zKSApIHtcbiAgICBvbkVycm9yID0gY2FsbGJhY2s7XG4gICAgY2FsbGJhY2sgPSBfb3B0aW9ucztcbiAgICBfb3B0aW9ucyA9IHt9O1xuICB9IGVsc2Uge1xuICAgIF9vcHRpb25zID0gX29wdGlvbnMgfHwge307XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYW1vdW50OiBhbW91bnRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhhc2ggPSBhbW91bnQgKyAnLCcgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcblxuICBpZiggcmVxdWVzdHNDYWNoZVtoYXNoXSApIHtcbiAgICByZXR1cm4gcmVxdWVzdHNDYWNoZVtoYXNoXS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIChjYWxsYmFjayB8fCBfLm5vb3ApKCByZXN1bHQuY2hvaWNlcywgcmVzdWx0Lm9wdGlvbnMgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmKCBfb3B0aW9ucy52aWV3ICkge1xuICAgIG9wdGlvbnMucGFyYW1zLnZpZXcgPSBfb3B0aW9ucy52aWV3O1xuICB9XG4gIGlmKCBfb3B0aW9ucy5wYXlkYXkgKSB7XG4gICAgb3B0aW9ucy5wYXJhbXMucGF5ZGF5ID0gX29wdGlvbnMucGF5ZGF5O1xuICB9XG4gIGlmKCBfb3B0aW9ucy5wdWJsaWNLZXkgKSB7XG4gICAgb3B0aW9ucy5wdWJsaWNLZXkgPSBfb3B0aW9ucy5wdWJsaWNLZXk7XG4gIH1cblxuICB2YXIgZm91bmRDYWNoZWQgPSBfLmZpbmQoY2FjaGUsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0uYW1vdW50ID09PSBhbW91bnQ7XG4gIH0pO1xuXG4gIHJlcXVlc3RzQ2FjaGVbaGFzaF0gPSAoICFfb3B0aW9ucy5ub0NhY2hlICYmIGZvdW5kQ2FjaGVkID8gJHEucmVzb2x2ZShmb3VuZENhY2hlZCkgOiBhcGlIdHRwLmdldCgnaW5zdGFsbWVudC1wbGFuLXNpbXVsYXRvcicsIG9wdGlvbnMgKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgIGNob2ljZXM6IHJlc3BvbnNlLmRhdGEuY2hvaWNlc1swXS5pbnN0YWxtZW50cyxcbiAgICAgICAgb3B0aW9uczogcmVzcG9uc2UuZGF0YS5vcHRpb25zLFxuICAgICAgICByZXNwb25zZTogcmVzcG9uc2VcbiAgICAgIH07XG4gICAgICBjYWNoZS5wdXNoKHJlc3VsdCk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSkgKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIChjYWxsYmFjayB8fCBfLm5vb3ApKCByZXN1bHQuY2hvaWNlcywgcmVzdWx0Lm9wdGlvbnMgKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiggcmVzcG9uc2Uuc3RhdHVzID09PSA0MDMgKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FwbGF6YW1lOiBQZXJtaXNvIGRlbmVnYWRvIHVzYW5kbyBsYSBjbGF2ZSBww7pibGljYTogJyArIHJlc3BvbnNlLmNvbmZpZy5wdWJsaWNLZXkpO1xuICAgICAgICBjb25zb2xlLmluZm8oJ1JldmlzYSBsYSBjb25maWd1cmFjacOzbiBkZSBBcGxhemFtZSwgcGFyYSBjdWFscXVpZXIgZHVkYSBwdWVkZXMgZXNjcmliaXIgYSBob2xhQGFwbGF6YW1lLmNvbScpO1xuICAgICAgfSBlbHNlIGlmKCBfLmtleShyZXNwb25zZSwgJ2RhdGEuZXJyb3IuZmllbGRzLmFtb3VudC4wJykgKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FwbGF6YW1lOiAnICsgcmVzcG9uc2UuZGF0YS5lcnJvci5maWVsZHMuYW1vdW50WzBdKTtcbiAgICAgIH0gZWxzZSBpZiggXy5rZXkocmVzcG9uc2UsICdkYXRhLmVycm9yLm1lc3NhZ2UnKSApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQXBsYXphbWU6ICcgKyByZXNwb25zZS5kYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgKG9uRXJyb3IgfHwgXy5ub29wKShyZXNwb25zZSk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHJlcXVlc3RzQ2FjaGVbaGFzaF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2ltdWxhdG9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXB6VmVyc2lvbiA9IHJlcXVpcmUoJy4uLy4uLy50bXAvYXBsYXphbWUtdmVyc2lvbicpLFxuICAgIF8gPSByZXF1aXJlKCcuLi90b29scy90b29scycpLFxuICAgIGFwaSA9IHJlcXVpcmUoJy4vYXBpJyksXG4gICAgaHR0cCA9IHJlcXVpcmUoJ2h0dHAtYnJvd3NlcicpLFxuICAgIHJlbmRlckFjY2VwdCA9IF8udGVtcGxhdGUuY29tcGlsZSgnYXBwbGljYXRpb24vdm5kLmFwbGF6YW1lPCUgaWYoc2FuZGJveCl7ICU+LnNhbmRib3g8JSB9ICU+LnY8JT0gdmVyc2lvbiAlPitqc29uJyksXG4gICAgYWNjZXB0SGVhZGVyID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgdmFyIF9hcGkgPSBfLmNvcHkoYXBpKTtcbiAgICAgIGlmKCAndmVyc2lvbicgaW4gY29uZmlnIHx8ICdhcGlWZXJzaW9uJyBpbiBjb25maWcgKSB7XG4gICAgICAgIF9hcGkudmVyc2lvbiA9ICd2ZXJzaW9uJyBpbiBjb25maWcgPyBjb25maWcudmVyc2lvbiA6IGNvbmZpZy5hcGlWZXJzaW9uO1xuICAgICAgfVxuICAgICAgaWYoICdzYW5kYm94JyBpbiBjb25maWcgKSB7XG4gICAgICAgIF9hcGkuc2FuZGJveCA9IGNvbmZpZy5zYW5kYm94O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlbmRlckFjY2VwdChfYXBpKTtcbiAgICB9LFxuICAgIGF1dGhvcml6YXRpb25IZWFkZXIgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICBjb25maWcucHVibGljS2V5ID0gY29uZmlnLnB1YmxpY0tleSB8fCBhcGkucHVibGljS2V5O1xuICAgICAgcmV0dXJuICdCZWFyZXIgJyArIGNvbmZpZy5wdWJsaWNLZXk7XG4gICAgfTtcblxudmFyIGFwaUh0dHAgPSB7fTtcblxuXy5lYWNoKFsnZ2V0JywgJ2RlbGV0ZSddLCBmdW5jdGlvbiAobWV0aG9kKSB7XG4gIGFwaUh0dHBbbWV0aG9kXSA9IGZ1bmN0aW9uIChwYXRoLCBvcHRpb25zKSB7XG4gICAgdmFyIHVybCA9IF8uam9pblBhdGgoYXBpLmhvc3QsIHBhdGgpO1xuICAgIHJldHVybiBodHRwW21ldGhvZF0odXJsLCBfLm1lcmdlKG9wdGlvbnMsIHsgaGVhZGVyczoge1xuICAgICAgICB4QWpzVmVyc2lvbjogYXB6VmVyc2lvbixcbiAgICAgICAgYWNjZXB0OiBhY2NlcHRIZWFkZXIsXG4gICAgICAgIGF1dGhvcml6YXRpb246IGF1dGhvcml6YXRpb25IZWFkZXJcbiAgICAgIH0gfSkgKTtcbiAgfTtcbn0pO1xuXG5fLmVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiAobWV0aG9kKSB7XG4gIGFwaUh0dHBbbWV0aG9kXSA9IGZ1bmN0aW9uIChwYXRoLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgdmFyIHVybCA9IF8uam9pblBhdGgoYXBpLmhvc3QsIHBhdGgpO1xuICAgIHJldHVybiBodHRwW21ldGhvZF0odXJsLCBkYXRhLCBfLm1lcmdlKG9wdGlvbnMsIHsgaGVhZGVyczoge1xuICAgICAgICB4QWpzVmVyc2lvbjogYXB6VmVyc2lvbixcbiAgICAgICAgYWNjZXB0OiBhY2NlcHRIZWFkZXIsXG4gICAgICAgIGF1dGhvcml6YXRpb246IGF1dGhvcml6YXRpb25IZWFkZXJcbiAgICAgIH0gfSkgKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwaUh0dHA7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBob3N0OiAnaHR0cHM6Ly9hcGkuYXBsYXphbWUuY29tLycsXG4gIC8vIGhvc3Q6ICdodHRwczovL2FwaS5hcGxhemFtZS5jb20vJyxcbiAgc3RhdGljVXJsOiAnaHR0cHM6Ly9hcGxhemFtZS5jb20vc3RhdGljLycsXG4gIHZlcnNpb246IDEsXG4gIGNoZWNrb3V0VmVyc2lvbjogMSxcbiAgc2FuZGJveDogZmFsc2Vcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBfOiByZXF1aXJlKCcuLi90b29scy90b29scycpLFxuICBpbml0OiByZXF1aXJlKCcuL2luaXQnKSxcbiAgYXBpR2V0OiByZXF1aXJlKCcuL2FwaS1odHRwJykuZ2V0LFxuICBhcGlQb3N0OiByZXF1aXJlKCcuL2FwaS1odHRwJykucG9zdCxcbiAgYXBpRGVsZXRlOiByZXF1aXJlKCcuL2FwaS1odHRwJylbJ2RlbGV0ZSddLFxuICBhcGlQdXQ6IHJlcXVpcmUoJy4vYXBpLWh0dHAnKS5wdXQsXG4gIHZlcnNpb246IHJlcXVpcmUoJy4uLy4uLy50bXAvYXBsYXphbWUtdmVyc2lvbicpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBpID0gcmVxdWlyZSgnLi9hcGknKSxcbiAgICBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKTtcblxuZnVuY3Rpb24gaW5pdCAob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiggdHlwZW9mIG9wdGlvbnMudmVyc2lvbiA9PT0gJ3N0cmluZycgKSB7XG4gICAgdmFyIG1hdGNoVmVyc2lvbiA9IG9wdGlvbnMudmVyc2lvbi5tYXRjaCgvXnY/KFxcZCkoXFwuKFxcZCkpPyQvKTtcblxuICAgIGlmKCAhbWF0Y2hWZXJzaW9uICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd2ZXJzaW9uIG1pc21hdGNoLCBzaG91bGQgYmUgbGlrZSBcXCd2MS4yXFwnJyk7XG4gICAgfVxuXG4gICAgb3B0aW9ucy52ZXJzaW9uID0gTnVtYmVyKG1hdGNoVmVyc2lvblsxXSk7XG5cbiAgICBpZiggbWF0Y2hWZXJzaW9uWzNdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICBvcHRpb25zLmNoZWNrb3V0VmVyc2lvbiA9IE51bWJlcihtYXRjaFZlcnNpb25bM10pO1xuICAgIH1cbiAgfVxuXG4gIGlmKCB0eXBlb2Ygb3B0aW9ucy5zYW5kYm94ID09PSAnc3RyaW5nJyApIHtcbiAgICBvcHRpb25zLnNhbmRib3ggPSBvcHRpb25zLnNhbmRib3ggPT09ICd0cnVlJztcbiAgfVxuXG4gIGlmKCB0eXBlb2Ygb3B0aW9ucy5hbmFseXRpY3MgPT09ICdzdHJpbmcnICkge1xuICAgIG9wdGlvbnMuYW5hbHl0aWNzID0gb3B0aW9ucy5hbmFseXRpY3MgPT09ICd0cnVlJztcbiAgfVxuXG4gIF8uZXh0ZW5kKGFwaSwgb3B0aW9ucyk7XG5cbiAgXy5sb2coJ2FwbGF6YW1lLmluaXQnLCBhcGkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFwbGF6YW1lKSB7XG5cbiAgdmFyIF8gPSBhcGxhemFtZS5fLFxuICAgICAgc2NyaXB0ID0gXy5jdXJyZW50U2NyaXB0LFxuICAgICAgZGF0YUFwbGF6YW1lID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1hcGxhemFtZScpLFxuICAgICAgb3B0aW9ucyA9IHNjcmlwdC5zcmMgJiYgKC9cXD8vLnRlc3Qoc2NyaXB0LnNyYykgPyBfLmRlc2VyaWFsaXplKHNjcmlwdC5zcmMubWF0Y2goLyguKj8pXFw/KC4qKS8pWzJdKSA6IHt9KSB8fCB7fTtcblxuICBpZiggb3B0aW9ucy5zYW5kYm94ICkge1xuICAgIG9wdGlvbnMuc2FuZGJveCA9IG9wdGlvbnMuc2FuZGJveCA9PT0gJ3RydWUnIHx8IG9wdGlvbnMuc2FuZGJveCA9PT0gJzEnO1xuICB9XG5cbiAgaWYoIGRhdGFBcGxhemFtZSApIHtcblxuICAgIGlmKCAvXFw6Ly50ZXN0KGRhdGFBcGxhemFtZSkgKSB7XG4gICAgICBkYXRhQXBsYXphbWUuc3BsaXQoJywnKS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJ0KSB7XG4gICAgICAgIHZhciBrZXlzID0gcGFydC5tYXRjaCgvXihbXlxcOl0rKVxcOiguKikvKTtcbiAgICAgICAgb3B0aW9uc1trZXlzWzFdLnRyaW0oKV0gPSBrZXlzWzJdLnRyaW0oKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiggIW9wdGlvbnMucHVibGljS2V5ICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3B1YmxpY0tleSBtaXNzaW5nIGluIGRhdGEtYXBsYXphbWUnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5wdWJsaWNLZXkgPSBkYXRhQXBsYXphbWU7XG4gICAgfVxuXG4gICAgaWYoIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXBpLWhvc3QnKSApIHtcbiAgICAgIG9wdGlvbnMuaG9zdCA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXBpLWhvc3QnKTtcbiAgICB9XG5cbiAgICBpZiggc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS12ZXJzaW9uJykgKSB7XG4gICAgICBvcHRpb25zLnZlcnNpb24gPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLXZlcnNpb24nKTtcbiAgICB9XG5cbiAgICBpZiggc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1zYW5kYm94JykgKSB7XG4gICAgICBvcHRpb25zLnNhbmRib3ggPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLXNhbmRib3gnKTtcbiAgICB9XG5cbiAgICBpZiggc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1hbmFseXRpY3MnKSApIHtcbiAgICAgIG9wdGlvbnMuYW5hbHl0aWNzID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1hbmFseXRpY3MnKTtcbiAgICB9XG5cbiAgICBpZiggc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGF0aWMtdXJsJykgKSB7XG4gICAgICBvcHRpb25zLnN0YXRpY1VybCA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGljLXVybCcpO1xuICAgIH1cblxuICAgIGlmKCBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWNhbGxiYWNrJykgKSB7XG4gICAgICAvLyBpZiggdHlwZW9mIGdsb2JhbFtzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWNhbGxiYWNrJyldICE9PSAnZnVuY3Rpb24nICkge1xuICAgICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIHNob3VsZCBiZSBhIGdsb2JhbCBmdW5jdGlvbicpO1xuICAgICAgLy8gfVxuXG4gICAgICBvcHRpb25zLmNhbGxiYWNrID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1jYWxsYmFjaycpO1xuICAgICAgLy8gXy5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAvLyAgIGdsb2JhbFtzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWNhbGxiYWNrJyldKGFwbGF6YW1lKTtcbiAgICAgIC8vIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFwbGF6YW1lLmluaXQob3B0aW9ucyk7XG5cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFwbGF6YW1lKSB7XG4gIHZhciBfID0gYXBsYXphbWUuXyxcbiAgICAgICRxID0gcmVxdWlyZSgncS1wcm9taXNlL25vLW5hdGl2ZScpO1xuXG4gIGZ1bmN0aW9uIGJ1dHRvbnNMb29rdXAgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50ID0gZWxlbWVudCB8fCBkb2N1bWVudDtcbiAgICBpZiggIWVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGJ0bnMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFwbGF6YW1lLWJ1dHRvbl0nKTtcblxuICAgIGlmKCBidG5zLmxlbmd0aCApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcuYnRuKHMpJywgYnRucyk7XG4gICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcblxuICAgICAgXy5lYWNoKGJ0bnMsIGZ1bmN0aW9uIChidG4pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJy5idG4nLCBhcmd1bWVudHMsIGJ0bnMpO1xuICAgICAgICB2YXIgYnRuSWQgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFwbGF6YW1lLWJ1dHRvbicpLFxuICAgICAgICAgICAgYnRuUGFyYW1zID0ge1xuICAgICAgICAgICAgICBzZWxlY3RvcjogJ1tkYXRhLWFwbGF6YW1lLWJ1dHRvbicgKyAoIGJ0bklkID8gKCc9XFxcIicgKyBidG5JZCArICdcXFwiJykgOiAnJyApICsgJ10sIFtkYXRhLWFwbGF6YW1lLWJ1dHRvbi1pbmZvJyArICggYnRuSWQgPyAoJz1cXFwiJyArIGJ0bklkICsgJ1xcXCInKSA6ICcnICkgKyAnXScsXG4gICAgICAgICAgICAgIHBhcmVudDogYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQnKSxcbiAgICAgICAgICAgICAgcHVibGljS2V5OiBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXB1YmxpYy1rZXknKSxcbiAgICAgICAgICAgICAgYW1vdW50OiBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFtb3VudCcpLFxuICAgICAgICAgICAgICBjdXJyZW5jeTogYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1jdXJyZW5jeScpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgc2FuZGJveDogYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1zYW5kYm94JykgPyBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXNhbmRib3gnKSA9PT0gJ3RydWUnIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBjb3VudHJ5OiBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWNvdW50cnknKSB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgcHJvbWlzZXMucHVzaCggYXBsYXphbWUuYnV0dG9uKGJ0blBhcmFtcykgKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiggcHJvbWlzZXMubGVuZ3RoICkge1xuICAgICAgICByZXR1cm4gJHEuYWxsKHByb21pc2VzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAkcS5yZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkcS5yZXNvbHZlKCk7XG4gICAgfVxuICB9XG5cbiAgXy5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgYnV0dG9uc0xvb2t1cCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgXy5saXZlRE9NLnN1YnNjcmliZShidXR0b25zTG9va3VwKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGJ1dHRvbnNMb29rdXA7XG5cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFwbGF6YW1lKSB7XG5cbiAgdmFyIF8gPSBhcGxhemFtZS5fLFxuICAgICAgJHEgPSByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJyksXG4gICAgICBFdmVudHMgPSByZXF1aXJlKCdldmVudHMtd3JhcHBlcicpLFxuICAgICAgYXBpID0gcmVxdWlyZSgnLi4vY29yZS9hcGknKSxcbiAgICAgIGlzTW9iaWxlID0gd2luZG93Lm1hdGNoTWVkaWEoJyggbWF4LXdpZHRoOiA3NjdweCApJyksXG4gICAgICBlYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG5cbiAgZnVuY3Rpb24gZ2V0UXR5IChxdHlTZWxlY3Rvcikge1xuICAgIGlmKCAhXy5pc1N0cmluZyhxdHlTZWxlY3RvcikgKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ3dhcm5pbmc6IGRhdGEtcXR5IHNob3VsZCBiZSBhbiBzdHJpbmcuIHBlOiBmb3JtI2FydGljbGUgLmZpbmFsLXByaWNlICcpO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHZhciBxdHlFbGVtZW50O1xuICAgIHRyeSB7XG4gICAgICBxdHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdHlTZWxlY3Rvcik7XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIGNvbnNvbGUud2FybihlcnIubWVzc2FnZSArICdcXG5kYXRhLXF0eSBzaG91bGQgYmUgYW4gc3RyaW5nLiBwZTogZm9ybSNhcnRpY2xlIC5maW5hbC1wcmljZSAnKTtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHN3aXRjaCggcXR5RWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICkge1xuICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICByZXR1cm4gTnVtYmVyKCBxdHlFbGVtZW50LnZhbHVlICk7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICByZXR1cm4gTnVtYmVyKCBxdHlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvbltzZWxlY3RlZF0nKS52YWx1ZSApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIE51bWJlciggcXR5RWxlbWVudC50ZXh0Q29udGVudC50cmltKCkgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY21zUHJpY2VTZWxlY3RvciA9IFtcbiAgICAnZm9ybSNwcm9kdWN0X2FkZHRvY2FydF9mb3JtIC5zcGVjaWFsLXByaWNlIC5wcmljZScsIC8vIG1hZ2VudG9cbiAgICAnZm9ybSNwcm9kdWN0X2FkZHRvY2FydF9mb3JtIC5yZWd1bGFyLXByaWNlIC5wcmljZScsIC8vIG1hZ2VudG9cbiAgICAnI3Byb2R1Y3QtaW5mbyAuc3BlY2lhbC1wcmljZSAucHJpY2UnLCAvLyBtYWdlbnRvXG4gICAgJyNwcm9kdWN0LWluZm8gLnJlZ3VsYXItcHJpY2UgLnByaWNlJywgLy8gbWFnZW50b1xuICAgICdmb3JtI2J1eV9ibG9jayAjb3VyX3ByaWNlX2Rpc3BsYXknLCAvLyBwcmVzdGFzaG9wXG4gICAgJyNtYWluIFtpdGVtdHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL1Byb2R1Y3RcIl0gW2l0ZW10eXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvT2ZmZXJcIl0gLnByaWNlIGlucyAuYW1vdW50JywgLy8gd29vY29tbWVyY2VcbiAgICAnI21haW4gW2l0ZW10eXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvUHJvZHVjdFwiXSBbaXRlbXR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9PZmZlclwiXSAucHJpY2UgLmFtb3VudCcsIC8vIHdvb2NvbW1lcmNlXG4gICAgJ1tpdGVtdHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL1Byb2R1Y3RcIl0gW2l0ZW10eXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvT2ZmZXJcIl0gW2l0ZW1wcm9wPVwicHJpY2VcIl0nIC8vIFNjaGVtYS5vcmdcbiAgXSxcbiAgY21zUXR5U2VsZWN0b3IgPSBbXG4gICAgJ2Zvcm0jcHJvZHVjdF9hZGR0b2NhcnRfZm9ybSBpbnB1dFtuYW1lPVwicXR5XCJdJywgLy8gbWFnZW50b1xuICAgICdmb3JtI2J1eV9ibG9jayBpbnB1dFtuYW1lPVwicXR5XCJdJywgLy8gcHJlc3Rhc2hvcFxuICAgICcjcXVhbnRpdHlfd2FudGVkJywgLy8gcHJlc3Rhc2hvcFxuICAgICdmb3JtI3Byb2R1Y3Qtb3B0aW9ucy1mb3JtIGJ1dHRvbltkYXRhLWlkPXF0eV0nLCAvLyBjdXN0b21cbiAgICAnI21haW4gW2l0ZW10eXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvUHJvZHVjdFwiXSBmb3JtLmNhcnQgaW5wdXRbbmFtZT1cInF1YW50aXR5XCJdJyAvLyB3b29jb21tZXJjZVxuICBdO1xuXG4gIGZ1bmN0aW9uIG1hdGNoU2VsZWN0b3IgKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG5cbiAgZnVuY3Rpb24gYW1vdW50R2V0dGVyICh3aWRnZXRFbGVtZW50KSB7XG4gICAgdmFyIHByaWNlU2VsZWN0b3IgPSB3aWRnZXRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpLFxuICAgICAgICBxdHlTZWxlY3RvciA9IHdpZGdldEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXF0eScpLFxuICAgICAgICBhdXRvRGlzY292ZXJlZCA9IGZhbHNlO1xuXG4gICAgaWYoIHByaWNlU2VsZWN0b3IgKSB7XG4gICAgICAvLyB0cnl7XG4gICAgICAvLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJpY2VTZWxlY3Rvcik7XG4gICAgICAvLyB9IGNhdGNoKGVycikge1xuICAgICAgLy8gICBwcmljZVNlbGVjdG9yID0gbnVsbDtcbiAgICAgIC8vICAgY29uc29sZS53YXJuKGVyci5tZXNzYWdlKTtcbiAgICAgIC8vIH1cbiAgICAgIGlmKCBxdHlTZWxlY3RvciApIHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXR5U2VsZWN0b3IpO1xuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgIHF0eVNlbGVjdG9yID0gbnVsbDtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByaWNlU2VsZWN0b3IgPSBfLmZpbmQoY21zUHJpY2VTZWxlY3RvciwgbWF0Y2hTZWxlY3Rvcik7XG5cbiAgICAgIGlmKCBwcmljZVNlbGVjdG9yICkge1xuICAgICAgICBxdHlTZWxlY3RvciA9IF8uZmluZChjbXNRdHlTZWxlY3RvciwgbWF0Y2hTZWxlY3Rvcik7XG4gICAgICAgIGF1dG9EaXNjb3ZlcmVkID0gdHJ1ZTtcblxuICAgICAgICBfLmxvZygnYXV0by1kaXNjb3ZlcmVkIHByaWNlIHNlbGVjdG9yJywgcHJpY2VTZWxlY3RvciwgcXR5U2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBnZXR0ZXIgPSBwcmljZVNlbGVjdG9yID8gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHF0eSA9IHF0eVNlbGVjdG9yID8gZ2V0UXR5KCBxdHlTZWxlY3RvciApIDogMSwgcHJpY2VFbGVtZW50O1xuICAgICAgdHJ5IHtcbiAgICAgICAgcHJpY2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggcHJpY2VTZWxlY3RvciApO1xuICAgICAgfSBjYXRjaChlcnIpIHt9XG5cbiAgICAgIHZhciBhbW91bnQgPSBwcmljZUVsZW1lbnQgPyBwcmljZUVsZW1lbnQudmFsdWUgOiAnMCc7XG5cbiAgICAgIGlmKCB0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJyApIHtcbiAgICAgICAgaWYoICEvXFxkK1ssLl1cXGQrLy50ZXN0KHByaWNlRWxlbWVudC50ZXh0Q29udGVudCkgJiYgcHJpY2VFbGVtZW50LmNoaWxkcmVuICYmIHByaWNlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggKSB7XG4gICAgICAgICAgYW1vdW50ID0gJyc7XG5cbiAgICAgICAgICB2YXIgcGFydCA9IHByaWNlRWxlbWVudC5maXJzdENoaWxkLCBtYXRjaGVkO1xuXG4gICAgICAgICAgd2hpbGUoIHBhcnQgKSB7XG4gICAgICAgICAgICBpZiggL1ssLl0vLnRlc3QoYW1vdW50KSApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2hlZCA9ICggcGFydC50b1N0cmluZygpID09PSAnW29iamVjdCBUZXh0XScgPyBwYXJ0LmRhdGEgOiBwYXJ0LnRleHRDb250ZW50ICkubWF0Y2goL1tcXGQsLl0rLyk7XG5cbiAgICAgICAgICAgIGlmKCBtYXRjaGVkICkge1xuICAgICAgICAgICAgICBhbW91bnQgKz0gKGFtb3VudCAmJiAhL15bLC5dLy50ZXN0KG1hdGNoZWRbMF0pID8gJy4nIDogJycpICsgbWF0Y2hlZFswXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFydCA9IHBhcnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYoIHByaWNlRWxlbWVudC50ZXh0Q29udGVudCApIHtcbiAgICAgICAgICBhbW91bnQgPSBwcmljZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgIH0gZWxzZSBpZiggcHJpY2VFbGVtZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpICkge1xuICAgICAgICAgIGFtb3VudCA9IHByaWNlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYW1vdW50ICYmIF8ucGFyc2VQcmljZSggYW1vdW50ICk7XG4gICAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHJldHVybiBOdW1iZXIoIHdpZGdldEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWFtb3VudCcpICk7XG4gICAgICByZXR1cm47XG4gICAgfTtcblxuICAgIGdldHRlci5wcmljZVNlbGVjdG9yID0gcHJpY2VTZWxlY3RvcjtcbiAgICBnZXR0ZXIucXR5U2VsZWN0b3IgPSBxdHlTZWxlY3RvcjtcbiAgICBnZXR0ZXIuYXV0b0Rpc2NvdmVyZWQgPSBhdXRvRGlzY292ZXJlZDtcblxuICAgIHJldHVybiBnZXR0ZXI7XG4gIH1cblxuICBmdW5jdGlvbiBJZnJhbWUgKHVybCkge1xuICAgIHZhciBlbCA9IF8uZ2V0SUZyYW1lKHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnNDBweCcgfSksXG4gICAgICAgIGlmcmFtZSA9IHRoaXM7XG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuZWwuc3JjID0gdXJsO1xuXG4gICAgbmV3IEV2ZW50cyAodGhpcyk7XG5cbiAgICB0aGlzLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudHJpZ2dlcignbG9hZCcsIG51bGwsIHRoaXMpO1xuICAgIH07XG5cbiAgICBfLm9uTWVzc2FnZSgnc2ltdWxhdG9yJywgZnVuY3Rpb24gKGUsIG1lc3NhZ2UpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdtZXNzYWdlLnNpbXVsYXRvcicsIGUsIG1lc3NhZ2UpO1xuICAgICAgaWYoIGUuc291cmNlID09PSBlbC5jb250ZW50V2luZG93ICkge1xuICAgICAgICBpZnJhbWUudHJpZ2dlcignbWVzc2FnZTonICsgbWVzc2FnZS5ldmVudCwgW21lc3NhZ2VdLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub24oJ21lc3NhZ2U6cmVzaXplJywgZnVuY3Rpb24gKGUsIG1lc3NhZ2UpIHtcbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9IG1lc3NhZ2UuaGVpZ2h0ICsgJ3B4JztcbiAgICB9KTtcbiAgfVxuXG4gIElmcmFtZS5wcm90b3R5cGUubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgX2RhdGEgPSBfLmV4dGVuZCh7XG4gICAgICBhcGxhemFtZTogJ3NpbXVsYXRvcicsXG4gICAgICBldmVudDogZXZlbnROYW1lLFxuICAgICAgbW9iaWxlOiBpc01vYmlsZS5tYXRjaGVzXG4gICAgfSwgZGF0YSB8fCB7fSk7XG4gICAgaWYoIHRoaXMuZWwuY29udGVudFdpbmRvdyApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpZnJhbWUgbWVzc2FnZScsIGV2ZW50TmFtZSwgX2RhdGEsIHRoaXMpO1xuICAgICAgdGhpcy5lbC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKF9kYXRhLCAnKicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2lmcmFtZSBjb250ZW50V2luZG93IG1pc3NpbmcnLCB0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gbWF4SW5zdGFsbWVudHMgKHByZXYsIGNob2ljZSkge1xuICAgIGlmKCBwcmV2ID09PSBudWxsICkge1xuICAgICAgcmV0dXJuIGNob2ljZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNob2ljZS5udW1faW5zdGFsbWVudHMgPiBwcmV2Lm51bV9pbnN0YWxtZW50cyA/IGNob2ljZSA6IHByZXY7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2lkZ2V0IChtZXRhKSB7XG4gICAgaWYoICFtZXRhLm9wdGlvbnMud2lkZ2V0ICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGdldFdpZGdldC5zZXJpYWwgPSBnZXRXaWRnZXQuc2VyaWFsID8gZ2V0V2lkZ2V0LnNlcmlhbCArIDEgOiAxO1xuXG4gICAgdmFyIHdpZGdldCxcbiAgICAgICAgaWQgPSBnZXRXaWRnZXQuc2VyaWFsO1xuXG4gICAgaWYoIG1ldGEub3B0aW9ucy53aWRnZXQudHlwZSA9PT0gJ2J1dHRvbicgKSB7XG4gICAgICB3aWRnZXQgPSBuZXcgSWZyYW1lKCBhcGkuc3RhdGljVXJsICsgJ3dpZGdldHMvc2ltdWxhdG9yL3NpbXVsYXRvci5odG1sPycgKyBEYXRlLm5vdygpICsgJyZzaW11bGF0b3I9JyArIGlkICk7XG5cbiAgICAgIHdpZGdldC5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpZGdldC5tZXNzYWdlKCdjaG9pY2VzJywge1xuICAgICAgICAgIGFtb3VudDogbWV0YS5hbW91bnQsXG4gICAgICAgICAgY2hvaWNlOiBtZXRhLmNob2ljZXMucmVkdWNlKG1heEluc3RhbG1lbnRzLCBudWxsKSxcbiAgICAgICAgICBjaG9pY2VzOiBtZXRhLmNob2ljZXMsXG4gICAgICAgICAgb3B0aW9uczogbWV0YS5vcHRpb25zXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgd2lkZ2V0Lm9uKCdjaG9pY2VzLnVwZGF0aW5nJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgd2lkZ2V0Lm1lc3NhZ2UoJ2xvYWRpbmcnKTtcbiAgICAgIH0pO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIF8udGVtcGxhdGUucHV0KCd3aWRnZXQtcmF3JywgcmVxdWlyZSgnLi4vLi4vLnRtcC9zaW11bGF0b3IvdGVtcGxhdGVzL3dpZGdldC1yYXcnKSApO1xuICAgICAgd2lkZ2V0ID0geyBlbDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgfTtcbiAgICAgIG5ldyBFdmVudHMod2lkZ2V0KTtcblxuICAgICAgd2lkZ2V0Lm9uKCdjaG9pY2VzLnVwZGF0aW5nJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgd2lkZ2V0LmVsLnN0eWxlLm9wYWNpdHkgPSAwLjU7XG4gICAgICB9KTtcblxuICAgICAgd2lkZ2V0LnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2lkZ2V0LmVsLnN0eWxlLm9wYWNpdHkgPSBudWxsO1xuICAgICAgICB3aWRnZXQuZWwuaW5uZXJIVE1MID0gXy50ZW1wbGF0ZSgnd2lkZ2V0LXJhdycsIHtcbiAgICAgICAgICBnZXRBbW91bnQ6IF8uZ2V0QW1vdW50LFxuICAgICAgICAgIGFtb3VudDogbWV0YS5hbW91bnQsXG4gICAgICAgICAgY2hvaWNlOiBtZXRhLmNob2ljZXMucmVkdWNlKG1heEluc3RhbG1lbnRzLCBudWxsKSxcbiAgICAgICAgICBjaG9pY2VzOiBtZXRhLmNob2ljZXMsXG4gICAgICAgICAgb3B0aW9uczogbWV0YS5vcHRpb25zXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgd2lkZ2V0LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIGFwbGF6YW1lOiAnbW9kYWwnLFxuICAgICAgICAgIGV2ZW50OiAnb3BlbicsXG4gICAgICAgICAgbmFtZTogJ2luc3RhbG1lbnRzJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBzaXplOiAnbGcnLFxuICAgICAgICAgICAgY2FyZDoge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdtb2RhbC1pbnN0YWxtZW50cy1pbmZvJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBfLnRlbXBsYXRlLmNvbXBpbGUoIHJlcXVpcmUoJy4uLy4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy9tb2RhbC1pbnN0YWxtZW50cycpICkoe1xuICAgICAgICAgICAgICBzZWxlY3RlZENob2ljZTogbWV0YS5jaG9pY2VzLnJlZHVjZShtYXhJbnN0YWxtZW50cywgbnVsbCksXG4gICAgICAgICAgICAgIGNob2ljZXM6IG1ldGEuY2hvaWNlcyxcbiAgICAgICAgICAgICAgZ2V0QW1vdW50OiBfLmdldEFtb3VudCxcbiAgICAgICAgICAgICAgbW9udGhzOiBmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtID4gMSA/ICdtZXNlcycgOiAnbWVzJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sICcqJyk7XG5cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHdpZGdldC5yZW5kZXIoKTtcblxuICAgIHdpZGdldC5vbignbWVzc2FnZTpyZXF1aXJlLmNob2ljZXMgY2hvaWNlcy51cGRhdGUnLCBmdW5jdGlvbiAoZSwgbWVzc2FnZSkge1xuICAgICAgaWYoIG1lc3NhZ2UgJiYgbWVzc2FnZS5zaW11bGF0b3JJZCAmJiBtZXNzYWdlLnNpbXVsYXRvcklkICE9PSBpZCApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coZSwgbWV0YSwgbWVzc2FnZSk7XG4gICAgICB3aWRnZXQucmVuZGVyKCk7XG4gICAgfSk7XG5cbiAgICB3aWRnZXQuaWQgPSBpZDtcblxuICAgIHJldHVybiB3aWRnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVdpZGdldCAod2lkZ2V0LCB3aWRnZXRXcmFwcGVyLCBzZWxlY3Rvcikge1xuICAgIGlmKCAhc2VsZWN0b3IgKSB7XG4gICAgICB3aWRnZXRXcmFwcGVyLmFwcGVuZENoaWxkKHdpZGdldC5lbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBzZXVkb0xvY2F0b3I7XG4gICAgc2VsZWN0b3IgPSBzZWxlY3Rvci50cmltKCkucmVwbGFjZSgvOihcXHcrPykkLywgZnVuY3Rpb24gKG1hdGNoZWQsIGxvY2F0b3IpIHtcbiAgICAgIHBzZXVkb0xvY2F0b3IgPSBsb2NhdG9yO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuXG4gICAgdmFyIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgaWYoIGVsICkge1xuICAgICAgaWYoIHBzZXVkb0xvY2F0b3IgKSB7XG4gICAgICAgIHN3aXRjaCggcHNldWRvTG9jYXRvciApIHtcbiAgICAgICAgICBjYXNlICdhZnRlcic6XG4gICAgICAgICAgICBpZiggZWwubmV4dEVsZW1lbnRTaWJsaW5nICkge1xuICAgICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZSh3aWRnZXQuZWwsIGVsLm5leHRFbGVtZW50U2libGluZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHdpZGdldC5lbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdiZWZvcmUnOlxuICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUod2lkZ2V0LmVsLCBlbCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwc2V1ZG9Mb2NhdG9yICcgKyBwc2V1ZG9Mb2NhdG9yICsgJyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5hcHBlbmRDaGlsZCh3aWRnZXQuZWwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGV2YWxXaWRnZXQgKHdpZGdldFdyYXBwZXIpIHtcbiAgICB2YXIgbWV0YSwgdXBkYXRlRGF0YSA9IGZhbHNlLCBkZXRlY3RlZEFtb3VudCwgc2ltdWxhdG9yT3B0aW9ucyA9IHt9O1xuXG4gICAgaWYoIHdpZGdldFdyYXBwZXIuX19hcHpfd2lkZ2V0X18gKSB7XG4gICAgICBtZXRhID0gd2lkZ2V0V3JhcHBlci5fX2Fwel93aWRnZXRfXztcblxuICAgICAgZGV0ZWN0ZWRBbW91bnQgPSBtZXRhLmdldEFtb3VudCgpO1xuICAgICAgaWYoIGRldGVjdGVkQW1vdW50ICYmIG1ldGEuYW1vdW50ICE9PSBkZXRlY3RlZEFtb3VudCApIHtcbiAgICAgICAgdXBkYXRlRGF0YSA9IHRydWU7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHdpZGdldFdyYXBwZXIsIG1ldGEuYW1vdW50LCBtZXRhLmdldEFtb3VudCgpICk7XG4gICAgICAgIG1ldGEuYW1vdW50ID0gbWV0YS5nZXRBbW91bnQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWV0YSA9IHsgZ2V0QW1vdW50OiBhbW91bnRHZXR0ZXIod2lkZ2V0V3JhcHBlcikgfTtcbiAgICAgIG1ldGEuYW1vdW50ID0gd2lkZ2V0V3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW1vdW50JykgPyBOdW1iZXIod2lkZ2V0V3JhcHBlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW1vdW50JykpIDogbWV0YS5nZXRBbW91bnQoKTtcbiAgICAgIHVwZGF0ZURhdGEgPSB0cnVlO1xuICAgICAgaWYoIG1ldGEuZ2V0QW1vdW50LnF0eVNlbGVjdG9yICkge1xuICAgICAgICBtZXRhLnF0eSA9IGdldFF0eShtZXRhLmdldEFtb3VudC5xdHlTZWxlY3RvcikgfHwgMTtcbiAgICAgICAgLy8gY29uc29sZS5kZWJ1ZygnbmV3IHdhdGNoZXInKTtcbiAgICAgICAgbWV0YS53YXRjaFF0eSA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiggIWRvY3VtZW50LmJvZHkuY29udGFpbnMod2lkZ2V0V3JhcHBlcikgKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKG1ldGEud2F0Y2hRdHkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgcXR5ID0gZ2V0UXR5KG1ldGEuZ2V0QW1vdW50LnF0eVNlbGVjdG9yKTtcbiAgICAgICAgICBpZiggcXR5ICE9PSBtZXRhLnF0eSApIHtcbiAgICAgICAgICAgIG1ldGEucXR5ID0gcXR5O1xuICAgICAgICAgICAgZXZhbFdpZGdldCh3aWRnZXRXcmFwcGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDI1MCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoIHdpZGdldFdyYXBwZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXcnKSApIHtcbiAgICAgIHNpbXVsYXRvck9wdGlvbnMudmlldyA9IHdpZGdldFdyYXBwZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXcnKTtcbiAgICB9XG5cbiAgICBpZiggbWV0YS5hbW91bnQgJiYgbWV0YS5nZXRBbW91bnQucXR5U2VsZWN0b3IgKSB7XG4gICAgICBtZXRhLmFtb3VudCAqPSAoIGdldFF0eShtZXRhLmdldEFtb3VudC5xdHlTZWxlY3RvcikgfHwgMSApO1xuICAgIH1cbiAgICBpZiggbWV0YS5hbW91bnQgJiYgdXBkYXRlRGF0YSApIHtcbiAgICAgIC8vIGlmKCBtZXRhLndpZGdldCAmJiBtZXRhLndpZGdldC5tZXNzYWdlICkge1xuICAgICAgaWYoIG1ldGEud2lkZ2V0ICkge1xuICAgICAgICAvLyBtZXRhLndpZGdldC5tZXNzYWdlKCdsb2FkaW5nJyk7XG4gICAgICAgIG1ldGEud2lkZ2V0LnRyaWdnZXIoJ2Nob2ljZXMudXBkYXRpbmcnKTtcbiAgICAgIH1cbiAgICAgIGFwbGF6YW1lLnNpbXVsYXRvciggbWV0YS5hbW91bnQsIHNpbXVsYXRvck9wdGlvbnMsIGZ1bmN0aW9uIChfY2hvaWNlcywgX29wdGlvbnMpIHtcbiAgICAgICAgX29wdGlvbnMud2lkZ2V0ID0gX29wdGlvbnMud2lkZ2V0IHx8IHt9O1xuICAgICAgICBpZiggX29wdGlvbnMud2lkZ2V0LmRpc2FibGVkICkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGEuY2hvaWNlcyA9IF9jaG9pY2VzO1xuICAgICAgICBtZXRhLm9wdGlvbnMgPSBfb3B0aW9ucztcblxuICAgICAgICBtZXRhLndpZGdldCA9IG1ldGEud2lkZ2V0IHx8IGdldFdpZGdldChtZXRhKTtcblxuICAgICAgICBpZiggbWV0YS53aWRnZXQgJiYgIWRvY3VtZW50LmJvZHkuY29udGFpbnMobWV0YS53aWRnZXQuZWwpICkge1xuICAgICAgICAgIHBsYWNlV2lkZ2V0KG1ldGEud2lkZ2V0LCB3aWRnZXRXcmFwcGVyLCB3aWRnZXRXcmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1sb2NhdGlvbicpIHx8IF9vcHRpb25zLndpZGdldC5sb2NhdGlvbiApO1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0YS53aWRnZXQudHJpZ2dlcignY2hvaWNlcy51cGRhdGUnKTtcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoIG1ldGEud2lkZ2V0ICYmIG1ldGEud2lkZ2V0Lm1lc3NhZ2UgKSB7XG4gICAgICAgICAgbWV0YS53aWRnZXQubWVzc2FnZSgnYWJvcnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiggbWV0YS53aWRnZXQgJiYgZG9jdW1lbnQuYm9keS5jb250YWlucyhtZXRhLndpZGdldC5lbCkgKSB7XG4gICAgICAgICAgdmFyIHBhcmVudCA9IG1ldGEud2lkZ2V0LmVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKG1ldGEud2lkZ2V0LmVsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2lkZ2V0V3JhcHBlci5fX2Fwel93aWRnZXRfXyA9IG1ldGE7XG4gIH1cblxuICBmdW5jdGlvbiB3aWRnZXRzTG9va3VwIChlbGVtZW50KSB7XG4gICAgdmFyIHByb21pc2VzID0gW107XG5cbiAgICBlYWNoLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYXBsYXphbWUtc2ltdWxhdG9yXScpLCBldmFsV2lkZ2V0ICk7XG5cbiAgICByZXR1cm4gcHJvbWlzZXMubGVuZ3RoID8gJHEuYWxsKHByb21pc2VzKSA6ICRxLnJlc29sdmUoKTtcbiAgfVxuXG4gIHdpZGdldHNMb29rdXAoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICBfLmxpdmVET00uc3Vic2NyaWJlKHdpZGdldHNMb29rdXApO1xuICB9KTtcblxuICByZXR1cm4gd2lkZ2V0c0xvb2t1cDtcblxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2Vycm9yRGF0YShlcnIpIHtcbiAgKGNvbnNvbGUuaW5mbyB8fCBjb25zb2xlLmxvZykoJyVjW25vbiBibG9ja2luZyBlcnJvcl0gJWNhcGxhemFtZS5qc1xcblxcbicsICdmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICMyNjdCQkQ7JywgJ2NvbG9yOiAjMjY3QkJEOycpO1xuXG4gIHZhciBmaWxlbmFtZSA9IGVyci5maWxlTmFtZSA/IGVyci5maWxlTmFtZS5sYXN0SW5kZXhPZignLycpIDogJzxub3QgZGVmaW5lZD4nO1xuICB2YXIgc3RhbXAgPSBuZXcgRGF0ZSgpO1xuICB2YXIgc3RyID0gJyVjbmFtZTogJWMnICsgZXJyLm5hbWUgK1xuICAgICAgICAgICdcXG4lY0Vycm9yOiAlYycgKyBlcnIubWVzc2FnZSArXG4gICAgICAgICAgJ1xcbiVjRmlsZTogJWMnICsgZmlsZW5hbWU7XG5cbiAgY29uc29sZS5sb2coc3RyLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JywgJ2NvbG9yOiAjZTc0YzNjOycsICdmb250LXdlaWdodDogYm9sZDsnLCAnZm9udC13ZWlnaHQ6IG5vcm1hbDsgY29sb3I6ICNlNzRjM2M7JywgJ2ZvbnQtd2VpZ2h0OiBib2xkOycsICdmb250LXdlaWdodDogbm9ybWFsOycpO1xuICBpZiggZXJyLnN0YWNrICkge1xuICAgIGNvbnNvbGUubG9nKCclYycgKyBlcnIuc3RhY2ssICdiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmVlOyBsaW5lLWhlaWdodDogMjsnKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmdW5jKSB7XG4gIHRyeXsgZnVuYygpOyB9XG4gIGNhdGNoKGVycikge1xuICAgIF9lcnJvckRhdGEoZXJyKTtcbiAgfVxufTtcbiIsIlxuZnVuY3Rpb24gdGhvdXNhbmRzKGFtb3VudCkge1xuICBpZiggL1xcZHszfVxcZCsvLnRlc3QoYW1vdW50KSApIHtcbiAgICByZXR1cm4gdGhvdXNhbmRzKGFtb3VudC5yZXBsYWNlKC8oXFxkezN9PykoXFwufCQpLywgJy4kJicpKTtcbiAgfVxuICByZXR1cm4gYW1vdW50O1xufVxuXG5mdW5jdGlvbiBnZXRBbW91bnQgKGFtb3VudCkge1xuICB2YXIgcHJlZml4ID0gJyc7XG5cbiAgaWYoIGFtb3VudCA8IDAgKSB7XG4gICAgcHJlZml4ID0gJy0nO1xuICAgIGFtb3VudCA9IDAgLSBhbW91bnQ7XG4gIH1cblxuICBpZiggIWFtb3VudCApIHtcbiAgICByZXR1cm4gJzAsMDAnO1xuICB9IGVsc2UgaWYoIGFtb3VudCA8IDEwICkge1xuICAgIHJldHVybiAnMCwwJyArIGFtb3VudDtcbiAgfSBlbHNlIGlmKCBhbW91bnQgPCAxMDAgKSB7XG4gICAgcmV0dXJuICcwLCcgKyBhbW91bnQ7XG4gIH1cbiAgcmV0dXJuIHByZWZpeCArICgnJyArIGFtb3VudCkucmVwbGFjZSgvKFxcZCopKFxcZHsyfSkkLywgZnVuY3Rpb24gKG1hdGNoZWQsIG1haW4sIHRhaWwpIHtcbiAgICByZXR1cm4gdGhvdXNhbmRzKG1haW4pICsgJywnICsgdGFpbDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUHJpY2UgKHByaWNlKSB7XG4gIHZhciBtYXRjaGVkID0gcHJpY2UubWF0Y2goLygoXFxkK1ssLiBdKSopKFxcZCspLyksXG4gICAgICBhbW91bnQsIG1haW4sIHRhaWw7XG5cbiAgaWYoIG1hdGNoZWQgKSB7XG4gICAgdGFpbCA9IG1hdGNoZWRbM107XG4gICAgbWFpbiA9IG1hdGNoZWRbMV0ucmVwbGFjZSgvW15cXGRdL2csICcnKTtcblxuICAgIGlmKCAhbWFpbiApIHtcbiAgICAgIHJldHVybiBOdW1iZXIoIHRhaWwgKyAnMDAnICk7XG4gICAgfVxuXG4gICAgaWYoIHRhaWwubGVuZ3RoID09PSAxICkge1xuICAgICAgcmV0dXJuIE51bWJlcihtYWluICsgdGFpbCArICcwJyk7XG4gICAgfVxuXG4gICAgaWYoIHRhaWwubGVuZ3RoICE9PSAyICkge1xuICAgICAgdGFpbCArPSAnMDAnO1xuICAgIH1cblxuICAgIHJldHVybiBOdW1iZXIobWFpbiArIHRhaWwpO1xuICB9XG5cbiAgaWYoIC9cXGQrLy50ZXN0KHByaWNlKSApIHtcbiAgICByZXR1cm4gTnVtYmVyKCBwcmljZS5yZXBsYWNlKC9bXlxcZF0rL2csICcnKSArICcwMCcgKTtcbiAgfVxuXG4gIGNvbnNvbGUud2FybigncHJpY2UgZGF0YSBtaXNtYXRjaCcsIHByaWNlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGdldEFtb3VudDogZ2V0QW1vdW50LFxuXHRwYXJzZVByaWNlOiBwYXJzZVByaWNlXG59O1xuIiwiXG5mdW5jdGlvbiBfcmVhZHkgKF9jYWxsYmFjaywgZGVsYXkpIHtcbiAgdmFyIGNhbGxiYWNrID0gZGVsYXkgPyBmdW5jdGlvbiAoKSB7IHNldFRpbWVvdXQoX2NhbGxiYWNrLCBkZWxheSk7IH0gOiBfY2FsbGJhY2s7XG5cbiAgaWYgKC9sb2FkZWR8Y29tcGxldGUvLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSkpIHtcbiAgICBjYWxsYmFjaygpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2FsbGJhY2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRCdWJibGVDbG9zZSAoc3RyKSB7XG4gIHZhciBsZXZlbCA9IDA7XG5cbiAgZm9yKCB2YXIgaSA9IDAsIGxlbiA9IHN0ci5sZW5ndGg7IGkgPCBsZW4gOyBpKysgKSB7XG4gICAgaWYoIHN0cltpXSA9PT0gJygnICkge1xuICAgICAgbGV2ZWwrKztcbiAgICB9IGVsc2UgaWYoIHN0cltpXSA9PT0gJyknICkge1xuICAgICAgaWYoIGxldmVsID09PSAwICkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsLS07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBoYXNTZWxlY3RvciAoc2VsZWN0b3IsIHJvb3RFbGVtZW50KSB7XG4gIHZhciBzcGxpdEhhcyA9IHNlbGVjdG9yLnNwbGl0KCc6aGFzKCcpO1xuXG4gIHJldHVybiBzcGxpdEhhcy5yZWR1Y2UoZnVuY3Rpb24gKG1hdGNoZXMsIHBhcnRpYWwpIHtcblxuICAgIHZhciBjbG9zZVBvc2l0aW9uID0gZmluZEJ1YmJsZUNsb3NlKHBhcnRpYWwpLFxuICAgICAgICBoYXNGaWx0ZXIgPSBwYXJ0aWFsLnN1YnN0cigwLCBjbG9zZVBvc2l0aW9uKSxcbiAgICAgICAgcGFydGlhbFF1ZXJ5ID0gcGFydGlhbC5zdWJzdHIoY2xvc2VQb3NpdGlvbiArIDEpLnRyaW0oKTtcblxuICAgIGlmKCBjbG9zZVBvc2l0aW9uID09PSAtMSApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWFsZm9ybWVkIHNlbGVjdG9yJyk7XG4gICAgfVxuXG4gICAgbWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGhhc0ZpbHRlcik7XG4gICAgfSk7XG5cbiAgICBpZiggcGFydGlhbFF1ZXJ5ICkge1xuICAgICAgdmFyIHN1Ym1hdGNoZXMgPSBbXTtcblxuICAgICAgbWF0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIFtdLnB1c2guYXBwbHkoc3VibWF0Y2hlcywgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHBhcnRpYWxRdWVyeSkgKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc3VibWF0Y2hlcztcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcblxuICB9LCBbXS5zbGljZS5jYWxsKCAocm9vdEVsZW1lbnQgfHwgZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoIHNwbGl0SGFzLnNoaWZ0KCkgKSApICk7XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5U2VsZWN0b3IgKHNlbGVjdG9yLCByb290RWxlbWVudCkge1xuICAvLyAndHI6aGFzKD4gLnJvdykgZGl2OmhhcyhzcGFuKSBpbWcnLnNwbGl0KCc6aGFzKCcpO1xuICBpZiggIXNlbGVjdG9yICkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGlmKCAhL1xcOmhhc1xcKC8udGVzdChzZWxlY3RvcikgKSB7XG4gICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwoIChyb290RWxlbWVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgKSApO1xuICB9XG5cbiAgcmV0dXJuIGhhc1NlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuZnVuY3Rpb24gY3NzUXVlcnkgKF9zZWxlY3Rvciwgcm9vdEVsZW1lbnQpIHtcbiAgdmFyIHNlbGVjdG9ycyA9IF9zZWxlY3Rvci5zcGxpdCgvXFxzKixcXHMqLyk7XG5cbiAgcmV0dXJuIHNlbGVjdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKGxpc3QsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGxpc3QuY29uY2F0KCBxdWVyeVNlbGVjdG9yKHNlbGVjdG9yLCByb290RWxlbWVudCkgKTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxUb3AgKHZhbHVlKSB7XG4gIGlmKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSB2YWx1ZTtcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xufVxuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQgKGVsKSB7XG4gIHZhciBjaGlsZCA9IGVsLmZpcnN0Q2hpbGQ7XG5cbiAgd2hpbGUoIGNoaWxkICkge1xuICAgIGVsLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICBjaGlsZCA9IGVsLmZpcnN0Q2hpbGQ7XG4gIH1cbn1cblxuLy8gdmFyIF9jbGFzc0FjdGlvbnMgPSB7XG4vLyAgIGFkZDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdCA/IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbi8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbi8vICAgfSA6IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbi8vICAgICB2YXIgUkVfQ0xFQU5DTEFTUyA9IG5ldyBSZWdFeHAoJ1xcXFxiJyArIChjbGFzc05hbWUgfHwgJycpICsgJ1xcXFxiJywnJyk7XG4vLyAgICAgX2NsYXNzQWN0aW9ucy5yZW1vdmUoZWxlbWVudCwgY2xhc3NOYW1lKTtcbi8vICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XG4vLyAgIH0sXG4vLyAgIHJlbW92ZTogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdCA/IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbi8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbi8vICAgfSA6IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbi8vICAgICB2YXIgUkVfQ0xFQU5DTEFTUyA9IG5ldyBSZWdFeHAoJ1xcXFxiJyArIChjbGFzc05hbWUgfHwgJycpICsgJ1xcXFxiJywnJyk7XG4vLyAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKFJFX0NMRUFOQ0xBU1MsJycpO1xuLy8gICB9LFxuLy8gICBhY3Rpb246IGZ1bmN0aW9uIChhY3Rpb24sIHRvb2xzKSB7XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbi8vICAgICAgIGlmKCBjbGFzc05hbWUuaW5kZXhPZignICcpID49IDAgKSB7XG4vLyAgICAgICAgIGNsYXNzTmFtZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGNuKSB7XG4vLyAgICAgICAgICAgX2NsYXNzQWN0aW9uc1thY3Rpb25dKGVsZW1lbnQsIGNuKTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBfY2xhc3NBY3Rpb25zW2FjdGlvbl0oZWxlbWVudCwgY2xhc3NOYW1lKTtcbi8vICAgICAgIH1cbi8vICAgICAgIHJldHVybiB0b29scztcbi8vICAgICB9O1xuLy8gICB9XG4vLyB9O1xuXG5mdW5jdGlvbiB3cml0ZUlmcmFtZSAoaWZyYW1lLCBjb250ZW50KSB7XG4gIHZhciBpZnJhbWVEb2MgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgdHJ5IHsgaWZyYW1lRG9jLmNoYXJzZXQgPSAnVVRGLTgnOyB9IGNhdGNoKGVycikge31cbiAgaWZyYW1lRG9jLm9wZW4oKTtcbiAgaWZyYW1lRG9jLndyaXRlKGNvbnRlbnQpO1xuICBpZnJhbWVEb2MuY2xvc2UoKTtcbn1cblxuZnVuY3Rpb24gZ2V0SUZyYW1lIChpZnJhbWVTdHlsZXMpIHtcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICByZXF1aXJlKCduaXRyby10b29scy9leHRlbmQnKS5leHRlbmQoaWZyYW1lLnN0eWxlLCBpZnJhbWVTdHlsZXMgfHwge30pO1xuXG4gIGlmcmFtZS5mcmFtZUJvcmRlciA9ICcwJztcbiAgLy8gaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGlmcmFtZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICB9O1xuICByZXR1cm4gaWZyYW1lO1xufVxuXG52YXIgXyA9IHtcbiAgcmVhZHk6IF9yZWFkeSxcbiAgZ2V0SUZyYW1lOiBnZXRJRnJhbWUsXG4gIHdyaXRlSWZyYW1lOiB3cml0ZUlmcmFtZSxcbiAgY3NzUXVlcnk6IGNzc1F1ZXJ5LFxuICBzY3JvbGxUb3A6IHNjcm9sbFRvcCxcbiAgY2xlYXJFbGVtZW50OiBjbGVhckVsZW1lbnQsXG4gIGVsZW1lbnREYXRhOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5kYXRhc2V0ID8gZnVuY3Rpb24gKGVsLCBrZXksIHZhbHVlKSB7XG4gICAgaWYoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICBlbC5kYXRhc2V0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGVsLmRhdGFzZXRba2V5XTtcbiAgfSA6IGZ1bmN0aW9uIChlbCwga2V5LCB2YWx1ZSkge1xuICAgIGlmKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLScgKyBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS0nICsga2V5KTtcbiAgfSxcbn07XG5cbi8vIHZhciBhZGRDbGFzcyA9IF9jbGFzc0FjdGlvbnMuYWN0aW9uKCdhZGQnLCBfICksXG4vLyAgICAgcmVtb3ZlQ2xhc3MgPSBfY2xhc3NBY3Rpb25zLmFjdGlvbigncmVtb3ZlJywgXyApO1xuXG4vLyBfLmFkZENsYXNzID0gYWRkQ2xhc3M7XG4vLyBfLnJlbW92ZUNsYXNzID0gcmVtb3ZlQ2xhc3M7XG5cbl8uYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbWVudCwgY2xhc3NOYW1lKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xufTtcblxuXy5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF87XG4iLCJcblxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgcmV0dXJuIFtwYXJzZUludChyZXN1bHRbMV0sIDE2KSwgcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksIHBhcnNlSW50KHJlc3VsdFszXSwgMTYpXTtcbn1cblxuZnVuY3Rpb24gYnJpZ2h0bmVzcyAoY29sb3IpIHtcbiAgdmFyIHJnYiA9IGhleFRvUmdiKGNvbG9yKTtcbiAgdmFyIG8gPSBNYXRoLnJvdW5kKCgocGFyc2VJbnQocmdiWzBdKSAqIDI5OSkgKyAocGFyc2VJbnQocmdiWzFdKSAqIDU4NykgKyAocGFyc2VJbnQocmdiWzJdKSAqIDExNCkpIC8xMDAwKTtcbiAgcmV0dXJuIG8gPCAxMDAgPyAnZGFyaycgOiAoIG8gPiAyMzAgPyAnbGlnaHQnIDogJ21lZGl1bScgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGhleFRvUmdiOiBoZXhUb1JnYixcbiAgYnJpZ2h0bmVzczogYnJpZ2h0bmVzc1xufTtcbiIsIlxuXG52YXIgaW1wb3J0YW50Q1NTID0gZnVuY3Rpb24gKGNzcykge1xuICAgICAgcmV0dXJuIGNzcy5yZXBsYWNlKC87L2csICcgIWltcG9ydGFudDsnKS5yZXBsYWNlKC86KFteOjtdKz8pfS9nLCBmdW5jdGlvbiAobWF0Y2hlZCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICc6JyArIHZhbHVlICsgJyAhaW1wb3J0YW50O30nO1xuICAgICAgfSkucmVwbGFjZSgvKFxcZCslfGZyb218dG8peyhbXn1dKykvZywgZnVuY3Rpb24gKG1hdGNoZWQsIHBvcywgY29udGVudCkge1xuICAgICAgICByZXR1cm4gcG9zICsgJ3snICsgY29udGVudC5yZXBsYWNlKC8gIWltcG9ydGFudDsvZywgJzsnKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY3NzSGFjayA9IChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2FjaGUgPSB7fSxcbiAgICAgICAgICBoYWNrcyA9IHtcbiAgICAgICAgICAgIG92ZXJsYXk6IGltcG9ydGFudENTUyhyZXF1aXJlKCcuLi8uLi8udG1wL2Nzcy1oYWNrcy9vdmVybGF5JykpLFxuICAgICAgICAgICAgYmx1cjogaW1wb3J0YW50Q1NTKHJlcXVpcmUoJy4uLy4uLy50bXAvY3NzLWhhY2tzL2JsdXInKSksXG4gICAgICAgICAgICBsb2dvOiBpbXBvcnRhbnRDU1MocmVxdWlyZSgnLi4vLi4vLnRtcC9jc3MtaGFja3MvbG9nbycpKSxcbiAgICAgICAgICAgIG1vZGFsOiBpbXBvcnRhbnRDU1MocmVxdWlyZSgnLi4vLi4vLnRtcC9jc3MtaGFja3MvbW9kYWwnKSlcbiAgICAgICAgICB9O1xuXG4gICAgICAvLyBjb25zb2xlLmxvZygnY3NzSGFja3MnLCBoYWNrcyk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiBoYWNrIChoYWNrTmFtZSkge1xuICAgICAgICBpZiggIWNhY2hlW2hhY2tOYW1lXSApIHtcbiAgICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgICAgICAgICBzdHlsZS50ZXh0Q29udGVudCA9IGhhY2tzW2hhY2tOYW1lXTtcblxuICAgICAgICAgIHZhciBlbmFibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICBzdHlsZS5oYWNrID0gZnVuY3Rpb24gKGVuYWJsZSkge1xuICAgICAgICAgICAgZW5hYmxlID0gZW5hYmxlID09PSB1bmRlZmluZWQgfHwgZW5hYmxlO1xuXG4gICAgICAgICAgICBpZiggZW5hYmxlICkge1xuICAgICAgICAgICAgICBpZiggZW5hYmxlZCApIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgIGVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmKCAhZW5hYmxlZCApIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgIGVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChzdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGNhY2hlW2hhY2tOYW1lXSA9IHN0eWxlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZVtoYWNrTmFtZV07XG4gICAgICB9O1xuICAgIH0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gY3NzSGFjaztcbiIsIlxuXG5mdW5jdGlvbiBfa2V5IChvLCBrZXksIHZhbHVlKSB7XG5cdGtleS5zcGxpdCgnLicpLmZvckVhY2goZnVuY3Rpb24gKGssIGksIGtleXMpIHtcblx0XHRpZiggaSA9PT0ga2V5cy5sZW5ndGggLSAxICkge1xuXHRcdFx0b1trXSA9IHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRvW2tdID0gb1trXSB8fCB7fTtcblx0XHRcdG8gPSBvW2tdO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNhbWVsQ2FzZSAodGV4dCkge1xuXHRyZXR1cm4gdGV4dC5yZXBsYWNlKC9fKFxcdykvZywgZnVuY3Rpb24gKG1hdGNoZWQsIGxldHRlcikge1xuXHRcdHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplIChxdWVyeXN0cmluZywgZGVjb2RlKSB7XG5cblx0dmFyIHJlc3VsdCA9IHt9O1xuXG5cdHF1ZXJ5c3RyaW5nLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbiAoa2V5VmFsdWUpIHtcblx0XHR2YXIgbWF0Y2hlZCA9IGtleVZhbHVlLm1hdGNoKC8oLio/KT0oLiopLyk7XG5cblx0XHRpZiggIW1hdGNoZWQgKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCBwYXJzZSAnICsga2V5VmFsdWUpO1xuXHRcdH1cblxuXHRcdF9rZXkocmVzdWx0LCBjYW1lbENhc2UobWF0Y2hlZFsxXSksIGRlY29kZSA/IGRlY29kZVVSSShtYXRjaGVkWzJdKSA6IG1hdGNoZWRbMl0gKTtcblxuXHR9KTtcblxuXHRyZXR1cm4gcmVzdWx0O1xuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVzZXJpYWxpemU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzdXNjcmlwdG9ycyA9IFtdLFxuICAgIHJ1bm5pbmcgPSBmYWxzZSxcbiAgICB3YWl0aW5nID0gZmFsc2UsXG4gICAgbGFzdFRhcmdldCA9IG51bGwsXG4gICAgdHJpZ2dlckxpc3RlbmVycyA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgIGZvciggdmFyIGkgPSAwLCBuID0gc3VzY3JpcHRvcnMubGVuZ3RoOyBpIDwgbiA7IGkrKyApIHtcbiAgICAgICAgc3VzY3JpcHRvcnNbaV0odGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHdhaXRUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdhaXRpbmcgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhaXRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYoIGxhc3RUYXJnZXQgKSB7XG4gICAgICAgICAgdmFyIHRhcmdldCA9IGxhc3RUYXJnZXQ7XG4gICAgICAgICAgbGFzdFRhcmdldCA9IG51bGw7XG4gICAgICAgICAgd2FpdFRpbWVyKCk7XG4gICAgICAgICAgdHJpZ2dlckxpc3RlbmVycyhsYXN0VGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfSwgMjUwKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBpbml0TGl2ZURPTSAoKSB7XG5cbiAgcmVxdWlyZSgnLi9icm93c2VyLXRvb2xzJykucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignRE9NU3VidHJlZU1vZGlmaWVkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiggd2FpdGluZyApIHtcbiAgICAgICAgbGFzdFRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgd2FpdFRpbWVyKCk7XG4gICAgICB0cmlnZ2VyTGlzdGVuZXJzKGV2ZW50LnRhcmdldCk7XG4gICAgfSwgZmFsc2UpO1xuICB9KTtcblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3Vic2NyaWJlOiBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIGlmKCAhcnVubmluZyApIHtcbiAgICAgIGluaXRMaXZlRE9NKHRydWUpO1xuICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgfVxuICAgIGlmKCBoYW5kbGVyIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgICBzdXNjcmlwdG9ycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cbiAgfVxufTtcbiIsIlxuXG5mdW5jdGlvbiBnZXRFcnJvck9iamVjdCgpe1xuICAgIHRyeSB7IHRocm93IEVycm9yKCcnKTsgfSBjYXRjaChlcnIpIHsgcmV0dXJuIGVycjsgfVxufVxuXG5mdW5jdGlvbiBsb2cgKCkge1xuICB2YXIgZXJyID0gZ2V0RXJyb3JPYmplY3QoKSxcbiAgICAgIGNhbGxlcl9saW5lID0gZXJyLnN0YWNrLnNwbGl0KCdcXG4nKVs0XSB8fCAnJyxcbiAgICAgIGluZGV4ID0gY2FsbGVyX2xpbmUuaW5kZXhPZignYXQgJyk7XG5cbiAgbG9nLmhpc3RvcnkucHVzaCh7XG4gICAgdGltZTogbmV3IERhdGUoKSxcbiAgICBhcmdzOiBhcmd1bWVudHMsXG4gICAgdHJhY2s6IHtcbiAgICAgIGNhbGxlcl9saW5lOiBjYWxsZXJfbGluZSxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGNsZWFuOiBjYWxsZXJfbGluZS5zbGljZShpbmRleCArIDIsIGNhbGxlcl9saW5lLmxlbmd0aClcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbmxvZy5oaXN0b3J5ID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0gbG9nO1xuIiwiXG52YXIgbWVzc2FnZVRhcmdldCA9IHt9LFxuICAgIHNob3dMb2dzID0gZmFsc2U7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcbiAgdmFyIG1lc3NhZ2UgPSBlLmRhdGEsXG4gICAgICBsaXN0ZW5lcnMgPSBtZXNzYWdlVGFyZ2V0W21lc3NhZ2UuYXBsYXphbWVdO1xuXG4gIGlmKCAhbGlzdGVuZXJzICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKCBzaG93TG9ncyAmJiAhZS51c2VkICkge1xuICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlJywgZSwgbGlzdGVuZXJzKTtcbiAgfVxuXG4gIGlmKCAhZS51c2VkICkge1xuICAgIGUudXNlZCA9IHRydWU7XG4gICAgZm9yKCB2YXIgaSA9IDAsIG4gPSBsaXN0ZW5lcnMubGVuZ3RoIDsgaSA8IG4gOyBpKysgKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0oZSwgbWVzc2FnZSk7XG4gICAgfVxuICB9XG59LCB0cnVlKTtcblxuZnVuY3Rpb24gb25NZXNzYWdlICh0YXJnZXQsIGhhbmRsZXIsIGxvZ3MpIHtcbiAgc2hvd0xvZ3MgPSBsb2dzO1xuICBpZiggdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgJiYgaGFuZGxlciBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgIG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XSA9IG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XSB8fCBbXTtcbiAgICBtZXNzYWdlVGFyZ2V0W3RhcmdldF0ucHVzaChoYW5kbGVyKTtcbiAgfVxufVxuXG5vbk1lc3NhZ2Uub2ZmID0gZnVuY3Rpb24gKHRhcmdldCwgaGFuZGxlcikge1xuICBpZiggdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgJiYgaGFuZGxlciBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgIG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XSA9IG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XSB8fCBbXTtcbiAgICB2YXIgaSA9IG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XS5pbmRleE9mKGhhbmRsZXIpO1xuICAgIGlmKCBpICE9PSAtMSApIHtcbiAgICAgIG1lc3NhZ2VUYXJnZXRbdGFyZ2V0XS5zcGxpY2UoaSwxKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gb25NZXNzYWdlO1xuIiwiXG5mdW5jdGlvbiB0ZW1wbGF0ZSAobmFtZSwgZGF0YSl7XG4gIHJldHVybiB0ZW1wbGF0ZS5jYWNoZVtuYW1lXShkYXRhIHx8IHt9KTtcbn1cblxudGVtcGxhdGUuY2FjaGUgPSB7fTtcblxudGVtcGxhdGUuY29tcGlsZSA9IGZ1bmN0aW9uICh0bXBsKSB7XG4gIC8vIEpvaG4gUmVzaWcgbWljcm8tdGVtcGxhdGVcbiAgcmV0dXJuIG5ldyBGdW5jdGlvbignb2JqJywgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgJ3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9OycgK1xuXG4gICAgLy8gSW50cm9kdWNlIHRoZSBkYXRhIGFzIGxvY2FsIHZhcmlhYmxlcyB1c2luZyB3aXRoKCl7fVxuICAgICd3aXRoKG9iail7cC5wdXNoKFxcJycgK1xuXG4gICAgLy8gQ29udmVydCB0aGUgdGVtcGxhdGUgaW50byBwdXJlIEphdmFTY3JpcHRcbiAgICB0bXBsLnRyaW0oKVxuICAgICAgLnJlcGxhY2UoL1tcXHJcXHRcXG5dL2csICcgJylcbiAgICAgIC5zcGxpdCgnPCUnKS5qb2luKCdcXHQnKVxuICAgICAgLnJlcGxhY2UoLygoXnwlPilbXlxcdF0qKScvZywgJyQxXFxyJylcbiAgICAgIC5yZXBsYWNlKC9cXHQ9KC4qPyklPi9nLCAnXFwnLCQxLFxcJycpXG4gICAgICAuc3BsaXQoJ1xcdCcpLmpvaW4oJ1xcJyk7JylcbiAgICAgIC5zcGxpdCgnJT4nKS5qb2luKCdwLnB1c2goXFwnJylcbiAgICAgIC5zcGxpdCgnXFxyJykuam9pbignXFxcXFxcJycpICsgJ1xcJyk7fXJldHVybiBwLmpvaW4oXFwnXFwnKTsnKTtcbn07XG5cbnRlbXBsYXRlLnB1dCA9IGZ1bmN0aW9uIChuYW1lLCB0bXBsKSB7XG4gIHRlbXBsYXRlLmNhY2hlW25hbWVdID0gdGVtcGxhdGUuY29tcGlsZSh0bXBsKTtcbn07XG5cbnRlbXBsYXRlLmxvb2t1cCA9IGZ1bmN0aW9uICgpIHtcbiAgW10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24veC10ZW1wbGF0ZVwiXVtkYXRhLXRlbXBsYXRlXScpLCBmdW5jdGlvbiAodG1wbCkge1xuICAgIHRlbXBsYXRlLnB1dCh0bXBsLmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpLCB0bXBsLnRleHQpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7XG4iLCJcbnZhciBfID0gcmVxdWlyZSgndmFuaWxsYS10b29scycpO1xuXG5fLmV4dGVuZChfLFxuICByZXF1aXJlKCduaXRyby10b29scy9saXN0cycpLFxuICByZXF1aXJlKCduaXRyby10b29scy9wYXRoJyksXG4gIHJlcXVpcmUoJy4vY29sb3JzJyksXG4gIHJlcXVpcmUoJy4vYnJvd3Nlci10b29scycpLFxuICByZXF1aXJlKCcuL2Ftb3VudC1wcmljZScpLFxuICB7XG4gICAgbGl2ZURPTTogcmVxdWlyZSgnLi9saXZlLWRvbScpLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3RlbXBsYXRlJyksXG4gICAgb25NZXNzYWdlOiByZXF1aXJlKCcuL21lc3NhZ2UtbGlzdGVuZXInKSxcbiAgICBkZXNlcmlhbGl6ZTogcmVxdWlyZSgnLi9kZXNlcmlhbGl6ZScpXG4gIH1cbik7XG5cbl8ubG9nID0gcmVxdWlyZSgnLi9sb2cnKTtcbl8ubm9vcCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gXztcbiJdfQ==