/**
 * 
 * https://www.youtube.com/watch?v=qqXOZD4zKEg 
//subset subarray
//good in making a On2 to On

//calc
70-7+9

//sum
16

[7,9,20,4,9,3,11,4,3] //maxSum=16
              $---$

*/

function maxConsecutiveSubsetSum(arr,n){
    if(arr.length < n) return null;
    let maxSum= 0;

    for(let i =0; i<n; i++){
        maxSum+= arr[i];
        // console.log(arr[i]);
    } 
    // console.log(maxSum);

    let p1 = 0;
    let p2 = n;
    let tempSum = maxSum;

    while(p2 < arr.length){
        // console.log(arr[p1] + ' ' + arr[p2])
        tempSum = tempSum - arr[p1] + arr[p2]; //16-7 +20
        // console.log(tempSum);
        if(tempSum > maxSum){
            maxSum = tempSum;
        }
        // console.log(maxSum);
        p1++;
        p2++;
    }
    return maxSum;
}

console.log(maxConsecutiveSubsetSum([7,9,20,4,9,3,11,4,3],2)) //29