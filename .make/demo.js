/* global process */

var rollup = require('./_rollup'),
    path = require('path'),
    status_list = ['success', 'pending', 'error', 'dismiss', 'ko'],
    branch = process.env.DRONE_BRANCH ||
             process.env.CIRCLE_BRANCH ||
             process.env.CI_BRANCH ||
             process.env.GIT_BRANCH ||
             require('git-rev-sync').branch() ||
             ('' + require('child_process').execSync('git symbolic-ref --short -q HEAD 2>/dev/null')).trim();

module.exports = function (nitro) {

  nitro.task('demo-clear', function (_target) {
    nitro.dir('public').remove();
  });

  nitro.task('demo-lintjs', function () {
      // nitro.load('demo/{,**/}*.js').process('eslint');
  });

  nitro.task('demo-assets', function (_target) {

    nitro.dir('node_modules/ng-aplazame/assets').copy('public/assets');

    nitro.file.copy('demo/checkout-ES.json', 'public/checkout-ES.json');
    nitro.file.copy('demo/checkout-MX.json', 'public/checkout-MX.json');

  });

  nitro.task('demo-sass', function (target) {
    var dev = target === 'dev';

    nitro.dir('demo/styles').load('{,**/}*.{sass,scss}').process('sass', {
      includePaths: [
        'node_modules'
      ],
      autoprefix: true,
      sourceMap: dev,
      sourceComments: dev,
      outputStyle: dev ? 'nested' : 'compressed'
    }).write('public');
  });

  nitro.task('demo-js', function (target) {

    var dev = target === 'dev';

    nitro.dir('demo/scripts').load('demo-simulator.js', { sourceMap: target === 'dev' && 'inline' })
      .each(function (f) {
        f.src = '' + rollup( path.join('demo/scripts', f.path) );
      })
      .write('public/scripts');

    nitro.dir('demo/scripts').load('demo-article.js', { sourceMap: target === 'dev' && 'inline' })
      .each(function (f) {
        f.src = '' + rollup( path.join('demo/scripts', f.path) );
      })
      .write('public/scripts');

    nitro.file.copy('demo/scripts/demo-article-require.js', 'public/scripts/demo-article-require.js');

    nitro.file.write('public/scripts/demo-require.js', nitro.template(nitro.file.read('demo/scripts/demo-require.js'))({
      dev: dev,
      release: branch === 'release'
    }) );

    // nitro.file.copy('demo/scripts/demo-require.js', 'public/scripts/demo-require.js');

  });

  nitro.task('demo-templates', function (target) {

    var template = nitro.template,
        file = nitro.file;

    template.cmd('with', function (scope, expression, content, _otherwise) {
      var parts = expression.split('as'),
          o = {};

      o[parts[1].trim()] = scope.eval( parts[0] );

      return content( scope.new(o) );
    });

    template.cmd('json', function (scope, expression, _content, _otherwise) {
      return JSON.stringify( scope.eval(expression), null, '\t' );
    }, true);

    // console.log('-------------------\nbranch: ' + require('child_process').execSync('git symbolic-ref --short -q HEAD 2>/dev/null') + '\n-------------------');

    function _separateThousands(amount, thousands_separator) {
      if( amount < 1000 ) return '' + amount;
      return _separateThousands( parseInt(amount/1000), thousands_separator ) + thousands_separator + amount%1000;
    }

    var pkg = require('../package'),
        dev = target === 'dev',
        renderIndex = template( file.read('demo/index.html') ),
        renderResult = template( file.read('demo/result.html') ),
        checkout = file.readJSON('./demo/checkout-ES.json'),
        checkout_mx = file.readJSON('./demo/checkout-MX.json'),
        demo_data = file.readYAML('./demo/demo-data.yml'),
        index_data = nitro.tools.scope({
          dev: dev, pkg: pkg,
          is_prod: branch === 'release',
          git: {
            branch: branch,
          },
          // dotcom: process.env.DRONE_BRANCH === 'release' || process.env.GIT_BRANCH === 'release' || require('git-rev-sync').branch() === 'release',
          version: pkg.version + ( dev ? ( '-build' + new Date().getTime() ) : '' ),
          build: Date.now(),
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
          discountAmount: function (_article) {
            return checkout.order.total_amount - parseInt( checkout.order.articles.reduce(function (prev, article) {
              return prev + article.quantity*index_data.articleAmount( article, true );
            }, 0) + index_data.shippingAmount() );
          },
          totalAmount: function (_articles) {
            return checkout.order.total_amount;
          },
          amount2string: function (amount, decimalsSeparator, _groupSeparator) {
            var cents = amount%100;
            return _separateThousands(parseInt(amount/100), _groupSeparator) + decimalsSeparator + ( cents < 10 ? '0' : '' ) + cents;
          },
          formatCurrency: function (amount, symbol) {
            if( amount < 0 ) return '-' + index_data.formatCurrency(-amount, symbol);
            if( symbol === 'EUR' ) return index_data.amount2string(amount, ',', '.') + '€';
            return '$' + index_data.amount2string(amount, '.', ',');
          }
        });

    template.put('head', file.read('demo/head.html') );

    var PUBLIC_KEY_DEMO_ES = process.env.PUBLIC_KEY_DEMO_ES || demo_data.public_key.demo_es;
    var PUBLIC_KEY_DEMO_CLIENTS_ES = process.env.PUBLIC_KEY_DEMO_CLIENTS_ES || demo_data.public_key.clients_es;

    var PUBLIC_KEY_DEMO_MX = process.env.PUBLIC_KEY_DEMO_MX || demo_data.public_key.demo_mx;
    var PUBLIC_KEY_DEMO_CLIENTS_MX = process.env.PUBLIC_KEY_DEMO_CLIENTS_MX || demo_data.public_key.clients_mx;

    (function (scope) {

      file.write('public/index.html', renderIndex( scope.new({ public_key: PUBLIC_KEY_DEMO_ES }) ) );
      file.write('public/clients/index.html', renderIndex( scope.new({ public_key: PUBLIC_KEY_DEMO_CLIENTS_ES }) ) );
      file.write('public/clientes/index.html', renderIndex( scope.new({ public_key: PUBLIC_KEY_DEMO_CLIENTS_ES }) ) );
      // file.write('public/demo-success.html', renderIndex( scope.new({ result: { closed: true, success: true } }) ) );
      // file.write('public/demo-cancel.html', renderIndex( scope.new({ result: { closed: true, success: false } }) ) );

      status_list.forEach(function (result_status) {
        file.write('public/demo-es/result-' + result_status + '.html', renderResult( scope.new({ result: { status: result_status } }) ) );
      });

      file.write('public/widget-options.html', template( file.read('demo/widget-options.html') )( scope.new({ public_key: PUBLIC_KEY_DEMO_ES }) ) );

    })(index_data.new({ country: 'ES', currency: 'EUR' }));

    (function (scope) {

      file.write('public/mx/index.html', renderIndex( scope.new({ public_key: PUBLIC_KEY_DEMO_MX }) ) );
      file.write('public/mx/clients/index.html', renderIndex( scope.new({ public_key: PUBLIC_KEY_DEMO_CLIENTS_MX }) ) );
      file.write('public/mx/clientes/index.html', renderIndex( scope.new({ public_key: PUBLIC_KEY_DEMO_CLIENTS_MX }) ) );

      // file.write('public/mx/demo-success.html', renderIndex( scope.new({ result: { closed: true, success: true } }) ) );
      // file.write('public/mx/demo-cancel.html', renderIndex( scope.new({ result: { closed: true, success: false } }) ) );

      status_list.forEach(function (result_status) {
        file.write('public/demo-mx/result-' + result_status + '.html', renderResult( scope.new({ result: { status: result_status } }) ) );
      });

    })(index_data.new({ checkout: checkout_mx, country: 'MX', currency: 'MXN' }));

    file.write('public/require.html', template( file.read('demo/require.html') )( index_data.new({ country: 'ES', currency: 'EUR', public_key: PUBLIC_KEY_DEMO_ES }) ) );

    file.write('public/playground.html', template( file.read('demo/playground.html') )( index_data ) );

    file.write('public/simulator/index.html', template( file.read('demo/demo-simulator.html') )( index_data.new({ baseHref: '/simulator/' }) ) );

    file.write('public/widgets.html', template( file.read('demo/widgets.html') )( index_data ) );
  });

  nitro.task('demo-dev', ['demo-lintjs:dev', 'demo-clear:dev', 'demo-assets:dev', 'demo-js:dev', 'demo-sass:dev', 'demo-templates:dev']);

  nitro.task('demo', ['demo-lintjs', 'demo-clear', 'demo-assets', 'demo-js', 'demo-sass', 'demo-templates']);

};
