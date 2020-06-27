

function firstNonRepeating(str){
    let dict={};

    
    for(let i=0; i<str.length; i++){
        if(dict[str[i]]){
            dict[str[i]] +=1;
        }else{
            dict[str[i]] =1;
        }
    }

    for(key in dict){
        if(dict[key] ===1){
            return key;
        }
    }
    return '_';

    //dict: {'a':3, 'b':3, 'c':3, 'd':1, 'e':3, 'f':1}

}

console.log(firstNonRepeating('aaabbbcccdeeef'));
console.log(firstNonRepeating('aaabbbccceee'));