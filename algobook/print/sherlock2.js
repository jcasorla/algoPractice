// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_r=next-challenge&h_v=zen\

// Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just character at index in the string, and the remaining characters will occur the same number of times. Given a string

// , determine if it is valid. If so, return YES, otherwise return NO.

// For example, if
// , it is a valid string because frequencies are . So is because we can remove one and have of each character in the remaining string. If however, the string is not valid as we can only remove occurrence of . That would leave character frequencies of

// .

// Function Description

// Complete the isValid function in the editor below. It should return either the string YES or the string NO.

// isValid has the following parameter(s):

//     s: a string

// Input Format

// A single string

// .

// Constraints

// Each character

// Output Format

// Print YES if string

// is valid, otherwise, print NO.

// Sample Input 0

// aabbcd

// Sample Output 0

// NO

// Explanation 0

// Given
// , we would need to remove two characters, both c and d aabb or a and b abcd, to make it valid. We are limited to removing only one character, so

// is invalid.

// Sample Input 1

// aabbccddeefghi

// Sample Output 1

// NO

// Explanation 1

// Frequency counts for the letters are as follows:

// {'a': 2, 'b': 2, 'c': 2, 'd': 2, 'e': 2, 'f': 1, 'g': 1, 'h': 1, 'i': 1}

// There are two ways to make the valid string:

//     Remove 

// characters with a frequency of :
// .
// Remove
// characters of frequency :

//     .

// Neither of these is an option.

// Sample Input 2

// abcdefghhgfedecba

// Sample Output 2

// YES

// Explanation 2

// All characters occur twice except for
// which occurs times. We can delete one instance of  to have a valid string.

function isValid(s) {
    if(s.length ==1){
        return 'YES';
    }

    let hash ={};

    for(let i=0; i < s.length; i++){
        if(hash[s[i]]){
            hash[s[i]] +=1;
        }else{
            hash[s[i]] =1;
        }
    }
    
    let res = {};
    for(let k in hash){

         if(res[hash[k]]){
            res[hash[k]] +=1;
        }else{
            res[hash[k]] =1;
        }        
    }  
    
    let arr = frequencies(res); 
    if(arr[0] >= 2 && arr[1] >= 2){
        return "NO";
    }
    else if(!decrease(res)){
        return "NO";
    }
    else{
        return "YES";
    }    
}
function frequencies(res){
    let min =9999;
    let arr =[];
    for(let ke in res){
         if(min > res[ke]){
             min = ke;
         }else{
             max=ke;
         }
         arr.push(res[ke]);                
    }
    return arr; 
}
function decrease(res){
    let min =9999;
    let min_val;
    let max_val;
    for(let ke in res){
        //  console.log(ke + ' ' + res[ke]); 
         if(min > res[ke]){
             min = res[ke];
             min_val = ke;
         }     
    }

    for(let key in res){
        if(key !=min_val){
            max_val = key;
        }
    }
    // console.log(min_val + '  ' + max_val);
    // console.log(min_val - 1 == max_val);

    if(min_val ==1){
        return true;
    }
    return min_val -1 == max_val ? true : false;  
}

console.log(isValid('aaaabbcc')); //N0
console.log(isValid('aabbcd')); //NO 
console.log(isValid('abcdefghhgfedecba')); //YES
console.log(isValid('aabbc')); 

//failing testcases
console.log(isValid('xxxaabbccrry')); //NO
console.log(isValid('abbccc')); //NO