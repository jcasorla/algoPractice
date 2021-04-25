/**
sort() array,
iterate through arr check if:
	-arr[i]
*/

//o(nlog(n)) | o(1)
const isDuplicates = (nums) => {
	nums.sort((a, b) => a - b);
  for(let i = 0; i < sortedNums.length; i++){
  	if(sortedNums[i] === sortedNums[i + 1]) return true;
  }
  return false;
}

// 0(n) | 0(n)


s = 'abacabad' return 'c'
/**
hashMap{}
iterate through s
-add to hashmap | add + 1;

split the s
check if appears < 2 in map;
*/

function firstNonRepeat(s){
	const map = {};
  for(const st of s){
  	map[st] = map[st] ? map[st]++ : map[st] = 1;
  }
  for(let i = 0; i < s.length; i++){
		if(map[s[i]] === 1){
    	return s[i]
    }
  }
  return ''
}



'abce' return 'd'
/**    
			  01234
       'abce' 
alph = 'abcdef'
*/

function missingAlphabet(str){
	let alphabet = "abcdefghijklmnopqrstuvwxyz"
  for(let i = 0; i < str.length; i++){
  	if(str[i] !== alphabet[i]) return alphabet[i]
  }
  return '';
}

fghj
fghij

const startIndex = alphabet.indexOf(str[0]);

loop startIndex 