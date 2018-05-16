'use strict';

var log = require('./tools/log');

module.exports = function (func) {
  try{ func(); }
  catch(err) {
    console.log('[error]', err);
    log('[error]', err);
  }
};
