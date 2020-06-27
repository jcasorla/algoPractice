
function chunkArray(arr,size){
    const chunk = [];
    for(let i=0; i<arr.length; i++){                 
        
        const last= chunk[chunk.length-1];

        if(!last || last.length===size){
            chunk.push([arr[i]]); //create chunk and push it to array
        }
        else{
            //add current element to chunk
            last.push(arr[i]);
        }

    }
    return chunk;
}

console.log(chunkArray([1,2,3,4,1],2));

//myway
// function chunkArray2(arr,size){
//     const chunk = [];
//     let newChunk = [];
//     for(let i=0; i<arr.length; i++){                 
//         if(newChunk.length <n){            
//             newChunk.push(arr[i]);    
//             if(i === arr.length -1 ){
//                 chunk.push(newChunk);           
//             }   
//         }else{
//             chunk.push(newChunk)
//             newChunk =[];
//             newChunk.push(arr[i]); 
//             if(i === arr.length -1 ){
//                 chunk.push(newChunk);           
//             }             
//         }

//     }
  
//     // console.log(newChunk);
//     return chunk;
// }