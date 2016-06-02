var isAnagram = function (s, t) {
    var arrS = s.split('');
    
    var arrT = t.split('');
    
    s = arrS.sort().join('');
    
    t = arrT.sort().join('');
    
    console.log(s, t)
    
    return s === t;
}

console.log(isAnagram('rat', 'tar'));