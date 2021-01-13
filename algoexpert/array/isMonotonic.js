// 0(N) | 0(1)
function isMonotonic(array) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }
  console.log(isNonDecreasing + " " + isNonIncreasing);
  return isNonDecreasing || isNonIncreasing;
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));
console.log(isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -9001]));

function isMonotonic(array) {
  if (array.length <= 2) return true;

  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 2];
      continue;
    }
    if (breakDirection(direction, array[i - 1], array[i])) {
      return false;
    }
  }
  return true;
}

function breakDirection(direction, prev, cur) {
  const diff = cur - prev;
  if (direction > 0) return diff < 0;
  return diff > 0;
}
