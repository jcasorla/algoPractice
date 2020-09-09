
function consecutiveArray(arr){
    let count = 0, max = 0;
    const len = arr.length;
    arr = arr.sort((a,b)=>a-b);

    for(let i=0; i<len-1; i++){
        if(arr[i+1] - arr[i] == 1){
            count++;
        }else{
            count = 0;
        }
        max = Math.max(count,max);
    }

    return max+1;
}

function consecutiveArray(arr){
    let count = 0, max = 0;
    const len = arr.length;

    for(let i=0; i<len-1; i++){
        let idx=i;
       while(arr.includes(arr[idx]+1)){
           idx++;
           count++;
       }
        max = Math.max(count,max);
    }

    return max+1;
}
//1/2/4/5/6
console.log(consecutiveArray([4,2,1,6,5])); //456 ->3
console.log(consecutiveArray([5,5,3,1]));//1 