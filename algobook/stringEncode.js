

function stringEncode(str){
    let alpha ={'a':0, 'b':0, 'c':0, 'd':0, 'e':0, 'f':0, 'g':0, 'h':0, 'i':0, 'j':0, 'k':0
    ,'l':0,'m':0, 'n':0, 'o':0,'p':0, 'q':0, 'r':0, 's':0, 't':0, 'u':0, 'v':0, 'w':0, 'x':0, 'y':0, 'z':0};

    for(let i=0; i<str.length; i++){
        if(alpha[str[i]]){
            alpha[str[i]] +=1;
        }else{
            alpha[str[i]] = 1;
        }
    }

    let res='';

    for(key in alpha){ 
        if(alpha[key] >1){
            res+=key + alpha[key]
        }
    }
    return res;
}

console.log(stringEncode('aaaabbbcddc'));