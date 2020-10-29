/**
 * https://leetcode.com/explore/interview/card/amazon/76/array-and-strings/2964/
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const map = {1: 'I', 5: 'V', 10: 'X',40:'XL', 50: 'L', 90: 'XC',
                 100 :'C', 500:'D',400:'CD', 900: 'CM', 1000: 'M'  };
    const special = {4: 'IV', 9: 'IX'};
    let res = [];
    let list = Object.keys(map); 
  
    while(num >0){
    
        let piv = special[num] ? num : place(num,list);
        
        
        num-=piv;
        let local = special[piv] ? special[piv] : map[piv];
        res.push(local);
    }
    return res.join('');
    
};

function place(num, list){
    let res = 0;
    for(let i =0; i < list.length; i++){
        if(num >= parseInt(list[i])) res = parseInt(list[i]);
        else break;
    }
    return res;
}

// console.log(intToRoman(225));
// console.log(intToRoman(114));
// console.log(intToRoman(519));
// console.log(intToRoman(58))
console.log(intToRoman(1994));//"MCMXCIV"

// var intToRoman = function(num) {
//     const map = { 1 : 'I',  4 : 'IV', 5 : 'V', 9 : 'IX',
//         10 : 'X', 40 : 'XL', 50 : 'L',  90 : 'XC', 100 : 'C',
//         400 : 'CD', 500 : 'D', 900 : 'CM', 1000 : 'M'}
//     const keys = Object.keys(map).reverse().map(Number);
//     let result = ''
    
//     for(let n of keys) {
//         const reps = Math.floor(num / n);
//         result += map[n].repeat(reps);
//         num = num % n;
//     }
//     return result;
// };

function intToRoman2(num){
    const thousands = ['','M','MM', 'MMM'];
    const hundreds = ['', 'C', 'CC','CCC','CD','D', 'DC','DCC', 'DCCC', 'CM'];
    const tens = ['','X','XX', 'XXX','XL', 'L', 'LX','LXX','LXXX','XC'];
    const units = ['','I','II','III','IV','V','VI','VII','VIII','IX'];
    return thousands[Math.floor(num/1000)] + hundreds[Math.floor((num % 1000) /100)] + tens[Math.floor((num % 100)/10)] + units[num % 10];
}


console.log(intToRoman2(225));
console.log(intToRoman2(114));
console.log(intToRoman2(519));
console.log(intToRoman2(58))
console.log(intToRoman2(1994));//"MCMXCIV"
