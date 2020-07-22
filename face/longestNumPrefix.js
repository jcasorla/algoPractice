

function longestNumPrefix(str){
    let newStr ='';

    for(let i=0; i<str.length; i++){
        if(parseInt(str[i])){
            newStr+=str[i];
        }
    }
    return newStr;
}

console.log(longestNumPrefix('123fox'));