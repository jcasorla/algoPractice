function reverseStack(stack){
    if(stack.length === 0){
        return stack;
    }else{
        console.log(stack);
        let temp = stack.pop();
        console.log(temp)
        console.log(stack);
        reverseStack(stack);
        console.log(stack);
        insertBottom(stack,temp);
    }  
    return stack;
}
function insertBottom(stack,x){
    if(stack.length ===0){
        stack.push(x);
    }else{        
        let temp = stack.pop();
        console.log(temp);
        console.log(x);
        console.log(stack)
        insertBottom(stack,x);
        stack.push(temp)
    }
}

//1,2,3,4


console.log(reverseStack([1,2,3,4]));