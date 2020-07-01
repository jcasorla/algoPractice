
function switchLights(arr){
    // let originalLights = [...arr];
    let originalLights = arr;

    for(let i=0; originalLights.length; i++){
        // if(arr[i] === 1){
        //     // originalLights = swapLights(originalLights,i);
        // }
        console.log(i);
    }

    return originalLights;
}

function swapLights(lights, curIndex){

    // for(let i=0; i < curIndex + 1; i++){
    //     lights[i] = lights[i] === 1 ? 0 : 1;
    // }
    return lights;
}

console.log(switchLights([0,0]));