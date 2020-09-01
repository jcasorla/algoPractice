// function gemstones(arr) {
//     let counter = 0;
//     for (let i = 97; i <= 122; i = i + 1) {
//         if (arr.every(element => element.includes(String.fromCharCode(i)))) {
//             counter = counter + 1;
//         }
//     }
//     return counter;
// }

// function gemstones(arr) {
//     const s = arr.reduce((a, c) => {
//         return new Set([...a].filter(x =>[...c].includes(x)));
//     });
//     return [...s].length;
// }

function gemstones(arr) {
    let finalArr = [];
    let map ={};
     for( let i =0; i< arr.length; i++){
        finalArr.push(...new Set(arr[i]))
     }
     for( let i = 0; i<finalArr.length; i++){
        if( map[finalArr[i]]){
          map[finalArr[i]]++
        }else{
          map[finalArr[i]] = 1;
        }
     }  
     
     let count = 0;
     for( let val in map){
        if(map[val] === arr.length){
          count++
        }
     }
     console.log(finalArr);
     return count;
 }

 console.log(gemstones(['abcdde','baccd','eeabg']));