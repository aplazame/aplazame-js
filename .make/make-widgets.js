'use strict';

module.exports = function (nitro) {

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

};
