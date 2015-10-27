'use strict';

module.exports = function (nitro) {

  nitro.task('widgets.assets', function () {
    nitro.dir('.bower_components/ng-aplazame/assets').copy('dist/widgets/assets');
    nitro.dir('widgets/assets').copy('dist/widgets/assets');
  });

  var path = require('path');

  nitro.task('widgets.js', function () {
    // nitro.file.write('.tmp/simulator/modal-info.js', 'module.exports = \'' + nitro.file.read('widgets/simulator/modal-info.html').replace(/\'/, '\\\'').replace(/\n/g, '') + '\';' );
    nitro.dir('widgets').load('{,**/}templates/*.html').each(function () {
      nitro.file.write( path.join('.tmp', this.getPath().replace(/\.html$/, '.js') ), 'module.exports = \'' + this.getSrc().replace(/\'/, '\\\'').replace(/\n/g, '') + '\';' );
    });

    nitro.load('widgets/simulator/simulator.js').process('browserify').write('dist/widgets/simulator');
    nitro.load('widgets/modal/modal.js').process('browserify').write('dist/widgets/modal');
  });

  nitro.task('widgets.html', function (target) {

    var scope = nitro.tools.scope({
          dev: target === 'dev'
        });

    nitro.dir('widgets')
      .load(['{,**/}*.html', '!{,**/}templates/*.html'])
      .each(function (f) {
        f.setSrc( nitro.template(f.getSrc())(scope) );
      })
      .write('dist/widgets');

    // nitro.copy('widgets', ['{,**/}*.html', '!simulator/modal-box.html'], 'dist/widgets');
  });

  nitro.task('widgets.sass', function (target) {

    var dev = target === 'dev';

    nitro.dir('widgets')
      .load('{,**/}*.{sass,scss}')
      .process('sass', {
        includePaths: [
          '../.bower_components'
        ],
        autoprefix: true,
        minify: !dev,
        sourceComments: dev,
        sourceMap: dev
      }).write('dist/widgets');
  });

  nitro.task('widgets', [ 'widgets.assets', 'widgets.js', 'widgets.html', 'widgets.sass' ]);
  nitro.task('widgets-dev', [ 'widgets.assets:dev', 'widgets.js:dev', 'widgets.html:dev', 'widgets.sass:dev' ]);

};
