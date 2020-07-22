
function removeAllAdjacentDups(s){
    let stack =[];

    let i=0;

    for(let j=0; j<s.length; j++){
        let cur = s[j];

        if(i > 0 && stack[i-1] == cur){
            i--;
        }else{
            stack[i] = cur;
            i++;
        }
    }
    return stack.join('');

}

console.log(removeAllAdjacentDups('abbaca'));