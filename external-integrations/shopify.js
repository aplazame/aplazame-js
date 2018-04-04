(function(){
    function findFirst( list, iteratee ) {
      for( var i = 0, n = list.length ; i < n ; i++ ) {
        if( iteratee(list[i]) ) return list[i];
      }
      return null;
    }

    function currentScriptFallback () {
      // fallback for IE
      return findFirst(document.querySelectorAll('script'), function (script) {
        if( script && script.src && /https:\/\/aplazame\.com\/static\/shopify\.js/.test( script.src.trim() ) )
          return script;
      });
    }

    function getCurrentScriptParams(script) {
      var params = {};

      script.src.split('?')[1].split('&').forEach(function (part) {
        part = part.split('=');
        params[part[0]] = part[1];
      });

      return params;
    }

    var currentScript = document.currentScript || currentScriptFallback();
    if (!currentScript) {
      return;
    }

    var aplazameParams = getCurrentScriptParams(currentScript),
        aplazame = {
          script: document.createElement('script'),
          key: aplazameParams.publicKey,
          setter: function () {
            aplazame.script.type = 'text/javascript';
            aplazame.script.src = 'https://aplazame.com/static/aplazame.js';
            aplazame.script.setAttribute('data-aplazame', aplazame.key);
            aplazame.script.setAttribute('data-api-host', aplazame.api-host);
            aplazame.script.setAttribute('defer', '');
            document.head.appendChild(aplazame.script);
          }
        }
    ;

    aplazame.setter();
}());
