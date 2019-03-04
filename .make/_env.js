
const YAML = require('js-yaml')
const fs   = require('fs')
const path   = require('path')

var _branch = process.env.CI_BRANCH ||
      process.env.CIRCLE_BRANCH ||
      process.env.DRONE_BRANCH ||
      process.env.GIT_BRANCH ||
      require('git-rev-sync').branch() ||
      ('' + require('child_process').execSync('git symbolic-ref --short -q HEAD 2>/dev/null')).trim()

var _build_for = process.env.APP_BUILD
var _demo_settings = process.env.DEMO_SETTINGS

if( !_build_for ) {
  console.log('\nmissing APP_BUILD, using default: development\n')
  _build_for = 'development'
}

var __settings_yaml = fs.readFileSync( path.join(__dirname, '../settings.yml'), 'utf8')
var _settings = YAML.safeLoad( __settings_yaml )

module.exports = {
  branch: _branch,
  mode: _build_for,
  is_prod: _build_for === 'production',
  settings: _settings[_build_for] || _settings.development,
  demo_settings: _settings.demo[_demo_settings] || (
    _build_for === 'production' ? null : _settings.demo.dev
  ),
}
