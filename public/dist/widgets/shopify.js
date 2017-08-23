var Shopify = Shopify || {};

(function(Shopify){
    function getMetaPropertyByName(name){
      return document.head.querySelector("meta[property='"+name+"']").content;
    }
  
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

    var currentScript = document.currentScript || currentScriptFallback(),
        aplazameParams = getCurrentScriptParams(currentScript),
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
        type: undefined,
        widget: document.querySelector('div[data-aplazame-simulator]'),
        current: function(){
          return page.type = window.location.pathname.split('/')[1];
        }
    };

    var widgetSetter = function(_data){
        if(page.widget === null){
            // Widget container element...
            page.widget = document.createElement('div');
            page.widget.setAttribute('data-aplazame-simulator', '');
            page.widget.setAttribute('data-amount', _data.price);
            page.widget.setAttribute('data-currency', _data.currency);
            page.widget.setAttribute('data-country', _data.country);
            // This param should be set just on cart & checkout
            if(page.type == 'cart' || page.type == 'checkout')
                page.widget.setAttribute('data-qty',_data.quantity);
        }

        return page.widget;
    };

    if(Shopify){

        var printer = function(_parent,_data){
            // Set widget data and append it
            if(widgetSetter(_data) !== null)
                document.getElementById(_parent).appendChild(page.widget);
            // Aplazame script setter
            aplazame.setter();
        };

        // This switch anticipates which page the user is visiting and how to get the data...

        switch(page.current()){
            case 'collections':
                printer('',{ price: 0, currency: aplazameParams.currency, country: aplazameParams.country });
            break;
            case 'products':
                printer('ProductPrice',{ price: getMetaPropertyByName('og:price:amount'), currency: aplazameParams.currency, country: aplazameParams.country });
            break;
            case 'cart':
                printer('',{ price: 0, currency: aplazameParams.currency, country: aplazameParams.country });
            break;
            case 'checkout': // only premium
                printer('',{ price: 0, currency: aplazameParams.currency, country: aplazameParams.country });
            break;
        }
    }

}(Shopify));
