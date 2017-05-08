'use strict';

function compileTemplate (tmpl) {
  // John Resig micro-template
  return new Function('obj', // jshint ignore:line
    'var p=[],print=function(){p.push.apply(p,arguments);};' +

    // Introduce the data as local variables using with(){}
    'with(obj){p.push(\'' +

    // Convert the template into pure JavaScript
    tmpl.trim()
      .replace(/[\r\t\n]/g, ' ')
      .split('<%').join('\t')
      .replace(/((^|%>)[^\t]*)'/g, '$1\r')
      .replace(/\t=(.*?)%>/g, '\',$1,\'')
      .split('\t').join('\');')
      .split('%>').join('p.push(\'')
      .split('\r').join('\\\'') + '\');}return p.join(\'\');');
}

module.exports = function (nitro) {

  nitro.task('widgets.assets', function () {
    nitro.dir('.bower_components/ng-aplazame/assets').copy('dist/widgets/assets');
    nitro.dir('widgets/assets').copy('dist/widgets/assets');
  });

  var path = require('path');

  nitro.task('widgets.js', function () {
    // nitro.file.write('.tmp/simulator/modal-info.js', 'module.exports = \'' + nitro.file.read('widgets/simulator/modal-info.html').replace(/\'/, '\\\'').replace(/\n/g, '') + '\';' );
    nitro.dir('widgets').load('{,**/}{templates,widgets_v1,widgets_v2}/*.html').each(function (f) {
      nitro.file.write( path.join('.tmp', f.path.replace(/\.html$/, '.js') ), 'module.exports = \'' + f.src.replace(/\'/g, '\\\'').replace(/\n/g, '') + '\';' );
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
        });

    nitro.dir('widgets')
      .load(['{,**/}*.html', '!{,**/}{templates,widgets_v1,widgets_v2}/*.html'])
      .each(function (f) {
        f.setSrc( nitro.template(f.getSrc())(scope) );
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
          '.bower_components'
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
