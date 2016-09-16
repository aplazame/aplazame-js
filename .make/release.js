'use strict';

module.exports = function (nitro) {

  nitro.task('release', function () {

    nitro.github.release( 'v' + require('../package').version, {
      branch: 'release'
    });

  });


};
