
const YAML = require('js-yaml')
const fs   = require('fs')
const path   = require('path')

var _branch = process.env.CI_BRANCH ||
      process.env.CIRCLE_BRANCH ||
      process.env.DRONE_BRANCH ||
      process.env.GIT_BRANCH ||
      require('git-rev-sync').branch() ||
      ('' + require('child_process').execSync('git symbolic-ref --short -q HEAD 2>/dev/null')).trim()

var _build_for = process.env.APP_BUILD || 'development'

var __settings_yaml = fs.readFileSync( path.join(__dirname, '../settings.yml'), 'utf8')
var _settings = YAML.safeLoad( __settings_yaml )

module.exports = {
  branch: _branch,
  mode: _build_for,
  is_prod: _build_for === 'production',
  settings: _settings[_build_for] || _settings.development,
}
