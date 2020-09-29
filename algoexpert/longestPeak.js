// https://www.algoexpert.io/questions/Longest%20Peak

/**
0^N
[1,2,3,3,4,0,10,6,5,-1,-3,2,3]
              *
//3,4,0 len 3
//0,10,6,5,-1,-3 len 6

sub =''
max = ''
for i,val of arr
	l = i-1
	r= i+1
	lval = arr[l]
	while(arr[l-1] < lval)
		lval = arr[l-1]
		l--
	rval = arr[r]
	while(arr[r+1] > rval)
		rval = arr[r+1]
		r++
	sub = arr.slice(l,r);
	max = sub.len > max.len ? sub : max
return max
*/

function longestPeak(array) {
    let sub = '';
      let max = ''
      
      for(let i =0; i<array.length; i++){
        //   console.log(array[i])
          let l = i;
          let r = i;
          let lval = array[l];
          while( l >=0 && array[l-1] < lval){
              
              lval = array[l-1];
              l--;
          }
          let rval = array[r];
          while(r < array.length && array[r+1] < rval){
              rval = array[r+1];
              r++;
          }
        //   console.log(r===i)
        //   console.log(l===i)
          if(r!==i && l !==i)	sub = array.slice(l,r+1);
        //   console.log(sub)
          max = sub.length > max.length ? sub : max;
      }
      return max.length;
  }
  
  // Do not edit the line below.
  exports.longestPeak = longestPeak;
  