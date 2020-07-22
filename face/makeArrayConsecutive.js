
function makeArrayConsecutive(arr){
    let sortedArr= arr.sort((a,b)=>a-b);
    let min =sortedArr[0];
    let max = sortedArr[sortedArr.length -1];
    let count =0;
    for(i=min; i<max; i++){
        if(!sortedArr.includes(i)){
            count++;
        }
    }
    return count;

}

console.log(makeArrayConsecutive([6,2,3,8]));