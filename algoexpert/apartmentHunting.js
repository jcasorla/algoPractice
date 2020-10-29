//https://www.algoexpert.io/questions/Apartment%20Hunting

function apartmentHunting(blocks, reqs) {
	const maxDist = new Array(blocks.length).fill(-Infinity);
	
	for(let i = 0; i < blocks.length; i++){
		for(const req of reqs){
			let closest = Infinity;
			for(let j =0; j < blocks.length; j++){
                console.log(blocks[j][req])
				if(blocks[j][req]){
                    closest = Math.min(closest, distanceBetween(i,j));
                    // console.log(closest);
				}
			}
			maxDist[i] = Math.max(maxDist[i], closest);
		}
	} 
	return getIdx(maxDist);
}

function distanceBetween(a,b){
	return Math.abs(a-b);
}
function getIdx(array){
	let minidx = 0;
	let min = Infinity;
	for(let i =0; i < array.length; i++){
		const cur = array[i];
		if(cur < min){
			min = cur;
			minidx = i;
		}
	}
	return minidx;
}

console.log(apartmentHunting([
    {"gym": false, "school": true, "store": false},
    {"gym": true, "school": false, "store": false},
    {"gym": true, "school": true, "store": false},
    {"gym": false, "school": true, "store": false},
    {"gym": false, "school": true, "store": true}
  ],
  ["gym", "school", "store"]));