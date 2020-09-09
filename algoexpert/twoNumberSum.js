//O(N)
// function twoNumberSum(array, targetSum) {
//     let map = {};
//       let res =[];
//       for(let i =0; i<array.length; i++){
//           let dif = targetSum - array[i];
//           let num = array[i];
//           if(!map.hasOwnProperty(dif)){
//               map[dif] = num;
//           }
//       }
      
//       for(let num of array){
//           if(map.hasOwnProperty(num) && map[num] !==num){
//               return [num,map[num]];
//           }
//       }
//       return res;
//   }

//O(N) Best
function twoNumberSum(array, targetSum) {
let map = {};
    let res =[];
    for(let i =0; i<array.length; i++){
    let num = array[i];
    let dif = targetSum - num;
    
    if(map.hasOwnProperty(dif)){
        return [num,dif];
    }else{
        map[num] = true;
    }
    }      
    
    return res;
}

  //O(N)^2
//   function twoNumberSum(array, targetSum) {
// 	sum=0;
// 	arr2=[];
// 	for(var i =0; i<array.length; i++){
// 		for(var j=i+1; j<array.length; j++){
// 			if(array[i]+array[j]===targetSum){
// 				arr2.push(array[i]);
// 				arr2.push(array[j]);
// 				return arr2;
// 			}
// 		}
// 	}
// 	return arr2;
//   // Write your code here.
// }
