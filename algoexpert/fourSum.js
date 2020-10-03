//https://www.algoexpert.io/questions/Four%20Number%20Sum

function fourNumberSum(array, targetSum) {
	const pairs = {};
	const quad = [];
	
	for(let i = 1; i < array.length-1; i++){
		for(let j = i+1; j < array.length; j++){
			const cur = array[i] + array[j];
			const diff = targetSum - cur;
			console.log(array[i] + ' ' + array[j])
			console.log(cur)
			console.log(diff);
			
			if(pairs.hasOwnProperty(diff)){
				console.log(pairs[diff]);
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
				pairs[cur].push([array[k],array[i]]);
			}
			console.log(array[k] + ' ' + array[i])
			//console.log(pairs);
		}
	}
	console.log(pairs);
	
	return quad;
	
}

console.log(fourNumberSum([7, 6, 4, -1, 1, 2], 16))
