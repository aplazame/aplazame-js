'use strict';

module.exports = function (nitro) {

  nitro.task('css-hacks', function () {

    nitro
      .dir('src/css-hacks')
      .load('*.{sass,scss}')
      .process('sass', {
        autoprefix: true,
        minify: {
          autoprefixer: false,
          mergeIdents: false,
          reduceIdents: false,
          zindex: false
        }
      })
      .each(function (f) {
        f.src = 'export default \'' + f.src.replace(/([^\}])\}/, '$1;}').replace(/\'/g, '\\\'') + '\';';
        f.path = f.path.replace(/\.css$/, '.js');
      }).write('.tmp/css-hacks');

  });

};
