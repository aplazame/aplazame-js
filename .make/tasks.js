'use strict';

module.exports = function (nitro) {

  var canClear = ['dist', '.tmp', 'public'];

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
    console.log('[[ current branch ]]', process.env.DRONE_BRANCH || process.env.GIT_BRANCH || require('git-rev-sync').branch() );
  });

  // main tasks

  nitro.task('build', ['git.branch', 'clear:build', 'css-hacks', 'widgets', 'js', 'demo']);

  nitro.task('dev', ['git.branch', 'lintjs', 'clear:build', 'css-hacks', 'widgets-dev', 'js:dev', 'demo-dev'], function () {

    nitro.watch('src')
      .when('{,**/}*.js', ['lintjs', 'js'])
      .when('{,**/}*.sass', ['css-hacks', 'js']);

    nitro.watch('widgets')
      .when('{,**/}*.js', 'widgets.js:dev')
      .when('{,**/}modal-*.html', 'widgets.js:dev')
      .when(['{,**/}*.html', '!{,**/}modal-*.html'], 'widgets.html:dev')
      .when('{,**/}*.{sass,scss}', 'widgets.sass:dev')
      .when('widgets/assets/**', 'widgets.assets:dev');

    nitro.watch('demo')
      .when('{,**/}*.{html,js}', 'demo-templates:dev')
      .when('{,**/}*.{sass,scss}', 'demo-sass:dev');

    nitro.watch('.make', function () {
      nitro.import('.make');
      // nitro.tasks.run(['base-build', 'demo-dev']);
    });

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
      nitro.package('bower').setVersion( nitro.package('npm').increaseVersion().version() );
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
