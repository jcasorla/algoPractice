//https://www.algoexpert.io/questions/Permutations

function getPermutations(array) {
  const permutations = [];
  permutationsHelper(0, array, permutations);
  return permutations;
}

function permutationsHelper(i, arr, permutations) {
  if (i === arr.length - 1) {
    //note: not sure why arr.slice() is needed instead of just arr. but a workaround is the copy method below
    const copy = [...arr];
    permutations.push(arr.slice());
  } else {
    for (let j = i; j < arr.length; j++) {
      swap(i, j, arr);
      permutationsHelper(i + 1, arr, permutations);
      swap(i, j, arr);
    }
  }
}
function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(getPermutations([1, 2, 3]));

function getPermutations(array) {
  const permutatons = [];
  permutationsHelper(array, [], permutatons);
  return permutatons;
}
function permutationsHelper(arr, cur, permutations) {
  if (!arr.length && cur.length) {
    permutations.push(cur);
  } else {
    for (let i = 0; i < arr.length; i++) {
      const newArr = arr.slice(0, i).concat(arr.slice(i + 1));
      const newPerm = cur.concat([arr[i]]);
      permutationsHelper(newArr, newPerm, permutations);
    }
  }
}
