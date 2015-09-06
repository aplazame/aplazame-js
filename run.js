#!/usr/bin/env node

'use strict';

function htmlToJs (html) {
  return html.replace(/\n/g, '').replace(/\"/g, '\\\"').replace(/\>\s+</g, '><');
}

function noop () {}

var colors = require('colors'),
    nitro = require('nitro-tools');

nitro.autoLoad('sass', 'uglify', 'log');

var cwd = nitro.cwd,
    file = nitro.file,
    dir = nitro.dir,
    // settings = yaml.safeLoad( file.read('settings.yml') ),
    cmd = {
      debug: function () {
        console.log('debug', dir.exists('node_modules/node-sass') );
      },
      build: function () {
        cmd.jshint();

        nitro.timingSync('copying assets', function () {
          nitro.exec('cp -R src/assets/ dist');
        });

        nitro.timingSync('aplazame.js', function () {
          nitro.exec('make aplazame.js');
        });

        nitro.timingSync('aplazame.min.js', function () {
          nitro.load('dist/aplazame.js').process('uglify').writeFile('dist/aplazame.min.js');
        });

        nitro.copy('dist', 'aplazame{,.min}.js', '.');

        dir.create('dist/widgets');
        dir.create('dist/widgets/simulator');

        nitro.timingSync('simulator:html', function () {
          nitro.copy('src/widgets/simulator', '{,**/}*.html', 'dist/widgets/simulator');
        });
        nitro.timingSync('simulator:js', function () {
          nitro.exec('make simulator.js');
        });
        nitro.timingSync('simulator:css', function () {
          nitro.cwd('src/widgets/simulator')
            .load('*.scss')
            .process('sass')
            .concat('simulator.css')
            .write('dist/widgets/simulator');
        });

      },
      sass: function (target) {
        switch( target ) {
          case 'demo':
            var destFile = 'demo/demo.css';
            nitro.timingSync(destFile, function () {
              nitro.load('demo/demo.scss').process('sass').writeFile(destFile);
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

        server.watch( [cwd.path('dist'), cwd.path('dist')] );
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
