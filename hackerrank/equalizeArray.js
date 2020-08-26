// https://www.hackerrank.com/challenges/equality-in-a-array/problem

function equalizeArray(arr) {
    let len = arr.length;
    let map ={};

    for(let i=0; i<len; i++){
        if(map.hasOwnProperty(arr[i])){
            map[arr[i]] +=1;
        }else{
            map[arr[i]] =1;
        }
    }
   
    let max =-1;
    let k;
    for(let key in map){
        if(map[key] > max){
            max = map[key];
            k = key;
        }
    }
    let count =0;
    for(let i=0; i<len; i++){
        if(arr[i] != k) count++;
    }

    return count;
}