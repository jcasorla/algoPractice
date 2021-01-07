//given an array find largest unique num


//[0,1,2,3,4,4,3,5]
//[1,2,2,3,4,4,] -> 3

function findLargestUniqueNum(arr){
  const map ={};//{1:2,2:2,3:1,4:2}
  
  for(let num of arr){//[1,2,2,3,4,4]
    if(map.hasOwnProperty(num))
      map[num]++;
  	map[num]=1;
  }
  
  let max = -Infinity;
  //{1:1,2:2,3:1,4:2}
  for(let key in map){
  	const val = map[key];//1:1, 2:2, 3:1, 4:2
    //max:3
    if(parseInt(key) > max && val === 1){
    	Math.max(max,parseInt(key));
    }
  }
  
  return max;//3
}

/*    
->[100, 180, 260, 310, 40, 535, 695]
                        x   x
comprar 100, vender 310, comprar 40 y vender 695.
*/

//0(N)
function buySellStocks(arr){
  let buy = false;
  let res = [];
  
  for(let i =0; i < arr.length; i++){//present //0 ,3 -4
    let currentPrice = arr[i];//100,40
    //price
    //let sell = currentPrice; //100,180
  	for(let j =i+1; j < arr.length; i++){//future
      let futurePrice = arr[j];//180,260,310,40,535,695
      
      if(buy){
        //sell when price drops
        
        //sell removed from if
        if(futurePrice < currentPrice || !arr[j+1]){
          res.push(arr[j-1]);//695
          buy = false;
          i = j-1;
        	
        }
      
      }else{        
        if(futurePrice > currentPrice){//180 > 100, 535 > 40
          res.push(currentPrice);//100, 40
          buy = true;
          //sell = futurePrice; //180
          //buy
        }
        
        else{
        	//dont buy
        }
        // if future price > price buy
      	//if future price < price dont buy
      
      }
    	
    }
  }
  return res;  //[100,310,40,695]
}


function buySellStocks(arr){
  let buy = false;
  let res = [];
  
  for(let i =0; i < arr.length; i++){//present //0 ,3 -4
    let currentPrice = arr[i];//100,40
      
      //console.log('cur' + ' ' + currentPrice)
    //price
    //let sell = currentPrice; //100,180
  	for(let j =i+1; j < arr.length; j++){//future
      let futurePrice = arr[j];//180,260,310,40,535,695
        
        //console.log(futurePrice);
      
      if(buy){
        //sell when price drops
        
        //sell removed from if
        if(futurePrice < currentPrice || !arr[j+1]){
            console.log(currentPrice)
          res.push(futurePrice);//695
          buy = false;
          i = j-1;
        	
        }
      
      }else{        
        if(futurePrice > currentPrice){//180 > 100, 535 > 40
          res.push(currentPrice);//100, 40
          buy = true;
          //sell = futurePrice; //180
          //buy
        }
        
        else{
        	//dont buy
        }
        // if future price > price buy
      	//if future price < price dont buy
      
      }
    	
    }
  }
  
    
  return res;  //[100,310,40,695]
}

console.log(buySellStocks([100, 180, 260, 310, 40, 535, 695]));






