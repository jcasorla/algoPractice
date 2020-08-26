
function balancedBrackets(str){
    let stack =[];
    let map ={']':'[', ')':'(', '}':'{'}


    for(let i=0; i<str.length; i++){
        if(str[i] =='[' || str[i] =='(' || str[i] =='{' ){
            stack.push(str[i]);
        }
        else {
            let last = stack.pop();
            console.log(last);

            //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
            if (str[i] !== map[last]) {return false};
        }
    }

    if(stack.length ==0){
        return true;
    }else{
        return false;
    }
}

// console.log(balancedBrackets('[({})]'));
// console.log(balancedBrackets('[]}({)]'));
// console.log(balancedBrackets('}[({})]'));


//{ [ ( push to stack
//} ) ] pop from stack
// if you go over the whole string and there is still something in stack