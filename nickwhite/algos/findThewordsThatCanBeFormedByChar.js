

// function findThewordsThatCanBeFormedByCha(arr,s){

//     let word = {};
//     let count =0;

//     for(let i=0; i<s.length; i++){
//         if(word[s[i]]){
//             word[s[i]] +=1;
//         }else{
//             word[s[i]] =1;
//         }
//     }
//     arr.forEach(chars=>{        
//         for(let i=0; i<chars.length; i++){
//             if(word[chars[i]] >=0){
//                 count++;
//                 word[chars[i]] --;
//             }
//         }
        
//     });

//     return count;
// }

// console.log(findThewordsThatCanBeFormedByCha(['cat','bt','hat','tree'],'atach'));

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let word = {};
    let count =0;

    for(let i=0; i<chars.length; i++){
        if(word[chars[i]]){
            word[chars[i]] +=1;
        }else{
            word[chars[i]] =1;
        }
    }
    words.forEach(char=>{ 
        let validCount=0;
        for(let i=0; i<char.length; i++){
            if(word.hasOwnProperty(char[i])>0){
                validCount++;
                word[char[i]] -=1;
            }
        }
        if(validCount === char.length){
            count+=validCount;
        }
        
        
    });

    return count;
};

console.log(countCharacters(['cat','bt','hat','tree'],'atach'));



// const countCharacters = (words, chars) => {
//     let ret = 0;
//     for(let word of words){
//         if(isGood(word, chars)) ret += word.length;
//     }
//     return ret;
// };

// const isGood = (word, chars) => {
//     const charsArray = chars.split('');
//     for(let ch of word){
//         const index = charsArray.indexOf(ch)
//         if(index >= 0){
//           charsArray[index] = null;   
//         }else{
//             return false;
//         }
//     }
//     return true;
// }



// var countCharacters = function(words, chars) {
//     const dict = new Map();
//     chars.split('').forEach(c => {
//         if(dict.has(c)) {
//             dict.set(c, dict.get(c) + 1);
//         } else {
//             dict.set(c, 1);
//         }
//     })
//     const reducer = (acc, curr) => {
//         const reference = new Map(dict);
//         for(let i = 0; i< curr.length; i++) {
//             if(reference.has(curr[i]) && reference.get(curr[i]) > 0) {
//                 if(i === curr.length - 1) acc += curr.length;
//                 reference.set(curr[i], reference.get(curr[i]) - 1);
//             } else {
//                 break;
//             }
//         }
//         return acc;   
//     }
//     return words.reduce(reducer, 0);
// };


// var countCharacters = function(words, chars) {
    
//     let result = "";
//     for(let word of words){
//         if(checkIfGood(word,chars))
//                 result+=word;
//     }
//     return result.length;
// };

// function checkIfGood(word, chars){
//     for(let letter of word){
//         if(!chars.includes(letter))
//             return false
//         else
//             chars = chars.replace(letter,"");
//     }
//     return true;
// }




// like this the most:
// function countCharacters(words, chars) {
//     const charMap = createMap(chars);
//     let ret = 0;
//     for (const word of words) {
//       isGoodWord(word, charMap) && (ret += word.length);
//     }
//     return ret;
    
//     function createMap(word) {
//       const map = new Map();
//       for (const ch of word) {
//         const count = map.get(ch) || 0;
//         map.set(ch, count + 1);
//       }
//       return map;
//     }
    
//     function isGoodWord(word, charMap) {
//       const wordChars = createMap(word);
//       for (const [key, value] of wordChars) {
//         if (!charMap.has(key) || charMap.get(key) < value) {
//           return false;
//         }
//       }
//       return true;
//     }
//   }