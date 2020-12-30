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

//0(N) | 0(1)
function firstDuplicateValue(array) {
  for (const val of array) {
    const absVal = Math.abs(val);
    if (array[absVal - 1] < 0) return absVal;
    array[absVal - 1] *= -1;
  }
  return -1;
}
