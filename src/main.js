
(function (root) {
  'use strict';

  function button () {}

  var iframeHtml = '::iframeHtml::',
      iframeStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      };

  function checkout () {
    var iframe = document.createElement('iframe');
    iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(iframeHtml);
    for( var key in iframeStyle ) {
      iframe.style[key] = iframeStyle[key];
    }
    iframe.frameBorder = '0';
    document.body.appendChild(iframe);
  }

  root.aplazame = {
    checkout: checkout,
    button: button
  };

})(this);
