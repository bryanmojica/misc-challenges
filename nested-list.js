// Given a nested list of integers, return the sum of all integers in the list weighted by their depth.



function nestedList (array) {
    // create var total
    // loop through array, 
        // multipling the index + 1 times the value
        // update total 
    // return total
    
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += (i + 1) * array[i];
    }
    return total;
}

console.log(nestedList ([1,4,6]));