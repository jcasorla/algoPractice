
function properNounCorrection(str){
    let arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    for(let i=1; i<arr.length; i++){
        arr[i] = arr[i].toLowerCase();
    }
    return arr.join('');
}

console.log(properNounCorrection('jOHN'));
console.log(properNounCorrection('JOHN'));
console.log(properNounCorrection('John'));