'use strict';

var nitro = require('nitro'),
    path = require('path'),
    browserify = require('./_browserify'),
    rollup = require('rollup'),
    resolve = require('rollup-plugin-node-resolve'),
    commonjs = require('rollup-plugin-commonjs'),
    loadHTML = require('rollup-plugin-html'),
    ejs = require('rollup-plugin-ejs');

function _compileRollup (filepath, done) {

  rollup.rollup({
    input: path.join(process.cwd(), filepath),
    // external: [
    //   'parole',
    //   'http-rest',
    // ],
    plugins: [
      resolve({
        module: true, // Default: true
      }),
      commonjs({
        include: 'node_modules/**',
      }),
      loadHTML({
        include: '**/*.{html,svg}',
        htmlMinifierOptions: {
          minifyJS: true,
        },
      }),
      ejs({
        include: ['**/*.ejs'], // optional, '**/*.ejs' by default
        // exclude: ['**/index.html'], // optional, undefined by default
        compilerOptions: {client: true} // optional, any options supported by ejs compiler
      }),
    ],
  }).then(function (bundle) {
    bundle.generate({
      format: 'iife',
      // name: 'aplazame',
    }).then(function (result) {
      // console.log(result.code);
      done(null, result.code);
    }, function (reason) {
      console.log('aplazame.js generate error', reason);
      done(reason);
    });

    // bundle.write({
    //   file: 'dist/aplazame.js',
    //   format: 'cjs',
    //   name: 'aplazame',
    // });

  }, function (reason) {
    console.log('aplazame.js rollup error', reason);
    done(reason);
  });

}

var compileRollup = nitro.deasync(_compileRollup);

module.exports = function (nitro) {

  nitro.task('aplazame.js', function (target) {
    var dev = target === 'dev';

    nitro.file.write('.tmp/aplazame-version.js', 'module.exports = \'' + nitro.file.readJSON('package.json').version + '\';');

    // rollup.rollup({
    //   input: 'src/aplazame.js',
    //   plugins: [
    //     commonjs({
    //       include: 'node_modules/**',
    //     }),
    //     loadHTML({
    //       include: '**/*.{html,svg}',
    //       htmlMinifierOptions: {
    //         minifyJS: true,
    //       },
    //     }),
    //     ejs({
    //       include: ['**/*.ejs'], // optional, '**/*.ejs' by default
    //       // exclude: ['**/index.html'], // optional, undefined by default
    //       compilerOptions: {client: true} // optional, any options supported by ejs compiler
    //     }),
    //   ],
    // }).then(function (bundle) {
    //   bundle.generate({
    //     format: 'cjs',
    //     name: 'aplazame',
    //   }).then(function (result) {
    //     console.log(result.code);
    //   }, function (reason) {
    //     console.log('aplazame.js generate error', reason);
    //   });
    //
    //   // bundle.write({
    //   //   file: 'dist/aplazame.js',
    //   //   format: 'cjs',
    //   //   name: 'aplazame',
    //   // });
    //
    // }, function (reason) {
    //   console.log('aplazame.js rollup error', reason);
    // });


    nitro.dir('src')
      .load('aplazame.js', { sourceMap: dev ? 'inline' : false })
      .each(function (f) {
        f.src = '' + compileRollup( path.join('src', f.path) );
      })
      // .process('browserify')
      .write('dist')
      .each(function (f) {
        f.filename = f.filename.replace(/\.js$/, '.min.js');
      })
      .process('uglify')
      .write('dist');
  });

  nitro.task('js', function (target) {
    if( target === 'dev' ) {
      nitro.task(['aplazame.js:dev']);
    } else {
      nitro.task(['aplazame.js']);
      nitro.file.copy('dist/aplazame.min.js', 'aplazame.js');
      nitro.file.copy('dist/aplazame.min.js', 'aplazame.min.js');
    }
  });

};
