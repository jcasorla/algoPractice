//https://www.algoexpert.io/questions/Multi%20String%20Search

//0(bns)
// function multiStringSearch(bigString, smallStrings) {
//   const res = [];
//   for (const word of smallStrings) {
//     if (bigString.includes(word)) {
//       res.push(true);
//     } else {
//       res.push(false);
//     }
//   }
//   return res;
// }

//0(bns)
// function multiStringSearch(bigString, smallStrings) {
//   return smallStrings.map((smallStrings) =>
//     isInBigString(bigString, smallStrings)
//   );
// }

// function isInBigString(bigstr, smallstr) {
//   for (let i = 0; i < bigstr.length; i++) {
//     if (i + smallstr.length > bigstr.length) break;
//     if (isInBigStringHelper(bigstr, smallstr, i)) return true;
//   }
//   return false;
// }

// function isInBigStringHelper(bigstr, smallstr, startIdx) {
//   let leftBigIdx = startIdx;
//   let rightBigIdx = startIdx + smallstr.length - 1;
//   let leftSmallIdx = 0;
//   let rightSmallIdx = smallstr.length - 1;

//   while (leftBigIdx <= rightBigIdx) {
//     if (
//       bigstr[leftBigIdx] !== smallstr[leftSmallIdx] ||
//       bigstr[rightBigIdx] !== smallstr[rightSmallIdx]
//     ) {
//       return false;
//     }

//     leftBigIdx++;
//     rightBigIdx--;
//     leftSmallIdx++;
//     rightSmallIdx--;
//   }
//   return true;
// }

// //0(b^2 + ns) time | 0(b^2 +n) spaces
// class ModSuffixTrie {
//   constructor(string) {
//     this.root = {};
//     this.populateSuffixTrieFrom(string);
//   }

//   populateSuffixTrieFrom(string) {
//     for (let i = 0; i < string.length; i++) {
//       this.insertSubstrStartAt(i, string);
//     }
//   }
//   insertSubstrStartAt(i, string) {
//     let node = this.root;
//     for (let j = i; j < string.length; j++) {
//       const letter = string[j];
//       if (!(letter in node)) node[letter] = {};
//       node = node[letter];
//     }
//   }

//   //0(M) time | 0(1) space
//   contains(string) {
//     let node = this.root;
//     for (const letter of string) {
//       if (!(letter in node)) return false;
//       node = node[letter];
//     }
//     return true;
//   }
// }

// function multiStringSearch(bigString, smallStrings) {
//   const trie = new ModSuffixTrie(bigString);
//   return smallStrings.map((string) => trie.contains(string));
// }

//0(ns + bs) time | 0(ns) spaces
class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = "*";
  }

  insert(string) {
    let node = this.root;
    for (let i = 0; i < string.length; i++) {
      const letter = string[i];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
    node[this.endSymbol] = string;
  }
}

function multiStringSearch(bigString, smallStrings) {
  const trie = new Trie();
  for (const str of smallStrings) {
    trie.insert(str);
  }
  const containedStr = {};
  for (let i = 0; i < bigString.length; i++) {
    findSmallStringsIn(bigString, i, trie, containedStr);
  }
  return smallStrings.map((str) => str in containedStr);
}

function findSmallStringsIn(str, startIdx, trie, containedStr) {
  let curNode = trie.root;
  for (let i = startIdx; i < str.length; i++) {
    const curChar = str[i];
    if (!(curChar in curNode)) break;
    curNode = curNode[curChar];
    if (trie.endSymbol in curNode) containedStr[curNode[trie.endSymbol]] = true;
  }
}
