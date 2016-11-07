(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '0.0.363';
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
        } else if( priceElement.textContent ) {
          amount = priceElement.textContent;
        } else if( priceElement.getAttribute('content') ) {
          amount = priceElement.getAttribute('content');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi8udG1wL2FwbGF6YW1lLXZlcnNpb24uanMiLCIuLi8udG1wL2Nzcy1oYWNrcy9ibHVyLmpzIiwiLi4vLnRtcC9jc3MtaGFja3MvbG9nby5qcyIsIi4uLy50bXAvY3NzLWhhY2tzL21vZGFsLmpzIiwiLi4vLnRtcC9jc3MtaGFja3Mvb3ZlcmxheS5qcyIsIi4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy9tb2RhbC1pbnN0YWxtZW50cy5qcyIsIi4uLy50bXAvc2ltdWxhdG9yL3RlbXBsYXRlcy93aWRnZXQtcmF3LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Jlemllci1lYXNpbmcvc3JjL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2NsYXNzbGlzdC5qcy9jbGFzc0xpc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvZXZlbnRzLXdyYXBwZXIvZXZlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2h0dHAtYnJvd3Nlci9zcmMvaHR0cC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy9fZXh0ZW5kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL25pdHJvLXRvb2xzL2V4dGVuZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy9rZXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbml0cm8tdG9vbHMvbGlzdHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbml0cm8tdG9vbHMvcGF0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9uaXRyby10b29scy90eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3EtcHJvbWlzZS9saWIvcHJvbWlzZS1tZXRob2RzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3EtcHJvbWlzZS9saWIvcHJvbWlzZS1wb2x5ZmlsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9xLXByb21pc2UvbGliL3EuanMiLCIuLi9ub2RlX21vZHVsZXMvcS1wcm9taXNlL2xpYi9xaXplci5qcyIsIi4uL25vZGVfbW9kdWxlcy9xLXByb21pc2Uvbm8tbmF0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9icm93c2VyLXBvbHlmaWxscy9kYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMvZG9tLWNsb3Nlc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9icm93c2VyLXBvbHlmaWxscy9ldmVudC1saXN0ZW5lci5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2Jyb3dzZXItcG9seWZpbGxzL21hdGNoLW1lZGlhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvYnJvd3Nlci1wb2x5ZmlsbHMvbWF0Y2hlcy1zZWxlY3Rvci5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2J1bmRsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2RlZmVycmVkL2FuaW1hdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9kZWZlcnJlZC93YWl0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvZm4vZGVib3VuY2UuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy9mbi9yZWFkeS5qcyIsIi4uL25vZGVfbW9kdWxlcy92YW5pbGxhLXRvb2xzL2ZuL3RlbXBsYXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvZG9tLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvZXZlbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvbm9ybWFsaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsL2FuaW1hdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvdmFuaWxsYS10b29scy91dGlscy9zY3JvbGwvYnVuZGxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ZhbmlsbGEtdG9vbHMvdXRpbHMvc2Nyb2xsL3RvcC1jbGFzcy5qcyIsImFwbGF6YW1lLmpzIiwiYXBwcy9idXR0b24uanMiLCJhcHBzL2NoZWNrb3V0LmpzIiwiYXBwcy9odHRwLXNlcnZpY2UuanMiLCJhcHBzL2xvYWRpbmctc3ZnLmpzIiwiYXBwcy9tb2RhbC5qcyIsImFwcHMvc2ltdWxhdG9yLmpzIiwiY29yZS9hcGktaHR0cC5qcyIsImNvcmUvYXBpLmpzIiwiY29yZS9jb3JlLmpzIiwiY29yZS9pbml0LmpzIiwibG9hZGVycy9kYXRhLWFwbGF6YW1lLmpzIiwibG9hZGVycy9kYXRhLWJ1dHRvbi5qcyIsImxvYWRlcnMvZGF0YS1zaW11bGF0b3IuanMiLCJzYW5kYm94LmpzIiwidG9vbHMvYW1vdW50LXByaWNlLmpzIiwidG9vbHMvYnJvd3Nlci10b29scy5qcyIsInRvb2xzL2NvbG9ycy5qcyIsInRvb2xzL2Nzcy1oYWNrLmpzIiwidG9vbHMvZGVzZXJpYWxpemUuanMiLCJ0b29scy9saXZlLWRvbS5qcyIsInRvb2xzL2xvZy5qcyIsInRvb2xzL21lc3NhZ2UtbGlzdGVuZXIuanMiLCJ0b29scy90ZW1wbGF0ZS5qcyIsInRvb2xzL3Rvb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzVGQTtBQUNBO0FBQ0E7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdlhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0gJzAuMC4zNjMnOyIsIm1vZHVsZS5leHBvcnRzID0gJ0BrZXlmcmFtZXMgYXBsYXphbWUtYmx1cnswJXstd2Via2l0LWZpbHRlcjpibHVyKDApO2ZpbHRlcjpibHVyKDApO310b3std2Via2l0LWZpbHRlcjpibHVyKDNweCk7ZmlsdGVyOmJsdXIoM3B4KX19Ym9keS5hcGxhemFtZS1ibHVyPjpub3QoLmFwbGF6YW1lLW1vZGFsKTpub3QoLmFwbGF6YW1lLW92ZXJsYXkpey13ZWJraXQtZmlsdGVyOmJsdXIoM3B4KTtmaWx0ZXI6Ymx1cigzcHgpfUBtZWRpYSAobWluLXdpZHRoOjYwMXB4KXtib2R5LmFwbGF6YW1lLWJsdXI+Om5vdCguYXBsYXphbWUtbW9kYWwpOm5vdCguYXBsYXphbWUtb3ZlcmxheSl7YW5pbWF0aW9uLWR1cmF0aW9uOi40czthbmltYXRpb24tbmFtZTphcGxhemFtZS1ibHVyfX1ib2R5LmFwbGF6YW1lLXVuYmx1cj46bm90KC5hcGxhemFtZS1tb2RhbCk6bm90KC5hcGxhemFtZS1vdmVybGF5KXstd2Via2l0LWZpbHRlcjpibHVyKDApO2ZpbHRlcjpibHVyKDApfUBtZWRpYSAobWluLXdpZHRoOjYwMXB4KXtib2R5LmFwbGF6YW1lLXVuYmx1cj46bm90KC5hcGxhemFtZS1tb2RhbCk6bm90KC5hcGxhemFtZS1vdmVybGF5KXthbmltYXRpb24tZHVyYXRpb246LjRzO2FuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWJsdXI7YW5pbWF0aW9uLWRpcmVjdGlvbjpyZXZlcnNlfX0nOyIsIm1vZHVsZS5leHBvcnRzID0gJ0BrZXlmcmFtZXMgYXBsYXphbWUtbG9nby1zbWlsZXswJXt0cmFuc2Zvcm06cm90YXRlKDBkZWcpO305MCV7dHJhbnNmb3JtOnJvdGF0ZSgydHVybil9dG97dHJhbnNmb3JtOnJvdGF0ZSgydHVybil9fUBrZXlmcmFtZXMgYXBsYXphbWUtbG9nby1zaG9ydHswJXt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTMwJXt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTkwJXt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX10b3t0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19QGtleWZyYW1lcyBhcGxhemFtZS1sb2dvLWxhcmdlezAle3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9NjAle3RyYW5zZm9ybTpyb3RhdGUoMXR1cm4pfTkwJXt0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX10b3t0cmFuc2Zvcm06cm90YXRlKDF0dXJuKX19LmxvZ28tYXBsYXphbWV7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTUwcHg7aGVpZ2h0OjE1MHB4fS5sb2dvLWFwbGF6YW1lIC5saW5lLWxhcmdlLC5sb2dvLWFwbGF6YW1lIC5saW5lLXNob3J0LC5sb2dvLWFwbGF6YW1lIC5zbWlsZXtzdHJva2U6I2RkZH0ubG9nby1hcGxhemFtZSAuc21pbGUtb3V0bGluZXtzdHJva2U6IzQ4NTI1OX1AbWVkaWEgKG1pbi13aWR0aDo0ODBweCl7LmxvZ28tYXBsYXphbWV7d2lkdGg6MjAwcHg7aGVpZ2h0OjIwMHB4fX0ubG9nby1hcGxhemFtZSBzdmd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LmxvZ28tYXBsYXphbWUuYW5pbWF0ZSAubGluZS1sYXJnZSwubG9nby1hcGxhemFtZS5hbmltYXRlIC5saW5lLXNob3J0LC5sb2dvLWFwbGF6YW1lLmFuaW1hdGUgLnNtaWxle3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2FuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7YW5pbWF0aW9uLWR1cmF0aW9uOjEuNXM7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZX0ubG9nby1hcGxhemFtZS5hbmltYXRlIC5zbWlsZXthbmltYXRpb24tbmFtZTphcGxhemFtZS1sb2dvLXNtaWxlfS5sb2dvLWFwbGF6YW1lLmFuaW1hdGUgLmxpbmUtbGFyZ2V7YW5pbWF0aW9uLW5hbWU6YXBsYXphbWUtbG9nby1sYXJnZX0ubG9nby1hcGxhemFtZS5hbmltYXRlIC5saW5lLXNob3J0e2FuaW1hdGlvbi1uYW1lOmFwbGF6YW1lLWxvZ28tc2hvcnR9JzsiLCJtb2R1bGUuZXhwb3J0cyA9ICcuYXBsYXphbWUtbW9kYWx7aGVpZ2h0OjEwMCU7aGVpZ2h0OjEwMHZoO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MjE0NzQ4MzY0Nzt9Ym9keXtvdmVyZmxvdzpoaWRkZW59QG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpe2h0bWx7YmFja2dyb3VuZC1jb2xvcjojMzMzYTNlfWJvZHksaHRtbHtoZWlnaHQ6MTAwdmg7bWFyZ2luOjA7cGFkZGluZzowfWJvZHk+Om5vdCguYXBsYXphbWUtbW9kYWwpe2Rpc3BsYXk6bm9uZX19QG1lZGlhIChtaW4td2lkdGg6NjAxcHgpey5hcGxhemFtZS1tb2RhbHtwb3NpdGlvbjpmaXhlZH19JzsiLCJtb2R1bGUuZXhwb3J0cyA9ICdAa2V5ZnJhbWVzIGFwbGF6YW1lLW92ZXJsYXl7MCV7b3BhY2l0eTowO310b3tvcGFjaXR5OjF9fS5hcGxhemFtZS1vdmVybGF5e2ZvbnQtZmFtaWx5Ok1vbnRzZXJyYXQsc2Fucy1zZXJpZjtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3dpZHRoOjEwMHZ3O2hlaWdodDoxMDB2aDtiYWNrZ3JvdW5kOnJnYmEoNTMsNjQsNzEsLjkpO3RleHQtYWxpZ246Y2VudGVyO3otaW5kZXg6MjE0NzQ4MzY0Njt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX0uYXBsYXphbWUtb3ZlcmxheTpiZWZvcmV7Y29udGVudDpcXCdcXCc7ZGlzcGxheTpibG9jaztoZWlnaHQ6NTB2aH0uYXBsYXphbWUtbG9nby13cmFwcGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi10b3A6LTUwJX0uYXBsYXphbWUtb3ZlcmxheS1sb2FkaW5nLXRleHR7Y29sb3I6Izk1YTZiMTttYXJnaW4tdG9wOjE0cHg7Zm9udC1zaXplOjE0cHh9LmFwbGF6YW1lLW92ZXJsYXktbG9hZGluZy10ZXh0IC50ZXh0LWVycm9ye2NvbG9yOiNmMDgwODB9LmFwbGF6YW1lLW92ZXJsYXktbG9hZGluZy10ZXh0IGF7Y29sb3I6I2Y1ZjVmNTtkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWRlY29yYXRpb246bm9uZX0uYXBsYXphbWUtb3ZlcmxheS1sb2FkaW5nLXRleHQgYTpob3Zlcntib3JkZXItYm90dG9tOjFweCBkb3R0ZWQgI2Y1ZjVmNX0uYXBsYXphbWUtb3ZlcmxheXthbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzfS5hcGxhemFtZS1vdmVybGF5LmFwbGF6YW1lLW92ZXJsYXktaGlkZSwuYXBsYXphbWUtb3ZlcmxheS5hcGxhemFtZS1vdmVybGF5LXNob3d7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7YW5pbWF0aW9uLWR1cmF0aW9uOi42czthbmltYXRpb24tbmFtZTphcGxhemFtZS1vdmVybGF5fS5hcGxhemFtZS1vdmVybGF5LmFwbGF6YW1lLW92ZXJsYXktaGlkZXthbmltYXRpb24tZGlyZWN0aW9uOnJldmVyc2V9JzsiLCJtb2R1bGUuZXhwb3J0cyA9ICc8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+ICA8aGVhZGVyIGNsYXNzPVwiYXBsYXphbWVcIj48L2hlYWRlcj4gIDxzZWN0aW9uIGNsYXNzPVwiaW5mb1wiPiAgICBFbGlnZSBlbCBuw7ptZXJvIGRlIG1lc2VzIHkgbGEgY3VvdGEgcXVlIG3DoXMgdGUgY29udmVuZ2FuICA8L3NlY3Rpb24+ICA8ZGl2IGNsYXNzPVwiY2hvaWNlcy13cmFwcGVyXCI+ICAgIDwlIGZvciggdmFyIGkgPSBjaG9pY2VzLmxlbmd0aCAtIDEgOyBpID49IDAgOyBpLS0gKSB7ICU+ICAgIDxidXR0b24gbmctcmVwZWF0PVwiY2hvaWNlIGluIGNob2ljZXNcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjaG9pY2VcIiBuZy1jbGljaz1cInNlbGVjdENob2ljZShjaG9pY2UpXCIgbmctY2xhc3M9XCJ7IGFjdGl2ZTogY2hvaWNlID09PSBjdXJyZW50Q2hvaWNlIH1cIj4gICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPiAgICAgICAgPGRpdiBjbGFzcz1cIm51bS1pbnN0YWxtZW50c1wiPiAgICAgICAgICA8c3Bhbj48JT0gY2hvaWNlc1tpXS5udW1faW5zdGFsbWVudHMgJT48L3NwYW4+Jm5ic3A7PHNwYW4+PCU9IG1vbnRocyhjaG9pY2VzW2ldLm51bV9pbnN0YWxtZW50cykgJT48L3NwYW4+ICAgICAgICA8L2Rpdj4gICAgICAgIDxkaXYgY2xhc3M9XCJhbW91bnRcIj4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbW91bnQtYW1vdW50XCI+PCU9IGdldEFtb3VudChjaG9pY2VzW2ldLmFtb3VudCkgJT48L3NwYW4+PCEtLSAgICAgICAgICAtLT48c3BhbiBjbGFzcz1cImFtb3VudC1jdXJyZW5jeVwiPuKCrDwvc3Bhbj48IS0tICAgICAgICAgIC0tPjxzcGFuIGNsYXNzPVwiYW1vdW50LXBlci1tb250aFwiPi9tZXM8L3NwYW4+PC9kaXY+ICAgICAgPC9kaXY+ICAgIDwvYnV0dG9uPiAgICA8JSB9ICU+ICA8L2Rpdj4gIDxzZWN0aW9uIGNsYXNzPVwidGFlXCI+VEFFIG3DoXhpbW86IDwlPSBnZXRBbW91bnQoY2hvaWNlc1swXS5hbm51YWxfZXF1aXZhbGVudCkgJT4lPC9zZWN0aW9uPiAgPHNlY3Rpb24gY2xhc3M9XCJob3ctaXQtd29ya3NcIj4gICAgPGhlYWRlcj7Cv0PDs21vIGZ1bmNpb25hPzwvaGVhZGVyPiAgICA8ZGl2IGNsYXNzPVwiaW5mby13cmFwcGVyXCI+ICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj4gICAgICAgIDxoMz5FbGlnZSBBcGxhemFtZTwvaDM+ICAgICAgICA8cD5lbiBsYSB0aWVuZGEsIGN1YW5kbyB2YXlhcyBhIHBhZ2FyIGVsIHBlZGlkby48L3A+ICAgICAgPC9kaXY+ICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj4gICAgICAgIDxoMz5EZWNpZGUgY8OzbW8gcXVpZXJlcyBwYWdhcjwvaDM+ICAgICAgICA8cD5IYXN0YSBlbiAxMiBjdW90YXMsIHBhZ2FuZG8gY29uIHRhcmpldGEuPC9wPiAgICAgIDwvZGl2PiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+ICAgICAgICA8aDM+RGlzZnJ1dGEgZGUgdHUgY29tcHJhPC9oMz4gICAgICAgIDxwPkRlc2RlIEFwbGF6YW1lIGVzdGFyZW1vcyBkaXNwb25pYmxlcyBwb3Igc2kgbmVjZXNpdGFzIGN1YWxxdWllciBjb3NhLiDCoUEgZGlzZnJ1dGFyITwvcD4gICAgICA8L2Rpdj4gICAgPC9kaXY+ICA8L3NlY3Rpb24+PC9kaXY+PGRpdiBjbGFzcz1cImN0YVwiPiAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGJ1dHRvbi13cmFwcGVyXCI+ICAgIDxidXR0b24gY2xhc3M9XCJidG4gbGcgYnRuLWJsb2NrIHdoaXRlXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtbW9kYWw9XCJkaXNtaXNzXCI+Vm9sdmVyIGEgVGllbmRhPC9idXR0b24+ICA8L2Rpdj4gIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBidXR0b24td3JhcHBlclwiPiAgICA8YSBjbGFzcz1cImJ0biBsZyBidG4tYmxvY2tcIiBocmVmPVwiaHR0cDovL2FwbGF6YW1lLmNvbS9ob3cvY3VzdG9tZXJzL1wiIHRhcmdldD1cIl9ibGFua1wiPsK/UXVpZXJlcyBzYWJlciBtw6FzPzwvYT4gIDwvZGl2PjwvZGl2Pic7IiwibW9kdWxlLmV4cG9ydHMgPSAnPGRpdiBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1pbnN0YWxtZW50c1wiPiAgPHNwYW4gY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtZnJvbVwiPmRlc2RlJm5ic3A7PC9zcGFuPjwhLS0gIC0tPjxzdHJvbmcgY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtYW1vdW50XCI+ICAgIDxzcGFuIGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LXByaWNlXCI+PCU9IGdldEFtb3VudChjaG9pY2UuYW1vdW50KSAlPjwvc3Bhbj48IS0tICAgIC0tPjxzcGFuIGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LWN1cnJlbmN5XCI+4oKsPC9zcGFuPiAgPC9zdHJvbmc+PCEtLSAgLS0+PHN1YiBjbGFzcz1cImFwbGF6YW1lLXdpZGdldC1wZXItbW9udGhcIj4vbWVzPC9zdWI+PCEtLSAgLS0+PHNwYW4gY2xhc3M9XCJhcGxhemFtZS13aWRnZXQtaW5zdGFsbWVudHMtd3JhcHBlclwiPiAgICA8c3Bhbj4mbmJzcDtlbiZuYnNwOzwvc3Bhbj4gICAgPGVtIGNsYXNzPVwiYXBsYXphbWUtd2lkZ2V0LWluc3RhbG1lbnRzLW51bVwiPjEyPC9lbT4gICAgPHNwYW4+Jm5ic3A7Y3VvdGFzPC9zcGFuPiAgPC9zcGFuPjwvZGl2PjxzdHlsZSByZWw9XCJzdHlsZXNoZWV0XCI+PCU9IG9wdGlvbnMud2lkZ2V0LnN0eWxlcyAlPjwvc3R5bGU+JzsiLCIvKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZ1xuICogQmV6aWVyRWFzaW5nIC0gdXNlIGJlemllciBjdXJ2ZSBmb3IgdHJhbnNpdGlvbiBlYXNpbmcgZnVuY3Rpb25cbiAqIGJ5IEdhw6t0YW4gUmVuYXVkZWF1IDIwMTQgLSAyMDE1IOKAkyBNSVQgTGljZW5zZVxuICovXG5cbi8vIFRoZXNlIHZhbHVlcyBhcmUgZXN0YWJsaXNoZWQgYnkgZW1waXJpY2lzbSB3aXRoIHRlc3RzICh0cmFkZW9mZjogcGVyZm9ybWFuY2UgVlMgcHJlY2lzaW9uKVxudmFyIE5FV1RPTl9JVEVSQVRJT05TID0gNDtcbnZhciBORVdUT05fTUlOX1NMT1BFID0gMC4wMDE7XG52YXIgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxO1xudmFyIFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TID0gMTA7XG5cbnZhciBrU3BsaW5lVGFibGVTaXplID0gMTE7XG52YXIga1NhbXBsZVN0ZXBTaXplID0gMS4wIC8gKGtTcGxpbmVUYWJsZVNpemUgLSAxLjApO1xuXG52YXIgZmxvYXQzMkFycmF5U3VwcG9ydGVkID0gdHlwZW9mIEZsb2F0MzJBcnJheSA9PT0gJ2Z1bmN0aW9uJztcblxuZnVuY3Rpb24gQSAoYUExLCBhQTIpIHsgcmV0dXJuIDEuMCAtIDMuMCAqIGFBMiArIDMuMCAqIGFBMTsgfVxuZnVuY3Rpb24gQiAoYUExLCBhQTIpIHsgcmV0dXJuIDMuMCAqIGFBMiAtIDYuMCAqIGFBMTsgfVxuZnVuY3Rpb24gQyAoYUExKSAgICAgIHsgcmV0dXJuIDMuMCAqIGFBMTsgfVxuXG4vLyBSZXR1cm5zIHgodCkgZ2l2ZW4gdCwgeDEsIGFuZCB4Miwgb3IgeSh0KSBnaXZlbiB0LCB5MSwgYW5kIHkyLlxuZnVuY3Rpb24gY2FsY0JlemllciAoYVQsIGFBMSwgYUEyKSB7IHJldHVybiAoKEEoYUExLCBhQTIpICogYVQgKyBCKGFBMSwgYUEyKSkgKiBhVCArIEMoYUExKSkgKiBhVDsgfVxuXG4vLyBSZXR1cm5zIGR4L2R0IGdpdmVuIHQsIHgxLCBhbmQgeDIsIG9yIGR5L2R0IGdpdmVuIHQsIHkxLCBhbmQgeTIuXG5mdW5jdGlvbiBnZXRTbG9wZSAoYVQsIGFBMSwgYUEyKSB7IHJldHVybiAzLjAgKiBBKGFBMSwgYUEyKSAqIGFUICogYVQgKyAyLjAgKiBCKGFBMSwgYUEyKSAqIGFUICsgQyhhQTEpOyB9XG5cbmZ1bmN0aW9uIGJpbmFyeVN1YmRpdmlkZSAoYVgsIGFBLCBhQiwgbVgxLCBtWDIpIHtcbiAgdmFyIGN1cnJlbnRYLCBjdXJyZW50VCwgaSA9IDA7XG4gIGRvIHtcbiAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICBhQiA9IGN1cnJlbnRUO1xuICAgIH0gZWxzZSB7XG4gICAgICBhQSA9IGN1cnJlbnRUO1xuICAgIH1cbiAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcbiAgcmV0dXJuIGN1cnJlbnRUO1xufVxuXG5mdW5jdGlvbiBuZXd0b25SYXBoc29uSXRlcmF0ZSAoYVgsIGFHdWVzc1QsIG1YMSwgbVgyKSB7XG4gZm9yICh2YXIgaSA9IDA7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICB2YXIgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgIHJldHVybiBhR3Vlc3NUO1xuICAgfVxuICAgdmFyIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gfVxuIHJldHVybiBhR3Vlc3NUO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJlemllciAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gIGlmICghKDAgPD0gbVgxICYmIG1YMSA8PSAxICYmIDAgPD0gbVgyICYmIG1YMiA8PSAxKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignYmV6aWVyIHggdmFsdWVzIG11c3QgYmUgaW4gWzAsIDFdIHJhbmdlJyk7XG4gIH1cblxuICAvLyBQcmVjb21wdXRlIHNhbXBsZXMgdGFibGVcbiAgdmFyIHNhbXBsZVZhbHVlcyA9IGZsb2F0MzJBcnJheVN1cHBvcnRlZCA/IG5ldyBGbG9hdDMyQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSkgOiBuZXcgQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSk7XG4gIGlmIChtWDEgIT09IG1ZMSB8fCBtWDIgIT09IG1ZMikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga1NwbGluZVRhYmxlU2l6ZTsgKytpKSB7XG4gICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRURm9yWCAoYVgpIHtcbiAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMDtcbiAgICB2YXIgY3VycmVudFNhbXBsZSA9IDE7XG4gICAgdmFyIGxhc3RTYW1wbGUgPSBrU3BsaW5lVGFibGVTaXplIC0gMTtcblxuICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9PSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICBpbnRlcnZhbFN0YXJ0ICs9IGtTYW1wbGVTdGVwU2l6ZTtcbiAgICB9XG4gICAgLS1jdXJyZW50U2FtcGxlO1xuXG4gICAgLy8gSW50ZXJwb2xhdGUgdG8gcHJvdmlkZSBhbiBpbml0aWFsIGd1ZXNzIGZvciB0XG4gICAgdmFyIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlICsgMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgIHZhciBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIGtTYW1wbGVTdGVwU2l6ZTtcblxuICAgIHZhciBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBCZXppZXJFYXNpbmcgKHgpIHtcbiAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgIHJldHVybiB4OyAvLyBsaW5lYXJcbiAgICB9XG4gICAgLy8gQmVjYXVzZSBKYXZhU2NyaXB0IG51bWJlciBhcmUgaW1wcmVjaXNlLCB3ZSBzaG91bGQgZ3VhcmFudGVlIHRoZSBleHRyZW1lcyBhcmUgcmlnaHQuXG4gICAgaWYgKHggPT09IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoeCA9PT0gMSkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHJldHVybiBjYWxjQmV6aWVyKGdldFRGb3JYKHgpLCBtWTEsIG1ZMik7XG4gIH07XG59O1xuIiwiLypcbiAqIGNsYXNzTGlzdC5qczogQ3Jvc3MtYnJvd3NlciBmdWxsIGVsZW1lbnQuY2xhc3NMaXN0IGltcGxlbWVudGF0aW9uLlxuICogMS4xLjIwMTUwMzEyXG4gKlxuICogQnkgRWxpIEdyZXksIGh0dHA6Ly9lbGlncmV5LmNvbVxuICogTGljZW5zZTogRGVkaWNhdGVkIHRvIHRoZSBwdWJsaWMgZG9tYWluLlxuICogICBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VsaWdyZXkvY2xhc3NMaXN0LmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiAqL1xuXG4vKmdsb2JhbCBzZWxmLCBkb2N1bWVudCwgRE9NRXhjZXB0aW9uICovXG5cbi8qISBAc291cmNlIGh0dHA6Ly9wdXJsLmVsaWdyZXkuY29tL2dpdGh1Yi9jbGFzc0xpc3QuanMvYmxvYi9tYXN0ZXIvY2xhc3NMaXN0LmpzICovXG5cbmlmIChcImRvY3VtZW50XCIgaW4gc2VsZikge1xuXG4vLyBGdWxsIHBvbHlmaWxsIGZvciBicm93c2VycyB3aXRoIG5vIGNsYXNzTGlzdCBzdXBwb3J0XG4vLyBJbmNsdWRpbmcgSUUgPCBFZGdlIG1pc3NpbmcgU1ZHRWxlbWVudC5jbGFzc0xpc3RcbmlmICghKFwiY2xhc3NMaXN0XCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIikpIFxuXHR8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMgJiYgIShcImNsYXNzTGlzdFwiIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJnXCIpKSkge1xuXG4oZnVuY3Rpb24gKHZpZXcpIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmlmICghKCdFbGVtZW50JyBpbiB2aWV3KSkgcmV0dXJuO1xuXG52YXJcblx0ICBjbGFzc0xpc3RQcm9wID0gXCJjbGFzc0xpc3RcIlxuXHQsIHByb3RvUHJvcCA9IFwicHJvdG90eXBlXCJcblx0LCBlbGVtQ3RyUHJvdG8gPSB2aWV3LkVsZW1lbnRbcHJvdG9Qcm9wXVxuXHQsIG9iakN0ciA9IE9iamVjdFxuXHQsIHN0clRyaW0gPSBTdHJpbmdbcHJvdG9Qcm9wXS50cmltIHx8IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKTtcblx0fVxuXHQsIGFyckluZGV4T2YgPSBBcnJheVtwcm90b1Byb3BdLmluZGV4T2YgfHwgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHR2YXJcblx0XHRcdCAgaSA9IDBcblx0XHRcdCwgbGVuID0gdGhpcy5sZW5ndGhcblx0XHQ7XG5cdFx0Zm9yICg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGkgaW4gdGhpcyAmJiB0aGlzW2ldID09PSBpdGVtKSB7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gLTE7XG5cdH1cblx0Ly8gVmVuZG9yczogcGxlYXNlIGFsbG93IGNvbnRlbnQgY29kZSB0byBpbnN0YW50aWF0ZSBET01FeGNlcHRpb25zXG5cdCwgRE9NRXggPSBmdW5jdGlvbiAodHlwZSwgbWVzc2FnZSkge1xuXHRcdHRoaXMubmFtZSA9IHR5cGU7XG5cdFx0dGhpcy5jb2RlID0gRE9NRXhjZXB0aW9uW3R5cGVdO1xuXHRcdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdH1cblx0LCBjaGVja1Rva2VuQW5kR2V0SW5kZXggPSBmdW5jdGlvbiAoY2xhc3NMaXN0LCB0b2tlbikge1xuXHRcdGlmICh0b2tlbiA9PT0gXCJcIikge1xuXHRcdFx0dGhyb3cgbmV3IERPTUV4KFxuXHRcdFx0XHQgIFwiU1lOVEFYX0VSUlwiXG5cdFx0XHRcdCwgXCJBbiBpbnZhbGlkIG9yIGlsbGVnYWwgc3RyaW5nIHdhcyBzcGVjaWZpZWRcIlxuXHRcdFx0KTtcblx0XHR9XG5cdFx0aWYgKC9cXHMvLnRlc3QodG9rZW4pKSB7XG5cdFx0XHR0aHJvdyBuZXcgRE9NRXgoXG5cdFx0XHRcdCAgXCJJTlZBTElEX0NIQVJBQ1RFUl9FUlJcIlxuXHRcdFx0XHQsIFwiU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyXCJcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiBhcnJJbmRleE9mLmNhbGwoY2xhc3NMaXN0LCB0b2tlbik7XG5cdH1cblx0LCBDbGFzc0xpc3QgPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdHZhclxuXHRcdFx0ICB0cmltbWVkQ2xhc3NlcyA9IHN0clRyaW0uY2FsbChlbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIpXG5cdFx0XHQsIGNsYXNzZXMgPSB0cmltbWVkQ2xhc3NlcyA/IHRyaW1tZWRDbGFzc2VzLnNwbGl0KC9cXHMrLykgOiBbXVxuXHRcdFx0LCBpID0gMFxuXHRcdFx0LCBsZW4gPSBjbGFzc2VzLmxlbmd0aFxuXHRcdDtcblx0XHRmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHR0aGlzLnB1c2goY2xhc3Nlc1tpXSk7XG5cdFx0fVxuXHRcdHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdGhpcy50b1N0cmluZygpKTtcblx0XHR9O1xuXHR9XG5cdCwgY2xhc3NMaXN0UHJvdG8gPSBDbGFzc0xpc3RbcHJvdG9Qcm9wXSA9IFtdXG5cdCwgY2xhc3NMaXN0R2V0dGVyID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBuZXcgQ2xhc3NMaXN0KHRoaXMpO1xuXHR9XG47XG4vLyBNb3N0IERPTUV4Y2VwdGlvbiBpbXBsZW1lbnRhdGlvbnMgZG9uJ3QgYWxsb3cgY2FsbGluZyBET01FeGNlcHRpb24ncyB0b1N0cmluZygpXG4vLyBvbiBub24tRE9NRXhjZXB0aW9ucy4gRXJyb3IncyB0b1N0cmluZygpIGlzIHN1ZmZpY2llbnQgaGVyZS5cbkRPTUV4W3Byb3RvUHJvcF0gPSBFcnJvcltwcm90b1Byb3BdO1xuY2xhc3NMaXN0UHJvdG8uaXRlbSA9IGZ1bmN0aW9uIChpKSB7XG5cdHJldHVybiB0aGlzW2ldIHx8IG51bGw7XG59O1xuY2xhc3NMaXN0UHJvdG8uY29udGFpbnMgPSBmdW5jdGlvbiAodG9rZW4pIHtcblx0dG9rZW4gKz0gXCJcIjtcblx0cmV0dXJuIGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbikgIT09IC0xO1xufTtcbmNsYXNzTGlzdFByb3RvLmFkZCA9IGZ1bmN0aW9uICgpIHtcblx0dmFyXG5cdFx0ICB0b2tlbnMgPSBhcmd1bWVudHNcblx0XHQsIGkgPSAwXG5cdFx0LCBsID0gdG9rZW5zLmxlbmd0aFxuXHRcdCwgdG9rZW5cblx0XHQsIHVwZGF0ZWQgPSBmYWxzZVxuXHQ7XG5cdGRvIHtcblx0XHR0b2tlbiA9IHRva2Vuc1tpXSArIFwiXCI7XG5cdFx0aWYgKGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbikgPT09IC0xKSB7XG5cdFx0XHR0aGlzLnB1c2godG9rZW4pO1xuXHRcdFx0dXBkYXRlZCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdHdoaWxlICgrK2kgPCBsKTtcblxuXHRpZiAodXBkYXRlZCkge1xuXHRcdHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpO1xuXHR9XG59O1xuY2xhc3NMaXN0UHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHR2YXJcblx0XHQgIHRva2VucyA9IGFyZ3VtZW50c1xuXHRcdCwgaSA9IDBcblx0XHQsIGwgPSB0b2tlbnMubGVuZ3RoXG5cdFx0LCB0b2tlblxuXHRcdCwgdXBkYXRlZCA9IGZhbHNlXG5cdFx0LCBpbmRleFxuXHQ7XG5cdGRvIHtcblx0XHR0b2tlbiA9IHRva2Vuc1tpXSArIFwiXCI7XG5cdFx0aW5kZXggPSBjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pO1xuXHRcdHdoaWxlIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHVwZGF0ZWQgPSB0cnVlO1xuXHRcdFx0aW5kZXggPSBjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pO1xuXHRcdH1cblx0fVxuXHR3aGlsZSAoKytpIDwgbCk7XG5cblx0aWYgKHVwZGF0ZWQpIHtcblx0XHR0aGlzLl91cGRhdGVDbGFzc05hbWUoKTtcblx0fVxufTtcbmNsYXNzTGlzdFByb3RvLnRvZ2dsZSA9IGZ1bmN0aW9uICh0b2tlbiwgZm9yY2UpIHtcblx0dG9rZW4gKz0gXCJcIjtcblxuXHR2YXJcblx0XHQgIHJlc3VsdCA9IHRoaXMuY29udGFpbnModG9rZW4pXG5cdFx0LCBtZXRob2QgPSByZXN1bHQgP1xuXHRcdFx0Zm9yY2UgIT09IHRydWUgJiYgXCJyZW1vdmVcIlxuXHRcdDpcblx0XHRcdGZvcmNlICE9PSBmYWxzZSAmJiBcImFkZFwiXG5cdDtcblxuXHRpZiAobWV0aG9kKSB7XG5cdFx0dGhpc1ttZXRob2RdKHRva2VuKTtcblx0fVxuXG5cdGlmIChmb3JjZSA9PT0gdHJ1ZSB8fCBmb3JjZSA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gZm9yY2U7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuICFyZXN1bHQ7XG5cdH1cbn07XG5jbGFzc0xpc3RQcm90by50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuam9pbihcIiBcIik7XG59O1xuXG5pZiAob2JqQ3RyLmRlZmluZVByb3BlcnR5KSB7XG5cdHZhciBjbGFzc0xpc3RQcm9wRGVzYyA9IHtcblx0XHQgIGdldDogY2xhc3NMaXN0R2V0dGVyXG5cdFx0LCBlbnVtZXJhYmxlOiB0cnVlXG5cdFx0LCBjb25maWd1cmFibGU6IHRydWVcblx0fTtcblx0dHJ5IHtcblx0XHRvYmpDdHIuZGVmaW5lUHJvcGVydHkoZWxlbUN0clByb3RvLCBjbGFzc0xpc3RQcm9wLCBjbGFzc0xpc3RQcm9wRGVzYyk7XG5cdH0gY2F0Y2ggKGV4KSB7IC8vIElFIDggZG9lc24ndCBzdXBwb3J0IGVudW1lcmFibGU6dHJ1ZVxuXHRcdGlmIChleC5udW1iZXIgPT09IC0weDdGRjVFQzU0KSB7XG5cdFx0XHRjbGFzc0xpc3RQcm9wRGVzYy5lbnVtZXJhYmxlID0gZmFsc2U7XG5cdFx0XHRvYmpDdHIuZGVmaW5lUHJvcGVydHkoZWxlbUN0clByb3RvLCBjbGFzc0xpc3RQcm9wLCBjbGFzc0xpc3RQcm9wRGVzYyk7XG5cdFx0fVxuXHR9XG59IGVsc2UgaWYgKG9iakN0cltwcm90b1Byb3BdLl9fZGVmaW5lR2V0dGVyX18pIHtcblx0ZWxlbUN0clByb3RvLl9fZGVmaW5lR2V0dGVyX18oY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0R2V0dGVyKTtcbn1cblxufShzZWxmKSk7XG5cbn0gZWxzZSB7XG4vLyBUaGVyZSBpcyBmdWxsIG9yIHBhcnRpYWwgbmF0aXZlIGNsYXNzTGlzdCBzdXBwb3J0LCBzbyBqdXN0IGNoZWNrIGlmIHdlIG5lZWRcbi8vIHRvIG5vcm1hbGl6ZSB0aGUgYWRkL3JlbW92ZSBhbmQgdG9nZ2xlIEFQSXMuXG5cbihmdW5jdGlvbiAoKSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdHZhciB0ZXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJfXCIpO1xuXG5cdHRlc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjMVwiLCBcImMyXCIpO1xuXG5cdC8vIFBvbHlmaWxsIGZvciBJRSAxMC8xMSBhbmQgRmlyZWZveCA8MjYsIHdoZXJlIGNsYXNzTGlzdC5hZGQgYW5kXG5cdC8vIGNsYXNzTGlzdC5yZW1vdmUgZXhpc3QgYnV0IHN1cHBvcnQgb25seSBvbmUgYXJndW1lbnQgYXQgYSB0aW1lLlxuXHRpZiAoIXRlc3RFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImMyXCIpKSB7XG5cdFx0dmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuXHRcdFx0dmFyIG9yaWdpbmFsID0gRE9NVG9rZW5MaXN0LnByb3RvdHlwZVttZXRob2RdO1xuXG5cdFx0XHRET01Ub2tlbkxpc3QucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih0b2tlbikge1xuXHRcdFx0XHR2YXIgaSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcblxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdFx0XHR0b2tlbiA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdFx0XHRvcmlnaW5hbC5jYWxsKHRoaXMsIHRva2VuKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdGNyZWF0ZU1ldGhvZCgnYWRkJyk7XG5cdFx0Y3JlYXRlTWV0aG9kKCdyZW1vdmUnKTtcblx0fVxuXG5cdHRlc3RFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjM1wiLCBmYWxzZSk7XG5cblx0Ly8gUG9seWZpbGwgZm9yIElFIDEwIGFuZCBGaXJlZm94IDwyNCwgd2hlcmUgY2xhc3NMaXN0LnRvZ2dsZSBkb2VzIG5vdFxuXHQvLyBzdXBwb3J0IHRoZSBzZWNvbmQgYXJndW1lbnQuXG5cdGlmICh0ZXN0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjM1wiKSkge1xuXHRcdHZhciBfdG9nZ2xlID0gRE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGU7XG5cblx0XHRET01Ub2tlbkxpc3QucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKHRva2VuLCBmb3JjZSkge1xuXHRcdFx0aWYgKDEgaW4gYXJndW1lbnRzICYmICF0aGlzLmNvbnRhaW5zKHRva2VuKSA9PT0gIWZvcmNlKSB7XG5cdFx0XHRcdHJldHVybiBmb3JjZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBfdG9nZ2xlLmNhbGwodGhpcywgdG9rZW4pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0fVxuXG5cdHRlc3RFbGVtZW50ID0gbnVsbDtcbn0oKSk7XG5cbn1cblxufVxuXG4iLCIvKlxuICogZXZlbnRzLmpzIC0gU2luZ2xlIGxpYnJhcnkgdG8gaGFuZGxlIGdlbmVyaWMgZXZlbnRzXG5cbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNCBKZXPDunMgTWFudWVsIEdlcm1hZGUgQ2FzdGnDsWVpcmFzIDxqZXN1c0BnZXJtYWRlLmVzPlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKlxuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXG4gIGlmICggdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSBpZiggcm9vdCApIHtcbiAgICBpZiggcm9vdC5kZWZpbmUgKSB7XG4gICAgICByb290LmRlZmluZSgnRXZlbnRzJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFjdG9yeSgpOyB9ICk7XG4gICAgfSBlbHNlIGlmKCByb290LmFuZ3VsYXIgKSB7XG4gICAgICByb290LmFuZ3VsYXIubW9kdWxlKCdldmVudHNXcmFwcGVyJywgW10pLmZhY3RvcnkoJ0V2ZW50cycsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhY3RvcnkodHJ1ZSk7IH0pO1xuICAgIH0gZWxzZSBpZiggIXJvb3QuRXZlbnRzICkge1xuICAgICAgcm9vdC5FdmVudHMgPSBmYWN0b3J5KCk7XG4gICAgfVxuICB9XG5cbn0pKHRoaXMsIGZ1bmN0aW9uIChuZykge1xuXHQndXNlIHN0cmljdCc7XG5cbiAgdmFyIG1ldGhvZHMgPSB7XG4gICAgc3RkOiB7IG9uOiAnb24nLCBvbmNlOiAnb25jZScsIG9mZjogJ29mZicsIHRyaWdnZXI6ICd0cmlnZ2VyJyB9LFxuICAgIHNhZmU6IHsgb246ICckJG9uJywgb25jZTogJyQkb25jZScsIG9mZjogJyQkb2ZmJywgdHJpZ2dlcjogJyQkdHJpZ2dlcicgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIEV2ZW50IChuYW1lLCBhcmdzLCBjYWxsZXIpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgdGhpcy4kJGFyZ3MgPSBbdGhpc10uY29uY2F0KGFyZ3MpO1xuICAgIHRoaXMuY2FsbGVyID0gY2FsbGVyO1xuICB9XG5cbiAgRXZlbnQucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0TWV0aG9kcyAobmdTYWZlKSB7XG4gICAgcmV0dXJuIG5nU2FmZSA/IG1ldGhvZHMuc2FmZSA6IG1ldGhvZHMuc3RkO1xuICB9XG5cblx0ZnVuY3Rpb24gX2FkZExpc3RlbmVyIChoYW5kbGVycywgaGFuZGxlciwgY29udGV4dCkge1xuICAgIGlmKCAhIGhhbmRsZXIgaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBoYW5kbGVycy5wdXNoKHsgaGFuZGxlcjogaGFuZGxlciwgY29udGV4dDogY29udGV4dCB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90cmlnZ2VyRXZlbnQgKGUsIGhhbmRsZXJzKSB7XG4gICAgaWYoIGhhbmRsZXJzICkge1xuICAgICAgZm9yKCB2YXIgaSA9IDAsIGxlbiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgICBoYW5kbGVyc1tpXS5oYW5kbGVyLmFwcGx5KGUuY2FsbGVyLCBlLiQkYXJncyk7XG4gICAgICAgIGlmKCBlLmRlZmF1bHRQcmV2ZW50ZWQgKSB7XG4gICAgICAgICAgcmV0dXJuIGkgKyAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbGVuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9lbXB0eUxpc3RlbmVyIChoYW5kbGVycykge1xuICAgIGlmKCBoYW5kbGVycyApIHtcbiAgICAgIGhhbmRsZXJzLnNwbGljZSgwLCBoYW5kbGVycy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZW1vdmVMaXN0ZW5lciAoaGFuZGxlcnMsIGhhbmRsZXIpIHtcbiAgICBpZiggaGFuZGxlcnMgKSB7XG4gICAgICBmb3IoIHZhciBpID0gMCwgbGVuID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgbGVuOyApIHtcbiAgICAgICAgaWYoIGhhbmRsZXJzW2ldLmhhbmRsZXIgPT09IGhhbmRsZXIgKSB7XG4gICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGxlbi0tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEV2ZW50cyAodGFyZ2V0LCBuZ1NhZmUpIHtcbiAgICB0YXJnZXQgPSB0YXJnZXQgfHwgdGhpcztcblxuICAgIHZhciBsaXN0ZW5lcnMgPSB7fSxcbiAgICAgICAgbGlzdGVuZXJzT25jZSA9IHt9LFxuICAgICAgICBtZXRob2QgPSBnZXRNZXRob2RzKG5nU2FmZSk7XG5cbiAgICBmdW5jdGlvbiBjaGVja0VhY2ggKF9tZXRob2QsIGV2ZW50TmFtZSwgYXJnMSwgYXJnMiwgYXJnMykge1xuICAgICAgaWYoIGV2ZW50TmFtZSBpbnN0YW5jZW9mIEFycmF5ICkge1xuICAgICAgICBldmVudE5hbWUuZm9yRWFjaChmdW5jdGlvbiAoX2V2ZW50TmFtZSkgeyB0YXJnZXRbX21ldGhvZF0oX2V2ZW50TmFtZSwgYXJnMSwgYXJnMiwgYXJnMyk7IH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmKCB0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdldmVudCBuYW1lIHNob3VsZCBiZSBhIHN0cmluZycpO1xuICAgICAgfVxuICAgICAgaWYoIC8gLy50ZXN0KGV2ZW50TmFtZSkgKSB7XG4gICAgICAgIHRhcmdldFtfbWV0aG9kXShldmVudE5hbWUuc3BsaXQoLyArLyksIGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0YXJnZXRbbWV0aG9kLm9uXSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICAgIGlmKCBjaGVja0VhY2gobWV0aG9kLm9uLCBldmVudE5hbWUsIGhhbmRsZXIsIGNvbnRleHQpICkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgfVxuICAgICAgbGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBsaXN0ZW5lcnNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgIF9hZGRMaXN0ZW5lcihsaXN0ZW5lcnNbZXZlbnROYW1lXSwgaGFuZGxlciwgY29udGV4dCk7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICB0YXJnZXRbbWV0aG9kLm9uY2VdID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgaGFuZGxlciwgY29udGV4dCkge1xuICAgICAgaWYoIGNoZWNrRWFjaChtZXRob2Qub25jZSwgZXZlbnROYW1lLCBoYW5kbGVyLCBjb250ZXh0KSApIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgIH1cbiAgICAgIGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXSA9IGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgIF9hZGRMaXN0ZW5lcihsaXN0ZW5lcnNPbmNlW2V2ZW50TmFtZV0sIGhhbmRsZXIsIGNvbnRleHQpO1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuXG4gICAgdGFyZ2V0W21ldGhvZC50cmlnZ2VyXSA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGF0dHJzLCBjYWxsZXIpIHtcbiAgICAgIGlmKCBjaGVja0VhY2gobWV0aG9kLnRyaWdnZXIsIGV2ZW50TmFtZSwgYXR0cnMsIGNhbGxlcikgKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgICB2YXIgZSA9IG5ldyBFdmVudChldmVudE5hbWUsIGF0dHJzLCBjYWxsZXIpO1xuXG4gICAgICBfdHJpZ2dlckV2ZW50KGUsIGxpc3RlbmVyc1tldmVudE5hbWVdKTtcblxuICAgICAgaWYoICFlLmRlZmF1bHRQcmV2ZW50ZWQgKSB7XG4gICAgICAgIHZhciBsZW4gPSBfdHJpZ2dlckV2ZW50KGUsIGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXSk7XG4gICAgICAgIGlmKCBsZW4gKSB7XG4gICAgICAgICAgbGlzdGVuZXJzT25jZVtldmVudE5hbWVdLnNwbGljZSgwLCBsZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICB0YXJnZXRbbWV0aG9kLm9mZl0gPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICBpZiggY2hlY2tFYWNoKG1ldGhvZC5vZmYsIGV2ZW50TmFtZSwgaGFuZGxlcikgKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICB9XG4gICAgICBpZiggaGFuZGxlciA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICBfZW1wdHlMaXN0ZW5lcihsaXN0ZW5lcnNbZXZlbnROYW1lXSk7XG4gICAgICAgIF9lbXB0eUxpc3RlbmVyKGxpc3RlbmVyc09uY2VbZXZlbnROYW1lXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXJzW2V2ZW50TmFtZV0sIGhhbmRsZXIpO1xuICAgICAgICBfcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXJzT25jZVtldmVudE5hbWVdLCBoYW5kbGVyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBFdmVudHM7XG59KTtcbiIsIlxuLy8gZmFjdG9yeSBodHRwXG5cbnZhciAkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZScpLFxuICAgIF8gPSByZXF1aXJlKCduaXRyby10b29scy9leHRlbmQnKTtcblxuZnVuY3Rpb24gcmVzb2x2ZUZ1bmN0aW9ucyAobywgYXJncywgdGhpc0FyZykge1xuICBmb3IoIHZhciBrZXkgaW4gbyApIHtcbiAgICBpZiggb1trZXldIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgICBvW2tleV0gPSBvW2tleV0uYXBwbHkodGhpc0FyZywgYXJncyB8fCBbXSk7XG4gICAgfSBlbHNlIGlmKCB0eXBlb2Ygb1trZXldID09PSAnb2JqZWN0JyAmJiBvW2tleV0gIT09IG51bGwgKSB7XG4gICAgICBvW2tleV0gPSByZXNvbHZlRnVuY3Rpb25zKG9ba2V5XSwgYXJncywgdGhpc0FyZyk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJUb1RpdGxlU2x1Zyh0ZXh0KSB7XG4gIC8vIGNvbnNvbGUubG9nKCdoZWFkZXJUb1RpdGxlU2x1ZycsIHRleHQpO1xuICB2YXIga2V5ID0gdGV4dC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBmdW5jdGlvbiAobWF0Y2gsIGxvd2VyLCB1cHBlcikge1xuICAgICAgcmV0dXJuIGxvd2VyICsgJy0nICsgdXBwZXI7XG4gIH0pO1xuICBrZXkgPSBrZXlbMF0udG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHIoMSk7XG5cbiAgcmV0dXJuIGtleTtcbn1cblxuZnVuY3Rpb24gaGVhZGVyVG9DYW1lbENhc2UodGV4dCkge1xuICB2YXIga2V5ID0gdGV4dFswXS50b0xvd2VyQ2FzZSgpICsgdGV4dC5zdWJzdHIoMSk7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvKFthLXpdKS0oW0EtWl0pL2csIGZ1bmN0aW9uIChtYXRjaCwgbG93ZXIsIHVwcGVyKSB7XG4gICAgcmV0dXJuIGxvd2VyICsgdXBwZXI7XG4gIH0pO1xufVxuXG52YXIgUkVfY29udGVudFR5cGUgPSAvKFteXFwvXSspXFwvKFteK10rXFwrKT8oW147XSopLztcbmZ1bmN0aW9uIHBhcnNlQ29udGVudFR5cGUoY29udGVudFR5cGUsIHRleHQsIHhtbCkge1xuICB2YXIgbWF0Y2hlcyA9IGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLm1hdGNoKFJFX2NvbnRlbnRUeXBlKTtcbiAgcmV0dXJuIG1hdGNoZXMgJiYgKCBtYXRjaGVzWzNdID09PSAnanNvbicgPyBKU09OLnBhcnNlKHRleHQpIDogKCBtYXRjaGVzWzNdID09PSAneG1sJyA/IHhtbCA6IHRleHQgKSApO1xufVxuXG5mdW5jdGlvbiBfZ2V0SGVhZGVycyAocmVxdWVzdCkge1xuICB2YXIgaGVhZGVycyA9IHt9O1xuICByZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnJlcGxhY2UoL1xccyooW15cXDpdKylcXHMqXFw6XFxzKihbXlxcO1xcbl0rKS9nLCBmdW5jdGlvbiAobWF0Y2gsIGtleSwgdmFsdWUpIHtcbiAgICAgIGhlYWRlcnNbaGVhZGVyVG9DYW1lbENhc2Uoa2V5KV0gPSB2YWx1ZS50cmltKCk7XG4gIH0pO1xuXG4gIHJldHVybiBoZWFkZXJzO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJzR2V0dGVyIChyZXF1ZXN0KSB7XG4gIHZhciBoZWFkZXJzQ2FjaGU7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYoICFoZWFkZXJzQ2FjaGUgKSB7XG4gICAgICBoZWFkZXJzQ2FjaGUgPSBfZ2V0SGVhZGVycyhyZXF1ZXN0KTtcbiAgICB9XG4gICAgcmV0dXJuIGhlYWRlcnNDYWNoZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplUGFyYW1zIChwYXJhbXMpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGZvciggdmFyIHBhcmFtIGluIHBhcmFtcyApIHtcbiAgICByZXN1bHQgKz0gKCByZXN1bHQgPyAnJicgOiAnJyApICsgcGFyYW0gKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW3BhcmFtXSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gYWRkSGVhZGVyc1RvUmVxdWVzdCAocmVxLCBoZWFkZXJzKSB7XG4gIGZvciggdmFyIGtleSBpbiBoZWFkZXJzICkge1xuICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKCBoZWFkZXJUb1RpdGxlU2x1ZyhrZXkpLCBoZWFkZXJzW2tleV0gKTtcbiAgfVxufVxuXG52YXIgZGVmYXVsdFNldHRpbmdzID0ge307XG5cbmh0dHAuY29uZmlnID0gZnVuY3Rpb24gKHNldHRpbmdzKSB7XG4gIF8ubWVyZ2UoZGVmYXVsdFNldHRpbmdzLCBzZXR0aW5ncyk7XG4gIHJldHVybiBodHRwO1xufTtcblxuZnVuY3Rpb24gaHR0cCAodXJsLCBjb25maWcpIHtcblxuICBpZiggY29uZmlnID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgJiYgdXJsICE9PSBudWxsICkge1xuICAgIGNvbmZpZyA9IHVybDtcbiAgICB1cmwgPSBjb25maWcudXJsO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgICBjb25maWcudXJsID0gdXJsO1xuICB9XG5cbiAgY29uZmlnID0gXy5tZXJnZShfLmNvcHkoZGVmYXVsdFNldHRpbmdzKSxfLmNvcHkoY29uZmlnKSk7XG4gIGNvbmZpZyA9IHJlc29sdmVGdW5jdGlvbnMoIGNvbmZpZywgW2NvbmZpZ10sIG51bGwgKTtcbiAgY29uZmlnLm1ldGhvZCA9ICggY29uZmlnLm1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcblxuICBpZiggdHlwZW9mIGNvbmZpZy51cmwgIT09ICdzdHJpbmcnICkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXJsIHNob3VsZCBiZSBhIHN0cmluZycpO1xuICB9XG5cbiAgcmV0dXJuICRxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblxuICAgIHZhciByZXF1ZXN0ID0gbnVsbDtcblxuICAgIHRyeSB7IC8vIEZpcmVmb3gsIE9wZXJhIDguMCssIFNhZmFyaVxuICAgICAgICByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgfSBjYXRjaCAoZSkgeyAvLyBJbnRlcm5ldCBFeHBsb3JlclxuICAgICAgICB0cnkgeyByZXF1ZXN0ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ01zeG1sMi5YTUxIVFRQJyk7IH0gIC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgICAgICBjYXRjaCAoZXIpIHsgcmVxdWVzdCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpOyB9ICAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICB9XG4gICAgaWYoIHJlcXVlc3QgPT09IG51bGwgKSB7IHRocm93ICdCcm93c2VyIGRvZXMgbm90IHN1cHBvcnQgSFRUUCBSZXF1ZXN0JzsgfVxuXG4gICAgaWYoIGNvbmZpZy5wYXJhbXMgKSB7XG4gICAgICB1cmwgKz0gKCAvXFw/Ly50ZXN0KHVybCkgPyAnJicgOiAnPycgKSArIHNlcmlhbGl6ZVBhcmFtcyggY29uZmlnLnBhcmFtcyApO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3BlbiggY29uZmlnLm1ldGhvZCwgdXJsICk7XG5cbiAgICBpZiggY29uZmlnLndpdGhDcmVkZW50aWFscyApIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBhZGRIZWFkZXJzVG9SZXF1ZXN0KHJlcXVlc3QsIGNvbmZpZy5oZWFkZXJzIHx8IHt9ICk7XG5cbiAgICByZXF1ZXN0LmNvbmZpZyA9IGNvbmZpZztcbiAgICBjb25maWcuc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICAgIGlmKCByZXF1ZXN0LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgcmVxdWVzdC5yZWFkeVN0YXRlID09PSA0ICkge1xuICAgICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgICAgZGF0YTogcGFyc2VDb250ZW50VHlwZShyZXF1ZXN0LmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKSwgcmVxdWVzdC5yZXNwb25zZVRleHQsIHJlcXVlc3QucmVzcG9uc2VYTUwpLFxuICAgICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVyc0dldHRlcihyZXF1ZXN0KSxcbiAgICAgICAgICB4aHI6IHJlcXVlc3RcbiAgICAgICAgfTtcbiAgICAgICAgaWYoIHJlcXVlc3Quc3RhdHVzID49IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyA8IDQwMCApIHtcbiAgICAgICAgICByZXNvbHZlKCByZXNwb25zZSApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCggcmVzcG9uc2UgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiggY29uZmlnLmNvbnRlbnRUeXBlICkge1xuXG4gICAgICBpZiggY29uZmlnLmRhdGEgJiYgY29uZmlnLmNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vanNvbicgJiYgdHlwZW9mIGNvbmZpZy5kYXRhICE9PSAnc3RyaW5nJyApIHtcbiAgICAgICAgY29uZmlnLmRhdGEgPSBKU09OLnN0cmluZ2lmeShjb25maWcuZGF0YSk7XG4gICAgICB9XG5cbiAgICB9IGVsc2UgaWYoIGNvbmZpZy5kYXRhIGluc3RhbmNlb2YgRm9ybURhdGEgKSB7XG4gICAgICBjb25maWcuY29udGVudFR5cGUgPSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc7XG4gICAgfSBlbHNlIGlmKCB0eXBlb2YgY29uZmlnLmRhdGEgPT09ICdvYmplY3QnICYmIGNvbmZpZy5kYXRhICE9PSBudWxsICkge1xuICAgICAgY29uZmlnLmNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuICAgICAgaWYoIGNvbmZpZy5kYXRhICkge1xuICAgICAgICBjb25maWcuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGNvbmZpZy5kYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiggY29uZmlnLmNvbnRlbnRUeXBlICkge1xuICAgICAgLy8gYWRkSGVhZGVyc1RvUmVxdWVzdChyZXF1ZXN0LCB7IGNvbnRlbnRUeXBlOiBjb25maWcuY29udGVudFR5cGUgfSk7XG4gICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoICdDb250ZW50LVR5cGUnLCBjb25maWcuY29udGVudFR5cGUgKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0LnNlbmQoIGNvbmZpZy5kYXRhICk7XG5cbiAgfSk7XG59XG5cbmh0dHAuc2VyaWFsaXplID0gc2VyaWFsaXplUGFyYW1zO1xuXG5odHRwLm5vQ2FjaGUgPSBmdW5jdGlvbiAodXJsLCBjb25maWcpIHtcbiAgdXJsICs9ICggL1xcPy8udGVzdCh1cmwpID8gJyYnIDogJz8nICkgKyAndD0nICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIHJldHVybiBodHRwKHVybCwgY29uZmlnKTtcbn07XG5cbmh0dHAucGxhaW5SZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICByZXR1cm4ge1xuICAgIGNvbmZpZzogcmVzcG9uc2UuY29uZmlnLFxuICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXG4gICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgaGVhZGVyczogcmVzcG9uc2UuaGVhZGVycygpXG4gIH07XG59O1xuXG5bJ2dldCcsICdkZWxldGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgaHR0cFttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIGh0dHAodXJsLCBfLmV4dGVuZChfLmNvcHkoY29uZmlnIHx8IHt9KSwge1xuICAgICAgbWV0aG9kOiBtZXRob2RcbiAgICB9KSk7XG4gIH07XG59KTtcblxuWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICBodHRwW21ldGhvZF0gPSBmdW5jdGlvbiAodXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gaHR0cCh1cmwsIF8uZXh0ZW5kKF8uY29weShjb25maWcgfHwge30pLCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIGRhdGE6IGRhdGEgfHwge31cbiAgICB9KSk7XG4gIH07XG59KTtcblxuLy8gYmFzZVBhdGhcblxuZnVuY3Rpb24gYmFzZVBhdGggKGJwKSB7XG4gIGlmKCAvXFwvJC8udGVzdChicCkgKSB7XG4gICAgYnAgPSBicC5yZXBsYWNlKC9cXC8kLywnJyk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgaWYoICFwICkge1xuICAgICAgcmV0dXJuIGJwO1xuICAgIH1cbiAgICByZXR1cm4gYnAgKyAoIC9eXFwvLy50ZXN0KHApID8gJycgOiAnLycgKSArIHA7XG4gIH07XG59XG5cbmh0dHAuYmFzZSA9IGZ1bmN0aW9uICh1cmwsIGJhc2VDb25maWcpIHtcbiAgdmFyIGJwID0gYmFzZVBhdGgodXJsKSxcbiAgICAgIGJhc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYmFzZWQuZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuXG4gIGJhc2VDb25maWcgPSBiYXNlQ29uZmlnIHx8IHt9O1xuXG4gIFsnZ2V0JywgJ2RlbGV0ZSddLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIGJhc2VkW21ldGhvZF0gPSBmdW5jdGlvbiAocCwgX2NvbmZpZyApIHtcbiAgICAgIHJldHVybiBodHRwKCBicChwKSwgXy5tZXJnZShfLmNvcHkoYmFzZUNvbmZpZyksIF9jb25maWcsIHsgbWV0aG9kOiBtZXRob2QgfSkpO1xuICAgIH07XG4gIH0pO1xuXG4gIFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICBiYXNlZFttZXRob2RdID0gZnVuY3Rpb24gKHAsIGRhdGEsIF9jb25maWcgKSB7XG4gICAgICByZXR1cm4gaHR0cCggYnAocCksIF8ubWVyZ2UoXy5jb3B5KGJhc2VDb25maWcpLCBfY29uZmlnLCB7IG1ldGhvZDogbWV0aG9kLCBkYXRhOiBkYXRhIH0pICk7XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIGJhc2VkO1xufTtcblxuaHR0cC5yZXNwb25zZURhdGEgPSBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGh0dHA7XG4iLCJcbnZhciBhcnJheVNoaWZ0ID0gW10uc2hpZnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0ZW5kICgpIHtcbiAgdmFyIGRlc3QgPSBhcnJheVNoaWZ0LmNhbGwoYXJndW1lbnRzKSxcbiAgICAgIHNyYyA9IGFycmF5U2hpZnQuY2FsbChhcmd1bWVudHMpLFxuICAgICAga2V5O1xuXG4gIHdoaWxlKCBzcmMgKSB7XG4gICAgZm9yKCBrZXkgaW4gc3JjKSB7XG4gICAgICBkZXN0W2tleV0gPSBzcmNba2V5XTtcbiAgICB9XG4gICAgc3JjID0gYXJyYXlTaGlmdC5jYWxsKGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVzdDtcbn07XG4iLCJcbnZhciBSRV8kJCA9IC9eXFwkXFwkLyxcbiAgICBhcnJheVNoaWZ0ID0gW10uc2hpZnQsXG4gICAgdHlwZSA9IHJlcXVpcmUoJy4vdHlwZScpO1xuXG5mdW5jdGlvbiBfbWVyZ2UgKCkge1xuICAgIHZhciBkZXN0ID0gYXJyYXlTaGlmdC5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgIHNyYyA9IGFycmF5U2hpZnQuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICBrZXk7XG5cbiAgICB3aGlsZSggc3JjICkge1xuXG4gICAgICBpZiggdHlwZW9mIGRlc3QgIT09IHR5cGVvZiBzcmMgKSB7XG4gICAgICAgICAgZGVzdCA9IHR5cGUuaXNBcnJheShzcmMpID8gW10gOiAoIHR5cGUuaXNPYmplY3Qoc3JjKSA/IHt9IDogc3JjICk7XG4gICAgICB9XG5cbiAgICAgIGlmKCB0eXBlLmlzT2JqZWN0KHNyYykgKSB7XG5cbiAgICAgICAgZm9yKCBrZXkgaW4gc3JjICkge1xuICAgICAgICAgIGlmKCBzcmNba2V5XSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgZGVzdFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0gZWxzZSBpZiggdHlwZS5pc0FycmF5KGRlc3Rba2V5XSkgKSB7XG4gICAgICAgICAgICBbXS5wdXNoLmFwcGx5KGRlc3Rba2V5XSwgc3JjW2tleV0pO1xuICAgICAgICAgIH0gZWxzZSBpZiggdHlwZS5pc09iamVjdChkZXN0W2tleV0pICkge1xuICAgICAgICAgICAgZGVzdFtrZXldID0gX21lcmdlKGRlc3Rba2V5XSwgc3JjW2tleV0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0W2tleV0gPSBzcmNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNyYyA9IGFycmF5U2hpZnQuY2FsbChhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiBkZXN0O1xufVxuXG5mdW5jdGlvbiBtYXBPYmplY3QgKG8sIGl0ZXJhdGVlKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZm9yKCB2YXIga2V5IGluIG8gKSB7XG4gICAgcmVzdWx0W2tleV0gPSBpdGVyYXRlZShvW2tleV0sIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gX2NvcHkgKHNyYykge1xuICBpZiggdHlwZS5pc0FycmF5KHNyYykgKSB7XG4gICAgcmV0dXJuIHNyYy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfY29weShpdGVtKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgaWYoIHR5cGUuaXNPYmplY3Qoc3JjKSApIHtcbiAgICByZXR1cm4gbWFwT2JqZWN0KHNyYywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfY29weShpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzcmM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBleHRlbmQ6IHJlcXVpcmUoJy4vX2V4dGVuZCcpLFxuICBtZXJnZTogX21lcmdlLFxuICBjb3B5OiBfY29weVxufTtcbiIsIlxudmFyIHR5cGUgPSByZXF1aXJlKCcuL3R5cGUnKTtcblxuZnVuY3Rpb24gX2tleSAobywgX2tleSwgdmFsdWUpe1xuICAgIGlmKCAhdHlwZS5pc09iamVjdChvKSApIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG4gICAgdmFyIGtleXMgPSBfa2V5LnNwbGl0KCcuJyksXG4gICAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcblxuICAgIGlmKCB2YWx1ZSA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgd2hpbGUgKGtleSkge1xuICAgICAgICBpZiggdHlwZS5pc09iamVjdChvKSAmJiBrZXkgaW4gbyApIHtcbiAgICAgICAgICBvID0gb1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIHdoaWxlIChrZXkpIHtcbiAgICAgICAgaWYoIG8gaW5zdGFuY2VvZiBPYmplY3QgKSB7XG4gICAgICAgICAgaWYgKCBrZXlzLmxlbmd0aCApe1xuICAgICAgICAgICAgaWYoICEoa2V5IGluIG8pICkge1xuICAgICAgICAgICAgICBvW2tleV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG8gPSBvW2tleV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9ba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGtleTogX2tleSxcbiAga2V5czogT2JqZWN0LmtleXNcbn07XG4iLCJcbnZhciB0eXBlID0gcmVxdWlyZSgnLi90eXBlJyksXG4gICAgYXJyU29tZSA9IEFycmF5LnByb3RvdHlwZS5zb21lLFxuICAgIGFyckV2ZXJ5ID0gQXJyYXkucHJvdG90eXBlLmV2ZXJ5LFxuICAgIGFyckZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCxcbiAgICBhcnJNYXAgPSBBcnJheS5wcm90b3R5cGUubWFwLFxuICAgIGFyckluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gX2VhY2hJbkxpc3QoIGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnICkge1xuICByZXR1cm4gYXJyRm9yRWFjaC5jYWxsKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcbn1cblxuZnVuY3Rpb24gX2VhY2hJbk9iamVjdCggbywgaXRlcmF0ZWUsIHRoaXNBcmcgKSB7XG4gIGZvciggdmFyIGtleSBpbiBvICkge1xuICAgIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgW29ba2V5XSwga2V5XSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX21hdGNoQWxsIChvLCBmaWx0ZXJzKSB7XG4gIGZvciggdmFyIGtleSBpbiBmaWx0ZXJzICkge1xuICAgIGlmKCBvW2tleV0gIT09IGZpbHRlcnNba2V5XSApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIF9tYXRjaEFueSAobywgZmlsdGVycykge1xuICBmb3IoIHZhciBrZXkgaW4gZmlsdGVycyApIHtcbiAgICBpZiggb1trZXldID09PSBmaWx0ZXJzW2tleV0gKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBfaXRlcmF0ZWVGbiAoaXRlcmF0ZWUpIHtcbiAgaWYoIHR5cGUuaXNGdW5jdGlvbihpdGVyYXRlZSkgKSB7XG4gICAgcmV0dXJuIGl0ZXJhdGVlO1xuICB9XG5cbiAgaWYoIHR5cGUuaXNPYmplY3QoaXRlcmF0ZWUpICkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIF9tYXRjaEFsbChpdGVtLCBpdGVyYXRlZSk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBpdGVtID09PSBpdGVyYXRlZTtcbiAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZWFjaCAobywgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgaWYoIG8gJiYgby5sZW5ndGggKSB7XG4gICAgYXJyRm9yRWFjaC5jYWxsKG8sIGl0ZXJhdGVlLCB0aGlzQXJnKTtcbiAgfSBlbHNlIGlmKCB0eXBlLmlzT2JqZWN0KG8pICkge1xuICAgIF9lYWNoSW5PYmplY3QobywgaXRlcmF0ZWUsIHRoaXNBcmcgfHwgdGhpcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5kZXhPZiAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgaWYoICF0eXBlLmlzRnVuY3Rpb24oaXRlcmF0ZWUpICkge1xuICAgIHJldHVybiBhcnJJbmRleE9mLmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuICB9XG5cbiAgZm9yKCB2YXIgaSA9IDAsIG4gPSBsaXN0Lmxlbmd0aDsgaSA8IG4gOyBpKysgKSB7XG4gICAgaWYoIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtpXSwgaSkgKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBfaW5kZXhCeSAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgdmFyIG1hcCA9IHt9O1xuXG5cdGZvciggdmFyIGkgPSAwLCBsZW4gPSBsaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuICAgIG1hcFtpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3RbaV0sIGkpXSA9IGxpc3RbaV07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuZnVuY3Rpb24gaW5kZXhCeSAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcblx0aWYoIHR5cGUuaXNTdHJpbmcoaXRlcmF0ZWUpICkge1xuXHRcdHJldHVybiBfaW5kZXhCeShsaXN0LCBmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbVtpdGVyYXRlZV07IH0sIHRoaXNBcmcpO1xuXHR9IGVsc2UgaWYoIHR5cGUuaXNGdW5jdGlvbihpdGVyYXRlZSkgKSB7XG5cdFx0cmV0dXJuIF9pbmRleEJ5KGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKTtcblx0fVxuXHRyZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIHNvbWUgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gIGl0ZXJhdGVlID0gX2l0ZXJhdGVlRm4oaXRlcmF0ZWUpO1xuXG4gIGlmKCBsaXN0ICYmIGxpc3QubGVuZ3RoICkge1xuICAgIHJldHVybiBhcnJTb21lLmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuICB9IGVsc2UgaWYoIHR5cGUuaXNPYmplY3QobGlzdCkgKSB7XG4gICAgZm9yKCB2YXIga2V5IGluIGxpc3QgKSAge1xuICAgICAgaWYoIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtrZXldLCBrZXkpICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5mdW5jdGlvbiBldmVyeSAobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgaXRlcmF0ZWUgPSBfaXRlcmF0ZWVGbihpdGVyYXRlZSk7XG5cbiAgaWYoIGxpc3QgJiYgbGlzdC5sZW5ndGggKSB7XG4gICAgcmV0dXJuIGFyckV2ZXJ5LmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuICB9IGVsc2UgaWYoIHR5cGUuaXNPYmplY3QobGlzdCkgKSB7XG4gICAgZm9yKCB2YXIga2V5IGluIGxpc3QgKSAge1xuICAgICAgaWYoICFpdGVyYXRlZS5jYWxsKHRoaXNBcmcsIGxpc3Rba2V5XSwga2V5KSApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gbWFwIChsaXN0LCBfaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgdmFyIGl0ZXJhdGVlID0gdHlwZS5pc1N0cmluZyhfaXRlcmF0ZWUpID8gZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW1bX2l0ZXJhdGVlXTsgfSA6IF9pdGVyYXRlZTtcblxuICBpZiggbGlzdCAmJiBsaXN0Lmxlbmd0aCApIHtcbiAgICByZXR1cm4gYXJyTWFwLmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuICB9IGVsc2UgaWYoIHR5cGUuaXNPYmplY3QobGlzdCkgKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGZvciggdmFyIGtleSBpbiBsaXN0ICkgIHtcbiAgICAgIHJlc3VsdFtrZXldID0gaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2tleV0sIGtleSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIG1hcDJMaXN0IChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICBpZiggbGlzdCAmJiBsaXN0Lmxlbmd0aCApIHtcbiAgICByZXR1cm4gYXJyTWFwLmNhbGwobGlzdCwgaXRlcmF0ZWUsIHRoaXNBcmcpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXSwgaSA9IDA7XG4gIGZvciggdmFyIGtleSBpbiBsaXN0ICkgIHtcbiAgICByZXN1bHRbaSsrXSA9IGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtrZXldLCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiByZW1vdmUgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gICAgdGhpc0FyZyA9IHRoaXNBcmcgPT09IHVuZGVmaW5lZCA/IHRoaXMgOiB0aGlzQXJnO1xuXG4gICAgaXRlcmF0ZWUgPSBfaXRlcmF0ZWVGbihpdGVyYXRlZSk7XG5cbiAgICBmb3IoIHZhciBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0aWYoIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtpXSkgKSB7XG5cdFx0XHRcdFx0XHRsaXN0LnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0fVxuXHRcdH1cbn1cblxuZnVuY3Rpb24gZmlyc3QgKGxpc3QsIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG5cdFx0dGhpc0FyZyA9IHRoaXNBcmcgPT09IHVuZGVmaW5lZCA/IHRoaXMgOiB0aGlzQXJnO1xuXG5cdFx0aXRlcmF0ZWUgPSBfaXRlcmF0ZWVGbihpdGVyYXRlZSk7XG5cbiAgICB2YXIgaSA9IGFyckluZGV4T2YuY2FsbChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZyk7XG5cblx0XHRmb3IoIHZhciBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGggOyBpIDwgbGVuIDsgaSsrICkge1xuICAgICAgICBpZiggaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2ldKSApIHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0W2ldO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsYXN0IChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuXHRcdHRoaXNBcmcgPSB0aGlzQXJnID09PSB1bmRlZmluZWQgPyB0aGlzIDogdGhpc0FyZztcblxuXHRcdGl0ZXJhdGVlID0gX2l0ZXJhdGVlRm4oaXRlcmF0ZWUpO1xuXG5cdFx0Zm9yKCB2YXIgaSA9IGxpc3QubGVuZ3RoIC0gMSA7IGkgPj0gMCA7IGktLSApIHtcbiAgICAgICAgaWYoIGl0ZXJhdGVlLmNhbGwodGhpc0FyZywgbGlzdFtpXSkgKSB7XG4gICAgICAgICAgICByZXR1cm4gbGlzdFtpXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyIChsaXN0LCBpdGVyYXRlZSwgdGhpc0FyZykge1xuICAgIHZhciBuZXdMaXN0ID0gW107XG5cblx0XHR0aGlzQXJnID0gdGhpc0FyZyA9PT0gdW5kZWZpbmVkID8gdGhpcyA6IHRoaXNBcmc7XG5cdFx0aXRlcmF0ZWUgPSBfaXRlcmF0ZWVGbihpdGVyYXRlZSk7XG5cblx0XHRmb3IoIHZhciBpID0gMCwgbGVuID0gbGlzdC5sZW5ndGggOyBpIDwgbGVuIDsgaSsrICkge1xuICAgICAgICBpZiggaXRlcmF0ZWUuY2FsbCh0aGlzQXJnLCBsaXN0W2ldKSApIHtcbiAgICAgICAgICAgIG5ld0xpc3QucHVzaChsaXN0W2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdMaXN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgX21hdGNoQWxsOiBfbWF0Y2hBbGwsXG4gIF9tYXRjaEFueTogX21hdGNoQW55LFxuICBmaW5kOiBmaXJzdCxcbiAgZmlyc3Q6IGZpcnN0LFxuICBsYXN0OiBsYXN0LFxuICBmaWx0ZXI6IGZpbHRlcixcbiAgZWFjaDogZWFjaCxcbiAgc29tZTogc29tZSxcbiAgZXZlcnk6IGV2ZXJ5LFxuICBtYXA6IG1hcCxcbiAgcGx1Y2s6IG1hcCxcbiAgbWFwMkxpc3Q6IG1hcDJMaXN0LFxuICBpbmRleE9mOiBpbmRleE9mLFxuICBpbmRleEJ5OiBpbmRleEJ5LFxuICByZW1vdmU6IHJlbW92ZSxcbiAgaWY6IGZ1bmN0aW9uIChyZXN1bHQsIGZuKSB7XG4gICAgaWYoIHJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIGZuIGluc3RhbmNlb2YgRnVuY3Rpb24gKSB7XG4gICAgICByZXR1cm4gZm4ocmVzdWx0KTtcbiAgICB9XG4gIH1cbn07XG4iLCJcbnZhciBSRV9kb3RzQmFjayA9IC9bXlxcL10rXFwvXFwuXFwuXFwvL2csXG5cdGNsZWFyU3RyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJyc7IH07XG5cbmZ1bmN0aW9uIF9qb2luUGF0aCAoKSB7XG4gICAgdmFyIHBhdGggPSAoYXJndW1lbnRzWzBdIHx8ICcnKS5yZXBsYWNlKC9cXC8kLywgJycpLFxuICAgIFx0YmFja0RvdHM7XG5cbiAgICBmb3IoIHZhciBpID0gMSwgbGFzdCA9IGFyZ3VtZW50cy5sZW5ndGggLSAxIDsgaSA8IGxhc3QgOyBpKysgKSB7XG4gICAgICAgIHBhdGggKz0gJy8nICsgYXJndW1lbnRzW2ldLnJlcGxhY2UoL15cXC98XFwvJC9nLCAnJyk7XG4gICAgfVxuICAgIGlmKCBsYXN0ICkge1xuICAgICAgICBwYXRoICs9IGFyZ3VtZW50c1tsYXN0XSA/ICggJy8nICsgYXJndW1lbnRzW2xhc3RdLnJlcGxhY2UoL15cXC8vLCAnJykgKSA6ICcnO1xuICAgIH1cblxuICAgIHdoaWxlKCBSRV9kb3RzQmFjay50ZXN0KHBhdGgpICkge1xuICAgIFx0cGF0aCA9IHBhdGgucmVwbGFjZShSRV9kb3RzQmFjaywgY2xlYXJTdHIpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXRoO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgam9pblBhdGg6IF9qb2luUGF0aFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2lzVHlwZSAodHlwZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBvID09PSB0eXBlKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBfaW5zdGFuY2VPZiAoX2NvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiAoIG8gaW5zdGFuY2VvZiBfY29uc3RydWN0b3IgKTtcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNUeXBlOiBmdW5jdGlvbiAodHlwZSwgdmFsdWUpIHtcbiAgICBpZiggdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgIHJldHVybiBfaXNUeXBlKHR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gX2lzVHlwZSh0eXBlKSh2YWx1ZSk7XG4gIH0sXG4gIGluc3RhbmNlT2Y6IGZ1bmN0aW9uIChQcm90bywgdmFsdWUpIHtcbiAgICBpZiggdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgIHJldHVybiBfaW5zdGFuY2VPZihQcm90byk7XG4gICAgfVxuICAgIHJldHVybiBfaW5zdGFuY2VPZihQcm90bykodmFsdWUpO1xuICB9LFxuICBpc09iamVjdDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8gIT09IG51bGw7XG4gIH0sXG5cdGlzRnVuY3Rpb246IF9pc1R5cGUoJ2Z1bmN0aW9uJyksXG5cdGlzU3RyaW5nOiBfaXNUeXBlKCdzdHJpbmcnKSxcblx0aXNOdW1iZXI6IF9pc1R5cGUoJ251bWJlcicpLFxuXHRpc0FycmF5OiBBcnJheS5pc0FycmF5IHx8IF9pbnN0YW5jZU9mKEFycmF5KSxcblx0aXNEYXRlOiBfaW5zdGFuY2VPZihEYXRlKSxcblx0aXNSZWdFeHA6IF9pbnN0YW5jZU9mKFJlZ0V4cCksXG5cdGlzRWxlbWVudDogZnVuY3Rpb24obykge1xuICAgIHJldHVybiBvICYmIG8ubm9kZVR5cGUgPT09IDE7XG4gIH0sXG4gIGlzVW5kZWZpbmVkOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZDtcbiAgfVxufTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocVByb21pc2UpIHtcblxuXHRmdW5jdGlvbiBlYWNoIChpdGVyYWJsZSwgaGFuZGxlcikge1xuXHRcdGZvciggdmFyIGkgPSAwLCBuID0gaXRlcmFibGUubGVuZ3RoOyBpIDwgbiA7IGkrKyApIHtcblx0XHRcdGhhbmRsZXIoaXRlcmFibGVbaV0sIGkpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHFSZXNvbHZlIChyZXN1bHQpIHtcblx0ICByZXR1cm4gcVByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyByZXNvbHZlKHJlc3VsdCk7IH0pO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIHFSZWplY3QgKHJlYXNvbikge1xuXHQgIHJldHVybiBxUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHJlamVjdChyZWFzb24pOyB9KTtcblx0fTtcblxuXHR2YXIgbWV0aG9kcyA9IHtcblx0XHRyZXNvbHZlOiBxUmVzb2x2ZSxcblx0XHRyZWplY3Q6IHFSZWplY3QsXG5cdFx0ZGVmZXI6IGZ1bmN0aW9uICgpIHtcblx0XHQgIHZhciBkZWZlcnJlZCA9IHt9O1xuXHRcdCAgZGVmZXJyZWQucHJvbWlzZSA9IHFQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHQgICAgZGVmZXJyZWQucmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0ICAgIGRlZmVycmVkLnJlamVjdCA9IHJlamVjdDtcblx0XHQgIH0pO1xuXHRcdCAgcmV0dXJuIGRlZmVycmVkO1xuXHRcdH0sXG5cdFx0YWxsOiBmdW5jdGlvbiAoaXRlcmFibGUpIHtcblx0XHQgIHJldHVybiBxUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0ICAgIHZhciBwZW5kaW5nID0gaXRlcmFibGUubGVuZ3RoLFxuXHRcdCAgICAgICAgcmVzdWx0cyA9IFtdO1xuXHRcdCAgICBlYWNoKGl0ZXJhYmxlLCBmdW5jdGlvbiAoX3Byb21pc2UsIGkpIHtcblxuXHRcdCAgICAgICggX3Byb21pc2UudGhlbiA/IF9wcm9taXNlIDogcVJlc29sdmUoX3Byb21pc2UpICkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0ICAgICAgICByZXN1bHRzW2ldID0gcmVzdWx0O1xuXHRcdCAgICAgICAgaWYoIC0tcGVuZGluZyA9PT0gMCApIHtcblx0XHQgICAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG5cdFx0ICAgICAgICBpZiggcGVuZGluZyAhPT0gLTEgKSB7XG5cdFx0ICAgICAgICAgIHBlbmRpbmcgPT09IC0xO1xuXHRcdCAgICAgICAgICByZWplY3QocmVhc29uKTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICB9KTtcblx0XHQgICAgfSk7XG5cdFx0ICB9KTtcblx0XHR9LFxuXHRcdHJhY2U6IGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuXHRcdCAgcmV0dXJuIHFQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHQgICAgdmFyIGRvbmUgPSBmYWxzZTtcblxuXHRcdCAgICBlYWNoKGl0ZXJhYmxlLCBmdW5jdGlvbiAoX3Byb21pc2UsIGkpIHtcblx0XHQgICAgICBpZiggZG9uZSApIHtcblx0XHQgICAgICAgIHJldHVybjtcblx0XHQgICAgICB9XG5cdFx0ICAgICAgKCBfcHJvbWlzZS50aGVuID8gX3Byb21pc2UgOiBxUmVzb2x2ZShfcHJvbWlzZSkgKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHQgICAgICAgIGlmKCAhZG9uZSApIHtcblx0XHQgICAgICAgICAgZG9uZSA9IHRydWU7XG5cdFx0ICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG5cdFx0ICAgICAgICBpZiggIWRvbmUgKSB7XG5cdFx0ICAgICAgICAgIGRvbmUgPSB0cnVlO1xuXHRcdCAgICAgICAgICByZWplY3QocmVhc29uKTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgICB9KTtcblx0XHQgICAgfSk7XG5cdFx0ICB9KTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChxLCBvdmVycmlkZSkge1xuXHRcdGZvciggdmFyIGtleSBpbiBtZXRob2RzICkge1xuXHRcdFx0aWYoICFxW2tleV0gfHwgb3ZlcnJpZGUgKSB7XG5cdFx0XHRcdHFba2V5XSA9IG1ldGhvZHNba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHE7XG5cdH07XG59O1xuIiwiXG5mdW5jdGlvbiBzdGVwUmVzdWx0IChzdGVwLCB2YWx1ZSwgdHlwZSkge1xuICBpZiggdmFsdWUgJiYgdmFsdWUudGhlbiApIHtcbiAgICB2YWx1ZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHN0ZXAuZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHN0ZXAuZGVmZXJyZWQucmVqZWN0KHJlYXNvbik7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc3RlcC5kZWZlcnJlZFt0eXBlXSh2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1F1ZXVlKHByb21pc2UpIHtcbiAgaWYoIHByb21pc2UuJCRzdWNjZWVkZWQgPT09IHVuZGVmaW5lZCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbGVuID0gcHJvbWlzZS4kJHF1ZXVlLmxlbmd0aCxcbiAgICAgIHN0ZXAgPSBwcm9taXNlLiQkcXVldWUuc2hpZnQoKSxcbiAgICAgIHR5cGUgPSBwcm9taXNlLiQkc3VjY2VlZGVkID8gJ3Jlc29sdmUnIDogJ3JlamVjdCcsXG4gICAgICB1bmNvdWdoID0gIXByb21pc2UuJCRzdWNjZWVkZWQgJiYgcHJvbWlzZS4kJHVuY291Z2h0Kys7XG5cbiAgd2hpbGUoIHN0ZXAgKSB7XG5cbiAgICBpZiggc3RlcFt0eXBlXSApIHtcbiAgICAgIHVuY291Z2ggPSBmYWxzZTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgc3RlcFJlc3VsdChzdGVwLCBzdGVwW3R5cGVdKHByb21pc2UuJCR2YWx1ZSksICdyZXNvbHZlJyk7XG4gICAgICB9IGNhdGNoIChyZWFzb24pIHtcbiAgICAgICAgc3RlcFJlc3VsdChzdGVwLCByZWFzb24sICdyZWplY3QnKTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICBzdGVwUmVzdWx0KHN0ZXAsIHByb21pc2UuJCR2YWx1ZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgc3RlcCA9IHByb21pc2UuJCRxdWV1ZS5zaGlmdCgpO1xuICB9XG5cbiAgaWYoICFwcm9taXNlLiQkc3VjY2VlZGVkICYmIHVuY291Z2ggKSB7XG4gICAgaWYoIHByb21pc2UuJCR1bmNvdWdoID09PSB1bmNvdWdoICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNhdWdodCAoaW4gcHJvbWlzZSknKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gUCAoZXhlY3V0b3IpIHtcbiAgaWYoICEoIGV4ZWN1dG9yIGluc3RhbmNlb2YgRnVuY3Rpb24gKSApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlIHJlc29sdmVyIHVuZGVmaW5lZCBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgdmFyIHAgPSB0aGlzO1xuICB0aGlzLiQkcXVldWUgPSBbXTtcbiAgdGhpcy4kJHVuY291Z2ggPSAwO1xuXG4gIHRyeSB7XG4gICAgZXhlY3V0b3IoZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgcC4kJHN1Y2NlZWRlZCA9IHRydWU7XG4gICAgICBwLiQkdmFsdWUgPSByZXN1bHQ7XG4gICAgICBwcm9jZXNzUXVldWUocCk7XG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgcC4kJHN1Y2NlZWRlZCA9IGZhbHNlO1xuICAgICAgcC4kJHZhbHVlID0gcmVhc29uO1xuICAgICAgcHJvY2Vzc1F1ZXVlKHApO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBwLiQkc3VjY2VlZGVkID0gZmFsc2U7XG4gICAgcC4kJHZhbHVlID0gZXJyO1xuICAgIHByb2Nlc3NRdWV1ZShwKTtcbiAgfVxufVxuXG5QLnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uc3VjY2VlZGVkLCBvblJlamVjdGVkKSB7XG4gIHZhciBfdGhpcyA9IHRoaXMsXG4gICAgICBfcHJvbWlzZSA9IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgX3RoaXMuJCRxdWV1ZS5wdXNoKHsgcmVzb2x2ZTogb25zdWNjZWVkZWQsIHJlamVjdDogb25SZWplY3RlZCwgZGVmZXJyZWQ6IHsgcmVzb2x2ZTogcmVzb2x2ZSwgcmVqZWN0OiByZWplY3QgfSB9KTtcbiAgICAgIH0pO1xuXG4gIHByb2Nlc3NRdWV1ZSh0aGlzKTtcblxuICByZXR1cm4gX3Byb21pc2U7XG59O1xuXG5QLnByb3RvdHlwZS5jYXRjaCA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbn07XG5cbnJlcXVpcmUoJy4vcHJvbWlzZS1tZXRob2RzJykoZnVuY3Rpb24gKGV4ZWN1dG9yKSB7IHJldHVybiBuZXcgUChleGVjdXRvcik7IH0pKFAsIHRydWUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFA7XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9xaXplcicpKCBnbG9iYWwuUHJvbWlzZSA/IHJlcXVpcmUoJy4vcHJvbWlzZS1tZXRob2RzJykoZnVuY3Rpb24gKGV4ZWN1dG9yKSB7IHJldHVybiBuZXcgZ2xvYmFsLlByb21pc2UoZXhlY3V0b3IpOyB9KShnbG9iYWwuUHJvbWlzZSkgOiByZXF1aXJlKCcuL3Byb21pc2UtcG9seWZpbGwnKSApO1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChQcm9taXNlKSB7XG5cbiAgZnVuY3Rpb24gcSAoZXhlY3V0b3IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpO1xuICB9XG5cbiAgcmVxdWlyZSgnLi9wcm9taXNlLW1ldGhvZHMnKShxKShxLCB0cnVlKTtcblxuICBxLndoZW4gPSBmdW5jdGlvbiAocCkgeyByZXR1cm4gKCBwICYmIHAudGhlbiApID8gcCA6IFByb21pc2UucmVzb2x2ZShwKTsgfTtcbiAgcS51c2VQb2x5ZmlsbCA9IGZ1bmN0aW9uICgpIHtcbiAgXHRQcm9taXNlID0gcmVxdWlyZSgnLi9wcm9taXNlLXBvbHlmaWxsJyk7XG4gIH07XG5cbiAgcmV0dXJuIHE7XG5cbn07XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvcWl6ZXInKSggcmVxdWlyZSgnLi9saWIvcHJvbWlzZS1wb2x5ZmlsbCcpICk7XG4iLCJcbi8vIHJlcXVpcmUoJy4vYnJvd3Nlci1wb2x5ZmlsbHMvY3VycmVudC1zY3JpcHQnKTtcbnJlcXVpcmUoJy4vYnJvd3Nlci1wb2x5ZmlsbHMvZGF0ZScpO1xucmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscy9kb20tY2xvc2VzdCcpO1xucmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscy9ldmVudC1saXN0ZW5lcicpO1xucmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscy9tYXRjaC1tZWRpYScpO1xucmVxdWlyZSgnLi9icm93c2VyLXBvbHlmaWxscy9tYXRjaGVzLXNlbGVjdG9yJyk7XG4iLCJcbmlmICghRGF0ZS5ub3cpIHtcbiAgRGF0ZS5ub3cgPSBmdW5jdGlvbiBub3coKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9O1xufSIsIlxuaWYoICFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ICkge1xuICBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdmFyIGVsID0gdGhpcztcblxuICAgIHdoaWxlKCBlbCApIHtcbiAgICAgIGlmKCBlbC5tYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpICkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIGVsO1xuICB9O1xufSIsIlxuaWYoICFFbGVtZW50LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyICkge1xuICBpZiggRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoRXZlbnQgKSB7XG4gICAgRWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoRXZlbnQoICdvbicgKyBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gICAgfTtcbiAgICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBFbGVtZW50LnByb3RvdHlwZS5kZXRhY2hFdmVudCggJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRocm93ICdCcm93c2VyIG5vdCBjb21wYXRpYmxlIHdpdGggZWxlbWVudCBldmVudHMnO1xuICB9XG59IiwiKGZ1bmN0aW9uIChyb290KSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICByb290Lm1hdGNoTWVkaWEgPSByb290Lm1hdGNoTWVkaWEgfHwgcm9vdC53ZWJraXRNYXRjaE1lZGlhIHx8IHJvb3QubW96TWF0Y2hNZWRpYSB8fCByb290Lm1zTWF0Y2hNZWRpYTtcbn0pKHRoaXMpOyIsIlxuaWYoICFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3IgKSB7XG4gIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNTZWxlY3RvciA9IChcbiAgICBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3JcbiAgKTtcbn1cblxuIiwiXG5yZXF1aXJlKCcuL2Jyb3dzZXItcG9seWZpbGxzJyk7XG4vLyBkb2N1bWVudC5jdXJyZW50U2NyaXB0XG4vLyBEYXRlLm5vdygpXG4vLyBIVE1MRWxlbWVudC5jbG9zZXN0KClcbi8vIEhUTUxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXJcbi8vIEhUTUxFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXJcbi8vIHdpbmRvdy5tYXRjaE1lZGlhXG4vLyBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3JcblxucmVxdWlyZSgnY2xhc3NsaXN0LmpzJyk7IC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VzL2RvY3MvV2ViL0FQSS9FbGVtZW50L2NsYXNzTGlzdFxuXG52YXIgZXh0ZW5kID0gcmVxdWlyZSgnbml0cm8tdG9vbHMvZXh0ZW5kJyk7XG5cbmZ1bmN0aW9uIF8gKHNlbGVjdG9yLCBzb3VyY2UpIHtcbiAgcmV0dXJuIHNvdXJjZSAmJiB0eXBlb2Ygc291cmNlID09PSAnc3RyaW5nJyA/XG5cdFx0c2VsZWN0b3IucXVlcnlTZWxlY3Rvcihzb3VyY2UpIDpcblx0XHQoc291cmNlIHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbn1cblxuXy5ub29wID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcbl8ucSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKTtcblxuZXh0ZW5kLmV4dGVuZChfLCBleHRlbmQpO1xuXG5fLmV4dGVuZChfLFxuICByZXF1aXJlKCduaXRyby10b29scy90eXBlJyksXG5cdHJlcXVpcmUoJ25pdHJvLXRvb2xzL2tleScpLFxuXHRyZXF1aXJlKCduaXRyby10b29scy9wYXRoJylcbik7XG5cbl8uZXh0ZW5kKF8sIHtcblx0YW5pbWF0ZTogcmVxdWlyZSgnLi9kZWZlcnJlZC9hbmltYXRlJyksXG5cdHdhaXQ6IHJlcXVpcmUoJy4vZGVmZXJyZWQvd2FpdCcpXG59KTtcblxuXy5leHRlbmQoXywge1xuXHRyZWFkeTogcmVxdWlyZSgnLi9mbi9yZWFkeScpLFxuXHR0ZW1wbGF0ZTogcmVxdWlyZSgnLi9mbi90ZW1wbGF0ZScpLFxuXHRkZWJvdW5jZTogcmVxdWlyZSgnLi9mbi9kZWJvdW5jZScpXG59KTtcblxuXy5leHRlbmQoXyxcbiAgcmVxdWlyZSgnLi91dGlscy9ldmVudHMnKSxcblx0Ly8gXy5vbihlbCwgZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKVxuXHQvLyBfLm9mZihlbCwgZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKVxuXHQvLyBfLnRyaWdnZXJFdmVudChlbGVtZW50LCBldmVudE5hbWUsIGRhdGEpXG5cbiAgcmVxdWlyZSgnLi91dGlscy9kb20nKVxuICAvLyBfLmNyZWF0ZSh0YWdOYW1lLCBhdHRycylcblx0Ly8gXy5hdHRyKGVsLCBuYW1lLCB2YWx1ZSlcbiAgLy8gXy50bXBDbGFzcyhlbCwgY2xhc3NOYW1lLCBkdXJhdGlvbiwgY2IpXG4pO1xuXG5fLmV4dGVuZChfLCB7XG5cdG5vcm1hbGl6ZTogcmVxdWlyZSgnLi91dGlscy9ub3JtYWxpemUnKSxcblx0Ly8gXy50b3VjaERldmljZSA9PT0gdHJ1ZSB8IGZhbHNlXG5cdC8vIF8uaXNNYWMgPT09IHRydWUgfCBmYWxzZVxuXHQvLyBfLmlzQW5kcm9pZCA9PT0gdHJ1ZSB8IGZhbHNlXG5cblx0c2Nyb2xsOiByZXF1aXJlKCcuL3V0aWxzL3Njcm9sbC9idW5kbGUnKSAvLyBzY3JvbGwgaXMgbm90IGF2YWlsYWJsZSB1bnRpbCBkb2N1bWVudCBpcyByZWFkeVxuXHQvLyBfLnNjcm9sbC5vbiggaGFuZGxlciwgdXNlQ2FwdHVyZSApXG5cdC8vIF8uc2Nyb2xsLm9mZiggaGFuZGxlciwgdXNlQ2FwdHVyZSApXG5cdC8vIF8uc2Nyb2xsLnRvcCgpXG5cdC8vIF8uc2Nyb2xsLmdvdG8odmFsdWUpXG5cdC8vIF8uc2Nyb2xsLmFuaW1hdGVUbyh2YWx1ZSB8IEhUTUxFbGVtZW50LCBjYWxsYmFjaywgZHVyYXRpb24pOiBQcm9taXNlXG5cdC8vIF8sc2Nyb2xsLmluQW5pbWF0aW9uID09PSB0cnVlIHwgZmFsc2Vcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IF87XG4iLCJcbnZhciAkcSA9IHJlcXVpcmUoJ3EtcHJvbWlzZS9uby1uYXRpdmUnKSxcbiAgICB0aW1pbmdGdW5jdGlvbnMgPSB7fSxcbiAgICBub29wID0gZnVuY3Rpb24gKCkge30sXG4gICAgZ2V0VGltaW5nRnVuY3Rpb24gPSBmdW5jdGlvbiAodGltaW5nRnVuY3Rpb25OYW1lKSB7XG4gICAgICBpZiggIXRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdICkge1xuICAgICAgICBpZiggdGltaW5nRnVuY3Rpb25OYW1lID09PSAnbGluZWFyJyApIHtcbiAgICAgICAgICB0aW1pbmdGdW5jdGlvbnNbdGltaW5nRnVuY3Rpb25OYW1lXSA9IGZ1bmN0aW9uICggdmFsdWUgKSB7IHJldHVybiB2YWx1ZTsgfTtcbiAgICAgICAgfSBlbHNlIGlmKCB0aW1pbmdGdW5jdGlvbk5hbWUgPT09ICdlYXNlJyApIHtcbiAgICAgICAgICB0aW1pbmdGdW5jdGlvbnNbdGltaW5nRnVuY3Rpb25OYW1lXSA9IHJlcXVpcmUoJ2Jlemllci1lYXNpbmcnKSguMTcsLjY3LC44MywuNjcpO1xuICAgICAgICB9IGVsc2UgaWYoIHRpbWluZ0Z1bmN0aW9uTmFtZSA9PT0gJ2Vhc2UtaW4nICkge1xuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdID0gcmVxdWlyZSgnYmV6aWVyLWVhc2luZycpKC40MiwwLDEsMSk7XG4gICAgICAgIH0gZWxzZSBpZiggdGltaW5nRnVuY3Rpb25OYW1lID09PSAnZWFzZS1vdXQnICkge1xuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdID0gcmVxdWlyZSgnYmV6aWVyLWVhc2luZycpKDAsMCwuNTgsMSk7XG4gICAgICAgIH0gZWxzZSBpZiggdGltaW5nRnVuY3Rpb25OYW1lID09PSAnZWFzZS1pbi1vdXQnICkge1xuICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdID0gcmVxdWlyZSgnYmV6aWVyLWVhc2luZycpKC40MiwwLC41OCwxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRpbWluZ0Z1bmN0aW9uc1t0aW1pbmdGdW5jdGlvbk5hbWVdO1xuICAgIH07XG5cbmZ1bmN0aW9uIGFuaW1hdGUgKHByb2dyZXNzRm4sIGR1cmF0aW9uLCBhdEVuZCwgdGltaW5nRnVuY3Rpb25OYW1lKSB7XG4gIGlmICggZHVyYXRpb24gaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICBpZiAoIHR5cGVvZiBhdEVuZCA9PT0gJ251bWJlcicgKSB7XG4gICAgICBhdXggPSBkdXJhdGlvbjtcbiAgICAgIGR1cmF0aW9uID0gYXRFbmQ7XG4gICAgICBhdEVuZCA9IGF1eDtcbiAgICB9IGVsc2Uge1xuICAgICAgYXRFbmQgPSBkdXJhdGlvbjtcbiAgICAgIGR1cmF0aW9uID0gNDAwO1xuICAgIH1cbiAgfSBlbHNlIGlmICggZHVyYXRpb24gPT09IHVuZGVmaW5lZCApIHtcbiAgICBkdXJhdGlvbiA9IDQwMDtcbiAgfVxuXG4gIHRpbWluZ0Z1bmN0aW9uTmFtZSA9IHRpbWluZ0Z1bmN0aW9uTmFtZSB8fCAoIHR5cGVvZiBhdEVuZCA9PT0gJ3N0cmluZycgPyBhdEVuZCA6ICggdHlwZW9mIGR1cmF0aW9uID09PSAnc3RyaW5nJyA/IGR1cmF0aW9uIDogJ2Vhc2UnICkgKTtcblxuICBwcm9ncmVzc0ZuKGR1cmF0aW9uID09PSAwID8gMSA6IDApO1xuXG4gIHZhciBzdG9wcGVkID0gZmFsc2UsXG4gICAgICB0aW1pbmdGdW5jdGlvbiA9IGdldFRpbWluZ0Z1bmN0aW9uKHRpbWluZ0Z1bmN0aW9uTmFtZSksXG4gICAgICBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XG5cbiAgaWYoIGR1cmF0aW9uID4gMCApIHtcbiAgICB2YXIgc3RhcnQgPSBEYXRlLm5vdygpLFxuICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZWxhcHNlZCA9IERhdGUubm93KCkgLSBzdGFydDtcblxuICAgICAgICAgIGlmKCBzdG9wcGVkICkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgfSBlbHNlIGlmKCBlbGFwc2VkID49IGR1cmF0aW9uICkge1xuICAgICAgICAgICAgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICBwcm9ncmVzc0ZuKDEpO1xuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgICAgICAgICAgKGF0RW5kIHx8IG5vb3ApKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2dyZXNzRm4oIHRpbWluZ0Z1bmN0aW9uKGVsYXBzZWQvZHVyYXRpb24pICk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMCk7XG4gIH1cblxuICBkZWZlcnJlZC5wcm9taXNlLnN0b3AgPSBmdW5jdGlvbiAocmVqZWN0KSB7XG4gICAgc3RvcHBlZCA9IHRydWU7XG4gICAgaWYoIHJlamVjdCApIHtcbiAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn1cblxuYW5pbWF0ZS50aW1lID0gZnVuY3Rpb24gKGVsKSB7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIGR1cmF0aW9uID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLmFuaW1hdGlvbkR1cmF0aW9uO1xuICBpZiggZHVyYXRpb24gKSB7XG4gICAgZHVyYXRpb24ucmVwbGFjZSgvKFswLTldKFxcLlswLTldKT8pKG0pP3MvLCBmdW5jdGlvbiAobWF0Y2hlZCwgdCwgZGVjaW1hbHMsIG1zKSB7XG4gICAgICB0aW1lICs9IG1zID8gTnVtYmVyKHQpIDogTnVtYmVyKHQpKjEwMDA7XG4gICAgfSk7XG4gIH1cbiAgaWYoIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5hbmltYXRpb25EZWxheSApIHtcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuYW5pbWF0aW9uRGVsYXkucmVwbGFjZSgvKFswLTldKFxcLlswLTldKT8pKG0pP3MvLCBmdW5jdGlvbiAobWF0Y2hlZCwgdCwgZGVjaW1hbHMsIG1zKSB7XG4gICAgICB0aW1lICs9IG1zID8gTnVtYmVyKHQpIDogTnVtYmVyKHQpKjEwMDA7XG4gICAgfSk7XG4gIH1cbiAgZHVyYXRpb24gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCkudHJhbnNpdGlvbkR1cmF0aW9uO1xuICBpZiggZHVyYXRpb24gKSB7XG4gICAgZHVyYXRpb24ucmVwbGFjZSgvKFswLTldKFxcLlswLTldKT8pKG0pP3MvLCBmdW5jdGlvbiAobWF0Y2hlZCwgdCwgZGVjaW1hbHMsIG1zKSB7XG4gICAgICB2YXIgdCA9IG1zID8gTnVtYmVyKHQpIDogTnVtYmVyKHQpKjEwMDA7XG4gICAgICBpZiggdCA+IHRpbWUgKSB7XG4gICAgICAgIHRpbWUgPSB0O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vIGNvbnNvbGUubG9nKCdhbmltYXRpb25UaW1lJywgZWwsIHRpbWUpO1xuICByZXR1cm4gdGltZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYW5pbWF0ZTtcbiIsIlxudmFyICRxID0gcmVxdWlyZSgncS1wcm9taXNlL25vLW5hdGl2ZScpLFxuXHR3YWl0ID0gZnVuY3Rpb24gKGRlbGF5LCBjYWxsYmFjaykge1xuXHRcdGlmKCBkZWxheSBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuXHRcdFx0ZGVsYXkgPSBbY2FsbGJhY2ssIGNhbGxiYWNrID0gZGVsYXldWzBdO1xuXHRcdH1cblx0XHRpZiggY2FsbGJhY2sgJiYgIShjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgc2hvdWxkIGJlIGEgRnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0aWYoIHR5cGVvZiBkZWxheSAhPT0gJ251bWJlcicgKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ2RlbGF5IHNob3VsZCBiZSBhIE51bWJlcicpO1xuXHRcdH1cblx0XHRyZXR1cm4gJHEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0aWYoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIGRlbGF5KTtcblx0XHR9KTtcblx0fTtcblxubW9kdWxlLmV4cG9ydHMgPSB3YWl0O1xuIiwiXG5mdW5jdGlvbiBkZWJvdW5jZSAoZm4sIHRpbWVzbG90KSB7XG4gIHZhciB0aW1lciA9IG51bGwsXG4gICAgICB0aW1lc2xvdCA9IHRpbWVzbG90IHx8IDgwO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcblxuICAgIGlmKCB0aW1lciApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGZuLmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICB9LCB0aW1lc2xvdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7IiwidmFyIHJlYWR5TGlzdGVuZXJzID0gW10sXG4gICAgaW5pdFJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGxpc3RlbmVycyA9IHJlYWR5TGlzdGVuZXJzO1xuICAgICAgcmVhZHlMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG4gICAgICBbXS5mb3JFYWNoLmNhbGwobGlzdGVuZXJzLCBmdW5jdGlvbiAoY2IpIHsgY2IoKTsgfSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdFJlYWR5KTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdFJlYWR5KTtcbiAgICB9O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdFJlYWR5KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaW5pdFJlYWR5KTtcblxuZnVuY3Rpb24gcmVhZHkgKGNhbGxiYWNrKSB7XG4gIGlmKCBjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgIGlmKCByZWFkeUxpc3RlbmVycyApIHtcbiAgICAgIHJlYWR5TGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlYWR5O1xuIiwiXG5mdW5jdGlvbiB0ZW1wbGF0ZSAobmFtZSwgZGF0YSl7XG4gIHJldHVybiB0ZW1wbGF0ZS5jYWNoZVtuYW1lXShkYXRhIHx8IHt9KTtcbn1cblxudGVtcGxhdGUuY2FjaGUgPSB7fTtcblxudGVtcGxhdGUuY29tcGlsZSA9IGZ1bmN0aW9uICh0bXBsKSB7XG4gIC8vIEpvaG4gUmVzaWcgbWljcm8tdGVtcGxhdGVcbiAgcmV0dXJuIG5ldyBGdW5jdGlvbignb2JqJywgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgJ3ZhciBwPVtdLHByaW50PWZ1bmN0aW9uKCl7cC5wdXNoLmFwcGx5KHAsYXJndW1lbnRzKTt9OycgK1xuXG4gICAgLy8gSW50cm9kdWNlIHRoZSBkYXRhIGFzIGxvY2FsIHZhcmlhYmxlcyB1c2luZyB3aXRoKCl7fVxuICAgICd3aXRoKG9iail7cC5wdXNoKFxcJycgK1xuXG4gICAgLy8gQ29udmVydCB0aGUgdGVtcGxhdGUgaW50byBwdXJlIEphdmFTY3JpcHRcbiAgICB0bXBsLnRyaW0oKVxuICAgICAgLnJlcGxhY2UoL1tcXHJcXHRcXG5dL2csICcgJylcbiAgICAgIC5zcGxpdCgnPCUnKS5qb2luKCdcXHQnKVxuICAgICAgLnJlcGxhY2UoLygoXnwlPilbXlxcdF0qKScvZywgJyQxXFxyJylcbiAgICAgIC5yZXBsYWNlKC9cXHQ9KC4qPyklPi9nLCAnXFwnLCQxLFxcJycpXG4gICAgICAuc3BsaXQoJ1xcdCcpLmpvaW4oJ1xcJyk7JylcbiAgICAgIC5zcGxpdCgnJT4nKS5qb2luKCdwLnB1c2goXFwnJylcbiAgICAgIC5zcGxpdCgnXFxyJykuam9pbignXFxcXFxcJycpICsgJ1xcJyk7fXJldHVybiBwLmpvaW4oXFwnXFwnKTsnKTtcbn07XG5cbnRlbXBsYXRlLnB1dCA9IGZ1bmN0aW9uIChuYW1lLCB0bXBsKSB7XG4gIHRlbXBsYXRlLmNhY2hlW25hbWVdID0gdGVtcGxhdGUuY29tcGlsZSh0bXBsKTtcbn07XG5cbnRlbXBsYXRlLmxvb2t1cCA9IGZ1bmN0aW9uICgpIHtcbiAgW10uZm9yRWFjaC5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24veC10ZW1wbGF0ZVwiXVtkYXRhLXRlbXBsYXRlXScpLCBmdW5jdGlvbiAodG1wbCkge1xuICAgIHRlbXBsYXRlLnB1dCh0bXBsLmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpLCB0bXBsLnRleHQpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiXG52YXIgX2RvbSA9IHtcbiAgY3VycmVudFNjcmlwdDogZG9jdW1lbnQuY3VycmVudFNjcmlwdCB8fCAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG4gICAgcmV0dXJuIHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXTtcbiAgfSkoKSxcbiAgY3JlYXRlOiBmdW5jdGlvbiAodGFnTmFtZSwgYXR0cnMpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgaWYoIGF0dHJzICkge1xuICAgICAgaWYoIGF0dHJzLmh0bWwgKSB7XG4gICAgICAgIGVsLmlubmVySFRNTCA9IGF0dHJzLmh0bWw7XG4gICAgICB9XG4gICAgICBmb3IoIHZhciBhdHRyIGluIGF0dHJzICkge1xuICAgICAgICBpZiggYXR0ciAhPT0gJ2h0bWwnICkge1xuICAgICAgICAgIGVsW2F0dHJdID0gYXR0cnNbYXR0cl07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsO1xuICB9LFxuICBhdHRyOiBmdW5jdGlvbiAoZWwsIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYoICEoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSAmJiBlbFswXSBpbnN0YW5jZW9mIEVsZW1lbnQgKSB7XG4gICAgICBlbCA9IGVsWzBdO1xuICAgIH1cbiAgICBpZiggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gIH0sXG4gIHRtcENsYXNzOiBmdW5jdGlvbiAoZWwsIGNsYXNzTmFtZSwgZHVyYXRpb24sIGNiKSB7XG4gICAgdmFyIGlzQ29sbGVjdGlvbiA9ICEoZWwgaW5zdGFuY2VvZiBFbGVtZW50ICkgJiYgZWwubGVuZ3RoO1xuXG4gICAgaWYoIGlzQ29sbGVjdGlvbiApIHtcbiAgICAgIFtdLmZvckVhY2guY2FsbChlbCwgZnVuY3Rpb24gKF9lbCkge1xuICAgICAgICBfZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiggaXNDb2xsZWN0aW9uICkge1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZWwsIGZ1bmN0aW9uIChfZWwpIHtcbiAgICAgICAgICBfZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmKCBjYiBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgICAgICBjYigpO1xuICAgICAgfVxuICAgIH0sIGR1cmF0aW9uIGluc3RhbmNlb2YgRnVuY3Rpb24gPyBkdXJhdGlvbigpIDogZHVyYXRpb24gKTtcbiAgfSxcbiAgZm9ybVBhcmFtczogZnVuY3Rpb24gKGZvcm0pIHtcbiAgICBpZiggIShmb3JtIGluc3RhbmNlb2YgRWxlbWVudCkgJiYgZm9ybS5sZW5ndGggKSB7XG4gICAgICBmb3JtID0gZm9ybVswXTtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHt9O1xuICAgIFtdLmZvckVhY2guY2FsbChmb3JtLmVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGlmKCBlbC5uYW1lICYmICFlbC5kaXNhYmxlZCApIHtcbiAgICAgICAgaWYoIGVsLnR5cGUgPT09ICdyYWRpbycgKSB7XG4gICAgICAgICAgaWYoIGVsLmNoZWNrZWQgKSB7XG4gICAgICAgICAgICBkYXRhW2VsLm5hbWVdID0gZWwudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGFbZWwubmFtZV0gPSBlbC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9kb207XG4iLCJcbm1vZHVsZS5leHBvcnRzID0ge1xuICBvbjogZnVuY3Rpb24gKGVsLCBldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpIHtcbiAgICBpZiggdHlwZW9mIGVsID09PSAnc3RyaW5nJyApIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihlbCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJlKTtcbiAgfSxcbiAgb2ZmOiBmdW5jdGlvbiAoZWwsIGV2ZW50TmFtZSwgaGFuZGxlciwgdXNlQ2FwdHVyZSkge1xuICAgIGlmKCB0eXBlb2YgZWwgPT09ICdzdHJpbmcnICkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGVsLCBldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgIH1cbiAgICByZXR1cm4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICB9LFxuICB0cmlnZ2VyRXZlbnQ6IGRvY3VtZW50LmNyZWF0ZUV2ZW50ID8gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiSFRNTEV2ZW50c1wiKTtcbiAgICBldmVudC5kYXRhID0gZGF0YTtcbiAgICBldmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHJldHVybiBldmVudDtcbiAgfSA6IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpO1xuICAgIGV2ZW50LmRhdGEgPSBkYXRhO1xuICAgIGVsZW1lbnQuZmlyZUV2ZW50KFwib25cIiArIGV2ZW50TmFtZSwgZXZlbnQpO1xuICAgIHJldHVybiBldmVudDtcbiAgfVxufTtcbiIsIlxudmFyIG5vcm1hbGl6ZSA9IHtcbiAgaXNUb3VjaERldmljZTogJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICBpc01hYzogL15NYWMvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKSxcbiAgaXNBbmRyb2lkOiAvXkFuZHJvaWQvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKVxufTtcblxuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoIG5vcm1hbGl6ZS5pc1RvdWNoRGV2aWNlID8gJ3RvdWNoJyA6ICduby10b3VjaCcgKTtcbmlmKCBub3JtYWxpemUuaXNNYWMgKSB7XG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1tYWMnKTtcbn1cbmlmKCBub3JtYWxpemUuaXNBbmRyb2lkICkge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtYW5kcm9pZCcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZTtcbiIsIlxuZnVuY3Rpb24gZ2V0U2Nyb2xsUm9vdCAoKSB7XG4gICAgaWYoIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH0gZWxzZSBpZiAoIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG4gICAgfVxuXG4gICAgdmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgICBjYWNoZVRvcCA9ICgodHlwZW9mIHdpbmRvdy5wYWdlWU9mZnNldCAhPT0gXCJ1bmRlZmluZWRcIikgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiBudWxsKSB8fCBib2R5LnNjcm9sbFRvcCB8fCBodG1sLnNjcm9sbFRvcCwgLy8gY2FjaGUgdGhlIHdpbmRvdydzIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICAgIHJvb3Q7XG5cbiAgICBodG1sLnNjcm9sbFRvcCA9IGJvZHkuc2Nyb2xsVG9wID0gY2FjaGVUb3AgKyAoY2FjaGVUb3AgPiAwKSA/IC0xIDogMTtcbiAgICAvLyBmaW5kIHJvb3QgYnkgY2hlY2tpbmcgd2hpY2ggc2Nyb2xsVG9wIGhhcyBhIHZhbHVlIGxhcmdlciB0aGFuIHRoZSBjYWNoZS5cbiAgICByb290ID0gKGh0bWwuc2Nyb2xsVG9wICE9PSBjYWNoZVRvcCkgPyBodG1sIDogYm9keTtcblxuICAgIHJvb3Quc2Nyb2xsVG9wID0gY2FjaGVUb3A7IC8vIHJlc3RvcmUgdGhlIHdpbmRvdydzIHNjcm9sbCBwb3NpdGlvbiB0byBjYWNoZWQgdmFsdWVcblxuICAgIHJldHVybiByb290OyAvLyByZXR1cm4gdGhlIHNjcm9sbGluZyByb290IGVsZW1lbnRcbn1cblxudmFyIHJlYWR5ID0gcmVxdWlyZSgnLi4vZm4vcmVhZHknKSxcbiAgICBzY3JvbGxSb290ID0geyBzY3JvbGxUb3A6IDAgfSxcbiAgICBzY3JvbGwgPSB7XG4gICAgICByb290OiBzY3JvbGxSb290LFxuICAgICAgb246IGZ1bmN0aW9uICggaGFuZGxlciwgdXNlQ2FwdHVyZSApIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZXIsIHVzZUNhcHR1cmUpO1xuICAgICAgfSxcbiAgICAgIG9mZjogZnVuY3Rpb24gKCBoYW5kbGVyLCB1c2VDYXB0dXJlICkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlciwgdXNlQ2FwdHVyZSk7XG4gICAgICB9LFxuICAgICAgdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzY3JvbGwucm9vdC5zY3JvbGxUb3A7XG4gICAgICB9LFxuICAgICAgZ290bzogZnVuY3Rpb24gKCB2YWx1ZSApIHtcbiAgICAgICAgc2Nyb2xsLnJvb3Quc2Nyb2xsVG9wID0gdmFsdWU7XG4gICAgICB9XG4gICAgfTtcblxucmVhZHkoZnVuY3Rpb24gKCkge1xuICBzY3JvbGxSb290ID0gZ2V0U2Nyb2xsUm9vdCgpO1xuICBzY3JvbGwucm9vdCA9IHNjcm9sbFJvb3Q7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGw7XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNjcm9sbCkge1xuXG5cdHZhciBhbmltYXRlID0gcmVxdWlyZSgnLi4vLi4vZGVmZXJyZWQvYW5pbWF0ZScpLFxuXHRcdFx0JHEgPSByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJyksXG5cdFx0XHRub29wID0gZnVuY3Rpb24oKSB7fSxcblx0XHRcdHNjcm9sbEFuaW1hdGlvbiA9IGFuaW1hdGUobm9vcCwgMCksXG5cdFx0XHRhdXg7XG5cblx0c2Nyb2xsLmFuaW1hdGlvbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gc2Nyb2xsQW5pbWF0aW9uO1xuXHR9O1xuXG5cdHNjcm9sbC5hbmltYXRlVG8gPSBmdW5jdGlvbiAodmFsdWUsIGNiLCBkdXJhdGlvbiApIHtcblx0XHRpZiggdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcblx0XHQgIHJldHVybiAkcS5yZWplY3QoKTtcblx0XHR9XG5cdFx0aWYoIHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudCApIHtcblx0XHQgIHZhbHVlID0gdmFsdWUub2Zmc2V0VG9wO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlb2YgY2IgPT09ICdudW1iZXInICkge1xuXHRcdCAgYXV4ID0gZHVyYXRpb247XG5cdFx0ICBkdXJhdGlvbiA9IGNiO1xuXHRcdCAgY2IgPSB0eXBlb2YgYXV4ID09PSAnZnVuY3Rpb24nID8gYXV4IDogbm9vcDtcblx0XHR9XG5cblx0XHR2YXIgc2Nyb2xsRnJvbSA9IHNjcm9sbC50b3AoKSxcblx0XHQgICAgc2Nyb2xsRGVsdGEgPSB2YWx1ZSAtIHNjcm9sbEZyb207XG5cblx0XHRzY3JvbGxBbmltYXRpb24uc3RvcCgpO1xuXHRcdHNjcm9sbC5pbkFuaW1hdGlvbiA9IHRydWU7XG5cdFx0c2Nyb2xsQW5pbWF0aW9uID0gYW5pbWF0ZShmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcblx0XHQgIHNjcm9sbC5nb3RvKCBzY3JvbGxGcm9tICsgc2Nyb2xsRGVsdGEqcHJvZ3Jlc3MgKTtcblx0XHR9LCBmdW5jdGlvbiAoKSB7XG5cdFx0ICBzY3JvbGwuaW5BbmltYXRpb24gPSBmYWxzZTtcblx0XHQgIChjYiB8fCBub29wKSgpO1xuXHRcdH0sIGR1cmF0aW9uIHx8IDM1MCwgJ2Vhc2Utb3V0Jyk7XG5cblx0XHRyZXR1cm4gc2Nyb2xsQW5pbWF0aW9uO1xuXHR9O1xuXG5cdHJldHVybiBzY3JvbGw7XG59O1xuIiwiXG52YXIgc2Nyb2xsID0gcmVxdWlyZSgnLi4vc2Nyb2xsJyk7XG5cbnJlcXVpcmUoJy4vdG9wLWNsYXNzJykoc2Nyb2xsKTtcbnJlcXVpcmUoJy4vYW5pbWF0ZScpKHNjcm9sbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2Nyb2xsOyIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2Nyb2xsKSB7XG5cblx0dmFyIG9uU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2Nyb2xsLXRvcCcsICFzY3JvbGwudG9wKCkgKTtcblx0ICAgIH07XG5cblx0c2Nyb2xsLm9uKG9uU2Nyb2xsKTtcblxuXHRyZXF1aXJlKCcuLi8uLi9mbi9yZWFkeScpKG9uU2Nyb2xsKTtcblxufTtcbiIsIlxucmVxdWlyZSgnLi9zYW5kYm94JykoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGFwbGF6YW1lID0gcmVxdWlyZSgnLi9jb3JlL2NvcmUnKTtcblxuICBhcGxhemFtZS5jaGVja291dCA9IHJlcXVpcmUoJy4vYXBwcy9jaGVja291dCcpO1xuICBhcGxhemFtZS5idXR0b24gPSByZXF1aXJlKCcuL2FwcHMvYnV0dG9uJyk7XG4gIGFwbGF6YW1lLnNpbXVsYXRvciA9IHJlcXVpcmUoJy4vYXBwcy9zaW11bGF0b3InKTtcbiAgYXBsYXphbWUubW9kYWwgPSByZXF1aXJlKCcuL2FwcHMvbW9kYWwnKTtcblxuICBhcGxhemFtZS5pbmZvID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBhcGk6IHJlcXVpcmUoJy4vY29yZS9hcGknKSxcbiAgICAgIGxvZzogcmVxdWlyZSgnLi90b29scy9sb2cnKS5oaXN0b3J5LFxuICAgICAgdmVyc2lvbjogcmVxdWlyZSgnLi4vLnRtcC9hcGxhemFtZS12ZXJzaW9uJylcbiAgICB9O1xuICB9O1xuXG4gIGFwbGF6YW1lLmxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXF1aXJlKCcuL3Rvb2xzL2xvZycpLmhpc3RvcnkuZm9yRWFjaChmdW5jdGlvbiAobCkge1xuICAgICAgY29uc29sZS5sb2cobC50aW1lKTtcbiAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIGwuYXJncyk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVxdWlyZSgnLi9hcHBzL2h0dHAtc2VydmljZScpO1xuXG4gIGdsb2JhbC5hcGxhemFtZSA9IGFwbGF6YW1lO1xuXG4gIHJlcXVpcmUoJy4vbG9hZGVycy9kYXRhLWFwbGF6YW1lJykoZ2xvYmFsLmFwbGF6YW1lKTtcbiAgYXBsYXphbWUuXy5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJ1dHRvbnNMb29rdXAgPSByZXF1aXJlKCcuL2xvYWRlcnMvZGF0YS1idXR0b24nKShhcGxhemFtZSksXG4gICAgICAgIHdpZGdldHNMb29rdXAgPSByZXF1aXJlKCcuL2xvYWRlcnMvZGF0YS1zaW11bGF0b3InKShhcGxhemFtZSksXG4gICAgICAgIGNiID0gcmVxdWlyZSgnLi9jb3JlL2FwaScpLmNhbGxiYWNrO1xuXG4gICAgaWYoIGNiICkge1xuICAgICAgaWYoICB0eXBlb2YgZ2xvYmFsW2NiXSAhPT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBzaG91bGQgYmUgYSBnbG9iYWwgZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICAgIGdsb2JhbFtjYl0oYXBsYXphbWUpO1xuICAgICAgYnV0dG9uc0xvb2t1cCgpO1xuICAgICAgd2lkZ2V0c0xvb2t1cCgpO1xuICAgIH1cblxuICB9KTtcblxufSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcGlIdHRwID0gcmVxdWlyZSgnLi4vY29yZS9hcGktaHR0cCcpLFxuICAgIF8gPSByZXF1aXJlKCcuLi90b29scy90b29scycpO1xuXG5mdW5jdGlvbiBnZXRDYXJ0UHJpY2UgKCkge1xuICByZXR1cm4gXy5wYXJzZVByaWNlKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWxfcHJpY2UnKS50ZXh0Q29udGVudCApO1xufVxuXG5mdW5jdGlvbiBidXR0b24gKG9wdGlvbnMpIHtcblxuICBpZiggIW9wdGlvbnMgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdhcGxhemFtZS5idXR0b24gcmVxdWlyZXMgcGFyYW1ldGVycycpO1xuICB9XG5cbiAgaWYoICFvcHRpb25zLmlkICYmICFvcHRpb25zLmJ1dHRvbiAmJiAhb3B0aW9ucy5zZWxlY3RvciApe1xuICAgIHRocm93IG5ldyBFcnJvcignYnV0dG9uIGNhbiBub3QgYmUgaWRlbnRpZmllZCAoIHBsZWFzZSB1c2UgLSBpZDogXFwnYnV0dG9uLWlkXFwnIC0gb3IgLSBidXR0b246IFxcJyNidXR0b24taWRcXCcgLSBvciAtIHNlbGVjdG9yOiBcXCcjYnV0dG9uLWlkXFwnIChyZWNvbWVuZGVkKSAtICknKTtcbiAgfVxuXG4gIGlmKCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWxfcHJpY2UnKSApIHtcbiAgICBvcHRpb25zLmFtb3VudCA9IGdldENhcnRQcmljZSgpIHx8IG9wdGlvbnMuYW1vdW50O1xuXG4gICAgaWYoICFidXR0b24ud2F0Y2hpbmcgKSB7XG4gICAgICBidXR0b24ud2F0Y2hpbmcgPSB0cnVlO1xuICAgICAgb3B0aW9ucy5sYXN0UHJpY2UgPSBvcHRpb25zLmFtb3VudDtcblxuICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYW1vdW50ID0gZ2V0Q2FydFByaWNlKCk7XG4gICAgICAgIGlmKCBhbW91bnQgJiYgYW1vdW50ICE9PSBvcHRpb25zLmxhc3RQcmljZSApIHtcbiAgICAgICAgICBvcHRpb25zLmFtb3VudCA9IGFtb3VudDtcbiAgICAgICAgICBvcHRpb25zLmxhc3RQcmljZSA9IG9wdGlvbnMuYW1vdW50O1xuICAgICAgICAgIG9wdGlvbnMuZm9yY2VVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgIGJ1dHRvbihvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSwgNDAwKTtcbiAgICB9XG4gIH1cblxuICBpZiggIW9wdGlvbnMuYW1vdW50ICl7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdidXR0b24gYW1vdW50IG1pc3NpbmcnKTtcbiAgfVxuXG4gIHZhciBlbGVtZW50cywgZWxCdXR0b247XG5cbiAgaWYoIG9wdGlvbnMuYnV0dG9uICkge1xuICAgIGVsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmJ1dHRvbik7XG4gIH0gZWxzZSBpZiggb3B0aW9ucy5pZCApIHtcbiAgICBlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICggL14jLy50ZXN0KG9wdGlvbnMuaWQpID8gJycgOiAnIycgKSArIG9wdGlvbnMuaWQgKTtcbiAgfVxuXG4gIGVsZW1lbnRzID0gZWxCdXR0b24gPyBbZWxCdXR0b25dIDogW107XG5cbiAgaWYoIG9wdGlvbnMuc2VsZWN0b3IgKSB7XG4gICAgW10ucHVzaC5hcHBseSggZWxlbWVudHMsIF8uY3NzUXVlcnkob3B0aW9ucy5zZWxlY3RvcikgKTtcbiAgfVxuXG4gIGlmKCBvcHRpb25zLmRlc2NyaXB0aW9uICkge1xuICAgIFtdLnB1c2guYXBwbHkoIGVsZW1lbnRzLCBfLmNzc1F1ZXJ5KG9wdGlvbnMuZGVzY3JpcHRpb24pICk7XG4gIH1cblxuICBlbEJ1dHRvbiA9IGVsQnV0dG9uIHx8IGVsZW1lbnRzWzBdO1xuXG4gIGlmKCAhb3B0aW9ucy4kJHJ1bm5pbmcgJiYgb3B0aW9ucy5zZWxlY3RvciApIHtcbiAgICBvcHRpb25zLiQkcnVubmluZyA9IHRydWU7XG4gIH1cblxuICBpZiggIW9wdGlvbnMuZm9yY2VVcGRhdGUgJiYgKCAhZWxlbWVudHMubGVuZ3RoIHx8IF8uZWxlbWVudERhdGEoZWxCdXR0b24sICdidXR0b25Jbml0aWFsaXplZCcpICkgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3B0aW9ucy5mb3JjZVVwZGF0ZSA9IGZhbHNlO1xuXG4gIGlmKCBlbEJ1dHRvbiAmJiBvcHRpb25zLnBhcmVudCApIHtcbiAgICB2YXIgcGFyZW50ID0gZWxCdXR0b24ucGFyZW50RWxlbWVudDtcblxuICAgIHdoaWxlKCBwYXJlbnQgJiYgcGFyZW50ICE9PSBkb2N1bWVudC5ib2R5ICkge1xuICAgICAgaWYoIHBhcmVudC5tYXRjaGVzU2VsZWN0b3Iob3B0aW9ucy5wYXJlbnQpICkge1xuICAgICAgICBlbGVtZW50cy5wdXNoKHBhcmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiggZWwuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICkge1xuICAgICAgZWwuX19kaXNwbGF5ID0gZWwuc3R5bGUuZGlzcGxheTtcbiAgICB9XG4gICAgZWwuX19pbnB1dCA9ICggZWwubm9kZU5hbWUgPT09ICdJTlBVVCcgfHwgZWwubm9kZU5hbWUgPT09ICdCVVRUT04nICkgPyBlbCA6IGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LCBidXR0b24nKTtcblxuICAgIGlmKCBlbC5fX2lucHV0ICkge1xuICAgICAgZWwuX19pbnB1dC5fX2Rpc2FibGVkID0gZWwuX19pbnB1dC5fX2Rpc2FibGVkID09PSB1bmRlZmluZWQgPyBlbC5fX2lucHV0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSA6IGVsLl9faW5wdXQuX19kaXNhYmxlZDtcbiAgICAgIGVsLl9faW5wdXQuX19jaGVja2VkID0gZWwuX19pbnB1dC5fX2NoZWNrZWQgPT09IHVuZGVmaW5lZCA/IGVsLl9faW5wdXQuY2hlY2tlZCA6IGVsLl9faW5wdXQuX19jaGVja2VkO1xuICAgICAgaWYoIGVsLl9faW5wdXQuX19jaGVja2VkICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgIGVsLl9faW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYoICFlbC5fX2lucHV0Ll9fZGlzYWJsZWQgKSB7XG4gICAgICAgIGVsLl9faW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcblxuICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIF8uZWxlbWVudERhdGEoZWwsICdidXR0b25Jbml0aWFsaXplZCcsIHRydWUpO1xuICB9KTtcblxuICByZXR1cm4gYnV0dG9uLmNoZWNrKG9wdGlvbnMsIGZ1bmN0aW9uIChhbGxvd2VkKSB7XG4gICAgaWYoIGFsbG93ZWQgKSB7XG4gICAgICB2YXIgZWxtcyA9IGVsZW1lbnRzLnNsaWNlKCk7XG4gICAgICBlbG1zLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBlbC5fX2Rpc3BsYXk7XG4gICAgICAgIGlmICggZWwuX19pbnB1dCApIHtcbiAgICAgICAgICBpZiggIWVsLl9faW5wdXQuX19kaXNhYmxlZCAmJiBlbC5fX2lucHV0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSApIHtcbiAgICAgICAgICAgIGVsLl9faW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiggZWwuX19pbnB1dC5fX2NoZWNrZWQgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIGVsLl9faW5wdXQuY2hlY2tlZCA9IGVsLl9faW5wdXQuX19jaGVja2VkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5idXR0b24uY2hlY2sgPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgaWYoIF8uaXNTdHJpbmcob3B0aW9ucykgfHwgXy5pc051bWJlcihvcHRpb25zKSApIHtcbiAgICBvcHRpb25zID0geyBhbW91bnQ6IE51bWJlcihvcHRpb25zKSB9O1xuICB9XG5cbiAgdmFyIHBhcmFtcyA9IHtcbiAgICBhbW91bnQ6IG9wdGlvbnMuYW1vdW50LFxuICAgIGN1cnJlbmN5OiBvcHRpb25zLmN1cnJlbmN5IHx8ICdFVVInXG4gIH07XG5cbiAgaWYoIG9wdGlvbnMuY291bnRyeSApIHtcbiAgICBwYXJhbXMuY291bnRyeSA9IG9wdGlvbnMuY291bnRyeTtcbiAgfVxuXG4gIHZhciBjaGVja1Byb21pc2UgPSBhcGlIdHRwLmdldCgnY2hlY2tvdXQvYnV0dG9uJywgeyBwYXJhbXM6IHBhcmFtcyB9KTtcblxuICBpZiggXy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSApIHtcbiAgICBjaGVja1Byb21pc2UudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHsgY2FsbGJhY2socmVzcG9uc2UuZGF0YS5hbGxvd2VkLCByZXNwb25zZSk7IH0sIGZ1bmN0aW9uIChyZXNwb25zZSkgeyBjYWxsYmFjayhmYWxzZSwgcmVzcG9uc2UpOyB9KTtcbiAgfVxuXG4gIHJldHVybiBjaGVja1Byb21pc2U7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1dHRvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwaSA9IHJlcXVpcmUoJy4uL2NvcmUvYXBpJyksXG4gICAgXyA9IHJlcXVpcmUoJy4uL3Rvb2xzL3Rvb2xzJyksXG4gICAgaHR0cCA9IHJlcXVpcmUoJ2h0dHAtYnJvd3NlcicpLFxuICAgICRxID0gcmVxdWlyZSgncS1wcm9taXNlL25vLW5hdGl2ZScpLFxuICAgIGNzc0hhY2sgPSByZXF1aXJlKCcuLi90b29scy9jc3MtaGFjaycpO1xuXG5mdW5jdGlvbiBjaGVja291dCAob3B0aW9ucykge1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgYmFzZUNoZWNrb3V0ID0gKCBvcHRpb25zLmhvc3QgPT09ICdsb2NhdGlvbicgPyAoIGxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIGxvY2F0aW9uLmhvc3QgKyAnLycgKSA6IG9wdGlvbnMuaG9zdCApIHx8ICdodHRwczovL2FwbGF6YW1lLmNvbS9zdGF0aWMvY2hlY2tvdXQvJztcblxuICBpZiggIS9cXC8kLy50ZXN0KGJhc2VDaGVja291dCkgKSB7XG4gICAgYmFzZUNoZWNrb3V0ICs9ICcvJztcbiAgfVxuXG4gIHZhciBvbiA9IHt9LFxuICAgICAgaWZyYW1lU3JjID0gYmFzZUNoZWNrb3V0ICsgJ2lmcmFtZS5odG1sPycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgIGVycm9yTG9hZGluZyA9IGZhbHNlLFxuICAgICAgdG1wT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgY3NzT3ZlcmxheSA9IGNzc0hhY2soJ292ZXJsYXknKSxcbiAgICAgIGNzc0JsdXIgPSBjc3NIYWNrKCdibHVyJyksXG4gICAgICBjc3NMb2dvID0gY3NzSGFjaygnbG9nbycpLFxuICAgICAgY3NzTW9kYWwgPSBjc3NIYWNrKCdtb2RhbCcpO1xuXG4gIGlmKCBvcHRpb25zLm1lcmNoYW50Lm9uU3VjY2VzcyApIHtcbiAgICBvbi5zdWNjZXNzID0gb3B0aW9ucy5tZXJjaGFudC5vblN1Y2Nlc3M7XG4gICAgZGVsZXRlIG9wdGlvbnMubWVyY2hhbnQub25TdWNjZXNzO1xuICB9XG4gIGlmKCBvcHRpb25zLm1lcmNoYW50Lm9uRXJyb3IgKSB7XG4gICAgb24uZXJyb3IgPSBvcHRpb25zLm1lcmNoYW50Lm9uRXJyb3I7XG4gICAgZGVsZXRlIG9wdGlvbnMubWVyY2hhbnQub25FcnJvcjtcbiAgfVxuICBpZiggb3B0aW9ucy5tZXJjaGFudC5vbkRpc21pc3MgKSB7XG4gICAgb24uZGlzbWlzcyA9IG9wdGlvbnMubWVyY2hhbnQub25EaXNtaXNzO1xuICAgIGRlbGV0ZSBvcHRpb25zLm1lcmNoYW50Lm9uRGlzbWlzcztcbiAgfVxuXG4gIHRtcE92ZXJsYXkuY2xhc3NOYW1lID0gJ2FwbGF6YW1lLW92ZXJsYXkgYXBsYXphbWUtb3ZlcmxheS1zaG93JztcblxuICBjc3NPdmVybGF5LmhhY2sodHJ1ZSk7XG4gIGNzc0xvZ28uaGFjayh0cnVlKTtcbiAgY3NzQmx1ci5oYWNrKHRydWUpO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGlmKCAhZXJyb3JMb2FkaW5nICkge1xuICAgICAgXy5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtYmx1cicpO1xuICAgIH1cbiAgfSwgMCk7XG5cbiAgdG1wT3ZlcmxheS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImFwbGF6YW1lLWxvZ28td3JhcHBlclwiPjxkaXYgY2xhc3M9XCJsb2dvLWFwbGF6YW1lXCIgc3R5bGU9XCJ3aWR0aDogMTUwcHg7IGhlaWdodDogMTUwcHg7XCI+JyArXG4gIHJlcXVpcmUoJy4vbG9hZGluZy1zdmcnKSArICc8L2Rpdj48ZGl2IGNsYXNzPVwiYXBsYXphbWUtb3ZlcmxheS1sb2FkaW5nLXRleHRcIj5DYXJnYW5kbyBwYXNhcmVsYSBkZSBwYWdvLi4uPC9kaXY+PC9kaXY+JztcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRtcE92ZXJsYXkpO1xuXG4gIHZhciBsb2FkaW5nVGV4dCA9IHRtcE92ZXJsYXkucXVlcnlTZWxlY3RvcignLmFwbGF6YW1lLW92ZXJsYXktbG9hZGluZy10ZXh0Jyk7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaWYoICFlcnJvckxvYWRpbmcgKSB7XG4gICAgICB0bXBPdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLWFwbGF6YW1lJykuY2xhc3NOYW1lICs9ICcgYW5pbWF0ZSc7XG4gICAgfVxuICB9LCAyMDApO1xuXG4gIG9wdGlvbnMuYXBpID0gXy5jb3B5KGFwaSk7XG5cbiAgcmV0dXJuIGh0dHAoIGlmcmFtZVNyYyApLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICB2YXIgaWZyYW1lSHRtbCA9IHJlc3BvbnNlLmRhdGEucmVwbGFjZSgvPGhlYWRcXD4vLCAnPGhlYWQ+PGJhc2UgaHJlZj1cIicgKyBiYXNlQ2hlY2tvdXQgKyAnXCIgLz4nKSxcbiAgICAgICAgICBpZnJhbWUgPSBfLmdldElGcmFtZSh7XG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGhlaWdodDogJzAnLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGh0dHBDaGVja291dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzdGFydGVkID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHJldHVybiBodHRwLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGFwbGF6YW1lOiAnY2hlY2tvdXQnLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnaHR0cC1zdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBzdGFydGVkOiBzdGFydGVkLFxuICAgICAgICAgICAgICAgIGVsYXBzZWQ6IERhdGUubm93KCkgLSBzdGFydGVkLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBodHRwLnBsYWluUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgYXBsYXphbWU6ICdjaGVja291dCcsXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdodHRwLWVycm9yJyxcbiAgICAgICAgICAgICAgICBzdGFydGVkOiBzdGFydGVkLFxuICAgICAgICAgICAgICAgIGVsYXBzZWQ6IERhdGUubm93KCkgLSBzdGFydGVkLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBodHRwLnBsYWluUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgICAgICAgIHRocm93IHJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcblxuICAgICAgaWZyYW1lLmNsYXNzTmFtZSA9ICdhcGxhemFtZS1tb2RhbCc7XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgIGlmcmFtZS5zcmMgPSBpZnJhbWVTcmM7XG5cbiAgICAgIGlmKCAhb3B0aW9ucy5tZXJjaGFudCApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIG1lcmNoYW50IHBhcmFtZXRlcnMnKTtcbiAgICAgIH1cblxuICAgICAgaWYoICdzYW5kYm94JyBpbiBvcHRpb25zLm1lcmNoYW50ICkge1xuICAgICAgICBhcGkuc2FuZGJveCA9IG9wdGlvbnMubWVyY2hhbnQuc2FuZGJveDtcbiAgICAgIH1cblxuICAgICAgaWYoICFvcHRpb25zLm1lcmNoYW50LnB1YmxpY19hcGlfa2V5ICkge1xuICAgICAgICBpZiggYXBpLnB1YmxpY0tleSApIHtcbiAgICAgICAgICBvcHRpb25zLm1lcmNoYW50LnB1YmxpY19hcGlfa2V5ID0gYXBpLnB1YmxpY0tleTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3NpbmcgcHVibGljIGtleScpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMub3JpZ2luID0ge1xuICAgICAgICBocmVmOiBsb2NhdGlvbi5ocmVmLFxuICAgICAgICBob3N0OiBsb2NhdGlvbi5ob3N0LFxuICAgICAgICBwcm90b2NvbDogbG9jYXRpb24ucHJvdG9jb2wsXG4gICAgICAgIG9yaWdpbjogbG9jYXRpb24ub3JpZ2luXG4gICAgICB9O1xuXG4gICAgICB2YXIgb25NZXNzYWdlID0gZnVuY3Rpb24gKGUsIG1lc3NhZ2UpIHtcblxuICAgICAgICBzd2l0Y2goIG1lc3NhZ2UuZXZlbnQgKSB7XG4gICAgICAgICAgY2FzZSAnbWVyY2hhbnQnOlxuICAgICAgICAgICAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgICAgICAgICAgZS5zb3VyY2UucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICBjaGVja291dDogb3B0aW9uc1xuICAgICAgICAgICAgfSwgJyonKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3Nob3ctaWZyYW1lJzpcbiAgICAgICAgICAgIF8ucmVtb3ZlQ2xhc3MoaWZyYW1lLCAnaGlkZScpO1xuICAgICAgICAgICAgY3NzTW9kYWwuaGFjayh0cnVlKTtcbiAgICAgICAgICAgIGNzc092ZXJsYXkuaGFjayhmYWxzZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRtcE92ZXJsYXkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbG9hZGluZy10ZXh0JzpcbiAgICAgICAgICAgIGxvYWRpbmdUZXh0LnRleHRDb250ZW50ID0gbWVzc2FnZS50ZXh0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnZHJvcC1ibHVyJzpcbiAgICAgICAgICAgIF8ucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLWJsdXInKTtcbiAgICAgICAgICAgIF8uYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLXVuYmx1cicpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGNzc0JsdXIuaGFjayhmYWxzZSk7XG4gICAgICAgICAgICAgIF8ucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLWJsdXInKTtcbiAgICAgICAgICAgICAgXy5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtdW5ibHVyJyk7XG4gICAgICAgICAgICB9LCA2MDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY29uZmlybSc6XG4gICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICAgICAgICBfLmxvZygnYXBsYXphbWUuY2hlY2tvdXQ6Y29uZmlybScsIG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICBodHRwQ2hlY2tvdXQoIG9wdGlvbnMubWVyY2hhbnQuY29uZmlybWF0aW9uX3VybCwge1xuICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgZGF0YTogbWVzc2FnZS5kYXRhLFxuICAgICAgICAgICAgICBwYXJhbXM6IF8uZXh0ZW5kKG1lc3NhZ2UucGFyYW1zIHx8IHt9LCB7XG4gICAgICAgICAgICAgICAgb3JkZXJfaWQ6IG1lc3NhZ2UuZGF0YS5jaGVja291dF90b2tlbixcbiAgICAgICAgICAgICAgICBjaGVja291dF90b2tlbjogbWVzc2FnZS5kYXRhLmNoZWNrb3V0X3Rva2VuXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBlLnNvdXJjZS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgYXBsYXphbWU6ICdjaGVja291dCcsXG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdjb25maXJtYXRpb24nLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBodHRwLnBsYWluUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGUuc291cmNlLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICBhcGxhemFtZTogJ2NoZWNrb3V0JyxcbiAgICAgICAgICAgICAgICBldmVudDogJ2NvbmZpcm1hdGlvbicsXG4gICAgICAgICAgICAgICAgcmVzdWx0OiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBodHRwLnBsYWluUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgICAgICAgICAgIH0sICcqJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNvbmZpcm1hdGlvbl91cmxcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgICAgICAgIGlmKCBpZnJhbWUgKSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgICAgICAgY3NzTW9kYWwuaGFjayhmYWxzZSk7XG4gICAgICAgICAgICAgIGlmcmFtZSA9IG51bGw7XG5cbiAgICAgICAgICAgICAgXy5vbk1lc3NhZ2Uub2ZmKCdjaGVja291dCcsIG9uTWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgc3dpdGNoKCBtZXNzYWdlLnJlc3VsdCApIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2Ygb24uc3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgICAgICAgICAgICAgb24uc3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKCAhb3B0aW9ucy5tZXJjaGFudC5zdWNjZXNzX3VybCApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzdWNjZXNzX3VybCBtaXNzaW5nJyk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKG9wdGlvbnMubWVyY2hhbnQuc3VjY2Vzc191cmwpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2FuY2VsJzpcbiAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2Ygb24uZXJyb3IgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uLmVycm9yKCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoICFvcHRpb25zLm1lcmNoYW50LmNhbmNlbF91cmwgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2FuY2VsX3VybCBtaXNzaW5nJyk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKG9wdGlvbnMubWVyY2hhbnQuY2FuY2VsX3VybCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdkaXNtaXNzJzpcbiAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2Ygb24uZGlzbWlzcyA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgICAgICAgICAgICAgb24uZGlzbWlzcygpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVwbGFjZShvcHRpb25zLm1lcmNoYW50LmNoZWNrb3V0X3VybCB8fCAnLycpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfLm9uTWVzc2FnZSgnY2hlY2tvdXQnLCBvbk1lc3NhZ2UpO1xuXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdjYW4gbm90IGNvbm5lY3QgdG8gJyArIGJhc2VDaGVja291dCk7XG4gICAgICBlcnJvckxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICBjb25zb2xlLmVycm9yKCdBcGxhemFtZSAnICsgcmVhc29uKTtcblxuICAgICAgXy5yZW1vdmVDbGFzcyh0bXBPdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvLWFwbGF6YW1lJyksICdhbmltYXRlJyk7XG4gICAgICBsb2FkaW5nVGV4dC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cInRleHQtZXJyb3JcIj5FcnJvciBjYXJnYW5kbyBwYXNhcmVsYSBkZSBwYWdvPC9kaXY+PGJyLz48ZGl2PjxhIGhyZWY9XCJtYWlsdG86c29wb3J0ZUBhcGxhemFtZS5jb20/c3ViamVjdD0nICsgZW5jb2RlVVJJKCdDaGVja291dCBlcnJvcjogJyArIHJlYXNvbikgKyAnXCI+c29wb3J0ZUBhcGxhemFtZS5jb208L2E+PC9kaXY+JztcbiAgICAgIGxvYWRpbmdUZXh0LnN0eWxlLmxpbmVIZWlnaHQgPSAnMS41JztcblxuICAgICAgKG9wdGlvbnMub25FcnJvciB8fCBfLm5vb3ApKHJlYXNvbik7XG4gICAgfSk7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja291dDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF8gPSByZXF1aXJlKCcuLi90b29scy90b29scycpLFxuICAgIGh0dHAgPSByZXF1aXJlKCdodHRwLWJyb3dzZXInKTtcblxuZnVuY3Rpb24gcHJvY2Vzc1Jlc3BvbnNlKHJlc3VsdCwgbWVzc2FnZSwgbWVzc2FnZVNyYywgc3RhcnRlZCkge1xuXG4gIHJldHVybiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgIHZhciByZXNwb25zZXAgPSBodHRwLnBsYWluUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIHJlc3BvbnNlcC5jb25maWcgPSBtZXNzYWdlO1xuXG4gICAgbWVzc2FnZVNyYy5wb3N0TWVzc2FnZSh7XG4gICAgICBhcGxhemFtZTogJ2h0dHAnLFxuICAgICAgZXZlbnQ6ICdyZXNwb25zZScsXG4gICAgICBzdGFydGVkOiBzdGFydGVkLFxuICAgICAgZWxhcHNlZDogRGF0ZS5ub3coKSAtIHN0YXJ0ZWQsXG4gICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgIHJlc3BvbnNlOiByZXNwb25zZXBcbiAgICB9LCAnKicpO1xuICB9O1xufVxuXG5fLm9uTWVzc2FnZSgnaHR0cCcsIGZ1bmN0aW9uIChlLCBtZXNzYWdlKSB7XG5cbiAgdmFyIHN0YXJ0ZWQgPSBEYXRlLm5vdygpO1xuXG4gIGh0dHAoIG1lc3NhZ2UudXJsLCBtZXNzYWdlIClcbiAgICAudGhlbihcbiAgICAgIHByb2Nlc3NSZXNwb25zZSgnc3VjY2VzcycsIG1lc3NhZ2UsIGUuc291cmNlLCBzdGFydGVkKSxcbiAgICAgIHByb2Nlc3NSZXNwb25zZSgnZXJyb3InLCBtZXNzYWdlLCBlLnNvdXJjZSwgc3RhcnRlZClcbiAgICApO1xuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IHJlYWR5OiB0cnVlIH07XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gJzxzdmcgY2xhc3M9XCJsaW5lLXNob3J0XCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPicgK1xuJzxwYXRoICBkPVwiTTM2Ljc4OCw4MS4wMDgsNTAsNTBcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGZpbGw9XCJub25lXCIvPicgK1xuJzwvc3ZnPicgK1xuJzxzdmcgY2xhc3M9XCJzbWlsZVwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj4nICtcbic8ZyBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgZmlsbD1cIm5vbmVcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMC43ODAzNjYzMywwLDAsMC43ODAzNjYzMywxMC41MjY1MTIsMTguMDAzOTk4KVwiPicgK1xuJzxwYXRoIGNsYXNzPVwic21pbGUtb3V0bGluZVwiIHN0cm9rZS13aWR0aD1cIjEyXCIgZD1cIk03NS4yNDIsNTcuNTFjLTUuNDM1LDcuODM5LTE0LjQ5OCwxMi45NzItMjQuNzYxLDEyLjk3Mi0xMC4yNjIsMC0xOS4zMjUtNS4xMzItMjQuNzU4LTEyLjk3MlwiLz4nICtcbic8cGF0aCBjbGFzcz1cInNtaWxlLWxpbmVcIiBzdHJva2Utd2lkdGg9XCI3LjVcIiBkPVwiTTc1LjI0Miw1Ny41MWMtNS40MzUsNy44MzktMTQuNDk4LDEyLjk3Mi0yNC43NjEsMTIuOTcyLTEwLjI2MiwwLTE5LjMyNS01LjEzMi0yNC43NTgtMTIuOTcyXCIvPicgK1xuJzwvZz4nICtcbic8L3N2Zz4nICtcbic8c3ZnIGNsYXNzPVwibGluZS1sYXJnZVwiIHZlcnNpb249XCIxLjFcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj4nICtcbic8cGF0aCBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNTAsNTAsNjYuNjg3LDkyLjI2NlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbWl0ZXJsaW1pdD1cIjRcIiBzdHJva2UtZGFzaGFycmF5PVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjZcIiBmaWxsPVwibm9uZVwiLz4nICtcbic8L3N2Zz4nO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG53aW5kb3cubWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhIHx8IHdpbmRvdy53ZWJraXRNYXRjaE1lZGlhIHx8IHdpbmRvdy5tb3pNYXRjaE1lZGlhIHx8IHdpbmRvdy5tc01hdGNoTWVkaWE7XG5cbnZhciBhcGkgPSByZXF1aXJlKCcuLi9jb3JlL2FwaScpLFxuICAgIF8gPSByZXF1aXJlKCcuLi90b29scy90b29scycpLFxuICAgIGNzc0hhY2sgPSByZXF1aXJlKCcuLi90b29scy9jc3MtaGFjaycpLFxuICAgIGFwbGF6YW1lVmVyc2lvbiA9IHJlcXVpcmUoJy4uLy4uLy50bXAvYXBsYXphbWUtdmVyc2lvbicpLFxuICAgIGlzTW9iaWxlID0gd2luZG93Lm1hdGNoTWVkaWEoJyggbWF4LXdpZHRoOiA3NjdweCApJyksXG4gICAgbGFzdFNjcm9sbFRvcDtcblxudmFyIHRtcE92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICBjc3NPdmVybGF5ID0gY3NzSGFjaygnb3ZlcmxheScpLFxuICAgIGNzc0JsdXIgPSBjc3NIYWNrKCdibHVyJyksXG4gICAgY3NzTW9kYWwgPSBjc3NIYWNrKCdtb2RhbCcpO1xuXG5mdW5jdGlvbiBtb2RhbCAoY29udGVudCwgb3B0aW9ucykge1xuXG4gIGlmKCBtb2RhbC5pZnJhbWUgKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbC5pZnJhbWUpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgY3NzT3ZlcmxheS5oYWNrKHRydWUpO1xuICBjc3NCbHVyLmhhY2sodHJ1ZSk7XG4gIGNzc01vZGFsLmhhY2sodHJ1ZSk7XG5cbiAgdG1wT3ZlcmxheS5jbGFzc05hbWUgPSAnYXBsYXphbWUtb3ZlcmxheSBhcGxhemFtZS1vdmVybGF5LXNob3cnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRtcE92ZXJsYXkpO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIF8uYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLWJsdXInKTtcbiAgfSwgMCk7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIF8ucmVtb3ZlQ2xhc3ModG1wT3ZlcmxheSwgJ2FwbGF6YW1lLW92ZXJsYXktc2hvdycpO1xuICB9LCBpc01vYmlsZS5tYXRjaGVzID8gMCA6IDYwMCApO1xuXG4gIG1vZGFsLmlmcmFtZSA9IF8uZ2V0SUZyYW1lKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50J1xuICAgICAgfSk7XG5cbiAgbW9kYWwuaWZyYW1lLmNsYXNzTmFtZSA9ICdhcGxhemFtZS1tb2RhbCc7XG4gIC8vIG1vZGFsLmlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBtb2RhbC5pZnJhbWUuY29udGVudCA9IGNvbnRlbnQ7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbC5pZnJhbWUpO1xuICBtb2RhbC5pZnJhbWUuc3JjID0gYXBpLnN0YXRpY1VybCArICd3aWRnZXRzL21vZGFsL21vZGFsLmh0bWw/dj0nICsgZW5jb2RlVVJJKGFwbGF6YW1lVmVyc2lvbik7XG59XG5cbl8ub25NZXNzYWdlKCdtb2RhbCcsIGZ1bmN0aW9uIChlLCBtZXNzYWdlKSB7XG5cbiAgc3dpdGNoKCBtZXNzYWdlLmV2ZW50ICkge1xuICAgIGNhc2UgJ29wZW4nOlxuICAgICAgbW9kYWwucmVmZXJyZXIgPSBlLnNvdXJjZTtcbiAgICAgIG1vZGFsLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgbW9kYWwobWVzc2FnZS5kYXRhKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ29wZW5pbmcnOlxuICAgICAgbW9kYWwuaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSBudWxsO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnb3BlbmVkJzpcbiAgICAgIGxhc3RTY3JvbGxUb3AgPSBfLnNjcm9sbFRvcCgpO1xuICAgICAgZS5zb3VyY2UucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBhcGxhemFtZTogJ21vZGFsJyxcbiAgICAgICAgZXZlbnQ6ICdjb250ZW50JyxcbiAgICAgICAgY29udGVudDogbW9kYWwuaWZyYW1lLmNvbnRlbnRcbiAgICAgIH0sICcqJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyZXNvbHZlZCc6XG4gICAgICBtb2RhbC5yZWZlcnJlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGFwbGF6YW1lOiAnbW9kYWwnLFxuICAgICAgICBldmVudDogJ3Jlc29sdmVkJyxcbiAgICAgICAgbmFtZTogbW9kYWwubWVzc2FnZS5uYW1lLFxuICAgICAgICB2YWx1ZTogbWVzc2FnZS52YWx1ZVxuICAgICAgfSwgJyonKTtcbiAgICAgIGRlbGV0ZSBtb2RhbC5yZWZlcnJlcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Nsb3NpbmcnOlxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IG1vZGFsLmlmcmFtZS5vdmVyZmxvdztcbiAgICAgIF8ucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLWJsdXInKTtcbiAgICAgIF8uYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2FwbGF6YW1lLXVuYmx1cicpO1xuICAgICAgXy5hZGRDbGFzcyh0bXBPdmVybGF5LCAnYXBsYXphbWUtb3ZlcmxheS1oaWRlJyk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3NzQmx1ci5oYWNrKGZhbHNlKTtcbiAgICAgICAgXy5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnYXBsYXphbWUtdW5ibHVyJyk7XG4gICAgICB9LCBpc01vYmlsZS5tYXRjaGVzID8gMCA6IDYwMCApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY2xvc2UnOlxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNzc01vZGFsLmhhY2soZmFsc2UpO1xuICAgICAgfSwgaXNNb2JpbGUubWF0Y2hlcyA/IDAgOiAxMDAgKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodG1wT3ZlcmxheSk7XG4gICAgICBfLnJlbW92ZUNsYXNzKHRtcE92ZXJsYXksICdhcGxhemFtZS1vdmVybGF5LWhpZGUnKTtcbiAgICAgIF8uc2Nyb2xsVG9wKGxhc3RTY3JvbGxUb3ApO1xuICAgICAgaWYoIG1vZGFsLmlmcmFtZSApIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChtb2RhbC5pZnJhbWUpO1xuXG4gICAgICAgIGlmKCBtb2RhbC5yZWZlcnJlciApIHtcbiAgICAgICAgICBtb2RhbC5yZWZlcnJlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICBhcGxhemFtZTogJ21vZGFsJyxcbiAgICAgICAgICAgIGV2ZW50OiAnZGlzbWlzcycsXG4gICAgICAgICAgICBuYW1lOiBtb2RhbC5tZXNzYWdlLm5hbWVcbiAgICAgICAgICB9LCAnKicpO1xuICAgICAgICAgIGRlbGV0ZSBtb2RhbC5yZWZlcnJlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCBtb2RhbC5tZXNzYWdlICkge1xuICAgICAgICAgIGRlbGV0ZSBtb2RhbC5tZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBtb2RhbC5pZnJhbWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb2RhbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwaUh0dHAgPSByZXF1aXJlKCcuLi9jb3JlL2FwaS1odHRwJyksXG4gICAgXyA9IHJlcXVpcmUoJy4uL3Rvb2xzL3Rvb2xzJyksXG4gICAgJHEgPSByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJyksXG4gICAgY2FjaGUgPSBbXSxcbiAgICByZXF1ZXN0c0NhY2hlID0ge307XG5cbmZ1bmN0aW9uIHNpbXVsYXRvciAoYW1vdW50LCBfb3B0aW9ucywgY2FsbGJhY2ssIG9uRXJyb3IpIHtcblxuICBpZiggXy5pc0Z1bmN0aW9uKF9vcHRpb25zKSApIHtcbiAgICBvbkVycm9yID0gY2FsbGJhY2s7XG4gICAgY2FsbGJhY2sgPSBfb3B0aW9ucztcbiAgICBfb3B0aW9ucyA9IHt9O1xuICB9IGVsc2Uge1xuICAgIF9vcHRpb25zID0gX29wdGlvbnMgfHwge307XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgYW1vdW50OiBhbW91bnRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGhhc2ggPSBhbW91bnQgKyAnLCcgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zKTtcblxuICBpZiggcmVxdWVzdHNDYWNoZVtoYXNoXSApIHtcbiAgICByZXR1cm4gcmVxdWVzdHNDYWNoZVtoYXNoXS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIChjYWxsYmFjayB8fCBfLm5vb3ApKCByZXN1bHQuY2hvaWNlcywgcmVzdWx0Lm9wdGlvbnMgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmKCBfb3B0aW9ucy52aWV3ICkge1xuICAgIG9wdGlvbnMucGFyYW1zLnZpZXcgPSBfb3B0aW9ucy52aWV3O1xuICB9XG4gIGlmKCBfb3B0aW9ucy5wYXlkYXkgKSB7XG4gICAgb3B0aW9ucy5wYXJhbXMucGF5ZGF5ID0gX29wdGlvbnMucGF5ZGF5O1xuICB9XG4gIGlmKCBfb3B0aW9ucy5wdWJsaWNLZXkgKSB7XG4gICAgb3B0aW9ucy5wdWJsaWNLZXkgPSBfb3B0aW9ucy5wdWJsaWNLZXk7XG4gIH1cblxuICB2YXIgZm91bmRDYWNoZWQgPSBfLmZpbmQoY2FjaGUsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW0uYW1vdW50ID09PSBhbW91bnQ7XG4gIH0pO1xuXG4gIHJlcXVlc3RzQ2FjaGVbaGFzaF0gPSAoICFfb3B0aW9ucy5ub0NhY2hlICYmIGZvdW5kQ2FjaGVkID8gJHEucmVzb2x2ZShmb3VuZENhY2hlZCkgOiBhcGlIdHRwLmdldCgnaW5zdGFsbWVudC1wbGFuLXNpbXVsYXRvcicsIG9wdGlvbnMgKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgYW1vdW50OiBhbW91bnQsXG4gICAgICAgIGNob2ljZXM6IHJlc3BvbnNlLmRhdGEuY2hvaWNlc1swXS5pbnN0YWxtZW50cyxcbiAgICAgICAgb3B0aW9uczogcmVzcG9uc2UuZGF0YS5vcHRpb25zLFxuICAgICAgICByZXNwb25zZTogcmVzcG9uc2VcbiAgICAgIH07XG4gICAgICBjYWNoZS5wdXNoKHJlc3VsdCk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSkgKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIChjYWxsYmFjayB8fCBfLm5vb3ApKCByZXN1bHQuY2hvaWNlcywgcmVzdWx0Lm9wdGlvbnMgKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBpZiggcmVzcG9uc2Uuc3RhdHVzID09PSA0MDMgKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FwbGF6YW1lOiBQZXJtaXNvIGRlbmVnYWRvIHVzYW5kbyBsYSBjbGF2ZSBww7pibGljYTogJyArIHJlc3BvbnNlLmNvbmZpZy5wdWJsaWNLZXkpO1xuICAgICAgICBjb25zb2xlLmluZm8oJ1JldmlzYSBsYSBjb25maWd1cmFjacOzbiBkZSBBcGxhemFtZSwgcGFyYSBjdWFscXVpZXIgZHVkYSBwdWVkZXMgZXNjcmliaXIgYSBob2xhQGFwbGF6YW1lLmNvbScpO1xuICAgICAgfSBlbHNlIGlmKCBfLmtleShyZXNwb25zZSwgJ2RhdGEuZXJyb3IuZmllbGRzLmFtb3VudC4wJykgKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FwbGF6YW1lOiAnICsgcmVzcG9uc2UuZGF0YS5lcnJvci5maWVsZHMuYW1vdW50WzBdKTtcbiAgICAgIH0gZWxzZSBpZiggXy5rZXkocmVzcG9uc2UsICdkYXRhLmVycm9yLm1lc3NhZ2UnKSApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQXBsYXphbWU6ICcgKyByZXNwb25zZS5kYXRhLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgKG9uRXJyb3IgfHwgXy5ub29wKShyZXNwb25zZSk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHJlcXVlc3RzQ2FjaGVbaGFzaF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2ltdWxhdG9yO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXB6VmVyc2lvbiA9IHJlcXVpcmUoJy4uLy4uLy50bXAvYXBsYXphbWUtdmVyc2lvbicpLFxuICAgIF8gPSByZXF1aXJlKCcuLi90b29scy90b29scycpLFxuICAgIGFwaSA9IHJlcXVpcmUoJy4vYXBpJyksXG4gICAgaHR0cCA9IHJlcXVpcmUoJ2h0dHAtYnJvd3NlcicpLFxuICAgIHJlbmRlckFjY2VwdCA9IF8udGVtcGxhdGUuY29tcGlsZSgnYXBwbGljYXRpb24vdm5kLmFwbGF6YW1lPCUgaWYoc2FuZGJveCl7ICU+LnNhbmRib3g8JSB9ICU+LnY8JT0gdmVyc2lvbiAlPitqc29uJyksXG4gICAgYWNjZXB0SGVhZGVyID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgdmFyIF9hcGkgPSBfLmNvcHkoYXBpKTtcbiAgICAgIGlmKCAndmVyc2lvbicgaW4gY29uZmlnIHx8ICdhcGlWZXJzaW9uJyBpbiBjb25maWcgKSB7XG4gICAgICAgIF9hcGkudmVyc2lvbiA9ICd2ZXJzaW9uJyBpbiBjb25maWcgPyBjb25maWcudmVyc2lvbiA6IGNvbmZpZy5hcGlWZXJzaW9uO1xuICAgICAgfVxuICAgICAgaWYoICdzYW5kYm94JyBpbiBjb25maWcgKSB7XG4gICAgICAgIF9hcGkuc2FuZGJveCA9IGNvbmZpZy5zYW5kYm94O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlbmRlckFjY2VwdChfYXBpKTtcbiAgICB9LFxuICAgIGF1dGhvcml6YXRpb25IZWFkZXIgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICBjb25maWcucHVibGljS2V5ID0gY29uZmlnLnB1YmxpY0tleSB8fCBhcGkucHVibGljS2V5O1xuICAgICAgcmV0dXJuICdCZWFyZXIgJyArIGNvbmZpZy5wdWJsaWNLZXk7XG4gICAgfTtcblxudmFyIGFwaUh0dHAgPSB7fTtcblxuXy5lYWNoKFsnZ2V0JywgJ2RlbGV0ZSddLCBmdW5jdGlvbiAobWV0aG9kKSB7XG4gIGFwaUh0dHBbbWV0aG9kXSA9IGZ1bmN0aW9uIChwYXRoLCBvcHRpb25zKSB7XG4gICAgdmFyIHVybCA9IF8uam9pblBhdGgoYXBpLmhvc3QsIHBhdGgpO1xuICAgIHJldHVybiBodHRwW21ldGhvZF0odXJsLCBfLm1lcmdlKG9wdGlvbnMsIHsgaGVhZGVyczoge1xuICAgICAgICB4QWpzVmVyc2lvbjogYXB6VmVyc2lvbixcbiAgICAgICAgYWNjZXB0OiBhY2NlcHRIZWFkZXIsXG4gICAgICAgIGF1dGhvcml6YXRpb246IGF1dGhvcml6YXRpb25IZWFkZXJcbiAgICAgIH0gfSkgKTtcbiAgfTtcbn0pO1xuXG5fLmVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiAobWV0aG9kKSB7XG4gIGFwaUh0dHBbbWV0aG9kXSA9IGZ1bmN0aW9uIChwYXRoLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgdmFyIHVybCA9IF8uam9pblBhdGgoYXBpLmhvc3QsIHBhdGgpO1xuICAgIHJldHVybiBodHRwW21ldGhvZF0odXJsLCBkYXRhLCBfLm1lcmdlKG9wdGlvbnMsIHsgaGVhZGVyczoge1xuICAgICAgICB4QWpzVmVyc2lvbjogYXB6VmVyc2lvbixcbiAgICAgICAgYWNjZXB0OiBhY2NlcHRIZWFkZXIsXG4gICAgICAgIGF1dGhvcml6YXRpb246IGF1dGhvcml6YXRpb25IZWFkZXJcbiAgICAgIH0gfSkgKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFwaUh0dHA7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBob3N0OiAnaHR0cHM6Ly9hcGkuYXBsYXphbWUuY29tLycsXG4gIC8vIGhvc3Q6ICdodHRwczovL2FwaS5hcGxhemFtZS5jb20vJyxcbiAgc3RhdGljVXJsOiAnaHR0cHM6Ly9hcGxhemFtZS5jb20vc3RhdGljLycsXG4gIHZlcnNpb246IDEsXG4gIGNoZWNrb3V0VmVyc2lvbjogMSxcbiAgc2FuZGJveDogZmFsc2Vcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBfOiByZXF1aXJlKCcuLi90b29scy90b29scycpLFxuICBpbml0OiByZXF1aXJlKCcuL2luaXQnKSxcbiAgYXBpR2V0OiByZXF1aXJlKCcuL2FwaS1odHRwJykuZ2V0LFxuICBhcGlQb3N0OiByZXF1aXJlKCcuL2FwaS1odHRwJykucG9zdCxcbiAgYXBpRGVsZXRlOiByZXF1aXJlKCcuL2FwaS1odHRwJylbJ2RlbGV0ZSddLFxuICBhcGlQdXQ6IHJlcXVpcmUoJy4vYXBpLWh0dHAnKS5wdXQsXG4gIHZlcnNpb246IHJlcXVpcmUoJy4uLy4uLy50bXAvYXBsYXphbWUtdmVyc2lvbicpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXBpID0gcmVxdWlyZSgnLi9hcGknKSxcbiAgICBfID0gcmVxdWlyZSgnLi4vdG9vbHMvdG9vbHMnKTtcblxuZnVuY3Rpb24gaW5pdCAob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiggdHlwZW9mIG9wdGlvbnMudmVyc2lvbiA9PT0gJ3N0cmluZycgKSB7XG4gICAgdmFyIG1hdGNoVmVyc2lvbiA9IG9wdGlvbnMudmVyc2lvbi5tYXRjaCgvXnY/KFxcZCkoXFwuKFxcZCkpPyQvKTtcblxuICAgIGlmKCAhbWF0Y2hWZXJzaW9uICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd2ZXJzaW9uIG1pc21hdGNoLCBzaG91bGQgYmUgbGlrZSBcXCd2MS4yXFwnJyk7XG4gICAgfVxuXG4gICAgb3B0aW9ucy52ZXJzaW9uID0gTnVtYmVyKG1hdGNoVmVyc2lvblsxXSk7XG5cbiAgICBpZiggbWF0Y2hWZXJzaW9uWzNdICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICBvcHRpb25zLmNoZWNrb3V0VmVyc2lvbiA9IE51bWJlcihtYXRjaFZlcnNpb25bM10pO1xuICAgIH1cbiAgfVxuXG4gIGlmKCB0eXBlb2Ygb3B0aW9ucy5zYW5kYm94ID09PSAnc3RyaW5nJyApIHtcbiAgICBvcHRpb25zLnNhbmRib3ggPSBvcHRpb25zLnNhbmRib3ggPT09ICd0cnVlJztcbiAgfVxuXG4gIGlmKCB0eXBlb2Ygb3B0aW9ucy5hbmFseXRpY3MgPT09ICdzdHJpbmcnICkge1xuICAgIG9wdGlvbnMuYW5hbHl0aWNzID0gb3B0aW9ucy5hbmFseXRpY3MgPT09ICd0cnVlJztcbiAgfVxuXG4gIF8uZXh0ZW5kKGFwaSwgb3B0aW9ucyk7XG5cbiAgXy5sb2coJ2FwbGF6YW1lLmluaXQnLCBhcGkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFwbGF6YW1lKSB7XG5cbiAgdmFyIF8gPSBhcGxhemFtZS5fLFxuICAgICAgc2NyaXB0ID0gXy5jdXJyZW50U2NyaXB0LFxuICAgICAgZGF0YUFwbGF6YW1lID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1hcGxhemFtZScpLFxuICAgICAgb3B0aW9ucyA9IHNjcmlwdC5zcmMgJiYgKC9cXD8vLnRlc3Qoc2NyaXB0LnNyYykgPyBfLmRlc2VyaWFsaXplKHNjcmlwdC5zcmMubWF0Y2goLyguKj8pXFw/KC4qKS8pWzJdKSA6IHt9KSB8fCB7fTtcblxuICBpZiggb3B0aW9ucy5zYW5kYm94ICkge1xuICAgIG9wdGlvbnMuc2FuZGJveCA9IG9wdGlvbnMuc2FuZGJveCA9PT0gJ3RydWUnIHx8IG9wdGlvbnMuc2FuZGJveCA9PT0gJzEnO1xuICB9XG5cbiAgaWYoIGRhdGFBcGxhemFtZSApIHtcblxuICAgIGlmKCAvXFw6Ly50ZXN0KGRhdGFBcGxhemFtZSkgKSB7XG4gICAgICBkYXRhQXBsYXphbWUuc3BsaXQoJywnKS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJ0KSB7XG4gICAgICAgIHZhciBrZXlzID0gcGFydC5tYXRjaCgvXihbXlxcOl0rKVxcOiguKikvKTtcbiAgICAgICAgb3B0aW9uc1trZXlzWzFdLnRyaW0oKV0gPSBrZXlzWzJdLnRyaW0oKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiggIW9wdGlvbnMucHVibGljS2V5ICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3B1YmxpY0tleSBtaXNzaW5nIGluIGRhdGEtYXBsYXphbWUnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5wdWJsaWNLZXkgPSBkYXRhQXBsYXphbWU7XG4gICAgfVxuXG4gICAgaWYoIHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXBpLWhvc3QnKSApIHtcbiAgICAgIG9wdGlvbnMuaG9zdCA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXBpLWhvc3QnKTtcbiAgICB9XG5cbiAgICBpZiggc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS12ZXJzaW9uJykgKSB7XG4gICAgICBvcHRpb25zLnZlcnNpb24gPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLXZlcnNpb24nKTtcbiAgICB9XG5cbiAgICBpZiggc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1zYW5kYm94JykgKSB7XG4gICAgICBvcHRpb25zLnNhbmRib3ggPSBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLXNhbmRib3gnKTtcbiAgICB9XG5cbiAgICBpZiggc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1hbmFseXRpY3MnKSApIHtcbiAgICAgIG9wdGlvbnMuYW5hbHl0aWNzID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1hbmFseXRpY3MnKTtcbiAgICB9XG5cbiAgICBpZiggc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGF0aWMtdXJsJykgKSB7XG4gICAgICBvcHRpb25zLnN0YXRpY1VybCA9IHNjcmlwdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGljLXVybCcpO1xuICAgIH1cblxuICAgIGlmKCBzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWNhbGxiYWNrJykgKSB7XG4gICAgICAvLyBpZiggdHlwZW9mIGdsb2JhbFtzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWNhbGxiYWNrJyldICE9PSAnZnVuY3Rpb24nICkge1xuICAgICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIHNob3VsZCBiZSBhIGdsb2JhbCBmdW5jdGlvbicpO1xuICAgICAgLy8gfVxuXG4gICAgICBvcHRpb25zLmNhbGxiYWNrID0gc2NyaXB0LmdldEF0dHJpYnV0ZSgnZGF0YS1jYWxsYmFjaycpO1xuICAgICAgLy8gXy5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAvLyAgIGdsb2JhbFtzY3JpcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWNhbGxiYWNrJyldKGFwbGF6YW1lKTtcbiAgICAgIC8vIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFwbGF6YW1lLmluaXQob3B0aW9ucyk7XG5cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFwbGF6YW1lKSB7XG4gIHZhciBfID0gYXBsYXphbWUuXyxcbiAgICAgICRxID0gcmVxdWlyZSgncS1wcm9taXNlL25vLW5hdGl2ZScpO1xuXG4gIGZ1bmN0aW9uIGJ1dHRvbnNMb29rdXAgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50ID0gZWxlbWVudCB8fCBkb2N1bWVudDtcbiAgICBpZiggIWVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGJ0bnMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFwbGF6YW1lLWJ1dHRvbl0nKTtcblxuICAgIGlmKCBidG5zLmxlbmd0aCApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcuYnRuKHMpJywgYnRucyk7XG4gICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcblxuICAgICAgXy5lYWNoKGJ0bnMsIGZ1bmN0aW9uIChidG4pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJy5idG4nLCBhcmd1bWVudHMsIGJ0bnMpO1xuICAgICAgICB2YXIgYnRuSWQgPSBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFwbGF6YW1lLWJ1dHRvbicpLFxuICAgICAgICAgICAgYnRuUGFyYW1zID0ge1xuICAgICAgICAgICAgICBzZWxlY3RvcjogJ1tkYXRhLWFwbGF6YW1lLWJ1dHRvbicgKyAoIGJ0bklkID8gKCc9XFxcIicgKyBidG5JZCArICdcXFwiJykgOiAnJyApICsgJ10sIFtkYXRhLWFwbGF6YW1lLWJ1dHRvbi1pbmZvJyArICggYnRuSWQgPyAoJz1cXFwiJyArIGJ0bklkICsgJ1xcXCInKSA6ICcnICkgKyAnXScsXG4gICAgICAgICAgICAgIHBhcmVudDogYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJlbnQnKSxcbiAgICAgICAgICAgICAgcHVibGljS2V5OiBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXB1YmxpYy1rZXknKSxcbiAgICAgICAgICAgICAgYW1vdW50OiBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWFtb3VudCcpLFxuICAgICAgICAgICAgICBjdXJyZW5jeTogYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1jdXJyZW5jeScpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgc2FuZGJveDogYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS1zYW5kYm94JykgPyBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLXNhbmRib3gnKSA9PT0gJ3RydWUnIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBjb3VudHJ5OiBidG4uZ2V0QXR0cmlidXRlKCdkYXRhLWNvdW50cnknKSB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgcHJvbWlzZXMucHVzaCggYXBsYXphbWUuYnV0dG9uKGJ0blBhcmFtcykgKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiggcHJvbWlzZXMubGVuZ3RoICkge1xuICAgICAgICByZXR1cm4gJHEuYWxsKHByb21pc2VzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAkcS5yZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkcS5yZXNvbHZlKCk7XG4gICAgfVxuICB9XG5cbiAgXy5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgYnV0dG9uc0xvb2t1cCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgXy5saXZlRE9NLnN1YnNjcmliZShidXR0b25zTG9va3VwKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGJ1dHRvbnNMb29rdXA7XG5cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFwbGF6YW1lKSB7XG5cbiAgdmFyIF8gPSBhcGxhemFtZS5fLFxuICAgICAgJHEgPSByZXF1aXJlKCdxLXByb21pc2Uvbm8tbmF0aXZlJyksXG4gICAgICBFdmVudHMgPSByZXF1aXJlKCdldmVudHMtd3JhcHBlcicpLFxuICAgICAgYXBpID0gcmVxdWlyZSgnLi4vY29yZS9hcGknKSxcbiAgICAgIGlzTW9iaWxlID0gd2luZG93Lm1hdGNoTWVkaWEoJyggbWF4LXdpZHRoOiA3NjdweCApJyksXG4gICAgICBlYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG5cbiAgZnVuY3Rpb24gZ2V0UXR5IChxdHlTZWxlY3Rvcikge1xuICAgIGlmKCAhXy5pc1N0cmluZyhxdHlTZWxlY3RvcikgKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ3dhcm5pbmc6IGRhdGEtcXR5IHNob3VsZCBiZSBhbiBzdHJpbmcuIHBlOiBmb3JtI2FydGljbGUgLmZpbmFsLXByaWNlICcpO1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHZhciBxdHlFbGVtZW50O1xuICAgIHRyeSB7XG4gICAgICBxdHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihxdHlTZWxlY3Rvcik7XG4gICAgfSBjYXRjaChlcnIpIHtcbiAgICAgIGNvbnNvbGUud2FybihlcnIubWVzc2FnZSArICdcXG5kYXRhLXF0eSBzaG91bGQgYmUgYW4gc3RyaW5nLiBwZTogZm9ybSNhcnRpY2xlIC5maW5hbC1wcmljZSAnKTtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHN3aXRjaCggcXR5RWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICkge1xuICAgICAgY2FzZSAnaW5wdXQnOlxuICAgICAgICByZXR1cm4gTnVtYmVyKCBxdHlFbGVtZW50LnZhbHVlICk7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICByZXR1cm4gTnVtYmVyKCBxdHlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvbltzZWxlY3RlZF0nKS52YWx1ZSApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIE51bWJlciggcXR5RWxlbWVudC50ZXh0Q29udGVudC50cmltKCkgKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY21zUHJpY2VTZWxlY3RvciA9IFtcbiAgICAnZm9ybSNwcm9kdWN0X2FkZHRvY2FydF9mb3JtIC5zcGVjaWFsLXByaWNlIC5wcmljZScsIC8vIG1hZ2VudG9cbiAgICAnZm9ybSNwcm9kdWN0X2FkZHRvY2FydF9mb3JtIC5yZWd1bGFyLXByaWNlIC5wcmljZScsIC8vIG1hZ2VudG9cbiAgICAnI3Byb2R1Y3QtaW5mbyAuc3BlY2lhbC1wcmljZSAucHJpY2UnLCAvLyBtYWdlbnRvXG4gICAgJyNwcm9kdWN0LWluZm8gLnJlZ3VsYXItcHJpY2UgLnByaWNlJywgLy8gbWFnZW50b1xuICAgICdmb3JtI2J1eV9ibG9jayAjb3VyX3ByaWNlX2Rpc3BsYXknLCAvLyBwcmVzdGFzaG9wXG4gICAgJyNtYWluIFtpdGVtdHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL1Byb2R1Y3RcIl0gW2l0ZW10eXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvT2ZmZXJcIl0gLnByaWNlIGlucyAuYW1vdW50JywgLy8gd29vY29tbWVyY2VcbiAgICAnI21haW4gW2l0ZW10eXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvUHJvZHVjdFwiXSBbaXRlbXR5cGU9XCJodHRwOi8vc2NoZW1hLm9yZy9PZmZlclwiXSAucHJpY2UgLmFtb3VudCcsIC8vIHdvb2NvbW1lcmNlXG4gICAgJ1tpdGVtdHlwZT1cImh0dHA6Ly9zY2hlbWEub3JnL1Byb2R1Y3RcIl0gW2l0ZW10eXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvT2ZmZXJcIl0gW2l0ZW1wcm9wPVwicHJpY2VcIl0nIC8vIFNjaGVtYS5vcmdcbiAgXSxcbiAgY21zUXR5U2VsZWN0b3IgPSBbXG4gICAgJ2Zvcm0jcHJvZHVjdF9hZGR0b2NhcnRfZm9ybSBpbnB1dFtuYW1lPVwicXR5XCJdJywgLy8gbWFnZW50b1xuICAgICdmb3JtI2J1eV9ibG9jayBpbnB1dFtuYW1lPVwicXR5XCJdJywgLy8gcHJlc3Rhc2hvcFxuICAgICcjcXVhbnRpdHlfd2FudGVkJywgLy8gcHJlc3Rhc2hvcFxuICAgICdmb3JtI3Byb2R1Y3Qtb3B0aW9ucy1mb3JtIGJ1dHRvbltkYXRhLWlkPXF0eV0nLCAvLyBjdXN0b21cbiAgICAnI21haW4gW2l0ZW10eXBlPVwiaHR0cDovL3NjaGVtYS5vcmcvUHJvZHVjdFwiXSBmb3JtLmNhcnQgaW5wdXRbbmFtZT1cInF1YW50aXR5XCJdJyAvLyB3b29jb21tZXJjZVxuICBdO1xuXG4gIGZ1bmN0aW9uIG1hdGNoU2VsZWN0b3IgKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG5cbiAgZnVuY3Rpb24gYW1vdW50R2V0dGVyICh3aWRnZXRFbGVtZW50KSB7XG4gICAgdmFyIHByaWNlU2VsZWN0b3IgPSB3aWRnZXRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wcmljZScpLFxuICAgICAgICBxdHlTZWxlY3RvciA9IHdpZGdldEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXF0eScpLFxuICAgICAgICBhdXRvRGlzY292ZXJlZCA9IGZhbHNlO1xuXG4gICAgaWYoIHByaWNlU2VsZWN0b3IgKSB7XG4gICAgICAvLyB0cnl7XG4gICAgICAvLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJpY2VTZWxlY3Rvcik7XG4gICAgICAvLyB9IGNhdGNoKGVycikge1xuICAgICAgLy8gICBwcmljZVNlbGVjdG9yID0gbnVsbDtcbiAgICAgIC8vICAgY29uc29sZS53YXJuKGVyci5tZXNzYWdlKTtcbiAgICAgIC8vIH1cbiAgICAgIGlmKCBxdHlTZWxlY3RvciApIHtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXR5U2VsZWN0b3IpO1xuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgIHF0eVNlbGVjdG9yID0gbnVsbDtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHByaWNlU2VsZWN0b3IgPSBfLmZpbmQoY21zUHJpY2VTZWxlY3RvciwgbWF0Y2hTZWxlY3Rvcik7XG5cbiAgICAgIGlmKCBwcmljZVNlbGVjdG9yICkge1xuICAgICAgICBxdHlTZWxlY3RvciA9IF8uZmluZChjbXNRdHlTZWxlY3RvciwgbWF0Y2hTZWxlY3Rvcik7XG4gICAgICAgIGF1dG9EaXNjb3ZlcmVkID0gdHJ1ZTtcblxuICAgICAgICBfLmxvZygnYXV0by1kaXNjb3ZlcmVkIHByaWNlIHNlbGVjdG9yJywgcHJpY2VTZWxlY3RvciwgcXR5U2VsZWN0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBnZXR0ZXIgPSBwcmljZVNlbGVjdG9yID8gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHF0eSA9IHF0eVNlbGVjdG9yID8gZ2V0UXR5KCBxdHlTZWxlY3RvciApIDogMSwgcHJpY2VFbGVtZW50O1xuICAgICAgdHJ5IHtcbiAgICAgICAgcHJpY2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggcHJpY2VTZWxlY3RvciApO1xuICAgICAgfSBjYXRjaChlcnIpIHt9XG5cbiAgICAgIHZhciBhbW91bnQgPSBwcmljZUVsZW1lbnQgPyBwcmljZUVsZW1lbnQudmFsdWUgOiAnMCc7XG5cbiAgICAgIGlmKCB0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJyApIHtcbiAgICAgICAgaWYoICEvXFxkK1ssLl1cXGQrLy50ZXN0KHByaWNlRWxlbWVudC50ZXh0Q29udGVudCkgJiYgcHJpY2VFbGVtZW50LmNoaWxkcmVuICYmIHByaWNlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggKSB7XG4gICAgICAgICAgYW1vdW50ID0gJyc7XG5cbiAgICAgICAgICB2YXIgcGFydCA9IHByaWNlRWxlbWVudC5maXJzdENoaWxkLCBtYXRjaGVkO1xuXG4gICAgICAgICAgd2hpbGUoIHBhcnQgKSB7XG4gICAgICAgICAgICBpZiggL1ssLl0vLnRlc3QoYW1vdW50KSApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2hlZCA9ICggcGFydC50b1N0cmluZygpID09PSAnW29iamVjdCBUZXh0XScgPyBwYXJ0LmRhdGEgOiBwYXJ0LnRleHRDb250ZW50ICkubWF0Y2goL1tcXGQsLl0rLyk7XG5cbiAgICAgICAgICAgIGlmKCBtYXRjaGVkICkge1xuICAgICAgICAgICAgICBhbW91bnQgKz0gKGFtb3VudCAmJiAhL15bLC5dLy50ZXN0KG1hdGNoZWRbMF0pID8gJy4nIDogJycpICsgbWF0Y2hlZFswXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFydCA9IHBhcnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYoIHByaWNlRWxlbWVudC50ZXh0Q29udGVudCApIHtcbiAgICAgICAgICBhbW91bnQgPSBwcmljZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgIH0gZWxzZSBpZiggcHJpY2VFbGVtZW50LmdldEF0dHJpYnV0ZSgnY29udGVudCcpICkge1xuICAgICAgICAgIGFtb3VudCA9IHByaWNlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gXy5wYXJzZVByaWNlKCBhbW91bnQgKTtcbiAgICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgLy8gcmV0dXJuIE51bWJlciggd2lkZ2V0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYW1vdW50JykgKTtcbiAgICAgIHJldHVybjtcbiAgICB9O1xuXG4gICAgZ2V0dGVyLnByaWNlU2VsZWN0b3IgPSBwcmljZVNlbGVjdG9yO1xuICAgIGdldHRlci5xdHlTZWxlY3RvciA9IHF0eVNlbGVjdG9yO1xuICAgIGdldHRlci5hdXRvRGlzY292ZXJlZCA9IGF1dG9EaXNjb3ZlcmVkO1xuXG4gICAgcmV0dXJuIGdldHRlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIElmcmFtZSAodXJsKSB7XG4gICAgdmFyIGVsID0gXy5nZXRJRnJhbWUoeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc0MHB4JyB9KSxcbiAgICAgICAgaWZyYW1lID0gdGhpcztcbiAgICB0aGlzLmVsID0gZWw7XG4gICAgdGhpcy5lbC5zcmMgPSB1cmw7XG5cbiAgICBuZXcgRXZlbnRzICh0aGlzKTtcblxuICAgIHRoaXMub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy50cmlnZ2VyKCdsb2FkJywgbnVsbCwgdGhpcyk7XG4gICAgfTtcblxuICAgIF8ub25NZXNzYWdlKCdzaW11bGF0b3InLCBmdW5jdGlvbiAoZSwgbWVzc2FnZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ21lc3NhZ2Uuc2ltdWxhdG9yJywgZSwgbWVzc2FnZSk7XG4gICAgICBpZiggZS5zb3VyY2UgPT09IGVsLmNvbnRlbnRXaW5kb3cgKSB7XG4gICAgICAgIGlmcmFtZS50cmlnZ2VyKCdtZXNzYWdlOicgKyBtZXNzYWdlLmV2ZW50LCBbbWVzc2FnZV0sIHRoaXMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vbignbWVzc2FnZTpyZXNpemUnLCBmdW5jdGlvbiAoZSwgbWVzc2FnZSkge1xuICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gbWVzc2FnZS5oZWlnaHQgKyAncHgnO1xuICAgIH0pO1xuICB9XG5cbiAgSWZyYW1lLnByb3RvdHlwZS5tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciBfZGF0YSA9IF8uZXh0ZW5kKHtcbiAgICAgIGFwbGF6YW1lOiAnc2ltdWxhdG9yJyxcbiAgICAgIGV2ZW50OiBldmVudE5hbWUsXG4gICAgICBtb2JpbGU6IGlzTW9iaWxlLm1hdGNoZXNcbiAgICB9LCBkYXRhIHx8IHt9KTtcbiAgICBpZiggdGhpcy5lbC5jb250ZW50V2luZG93ICkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2lmcmFtZSBtZXNzYWdlJywgZXZlbnROYW1lLCBfZGF0YSwgdGhpcyk7XG4gICAgICB0aGlzLmVsLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoX2RhdGEsICcqJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignaWZyYW1lIGNvbnRlbnRXaW5kb3cgbWlzc2luZycsIHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBtYXhJbnN0YWxtZW50cyAocHJldiwgY2hvaWNlKSB7XG4gICAgaWYoIHByZXYgPT09IG51bGwgKSB7XG4gICAgICByZXR1cm4gY2hvaWNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY2hvaWNlLm51bV9pbnN0YWxtZW50cyA+IHByZXYubnVtX2luc3RhbG1lbnRzID8gY2hvaWNlIDogcHJldjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRXaWRnZXQgKG1ldGEpIHtcbiAgICBpZiggIW1ldGEub3B0aW9ucy53aWRnZXQgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZ2V0V2lkZ2V0LnNlcmlhbCA9IGdldFdpZGdldC5zZXJpYWwgPyBnZXRXaWRnZXQuc2VyaWFsICsgMSA6IDE7XG5cbiAgICB2YXIgd2lkZ2V0LFxuICAgICAgICBpZCA9IGdldFdpZGdldC5zZXJpYWw7XG5cbiAgICBpZiggbWV0YS5vcHRpb25zLndpZGdldC50eXBlID09PSAnYnV0dG9uJyApIHtcbiAgICAgIHdpZGdldCA9IG5ldyBJZnJhbWUoIGFwaS5zdGF0aWNVcmwgKyAnd2lkZ2V0cy9zaW11bGF0b3Ivc2ltdWxhdG9yLmh0bWw/JyArIERhdGUubm93KCkgKyAnJnNpbXVsYXRvcj0nICsgaWQgKTtcblxuICAgICAgd2lkZ2V0Lm9uKCdtZXNzYWdlOnJlcXVpcmUuY2hvaWNlcyBjaG9pY2VzLnVwZGF0ZScsIGZ1bmN0aW9uIChlLCBtZXNzYWdlKSB7XG4gICAgICAgIGlmKCBtZXNzYWdlICYmIG1lc3NhZ2Uuc2ltdWxhdG9ySWQgJiYgbWVzc2FnZS5zaW11bGF0b3JJZCAhPT0gaWQgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUsIG1ldGEsIG1lc3NhZ2UpO1xuICAgICAgICB3aWRnZXQubWVzc2FnZSgnY2hvaWNlcycsIHtcbiAgICAgICAgICBhbW91bnQ6IG1ldGEuYW1vdW50LFxuICAgICAgICAgIGNob2ljZTogbWV0YS5jaG9pY2VzLnJlZHVjZShtYXhJbnN0YWxtZW50cywgbnVsbCksXG4gICAgICAgICAgY2hvaWNlczogbWV0YS5jaG9pY2VzLFxuICAgICAgICAgIG9wdGlvbnM6IG1ldGEub3B0aW9uc1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB3aWRnZXQub24oJ2Nob2ljZXMudXBkYXRpbmcnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB3aWRnZXQubWVzc2FnZSgnbG9hZGluZycpO1xuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgXy50ZW1wbGF0ZS5wdXQoJ3dpZGdldC1yYXcnLCByZXF1aXJlKCcuLi8uLi8udG1wL3NpbXVsYXRvci90ZW1wbGF0ZXMvd2lkZ2V0LXJhdycpICk7XG4gICAgICB3aWRnZXQgPSB7IGVsOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSB9O1xuICAgICAgbmV3IEV2ZW50cyh3aWRnZXQpO1xuXG4gICAgICB3aWRnZXQuZWwuaW5uZXJIVE1MID0gXy50ZW1wbGF0ZSgnd2lkZ2V0LXJhdycsIHtcbiAgICAgICAgZ2V0QW1vdW50OiBfLmdldEFtb3VudCxcbiAgICAgICAgYW1vdW50OiBtZXRhLmFtb3VudCxcbiAgICAgICAgY2hvaWNlOiBtZXRhLmNob2ljZXMucmVkdWNlKG1heEluc3RhbG1lbnRzLCBudWxsKSxcbiAgICAgICAgY2hvaWNlczogbWV0YS5jaG9pY2VzLFxuICAgICAgICBvcHRpb25zOiBtZXRhLm9wdGlvbnNcbiAgICAgIH0pO1xuXG4gICAgICB3aWRnZXQuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgYXBsYXphbWU6ICdtb2RhbCcsXG4gICAgICAgICAgZXZlbnQ6ICdvcGVuJyxcbiAgICAgICAgICBuYW1lOiAnaW5zdGFsbWVudHMnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHNpemU6ICdsZycsXG4gICAgICAgICAgICBjYXJkOiB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ21vZGFsLWluc3RhbG1lbnRzLWluZm8nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IF8udGVtcGxhdGUuY29tcGlsZSggcmVxdWlyZSgnLi4vLi4vLnRtcC9zaW11bGF0b3IvdGVtcGxhdGVzL21vZGFsLWluc3RhbG1lbnRzJykgKSh7XG4gICAgICAgICAgICAgIHNlbGVjdGVkQ2hvaWNlOiBtZXRhLmNob2ljZXMucmVkdWNlKG1heEluc3RhbG1lbnRzLCBudWxsKSxcbiAgICAgICAgICAgICAgY2hvaWNlczogbWV0YS5jaG9pY2VzLFxuICAgICAgICAgICAgICBnZXRBbW91bnQ6IF8uZ2V0QW1vdW50LFxuICAgICAgICAgICAgICBtb250aHM6IGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG0gPiAxID8gJ21lc2VzJyA6ICdtZXMnO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgJyonKTtcblxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2lkZ2V0LmlkID0gaWQ7XG5cbiAgICByZXR1cm4gd2lkZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VXaWRnZXQgKHdpZGdldCwgd2lkZ2V0V3JhcHBlciwgc2VsZWN0b3IpIHtcbiAgICBpZiggIXNlbGVjdG9yICkge1xuICAgICAgd2lkZ2V0V3JhcHBlci5hcHBlbmRDaGlsZCh3aWRnZXQuZWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwc2V1ZG9Mb2NhdG9yO1xuICAgIHNlbGVjdG9yID0gc2VsZWN0b3IudHJpbSgpLnJlcGxhY2UoLzooXFx3Kz8pJC8sIGZ1bmN0aW9uIChtYXRjaGVkLCBsb2NhdG9yKSB7XG4gICAgICBwc2V1ZG9Mb2NhdG9yID0gbG9jYXRvcjtcbiAgICAgIHJldHVybiAnJztcbiAgICB9KTtcblxuICAgIHZhciBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmKCBlbCApIHtcbiAgICAgIGlmKCBwc2V1ZG9Mb2NhdG9yICkge1xuICAgICAgICBzd2l0Y2goIHBzZXVkb0xvY2F0b3IgKSB7XG4gICAgICAgICAgY2FzZSAnYWZ0ZXInOlxuICAgICAgICAgICAgaWYoIGVsLm5leHRFbGVtZW50U2libGluZyApIHtcbiAgICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUod2lkZ2V0LmVsLCBlbC5uZXh0RWxlbWVudFNpYmxpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZCh3aWRnZXQuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYmVmb3JlJzpcbiAgICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHdpZGdldC5lbCwgZWwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncHNldWRvTG9jYXRvciAnICsgcHNldWRvTG9jYXRvciArICcgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQod2lkZ2V0LmVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBldmFsV2lkZ2V0ICh3aWRnZXRXcmFwcGVyKSB7XG4gICAgdmFyIG1ldGEsIHVwZGF0ZURhdGEgPSBmYWxzZSwgZGV0ZWN0ZWRBbW91bnQsIHNpbXVsYXRvck9wdGlvbnMgPSB7fTtcblxuICAgIGlmKCB3aWRnZXRXcmFwcGVyLl9fYXB6X3dpZGdldF9fICkge1xuICAgICAgbWV0YSA9IHdpZGdldFdyYXBwZXIuX19hcHpfd2lkZ2V0X187XG5cbiAgICAgIGRldGVjdGVkQW1vdW50ID0gbWV0YS5nZXRBbW91bnQoKTtcbiAgICAgIGlmKCBkZXRlY3RlZEFtb3VudCAmJiBtZXRhLmFtb3VudCAhPT0gZGV0ZWN0ZWRBbW91bnQgKSB7XG4gICAgICAgIHVwZGF0ZURhdGEgPSB0cnVlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh3aWRnZXRXcmFwcGVyLCBtZXRhLmFtb3VudCwgbWV0YS5nZXRBbW91bnQoKSApO1xuICAgICAgICBtZXRhLmFtb3VudCA9IG1ldGEuZ2V0QW1vdW50KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1ldGEgPSB7IGdldEFtb3VudDogYW1vdW50R2V0dGVyKHdpZGdldFdyYXBwZXIpIH07XG4gICAgICBtZXRhLmFtb3VudCA9IHdpZGdldFdyYXBwZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWFtb3VudCcpID8gTnVtYmVyKHdpZGdldFdyYXBwZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWFtb3VudCcpKSA6IG1ldGEuZ2V0QW1vdW50KCk7XG4gICAgICB1cGRhdGVEYXRhID0gdHJ1ZTtcbiAgICAgIGlmKCBtZXRhLmdldEFtb3VudC5xdHlTZWxlY3RvciApIHtcbiAgICAgICAgbWV0YS5xdHkgPSBnZXRRdHkobWV0YS5nZXRBbW91bnQucXR5U2VsZWN0b3IpIHx8IDE7XG4gICAgICAgIC8vIGNvbnNvbGUuZGVidWcoJ25ldyB3YXRjaGVyJyk7XG4gICAgICAgIG1ldGEud2F0Y2hRdHkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYoICFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHdpZGdldFdyYXBwZXIpICkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChtZXRhLndhdGNoUXR5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHF0eSA9IGdldFF0eShtZXRhLmdldEFtb3VudC5xdHlTZWxlY3Rvcik7XG4gICAgICAgICAgaWYoIHF0eSAhPT0gbWV0YS5xdHkgKSB7XG4gICAgICAgICAgICBtZXRhLnF0eSA9IHF0eTtcbiAgICAgICAgICAgIGV2YWxXaWRnZXQod2lkZ2V0V3JhcHBlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAyNTApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKCB3aWRnZXRXcmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3JykgKSB7XG4gICAgICBzaW11bGF0b3JPcHRpb25zLnZpZXcgPSB3aWRnZXRXcmFwcGVyLmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3Jyk7XG4gICAgfVxuXG4gICAgaWYoIG1ldGEuYW1vdW50ICYmIG1ldGEuZ2V0QW1vdW50LnF0eVNlbGVjdG9yICkge1xuICAgICAgbWV0YS5hbW91bnQgKj0gKCBnZXRRdHkobWV0YS5nZXRBbW91bnQucXR5U2VsZWN0b3IpIHx8IDEgKTtcbiAgICB9XG4gICAgaWYoIG1ldGEuYW1vdW50ICYmIHVwZGF0ZURhdGEgKSB7XG4gICAgICBpZiggbWV0YS53aWRnZXQgJiYgbWV0YS53aWRnZXQubWVzc2FnZSApIHtcbiAgICAgICAgbWV0YS53aWRnZXQubWVzc2FnZSgnbG9hZGluZycpO1xuICAgICAgfVxuICAgICAgYXBsYXphbWUuc2ltdWxhdG9yKCBtZXRhLmFtb3VudCwgc2ltdWxhdG9yT3B0aW9ucywgZnVuY3Rpb24gKF9jaG9pY2VzLCBfb3B0aW9ucykge1xuICAgICAgICBfb3B0aW9ucy53aWRnZXQgPSBfb3B0aW9ucy53aWRnZXQgfHwge307XG4gICAgICAgIGlmKCBfb3B0aW9ucy53aWRnZXQuZGlzYWJsZWQgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0YS5jaG9pY2VzID0gX2Nob2ljZXM7XG4gICAgICAgIG1ldGEub3B0aW9ucyA9IF9vcHRpb25zO1xuXG4gICAgICAgIG1ldGEud2lkZ2V0ID0gbWV0YS53aWRnZXQgfHwgZ2V0V2lkZ2V0KG1ldGEpO1xuXG4gICAgICAgIGlmKCBtZXRhLndpZGdldCAmJiAhZG9jdW1lbnQuYm9keS5jb250YWlucyhtZXRhLndpZGdldC5lbCkgKSB7XG4gICAgICAgICAgcGxhY2VXaWRnZXQobWV0YS53aWRnZXQsIHdpZGdldFdyYXBwZXIsIHdpZGdldFdyYXBwZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWxvY2F0aW9uJykgfHwgX29wdGlvbnMud2lkZ2V0LmxvY2F0aW9uICk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRhLndpZGdldC50cmlnZ2VyKCdjaG9pY2VzLnVwZGF0ZScpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiggbWV0YS53aWRnZXQgJiYgbWV0YS53aWRnZXQubWVzc2FnZSApIHtcbiAgICAgICAgICBtZXRhLndpZGdldC5tZXNzYWdlKCdhYm9ydCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmKCBtZXRhLndpZGdldCAmJiBkb2N1bWVudC5ib2R5LmNvbnRhaW5zKG1ldGEud2lkZ2V0LmVsKSApIHtcbiAgICAgICAgICB2YXIgcGFyZW50ID0gbWV0YS53aWRnZXQuZWwucGFyZW50RWxlbWVudDtcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQobWV0YS53aWRnZXQuZWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB3aWRnZXRXcmFwcGVyLl9fYXB6X3dpZGdldF9fID0gbWV0YTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdpZGdldHNMb29rdXAgKGVsZW1lbnQpIHtcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcblxuICAgIGVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hcGxhemFtZS1zaW11bGF0b3JdJyksIGV2YWxXaWRnZXQgKTtcblxuICAgIHJldHVybiBwcm9taXNlcy5sZW5ndGggPyAkcS5hbGwocHJvbWlzZXMpIDogJHEucmVzb2x2ZSgpO1xuICB9XG5cbiAgd2lkZ2V0c0xvb2t1cCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIF8ubGl2ZURPTS5zdWJzY3JpYmUod2lkZ2V0c0xvb2t1cCk7XG4gIH0pO1xuXG4gIHJldHVybiB3aWRnZXRzTG9va3VwO1xuXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfZXJyb3JEYXRhKGVycikge1xuICAoY29uc29sZS5pbmZvIHx8IGNvbnNvbGUubG9nKSgnJWNbbm9uIGJsb2NraW5nIGVycm9yXSAlY2FwbGF6YW1lLmpzXFxuXFxuJywgJ2ZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzI2N0JCRDsnLCAnY29sb3I6ICMyNjdCQkQ7Jyk7XG5cbiAgdmFyIGZpbGVuYW1lID0gZXJyLmZpbGVOYW1lID8gZXJyLmZpbGVOYW1lLmxhc3RJbmRleE9mKCcvJykgOiAnPG5vdCBkZWZpbmVkPic7XG4gIHZhciBzdGFtcCA9IG5ldyBEYXRlKCk7XG4gIHZhciBzdHIgPSAnJWNuYW1lOiAlYycgKyBlcnIubmFtZSArXG4gICAgICAgICAgJ1xcbiVjRXJyb3I6ICVjJyArIGVyci5tZXNzYWdlICtcbiAgICAgICAgICAnXFxuJWNGaWxlOiAlYycgKyBmaWxlbmFtZTtcblxuICBjb25zb2xlLmxvZyhzdHIsICdmb250LXdlaWdodDogYm9sZDsnLCAnY29sb3I6ICNlNzRjM2M7JywgJ2ZvbnQtd2VpZ2h0OiBib2xkOycsICdmb250LXdlaWdodDogbm9ybWFsOyBjb2xvcjogI2U3NGMzYzsnLCAnZm9udC13ZWlnaHQ6IGJvbGQ7JywgJ2ZvbnQtd2VpZ2h0OiBub3JtYWw7Jyk7XG4gIGlmKCBlcnIuc3RhY2sgKSB7XG4gICAgY29uc29sZS5sb2coJyVjJyArIGVyci5zdGFjaywgJ2JhY2tncm91bmQtY29sb3I6ICNmZmZmZWU7IGxpbmUtaGVpZ2h0OiAyOycpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgdHJ5eyBmdW5jKCk7IH1cbiAgY2F0Y2goZXJyKSB7XG4gICAgX2Vycm9yRGF0YShlcnIpO1xuICB9XG59O1xuIiwiXG5mdW5jdGlvbiB0aG91c2FuZHMoYW1vdW50KSB7XG4gIGlmKCAvXFxkezN9XFxkKy8udGVzdChhbW91bnQpICkge1xuICAgIHJldHVybiB0aG91c2FuZHMoYW1vdW50LnJlcGxhY2UoLyhcXGR7M30/KShcXC58JCkvLCAnLiQmJykpO1xuICB9XG4gIHJldHVybiBhbW91bnQ7XG59XG5cbmZ1bmN0aW9uIGdldEFtb3VudCAoYW1vdW50KSB7XG4gIHZhciBwcmVmaXggPSAnJztcblxuICBpZiggYW1vdW50IDwgMCApIHtcbiAgICBwcmVmaXggPSAnLSc7XG4gICAgYW1vdW50ID0gMCAtIGFtb3VudDtcbiAgfVxuXG4gIGlmKCAhYW1vdW50ICkge1xuICAgIHJldHVybiAnMCwwMCc7XG4gIH0gZWxzZSBpZiggYW1vdW50IDwgMTAgKSB7XG4gICAgcmV0dXJuICcwLDAnICsgYW1vdW50O1xuICB9IGVsc2UgaWYoIGFtb3VudCA8IDEwMCApIHtcbiAgICByZXR1cm4gJzAsJyArIGFtb3VudDtcbiAgfVxuICByZXR1cm4gcHJlZml4ICsgKCcnICsgYW1vdW50KS5yZXBsYWNlKC8oXFxkKikoXFxkezJ9KSQvLCBmdW5jdGlvbiAobWF0Y2hlZCwgbWFpbiwgdGFpbCkge1xuICAgIHJldHVybiB0aG91c2FuZHMobWFpbikgKyAnLCcgKyB0YWlsO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcGFyc2VQcmljZSAocHJpY2UpIHtcbiAgdmFyIG1hdGNoZWQgPSBwcmljZS5tYXRjaCgvKChcXGQrWywuIF0pKikoXFxkKykvKSxcbiAgICAgIGFtb3VudCwgbWFpbiwgdGFpbDtcblxuICBpZiggbWF0Y2hlZCApIHtcbiAgICB0YWlsID0gbWF0Y2hlZFszXTtcbiAgICBtYWluID0gbWF0Y2hlZFsxXS5yZXBsYWNlKC9bXlxcZF0vZywgJycpO1xuXG4gICAgaWYoICFtYWluICkge1xuICAgICAgcmV0dXJuIE51bWJlciggdGFpbCArICcwMCcgKTtcbiAgICB9XG5cbiAgICBpZiggdGFpbC5sZW5ndGggPT09IDEgKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKG1haW4gKyB0YWlsICsgJzAnKTtcbiAgICB9XG5cbiAgICBpZiggdGFpbC5sZW5ndGggIT09IDIgKSB7XG4gICAgICB0YWlsICs9ICcwMCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIE51bWJlcihtYWluICsgdGFpbCk7XG4gIH1cblxuICBpZiggL1xcZCsvLnRlc3QocHJpY2UpICkge1xuICAgIHJldHVybiBOdW1iZXIoIHByaWNlLnJlcGxhY2UoL1teXFxkXSsvZywgJycpICsgJzAwJyApO1xuICB9XG5cbiAgY29uc29sZS53YXJuKCdwcmljZSBkYXRhIG1pc21hdGNoJywgcHJpY2UpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Z2V0QW1vdW50OiBnZXRBbW91bnQsXG5cdHBhcnNlUHJpY2U6IHBhcnNlUHJpY2Vcbn07XG4iLCJcbmZ1bmN0aW9uIF9yZWFkeSAoX2NhbGxiYWNrLCBkZWxheSkge1xuICB2YXIgY2FsbGJhY2sgPSBkZWxheSA/IGZ1bmN0aW9uICgpIHsgc2V0VGltZW91dChfY2FsbGJhY2ssIGRlbGF5KTsgfSA6IF9jYWxsYmFjaztcblxuICBpZiAoL2xvYWRlZHxjb21wbGV0ZS8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSkge1xuICAgIGNhbGxiYWNrKCk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjYWxsYmFjayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEJ1YmJsZUNsb3NlIChzdHIpIHtcbiAgdmFyIGxldmVsID0gMDtcblxuICBmb3IoIHZhciBpID0gMCwgbGVuID0gc3RyLmxlbmd0aDsgaSA8IGxlbiA7IGkrKyApIHtcbiAgICBpZiggc3RyW2ldID09PSAnKCcgKSB7XG4gICAgICBsZXZlbCsrO1xuICAgIH0gZWxzZSBpZiggc3RyW2ldID09PSAnKScgKSB7XG4gICAgICBpZiggbGV2ZWwgPT09IDAgKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV2ZWwtLTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGhhc1NlbGVjdG9yIChzZWxlY3Rvciwgcm9vdEVsZW1lbnQpIHtcbiAgdmFyIHNwbGl0SGFzID0gc2VsZWN0b3Iuc3BsaXQoJzpoYXMoJyk7XG5cbiAgcmV0dXJuIHNwbGl0SGFzLnJlZHVjZShmdW5jdGlvbiAobWF0Y2hlcywgcGFydGlhbCkge1xuXG4gICAgdmFyIGNsb3NlUG9zaXRpb24gPSBmaW5kQnViYmxlQ2xvc2UocGFydGlhbCksXG4gICAgICAgIGhhc0ZpbHRlciA9IHBhcnRpYWwuc3Vic3RyKDAsIGNsb3NlUG9zaXRpb24pLFxuICAgICAgICBwYXJ0aWFsUXVlcnkgPSBwYXJ0aWFsLnN1YnN0cihjbG9zZVBvc2l0aW9uICsgMSkudHJpbSgpO1xuXG4gICAgaWYoIGNsb3NlUG9zaXRpb24gPT09IC0xICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtYWxmb3JtZWQgc2VsZWN0b3InKTtcbiAgICB9XG5cbiAgICBtYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoaGFzRmlsdGVyKTtcbiAgICB9KTtcblxuICAgIGlmKCBwYXJ0aWFsUXVlcnkgKSB7XG4gICAgICB2YXIgc3VibWF0Y2hlcyA9IFtdO1xuXG4gICAgICBtYXRjaGVzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgW10ucHVzaC5hcHBseShzdWJtYXRjaGVzLCBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocGFydGlhbFF1ZXJ5KSApO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzdWJtYXRjaGVzO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuXG4gIH0sIFtdLnNsaWNlLmNhbGwoIChyb290RWxlbWVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbCggc3BsaXRIYXMuc2hpZnQoKSApICkgKTtcbn1cblxuZnVuY3Rpb24gcXVlcnlTZWxlY3RvciAoc2VsZWN0b3IsIHJvb3RFbGVtZW50KSB7XG4gIC8vICd0cjpoYXMoPiAucm93KSBkaXY6aGFzKHNwYW4pIGltZycuc3BsaXQoJzpoYXMoJyk7XG4gIGlmKCAhc2VsZWN0b3IgKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgaWYoICEvXFw6aGFzXFwoLy50ZXN0KHNlbGVjdG9yKSApIHtcbiAgICByZXR1cm4gW10uc2xpY2UuY2FsbCggKHJvb3RFbGVtZW50IHx8IGRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApICk7XG4gIH1cblxuICByZXR1cm4gaGFzU2VsZWN0b3Ioc2VsZWN0b3IpO1xufVxuXG5mdW5jdGlvbiBjc3NRdWVyeSAoX3NlbGVjdG9yLCByb290RWxlbWVudCkge1xuICB2YXIgc2VsZWN0b3JzID0gX3NlbGVjdG9yLnNwbGl0KC9cXHMqLFxccyovKTtcblxuICByZXR1cm4gc2VsZWN0b3JzLnJlZHVjZShmdW5jdGlvbiAobGlzdCwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gbGlzdC5jb25jYXQoIHF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IsIHJvb3RFbGVtZW50KSApO1xuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbFRvcCAodmFsdWUpIHtcbiAgaWYoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IHZhbHVlO1xuICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRWxlbWVudCAoZWwpIHtcbiAgdmFyIGNoaWxkID0gZWwuZmlyc3RDaGlsZDtcblxuICB3aGlsZSggY2hpbGQgKSB7XG4gICAgZWwucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIGNoaWxkID0gZWwuZmlyc3RDaGlsZDtcbiAgfVxufVxuXG4vLyB2YXIgX2NsYXNzQWN0aW9ucyA9IHtcbi8vICAgYWRkOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0ID8gZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuLy8gICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuLy8gICB9IDogZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuLy8gICAgIHZhciBSRV9DTEVBTkNMQVNTID0gbmV3IFJlZ0V4cCgnXFxcXGInICsgKGNsYXNzTmFtZSB8fCAnJykgKyAnXFxcXGInLCcnKTtcbi8vICAgICBfY2xhc3NBY3Rpb25zLnJlbW92ZShlbGVtZW50LCBjbGFzc05hbWUpO1xuLy8gICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbi8vICAgfSxcbi8vICAgcmVtb3ZlOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0ID8gZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuLy8gICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuLy8gICB9IDogZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuLy8gICAgIHZhciBSRV9DTEVBTkNMQVNTID0gbmV3IFJlZ0V4cCgnXFxcXGInICsgKGNsYXNzTmFtZSB8fCAnJykgKyAnXFxcXGInLCcnKTtcbi8vICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoUkVfQ0xFQU5DTEFTUywnJyk7XG4vLyAgIH0sXG4vLyAgIGFjdGlvbjogZnVuY3Rpb24gKGFjdGlvbiwgdG9vbHMpIHtcbi8vICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuLy8gICAgICAgaWYoIGNsYXNzTmFtZS5pbmRleE9mKCcgJykgPj0gMCApIHtcbi8vICAgICAgICAgY2xhc3NOYW1lLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAoY24pIHtcbi8vICAgICAgICAgICBfY2xhc3NBY3Rpb25zW2FjdGlvbl0oZWxlbWVudCwgY24pO1xuLy8gICAgICAgICB9KTtcbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIF9jbGFzc0FjdGlvbnNbYWN0aW9uXShlbGVtZW50LCBjbGFzc05hbWUpO1xuLy8gICAgICAgfVxuLy8gICAgICAgcmV0dXJuIHRvb2xzO1xuLy8gICAgIH07XG4vLyAgIH1cbi8vIH07XG5cbmZ1bmN0aW9uIHdyaXRlSWZyYW1lIChpZnJhbWUsIGNvbnRlbnQpIHtcbiAgdmFyIGlmcmFtZURvYyA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICB0cnkgeyBpZnJhbWVEb2MuY2hhcnNldCA9ICdVVEYtOCc7IH0gY2F0Y2goZXJyKSB7fVxuICBpZnJhbWVEb2Mub3BlbigpO1xuICBpZnJhbWVEb2Mud3JpdGUoY29udGVudCk7XG4gIGlmcmFtZURvYy5jbG9zZSgpO1xufVxuXG5mdW5jdGlvbiBnZXRJRnJhbWUgKGlmcmFtZVN0eWxlcykge1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHJlcXVpcmUoJ25pdHJvLXRvb2xzL2V4dGVuZCcpLmV4dGVuZChpZnJhbWUuc3R5bGUsIGlmcmFtZVN0eWxlcyB8fCB7fSk7XG5cbiAgaWZyYW1lLmZyYW1lQm9yZGVyID0gJzAnO1xuICAvLyBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaWZyYW1lLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gIH07XG4gIHJldHVybiBpZnJhbWU7XG59XG5cbnZhciBfID0ge1xuICByZWFkeTogX3JlYWR5LFxuICBnZXRJRnJhbWU6IGdldElGcmFtZSxcbiAgd3JpdGVJZnJhbWU6IHdyaXRlSWZyYW1lLFxuICBjc3NRdWVyeTogY3NzUXVlcnksXG4gIHNjcm9sbFRvcDogc2Nyb2xsVG9wLFxuICBjbGVhckVsZW1lbnQ6IGNsZWFyRWxlbWVudCxcbiAgZWxlbWVudERhdGE6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLmRhdGFzZXQgPyBmdW5jdGlvbiAoZWwsIGtleSwgdmFsdWUpIHtcbiAgICBpZiggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgIGVsLmRhdGFzZXRba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gZWwuZGF0YXNldFtrZXldO1xuICB9IDogZnVuY3Rpb24gKGVsLCBrZXksIHZhbHVlKSB7XG4gICAgaWYoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLScgKyBrZXkpO1xuICB9LFxufTtcblxuLy8gdmFyIGFkZENsYXNzID0gX2NsYXNzQWN0aW9ucy5hY3Rpb24oJ2FkZCcsIF8gKSxcbi8vICAgICByZW1vdmVDbGFzcyA9IF9jbGFzc0FjdGlvbnMuYWN0aW9uKCdyZW1vdmUnLCBfICk7XG5cbi8vIF8uYWRkQ2xhc3MgPSBhZGRDbGFzcztcbi8vIF8ucmVtb3ZlQ2xhc3MgPSByZW1vdmVDbGFzcztcblxuXy5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlbGVtZW50LCBjbGFzc05hbWUpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG59O1xuXG5fLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gXztcbiIsIlxuXG5mdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcbiAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICByZXR1cm4gW3BhcnNlSW50KHJlc3VsdFsxXSwgMTYpLCBwYXJzZUludChyZXN1bHRbMl0sIDE2KSwgcGFyc2VJbnQocmVzdWx0WzNdLCAxNildO1xufVxuXG5mdW5jdGlvbiBicmlnaHRuZXNzIChjb2xvcikge1xuICB2YXIgcmdiID0gaGV4VG9SZ2IoY29sb3IpO1xuICB2YXIgbyA9IE1hdGgucm91bmQoKChwYXJzZUludChyZ2JbMF0pICogMjk5KSArIChwYXJzZUludChyZ2JbMV0pICogNTg3KSArIChwYXJzZUludChyZ2JbMl0pICogMTE0KSkgLzEwMDApO1xuICByZXR1cm4gbyA8IDEwMCA/ICdkYXJrJyA6ICggbyA+IDIzMCA/ICdsaWdodCcgOiAnbWVkaXVtJyApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaGV4VG9SZ2I6IGhleFRvUmdiLFxuICBicmlnaHRuZXNzOiBicmlnaHRuZXNzXG59O1xuIiwiXG5cbnZhciBpbXBvcnRhbnRDU1MgPSBmdW5jdGlvbiAoY3NzKSB7XG4gICAgICByZXR1cm4gY3NzLnJlcGxhY2UoLzsvZywgJyAhaW1wb3J0YW50OycpLnJlcGxhY2UoLzooW146O10rPyl9L2csIGZ1bmN0aW9uIChtYXRjaGVkLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gJzonICsgdmFsdWUgKyAnICFpbXBvcnRhbnQ7fSc7XG4gICAgICB9KS5yZXBsYWNlKC8oXFxkKyV8ZnJvbXx0byl7KFtefV0rKS9nLCBmdW5jdGlvbiAobWF0Y2hlZCwgcG9zLCBjb250ZW50KSB7XG4gICAgICAgIHJldHVybiBwb3MgKyAneycgKyBjb250ZW50LnJlcGxhY2UoLyAhaW1wb3J0YW50Oy9nLCAnOycpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBjc3NIYWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjYWNoZSA9IHt9LFxuICAgICAgICAgIGhhY2tzID0ge1xuICAgICAgICAgICAgb3ZlcmxheTogaW1wb3J0YW50Q1NTKHJlcXVpcmUoJy4uLy4uLy50bXAvY3NzLWhhY2tzL292ZXJsYXknKSksXG4gICAgICAgICAgICBibHVyOiBpbXBvcnRhbnRDU1MocmVxdWlyZSgnLi4vLi4vLnRtcC9jc3MtaGFja3MvYmx1cicpKSxcbiAgICAgICAgICAgIGxvZ286IGltcG9ydGFudENTUyhyZXF1aXJlKCcuLi8uLi8udG1wL2Nzcy1oYWNrcy9sb2dvJykpLFxuICAgICAgICAgICAgbW9kYWw6IGltcG9ydGFudENTUyhyZXF1aXJlKCcuLi8uLi8udG1wL2Nzcy1oYWNrcy9tb2RhbCcpKVxuICAgICAgICAgIH07XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjc3NIYWNrcycsIGhhY2tzKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGhhY2sgKGhhY2tOYW1lKSB7XG4gICAgICAgIGlmKCAhY2FjaGVbaGFja05hbWVdICkge1xuICAgICAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gaGFja3NbaGFja05hbWVdO1xuXG4gICAgICAgICAgdmFyIGVuYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgIHN0eWxlLmhhY2sgPSBmdW5jdGlvbiAoZW5hYmxlKSB7XG4gICAgICAgICAgICBlbmFibGUgPSBlbmFibGUgPT09IHVuZGVmaW5lZCB8fCBlbmFibGU7XG5cbiAgICAgICAgICAgIGlmKCBlbmFibGUgKSB7XG4gICAgICAgICAgICAgIGlmKCBlbmFibGVkICkgeyByZXR1cm47IH1cbiAgICAgICAgICAgICAgZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYoICFlbmFibGVkICkgeyByZXR1cm47IH1cbiAgICAgICAgICAgICAgZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY2FjaGVbaGFja05hbWVdID0gc3R5bGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhY2hlW2hhY2tOYW1lXTtcbiAgICAgIH07XG4gICAgfSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjc3NIYWNrO1xuIiwiXG5cbmZ1bmN0aW9uIF9rZXkgKG8sIGtleSwgdmFsdWUpIHtcblx0a2V5LnNwbGl0KCcuJykuZm9yRWFjaChmdW5jdGlvbiAoaywgaSwga2V5cykge1xuXHRcdGlmKCBpID09PSBrZXlzLmxlbmd0aCAtIDEgKSB7XG5cdFx0XHRvW2tdID0gdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9ba10gPSBvW2tdIHx8IHt9O1xuXHRcdFx0byA9IG9ba107XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2FtZWxDYXNlICh0ZXh0KSB7XG5cdHJldHVybiB0ZXh0LnJlcGxhY2UoL18oXFx3KS9nLCBmdW5jdGlvbiAobWF0Y2hlZCwgbGV0dGVyKSB7XG5cdFx0cmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZGVzZXJpYWxpemUgKHF1ZXJ5c3RyaW5nLCBkZWNvZGUpIHtcblxuXHR2YXIgcmVzdWx0ID0ge307XG5cblx0cXVlcnlzdHJpbmcuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXlWYWx1ZSkge1xuXHRcdHZhciBtYXRjaGVkID0ga2V5VmFsdWUubWF0Y2goLyguKj8pPSguKikvKTtcblxuXHRcdGlmKCAhbWF0Y2hlZCApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHBhcnNlICcgKyBrZXlWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0X2tleShyZXN1bHQsIGNhbWVsQ2FzZShtYXRjaGVkWzFdKSwgZGVjb2RlID8gZGVjb2RlVVJJKG1hdGNoZWRbMl0pIDogbWF0Y2hlZFsyXSApO1xuXG5cdH0pO1xuXG5cdHJldHVybiByZXN1bHQ7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZXNlcmlhbGl6ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHN1c2NyaXB0b3JzID0gW10sXG4gICAgcnVubmluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBpbml0TGl2ZURPTSAoKSB7XG5cbiAgcmVxdWlyZSgnLi9icm93c2VyLXRvb2xzJykucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignRE9NU3VidHJlZU1vZGlmaWVkJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgZm9yKCB2YXIgaSA9IDAsIG4gPSBzdXNjcmlwdG9ycy5sZW5ndGg7IGkgPCBuIDsgaSsrICkge1xuICAgICAgICBzdXNjcmlwdG9yc1tpXShldmVudC50YXJnZXQpO1xuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgfSk7XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN1YnNjcmliZTogZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICBpZiggIXJ1bm5pbmcgKSB7XG4gICAgICBpbml0TGl2ZURPTSh0cnVlKTtcbiAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgIH1cbiAgICBpZiggaGFuZGxlciBpbnN0YW5jZW9mIEZ1bmN0aW9uICkge1xuICAgICAgc3VzY3JpcHRvcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn07XG4iLCJcblxuZnVuY3Rpb24gZ2V0RXJyb3JPYmplY3QoKXtcbiAgICB0cnkgeyB0aHJvdyBFcnJvcignJyk7IH0gY2F0Y2goZXJyKSB7IHJldHVybiBlcnI7IH1cbn1cblxuZnVuY3Rpb24gbG9nICgpIHtcbiAgdmFyIGVyciA9IGdldEVycm9yT2JqZWN0KCksXG4gICAgICBjYWxsZXJfbGluZSA9IGVyci5zdGFjay5zcGxpdCgnXFxuJylbNF0gfHwgJycsXG4gICAgICBpbmRleCA9IGNhbGxlcl9saW5lLmluZGV4T2YoJ2F0ICcpO1xuXG4gIGxvZy5oaXN0b3J5LnB1c2goe1xuICAgIHRpbWU6IG5ldyBEYXRlKCksXG4gICAgYXJnczogYXJndW1lbnRzLFxuICAgIHRyYWNrOiB7XG4gICAgICBjYWxsZXJfbGluZTogY2FsbGVyX2xpbmUsXG4gICAgICBpbmRleDogaW5kZXgsXG4gICAgICBjbGVhbjogY2FsbGVyX2xpbmUuc2xpY2UoaW5kZXggKyAyLCBjYWxsZXJfbGluZS5sZW5ndGgpXG4gICAgfVxuICB9KTtcblxuICAvLyBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xufVxuXG5sb2cuaGlzdG9yeSA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvZztcbiIsIlxudmFyIG1lc3NhZ2VUYXJnZXQgPSB7fSxcbiAgICBzaG93TG9ncyA9IGZhbHNlO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7XG4gIHZhciBtZXNzYWdlID0gZS5kYXRhLFxuICAgICAgbGlzdGVuZXJzID0gbWVzc2FnZVRhcmdldFttZXNzYWdlLmFwbGF6YW1lXTtcblxuICBpZiggIWxpc3RlbmVycyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiggc2hvd0xvZ3MgJiYgIWUudXNlZCApIHtcbiAgICBjb25zb2xlLmxvZygnbWVzc2FnZScsIGUsIGxpc3RlbmVycyk7XG4gIH1cblxuICBpZiggIWUudXNlZCApIHtcbiAgICBlLnVzZWQgPSB0cnVlO1xuICAgIGZvciggdmFyIGkgPSAwLCBuID0gbGlzdGVuZXJzLmxlbmd0aCA7IGkgPCBuIDsgaSsrICkge1xuICAgICAgbGlzdGVuZXJzW2ldKGUsIG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxufSwgdHJ1ZSk7XG5cbmZ1bmN0aW9uIG9uTWVzc2FnZSAodGFyZ2V0LCBoYW5kbGVyLCBsb2dzKSB7XG4gIHNob3dMb2dzID0gbG9ncztcbiAgaWYoIHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnICYmIGhhbmRsZXIgaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICBtZXNzYWdlVGFyZ2V0W3RhcmdldF0gPSBtZXNzYWdlVGFyZ2V0W3RhcmdldF0gfHwgW107XG4gICAgbWVzc2FnZVRhcmdldFt0YXJnZXRdLnB1c2goaGFuZGxlcik7XG4gIH1cbn1cblxub25NZXNzYWdlLm9mZiA9IGZ1bmN0aW9uICh0YXJnZXQsIGhhbmRsZXIpIHtcbiAgaWYoIHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnICYmIGhhbmRsZXIgaW5zdGFuY2VvZiBGdW5jdGlvbiApIHtcbiAgICBtZXNzYWdlVGFyZ2V0W3RhcmdldF0gPSBtZXNzYWdlVGFyZ2V0W3RhcmdldF0gfHwgW107XG4gICAgdmFyIGkgPSBtZXNzYWdlVGFyZ2V0W3RhcmdldF0uaW5kZXhPZihoYW5kbGVyKTtcbiAgICBpZiggaSAhPT0gLTEgKSB7XG4gICAgICBtZXNzYWdlVGFyZ2V0W3RhcmdldF0uc3BsaWNlKGksMSk7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9uTWVzc2FnZTtcbiIsIlxuZnVuY3Rpb24gdGVtcGxhdGUgKG5hbWUsIGRhdGEpe1xuICByZXR1cm4gdGVtcGxhdGUuY2FjaGVbbmFtZV0oZGF0YSB8fCB7fSk7XG59XG5cbnRlbXBsYXRlLmNhY2hlID0ge307XG5cbnRlbXBsYXRlLmNvbXBpbGUgPSBmdW5jdGlvbiAodG1wbCkge1xuICAvLyBKb2huIFJlc2lnIG1pY3JvLXRlbXBsYXRlXG4gIHJldHVybiBuZXcgRnVuY3Rpb24oJ29iaicsIC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgICd2YXIgcD1bXSxwcmludD1mdW5jdGlvbigpe3AucHVzaC5hcHBseShwLGFyZ3VtZW50cyk7fTsnICtcblxuICAgIC8vIEludHJvZHVjZSB0aGUgZGF0YSBhcyBsb2NhbCB2YXJpYWJsZXMgdXNpbmcgd2l0aCgpe31cbiAgICAnd2l0aChvYmope3AucHVzaChcXCcnICtcblxuICAgIC8vIENvbnZlcnQgdGhlIHRlbXBsYXRlIGludG8gcHVyZSBKYXZhU2NyaXB0XG4gICAgdG1wbC50cmltKClcbiAgICAgIC5yZXBsYWNlKC9bXFxyXFx0XFxuXS9nLCAnICcpXG4gICAgICAuc3BsaXQoJzwlJykuam9pbignXFx0JylcbiAgICAgIC5yZXBsYWNlKC8oKF58JT4pW15cXHRdKiknL2csICckMVxccicpXG4gICAgICAucmVwbGFjZSgvXFx0PSguKj8pJT4vZywgJ1xcJywkMSxcXCcnKVxuICAgICAgLnNwbGl0KCdcXHQnKS5qb2luKCdcXCcpOycpXG4gICAgICAuc3BsaXQoJyU+Jykuam9pbigncC5wdXNoKFxcJycpXG4gICAgICAuc3BsaXQoJ1xccicpLmpvaW4oJ1xcXFxcXCcnKSArICdcXCcpO31yZXR1cm4gcC5qb2luKFxcJ1xcJyk7Jyk7XG59O1xuXG50ZW1wbGF0ZS5wdXQgPSBmdW5jdGlvbiAobmFtZSwgdG1wbCkge1xuICB0ZW1wbGF0ZS5jYWNoZVtuYW1lXSA9IHRlbXBsYXRlLmNvbXBpbGUodG1wbCk7XG59O1xuXG50ZW1wbGF0ZS5sb29rdXAgPSBmdW5jdGlvbiAoKSB7XG4gIFtdLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHRbdHlwZT1cImFwcGxpY2F0aW9uL3gtdGVtcGxhdGVcIl1bZGF0YS10ZW1wbGF0ZV0nKSwgZnVuY3Rpb24gKHRtcGwpIHtcbiAgICB0ZW1wbGF0ZS5wdXQodG1wbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKSwgdG1wbC50ZXh0KTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlO1xuIiwiXG52YXIgXyA9IHJlcXVpcmUoJ3ZhbmlsbGEtdG9vbHMnKTtcblxuXy5leHRlbmQoXyxcbiAgcmVxdWlyZSgnbml0cm8tdG9vbHMvbGlzdHMnKSxcbiAgcmVxdWlyZSgnbml0cm8tdG9vbHMvcGF0aCcpLFxuICByZXF1aXJlKCcuL2NvbG9ycycpLFxuICByZXF1aXJlKCcuL2Jyb3dzZXItdG9vbHMnKSxcbiAgcmVxdWlyZSgnLi9hbW91bnQtcHJpY2UnKSxcbiAge1xuICAgIGxpdmVET006IHJlcXVpcmUoJy4vbGl2ZS1kb20nKSxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi90ZW1wbGF0ZScpLFxuICAgIG9uTWVzc2FnZTogcmVxdWlyZSgnLi9tZXNzYWdlLWxpc3RlbmVyJyksXG4gICAgZGVzZXJpYWxpemU6IHJlcXVpcmUoJy4vZGVzZXJpYWxpemUnKVxuICB9XG4pO1xuXG5fLmxvZyA9IHJlcXVpcmUoJy4vbG9nJyk7XG5fLm5vb3AgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF87XG4iXX0=