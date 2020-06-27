
function badChar(str1,str2){
    for(let i = 0; i<str2.length; i++){
        str1 = str1.split(str2[i]).join(' ');
    }
    return str1;
}

console.log(badChar('let me go a la casa', 'ae'));

