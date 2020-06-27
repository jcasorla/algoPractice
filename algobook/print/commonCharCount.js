
function commonCharCount(str1,str2){
    let dict={};
    let count =0;

    for(let i=0; i<str1.length; i++){
        if(dict[str1[i]]){
            dict[str1[i]] ++;
        }else{
            dict[str1[i]] =1;
        }
    }

    for(let j=0; j<str2.length; j++){
        if(dict[str2[j]] > 0){
            dict[str2[j]] -=1;
            count++;
        }
    }
    return count;
}

console.log(commonCharCount('aaabc', 'adca'));