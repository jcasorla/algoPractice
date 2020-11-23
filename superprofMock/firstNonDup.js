//first non duplicate in array
//[a,a,a,a,a,b,c,c,c] => b
//count: 1
//run: b
//[a,a,a,b,c,c,c,d] =>b
//         x
//hashmap{a:4,b:1}
//runningVal : c
//count = 1
//res = b

//O(N)
//N(log(N))

function firstNonDup(arr) {
  arr = arr.sort((a, b) => a - b);
  let runningVal = arr[0]; //a
  let count = 1;
  let len = arr.length;

  for (let i = 1; i < len; i++) {
    let ch = arr[i];
    if (runningVal !== ch) {
      //b === c
      if (count === 1) {
        return ch; //b
      }
      count = 1;
      runningVal = ch;
    }
  }
}

//console.log(firstNonDup(['a','a','a','b','c','c','c','d']))//b

//[d,a,a,b,c,c,a] =>b
//[d,d,a,a,c,c,a,b,b,b,e]=>e =>a
//                     x
//{d:2,a:3,c:2,b:3,e:1}

//[d,d,c,b,b,b,a]

// function firstNonDup(arr) {
//   let map = {};
//   let len = arr.length;

//   for (let i = 0; i < len; i++) {
//     let ch = arr[i];
//     if (map.hasOwnProperty(ch)) {
//       map[ch] += 1;
//     } else {
//       map[ch] = 1;
//     }
//   }
//   console.log(Object.keys(map));

//   for (let key in map) {
//     let val = map[key];

//     if (val === 1) {
//       return key;
//     }
//   }

//   return -1;
// }

console.log(firstNonDup(["d", "d", "c", "b", "b", "b", "a"]));

//https://medium.com/@weberzt/javascript-finding-the-first-non-repeating-character-in-a-string-ef5b08d8ebfc#:~:text=To%20identify%20the%20first%20non,match%2C%20it%20returns%20that%20character
function firstNonRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  return "_";
}

console.log(firstNonRepeatingCharacter("abacabad")); //c
console.log(firstNonRepeatingCharacter("abacabaabacaba")); //_
