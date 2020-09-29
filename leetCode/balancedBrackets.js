/**
 * https://leetcode.com/explore/interview/card/amazon/76/array-and-strings/2972/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const brackets={'{' : '}', '[' : ']', '(' : ')'}
    let stack =[];
    
    for(let i =0; i<s.length; i++){
        let val = s[i];
        if(val === '{' || val === '[' || val === '('){
            stack.push(val);
        }else{
            let prev = stack.pop(); 
            if(brackets[prev] !== val) return false;
        }
    }
    if(stack.length !==0) return false;
    
    return true;
    
};