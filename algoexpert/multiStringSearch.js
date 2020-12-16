//https://www.algoexpert.io/questions/Multi%20String%20Search

function multiStringSearch(bigString, smallStrings) {
  const res = [];
  for (const word of smallStrings) {
    if (bigString.includes(word)) {
      res.push(true);
    } else {
      res.push(false);
    }
  }
  return res;
}
//still working
