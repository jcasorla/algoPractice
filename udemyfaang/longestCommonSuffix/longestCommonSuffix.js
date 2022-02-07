/*
   longest common suffix

   ['action', 'reaction', 'description', 'fraction'] => tion
*/

function longestCommonSuffix(arr) {
  const minWord = reverseStringsInArr(arr);
  let valid = true;
  let i = 0;
  const max = minWord.length;
  while (valid && i < max) {
    let curChar = arr[0][i];
    for (let str of arr) {
      if (str[i] !== curChar) {
        valid = false;
        break;
      }
    }
    i++;
  }

  //if the minword is not reversed.
  return minWord.slice(minWord.length - (i - 1), minWord.length);

  //if we recieve the minword reversed
  // return minWord
  //   .slice(0, i - 1)
  //   .split("")
  //   .reverse()
  //   .join("");
}

function reverseStringsInArr(arr) {
  let minWord = "";
  let minLen = Infinity;

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i]; // we are saving the word before we reverse it
    const strArr = arr[i].split("");

    const halfIndex = Math.floor(strArr.length / 2) - 1;
    for (let i = 0; i <= halfIndex; i++) {
      swap(strArr, i, strArr.length - i - 1);
    }

    arr[i] = strArr.join("");
    if (arr[i].length < minLen) {
      minLen = arr[i].length;
      minWord = str; //if he wanted to return the word reversed reference str[i]
    }
  }

  return minWord;
}

function swap(strArr, i, j) {
  let temp = strArr[i];
  strArr[i] = strArr[j];
  strArr[j] = temp;
}

console.log(
  longestCommonSuffix(["action", "reaction", "description", "fraction"])
);

// function reverse(s) {
//   s = s.split("");
//   var len = s.length,
//     halfIndex = Math.floor(len / 2) - 1,
//     tmp;

//   for (var i = 0; i <= halfIndex; i++) {
//     tmp = s[len - i - 1];
//     s[len - i - 1] = s[i];
//     s[i] = tmp;
//   }
//   return s.join("");
// }
