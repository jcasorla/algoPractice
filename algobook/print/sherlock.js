function isValid(s) {

    let hash ={};

    for(let i=0; i < s.length; i++){
        if(hash[s[i]]){
            hash[s[i]] +=1;
        }else{
            hash[s[i]] =1;
        }
    }
    
    let res = {};
    for(let k in hash){

         if(res[hash[k]]){
            res[hash[k]] +=1;
        }else{
            res[hash[k]] =1;
        }        
    }
    
    let prev;
    for(let ke in res){
         console.log(ke + ' ' + res[ke]);
         if(!prev){
             res[ke];
         }

         if(prev === res[ke]){
             return "NO";
         }
         
              
    }

}

function remove(hash){
    let max =0;
     for(let k in hash){
         if(hash[k] > max){
             max = hash[k];
         }
    }

    hash[k] -=0;
}