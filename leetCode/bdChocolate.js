// https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
    let len = s.length;
    // if(len < m) return 0;
    let p1 = 0; let p2 = m, count=0;
    console.log(p2);
    console.log(len);
    let sum = sum[0]=0;

    while(p2 < len){
        let sum =0;
        if(m>1){
            let sub = s.slice(p1,p2);
            sum = isSum(sub);
        }else{
            console.log(p1 + ' ' + s[p1]);
            sum=s[p1];
        }
       
        if(sum===d) count++;
        p1++;
        p2++;
    }
    return count;
}
function isSum(arr){
    let s = 0;

    arr.forEach(data=>{
        s+=data;
    });

    return s;
}

console.log(birthday([4],4,1));//1


// function solve(s, d, m) {
//     let vc = [];
//     for (let i = 0; i < s.length; i++) {
//       let c = s.slice(i, i + m);
//       // if c the size of m and d equals c's sum then keep it
//       if((c.length === m) && (d === c.reduce((a, p) => p + a, 0))){
//         vc.push(c);
//       }
//     }
//     return vc.length;
//   }

// function solve(s, d, m) {    
//     let result = 0;
    
//     for (let i = 0, l = s.length; i < l; i++) {
//         if (s.slice(i, i + m).reduce((x, y) => x + y) === d) {
//             result++;
//         }
//     }
    
//     return result;
// }


// function birthday(s, d, m) {
//     let count = 0
//     let sum = 0
//     for (let i = 0; i < m; i++) sum += s[i]
//     if (sum === d) count++
//     for (let i = m, j = 0; i < s.length; i++) {
//         sum -= s[j]
//         sum += s[i]
//         j++
//         if (sum === d) count++
//     }
//     return count
// }