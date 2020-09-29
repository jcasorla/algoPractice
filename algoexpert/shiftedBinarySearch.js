// https://www.algoexpert.io/questions/Shifted%20Binary%20Search

function shiftedBinarySearch(array, target) {
	const pivot = findPivot(array);
	const resA = binarySearch(array,target,pivot+1,array.length-1);
	const resB = binarySearch(array,target,0,pivot+1);
	
	if(resA !== -1){
		return resA;
	}else if(resB !== -1){
		return resB;
	}else{
		return -1;
	}  	
}

function findPivot(array){
	let low = 0;
	let high = array.length-1;
	let pivot =-1;
	while(low<high && pivot === -1){
		if (low == high) {
					pivot = low;
			}
			let mid = Math.floor(low + (high -low) /2);
			if(mid < high && array[mid] > array[mid+1]){
					pivot = mid;
			}else if(mid > low && array[mid] < array[mid-1]){
					pivot = mid-1;
			}else if(array[low] <  array[mid]){
					low = mid+1;
			}
			else{
					high = mid-1;
			}
	}

	return pivot;
}

function binarySearch(array,target,left,right){
	while(left<=right){
		let mid = Math.floor(left + (right-left)/2);
		
		if(target===array[mid]){
			return mid;
		}else if(array[mid] < target){
			left = mid+1;
		}else if(array[mid] > target){
			right = mid-1;
		}
	}
	return -1;
}