//https://www.hackerrank.com/challenges/palindrome-index/problem

// def palindromeIndex(s):
//     mid = len(s)//2
//     for i in range(mid):
//         opp = len(s) - 1 - i
//         if s[i] != s[opp]:
//             if s[i+1] == s[opp] and s[i+2] == s[opp-1]:
//                 return i
//             elif s[opp-1] == s[i] and s[opp-2] == s[i+1]:
//                 return opp
//     return -1

function palindromeIndex(s){
    let mid = Math.floor(s.length/2);
    let len = s.length;
    for(let i=0; i<mid; i++){
        let opp = len -1-i;
        console.log(s[i] + ' ' + s[opp]);
        if(s[i] !=s[opp]){
            // console.log('')
            if(s[i+1] == s[opp] && s[i+2] == s[opp-1])
                return i;
            else if(s[opp-1] == s[i] && s[opp-2] == s[i+1])
                return opp;
        } 
    }
    return -1;
}

// console.log(palindromeIndex('aaab'));
// console.log(palindromeIndex('baa'));
// console.log(palindromeIndex('aaa'));
// console.log(palindromeIndex('racecar'));


// s = s.split('');
//   for (let i = 0; i < s.length / 2; i++) {
//     if (s[i] !== s[s.length - i - 1]) {
//       let arr = s.slice(i + 1, s.length - i);
//       return arr.join('') === arr.reverse().join('') ? i : s.length - i - 1;
//     }
//   }
//   return -1;
  