// https://www.algoexpert.io/questions/Balanced%20Brackets

function balancedBrackets(string) {
    const map = {'(':')', '[':']', '{':'}'};
      let stack = [];
      
      for(let i =0; i<string.length; i++){
          if(string[i] === '(' || string[i] === '{' || string[i] === '['){
              stack.push(string[i]);
          }else if(string[i] === ')' || string[i] === '}' || string[i] === ']'){			
              let last = stack.pop();
              if(string[i] !== map[last]){
                  return false;
              }
          }
      }	
      return stack.length === 0 ? true : false;
  }
  
  // Do not edit the line below.
  exports.balancedBrackets = balancedBrackets;
  