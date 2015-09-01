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

function timestamp () {
  return new Date().getTime();
}

function timingSync ( dest, fn ) {
  if( dest instanceof Function ) {
    fn = dest;
    dest = null;
  }

  var start = timestamp();
  fn();
  var elapsedTime = timestamp() - start;
  if( dest ) {
    console.log('\n' + dest, 'updated'.green, ( elapsedTime + 'ms' ).yellow );
  }
  return timestamp() - start;
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
    sass = function (src, dest) {
      timingSync(dest, function () {
        var result = require('node-sass').renderSync({ file: src });
        fs.writeFileSync(dest, result.css);
      });
    },
    // settings = yaml.safeLoad( file.read('settings.yml') ),
    cmd = {
      build: function () {
        cmd.jshint();

        timingSync('aplazame.js', function () {
          require('shelljs').exec('make browserify');
        });

        timingSync('aplazame.min.js', function () {
          file.write('dist/aplazame.min.js', require("uglify-js").minify('dist/aplazame.js').code );
        });
      },
      sass: function (target) {
        switch( target ) {
          case 'demo':
            sass('demo/demo.scss', 'demo/demo.css');
            break;
        }
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

        server.watch( [cwd('dist'), cwd('demo')] );
      },
      watch: function () {
        var watch = require('node-watch');

        cmd.test();

        watch('demo', function(filename) {
          console.log('[demo]'.cyan, filename.yellow, 'changed');
          if( /.(sass|scss)$/.test(filename) ) {
            cmd.sass('demo');
          } else {
            return;
          }
          console.log('\npress Ctrl-C to stop'.yellow, '\n', 'watching...\n'.blue);
        });

        watch('src', function(filename) {
          console.log('[src]'.cyan, filename.yellow, 'changed');
          cmd.build();
          console.log('\npress Ctrl-C to stop'.yellow, '\n', 'watching...\n'.blue);
        });

        console.log('\npress Ctrl-C to stop'.yellow, '\n', 'watching...\n'.blue);

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

        cmd.sass('demo');

        var server = require('nitro-server').start({
         root: 'demo',
         openInBrowser: true,
         dirAlias: {
           'dist': 'dist'
         },
         keepalive: false
        });

        cmd.live();

        server.close();
      }
    };

process.argv[2] && cmd[process.argv[2]] && cmd[process.argv[2]]();
