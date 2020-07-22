 //input:  arr = [0, -1, -2, 2, 1], k = 1
    //output: [[1, 0], [0, -1], [-1, -2], [2, 1]]
    // [  [x,y] ]
    
    // math.abs[i] i+1 ==k
    /*
      x - y = k
      x = k + y
      y = x - k
      
      x- > [0, -1, -2, 2, 1], k = 1
      
      map = {
         -1 : 0,
         -2 : -1,
        -3 : -2,
         1 : 2,
         0 : 1 
      }
      
      for x in arr:
        y = x - k
        map[y] = x
        
        map:
        0:1
    */

function findPairsWithGivenDifference(arr, k) {
   
    let map = {};
    let res = [];
    
    for(let i=0; i < arr.length; i++){
      let y = arr[i] - k;
      map[y] = arr[i];
    }
    
    for(let i=0; i< arr.length; i++){
      // if (0)
      // map[300] = undefined
      // null -> empty
      // undefined -> does not exist 
      if( map[arr[i]] !== undefined){
        // x + y 
        // x = 1
        // y = 2
        // [x , y]
        let res2 =[];
        res2[0] = map[arr[i]];
        res2[1] = arr[i];
        res.push(res2);      
      }
    }
    
    return res;    
    
  }

  console.log(findPairsWithGivenDifference([0, -1, -2, 2, 1],1));