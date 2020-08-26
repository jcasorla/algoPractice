// https://www.hackerrank.com/challenges/append-and-delete/problem

// function appendAndDelete(s, t, k) {
    // let lenA=s.length, lenB = t.length, i =0, res='No', len = 0;

    // if(lenA > lenB){
    //     // lenA = s.length;
    //     // lenB = t.length
    //     i = lenB;
    //     len = lenA;
        

    // }else if(lenA< lenB){
    //     // lenA = t.length;
    //     // lenB = s.length;
    //     i = lenA;
    //     len = lenB;
    // }
    
    // // let i = lenB-1, res ='N0';
    // while(len > i){
        
    //     if(s[i] )
    //     i--;
    // }

    // return res;


// }

// function appendAndDelete(s, t, k) {

//     for (let i = k, j = 0; i >= 0; i-- , j++) {
//         let d = s.length - i < 0 ? 0 : s.length - i,
//             a = d + j,
//             str = s.slice(0, d) + t.slice(d, a)

//         if (str === t && a === t.length) return 'Yes'
//     }

//     return 'No'
// }

function appendAndDelete(s, t, k) {
    let lenS = s.length, lenT = t.length;

    // If k is big enough than everything is possible.
    if(lenS + lenT <= k){
        return 'Yes';
    }

    // Find how big is the difference.
    let i =0;

    while (i < lenS && i < lenT){
        if(s[i] !== t[i]){
            break;
        }
        i++;
    }
    
    // If the difference size is smaller than k and both are
    // even or odd, then it is possible.
    let diff = s.substr(i,lenS).length + t.substr(i,lenT).length;
    return diff <=k && diff % 2 == k % 2 ? 'Yes' : 'No';
}

console.log(appendAndDelete('ashley','ash',2));

