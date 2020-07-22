var leastInterval = function(tasks, n) {
    if (n<-0){
        return tasks.length;
    }
    let hash ={};
    let oriStack =[];
    let count =0;
    let finalCount =0;
    
    tasks.forEach(task=>{
       if(hash[task]){
           hash[task] +=1;
       }else{
           hash[task] = 1;
       }
    });
    
    stack = decreaseHash(hash);
    while(stack[stack.length-1]){
        count++;
        
        if(count === n){
            finalCount+= count + 1;
            stack = decreaseHash(hash);
        }
        
    }
    return finalCount;
    
};