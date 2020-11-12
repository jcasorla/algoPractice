//https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem
// Complete the hackerrankInString function below.
function hackerrankInString(s) {
    let hack = 'hackerrank'.split('');
    let idx = 0;
    
    for(let i =0; i < s.length; i++){
        let ch = s[i];
        
        if(hack[idx] === ch){
            idx++;
        }
    }
    
    return idx === hack.length ? 'YES' : 'NO';

}