'use strict';

module.exports = function (nitro) {

  var canClear = ['dist'];

  nitro.task('clear', function (target) {
    if( canClear.indexOf(target) !== -1 ) {
      nitro.dir.remove(target);
    }
  });

  // main tasks

  nitro.task('base-build', ['clear:dist', 'js', 'widgets']);

  nitro.task('build', ['base-build', 'demo']);

  nitro.task('dev', ['base-build', 'demo-dev'], function () {

    nitro.watch('src', ['js']);

    nitro.watch('widgets')
      .when('{,**/}*.js', 'widgets.js')
      .when('{,**/}modal-*.html', 'widgets.js')
      .when(['{,**/}*.html', '!{,**/}modal-*.html'], 'widgets.html')
      .when('{,**/}*.{sass,scss}', 'widgets.css')
      .when('widgets/assets/**', 'widgets.assets');

    nitro.watch('demo', ['demo-dev']);

    nitro.require('livereload').createServer({ port: 12321 }).watch(['public', 'dist']);

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
