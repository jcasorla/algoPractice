
function longestSubarraySum(arr, s){
    let result =[-1];

    let sum = 0;
    let left =0;
    let right =0;

    while (right <  arr.length){
        sum += arr[right];
        while(left < right && sum > s){
            sum -= arr[left++];
        }  
        console.log(sum + ' ' + s  + ' ' + result.length);       
        if(sum == s && (result.length == 1 || result[1] - result[0] < right - left)){
            result[0] = left +1;
            result[1] = right +1;
        }
        right++;
    }
    return result;
}

console.log(longestSubarraySum([1,2,3,4,5,0,0,6,7,8 ,9],15)); 