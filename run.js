#!/usr/bin/env node

'use strict';

function htmlToJs (html) {
  return html.replace(/\n/g, '').replace(/\"/g, '\\\"').replace(/\>\s+\</g, '><');
}

function noop () {}

function ShellCmd(cmd, args, cb, end) {
    var spawn = require('child_process').spawn,
        child = spawn(cmd, args || []),
        me = this;

    child.stdout.on('data', function (buffer) { (cb || noop)(me, buffer) });
    child.stdout.on('end', end || noop);
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
      readJSON: function () {
        return JSON.parse( file.read.apply(this, arguments) );
      },
      write: function (paths, text) {
        return fs.writeFileSync( typeof paths === 'string' ? paths : path.join(paths), text, { encoding: 'utf8' });
      },
      writeJSON: function (paths, data) {
        return file.write( paths, JSON.stringify(data, null, '\t') );
      }
    },
    // settings = yaml.safeLoad( file.read('settings.yml') ),
    cmd = {
      build: function () {
        cmd.jshint();

        file.write('aplazame.min.js', require("uglify-js").minify('aplazame.js').code );
        console.log('aplazame.min.js', 'updated'.green);
      },
      pkgVersion: function () {
        return process.stdout.write( file.readJSON('package.json').version );
      },
      increaseVersion: function () {
        var pkg = file.readJSON('package.json'),
            version = pkg.version.split('.').map(function (n) { return Number(n); }),
            bower = file.readJSON('bower.json');

        version[2] += 1;
        version = version.join('.');

        pkg.version = version;
        bower.version = version;

        file.writeJSON('package.json', pkg );
        file.writeJSON('bower.json', bower );
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
          require('child_process').exec('make build', [], function (err, stdout, stderr) {
      				if( err ) {
      					console.warn(err);
      				}
          }).on('data', function (data) {
            process.stdout.write(data);
          });
          console.log('\npress Ctrl-C to stop'.yellow, '\n', 'watching...'.blue);
        });

        console.log('\npress Ctrl-C to stop'.yellow, '\n', 'watching...'.blue);

      },
      test: function () {
        return cmd.jshint();
      },
      jshint: function (noExit) {
        var JSHINT = require('jshint').JSHINT,
            jshintrc = file.readJSON('.jshintrc'),
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

        require('less').render( file.read('demo/demo.less'), function (e, output) {
             file.write('demo/demo.css', output.css );
             console.log('demo/demo.css', 'updated'.green);

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
          });
      }
    };

process.argv[2] && cmd[process.argv[2]] && cmd[process.argv[2]]();
