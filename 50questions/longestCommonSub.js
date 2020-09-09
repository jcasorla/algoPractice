//https://www.byte-by-byte.com/longestsubstring/?utm_source=optin_carrot&utm_medium=pdf&utm_campaign=50questions

function longestCommonSub(str1,str2){
    let r = 0, l = 0;
 
    let max = 0;
    let res = '';
    
    for(let i=0; i<str1.length; i++){

        for(let j=1; j<str1.length; j++){
            let sub = str1.substr(i,j);
            if(str2.includes(sub) && sub.length > max){
                let len = sub.length;
                max = len;
                res = sub;
            }
        }
    }
    return res;

}

//a,  b, ab, aba, bab
console.log(longestCommonSub('abab','baba')); //'aba'

// public String longestSubstring(String a, String b) {
//     String out = "";
//     if (a.length() == 0 || b.length == 0) return out;
 
//     int len = 0;
//     int[][] cache = new int[a.length()][b.length()];
 
//     for (int i = 0; i < a.length(); i++) {
//         for (int j = 0; j < b.length(); j++) { if (a.charAt(i) == b.charAt(j)) { if (i == 0 || j == 0) 
//             { cache[i][j] = 1; } else { cache[i][j] = cache[i-1][j-1] + 1; } if (cache[i][j] > len) {
//                     len = cache[i][j];
//                     out = a.substring(i - len + 1, i+1);
//                 }
//             }
//         }
//     }
//     return out;
// }