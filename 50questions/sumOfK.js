
function sumOfK(arr,k){
    let l =0, r=0, len = arr.length, sum =0;

    while(r<len){
        sum+=arr[r];
        console.log(sum);

       

        while(sum>k){
            sum-=arr[l];
            l++;
        }
        if(sum===k){
            return arr.slice(l,r+1);
        }
        r++;

    }
    return false;
}

// console.log(zeroSum([1,2,-5,1,2,-1]));
console.log(sumOfK([1,2,3,4],5));
