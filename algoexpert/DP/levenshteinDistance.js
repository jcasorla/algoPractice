//https://www.algoexpert.io/questions/Levenshtein%20Distance
// 0(nm) | 0(nm)
function levenshteinDistance(str1, str2) {
  const edits = [];
  for (let i = 0; i < str2.length + 1; i++) {
    const row = [];
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row);
  }
  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] =
          1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1]);
      }
    }
  }
  return edits[str2.length][str1.length];
}

// 0(nm) | 0(min(nm))
function levenshteinDistance(str1, str2) {
  const small = str1.length < str2.length ? str1 : str2;
  const big = str1.length >= str2.length ? str1 : str2;
  const evenEdits = [];
  const oddEdits = new Array(small.length + 1);
  for (let j = 0; j < small.length + 1; j++) {
    evenEdits.push(j);
  }
  for (let i = 1; i < big.length + 1; i++) {
    let currentEdits, previouEdits;
    if (i % 2 === 1) {
      currentEdits = oddEdits;
      previouEdits = evenEdits;
    } else {
      currentEdits = evenEdits;
      previouEdits = oddEdits;
    }
    currentEdits[0] = i;
    for (let j = 1; j < small.length + 1; j++) {
      if (big[i - 1] === small[j - 1]) {
        currentEdits[j] = previouEdits[j - 1];
      } else {
        currentEdits[j] =
          1 +
          Math.min(previouEdits[j - 1], previouEdits[j], currentEdits[j - 1]);
      }
    }
  }
  return big.length % 2 === 0
    ? evenEdits[small.length]
    : oddEdits[small.length];
}
