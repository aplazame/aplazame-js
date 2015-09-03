#!/usr/bin/env node

'use strict';

function htmlToJs (html) {
  return html.replace(/\n/g, '').replace(/\"/g, '\\\"').replace(/\>\s+</g, '><');
}

function noop () {}

var colors = require('colors'),
    nitro = require('nitro-tools'),
    fs = require('fs'),
    path = require('path'),
    glob = require('glob');

nitro.fileProcessor('sass', function (src) {
  return require('node-sass').renderSync({ data: src }).css;
});

var cwd = nitro.cwd,
    file = nitro.file,
    dir = nitro.dir,
    // settings = yaml.safeLoad( file.read('settings.yml') ),
    cmd = {
      build: function () {
        cmd.jshint();

        nitro.timingSync('aplazame.js', function () {
          nitro.exec('make browserify');
        });

        nitro.timingSync('aplazame.min.js', function () {
          file.write('dist/aplazame.min.js', require('uglify-js').minify('dist/aplazame.js').code );
        });

        dir.create('dist/widgets');
        dir.create('dist/widgets/simulator');

        nitro.timingSync('widgets html', function () {
          glob.sync('src/widgets/{,**/}*.html').forEach(function (fileName) {
            file.copy(fileName, fileName.replace(/^src/, 'dist') );
          });
        });

      },
      sass: function (target) {
        switch( target ) {
          case 'demo':
            var destFile = 'demo/demo.css';
            nitro.timingSync(destFile, function () {
              nitro.load('demo/demo.scss').sass().log().writeFile(destFile);
            });
            break;
          default:
            cmd.sass('demo');
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
        var errorsLog = '',
            lintSrc = nitro.jshint( 'src/{,**/}*.js', file.readJSON('.jshintrc') ),
            lintTests = nitro.jshint( 'tests/{,**/}*.js' );

        if( !lintSrc.valid || !lintTests.valid ) {
          console.log( '\nJSHINT ERRORS'.red + '\n', lintSrc.log, lintTests.log );
          if( !noExit ) {
            process.exit(1);
          }
        } else {
          console.log('\nJSHINT PASSED\n'.green);
        }
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
