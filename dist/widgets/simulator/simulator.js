(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '<div class="card-header">  <h2>Con Aplazame puedes comprar ahora<br/>y pagar después.</h2></div><div class="card-content content-padding">  <p>Elige los meses y la cuota que mejor que convenga.<br/>Aplazame es muy fácil de usar.</p>  <ul class="styled">    <li>Ofrecemos la financiación al consumo más barata de España.</li>    <li>Sin costes ocultos ni letra pequeña.</li>    <li>Tomamos la decisión de manera instantánea, sin papeleos ni esperas.</li>    <li>Disponible para compras superiores a <%= creditThreshold %> €.</li>    <li>¿Tienes alguna duda? Llámanos al 91 290 89 23 o escríbenos un email a <a class="link" href="mailto:hola@aplazame.com">hola@aplazame.com</a>.</li>  </ul></div><div class="cta">  <button type="submit" class="button" modal-resolve="ok">    <span class="cta-title">Entendido</span>  </button></div>';
},{}],2:[function(require,module,exports){
module.exports = '<div class="close-button">  <div class="button" modal-reject="">&times;&nbsp;Volver</div></div><div class="card-content">  <div class="modal-instalments-list">    <div class="choices-wrapper">      <% for( var i = 0, n = choices.length; i < n ; i++ ) {      %><div class="choice">          <button type="button" class="button" modal-resolve="<%= i %>">            <div class="wrapper">              <div class="num-instalments"><%= choices[i].num_instalments %> <%= months(choices[i].num_instalments) %></div>              <div class="amount"><%= getAmount(choices[i].amount) %> €</div>            </div>          </button>        </div><%      } %>    </div>  </div></div><style rel="stylesheet">  .choice-wrapper {    display: inline-block;    width: 25%;    text-align: center;  }  .instalments-choice {    width: 80%;    font-size: 2rem;    padding: 0.5rem;    margin-bottom: 1rem;    background: white;    border: 1px solid royalblue;    cursor: pointer;  }</style>';
},{}],3:[function(require,module,exports){
if( !Element.prototype.matchesSelector ) {
  Element.prototype.matchesSelector = (
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector
  );
}

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

module.exports = {
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
  }
};

},{}],4:[function(require,module,exports){

var _ = require('../../src/utils');

_.template.lookup();

_.template.put('modal-instalments', require('../../.tmp/simulator/templates/modal-instalments.js') );
_.template.put('modal-info', require('../../.tmp/simulator/templates/modal-info.js') );

var main = document.getElementById('main'),
    selectedChoice, choices = window.choices;

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

function maxInstalments (prev, choice) {
  if( prev === null ) {
    return choice;
  } else {
    return choice.num_instalments > prev.num_instalments ? choice : prev;
  }
}

setChoice( choices.reduce(maxInstalments, null) );

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
            choices: choices,
            getAmount: getAmount,
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
    getAmount: getAmount,
    choice: selectedChoice
  });
  emitSize();

  [].forEach.call( main.querySelectorAll('[data-action]'), function (element) {

    console.log('[data-action]', element);
    _.listen(element, 'click', function (e) {
      var action = element.getAttribute('data-action');

      console.log('data-action');

      if( action !== undefined ) {
        e.preventDefault();
      }

      runAction(action);
    });

  } );
}

renderWidget();

_.listen(window, 'message', function (e) {
  var message = e.data;


  if( message.aplazame === 'modal' && message.event === 'closed' ) {
    if( message.name === 'instalments' && message.resolved ) {
      console.log('simulator message', message, choices[ Number(message.value) ]);
      setChoice( choices[ Number(message.value) ] );
      renderWidget();
    }
  }
});

},{"../../.tmp/simulator/templates/modal-info.js":1,"../../.tmp/simulator/templates/modal-instalments.js":2,"../../src/utils":3}]},{},[4]);
