// https://www.hackerrank.com/challenges/sherlock-and-squares/problem


function squares(a, b) {
    let p1 =a;
    let count=0;
    while(p1<=b){
        let c = Math.sqrt(p1);
        if(c % 1 ===0){ 
            count++;
            p1+=c*2;
        }
        p1++;
    }
    return count;
}