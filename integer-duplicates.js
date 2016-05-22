// write function that returns true if array of numbers has any duplicates

function containsDuplicate (numbers) {
    var checkArray = [];
    
    for (var i = 0; i < numbers.length; i++) {
        if (checkArray.indexOf(numbers[i]) !== -1) {
            return true;
        }
        else {
            checkArray.push(numbers[i])
        }
    }
    
    return false;
}


console.log(containsDuplicate([1,2,3,4,2]));