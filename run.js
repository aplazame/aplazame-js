
'use strict';

function htmlToJs (html) {
  return html.replace(/\n/g, '').replace(/\"/g, '\\\"').replace(/\>\s+\</g, '><');
}

var colors = require('colors'),
    fs = require('fs'),
    path = require('path'),
    cwd = function () {
      var paths = [process.cwd()];
      [].push.apply(paths, arguments);
      return path.join.apply(null, paths );
    },
    cmd = {
      build: function () {
        var UglifyJS = require("uglify-js"),
            aplazameMin = UglifyJS.minify("src/main.js").code,
            iframeSrc = fs.readFileSync('src/iframe.html', { encoding: 'utf8' });

        aplazameMin = aplazameMin.replace('::iframeHtml::', htmlToJs(iframeSrc) );
        fs.writeFileSync('aplazame.js', aplazameMin );

        console.log('aplazame.js', 'updated'.green);
      },
      watch: function () {
        var watch = require('node-watch');

        watch('src', function(filename) {
          console.log(filename.yellow, 'changed');
          cmd.build();
        });

        console.log('watching...'.blue, 'press Ctrl-C to stop'.yellow);
      },
      test: function () {

      }
    };

process.argv[2] && cmd[process.argv[2]] && cmd[process.argv[2]]();
