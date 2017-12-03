(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function anonymous(obj
/**/) {
var p=[],print=function(){p.push.apply(p,arguments);};with(obj){ try{p.push('<div class="aplazame-widget-button align-', preferences.align ,'">   <button type="button" data-action="showInfo"           class="', brightness(preferences.bg_color) ,' ', preferences.branding ? '' : 'no-logo' ,'"           style=" background: ', preferences.bg_color ,'; color: ', preferences.text_color ,'; fill: ', preferences.text_color ,'">      <div class="align-wrapper">       '); if( preferences.branding ) { p.push('         <div class="logo">           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" height="100%" width="100%" version="1.1">             <path class="dropshadow" style="baseline-shift:baseline;block-progression:tb;color:#000000;direction:ltr;text-indent:0;text-align:start;enable-background:accumulate;text-transform:none;" d="m49.45,1.9068a5.8933,5.8933,0,0,0,-0.55244,0.12276,5.8933,5.8933,0,0,0,-0.3683,0.06138,5.8933,5.8933,0,0,0,-0.18415,0.06138,5.8933,5.8933,0,0,0,-0.12276,0.06138,5.8933,5.8933,0,0,0,-1.4732,0.67521,5.8933,5.8933,0,0,0,-0.12276,0.12277,5.8933,5.8933,0,0,0,-2.3325,3.3147l-13.75,32.962c3.3033,2.0483,6.9615,3.6193,10.865,4.5423l8.4708-20.256,9.2688,23.694c-2.9404,0.67972-5.9953,1.0435-9.146,1.0435-13.813,0-25.916-6.9098-33.208-17.433a5.7487,5.7487,0,0,0,-5.464,-2.516,5.7487,5.7487,0,0,0,-3.9897,9.084c9.3636,13.512,25.015,22.343,42.661,22.343,4.6171,0,9.1087-0.64524,13.381-1.7801l14.118,36.032a5.8933,5.8933,0,1,0,10.927,-4.358l-14.057-35.909c7.3552-3.8999,13.645-9.5362,18.353-16.328a5.7553,5.7553,0,0,0,-9.4529,-6.5679c-3.4226,4.9365-7.9036,9.0865-13.136,12.092l-14.424-36.89a5.8933,5.8933,0,0,0,-0.43,-0.9207,5.8933,5.8933,0,0,0,-0.061,-0.1228,5.8933,5.8933,0,0,0,-0.553,-0.8594,5.8933,5.8933,0,0,0,-0.061,-0.1227,5.8933,5.8933,0,0,0,-0.307,-0.3069,5.8933,5.8933,0,0,0,-0.123,-0.1228,5.8933,5.8933,0,0,0,-0.307,-0.3069,5.8933,5.8933,0,0,0,-0.122,-0.1228,5.8933,5.8933,0,0,0,-0.369,-0.2455,5.8933,5.8933,0,0,0,-0.614,-0.3683,5.8933,5.8933,0,0,0,-0.429,-0.1842,5.8933,5.8933,0,0,0,-0.123,-0.0613,5.8933,5.8933,0,0,0,-0.43,-0.1228,5.8933,5.8933,0,0,0,-0.552,-0.1842,5.8933,5.8933,0,0,0,-1.1663,-0.12276,5.8933,5.8933,0,0,0,-0.61383,0zm-26.027,54.508-4.603,11.048a5.8933,5.8933,0,1,0,10.865,4.5423l4.6037-11.11c-3.8107-1.1281-7.4419-2.602-10.865-4.4809z"/>            <path style="baseline-shift:baseline;block-progression:tb;color:#000000;direction:ltr;text-indent:0;text-align:start;enable-background:accumulate;text-transform:none;" d="m49.45,1.9068a5.8933,5.8933,0,0,0,-0.55244,0.12276,5.8933,5.8933,0,0,0,-0.3683,0.06138,5.8933,5.8933,0,0,0,-0.18415,0.06138,5.8933,5.8933,0,0,0,-0.12276,0.06138,5.8933,5.8933,0,0,0,-1.4732,0.67521,5.8933,5.8933,0,0,0,-0.12276,0.12277,5.8933,5.8933,0,0,0,-2.3325,3.3147l-13.75,32.962c3.3033,2.0483,6.9615,3.6193,10.865,4.5423l8.4708-20.256,9.2688,23.694c-2.9404,0.67972-5.9953,1.0435-9.146,1.0435-13.813,0-25.916-6.9098-33.208-17.433a5.7487,5.7487,0,0,0,-5.464,-2.516,5.7487,5.7487,0,0,0,-3.9897,9.084c9.3636,13.512,25.015,22.343,42.661,22.343,4.6171,0,9.1087-0.64524,13.381-1.7801l14.118,36.032a5.8933,5.8933,0,1,0,10.927,-4.358l-14.057-35.909c7.3552-3.8999,13.645-9.5362,18.353-16.328a5.7553,5.7553,0,0,0,-9.4529,-6.5679c-3.4226,4.9365-7.9036,9.0865-13.136,12.092l-14.424-36.89a5.8933,5.8933,0,0,0,-0.43,-0.9207,5.8933,5.8933,0,0,0,-0.061,-0.1228,5.8933,5.8933,0,0,0,-0.553,-0.8594,5.8933,5.8933,0,0,0,-0.061,-0.1227,5.8933,5.8933,0,0,0,-0.307,-0.3069,5.8933,5.8933,0,0,0,-0.123,-0.1228,5.8933,5.8933,0,0,0,-0.307,-0.3069,5.8933,5.8933,0,0,0,-0.122,-0.1228,5.8933,5.8933,0,0,0,-0.369,-0.2455,5.8933,5.8933,0,0,0,-0.614,-0.3683,5.8933,5.8933,0,0,0,-0.429,-0.1842,5.8933,5.8933,0,0,0,-0.123,-0.0613,5.8933,5.8933,0,0,0,-0.43,-0.1228,5.8933,5.8933,0,0,0,-0.552,-0.1842,5.8933,5.8933,0,0,0,-1.1663,-0.12276,5.8933,5.8933,0,0,0,-0.61383,0zm-26.027,54.508-4.603,11.048a5.8933,5.8933,0,1,0,10.865,4.5423l4.6037-11.11c-3.8107-1.1281-7.4419-2.602-10.865-4.4809z"/>           </svg>         </div>       '); } p.push('        <div class="text-wrapper">          <span class="from">Desde&nbsp;</span><!--          --><strong class="amount"><!--           '); if( currency === 'EUR' )  { p.push('           --><span class="price">', getAmount(choice.amount, ',', '.') ,'</span><!--           --><span class="currency">&nbsp;€</span><!--           '); } else { p.push('           --><span class="currency">$</span><!--           --><span class="price">', getAmount(choice.amount, '.', ',') ,'</span><!--           '); } p.push('         --></strong><!--          --><sub class="per-month">/mes</sub>        </div>     </div>    </button> </div>'); }catch(err){console.log('error', err);} }return p.join('');
};
},{}],2:[function(require,module,exports){
module.exports = function anonymous(obj
/**/) {
var p=[],print=function(){p.push.apply(p,arguments);};with(obj){ try{p.push('<div class="aplazame-widget aplazame-styles aplazame-widget--type-', type ,' aplazame-widget--align-', preferences.align || 'center' ,''); if( preferences.custom_styles ){ p.push(' aplazame-widget--custom-styles'); } p.push('">    <div class="aplazame-widget-container">    '); if( preferences.smart_title ) { p.push('     <div class="aplazame-widget-smart-title">'); if( choice.annual_equivalent === 0 ) { p.push('¡Consíguelo sin intereses!'); } else { p.push('Págalo a plazos'); } p.push('</div>   '); } p.push('    <div class="aplazame-widget-instalments" '); if( type !== 'select' && type !== 'big-button' ){ p.push(' data-action="showInfo"'); } p.push('>      '); if( type === 'select' ){ p.push('     <svg class="aplazame-widget-select-icon" version="1.1" viewBox="0 0 8 12" height="12" width="8">       <g fill="none" fill-opacity="1" fill-rule="evenodd" stroke="currentColor" stroke-width="1" stroke-opacity="1" transform="translate(0.7521047,0.5)">         <polyline points="0 2.5 3.21428571 0 6.5 2.5" />         <polyline points="0 11 3.21428571 8.5 6.5 11" transform="matrix(1,0,0,-1,0,19.5)" />       </g>     </svg>      <select>       '); for ( var i = 0, n = choices.length ; i < n ; i++ ) { p.push('       <option value="', choices[i].num_instalments ,'" ', choices[i] == choice ? 'selected' : '' ,'><span class="apz-price_widget-amount">', getPrice(choices[i].amount, currency) ,'/mes</span> en ', choices[i].num_instalments ,' ', choices[i].num_instalments > 1 ? 'cuotas' : 'cuota' ,'</option>       '); } p.push('     </select>     '); } p.push('      <span class="aplazame-widget-from">desde&nbsp;</span><!--     --><strong class="aplazame-widget-amount"><!--       '); if( currency === 'EUR' )  { p.push('       --><span class="aplazame-widget-price">', getAmount(choice.amount, ',', '.') ,'</span><!--       --><span class="aplazame-widget-currency">€</span><!--       '); } else { p.push('       --><span class="aplazame-widget-currency">$</span><!--       --><span class="aplazame-widget-price">', getAmount(choice.amount, '.', ',') ,'</span><!--       '); } p.push('     --></strong><!--     --><sub class="aplazame-widget-per-month">/mes</sub><!--     --><span class="aplazame-widget-instalments-wrapper"><!--       --><span class="aplazame-widget-instalments-pre-in">&nbsp;en&nbsp;</span><!--       --><em class="aplazame-widget-instalments-num">', choice.num_instalments ,'</em><!--       --><span class="aplazame-widget-instalments-post-instalments">&nbsp;cuotas</span><!--     --></span>    </div>    '); if( type === 'big-button' || preferences.show_instalments_buttons ){ p.push('   <div class="aplazame-widget-choice-buttons-wrapper">     <span class="aplazame-widget-choice-text-in">en&nbsp;</span>     <span class="aplazame-widget-choice-button">       <button type="button" class="aplazame-widget-choice-button-decrease" data-action="decreaseNumInstalments">         <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">           <path d="m 3,6 h 6" stroke="currentColor" stroke-width="1"/>         </svg>       </button>       <div class="aplazame-widget-choice-button-value">', choice.num_instalments ,'</div>       <button type="button" class="aplazame-widget-choice-button-increase" data-action="increaseNumInstalments">         <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">           <path d="m 3,6 h 6" stroke="currentColor" stroke-width="1"/>           <path d="m 6,3 v 6" stroke="currentColor" stroke-width="1"/>         </svg>       </button>     </span>     <span class="aplazame-widget-choice-text-instalments">&nbsp;cuotas</span>   </div>   '); } p.push('    '); if( preferences.branding ){ p.push('   <div class="aplazame-widget-branding">     <span class="aplazame-widget-with">con&nbsp;</span>     <svg width="77" height="20" viewBox="0 0 77 20" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fill-rule="evenodd"><path d="M28 11.2v-.6h-1.2c-1 0-1.4.2-1.4.8 0 .5.4.8 1 .8 1 0 1.5-.3 1.5-1m1.8 1.4c0 .4-.3.7-.7.7-.2 0-.4 0-.6-.3l-.2-.3c-.4.4-1 .7-2 .7-1.4 0-2.2-.7-2.2-2s1-2 2.6-2H28v-.2c0-.7-.5-1.2-1.5-1.2-.4 0-1 .2-1 .3H25c-.4 0-.6-.2-.6-.5 0-.2 0-.5.3-.6.4-.2 1-.4 2-.4 1.8 0 2.6 1 2.6 2.4v2c0 .4 0 .5.2.7l.2.2v.4M35 11.2v-1-1.3c-.3-.7-.7-1-1.3-1-.5 0-1 .3-1.2 1V11c.2.6.7 1 1.2 1 .6 0 1-.4 1.2-1M31 15V7.5c0-.5.2-.8.7-.8.4 0 .6.3.7.7.3-.4.8-.7 1.7-.7 1.2 0 2 .6 2.3 1.6.2.5.2 1 .2 1.7 0 .8 0 1.3-.2 1.8-.3 1-1 1.6-2.2 1.6-.8 0-1.3-.3-1.6-.8V15c0 .4-.3.7-.7.7-.5 0-.8-.3-.8-.8M39.5 13.3c-1.2 0-1.7-.6-1.7-1.8V5c0-.5.3-.8.7-.8.5 0 .8.3.8.8v6.4c0 .4 0 .6.5.6.4 0 .6.3.6.7 0 .3-.2.6-.7.6h-.2zM45 11.2v-.6h-1c-1 0-1.4.2-1.4.8 0 .5.4.8 1 .8 1 0 1.5-.3 1.5-1m2 1.4c0 .4-.4.7-.8.7-.2 0-.4 0-.6-.3l-.2-.3c-.4.4-1 .7-2 .7-1.4 0-2.2-.7-2.2-2s1-2 2.5-2H45v-.2c0-.7-.3-1.2-1.3-1.2-.5 0-1 .2-1.2.3H42c-.2 0-.5-.2-.5-.5 0-.2 0-.5.4-.6.3-.2 1-.4 2-.4 1.7 0 2.5 1 2.5 2.4V12l.3.2.2.4M48.5 13.3c-.4 0-.7-.3-.7-.7 0-.3.2-.5.5-1l3-3.4h-2.6c-.4 0-.7-.3-.7-.7 0-.3.3-.6.7-.6h3.7c.4 0 .7.2.7.5s0 .6-.4 1l-3 3.4h2.8c.4 0 .7.2.7.6 0 .4-.2.7-.6.7h-4zM58 11.2v-.6h-1.2c-1 0-1.4.2-1.4.8 0 .5.4.8 1 .8 1 0 1.5-.3 1.5-1m1.7 1.4c0 .4-.3.7-.7.7-.3 0-.5 0-.6-.3l-.2-.3c-.4.4-1 .7-2 .7-1.4 0-2.2-.7-2.2-2s1-2 2.5-2h1.3v-.2c0-.7-.3-1.2-1.3-1.2-.5 0-1 .2-1.2.3H55c-.4 0-.7-.2-.7-.5 0-.2 0-.5.4-.6.4-.2 1-.4 2-.4 1.7 0 2.6 1 2.6 2.4V12l.3.2v.4M60.8 7.6c0-.5.3-.8.8-.8.4 0 .7.3.7.7.3-.4 1-.7 1.7-.7.8 0 1.4.3 1.8.8.5-.5 1-.8 2-.8 1.5 0 2.3 1 2.3 2.3v3.5c0 .5-.2.8-.6.8-.5 0-.8-.3-.8-.8v-3c0-1-.4-1.4-1.2-1.4-.7 0-1.2.6-1.2 1.5v3c0 .5-.3.8-.7.8-.5 0-.8-.3-.8-.8v-3c0-1-.4-1.4-1.2-1.4-.7 0-1.2.6-1.2 1.5v3c0 .5-.3.8-.7.8-.5 0-.8-.3-.8-.8v-5zM75.4 8.8c-.2-.5-.6-.8-1.2-.8s-1 .3-1.3.8l-.2.6h2.6v-.6m-3.8 2.8c-.2-.4-.3-1-.3-1.5 0-.6 0-1 .2-1.5.4-1 1.4-1.7 2.6-1.7 1.5 0 2.4.6 2.8 1.7L77 10c0 .3-.2.6-.5.6H73h-.2v.5c.3.7.8 1 1.6 1 .5 0 1 0 1.3-.4l.5-.2c.4 0 .6.3.6.7 0 .3 0 .5-.3.6-.5.5-1.2.8-2.3.8-1.3 0-2.3-.7-2.6-1.8M18 7.3c.4-.6.3-1.3-.2-1.6-.6-.4-1.3-.2-1.6.3-.8 1-1.8 2-3 2.6l-3-7.8c-.2-.4-.6-.7-1-.7-.5 0-1 .3-1 .8L5 7.5l2 1 2-4.2 2 5.2-2 .2C6 9.7 3.6 8.4 2 6 1.7 5.6 1 5.5.4 6 0 6 0 6.8.2 7.4c2 3 5.4 4.6 9 4.6 1 0 1.8 0 2.8-.4l3 7.6c.2.6.8 1 1.4.6.6-.2 1-1 .7-1.4l-3-7.6c1.7-.8 3-2 4-3.5zM2.8 13.7c-.3.6 0 1.3.6 1.5.6.3 1.2 0 1.5-.6l.8-2c-.7-.2-1.4-.5-2-1l-1 2z"/></g></svg>   </div>   '); } p.push('    </div>  </div>  '); if( !preferences.custom_styles || type !== 'text' ){ p.push(' <style rel="stylesheet">   .aplazame-widget.aplazame-styles { color: ', preferences.text_color ,'; }    .aplazame-widget.aplazame-styles.aplazame-widget--type-big-button .aplazame-widget-container,   .aplazame-widget.aplazame-styles.aplazame-widget--type-button .aplazame-widget-instalments,   .aplazame-widget.aplazame-styles.aplazame-widget--type-select .aplazame-widget-instalments {     color: ', preferences.btn_text_color ,';   }    .aplazame-widget.aplazame-styles.aplazame-widget--type-big-button .aplazame-widget-container,   .aplazame-widget.aplazame-styles.aplazame-widget--type-button .aplazame-widget-instalments::before,   .aplazame-widget.aplazame-styles.aplazame-widget--type-select .aplazame-widget-instalments::before {     background-color: ', preferences.btn_bg_color ,';   }   .aplazame-widget.aplazame-styles.aplazame-widget--type-button .aplazame-widget-instalments:hover::before,   .aplazame-widget.aplazame-styles.aplazame-widget--type-select .aplazame-widget-instalments:hover::before {     background-color: ', lighten(preferences.btn_bg_color, -5) ,';   } </style> '); } p.push(' '); if( preferences.custom_styles ){ p.push(' <style rel="stylesheet">', custom_styles ,'</style> '); } p.push(''); }catch(err){console.log('error', err);} }return p.join('');
};
},{}],3:[function(require,module,exports){

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

},{}],4:[function(require,module,exports){


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

},{}],5:[function(require,module,exports){

var renderWidget = require('../../.tmp/simulator/templates/widget-v2.tmpl');

module.exports = function (widget) {

  var widget_el = widget.el;

  function onClick () {
    widget.showInfo();
  }

  return {
    render: function () {
      widget_el.innerHTML = renderWidget(widget.simulator);

      (widget_el.querySelector('button') || widget_el).addEventListener('click', onClick);
    },
    unbind: function () {
      widget_el.removeEventListener('click', onClick);
    }
  };

};

},{"../../.tmp/simulator/templates/widget-v2.tmpl":1}],6:[function(require,module,exports){

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

},{"../../.tmp/simulator/templates/widget-v3.tmpl":2}],7:[function(require,module,exports){

var message_listeners = {}, no_listeners = [], simulator_id = -1,
    widgetV2 = require('./simulator-widget-v2'),
    widgetV3 = require('./simulator-widget-v3'),
    amount_tools = require('../../src/tools/amount-price'),
    color_tools = require('../../src/tools/colors'),
    widget = {
      id: simulator_id,
      el: document.body.querySelector('#main') || document.body,
      showInfo: function () {
        postMessage('widget:showInfo');
      }
    },
    widget_version,
    widget_type,
    widget_handler;

if( location.href.match(/[\?&]simulator=(\w+?)(\&|$)/) ) {
  simulator_id = Number(location.href.match(/[\?&]simulator=(\w+?)(\&|$)/)[1]);
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

  if( !widget_handler || widget_version !== simulator_data.version || widget_type !== simulator_data.type ) {
    widget_handler = simulator.preferences.version === 3 ? widgetV3(widget) : widgetV2(widget);
    widget_type = simulator_data.type;
    widget_version = simulator_data.version;
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

},{"../../src/tools/amount-price":3,"../../src/tools/colors":4,"./simulator-widget-v2":5,"./simulator-widget-v3":6}]},{},[7]);
