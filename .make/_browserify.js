
var nitro = require('nitro');
var yamlify = nitro.require('yamlify');
var stringify = nitro.require('stringify');
var browserify = nitro.deasync(function(filepath, done) {
  var b;
  console.log('----------------------', process.cwd(), filepath);
  // console.log(path.join(process.cwd(), filepath));
  b = nitro.require('browserify')();
  b.add(path.join(process.cwd(), filepath));
  b.transform(yamlify);
  b.transform(stringify, {
    appliesTo: { includeExtensions: ['.html', '.svg'] },
    minify: true,
  });
  b.bundle(function(err, result) {
    if (err) {
      console.log(err);
      process.exit(2);
    }
    done(null, result);
  });
});

module.exports = browserify;
