(function () {
  function widgetV2Ejs(s) {
  s=s||{};var _='preferences,brightness,currency,getAmount,choice'.split(',');return Function.apply(null,_.concat('var _λ=\'\';_λ+=\'<div class="aplazame-widget-button align-\';_λ+=(preferences.align);_λ+=\'">\\n  <button type="button" data-action="showInfo"\\n          class="\';_λ+=(/^#/.test(preferences.bg_color) ? brightness(preferences.bg_color) : \'\');_λ+=\' \';_λ+=(preferences.branding ? \'\' : \'no-logo\');_λ+=\'"\\n          style=" background: \';_λ+=(preferences.bg_color);_λ+=\'; color: \';_λ+=(preferences.text_color);_λ+=\'; fill: \';_λ+=(preferences.text_color);_λ+=\'">\\n\\n    <div class="align-wrapper">\\n      \';if( preferences.branding ) {_λ+=\'\\n        <div class="logo">\\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="100%" width="100%" version="1.1">\\n            <path class="dropshadow" style="baseline-shift:baseline;block-progression:tb;color:#000000;direction:ltr;text-indent:0;text-align:start;enable-background:accumulate;text-transform:none;" d="m49.45,1.9068a5.8933,5.8933,0,0,0,-0.55244,0.12276,5.8933,5.8933,0,0,0,-0.3683,0.06138,5.8933,5.8933,0,0,0,-0.18415,0.06138,5.8933,5.8933,0,0,0,-0.12276,0.06138,5.8933,5.8933,0,0,0,-1.4732,0.67521,5.8933,5.8933,0,0,0,-0.12276,0.12277,5.8933,5.8933,0,0,0,-2.3325,3.3147l-13.75,32.962c3.3033,2.0483,6.9615,3.6193,10.865,4.5423l8.4708-20.256,9.2688,23.694c-2.9404,0.67972-5.9953,1.0435-9.146,1.0435-13.813,0-25.916-6.9098-33.208-17.433a5.7487,5.7487,0,0,0,-5.464,-2.516,5.7487,5.7487,0,0,0,-3.9897,9.084c9.3636,13.512,25.015,22.343,42.661,22.343,4.6171,0,9.1087-0.64524,13.381-1.7801l14.118,36.032a5.8933,5.8933,0,1,0,10.927,-4.358l-14.057-35.909c7.3552-3.8999,13.645-9.5362,18.353-16.328a5.7553,5.7553,0,0,0,-9.4529,-6.5679c-3.4226,4.9365-7.9036,9.0865-13.136,12.092l-14.424-36.89a5.8933,5.8933,0,0,0,-0.43,-0.9207,5.8933,5.8933,0,0,0,-0.061,-0.1228,5.8933,5.8933,0,0,0,-0.553,-0.8594,5.8933,5.8933,0,0,0,-0.061,-0.1227,5.8933,5.8933,0,0,0,-0.307,-0.3069,5.8933,5.8933,0,0,0,-0.123,-0.1228,5.8933,5.8933,0,0,0,-0.307,-0.3069,5.8933,5.8933,0,0,0,-0.122,-0.1228,5.8933,5.8933,0,0,0,-0.369,-0.2455,5.8933,5.8933,0,0,0,-0.614,-0.3683,5.8933,5.8933,0,0,0,-0.429,-0.1842,5.8933,5.8933,0,0,0,-0.123,-0.0613,5.8933,5.8933,0,0,0,-0.43,-0.1228,5.8933,5.8933,0,0,0,-0.552,-0.1842,5.8933,5.8933,0,0,0,-1.1663,-0.12276,5.8933,5.8933,0,0,0,-0.61383,0zm-26.027,54.508-4.603,11.048a5.8933,5.8933,0,1,0,10.865,4.5423l4.6037-11.11c-3.8107-1.1281-7.4419-2.602-10.865-4.4809z"/>\\n          	<path style="baseline-shift:baseline;block-progression:tb;color:#000000;direction:ltr;text-indent:0;text-align:start;enable-background:accumulate;text-transform:none;" d="m49.45,1.9068a5.8933,5.8933,0,0,0,-0.55244,0.12276,5.8933,5.8933,0,0,0,-0.3683,0.06138,5.8933,5.8933,0,0,0,-0.18415,0.06138,5.8933,5.8933,0,0,0,-0.12276,0.06138,5.8933,5.8933,0,0,0,-1.4732,0.67521,5.8933,5.8933,0,0,0,-0.12276,0.12277,5.8933,5.8933,0,0,0,-2.3325,3.3147l-13.75,32.962c3.3033,2.0483,6.9615,3.6193,10.865,4.5423l8.4708-20.256,9.2688,23.694c-2.9404,0.67972-5.9953,1.0435-9.146,1.0435-13.813,0-25.916-6.9098-33.208-17.433a5.7487,5.7487,0,0,0,-5.464,-2.516,5.7487,5.7487,0,0,0,-3.9897,9.084c9.3636,13.512,25.015,22.343,42.661,22.343,4.6171,0,9.1087-0.64524,13.381-1.7801l14.118,36.032a5.8933,5.8933,0,1,0,10.927,-4.358l-14.057-35.909c7.3552-3.8999,13.645-9.5362,18.353-16.328a5.7553,5.7553,0,0,0,-9.4529,-6.5679c-3.4226,4.9365-7.9036,9.0865-13.136,12.092l-14.424-36.89a5.8933,5.8933,0,0,0,-0.43,-0.9207,5.8933,5.8933,0,0,0,-0.061,-0.1228,5.8933,5.8933,0,0,0,-0.553,-0.8594,5.8933,5.8933,0,0,0,-0.061,-0.1227,5.8933,5.8933,0,0,0,-0.307,-0.3069,5.8933,5.8933,0,0,0,-0.123,-0.1228,5.8933,5.8933,0,0,0,-0.307,-0.3069,5.8933,5.8933,0,0,0,-0.122,-0.1228,5.8933,5.8933,0,0,0,-0.369,-0.2455,5.8933,5.8933,0,0,0,-0.614,-0.3683,5.8933,5.8933,0,0,0,-0.429,-0.1842,5.8933,5.8933,0,0,0,-0.123,-0.0613,5.8933,5.8933,0,0,0,-0.43,-0.1228,5.8933,5.8933,0,0,0,-0.552,-0.1842,5.8933,5.8933,0,0,0,-1.1663,-0.12276,5.8933,5.8933,0,0,0,-0.61383,0zm-26.027,54.508-4.603,11.048a5.8933,5.8933,0,1,0,10.865,4.5423l4.6037-11.11c-3.8107-1.1281-7.4419-2.602-10.865-4.4809z"/>\\n          </svg>\\n        </div>\\n      \';}_λ+=\'\\n\\n      <div class="text-wrapper">\\n\\n        <span class="from">Desde&nbsp;</span><!--\\n\\n        --><strong class="amount"><!--\\n          \';if( currency === \'EUR\' )  {_λ+=\'\\n          --><span class="price">\';_λ+=(getAmount(choice.amount, \',\', \'.\'));_λ+=\'</span><!--\\n          --><span class="currency">&nbsp;€</span><!--\\n          \';} else {_λ+=\'\\n          --><span class="currency">$</span><!--\\n          --><span class="price">\';_λ+=(getAmount(choice.amount, \'.\', \',\'));_λ+=\'</span><!--\\n          \';}_λ+=\'\\n        --></strong><!--\\n\\n        --><sub class="per-month">/mes</sub>\\n\\n      </div>\\n    </div>\\n\\n  </button>\\n</div>\\n\';return _λ;')).apply(null, _.map(function (k) {return s[k];}));
  }

  function widgetV2 (widget) {

    var widget_el = widget.el,
        button_el = null;

    function _onClick () {
      widget.showInfo();
    }

    function _unbind () {
      widget_el.removeEventListener('click', _onClick);
      if( button_el ) button_el.removeEventListener('click', _onClick);
    }

    return {
      render: function () {
        widget_el.innerHTML = widgetV2Ejs(widget.simulator);

        button_el = widget_el.querySelector('button');

        (button_el || widget_el).addEventListener('click', _onClick);
      },
      unbind: _unbind,
      detach: function () {
        _unbind();
        widget_el.innerHTML = '';
      },
    };

  }

  function widgetV3Ejs(s) {
  s=s||{};var _='type,preferences,zero_interest_campaign,choices,choice,getPrice,currency,getAmount,lighten,custom_styles,widget'.split(',');return Function.apply(null,_.concat('var _λ=\'\';_λ+=\'<div class="aplazame-widget aplazame-widget--type-\';_λ+=(type);_λ+=\' aplazame-widget--align-\';_λ+=(preferences.align || \'center\');_λ+=\'\';if( preferences.custom_styles && !preferences.api_custom_styles ){_λ+=\' aplazame-widget--custom-styles\';}_λ+=\'\';if( preferences.api_custom_styles )_λ+=\' aplazame-widget--api-custom-styles aplazame-styles\';_λ+=\'">\\n\\n  <div class="aplazame-widget-container">\\n\\n  \';if( preferences.smart_title ) {_λ+=\'\\n    <div class="aplazame-widget-smart-title">\';_λ+=(zero_interest_campaign ? ( preferences.title_zero_interest || \'¡Consíguelo sin intereses!\' ) : ( preferences.title_default || \'Págalo a plazos\' ));_λ+=\'</div>\\n  \';}_λ+=\'\\n\\n  <div class="aplazame-widget-instalments" \';if( type !== \'select\' && type !== \'big-button\' ){_λ+=\' data-action="showInfo"\';}_λ+=\'>\\n\\n    \';if( type === \'select\' ){_λ+=\'\\n    <select>\\n      \';for ( var i = 0, n = choices.length ; i < n ; i++ ) {_λ+=\'\\n      <option value="\';_λ+=(choices[i].num_instalments);_λ+=\'" \';_λ+=(choices[i] == choice ? \'selected\' : \'\');_λ+=\'><span class="apz-price_widget-amount">\';_λ+=(getPrice(choices[i].amount, currency));_λ+=\'/mes</span> en \';_λ+=(choices[i].num_instalments);_λ+=\' \';_λ+=(choices[i].num_instalments > 1 ? \'cuotas\' : \'cuota\');_λ+=\'</option>\\n      \';}_λ+=\'\\n    </select>\\n    \';}_λ+=\'\\n\\n    <span class="aplazame-widget-from">desde&nbsp;</span><!--\\n    --><strong class="aplazame-widget-amount"><!--\\n      \';if( currency === \'EUR\' )  {_λ+=\'\\n      --><span class="aplazame-widget-price">\';_λ+=(getAmount(choice.amount, \',\', \'.\'));_λ+=\'</span><!--\\n      --><span class="aplazame-widget-currency">€</span><!--\\n      \';} else {_λ+=\'\\n      --><span class="aplazame-widget-currency">$</span><!--\\n      --><span class="aplazame-widget-price">\';_λ+=(getAmount(choice.amount, \'.\', \',\'));_λ+=\'</span><!--\\n      \';}_λ+=\'\\n    --></strong><!--\\n    --><sub class="aplazame-widget-per-month">/mes</sub><!--\\n    --><span class="aplazame-widget-instalments-wrapper"><!--\\n      --><span class="aplazame-widget-instalments-pre-in">&nbsp;en&nbsp;</span><!--\\n      --><em class="aplazame-widget-instalments-num">\';_λ+=(choice.num_instalments);_λ+=\'</em><!--\\n      --><span class="aplazame-widget-instalments-post-instalments">&nbsp;cuotas</span><!--\\n    --></span>\\n\\n  </div>\\n\\n  \';if( type === \'big-button\' || preferences.show_instalments_buttons ){_λ+=\'\\n  <div class="aplazame-widget-choice-buttons-wrapper">\\n    <span class="aplazame-widget-choice-text-in">en&nbsp;</span>\\n    <span class="aplazame-widget-choice-button">\\n      <button type="button" class="aplazame-widget-choice-button-decrease" data-action="decreaseNumInstalments">\\n        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">\\n          <path d="m 3,6 h 6" stroke="currentColor" stroke-width="1"/>\\n        </svg>\\n      </button>\\n      <div class="aplazame-widget-choice-button-value">\';_λ+=(choice.num_instalments);_λ+=\'</div>\\n      <button type="button" class="aplazame-widget-choice-button-increase" data-action="increaseNumInstalments">\\n        <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">\\n          <path d="m 3,6 h 6" stroke="currentColor" stroke-width="1"/>\\n          <path d="m 6,3 v 6" stroke="currentColor" stroke-width="1"/>\\n        </svg>\\n      </button>\\n    </span>\\n    <span class="aplazame-widget-choice-text-instalments">&nbsp;cuotas</span>\\n  </div>\\n  \';}_λ+=\'\\n\\n  \';if( preferences.branding ){_λ+=\'\\n  <div class="aplazame-widget-branding">\\n    <span class="aplazame-widget-with">con&nbsp;</span>\\n    <svg width="77" height="20" viewBox="0 0 77 20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fill-rule="evenodd"><path d="M28 11.2v-.6h-1.2c-1 0-1.4.2-1.4.8 0 .5.4.8 1 .8 1 0 1.5-.3 1.5-1m1.8 1.4c0 .4-.3.7-.7.7-.2 0-.4 0-.6-.3l-.2-.3c-.4.4-1 .7-2 .7-1.4 0-2.2-.7-2.2-2s1-2 2.6-2H28v-.2c0-.7-.5-1.2-1.5-1.2-.4 0-1 .2-1 .3H25c-.4 0-.6-.2-.6-.5 0-.2 0-.5.3-.6.4-.2 1-.4 2-.4 1.8 0 2.6 1 2.6 2.4v2c0 .4 0 .5.2.7l.2.2v.4M35 11.2v-1-1.3c-.3-.7-.7-1-1.3-1-.5 0-1 .3-1.2 1V11c.2.6.7 1 1.2 1 .6 0 1-.4 1.2-1M31 15V7.5c0-.5.2-.8.7-.8.4 0 .6.3.7.7.3-.4.8-.7 1.7-.7 1.2 0 2 .6 2.3 1.6.2.5.2 1 .2 1.7 0 .8 0 1.3-.2 1.8-.3 1-1 1.6-2.2 1.6-.8 0-1.3-.3-1.6-.8V15c0 .4-.3.7-.7.7-.5 0-.8-.3-.8-.8M39.5 13.3c-1.2 0-1.7-.6-1.7-1.8V5c0-.5.3-.8.7-.8.5 0 .8.3.8.8v6.4c0 .4 0 .6.5.6.4 0 .6.3.6.7 0 .3-.2.6-.7.6h-.2zM45 11.2v-.6h-1c-1 0-1.4.2-1.4.8 0 .5.4.8 1 .8 1 0 1.5-.3 1.5-1m2 1.4c0 .4-.4.7-.8.7-.2 0-.4 0-.6-.3l-.2-.3c-.4.4-1 .7-2 .7-1.4 0-2.2-.7-2.2-2s1-2 2.5-2H45v-.2c0-.7-.3-1.2-1.3-1.2-.5 0-1 .2-1.2.3H42c-.2 0-.5-.2-.5-.5 0-.2 0-.5.4-.6.3-.2 1-.4 2-.4 1.7 0 2.5 1 2.5 2.4V12l.3.2.2.4M48.5 13.3c-.4 0-.7-.3-.7-.7 0-.3.2-.5.5-1l3-3.4h-2.6c-.4 0-.7-.3-.7-.7 0-.3.3-.6.7-.6h3.7c.4 0 .7.2.7.5s0 .6-.4 1l-3 3.4h2.8c.4 0 .7.2.7.6 0 .4-.2.7-.6.7h-4zM58 11.2v-.6h-1.2c-1 0-1.4.2-1.4.8 0 .5.4.8 1 .8 1 0 1.5-.3 1.5-1m1.7 1.4c0 .4-.3.7-.7.7-.3 0-.5 0-.6-.3l-.2-.3c-.4.4-1 .7-2 .7-1.4 0-2.2-.7-2.2-2s1-2 2.5-2h1.3v-.2c0-.7-.3-1.2-1.3-1.2-.5 0-1 .2-1.2.3H55c-.4 0-.7-.2-.7-.5 0-.2 0-.5.4-.6.4-.2 1-.4 2-.4 1.7 0 2.6 1 2.6 2.4V12l.3.2v.4M60.8 7.6c0-.5.3-.8.8-.8.4 0 .7.3.7.7.3-.4 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5-.5 1-.8 2-.8 1.5 0 2.3 1 2.3 2.3v3.5c0 .5-.2.8-.6.8-.5 0-.8-.3-.8-.8v-3c0-1-.4-1.4-1.2-1.4-.7 0-1.2.6-1.2 1.5v3c0 .5-.3.8-.7.8-.5 0-.8-.3-.8-.8v-3c0-1-.4-1.4-1.2-1.4-.7 0-1.2.6-1.2 1.5v3c0 .5-.3.8-.7.8-.5 0-.8-.3-.8-.8v-5zM75.4 8.8c-.2-.5-.6-.8-1.2-.8s-1 .3-1.3.8l-.2.6h2.6v-.6m-3.8 2.8c-.2-.4-.3-1-.3-1.5 0-.6 0-1 .2-1.5.4-1 1.4-1.7 2.6-1.7 1.5 0 2.4.6 2.8 1.7L77 10c0 .3-.2.6-.5.6H73h-.2v.5c.3.7.8 1 1.6 1 .5 0 1 0 1.3-.4l.5-.2c.4 0 .6.3.6.7 0 .3 0 .5-.3.6-.5.5-1.2.8-2.3.8-1.3 0-2.3-.7-2.6-1.8M18 7.3c.4-.6.3-1.3-.2-1.6-.6-.4-1.3-.2-1.6.3-.8 1-1.8 2-3 2.6l-3-7.8c-.2-.4-.6-.7-1-.7-.5 0-1 .3-1 .8L5 7.5l2 1 2-4.2 2 5.2-2 .2C6 9.7 3.6 8.4 2 6 1.7 5.6 1 5.5.4 6 0 6 0 6.8.2 7.4c2 3 5.4 4.6 9 4.6 1 0 1.8 0 2.8-.4l3 7.6c.2.6.8 1 1.4.6.6-.2 1-1 .7-1.4l-3-7.6c1.7-.8 3-2 4-3.5zM2.8 13.7c-.3.6 0 1.3.6 1.5.6.3 1.2 0 1.5-.6l.8-2c-.7-.2-1.4-.5-2-1l-1 2z"/></g></svg>\\n  </div>\\n  \';}_λ+=\'\\n\\n  </div>\\n\\n</div>\\n\\n\';if( ( !preferences.custom_styles || preferences.api_custom_styles ) && type !== \'text\' ){_λ+=\'\\n<style rel="stylesheet">\\n  \';if(preferences.text_color) {_λ+=\'\\n  .aplazame-widget:not(.aplazame-widget--custom-styles) { color: \';_λ+=(preferences.text_color);_λ+=\'; }\\n  \';}_λ+=\'\\n\\n  \';if(preferences.btn_text_color) {_λ+=\'\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-big-button .aplazame-widget-container,\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-button .aplazame-widget-instalments,\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-select .aplazame-widget-instalments {\\n    color: \';_λ+=(preferences.btn_text_color);_λ+=\';\\n  }\\n\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-select .aplazame-widget-instalments::before {\\n    \';_λ+=(\'background-image: url("data:image/svg+xml,%3Csvg xmlns=\\\'http://www.w3.org/2000/svg\\\' height=\\\'12\\\' width=\\\'8\\\'%3E%3Cg fill=\\\'none\\\' fill-rule=\\\'evenodd\\\' stroke=\\\'\' + preferences.btn_text_color.replace(/#/g, \'%23\') + \'\\\'%3E%3Cpath d=\\\'M.752 3L3.966.5 7.252 3M.752 9l3.214 2.5L7.252 9\\\'/%3E%3C/g%3E%3C/svg%3E");\');_λ+=\'\\n  }\\n  \';}_λ+=\'\\n  \';if(preferences.btn_bg_color) {_λ+=\'\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-big-button .aplazame-widget-container,\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-button .aplazame-widget-instalments::before,\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-select .aplazame-widget-instalments::before {\\n    background-color: \';_λ+=(preferences.btn_bg_color);_λ+=\';\\n  }\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-button .aplazame-widget-instalments:hover::before,\\n  .aplazame-widget:not(.aplazame-widget--custom-styles).aplazame-widget--type-select .aplazame-widget-instalments:hover::before {\\n    background-color: \';_λ+=(/^#/.test(preferences.btn_bg_color) ? lighten(preferences.btn_bg_color, -5) : preferences.btn_bg_color);_λ+=\';\\n  }\\n  \';}_λ+=\'\\n</style>\\n\';}_λ+=\'\\n\';if( preferences.api_custom_styles && custom_styles ){_λ+=\'\\n<!-- <style rel="stylesheet">\';_λ+=(custom_styles.replace(/\.aplazame-widget(?=[ \.])/g, \'.aplazame-widget:not(.aplazame-widget--custom-styles)\'));_λ+=\'</style> -->\\n<style rel="stylesheet">\';_λ+=(custom_styles);_λ+=\'</style>\\n\';}_λ+=\'\\n\';return _λ;')).apply(null, _.map(function (k) {return s[k];}));
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

  var type = {
    isType: function (type, value) {
      if( value === undefined ) {
        return _isType(type);
      }
      return _isType(type)(value);
    },
    instanceOf: function (Proto, value) {
      if( value === undefined ) {
        return _instanceOf(Proto);
      }
      return _instanceOf(Proto)(value);
    },
    isObject: function (o) {
      return typeof o === 'object' && o !== null;
    },
  	isFunction: _isType('function'),
  	isString: _isType('string'),
  	isNumber: _isType('number'),
  	isArray: Array.isArray || _instanceOf(Array),
  	isDate: _instanceOf(Date),
  	isRegExp: _instanceOf(RegExp),
  	isElement: function(o) {
      return o && o.nodeType === 1;
    },
    isUndefined: function (value) {
      return value === undefined;
    }
  };

  var arrayShift = [].shift;

  var _extend = function extend () {
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
  };

  var arrayShift$1 = [].shift;

  function _merge () {
      var dest = arrayShift$1.call(arguments),
          src = arrayShift$1.call(arguments),
          key;

      while( src ) {

        if( typeof dest !== typeof src ) {
            dest = type.isArray(src) ? [] : ( type.isObject(src) ? {} : src );
        }

        if( type.isObject(src) ) {

          for( key in src ) {
            if( src[key] === undefined ) {
              dest[key] = undefined;
            } else if( type.isArray(dest[key]) ) {
              [].push.apply(dest[key], src[key]);
            } else if( type.isObject(dest[key]) ) {
              dest[key] = _merge(dest[key], src[key]);
            } else {
              dest[key] = src[key];
            }
          }
        }
        src = arrayShift$1.call(arguments);
      }

      return dest;
  }

  function mapObject (o, iteratee) {
    var result = {};
    for( var key in o ) {
      result[key] = iteratee(o[key], key);
    }
    return result;
  }

  function _copy (src) {
    if( type.isArray(src) ) {
      return src.map(function (item) {
        return _copy(item);
      });
    }

    if( type.isObject(src) ) {
      return mapObject(src, function (item) {
        return _copy(item);
      });
    }

    return src;
  }

  var extend = {
    extend: _extend,
    merge: _merge,
    copy: _copy
  };

  if (!Date.now) {
    Date.now = function now() {
      return new Date().getTime();
    };
  }

  if( !Element.prototype.closest ) {
    Element.prototype.closest = function (selector) {
      var el = this;

      while( el ) {
        if( el.matchesSelector(selector) ) {
          break;
        }
        el = el.parentElement;
      }
      return el;
    };
  }

  if( !Element.prototype.addEventListener ) {
    if( Element.prototype.attachEvent ) {
      Element.prototype.addEventListener = function (eventName, listener) {
        return Element.prototype.attachEvent( 'on' + eventName, listener );
      };
      Element.prototype.removeEventListener = function (eventName, listener) {
        return Element.prototype.detachEvent( 'on' + eventName, listener );
      };
    } else {
      throw 'Browser not compatible with element events';
    }
  }

  (function (root) {

    root.matchMedia = root.matchMedia || root.webkitMatchMedia || root.mozMatchMedia || root.msMatchMedia;
  })(window);

  if( !Element.prototype.matchesSelector ) {
    Element.prototype.matchesSelector = (
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector
    );
  }

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var parole = createCommonjsModule(function (module, exports) {
  /* global process */

  (function (root, factory) {
    {
      // CommonJS
      module.exports = factory();
    }
  })(commonjsGlobal, function () {

    function _runQueue (queue) {
      for( var i = 0, n = queue.length ; i < n ; i++ ) {
        queue[i]();
      }
    }

    var nextTick = typeof process === 'object' && typeof process.nextTick === 'function' ? process.nextTick :
        (function (global) {
          if( 'Promise' in global && typeof global.Promise.resolve === 'function' ) return (function (resolved) {
            return resolved.then.bind(resolved);
          })( global.Promise.resolve() );
          if( 'MutationObserver' in global ) return (function (node) {
            return function (callback) {
              var observer = new MutationObserver(function () {
                callback();
                observer.disconnect();
              });
              observer.observe( node, {characterData: true} );
              node.data = false;
            };
          })( document.createTextNode('') );
          return global.setImmediate || global.setTimeout;
        })( typeof window === 'object' ? window : this );

    function once (fn) {
      return function () {
        if( fn ) fn.apply(this, arguments);
        fn = null;
      };
    }

    function isObjectLike (x) {
      return ( typeof x === 'object' || typeof x === 'function' );
    }

    function isThenable (x) {
      return isObjectLike(x) && 'then' in x;
    }

    function runThenable (then, xThen, p, x, resolve, reject) {
      try {
        then.call(x, function (value) {
          xThen(p, value, true, resolve, reject);
        }, function (reason) {
          xThen(p, reason, false, resolve, reject);
        });
      } catch(err) {
        xThen(p, err, false, resolve, reject);
      }
    }

    function xThen (p, x, fulfilled, resolve, reject) {
      var then;

      if( x && isObjectLike(x) ) {
        try {
          if( x === p ) throw new TypeError('A promise can not be resolved by itself');
          then = x.then;

          if( fulfilled && typeof then === 'function' ) {
            runThenable(then, once(xThen), p, x, resolve, reject);
          } else {
            (fulfilled ? resolve : reject)(x);
          }
        } catch (reason) {
          reject(reason);
        }
      } else {
        (fulfilled ? resolve : reject)(x);
      }
    }

    function Parole (resolver) {
      if( !(this instanceof Parole) ) return new Parole(resolver);

      var p = this,
          reject = function (reason) {
            if( p.fulfilled || p.rejected ) return;
            p.rejected = true;
            p.value = reason;
            nextTick(function () { _runQueue(p.queue); });
          };

      p.queue = [];

      resolver(function (value) {
        xThen(p, value, true, function (result) {
          if( p.fulfilled || p.rejected ) return;
          p.fulfilled = true;
          p.value = result;
          nextTick(function () { _runQueue(p.queue); });
        }, reject);
      }, reject);
    }

    Parole.prototype.then = function (onFulfilled, onRejected) {
      var p = this;
      return new Parole(function (resolve, reject) {

        function complete () {
          var then = p.fulfilled ? onFulfilled : onRejected;
          if( typeof then === 'function' ) {
            try {
              resolve( then(p.value) );
            } catch(reason) {
              reject( reason );
            }
          } else if( p.fulfilled ) resolve(p.value);
          else reject(p.value);
        }

        if( !p.fulfilled && !p.rejected ) {
          p.queue.push(complete);
        } else {
          nextTick(complete);
        }

      });
    };

    Parole.prototype.catch = function (onRejected) {
      return this.then(null, onRejected);
    };

    // Promise methods

    Parole.defer = function () {
      var deferred = {};
      deferred.promise = new Parole(function (resolve, reject) {
        deferred.resolve = resolve;
        deferred.reject = reject;
      });
      return deferred;
    };

    Parole.when = function (x) { return ( x && x.then ) ? x : Parole.resolve(x); };

    Parole.resolve = function (value) {
      return new Parole(function (resolve) {
        resolve(value);
      });
    };

    Parole.reject = function (value) {
      return new Parole(function (resolve, reject) {
        reject(value);
      });
    };

    Parole.all = function (promises) {
      var waiting_promises = promises.length;
      return new Parole(function (resolve, reject) {
        var results = new Array(waiting_promises);
        promises.forEach(function (promise, i) {
          var addresult = function (result) {
            results[i] = result;
            waiting_promises--;
            if( !waiting_promises ) resolve(results);
          };
          if( isThenable(promise) ) promise.then.call(promise, addresult, reject);
          else addresult(promise);
        });
        if( !results.length ) resolve(results);
      });
    };

    Parole.race = function (promises) {
      return new Parole(function (resolve, reject) {
        promises.forEach(function (promise) {
          if( isThenable(promise) ) promise.then.call(promise, resolve, reject);
          else resolve(promise);
        });
        if( !promises.length ) resolve();
      });
    };

    return Parole;

  });
  });

  function _key (o, _key, value){
      if( !type.isObject(o) ) {
  			return undefined;
  		}

      var keys = _key.split('.'),
          key = keys.shift();

      if( value === undefined ) {
        while (key) {
          if( type.isObject(o) && key in o ) {
            o = o[key];
          } else {
            return;
          }
          key = keys.shift();
        }

        return o;
      } else {

        while (key) {
          if( o instanceof Object ) {
            if ( keys.length ){
              if( !(key in o) ) {
                o[key] = {};
              }
              o = o[key];
            } else {
              o[key] = value;
              return true;
            }
          }
          key = keys.shift();
        }

        return false;
      }
  }

  var key = {
    key: _key,
    keys: Object.keys
  };

  var RE_dotsBack = /[^/]+\/\.\.\//g,
  	clearStr = function () { return ''; };

  function _joinPath () {
      var path = (arguments[0] || '').replace(/\/$/, '');

      for( var i = 1, last = arguments.length - 1 ; i < last ; i++ ) {
          path += '/' + arguments[i].replace(/^\/|\/$/g, '');
      }
      if( last ) {
          path += arguments[last] ? ( '/' + arguments[last].replace(/^\//, '') ) : '';
      }

      while( RE_dotsBack.test(path) ) {
  			path = path.replace(RE_dotsBack, clearStr);
      }

      return path;
  }

  var path = {
    joinPath: _joinPath
  };

  var _eval = function (expression) {

    /* jshint ignore:start */
    var fn = new Function('model', 'try{ with(model) { return (' + expression + ') }; } catch(err) { return \'\'; }');
    /* jshint ignore:end */
    return function (model, thisArg) {
      return fn.call(thisArg, model);
    };
  };

  var Scope = function (data) {
  	if(!this) {
  		return new Scope(data);
  	}

    this.extend(data || {});
  };

  Scope.prototype.new = function(data) {
      return Object.create(this).extend(data);
  };

  Scope.prototype.extend = function(data) {
    for( var key in data ) {
      this[key] = data[key];
    }
    return this;
  };

  Scope.prototype.eval = function ( expression, thisArg ) {
    return _eval(expression)(this, thisArg);
  };

  var scope = Scope;

  /**
   * https://github.com/gre/bezier-easing
   * BezierEasing - use bezier curve for transition easing function
   * by Gaëtan Renaudeau 2014 - 2015 – MIT License
   */

  // These values are established by empiricism with tests (tradeoff: performance VS precision)
  var NEWTON_ITERATIONS = 4;
  var NEWTON_MIN_SLOPE = 0.001;
  var SUBDIVISION_PRECISION = 0.0000001;
  var SUBDIVISION_MAX_ITERATIONS = 10;

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  var float32ArraySupported = typeof Float32Array === 'function';

  function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
  function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
  function C (aA1)      { return 3.0 * aA1; }

  // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
  function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

  // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
  function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

  function binarySubdivide (aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
  }

  function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
   for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
     var currentSlope = getSlope(aGuessT, mX1, mX2);
     if (currentSlope === 0.0) {
       return aGuessT;
     }
     var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
     aGuessT -= currentX / currentSlope;
   }
   return aGuessT;
  }

  var src = function bezier (mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      throw new Error('bezier x values must be in [0, 1] range');
    }

    // Precompute samples table
    var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX (aX) {
      var intervalStart = 0.0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;

      // Interpolate to provide an initial guess for t
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;

      var initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= NEWTON_MIN_SLOPE) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }

    return function BezierEasing (x) {
      if (mX1 === mY1 && mX2 === mY2) {
        return x; // linear
      }
      // Because JavaScript number are imprecise, we should guarantee the extremes are right.
      if (x === 0) {
        return 0;
      }
      if (x === 1) {
        return 1;
      }
      return calcBezier(getTForX(x), mY1, mY2);
    };
  };

  var timingFunctions = {},
      noop = function () {},
      getTimingFunction = function (timingFunctionName) {
        if( !timingFunctions[timingFunctionName] ) {
          if( timingFunctionName === 'linear' ) {
            timingFunctions[timingFunctionName] = function ( value ) { return value; };
          } else if( timingFunctionName === 'ease' ) {
            timingFunctions[timingFunctionName] = src(.17,.67,.83,.67);
          } else if( timingFunctionName === 'ease-in' ) {
            timingFunctions[timingFunctionName] = src(.42,0,1,1);
          } else if( timingFunctionName === 'ease-out' ) {
            timingFunctions[timingFunctionName] = src(0,0,.58,1);
          } else if( timingFunctionName === 'ease-in-out' ) {
            timingFunctions[timingFunctionName] = src(.42,0,.58,1);
          }
        }
        return timingFunctions[timingFunctionName];
      },
      _requestAnimationFrame = window.requestAnimationFrame,
      // eslint-disable-next-line
      _cancelAnimationFrame = window.cancelAnimationFrame,
      animation_polyfilled = false;

  // FROM: https://gist.github.com/paulirish/1579671
  if( !_requestAnimationFrame ) (function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        _requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        _cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if( !_requestAnimationFrame ) {
      animation_polyfilled = true;
      _requestAnimationFrame = function(callback, _element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
        timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

      _cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
    }
  })();

  // FROM: https://gist.github.com/paulirish/5438650
  (function(){

    if ('performance' in window == false) {
        window.performance = {};
    }

    Date.now = (Date.now || function () {  // thanks IE8
      return new Date().getTime();
    });

    if ('now' in window.performance == false){

      var nowOffset = Date.now();

      if (performance.timing && performance.timing.navigationStart){
        nowOffset = performance.timing.navigationStart;
      }

      window.performance.now = function now(){
        return Date.now() - nowOffset;
      };
    }

  })();

  function animate (progressFn, duration, atEnd, timingFunctionName) {
    var aux;
    if ( duration instanceof Function ) {
      if ( typeof atEnd === 'number' ) {
        aux = duration;
        duration = atEnd;
        atEnd = aux;
      } else {
        atEnd = duration;
        duration = 400;
      }
    } else if ( duration === undefined ) {
      duration = 400;
    }

    timingFunctionName = timingFunctionName || ( typeof atEnd === 'string' ? atEnd : ( typeof duration === 'string' ? duration : 'ease' ) );

    progressFn(duration === 0 ? 1 : 0);

    var start, frame_id,
        timingFunction = getTimingFunction(timingFunctionName),
        deferred = parole.defer();

    if( duration > 0 ) {
      start = animation_polyfilled ? new Date().getTime() : performance.now();

      frame_id = _requestAnimationFrame(function step() {
        var elapsed = performance.now() - start;

        if( elapsed >= duration ) {
          progressFn(1);
          deferred.resolve();
          (atEnd || noop)();
        } else {
          progressFn( timingFunction(elapsed/duration) );
          frame_id = _requestAnimationFrame(step);
        }
      });
    } else setTimeout(deferred.resolve, 0);

    deferred.promise.stop = function (reject) {
      _cancelAnimationFrame(frame_id);
      if( reject ) deferred.reject();
    };

    return deferred.promise;
  }

  animate.time = function (el) {
    var time = 0;
    var duration = window.getComputedStyle(el).animationDuration;
    if( duration ) {
      duration.replace(/([0-9](\.[0-9])?)(m)?s/, function (matched, t, decimals, ms) {
        time += ms ? Number(t) : Number(t)*1000;
      });
    }
    if( window.getComputedStyle(el).animationDelay ) {
      window.getComputedStyle(el).animationDelay.replace(/([0-9](\.[0-9])?)(m)?s/, function (matched, t, decimals, ms) {
        time += ms ? Number(t) : Number(t)*1000;
      });
    }
    duration = window.getComputedStyle(el).transitionDuration;
    if( duration ) {
      duration.replace(/([0-9](\.[0-9])?)(m)?s/, function (matched, t, decimals, ms) {
        t = ms ? Number(t) : Number(t)*1000;
        if( t > time ) {
          time = t;
        }
      });
    }
    // console.log('animationTime', el, time);
    return time;
  };

  var animate_1 = animate;

  var wait = function (delay, callback) {
  		if( delay instanceof Function ) {
  			delay = [callback, callback = delay][0];
  		}
  		if( callback && !(callback instanceof Function) ) {
  			throw new Error('callback should be a Function');
  		}
  		if( typeof delay !== 'number' ) {
  			throw new Error('delay should be a Number');
  		}
  		return new parole(function (resolve) {
  			setTimeout(function () {
  				resolve();
  				if( callback ) {
  					callback();
  				}
  			}, delay);
  		});
  	};

  var wait_1 = wait;

  var readyListeners = [],
      initReady = function () {
        var listeners = readyListeners;
        readyListeners = undefined;
        [].forEach.call(listeners, function (cb) { cb(); });
        document.removeEventListener('DOMContentLoaded', initReady);
        window.removeEventListener('load', initReady);
      };

  document.addEventListener('DOMContentLoaded', initReady);
  window.addEventListener('load', initReady);

  function ready (callback) {
    if( callback instanceof Function ) {
      if( readyListeners ) {
        readyListeners.push(callback);
      } else {
        callback();
      }
    }
  }

  var ready_1 = ready;

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

  var template_1 = template;

  function once (fn, nextValue) {
    var result, hasNextValue = arguments.length > 1;
    return function () {
      if( fn ) {
        result = fn.apply(this, arguments);
        fn = null;
        return result;
      }
      return hasNextValue ? nextValue : result;
    };
  }

  var once_1 = once;

  function debounce (fn, timeslot) {
    timeslot = timeslot || 80;

    var timer = null;

    return function () {
      var _this = this, args = arguments;

      if( timer ) {
        clearTimeout(timer);
        timer = null;
      }

      timer = setTimeout(function () {
        fn.apply(_this, args);
      }, timeslot);
    };
  }

  var debounce_1 = debounce;

  var events = {
    on: function (el, eventName, handler, useCapture) {
      if( typeof el === 'string' ) {
        return document.documentElement.addEventListener(el, eventName, handler);
      }
      return el.addEventListener(eventName, handler, useCapture);
    },
    off: function (el, eventName, handler, useCapture) {
      if( typeof el === 'string' ) {
        return document.documentElement.removeEventListener(el, eventName, handler);
      }
      return el.removeEventListener(eventName, handler, useCapture);
    },
    triggerEvent: document.createEvent ? function (element, eventName, data) {
      var event = document.createEvent('HTMLEvents');
      event.data = data;
      event.initEvent(eventName, true, true);
      element.dispatchEvent(event);
      return event;
    } : function (element, eventName, data) {
      var event = document.createEventObject();
      event.data = data;
      element.fireEvent('on' + eventName, event);
      return event;
    }
  };

  var classListEnabled = !!document.createElement('div').classList;

  var classListHas = classListEnabled ? function (el, className) {
        return el.classList.contains(className);
      } : function (el, className) {
        return new RegExp('\\b' + (className || '') + '\\b','').test(el.className);
      },
      classListAdd = classListEnabled ? function (el, className) {
        el.classList.add(className);
      } : function (el, className) {
        if( !classListHas(el, className) ) {
          el.className += ' ' + className;
        }
      },
      classListRemove = classListEnabled ? function (el, className) {
        el.classList.remove(className);
      } : function (el, className) {
        el.className = el.className.replace(new RegExp('\\s*' + className + '\\s*','g'), ' ');
      },
      classListToggle = classListEnabled ? (function () {
        var aux = document.createElement('span');
        aux.classList.toggle('test', true);
        aux.classList.toggle('test', true);

        // IE does not support second parameter toggle
        return aux.classList.contains('test') ? function (el, className, toggle) {
          el.classList.toggle(className, toggle);
        } : function (el, className, toggle) {
          toggle = toggle === undefined ? !el.classList.contains(className) : toggle;
          if( toggle ) el.classList.add(className);
          else el.classList.remove(className);
        };
      })() : function (el, className) {
        el.className = el.className.replace(new RegExp('\\s*' + className + '\\s*','g'), ' ');
      };

  function _formKey(o, key, value) {
    var keys = key.replace(/\[(.*?)\]/g, '.$1').split('.'),
        last_i = keys.length - 1;
    keys.forEach(function (_key, i) {
      if( i === last_i ) return o[_key] = value;
      o[_key] = o[_key] || {};
      o = o[_key];
    });
  }

  function _currentScriptAlt () {
   var scripts = document.getElementsByTagName('script');
   return scripts[scripts.length - 1];
  }

  var _dom = {
    classList: { add: classListAdd, remove: classListRemove, has: classListHas, toggle: classListToggle },
    addClass: classListAdd,
    removeClass: classListRemove,
    hasClass: classListHas,
    toggleClass: classListToggle,
    create: function (tagName, attrs) {
      var el = document.createElement(tagName);

      if( attrs ) {
        if( attrs.html ) {
          el.innerHTML = attrs.html;
        }
        for( var attr in attrs ) {
          if( attr !== 'html' ) {
            el[attr] = attrs[attr];
          }
        }
      }
      return el;
    },
    attr: function (el, name, value) {
      if( !(el instanceof Element) && el[0] instanceof Element ) {
        el = el[0];
      }
      if( value !== undefined ) {
        el.setAttribute(name, value);
      }
      return el.getAttribute(name);
    },
    tmpClass: function (el, className, duration, cb) {
      var isCollection = !(el instanceof Element ) && el.length;

      if( isCollection ) {
        [].forEach.call(el, function (_el) {
          classListAdd(_el, className);
        });
      } else {
        classListAdd(el, className);
      }
      setTimeout(function () {
        if( isCollection ) {
          [].forEach.call(el, function (_el) {
            classListRemove(_el, className);
          });
        } else {
          classListRemove(el, className);
        }
        if( cb instanceof Function ) {
          cb();
        }
      }, duration instanceof Function ? duration() : duration );
    },
    formParams: function (form) {
      if( !(form instanceof Element) && form.length ) {
        form = form[0];
      }

      var data = {};
      [].forEach.call(form.elements, function (el) {
        if( el.name && !el.disabled ) {
          if( el.type === 'checkbox' ) {
            _formKey(data, el.name, el.checked);
          } else if( el.type === 'radio' ) {
            if( el.checked ) {
              _formKey(data, el.name, el.value);
            }
          } else {
            _formKey(data, el.name, el.value);
          }
        }
      });
      return data;
    },
    currentScript: function () {
      return document.currentScript || _currentScriptAlt();
    },
  };

  var dom = _dom;

  var normalize = {
    isTouchDevice: 'ontouchstart' in document.documentElement,
    isMac: /^Mac/.test(navigator.platform),
    isAndroid: /^Android/.test(navigator.platform),
    addHTMLClasses: function () {
      var _ = dom;

      _.addClass(document.documentElement, normalize.isTouchDevice ? 'touch' : 'no-touch' );
      if( normalize.isMac ) {
        _.addClass(document.documentElement, 'is-mac');
      }
      if( normalize.isAndroid ) {
        _.addClass(document.documentElement, 'is-android');
      }
    }
  };

  var normalize_1 = normalize;

  var html = document.documentElement, scroll_root = document.scrollingElement;
  var supports_passive = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      get: function() {
        supports_passive = true;
      }
    });
    window.addEventListener('testPassive', null, opts);
    window.removeEventListener('testPassive', null, opts);
  } catch (e) {} // eslint-disable-line

  function setScrollRoot(scrolling_element) {
    scroll_root = scrolling_element;
    scroll.goto = setScrollTopRoot;
    scroll.top = getScrollTopRoot;
  }

  function setScrollTopRoot (scroll_value) {
    scroll_root.scrollTop = scroll_value;
  }

  function getScrollTopRoot () {
    return scroll_root.scrollTop;
  }

  function setScrollTopDiscover (scroll_value) {
    if( scroll_value > 0 ) {
      html.scrollTop = scroll_value;
      if( document.body ) document.body.scrollTop = scroll_value;
      if( scroll_value === html.scrollTop ) setScrollRoot(html);
      else if( document.body && scroll_value === document.body.scrollTop ) setScrollRoot(document.body);
    } else {
      html.scrollTop = 0;
      if( document.body ) document.body.scrollTop = 0;
    }
  }

  function getScrollTopDiscover () {
    if( document.body && document.body.scrollTop !== 0 ) {
      setScrollRoot(document.body);
      return document.body.scrollTop;
    }
    if( html.scrollTop !== 0 ) {
      setScrollRoot(html);
      return html.scrollTop;
    }
  }

  var scroll = {
    on: function ( handler, use_capture ) {
      return document.addEventListener('scroll', handler, supports_passive ? { passive: supports_passive, capture: use_capture } : use_capture );
    },
    off: function ( handler, use_capture ) {
      return document.removeEventListener('scroll', handler, supports_passive ? { passive: supports_passive, capture: use_capture } : use_capture );
    },
    top: scroll_root ? getScrollTopRoot : getScrollTopDiscover,
    goto: scroll_root ? setScrollTopRoot : setScrollTopDiscover,
  };

  var scroll_1 = scroll;

  var topClass = function (scroll) {

  	var ready = ready_1;

  	scroll.autoTopClass = function (topClass, topClassAlt) {

  		topClass = topClass || 'js-scroll-top';
  		topClassAlt = topClassAlt || 'js-no-scroll-top';

      ready(function () {
        var _ = dom;
        scroll.on(function () {
          _.toggleClass(document.documentElement, topClass,
            !_.toggleClass(document.documentElement, topClassAlt, scroll.top() )
          );
        });
      });
  	};

  };

  var animate$1 = function (scroll) {

  	var animate = animate_1,
  			Parole = parole,
  			noop = function() {},
  			scrollAnimation = animate(noop, 0),
  			aux;

  	scroll.animation = function () {
  		return scrollAnimation;
  	};

  	scroll.animateTo = function (value, cb, duration ) {
  		var scrollFrom = scroll.top();

  		if( value === undefined ) {
  			return Parole.reject();
  		}
  		if( value instanceof Element ) {
  			// position from top of the page
  			value = value.getBoundingClientRect().top + scrollFrom;
  		}

  		if( typeof cb === 'number' ) {
  			aux = duration;
  			duration = cb;
  			cb = typeof aux === 'function' ? aux : noop;
  		}

  		var scrollDelta = value - scrollFrom;

  		scrollAnimation.stop();
  		scroll.inAnimation = true;
  		scrollAnimation = animate(function (progress) {
  			scroll.goto( scrollFrom + scrollDelta*progress );
  		}, function () {
  			scroll.inAnimation = false;
  			(cb || noop)();
  		}, duration || 350, 'ease-out');

  		return scrollAnimation;
  	};

  	return scroll;
  };

  topClass(scroll_1);
  animate$1(scroll_1);

  var bundle = scroll_1;

  function _ (selector, source) {
    return source && typeof source === 'string' ?
  		selector.querySelector(source) :
  		(source || document).querySelector(selector);
  }

  _.noop = function (value) { return value; };
  _.once = function (fn) {
    return function () {
      if( fn ) fn.apply(this, arguments);
      fn = null;
    };
  };
  _.now = Date.now ? function () {
    return Date.now();
  } : function () {
    return new Date().getTime();
  };

  _.usePolyfills = _.once(function () {
    
  });

  _.q = parole;

  extend.extend(_, extend,
    key,
    type,
    path
  );

  _.Scope = scope;

  _.extend(_, {
  	animate: animate_1,
  	wait: wait_1
  });

  _.extend(_, {
  	ready: ready_1,
  	template: template_1,
  	once: once_1,
  	debounce: debounce_1
  });

  _.extend(_,
    events,
  	// _.on(el, eventName, handler, useCapture)
  	// _.off(el, eventName, handler, useCapture)
  	// _.triggerEvent(element, eventName, data)

    dom
    // _.create(tagName, attrs)
  	// _.attr(el, name, value)
    // _.tmpClass(el, className, duration, cb)
  );

  _.extend(_, {
  	normalize: normalize_1,
  	// _.touchDevice === true | false
  	// _.isMac === true | false
  	// _.isAndroid === true | false

  	scroll: bundle // scroll is not available until document is ready
  	// _.scroll.on( handler, useCapture )
  	// _.scroll.off( handler, useCapture )
  	// _.scroll.top()
  	// _.scroll.goto(value)
  	// _.scroll.animateTo(value | HTMLElement, callback, duration): Promise
  	// _,scroll.inAnimation === true | false
  });

  var bundle$1 = _;

  function _isType$1 (type) {
      return function (o) {
          return (typeof o === type);
      };
  }

  function _instanceOf$1 (_constructor) {
      return function (o) {
          return ( o instanceof _constructor );
      };
  }

  var type$1 = {
    isType: function (type, value) {
      if( value === undefined ) {
        return _isType$1(type);
      }
      return _isType$1(type)(value);
    },
    instanceOf: function (Proto, value) {
      if( value === undefined ) {
        return _instanceOf$1(Proto);
      }
      return _instanceOf$1(Proto)(value);
    },
    isObject: function (o) {
      return typeof o === 'object' && o !== null;
    },
  	isFunction: _isType$1('function'),
  	isString: _isType$1('string'),
  	isNumber: _isType$1('number'),
  	isArray: Array.isArray || _instanceOf$1(Array),
  	isDate: _instanceOf$1(Date),
  	isRegExp: _instanceOf$1(RegExp),
  	isElement: function(o) {
      return o && o.nodeType === 1;
    },
    isUndefined: function (value) {
      return value === undefined;
    }
  };

  var arrSome = Array.prototype.some,
      arrEvery = Array.prototype.every,
      arrForEach = Array.prototype.forEach,
      arrMap = Array.prototype.map,
      arrIndexOf = Array.prototype.indexOf;

  function _eachInObject( o, iteratee, thisArg ) {
    for( var key in o ) {
      iteratee.call(thisArg, [o[key], key]);
    }
  }

  function _matchAll (o, filters) {
    for( var key in filters ) {
      if( o[key] !== filters[key] ) {
        return false;
      }
    }
    return true;
  }

  function _matchAny (o, filters) {
    for( var key in filters ) {
      if( o[key] === filters[key] ) {
        return true;
      }
    }
    return false;
  }

  function _iterateeFn (iteratee) {
    if( type$1.isFunction(iteratee) ) {
      return iteratee;
    }

    if( type$1.isObject(iteratee) ) {
      return function (item) {
        return _matchAll(item, iteratee);
      };
    }

    return function (item) {
      return item === iteratee;
    };
  }

  // -----------------------------------------

  function each (o, iteratee, thisArg) {
    if( o && o.length ) {
      arrForEach.call(o, iteratee, thisArg);
    } else if( type$1.isObject(o) ) {
      _eachInObject(o, iteratee, thisArg || this);
    }
  }

  function indexOf (list, iteratee, thisArg) {
    if( !type$1.isFunction(iteratee) ) {
      return arrIndexOf.call(list, iteratee, thisArg);
    }

    for( var i = 0, n = list.length; i < n ; i++ ) {
      if( iteratee.call(thisArg, list[i], i) ) {
        return i;
      }
    }
    return -1;
  }

  function _indexBy (list, iteratee, thisArg) {
    var map = {};

  	for( var i = 0, len = list.length; i < len; i++ ) {
      map[iteratee.call(thisArg, list[i], i)] = list[i];
    }
    return map;
  }

  function indexBy (list, iteratee, thisArg) {
  	if( type$1.isString(iteratee) ) {
  		return _indexBy(list, function (item) { return item[iteratee]; }, thisArg);
  	} else if( type$1.isFunction(iteratee) ) {
  		return _indexBy(list, iteratee, thisArg);
  	}
  	return {};
  }

  function some (list, iteratee, thisArg) {
    iteratee = _iterateeFn(iteratee);

    if( list && list.length ) {
      return arrSome.call(list, iteratee, thisArg);
    } else if( type$1.isObject(list) ) {
      for( var key in list )  {
        if( iteratee.call(thisArg, list[key], key) ) {
          return true;
        }
      }
      return false;
    }
  }
  function every (list, iteratee, thisArg) {
    iteratee = _iterateeFn(iteratee);

    if( list && list.length ) {
      return arrEvery.call(list, iteratee, thisArg);
    } else if( type$1.isObject(list) ) {
      for( var key in list )  {
        if( !iteratee.call(thisArg, list[key], key) ) {
          return false;
        }
      }
      return true;
    }
  }
  function map (list, _iteratee, thisArg) {
    var iteratee = type$1.isString(_iteratee) ? function (item) { return item[_iteratee]; } : _iteratee;

    if( list && list.length ) {
      return arrMap.call(list, iteratee, thisArg);
    } else if( type$1.isObject(list) ) {
      var result = {};
      for( var key in list )  {
        result[key] = iteratee.call(thisArg, list[key], key);
      }
      return result;
    }
  }
  function map2List (list, iteratee, thisArg) {
    if( list && list.length ) {
      return arrMap.call(list, iteratee, thisArg);
    }
    var result = [], i = 0;
    for( var key in list )  {
      result[i++] = iteratee.call(thisArg, list[key], key);
    }
    return result;
  }
  function remove (list, iteratee, thisArg) {
      thisArg = thisArg === undefined ? this : thisArg;

      iteratee = _iterateeFn(iteratee);

      for( var i = 0, len = list.length; i < len; i++ ) {
  				if( iteratee.call(thisArg, list[i]) ) {
  						list.splice(i, 1);
  						i--;
  				}
  		}
  }

  function first (list, iteratee, thisArg) {
  		thisArg = thisArg === undefined ? this : thisArg;

  		iteratee = _iterateeFn(iteratee);

      var i = arrIndexOf.call(list, iteratee, thisArg);

  		for( var i = 0, len = list.length ; i < len ; i++ ) {
          if( iteratee.call(thisArg, list[i]) ) {
              return list[i];
          }
      }
  }

  function last (list, iteratee, thisArg) {
  		thisArg = thisArg === undefined ? this : thisArg;

  		iteratee = _iterateeFn(iteratee);

  		for( var i = list.length - 1 ; i >= 0 ; i-- ) {
          if( iteratee.call(thisArg, list[i]) ) {
              return list[i];
          }
      }
  }

  function filter (list, iteratee, thisArg) {
      var newList = [];

  		thisArg = thisArg === undefined ? this : thisArg;
  		iteratee = _iterateeFn(iteratee);

  		for( var i = 0, len = list.length ; i < len ; i++ ) {
          if( iteratee.call(thisArg, list[i]) ) {
              newList.push(list[i]);
          }
      }

      return newList;
  }

  var lists = {
    _matchAll: _matchAll,
    _matchAny: _matchAny,
    find: first,
    first: first,
    last: last,
    filter: filter,
    each: each,
    some: some,
    every: every,
    map: map,
    pluck: map,
    map2List: map2List,
    indexOf: indexOf,
    indexBy: indexBy,
    remove: remove,
    if: function (result, fn) {
      if( result !== undefined && fn instanceof Function ) {
        return fn(result);
      }
    }
  };

  var RE_dotsBack$1 = /[^\/]+\/\.\.\//g,
  	clearStr$1 = function () { return ''; };

  function _joinPath$1 () {
      var path = (arguments[0] || '').replace(/\/$/, '');

      for( var i = 1, last = arguments.length - 1 ; i < last ; i++ ) {
          path += '/' + arguments[i].replace(/^\/|\/$/g, '');
      }
      if( last ) {
          path += arguments[last] ? ( '/' + arguments[last].replace(/^\//, '') ) : '';
      }

      while( RE_dotsBack$1.test(path) ) {
      	path = path.replace(RE_dotsBack$1, clearStr$1);
      }

      return path;
  }

  var path$1 = {
    joinPath: _joinPath$1
  };

  function getErrorObject(){
    try { throw Error('Stack'); } catch(err) { return err; }
  }

  // function shortDate (d) {
  //   return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ''
  // }

  var history = [],
      start_time = new Date().getTime(),
      log_colors = {
        info: '#277bbd',
        debug: 'purple',
      };

  function dumpSingleLog (l) {
    var log_type = l.type || 'info';
    // if( l.type === 'error' ) line1_color = 'FireBrick';
    // console.log('%c' + new Date + ' (' + (l.time.getTime() - start_time) + 'ms)' , 'color: #333a3e; font-weight: 500; font-style: italic;');
    console.groupCollapsed('%c' + l.time.toISOString() + ' (' + (l.time.getTime() - start_time) + 'ms)' , 'color: #333a3e; font-weight: 500; font-style: italic;');
    console.log(l.stack.join('\n'));
    console.groupEnd();

    if( log_type === 'error' && console.error ) {
      console.error.apply(console, l.args);
    } else if( log_type === 'warn' && console.error ) {
      console.warn.apply(console, l.args);
    } else {
      console.log.apply(console, [
        '%c' + l.args[0], 'color: ' + log_colors[log_type] + '; font-weight: bold;'
      ].concat( l.args.slice(1) ) );
    }
  }

  function log () {
    var err = getErrorObject(),
        caller_line = err.stack.split('\n')[4] || '',
        index = caller_line.indexOf('at ');

    var l = {
      time: new Date(),
      args: [].slice.call(arguments),
      track: {
        caller_line: caller_line,
        index: index,
        clean: caller_line.slice(index + 2, caller_line.length),
      },
      stack: (err && err.stack.split(/\n/) || []).slice(3).map(function (line) {
        return line.trim();
      }, []),
    };

    if( this.type ) l.type = this.type;

    history.push(l);
    // dumpSingleLog(l);
  }

  log.warn = log.bind({ type: 'warn' });
  log.debug = log.bind({ type: 'debug' });
  log.error = log.bind({ type: 'error' });

  log.dump = function () {
    history.forEach(dumpSingleLog);
  };

  log.history = history;

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
  }

  function brightness (color) {
    var rgb = hexToRgb(color);
    var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) /1000);
    return o < 100 ? 'dark' : ( o > 230 ? 'light' : 'medium' );
  }

  // https://css-tricks.com/snippets/javascript/lighten-darken-color/
  function lightenHEX (col, amt) {
    var usePound = false;

    if (col[0] === '#') {
      col = col.slice(1);
      usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    // return (usePound?'#':'') + (g | (b << 8) | (r << 16)).toString(16);
    return (usePound?'#':'') + String('000000' + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);
  }

  var colors = {
    hexToRgb: hexToRgb,
    brightness: brightness,
    lightenHEX: lightenHEX,
  };

  var arrayShift$2 = [].shift;

  var _extend$1 = function extend () {
    var dest = arrayShift$2.call(arguments),
        src = arrayShift$2.call(arguments),
        key;

    while( src ) {
      for( key in src) {
        dest[key] = src[key];
      }
      src = arrayShift$2.call(arguments);
    }

    return dest;
  };

  var arrayShift$3 = [].shift;

  function _merge$1 () {
      var dest = arrayShift$3.call(arguments),
          src = arrayShift$3.call(arguments),
          key;

      while( src ) {

        if( typeof dest !== typeof src ) {
            dest = type$1.isArray(src) ? [] : ( type$1.isObject(src) ? {} : src );
        }

        if( type$1.isObject(src) ) {

          for( key in src ) {
            if( src[key] === undefined ) {
              dest[key] = undefined;
            } else if( type$1.isArray(dest[key]) ) {
              [].push.apply(dest[key], src[key]);
            } else if( type$1.isObject(dest[key]) ) {
              dest[key] = _merge$1(dest[key], src[key]);
            } else {
              dest[key] = src[key];
            }
          }
        }
        src = arrayShift$3.call(arguments);
      }

      return dest;
  }

  function mapObject$1 (o, iteratee) {
    var result = {};
    for( var key in o ) {
      result[key] = iteratee(o[key], key);
    }
    return result;
  }

  function _copy$1 (src) {
    if( type$1.isArray(src) ) {
      return src.map(function (item) {
        return _copy$1(item);
      });
    }
    
    if( type$1.isObject(src) ) {
      return mapObject$1(src, function (item) {
        return _copy$1(item);
      });
    }

    return src;
  }

  var extend$1 = {
    extend: _extend$1,
    merge: _merge$1,
    copy: _copy$1
  };

  function _ready (_callback, delay) {
    var callback = delay ? function () { setTimeout(_callback, delay); } : _callback;

    if (/loaded|complete/.test(document.readyState)) {
      callback();
    } else {
      window.addEventListener('load', callback);
    }
  }

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

  var _arraySlice = Array.prototype.slice;
  var _arrayPush = Array.prototype.push;

  function hasSelector (selector, rootElement) {
    var split_has = selector.split(':has(');

    return split_has.reduce(function (matches, partial) {

      var close_pos = findBubbleClose(partial),
          has_filter = partial.substr(0, close_pos),
          partial_query = partial.substr(close_pos + 1).trim();

      if( close_pos === -1 ) {
        throw new Error('malformed selector');
      }

      matches = matches.filter(function (element) {
        return element.querySelector(has_filter);
      });

      if( partial_query ) {
        var submatches = [];

        matches.forEach(function (element) {
          _arrayPush.apply(submatches, element.querySelectorAll(partial_query) );
        });

        return submatches;
      }

      return matches;

    }, _arraySlice.call( (rootElement || document).querySelectorAll( split_has.shift() ) ) );
  }

  function querySelector (selector, rootElement) {
    // 'tr:has(> .row) div:has(span) img'.split(':has(');
    if( !selector ) {
      return [];
    }

    if( !/:has\(/.test(selector) ) {
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

  function clearElement (el) {
    var child = el.firstChild;

    while( child ) {
      el.removeChild(child);
      child = el.firstChild;
    }
  }

  // var _classActions = {
  //   add: document.documentElement.classList ? function (element, className) {
  //     element.classList.add(className);
  //   } : function (element, className) {
  //     var RE_CLEANCLASS = new RegExp('\\b' + (className || '') + '\\b','');
  //     _classActions.remove(element, className);
  //     element.className += ' ' + className;
  //   },
  //   remove: document.documentElement.classList ? function (element, className) {
  //     element.classList.remove(className);
  //   } : function (element, className) {
  //     var RE_CLEANCLASS = new RegExp('\\b' + (className || '') + '\\b','');
  //     element.className = element.className.replace(RE_CLEANCLASS,'');
  //   },
  //   action: function (action, tools) {
  //     return function (element, className) {
  //       if( className.indexOf(' ') >= 0 ) {
  //         className.split(' ').forEach(function (cn) {
  //           _classActions[action](element, cn);
  //         });
  //       } else {
  //         _classActions[action](element, className);
  //       }
  //       return tools;
  //     };
  //   }
  // };

  function writeIframe (iframe, content) {
    var iframeDoc = iframe.contentWindow.document;
    try { iframeDoc.charset = 'UTF-8'; } catch(err) {}
    iframeDoc.open();
    iframeDoc.write(content);
    iframeDoc.close();
  }

  var remove_style = / Trident\//.test(navigator.userAgent) ? '' : null;

  function getIFrame (iframeStyles) {
    var iframe = document.createElement('iframe');
    extend$1.extend(iframe.style, iframeStyles || {});

    iframe.frameBorder = '0';
    // iframe.style.display = 'none';
    iframe.onload = function () {
      iframe.style.display = remove_style;
    };
    return iframe;
  }

  function matchMedia (query) {
    return (window.matchMedia = window.matchMedia || window.webkitMatchMedia || window.mozMatchMedia || window.msMatchMedia)(query);
  }

  var isMobile = matchMedia('( max-width: 600px )');

  var _$1 = {
    isMobile: function () {
      return isMobile.matches;
    },
    ready: _ready,
    getIFrame: getIFrame,
    writeIframe: writeIframe,
    cssQuery: cssQuery,
    clearElement: clearElement,
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
  };

  // var addClass = _classActions.action('add', _ ),
  //     removeClass = _classActions.action('remove', _ );

  // _.addClass = addClass;
  // _.removeClass = removeClass;

  _$1.addClass = function (element, className) {
    element.classList.add(className);
  };

  _$1.removeClass = function (element, className) {
    element.classList.remove(className);
  };

  function _formatThousands(amount, groupSeparator) {
    if( /\d{3}\d+/.test(amount) ) {
      return _formatThousands(amount.replace(/(\d{3}?)(\.|$)/, groupSeparator + '$&'), groupSeparator);
    }
    return amount;
  }

  function getAmount (amount, decimalsSeparator, groupSeparator) {
    var prefix = '';
    decimalsSeparator = decimalsSeparator || ',';
    groupSeparator = groupSeparator || '.';

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
    return prefix + ('' + amount).replace(/(\d*)(\d{2})$/, function (_matched, main, tail) {
      return _formatThousands(main, groupSeparator) + decimalsSeparator + tail;
    });
  }

  function getPrice (amount, currency) {
    var prefix = '', suffix = '', decimalsSeparator, groupSeparator;

    switch (currency) {
      case 'EUR':
        suffix = ' €';
        decimalsSeparator = ',';
        groupSeparator = '.';
        break;
      case 'MXN':
        prefix = '$ ';
        decimalsSeparator = '.';
        groupSeparator = ',';
        break;
    }

    return prefix + getAmount(amount, decimalsSeparator, groupSeparator) + suffix;
  }

  function parsePrice (price) {
    var matched = price.match(/((\d+[,. ])*)(\d+)/),
        main, tail;

    if( matched ) {
      tail = matched[3];
      main = matched[1].replace(/[^\d]/g, '');

      if( !main ) {
        return Number( tail + '00' );
      }

      if( tail.length === 1 ) return Number(main + tail + '0');

      if( tail.length === 2 ) return Number(main + tail);

      // if tail length is 3 we assume there is no decimals
      if( tail.length === 3 ) return Number(main + tail + '00');

      if( tail.length > 3 ) return Number(main)*100 + Math.round( Number('0.' + tail)*100 );

      return Number(main);
    }

    if( /\d+/.test(price) ) {
      return Number( price.replace(/[^\d]+/g, '') + '00' );
    }
  }

  function _key$1 (o, key, value) {
  	key.split('.').forEach(function (k, i, keys) {
  		if( i === keys.length - 1 ) {
  			o[k] = value;
  		} else {
  			o[k] = o[k] || {};
  			o = o[k];
  		}
  	});
  }

  function toCamelCase (text) {
  	return text.replace(/[_-](\w)/g, function (_matched, letter) {
  		return letter.toUpperCase();
  	});
  }

  function toUnderscoreCase (text) {
  	return text.replace(/-(\w)/g, function (_matched, letter) {
  		return '_' + letter;
  	}).replace(/([a-z])([A-Z])/g, function (_matched, a, b) {
  		return a + '_' + b;
  	}).toLowerCase();
  }

  function deserialize (querystring, decode, throw_errors) {

  	var result = {};

  	querystring.split('&').forEach(function (keyValue) {
  		var matched = keyValue.match(/(.*?)=(.*)/);

  		if( !matched ) {
        if( !throw_errors ) return;
  			throw new Error('could not parse ' + keyValue);
  		}

  		_key$1(result, toUnderscoreCase(matched[1]), decode ? decodeURI(matched[2]) : matched[2] );

  	});

  	return result;
  }

  var deserialize$1 = {
    deserialize: deserialize,
    toUnderscoreCase: toUnderscoreCase,
    toCamelCase: toCamelCase,
  };

  function template$1 (name, data){
    return template$1.cache[name](data || {});
  }

  template$1.cache = {};

  template$1.compile = function (tmpl) {
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

  template$1.put = function (name, tmpl) {
    template$1.cache[name] = template$1.compile(tmpl);
  };

  template$1.lookup = function () {
    [].forEach.call(document.querySelectorAll('script[type="application/x-template"][data-template]'), function (tmpl) {
      template$1.put(tmpl.getAttribute('data-template'), tmpl.text);
    });
  };

  var messageTarget = {},
      showLogs = false,
      _remove = function (list, iteratee, this_arg) {
        for( var i = list.length - 1 ; i >= 0 ; i-- ) {
          if( iteratee.call(this_arg || list[i], list[i], i) ) list.splice(i, 1);
        }
      };

  window.addEventListener('message', function (e) {
    var message = e.data ||{},
        listeners = messageTarget[message.aplazame];

    if( !listeners ) return;

    if( showLogs && !e.used ) {
      log('message', e, listeners);
    }

    if( !e.used ) {
      e.used = true;
      for( var i = 0, n = listeners.length ; i < n ; i++ ) {
        listeners[i](e, message);
      }
    }
  }, true);

  function onMessage (target, handler, logs) {
    showLogs = logs;
    if( typeof target === 'string' && handler instanceof Function ) {
      messageTarget[target] = messageTarget[target] || [];
      messageTarget[target].push(handler);
    }
  }

  onMessage.off = function (target, handler) {
    if( typeof target === 'string' && handler instanceof Function ) {
      messageTarget[target] = messageTarget[target] || [];
      _remove(messageTarget[target] || [], function (_handler) {
        return _handler === handler;
      });
    }
  };

  bundle$1.extend(bundle$1,
    lists,
    path$1,
    colors,
    _$1,
    deserialize$1,
    {
      getAmount: getAmount,
      getPrice: getPrice,
      parsePrice: parsePrice
    },
    {
      remove_style: / Trident\//.test(navigator.userAgent) ? '' : null,
      template: template$1,
      onMessage: onMessage,
    }
  );

  bundle$1.log = log;
  bundle$1.noop = function (value) { return value; };

  var _now = Date.now || function () { return new Date().getTime(); };

  bundle$1.debounce = function (fn, debounce_duration) {
    var debouncing = null,
        last_hit = _now(),
        runHit = function (_this, _args) {
          fn.apply(_this, _args);
          last_hit = _now();
          debouncing = setTimeout(function () {
            debouncing = null;
          }, debounce_duration);
        };
    debounce_duration = debounce_duration || 80;

    return function () {
      var _this = this, _args = arguments;

      if( !debouncing || _now() - last_hit > debounce_duration ) {
        runHit(_this, _args);
      } else {
        clearTimeout(debouncing);
        debouncing = setTimeout(function () {
          runHit(_this, _args);
        }, debounce_duration);
      }
    };
  };

  function widgetV3 (widget) {

    var widget_el = widget.el,
        widget_wrapper_el,
        click_el = widget_el,
        remove_style = / Trident\//.test(navigator.userAgent) ? '' : null,
        textSelector = function (selector, text) {
          if( widget_el.querySelector(selector) ) widget_el.querySelector(selector).textContent = text;
        },
        selectNumInstalmentsChoice = function (choice) {
          widget.simulator.choice = choice;
          textSelector('.aplazame-widget-smart-title', _titleByTaxes(choice) );
          textSelector('.aplazame-widget-price', widget.simulator.getAmount(choice.amount) );
          textSelector('.aplazame-widget-instalments-num', choice.num_instalments );
          textSelector('.aplazame-widget-choice-button-value', choice.num_instalments );
        },
        selectNumInstalments = function (num_instalments) {
          widget.simulator.choices.forEach(function (choice) {
            if( choice.num_instalments === num_instalments ) selectNumInstalmentsChoice(choice);
          });
        },
        styles_link = document.createElement('link'),
        _onReady = function () {
          window.removeEventListener('load', _onReady);
          window.removeEventListener('DOMContentLoaded', _onReady);

          styles_link.rel = 'stylesheet';
          styles_link.href = widget.simulator.static_url + 'widgets/simulator/widget-v3.css';
          styles_link.onload = function () {
            widget_el.style.display = remove_style;
          };

          document.head.appendChild(styles_link);
        },
        title_zero_interest = widget.simulator.preferences.title_zero_interest || '¡Consíguelo sin intereses!',
        title_default = widget.simulator.preferences.title_default || 'Págalo a plazos';


    if( !widget.simulator.preferences.custom_styles || widget.type !== 'text' ) {
      widget_el.style.display = 'none';
      if( document.readyState === 'complete' ) _onReady();
      else {
        window.addEventListener('load', _onReady);
        window.addEventListener('DOMContentLoaded', _onReady);
      }
    }

    function _titleByTaxes(choice){
      return choice.annual_equivalent === 0 ? title_zero_interest : title_default
    }

    function _onClick () {
      widget.showInfo();
    }

    function _selectChange () {
      selectNumInstalments( Number(widget_el.querySelector('select').value) );
    }

    function _increaseNumInstalments () {
      var index = widget.simulator.choices.indexOf(widget.simulator.choice),
          choice = widget.simulator.choices[index + 1];

      bundle$1.toggleClass(widget_wrapper_el, '_first-choice', 0 >= index + 1 );
      bundle$1.toggleClass(widget_wrapper_el, '_last-choice', widget.simulator.choices.length-1 <= index + 1 );
      if( choice ) selectNumInstalmentsChoice(choice);
    }

    function _decreaseNumInstalments () {
      var index = widget.simulator.choices.indexOf(widget.simulator.choice),
          choice = widget.simulator.choices[index - 1];

      bundle$1.toggleClass(widget_wrapper_el, '_first-choice', 0 >= index - 1 );
      bundle$1.toggleClass(widget_wrapper_el, '_last-choice', widget.simulator.choices.length-1 <= index - 1 );
      if( choice ) selectNumInstalmentsChoice(choice);
    }

    function _unbind () {
      click_el.removeEventListener('click', _onClick);
      widget_el.removeEventListener('click', _onClick);
      if( widget_el.querySelector('select') ) {
        widget_el.querySelector('select').removeEventListener('change', _selectChange);
      }
      if( widget_el.querySelector('.aplazame-widget-choice-button-increase') ) {
        widget_el.querySelector('.aplazame-widget-choice-button-increase').removeEventListener('click', _increaseNumInstalments);
      }
      if( widget_el.querySelector('.aplazame-widget-choice-button-decrease') ) {
        widget_el.querySelector('.aplazame-widget-choice-button-decrease').removeEventListener('click', _decreaseNumInstalments);
      }
    }

    var handler = {
      render: function () {
        _unbind();
        var type = widget.simulator.type;
        widget_el.innerHTML = widgetV3Ejs(widget.simulator);
        widget_wrapper_el = widget.el.querySelector('.aplazame-widget');

        if( type === 'select' ) {
          return widget_el.querySelector('select').addEventListener('change', _selectChange);
        }

        if( type === 'big-button' ) {
          var index = widget.simulator.choices.indexOf(widget.simulator.choice);
          bundle$1.toggleClass(widget_wrapper_el, '_last-choice',  widget.simulator.choices.length-1 <= index );
          bundle$1.toggleClass(widget_wrapper_el, '_first-choice',  0 >= index );

          widget_el.querySelector('.aplazame-widget-choice-button-decrease').addEventListener('click', _decreaseNumInstalments);
          widget_el.querySelector('.aplazame-widget-choice-button-increase').addEventListener('click', _increaseNumInstalments);
          return;
        }

        click_el = type === 'button' ? widget_el.querySelector('.aplazame-widget-instalments') : widget_el;
        click_el.addEventListener('click', _onClick);
      },
      unbind: _unbind,
      detach: function () {
        document.head.removeChild(styles_link);
        _unbind();
      }
    };

    return handler;

  }

  var message_listeners = {}, no_listeners = [], simulator_id = -1,
      widget = {
        id: simulator_id,
        el: document.body.querySelector('#main') || document.body,
        showInfo: function () {
          postMessage('widget:showInfo');
        }
      },
      widget_version,
      widget_handler;

  if( location.href.match(/[?&]simulator=(\w+?)(&|$)/) ) {
    simulator_id = Number(location.href.match(/[?&]simulator=(\w+?)(&|$)/)[1]);
  }

  function onMessage$1(event_name, handler) {
    message_listeners[event_name] = message_listeners[event_name] ||[];
    message_listeners[event_name].push(handler);
  }

  window.addEventListener('message', function (e) {
    var message = e.data;

    (message_listeners[message.event] || no_listeners).forEach(function (listener) {
      listener(message.data);
    });
  });

  function postMessage (event_name, data) {
    parent.window.postMessage({
      aplazame: 'simulator',
      event: event_name,
      data: data,
      simulator_id: simulator_id,
    }, '*');
  }

  onMessage$1('simulator:data', function (simulator_data) {

    var simulator = Object.create(simulator_data);

    simulator.getAmount = getAmount;
    simulator.getPrice = getPrice;
    simulator.lighten = colors.lightenHEX;
    simulator.brightness = colors.brightness;

    widget.simulator = simulator;

    if( !widget_handler || widget_version !== simulator_data.version ) {
      if( widget_handler ) widget_handler.detach();
      widget_version = simulator_data.version;
      widget_handler = widget_version === 3 ? widgetV3(widget) : widgetV2(widget);
    }

    widget_handler.render();
  });

  var iframe_height = document.body.clientHeight;
  setInterval(function () {
    if( document.body.clientHeight !== iframe_height ) {
      iframe_height = document.body.clientHeight;
      postMessage('iframe:resize', { height: iframe_height });
    }
  }, 40);

  postMessage('require:data');

}());
