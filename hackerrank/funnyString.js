//https://www.hackerrank.com/challenges/funny-string/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

function funnyString(s) {
    const rev = s.split('').reverse().join('');
    for(let i = 0; i<s.length-1; i++){
        const code = s.charCodeAt(i);
        const next = s.charCodeAt(i+1);
        const dif = Math.abs(code - next);
        const rcode = rev.charCodeAt(i);
        const rnext = rev.charCodeAt(i+1);
        const rdif = Math.abs(rcode - rnext);
        if(rdif !== dif){
            return 'Not Funny';
        }
    }  
    return 'Funny';
}

console.log(funnyString('acxz'));
console.log(funnyString('bcxz'));