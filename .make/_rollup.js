
var nitro = require('nitro'),
    rollup = require('rollup'),
    resolve = require('rollup-plugin-node-resolve'),
    commonjs = require('rollup-plugin-commonjs'),
    loadHTML = require('rollup-plugin-html'),
    ejs = require('rollup-plugin-ejs')

function _compileRollup (filepath, done) {

  rollup.rollup({
    input: path.join(process.cwd(), filepath),
    // external: [
    //   'parole',
    //   'http-rest',
    // ],
    context: 'window',
    plugins: [
      resolve({
        module: true, // Default: true
        browser: true,  // Default: false
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
        compilerOptions: {
          client: false,
        }, // optional, any options supported by ejs compiler
      }),
    ],
  }).then(function (bundle) {
    bundle.generate({
      format: 'iife',
      // name: 'aplazame',
      strict: false,
    }).then(function (result) {
      // console.log(result.code);
      done(null, result.code);
    }, function (reason) {
      done(reason);
    });

    // bundle.write({
    //   file: 'dist/aplazame.js',
    //   format: 'cjs',
    //   name: 'aplazame',
    // });

  }, function (reason) {
    done(reason);
  });

}

module.exports = nitro.deasync(_compileRollup);
