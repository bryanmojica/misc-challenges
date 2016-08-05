
// count occurences of char in string, passing the char as a key and the # occurences as the value
var letterObject = function (string) {

	var result = {};

	for ( var i = 0; i < string.length; i ++ ) {
		result[string[i]] ? result[string[i]] ++ : result[string[i]] = 1;
	}

	return result;

};