
'use strict';

function htmlToJs (html) {
  return html.replace(/\n/g, '').replace(/\"/g, '\\\"').replace(/\>\s+\</g, '><');
}

var fs = require('fs'),
    UglifyJS = require("uglify-js"),
    aplazameMin = UglifyJS.minify("src/main.js").code,
    iframeSrc = htmlToJs( fs.readFileSync('src/iframe.html', { encoding: 'utf8' }) );

aplazameMin = aplazameMin.replace('::iframeHtml::', iframeSrc );
fs.writeFileSync('aplazame.js', aplazameMin );
