
var nitro = require('nitro'),
    rollup = require('rollup'),
    resolve = require('rollup-plugin-node-resolve'),
    commonjs = require('rollup-plugin-commonjs'),
    loadHTML = require('rollup-plugin-html'),
    ejs = require('ejs'),
    compileEjs = require('@kilt/ejs');

function ejsRollup () {

  // const isEjs = createFilter(include || ['**/*.ejs'], exclude);

  return {
    name: 'ejs', // this name will show up in warnings and errors
    transform: function (code, file_path) {
      if( !/\.ejs$/.test(file_path) ) return;

      // console.log('ejs', file_path, code);

      var templateFn = compileEjs(code);
      // var templateFn = ejs.compile(code, {
      //   client: true,
      //   strict: false,
      //   _with: false,
      //   outputFunctionName: file_path.split('/').pop().replace(/\.ejs$/, '').replace(/-(\w)/, function (_matched, next_letter) {
      //     return next_letter.toUpperCase();
      //   }),
      // });

      console.log('compileEjs', templateFn);

      return {
          code: `export default ${templateFn.toString()};`,
          // map: { mappings: '' },
      };
    },
    // resolveId ( importee ) {
    //   if (importee === 'virtual-module') {
    //     return importee; // this signals that rollup should not ask other plugins or check the file system to find this id
    //   }
    //   return null; // other ids should be handled as usually
    // },
    // load ( id ) {
    //   if (id === 'virtual-module') {
    //     return 'export default "This is virtual!"'; // the source code for "virtual-module"
    //   }
    //   return null; // other ids should be handled as usually
    // }
  };
}


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
      ejsRollup(),
      // ejs({
      //   include: ['**/*.ejs'], // optional, '**/*.ejs' by default
      //   // exclude: ['**/index.html'], // optional, undefined by default
      //   compilerOptions: {
      //     client: true,
      //     strict: false,
      //     _with: false,
      //   }, // optional, any options supported by ejs compiler
      // }),
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
