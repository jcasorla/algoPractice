function twoStrings(s1, s2) {
    let hash = {};

    for(let char of s1){
        if(!hash[char]) hash[char] = true;
    }

    for(let char of s2){
        if(hash[char]){
            return 'YES';
        }
    }
    return 'NO';


}