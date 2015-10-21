'use strict';

module.exports = function (nitro) {

  nitro.task('test.jshint', function () {
      nitro.load('src/{,**/}*.js').process('jshint', {
        jshintrc: nitro.file.readJSON('.jshintrc'),
        onError: function () {
          console.log('bye!!!!');
          process.exit(1);
        }
      });

      nitro.load('tests/{,**/}*.js').process('jshint', {
        onError: function () {
          process.exit(1);
        }
      });
  });

};
