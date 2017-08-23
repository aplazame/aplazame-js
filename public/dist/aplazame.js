(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '0.0.429';
},{}],2:[function(require,module,exports){
module.exports = '@-webkit-keyframes aplazame-blur{0%{-webkit-filter:blur(0);filter:blur(0);}to{-webkit-filter:blur(1px);filter:blur(1px)}}@keyframes aplazame-blur{0%{-webkit-filter:blur(0);filter:blur(0)}to{-webkit-filter:blur(1px);filter:blur(1px)}}body.aplazame-blur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-filter:blur(1px);filter:blur(1px)}@media (min-width:601px){body.aplazame-blur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:aplazame-blur;animation-name:aplazame-blur}}body.aplazame-unblur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-filter:blur(0);filter:blur(0)}@media (min-width:601px){body.aplazame-unblur>:not(.aplazame-modal):not(.aplazame-overlay){-webkit-animation-duration:.4s;animation-duration:.4s;-webkit-animation-name:aplazame-blur;animation-name:aplazame-blur;-webkit-animation-direction:reverse;animation-direction:reverse}}';
},{}],3:[function(require,module,exports){
module.exports = '@-webkit-keyframes aplazame-logo-smile{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}90%{-webkit-transform:rotate(2turn);transform:rotate(2turn)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}@keyframes aplazame-logo-smile{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(2turn);transform:rotate(2turn)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}@-webkit-keyframes aplazame-logo-short{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}30%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes aplazame-logo-short{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}30%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes aplazame-logo-large{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}60%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes aplazame-logo-large{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}60%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}90%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.logo-aplazame{position:relative;display:inline-block;width:150px;height:150px}.logo-aplazame .line-large,.logo-aplazame .line-short,.logo-aplazame .smile{stroke:#ddd}.logo-aplazame .smile-outline{stroke:#5d666b}@media (min-width:480px){.logo-aplazame{width:200px;height:200px}}.logo-aplazame svg{position:absolute;top:0;left:0;width:100%;height:100%}.logo-aplazame.animate .line-large,.logo-aplazame.animate .line-short,.logo-aplazame.animate .smile{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.logo-aplazame.animate .smile{-webkit-animation-name:aplazame-logo-smile;animation-name:aplazame-logo-smile}.logo-aplazame.animate .line-large{-webkit-animation-name:aplazame-logo-large;animation-name:aplazame-logo-large}.logo-aplazame.animate .line-short{-webkit-animation-name:aplazame-logo-short;animation-name:aplazame-logo-short}';
},{}],4:[function(require,module,exports){
module.exports = '.aplazame-modal{height:100%;height:100vh;position:relative;z-index:2147483647;}body{overflow:hidden}@media (max-width:600px){html{background-color:#333a3e}body,html{height:100vh;margin:0;padding:0}body>:not(.aplazame-modal){display:none}}@media (min-width:601px){.aplazame-modal{position:fixed}}';
},{}],5:[function(require,module,exports){
module.exports = '@-webkit-keyframes aplazame-overlay{0%{opacity:0;}to{opacity:1}}@keyframes aplazame-overlay{0%{opacity:0}to{opacity:1}}.aplazame-overlay{font-family:Montserrat,sans-serif;position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;width:100vw;height:100vh;background:rgba(53,64,71,.8);text-align:center;z-index:2147483646;-webkit-transform:translateZ(0);transform:translateZ(0)}.aplazame-overlay:before{content:"";display:block;height:50vh}.aplazame-logo-wrapper{display:inline-block;margin-top:-50%}.aplazame-overlay-loading-text{color:#95a6b1;margin-top:14px;font-size:14px}.aplazame-overlay-loading-text .text-error{color:#f08080}.aplazame-overlay-loading-text a{color:#f5f5f5;display:inline-block;text-decoration:none}.aplazame-overlay-loading-text a:hover{border-bottom:1px dotted #f5f5f5}.aplazame-overlay{-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.aplazame-overlay.aplazame-overlay-hide,.aplazame-overlay.aplazame-overlay-show{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation-duration:.6s;animation-duration:.6s;-webkit-animation-name:aplazame-overlay;animation-name:aplazame-overlay}.aplazame-overlay.aplazame-overlay-hide{-webkit-animation-direction:reverse;animation-direction:reverse}';
},{}],6:[function(require,module,exports){
module.exports = function anonymous(obj
/**/) {
var p=[],print=function(){p.push.apply(p,arguments);};with(obj){ try{p.push('<div class="card-content">    <header class="aplazame"></header>    <img src="', static_url ,'/widgets/assets/images/ilustrations/camara.svg" alt="Cámara" class="camera">    <section class="info">     Elige la cuota que más te convenga   </section>    <div class="choices-wrapper">     '); for( var i = 0, n = choices.length; i < n ; i++ ) { p.push('     <button type="button" class="choice'); if( choices[i].annual_equivalent < max_tae_choice.annual_equivalent ) { p.push(' _on_campaign'); } p.push('">       '); if( choices[i].annual_equivalent < max_tae_choice.annual_equivalent ) { p.push('       <div class="tae-ribbon">         <img src="', static_url ,'/widgets/assets/images/ilustrations/ribbon.svg" alt="TAE Reducido">         <div>', getAmount(choices[i].annual_equivalent).replace(/[,.]00$/,' ').replace(/0$/,'') + '% TAE' ,'</div>       </div>       '); } p.push('       <div class="wrapper">         <div class="num-instalments">           <span>', choices[i].num_instalments ,'</span>&nbsp;<span>', months(choices[i].num_instalments) ,'</span>         </div>         <div class="amount"><!--           '); if( currency === 'EUR' )  { p.push('           --><span class="amount-amount">', getAmount(choices[i].amount, ',', '.') ,'</span><!--           --><span class="amount-currency">&nbsp;€</span><!--           '); } else { p.push('           --><span class="amount-currency">$</span><!--           --><span class="amount-amount">', getAmount(choices[i].amount, '.', ',') ,'</span><!--           '); } p.push('           --><span class="amount-per-month">/mes</span>         </div>         <div class="amount"><!--           '); if( currency === 'EUR' )  { p.push('             --><span class="amount-amount">', getAmount(choices[i].downpayment_amount, ',', '.') ,'</span><!--             --><span class="amount-currency">&nbsp;€</span><!--           '); } else { p.push('           --><span class="amount-currency">$</span><!--             --><span class="amount-amount">', getAmount(choices[i].downpayment_amount, ',', '.') ,'</span><!--           '); } p.push('         --><span>&nbsp;entrada</span>         </div>       </div>     </button>     '); } p.push('     <img src="', static_url ,'/widgets/assets/images/ilustrations/tocadiscos.svg" alt="Tocadiscos" class="music">   </div>    <section class="tae">', country === 'MX' ? 'CAT' : 'TAE' ,' máximo: ', getAmount(max_tae_choice.annual_equivalent) ,'%. Cantidades orientativas. Las finales dependerán del perfil de riesgo de cada cliente.</section>    <section class="how-it-works">     <header>¿Cómo funciona?</header>     <div class="info-wrapper">       <div class="info">         <h3>Elige Aplazame</h3>         <!-- <p>en la tienda, cuando vayas a pagar el pedido. Puedes financiar compras de ', getAmount(9900) ,' € hasta ', parseInt(data.max_credit_amount/100) ,' €.</p> -->         <p>en la tienda, cuando vayas a pagar el pedido. Puedes financiar compras hasta&nbsp;<span style="white-space: nowrap;">', currency === 'EUR' ? ( parseInt(data.max_credit_amount/100) + ' €' ) : ( '$' + parseInt(data.max_credit_amount/100) ) ,'</span>.</p>       </div>       <div class="info">         <h3>Decide cómo quieres pagar</h3>         <p>Hasta en ', max_choice.num_instalments ,' ', max_choice.num_instalments > 1 ? 'cuotas' : 'cuota' ,', pagando con tarjeta.</p>       </div>       <div class="info">         <h3>Disfruta de tu compra</h3>         <p>Desde Aplazame estaremos disponibles por si necesitas cualquier cosa. ¡A disfrutar!</p>       </div>     </div>   </section>  </div>  <div class="cta">   <div class="col-sm-6 button-wrapper">     <button class="btn lg btn-block white" type="button" data-modal="dismiss">Volver a Tienda</button>   </div>   <div class="col-sm-6 button-wrapper">     <a class="btn lg btn-block" href="http://aplazame.com/how/customers/" target="_blank">¿Quieres saber más?</a>   </div> </div>'); }catch(err){console.log('error', err);} }return p.join('');
};
},{}],7:[function(require,module,exports){
module.exports = function anonymous(obj
/**/) {
var p=[],print=function(){p.push.apply(p,arguments);};with(obj){ try{p.push('<div class="aplazame-widget-instalments">    <span class="aplazame-widget-from">desde&nbsp;</span><!--    --><strong class="aplazame-widget-amount"><!--     '); if( currency === 'EUR' ) { p.push('     --><span class="aplazame-widget-price">', getAmount(choice.amount, ',', '.') ,'</span><!--     --><span class="aplazame-widget-currency">€</span><!--     '); } else { p.push('     --><span class="aplazame-widget-currency">$</span><!--     --><span class="aplazame-widget-price">', getAmount(choice.amount, '.', ',') ,'</span><!--     '); } p.push('   --></strong><!--    --><sub class="aplazame-widget-per-month">/mes</sub><!--    --><span class="aplazame-widget-instalments-wrapper"><!--   --><span>&nbsp;en&nbsp;</span><!--     --><em class="aplazame-widget-instalments-num">', choice.num_instalments ,'</em><!--     --><span>&nbsp;', choice.num_instalments === 1 ? 'cuota' : 'cuotas' ,'</span><!--   --></span>  </div>  <style rel="stylesheet">', custom_styles ,'</style>'); }catch(err){console.log('error', err);} }return p.join('');
};
},{}],8:[function(require,module,exports){
module.exports = function anonymous(obj
/**/) {
var p=[],print=function(){p.push.apply(p,arguments);};with(obj){ try{p.push('<div class="aplazame-widget aplazame-styles aplazame-widget--type-', type ,' aplazame-widget--align-', preferences.align || 'center' ,''); if( preferences.custom_styles ){ p.push(' aplazame-widget--custom-styles'); } p.push('">    <div class="aplazame-widget-container">    '); if( preferences.smart_title ) { p.push('     <div class="aplazame-widget-smart-title">'); if( choice.annual_equivalent === 0 ) { p.push('¡Consíguelo sin intereses!'); } else { p.push('Págalo a plazos'); } p.push('</div>   '); } p.push('    <div class="aplazame-widget-instalments" '); if( type !== 'select' && type !== 'big-button' ){ p.push(' data-action="showInfo"'); } p.push('>      '); if( type === 'select' ){ p.push('     <svg class="aplazame-widget-select-icon" version="1.1" viewBox="0 0 8 12" height="12" width="8">       <g fill="none" fill-opacity="1" fill-rule="evenodd" stroke="currentColor" stroke-width="1" stroke-opacity="1" transform="translate(0.7521047,0.5)">         <polyline points="0 2.5 3.21428571 0 6.5 2.5" />         <polyline points="0 11 3.21428571 8.5 6.5 11" transform="matrix(1,0,0,-1,0,19.5)" />       </g>     </svg>      <select>       '); for ( var i = 0, n = choices.length ; i < n ; i++ ) { p.push('       <option value="', choices[i].num_instalments ,'" ', choices[i] == choice ? 'selected' : '' ,'><span class="apz-price_widget-amount">', getPrice(choices[i].amount, currency) ,'/mes</span> en ', choices[i].num_instalments ,' ', choices[i].num_instalments > 1 ? 'cuotas' : 'cuota' ,'</option>       '); } p.push('     </select>     '); } p.push('      <span class="aplazame-widget-from">desde&nbsp;</span><!--     --><strong class="aplazame-widget-amount"><!--       '); if( currency === 'EUR' )  { p.push('       --><span class="aplazame-widget-price">', getAmount(choice.amount, ',', '.') ,'</span><!--       --><span class="aplazame-widget-currency">€</span><!--       '); } else { p.push('       --><span class="aplazame-widget-currency">$</span><!--       --><span class="aplazame-widget-price">', getAmount(choice.amount, '.', ',') ,'</span><!--       '); } p.push('     --></strong><!--     --><sub class="aplazame-widget-per-month">/mes</sub><!--     --><span class="aplazame-widget-instalments-wrapper"><!--       --><span class="aplazame-widget-instalments-pre-in">&nbsp;en&nbsp;</span><!--       --><em class="aplazame-widget-instalments-num">', choice.num_instalments ,'</em><!--       --><span class="aplazame-widget-instalments-post-instalments">&nbsp;cuotas</span><!--     --></span>    </div>    '); if( type === 'big-button' || preferences.show_instalments_buttons ){ p.push('   <div class="aplazame-widget-choice-buttons-wrapper">     <span class="aplazame-widget-choice-text-in">en&nbsp;</span>     <span class="aplazame-widget-choice-button">       <button type="button" class="aplazame-widget-choice-button-decrease" data-action="decreaseNumInstalments">         <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">           <path d="m 3,6 h 6" stroke="currentColor" stroke-width="1"/>         </svg>       </button>       <div class="aplazame-widget-choice-button-value">', choice.num_instalments ,'</div>       <button type="button" class="aplazame-widget-choice-button-increase" data-action="increaseNumInstalments">         <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">           <path d="m 3,6 h 6" stroke="currentColor" stroke-width="1"/>           <path d="m 6,3 v 6" stroke="currentColor" stroke-width="1"/>         </svg>       </button>     </span>     <span class="aplazame-widget-choice-text-instalments">&nbsp;cuotas</span>   </div>   '); } p.push('    '); if( preferences.branding ){ p.push('   <div class="aplazame-widget-branding">     <span class="aplazame-widget-with">con&nbsp;</span>     <svg width="77" height="20" viewBox="0 0 77 20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fill-rule="evenodd"><path d="M28 11.2v-.6h-1.2c-1 0-1.4.2-1.4.8 0 .5.4.8 1 .8 1 0 1.5-.3 1.5-1m1.8 1.4c0 .4-.3.7-.7.7-.2 0-.4 0-.6-.3l-.2-.3c-.4.4-1 .7-2 .7-1.4 0-2.2-.7-2.2-2s1-2 2.6-2H28v-.2c0-.7-.5-1.2-1.5-1.2-.4 0-1 .2-1 .3H25c-.4 0-.6-.2-.6-.5 0-.2 0-.5.3-.6.4-.2 1-.4 2-.4 1.8 0 2.6 1 2.6 2.4v2c0 .4 0 .5.2.7l.2.2v.4M35 11.2v-1-1.3c-.3-.7-.7-1-1.3-1-.5 0-1 .3-1.2 1V11c.2.6.7 1 1.2 1 .6 0 1-.4 1.2-1M31 15V7.5c0-.5.2-.8.7-.8.4 0 .6.3.7.7.3-.4.8-.7 1.7-.7 1.2 0 2 .6 2.3 1.6.2.5.2 1 .2 1.7 0 .8 0 1.3-.2 1.8-.3 1-1 1.6-2.2 1.6-.8 0-1.3-.3-1.6-.8V15c0 .4-.3.7-.7.7-.5 0-.8-.3-.8-.8M39.5 13.3c-1.2 0-1.7-.6-1.7-1.8V5c0-.5.3-.8.7-.8.5 0 .8.3.8.8v6.4c0 .4 0 .6.5.6.4 0 .6.3.6.7 0 .3-.2.6-.7.6h-.2zM45 11.2v-.6h-1c-1 0-1.4.2-1.4.8 0 .5.4.8 1 .8 1 0 1.5-.3 1.5-1m2 1.4c0 .4-.4.7-.8.7-.2 0-.4 0-.6-.3l-.2-.3c-.4.4-1 .7-2 .7-1.4 0-2.2-.7-2.2-2s1-2 2.5-2H45v-.2c0-.7-.3-1.2-1.3-1.2-.5 0-1 .2-1.2.3H42c-.2 0-.5-.2-.5-.5 0-.2 0-.5.4-.6.3-.2 1-.4 2-.4 1.7 0 2.5 1 2.5 2.4V12l.3.2.2.4M48.5 13.3c-.4 0-.7-.3-.7-.7 0-.3.2-.5.5-1l3-3.4h-2.6c-.4 0-.7-.3-.7-.7 0-.3.3-.6.7-.6h3.7c.4 0 .7.2.7.5s0 .6-.4 1l-3 3.4h2.8c.4 0 .7.2.7.6 0 .4-.2.7-.6.7h-4zM58 11.2v-.6h-1.2c-1 0-1.4.2-1.4.8 0 .5.4.8 1 .8 1 0 1.5-.3 1.5-1m1.7 1.4c0 .4-.3.7-.7.7-.3 0-.5 0-.6-.3l-.2-.3c-.4.4-1 .7-2 .7-1.4 0-2.2-.7-2.2-2s1-2 2.5-2h1.3v-.2c0-.7-.3-1.2-1.3-1.2-.5 0-1 .2-1.2.3H55c-.4 0-.7-.2-.7-.5 0-.2 0-.5.4-.6.4-.2 1-.4 2-.4 1.7 0 2.6 1 2.6 2.4V12l.3.2v.4M60.8 7.6c0-.5.3-.8.8-.8.4 0 .7.3.7.7.3-.4 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5-.5 1-.8 2-.8 1.5 0 2.3 1 2.3 2.3v3.5c0 .5-.2.8-.6.8-.5 0-.8-.3-.8-.8v-3c0-1-.4-1.4-1.2-1.4-.7 0-1.2.6-1.2 1.5v3c0 .5-.3.8-.7.8-.5 0-.8-.3-.8-.8v-3c0-1-.4-1.4-1.2-1.4-.7 0-1.2.6-1.2 1.5v3c0 .5-.3.8-.7.8-.5 0-.8-.3-.8-.8v-5zM75.4 8.8c-.2-.5-.6-.8-1.2-.8s-1 .3-1.3.8l-.2.6h2.6v-.6m-3.8 2.8c-.2-.4-.3-1-.3-1.5 0-.6 0-1 .2-1.5.4-1 1.4-1.7 2.6-1.7 1.5 0 2.4.6 2.8 1.7L77 10c0 .3-.2.6-.5.6H73h-.2v.5c.3.7.8 1 1.6 1 .5 0 1 0 1.3-.4l.5-.2c.4 0 .6.3.6.7 0 .3 0 .5-.3.6-.5.5-1.2.8-2.3.8-1.3 0-2.3-.7-2.6-1.8M18 7.3c.4-.6.3-1.3-.2-1.6-.6-.4-1.3-.2-1.6.3-.8 1-1.8 2-3 2.6l-3-7.8c-.2-.4-.6-.7-1-.7-.5 0-1 .3-1 .8L5 7.5l2 1 2-4.2 2 5.2-2 .2C6 9.7 3.6 8.4 2 6 1.7 5.6 1 5.5.4 6 0 6 0 6.8.2 7.4c2 3 5.4 4.6 9 4.6 1 0 1.8 0 2.8-.4l3 7.6c.2.6.8 1 1.4.6.6-.2 1-1 .7-1.4l-3-7.6c1.7-.8 3-2 4-3.5zM2.8 13.7c-.3.6 0 1.3.6 1.5.6.3 1.2 0 1.5-.6l.8-2c-.7-.2-1.4-.5-2-1l-1 2z"/></g></svg>   </div>   '); } p.push('    </div>  </div>  '); if( !preferences.custom_styles || type !== 'text' ){ p.push(' <style rel="stylesheet">   .aplazame-widget.aplazame-styles { color: ', preferences.text_color ,'; }    .aplazame-widget.aplazame-styles.aplazame-widget--type-big-button .aplazame-widget-container,   .aplazame-widget.aplazame-styles.aplazame-widget--type-button .aplazame-widget-instalments,   .aplazame-widget.aplazame-styles.aplazame-widget--type-select .aplazame-widget-instalments {     color: ', preferences.btn_text_color ,';   }    .aplazame-widget.aplazame-styles.aplazame-widget--type-big-button .aplazame-widget-container,   .aplazame-widget.aplazame-styles.aplazame-widget--type-button .aplazame-widget-instalments::before,   .aplazame-widget.aplazame-styles.aplazame-widget--type-select .aplazame-widget-instalments::before {     background-color: ', preferences.btn_bg_color ,';   }   .aplazame-widget.aplazame-styles.aplazame-widget--type-button .aplazame-widget-instalments:hover::before,   .aplazame-widget.aplazame-styles.aplazame-widget--type-select .aplazame-widget-instalments:hover::before {     background-color: ', lighten(preferences.btn_bg_color, -5) ,';   } </style> '); } p.push(' '); if( preferences.custom_styles ){ p.push(' <style rel="stylesheet">', custom_styles ,'</style> '); } p.push(''); }catch(err){console.log('error', err);} }return p.join('');
};
},{}],9:[function(require,module,exports){

(function (root, factory) {
  if( typeof exports === 'object' && typeof module !== 'undefined' ) {
    // CommonJS
    module.exports = factory(root);
  } else if( typeof define === 'function' && define.amd ) {
    // AMD. Register as an anonymous module.
    define([], function () { return factory(root); });
  } else {
    // Browser globals
    root.Azazel = factory(root);
  }
})(this, function (root) {

  function addHandler (listeners, eventName, handler, useCapture) {
    if( !listeners[eventName] ) {
      listeners[eventName] = [];
    }

    if( useCapture ) {
      listeners[eventName].unshift(handler);
    } else {
      listeners[eventName].push(handler);
    }
  }

  function removeHandler (listeners, handler) {
    var found = listeners.indexOf(handler);
    if( found >= 0 ) listeners.splice(found, 1);
  }

  function removeOnce( listeners, handler ) {
    for( var key in listeners ) {
      removeHandler(listeners[key], handler);
    }
    delete handler.__run_once;
  }

  function extendMethods (evt, target, prefix) {
    target[prefix + 'on'] = evt.on.bind(evt);
    target[prefix + 'once'] = evt.once.bind(evt);
    target[prefix + 'off'] = evt.off.bind(evt);
    target[prefix + 'emit'] = evt.emit.bind(evt);
  }

  function Azazel (target, prefix) {
    if( this === root ) {
      new Azazel(target);
      return target;
    }
    this.listeners = {};
    if( target ) {
      extendMethods(this, target, prefix || '');
    }
  }

  Azazel.prototype.on = function (eventName, handler, useCapture) {
    var listeners = this.listeners;
    ( eventName instanceof Array ? eventName : eventName.split(/ +/) ).forEach(function (eventName) {
      addHandler(listeners, eventName, handler, useCapture);
    });
  };

  Azazel.prototype.once = function (eventName, handler, useCapture) {
    handler.__run_once = true;
    var listeners = this.listeners;
    ( eventName instanceof Array ? eventName : eventName.split(/ +/) ).forEach(function (eventName) {
      addHandler(listeners, eventName, handler, useCapture);
    });
  };

  Azazel.prototype.emit = function (eventName, params, thisArg) {
    var listeners = this.listeners;
    ( eventName instanceof Array ? eventName : eventName.split(/ +/) ).forEach(function (eventName) {
      if( !listeners[eventName] ) return;

      var _listeners = listeners[eventName];

      for( var i = 0, n = _listeners.length; i < n; i++ ) {
        _listeners[i].apply(thisArg, params);
        if( _listeners[i].__run_once ) {
          removeOnce(listeners, _listeners[i]);
          i--;
          n--;
        }
      }
    });
  };

  Azazel.prototype.off = function (eventName, handler) {
    var listeners = this.listeners;
    ( eventName instanceof Array ? eventName : eventName.split(/ +/) ).forEach(function (eventName) {
      if( !listeners[eventName] ) return;
      removeHandler(listeners[eventName], handler );
    });
  };

  return Azazel;

});

},{}],10:[function(require,module,exports){
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

module.exports = function bezier (mX1, mY1, mX2, mY2) {
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

},{}],11:[function(require,module,exports){

// factory http

var Parole = require('parole'),
    _ = require('nitro-tools/extend');

function resolveFunctions (o, args, thisArg) {
  for( var key in o ) {
    if( o[key] instanceof Function ) {
      o[key] = o[key].apply(thisArg, args || []);
    } else if( typeof o[key] === 'object' && o[key] !== null ) {
      o[key] = resolveFunctions(o[key], args, thisArg);
    }
  }
  return o;
}

function headerToTitleSlug(text) {
  // console.log('headerToTitleSlug', text);
  var key = text.replace(/([a-z])([A-Z])/g, function (match, lower, upper) {
      return lower + '-' + upper;
  });
  key = key[0].toUpperCase() + key.substr(1);

  return key;
}

function headerToCamelCase(text) {
  var key = text[0].toLowerCase() + text.substr(1);
  return key.replace(/([a-z])-([A-Z])/g, function (match, lower, upper) {
    return lower + upper;
  });
}

var RE_contentType = /([^\/]+)\/([^+]+\+)?([^;]*)/;
function parseContentType(contentType, text, xml) {
  var matches = contentType && contentType.match(RE_contentType);
  return matches && ( matches[3] === 'json' ? JSON.parse(text) : ( matches[3] === 'xml' ? xml : text ) );
}

function _getHeaders (request) {
  var headers = {};
  request.getAllResponseHeaders().replace(/\s*([^\:]+)\s*\:\s*([^\;\n]+)/g, function (match, key, value) {
      headers[headerToCamelCase(key)] = value.trim();
  });

  return headers;
}

function headersGetter (request) {
  var headersCache;
  return function () {
    if( !headersCache ) {
      headersCache = _getHeaders(request);
    }
    return headersCache;
  };
}

function serializeParams (params) {
  var result = '';

  for( var param in params ) {
    result += ( result ? '&' : '' ) + param + '=' + encodeURIComponent(params[param]);
  }
  return result;
}

function addHeadersToRequest (req, headers) {
  for( var key in headers ) {
    req.setRequestHeader( headerToTitleSlug(key), headers[key] );
  }
}

var defaultSettings = {};

http.config = function (settings) {
  _.merge(defaultSettings, settings);
  return http;
};

function http (url, config) {

  if( config === undefined && typeof url === 'object' && url !== null ) {
    config = url;
    url = config.url;
  } else {
    config = config || {};
    config.url = url;
  }

  config = _.merge(_.copy(defaultSettings),_.copy(config));
  config = resolveFunctions( config, [config], null );
  config.method = ( config.method || 'GET').toUpperCase();

  if( typeof config.url !== 'string' ) {
    throw new Error('url should be a string');
  }

  return new Parole(function (resolve, reject) {

    var request = null;

    try { // Firefox, Opera 8.0+, Safari
        request = new XMLHttpRequest();
    } catch (e) { // Internet Explorer
        try { request = new ActiveXObject('Msxml2.XMLHTTP'); }  // jshint ignore:line
        catch (er) { request = new ActiveXObject('Microsoft.XMLHTTP'); }  // jshint ignore:line
    }
    if( request === null ) { throw 'Browser does not support HTTP Request'; }

    if( config.params ) {
      url += ( /\?/.test(url) ? '&' : '?' ) + serializeParams( config.params );
    }

    request.open( config.method, url );

    if( config.withCredentials ) {
      request.withCredentials = true;
    }

    addHeadersToRequest(request, config.headers || {} );

    request.config = config;
    config.start = new Date().getTime();

    request.onreadystatechange = function(){
      if( request.readyState === 'complete' || request.readyState === 4 ) {
        var response = {
          config: config,
          data: parseContentType(request.getResponseHeader('content-type'), request.responseText, request.responseXML),
          status: request.status,
          headers: headersGetter(request),
          xhr: request
        };
        if( request.status >= 200 && request.status < 400 ) {
          resolve( response );
        } else {
          reject( response );
        }
      }
    };

    if( config.contentType ) {

      if( config.data && config.contentType === 'application/json' && typeof config.data !== 'string' ) {
        config.data = JSON.stringify(config.data);
      }

    } else if( config.data instanceof FormData ) {
      config.contentType = 'multipart/form-data';
    } else if( typeof config.data === 'object' && config.data !== null ) {
      config.contentType = 'application/json';
      if( config.data ) {
        config.data = JSON.stringify(config.data);
      }
    }

    if( config.contentType ) {
      // addHeadersToRequest(request, { contentType: config.contentType });
      request.setRequestHeader( 'Content-Type', config.contentType );
    }

    request.send( config.data );

  });
}

http.serialize = serializeParams;

http.noCache = function (url, config) {
  url += ( /\?/.test(url) ? '&' : '?' ) + 't=' + new Date().getTime();
  return http(url, config);
};

http.plainResponse = function (response) {
  return {
    config: response.config,
    data: response.data,
    status: response.status,
    headers: response.headers()
  };
};

['get', 'delete'].forEach(function (method) {
  http[method] = function (url, config) {
    return http(url, _.extend(_.copy(config || {}), {
      method: method
    }));
  };
});

['post', 'put', 'patch'].forEach(function (method) {
  http[method] = function (url, data, config) {
    return http(url, _.extend(_.copy(config || {}), {
      method: method,
      data: data || {}
    }));
  };
});

// basePath

function basePath (bp) {
  if( /\/$/.test(bp) ) {
    bp = bp.replace(/\/$/,'');
  }
  return function (p) {
    if( !p ) {
      return bp;
    }
    return bp + ( /^\//.test(p) ? '' : '/' ) + p;
  };
}

http.base = function (url, baseConfig) {
  var bp = basePath(url),
      based = function () {
        return based.get.apply(this, arguments);
      };

  baseConfig = baseConfig || {};

  ['get', 'delete'].forEach(function (method) {
    based[method] = function (p, _config ) {
      return http( bp(p), _.merge(_.copy(baseConfig), _config, { method: method }));
    };
  });

  ['post', 'put', 'patch'].forEach(function (method) {
    based[method] = function (p, data, _config ) {
      return http( bp(p), _.merge(_.copy(baseConfig), _config, { method: method, data: data }) );
    };
  });

  return based;
};

http.responseData = function (response) {
  return response.data;
};

module.exports = http;

},{"nitro-tools/extend":14,"parole":18}],12:[function(require,module,exports){

(function (factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else if ( 'define' in window && window.define.amd ) define([], factory);
  else window.$live = factory();
})(function () {

  var num_listeners = 0;

  function _getLive (root) {

    var listeners_all = [],
        listeners = {},
        ready_listeners = [],
        dom_is_ready = document.readyState === 'complete',
        each = Array.prototype.forEach,
        filter = Array.prototype.filter;

    function triggerEvent (element, eventName, data) {
      var event = document.createEvent('HTMLEvents');
      event.data = data;
      event.initEvent(eventName, true, true);
      element.dispatchEvent(event);
      return event;
    }

    function _remove_item (list, item) {
      for( var i = list.length - 1 ; i >= 0 ; i-- ) {
        if( item === list[i] ) list.splice(i, 1);
      }
    }

    function runListener (el, listener) {
      if( el.__live__ && el.__live__[listener.id] ) return;
      el.__live__ = el.__live__ || {};
      el.__live__[listener.id] = true;
      listener.fn.call(el, el);
    }

    function runSelector (selector) {
      each.call( document.querySelectorAll(selector), function (el) {
        listeners[selector].forEach(function (listener) {
          runListener(el, listener);
        });
      });
    }

    function _runListener (listener) { listener(); }

    function onNodesChanged () {
      for( var listener_selector in listeners ) runSelector(listener_selector);
      if( listeners_all.length ) listeners_all.forEach(_runListener);
    }

    function onDOMReady () {
      dom_is_ready = true;
      document.removeEventListener('DOMContentLoaded', onDOMReady);
      window.removeEventListener('load', onDOMReady);

      ready_listeners.forEach(_runListener);
      onNodesChanged();
    }

    if( !dom_is_ready ) {
      document.addEventListener('DOMContentLoaded', onDOMReady);
      window.addEventListener('load', onDOMReady);
    }

    function onReady (listener) {
      if( dom_is_ready ) return listener();
      ready_listeners.push(listener);
    }

    onReady(function () {
      var mutations_supported = 'MutationObserver' in window;
      if( mutations_supported ) {
        try{
          new MutationObserver(function(mutations) {
            onNodesChanged();

            mutations.forEach(function(mutation) {
              [].forEach.call(mutation.removedNodes, function (node) {
                triggerEvent(node, 'detached');
              });
            });

          }).observe(root, { childList: true, subtree: true });
        } catch(err) {
          mutations_supported = false;
        }
      }
      if( !mutations_supported ) {
        root.addEventListener('DOMSubtreeModified', onNodesChanged);
      }
      // eslint-disable-next-line
      // console.log('mutations ' + ( mutations_supported ? '' : 'UN' ) + 'supported');
    });

    function _live (selector, listener_fn) {
      if( selector instanceof Function ) return listeners_all.push(selector);

      if( typeof selector !== 'string' ) throw new Error('selector should be a String');
      if( !(listener_fn instanceof Function) ) throw new Error('listener should be a Function');

      var listener = { id: '_' + ++num_listeners, fn: listener_fn };

      listeners[selector] = listeners[selector] || [];
      listeners[selector].push(listener);

      if( dom_is_ready ) each.call( document.querySelectorAll(selector), function (el) {
        runListener(el, listener);
      });
    }

    _live.off = function (selector, listener) {
      if( selector instanceof Function ) return _remove_item(listeners_all, selector);

      if( typeof selector !== 'string' ) throw new Error('selector should be a String');
      if( !(listener instanceof Function) ) throw new Error('handler should be a Function');

      _remove_item(listeners, listener);
    };

    _live.byValue = function (selector, getValue) {
      var value_listeners = {},
          value_live_ready = false;

      return function (name, listener_fn) {
        var listener = {
          id: '_' + ++num_listeners, fn: listener_fn,
          filter: function (node) {
            return getValue.call(node, node) === name;
          }
        };

        value_listeners[name] = value_listeners[name] || [];
        value_listeners[name].push(listener);

        if( dom_is_ready && value_live_ready ) {
          each.call( filter.call(document.querySelectorAll(selector), listener.filter), function (el) {
            runListener(el, listener);
          });
        }

        if( value_live_ready ) return;

        value_live_ready = true;
        _live(selector, function (el) {
          for( var name in value_listeners ) {
            value_listeners[name].forEach(function (listener) {
              if( listener.filter(el) ) runListener(el, listener);
            });
          }
        });
      };
    };

    return _live;
  }

  var $live = _getLive(document.body);
  $live.root = _getLive;
  $live.form = $live.byValue('form[name]', function () { return this.name; });

  return $live;
});

},{}],13:[function(require,module,exports){

var arrayShift = [].shift;

module.exports = function extend () {
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

},{}],14:[function(require,module,exports){

var RE_$$ = /^\$\$/,
    arrayShift = [].shift,
    type = require('./type');

function _merge () {
    var dest = arrayShift.call(arguments),
        src = arrayShift.call(arguments),
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
      src = arrayShift.call(arguments);
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

module.exports = {
  extend: require('./_extend'),
  merge: _merge,
  copy: _copy
};

},{"./_extend":13,"./type":17}],15:[function(require,module,exports){

var type = require('./type'),
    arrSome = Array.prototype.some,
    arrEvery = Array.prototype.every,
    arrForEach = Array.prototype.forEach,
    arrMap = Array.prototype.map,
    arrIndexOf = Array.prototype.indexOf;

// -----------------------------------------

function _eachInList( list, iteratee, thisArg ) {
  return arrForEach.call(list, iteratee, thisArg);
}

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
  if( type.isFunction(iteratee) ) {
    return iteratee;
  }

  if( type.isObject(iteratee) ) {
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
  } else if( type.isObject(o) ) {
    _eachInObject(o, iteratee, thisArg || this);
  }
}

function indexOf (list, iteratee, thisArg) {
  if( !type.isFunction(iteratee) ) {
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
	if( type.isString(iteratee) ) {
		return _indexBy(list, function (item) { return item[iteratee]; }, thisArg);
	} else if( type.isFunction(iteratee) ) {
		return _indexBy(list, iteratee, thisArg);
	}
	return {};
}

function some (list, iteratee, thisArg) {
  iteratee = _iterateeFn(iteratee);

  if( list && list.length ) {
    return arrSome.call(list, iteratee, thisArg);
  } else if( type.isObject(list) ) {
    for( var key in list )  {
      if( iteratee.call(thisArg, list[key], key) ) {
        return true;
      }
    }
    return false;
  }
};

function every (list, iteratee, thisArg) {
  iteratee = _iterateeFn(iteratee);

  if( list && list.length ) {
    return arrEvery.call(list, iteratee, thisArg);
  } else if( type.isObject(list) ) {
    for( var key in list )  {
      if( !iteratee.call(thisArg, list[key], key) ) {
        return false;
      }
    }
    return true;
  }
};

function map (list, _iteratee, thisArg) {
  var iteratee = type.isString(_iteratee) ? function (item) { return item[_iteratee]; } : _iteratee;

  if( list && list.length ) {
    return arrMap.call(list, iteratee, thisArg);
  } else if( type.isObject(list) ) {
    var result = {};
    for( var key in list )  {
      result[key] = iteratee.call(thisArg, list[key], key);
    }
    return result;
  }
};

function map2List (list, iteratee, thisArg) {
  if( list && list.length ) {
    return arrMap.call(list, iteratee, thisArg);
  }
  var result = [], i = 0;
  for( var key in list )  {
    result[i++] = iteratee.call(thisArg, list[key], key);
  }
  return result;
};

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

module.exports = {
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

},{"./type":17}],16:[function(require,module,exports){

var RE_dotsBack = /[^\/]+\/\.\.\//g,
	clearStr = function () { return ''; };

function _joinPath () {
    var path = (arguments[0] || '').replace(/\/$/, ''),
    	backDots;

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

module.exports = {
  joinPath: _joinPath
};

},{}],17:[function(require,module,exports){
'use strict';

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

module.exports = {
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

},{}],18:[function(require,module,exports){

(function (root, factory) {
  if( typeof exports === 'object' && typeof module !== 'undefined' ) {
    // CommonJS
    module.exports = factory();
  } else if( typeof define === 'function' && define.amd ) {
      // AMD. Register as an anonymous module.
      define([], factory);
  } else {
      // Browser globals
      root.Parole = factory();
  }
})(this, function () {

  function runHandler (fn, deferred, x, fulfilled) {
    if( typeof fn === 'function' ) {
      try {
        deferred.resolve( fn(x) );
      } catch(reason) {
        deferred.reject( reason );
      }
    } else {
      deferred[ fulfilled ? 'resolve' : 'reject' ](x);
    }
  }

  function resolvePromise (p, x, fulfilled) {
    if( p.resolved ) {
      return;
    }
    p.resolved = true;

    p.result = x;
    p.fulfilled = fulfilled || false;

    var queue = p.queue.splice(0);
    p.queue = null;

    setTimeout(function () {
      for( var i = 0, n = queue.length ; i < n ; i++ ) {
        runHandler( queue[i][fulfilled ? 0 : 1], queue[i][2], x, fulfilled );
      }
    }, 0);
  }

  function runThenable (then, p, x) {
    var executed = false;
    try {
      then.call(x, function (value) {
        if( executed ) return;
        executed = true;
        xThen(p, value, true);
      }, function (reason) {
        if( executed ) return;
        executed = true;
        xThen(p, reason, false);
      });
    } catch(err) {
      if( executed ) return;
      xThen(p, err, false);
    }
  }

  function xThen (p, x, fulfilled) {
    var then;

    if( x && ( typeof x === 'object' || typeof x === 'function' ) ) {
      try {
        then = x.then;

        if( fulfilled && typeof then === 'function' ) {
          runThenable(then, p, x);
        } else {
          resolvePromise(p, x, fulfilled);
        }
      } catch (reason) {
        resolvePromise(p, reason, false);
      }
    } else {
      resolvePromise(p, x, fulfilled);
    }
  }

  function resolveProcedure (p, x, fulfilled) {
    if( p.resolving ) return;
    p.resolving = true;

    if( x === p.promise ) {
      fulfilled = false;
      x = new TypeError('A promise can not be resolved by itself');
    }

    xThen(p, x, fulfilled);
  }

  function Parole (resolver) {
    if( !(this instanceof Parole) ) {
      return new Parole(resolver);
    }

    if( typeof resolver !== 'function' ) {
      throw new TypeError('Promise resolver ' + resolver + ' is not a function');
    }

    var p = {
      queue: [],
      promise: this
    };

    this.__promise = p;

    try {
      resolver(function (value) {
        resolveProcedure(p, value, true);
      }, function (reason) {
        resolveProcedure(p, reason, false);
      });
    } catch (reason) {
      resolveProcedure(p, reason, false);
    }

  }

  Parole.prototype.then = function (onFulfilled, onRejected) {
    var p = this.__promise,
        deferred = Parole.defer();

    if( p.queue ) {
      p.queue.push([onFulfilled, onRejected, deferred]);
    } else {
      setTimeout(function () {
        runHandler( p.fulfilled ? onFulfilled : onRejected, deferred, p.result, p.fulfilled );
      }, 0);
    }

    return deferred.promise;
  };

  Parole.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
  };

  // Promise methods

  function each (iterable, handler) {
    for( var i = 0, n = iterable.length; i < n ; i++ ) {
      handler(iterable[i], i);
    }
  }

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

  Parole.all = function (iterable) {
    return new Parole(function (resolve, reject) {
      var pending = iterable.length,
          results = [];
      each(iterable, function (_promise, i) {

        ( _promise.then ? _promise : Parole.resolve(_promise) ).then(function (result) {
          results[i] = result;
          if( --pending === 0 ) {
            resolve(results);
          }
        }, function (reason) {
          if( pending !== -1 ) {
            pending === -1;
            reject(reason);
          }
        });
      });
    });
  };

  Parole.race = function (iterable) {
    return new Parole(function (resolve, reject) {
      var done = false;

      each(iterable, function (_promise) {
        if( done ) {
          return;
        }
        ( _promise.then ? _promise : Parole.resolve(_promise) ).then(function (result) {
          if( !done ) {
            done = true;
            resolve(result);
          }
        }, function (reason) {
          if( !done ) {
            done = true;
            reject(reason);
          }
        });
      });
    });
  };

  return Parole;

});

},{}],19:[function(require,module,exports){
var arrayShift = [].shift;

module.exports = function extend () {
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

},{}],20:[function(require,module,exports){

// require('./browser-polyfills/current-script');
require('./browser-polyfills/date');
require('./browser-polyfills/dom-closest');
require('./browser-polyfills/event-listener');
require('./browser-polyfills/match-media');
require('./browser-polyfills/matches-selector');

},{"./browser-polyfills/date":21,"./browser-polyfills/dom-closest":22,"./browser-polyfills/event-listener":23,"./browser-polyfills/match-media":24,"./browser-polyfills/matches-selector":25}],21:[function(require,module,exports){

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
},{}],22:[function(require,module,exports){

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
},{}],23:[function(require,module,exports){

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
},{}],24:[function(require,module,exports){
(function (root) {
  'use strict';

  root.matchMedia = root.matchMedia || root.webkitMatchMedia || root.mozMatchMedia || root.msMatchMedia;
})(this);
},{}],25:[function(require,module,exports){

if( !Element.prototype.matchesSelector ) {
  Element.prototype.matchesSelector = (
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector
  );
}


},{}],26:[function(require,module,exports){

var extend = require('./extend');

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
  require('./browser-polyfills');
});

_.q = require('parole');

extend.extend(_, extend,
  require('./key'),
  require('./type'),
  require('./path')
);

_.Scope = require('./scope');

_.extend(_, {
	animate: require('./deferred/animate'),
	wait: require('./deferred/wait')
});

_.extend(_, {
	ready: require('./fn/ready'),
	template: require('./fn/template'),
	once: require('./fn/once'),
	debounce: require('./fn/debounce')
});

_.extend(_,
  require('./events'),
	// _.on(el, eventName, handler, useCapture)
	// _.off(el, eventName, handler, useCapture)
	// _.triggerEvent(element, eventName, data)

  require('./dom')
  // _.create(tagName, attrs)
	// _.attr(el, name, value)
  // _.tmpClass(el, className, duration, cb)
);

_.extend(_, {
	normalize: require('./normalize'),
	// _.touchDevice === true | false
	// _.isMac === true | false
	// _.isAndroid === true | false

	scroll: require('./scroll/bundle') // scroll is not available until document is ready
	// _.scroll.on( handler, useCapture )
	// _.scroll.off( handler, useCapture )
	// _.scroll.top()
	// _.scroll.goto(value)
	// _.scroll.animateTo(value | HTMLElement, callback, duration): Promise
	// _,scroll.inAnimation === true | false
});

module.exports = _;

},{"./browser-polyfills":20,"./deferred/animate":27,"./deferred/wait":28,"./dom":29,"./events":31,"./extend":32,"./fn/debounce":33,"./fn/once":34,"./fn/ready":35,"./fn/template":36,"./key":37,"./normalize":38,"./path":39,"./scope":40,"./scroll/bundle":43,"./type":45,"parole":18}],27:[function(require,module,exports){

var Parole = require('parole'),
    beizerEasing = require('bezier-easing'),
    timingFunctions = {},
    noop = function () {},
    getTimingFunction = function (timingFunctionName) {
      if( !timingFunctions[timingFunctionName] ) {
        if( timingFunctionName === 'linear' ) {
          timingFunctions[timingFunctionName] = function ( value ) { return value; };
        } else if( timingFunctionName === 'ease' ) {
          timingFunctions[timingFunctionName] = beizerEasing(.17,.67,.83,.67);
        } else if( timingFunctionName === 'ease-in' ) {
          timingFunctions[timingFunctionName] = beizerEasing(.42,0,1,1);
        } else if( timingFunctionName === 'ease-out' ) {
          timingFunctions[timingFunctionName] = beizerEasing(0,0,.58,1);
        } else if( timingFunctionName === 'ease-in-out' ) {
          timingFunctions[timingFunctionName] = beizerEasing(.42,0,.58,1);
        }
      }
      return timingFunctions[timingFunctionName];
    };

var now = Date.now ? function () {
  return Date.now();
} : function () {
  return new Date().getTime();
};

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

  var stopped = false,
      timingFunction = getTimingFunction(timingFunctionName),
      deferred = Parole.defer();

  if( duration > 0 ) {
    var start = now(),
        interval = setInterval(function () {
          var elapsed = now() - start;

          if( stopped ) {
            clearInterval(interval);
          } else if( elapsed >= duration ) {
            stopped = true;
            progressFn(1);
            deferred.resolve();
            (atEnd || noop)();
          } else {
            progressFn( timingFunction(elapsed/duration) );
          }
        }, 10);
  }

  deferred.promise.stop = function (reject) {
    stopped = true;
    if( reject ) {
      deferred.reject();
    }
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

module.exports = animate;

},{"bezier-easing":10,"parole":18}],28:[function(require,module,exports){

var Parole = require('parole'),
	wait = function (delay, callback) {
		if( delay instanceof Function ) {
			delay = [callback, callback = delay][0];
		}
		if( callback && !(callback instanceof Function) ) {
			throw new Error('callback should be a Function');
		}
		if( typeof delay !== 'number' ) {
			throw new Error('delay should be a Number');
		}
		return new Parole(function (resolve) {
			setTimeout(function () {
				resolve();
				if( callback ) {
					callback();
				}
			}, delay);
		});
	};

module.exports = wait;

},{"parole":18}],29:[function(require,module,exports){

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
    };

var _dom = {
  currentScript: document.currentScript || (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })(),
  addClass: classListAdd,
  removeClass: classListRemove,
  hasClass: classListHas,
  toggleClass: function (el, className, toggle) {
    toggle = toggle === undefined ? !classListHas(el, className) : toggle;

    if( toggle ) {
      classListAdd(el, className);
    } else {
      classListRemove(el, className);
    }
    return toggle;
  },
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
        if( el.type === 'radio' ) {
          if( el.checked ) {
            data[el.name] = el.value;
          }
        } else {
          data[el.name] = el.value;
        }
      }
    });
    return data;
  }
};

module.exports = _dom;

},{}],30:[function(require,module,exports){

'use strict';

module.exports = function (expression) {

  /* jshint ignore:start */
  var fn = new Function('model', 'try{ with(model) { return (' + expression + ') }; } catch(err) { return \'\'; }');
  /* jshint ignore:end */
  return function (model, thisArg) {
    return fn.call(thisArg, model);
  };
};

},{}],31:[function(require,module,exports){

module.exports = {
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

},{}],32:[function(require,module,exports){

var arrayShift = [].shift,
    type = require('./type');

function _merge () {
    var dest = arrayShift.call(arguments),
        src = arrayShift.call(arguments),
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
      src = arrayShift.call(arguments);
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

module.exports = {
  extend: require('./_extend'),
  merge: _merge,
  copy: _copy
};

},{"./_extend":19,"./type":45}],33:[function(require,module,exports){

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

module.exports = debounce;

},{}],34:[function(require,module,exports){

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

module.exports = once;

},{}],35:[function(require,module,exports){
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

module.exports = ready;

},{}],36:[function(require,module,exports){

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

module.exports = template;
},{}],37:[function(require,module,exports){
var type = require('./type');

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

module.exports = {
  key: _key,
  keys: Object.keys
};

},{"./type":45}],38:[function(require,module,exports){

var normalize = {
  isTouchDevice: 'ontouchstart' in document.documentElement,
  isMac: /^Mac/.test(navigator.platform),
  isAndroid: /^Android/.test(navigator.platform),
  addHTMLClasses: function () {
    var _ = require('./dom');

    _.addClass(document.documentElement, normalize.isTouchDevice ? 'touch' : 'no-touch' );
    if( normalize.isMac ) {
      _.addClass(document.documentElement, 'is-mac');
    }
    if( normalize.isAndroid ) {
      _.addClass(document.documentElement, 'is-android');
    }
  }
};

module.exports = normalize;

},{"./dom":29}],39:[function(require,module,exports){
var RE_dotsBack = /[^\/]+\/\.\.\//g,
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

module.exports = {
  joinPath: _joinPath
};

},{}],40:[function(require,module,exports){
'use strict';

var evalExpression = require('./eval');

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
  return evalExpression(expression)(this, thisArg);
};

module.exports = Scope;

},{"./eval":30}],41:[function(require,module,exports){

function getScrollRoot () {
  var html = document.documentElement, body = document.body;

  if( html.scrollTop ) return html;
  if( body.scrollTop ) return body;

  var cacheTop = ((typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : null) || body.scrollTop || html.scrollTop, // cache the window's current scroll position
      root;

  html.scrollTop = body.scrollTop = cacheTop + (cacheTop > 0) ? -1 : 1;
  // find root by checking which scrollTop has a value larger than the cache.
  root = (html.scrollTop !== cacheTop) ? html : body;

  root.scrollTop = cacheTop; // restore the window's scroll position to cached value

  return root; // return the scrolling root element
}

var ready = require('./fn/ready'),
    scrollRoot = { scrollTop: 0 },
    scroll = {
      root: scrollRoot,
      on: function ( handler, useCapture ) {
        return document.addEventListener('scroll', handler, useCapture);
      },
      off: function ( handler, useCapture ) {
        return document.removeEventListener('scroll', handler, useCapture);
      },
      top: function () {
        return scroll.root.scrollTop;
      },
      goto: function ( value ) {
        scroll.root.scrollTop = value;
      }
    };

ready(function () {
  scrollRoot = getScrollRoot();
  scroll.root = scrollRoot;
});

module.exports = scroll;

},{"./fn/ready":35}],42:[function(require,module,exports){

module.exports = function (scroll) {

	var animate = require('../deferred/animate'),
			Parole = require('parole'),
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

},{"../deferred/animate":27,"parole":18}],43:[function(require,module,exports){

var scroll = require('../scroll');

require('./top-class')(scroll);
require('./animate')(scroll);

module.exports = scroll;
},{"../scroll":41,"./animate":42,"./top-class":44}],44:[function(require,module,exports){

module.exports = function (scroll) {

	var ready = require('../fn/ready');

	scroll.autoTopClass = function (topClass, topClassAlt) {

		topClass = topClass || 'js-scroll-top';
		topClassAlt = topClassAlt || 'js-no-scroll-top';

    ready(function () {
      var _ = require('../dom');
      scroll.on(function () {
        _.toggleClass(document.documentElement, topClass,
          !_.toggleClass(document.documentElement, topClassAlt, scroll.top() )
        );
      });
    });
	};

};

},{"../dom":29,"../fn/ready":35}],45:[function(require,module,exports){
arguments[4][17][0].apply(exports,arguments)
},{"dup":17}],46:[function(require,module,exports){
(function (global){
/* global define */

require('./sandbox')(function () {
  'use strict';

  function once (fn) {
    var result;
    return function () {
      if( fn ) {
        result = fn.apply(this, arguments);
        fn = null;
      }
      return result;
    };
  }

  var aplazame = require('./core/core'),
      api = require('./core/api'),
      events = require('./core/events'),
      log = require('./tools/log');

  aplazame.checkout = require('./apps/checkout');
  aplazame.button = require('./apps/button');
  aplazame.simulator = require('./apps/simulator');
  aplazame.modal = require('./apps/modal');

  aplazame.info = function () {
    return {
      api: require('./core/api'),
      log: require('./tools/log').history,
      version: require('../.tmp/aplazame-version')
    };
  };

  aplazame.log = log;
  aplazame.logs = log.dump;

  require('./apps/http-service');

  global.aplazame = aplazame;

  events.on('ready', once(function () {
    require('./loaders/data-button')(aplazame);
    require('./loaders/data-simulator')(aplazame);
  }));

  function findFirst( list, iteratee ) {
    for( var i = 0, n = list.length ; i < n ; i++ ) {
      if( iteratee(list[i]) ) return list[i];
    }
    return null;
  }

  function safeScript (script) {
    if( script && script.getAttribute && script.getAttribute('data-aplazame') !== null )
      return script;

    var is_aplazame_loader = function (script) {
      if( script && script.src && script.src.trim().indexOf('https://aplazame.com/static/aplazame.js') === 0 )
        return script;
    };

    return is_aplazame_loader(script) || findFirst(document.querySelectorAll('script'), is_aplazame_loader) || script || document.querySelector('script[data-aplazame]') || document.createElement('script');
  }

  var options = require('./loaders/data-aplazame')(aplazame._, safeScript(aplazame._.currentScript));

  aplazame.init(options);

  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return aplazame;
    });
  }

  aplazame._.ready(function () {
    if( api.callback ) {
      if(  typeof global[api.callback] !== 'function' ) {
        throw new Error('callback should be a global function');
      }

      global[api.callback](aplazame);
    }
  });

});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../.tmp/aplazame-version":1,"./apps/button":47,"./apps/checkout":49,"./apps/http-service":50,"./apps/modal":52,"./apps/simulator":53,"./core/api":55,"./core/core":56,"./core/events":57,"./loaders/data-aplazame":59,"./loaders/data-button":60,"./loaders/data-simulator":64,"./sandbox":65,"./tools/log":71}],47:[function(require,module,exports){
'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools');

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

module.exports = button;

},{"../core/api-http":54,"../tools/tools":74}],48:[function(require,module,exports){
'use strict';

function _locationReplaceFn ( location, href ) {
  return function () {
    location.replace(href);
  };
}

function checkoutNormalizer(checkout, location, api) {
  checkout.origin = {
    host: location.host,
    href: location.href,
    origin: location.origin,
    protocol: location.protocol
  };

  checkout.api = api;

  if( !checkout.merchant ) {
    throw new Error('missing merchant parameters');
  }

  if( !checkout.merchant.public_api_key && !api.publicKey ) {
    throw new Error('missing public key');
  }

  // We put public_api_key as soon as possible so we can track the merchant from our API and notify him about any issue.
  checkout.merchant.public_api_key = checkout.merchant.public_api_key || api.publicKey;
  checkout.merchant.sandbox = checkout.merchant.sandbox === undefined ? api.sandbox : checkout.merchant.sandbox;

  if (!checkout.merchant.onSuccess && !checkout.merchant.success_url) {
    throw new Error('success_url missing');
  }
  checkout.merchant.onSuccess = checkout.merchant.onSuccess || _locationReplaceFn(location, checkout.merchant.success_url);

  if (!checkout.merchant.onError && !checkout.merchant.cancel_url) {
    throw new Error('cancel_url missing');
  }
  checkout.merchant.onError = checkout.merchant.onError || _locationReplaceFn(location, checkout.merchant.cancel_url);

  checkout.merchant.onDismiss = checkout.merchant.onDismiss || _locationReplaceFn(location, checkout.merchant.checkout_url || '/');

  if( !checkout.merchant.onPending ) {
    checkout.merchant.onPending = checkout.merchant.pending_url ? _locationReplaceFn(location, checkout.merchant.pending_url) : checkout.merchant.onDismiss;
  }

  if (checkout.customer) {
    if (checkout.customer.birthday) {
      // Strip time from value
      checkout.customer.birthday = checkout.customer.birthday.split('T')[0];
    }

    switch (checkout.customer.type) {
      case 'existing':
        checkout.customer.type = 'e';
        break;
      case 'guess':
        checkout.customer.type = 'g';
        break;
      case 'new':
        checkout.customer.type = 'n';
        break;
    }

    switch (checkout.customer.gender) {
      case 'unknown':
        checkout.customer.gender = 0;
        break;
      case 'male':
        checkout.customer.gender = 1;
        break;
      case 'female':
        checkout.customer.gender = 2;
        break;
      case 'not_applicable':
        checkout.customer.gender = 3;
        break;
    }
  }

  return checkout;
}

module.exports = checkoutNormalizer;

},{}],49:[function(require,module,exports){
'use strict';

var api = require('../core/api'),
    _ = require('../tools/tools'),
    checkoutNormalizer = require('./checkout-normalizer'),
    http = require('http-browser'),
    cssHack = require('../tools/css-hack'),
    isApp = typeof navigator !== 'undefined' && navigator.app,
    log = require('../tools/log');

function getBaseCheckout(options) {
  var baseCheckout = ( options.host === 'location' ? ( location.protocol + '//' + location.host + '/' ) : options.host ) || ( api.checkoutUrl || api.staticUrl ) + 'checkout/';

  // Append trailing slash if not exists.
  if (!/\/$/.test(baseCheckout)) {
    baseCheckout += '/';
  }

  return baseCheckout;
}

function checkout (options) {

  options = options || {};
  var baseCheckout = getBaseCheckout(options);

  var on = {},
      onError,
      iframeSrc = baseCheckout + 'iframe.html?' + new Date().getTime(),
      errorLoading = false,
      errorMessage = false,
      tmpOverlay = document.createElement('div'),
      cssOverlay = cssHack('overlay'),
      cssBlur = cssHack('blur'),
      cssLogo = cssHack('logo'),
      cssModal = cssHack('modal'),
      viewPortHack = document.createElement('meta');

  viewPortHack.name = 'viewport';
  viewPortHack.content = 'width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';

  document.head.appendChild(viewPortHack);

  onError = options.onError || _.noop;
  delete options.onError;

  try {
    options = checkoutNormalizer(options, location, _.copy(api));
    on.success = options.merchant.onSuccess;
    on.pending = options.merchant.onPending;
    on.cancel = options.merchant.onError;
    on.dismiss = options.merchant.onDismiss;
  } catch (e) {
    errorMessage = e.message;
  }

  if (options.merchant) {
    // All functions must be removed as them can't be serialized by postMessage
    delete options.merchant.onSuccess;
    delete options.merchant.onPending;
    delete options.merchant.onError;
    delete options.merchant.onDismiss;
  }

  if( isApp ) {
    options.meta = options.meta || {};
    options.meta.is_app = true;
  }

  tmpOverlay.className = 'aplazame-overlay aplazame-overlay-show';

  cssOverlay.hack(true);
  cssLogo.hack(true);
  cssBlur.hack(true);

  setTimeout(function () {
    if( !errorLoading ) {
      _.addClass(document.body, 'aplazame-blur');
    }
  }, 0);

  tmpOverlay.innerHTML = '<div class="aplazame-logo-wrapper"><div class="logo-aplazame" style="width: 150px; height: 150px;">' +
  require('./loading-svg') + '</div><div class="aplazame-overlay-loading-text">Cargando pasarela de pago...</div></div>';

  document.body.appendChild(tmpOverlay);

  var loadingText = tmpOverlay.querySelector('.aplazame-overlay-loading-text');

  setTimeout(function () {
    if( !errorLoading ) {
      tmpOverlay.querySelector('.logo-aplazame').className += ' animate';
    }
  }, 200);

  return http( iframeSrc ).then(function (response) {
      var iframe = _.getIFrame({
            top: 0,
            left: 0,
            width: '100%',
            height: '0',
            background: 'transparent'
          }),
          httpCheckout = function () {
            var started = _.now();
            return http.apply(this, arguments).then(function (response) {
              iframe.contentWindow.postMessage({
                aplazame: 'checkout',
                event: 'http-success',
                started: started,
                elapsed: _.now() - started,
                response: http.plainResponse(response)
              }, '*');
              return response;
            }, function (response) {
              iframe.contentWindow.postMessage({
                aplazame: 'checkout',
                event: 'http-error',
                started: started,
                elapsed: _.now() - started,
                response: http.plainResponse(response)
              }, '*');
              throw response;
            });
          };

      iframe.className = 'aplazame-modal';

      document.body.appendChild(iframe);
      iframe.src = iframeSrc;

      if (errorMessage) {
        throw new Error(errorMessage);
      }

      var onMessage = function (e, message) {

        switch( message.event ) {
          case 'merchant':
            iframe.style.display = _.remove_style;
            e.source.postMessage({
              checkout: options
            }, '*');
            break;
          case 'show-iframe':
            _.removeClass(iframe, 'hide');
            cssModal.hack(true);
            cssOverlay.hack(false);
            document.body.removeChild(tmpOverlay);
            break;
          case 'loading-text':
            loadingText.textContent = message.text;
            break;
          case 'open-link':
            if( isApp )
              navigator.app.loadUrl(message.href, { openExternal: true });
            else
              window.open(message.href, '_system');
            break;
          case 'drop-blur':
            _.removeClass(document.body, 'aplazame-blur');
            _.addClass(document.body, 'aplazame-unblur');
            setTimeout(function () {
              cssBlur.hack(false);
              _.removeClass(document.body, 'aplazame-blur');
              _.removeClass(document.body, 'aplazame-unblur');
            }, 600);
            break;
          case 'confirm':
          case 'success':
            _.log('aplazame.checkout:confirm', message);

            httpCheckout( options.merchant.confirmation_url, {
              method: 'post',
              contentType: 'application/json',
              data: message.data,
              params: _.extend(message.params || {}, {
                order_id: message.data.checkout_token,
                checkout_token: message.data.checkout_token
              })
            }).then(function (response) {
              e.source.postMessage({
                aplazame: 'checkout',
                event: 'confirmation',
                result: 'success',
                response: http.plainResponse(response)
              }, '*');
            }, function () {
              e.source.postMessage({
                aplazame: 'checkout',
                event: 'confirmation',
                result: 'error',
                response: http.plainResponse(response)
              }, '*');
            });
            // confirmation_url
            break;
          case 'close':
            if( iframe ) {
              document.body.removeChild(iframe);
              cssModal.hack(false);
              iframe = null;
              document.head.removeChild(viewPortHack);

              _.onMessage.off('checkout', onMessage);

              if( on[message.result] ) on[message.result]();
            }
            break;
        }
      };

      _.onMessage('checkout', onMessage);

    }).catch(function (reason) {
      // throw new Error('can not connect to ' + baseCheckout);
      errorLoading = true;

      log('Aplazame ' + reason);

      _.removeClass(tmpOverlay.querySelector('.logo-aplazame'), 'animate');
      loadingText.innerHTML = '<div class="text-error">Error cargando pasarela de pago</div><br/><div><a href="mailto:soporte@aplazame.com?subject=' + encodeURI('Checkout error: ' + reason) + '">soporte@aplazame.com</a></div>';
      loadingText.style.lineHeight = '1.5';

      onError(reason);
    });

}

module.exports = checkout;

},{"../core/api":55,"../tools/css-hack":69,"../tools/log":71,"../tools/tools":74,"./checkout-normalizer":48,"./loading-svg":51,"http-browser":11}],50:[function(require,module,exports){
'use strict';

var _ = require('../tools/tools'),
    http = require('http-browser');

function processResponse(result, message, messageSrc, started) {

  return function (response) {

    var responsep = http.plainResponse(response);
    responsep.config = message;

    messageSrc.postMessage({
      aplazame: 'http',
      event: 'response',
      started: started,
      elapsed: _.now() - started,
      result: result,
      response: responsep
    }, '*');
  };
}

_.onMessage('http', function (e, message) {

  var started = _.now();

  http( message.url, message )
    .then(
      processResponse('success', message, e.source, started),
      processResponse('error', message, e.source, started)
    );

});

module.exports = { ready: true };

},{"../tools/tools":74,"http-browser":11}],51:[function(require,module,exports){

module.exports = '<svg class="line-short" version="1.1" viewBox="0 0 100 100">' +
'<path  d="M36.788,81.008,50,50" stroke-linecap="round" stroke-width="6" fill="none"/>' +
'</svg>' +
'<svg class="smile" version="1.1" viewBox="0 0 100 100">' +
'<g stroke-linecap="round" fill="none" transform="matrix(0.78036633,0,0,0.78036633,10.526512,18.003998)">' +
'<path class="smile-outline" stroke-width="12" d="M75.242,57.51c-5.435,7.839-14.498,12.972-24.761,12.972-10.262,0-19.325-5.132-24.758-12.972"/>' +
'<path class="smile-line" stroke-width="7.5" d="M75.242,57.51c-5.435,7.839-14.498,12.972-24.761,12.972-10.262,0-19.325-5.132-24.758-12.972"/>' +
'</g>' +
'</svg>' +
'<svg class="line-large" version="1.1" viewBox="0 0 100 100">' +
'<path stroke-linejoin="round" d="M50,50,66.687,92.266" stroke-linecap="round" stroke-miterlimit="4" stroke-dasharray="none" stroke-width="6" fill="none"/>' +
'</svg>';

},{}],52:[function(require,module,exports){
'use strict';

function matchMedia (query) {
  return (window.matchMedia = window.matchMedia || window.webkitMatchMedia || window.mozMatchMedia || window.msMatchMedia)(query);
}

var api = require('../core/api'),
    _ = require('../tools/tools'),
    cssHack = require('../tools/css-hack'),
    aplazameVersion = require('../../.tmp/aplazame-version'),
    isMobile = matchMedia('( max-width: 767px )'),
    lastScrollTop;

var tmpOverlay = document.createElement('div'),
    cssOverlay = cssHack('overlay'),
    cssBlur = cssHack('blur'),
    cssModal = cssHack('modal');

function modal (content) {

  if( modal.iframe ) {
    document.body.removeChild(modal.iframe);
  }

  cssOverlay.hack(true);
  cssBlur.hack(true);
  cssModal.hack(true);

  tmpOverlay.className = 'aplazame-overlay aplazame-overlay-show';
  document.body.appendChild(tmpOverlay);

  setTimeout(function () {
    _.addClass(document.body, 'aplazame-blur');
  }, 0);
  setTimeout(function () {
    _.removeClass(tmpOverlay, 'aplazame-overlay-show');
  }, isMobile.matches ? 0 : 600 );

  modal.iframe = _.getIFrame({
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'transparent'
      });

  modal.iframe.className = 'aplazame-modal';
  // modal.iframe.style.display = 'none';
  modal.iframe.content = content;

  document.body.appendChild(modal.iframe);
  modal.iframe.src = api.staticUrl + 'widgets/modal/modal.html?v=' + encodeURI(aplazameVersion);
}

_.onMessage('modal', function (e, message) {

  switch( message.event ) {
    case 'open':
      modal.referrer = e.source;
      modal.message = message;
      modal(message.data);
      break;
    case 'opening':
      modal.iframe.style.display = _.remove_style;
      break;
    case 'opened':
      lastScrollTop = _.scrollTop();
      e.source.postMessage({
        aplazame: 'modal',
        event: 'content',
        content: modal.iframe.content
      }, '*');
      break;
    case 'resolved':
      modal.referrer.postMessage({
        aplazame: 'modal',
        event: 'resolved',
        name: modal.message.name,
        value: message.value
      }, '*');
      delete modal.referrer;
      break;
    case 'closing':
      document.body.style.overflow = modal.iframe.overflow;
      _.removeClass(document.body, 'aplazame-blur');
      _.addClass(document.body, 'aplazame-unblur');
      _.addClass(tmpOverlay, 'aplazame-overlay-hide');
      setTimeout(function () {
        cssBlur.hack(false);
        _.removeClass(document.body, 'aplazame-unblur');
      }, isMobile.matches ? 0 : 600 );
      break;
    case 'close':
      setTimeout(function () {
        cssModal.hack(false);
      }, isMobile.matches ? 0 : 100 );
      document.body.removeChild(tmpOverlay);
      _.removeClass(tmpOverlay, 'aplazame-overlay-hide');
      _.scrollTop(lastScrollTop);
      if( modal.iframe ) {
        document.body.removeChild(modal.iframe);

        if( modal.referrer ) {
          modal.referrer.postMessage({
            aplazame: 'modal',
            event: 'dismiss',
            name: modal.message.name
          }, '*');
          delete modal.referrer;
        }

        if( modal.message ) {
          delete modal.message;
        }
        delete modal.iframe;
      }
      break;
  }

});

module.exports = modal;

},{"../../.tmp/aplazame-version":1,"../core/api":55,"../tools/css-hack":69,"../tools/tools":74}],53:[function(require,module,exports){
'use strict';

var apiHttp = require('../core/api-http'),
    _ = require('../tools/tools'),
    $q = require('parole'),
    cache = [],
    requestsCache = {},
    log = require('../tools/log');

function simulator (amount, _options, callback, onError) {

  if( _.isFunction(_options) ) {
    onError = callback;
    callback = _options;
    _options = {};
  } else {
    _options = _options || {};
  }

  var options = {
        params: {
          amount: amount,
          currency: _options.currency || 'EUR'
        }
      },
      hash = amount + ',' + JSON.stringify(options);

  if( requestsCache[hash] ) {
    return requestsCache[hash].then(function (result) {
      (callback || _.noop)( result.choices, result.options );
    });
  }

  if( _options.view ) {
    options.params.view = _options.view;
  }
  if( _options.payday ) {
    options.params.payday = _options.payday;
  }
  if( _options.publicKey ) {
    options.publicKey = _options.publicKey;
  }

  var foundCached = _.find(cache, function (item) {
    return item.amount === amount;
  });

  requestsCache[hash] = ( !_options.noCache && foundCached ? $q.resolve(foundCached) : apiHttp.get('instalment-plan-simulator', options ).then(function (response) {
      var result = {
        amount: amount,
        choices: response.data.choices[0].instalments,
        options: response.data.options,
        response: response
      };
      cache.push(result);

      return result;
    }) )
    .then(function (result) {
      (callback || _.noop)( result.choices, result.options );
      return result;
    }, function (response) {
      if( response.status === 403 ) {
        log('Aplazame[error]: Permiso denegado usando la clave pública', response.config.publicKey,
          'Revisa la configuración de Aplazame, para cualquier duda puedes escribir a hola@aplazame.com');
      } else if( _.key(response, 'data.error.fields.amount.0') ) {
        log('Aplazame[error]: ' + response.data.error.fields.amount[0]);
      } else if( _.key(response, 'data.error.message') ) {
        log('Aplazame[error]: ' + response.data.error.message);
      }
      (onError || _.noop)(response);
    });

  return requestsCache[hash];
}

module.exports = simulator;

},{"../core/api-http":54,"../tools/log":71,"../tools/tools":74,"parole":18}],54:[function(require,module,exports){
'use strict';

var apzVersion = require('../../.tmp/aplazame-version'),
    _ = require('../tools/tools'),
    api = require('./api'),
    http = require('http-browser'),
    renderAccept = _.template.compile('application/vnd.aplazame<% if(sandbox){ %>.sandbox<% } %>.v<%= version %>+json'),
    acceptHeader = function (config) {
      var _api = _.copy(api);
      if( 'version' in config || 'apiVersion' in config ) {
        _api.version = 'version' in config ? config.version : config.apiVersion;
      }
      if( 'sandbox' in config ) {
        _api.sandbox = config.sandbox;
      }
      return renderAccept(_api);
    },
    authorizationHeader = function (config) {
      config.publicKey = config.publicKey || api.publicKey;
      return 'Bearer ' + config.publicKey;
    };

http.config({ headers: { Accept: 'application/json' } });

var apiHttp = {};

_.each(['get', 'delete'], function (method) {
  apiHttp[method] = function (path, options) {
    var url = _.joinPath(api.host, path);
    return http[method](url, _.merge(options, { headers: {
        xAjsVersion: apzVersion,
        accept: acceptHeader,
        authorization: authorizationHeader
      } }) );
  };
});

_.each(['post', 'put', 'patch'], function (method) {
  apiHttp[method] = function (path, data, options) {
    var url = _.joinPath(api.host, path);
    return http[method](url, data, _.merge(options, { headers: {
        xAjsVersion: apzVersion,
        accept: acceptHeader,
        authorization: authorizationHeader
      } }) );
  };
});

module.exports = apiHttp;

},{"../../.tmp/aplazame-version":1,"../tools/tools":74,"./api":55,"http-browser":11}],55:[function(require,module,exports){
'use strict';

module.exports = {
  host: 'https://api.aplazame.com/',
  // host: 'https://api.aplazame.com/',
  staticUrl: 'https://aplazame.com/static/',
  version: 1,
  checkoutVersion: 1,
  sandbox: false
};

},{}],56:[function(require,module,exports){
'use strict';

module.exports = {
  _: require('../tools/tools'),
  init: require('./init'),
  apiGet: require('./api-http').get,
  apiPost: require('./api-http').post,
  apiDelete: require('./api-http')['delete'],
  apiPut: require('./api-http').put,
  version: require('../../.tmp/aplazame-version')
};

},{"../../.tmp/aplazame-version":1,"../tools/tools":74,"./api-http":54,"./init":58}],57:[function(require,module,exports){

var Events = require('azazel');
module.exports = new Events();

},{"azazel":9}],58:[function(require,module,exports){
'use strict';

var api = require('./api'),
    _ = require('../tools/tools'),
    events = require('./events');

function init (options) {
  options = options || {};

  if( typeof options.version === 'string' ) {
    var matchVersion = options.version.match(/^v?(\d)(\.(\d))?$/);

    if( !matchVersion ) {
      throw new Error('version mismatch, should be like \'v1.2\'');
    }

    options.version = Number(matchVersion[1]);

    if( matchVersion[3] !== undefined ) {
      options.checkoutVersion = Number(matchVersion[3]);
    }
  }

  if( typeof options.sandbox === 'string' ) {
    options.sandbox = options.sandbox === 'true';
  }

  _.extend(api, options);

  _.log('aplazame.init', options, api);

  if( api.publicKey ) events.emit('ready');
}

module.exports = init;

},{"../tools/tools":74,"./api":55,"./events":57}],59:[function(require,module,exports){
'use strict';

module.exports = function (_, script) {
  var dataAplazame = script.getAttribute('data-aplazame'),
      options = script.src && (/[?#]/.test(script.src) ? _.deserialize(script.src.match(/(.*?)[?#](.*)/)[2]) : {}) || {};

  if( dataAplazame ) {

    if( /\:/.test(dataAplazame) ) {
      dataAplazame.split(',').forEach(function (part) {
        var keys = part.match(/^([^\:]+)\:(.*)/);
        options[keys[1].trim()] = keys[2].trim();
      });

      if( !options.publicKey ) {
        throw new Error('publicKey missing in data-aplazame');
      }
    } else {
      options.publicKey = dataAplazame;
    }
  }

  if( script.getAttribute('data-api-host') ) {
    options.host = script.getAttribute('data-api-host');
  }

  if( script.getAttribute('data-version') ) {
    options.version = script.getAttribute('data-version');
  }

  if( script.getAttribute('data-sandbox') ) {
    options.sandbox = script.getAttribute('data-sandbox');
  }

  if( script.getAttribute('data-static-url') ) {
    options.staticUrl = script.getAttribute('data-static-url');
  }

  if( script.getAttribute('data-checkout-url') ) {
    options.checkoutUrl = script.getAttribute('data-checkout-url');
  }

  if( script.getAttribute('data-callback') ) {
    options.callback = script.getAttribute('data-callback');
  }

  if( options.sandbox ) {
    options.sandbox = options.sandbox === 'true' || options.sandbox === '1';
  }

  return options;
};

},{}],60:[function(require,module,exports){
'use strict';

module.exports = function (aplazame) {
  var _ = aplazame._,
      $q = require('parole');

  function buttonsLookup (element) {
    element = element || document;
    if( !element.querySelectorAll ) {
      return;
    }
    var btns = element.querySelectorAll('[data-aplazame-button]');

    if( btns.length ) {
      var promises = [];

      _.each(btns, function (btn) {
        var btnId = btn.getAttribute('data-aplazame-button'),
            btnParams = {
              selector: '[data-aplazame-button' + ( btnId ? ('=\"' + btnId + '\"') : '' ) + '], [data-aplazame-button-info' + ( btnId ? ('=\"' + btnId + '\"') : '' ) + ']',
              parent: btn.getAttribute('data-parent'),
              publicKey: btn.getAttribute('data-public-key'),
              amount: btn.getAttribute('data-amount'),
              currency: btn.getAttribute('data-currency') || undefined,
              sandbox: btn.getAttribute('data-sandbox') ? btn.getAttribute('data-sandbox') === 'true' : undefined,
              country: btn.getAttribute('data-country') || undefined
            };

        promises.push( aplazame.button(btnParams) );
      });

      if( promises.length ) {
        return $q.all(promises);
      } else {
        return $q.resolve();
      }
    } else {
      return $q.resolve();
    }
  }

  _.ready(function () {
    buttonsLookup().then(function () {
      _.liveDOM.subscribe(buttonsLookup);
    });
  });

  return buttonsLookup;

};

},{"parole":18}],61:[function(require,module,exports){

module.exports = function (aplazame) {

  var _ = aplazame._,
      log = require('../tools/log');

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
    '[itemtype="http://schema.org/Product"] [itemtype="http://schema.org/Offer"] [itemprop="price"]' // Schema.org
  ],
  cmsQtySelector = [
    'form#product_addtocart_form input[name="qty"]', // magento
    'form#buy_block input[name="qty"]', // prestashop
    '#quantity_wanted', // prestashop
    'form#product-options-form button[data-id=qty]', // custom
    '#main [itemtype="http://schema.org/Product"] form.cart input[name="quantity"]' // woocommerce
  ];

  function matchSelector (selector) {
    return document.querySelector(selector);
  }

  function amountGetter (widgetElement) {
    var priceSelector = widgetElement.getAttribute('data-price'),
        qtySelector = widgetElement.getAttribute('data-qty'),
        autoDiscovered = false;

    if( priceSelector ) {
      // try{
      //   document.querySelector(priceSelector);
      // } catch(err) {
      //   priceSelector = null;
      // }
      if( qtySelector ) {
        try{
          document.querySelector(qtySelector);
        } catch(err) {
          qtySelector = null;
          log(err.message);
        }
      }
    } else {
      priceSelector = _.find(cmsPriceSelector, matchSelector);

      if( priceSelector ) {
        qtySelector = _.find(cmsQtySelector, matchSelector);
        autoDiscovered = true;

        log('auto-discovered price selector', priceSelector, qtySelector);
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
            matched = ( part.toString() === '[object Text]' ? part.data : part.textContent ).match(/[\d,.]+/);

            if( matched ) {
              amount += (amount && !/^[,.]/.test(matched[0]) ? '.' : '') + matched[0];
            }

            part = part.nextSibling;
          }
        } else if( priceElement.textContent ) {
          amount = priceElement.textContent;
        } else if( priceElement.getAttribute('content') ) {
          amount = priceElement.getAttribute('content');
        }
      }

      return amount && _.parsePrice( amount );
    } : function () {
      // return Number( widgetElement.getAttribute('data-amount') );
      return;
    };

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

};

},{"../tools/log":71}],62:[function(require,module,exports){

module.exports = function (aplazame) {

  var _ = aplazame._;

  return function (widget) {

    var widget_el = widget.el,
        iframe = _.getIFrame({ width: '100%', height: '40px' });

    widget_el.appendChild( iframe );
    iframe.src = widget.simulator.static_url + 'widgets/simulator/simulator.html?' + _.now() + '&simulator=' + widget.id;

    _.onMessage('simulator', function (e, message) {
      if( message.simulator_id !== widget.id ) return;

      switch( message.event ) {
        case 'require:data':
          e.source.postMessage({
            event: 'simulator:data',
            data: widget.simulator_data
          }, '*');
          break;
        case 'iframe:resize':
          iframe.style.height = message.data.height + 'px';
          break;
        case 'widget:showInfo':
          widget.showInfo();
          break;
      }
    });

    return {
      render: function () {
        iframe.contentWindow.postMessage({
          event: 'simulator:data',
          data: widget.simulator_data
        }, '*');
      }
    };

  };

};

},{}],63:[function(require,module,exports){

module.exports = function (aplazame) {

  var _ = aplazame._,
      modal = require('../apps/modal'),
      serial = 1,
      api = require('../core/api'),
      widgetRaw = require('../../widgets/simulator/simulator-widget-raw'),
      // widgetV2 = require('../../widgets/simulator/simulator-widget-v2'),
      widgetV3 = require('../../widgets/simulator/simulator-widget-v3'),
      widgetIframe = require('./data-simulator-iframe')(aplazame),
      getWidgetHandler = function (type, version, preferences) {
        if( type === 'raw' ) return widgetRaw;

        if( version === 3 && !preferences.custom_styles || version === 2 ) {
          return widgetIframe;
        }

        return widgetV3;
      },
      amount_tools = require('../tools/amount-price'),
      color_tools = require('../tools/colors');

  function maxInstalments (prev, choice) {
    if( prev === null ) {
      return choice;
    } else {
      return choice.num_instalments > prev.num_instalments ? choice : prev;
    }
  }

  function maxAnnualEquivalent (prev, choice) {
    if( prev === null ) {
      return choice;
    } else {
      return choice.annual_equivalent > prev.annual_equivalent ? choice : prev;
    }
  }

  function Widget (widget_el, options) {
    this.id = serial++;
    this.el = widget_el;
    this.options = options || {};
    this.api = api;
  }

  Widget.prototype.render = function (choices, data) {
    if( !data.widget ) return;

    var widget = this,
        widget_version = data.widget.preferences && Number(data.widget.preferences.version) || 2,
        widget_type = data.widget.type;

    widget.type = widget_type;
    widget.version = widget_version;

    var simulator_data = widget.simulator_data || {
      type: widget_type,
      version: widget_version,
      preferences: data.widget.preferences || {},
      static_url: api.staticUrl,
      custom_styles: data.widget.styles,
      data: data,
      currency: widget.options.currency,
      country: widget.options.country,
    };
    widget.simulator_data = simulator_data;
    simulator_data.choices = choices;

    if( widget.simulator ) {
      simulator_data.choice = (function (choices, num_instalments) {

        var choice = choices[choices.length - 1];
        choices.forEach(function (_choice) {
          if( _choice.num_instalments === num_instalments ) choice = _choice;
        });
        return choice;

      })(choices, widget.simulator.choice.num_instalments);
    } else {
      simulator_data.choice = choices[choices.length - 1];
      // widget.simulator = Object.create(simulator_data);
      widget.simulator = (function () {
        function SimulatorData () {}
        SimulatorData.prototype = simulator_data;
        return new SimulatorData();
      })();
      widget.simulator.$widget = widget;
      widget.simulator.getAmount = amount_tools.getAmount;
      widget.simulator.getPrice = amount_tools.getPrice;
      widget.simulator.lighten = color_tools.lightenHEX;
      widget.simulator.brightness = color_tools.brightness;
    }

    if( !widget.handler ) widget.handler = getWidgetHandler(widget_type, widget_version, data.widget.preferences || {})(widget);
    else {
      if( widget.type !== widget_type || widget_version !== widget.version ) {
        widget.handler.unbind();
        widget.handler = getWidgetHandler(widget_type, widget_version, data.widget.preferences || {})(widget);
      }
    }

    widget.handler.render();
  };

  Widget.prototype.showInfo = function () {
    var widget = this,
        _renderModalInfo = require('../../.tmp/simulator/templates/modal-instalments.tmpl'),
        choices = widget.simulator.choices,
        data = widget.simulator.data;

    modal({
      size: 'lg',
      card: { className: 'has-cta modal-instalments-info _v3' },
      template: _renderModalInfo({
        widget: widget,
        max_choice: choices.reduce(maxInstalments, null),
        max_tae_choice: choices.reduce(maxAnnualEquivalent, null),
        choices: choices,
        data: data,
        static_url: api.staticUrl,
        _options: widget.options,
        currency: widget.options.currency,
        country: widget.options.country,
        getAmount: _.getAmount,
        months: function (m) {
          return m > 1 ? 'meses' : 'mes';
        }
      })
    });
  };

  return Widget;
};

},{"../../.tmp/simulator/templates/modal-instalments.tmpl":6,"../../widgets/simulator/simulator-widget-raw":75,"../../widgets/simulator/simulator-widget-v3":76,"../apps/modal":52,"../core/api":55,"../tools/amount-price":66,"../tools/colors":68,"./data-simulator-iframe":62}],64:[function(require,module,exports){
'use strict';

module.exports = function (aplazame) {

  var $live = require('live-dom'),
      _amountGetter = require('./data-simulator-amount')(aplazame),
      Widget = require('./data-simulator-widget')(aplazame);

  $live('[data-aplazame-simulator]', function (widget_el) {

    var simulator_options = { view: widget_el.getAttribute('data-view') || 'product' },
        widget = new Widget(widget_el, {
          currency:  widget_el.getAttribute('data-currency') || 'EUR',
          country:  widget_el.getAttribute('data-country') || 'ES',
        }),
        amountGetter = _amountGetter(widget_el),
        current_amount = amountGetter() || widget_el.getAttribute('data-amount') && Number( widget_el.getAttribute('data-amount') ),
        current_qty = amountGetter.qtySelector ? ( amountGetter.getQty(amountGetter.qtySelector) || 1 ) : 1,
        qty_interval,
        updateAmount = function (amount, qty) {
          // console.log('updateAmount', amount, qty);
          current_amount = amount;
          if( qty !== undefined ) current_qty = qty;
          widget_el.style.opacity = 0.5;
          aplazame.simulator( amount*( qty === undefined ? current_qty : qty ), simulator_options, function (_choices, _options) {
            if( qty !== undefined && qty !== current_qty ) return;
            if( _options.widget.disabled ) {
              if(qty_interval) clearInterval(qty_interval);
              // _removeListener(onDomChanges);
              $live.off(onDomChanges);
              return;
            }
            widget.render(_choices, _options);
            widget_el.style.opacity = null;
          });
        },
        onDomChanges = function () {
          // if( !document.body.contains(widget_el) ) return _removeListener(onDomChanges);
          if( !document.body.contains(widget_el) ) return $live.off(onDomChanges);

          var amount = amountGetter();

          if( amount !== current_amount ) updateAmount(amount);
        };

    if( amountGetter.qtySelector ) qty_interval = setInterval(function () {
      var qty = amountGetter.getQty(amountGetter.qtySelector) || 1;

      if( qty === current_qty ) return;
      updateAmount(current_amount, qty);
    }, 120);

    // dom_listeners.push(onDomChanges);
    $live(onDomChanges);

    updateAmount(current_amount);

  });

};

},{"./data-simulator-amount":61,"./data-simulator-widget":63,"live-dom":12}],65:[function(require,module,exports){
'use strict';

var log = require('./tools/log');

module.exports = function (func) {
  try{ func(); }
  catch(err) {
    log('[error]', err);
  }
};

},{"./tools/log":71}],66:[function(require,module,exports){

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

    if( tail.length === 1 ) {
      return Number(main + tail + '0');
    }

    if( tail.length !== 2 ) {
      tail += '00';
    }

    return Number(main + tail);
  }

  if( /\d+/.test(price) ) {
    return Number( price.replace(/[^\d]+/g, '') + '00' );
  }
}

module.exports = {
	getAmount: getAmount,
	getPrice: getPrice,
	parsePrice: parsePrice
};

},{}],67:[function(require,module,exports){

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

function hasSelector (selector, rootElement) {
  var splitHas = selector.split(':has(');

  return splitHas.reduce(function (matches, partial) {

    var closePosition = findBubbleClose(partial),
        hasFilter = partial.substr(0, closePosition),
        partialQuery = partial.substr(closePosition + 1).trim();

    if( closePosition === -1 ) {
      throw new Error('malformed selector');
    }

    matches = matches.filter(function (element) {
      return element.querySelector(hasFilter);
    });

    if( partialQuery ) {
      var submatches = [];

      matches.forEach(function (element) {
        [].push.apply(submatches, element.querySelectorAll(partialQuery) );
      });

      return submatches;
    }

    return matches;

  }, [].slice.call( (rootElement || document).querySelectorAll( splitHas.shift() ) ) );
}

function querySelector (selector, rootElement) {
  // 'tr:has(> .row) div:has(span) img'.split(':has(');
  if( !selector ) {
    return [];
  }

  if( !/\:has\(/.test(selector) ) {
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

function scrollTop (value) {
  if( value !== undefined ) {
    document.documentElement.scrollTop = value;
    document.body.scrollTop = value;
  }
  return document.documentElement.scrollTop || document.body.scrollTop;
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
  require('nitro-tools/extend').extend(iframe.style, iframeStyles || {});

  iframe.frameBorder = '0';
  // iframe.style.display = 'none';
  iframe.onload = function () {
    iframe.style.display = remove_style;
  };
  return iframe;
}

var _ = {
  ready: _ready,
  getIFrame: getIFrame,
  writeIframe: writeIframe,
  cssQuery: cssQuery,
  scrollTop: scrollTop,
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

_.addClass = function (element, className) {
  element.classList.add(className);
};

_.removeClass = function (element, className) {
  element.classList.remove(className);
};

module.exports = _;

},{"nitro-tools/extend":14}],68:[function(require,module,exports){


function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
}

function brightness (color) {
  var rgb = hexToRgb(color);
  var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) /1000);
  return o < 100 ? 'dark' : ( o > 230 ? 'light' : 'medium' );
}

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

  return (usePound?'#':'') + (g | (b << 8) | (r << 16)).toString(16);
}

module.exports = {
  hexToRgb: hexToRgb,
  brightness: brightness,
  lightenHEX: lightenHEX,
};

},{}],69:[function(require,module,exports){


var importantCSS = function (css) {
      return css.replace(/;/g, ' !important;').replace(/:([^:;]+?)}/g, function (_matched, value) {
        return ':' + value + ' !important;}';
      }).replace(/(\d+%|from|to){([^}]+)/g, function (_matched, pos, content) {
        return pos + '{' + content.replace(/ !important;/g, ';');
      });
    },
    cssHack = (function () {
      var cache = {},
          hacks = {
            overlay: importantCSS(require('../../.tmp/css-hacks/overlay')),
            blur: importantCSS(require('../../.tmp/css-hacks/blur')),
            logo: importantCSS(require('../../.tmp/css-hacks/logo')),
            modal: importantCSS(require('../../.tmp/css-hacks/modal'))
          };

      return function hack (hackName) {
        if( !cache[hackName] ) {
          var style = document.createElement('style');
          style.setAttribute('rel', 'stylesheet');
          style.setAttribute('type', 'text/css');
          style.textContent = hacks[hackName];

          var enabled = false;

          style.hack = function (enable) {
            enable = enable === undefined || enable;

            if( enable ) {
              if( enabled ) { return; }
              enabled = true;
              document.head.appendChild(style);
            } else {
              if( !enabled ) { return; }
              enabled = false;
              document.head.removeChild(style);
            }
          };

          cache[hackName] = style;
        }
        return cache[hackName];
      };
    })();

module.exports = cssHack;

},{"../../.tmp/css-hacks/blur":2,"../../.tmp/css-hacks/logo":3,"../../.tmp/css-hacks/modal":4,"../../.tmp/css-hacks/overlay":5}],70:[function(require,module,exports){


function _key (o, key, value) {
	key.split('.').forEach(function (k, i, keys) {
		if( i === keys.length - 1 ) {
			o[k] = value;
		} else {
			o[k] = o[k] || {};
			o = o[k];
		}
	});
}

function camelCase (text) {
	return text.replace(/_(\w)/g, function (_matched, letter) {
		return letter.toUpperCase();
	});
}

function deserialize (querystring, decode) {

	var result = {};

	querystring.split('&').forEach(function (keyValue) {
		var matched = keyValue.match(/(.*?)=(.*)/);

		if( !matched ) {
			throw new Error('could not parse ' + keyValue);
		}

		_key(result, camelCase(matched[1]), decode ? decodeURI(matched[2]) : matched[2] );

	});

	return result;

}

module.exports = deserialize;

},{}],71:[function(require,module,exports){


function getErrorObject(){
    try { throw Error('Stack'); } catch(err) { return err; }
}

var history = [],
    start_time = new Date().getTime();

function dumpSingleLog (l) {
  console.log('%c' + new Date + ' (' + (l.time.getTime() - start_time) + 'ms)' , 'color: royalblue; font-weight: bold');
  // console.log.apply(console, l.args);
  console.log.apply(console, [].concat.call(l.args, { stack: l.stack }) );
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
      clean: caller_line.slice(index + 2, caller_line.length)
    },
    stack: err && err.stack.split(/\n/) || []
  };

  history.push(l);
  // dumpSingleLog(l);
}

