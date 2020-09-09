//https://www.algoexpert.io/questions/Three%20Number%20Sum

function threeNumberSum(array, targetSum) {
    array = array.sort((a,b)=>a-b);
      const triplets = [];
      
      for(let i=0; i< array.length -2; i++){
          let left = i+1;
          let right = array.length-1;
          
          while(left < right){
              const sum = array[i] + array[left] + array[right];
              if(sum === targetSum){
                  triplets.push([array[i], array[left], array[right]]);
                  left++;
                  right--;
              }else if(sum < targetSum){
                  left++;
              }else if(sum > targetSum){
                  right--;
              }
          }
      }
      return triplets;
  }