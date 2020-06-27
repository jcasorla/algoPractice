
function pangram(str){
    let alpha = {'a':1, 'b':1,'c':1, 'd':1, 'e':1, 'f':1,'g':1, 'i':1,'j':1, 
    'k':1, 'l':1, 'm':1, 'n':1, 'o':1, 'p':1, 'q':1, 'r':1, 's':1, 't':1,
    'u':1, 'v':1, 'x':1, 'y':1, 'z':1}

    for(let i=0; i<str.length; i++){        
        if(alpha[str[i]]){  
            // console.log(str[i] + ' ' + alpha[str[i]]);          
            if(alpha[str[i]]==2){
                return false;
            }else{
                alpha[str[i]]=2;
            }
            
        }
    }

    if(Object.values(alpha).includes(1)){
        return false;
    }
    return true;
}

console.log(pangram('abcdefagijklmnopqrstuvxyz'));