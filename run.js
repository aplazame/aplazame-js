#!/usr/bin/env node

'use strict';

function htmlToJs (html) {
  return html.replace(/\n/g, '').replace(/\"/g, '\\\"').replace(/\>\s+\</g, '><');
}

var colors = require('colors'),
    fs = require('fs'),
    path = require('path'),
    glob = require('glob');

var cwd = function () {
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
    // settings = yaml.safeLoad( file.read('settings.yml') ),
    cmd = {
      build: function () {
        cmd.jshint();

        file.write('aplazame.min.js', require("uglify-js").minify('aplazame.js').code );
        console.log('aplazame.min.js', 'updated'.green);
      },
      live: function () {
        cmd.watch();

        var livereload = require('livereload'),
            server = livereload.createServer({ port: 54321 });
        server.watch(__dirname);
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
        return cmd.jshint();
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
      },
      demo: function () {
        cmd.build();
        var server = require('nitro-server').start({
          root: 'demo',
          openInBrowser: true,
          dirAlias: {
            'repo': '.'
          },
          keepalive: false
        });

        cmd.live();

        server.close();
      }
    };

process.argv[2] && cmd[process.argv[2]] && cmd[process.argv[2]]();
