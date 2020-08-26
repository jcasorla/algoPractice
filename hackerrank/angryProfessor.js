// https://www.hackerrank.com/challenges/angry-professor/problem

function angryProfessor(k, a) {
    let count =0;

    a.forEach(data=>{
        if(data <= 0) count++;
    });
    return count >= k ? "NO" : "YES";

}

// function angryProfessor(k, a) {
//   const t = a.filter(i => i <= 0)
//   return t.length >= k ? 'NO' : 'YES'
// }
