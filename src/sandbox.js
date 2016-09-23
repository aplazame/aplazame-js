'use strict';

function _errorData(err) {
  (console.info || console.log)('%c[non blocking error] %caplazame.js\n\n', 'font-weight: bold; color: #267BBD;', 'color: #267BBD;');

  var filename = err.fileName ? err.fileName.lastIndexOf('/') : '<not defined>';
  var stamp = new Date();
  var str = '%cname: %c' + err.name +
          '\n%cError: %c' + err.message +
          '\n%cFile: %c' + filename;

  console.log(str, 'font-weight: bold;', 'color: #e74c3c;', 'font-weight: bold;', 'font-weight: normal; color: #e74c3c;', 'font-weight: bold;', 'font-weight: normal;');
  if( err.stack ) {
    console.log('%c' + err.stack, 'background-color: #ffffee; line-height: 2;');
  }
}

module.exports = function (func) {
  try{ func(); }
  catch(err) {
    _errorData(err);
  }
};
