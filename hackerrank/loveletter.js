//www.hackerrank.com/challenges/the-love-letter-mystery/problem

https: function theLoveLetterMystery(s) {
  let a = s.split("");
  const alpha = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let len = a.length;
  let count = 0;
  for (let i = 0; i < len / 2; i++) {
    if (a[i] !== a[len - 1 - i]) {
      let decrease =
        alpha[a[i]] < alpha[a[len - 1 - i]]
          ? alpha[a[len - 1 - i]]
          : alpha[a[i]];
      let decision = alpha[a[i]] < alpha[a[len - 1 - i]] ? true : false;
      while (a[i] !== a[len - 1 - i]) {
        count++;
        decrease--;
        if (decision) {
          a[len - 1 - i] = Object.keys(alpha)[decrease - 1];
        } else {
          a[i] = Object.keys(alpha)[decrease - 1];
        }
      }
    }
  }
  return count;
}

// function theLoveLetterMystery(s) {
//     let count=0;
//     for(let i=0; i<(s.length-1)/2; i++){
//         let a = s[i].charCodeAt(0) - 96,
//             b = s[s.length-1-i].charCodeAt(0) - 96;
//         count += Math.abs(a-b);
//     }
//     return count;
// }

// function theLoveLetterMystery(s) {
//     var c=[]
//     var ans=0
//     for(var i=0;i<Math.floor(s.length/2);i++)
//     {
//         ans=(Math.abs(s.charCodeAt(i)-s.charCodeAt(s.length-i-1)))+ans

//     }
//     return ans

// }
