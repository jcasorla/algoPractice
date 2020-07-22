
function houseOfCats(legs){
    let res=[];   

    if(legs === 2) return [1];

    while(legs>=0){
        res.unshift(legs/2);
        legs -=4;
    }
    return res;
}

console.log(houseOfCats(2));//[1]
console.log(houseOfCats(6));//[1,3]