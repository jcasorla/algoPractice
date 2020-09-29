//https://www.algoexpert.io/questions/Largest%20Range

function largestRange(array) {
	let map = {};
	let range = [];
	let longestlen = 0;
	for(let num of array){
		map[num] = true;
	}
	
	for(let num of array){
		if(!map[num]) continue;
		map[num] = false;
		let curlen = 1;
		let l = num - 1;
		let r = num + 1;
		
		while(l in map){
			map[l] = false;
			curlen++;
			l--;
		}
		while(r in map){
			map[r] = false;
			curlen++;
			r++;
		}
		if(curlen > longestlen){
			longestlen = curlen;
			range = [l+1, r-1];
		}	
		
	}
	return range;
}

// Do not edit the line below.
exports.largestRange = largestRange;
