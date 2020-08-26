//palindrom expand out method. delete 1 char and see if its palindrome.

function palindromeIndex(s) {
    let len = s.length;
    let odd = len % 2 ==1;
    let mid = Math.floor(len/2);
    let left = odd ? mid : mid-1;
    let right = odd ? mid: mid;
    // console.log('l' + left + ' ' + 'r' + right);
    let allow = 0;
    let idx =  -1;
    console.log(s);
    while(left >= 0 && right <= len){
        console.log('l: ' + s[left] + ' ' + 'r: ' + s[right]);
        if(s[left] !== s[right]){
            allow +=1;            
        }
        left--;
        right++;
    }

    return allow > 1 ? false : true; 

}