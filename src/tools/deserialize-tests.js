/* global describe, it */

var assert = require('assert'),
    deserialize = require('./deserialize').deserialize,
    toUnderscoreCase = require('./deserialize').toUnderscoreCase,
    toCamelCase = require('./deserialize').toCamelCase,
    src_set = [
      'lorem_ipsum_text',
      'loremIpsumText',
      'lorem-ipsum-text',
      'lorem-Ipsum-Text',
      'lorem_IpsumText',
      'lorem_Ipsum-text',
      'lorem_Ipsum-text',
    ];

describe('deserialize', function () {

    it('raw', function() {
      assert.deepEqual( deserialize('foo-bar=foobar&lorem-ipsum-text=dolor sit amet'), { foo_bar: 'foobar', lorem_ipsum_text: 'dolor sit amet' });
    });

    it('decode', function() {
      assert.deepEqual( deserialize('foo-bar=foobar&lorem-ipsum-text=' + encodeURI('dolor sit amet'), true ), { foo_bar: 'foobar', lorem_ipsum_text: 'dolor sit amet' });
    });

});

describe('toUnderscoreCase: lorem_ipsum_text', function () {

  src_set.forEach(function (src) {
    it(src, function() {
      assert.deepEqual( toUnderscoreCase(src), 'lorem_ipsum_text');
    });
  });

});

describe('toCamelCase: loremIpsumText', function () {

  src_set.forEach(function (src) {
    it(src, function() {
      assert.deepEqual( toCamelCase(src), 'loremIpsumText');
    });
  });

});
