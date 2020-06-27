

function bubbleSort(arr){
    let swapped = false;
    do{  
        swapped = false;     
        for(let i =0; i<arr.length; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped=true;
            }
        }
    }while(swapped===true);
  
    return arr;
}

console.log(bubbleSort([5,4,3,2,1]));

// 5,4,3,2,1
// 4,3,2,1,5
// 3,2,1,4,5
// 2,1,3,4,5
// 1,2,3,4,5

