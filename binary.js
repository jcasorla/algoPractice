
//https://www.youtube.com/watch?v=XdZqk8BXPwg
//genius trick to turn decimal nums to binary num
function binarynum(n){
    let binary='';
    while(n>=1){
        if(n%2==0){
            binary+=0;            
        }else{
            binary+=1;
        }        
        n/=2;
        n=parseInt(n);
    }
    return binary.split('').reverse().join('');
}

// console.log(binarynum(13)); //expect 1101
// console.log(binarynum(244));
console.log(binarynum(5)); //expect 101