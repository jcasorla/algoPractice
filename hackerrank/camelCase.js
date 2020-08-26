//https://www.hackerrank.com/challenges/camelcase/problem

function camelcase(s) {
    let count = 0;

    for(let i =0; i<s.length; i++){
        if(s[i].toUpperCase() ===s[i]){
            count++;
        }
    }
    return count+1;

}