

// let stack = [];

// //push


// //pop

// //peek


// stack.push(1);
// stack.pop();
// stack.shift()



class Stack{
    constructor(){
        this.data=[];
    }

    push(val){
        this.data.push(val);
    }

    pop(){
        return this.data.pop();
    }

    peek(){
        return this.data[this.data.length-1];
    }
}

const s = new Stack();

s.push(1);
s.push(2);
s.push(3);
console.log(s.peek());
console.log(s.pop());
console.log(s.peek());


// Declare a character stack which will hold an array of all the opening parenthesis.
// Now traverse the expression string exp.
// If the current character is a starting bracket (‘(‘ or ‘{‘ or ‘[‘) then push it to stack.
// If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’) then pop from stack and if the popped character is the matching starting bracket then fine else parenthesis are not balanced.
// After complete traversal, if there is some starting bracket left in stack then “not balanced”

