function findPivot(arr, low, high) {
    if (low > high) {
        return -1;
    }
    if (low == high) {
        return low;
    }
    var mid = Math.floor((low + high) / 2);
    if (mid < high && arr[mid] > arr[mid + 1]) {
        return mid;
    }
    else if (mid > low && arr[mid] < arr[mid - 1]) {
        return mid - 1;
    }
    else if (arr[low] < arr[mid]) {
        return findPivot(arr, mid + 1, high);
    }
    else {
        return findPivot(arr, low, mid - 1);
    }
}

// let arr1 = [4,5,6,0,1,2,3];
// console.log(findPivot(arr1,0,arr1.length - 1));

// let arr2 = [4,5,6,7,8,9,10,0,1,2];
// console.log(findPivot(arr2,0,arr2.length - 1)); //3

// let arr2 = [3,1];
// console.log(findPivot(arr2,0,arr2.length - 1)); //3

function findPivotIter(arr){
    let low = 0;
    let high = arr.length -1;
    let pivot = -1;

    while(low < high && pivot === -1){        
        
        if (low == high) {
            pivot = low;
        }
        let mid = Math.floor(low + (high -low) /2);
        if(mid < high && arr[mid] > arr[mid+1]){
            pivot = mid;
        }else if(mid > low && arr[mid] < arr[mid-1]){
            pivot = mid-1;
        }else if(arr[low] <  arr[mid]){
            low = mid+1;
        }
        else{
            high = mid-1;
        }

    }
    return pivot;
}

console.log(findPivotIter([4,5,6,7,8,9,10,0,1,2]));//6
console.log(findPivotIter([4,5,6,0,1,2,3]));//2
console.log(findPivotIter([3,1]));//3