function validTime(time){
    let arr = time.split(':');

   return  arr[0] >=24 || arr[1] >=60 ? 'invalid' : 'valid';
}

console.log(validTime('25:46'));
console.log(validTime('12:46'));
console.log(validTime('12:76'));