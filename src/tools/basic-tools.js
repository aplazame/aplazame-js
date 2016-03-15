
require('./browser-polyfills');

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

var _isObject = _isType('object'),
    _isFunction = _isType('function'),
    _isString = _isType('string'),
    _isNumber = _isType('number'),
    _isArray = Array.isArray || _instanceOf(Array),
    _isDate = _instanceOf(Date),
    _isRegExp = _instanceOf(RegExp),
    _isElement = function(o) {
      return o && o.nodeType === 1;
    };

function listen (element, eventName, listener) {
  if( element instanceof Array ) {
    for( var i = 0, n = element.length ; i < n ; i++ ) {
      element[i].addEventListener(eventName, listener, false);
    }
    return;
  }
  element.addEventListener(eventName, listener, false);
}

function _ready (callback) {
  if (/loaded|complete/.test(document.readyState)) {
    callback();
  } else {
    window.addEventListener('load', callback);
  }
}

function once (fn) {
  var done;
  return function () {
    if( !done ) {
      done = true;
      return fn.apply(this, arguments);
    }
  };
}

function docReady (_callback, delay) {
  var callback = delay ? function () { setTimeout(_callback, delay); } : _callback;

  if( document.readyState === 'complete' ) {
    callback();
  } else {
    listen(window, 'load', callback);
  }
}

function replaceKeys (tmpl, keys) {
  return keys ? tmpl.replace(/\{\{([^\}]+)\}\}/g, function (match, key) {
    return keys[key];
  }) : function (ks) {
    return replaceKeys(tmpl, ks);
  };
}

var arrayShift = [].shift;
function extend () {
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
}

function merge () {
    var dest = arrayShift.call(arguments),
        src = arrayShift.call(arguments),
        key;

    while( src ) {

        if( typeof dest !== typeof src ) {
            dest = _isArray(src) ? [] : ( _isObject(src) ? {} : src );
        }

        if( _isObject(src) ) {

            for( key in src ) {
                if( src[key] !== undefined ) {
                    if( typeof dest[key] !== typeof src[key] ) {
                        dest[key] = merge(undefined, src[key]);
                    } else if( _isArray(dest[key]) ) {
                        [].push.apply(dest[key], src[key]);
                    } else if( _isObject(dest[key]) ) {
                        dest[key] = merge(dest[key], src[key]);
                    } else {
                        dest[key] = src[key];
                    }
                }
            }
        }
        src = arrayShift.call(arguments);
    }

    return dest;
}

function joinPath () {
  return [].reduce.call(arguments, function (prev, path, index, list) {

    path = index ? path.replace(/^\//, '') : path;
    path = ( index === (list.length - 1) ) ? path : path.replace(/\/$/, '');

    return prev + ( index ? '/' : '' ) + path;

  }, '');
}

function writeIframe (iframe, content) {
  var iframeDoc = iframe.contentWindow.document;
  try { iframeDoc.charset = 'UTF-8'; } catch(err) {}
  iframeDoc.open();
  iframeDoc.write(content);
  iframeDoc.close();
}

function getIFrame (iframeStyles) {
  var iframe = document.createElement('iframe');
  extend(iframe.style, iframeStyles || {});

  iframe.frameBorder = '0';
  return iframe;
}

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
  return prefix + ('' + amount).replace(/..$/, ',$&');
}

