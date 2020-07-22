
function switchLights(arr){
    let originalLights = arr;

    for(let i=0; i<originalLights.length; i++){
        if(arr[i] === 1){
            originalLights = swapLights(originalLights,i);
        }
    }

    return originalLights;
}

function swapLights(lights, curIndex){

    for(let i=0; i < curIndex + 1; i++){
        lights[i] = lights[i] === 1 ? 0 : 1;
    }
    return lights;
}

console.log(switchLights([0,0]));
console.log(switchLights([1,1,1,1,1]));