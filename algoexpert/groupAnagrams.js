//https://www.algoexpert.io/questions/Group%20Anagrams

function groupAnagrams(words) {
	let map = {};
	let res = [];
	for(let word of words){
		sorted = word.split('').sort().join('');
		if(map.hasOwnProperty(sorted)){
			map[sorted].push(word);
		}else{
			map[sorted] = [word];
		}
	}

	for(let key in map){
		res.push(map[key]);
	}
	return res;
}