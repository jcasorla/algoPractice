// 

function beautifulBinaryString(b) {
    let left =0;
    let right =2;
     let count =0;
     let a = b.split('');
     if(b.lenght <3){
         return 0;
     }
    while(right <a.length){
        if(a[left] =='0' && a[left +1] =='1' && a[right] =='0'){
            a[left+2] ='1';
             count++;
        }
        left ++;
        right++;
    }
     return count;
 }