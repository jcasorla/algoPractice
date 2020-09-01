//https://www.hackerrank.com/challenges/richie-rich/problem
//mycode:
// function highestValuePalindrome(s, n, k) {

//     let arr = s.split('');

//     for(let i=0; i<n/2; i++){
//         if(k>0){
//             if(arr[i] !== arr[n-i-1]){
//                 if(arr[i] > arr[n-1-i]){
//                     arr[n-1-i] = arr[i];
//                     k--;

//                 }else{
//                     arr[i] = arr[n-1-i];
//                     k--;
//                 }
//             }
//         }else if(arr[i] !== arr[n-1-i]) return -1;          
             
//     }
  
//     return arr.join('');
// }

function highestValuePalindrome(s, n, k) { 
    const [arr, k2, changes] = palindromeData([...s].map(c => +c), k);

    if (arr.join('') !== arr.reverse().join('')) return '-1';
    
    return highest(arr, k2, changes).join('');
    
}
    
function highest(arr, k2, changes) 
{
     let i = 0, j = arr.length - 1;
    
    for (; i < j && k2; ++i, --j) {
        if (arr[i] === 9 || k2 === 1 && !changes[i]) continue;
    
        arr[i] = arr[j] = 9;
        k2 -= 1 + !changes[i];        
    }
    
    if (i === j && k2) arr[i] = 9;
    
    return arr;
    
}
    
function palindromeData(arr, k) 
{ 
    const changes = {}; let i = 0, j = arr.length - 1;
    
    for (; i < j && k; ++i, --j) {
        k -= changes[i] = arr[i] !== arr[j];
        arr[i] = arr[j] = Math.max(arr[i], arr[j]);
    }
    
    return [arr, k, changes];
    
}