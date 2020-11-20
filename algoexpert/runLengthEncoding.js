//https://www.algoexpert.io/questions/Run-Length%20Encoding

// function runLengthEncoding(string) {
//   const str = string;
//   let cur = str[0];
//   let count = 0;
//   let res = "";

//   for (let ch of str) {
//    //  console.log(ch === cur);
//     //  console.log(cur);
//     if (ch === cur) {
//       count++;
//       // console.log(ch);
//       // console.log(count);
//       if (count >= 9) {
//         res += count + cur;
//         count = 0;
//       }
//     } else {
//       // console.log(count);
//       // console.log(ch);
//       if (count !== 0) res += count + cur;
//       count = 1;
//       cur = ch;
//     }
//   }
//   res += count + cur;
//   return res;
// }

function runLengthEncoding(string) {
  const str = string;
  let cur = str[0];
  let count = 0;
  let res = "";

  for (let ch of str) {
    if (ch === cur) {
      count++;
      if (count >= 9) {
        res += count + cur;
        count = 0;
      }
    } else {
      if (count !== 0) res += count + cur;
      count = 1;
      cur = ch;
    }
  }
  res += count + cur;
  return res;
}
//{"string": "AAAAAAAAAAAAABBCCCCDD"}
//"9A4A2B4C2D"
console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));
console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDDA"));
console.log(runLengthEncoding("........______=========AAAA   AAABBBB   BBB"));
//"8.6_9=4A3 3A4B3 3B"
//"8.6_9=0=4A3 3A4B3 3B"
