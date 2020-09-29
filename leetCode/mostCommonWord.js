/**
 * https://leetcode.com/problems/most-common-word/submissions/
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let map = {};
    // let arr = paragraph.split(' ');
    //paragraph = paragraph.toLowerCase().split(/[ !?',;.]/);
    let arr = paragraph.toLowerCase().split(/\W+/)
    
    arr.forEach(word=>{
        // word = word.toLowerCase();
        if(!banned.includes(word)){
            if(map.hasOwnProperty(word)){
                map[word] += 1;
            }else{
                map[word] = 1;
            }
        }
       
    });
    
    let max = 0;
    let word = '';
    for(let key in map){
        let val = map[key];        
        if(val > max){
            max = val;
            word = key;
        }
    }
    
    return word;
    
};