// https://www.hackerrank.com/challenges/save-the-prisoner/problem?h_r=next-challenge&h_v=zen

// function saveThePrisoner(n, m, s) {
//     //7 19 2
//     //3 7 3
//    let arr = new Array(n).fill(1);
//    s -=1;
//     while(m>0){
//         m--;
//         console.log(s + ' ' +m);
//         if(s === arr.length -1){
//             s =0;
//             // m--;
//             continue;
//         }
        
//         s++;

//     }
//      return s;


// }

// function saveThePrisoner(n, m, s) {
//     let a=(s+m-1)%n;
//     return a == 0 ? n : a;
// }

// function saveThePrisoner(n, m, s) {
//     return (m + s - 1) % n || n;
// }

function saveThePrisoner(n, m, s) {
    let ans=0;
    while(m>0){
        ans = s%n;
        s++;
        m--;
    }
    if(ans==0)
        return n;
    return ans;
}



console.log(saveThePrisoner(3,7,3));
console.log(saveThePrisoner(7,9,12));