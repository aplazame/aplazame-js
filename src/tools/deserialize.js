

function _key (o, key, value) {
	key.split('.').forEach(function (k, i, keys) {
		if( i === keys.length - 1 ) {
			o[k] = value;
		} else {
			o[k] = o[k] || {};
			o = o[k];
		}
	});
}

function toCamelCase (text) {
	return text.replace(/[_-](\w)/g, function (_matched, letter) {
		return letter.toUpperCase();
	});
}

function toUnderscoreCase (text) {
	return text.replace(/-(\w)/g, function (_matched, letter) {
		return '_' + letter;
	}).replace(/([a-z])([A-Z])/g, function (_matched, a, b) {
		return a + '_' + b;
	}).toLowerCase();
}

function deserialize (querystring, decode, throw_errors) {

	var result = {};

	querystring.split('&').forEach(function (keyValue) {
		var matched = keyValue.match(/(.*?)=(.*)/);

		if( !matched ) {
      if( !throw_errors ) return;
			throw new Error('could not parse ' + keyValue);
		}

		_key(result, toUnderscoreCase(matched[1]), decode ? decodeURI(matched[2]) : matched[2] );

	});

	return result;
}

module.exports = {
  deserialize: deserialize,
  toUnderscoreCase: toUnderscoreCase,
  toCamelCase: toCamelCase,
};
