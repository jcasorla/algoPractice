var repeatedSubstringPattern = function(s) {
    // let newStr = s.slice(0,s.length/2);    
    // return newStr.repeat(2) ===s ? true : false;
    return (s + s).substring(1, 2 * s.length - 1).includes(s); 
};

console.log(repeatedSubstringPattern("aba"));
console.log(repeatedSubstringPattern("abab"));