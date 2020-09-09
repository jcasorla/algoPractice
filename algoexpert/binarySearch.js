//https://www.algoexpert.io/questions/Binary%20Search
function binarySearch(array, target) {
      let len = array.length;
      let left = 0, right = len-1;
      
      while(left<=right){
          let mid = Math.floor(left+(right - left)/2);
          if(target === array[mid]){
              return mid;
          }else if(target < array[mid]){
              right = mid-1;
              
          }else if(target > array[mid]){
              left = mid+1;
          }
      }		
      return -1;
  }