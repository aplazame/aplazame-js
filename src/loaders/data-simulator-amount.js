
import _ from '../tools/tools';
import log from '../tools/log';

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
  '#quantity_wanted', // prestashop
  'form#product-options-form button[data-id=qty]', // custom
  '#main [itemtype="http://schema.org/Product"] form.cart input[name="quantity"]', // woocommerce
  'body.woocommerce-page form.cart input[name="quantity"]', // woocommerce
];

function _$ (el, selector) {
  if( typeof el === 'string' ) return document.querySelector(el);
  return el.querySelector(selector);
}

function _getQty (qty_selector, show_warning) {
  if( typeof qtySelector !== 'string' ) {
    log('warning: data-qty should be an string. pe: form#article .final-price ');
    return 1;
  }
  var qty_el;
  try {
    qty_el = document.querySelector(qty_selector);
  } catch(err) {
    if(show_warning) log(err.message + '\ndata-qty should be an string. pe: form#article .final-price ');
    return 1;
  }

  switch( qty_el.nodeName.toLowerCase() ) {
    case 'input':
      return Number( qty_el.value );
    case 'select':
      return _$(qty_el, 'option[selected]') && Number( _$(qty_el, 'option[selected]').value ) || 1;
    default:
      return Number( qty_el.textContent.trim() );
  }
}

export function qtyGetter (widget_el) {
  var qty_selector = widget_el.getAttribute('data-qty'),
      show_warning = typeof qty_selector === 'string';

  if( !qty_selector ) qty_selector = cms_qty_selector.join(', ');

  console.log('qty_selector', qty_selector);

  return function () {
    return _getQty(qty_selector, show_warning);
  };
}

function _matchSelector (selector) {
  return document.querySelector(selector);
}

function _getAmount (price_selector) {
  var price_el;
  try {
    price_el = document.querySelector( price_selector );
  } catch(err) {}

  var amount = price_el ? price_el.value : '0';

  if( typeof amount === 'undefined' ) {
    if( !/\d+[,.]\d+/.test(price_el.textContent) && price_el.children && price_el.children.length ) {
      amount = '';

      var part = price_el.firstChild, matched;

      while( part ) {
        if( /[,.]/.test(amount) ) {
          return;
        }
        matched = ( part.toString() === '[object Text]' ? part.data : part.textContent ).replace(/&nbsp;/g, '').match(/[\d,.]+/);

        if( matched ) {
          amount += (amount && !/^[,.]/.test(matched[0]) ? '.' : '') + matched[0];
        }

        part = part.nextSibling;
      }
    } else if( price_el.textContent ) {
      amount = (price_el.textContent || '').replace(/&nbsp;/g, '');
    } else if( price_el.getAttribute('content') ) {
      amount = price_el.getAttribute('content');
    }
  }

  log('price read from', price_el, amount );

  return amount && _.parsePrice( amount ) || null;
}

export function getDataAmount (widget_el) {
  var data_amount = widget_el.getAttribute('data-amount');

  return typeof data_amount === 'string' ? Number(data_amount.trim()) : 0;
}

export function amountGetter (widget_el) {
  var price_selector = widget_el.getAttribute('data-price');

  if( !price_selector ) {
    price_selector = _.find(cms_price_selector, _matchSelector);

    if( price_selector ) log('auto-discovered price selector', price_selector);
  }

  return price_selector ? function () {
    var amount = _getAmount(price_selector);
    return amount === null ? getDataAmount(widget_el) : amount;
  } : function () {
    return getDataAmount(widget_el);
  };
}