var cssHack = (function () {
  var cache = {},
      hacks = {
        overlay: '.aplazame-overlay { font-family: \'Montserrat\', sans-serif; position: fixed; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; width: 100vw; height: 100vh; background: rgba(53, 64, 71, 0.9); text-align:center;} .aplazame-overlay::before{content:\'\';display:block;height:50vh;}.aplazame-logo-wrapper{display:inline-block;margin-top:-50%;} .aplazame-checkout-loading-text{color:#95A6B1;margin-top:14px;font-size:14px;}' +
                '@keyframes aplazame-overlay{0%{opacity:0}0%,to{transform:translateZ(0)}to{opacity:1}}.aplazame-overlay{animation-duration:.4s;animation-name:aplazame-overlay}' +
                  '@keyframes aplazame-logo-rotate360{0%{transform:rotate(0deg)}60%,90%,to{transform:rotate(1turn)}}@keyframes aplazame-logo-rotate360-delay{0%,30%{transform:rotate(0deg)}90%,to{transform:rotate(1turn)}}@keyframes aplazame-logo-rotate720{0%{transform:rotate(0deg)}90%,to{transform:rotate(2turn)}}.logo-aplazame{position:relative;display:inline-block;transform:translateZ(0);width:150px;height:150px}.logo-aplazame .line-large,.logo-aplazame .line-short,.logo-aplazame .smile{stroke:#ddd}.logo-aplazame .smile-outline{stroke:#485259}@media (min-width:480px){.logo-aplazame{width:200px;height:200px}}.logo-aplazame svg{position:absolute;top:0;left:0;width:100%;height:100%}.logo-aplazame.animate .line-large,.logo-aplazame.animate .line-short,.logo-aplazame.animate .smile{animation-timing-function:cubic-beizer(0,.35,.65,1);animation-iteration-count:infinite}.logo-aplazame.animate .smile{animation-name:aplazame-logo-rotate720;animation-duration:1.5s}.logo-aplazame.animate .line-large{animation-name:aplazame-logo-rotate360;animation-duration:1.5s}.logo-aplazame.animate .line-short{animation-name:aplazame-logo-rotate360-delay;animation-duration:1.5s}',
        blur: 'body > *:not(.aplazame-modal):not(.aplazame-overlay) { -webkit-filter: blur(0px); filter: blur(0px); transition: all 0.4s linear; } body.aplazame-blur > *:not(.aplazame-modal):not(.aplazame-overlay) { -webkit-filter: blur(3px); filter: blur(3px); }',
        // modal: '.aplazame-modal { height: 100%; } html, body { margin: 0; padding: 0; } @media (max-width: 767px) { body > *:not(.aplazame-modal) { display: none; } }'
        modal: '.aplazame-modal { height: 100%; } body { overflow: hidden; } .aplazame-modal.hide {display:none;}' +
               '@media (max-width: 600px) { html { background-color: #333A3E; } html, body { height: 100%; margin: 0; padding: 0; } body > *:not(.aplazame-modal) { display: none; } iframe.aplazame-modal { position: absolute; } }' +
               '@media (min-width: 601px) { .aplazame-modal { position: fixed; } }'
        // overflow: '/* html { height: 100%; } body { overflow: hidden; } */',
        // inputFocus: 'html, body { height: 100vh; overflow: hidden; }'
      };

  return function hack (hackName) {
    if( !cache[hackName] ) {
      var style = document.createElement('style');
      style.setAttribute('rel', 'stylesheet');
      style.setAttribute('type', 'text/css');
      style.textContent = hacks[hackName].replace(/;/g, ' !important;');

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

function scrollTop (value) {
  if( value !== undefined ) {
    document.documentElement.scrollTop = value;
    document.body.scrollTop = value;
  }
  return document.documentElement.scrollTop || document.body.scrollTop;
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

var tools = {
  isObject: _isObject,
  isFunction: _isFunction,
  isString: _isString,
  isNumber: _isNumber,
  isArray: _isArray,
  isDate: _isDate,
  isRegExp: _isRegExp,
  isElement: _isElement,
  listen: listen,
  once: once,
  ready: docReady,
  replaceKeys: replaceKeys,
  merge: merge,
  extend: extend,
  joinPath: joinPath,
  writeIframe: writeIframe,
  getIFrame: getIFrame,
  template: template,
  cssQuery: cssQuery,
  getAmount: getAmount,
  cssHack: cssHack,
  scrollTop: scrollTop,
  addClass: _classActions.action('add', tools),
  removeClass: _classActions.action('remove', tools)
};

module.exports = tools;
