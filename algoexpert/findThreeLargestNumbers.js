//https://www.algoexpert.io/questions/Find%20Three%20Largest%20Numbers

function findThreeLargestNumbers(array) {
	let max = array[0], sec = -Infinity, third = -Infinity;
	for(let i =1; i<array.length; i++){
		let num = array[i];
		if(num >=max){
			third = sec;
			sec = max;
			max = num;
		}else if(num >=sec){
			third = sec;
			sec = num;
		}else if(num >= third){
			third = num;
		}
	}
	return [third,sec,max];
}