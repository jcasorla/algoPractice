

function censor(str,arr){
    arr.forEach(element => {
        let len=element.length;
        let rep = 'x'.repeat(len);
        str = str.replace(element, rep);
    });
    return str;   
}

console.log(censor('there is poop crackhead',['poop','crack']));