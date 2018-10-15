/* global process */
'use strict';

module.exports = function (nitro) {

  var canClear = ['dist', '.tmp', 'public'],
      branch = process.env.DRONE_BRANCH || process.env.GIT_BRANCH || require('git-rev-sync').branch();

  nitro.task('clear', function (target) {
    if( target === 'build' ) {
      canClear.forEach(function (dir) {
        nitro.dir.remove(dir);
      });
      return;
    }

    if( canClear.indexOf(target) !== -1 ) {
      nitro.dir.remove(target);
    }
  });

  nitro.task('git.branch', function () {
    console.log('[[ current branch ]]', branch );
  });

  // main tasks

  nitro.task('public-dist', function () {
    nitro.dir.copy('dist', 'public/dist');
  });

  nitro.task('build', ['git.branch', 'clear:build', 'widgets', 'js', 'demo', 'loading', 'public-dist']);

  nitro.task('dev', ['git.branch', 'lint', 'clear:build', 'widgets-dev', 'js:dev', 'demo-dev', 'loading:dev', 'public-dist'], function () {

    // if( !nitro.file.exists('public/dist') ) nitro.symlink('public/dist', '../dist');
    // if( !nitro.file.exists('public/dist') ) nitro.dir.copy('dist', 'public/dist');

    nitro.watch('dist', ['public-dist']);

    nitro.watch('src')
      .when('{,**/}*.js', ['lint', 'js:dev'])
      .when('{,**/}*.sass', ['css-hacks', 'js:dev', 'loading:dev']);

    nitro.watch('widgets')
      .when('simulator/{,**/}*.js', ['widgets.js:dev', 'js:dev'])
      .when('simulator/{,**/}templates/*.html', ['widgets.html:dev', 'widgets.js:dev', 'js:dev'])
      .when(['{,**/}*.html', '!{,**/}modal-*.html'], ['widgets.html:dev', 'widgets.js:dev'])
      .when('{,**/}*.{sass,scss}', 'widgets.sass:dev')
      .when('widgets/assets/**', 'widgets.assets:dev');

    nitro.watch('demo')
      .when('{,**/}*.js', ['demo-lintjs', 'demo-js:dev'])
      .when('{,**/}*.{html,yml}', ['demo-templates:dev', 'loading:dev'])
      .when('{,**/}*.{sass,scss}', ['demo-sass:dev']);

    // nitro.watch('.make', function () {
    //   nitro.import('.make');
    // });

    nitro.livereload(['public', 'dist'], { port: 12321 });

  });

  nitro.task('live', ['dev'], function () {
    nitro.server({
       root: 'public',
       openInBrowser: true,
       dirAlias: {
         'dist': 'dist'
       }
    });
  });

  var pkgActions = {
    increaseVersion: function () {
      // nitro.package('bower').setVersion( nitro.package('npm').increaseVersion().version() );
      nitro.package('npm').increaseVersion();
    }
  };

  nitro.task('pkg', function (target) {
    if( pkgActions[target] ) {
      return pkgActions[target]();
    }

    var pkg = require('../package');
    process.stdout.write(pkg[target]);
    process.exit(0);
  });

};
