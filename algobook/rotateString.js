

function rotateString(str,n){
    let str1 = str.slice(str.length -n, str.length);
    let str2 = str.slice(0, str.length-n);
    return str1 + str2;
    
}

console.log(rotateString('Boris Godunov',5));