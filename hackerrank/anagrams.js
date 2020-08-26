//https://www.hackerrank.com/challenges/anagram/problem?h_r=next-challenge&h_v=zen

function anagram(s) {
    let mid = Math.floor(s.length/2);
    let map = {};
    if(s.length % 2==1){
        return -1;
    }

    for(let i=mid; i<s.length; i++){
        if(map.hasOwnProperty(s[i])){
            map[s[i]] += 1;
        }else{
            map[s[i]] = 1;
        }
    }
    let count =0;
    for(let i=0; i<mid; i++){
        if(map[s[i]] > 0){
            map[s[i]] --;
        }else{
            count++;
        }
    }
    return count;

}


// function anagram(s){
//     const len = s.length
//     if(len % 2 == 1) return -1
//     let sub1 = s.substring(0,len/2), sub2 = s.substring(len/2,len)
//     let count = 0
//     sub2.split('').filter(x=> sub1.includes(x) ? (sub1 = sub1.replace(x,'')) : count++)
//     return count    
// }


// function anagram(s) {
//     var n=s.length;
//     if(n%2!==0){
//         return -1;
//     }
//     var a=s.slice(0,n/2);
//     var b=s.slice((n/2));
//     var count=0;
//     for(let i=0;i<n/2;i++){
//         a.includes(b[i]) ? a=a.replace(b[i],"") : count++;
    
//     }
//     return count;
    
//     }


// function anagram(s) {
//     if (s.length % 2 !== 0) return -1
//     let s1 = s.substring(0, s.length / 2).split(''), s2 = s.substring(s.length / 2).split('')
//     s2.forEach(l => {
//       if(s1.includes(l)){
//         s1.splice(s1.indexOf(l),1)
//       }
//     })
//     return s1.length
//   }


// function anagram(s) {
//     if (0 < s.length % 2) {
//         return -1;
//     }

//     const stringArray = s.split('');

//     // Use first half of string array
//     // Change to object, with frequency of each char
//     const stringOneObject = stringArray
//         .slice(0, s.length/2)
//         .reduce((acc, value) => {
//             if (acc[value]) {
//                 acc[value]++;
//             } else {
//                 acc[value] = 1;
//             }

//             return acc;
//         }, {});
    
//     // Use first half of string array
//     // Change to object, with frequency of each char
//     const stringTwoObject = stringArray
//         .slice(s.length/2)
//         .reduce((acc, value) => {
//             if (acc[value]) {
//                 acc[value]++;
//             } else {
//                 acc[value] = 1;
//             }

//             return acc;
//         }, {});
    
//     let count = 0;

//     for (const char in stringOneObject) {
//         count += stringTwoObject[char] ?
//             stringTwoObject[char] > stringOneObject[char] ?
//                 0 : stringOneObject[char] - stringTwoObject[char] :
//             stringOneObject[char];
//     }

//     return count;
// }