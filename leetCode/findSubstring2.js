
function findSubstring(s,words){
    let map = {};
    let res = [];
    for(let w of words){
        if(map.hasOwnProperty(w)){
            map[w] +=1;
        }else{
            map[w] = 1;
        }
    }
    if(s ==='' || words.length === 0) return res;

    let wordCount = words.length;
    let wordLen = words[0].length;

    for(let i =0; i < s.length - wordCount * wordLen; i++){
        let seen = {};

        for(let j =0; j < wordCount; j++){
            nextIndex = i + j * wordLen;
            console.log(nextIndex)
            let word = s.slice(nextIndex, nextIndex + wordLen);
            console.log(word)
            if(!map.hasOwnProperty(word)) break;

            if(seen.hasOwnProperty(word)){
                seen[word] +=1;
            }else{
                seen[word] = 1;
            }
            console.log(word + ' ' + seen[word] + ' ' + map[word])
            if(seen[word] > map[word]) break;

            if(j+1 === wordCount) res.push(i);
        }
    }
    return res;
}

// console.log(findSubstring("barfoothefoobarman",
// ["foo","bar"]));

console.log(findSubstring("wordgoodgoodgoodbestword",
["word","good","best","good"]))



// class Solution {
//     public List<Integer> findSubstring(String s, String[] words) {
        
//         Map<String, Integer> map = new HashMap<>();
        
//         for (String word: words) {
//             map.put(word, map.getOrDefault(word, 0) + 1);
//         }
        
        
//         List<Integer> resultIndices = new ArrayList<>();
        
//         if (s == "" || words.length == 0) {
//             return resultIndices;
//         }
        
//         int wordsCount = words.length;
//         int wordLength = words[0].length();
        
//         for (int i=0; i<=s.length() - wordsCount * wordLength; i++) {
//             Map<String, Integer> wordsSeen = new HashMap<>();
            
//             for (int j=0; j<wordsCount; j++) {
//                 int nextWordIndex = i + j * wordLength;
//                 String word = s.substring(nextWordIndex, nextWordIndex + wordLength);
                
//                 if (!map.containsKey(word)) {
//                     break;
//                 }
                
//                 wordsSeen.put(word, wordsSeen.getOrDefault(word, 0) + 1);
                
//                 if (wordsSeen.get(word) > map.getOrDefault(word, 0)) {
//                     break;
//                 }
                
//                 if (j + 1 == wordsCount) {
//                     resultIndices.add(i);
//                 }
                
//             }
//         }
        
//         return resultIndices;
        
//     }
// }


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// /**
//  * https://leetcode.com/problems/substring-with-concatenation-of-all-words/
//  * @param {string} s
//  * @param {string[]} words
//  * @return {number[]}
//  */
var findSubstring = function(s, words) {
    if (words.length === 0 || s.length === 0) return []
    
    const check = function (checkStr, checkWords) {
      if (checkWords.length === 1) {
        return checkStr === checkWords[0];
      } 
     
      let curWord = checkStr.slice(0, checkWords[0].length);
        
      let count = 0;
      let newWords = checkWords.filter((word) => {
        if (!count) {
          if (curWord === word) count++;
            return curWord !== word
          } else {
            return true
          }
        });
        
      if (!checkWords.includes(curWord)) return false
        
      return checkWords.includes(curWord) && check(checkStr.slice(checkWords[0].length), newWords);
    }
    
    let result = [];
    
    let maxInd = s.length-(words[0].length*words.length);
    
    for (let i = 0; i <= maxInd; i++) {
        let curWord = s.slice(i, i+words[0].length);
        
        if (words.includes(curWord)) {
            
            let count = 0;
             let newWords = words.filter((word) => {
                 if (!count) {
                     if (curWord === word) count++;
                     return curWord !== word
                 } else {
                     return true
                 }
             });
            
            if (newWords.length === 0) result.push(i);
            else {
                let newStr = s.slice(i+words[0].length, i+words[0].length+newWords.length*words[0].length);
                console.log(i, 'newStr', newStr)
                if (check(newStr, newWords)) result.push(i)
            }
      
        }
    }
        return result;
};