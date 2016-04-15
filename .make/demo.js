'use strict';

module.exports = function (nitro) {

  nitro.task('demo-clear', function (target) {
    nitro.dir('public').remove();
  });

  nitro.task('demo-assets', function (target) {

    nitro.dir('.bower_components/ng-aplazame/assets').copy('public/assets');

  });

  nitro.task('demo-sass', function (target) {
    var dev = target === 'dev';

    nitro.dir('demo/styles').load('{,**/}*.{sass,scss}').process('sass', {
      includePaths: [
        '../../.bower_components'
      ],
      autoprefix: true,
      sourceMap: dev,
      sourceComments: dev,
      outputStyle: dev ? 'nested' : 'compressed'
    }).write('public');
  });

  nitro.task('demo-js', function (target) {

    nitro.dir('demo').load('demo-simulator.js').process('browserify', {
      plugins: [nitro.require('babelify')]
    }).write('public/simulator');

  });

  nitro.task('demo-templates', function (target) {

    var template = nitro.template,
        file = nitro.file;

    template.cmd('with', function (scope, expression, content, otherwise) {
      var parts = expression.split('as'),
          o = {};

      o[parts[1].trim()] = scope.eval( parts[0] );

      return content( scope.new(o) );
    });

    template.cmd('json', function (scope, expression, content, otherwise) {
      return JSON.stringify( scope.eval(expression), null, '\t' );
    }, true);

    var pkg = require('../package'),
        dev = target === 'dev',
        renderIndex = template( file.read('demo/index.html') ),
        checkout = file.readJSON('./demo/checkout.json'),
        indexData = nitro.tools.scope({
          dev: dev, pkg: pkg,
          dotcom: process.env.DRONE_BRANCH === 'release' || process.env.GIT_BRANCH === 'release' || require('git-rev-sync').branch() === 'release',
          version: pkg.version + ( dev ? ( '-build' + new Date().getTime() ) : '' ),
          checkout: checkout,
          baseHref: '/',
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
          amount2string: function (amount) {
            var cents = amount%100;
            return parseInt(amount/100) + '.' + ( cents < 10 ? '0' : '' ) + cents;
          },
          toEUR: function (amount) {
            if( amount < 0 ) {
              return '-' + indexData.toEUR(-amount);
            }
            return indexData.amount2string(amount) + '€';
          }
        });

    template.put('head', file.read('demo/head.html') );

    file.write('public/index.html', renderIndex( indexData ) );
    file.write('public/demo-success.html', renderIndex( indexData.new({ result: { closed: true, success: true } }) ) );
    file.write('public/demo-cancel.html', renderIndex( indexData.new({ result: { closed: true, success: false } }) ) );

    file.write('public/playground.html', template( file.read('demo/playground.html') )( indexData ) );

    file.write('public/simulator/index.html', template( file.read('demo/demo-simulator.html') )( indexData.new({ baseHref: '/simulator/' }) ) );
    file.copy('demo/demo-article.js', 'public/demo-article.js');
  });

  nitro.task('demo-dev', ['demo-clear', 'demo-assets', 'demo-js', 'demo-sass:dev', 'demo-templates:dev']);

  nitro.task('demo', ['demo-clear', 'demo-assets', 'demo-js', 'demo-sass', 'demo-templates']);

};
