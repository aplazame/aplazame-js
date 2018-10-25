'use strict';

module.exports = function (nitro) {

  nitro.task('lint', function () {
      nitro.load('src/{,**/}*.js').process('eslint', require('../.eslintrc') );
      nitro.load('tests/{,**/}*.js').process('eslint', require('../.eslintrc') );
  });

};
