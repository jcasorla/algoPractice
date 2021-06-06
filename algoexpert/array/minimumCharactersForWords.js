//https://www.algoexpert.io/questions/Minimum%20Characters%20For%20Words

// 0(n) | 0(n)
//my solution
function minimumCharactersForWords(words) {
  const globalMap = {};

  for (let word of words) {
    const tempMap = {};

    for (let ch of word) {
      if (ch in tempMap) {
        tempMap[ch] += 1;
      } else {
        tempMap[ch] = 1;
      }
    }
    appendMap(globalMap, tempMap);
  }

  return result(globalMap);
}

function appendMap(global, temp) {
  for (let key in temp) {
    const val = temp[key];

    if (key in global) {
      const globalVal = global[key];
      if (val > globalVal) {
        global[key] = val;
      }
    } else {
      global[key] = val;
    }
  }
}

function result(map) {
  const res = [];

  for (let key in map) {
    const val = map[key];

    for (let i = 0; i < val; i++) {
      res.push(key);
    }
  }
  return res;
}

// console.log(
//   minimumCharactersForWords(["Abc", "baVcc", "aaaa", "cdeE", "efg", "gead"])
// );

console.log(
  minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"])
);


//algoexpert version
function minimumCharactersForWords(words) {
  const maxFreq = {};
  const globalMap = {};

  for (let word of words) {
    const tempMap - countCharFreq(word); 
    appendMap(globalMap, tempMap);
  }
  return [];
}

function countCharFreq(word){
  const tempMap = {};

  for (let ch of word) {
    if (ch in tempMap) {
      tempMap[ch] += 1;
    } else {
      tempMap[ch] = 1;
    }
  }
  return tempMap;
}

function appendMap(global, temp) {
  for (let key in temp) {
    const val = temp[key];

    if (key in global) {
      const globalVal = global[key];
     
      global[key] = Math.max(globalVal,val)
    } else {
      global[key] = val;
    }
  }
}

