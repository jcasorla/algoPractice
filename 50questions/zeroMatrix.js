
function zeroMatrix(arr){
    let col, row;
    for(let i =0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j] ===true){
                col = i;
                row = j;
            }
        }
    }

    for(let i =0; i<arr.length; i++){    
        for(let j=0; j<arr[i].length; j++){
            if(row === j){
                arr[i][j] = true;
            }
            if (col === i){
                arr[i][j] = true;
            }
        }
    }

    return arr;
}

console.log(zeroMatrix([[true,false,false],
                        [false,false,false],
                        [false,false,false]]));

console.log(zeroMatrix([[false,false,true],
                        [false,false,false],
                        [false,false,false]]));

console.log(zeroMatrix([[false,false,false],
                        [false,true,false],
                        [false,false,false]]));


/**
 * true,true,true
 * true,false,false
 * true,false,false
 * 
 */