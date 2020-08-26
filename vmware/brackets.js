function braces(values) {
    
    let map ={'[':']', '(':')', '{':'}'}
    let res =[];

    for(let i =0; i<values.length; i++){
        // console.log(values[i]);
        let stack =[];
        let str = values[i];
        let des = false;
        
        for(let j =0; j<values[i].length; j++){
            if(str[j] =='[' || str[j] =='(' || str[j] =='{' ){
                stack.push(str[j]);
            }else{
                let last = stack.pop();
                if(str[j] !== map[last]){
                    des = true;
                    break;
                }
            }
        }
        if(stack.length ==0 && !des){
            res.push('YES');
        }else{
            res.push('NO');
        }
    } 
    return res;
}

console.log(braces(['{}[]()','{[}]']));
// console.log(braces(['{}[]()']));
