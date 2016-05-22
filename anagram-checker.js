function isAnagram (s, t) {


var sSorted = s.split('').sort().join('');
var tSorted = t.split('').sort().join('');
    

if (sSorted == tSorted) {
    return true;
}
else {
    return false;
    }
}

    console.log(isAnagram ('tabb', 'babt'));

