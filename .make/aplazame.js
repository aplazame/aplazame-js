'use strict';

module.exports = function (nitro) {

  nitro.task('aplazame.js', function () {
    nitro.file.write('.tmp/aplazame-version.js', 'module.exports = \'' + nitro.file.readJSON('package.json').version + '\';');
    nitro
      .load('src/aplazame.js')
      .process('browserify')
      .write('dist');
  });

  nitro.task('aplazame.min.js', function () {
    nitro.load('dist/aplazame.js').process('uglify').writeFile('dist/aplazame.min.js');
  });

  nitro.task('js', ['aplazame.js', 'aplazame.min.js'], function () {
    nitro.copy('dist', 'aplazame{,.min}.js', '.');
  });

};
