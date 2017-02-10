'use strict';

var log = require('./tools/log');

module.exports = function (func) {
  try{ func(); }
  catch(err) {
    log('[error]', err);
  }
};
