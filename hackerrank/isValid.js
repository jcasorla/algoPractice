//https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
function isValid(s) {
    let o = {};
    let count = 0;
    for (let char of s) {
        !o[char] ? o[char] = 1 : o[char]++
    }
    let arr = Object.values(o)
    console.log(arr);
    console.log(Object.keys(o));
    let a = arr[0]
    console.log(a);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== a) count++;
        console.log(arr[i]);        
        if (count > 1)
            return "NO"
    }
    return "YES"
}

// console.log(isValid('aabbcd'));
console.log(isValid('abcdefghhgfedecba'));