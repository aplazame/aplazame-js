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

  function widgetV3 (widget) {

    var widget_el = widget.el,
        click_el = widget_el,
        remove_style = / Trident\//.test(navigator.userAgent) ? '' : null,
        textSelector = function (selector, text) {
          if( widget_el.querySelector(selector) ) widget_el.querySelector(selector).textContent = text;
        },
        selectNumInstalmentsChoice = function (choice) {
          widget.simulator.choice = choice;
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
        };


    if( !widget.simulator.preferences.custom_styles || widget.type !== 'text' ) {
      widget_el.style.display = 'none';
      if( document.readyState === 'complete' ) _onReady();
      else {
        window.addEventListener('load', _onReady);
        window.addEventListener('DOMContentLoaded', _onReady);
      }
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
      if( choice ) selectNumInstalmentsChoice(choice);
    }

    function _decreaseNumInstalments () {
      var index = widget.simulator.choices.indexOf(widget.simulator.choice),
          choice = widget.simulator.choices[index - 1];
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

        if( type === 'select' ) {
          return widget_el.querySelector('select').addEventListener('change', _selectChange);
        }

        if( type === 'big-button' ) {
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

  function thousands(amount, groupSeparator) {
    if( /\d{3}\d+/.test(amount) ) {
      return thousands(amount.replace(/(\d{3}?)(\.|$)/, groupSeparator + '$&'), groupSeparator);
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
      return thousands(main, groupSeparator) + decimalsSeparator + tail;
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

  var amount_tools = {
  	getAmount: getAmount,
  	getPrice: getPrice,
  	parsePrice: parsePrice
  };

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

  var color_tools = {
    hexToRgb: hexToRgb,
    brightness: brightness,
    lightenHEX: lightenHEX,
  };

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

  function onMessage(event_name, handler) {
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

  onMessage('simulator:data', function (simulator_data) {

    var simulator = Object.create(simulator_data);

    simulator.getAmount = amount_tools.getAmount;
    simulator.getPrice = amount_tools.getPrice;
    simulator.lighten = color_tools.lightenHEX;
    simulator.brightness = color_tools.brightness;

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
