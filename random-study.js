// counting letters in a string
  
  function letterCounter(str) {
    var str = str.split(' ').join('');
    
    console.log(str);
    
    return str.length;
}

console.log(letterCounter('this is a test'));


function letterCounter2(arr) {
    var str = arr.join('');
    
    console.log(str);
    
    return str.length;
}

console.log(letterCounter2(['this', 'is', 'a', 'test']))


// EACH FROM SCRATCH

function each (collection, callback) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
          callback(collection[i]);
      }
    else {
      for (var key in collection) {
        callback(collection[key]);
    }
  }
}
  


// MAP FROM SCRATCH

function map (array, callback) {
    var result = [];
    for (var i = 0; i < array.length; i ++) {
        result.push(callback(array[i]));
    }
    return result;
}

// FILTER FROM SCRATCH

function filter (array, callback) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}


// EVERY FROM SCRATCH

function every (array, callback) {
    for (var i = 0; i < array.length; i ++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}

// REDUCE FROM SCRATCH

function reduce (array, accumulator, startValue) {
    for (var i = 0; i < array.length; i ++) {
        startValue = accumulator(array[i]);
    }
    return startValue;
}


// MAP USING EACH

function map2 (array, callback) {
    var result = [];
    each(array, function(item) {
        result.push(callback(item));
    })
    return result;
}

// REDUCE USING EACH

function reduce2 (array, accumulator, startValue) {
    each(array, function(item) {
        startValue += accumulator(item, startValue);
    })
    return startValue;
}

// FILTER USING EACH

function filter2 (array, callback) {
    var result = [];
    each(array, function(item) {
        if (callback(item)) {
            result.push(item);
        }
    })
    return result;
}

// FILTER USING REDUCE

function filter3(array, callback) {
    return reduce(array, function(result, item) {
        if (callback(item)) {
            result.push(item);
        }
        return result;
    }, []);
}

// EVERY USING REDUCE

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


// REDUCE TO PUSH OBJECT

var votes = [
    "angular",
    "angular",
    "angular",
    "react"
]

function howMany (votes) {
    return votes.reduce(function(tally, vote) {
        if (!tally[vote]) {
            tally[vote] = 1;
            }
        else {
            tally[vote] ++;
        }
        return tally;
    }, {})
}

console.log(howMany(votes));

// USE REDUCE TO SUM CERTAIN NUMBERS
  
function sumEvens (array) {
    return array.reduce(function(total, x) {
        return x % 2 === 0 ? total + x : total;
    }, 0)
}
  

// STORE IN OBJECT

function doubling(num) {
  return num * 2;
} 
    
// ACCESSING OBJECT
ObjectName.PropertyName;
    //or
ObjectName["Property Name "]

// create an array of arbitrary numbers and store the 
// array in the variable arr
var arr = [1, 2, 5, 7, 10];  

// create an empty object
var obj = {};

for (var i = 0; i < arr.length; i++) {

  // the key will be the original number
  var taste = arr[i].toString();

  // the value will be the doubled number
  var value = doubling(arr[i]);

  obj[taste] = value;

} 

// print the final object 
console.log(obj['2']);