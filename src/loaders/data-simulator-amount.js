
import log from '../tools/log';

export default function (aplazame) {

  var _ = aplazame._;

  function getQty (qtySelector) {
    if( !_.isString(qtySelector) ) {
      log('warning: data-qty should be an string. pe: form#article .final-price ');
      return 1;
    }
    var qtyElement;
    try {
      qtyElement = document.querySelector(qtySelector);
    } catch(err) {
      log(err.message + '\ndata-qty should be an string. pe: form#article .final-price ');
      return 1;
    }

    switch( qtyElement.nodeName.toLowerCase() ) {
      case 'input':
        return Number( qtyElement.value );
      case 'select':
        return qtyElement.querySelector('option[selected]') && Number( qtyElement.querySelector('option[selected]').value ) || 1;
      default:
        return Number( qtyElement.textContent.trim() );
    }
  }

  var cmsPriceSelector = [
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
  ],
  cmsQtySelector = [
    'form#product_addtocart_form input[name="qty"]', // magento
    'form#buy_block input[name="qty"]', // prestashop
    '#quantity_wanted', // prestashop
    'form#product-options-form button[data-id=qty]', // custom
    '#main [itemtype="http://schema.org/Product"] form.cart input[name="quantity"]', // woocommerce
    'body.woocommerce-page form.cart input[name="quantity"]', // woocommerce
  ];

  function matchSelector (selector) {
    return document.querySelector(selector);
  }

  function amountGetter (widgetElement) {
    var priceSelector = widgetElement.getAttribute('data-price'),
        qtySelector = widgetElement.getAttribute('data-qty'),
        autoDiscovered = false;

    if( priceSelector ) {
      try{
        priceSelector = priceSelector.split(/ *, */).reduce(function (matched, selector) {
          return matched || (document.querySelector(selector) && selector) || null;
        }, null);
      } catch(err) {
        priceSelector = null;
        log('data-price: missing', err.message);
      }
      if( qtySelector ) {
        try{
          document.querySelector(qtySelector);
        } catch(err) {
          qtySelector = null;
          log('data-qty: missing', err.message);
        }
      }
    } else if( !widgetElement.getAttribute('data-amount') || widgetElement.getAttribute('data-amount') === '0' ) {
      priceSelector = _.find(cmsPriceSelector, matchSelector);

      if( priceSelector ) {
        qtySelector = _.find(cmsQtySelector, matchSelector);
        autoDiscovered = true;

        log('auto-discovered price selector', priceSelector, qtySelector);
      } else {
        log('data-price failing', widgetElement.getAttribute('data-price'), widgetElement.getAttribute('data-price') !== null ? document.querySelector(widgetElement.getAttribute('data-price')) : 'data-price missing', _.find(cmsPriceSelector, matchSelector) );
      }
    }

    var getter = priceSelector ? function () {
      var priceElement;
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
            matched = ( part.toString() === '[object Text]' ? part.data : part.textContent ).replace(/&nbsp;/g, '').match(/[\d,.]+/);

            if( matched ) {
              amount += (amount && !/^[,.]/.test(matched[0]) ? '.' : '') + matched[0];
            }

            part = part.nextSibling;
          }
        } else if( priceElement.textContent ) {
          amount = (priceElement.textContent || '').replace(/&nbsp;/g, '');
        } else if( priceElement.getAttribute('content') ) {
          amount = priceElement.getAttribute('content');
        }
      }

      log('price read from', priceElement, amount );

      return amount && _.parsePrice( amount );
    } : ( widgetElement.hasAttribute('data-amount') ? function () {
      return Number( widgetElement.getAttribute('data-amount') );
    } : function () {
      return;
    });

    // new Events(getter);
    //
    // if( priceSelector ) $live(priceSelector, function (price_el) {
    //   function onNodeChanged () {
    //     getter.emit('change', [price_el]);
    //   }
    //
    //   if( window.MutationObserver ) {
    //     new MutationObserver(function(mutations) {
    //       mutations.forEach(onNodeChanged);
    //     }).observe(price_el, { childList: true, subtree: true });
    //   } else {
    //     price_el.addEventListener('DOMSubtreeModified', onNodeChanged);
    //   }
    // });

    getter.priceSelector = priceSelector;
    getter.qtySelector = qtySelector;
    getter.autoDiscovered = autoDiscovered,
    getter.getQty = getQty;

    return getter;
  }

  return amountGetter;

}
