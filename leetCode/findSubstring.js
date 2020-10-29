// /**
//  * https://leetcode.com/problems/substring-with-concatenation-of-all-words/
//  * @param {string} s
//  * @param {string[]} words
//  * @return {number[]}
//  */
// var findSubstring = function(s, words) {
//     //barfoothefoobarman", words = ["foo","bar"]
    
//   //  "wordgoodgoodgoodbestword"
//     // x              x
//     let len =0;
//     let res =[];
//     words.forEach(data=>{
//         len += data.length;
//     });
//     // console.log(len)
//     let p1 = 0;
//     let p2 = len;
//     while(p2 <= s.length){
//         let sub = s.slice(p1,p2);
//         console.log(sub)
//         if(contains(sub,words)){
//             res.push(p1);
//         }
//         p1++;
//         p2++;
//     }
//     // console.log(contains(s.slice(p1,p2),words));
//     // console.log(res)
//     return res;
// };

// function contains(sub,words){
//     let flag = true;
//     words.forEach(data=>{
//         console.log(data);
//         if(!sub.includes(data)) {
//             flag = false;             
//         }
        
//     })
    
//     return flag;
// }


// /**
//  * @param {string} s
//  * @param {string[]} words
//  * @return {number[]}
//  */
// var findSubstring = function(s, words) {
//     //barfoothefoobarman", words = ["foo","bar"]
//     //x        x
//   //  "wordgoodgoodgoodbestword"
//     // x              x
    
//     /**map = {
//         word: 2
//         good: 1
//         best: 1
//     }
//     */
    
//     let len =0;
//     let res =[];
//     wordlen = words[0].length;
//     words.forEach(data=>{
//         len += data.length;
//     });
//     let map = hash(words);
    
//     let p1 = 0;
//     let p2 = len;
//     // let sub = s.slice(8,24);
//     // console.log(contains(sub,map,wordlen));
//     while(p2 <= s.length){
//         let sub = s.slice(p1,p2);
//         console.log(sub)
//         console.log(p1)
//         console.log(p2)
//         //console.log(map)
//         if(contains(sub,map,wordlen)){
//             res.push(p1);
//         }
//         p1++;
//         p2++;
//     }
    
//     return res;
// };
// function contains(sub,map,wordlen){
//     let l =0;
//     let r = wordlen;
    
//     let seen = {};
//     console.log(sub.length);
//     while(r <= sub.length){
//         let word = sub.slice(l,r);
//         console.log(word)
//         seen[word] = seen.hasOwnProperty(word) ? seen[word] +=1 : seen[word]=1;
//         console.log(seen[word]);
//         console.log(map[word])
//         if(seen[word] > map[word]) return false;
//         console.log(l)
//         console.log(r);
//         l+=wordlen;
//         r+=wordlen;
//     }
//     for(let key in map){
//         // let val = map[key] || 0;
//         // let seenVal = seen[key] || 0;
//         if(map[key] !== seen[key]) return false;
//     }
//     return true;
// }
// // function contains(sub,map1){
// //     let map = {...map1}
// //     let words = Object.keys(map);
    
// //     console.log(map)
// //     console.log(sub)
// //     let i = 0;
// //     while(i < words.length){
// //         let word = words[i];
        
// //         // console.log(i)
// //         // console.log(word)
// //          let val = map[word];
       
// //         console.log(i + ' ' + word + ' ' + 'val: ' + val)
         
// //         if(!sub.includes(word) ){
// //             return false;
// //         }
        
// //         if(val >1){
// //             map[word] -=1;
// //             val = map[word];
// //             //loop again on this index;
// //             // i--;
            
// //         }
// //         // else if(val <=0){
// //         //     delete map[word];
// //         //     val = map[word]
// //         //     i++;
            
// //         // }
// //         else if(val <= 1){
// //             map[word] -=1;
// //             val = map[word];
// //             i++;
// //         }
// //         console.log(i + ' ' + word + ' ' + 'val: ' + val)
// //         if(val === undefined) return false;
        
        
// //     }
// //     console.log(map)
    
// //     for(let key in map){
// //         console.log(key +' '+ map[key])
// //         if(map[key] >=1) return false;
// //     }
   
// //     return true;
// // }

// // function contains(sub,words){
// //     let flag = true;
// //     words.forEach(data=>{
// //         console.log(data);
// //         if(!sub.includes(data)) {
// //             flag = false;             
// //         }
        
// //     })
    
// //     return flag;
// // }

// function hash(words){
//     let map = {};
    
//     words.forEach(w=>{
//         if(map.hasOwnProperty(w)) map[w] += 1;
//         else map[w] = 1;
//     });
    
//     return map;
// }



/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    
    let res =[];
    wordlen = words[0].length;
    wordCount = words.length;
    let len = wordCount * wordlen;
    let map = hash(words);
    
    let p1 = 0;
    let p2 = len;
    while(p2 <= s.length){
        let sub = s.slice(p1,p2);
        if(contains(sub,map,wordlen)){
            res.push(p1);
        }
        p1++;
        p2++;
    }
    
    return res;
};
function contains(sub,map,wordlen){
    let l =0;
    let r = wordlen;
    
    let seen = {};
    while(r <= sub.length){
        let word = sub.slice(l,r);
        seen[word] = seen.hasOwnProperty(word) ? seen[word] +=1 : seen[word]=1;
        if(seen[word] > map[word]) return false;
        l+=wordlen;
        r+=wordlen;
    }
    for(let key in map){
        if(map[key] !== seen[key]) return false;
    }
    return true;
}

function hash(words){
    let map = {};
    
    words.forEach(w=>{
        if(map.hasOwnProperty(w)) map[w] += 1;
        else map[w] = 1;
    });
    
    return map;
}

console.log(findSubstring("barfoothefoobarman", //[0,9]
["foo","bar"]))
console.log(findSubstring("wordgoodgoodgoodbestword",//[]
["word","good","best","word"]));

console.log(findSubstring("wordgoodgoodgoodbestword", //[8]
["word","good","best","good"]))

//https://leetcode.com/problems/substring-with-concatenation-of-all-words/discuss/739338/JAVA-Simple-Solution%3A-Sliding-Window-%2B-HashMap
