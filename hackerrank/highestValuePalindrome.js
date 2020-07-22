// https://www.hackerrank.com/challenges/richie-rich/problem

//hint:
// go through the half of the string with i idx, and compare s[i] with s[n-i-1]. If they differ, set both to the largest, increment the change count.
// if the change count is gt than the allowed, quit with "-1"
// otherwise go through again on the half of the string, and where it is not '9', replace it with '9', while incrementing the change count further until no more changes left. The only complicated part is that some numbers will be changed twice, those should be accounted for in a bit vector in the first loop.
// if the string is of odd size, and there are any free changes left, replace the middle with '9'.



function highestValuePalindrome(s, n, k) {
    let len = n;
    let arr = s.split('');
    let record ={};
    let isOdd = n % 2 === 1 ? true :false;

    for(let i=0; i<len/2; i++){
      
        if(arr[i] !== arr[len-i-1]){
            let max = arr[i] > arr[len-i-1] ? i : len-i-1;
            let min = arr[i] < arr[len-i-1] ? i : len-i-1;
            
            //swap
            if(k>0){
                arr[min] = arr[max];
                record[arr[max]] = true;
                k--;
            }            
        }
        
    }
    if(isOdd && k===1){
        let mid = Math.floor(n/2);
        arr[mid] ='9';

    }else{
        let index=0;
        while(k>0 && index<len/2){
           
            if(record[arr[index]]){
                k++;
            }
            if(k>0 && arr[index] !=='9' && arr[len-index-1] !=='9'){
                arr[index] = '9';
                arr[len-index-1] = '9';
                k-=2;
            }
            index++;        
        }

    }
   
    
    return arr.join('') == arr.reverse().join('') ? arr.join('') : -1;
    // return arr.join('')
}

console.log(highestValuePalindrome('932239',6,2));//992299
console.log(highestValuePalindrome('12321',5,1));//12921
console.log(highestValuePalindrome('3943',4,1));//3993
console.log(highestValuePalindrome('092282',6,3));//992299
console.log(highestValuePalindrome('0011',4,1));//-1
console.log(highestValuePalindrome('1111911',8,4));//91199119
console.log(highestValuePalindrome('329',3,2));//999