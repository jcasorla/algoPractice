
function findMidpoint(arr){
    let mid = Math.floor(arr.length/2);

    return arr.length % 2 ==1 ? arr[mid] : arr[mid-1];
}

console.log(findMidpoint([1,2,3,4,5,6,7]));
console.log(findMidpoint([1,2,3,4,5,6]));