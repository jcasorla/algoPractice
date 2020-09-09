//https://www.algoexpert.io/questions/Kadane's%20Algorithm
function kadanesAlgorithm(array) {
    let maxCur = array[0]
      let globalMax = maxCur;
      for(let i =1; i<array.length; i++){
          maxCur = Math.max(array[i], maxCur + array[i]);
          globalMax = Math.max(maxCur,globalMax);
      }
      return globalMax;	
  }