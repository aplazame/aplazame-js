(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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

},{}],2:[function(require,module,exports){

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

},{"./_extend":1,"./type":5}],3:[function(require,module,exports){

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

},{"./type":5}],4:[function(require,module,exports){

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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){

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

},{}],7:[function(require,module,exports){

document.currentScript = document.currentScript || (function() {
   var scripts = document.getElementsByTagName('script');
   return scripts[scripts.length - 1];
 })();

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

var _classActions = {
  add: document.documentElement.classList ? function (element, className) {
    element.classList.add(className);
  } : function (element, className) {
    var RE_CLEANCLASS = new RegExp('\\b' + (className || '') + '\\b','');
    _classActions.remove(element, className);
    element.className += ' ' + className;
  },
  remove: document.documentElement.classList ? function (element, className) {
    element.classList.remove(className);
  } : function (element, className) {
    var RE_CLEANCLASS = new RegExp('\\b' + (className || '') + '\\b','');
    element.className = element.className.replace(RE_CLEANCLASS,'');
  },
  action: function (action, tools) {
    return function (element, className) {
      if( className.indexOf(' ') >= 0 ) {
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

var addClass = _classActions.action('add', _ ),
    removeClass = _classActions.action('remove', _ ),
    tmpClass = function (element, className, delay) {
      addClass(element, className);
      setTimeout(function () {
        removeClass(element, className);
      }, delay);
      return _;
    };

_.addClass = addClass;
_.removeClass = removeClass;
_.tmpClass = tmpClass;

module.exports = _;

},{"nitro-tools/extend":2}],9:[function(require,module,exports){


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

},{}],10:[function(require,module,exports){


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

},{}],11:[function(require,module,exports){
'use strict';

var suscriptors = [],
    running = false;
    // nUpdates = 0;

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

},{"./browser-tools":8}],12:[function(require,module,exports){


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

},{}],13:[function(require,module,exports){

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

},{}],14:[function(require,module,exports){

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

},{}],15:[function(require,module,exports){
// 'use strict';

require('./browser-polyfills');

// require('q-promise').usePolyfill();

var _ = require('nitro-tools/extend');

_.extend(_,
  require('nitro-tools/key'),
  require('nitro-tools/type'),
  // require('nitro-tools/lists'),
  {
    each: function (list, iteratee, thisArg) {
      for( var i = 0, n = list.length ; i < n ; i++ ) {
        iteratee.call(list[i], list[i], i);
      }
    },
    find: function (list, iteratee, thisArg) {
      for( var i = 0, n = list.length ; i < n ; i++ ) {
        if( iteratee.call(list[i], list[i], i) ) {
          return list[i];
        }
      }
      return null;
    },
    debounce: function (fn, timeslot) {
      var timer = null;
      
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
  },
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

},{"./amount-price":6,"./browser-polyfills":7,"./browser-tools":8,"./colors":9,"./deserialize":10,"./live-dom":11,"./log":12,"./message-listener":13,"./template":14,"nitro-tools/extend":2,"nitro-tools/key":3,"nitro-tools/path":4,"nitro-tools/type":5}],16:[function(require,module,exports){
var _ = require('../../src/tools/tools');

window.matchMedia = window.matchMedia || window.webkitMatchMedia || window.mozMatchMedia || window.msMatchMedia;

var modal, card,
    isMobile = window.matchMedia('( max-width: 767px )');

_.ready(function () {
  var _m = document.querySelector('.modal');
  _m.className = _m.className.replace(' is-opening', '');
}, 600);

function closeModal (resolved, value) {
  modal.className += ' is-closing';

  parent.window.postMessage({
    aplazame: 'modal',
    event: 'closing'
  }, '*');

  if( resolved ) {
    parent.window.postMessage({
      aplazame: 'modal',
      event: 'resolved',
      value: value
    }, '*');
  }

  setTimeout(function () {
    parent.window.postMessage({
      aplazame: 'modal',
      event: 'close'
    }, '*');
  }, isMobile.matches ? 0 : 500 );
}

function initListeners () {
  card.addEventListener('click', function (e) {
    e.stopPropagation();
  });
  card.addEventListener('touchstart', function (e) {
    e.stopPropagation();
  });
  card.addEventListener('touchend', function (e) {
    e.stopPropagation();
  });

  document.body.addEventListener('click', function () {
    closeModal(false);
  });

  var touched;
  document.body.addEventListener('touchstart', function (e) {
    touched = { x: e.pageX, y: e.pageY };
  });
  document.body.addEventListener('touchend', function (e) {
    if( e.pageX === touched.x && e.pageY === touched.y ) {
      closeModal(false);
    }
  });

  [].forEach.call( document.querySelectorAll('[modal-resolve]'), function (element) {
    element.addEventListener('click', function (e) {
      closeModal(true, element.getAttribute('modal-resolve') );
    });
  });

  [].forEach.call( document.querySelectorAll('[modal-reject]'), function (element) {
    element.addEventListener( 'click', function (e) {
      // e.stopPropagation();
      closeModal(false, element.getAttribute('modal-reject') );
    });
  });

  [].forEach.call( document.querySelectorAll('[data-widget="active-group"]'), function (element) {

    var currentChoice;

    [].forEach.call( document.querySelectorAll('[data-widget="active-toggle"]'), function (toggle) {
      toggle.addEventListener('click', function (e) {
        if( currentChoice ) {
          _.removeClass(currentChoice, 'active');
        }
        _.addClass(toggle, 'active');
        currentChoice = toggle;
      });
    });

  });
}

_.onMessage('modal', function (e, message) {
  if( message.event === 'content' ) {
    var container = document.querySelector('.modals-container');
    _.tmpClass(container, 'opening-wrapper', isMobile.matches ? 0 : 600 );
    container.innerHTML = message.content.card;

    parent.window.postMessage({ aplazame: 'modal', event: 'opening' }, '*');

    modal = document.querySelector('.modal');
    card = document.querySelector('.card');

    _.addClass(modal, 'is-opening');

    initListeners();
  }
});

_.ready(function () {
  _.scrollTop(0);
  // setTimeout(function () {
  //   _.scrollTop(0);
  // }, 10);
  parent.window.postMessage({ aplazame: 'modal', event: 'opened' }, '*');
});

},{"../../src/tools/tools":15}]},{},[16]);