log.dump = function () {
  history.forEach(dumpSingleLog);
};

log.history = history;

module.exports = log;

},{}],72:[function(require,module,exports){

var messageTarget = {},
    showLogs = false,
    log = require('./log'),
    _remove = function (list, iteratee, this_arg) {
      for( var i = list.length - 1 ; i >= 0 ; i-- ) {
        if( iteratee.call(this_arg || list[i], list[i], i) ) list.splice(i, 1);
      }
    };

window.addEventListener('message', function (e) {
  var message = e.data,
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

module.exports = onMessage;

},{"./log":71}],73:[function(require,module,exports){

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

module.exports = template;

},{}],74:[function(require,module,exports){

var _ = require('vanilla-tools');

_.extend(_,
  require('nitro-tools/lists'),
  require('nitro-tools/path'),
  require('./colors'),
  require('./browser-tools'),
  require('./amount-price'),
  {
    remove_style: / Trident\//.test(navigator.userAgent) ? '' : null,
    template: require('./template'),
    onMessage: require('./message-listener'),
    deserialize: require('./deserialize')
  }
);

_.log = require('./log');
_.noop = function (value) { return value; };

var _now = Date.now || function () { return new Date().getTime(); };

_.debounce = function (fn, debounce_duration) {
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

module.exports = _;

},{"./amount-price":66,"./browser-tools":67,"./colors":68,"./deserialize":70,"./log":71,"./message-listener":72,"./template":73,"nitro-tools/lists":15,"nitro-tools/path":16,"vanilla-tools":26}],75:[function(require,module,exports){

var renderWidget = require('../../.tmp/simulator/templates/widget-raw.tmpl');

module.exports = function (widget) {

  var widget_el = widget.el;

  function onClick () {
    widget.showInfo();
  }

  return {
    render: function () {
      widget_el.innerHTML = renderWidget(widget.simulator);

      widget_el.addEventListener('click', onClick);
    },
    unbind: function () {
      widget_el.removeEventListener('click', onClick);
    }
  };

};

},{"../../.tmp/simulator/templates/widget-raw.tmpl":7}],76:[function(require,module,exports){

var renderWidget = require('../../.tmp/simulator/templates/widget-v3.tmpl');

module.exports = function (widget) {

  var widget_el = widget.el,
      click_el = widget_el,
      remove_style = / Trident\//.test(navigator.userAgent) ? '' : null,
      textSelector = function (selector, text) {
        if( widget_el.querySelector(selector) ) widget_el.querySelector(selector).textContent = text;
      },
      selectNumInstalments = function (num_instalments) {
        widget.simulator.choices.forEach(function (choice) {
          if( choice.num_instalments === num_instalments ) {
            widget.simulator.choice = choice;
            textSelector('.aplazame-widget-price', widget.simulator.getAmount(choice.amount) );
            textSelector('.aplazame-widget-instalments-num', choice.num_instalments );
            textSelector('.aplazame-widget-choice-button-value', choice.num_instalments );
          }
        });
      },
      // inIframe = function  () {
      //   try {
      //     return window.self !== window.top;
      //   } catch (e) {
      //     return true;
      //   }
      // },
      styles_link = document.createElement('link'),
      onReady = function () {
        window.removeEventListener('load', onReady);
        window.removeEventListener('DOMContentLoaded', onReady);

        styles_link.rel = 'stylesheet';
        styles_link.href = widget.simulator.static_url + 'widgets/simulator/widget-v3.css';
        styles_link.onload = function () {
          widget_el.style.display = remove_style;
        };

        document.head.appendChild(styles_link);
      };


  if( !widget.simulator.preferences.custom_styles || widget.type !== 'text' ) {
    widget_el.style.display = 'none';
    if( document.readyState === 'complete' ) onReady();
    else {
      window.addEventListener('load', onReady);
      window.addEventListener('DOMContentLoaded', onReady);
    }
  }

  function onClick () {
    widget.showInfo();
  }

  function selectChange () {
    selectNumInstalments( Number(widget_el.querySelector('select').value) );
  }

  function increaseNumInstalments () {
    selectNumInstalments(widget.simulator.choice.num_instalments + 1);
  }

  function decreaseNumInstalments () {
    selectNumInstalments(widget.simulator.choice.num_instalments - 1);
  }

  function unbind () {
    click_el.removeEventListener('click', onClick);
    if( widget_el.querySelector('select') ) {
      widget_el.querySelector('select').removeEventListener('change', selectChange);
    }
    if( widget_el.querySelector('.aplazame-widget-choice-button-increase') ) {
      widget_el.querySelector('.aplazame-widget-choice-button-increase').removeEventListener('click', increaseNumInstalments);
    }
    if( widget_el.querySelector('.aplazame-widget-choice-button-decrease') ) {
      widget_el.querySelector('.aplazame-widget-choice-button-decrease').removeEventListener('click', decreaseNumInstalments);
    }
  }

  var handler = {
    render: function () {
      console.log('widget', widget);
      unbind();
      var type = widget.simulator.type;
      widget_el.innerHTML = renderWidget(widget.simulator);

      if( type === 'select' ) {
        return widget_el.querySelector('select').addEventListener('change', selectChange);
      }

      if( type === 'big-button' ) {
        widget_el.querySelector('.aplazame-widget-choice-button-decrease').addEventListener('click', decreaseNumInstalments);
        widget_el.querySelector('.aplazame-widget-choice-button-increase').addEventListener('click', increaseNumInstalments);
        return;
      }

      if( type === 'button' ) {
        click_el = widget_el.querySelector('.aplazame-widget-instalments');
      }

      click_el.addEventListener('click', onClick);
    },
    detach: function () {
      document.head.removeChild(styles_link);
      unbind();
    }
  };

  return handler;

};

},{"../../.tmp/simulator/templates/widget-v3.tmpl":8}]},{},[46]);
