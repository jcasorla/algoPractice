
function alphaShift(s){
    let alpha = 'abcdefgjklmnopqrstuvwxyz';
    const alphaArr = alpha.split('');
    let shifted = s.split('');

    for(let i =0; i< shifted.length; i++){
        let index=0;

        if(shifted[i] !=='z'){
            index = alphaArr.indexOf(shifted[i]) +1;
        }

        shifted[i] = alphaArr[index];
    }
    return shifted.join('');
}

console.log(alphaShift('crazy'));