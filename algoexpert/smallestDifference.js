//https://www.algoexpert.io/questions/Smallest%20Difference

function smallestDifference(arrayOne, arrayTwo) {
	const len1 = arrayOne.length, len2 = arrayTwo.length;
	let min = Math.abs(arrayOne[0] - arrayTwo[0]);
	let res = [0,0];
  for(let i =0; i<len1; i++){
		for(let j =0; j<len2; j++){
			const comp = Math.abs(arrayOne[i] - arrayTwo[j]);
			if(comp < min){
				res = [arrayOne[i],arrayTwo[j]];
				min = comp;
			}
		}
	}
	return res;
}

//better linear solution
// function smallestDifference(arrayOne, arrayTwo) {
//     const arr1 = arrayOne.sort((a,b)=>a-b);
//       const arr2 = arrayTwo.sort((a,b)=>a-b);
//       const len1 = arr1.length, len2 = arr2.length;
//       let i = 0, j = 0;
//       let smallest = Infinity;
//       let current = Infinity;
//       let res = [];
      
//       while(i < len1 && j < len2){
//           let first = arr1[i];
//           let second = arr2[j];
          
//           if(first < second){
//               current = second - first
//               i++;
//           }else if(second < first){
//               current = first - second;
//               j++;
//           }else{
//               return [first,second];
//           }
//           if(smallest > current){
//               smallest = current;
//               res = [first,second];
//           }
//       }
//       return res;
//   }