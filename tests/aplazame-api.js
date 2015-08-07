
describe('apiGet', function () {

  console.log('data-aplazame', document.querySelector('[data-aplazame]') );

  // var request;
  XMLHttpRequest.prototype.send = function () {
    var _this = this;
    setTimeout(function () {
      _this.resolve(_this);
    });
  };

  it('should use host: https://api.aplazame.com/', function (done) {
    aplazame.apiGet().then(function (request) {
      expect(request.options.url).toBe('https://api.aplazame.com/');
      done();
    });
  });

  it('should send default accept header: application/vnd.aplazame-v1+json', function (done) {
    aplazame.apiGet().then(function (request) {
      expect(request.options.headers.accept).toBe('application/vnd.aplazame-v1+json');
      done();
    });
  });

  it('should accept params', function (done) {
    aplazame.apiGet('resource', {
      params: {
        foo: 'bar'
      }
    }).then(function (request) {
      expect(request.options.url).toBe('https://api.aplazame.com/resource?foo=bar');
      done();
    });
  });

});
