// https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/285/
// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// Example:

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"

// Note:

//     If there is no such window in S that covers all characters in T, return the empty string "".
//     If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

//    Hide Hint #1  
// Use two pointers to create a window of letters in S, which would have all the characters from T.
//    Hide Hint #2  
// Since you have to find the minimum window in S which has all the characters from T, you need to expand and contract the window using the two pointers and keep checking the window for all the characters. This approach is also called Sliding Window Approach.

// L ------------------------ R , Suppose this is the window that contains all characters of T 
                          
//         L----------------- R , this is the contracted window. We found a smaller window that still contains all the characters in T

// When the window is no longer valid, start expanding again using the right pointer. 

var minWindowSlidingWindow = function (s, t) {
	// `right` is -1 since every loop, we start by expanding the right boundary
	// setting this to -1 ensures that we will check the first char on the first time
    let min = "", left = 0, right = -1;
    let map = {};
	
	// this creates a map for the characters we need to include in the substring
	// we store the character and its count since it can be repeated
	// for example: "BAAC"
    t.split('').forEach(element => {
        if (map[element]==null) map[element] = 1;
        else map[element] = map[element] + 1;
    });
    console.log(Object.values(map));
	
	// sets how many different characters we still have
	// for example: given the input "BAAC", we still have 3 different characters need to check
    let count = Object.keys(map).length;

    while (right <= s.length) {
		// found a valid substring
        if (count == 0) {
		
			// try to shift left boudary to the right, this means the very left character will be removed
			// because of this, we need to check whats the affect by removing that character, 
            let current = s[left];
			
			// if this chacter is in our map, it means we ll need to find another one in the future
            if (map[current] != null) map[current]++;
            // console.log(Object.values(map));
			
			// * we must have the condition `>0` because for case like "BBBA...", count for B could be negative
            if (map[current] > 0) count++;    
			console.log(current + ' ' +   map[current]);
            let temp = s.substring(left, right+1)
            if (min == "") min = temp;
            else min = min.length<temp.length?min:temp;
			
            left++;
        } else {
            right++;
            let current = s[right];
            console.log(current + ' ' +map[current]);
			
			// decrease the count for this character
            if (map[current] != null) map[current]--;
			
            if (map[current] == 0) count--;
        }
    }
    return min;
}

console.log(minWindowSlidingWindow('ADOBECODEBANC','ABC'));