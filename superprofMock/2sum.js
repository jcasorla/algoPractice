/*
Libs included:
    underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
*/

//console.log('Hello, world!');

//[1,2,3,4,5], 7
//       x

//{6:1,5:2,4:3
//map{1:6}
//2sum



function twoSum(arr,val){
    const map = {};
    let res = [];
    
    for(let num of arr){
        let dif = val - num;
        if(map.hasOwnProperty(dif){
           const chunk = [];
           chunk.push(num)
            chunk.push(dif)
            res.push(chunk)
        }
        map[dif] = num;
    }
    return res;
}
//[[3,4][5,2]]

//[5,5,2,4,1]


function twoSum(arr,val){
    const map = {};
    let res = [];
    
    for(let num of arr){
        let dif = val - num;
        console.log(dif.toString())
        if(map.hasOwnProperty(dif)){
            console.log('in')
           const chunk = [];
           chunk.push(num)
            chunk.push(dif)
            res.push(chunk)
        }
        map[dif] = num;
    }
    console.log(Object.keys(map))
    return res;
}

console.log(twoSum([1,2,3,4,5],7))


function twoSum(arr,val){
    const map = {};
    const res = [];
    
    for(let num of arr){
        let dif = val - num;
        if(map.hasOwnProperty(dif)){
           const chunk = [];
           chunk.push(num)
           chunk.push(dif)
           res.push(chunk)
        }
        map[num] = true;
    }
    return res;
}

console.log(twoSum([1,2,3,4,5],7))
