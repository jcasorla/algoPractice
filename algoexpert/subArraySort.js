//https://www.algoexpert.io/questions/Subarray%20Sort
// 1. go through array and find if adjecent nums are sorted or unsorted

// 2. find the largest and smallest out of order
// 3. find the new bounds

//{"array": [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]}
//					 g  g  g  g  g   b   b   b  b  g   g   g   g

//failed cases
//common factor: all have only one num out of place
//[2,1]
//[1, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 18, 19]
//[1, 2, 8, 4, 5]
//[1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11]
//[1, 2, 3, 4, 5, 6, 18, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19]
function subarraySort(array) {
	let max = -Infinity;
	let min = Infinity;
	let res = [-1,-1];
	let start = 0;
	let end = 0;
	let flag = false;
	
	for(let i = 0; i<array.length; i++){
		if( array[i] > array[i+1]){
			if(!flag){
				start = i;
				flag = true;
			} else if(flag) {
			end = i+1;
			}
		}
	}
	// console.log(start + ' ' + end );
	if(end === 0) end = start +1;
	for(let i =start; i<=end; i++){
		let num = array[i];
		if(num > max) max = num;
		if(num < min) min = num;
	}
	// console.log(min + ' ' + max)
	
	for(let i = 0; i<=start; i++){
		let num = array[i];
		// console.log(num)
		if(num > min){
			res[0] = i;
			// console.log(num + ' : ' + i);
			break;
		} 
	}
	// console.log(start)
	// console.log(end)
	
	for(let i = end; i<array.length; i++){
		let num = array[i];
		if(num < max){
			res[1] = i;
			//break;
		} 
	}
	
	return res;
}