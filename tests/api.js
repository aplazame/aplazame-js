
describe('apiGet', function () {

  var request;
  XMLHttpRequest.prototype.send = function () {
    request = this;
    setTimeout(function () {
      console.log('request.send', request.options );
      request.resolve({
        data: { foo: 'bar' },
        status: 200,
        headers: request.getHeaders,
        xhr: request
      });
    });
  };

  beforeEach(function () {
  });

  it('should send expected host and headers', function (done) {
    aplazame.apiGet({
      params: {
        foo: 'bar'
      }
    }).success(function (response) {
      expect(request.options.url).toBe('https://api.aplazame.com/?foo=bar');
      expect(request.options.headers.accept).toBe('application/vnd.aplazame-v1+json');
      done();
    });
  });

});
