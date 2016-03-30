(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* globals aplazame */

var _ = require('../src/tools/tools');

_.template.lookup();

var form = document.querySelector('form[data-submit="updateValues"]'),
    resultsWrapper = document.querySelector('.demo-simulator-section'),
    results = document.querySelector('.demo-simulator-results'),
    amount = form.querySelector('input[name="amount"]');

amount.value = localStorage.getItem('demo-simulator-amount');

function getCents(value) {
  var values = value.split(/[,.]/);
  return '' + (Number(values[0] ? 100 * values[0] : 0) + Number(values[1] || 0));
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  localStorage.setItem('demo-simulator-amount', amount.value);

  var currentAmount = getCents(amount.value);

  resultsWrapper.querySelector('.section-title > h3').innerHTML = 'cargando...';
  _.removeClass(resultsWrapper, 'hidden');
  _.addClass(results, 'hidden');

  aplazame.simulator(currentAmount, { noCache: true }, function (choices) {
    console.log('simulator', currentAmount, choices);
    resultsWrapper.querySelector('.section-title > h3').innerHTML = 'Resultados';
    _.removeClass(results, 'hidden');

    results.innerHTML = _.template('results', {
      getAmount: _.getAmount,
      choices: choices,
      months: function (m) {
        return m > 1 ? 'meses' : 'mes';
      }
    });
  });
});

},{"../src/tools/tools":14}],2:[function(require,module,exports){

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

},{}],3:[function(require,module,exports){

var RE_$$ = /^\$\$/,
    arrayShift = [].shift,
    _ = require('./kit-type');

function _merge () {
    var dest = arrayShift.call(arguments),
        src = arrayShift.call(arguments),
        key;

    while( src ) {

      if( typeof dest !== typeof src ) {
          dest = _.isArray(src) ? [] : ( _.isObject(src) ? {} : src );
      }

      if( _.isObject(src) ) {

        for( key in src ) {
          if( src[key] === undefined ) {
            dest[key] = undefined;
          } else if( typeof dest[key] !== typeof src[key] ) {
            dest[key] = _merge(undefined, src[key]);
          } else if( _.isArray(dest[key]) ) {
            [].push.apply(dest[key], src[key]);
          } else if( _.isObject(dest[key]) ) {
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

module.exports = {
  extend: require('./extend'),
  merge: _merge,
  copy: function (o) {
      return _merge(undefined, o);
  }
};

},{"./extend":2,"./kit-type":6}],4:[function(require,module,exports){

var _ = require('./kit-type');

function _eachInList( list, iteratee, thisArg ) {
    for( var i = 0, len = list.length; i < len ; i++ ) {
        iteratee.call(thisArg, list[i], i);
    }
}

function _eachInObject( o, iteratee, thisArg ) {
    for( var key in o ) {
        iteratee.call(thisArg, [o[key], key]);
    }
}

function each (o, iteratee, thisArg) {
  if( _.isArray(o) ) {
      _eachInList(o, iteratee, thisArg || this);
  } else if( _.isObject(o) ) {
      _eachInObject(o, iteratee, thisArg || this);
  }
}

function indexOf (list, iteratee, thisArg) {
	if( _.isFunction(iteratee) ) {
    for( var i = 0, len = list.length; i < len; i++ ) {
        if( iteratee.call(thisArg, list[i]) ) {
            return i;
        }
    }
		return -1;
  }
	return list.indexOf(iteratee);
}

function _indexBy (list, iteratee, thisArg) {
	var map = {};
	for( var i = 0, len = list.length; i < len; i++ ) {
      map[iteratee.call(thisArg, list[i])] = list[i];
  }
  return map;
}

function indexBy (list, iteratee, thisArg) {
	if( _.isString(iteratee) ) {
		return _indexBy(list, function (item) { return item[iteratee]; }, thisArg);
	} else if( _.isFunction(iteratee) ) {
		return _indexBy(list, iteratee, thisArg);
	}
	return {};
}

function some (list, iteratee, thisArg) {
  if( _.isArray(list) ) {
    return list.some(iteratee, thisArg);
  } else if( _.isObject(list) ) {
    for( var key in list )  {
      if( iteratee.call(thisArg, list[key], key) ) {
        return true;
      }
    }
    return false;
  }
};

function every (list, iteratee, thisArg) {
  if( _.isArray(list) ) {
    return list.every(iteratee, thisArg);
  } else if( _.isObject(list) ) {
    for( var key in list )  {
      if( !iteratee.call(thisArg, list[key], key) ) {
        return false;
      }
    }
    return true;
  }
};

function _map (list, iteratee, thisArg) {
  if( _.isArray(list) ) {
    return list.map(iteratee, thisArg);
  } else if( _.isObject(list) ) {
    var result = {};
    for( var key in list )  {
      result[key] = iteratee.call(thisArg, list[key], key);
    }
    return result;
  }
};

function map2List (list, iteratee, thisArg) {
  if( _.isArray(list) ) {
    return list.map(iteratee, thisArg);
  }
  var result = [], i = 0;
  for( var key in list )  {
    result[i++] = iteratee.call(thisArg, list[key], key);
  }
  return result;
};

function pluck (list, iteratee, thisArg) {
	if( _.isString(iteratee) ) {
		return list.map(function (item) { return item[iteratee]; }, thisArg);
	} else if( _.isFunction(iteratee) ) {
		return list.map(iteratee, thisArg);
	}
	return [];
}

function remove (list, iteratee, thisArg) {

    if( !_.isFunction(iteratee) ) {
			return remove(list, function (item) { return item === iteratee; }, thisArg);
		}

		thisArg = thisArg === undefined ? this : thisArg;

		for( var i = 0, len = list.length; i < len; i++ ) {
				if( iteratee.call(thisArg, list[i]) ) {
						list.splice(i, 1);
						i--;
				}
		}
}

function matchAll (o, filters) {
    for( var key in filters ) {
        if( o[key] !== filters[key] ) {
            return false;
        }
    }
    return true;
}

function matchAny (o, filters) {
    for( var key in filters ) {
        if( o[key] === filters[key] ) {
            return true;
        }
    }
    return false;
}

function iterateeFn (iteratee) {
	if( _.isFunction(iteratee) ) {
		return iteratee;
	}

	if( _.isObject(iteratee) ) {
		return function (item) {
			return matchAll(item, iteratee);
		};
	}

	return function (item) {
		return item === iteratee;
	};
}

function find (list, iteratee, thisArg) {
		thisArg = thisArg === undefined ? this : thisArg;
		iteratee = iterateeFn(iteratee);

		for( var i = 0, len = list.length ; i < len ; i++ ) {
        if( iteratee.call(thisArg, list[i]) ) {
            return list[i];
        }
    }
		return null;
}

function filter (list, iteratee, thisArg) {
    var newList = [];

		thisArg = thisArg === undefined ? this : thisArg;
		iteratee = iterateeFn(iteratee);

		for( var i = 0, len = list.length ; i < len ; i++ ) {
        if( iteratee.call(thisArg, list[i]) ) {
            newList.push(list[i]);
        }
    }

    return newList;
}

module.exports = {
  matchAll: matchAll,
  matchAny: matchAny,
  find: find,
  filter: filter,
  each: each,
  some: some,
  every: every,
  map: _map,
  map2List: map2List,
  indexOf: indexOf,
  indexBy: indexBy,
  pluck: pluck,
  remove: remove
};

},{"./kit-type":6}],5:[function(require,module,exports){

function _joinPath () {
    var path = (arguments[0] || '').replace(/\/$/, '');

    for( var i = 1, len = arguments.length - 1 ; i < len ; i++ ) {
        path += '/' + arguments[i].replace(/^\/|\/$/, '');
    }
    if( len ) {
        path += arguments[len] ? ( '/' + arguments[len].replace(/^\//, '') ) : '';
    }

    return path;
}

module.exports = {
  joinPath: _joinPath
};

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){

if (!Element.prototype.matchesSelector) {
  Element.prototype.matchesSelector = Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (selector) {
    var el = this;

    while (el) {
      if (el.matchesSelector(selector)) {
        break;
      }
      el = el.parentElement;
    }
    return el;
  };
}

if (!Element.prototype.addEventListener) {
  if (Element.prototype.attachEvent) {
    Element.prototype.addEventListener = function (eventName, listener) {
      return Element.prototype.attachEvent('on' + eventName, listener);
    };
    Element.prototype.removeEventListener = function (eventName, listener) {
      return Element.prototype.detachEvent('on' + eventName, listener);
    };
  } else {
    throw 'Browser not compatible with element events';
  }
}

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}

(function (root) {
  'use strict';

  root.matchMedia = root.matchMedia || root.webkitMatchMedia || root.mozMatchMedia || root.msMatchMedia;
})(this);

},{}],8:[function(require,module,exports){

function _ready(_callback, delay) {
  var callback = delay ? function () {
    setTimeout(_callback, delay);
  } : _callback;

  if (/loaded|complete/.test(document.readyState)) {
    callback();
  } else {
    window.addEventListener('load', callback);
  }
}

function findBubbleClose(str) {
  var level = 0;

  for (var i = 0, len = str.length; i < len; i++) {
    if (str[i] === '(') {
      level++;
    } else if (str[i] === ')') {
      if (level === 0) {
        return i;
      } else {
        level--;
      }
    }
  }

  return -1;
}

function hasSelector(selector, rootElement) {
  var splitHas = selector.split(':has(');

  return splitHas.reduce(function (matches, partial) {

    var closePosition = findBubbleClose(partial),
        hasFilter = partial.substr(0, closePosition),
        partialQuery = partial.substr(closePosition + 1).trim();

    if (closePosition === -1) {
      throw new Error('malformed selector');
    }

    matches = matches.filter(function (element) {
      return element.querySelector(hasFilter);
    });

    if (partialQuery) {
      var submatches = [];

      matches.forEach(function (element) {
        [].push.apply(submatches, element.querySelectorAll(partialQuery));
      });

      return submatches;
    }

    return matches;
  }, [].slice.call((rootElement || document).querySelectorAll(splitHas.shift())));
}

function querySelector(selector, rootElement) {
  // 'tr:has(> .row) div:has(span) img'.split(':has(');
  if (!selector) {
    return [];
  }

  if (!/\:has\(/.test(selector)) {
    return [].slice.call((rootElement || document).querySelectorAll(selector));
  }

  return hasSelector(selector);
}

function cssQuery(_selector, rootElement) {
  var selectors = _selector.split(/\s*,\s*/);

  return selectors.reduce(function (list, selector) {
    return list.concat(querySelector(selector, rootElement));
  }, []);
}

function scrollTop(value) {
  if (value !== undefined) {
    document.documentElement.scrollTop = value;
    document.body.scrollTop = value;
  }
  return document.documentElement.scrollTop || document.body.scrollTop;
}

function clearElement(el) {
  var child = el.firstChild;

  while (child) {
    el.removeChild(child);
    child = el.firstChild;
  }
}

var _classActions = {
  add: document.documentElement.classList ? function (element, className) {
    element.classList.add(className);
  } : function (element, className) {
    var RE_CLEANCLASS = new RegExp('\\b' + (className || '') + '\\b', '');
    _classActions.remove(element, className);
    element.className += ' ' + className;
  },
  remove: document.documentElement.classList ? function (element, className) {
    element.classList.remove(className);
  } : function (element, className) {
    var RE_CLEANCLASS = new RegExp('\\b' + (className || '') + '\\b', '');
    element.className = element.className.replace(RE_CLEANCLASS, '');
  },
  action: function (action, tools) {
    return function (element, className) {
      if (className.indexOf(' ') >= 0) {
        className.split(' ').forEach(function (cn) {
          _classActions[action](element, cn);
        });
      } else {
        _classActions[action](element, className);
      }
      return tools;
    };
  }
};

module.exports = function (_) {

  function writeIframe(iframe, content) {
    var iframeDoc = iframe.contentWindow.document;
    try {
      iframeDoc.charset = 'UTF-8';
    } catch (err) {}
    iframeDoc.open();
    iframeDoc.write(content);
    iframeDoc.close();
  }

  function getIFrame(iframeStyles) {
    var iframe = document.createElement('iframe');
    _.extend(iframe.style, iframeStyles || {});

    iframe.frameBorder = '0';
    return iframe;
  }

  var addClass = _classActions.action('add', _);
  var removeClass = _classActions.action('remove', _);

  return {
    ready: _ready,
    getIFrame: getIFrame,
    writeIframe: writeIframe,
    cssQuery: cssQuery,
    scrollTop: scrollTop,
    clearElement: clearElement,
    addClass: addClass,
    removeClass: removeClass,
    tmpClass: function (element, className, delay) {
      addClass(element, className);
      setTimeout(function () {
        removeClass(element, className);
      }, delay);
      return _;
    },
    elementData: document.createElement('div').dataset ? function (el, key, value) {
      if (value !== undefined) {
        el.dataset[key] = value;
      }
      return el.dataset[key];
    } : function (el, key, value) {
      if (value !== undefined) {
        el.setAttribute('data-' + key, value);
      }
      return el.getAttribute('data-' + key);
    }
  };
};

},{}],9:[function(require,module,exports){


function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
}

function brightness(color) {
  var rgb = hexToRgb(color);
  var o = Math.round((parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000);
  return o < 100 ? 'dark' : o > 230 ? 'light' : 'medium';
}

module.exports = {
  hexToRgb: hexToRgb,
  brightness: brightness
};

},{}],10:[function(require,module,exports){
'use strict';

module.exports = function (_) {
  var suscriptors = [],
      running = false;

  function initLiveDOM() {

    _.ready(function () {
      document.body.addEventListener('DOMSubtreeModified', function (event) {
        // console.debug( 'DOM Changed at ', new Date(), event.target );
        for (var i = 0, n = suscriptors.length; i < n; i++) {
          suscriptors[i](event.target);
        }
      }, false);
    });
  }

  return {
    subscribe: function (handler) {
      if (!running) {
        initLiveDOM(true);
        running = true;
      }
      if (handler instanceof Function) {
        suscriptors.push(handler);
      }
    }
  };
};

},{}],11:[function(require,module,exports){


function getErrorObject() {
  try {
    throw Error('');
  } catch (err) {
    return err;
  }
}

function log() {
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

},{}],12:[function(require,module,exports){

module.exports = function (_) {

  var messageTarget = {};

  window.addEventListener('message', function (e) {
    var message = e.data,
        listener = messageTarget[message.aplazame];

    if (!e.used && listener) {
      e.used = true;
      listener(e, message);
    }
  });

  return function (target, handler) {
    if (_.isString(target) && _.isFunction(handler)) {
      messageTarget[target] = handler;
    }
  };
};

},{}],13:[function(require,module,exports){

function template(name, data) {
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
  tmpl.trim().replace(/[\r\t\n]/g, ' ').split('<%').join('\t').replace(/((^|%>)[^\t]*)'/g, '$1\r').replace(/\t=(.*?)%>/g, '\',$1,\'').split('\t').join('\');').split('%>').join('p.push(\'').split('\r').join('\\\'') + '\');}return p.join(\'\');');
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

},{}],14:[function(require,module,exports){
// 'use strict';

require('./browser-polyfills');

var _ = require('nitro-tools/lib/kit-extend');

_.extend(_, require('nitro-tools/lib/kit-type'), require('nitro-tools/lib/kit-lists'), require('nitro-tools/lib/kit-path'));

_.log = require('./log');

function getAmount(amount) {
  var prefix = '';

  if (amount < 0) {
    prefix = '-';
    amount = 0 - amount;
  }

  if (!amount) {
    return '0,00';
  } else if (amount < 10) {
    return '0,0' + amount;
  } else if (amount < 100) {
    return '0,' + amount;
  }
  return prefix + ('' + amount).replace(/..$/, ',$&');
}

_.extend(_, require('./colors'), require('./browser-tools')(_), {
  liveDOM: require('./live-dom')(_),
  template: require('./template'),
  getAmount: getAmount,
  onMessage: require('./message-listener')(_)
});

module.exports = _;

},{"./browser-polyfills":7,"./browser-tools":8,"./colors":9,"./live-dom":10,"./log":11,"./message-listener":12,"./template":13,"nitro-tools/lib/kit-extend":3,"nitro-tools/lib/kit-lists":4,"nitro-tools/lib/kit-path":5,"nitro-tools/lib/kit-type":6}]},{},[1]);
