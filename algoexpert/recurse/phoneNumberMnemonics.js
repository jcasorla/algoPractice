//https://www.algoexpert.io/questions/Phone%20Number%20Mnemonics

// function phoneNumberMnemonics(phoneNumber) {
//   const res = [];
//   const map = {
//     2: ["a", "b", "c"],
//     3: ["d", "e", "f"],
//     4: ["g", "h", "i"],
//     5: ["j", "k", "l"],
//     6: ["m", "n", "o"],
//     7: ["p", "q", "r", "s"],
//     8: ["t", "u", "v"],
//     9: ["w", "x", "y", "z"],
//   };

//   function helper(phoneNumber) {
//     for (let i = 0; i < phoneNumber.length; i++) {
//       const num = phoneNumber[i];
//       console.log(num);

//       if (num in map) {
//         const letters = map[num];
//         for (let j = 0; j < letters.length; j++) {
//           const letter = letters[j];
//           res.push(letter);
//         }
//       } else {
//         res.push(num);
//       }
//     }
//   }
//   helper(phoneNumber);
//   return res;
// }

//https://www.algoexpert.io/questions/Phone%20Number%20Mnemonics

function phoneNumberMnemonics(phoneNumber) {
  const cur = new Array(phoneNumber.length).fill("0");
  const found = [];

  helper(0, phoneNumber, cur, found);
  return found;
}
function helper(idx, phoneNumber, cur, found) {
  if (idx === phoneNumber.length) {
    const nmeonic = cur.join("");
    found.push(nmeonic);
  } else {
    const num = phoneNumber[idx];
    const letters = map[num];

    for (const letter of letters) {
      cur[idx] = letter;
      helper(idx + 1, phoneNumber, cur, found);
    }
  }
}

const map = {
  0: ["0"],
  1: ["1"],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
// console.log(phoneNumberMnemonics("1905"));
