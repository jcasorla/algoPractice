
function stringDecode(str){
    let res='';
    for(let i=0; i<str.length; i++){
        if(str[i+1]){
            res+=str[i].repeat(str[i+1]);
        }
    }

    return res;
}

console.log(stringDecode('a3b2c1d3'));