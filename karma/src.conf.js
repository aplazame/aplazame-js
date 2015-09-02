module.exports = function(config) {
  'use strict';
  
  var configuration = require('./common.conf');

  configuration.files.unshift('../dist/aplazame.js');

  if(process.env.TRAVIS){
    configuration.browsers = [ 'Chrome_travis_ci', 'Firefox' ];
  }

  if(process.env.DRONE){
    configuration.browsers = [ 'Chrome' ];
  }

  config.set(configuration);
};
