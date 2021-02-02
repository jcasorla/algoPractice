//https://www.algoexpert.io/questions/Reverse%20Words%20In%20String

//initial
// function reverseWordsInString(string) {
//   let reversedArr = reverse(string.split(""));
//   let s = 0;
//   let e = s + 1;
//   let len = string.length;
//   while (e < len) {
//     if (reversedArr[e] !== " ") {
//       e++;
//     } else {
//       reverseWord(s, e - 1, reversedArr);
//       s = e;
//       while (reversedArr[s] === " ") {
//         s++;
//       }
//       e = s + 1;
//     }
//   }
//   reverseWord(s, e - 1, reversedArr);
//   return reversedArr.join("");
// }
// function reverse(arr) {
//   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     const j = arr.length - 1 - i;
//     swap(i, j, arr);
//   }
//   return arr;
// }
// function reverseWord(s, e, arr) {
//   while (s <= e) {
//     swap(s, e, arr);
//     s++;
//     e--;
//   }
// }
// function swap(i, j, arr) {
//   const temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

//revised
function reverseWordsInString(string) {
  const reversedArr = [...string];
  reverseWord(0, reversedArr.length - 1, reversedArr);
  let s = 0;
  let e = s + 1;
  let len = string.length;
  while (e < len) {
    if (reversedArr[e] !== " ") {
      e++;
    } else {
      reverseWord(s, e - 1, reversedArr);
      s = e;
      while (reversedArr[s] === " ") {
        s++;
      }
      e = s + 1;
    }
  }
  reverseWord(s, e - 1, reversedArr);
  return reversedArr.join("");
}

function reverseWord(s, e, arr) {
  while (s <= e) {
    swap(s, e, arr);
    s++;
    e--;
  }
}
function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
