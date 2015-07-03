
'use strict';

function htmlToJs (html) {
  return html.replace(/\n/g, '').replace(/\"/g, '\\\"').replace(/\>\s+\</g, '><');
}

var colors = require('colors'),
    fs = require('fs'),
    path = require('path'),
    glob = require('glob'),
    cwd = function () {
      var paths = [process.cwd()];
      [].push.apply(paths, arguments);
      return path.join.apply(null, paths );
    },
    file = {
      read: function () {
        return fs.readFileSync( path.join.apply(null, arguments), { encoding: 'utf8' });
      },
      write: function (paths, text) {
        return fs.writeFileSync( typeof paths === 'string' ? paths : path.join(paths), text, { encoding: 'utf8' });
      }
    },
    cmd = {
      build: function () {
        var UglifyJS = require("uglify-js"),
            aplazameMin = UglifyJS.minify("src/main.js").code,
            iframeSrc = file.read('src/iframe.html');

        aplazameMin = aplazameMin.replace('::iframeHtml::', htmlToJs(iframeSrc) );
        file.write('aplazame.js', aplazameMin );

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
        var JSHINT = require('jshint').JSHINT,
            jshintrc = JSON.parse(file.read('.jshintrc'));

        // console.log(JSHINT);

        glob.sync('src/{,**/}*.js').forEach(function (fileName) {
          JSHINT( file.read(fileName).split(/\n/) );
          var res = JSHINT.data()

          // console.log(fileName, JSHINT.data());
          if( res.errors ) {
            console.log( fileName.cyan );
            res.errors.forEach(function (err) {
              console.log('line ' + (err.line + '').yellow + ', col ' + err.character + ', ' + err.reason.yellow );
            });
          }
        });

        // console.log('files', glob.sync('src/{,**/}*.js') );
      }
    };

process.argv[2] && cmd[process.argv[2]] && cmd[process.argv[2]]();
