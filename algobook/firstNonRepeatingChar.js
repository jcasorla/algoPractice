function firstNotRepeatingCharacter(s) {
    let dict ={};
    
    for(let i=0; i<s.length; i++){
        if(dict[s[i]]){
            dict[s[i]] +=1;
        }else{
            dict[s[i]] =1;
        }
    }
    
    for(key in dict){
        if(dict[key] ===1){
            return key;
        }
    }
    return '_';
}