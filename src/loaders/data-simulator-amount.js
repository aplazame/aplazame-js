
import _ from 'vanilla-tools';

import log from '../tools/log';
import {parsePrice} from '../tools/amount-price';

var cms_price_selector = [
  'form#product_addtocart_form .special-price .price', // magento
  'form#product_addtocart_form .regular-price .price', // magento
  '#product-info .special-price .price', // magento
  '#product-info .regular-price .price', // magento
  '#our_price_display', // prestashop
  '#main [itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"] .price ins .amount', // woocommerce
  '#main [itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"] .price .amount', // woocommerce
  '#main [itemtype="http://schema.org/Product"] .single_variation_wrap .amount', // woocommerce
  'body.woocommerce-page .product-page-price .woocommerce-Price-amount', // woocommerce
  '[itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"] [itemprop="price"]', // Schema.org
];

var cms_qty_selector = [
  'form#product_addtocart_form input[name="qty"]', // magento
  'form#buy_block input[name="qty"]', // prestashop
  'input#quantity_wanted', // prestashop
  '#quantity_wanted', // prestashop
  'form#product-options-form button[data-id=qty]', // custom
  '#main [itemtype="http://schema.org/Product"] form.cart input[name="quantity"]', // woocommerce
  'body.woocommerce-page form.cart input[name="quantity"]', // woocommerce
];

function _matchFirstQuerySelector (query_seletors) {
  for( var i = 0, n = query_seletors.length, matched_el ; i < n ; i++ ) {
    matched_el = document.querySelector(query_seletors[i]);
    if( matched_el ) return matched_el;
  }
}

function _$ (el, selector) {
  if( typeof el === 'string' ) return document.querySelector(el);
  return el.querySelector(selector);
}

function _getQty (qty_selector, show_warning) {
  // if( typeof qty_selector !== 'string' ) {
  //   log('warning: data-qty should be an string. pe: form#article .final-price ');
  //   return 1;
  // }
  var qty_el;

  if( typeof qty_selector === 'string' ) qty_selector = qty_selector.split(/ *, */);
  if( !(qty_selector instanceof Array) ) return 1;

  try {
    qty_el = _matchFirstQuerySelector(qty_selector);
  } catch(err) {
    if(show_warning) log(err.message + '\ndata-qty should be an string. pe: form#article .final-price ');
    return 1;
  }

  if( !qty_el ) return 1;

  switch( qty_el.nodeName ) {
    case 'INPUT':
      return Number( qty_el.value );
    case 'SELECT':
      return _$(qty_el, 'option[selected]') && Number( _$(qty_el, 'option[selected]').value );
    default:
      return Number( qty_el.textContent.trim() );
  }
}

export function qtyGetter (widget_el) {
  var qty_selector = widget_el.getAttribute('data-qty'),
      show_warning = typeof qty_selector === 'string';

  // if( !qty_selector ) qty_selector = cms_qty_selector.join(', ');

  return function () {
    return _getQty(qty_selector || cms_qty_selector, show_warning) || 1;
  };
}

function _matchSelector (selector) {
  return document.querySelector(selector);
}

function _getAmount (price_selector) {
  var price_el;
  try {
    price_el = _matchFirstQuerySelector(price_selector);
  } catch(err) {}

  if( !price_el ) return null;

  // attempting read from input
  var amount_str = price_el.value;

  if( typeof amount_str === 'undefined' ) {
    if( !/\d+[,.]\d+/.test(price_el.textContent) && price_el.children && price_el.children.length ) {
      amount_str = '';

      var part = price_el.firstChild, matched;

      while( part ) {
        if( /[,.]/.test(amount_str) ) {
          return;
        }
        matched = ( part.toString() === '[object Text]' ? part.data : part.textContent ).replace(/&nbsp;/g, '').match(/[\d,.]+/);

        if( matched ) {
          amount_str += (amount_str && !/^[,.]/.test(matched[0]) ? '.' : '') + matched[0];
        }

        part = part.nextSibling;
      }
    } else if( price_el.textContent ) {
      amount_str = (price_el.textContent || '').replace(/&nbsp;/g, '');
    } else if( price_el.getAttribute('content') ) {
      amount_str = price_el.getAttribute('content');
    }
  }

  return amount_str && {
    amount: parsePrice( amount_str ),
    price_el: price_el,
  } || null;
}

export function getDataAmount (widget_el) {
  var data_amount = widget_el.getAttribute('data-amount');

  return typeof data_amount === 'string' ? Number(data_amount.trim()) : 0;
}

export function amountGetter (widget_el) {
  var price_selector = widget_el.getAttribute('data-price'),
      last_price_el = null,
      last_price_amount = null;

  if( !price_selector ) {
    var price_selector_tmp = _.find(cms_price_selector, _matchSelector);

    if( price_selector_tmp ) log('auto-discovered price selector', price_selector_tmp);
  }

  if( typeof price_selector === 'string' ) price_selector = price_selector.split(/ *, */);

  return function () {
    var amount_result = _getAmount(price_selector || cms_price_selector);

    if( !amount_result ) return getDataAmount(widget_el);

    if( amount_result.price_el !== last_price_el || amount_result.amount !== last_price_amount ) {
      log('price read from', amount_result.price_el, amount_result.amount );
      last_price_el = amount_result.price_el;
      last_price_amount = amount_result.amount;
    }
    return amount_result.amount;
  };

  // return price_selector ? function () {
  //   var amount_result = _getAmount(price_selector);
  //   if( !amount_result ) return getDataAmount(widget_el);
  //   if( amount_result.price_el !== last_price_el || amount_result.amount !== last_price_amount ) {
  //     log('price read from', amount_result.price_el, amount_result.amount );
  //     last_price_el = amount_result.price_el;
  //     last_price_amount = amount_result.amount;
  //   }
  //   return amount_result.amount;
  // } : function () {
  //   return getDataAmount(widget_el);
  // };
}
