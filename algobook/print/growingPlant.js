
function growingPlant(upSpeed,downSpeed, desiredH){
    let count=0;
    while(desiredH>=0){
        desiredH-=upSpeed;
        desiredH-=downSpeed;
        count++;
    }
    return count+1;
}

console.log(growingPlant(100,10,910));