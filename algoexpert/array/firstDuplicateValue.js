//https://www.algoexpert.io/questions/First%20Duplicate%20Value

//0(N) | 0(N)
function firstDuplicateValue(array) {
  let map = {};

  for (const num of array) {
    if (map.hasOwnProperty(num)) {
      return num;
    } else {
      map[num] = true;
    }
  }

  return -1;
}
