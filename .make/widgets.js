'use strict';

function compileTemplate (tmpl) {
  // John Resig micro-template
  return new Function('obj', // jshint ignore:line
    'var p=[],print=function(){p.push.apply(p,arguments);};' +

    // Introduce the data as local variables using with(){}
    'with(obj){ try{p.push(\'' +

    // Convert the template into pure JavaScript
    tmpl.trim()
      .replace(/[\r\t\n]/g, ' ')
      .split('<%').join('\t')
      .replace(/((^|%>)[^\t]*)'/g, '$1\r')
      .replace(/\t=(.*?)%>/g, '\',$1,\'')
      .split('\t').join('\');')
      .split('%>').join('p.push(\'')
      .split('\r').join('\\\'') + '\'); }catch(err){console.log(\'error\', err);} }return p.join(\'\');');
}

module.exports = function (nitro) {

  nitro.task('widgets.assets', function () {
    nitro.dir('node_modules/ng-aplazame/assets').copy('dist/widgets/assets');
    nitro.dir('widgets/assets').copy('dist/widgets/assets');
  });

  var path = require('path');
  // var tinyhtml = require('tinyhtml');

  nitro.task('widgets.js', function () {
    // nitro.file.write('.tmp/simulator/modal-info.js', 'module.exports = \'' + nitro.file.read('widgets/simulator/modal-info.html').replace(/\'/, '\\\'').replace(/\n/g, '') + '\';' );
    nitro.dir('widgets').load('{,**/}templates/*.html').each(function (f) {
      // var src = f.src.replace(/>([\s\S]*?)</g, function (_matched, content) { return '>' + content.trim(/^\s*|\s*$/g, '') + '<'; });
      // console.log('widget tmpl', f.path, '\n' + src );

      nitro.file.write( path.join('.tmp', f.path.replace(/\.html$/, '.js') ), 'module.exports = \'' + f.src.replace(/\'/g, '\\\'').replace(/\n/g, '') + '\';' );
      // nitro.file.write( path.join('.tmp', f.path.replace(/\.html$/, '.tmpl.js') ), 'module.exports = ' + compileTemplate( f.src.replace(/<!--[\s\S]*?-->/g, '') ).toString() + ';' );
      nitro.file.write( path.join('.tmp', f.path.replace(/\.html$/, '.tmpl.js') ), 'module.exports = ' + compileTemplate( f.src ).toString() + ';' );
    });

    nitro.load('widgets/simulator/simulator.js').process('browserify').write('dist');
    nitro.load('widgets/modal/modal.js').process('browserify').write('dist');
  });

  nitro.task('widgets.html', function (target) {

    var pkg = require('../package'),
        dev = target === 'dev',
        scope = nitro.tools.scope({
          dev: dev, pkg: pkg,
          version: pkg.version + ( dev ? ( '-build' + new Date().getTime() ) : '' ),
          timestamp: new Date().getTime(),
        });

    nitro.dir('widgets')
      .load(['{,**/}*.html', '!{,**/}templates/*.html'])
      .each(function (f) {
        f.src = nitro.template(f.src)(scope);
      })
      .write('dist/widgets');

    // nitro.copy('widgets', ['{,**/}*.html', '!simulator/modal-box.html'], 'dist/widgets');
  });

  nitro.task('widgets.sass', function (target) {

    var dev = target === 'dev';

    nitro.dir('widgets')
      .load('{,**/}*.{sass,scss}')
      .process('sass', {
        includePaths: [
          'node_modules'
        ],
        autoprefix: true,
        minify: !dev,
        sourceComments: dev,
        sourceMap: dev
      }).write('dist/widgets');
  });

  nitro.task('widgets', [ 'widgets.assets', 'widgets.js', 'widgets.html', 'widgets.sass' ]);
  nitro.task('widgets-dev', [ 'widgets.assets:dev', 'widgets.js:dev', 'widgets.html:dev', 'widgets.sass:dev' ]);

};
