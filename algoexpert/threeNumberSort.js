//www.algoexpert.io/questions/Three%20Number%20Sort

//first try
// function threeNumberSort(array, order) {
//   //[0, 0, 0, 1, 1, 1, -1, -1]
//   // 0  1  2  3  4  5   6   7
//   //[0, 1, -1]
//   let a = 0,
//     b = 0,
//     c = 0;
//   let len = array.length;
//   for (let i = 0; i < len; i++) {
//     let ch = array[i];
//     if (ch === order[0]) {
//       a++;
//     } else if (ch === order[1]) {
//       b++;
//     } else {
//       c++;
//     }
//   }
//   console.log(a + " " + b + " " + c + " " + len);
//   let max = Math.max(a, b);
//   max = Math.max(max, c);

//   for (let i = 0; i < max; i++) {
//     //0
//     //+max
//     const idxb = i + max;
//     //++max
//     const idxc = max + max;

//     if (array[idxc]) {
//       if (array[idxc] === order[0]) {
//         //swap with a
//         const tempc = array[idxc];
//         array[idxc] = array[i];
//         array[i] = tempc;
//       }
//     }
//   }
// }

//works O(N) | O(1) space - my solution
// function threeNumberSort(array, order) {
//   const map = {};

//   for (let val of order) {
//     const con = "k" + val;
//     map[con] = 0;
//   }

//   for (let val of array) {
//     const con = "k" + val;
//     map[con] += 1;
//   }

//   let idx = 0;
//   for (let key in map) {
//     const real = key.slice(1, key.length);
//     while (map[key] > 0) {
//       array[idx] = parseInt(real);
//       map[key]--;
//       idx++;
//     }
//   }
//   return array;
// }

//algoExpert solution O(N) | O(1)
// function threeNumberSort(array, order) {
//   const first = order[0];
//   const third = order[2];
//   const len = array.length;

//   let firstI = 0;

//   for (let i = 0; i < len; i++) {
//     if (array[i] === first) {
//       swap(firstI, i, array);
//       firstI++;
//     }
//   }

//   let thirdI = len - 1;
//   for (let i = len - 1; i >= 0; i--) {
//     if (array[i] === third) {
//       swap(thirdI, i, array);
//       thirdI--;
//     }
//   }

//   return array;
// }

// function swap(i, j, array) {
//   const temp = array[j];
//   array[j] = array[i];
//   array[i] = temp;
// }

//algoExpert solution O(N) | O(1) - second solution
function threeNumberSort(array, order) {
  const first = order[0];
  const second = order[1];
  const len = array.length;

  let firstI = 0;
  let secondI = 0;
  let thirdI = len - 1;

  while (secondI <= thirdI) {
    const val = array[secondI];

    if (val === first) {
      swap(firstI, secondI, array);
      firstI++;
      secondI++;
    } else if (val === second) {
      secondI++;
    } else {
      swap(secondI, thirdI, array);
      thirdI--;
    }
  }

  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

console.log(threeNumberSort([0, 0, 0, 1, 1, 1, -1, -1], [0, 1, -1]));
