'use strict';

module.exports = function (aplazame) {

  var _ = aplazame._,
      $q = require('q-promise'),
      Events = require('events-wrapper'),
      api = require('../core/api'),
      isMobile = window.matchMedia('( max-width: 767px )'),
      each = Array.prototype.forEach;

  function parsePrice (price) {
    price = price.match(/[\d,.]+/);
    price = price && price[0] || '';
    price = price.replace(/([,.])0$/, '$100');
    var priceParts = ( '' + price ).replace(/[^0-9.,]/g, '').split(/[,.]/),
        amount = Number(priceParts.shift()),
        piece = priceParts.shift(), i, n;

    if( !piece ) {
      return amount*100;
    }

    while( piece ) {
      for( i = 0, n = piece.length ; i < n ; i++ ) {
        amount*=10;
      }
      amount += Number(piece);
      piece = priceParts.shift();
    }
    return amount;
  }

  function getQty (qtySelector) {
    if( !_.isString(qtySelector) ) {
      console.warn('warning: data-qty should be an string. pe: form#article .final-price ');
      return 1;
    }
    var qtyElement;
    try {
      qtyElement = document.querySelector(qtySelector);
    } catch(err) {
      console.warn(err.message + '\ndata-qty should be an string. pe: form#article .final-price ');
      return 1;
    }

    switch( qtyElement.nodeName.toLowerCase() ) {
      case 'input':
        return Number( qtyElement.value );
      case 'select':
        return Number( qtyElement.querySelector('option[selected]').value );
      default:
        return Number( qtyElement.textContent.trim() );
    }
  }

  var cmsPriceSelector = [
    'form#product_addtocart_form .special-price .price', // magento
    'form#product_addtocart_form .regular-price .price', // magento
    '#product-info .special-price .price', // magento
    '#product-info .regular-price .price', // magento
    'form#buy_block #our_price_display', // prestashop
    '#main [itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"] .price .amount' // woocommerce
  ],
  cmsQtySelector = [
    'form#product_addtocart_form input[name="qty"]', // magento
    'form#buy_block input[name="qty"]', // prestashop
    'form#product-options-form button[data-id=qty]', // custom
    '#main [itemtype="http://schema.org/Product"] form.cart input[name="quantity"]' // woocommerce
  ];

  function matchSelector (selector) {
    return document.querySelector(selector);
  }

  function amountGetter (widgetElement) {
    var priceSelector = widgetElement.getAttribute('data-price'),
        qtySelector = widgetElement.getAttribute('data-qty');

    if( priceSelector ) {
      try{
        document.querySelector(priceSelector);
      } catch(err) {
        priceSelector = null;
        console.warn(err.message);
      }
      if( qtySelector ) {
        try{
          document.querySelector(qtySelector);
        } catch(err) {
          qtySelector = null;
          console.warn(err.message);
        }
      }
    } else {
      priceSelector = cmsPriceSelector.find(matchSelector);

      if( priceSelector ) {
        qtySelector = cmsQtySelector.find(matchSelector);

        console.log('automatically found price selector', priceSelector, qtySelector);
      }
    }

    var getter = priceSelector ? function () {
      var qty = qtySelector ? getQty( qtySelector ) : 1,
          priceElement = document.querySelector( priceSelector );

      return qty * parsePrice( priceElement.value !== undefined ? priceElement.value : priceElement.textContent );
    } : function () {
      return Number( widgetElement.getAttribute('data-amount') );
    };

    getter.priceSelector = priceSelector;
    getter.qtySelector = qtySelector;

    return getter;
  }

  function Iframe (url) {
    var el = _.getIFrame({ width: '100%', height: '40px' }),
        iframe = this;
    this.el = el;
    this.el.src = url;

    new Events (this);

    this.onload = function () {
      this.trigger('load', null, this);
    };

    _.onMessage('simulator', function (e, message) {
      if( e.source === el.contentWindow ) {
        iframe.trigger('message:' + message.event, [message], this);
      }
    });

    this.on('message:resize', function (e, message) {
      el.style.height = message.height + 'px';
    });
  }

  Iframe.prototype.message = function (eventName, data) {
    var _data = _.extend({
      aplazame: 'simulator',
      event: eventName,
      mobile: isMobile.matches
    }, data || {});
    this.el.contentWindow.postMessage(_data, '*');
  };

  function maxInstalments (prev, choice) {
    if( prev === null ) {
      return choice;
    } else {
      return choice.num_instalments > prev.num_instalments ? choice : prev;
    }
  }

  function widgetsLookup (element) {
    if( !element.querySelectorAll ) {
      return;
    }

    var simulators = element.querySelectorAll('[data-aplazame-simulator]');

    each.call(simulators, function (simulator) {

      if( simulator.$$aplazame ) {
        return;
      }

      simulator.$$aplazame = true;

      var choice, choices, options, iframe,
          getAmount = amountGetter(simulator),
          dataAmount = simulator.getAttribute('data-amount') && Number(simulator.getAttribute('data-amount')),
          currentAmount = simulator.getAttribute('data-price') ? getAmount() : ( Number( simulator.getAttribute('data-amount') ) || getAmount() );

      aplazame.simulator(currentAmount, function (_choices, _options) {

        if( _options.widget && _options.widget.disabled ) {
          return;
        }

        choices = _choices;
        options = _options;

        choice = choices.reduce(maxInstalments, null);


        var widgetOptions = options.widget, widget;

        _.clearElement(simulator);

        if( widgetOptions.type === 'button' ) {
          widget = new Iframe( api.baseUrl + 'widgets/simulator/simulator.html?' + Date.now() );

          widget.on('message:require.choices choices.update', function () {
            widget.message('choices', {
              amount: currentAmount,
              choice: choice,
              choices: choices,
              options: options
            });
          });

          widget.on('choices.updating', function (e) {
            widget.message('loading');
          });

        } else {
          _.template.put('widget-raw', require('../../.tmp/simulator/templates/widget-raw') );
          widget = { el: document.createElement('div') };
          new Events(widget);

          widget.el.innerHTML = _.template('widget-raw', {
            getAmount: _.getAmount,
            amount: currentAmount,
            choice: choice,
            choices: choices,
            options: options
          });
        }

        simulator.appendChild(widget.el);

        var previousQty = getAmount.qtySelector ? getQty(getAmount.qtySelector) : 1,
            updating = false,
            amountInterval = setInterval(function () {
              if( updating ) {
                return;
              }
              var amount = getAmount(),
                  qty = getAmount.qtySelector ? getQty(getAmount.qtySelector) : 1;

              if( amount && _.isNumber(amount) && amount !== currentAmount || qty !== previousQty ) {
                previousQty = qty;

                updating = true;
                widget.trigger('choices.updating', [amount, _choices, _options]);
                aplazame.simulator(amount, function (_choices, _options) {
                  currentAmount = amount;
                  choices = _choices;
                  options = _options;
                  choice = choices.reduce(maxInstalments, null);
                  widget.trigger('choices.update', [amount, _choices, _options]);
                  updating = false;
                }, function () {
                  updating = false;
                });
                // onPriceChange(amount, currentAmount);
              }
            }, 200);

      });

    });

  }

  _.liveDOM.subscribe(widgetsLookup);

  _.ready(function () {
    widgetsLookup(document);
  });

  // *****************************************************************************
  // *****************************************************************************
  // *****************************************************************************
  // *****************************************************************************



};
