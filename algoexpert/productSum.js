//https://www.algoexpert.io/questions/Product%20Sum
function productSum(array, mult=1) {
    let sum =0; 
      
      for(const data of array){
          if(Array.isArray(data)){
              sum+= productSum(data, mult+1);
          }else{
              sum+=data;
          }
      }
      return sum * mult;
  }