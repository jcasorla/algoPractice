
function alphaSubSeq(s){
    const chars = s.split('');
    const charVal = [];

    chars.forEach(char => {
        charVal.push(char.charCodeAt(0));
    });

    if(new Set(charVal).size !== charVal.length){
        return false;
    }

    for(let i=0; i < charVal.length -1; i++ ){
        if(charVal[i] >= charVal[i + 1]){
            return false;
        }
    }

    return true;
}

console.log(alphaSubSeq('zab'));
console.log(alphaSubSeq('effg'));
console.log(alphaSubSeq('ace'));
console.log(alphaSubSeq('bxz'));