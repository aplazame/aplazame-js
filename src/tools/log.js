

function getErrorObject(){
    try { throw Error(''); } catch(err) { return err; }
}

function log () {
  var err = getErrorObject();
  var caller_line = err.stack.split('\n')[4];
  var index = caller_line.indexOf('at ');
  var clean = caller_line.slice(index+2, caller_line.length);
}


module.exports = log;
