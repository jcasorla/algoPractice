//https://www.algoexpert.io/questions/Interweaving%20Strings

// 0(2 ^ (n + 1)) | 0(n + m)
// solution 1 naive recursion
// function interweavingStrings(one, two, three) {
//   if (three.length !== one.length + two.length) return false;

//   return areInterwoven(one, two, three, 0, 0);
// }

// function areInterwoven(one, two, three, i, j) {
//   const k = i + j;

//   if (k === three.length) return true;

//   if (i < one.length && one[i] === three[k]) {
//     if (areInterwoven(one, two, three, i + 1, j)) return true;
//   }
//   if (j < two.length && two[j] === three[k]) {
//     return areInterwoven(one, two, three, i, j + 1);
//   }
//   return false;
// }

//solution 2 recursion with memoization
//0(nm) | 0(nm)
function interweavingStrings(one, two, three) {
  if (three.length !== one.length + two.length) return false;

  const cache = new Array(one.length + 1)
    .fill(0)
    .map((_) => new Array(two.length + 1).fill(null));

  return areInterwoven(one, two, three, 0, 0, cache);
}

function areInterwoven(one, two, three, i, j, cache) {
  if (cache[i][j] !== null) return cache[i][j];
  const k = i + j;

  if (k === three.length) return true;

  if (i < one.length && one[i] === three[k]) {
    cache[i][j] = areInterwoven(one, two, three, i + 1, j, cache);
    if (cache[i][j]) return true;
  }
  if (j < two.length && two[j] === three[k]) {
    cache[i][j] = areInterwoven(one, two, three, i, j + 1, cache);
    return cache[i][j];
  }
  cache[i][j] = false;
  return false;
}
