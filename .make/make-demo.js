'use strict';

module.exports = function (nitro) {

  nitro.task('demo-clear', function (target) {
    nitro.dir('public').remove();
  });

  nitro.task('demo-sass', function (target) {
    var dev = target === 'dev';

    nitro.dir('demo').load('{,**/}*.{sass,scss}').process('sass', {
      includePaths: [
        '../.bower_components/ng-aplazame/styles'
      ],
      autoprefix: true,
      sourceMap: dev,
      sourceComments: dev,
      outputStyle: dev ? 'nested' : 'compressed'
    }).write('public');
  });

  nitro.task('demo-assets', function (target) {

    nitro.dir('.bower_components/ng-aplazame/assets').copy('public/assets');
    nitro.dir('src/images').copy('public/assets/images/src');

  });

  nitro.task('demo-build', function (target) {

    nitro.template.cmd('with', function (scope, expression) {
      var parts = expression.split('as'),
          o = {};

      o[parts[1].trim()] = scope.$eval( parts[0] );

      return this.content( scope.$new(o) );
    });

    var renderIndex = nitro.template( nitro.file.read('demo/index.html') ),
        checkout = nitro.file.readJSON('./demo/checkout.json'),
        indexData = {
          dev: target === 'dev',
          checkout: checkout,
          totalPrice: function (articles) {
            return articles.reduce(function (prev, article) {
              return prev + article.quantity*article.price;
            }, 0);
          },
          toEUR: function (amount) {
            var cents = amount%100;
            return parseInt(amount/100) + '.' + ( cents < 10 ? '0' : '' ) + cents + '€';
          }
        };

    nitro.file.write('public/index.html', renderIndex( indexData ) );

    nitro.file.write('public/playground.html', nitro.template( nitro.file.read('demo/playground.html') )( indexData ) );
  });

  nitro.task('demo-dev', ['demo-clear', 'demo-assets', 'demo-sass:dev', 'demo-build:dev']);

  nitro.task('demo', ['demo-clear', 'demo-assets', 'demo-sass', 'demo-build']);

};
