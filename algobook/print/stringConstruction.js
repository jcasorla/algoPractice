function stringConstruction(a,b){
    const aCount = getAlphaCount(a);
    const bCount = getAlphaCount(b);
    const counts = [];

    for(char in aCount){
        if(bCount[char]){
            counts.push(Math.floor(bCount[char] / aCount[char]));
        }else{
            return 0;
        }
    }

    return(Math.min(...counts));
}

function getAlphaCount(word){
    const chars = word.split('');
    const alphabetCount = {};

    chars.forEach(char => {
        if(alphabetCount[char]){
            alphabetCount[char]++;
        }else{
            alphabetCount[char] = 1;
        }
    });
    return alphabetCount;
}

console.log(stringConstruction('abc', 'abccba'));