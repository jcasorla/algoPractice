
function longestWord(str){
    let arr = str.split(' ');
    let word='';

    arr.forEach(val=>{
        if(val.length > word.length){
            word=val;
        }
    });
    return word;
}

console.log(longestWord('snak crackle pop makes the world go round'));