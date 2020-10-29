//https://www.hackerrank.com/challenges/caesar-cipher-1/problem
// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

// function caesarCipher(s,k){
//     let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

//     console.log(alpha[26+k]);
// }

// console.log(caesarCipher('z',2));


// function caesarCipher(s, k) {
//     let charset = "abcdefghijklmnopqrstuvwxyz";
//     let rot = k % charset.length;
//     let charsetRot = charset.slice(rot) + charset.slice(0, rot);
//     charset += charset.toUpperCase();
//     charsetRot += charsetRot.toUpperCase();
//     const m = new Map([...charset].map((v, i, a) => [charset[i], charsetRot[i]]));
//     return [...s].map(v => m.get(v) || v).join("");
// }


// function caesarCipher(s, k) {
//     let res = [], sa = 'abcdefghijklmnopqrstuvwxyz'
//     let ca = sa.toUpperCase(), mSaArr = sa.split('')
//     if (k > sa.length) {
//         k = k % sa.length
//     }
//     mSaArr.push(mSaArr.splice(0, k).join(""))
//     let mSa = mSaArr.join(""), mCa = mSa.toUpperCase("")

//     for (let i = 0; i < s.length; i++) {
//         if (mSa[sa.indexOf(s[i])] !== undefined) {
//             res.push(mSa[sa.indexOf(s[i])])
//         } else if (mCa[ca.indexOf(s[i])] !== undefined) {
//             res.push(mCa[ca.indexOf(s[i])])
//         } else {
//             res.push(s[i])
//         }
//     }
//     return res.join("")
// }


// const caesarCipher = (s, k) => {
//     const shiftedArr = s.split("").map(item => {
//     let charCode = item.charCodeAt();
//     let shiftedVal = charCode + k % 26;

//     if(charCode >= 65 && charCode <= 90) {
//         return shiftedVal <= 90 ? String.fromCharCode(shiftedVal) : String.fromCharCode(shiftedVal - 26); 
//     }
//     if(charCode >= 97 && charCode <= 122) {
//         return shiftedVal <= 122 ? String.fromCharCode(shiftedVal) : String.fromCharCode(shiftedVal - 26); 
//     }
//     return item;
// });
// return shiftedArr.join("");

// }

// function caesarCipher(s, k) {
//     let asciArr = [];
//     let asciResultArr = [];
//     let finalResult = "";
//     for (let i in s) asciArr.push(s.charCodeAt(i));
//     if (k > 26) {
//         k = k % 26;
//     }
//     for (let num of asciArr) {
//         if ((num > 96 && num < 123) || (num > 64 && num < 91)) {
//             if (num > 96 && num < 123) {
//                 if (num + k > 122) asciResultArr.push(num + k - 122 + 96);
//                 else {
//                     asciResultArr.push(num + k);
//                 }
//             }
//             if (num > 64 && num < 91) {
//                 if (num + k > 90) asciResultArr.push(num + k - 122 + 96);
//                 else {
//                     asciResultArr.push(num + k);
//                 }
//             }
//         } else {
//             asciResultArr.push(num);
//         }
//     }
//     for (let num of asciResultArr) {
//         finalResult += String.fromCharCode(num);
//     }
//    return finalResult;
// }



// Complete the caesarCipher function below.
function caesarCipher(s, k) {

    //middle-Outz,2 ->okffng-Qwvb

    /**
     *     10

    159357lcfd

    98

Expected Output
Download

    159357fwzx
     */
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newWord = '';
    
    for(let i =0; i<s.length; i++){
        let ch = s[i];
        let flag = false;
        if (k > 26) {
            k = k % 26;
        }
        if(ch === ch.toUpperCase()) flag = true; 
        if((s.charCodeAt(i) >= 97 && s.charCodeAt(i) <=122) || (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <=90)){
             let rotate = alpha.indexOf(ch.toLowerCase()) + k;
            rotate = rotate % 26;     
            if(flag){
                newWord += alpha[rotate].toUpperCase();
            }else{
                newWord += alpha[rotate];
            }
                  
            

        }else{
            newWord+=s[i];
        }
        
        
    }
    return newWord;


}

console.log(caesarCipher('159357lcfd',2))
console.log(caesarCipher('159357lcfd',98)) //159357fwzx