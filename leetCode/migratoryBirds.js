//https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(arr) {
    let map ={};
    arr.sort((a,b) => a-b);

    arr.forEach(data=>{
        if(map.hasOwnProperty(data)){
            map[data] +=1;
        }else{
            map[data] = 1;
        }
    });
    let max = 0, maxpos =0;
    for(let key in map){
        if(map[key] > max){
            max = map[key];
            maxpos = key;
        }        
    }
    return maxpos;
}

// // Complete the migratoryBirds function below.
// function migratoryBirds(arr) {
//     arr.sort(function (a, b) { return a - b})
//     const numMap = {};
//     var maxNum = 0;
//     var maxChar = 0;
//     for (var num of arr) { 
//         if (numMap[num]) {
//             numMap[num]++;
//         } else { 
//             numMap[num] = 1;
//         }
//     }
//     for (var num in numMap) { 
//         if (numMap[num] > maxNum) { 
//             maxNum = numMap[num];
//             maxChar = num;
//         }
//     }
//     return maxChar;
// }

// function migratoryBirds(arr) {
//     let c = new Array(arr.length).fill(0);
//     for (let i = 0;i<arr.length;i++) {
//         c[arr[i]] += 1;
//     }
//     return c.indexOf(c.reduce((a,b)=>Math.max(a,b)));
// }


// function migratoryBirds(arr) {
//     let sorted = arr.sort();
//     let ans = sorted[0];
//     let maxOccur = 1,
//         counter = 0;
    
//     for (let i = 0; i < sorted.length; i++) {
//         counter = (sorted[i] === sorted[i-1]) ? counter + 1 : 0;
//         if (counter > maxOccur) {
//             ans = sorted[i];
//             maxOccur = counter;
//         }
//     }

//     return ans;
// }