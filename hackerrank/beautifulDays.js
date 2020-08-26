// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

function beautifulDays(i, j, k) {    
    let count =0;
    while(i<=j){
        let num = parseInt(i.toString().split('').reverse().join(''));
        if((i-num)%k ===0) count++;      
        i++;
    }
    return count;
}