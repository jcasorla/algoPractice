// https://www.hackerrank.com/challenges/the-hurdle-race/problem
function hurdleRace(k, height) {

    let max = height[0];

    height.forEach(data=>{
        max = Math.max(data,max);
    });

    return k < max ? max-k : 0;

}