var findLucky = function(arr) {
    let dict ={};
    
    arr.forEach(data=>{
        if(dict[data]){
            dict[data] +=1;
        }else{
            dict[data] =1;
        }
    });
    
    let max =-1;
    
    for(key in dict){     
        if(dict[key] == key){            
            if(parseInt(key) > max){
                max = key;
                
            }
        }
    }
    
    return max;
    
};

console.log(findLucky([5,8,10,9,8,10,9,6,6,7,10,8,10,10,9,4,6,2,
    10,3,5,10,2,6,4,8,7,3,9,9,5,7,8,7,11,9,3,1,5,11,9,5,8,10,8,4,9,7,6,7,10,9,7,8,6,10,4]));