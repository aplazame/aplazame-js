
(function (root) {
  'use strict';



  function button () {}

  var iframeHtml = '::iframeHtml::';

  function checkout () {
    var iframe = document.createElement('iframe');
    iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(iframeHtml);
  }

  root.aplazame = {
    checkout: checkout
  };

})(this);
