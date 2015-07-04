#!/usr/bin/env node

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

        if( cmd.test(true) ) {
          cmd.build();
        }

        watch('src', function(filename) {
          console.log(filename.yellow, 'changed');
          if( cmd.test(true) ) {
            cmd.build();
          }
          console.log('\npress Ctrl-C to stop'.yellow, '\n', 'watching...'.blue);
        });

        console.log('\npress Ctrl-C to stop'.yellow, '\n', 'watching...'.blue);

      },
      test: function () {
        cmd.jshint();
      },
      jshint: function (noExit) {
        var JSHINT = require('jshint').JSHINT,
            jshintrc = JSON.parse(file.read('.jshintrc')),
            errorsLog = '';

        glob.sync('src/{,**/}*.js').concat(glob.sync('tests/{,**/}*.js')).forEach(function (fileName) {
          JSHINT( file.read(fileName).split(/\n/) );
          var res = JSHINT.data()

          if( res.errors ) {
            errorsLog += fileName.cyan + '\n';
            res.errors.forEach(function (err) {
              if( err === null ) {
                console.log('err', err);
                return;
              }
              errorsLog += '  line ' + (err.line + '').yellow + ', col ' + (err.character + '').cyan + ', ' + err.reason.yellow + '\n';
            });
          }
        });

        if( errorsLog ) {
          console.log( '\nJSHINT ERRORS'.red + '\n', errorsLog );
          if( !noExit ) {
            process.exit(1);
          }
        } else {
          console.log('\nJSHINT PASSED\n'.green);
        }

        return !errorsLog;
      }
    };

process.argv[2] && cmd[process.argv[2]] && cmd[process.argv[2]]();
