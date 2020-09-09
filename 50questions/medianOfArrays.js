function medianOfArrays(arr1,arr2){
    let merge = [];
    let i=0;
    let j=0;
    while(i<arr1.length || j<arr2.length){
        if(arr1[i] === arr2[j]){
            merge.push(arr1[i]);
            merge.push(arr2[j]);
            i++;
            j++;
        }else if(arr1[i] < arr2[j]){
            merge.push(arr1[i]);
            i++;
        }else{
            merge.push(arr2[j]);
            j++;
        } 
       
    }
    return findMedian(merge);
    
    function findMedian(arr){
        let len = arr.length;
        let mid = len/2;
        
        if(len%2==1){
            return arr[len/2];
        }else{
            return (arr[mid] + arr[mid+1])/2
        }       

    }
}

console.log(medianOfArrays([1,3,5],[2,4,6]));