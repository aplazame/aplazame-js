
describe('aplazame init', function () {

  it('init with no args should throw an error', function () {
    try{
      aplazame.init();
    } catch(err) {
      expect(err.message).toBe('aplazame.init({options}) requires options');
    }
  });

  it('init without publicKey in options should throw an error', function () {
    try{
      aplazame.init({});
    } catch(err) {
      expect(err.message).toBe('aplazame.init({options}) requires at least the publicKey');
    }
  });

  // it('should set aplazame env publicKey', function () {
  //   aplazame.init({ publicKey: '9a987ay987ay9a87ya' });
  //   expect(aplazame.getEnv().publicKey).toBe('9a987ay987ay9a87ya');
  // });
  //
  // it('should set aplazame env version', function () {
  //   aplazame.init({ publicKey: '9a987ay987ay9a87ya', version: 2 });
  //   expect(aplazame.getEnv().version).toBe(2);
  // });
  //
  // it('should set aplazame env sandbox', function () {
  //   aplazame.init({ publicKey: '9a987ay987ay9a87ya', version: 2, sandbox: true });
  //   expect(aplazame.getEnv().sandbox).toBe(true);
  // });

});
