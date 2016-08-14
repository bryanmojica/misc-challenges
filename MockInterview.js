


// solve this problem 

var returnLargestContigiousSum = function (array) {
  var LargestSum = 0;
  var LargestSumStart;
  var LargestSumEnd;
  

  for ( var i = 0; i < array.length; i++ ) {
    var currentSum = 0;
    
    for ( var j = i; j < array.length; j++ ) {
      currentSum += array[j];
      if ( currentSum > LargestSum ) {
        LargestSum = currentSum;
        LargestSumStart = i;
        LargestSumEnd = j;
      }
    }
  }

  console.log(LargestSum, LargestSumStart, LargestSumEnd);
};

returnLargestContigiousSum([0, 2, -10, 3, -100, 4, 5, 1, 23, 2, 10000]);