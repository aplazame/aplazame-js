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
          reduceIdents: false
        }
      })
      .each(function (f) {
        // f.setSrc( 'module.exports = \'' + f.getSrc().replace(/([^\}])\}/, '$1;}').replace(/\'/g, '\\\'').replace(';', ' !important;').replace('!important !important', '!important') + '\';' );
        f.setSrc( 'module.exports = \'' + f.getSrc().replace(/([^\}])\}/, '$1;}').replace(/\'/g, '\\\'') + '\';' );
        f.setPath( f.getPath().replace(/\.css$/, '.js') );
      }).write('.tmp/css-hacks');

  });

};
