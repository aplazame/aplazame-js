'use strict';

var path = require('path'),
    browserify = require('./_browserify'),
    rollup = require('./_rollup'),
    webpack = require('webpack');

module.exports = function (nitro) {

  nitro.task('aplazame.js', 'css-hacks', function (target) {
    var dev = target === 'dev';

    nitro.file.write('.tmp/aplazame-version.js', 'export default \'' + nitro.file.readJSON('package.json').version + '\';');

    nitro.dir('src')
      .load('aplazame.js', { sourceMap: dev ? 'inline' : false })
      .each(function (f) {
        f.src = '' + rollup( path.join('src', f.path) );
        // console.log('filename', path.join('src', f.path), 'dist/' + f.filename );
        // var compiler = webpack({
        //   mode: dev ? 'development' : 'production',
        //   entry: path.join('src', f.path),
        //   output: {
        //     filename: 'dist/' + f.filename,
        //   },
        // });
        //
        // compiler.run(function (err, stats) {
        //   if( err ) console.log('webpack error:', err);
        //   else {
        //     console.log('webpack stats:', stats);
        //   }
        // });
      })
      // .process('webpack')
      // .write('dist')
      // .each(function (f) {
      //   f.src = f.src;
      //   f.filename = 'dist/' + f.filename.replace(/\.js$/, '.min.js');
      // })
      // .process('uglify')
      // .write('dist');
  });

  nitro.task('js', function (target) {
    if( target === 'dev' ) {
      nitro.task(['aplazame.js:dev']);
    } else {
      nitro.task(['aplazame.js']);
      // nitro.file.copy('dist/aplazame.min.js', 'aplazame.js');
      // nitro.file.copy('dist/aplazame.min.js', 'aplazame.min.js');
    }
  });

};
