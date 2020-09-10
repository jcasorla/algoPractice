//https://www.algoexpert.io/questions/Longest%20Palindromic%20Substring

//passes all test cases except one
// function longestPalindromicSubstring(string) {
// let len = string.length;
//     let cur = '', out = '';
    
//     for(let i =0; i<len; i++){
//         if(string[i] === string[i+1]){
//             cur = expandSub(string, i, i+1);
//         }else{
//             cur = expandSub(string, i, i);
//         }
//         if(string[i-1] === string[i+1]){
//             cur = expandSub(string, i-1, i+1);
//         }
        
//         // if(cur.length !==0){
//         //     out = cur.length > out.length ? cur : out;
//         // }
//     }
//     return out.length ===0 ? string[0] : out;
// }
// function expandSub(str,l,r){
//     let len = str.length, isPalin = false;
//     while(str[l] === str[r] && l >=0 && r < len){		
//         isPalin = true;
//         l--,r++;
//     }
//     return isPalin === true ? str.slice(l+1,r) : '';
// }

//slightly modified my solution:
function longestPalindromicSubstring(string) {
    let len = string.length;
    let cur = '', out = '';
    
    for(let i =0; i<len; i++){
       
            const odd = expandSub(string, i-1, i+1);
            const even = expandSub(string, i-1,i);
            cur = odd.length > even.length ? odd : even;
            out = cur.length > out.length ? cur : out;        
      
    }
    return out;
}
function expandSub(str,l,r){
    let len = str.length;
    while(l >=0 && r < len){
                if(str[l] !==str[r]) break
        
        l--,r++;
    }
    return str.slice(l+1,r);
}
console.log(longestPalindromicSubstring('abaxyzzyxf')); //xyzzyx
console.log(longestPalindromicSubstring('a'));//a
console.log(longestPalindromicSubstring('it\'s highnoon'));//noon
console.log(longestPalindromicSubstring('abcdefgfedcbazzzzzzzzzzzzzzzzzzzz')); //abcdefgfedcba
console.log(longestPalindromicSubstring('z234a5abbba54a32z'));//5abbba5


