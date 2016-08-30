'use strict';

module.exports = function (nitro) {

  nitro.task('aplazame.js', function (target) {
    var dev = target === 'dev';

    nitro.file.write('.tmp/aplazame-version.js', 'module.exports = \'' + nitro.file.readJSON('package.json').version + '\';');
    nitro.dir('src')
      .load('aplazame.js', { sourceMap: dev ? 'inline' : false })
      .process('browserify')
      .write('dist');
  });

  nitro.task('aplazame.min.js', function (target) {
    var dev = target === 'dev';

    nitro.dir('dist')
      .load('dist/aplazame.js', { sourceMap: dev ? 'inline' : false })
      .each(function (f) {
        f.filename = f.filename.replace(/\.js$/, '.min.js');
      })
      .process('uglify')
      .write('dist');
  });

  nitro.task('js', {
    dev: ['aplazame.js:dev', 'aplazame.min.js:dev'],
    default: ['aplazame.js', 'aplazame.min.js'], function () {
      nitro.copy('dist', 'aplazame{,.min}.js', '.');
    }
  });

};
