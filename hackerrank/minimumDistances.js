//https://www.hackerrank.com/challenges/minimum-distances/problem

function minimumDistances(a) {
    let min =-1;
    let map = {};
    let len = a.length;

    for(let i=0; i<len; i++){
        if(map.hasOwnProperty(a[i])){
            let diff = i - map[a[i]];
            if(min < 0 || diff < min){
                min = diff;
            }
        }else{
            map[a[i]] = i;
        }        
    }  
    return min;
}