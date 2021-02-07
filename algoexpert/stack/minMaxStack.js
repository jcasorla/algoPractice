// https://www.algoexpert.io/questions/Min%20Max%20Stack%20Construction
// Feel free to add new properties and methods to the class.
class MinMaxStack {
	constructor(){
		this.stack = [];
		this.minMaxStack = [];	
	}
	
  peek() {
    // Write your code here.
		return this.stack[this.stack.length-1]
		
  }

  pop() {
    // Write your code here.
		this.minMaxStack.pop();
		return this.stack.pop();
  }

  push(number) {
    const newMinMax = {min: number, max: number};
		if(this.minMaxStack.length){
			const lastMinMax = this.minMaxStack[this.minMaxStack.length -1];
			newMinMax.min = Math.min(lastMinMax.min, number);
			newMinMax.max = Math.max(lastMinMax.max, number);			
		}
		this.minMaxStack.push(newMinMax);
		this.stack.push(number);
  }

  getMin() {
    // Write your code here.
		return this.minMaxStack[this.minMaxStack.length -1].min;
  }

  getMax() {
    // Write your code here.
		return this.minMaxStack[this.minMaxStack.length -1].max;
  }
}

// Do not edit the line below.
// exports.MinMaxStack = MinMaxStack;

const stack = new MinMaxStack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(7);
console.log(stack.peek());
console.log(stack.getMin());
console.log(stack.getMax());
console.log(stack.pop());
console.log(stack.getMax());