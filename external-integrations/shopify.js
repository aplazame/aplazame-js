(function(Shopify, meta){
    function findFirst( list, iteratee ) {
      for( var i = 0, n = list.length ; i < n ; i++ ) {
        if( iteratee(list[i]) ) return list[i];
      }
      return null;
    }

    function currentScriptFallback () {
      // fallbeck for IE
      return findFirst(document.querySelectorAll('script'), function (script) {
        if( script && script.src && /https:\/\/aplazame\.com\/static\/widgets\/simulator\/simulator\.js\?/.test( script.src.trim() ) )
          return script;
      });
    }

    function toCamelCase (text) {
      return text.replace(/([a-z])-([a-z])/g, function (_matched, a, b) {
        return a + b.toUpperCase();
      });
    }

    function getCurrentScriptParams(script) {
      var params = {};

      script.src.split('?')[1].split('#')[0].split('&').forEach(function (part) {
        part = part.split('=');
        params[toCamelCase(part[0])] = part[1];
      });

      return params;
    }

    function widget(_data){
        var widget = document.createElement('div');
        widget.setAttribute('data-aplazame-simulator', '');

        for (var key in _data) {
            if (_data.hasOwnProperty(key)) {
              widget.setAttribute('data-' + key, _data[key]);
            }
        }

        return widget;
    }

    var currentScript = document.currentScript || currentScriptFallback(),
        aplazameParams = getCurrentScriptParams(currentScript),
        currency = window.ShopifyAnalytics.meta.currency,
        aplazame = {
        script: document.createElement('script'),
        key: aplazameParams.publicKey,
        setter: function(){
            aplazame.script.type = 'text/javascript';
            aplazame.script.src = 'https://aplazame.com/static/aplazame.js';
            aplazame.script.setAttribute('data-aplazame',aplazame.key);
            aplazame.script.setAttribute('data-sandbox',true);
            aplazame.script.setAttribute('defer','');
            document.head.appendChild(aplazame.script);
        }
    };

    var page = {
        widget: document.querySelector('div[data-aplazame-simulator]'),
        current: function(){
          return window.location.pathname.split('/')[1];
        }
    };

    if(Shopify){

        var printer = function(_parent,_data){
            page.widget = page.widget || widget(_data);
            document.querySelector(_parent).appendChild(page.widget);
            aplazame.setter();
        };

        if (meta.page) {
            switch (meta.page.pageType) {
                case 'product':
                    printer('#ProductPrice',{
                      price: '[itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"] [itemprop="price"]',
                      currency: currency,
                      country: aplazameParams.country,
                      qty: 'input[name="quantity"]'
                    });
                    return;
            }
        }

        switch(page.current()){
            case 'cart':
                printer('.cart__subtotal',{ price: '.cart__subtotal', currency: currency, country: aplazameParams.country });
                return;
            case 'checkout': // only premium
                printer('.payment-due__price',{ price: '.payment-due__price', currency: currency, country: aplazameParams.country });
                return;
        }

        if (Shopify.checkout) {
            printer('.payment-due__price',{ price: '.payment-due__price', currency: currency, country: aplazameParams.country });
        }
    }

}(Shopify, meta));
