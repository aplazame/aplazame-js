module.exports = function(config) {

  var configuration = require('./common.conf');

  configuration.files.unshift('../aplazame.min.js');

  if(process.env.TRAVIS){
    configuration.browsers = [ 'Chrome_travis_ci', 'Firefox' ];
  }

  config.set(configuration);
};
