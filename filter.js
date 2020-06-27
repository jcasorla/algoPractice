

let arr = ['jose', 'josh', 'juan', 'jose', 'dan'];
let mat='jo';
let rev = arr.filter(data=>{
    return data.toLowerCase().match(mat.toLowerCase());
})

console.log('res: ' + rev);