#!/usr/bin/env node

'use strict';

require('nitro')(function (nitro) {

  nitro.task('test.jshint', function () {
      nitro.load('src/{,**/}*.js').process('jshint', {
        jshintrc: nitro.file.readJSON('.jshintrc'),
        onError: function () {
          console.log('bye!!!!');
          process.exit(1);
        }
      });

      nitro.load('tests/{,**/}*.js').process('jshint', {
        onError: function () {
          process.exit(1);
        }
      });
  });

  // aplazame.js

  nitro.task('aplazame.min.js', function () {
    nitro.load('dist/aplazame.js').process('uglify').writeFile('dist/aplazame.min.js');
  });

  nitro.task('aplazame.js', function () {
    nitro.file.write('.tmp/aplazame-version.js', 'module.exports = \'' + nitro.file.readJSON('package.json').version + '\';');
    nitro.load('src/aplazame.js').process('browserify').write('dist');
  });

  nitro.task('js', ['aplazame.js', 'aplazame.min.js'], function () {
    nitro.copy('dist', 'aplazame{,.min}.js', '.');
  });

  // demo

  nitro.task('demo-sass', function () {
    nitro.dir('demo').load('{,**/}*.{sass,scss}').process('sass').write('demo');
  });

  // widgets

  nitro.task('widgets.assets', function () {
    nitro.dir('src/widgets/assets').copy('dist/widgets/assets');
  });

  nitro.task('simulator.js', function () {
    nitro.load('src/widgets/simulator/simulator.js').process('browserify').write('dist/widgets/simulator');
    // nitro.exec('$(npm bin)/browserify src/widgets/simulator/simulator.js -o dist/widgets/simulator/simulator.js');
  });

  nitro.task('simulator.html', function () {
    nitro.copy('src/widgets/simulator', '{,**/}*.html', 'dist/widgets/simulator');
  });

  nitro.task('simulator.css', function () {
    nitro.dir('src/widgets/simulator').load('*.scss').process('sass').write('dist/widgets/simulator');
  });

  nitro.task('simulator', [function () {
    nitro.dir.create('dist/widgets/simulator');
  }, 'simulator.js', 'simulator.html', 'simulator.css']);

  // watch

  nitro.task('watch', function () {

    nitro.watch('src')
      .when('widgets/simulator/**', 'simulator')
      .when('widgets/assets/**', 'widgets.assets')
      .when(['{,**/}*.js', '!widgets/**'], 'js');

  });

  // main tasks

  nitro.task('build', ['js', 'widgets.assets', 'simulator']);

  nitro.task('dev', ['build', 'watch']);

  nitro.task('live', ['dev'], function () {
    nitro.require('livereload').createServer({ port: 54321 }).watch(['demo', 'dist']);
    nitro.serve({
       root: 'demo',
       openInBrowser: true,
       dirAlias: {
         'dist': 'dist'
       }
    });
  });

  var pkgActions = {
    increaseVersion: function () {
      nitro.package('bower').setVersion( nitro.package('npm').increaseVersion().version() );
    }
  };

  nitro.task('pkg', function (target) {
    if( pkgActions[target] ) {
      return pkgActions[target]();
    }

    var pkg = require('./package');
    process.stdout.write(pkg[target]);
    process.exit(0);
  });

}).run();
