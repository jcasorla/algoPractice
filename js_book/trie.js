//debugged
// class TrieNode {
//   constructor() {
//     this.children = {};
//     this.endOfWord = false;
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new TrieNode();
//   }

//   insert(word) {
//     let cur = this.root;
//     const len = word.length;
//     for (let i = 0; i < len; i++) {
//       const ch = word[i];
//       console.log(ch);
//       let node = cur.children[ch];
//       if (!node) {
//         node = new TrieNode();
//         cur.children[ch] = node;
//       }
//       console.log(cur);
//       cur = node;
//     }
//     cur.endOfWord = true; //mark the current nodes endOfWord as true;
//     console.log(cur);
//   }

//   search(word) {
//     let cur = this.root;
//     const len = word.length;
//     for (let i = 0; i < len; i++) {
//       const ch = word[i];
//       console.log(cur);
//       let node = cur.children[ch];
//       if (!node) {
//         return false; //node does not exist
//       }
//       cur = node;
//     }
//     return cur.endOfWord;
//   }
//   delete(word) {
//     this.deleteRecursively(this.root, word, 0);
//   }
//   deleteRecursively(cur, word, index) {
//     if (index === word.length) {
//       //when end of word is reached only delete if current.end of word is true
//       if (!cur.endOfWord) return false;
//       cur.endOfWord = false;
//       //if cur has no other mapping then return true
//       return Object.keys(cur.children).length === 0;
//     }

//     let ch = word[index];
//     let node = cur.children[ch];
//     if (!node) return false;

//     let shouldDeleteCurrentNode = this.deleteRecursively(node, word, index + 1);

//     //if true is returned then
//     //delete the mapping of character and trienode reference from map
//     if (shouldDeleteCurrentNode) {
//       delete cur.children[ch];
//       //return true if no mappings are left in the map
//       return Object.keys(cur.children).length === 0;
//     }
//     return false;
//   }

//   deleteIter(word) {
//     let cur = this.root;
//     const len = word.length;
//     const stack = [];
//     //check if node exists

//     stack.push(cur);
//     for (let i = 0; i < len; i++) {
//       const ch = word[i];
//       let node = cur.children[ch];
//       if (!node) {
//         return false; //node does not exist
//       }
//       cur = node;
//       if (i <= len - 1) stack.push(cur);
//     }
//     console.log(cur);
//     //set endTrue flag to false
//     cur.endOfWord = false;
//     console.log(Object.keys(cur.children).length > 0);
//     //if current node has children their is no need to go into the other nodes and delete children
//     if (Object.keys(cur.children).length > 0) {
//       return;
//     } else {
//       //remove from children dict
//       console.log(stack);
//       word += "*";
//       console.log(word);
//       let idx = len;
//       while (stack.length > 0) {
//         let node = stack.pop();
//         let ch = word[idx];
//         console.log(ch);
//         console.log(node);
//         console.log(Object.keys(node.children));
//         if (Object.keys(node.children).length > 0) {
//           break;
//         } else {
//           console.log(node.children[ch]);
//           if (node.children[ch]) delete node.children[ch];
//         }
//         idx--;
//       }
//     }
//   }
// }

//clean
class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let cur = this.root;
    const len = word.length;
    for (let i = 0; i < len; i++) {
      const ch = word[i];
      let node = cur.children[ch];
      if (!node) {
        node = new TrieNode();
        cur.children[ch] = node;
      }
      cur = node;
    }
    cur.endOfWord = true; //mark the current nodes endOfWord as true;
  }

  search(word) {
    let cur = this.root;
    const len = word.length;
    for (let i = 0; i < len; i++) {
      const ch = word[i];
      let node = cur.children[ch];
      if (!node) {
        return false; //node does not exist
      }
      cur = node;
    }
    return cur.endOfWord;
  }
  delete(word) {
    this.deleteRecursively(this.root, word, 0);
  }
  deleteRecursively(cur, word, index) {
    if (index === word.length) {
      //when end of word is reached only delete if current.end of word is true
      if (!cur.endOfWord) return false;
      cur.endOfWord = false;
      //if cur has no other mapping then return true
      return Object.keys(cur.children).length === 0;
    }

    let ch = word[index];
    let node = cur.children[ch];
    if (!node) return false;

    let shouldDeleteCurrentNode = this.deleteRecursively(node, word, index + 1);

    //if true is returned then
    //delete the mapping of character and trienode reference from map
    if (shouldDeleteCurrentNode) {
      delete cur.children[ch];
      //return true if no mappings are left in the map
      return Object.keys(cur.children).length === 0;
    }
    return false;
  }

  deleteIter(word) {
    let cur = this.root;
    const len = word.length;
    const stack = [];
    //check if node exists

    stack.push(cur);
    for (let i = 0; i < len; i++) {
      const ch = word[i];
      let node = cur.children[ch];
      if (!node) {
        return false; //node does not exist
      }
      cur = node;
      if (i <= len - 1) stack.push(cur);
    }
    //set endTrue flag to false
    cur.endOfWord = false;
    //if current node has children their is no need to go into the other nodes and delete children
    if (Object.keys(cur.children).length > 0) {
      return;
    } else {
      //remove from children dict
      word += "*";
      let idx = len;
      while (stack.length > 0) {
        let node = stack.pop();
        let ch = word[idx];
        if (Object.keys(node.children).length > 0) {
          break;
        } else {
          if (node.children[ch]) delete node.children[ch];
        }
        idx--;
      }
    }
  }
}
const trie = new Trie();
// trie.insert("sammie");
trie.insert("san");
trie.insert("sam");
// console.log(trie.search("sammie"));
// console.log(trie.search("fake"));
// console.log(trie.search("sam"));
// trie.insert("does");
// console.log(trie.search("does"));
// trie.deleteIter("does");
// console.log(trie.search("does"));
trie.deleteIter("sam");
// console.log(trie.search("sammie"));
// console.log(trie.search("sam"));
console.log(trie.search("san"));
