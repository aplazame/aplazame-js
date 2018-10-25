

import apiHttp from '../core/api-http';
import _ from '../tools/tools';

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

export default button;
