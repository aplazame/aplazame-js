#!/usr/bin/env node
'use strict';

var fs = require('fs'),
    path = require('path');

function readJSONFile ( filepath ) {
  return JSON.parse( fs.readFileSync( filepath, { encoding: 'utf8' }) );
}

function getDir (pkgName, defaultDir) {
  try {
    return readJSONFile( '.' + pkgName + 'rc').directory;
  } catch (err) {
    return defaultDir;
  }
}

function pathExists (spath) {
  try {
    return fs.statSync( path.join(__dirname, spath) );
  } catch(err) {
    return false;
  }
}

function checkDependencies (dependencies, dirlib) {
  for( var dependence in dependencies ) {
    if( !pathExists( path.join( dirlib, dependence ) ) ) {
      return false;
    }
  }
  return true;
}

function missingDependencies (json, dirlib) {
  if( json.dependencies && !checkDependencies(json.dependencies, dirlib) ) {
    return true;
  }

  if( json.devDependencies && !checkDependencies(json.devDependencies, dirlib) ) {
    return true;
  }

  return false;
}

function nitroVersionOK () {
  var currentVersion = readJSONFile('package.json').devDependencies.nitro.replace(/^[\^~]/, ''),
      installedVersion;
  try {
    installedVersion = readJSONFile('node_modules/nitro/package.json').version.replace(/^[\^~]/, '');
  } catch(err) {
    return false;
  }

  return currentVersion === installedVersion;
}

function needsInstall () {

  var dir = {
        npm: getDir('npm', 'node_modules'),
        bower: getDir('bower', 'bower_components')
      },
      install = [];

  if( !nitroVersionOK() || !pathExists(dir.npm) || missingDependencies( require('./package'), dir.npm ) ) {
    install.push('npm');
  }

  if( pathExists('./bower.json') && missingDependencies( require('./bower'), dir.bower ) ) {
    install.push('bower');
  }

  return install;
}

needsInstall().forEach(function (libname) {
  console.log('\nrequired', libname + ' install\n');
  require('child_process').execSync(libname + ' install' + ( libname === 'bower' ? ' --allow-root' : '' ) );
});
