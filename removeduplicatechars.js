// write function that takes in str, return str without any duplicate letters
// ie "jessica" should return "jeica" + "bryyan" should return "bran"

function remover (str) {
  
  // var for final result
  var newString = '';
  
  // split string, storing each character in an array
  var newArray = str.split('');
  
  
  // declare new, empty object to keep track of letter and number of instances
  var result = {};
  
  // loop through array
  for (var i = 0; i < newArray.length; i++) {
  	
  	// check if the character is already a key
    if (newArray[i] in result) {
    // if it is, increment the value by 1
    	result[newArray[i]] += 1;	
    }
    
    // if the character is not already there, set its value to 1
    else {
      result[newArray[i]] = 1;
    }

  }
  
  // loop through array again, this time checking if value is 1
  for (var i = 0; i < newArray.length; i++) {
	
	// if value is 1, concat to newString
    if (result[newArray[i]] === 1) {
			newString += newArray[i];
    }
  }
  
// return transformed string
return newString;
}