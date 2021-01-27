//https://www.algoexpert.io/questions/Search%20For%20Range

//my solution
function searchForRange(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (array[mid] === target) {
      return findRange(array, mid, target);
    } else if (array[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return [-1, -1];
}

function findRange(arr, mid, target) {
  let left = mid;
  let right = mid;

  while (arr[left - 1] === target) left--;
  while (arr[right + 1] === target) right++;

  return [left, right];
}

// 0(N(Log(N)) | 0(N(Log(N))

function searchForRange(array, target) {
  const finalRange = [-1, -1];
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true);
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false);
  return finalRange;
}

function alteredBinarySearch(arr, target, left, right, finalRange, goLeft) {
  if (left > right) return;
  const mid = Math.floor(left + (right - left) / 2);
  if (arr[mid] < target) {
    alteredBinarySearch(arr, target, mid + 1, right, finalRange, goLeft);
  } else if (arr[mid] > target) {
    alteredBinarySearch(arr, target, left, mid - 1, finalRange, goLeft);
  } else {
    if (goLeft) {
      if (mid === 0 || arr[mid - 1] !== target) {
        finalRange[0] = mid;
      } else {
        alteredBinarySearch(arr, target, left, mid - 1, finalRange, goLeft);
      }
    } else {
      if (mid === arr.length - 1 || arr[mid + 1] !== target) {
        finalRange[1] = mid;
      } else {
        alteredBinarySearch(arr, target, mid + 1, right, finalRange, goLeft);
      }
    }
  }
}

// 0(N(Log(N)) | 0(N)
function searchForRange(array, target) {
  const finalRange = [-1, -1];
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true);
  alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false);
  return finalRange;
}

function alteredBinarySearch(arr, target, left, right, finalRange, goLeft) {
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] < target) {
      let = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      if (goLeft) {
        if (mid === 0 || arr[mid - 1] !== target) {
          finalRange[0] = mid;
          return;
        } else {
          right = mid - 1;
        }
      } else {
        if (mid === arr.length - 1 || arr[mid + 1] !== target) {
          finalRange[1] = mid;
          return;
        } else {
          left - mid + 1;
        }
      }
    }
  }
}
