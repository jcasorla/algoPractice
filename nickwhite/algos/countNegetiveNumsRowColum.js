//https://www.youtube.com/watch?v=5dJSZLmDsxk&list=PLBZBJbE_rGRVnpitdvpdY9952IsKMDuev&index=7

function countNegetives(matrix){
    let row = matrix.length;
    let col = matrix[0].length;
    let count =0;
    let i=0;
    let j = col -1;

    while(j>=0 && i<row){
        if(matrix[i][j] <0){
            count += (j+1);
            i+=1;
        }else{
            j-=1;
        }
    }
    return count;

}

let matrix =[
    [-3,-2,-1,1],
    [-2,2,3,4],
    [4,5,7,8]
];

console.log(countNegetives(matrix));