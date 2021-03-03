//https://www.algoexpert.io/questions/Generate%20Document

//my solution
//0(n + m) | 0(c)
//this is also solution 3 in algoexpet. the most optimal solution
function generateDocument(characters, document) {
  const doc = {};

  for (let ch of characters) {
    if (ch in doc) doc[ch]++;
    else doc[ch] = 1;
  }

  for (let ch of document) {
    if (ch in doc) {
      if (doc[ch] === 0) {
        return false;
      }
      doc[ch]--;
    } else {
      return false;
    }
  }
  return true;
}

//algoexpert solutions

//solution 1:
// 0(m * (n + m)) | 0(1)
function generateDocument(characters, document) {
  for (const char of document) {
    const documentFrequency = countCharFreq(char, document);
    const charactersFrequency = countCharFreq(char, characters);
    if (documentFrequency > charactersFrequency) return false;
  }
  return true;
}

function countCharFreq(char, target) {
  let frequency = 0;

  for (const ch of target) {
    if (char === ch) frequency++;
  }
  return frequency;
}

//solution 2:
// 0(c * (n + m)) | 0(c)
function generateDocument(characters, document) {
  const alreadyCounted = new Set();

  for (const char of document) {
    if (char in alreadyCounted) continue;
    const documentFrequency = countCharFreq(char, document);
    const charactersFrequency = countCharFreq(char, characters);
    if (documentFrequency > charactersFrequency) return false;
    alreadyCounted.add(char);
  }
  return true;
}

function countCharFreq(char, target) {
  let frequency = 0;

  for (const ch of target) {
    if (char === ch) frequency++;
  }
  return frequency;
}
