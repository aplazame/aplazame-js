
import {_isArray, _isFunction} from './type';
import {find} from './list';

export var HIGHLIGHTED_CHOICES_LENGTH = 4;

var _push = Array.prototype.push;

function _byNumInstalments (a, b) {
  return a.num_instalments - b.num_instalments;
}

function _sliceAndSort (choices_list, chunk_length) {
  return choices_list.slice(0, chunk_length).sort(_byNumInstalments);
}


export function getHighlightedChoices (choices, api_highlighted_num_instalments, hasCampaign) {
  if( !_isArray(choices) ) throw new TypeError('choices should be an Array');
  if( !_isArray(api_highlighted_num_instalments) ) throw new TypeError('api_highlighted_num_instalments should be an Array');
  if( !_isFunction(hasCampaign) ) throw new TypeError('hasCampaign should be a Function');

  var highlighted_choices = choices.filter(hasCampaign);

  if( highlighted_choices.length >= HIGHLIGHTED_CHOICES_LENGTH ) return _sliceAndSort(highlighted_choices, HIGHLIGHTED_CHOICES_LENGTH);

  var _isNotAdded = function (choice) {
    return highlighted_choices.indexOf(choice) === -1;
  };

  api_highlighted_num_instalments.forEach(function (num_instalments) {
    var _choice = find(choices, function __matchesNumInstalments (choice) {
      return choice.num_instalments === num_instalments;
    });

    if( _choice && _isNotAdded(_choice) ) highlighted_choices.push(_choice);
  });

  if( highlighted_choices.length >= HIGHLIGHTED_CHOICES_LENGTH ) return _sliceAndSort(highlighted_choices, HIGHLIGHTED_CHOICES_LENGTH);

  _push.apply(highlighted_choices, choices.filter(_isNotAdded) );

  return _sliceAndSort(highlighted_choices, HIGHLIGHTED_CHOICES_LENGTH);
}

export function hasCampaignCurry (annual_equivalent_reference) {
  return function hasCampaign (choice) {
    return choice.annual_equivalent < annual_equivalent_reference;
  };
}

// function _fillWith( array_to_fill, array, max_length ){
//    var array_to_fill_length = array_to_fill.length;
//   max_length = max_length?max_length:4;
//    if ( array_to_fill_length < max_length ) {
//     for (var i = 0, array_length = array.length; i < array_length; i++){
//       if ( array_to_fill_length < max_length ) {
//         if (array_to_fill.map(function(item){return item.num_instalments; }).indexOf(array[i].num_instalments) === -1){
//           array_to_fill.push(array[i]);
//           array_to_fill_length = array_to_fill.length;
//         }
//       }
//     }
//   }
// }
//
// var all_choices =   conditions.num_instalments_choices;
// var choices_with_campaign = all_choices.filter( function( choice ){
//   return choice.annual_equivalent < ( conditions.annual_equivalent_reference || 2450);
// } );
//
// var choices_highlighted = !conditions.instalment_plan.options.highlighted_num_instalments?conditions.current_payday_choice.instalments.slice(0,4):conditions.current_payday_choice.instalments.filter( function (a) {
//   return conditions.instalment_plan.options.highlighted_num_instalments.indexOf(a.num_instalments) > -1;
// });
//
// conditions.num_instalments_choices_highlighted = [];
//
// _fillWith(conditions.num_instalments_choices_highlighted, choices_with_campaign);
// _fillWith(conditions.num_instalments_choices_highlighted, choices_highlighted);
// _fillWith(conditions.num_instalments_choices_highlighted, all_choices);
//
// conditions.num_instalments_choices_highlighted.sort( function (a,b) {
//   return a.num_instalments - b.num_instalments;
// });
