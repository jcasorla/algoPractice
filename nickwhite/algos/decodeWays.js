// //https://www.youtube.com/watch?v=qli-JCrSwuk
// function decodeWays(num){
//     dict ={
//         1:'a',2:'b',3:'c', 4:'d', 
//         5:'e', 6:'f', 7:'g',8:'h',
//         9:'i',10:'j',11:'k',12:'l',
//         13:'m',14:'n',15:'o',16:'p',
//         17:'q',18:'r',19:'s',20:'t',
//         21:'u',22:'v',23:'w',24:'x',25:'y',26:'z'
//     }
//     let count=0;
//     if(dict.hasOwnProperty(num)){
//         count++;
//         let str = num.toString();
//         if(str.length>1){
//             for(let i=0; i<str.length; i++){
//                 if(dict.hasOwnProperty(str[i])) count++;
//             }
//         }
//     }
//     return count;
// }

// console.log(decodeWays(12));


var numDecodings = function(s) {
    if (s.length < 1) return 0;
    let memo = [];
    var recur = function (index) {
        let result = 0
        if (index == s.length) return 1; // base case 1: reach the end = correct path
        if (memo[index]!=null) return memo[index]; // base case 2: if we already have the information on this index, return it
        if (s[index] > 0) { // as long as its bigger than 0, we can at least  use it as a single digit
            result += recur(index+1); // move forward by 1
        }
		
		// as long as 1. we are not starting with 0 etc. `04`
		//            2. our next digit isn't null
		//            3. we can form a two digit number thats smaller than 27
        if (s[index] != 0 && s[index+1] != null && s[index]+s[index+1] < 27) {
			// lets make this two digit together and move forward by 2
            result += recur(index+2);
        }
        memo[index] = result; // given the current index, store how many different ways we can decode
        return result;
    }
    return recur(0);
};

console.log(numDecodings('126'));