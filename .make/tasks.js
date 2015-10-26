'use strict';

module.exports = function (nitro) {

  var canClear = ['dist', '.tmp'];

  nitro.task('clear', function (target) {
    if( canClear.indexOf(target) !== -1 ) {
      nitro.dir.remove(target);
    }
  });

  // main tasks

  nitro.task('build', ['clear:dist', 'clear:.tmp', 'js', 'widgets', 'demo']);

  nitro.task('dev', ['clear:dist', 'clear:.tmp', 'js:dev', 'widgets-dev', 'demo-dev'], function () {

    nitro.watch('src', ['js']);

    nitro.watch('widgets')
      .when('{,**/}*.js', 'widgets.js:dev')
      .when('{,**/}modal-*.html', 'widgets.js:dev')
      .when(['{,**/}*.html', '!{,**/}modal-*.html'], 'widgets.html:dev')
      .when('{,**/}*.{sass,scss}', 'widgets.sass:dev')
      .when('widgets/assets/**', 'widgets.assets:dev');

    nitro.watch('demo')
      .when('{,**/}*.html', 'demo-templates:dev')
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

    var pkg = require('./package');
    process.stdout.write(pkg[target]);
    process.exit(0);
  });

};
