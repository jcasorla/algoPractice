function meetingPlanner(slotA, slotB, dur) {
  // your code goes here
  let output =[];
  
  //end - start = dur
  
  // start : arr[0][0] //end arr[0][1]
  //end - start >=8;
  //big start time
  //small end time
  //equal or bigger than dur
  
  //slotA.length
  let idxa =0;
  let idxb = 0;
  while(idxa < slotA.length && idxb < slotB.length){
      
    let maxS = Math.max(slotA[idxa][0], slotB[idxb][0]);
    let minE = Math.min(slotA[idxa][1], slotB[idxb][1]);
    
    if(minE - maxS >= dur){
      output = [maxS, maxS+dur];
      return output;
    }
    //move smallest end time;
    
    if(slotA[idxa][1] < slotB[idxb][1]){
      idxa++;
    }else{
      idxb++;
    }
    
  }
  
  
  return output;
}

/**
input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 8
output: [60, 68]

*/