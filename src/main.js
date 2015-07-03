
(function (root) {
  'use strict';

  var iframeHtml = '::iframeHtml::',
      iframeStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      };

  // utility functions

  var arrayShift = [].shift;
  function extend () {
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
  }

  function html (url, options) {
    options = options || {};
    options.headers = options.headers || {};

    var request = null,
        on = { fulfill: [], reject: [] };

    try { // Firefox, Opera 8.0+, Safari
        request = new XMLHttpRequest();
    } catch (e) { // Internet Explorer
        try { request = new ActiveXObject("Msxml2.XMLHTTP"); }
        catch (e) { request = new ActiveXObject("Microsoft.XMLHTTP"); }
    }
    if( request === null ) { throw "Browser does not support HTTP Request"; }

    request.open( options.method.toUpperCase(), url );

    for( key in options.headers ) {
        request.setRequestHeader( toTitleSlug(key), options.headers[key] );
    }

    request.onreadystatechange = function(){
        if( request.readyState === 'complete' || request.readyState === 4 ) {

        }
    };

    return {
      success: function (onFulfill, onReject) {
        on.fulfill.push(onFulfill);
        onReject instanceof Function && on.reject.push(onreject);
      },
      error: function (onReject) {
        on.reject.push(onReject);
      }
    };
  };

  // aplazame methods

  function button () {}

  function checkout () {
    var iframe = document.createElement('iframe');
    iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(iframeHtml);
    extend(iframe.style, iframeStyle);
    iframe.frameBorder = '0';
    document.body.appendChild(iframe);
  }

  // globalizing aplazame object

  root.aplazame = {
    checkout: checkout,
    button: button
  };

})(this);
