
function palinRearrange(str){
    let arr = str.split('');
    let hash = {};
    let oddCount =0;

    arr.forEach(element => {
        if(hash[element]){
            hash[element] ++;
        }else{
            hash[element] =1;
        }
    });

    for(let key in hash){
        if(hash[key] % 2 !==0){
            oddCount++;
        }
    }

    return oddCount > 1 ? false : true;
}

console.log(palinRearrange('aabb')); //true abba
