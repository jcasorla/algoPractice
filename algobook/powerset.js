//https://www.algoexpert.io/questions/Powerset

// 0(n*2^n) | 0(n*2^n)
// iterative
function powerset(array) {
  const sets = [[]];

  for (let i = 0; i < array.length; i++) {
    let len = sets.length;
    let j = 0;
    while (j < len) {
      const set = sets[j];
      const copy = [...set];
      copy.push(array[i]);
      sets.push(copy);
      j++;
    }
  }
  return sets;
}

// recursive
function powerset(array, i = null) {
  if (i === null) i = array.length - 1;
  if (i < 0) return [[]];

  const ele = array[i];
  const subsets = powerset(array, i - 1);
  const len = subsets.length;

  for (let i = 0; i < len; i++) {
    const curSet = subsets[i];
    subsets.push(curSet.concat(ele));
  }
  return subsets;
}

//recursive helper function
function powerset(array) {
  const sets = [[]];
  function helper(array, i) {
    if (i >= array.length) {
      return;
    }
    const len = sets.length;
    for (let j = 0; j < len; j++) {
      const curset = sets[j];
      sets.push(curset.concat(array[i]));
    }
    helper(array, i + 1);
  }
  helper(array, 0);
  return sets;
}
