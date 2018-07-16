

function getErrorObject(){
  try { throw Error('Stack'); } catch(err) { return err; }
}

// function shortDate (d) {
//   return d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate() + ''
// }

var history = [],
    start_time = new Date().getTime();

function dumpSingleLog (l) {
  var line1_color = '#277bbd';
  // if( l.type === 'error' ) line1_color = 'FireBrick';
  // console.log('%c' + new Date + ' (' + (l.time.getTime() - start_time) + 'ms)' , 'color: #333a3e; font-weight: 500; font-style: italic;');
  console.groupCollapsed('%c' + l.time.toISOString() + ' (' + (l.time.getTime() - start_time) + 'ms)' , 'color: #333a3e; font-weight: 500; font-style: italic;');
  console.log(l.stack.join('\n'));
  console.groupEnd();

  if( l.type === 'error' && console.error ) {
    console.error.apply(console, l.args);
  } else if( l.type === 'warn' && console.error ) {
    console.warn.apply(console, l.args);
  } else if( l.type === 'info' && console.error ) {
    console.info.apply(console, l.args);
  } else {
    console.log.apply(console, [
      '%c' + l.args[0], 'color: ' + line1_color + '; font-weight: bold;'
    ].concat( l.args.slice(1) ) );
  }
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
      clean: caller_line.slice(index + 2, caller_line.length),
    },
    stack: (err && err.stack.split(/\n/) || []).slice(3).map(function (line) {
      return line.trim();
    }, []),
  };

  if( this.type ) l.type = this.type;

  history.push(l);
  // dumpSingleLog(l);
}

log.warn = log.bind({ type: 'warn' });
log.error = log.bind({ type: 'error' });

log.dump = function () {
  history.forEach(dumpSingleLog);
};

log.history = history;

module.exports = log;
