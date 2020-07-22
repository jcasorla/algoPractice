
function lateRide(n){
    let hours = Math.floor(n / 60);
    let minutes = n % 60;
    console.log(hours + ' ' + minutes)

    let time = hours.toString() + minutes.toString();
    let sum=0;
    for(let i=0; i< time.length; i++){
        sum+=parseInt(time[i]);
    }
    return sum;

}

console.log(lateRide(808));//14