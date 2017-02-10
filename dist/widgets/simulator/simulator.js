(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function anonymous(obj
/**/) {
var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="card-content">    <header class="aplazame"></header>    <section class="info">     Elige el número de meses y la cuota que más te convengan   </section>    <div class="choices-wrapper">     '); for( var i = choices.length - 1 ; i >= 0 ; i-- ) { p.push('     <button ng-repeat="choice in choices" type="button" class="choice" ng-click="selectChoice(choice)" ng-class="{ active: choice === currentChoice }">       <div class="wrapper">         <div class="num-instalments">           <span>', choices[i].num_instalments ,'</span>&nbsp;<span>', months(choices[i].num_instalments) ,'</span>         </div>         <div class="amount">           <span class="amount-amount">', getAmount(choices[i].amount) ,'</span><!--           --><span class="amount-currency">€</span><!--           --><span class="amount-per-month">/mes</span></div>       </div>     </button>     '); } p.push('   </div>    <section class="tae">TAE máximo: ', getAmount(choices[0].annual_equivalent) ,'%</section>    <section class="how-it-works">     <header>¿Cómo funciona?</header>     <div class="info-wrapper">       <div class="info">         <h3>Elige Aplazame</h3>         <p>en la tienda, cuando vayas a pagar el pedido.</p>       </div>       <div class="info">         <h3>Decide cómo quieres pagar</h3>         <p>Hasta en ', selectedChoice.num_instalments ,' ', selectedChoice.num_instalments > 1 ? 'cuotas' : 'cuota' ,', pagando con tarjeta.</p>       </div>       <div class="info">         <h3>Disfruta de tu compra</h3>         <p>Desde Aplazame estaremos disponibles por si necesitas cualquier cosa. ¡A disfrutar!</p>       </div>     </div>   </section>  </div>  <div class="cta">   <div class="col-sm-6 button-wrapper">     <button class="btn lg btn-block white" type="button" data-modal="dismiss">Volver a Tienda</button>   </div>   <div class="col-sm-6 button-wrapper">     <a class="btn lg btn-block" href="http://aplazame.com/how/customers/" target="_blank">¿Quieres saber más?</a>   </div> </div>');}return p.join('');
};
},{}],2:[function(require,module,exports){
module.exports = function anonymous(obj
/**/) {
var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('<div class="aplazame-widget-button align-', preferences.align ,'">   <button type="button" data-action="showInfo"           class="', brightness(preferences.bg_color) ,' ', preferences.branding ? '' : 'no-logo' ,'"           style=" background: ', preferences.bg_color ,'; color: ', preferences.text_color ,'; fill: ', preferences.text_color ,'">      <div class="align-wrapper">       '); if( preferences.branding ) { p.push('         <div class="logo">           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="100%" width="100%" version="1.1">             <path class="dropshadow" style="baseline-shift:baseline;block-progression:tb;color:#000000;direction:ltr;text-indent:0;text-align:start;enable-background:accumulate;text-transform:none;" d="m49.45,1.9068a5.8933,5.8933,0,0,0,-0.55244,0.12276,5.8933,5.8933,0,0,0,-0.3683,0.06138,5.8933,5.8933,0,0,0,-0.18415,0.06138,5.8933,5.8933,0,0,0,-0.12276,0.06138,5.8933,5.8933,0,0,0,-1.4732,0.67521,5.8933,5.8933,0,0,0,-0.12276,0.12277,5.8933,5.8933,0,0,0,-2.3325,3.3147l-13.75,32.962c3.3033,2.0483,6.9615,3.6193,10.865,4.5423l8.4708-20.256,9.2688,23.694c-2.9404,0.67972-5.9953,1.0435-9.146,1.0435-13.813,0-25.916-6.9098-33.208-17.433a5.7487,5.7487,0,0,0,-5.464,-2.516,5.7487,5.7487,0,0,0,-3.9897,9.084c9.3636,13.512,25.015,22.343,42.661,22.343,4.6171,0,9.1087-0.64524,13.381-1.7801l14.118,36.032a5.8933,5.8933,0,1,0,10.927,-4.358l-14.057-35.909c7.3552-3.8999,13.645-9.5362,18.353-16.328a5.7553,5.7553,0,0,0,-9.4529,-6.5679c-3.4226,4.9365-7.9036,9.0865-13.136,12.092l-14.424-36.89a5.8933,5.8933,0,0,0,-0.43,-0.9207,5.8933,5.8933,0,0,0,-0.061,-0.1228,5.8933,5.8933,0,0,0,-0.553,-0.8594,5.8933,5.8933,0,0,0,-0.061,-0.1227,5.8933,5.8933,0,0,0,-0.307,-0.3069,5.8933,5.8933,0,0,0,-0.123,-0.1228,5.8933,5.8933,0,0,0,-0.307,-0.3069,5.8933,5.8933,0,0,0,-0.122,-0.1228,5.8933,5.8933,0,0,0,-0.369,-0.2455,5.8933,5.8933,0,0,0,-0.614,-0.3683,5.8933,5.8933,0,0,0,-0.429,-0.1842,5.8933,5.8933,0,0,0,-0.123,-0.0613,5.8933,5.8933,0,0,0,-0.43,-0.1228,5.8933,5.8933,0,0,0,-0.552,-0.1842,5.8933,5.8933,0,0,0,-1.1663,-0.12276,5.8933,5.8933,0,0,0,-0.61383,0zm-26.027,54.508-4.603,11.048a5.8933,5.8933,0,1,0,10.865,4.5423l4.6037-11.11c-3.8107-1.1281-7.4419-2.602-10.865-4.4809z"/>            <path style="baseline-shift:baseline;block-progression:tb;color:#000000;direction:ltr;text-indent:0;text-align:start;enable-background:accumulate;text-transform:none;" d="m49.45,1.9068a5.8933,5.8933,0,0,0,-0.55244,0.12276,5.8933,5.8933,0,0,0,-0.3683,0.06138,5.8933,5.8933,0,0,0,-0.18415,0.06138,5.8933,5.8933,0,0,0,-0.12276,0.06138,5.8933,5.8933,0,0,0,-1.4732,0.67521,5.8933,5.8933,0,0,0,-0.12276,0.12277,5.8933,5.8933,0,0,0,-2.3325,3.3147l-13.75,32.962c3.3033,2.0483,6.9615,3.6193,10.865,4.5423l8.4708-20.256,9.2688,23.694c-2.9404,0.67972-5.9953,1.0435-9.146,1.0435-13.813,0-25.916-6.9098-33.208-17.433a5.7487,5.7487,0,0,0,-5.464,-2.516,5.7487,5.7487,0,0,0,-3.9897,9.084c9.3636,13.512,25.015,22.343,42.661,22.343,4.6171,0,9.1087-0.64524,13.381-1.7801l14.118,36.032a5.8933,5.8933,0,1,0,10.927,-4.358l-14.057-35.909c7.3552-3.8999,13.645-9.5362,18.353-16.328a5.7553,5.7553,0,0,0,-9.4529,-6.5679c-3.4226,4.9365-7.9036,9.0865-13.136,12.092l-14.424-36.89a5.8933,5.8933,0,0,0,-0.43,-0.9207,5.8933,5.8933,0,0,0,-0.061,-0.1228,5.8933,5.8933,0,0,0,-0.553,-0.8594,5.8933,5.8933,0,0,0,-0.061,-0.1227,5.8933,5.8933,0,0,0,-0.307,-0.3069,5.8933,5.8933,0,0,0,-0.123,-0.1228,5.8933,5.8933,0,0,0,-0.307,-0.3069,5.8933,5.8933,0,0,0,-0.122,-0.1228,5.8933,5.8933,0,0,0,-0.369,-0.2455,5.8933,5.8933,0,0,0,-0.614,-0.3683,5.8933,5.8933,0,0,0,-0.429,-0.1842,5.8933,5.8933,0,0,0,-0.123,-0.0613,5.8933,5.8933,0,0,0,-0.43,-0.1228,5.8933,5.8933,0,0,0,-0.552,-0.1842,5.8933,5.8933,0,0,0,-1.1663,-0.12276,5.8933,5.8933,0,0,0,-0.61383,0zm-26.027,54.508-4.603,11.048a5.8933,5.8933,0,1,0,10.865,4.5423l4.6037-11.11c-3.8107-1.1281-7.4419-2.602-10.865-4.4809z"/>           </svg>         </div>       '); } p.push('        <div class="text-wrapper">          <span class="from">Desde&nbsp;</span><!--          --><strong class="amount"><!--           --><span class="price">', getAmount(choice.amount) ,'</span><!--           --><span class="currency">€</span><!--         --></strong><!--          --><sub class="per-month">/mes</sub>        </div>     </div>    </button> </div>');}return p.join('');
};
},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){

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

},{}],5:[function(require,module,exports){

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

},{"./_extend":4,"./type":8}],6:[function(require,module,exports){

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

},{"./type":8}],7:[function(require,module,exports){

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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){

function runHandler (fn, deferred, x, fulfilled) {
  if( typeof fn === 'function' ) {
    try {
      deferred.resolve( fn(x) );
    } catch(reason) {
      deferred.reject( reason );
    }
  } else {
    deferred[ fulfilled ? 'resolve' : 'reject' ](x);
  }
}

function resolvePromise (p, x, fulfilled) {
  if( p.resolved ) {
    return;
  }
  p.resolved = true;

  p.result = x;
  p.fulfilled = fulfilled || false;

  var queue = p.queue.splice(0);
  p.queue = null;

  setTimeout(function () {
    for( var i = 0, n = queue.length ; i < n ; i++ ) {
      runHandler( queue[i][fulfilled ? 0 : 1], queue[i][2], x, fulfilled );
    }
  }, 0);
}

function runThenable (then, p, x) {
  var executed = false;
  try {
    then.call(x, function (value) {
      if( executed ) return;
      executed = true;
      xThen(p, value, true);
    }, function (reason) {
      if( executed ) return;
      executed = true;
      xThen(p, reason, false);
    });
  } catch(err) {
    if( executed ) return;
    xThen(p, err, false);
  }
}

function xThen (p, x, fulfilled) {
  var then;

  if( x && ( typeof x === 'object' || typeof x === 'function' ) ) {
    try {
      then = x.then;

      if( fulfilled && typeof then === 'function' ) {
        runThenable(then, p, x);
      } else {
        resolvePromise(p, x, fulfilled);
      }
    } catch (reason) {
      resolvePromise(p, reason, false);
    }
  } else {
    resolvePromise(p, x, fulfilled);
  }
}

function resolveProcedure (p, x, fulfilled) {
  if( p.resolving ) return;
  p.resolving = true;

  if( x === p.promise ) {
    fulfilled = false;
    x = new TypeError('A promise can not be resolved by itself');
  }

  xThen(p, x, fulfilled);
}

function Parole (resolver) {
  if( !(this instanceof Parole) ) {
    return new Parole(resolver);
  }

  if( typeof resolver !== 'function' ) {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  var p = {
    queue: [],
    promise: this
  };

  this.__promise = p;

  try {
    resolver(function (value) {
      resolveProcedure(p, value, true);
    }, function (reason) {
      resolveProcedure(p, reason, false);
    });
  } catch (reason) {
    resolveProcedure(p, reason, false);
  }

}

Parole.prototype.then = function (onFulfilled, onRejected) {
  var p = this.__promise,
      deferred = Parole.defer();

  if( p.queue ) {
    p.queue.push([onFulfilled, onRejected, deferred]);
  } else {
    setTimeout(function () {
      runHandler( p.fulfilled ? onFulfilled : onRejected, deferred, p.result, p.fulfilled );
    }, 0);
  }

  return deferred.promise;
};

Parole.prototype.catch = function (onRejected) {
  return this.then(null, onRejected);
};

// Promise methods

function each (iterable, handler) {
  for( var i = 0, n = iterable.length; i < n ; i++ ) {
    handler(iterable[i], i);
  }
}

Parole.defer = function () {
  var deferred = {};
  deferred.promise = new Parole(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
};

Parole.when = function (x) { return ( x && x.then ) ? x : Parole.resolve(x); };

Parole.resolve = function (value) {
  return new Parole(function (resolve) {
    resolve(value);
  });
};

Parole.reject = function (value) {
  return new Parole(function (resolve, reject) {
    reject(value);
  });
};

Parole.all = function (iterable) {
  return new Parole(function (resolve, reject) {
    var pending = iterable.length,
        results = [];
    each(iterable, function (_promise, i) {

      ( _promise.then ? _promise : Parole.resolve(_promise) ).then(function (result) {
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

Parole.race = function (iterable) {
  return new Parole(function (resolve, reject) {
    var done = false;

    each(iterable, function (_promise) {
      if( done ) {
        return;
      }
      ( _promise.then ? _promise : Parole.resolve(_promise) ).then(function (result) {
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

module.exports = Parole;

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){

// require('./browser-polyfills/current-script');
require('./browser-polyfills/date');
require('./browser-polyfills/dom-closest');
require('./browser-polyfills/event-listener');
require('./browser-polyfills/match-media');
require('./browser-polyfills/matches-selector');

},{"./browser-polyfills/date":12,"./browser-polyfills/dom-closest":13,"./browser-polyfills/event-listener":14,"./browser-polyfills/match-media":15,"./browser-polyfills/matches-selector":16}],12:[function(require,module,exports){

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
},{}],13:[function(require,module,exports){

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
},{}],14:[function(require,module,exports){

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
},{}],15:[function(require,module,exports){
(function (root) {
  'use strict';

  root.matchMedia = root.matchMedia || root.webkitMatchMedia || root.mozMatchMedia || root.msMatchMedia;
})(this);
},{}],16:[function(require,module,exports){

if( !Element.prototype.matchesSelector ) {
  Element.prototype.matchesSelector = (
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector
  );
}


},{}],17:[function(require,module,exports){

var extend = require('./extend');

function _ (selector, source) {
  return source && typeof source === 'string' ?
		selector.querySelector(source) :
		(source || document).querySelector(selector);
}

_.noop = function (value) { return value; };
_.once = function (fn) {
  return function () {
    if( fn ) fn.apply(this, arguments);
    fn = null;
  };
};
_.now = Date.now ? function () {
  return Date.now();
} : function () {
  return new Date().getTime();
};

_.usePolyfills = _.once(function () {
  require('./browser-polyfills');
});

_.q = require('parole');

extend.extend(_, extend,
  require('./key'),
  require('./type'),
  require('./path')
);

_.Scope = require('./scope');

_.extend(_, {
	animate: require('./deferred/animate'),
	wait: require('./deferred/wait')
});

_.extend(_, {
	ready: require('./fn/ready'),
	template: require('./fn/template'),
	once: require('./fn/once'),
	debounce: require('./fn/debounce')
});

_.extend(_,
  require('./events'),
	// _.on(el, eventName, handler, useCapture)
	// _.off(el, eventName, handler, useCapture)
	// _.triggerEvent(element, eventName, data)

  require('./dom')
  // _.create(tagName, attrs)
	// _.attr(el, name, value)
  // _.tmpClass(el, className, duration, cb)
);

_.extend(_, {
	normalize: require('./normalize'),
	// _.touchDevice === true | false
	// _.isMac === true | false
	// _.isAndroid === true | false

	scroll: require('./scroll/bundle') // scroll is not available until document is ready
	// _.scroll.on( handler, useCapture )
	// _.scroll.off( handler, useCapture )
	// _.scroll.top()
	// _.scroll.goto(value)
	// _.scroll.animateTo(value | HTMLElement, callback, duration): Promise
	// _,scroll.inAnimation === true | false
});

module.exports = _;

},{"./browser-polyfills":11,"./deferred/animate":18,"./deferred/wait":19,"./dom":20,"./events":22,"./extend":23,"./fn/debounce":24,"./fn/once":25,"./fn/ready":26,"./fn/template":27,"./key":28,"./normalize":29,"./path":30,"./scope":31,"./scroll/bundle":34,"./type":36,"parole":9}],18:[function(require,module,exports){

var Parole = require('parole'),
    beizerEasing = require('bezier-easing'),
    timingFunctions = {},
    noop = function () {},
    getTimingFunction = function (timingFunctionName) {
      if( !timingFunctions[timingFunctionName] ) {
        if( timingFunctionName === 'linear' ) {
          timingFunctions[timingFunctionName] = function ( value ) { return value; };
        } else if( timingFunctionName === 'ease' ) {
          timingFunctions[timingFunctionName] = beizerEasing(.17,.67,.83,.67);
        } else if( timingFunctionName === 'ease-in' ) {
          timingFunctions[timingFunctionName] = beizerEasing(.42,0,1,1);
        } else if( timingFunctionName === 'ease-out' ) {
          timingFunctions[timingFunctionName] = beizerEasing(0,0,.58,1);
        } else if( timingFunctionName === 'ease-in-out' ) {
          timingFunctions[timingFunctionName] = beizerEasing(.42,0,.58,1);
        }
      }
      return timingFunctions[timingFunctionName];
    };

var now = Date.now ? function () {
  return Date.now();
} : function () {
  return new Date().getTime();
};

function animate (progressFn, duration, atEnd, timingFunctionName) {
  var aux;
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
      deferred = Parole.defer();

  if( duration > 0 ) {
    var start = now(),
        interval = setInterval(function () {
          var elapsed = now() - start;

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
      t = ms ? Number(t) : Number(t)*1000;
      if( t > time ) {
        time = t;
      }
    });
  }
  // console.log('animationTime', el, time);
  return time;
};

module.exports = animate;

},{"bezier-easing":3,"parole":9}],19:[function(require,module,exports){

var Parole = require('parole'),
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
		return new Parole(function (resolve) {
			setTimeout(function () {
				resolve();
				if( callback ) {
					callback();
				}
			}, delay);
		});
	};

module.exports = wait;

},{"parole":9}],20:[function(require,module,exports){

var classListEnabled = !!document.createElement('div').classList;

var classListHas = classListEnabled ? function (el, className) {
      return el.classList.contains(className);
    } : function (el, className) {
      return new RegExp('\\b' + (className || '') + '\\b','').test(el.className);
    },
    classListAdd = classListEnabled ? function (el, className) {
      el.classList.add(className);
    } : function (el, className) {
      if( !classListHas(el, className) ) {
        el.className += ' ' + className;
      }
    },
    classListRemove = classListEnabled ? function (el, className) {
      el.classList.remove(className);
    } : function (el, className) {
      el.className = el.className.replace(new RegExp('\\s*' + className + '\\s*','g'), ' ');
    };

var _dom = {
  currentScript: document.currentScript || (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })(),
  addClass: classListAdd,
  removeClass: classListRemove,
  hasClass: classListHas,
  toggleClass: function (el, className, toggle) {
    toggle = toggle === undefined ? !classListHas(el, className) : toggle;

    if( toggle ) {
      classListAdd(el, className);
    } else {
      classListRemove(el, className);
    }
    return toggle;
  },
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
        classListAdd(_el, className);
      });
    } else {
      classListAdd(el, className);
    }
    setTimeout(function () {
      if( isCollection ) {
        [].forEach.call(el, function (_el) {
          classListRemove(_el, className);
        });
      } else {
        classListRemove(el, className);
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

},{}],21:[function(require,module,exports){

'use strict';

module.exports = function (expression) {

  /* jshint ignore:start */
  var fn = new Function('model', 'try{ with(model) { return (' + expression + ') }; } catch(err) { return \'\'; }');
  /* jshint ignore:end */
  return function (model, thisArg) {
    return fn.call(thisArg, model);
  };
};

},{}],22:[function(require,module,exports){

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
    var event = document.createEvent('HTMLEvents');
    event.data = data;
    event.initEvent(eventName, true, true);
    element.dispatchEvent(event);
    return event;
  } : function (element, eventName, data) {
    var event = document.createEventObject();
    event.data = data;
    element.fireEvent('on' + eventName, event);
    return event;
  }
};

},{}],23:[function(require,module,exports){

var arrayShift = [].shift,
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

},{"./_extend":10,"./type":36}],24:[function(require,module,exports){

function debounce (fn, timeslot) {
  timeslot = timeslot || 80;

  var timer = null;

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

},{}],25:[function(require,module,exports){

function once (fn, nextValue) {
  var result, hasNextValue = arguments.length > 1;
  return function () {
    if( fn ) {
      result = fn.apply(this, arguments);
      fn = null;
      return result;
    }
    return hasNextValue ? nextValue : result;
  };
}

module.exports = once;

},{}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){

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
},{}],28:[function(require,module,exports){
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

},{"./type":36}],29:[function(require,module,exports){

var normalize = {
  isTouchDevice: 'ontouchstart' in document.documentElement,
  isMac: /^Mac/.test(navigator.platform),
  isAndroid: /^Android/.test(navigator.platform),
  addHTMLClasses: function () {
    var _ = require('./dom');

    _.addClass(document.documentElement, normalize.isTouchDevice ? 'touch' : 'no-touch' );
    if( normalize.isMac ) {
      _.addClass(document.documentElement, 'is-mac');
    }
    if( normalize.isAndroid ) {
      _.addClass(document.documentElement, 'is-android');
    }
  }
};

module.exports = normalize;

},{"./dom":20}],30:[function(require,module,exports){
var RE_dotsBack = /[^\/]+\/\.\.\//g,
	clearStr = function () { return ''; };

function _joinPath () {
    var path = (arguments[0] || '').replace(/\/$/, '');

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

},{}],31:[function(require,module,exports){
'use strict';

var evalExpression = require('./eval');

var Scope = function (data) {
	if(!this) {
		return new Scope(data);
	}

  this.extend(data || {});
};

Scope.prototype.new = function(data) {
    return Object.create(this).extend(data);
};

Scope.prototype.extend = function(data) {
  for( var key in data ) {
    this[key] = data[key];
  }
  return this;
};

Scope.prototype.eval = function ( expression, thisArg ) {
  return evalExpression(expression)(this, thisArg);
};

module.exports = Scope;

},{"./eval":21}],32:[function(require,module,exports){

function getScrollRoot () {
  var html = document.documentElement, body = document.body;

  if( html.scrollTop ) return html;
  if( body.scrollTop ) return body;

  var cacheTop = ((typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : null) || body.scrollTop || html.scrollTop, // cache the window's current scroll position
      root;

  html.scrollTop = body.scrollTop = cacheTop + (cacheTop > 0) ? -1 : 1;
  // find root by checking which scrollTop has a value larger than the cache.
  root = (html.scrollTop !== cacheTop) ? html : body;

  root.scrollTop = cacheTop; // restore the window's scroll position to cached value

  return root; // return the scrolling root element
}

var ready = require('./fn/ready'),
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

},{"./fn/ready":26}],33:[function(require,module,exports){

module.exports = function (scroll) {

	var animate = require('../deferred/animate'),
			Parole = require('parole'),
			noop = function() {},
			scrollAnimation = animate(noop, 0),
			aux;

	scroll.animation = function () {
		return scrollAnimation;
	};

	scroll.animateTo = function (value, cb, duration ) {
		var scrollFrom = scroll.top();

		if( value === undefined ) {
			return Parole.reject();
		}
		if( value instanceof Element ) {
			// position from top of the page
			value = value.getBoundingClientRect().top + scrollFrom;
		}

		if( typeof cb === 'number' ) {
			aux = duration;
			duration = cb;
			cb = typeof aux === 'function' ? aux : noop;
		}

		var scrollDelta = value - scrollFrom;

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

},{"../deferred/animate":18,"parole":9}],34:[function(require,module,exports){

var scroll = require('../scroll');

require('./top-class')(scroll);
require('./animate')(scroll);

module.exports = scroll;
},{"../scroll":32,"./animate":33,"./top-class":35}],35:[function(require,module,exports){

module.exports = function (scroll) {

	var ready = require('../fn/ready');

	scroll.autoTopClass = function (topClass, topClassAlt) {

		topClass = topClass || 'js-scroll-top';
		topClassAlt = topClassAlt || 'js-no-scroll-top';

    ready(function () {
      var _ = require('../dom');
      scroll.on(function () {
        _.toggleClass(document.documentElement, topClass,
          !_.toggleClass(document.documentElement, topClassAlt, scroll.top() )
        );
      });
    });
	};

};

},{"../dom":20,"../fn/ready":26}],36:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],37:[function(require,module,exports){

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
  return prefix + ('' + amount).replace(/(\d*)(\d{2})$/, function (_matched, main, tail) {
    return thousands(main) + ',' + tail;
  });
}

function parsePrice (price) {
  var matched = price.match(/((\d+[,. ])*)(\d+)/),
      main, tail;

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
}

module.exports = {
	getAmount: getAmount,
	parsePrice: parsePrice
};

},{}],38:[function(require,module,exports){

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

},{"nitro-tools/extend":5}],39:[function(require,module,exports){


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

},{}],40:[function(require,module,exports){


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
	return text.replace(/_(\w)/g, function (_matched, letter) {
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

},{}],41:[function(require,module,exports){
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
          triggerListeners(target);
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

},{"./browser-tools":38}],42:[function(require,module,exports){


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
}

log.history = [];

module.exports = log;

},{}],43:[function(require,module,exports){

var messageTarget = {},
    showLogs = false,
    log = require('./log');

window.addEventListener('message', function (e) {
  var message = e.data,
      listeners = messageTarget[message.aplazame];

  if( !listeners ) {
    return;
  }

  if( showLogs && !e.used ) {
    log('message', e, listeners);
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

},{"./log":42}],44:[function(require,module,exports){

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

},{}],45:[function(require,module,exports){

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

},{"./amount-price":37,"./browser-tools":38,"./colors":39,"./deserialize":40,"./live-dom":41,"./log":42,"./message-listener":43,"./template":44,"nitro-tools/lists":6,"nitro-tools/path":7,"vanilla-tools":17}],46:[function(require,module,exports){

var _ = require('../../src/tools/tools'),
    each = Array.prototype.forEach,
    waitingForData;


var tmplModalInstalments = require('../../.tmp/simulator/templates/modal-instalments.tmpl'),
    tmplWidget = require('../../.tmp/simulator/templates/widget-button.tmpl');

function emitSize () {
  setTimeout(function () {
    parent.window.postMessage({
      aplazame: 'simulator',
      event: 'resize',
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }, '*');
  },1);
}

window.addEventListener('load', emitSize);
window.addEventListener('resize', emitSize);

function maxInstalments (prev, choice) {
  if( prev === null ) {
    return choice;
  } else {
    return choice.num_instalments > prev.num_instalments ? choice : prev;
  }
}

var main = document.getElementById('main'), currentMessage,
    widgetActions = {
      showInfo: function () {
        parent.window.postMessage({
          aplazame: 'modal',
          event: 'open',
          name: 'instalments',
          data: {
            size: 'lg',
            card: {
              className: 'modal-instalments-info'
            },
            template: tmplModalInstalments({
              selectedChoice: currentMessage.$$choice,
              choices: currentMessage.choices,
              getAmount: _.getAmount,
              months: function (m) {
                return m > 1 ? 'meses' : 'mes';
              }
            })
          }
        }, '*');
      }
    },
    renderWidget = function () {
      _.removeClass(main, 'loading');
      main.innerHTML = tmplWidget({
        getAmount: _.getAmount,
        brightness: _.brightness,
        choice: currentMessage.$$choice,
        options: currentMessage.options,
        amount: currentMessage.amount,
        preferences: currentMessage.options.widget.preferences,
        isMobile: currentMessage.isMobile
      });
      emitSize();

      each.call( main.querySelectorAll('[data-action]'), function (element) {

        element.addEventListener('click', function (e) {
          var action = element.getAttribute('data-action');

          if( action !== undefined ) {
            e.preventDefault();
          }

          if( widgetActions[action] ) {
            widgetActions[action]();
          }
        });

      } );
    },
    onMessage = {
      choices: function (message) {
        if( waitingForData ) {
          clearInterval(waitingForData);
        }
        currentMessage = message;
        currentMessage.$$choice = currentMessage.choices.reduce(maxInstalments, null);

        var price = document.getElementById('.aplazame-widget-button .amount .price');

        if( price ) {
          price.textContent = _.getAmount(currentMessage.$$choice.amount);
        } else {
          renderWidget();
        }

      },
      loading: function (_message) {
        _.addClass(main, 'loading');
      },
      abort: function (_message) {
        _.removeClass(main, 'loading');
      }
    };

_.onMessage('simulator', function (_e, message) {
  if( onMessage[message.event] ) {
    onMessage[message.event](message);
  }
});

var simulatorId = -1;

if( location.href.match(/[\?&]simulator=(\w+?)(\&|$)/) ) {
  simulatorId = Number(location.href.match(/[\?&]simulator=(\w+?)(\&|$)/)[1]);
}

function requireData () {
  parent.window.postMessage({
    aplazame: 'simulator',
    event: 'require.choices',
    simulatorId: simulatorId
  }, '*');
}

requireData();

},{"../../.tmp/simulator/templates/modal-instalments.tmpl":1,"../../.tmp/simulator/templates/widget-button.tmpl":2,"../../src/tools/tools":45}]},{},[46]);
