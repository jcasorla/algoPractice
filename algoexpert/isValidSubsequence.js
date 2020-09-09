//https://www.algoexpert.io/questions/Validate%20Subsequence

function isValidSubsequence(array, sequence) {	
	let len = array.length;
	let i =0, j=0;
	let res =0;
	while(i<len){
		if(array[i] ===sequence[j]){
			res++;
			j++;
		}
		i++;
	}
	
	return res === sequence.length ? true : false;	
}