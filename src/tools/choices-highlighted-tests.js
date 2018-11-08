/* global require, describe, it */

import assert from 'assert';

import {getHighlightedChoices, HIGHLIGHTED_CHOICES_LENGTH} from './choices';

function _hasCampaignEven (choice) {
  return !(choice.num_instalments%2);
}

function _hasCampaignOdd (choice) {
  return choice.num_instalments%2;
}

function _hasCampaign369 (choice) {
  return [3,6,9].indexOf(choice.num_instalments) >= 0;
}

function _hasCampaign69 (choice) {
  return [6,9].indexOf(choice.num_instalments) >= 0;
}

function _ignoreHasCampaign (choice) {
  return false;
}

function _numInstalmentsToString (choices) {
  return choices.map(function (choice) {
    return choice.num_instalments;
  }).join(',');
}

describe('highlighted-choices: getHighlightedChoices', function () {

  var num_instalments_choices = [1,2,3,4,5,6,7,8,9,10,11,12].map(function (num_instalments, i) {
        return { num_instalments: num_instalments };
      }),
      FIRST_NUM_INSTALMENTS_CHOICES = num_instalments_choices.slice(0, HIGHLIGHTED_CHOICES_LENGTH);

  console.log('num_instalments_choices', num_instalments_choices);

  it('empty api_highlighted_num_instalments', function () {

    assert.deepEqual( getHighlightedChoices(num_instalments_choices, [], _ignoreHasCampaign), FIRST_NUM_INSTALMENTS_CHOICES );

  });

  it('empty api_highlighted_num_instalments (campaigns:even)', function () {

    assert.deepEqual( getHighlightedChoices(num_instalments_choices, [], _hasCampaignEven), [
      num_instalments_choices[1],
      num_instalments_choices[3],
      num_instalments_choices[5],
      num_instalments_choices[7],
    ] );

  });

  it('empty api_highlighted_num_instalments (campaigns:even)', function () {

    assert.deepEqual( getHighlightedChoices(num_instalments_choices, [], _hasCampaignOdd), [
      num_instalments_choices[0],
      num_instalments_choices[2],
      num_instalments_choices[4],
      num_instalments_choices[6],
    ] );

  });

  it('empty api_highlighted_num_instalments (campaigns:369)', function () {

    assert.strictEqual( _numInstalmentsToString(
      getHighlightedChoices(num_instalments_choices, [], _hasCampaign369)
    ), '1,3,6,9' );

  });

  it('api_highlighted_num_instalments (campaigns:369)', function () {

    assert.strictEqual( _numInstalmentsToString(
      getHighlightedChoices(num_instalments_choices, [8], _hasCampaign369)
    ), '3,6,8,9' );

    assert.strictEqual( _numInstalmentsToString(
      getHighlightedChoices(num_instalments_choices, [8, 9], _hasCampaign369)
    ), '3,6,8,9' );

    assert.strictEqual( _numInstalmentsToString(
      getHighlightedChoices(num_instalments_choices, [8, 9, 10], _hasCampaign369)
    ), '3,6,8,9' );

    assert.strictEqual( _numInstalmentsToString(
      getHighlightedChoices(num_instalments_choices, [2, 4], _hasCampaign369)
    ), '2,3,6,9' );

  });

  it('empty api_highlighted_num_instalments (campaigns:69)', function () {

    assert.strictEqual( _numInstalmentsToString(
      getHighlightedChoices(num_instalments_choices, [], _hasCampaign69)
    ), '1,2,6,9' );

  });

  it('api_highlighted_num_instalments (campaigns:69)', function () {

    assert.strictEqual( _numInstalmentsToString(
      getHighlightedChoices(num_instalments_choices, [8], _hasCampaign69)
    ), '1,6,8,9' );

    assert.strictEqual( _numInstalmentsToString(
      getHighlightedChoices(num_instalments_choices, [8, 9], _hasCampaign69)
    ), '1,6,8,9' );

    assert.strictEqual( _numInstalmentsToString(
      getHighlightedChoices(num_instalments_choices, [2, 4], _hasCampaign69)
    ), '2,4,6,9' );

  });

});

describe('highlighted-choices: getHighlightedChoices -> TypeError', function () {

  var bad_params = [undefined, null, 'string', {}];

  it('choices', function () {

    assert.throws(function () {
      getHighlightedChoices();
    }, TypeError);

    assert.throws(function () {
      getHighlightedChoices();
    }, /choices should be an Array/);

    bad_params.forEach(function (param) {
      assert.throws(function () {
        getHighlightedChoices(param);
      }, TypeError);

      assert.throws(function () {
        getHighlightedChoices(param);
      }, /choices should be an Array/);
    });

  });

  it('api_highlighted_num_instalments', function () {

    assert.throws(function () {
      getHighlightedChoices([]);
    }, TypeError);

    assert.throws(function () {
      getHighlightedChoices([]);
    }, /api_highlighted_num_instalments should be an Array/);

    bad_params.forEach(function (param) {
      assert.throws(function () {
        getHighlightedChoices([], param);
      }, TypeError);

      assert.throws(function () {
        getHighlightedChoices([], param);
      }, /api_highlighted_num_instalments should be an Array/);
    });

  });

  it('hasCampaign', function () {

    assert.throws(function () {
      getHighlightedChoices([], []);
    }, TypeError);

    assert.throws(function () {
      getHighlightedChoices([], []);
    }, /hasCampaign should be a Function/);

    bad_params.forEach(function (param) {
      assert.throws(function () {
        getHighlightedChoices([], [], param);
      }, TypeError);

      assert.throws(function () {
        getHighlightedChoices([], [], param);
      }, /hasCampaign should be a Function/);
    });

  });

});
