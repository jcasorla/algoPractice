/*
Dado un diccionario y un string. Encontrar la mínima cantidad de particiones que se encuentren en el diccionario.
Given a dictionary ["Cat", "Mat", "Ca", "tM", "at", "C", "Dog", "og", "Do"]

Input :  Pattern "CatMat"
Output : 1 
Explanation: we can break the sentences
in three ways, as follows:
CatMat = [ Cat Mat ]  break 1
CatMat = [ Ca tM at ] break 2
CatMat = [ C at Mat ] break 2


CatMat
1
2


C at Mat 3




 
*/

// function isFoundInMap(arr,str){
//   /*
//   ["Cat", "Mat", "Ca", "tM", "at", "C", "Dog", "og", "Do"]
//      X     X

//  **/
//   let p1 = 0;
//   let p2 = 0;
//   let foundStr = '';
//   while(p1 < str.length){
//     if(arr.includes(str.slice(p1,p2)){
//     	foundStr +=str.slice(p1,p2);
//     }
//   }

//   /**
//   let foundStr = '';
//   let count =2;
//   let min = 2;
//   for(let val of arr){
//     foundStr +=val;
//     if(foundStr === str)

//   }
//   */

// let tresLong = arr.filter((data) => {
//   return data.length === 3;
// });

// }

function isFoundInMap(arr, str) {
  /*
  CatMat
  ["Cat", "Mat", "Ca", "tM", "at", "C", "Dog", "og", "Do"]
     X     X

     arrange by length
   **/

  const desc = arr.sort((a, b) => b.length - a.length);
  let count = 0;
  let min = Infinity;
  let lenS = str.length;

  let p1 = 0;

  while (p1 < arr.length) {
    const val = arr[p1];
    runningLen = val.length;
    p1++;
  }
}

console.log(
  isFoundInMap(
    ["Cat", "Mat", "Ca", "tM", "at", "C", "Dog", "og", "Do"],
    "CatMat"
  )
);
