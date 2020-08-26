//   function maxTrailing(levels) {
//     let lower = -1;
//     let seen = [];

//     for(let i =0; i<levels.length; i++){
//         let local = -1;
//         if(seen.length===0){
//             seen.push(levels[i]);
//         }else{
//             local = lower(levels[i]);
//         }
//     }
    
//     function lower(lev){
//         let res = [];
//         let min = lev;
//         let dif =-1;
//         for(let i =0; i<seen.length; i++){
//             if(lev < seen[i]){
//                 dif = level - seen[i];
//                 min = Math.min(min,dif);
//             }
//         }
//         return min;
//     }

// }


function maxTrailing(levels) {
    let res = -1;
    let seen = [];
    seen.push(levels[0]);
    for(let i =1; i<levels.length; i++){        
        let lev = lower(levels[i]);            
        res = res === -1 || lev > res ? lev : res;
        
        seen.push(levels[i]);
    }
    
    function lower(lev){
        let max = -1;
        for(let i =0; i<seen.length; i++){
            let dif = lev - seen[i];
            if(dif >=0){
                max = Math.max(max,dif);
            }
        }
        return max;
    }

    return res !==0 ? res : -1;

}

console.log(maxTrailing([5,3,6,7,4]));//4
console.log(maxTrailing([5,5,5,5]));//4