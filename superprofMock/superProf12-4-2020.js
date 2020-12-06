//select a random node in a sll

const { copyFile } = require("fs");

//1->2->3->4->5
//   x
//len: 5

//let ran= Math.random() 1-5

//c
//while

//console.log(getRandomInt(3));
//Math.random() * (max - min) + min;

//O(N) | O(1)
// function randomNode(head){
// 	let p1 = head;
//   let p2 = head;
//   let countNodes = 0;

//   //contar los nodos
//   while(p1){
//     countNodes++;
//   	p1 = p1.next;
//   }

//   let random = Math.random() * (countNodes - 1) + 1;

//   let c = 1;
//   while(c !== random){

//   	p2 = p2.next;
//     c++;
//   }

//   return p2;

// }

//find all permutations of a string

//0(N)2
//rat
//x
//art,atr
//rta, art
//tra

//r a t
//0 1 2
// function permutations(str) {
//   //rat
//   let res = [];
//   let arr = str.split("");
//   let len = str.length;
//   for (let i = 0; i < str.length; i++) {
//     //r
//     let j = i; //0
//     let c = 0;
//     //j < arr.length
//     while (c != len - 1) {
//       //c === 2
//       //1: rat, art, atr, rta=> 2: rat 1, rta 2, art 3=> 3: rat, tar, rta, tar,tra

//       //rat, tar
//       if (j === len - 1) {
//         // let temp = arr[0];
//         // arr[0] = arr[j];
//         // arr[j] = temp;
//         let pop = arr.pop();
//         arr.unshift(pop);
//         c = 1;
//         j = 0;
//       } else {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         c++;
//         j++;
//       }
//       console.log(arr);
//       res.push(arr.join(""));

//       // c++;
//     }
//     arr = str.split("");
//   }
//   return res;
// }
//tra

function permutations(str) {
  //rat
  let res = [];
  let arr = str.split("");
  let len = str.length;
  res.push(str);
  for (let i = 0; i < str.length; i++) {
    //r
    let j = i; //0
    let c = 0;
    //j < arr.length
    while (c != len - 1) {
      //c === 2
      //1: rat, art, atr => 2: rat 1, rta 2, atr 3=> 3: rat, tra, rta
      //                x
      if (j === len - 1) {
        //swap
        let copy = [...arr];
        let temp = arr[0];
        arr[0] = arr[j];
        arr[j] = temp;
        res.push(arr.join(""));
        arr = [...copy];
        console.log(arr);
        //pop
        let pop = arr.pop();

        arr.unshift(pop);
        console.log(arr);
      } else {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      res.push(arr.join(""));

      j++;
      c++;
    }
    arr = str.split("");
  }
  const uniqueSet = new Set(res);

  return [...uniqueSet];
}
// console.log(permutations("rat")); //[rat,rta,art,atr,tra,tar]
console.log(permutations("home"));
//https://levelup.gitconnected.com/find-all-permutations-of-a-string-in-javascript-af41bfe072d2
let findPermutations = (string) => {
  if (!string || typeof string !== "string") {
    return "Please enter a string";
  } else if (string.length < 2) {
    return string;
  }

  let permutationsArray = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    let remainingChars =
      string.slice(0, i) + string.slice(i + 1, string.length);

    for (let permutation of findPermutations(remainingChars)) {
      permutationsArray.push(char + permutation);
    }
  }
  return permutationsArray;
};

// console.log(findPermutations("rat"));
console.log(findPermutations("home"));
//(24) ["home", "hoem", "hmoe", "hmeo", "heom", "hemo", "ohme", "ohem", "omhe", "omeh", "oehm", "oemh", "mhoe", "mheo", "mohe", "moeh", "meho", "meoh", "ehom", "ehmo", "eohm", "eomh", "emho", "emoh"]
