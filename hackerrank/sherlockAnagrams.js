// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem

function sherlockAndAnagrams(s) {
    let count = 0;

    // Size of our sliding window
    for (let i = 1; i < s.length; i++) {
        let found = {};
        
        // Starting index of our sliding window
        for (let j = 0; j + i <= s.length; j++) {
            let substr = s.substr(j, i);
            console.log(substr);
            substr = substr.split('').sort().join('');
            console.log(substr);
            if (found[substr]) {
                count += found[substr];
                found[substr]++;
            } else {
                found[substr] = 1;
            }
        }
    }

    return count;
}

console.log(sherlockAndAnagrams('abba'));
console.log(sherlockAndAnagrams('abcd'));
console.log(sherlockAndAnagrams('kkkk'));
console.log(sherlockAndAnagrams('ifailuhkqq'));

