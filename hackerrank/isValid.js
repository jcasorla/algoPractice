//https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem
function isValid(s) {
    let o = {};
    let count = 0;
    for (let char of s) {
        !o[char] ? o[char] = 1 : o[char]++
    }
    let arr = Object.values(o)
    let a = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== a) count++;
        if (count > 1)
            return "NO"
    }
    return "YES"
}