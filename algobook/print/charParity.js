

function charParity(str){
    if(parseInt(str)){
        let num = parseInt(str);

        return num % 2 ==0 ? 'even' : 'odd';
    }else{
        return 'not a digit'
    }

}

console.log(charParity('4'));
console.log(charParity('3'));
console.log(charParity('s'));