

describe('aplazame checkout', function () {

  var body = document.body;

	beforeEach(function () {
		body.innerHTML = '';
	});

  it('iframe should be injected in document body', function () {

    aplazame.checkout();

    expect( document.querySelector('iframe') ).toBeDefined();

  });
});
