'use strict';

module.exports = function (nitro) {

  nitro.task('loading', function () {

    var loadingHTML = nitro.file.read('demo/loading.html');

    nitro
      .load([
        // 'src/css-hacks/modal.sass',
        'src/css-hacks/overlay.sass',
        'src/css-hacks/logo.sass'
      ])
      .process('sass', {
        autoprefix: true,
        minify: true
      })
      .join('loading.css')
      .each(function (f) {
        nitro.file.write('public/loading.html', loadingHTML.replace(/<\/head>/, `<style rel="stylesheet">\n${ f.src }\n</style>`) );
      });

  });


};
