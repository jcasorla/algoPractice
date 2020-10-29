//https://www.algoexpert.io/questions/Four%20Number%20Sum

function fourNumberSum(array, targetSum) {
	const pairs = {};
	let quad = [];
	
	for(let i = 1; i < array.length-1; i++){
		for(let j = i+1; j < array.length; j++){
			const cur = array[i] + array[j];
			const diff = targetSum - cur;
			console.log(array[i] + ' ' + array[j])
			console.log(cur)
			console.log(diff);
			
			if(pairs.hasOwnProperty(diff)){
				// console.log(pairs[diff]);
				console.log(array[i] + ' ' + array[j])
				for(const pair of pairs[diff]){
					quad.push(pair.concat([array[i],array[j]]));
				}
			}
		}
		console.log(quad);
			
		for(let k = 0; k < i; k++){
			console.log(i);
			console.log(k)
			const cur = array[i] + array[k];
			if(!pairs.hasOwnProperty(cur)){
				pairs[cur] = [[array[k], array[i]]];
			}else{
				if(!Object.values(pairs[cur].includes([array[k],array[i]]))){
					pairs[cur].push([array[k],array[i]]);
				}
				
			}
			// console.log(array[k] + ' ' + array[i])
			//console.log(pairs);
		}
	}
	console.log(pairs);
	// let x = {};
	// quad.forEach((i)=> {
	//   if(!x[i]) {
	// 	x[i] = true
	//   }
	// })


	// function removeDuplicates(array) {
	// 	array.splice(0, array.length, ...(new Set(array)))
	//   };
	  

	// return quad.splice(0, quad.length, ...(new Set(quad)))
	// return Object.keys(x);
	
	  
	return removeDuplicates(quad)
	
}

// function removeDuplicates(array) {
// 	let a =[];
	
// 	for(let i =0; i<array.length; i++){
// 		if(JSON.stringify(array[i]) !== JSON.stringify(array[i+1])) a.push(array[i]);
// 		// if(!a.includes(JSON.stringify(array[i]))) a.push(array[i]);
// 		console.log(a)
// 	}
// 	return a;
	
// };

// function removeDuplicates(array) {
// 	return [...new Set(array)]
//   }
function removeDuplicates(arr){
	let map = {};

	arr.forEach(data=>{
		let sorted = data.sort((a,b)=>{return a-b})
		if(!map.hasOwnProperty(sorted)){
			map[sorted] = sorted;
		}
	});
	let res = Object.values(map);

	return res;
}

// console.log(fourNumberSum([7, 6, 4, -1, 1, 2], 16))

console.log(fourNumberSum([-2,-1,-1,1,1,2,2], 0))
