
function passwordLock(arr){
    let pass = '1111';
    let attempts =10;
    let flag = false;

    arr.forEach(element => {
        if(attempts==0){
            flag =true;
        } 
        if(element!=pass){
            attempts--;
            
        }else{
            attempts=10;
        }
    });
    
    return flag;
}

console.log(passwordLock(['1111','2222','3333','4444','5555','6666','7777','1234','8888','9999','4321','1111']));
console.log(passwordLock(['1111','2222','3333','4444','5555','6666','7777','1234','8888','1111','9999']));