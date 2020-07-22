function incrementalBackups(lastBackupTime, changes){
    let dict ={};
    let res =[];

    for(let i=0; i<changes.length; i++){        
        if(lastBackupTime < changes[i][0]){
            if(dict[changes[i][1]]){
                dict[changes[i][1]]+=1;
            }else{
                dict[changes[i][1]] = 1;
            }
            
        }
    }

    for(let key in dict){
        res.push(parseInt(key));
    }

    return res.sort((a,b)=>a-b);

}

console.log(incrementalBackups(461620205,[[461620203,1],[461620204,2],[461620205,6],[461620206,5]
    ,[26162002207,3],[461620207,5],[461620208,1]]));