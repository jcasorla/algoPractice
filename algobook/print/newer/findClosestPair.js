
function findClosestPair(arr,sum){
    let distance =-1;
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length -1; j++){
            const distanceSum = arr[i] + arr[j]; 
            const absDistance = Math.abs(i-j);

            if(sum===distanceSum){
                if(distance === -1 || absDistance < distance){
                    distance = absDistance;
                }
            }

        }
    }
    return distance;
}

console.log(findClosestPair([0,1,2,3,4],5));
console.log(findClosestPair([1,0,2,4,3,0],5));

