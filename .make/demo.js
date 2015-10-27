'use strict';

module.exports = function (nitro) {

  nitro.task('demo-clear', function (target) {
    nitro.dir('public').remove();
  });

  nitro.task('demo-sass', function (target) {
    var dev = target === 'dev';

    nitro.dir('demo').load('{,**/}*.{sass,scss}').process('sass', {
      includePaths: [
        '../.bower_components'
      ],
      autoprefix: true,
      sourceMap: dev,
      sourceComments: dev,
      outputStyle: dev ? 'nested' : 'compressed'
    }).write('public');
  });

  nitro.task('demo-templates', function (target) {

    nitro.template.cmd('with', function (scope, expression) {
      var parts = expression.split('as'),
          o = {};

      o[parts[1].trim()] = scope.$eval( parts[0] );

      return this.content( scope.$new(o) );
    });

    var renderIndex = nitro.template( nitro.file.read('demo/index.html') ),
        checkout = nitro.file.readJSON('./demo/checkout.json'),
        indexData = nitro.tools.scope({
          dev: target === 'dev',
          checkout: checkout,
          shippingAmount: function () {
            return (checkout.shipping.price - checkout.shipping.discount)*(1 + checkout.shipping.tax_rate/10000);
          },
          articleAmount: function (article, discountApplied ) {
            var price = article.price;
            if( discountApplied && article.discount_rate ) {
              price = price - ( article.price*article.discount_rate/10000 ) - (article.discount || 0);
            }

            return price*( 1 + article.tax_rate/10000 );
          },
          articleDiscount: function (article) {
            if( !article.discount_rate ) {
              return 0;
            }
            return ( article.price*article.discount_rate/10000 - (article.discount || 0) )*( 1 + article.tax_rate/10000 );
          },
          discountAmount: function (article) {
            return checkout.order.total_amount - parseInt( checkout.order.articles.reduce(function (prev, article) {
              return prev + article.quantity*indexData.articleAmount( article, true );
            }, 0) + indexData.shippingAmount() );
          },
          totalAmount: function (articles) {
            return checkout.order.total_amount;
          },
          toEUR: function (amount) {
            if( amount < 0 ) {
              return '-' + indexData.toEUR(-amount);
            }
            var cents = amount%100;
            return parseInt(amount/100) + '.' + ( cents < 10 ? '0' : '' ) + cents + '€';
          }
        });

    nitro.file.write('public/index.html', renderIndex( indexData ) );
    nitro.file.write('public/demo-success.html', renderIndex( indexData.$$new({ result: { closed: true, success: true } }) ) );
    nitro.file.write('public/demo-cancel.html', renderIndex( indexData.$$new({ result: { closed: true, success: false } }) ) );

    nitro.file.write('public/playground.html', nitro.template( nitro.file.read('demo/playground.html') )( indexData ) );

    nitro.file.write('public/simulator/index.html', nitro.template( nitro.file.read('demo/simulator.html') )( indexData ) );
  });

  nitro.task('demo-dev', ['demo-clear', 'demo-sass:dev', 'demo-templates:dev']);

  nitro.task('demo', ['demo-clear', 'demo-sass', 'demo-templates']);

};
