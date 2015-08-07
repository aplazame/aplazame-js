module.exports = {
  frameworks: ['jasmine'],
  plugins: [
    'karma-jasmine',
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-story-reporter'
  ],
  files: [
    '../tests/{,**/}_html.js',
    '../tests/{,**/}*.js',
  ],
  browsers: [ 'Chrome', 'Firefox' ],
  customLaunchers: {
    Chrome_travis_ci: {
      base: 'Chrome',
      flags: ['--no-sandbox']
    }
  },
  singleRun: true,
  reporters: ['story']
};
