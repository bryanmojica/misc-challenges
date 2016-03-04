

var myArray = [1, 2, 3, 4, 5];

var myObject = {name: "Bryan Mojica", age: 28, email:"bryan@trestian.com"};

function print (num) {
	console.log(num);
}

print(myArray[1]);

print(myObject["name"]);

var scores = [10345, 23432, 333356];

each(scores, print);
//10345
//23432
//333356

var capitals = {
  California: 'Sacramento',
  Vermont: 'Montpelier',
  Arizona: 'Phoenix'
};

each(capitals, print);


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

//create new array, after invoking callback on element

var allottedMinutes = [15, 20, 32];

var double = function (num) {
  return num * 2;
};

var doubledAllottments = map(allottedMinutes, double);
console.log(doubledAllottments); 
// [30, 40, 64]

function map (collection, callback) {
	var result = [];
  each(collection, function(item) {
  	result.push(callback(item));
  });
  return result;
};


filter([1,2,3,4,5], function(val){return val > 2;});
// [3,4,5]

function filter (collection, predicate) {
	var result = [];
  each(collection, function(item) {
  	if (predicate(item)) {
    	result.push(item);
    }
  });
  return result;
}


var recentSavings = [4000, 5500, 60, 300];
var pastSavings = 1000;

var add = function (a, b) {
  return a + b;
};

var totalSavings = reduce(recentSavings, add, pastSavings);
// 10860

function reduce (collection, accumulator, startValue) {
  each(collection, function(item) {
    startValue = accumulator(item, startValue);
  });
  return startValue;
};

// sum even integers
sumEvenIntegers([1,2,3,4]);
//6

function sumEvenIntegers(collection) {
	reduce(collection, function (item1, item2) {
  	if (item1 % 2 === 0) {
    	return item1 + item2;
    }
    else {
    	return item2;
    }
  }, 0);
}

