//codefights

/**
 * {0:[0],1:[1],2:[2,5],3:[3], 5:[4]}
 * [0,1,2,3,5,2], k =3 =>true
 *
 * [0,1,2,3,5,2], k=2
 */

//0(n) | 0(n)
function containsCloseNums(nums, k) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num in map) {
      map[num].push(i);
    } else {
      map[num] = [i];
    }
  }

  for (let key in map) {
    const arr = map[key];

    if (arr.length <= 1) continue;

    const dif = Math.abs(arr[0] - arr[1]);

    if (dif <= k) return true;
  }
  return false;
}

//0(n^2) | 0(1)
function containsCloseNums(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] === nums[j]) {
          if (Math.abs(i - j) <= k) return true;
        }
      }
    }
  }
  return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3)); //true
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2)); //false
