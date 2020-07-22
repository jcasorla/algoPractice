
function composeRanges(arr){
    let ranges =[];
    let res='';
    res+=arr[0];
    res+='=>' + 'p';    
    for(let i=1; i<arr.length; i++){      
        if(arr[i-1] + 1 !=arr[i]){
            ranges.push(res);
            res = ''+arr[i] + '=>p';
        }else{
            res = res.split('');
            res[res.length-1] =arr[i];
            res = res.join('');
        }
        if(i===arr.length-1){
            if(res[res.length-1]==='p'){
                res = res.slice(0,res.length-3);
            }   
            ranges.push(res);            
        }     
    }
    return ranges;
}

console.log(composeRanges([-1,0,1,2,6,7,9]));//["-1=>2","6=>7",9"]
console.log(composeRanges([-1,0,1,2,6,7,9,10]));//["-1=>2","6=>7",9=>10"]