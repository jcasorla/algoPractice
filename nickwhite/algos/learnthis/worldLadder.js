
// https://leetcode.com/problems/word-ladder/

// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list.
// Note:

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.
// Example 1:

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.
// Example 2:

// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// Output: 0

var ladderLength = function (beginWord, endWord, wordList) {
    if (wordList.indexOf(endWord) === -1) return 0;
  
    const wordDict = {};
    const isVisited = {};
    for (const word of wordList) {
      for (let idx = 0; idx < word.length; idx++) {
        const newWord = word.substring(0, idx) + '*' + word.substring(idx + 1);
        if (wordDict[newWord]) wordDict[newWord].push(word);
        else wordDict[newWord] = [word];
      }
    }
  
    const queue = [[beginWord, 1]];
    for (let idx = 0; idx < queue.length; idx++) {
      const [word, dist] = queue[idx];
      if (word === endWord) return dist;
      for (let idx = 0; idx < word.length; idx++) {
        const newWord = word.substring(0, idx) + '*' + word.substring(idx + 1);
        if (!wordDict[newWord]) continue;
        for (const nextWord of wordDict[newWord]) {
          if (!isVisited[nextWord]) {
            queue.push([nextWord, dist + 1]);
            isVisited[nextWord] = true;
          }
        }
      }
    }
    return 0;
  };
  var ladderLength = function (beginWord, endWord, wordList) {
    if (wordList.indexOf(endWord) === -1) return 0;
    const isValidNextWord = (pre, next) => {
      if (!next) return false;
      let count = 0;
      for (let idx = 0; idx < pre.length; idx++) {
        if (pre[idx] !== next[idx]) {
          count++;
          if (count > 1) return false;
        }
      }
      return true;
    };
    const queue = [[beginWord, 1]];
    for (let idx = 0; idx < queue.length; idx++) {
      const [word, dist] = queue[idx];
      if (word === endWord) return dist;
      wordList.forEach((nextWord, idx) => {
        if (isValidNextWord(word, nextWord)) {
          wordList[idx] = '';
          queue.push([nextWord, dist + 1]);
        }
      });
    }
    return 0;
  };


  var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord)) {
        return 0;
    }
    
    let ladderLength=1;
    let nextWord=[beginWord];
    let chars, count, nxchars;
    while (wordList.length && nextWord.length) {
        nextWord = wordList.filter(function(word){
            chars = word.split("");
            for(i=0;i<nextWord.length; i++) {
                count = 0;
                nxchars = nextWord[i].split("");
                for (j=0;j<chars.length;j++) {
                    if(nxchars[j] !== chars[j]) {
                        count++;
                    }
                }
                if(count === 1) {
                    return true
                }
            }
        })
        nextWord.length ? ladderLength++ : null
        if(nextWord.includes(endWord)) {
            break;
        }
        wordList = wordList.filter(word => !nextWord.includes(word))
    }
    
    return nextWord.includes(endWord) ? ladderLength : 0
    
};