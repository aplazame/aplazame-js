

function getErrorObject(){
    try { throw Error('Stack'); } catch(err) { return err; }
}

var history = [],
    start_time = new Date().getTime();

function dumpSingleLog (l) {
  console.log('%c' + new Date + ' (' + (l.time.getTime() - start_time) + 'ms)' , 'color: royalblue; font-weight: bold');
  // console.log.apply(console, l.args);
  console.log.apply(console, [].concat.call(l.args, { stack: l.stack }) );
}

function log () {
  var err = getErrorObject(),
      caller_line = err.stack.split('\n')[4] || '',
      index = caller_line.indexOf('at ');

  var l = {
    time: new Date(),
    args: [].slice.call(arguments),
    track: {
      caller_line: caller_line,
      index: index,
      clean: caller_line.slice(index + 2, caller_line.length)
    },
    stack: err && err.stack.split(/\n/) || []
  };

  history.push(l);
  // dumpSingleLog(l);
}

log.dump = function () {
  history.forEach(dumpSingleLog);
};

log.history = history;

module.exports = log;
