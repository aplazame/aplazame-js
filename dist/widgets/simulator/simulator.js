(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '<div class="card-header">  <h2>Con Aplazame puedes comprar ahora<br/>y pagar después.</h2></div><div class="card-content content-padding">  <p>Elige los meses y la cuota que mejor que convenga.<br/>Aplazame es muy fácil de usar.</p>  <ul class="styled">    <li>Ofrecemos la financiación al consumo más barata de España.</li>    <li>Sin costes ocultos ni letra pequeña.</li>    <li>Tomamos la decisión de manera instantánea, sin papeleos ni esperas.</li>    <li>Disponible para compras superiores a <%= creditThreshold %> €.</li>    <li>¿Tienes alguna duda? Llámanos al 91 290 89 23 o escríbenos un email a <a class="link" href="mailto:hola@aplazame.com">hola@aplazame.com</a>.</li>  </ul></div><div class="cta">  <button type="submit" class="button" modal-resolve="ok">    <span class="cta-title">Entendido</span>  </button></div>';
},{}],2:[function(require,module,exports){
module.exports = '<div class="modal modal-grey modal-narrow">  <div class="card">    <div class="close-button" modal-reject="">      <div class="button">&times;&nbsp;Volver</div>    </div>    <div class="card-content">      <div class="modal-instalments-list">        <header class="aplazame"></header>        <section class="info desktop">          <h1>Elige el número de meses y la cuota que más te convengan</h1>          <p class="mobile">En Aplazame te ayudamos a pagar tus compras cuándo y como quieras. <a>¿Quieres saber más?</a></p>          <p class="desktop">Aplazame te ayuda a pagar tus compras cuándo y como quieras.</br>No hay letra pequeña ni sorpresas de última hora, todo está claro y fácilmente entendible, de tú a tú. <a>Más información</a></p>        </section>        <div data-widget="active-group" class="choices-wrapper">        <% for( var i = 0, n = choices.length; i < n ; i++ ) {        %><div class="choice">            <button type="button" class="button" data-widget="active-toggle">              <div class="wrapper">                <div class="num-instalments"><%= choices[i].num_instalments %> <%= months(choices[i].num_instalments) %></div>                <div class="amount"><%= getAmount(choices[i].amount) %> €<sub style="vertical-align: bottom; font-size: 0.8em">/mes<span></div>              </div>            </button>          </div><%        } %>        </div>        <section class="tae">El TAE será del <%= getAmount(choices[0].annual_equivalent) %>%</section>      </div>    </div>    <div class="cta fixed">      <button class="button" type="submit" modal-reject="">        <span class="cta-title">Simplemente selecciona Aplazame</span>        <span class="cta-subtitle">cuando vayas a pagar</span>      </button>    </div>  </div></div>';
},{}],3:[function(require,module,exports){

if( !Element.prototype.matchesSelector ) {
  Element.prototype.matchesSelector = (
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector
  );
}

(function (root) {
  'use strict';

  root.matchMedia = root.matchMedia || root.webkitMatchMedia || root.mozMatchMedia || root.msMatchMedia;
})(this);

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

if( window.attachEvent && !window.HTMLElement.prototype.addEventListener ) {
  window.HTMLElement.prototype.addEventListener = function (eventName, listener) {
    this.attachEvent('on' + eventName, listener);
  };
}

function listen (element, eventName, listener) {
  if( element instanceof Array ) {
    for( var i = 0, n = element.length ; i < n ; i++ ) {
      element[i].addEventListener(eventName, listener, false);
    }
    return;
  }
  element.addEventListener(eventName, listener, false);
}

// var listen = window.addEventListener ? function (element, eventName, listener) {
//   if( element instanceof Array ) {
//     for( var i = 0, n = element.length ; i < n ; i++ ) {
//       element[i].addEventListener(eventName, listener, false);
//     }
//     return;
//   }
//   element.addEventListener(eventName, listener, false);
// } : ( window.attachEvent && function (element, eventName, listener) {
//   if( element instanceof Array ) {
//     for( var i = 0, n = element.length ; i < n ; i++ ) {
//       element[i].addEventListener(eventName, listener, false);
//     }
//     return;
//   }
//   element.attachEvent('on' + eventName, listener);
// } );


if( !window.HTMLElement.prototype.addEventListener ) {
  throw new Error('Your Browser does not support events');
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

function docReady (callback) {
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
  iframeDoc.charset = 'UTF-8';
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
        blur: 'body > *:not(.aplazame-modal) { -webkit-filter: blur(3px); filter: blur(3px); }',
        // modal: '.aplazame-modal { height: 100%; } html, body { margin: 0; padding: 0; } @media (max-width: 767px) { body > *:not(.aplazame-modal) { display: none; } }'
        modal: '.aplazame-modal { height: 100%; } body { overflow: hidden; }' +
               '@media (max-width: 767px) { html, body { height: 100%; margin: 0; padding: 0; } body > *:not(.aplazame-modal) { display: none; } iframe.aplazame-modal { position: absolute; } }' +
               '@media (min-width: 768px) { .aplazame-modal { position: fixed; } }'
        // overflow: '/* html { height: 100%; } body { overflow: hidden; } */',
        // inputFocus: 'html, body { height: 100vh; overflow: hidden; }'
      };

  return function hack (hackName) {
    if( !cache[hackName] ) {
      var style = document.createElement('style');
      style.setAttribute('rel', 'stylesheet');
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

},{}],4:[function(require,module,exports){
// factory http

function headerToTitleSlug(text) {
  var key = text[0].toUpperCase() + text.substr(1);
  return key.replace(/([a-z])([A-Z])/, function (match, lower, upper) {
      return lower + '-' + upper;
  });
}

function headerToCamelCase(text) {
  var key = text[0].toLowerCase() + text.substr(1);
  return key.replace(/([a-z])-([A-Z])/, function (match, lower, upper) {
    return lower + upper;
  });
}

var RE_contentType = /([^\/]+)\/([^+]+\+)?(.*)/;
function parseContentType(contentType, text, xml) {
  var matches = contentType && contentType.match(RE_contentType);
  return matches && ( matches[3] === 'json' ? JSON.parse(text) : ( matches[3] === 'xml' ? xml : text ) );
}

function http (url, config) {
  config = config || {};
  config.headers = config.headers || {};
  config.url = url;

  var request = null,
      on = { resolve: [], reject: [] };

  try { // Firefox, Opera 8.0+, Safari
      request = new XMLHttpRequest();
  } catch (e) { // Internet Explorer
      try { request = new ActiveXObject('Msxml2.XMLHTTP'); }  // jshint ignore:line
      catch (er) { request = new ActiveXObject('Microsoft.XMLHTTP'); }  // jshint ignore:line
  }
  if( request === null ) { throw 'Browser does not support HTTP Request'; }

  if( config.params ) {
    var i = 0;
    for( var param in config.params ) {
      url += ( i++ ? '&' : ( /\?/.test(url) ? '&' : '?' ) ) + param + '=' + encodeURIComponent(config.params[param]);
    }
  }

  request.open( ( config.method || 'get').toUpperCase(), url );

  if( config.withCredentials ) {
    request.withCredentials = true;
  }

  for( var key in config.headers ) {
      request.setRequestHeader( headerToTitleSlug(key), config.headers[key] );
  }

  request.resolve = function ( response ) {
    on.resolve.forEach(function (handler) {
      handler(response);
    });
  };
  request.reject = function ( response ) {
    on.reject.forEach(function (handler) {
      handler(response);
    });
  };

  var headersCache;
  request.getHeaders = function () {
    if( !headersCache ) {
      headersCache = {};
      request.getAllResponseHeaders().replace(/\s*([^\:]+)\s*\:\s*([^\;\n]+)/g, function (match, key, value) {
          headersCache[headerToCamelCase(key)] = value.trim();
      });
    }
    return headersCache;
  };

  request.onreadystatechange = function(){
    if( request.readyState === 'complete' || request.readyState === 4 ) {
      var response = {
        config: request.config,
        data: parseContentType(request.getResponseHeader('content-type'), request.responseText, request.responseXML),
        status: request.status,
        headers: request.getHeaders,
        xhr: request
      };
      if( request.status >= 200 && request.status < 300 ) {
        request.resolve( response );
      } else {
        request.reject( response );
      }
    }
  };

  request.config = config;

  if( config.contentType ) {
    request.setRequestHeader( 'Content-Type', config.contentType );

    if( config.contentType === 'application/json' && typeof config.data !== 'string' ) {
      config.data = JSON.stringify(config.data);
    }

  } else {
    if( typeof config.data === 'string' ) {
      config.contentType = 'text/html';
    } else {
      config.contentType = 'application/json';
      config.data = JSON.stringify(config.data);
    }
  }

  request.send( config.data );

  return {
    then: function (onResolve, onReject) {
      if( onResolve instanceof Function ) {
        on.resolve.push(onResolve);
      }
      if( onReject instanceof Function ) {
        on.reject.push(onReject);
      }
    },
    error: function (onReject) {
      if( onReject instanceof Function ) {
        on.reject.push(onReject);
      }
    }
  };
}

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

module.exports = http;

},{}],5:[function(require,module,exports){
'use strict';

module.exports = function (_) {
  var suscriptors = [],
      running = false;

  function initLiveDOM () {

    _.ready(function () {
      document.body.addEventListener('DOMSubtreeModified', function(event){
        // console.debug( 'DOM Changed at ', new Date(), event.target );
        for( var i = 0, n = suscriptors.length; i < n ; i++ ) {
          suscriptors[i](event.target);
        }
      }, false);
    });

  }

  return {
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

};

},{}],6:[function(require,module,exports){

module.exports = function (_) {

  var messageTarget = {};

  _.listen(window, 'message', function (e) {
    var message = e.data,
        listener = messageTarget[message.aplazame];

    if( !e.used && listener ) {
      e.used = true;
      listener(e, message);
    }
  });

  return function (target, handler) {
    if( _.isString(target) && _.isFunction(handler) ) {
      messageTarget[target] = handler;
    }
  };

};

},{}],7:[function(require,module,exports){
// 'use strict';

var _ = require('./basic-tools');

_.extend(_, {
  liveDOM: require('./live-dom')(_),
  http: require('./http'),
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
  onMessage: require('./message-listener')(_)
});

module.exports = _;

},{"./basic-tools":3,"./http":4,"./live-dom":5,"./message-listener":6}],8:[function(require,module,exports){

var _ = require('../../src/tools/tools'),
    choices = [];

_.template.lookup();

_.template.put('modal-instalments', require('../../.tmp/simulator/templates/modal-instalments.js') );
_.template.put('modal-info', require('../../.tmp/simulator/templates/modal-info.js') );

var main = document.getElementById('main'),
    selectedChoice, choices = window.choices;

function emitSize () {
  setTimeout(function () {
    parent.window.postMessage({
      aplazame: 'simulator',
      event: 'resize',
      data: {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      }
    }, '*');
  },1);
}

_.listen(window, 'load', emitSize);
_.listen(window, 'resize', emitSize);

function showChoices () {
  main.innerHTML = _.template('choices', { selectedChoice: selectedChoice, choices: choices });
  emitSize();
}

function setChoice (choice) {
  selectedChoice = choice;
  return choice;
}

function runAction (action, data) {
  switch( action ) {
    case 'showChoices':
      showChoices();
      break;
    case 'showInfo':
      parent.window.postMessage({
        aplazame: 'modal',
        event: 'open',
        name: 'info',
        data: {
          cardClass: 'hola-adios',
          card: _.template('modal-info', { creditThreshold: 100 })
        }
      }, '*');
      break;
    case 'changeInstalments':
      parent.window.postMessage({
        aplazame: 'modal',
        event: 'open',
        name: 'instalments',
        data: {
          cardClass: 'hola-adios',
          card: _.template('modal-instalments', {
            selectedChoice: selectedChoice,
            choices: choices,
            getAmount: _.getAmount,
            months: function (m) {
              return m > 1 ? 'meses' : 'mes';
            }
          })
        }
      }, '*');
      break;
  }
}

function renderWidget () {
  main.innerHTML = _.template('widget', {
    getAmount: _.getAmount,
    choice: selectedChoice
  });
  emitSize();

  [].forEach.call( main.querySelectorAll('[data-action]'), function (element) {

    _.listen(element, 'click', function (e) {
      var action = element.getAttribute('data-action');

      // console.log('data-action');

      if( action !== undefined ) {
        e.preventDefault();
      }

      runAction(action);
    });

  } );
}

function maxInstalments (prev, choice) {
  if( prev === null ) {
    return choice;
  } else {
    return choice.num_instalments > prev.num_instalments ? choice : prev;
  }
}

var isMobile,
    setMobile = function (mobile) {
      if( isMobile === undefined || isMobile !== mobile ) {
        isMobile = mobile;

        if( isMobile ) {
          _.addClass( document.querySelector('.widget-item-instalments'), 'mobile' );
        } else {
          _.removeClass( document.querySelector('.widget-item-instalments'), 'mobile' );
        }
      }
    },
    messageSimulator = {
      choices: function (message) {
        choices = message.data;
        setChoice( choices.reduce(maxInstalments, null) );
        renderWidget();
        setMobile(message.mobile);
      },
      mobile: function (message) {
        setMobile(message.mobile);
      }
    };

_.onMessage('simulator', function (e, message) {
  if( messageSimulator[message.event] ) {
    messageSimulator[message.event](message);
  }
});

parent.window.postMessage({
  aplazame: 'simulator',
  event: 'require:choices'
}, '*');

},{"../../.tmp/simulator/templates/modal-info.js":1,"../../.tmp/simulator/templates/modal-instalments.js":2,"../../src/tools/tools":7}]},{},[8]);
