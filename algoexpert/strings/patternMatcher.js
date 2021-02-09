//https://www.algoexpert.io/questions/Pattern%20Matcher

//0(n^2 + m) | 0(n+m)
function patternMatcher(pattern, string) {
  if (pattern.length > string.length) return [];
  let startswithY = pattern[0] === "y" ? true : false;
  const counts = { x: 0, y: 0 };
  const newPattern = getNewPattern(pattern, startswithY);
  // console.log(newPattern);
  const firstYPosition = getCountAndFirstYPos(newPattern, counts);
  // console.log(firstYPosition);
  const map = { x: null, y: null };
  if (counts["y"] !== 0) {
    for (let lenOfX = 1; lenOfX < string.length; lenOfX++) {
      const lenOfY = (string.length - lenOfX * counts["x"]) / counts["y"];
      if (lenOfY <= 0 || lenOfY % 1 !== 0) continue;
      const yIndex = firstYPosition * lenOfX;
      const x = string.slice(0, lenOfX);
      const y = string.slice(yIndex, yIndex + lenOfY);
      const potentialMatch = newPattern.map((char) => (char === "x" ? x : y));
      if (string === potentialMatch.join("")) {
        return !startswithY ? [x, y] : [y, x];
      }
    }
  } else {
    const lenOfX = string.length / counts["x"];
    if (lenOfX % 1 === 0) {
      const x = string.slice(0, lenOfX);
      const potentialMatch = newPattern.map((char) => (char === "x" ? x : ""));
      if (string === potentialMatch.join("")) {
        return !startswithY ? [x, ""] : ["", x];
      }
    }
  }
  return [];
}

function getNewPattern(pattern, startswithY) {
  const patternLetters = pattern.split("");
  if (!startswithY) return patternLetters;
  return patternLetters.map((char) => (char === "y" ? "x" : "y"));
}
function getCountAndFirstYPos(newPattern, counts) {
  let firstYPosition = null;

  for (let i = 0; i < newPattern.length; i++) {
    const val = newPattern[i];
    if (val === "y" && firstYPosition === null) firstYPosition = i;
    if (val in counts) {
      counts[val]++;
    }
  }
  return firstYPosition;
}

console.log(patternMatcher("xxyxxy", "gogopowerrangergogopowerranger")); //["go", "powerranger"]

//my try:
// function patternMatcher(pattern, string) {
//   let startswithY = pattern[0] === "y" ? true : false;
//   const counts = { x: 0, y: 0 };
//   const newPattern = getNewPattern(pattern, startswithY);
//   console.log(newPattern);
//   const firstYPosition = getCountAndFirstYPos(newPattern, counts);
//   console.log(firstYPosition);
//   const map = { x: null, y: null };
//   let found = false;
//   let xlen = 1;
//   let i = 0;
//   let j = 0;
//   while (!found) {
//     let yIndex = firstYPosition * xlen;
//     let ylen = (string.length - xlen * counts["x"]) / counts["y"];

//     for (let char of newPattern) {
//       if (char === "x") {
//         j += xlen;
//         xval = string.slice(i, j);
//         if (map["x"] !== null) {
//           if (map["x"] !== xval) {
//             found = false;
//             break;
//           } else {
//             found = true;
//           }
//         } else {
//           map["x"] = xval;
//         }
//         i = j + 1;
//       }
//       if (char === "y") {
//         j += ylen;
//         yval = string.slice(i, j);
//         if (map["y"] !== null) {
//           if (map["y"] !== yval) {
//             found = false;
//             break;
//           } else {
//             found = true;
//           }
//         } else {
//           map["y"] = yval;
//         }
//         i = j + 1;
//       }
//     }
//     // console.log(ylen);
//   }
// }
