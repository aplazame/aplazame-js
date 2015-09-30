#!/usr/bin/env node

'use strict';

require('nitro')(function (nitro) {

  var canClear = ['dist'];

  nitro.task('clear', function (target) {
    if( canClear.indexOf(target) !== -1 ) {
      nitro.dir.remove(target);
    }
  });

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

  nitro.task('aplazame.js', function () {
    nitro.file.write('.tmp/aplazame-version.js', 'module.exports = \'' + nitro.file.readJSON('package.json').version + '\';');
    nitro.load('src/aplazame.js').process('browserify').write('dist');
    // nitro.load('src/aplazame.js').process('browserify', { plugins: [nitro.require('babelify')] }).write('dist');
  });

  nitro.task('aplazame.min.js', function () {
    nitro.load('dist/aplazame.js').process('uglify').writeFile('dist/aplazame.min.js');
  });

  nitro.task('js', ['aplazame.js', 'aplazame.min.js'], function () {
    nitro.copy('dist', 'aplazame{,.min}.js', '.');
  });

  // demo

  nitro.task('demo', function () {
    nitro.dir('demo').load('{,**/}*.{sass,scss}').process('sass', { autoprefix: true, sourceMap: true }).write('public');

    nitro.file.copy('demo/index.html', 'public/index.html');
  });

  // widgets

  nitro.task('widgets.assets', function () {
    nitro.dir('widgets/assets').copy('dist/widgets/assets');
  });

  nitro.task('widgets.js', function () {
    nitro.file.write('.tmp/simulator/modal-box.js', 'module.exports = \'' + nitro.file.read('widgets/simulator/modal-box.html').replace(/\'/, '\\\'').replace(/\n/g, '') + '\';' );
    nitro.load('widgets/simulator/simulator.js').process('browserify').write('dist/widgets/simulator');
    nitro.load('widgets/modal/modal.js').process('browserify').write('dist/widgets/modal');
  });

  nitro.task('widgets.html', function () {
    nitro.copy('widgets', ['{,**/}*.html', '!simulator/modal-box.html'], 'dist/widgets');
  });

  nitro.task('widgets.css', function (target) {
    nitro.dir('widgets').load('{,**/}*.scss').process('sass', { autoprefix: true, minify: true, sourceMap: true }).write('dist/widgets');
  });

  nitro.task('widgets', [ 'widgets.assets', 'widgets.js', 'widgets.html', 'widgets.css' ]);

  // main tasks

  nitro.task('build', ['clear:dist', 'js', 'widgets', 'demo']);

  nitro.task('dev', ['build'], function () {

    nitro.watch('src', ['js']);

    nitro.watch('widgets')
      .when('{,**/}*.js', 'widgets.js')
      .when('{,**/}modal-*.html', 'widgets.js')
      .when(['{,**/}*.html', '!{,**/}modal-*.html'], 'widgets.html')
      .when('{,**/}*.{sass,scss}', 'widgets.css')
      .when('widgets/assets/**', 'widgets.assets');

    nitro.watch('demo', ['demo']);

    nitro.require('livereload').createServer({ port: 54321 }).watch(['public', 'dist']);

  });

  nitro.task('live', ['dev'], function () {
    nitro.serve({
       root: 'public',
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
