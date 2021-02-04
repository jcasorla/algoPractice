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

//algoexpert solution 1:
//0(N) | 0(N)
function reverseWordsInString(string) {
  const words = [];
  let start = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === " ") {
      words.push(string.slice(start, i));
      start = i;
    } else if (string[start] === " ") {
      words.push(" ");
      start = i;
    }
  }
  words.push(string.slice(start));
  reverseList(words);
  return words.join("");
}
function reverseList(list) {
  let start = 0,
    end = list.length - 1;
  while (start < end) {
    const temp = list[start];
    list[start] = list[end];
    list[end] = temp;
    start++;
    end--;
  }
}

//algoexpert solution 2:
//0(N) | 0(N)

function reverseWordsInString(string) {
  const chars = [];

  for (const char of string) {
    chars.push(char);
  }
  reverseListRange(chars, 0, chars.length - 1);

  let start = 0;
  while (start < chars.length) {
    let end = start;
    while (end < chars.length && chars[end] !== " ") end++;

    reverseListRange(chars, start, end - 1);
    start = end + 1;
  }
  return chars.join("");
}

function reverseListRange(list, start, end) {
  while (start < end) {
    const temp = list[start];
    list[start] = list[end];
    list[end] = temp;
    start++;
    end--;
  }
}
