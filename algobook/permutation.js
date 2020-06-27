
function permutation(str1,str2){
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    
    if(arr1.sort().join('') === arr2.sort().join('')){
        return true;
    }
    return false;
}

console.log(permutation('mister', 'stimer'));