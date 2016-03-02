// declare a variable called "numArr" which is an array containing the numbers 1, 2, and 3. then print it to the console

var numArr = [1, 2, 3];

console.log(numArr);


// define a function "multiplyBy2" the takes one number, multiplies it by 2, and returns that value

function multiplyBy2 (num) {
  return num * 2;
}

console.log(multiplyBy2(2));


// define a function "difference10" that takes one number and returns its difference from 10. the output should always be positive (passing 8 or 12 should both return 2)

function difference10 (num) {
  return Math.abs(num - 10);
}

console.log(difference10(3));


// define a function "map" which takes two arguments, an array and a callback function. "map" will iterate/loop through the array and pass each array element to the callback as an argument. Each output from the callback is pushed to a new array. "map" will return this new array.

function map (array, callback) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}


// use your "map" to find the differences from 10 of each number in numArr

console.log(map(numArr, difference10));



// define a function called "every" which takes two arguments, an array and a callback function. this callback can be considered a "test", as it will return true or false. "every" will iterate/loop through the array and pass each array element to the callback as an argument. if every output from the callback/test is "true", every will return true. if any of the outputs is "false", every will return false. 

function every (array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (!callback(array[i]))   {
      return false;
    }  
  }
  return true;
}

// use your "every" to determine if every number in numArr is greater than 0

function greaterThan0 (num) {
  if (num > 0) {
    return true;
  }
  else {
    return false;
  }
}

console.log(greaterThan0(-1));
console.log(greaterThan0(1));

console.log(every(numArr, greaterThan0));


// refactor "every" so that it uses the built-in "reduce" method instead of a "for" loop
function every2 (array, callback) { 
  return array.reduce(function(previousValue, currentValue, currentIndex) {
    if (previousValue) {
      return callback(currentValue);
    }
    else {
      return false;
    }
  }, true);
}
console.log(every2(numArr, greaterThan0));