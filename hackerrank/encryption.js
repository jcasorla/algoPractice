
// https://www.hackerrank.com/challenges/encryption/problem

function encryption(s) {
    let dim = calcMatrix(s.length);
    let matrix = fillMatrix(dim,s);
    // console.log(matrix)
    return readMatrix(matrix,dim);
    
}

function calcMatrix(len){
    const dim = [0,0];
    const sqrt = Math.sqrt(len);
    dim[0] = Math.floor(sqrt);
    dim[1] = dim[0] * dim[0] === len ? dim[1] = dim[0] : dim[1] = dim[0] + 1;
    // console.log(dim[1])
    // console.log(len)
    
    dim[0] = (dim[0] * dim[1]) < len ? dim[0]+1 : dim[0];
    return dim;
}
function fillMatrix(dim,s){
    const row = dim[0];
    const col = dim[1];
    const matrix = [];
    let idx = 0;
    
    for(let i =0; i < row; i++){
        matrix.push([]);
        for(let j =0; j < col; j++){
            let ch = s[idx] ? s[idx] : '';
            matrix[i].push(ch);
            idx++;
        }
    }
    return matrix;
    
}

function readMatrix(matrix,dim){
    let res = '';
    const row = dim[0];
    const col = dim[1];
    
    for(let i =0; i < col; i++){
        
        for(let j =0; j < row; j++){
            let ch = matrix[j][i];
            
            res+=ch;
        }
        res+= ' ';
    }
    return res;
}

// console.log(encryption('haveaniceday'));//hae and via ecy
// console.log(encryption('feedthedog'));//fto ehg ee dd
// console.log(encryption('chillout'));//clu hlt io
console.log(encryption('iffactsdontfittotheorychangethefacts'));//isieae fdtonf fotrga anoyec cttctt tfhhhs
//35 row = 5, col 6