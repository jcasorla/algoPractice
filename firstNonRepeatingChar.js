
//amazon questions - given a string consingting of lower text letters.
//return the first instance of a non-repeating character in it.
//if thre is no such character return '_'

//https://www.youtube.com/watch?v=5co5Gvp_-S0

// 2 O(N) linear time
function firstNonRepeating(str){
    let dict={};

    for(let i=0; i<str.length; i++){        
        if(dict[str[i]]){
            dict[str[i]] +=1;
        }else{
            dict[str[i]]=1;
        }
    }

    for(let i=0; i<str.length; i++){
        if(dict[str[i]]===1){
            return str[i];
        } 

    }
    return '_';
}

console.log(firstNonRepeating('aaadddbg'));
console.log(firstNonRepeating('aaadddccc'));