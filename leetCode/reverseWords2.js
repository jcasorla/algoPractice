/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseWords = function(s) {
//     let len = s.length;
//     let l = 0;
//     let r = len -1;
//     let start = [];
//     let end = [];

//     // while(l < len){
//     //     let char = s.shift()
//     //     if(char === ' '){
//     //         start.unshift(char)
//     //         break;
//     //     }         
//     //     start.push(char);
//     //     l++;
        
//     // }
  
//     // // s.push(' ');
//     // console.log(start);
//     // console.log(s)
//     // while(start.length > 0){
//     //     s.push(start.shift());            
//     // }
//     // console.log(start);
//     // console.log(s)

//     // while(r >=0){
//     //     let char = s.pop();
//     //     if(char === ' '){
//     //         end.push(char);
//     //         break;
//     //     }
//     //     end.unshift(char);
//     //     r--;
//     // }
//     // r--;
//     // console.log(end)
//     // console.log(s)
//     // // s.unshift(' ')
//     // while(end.length > 0){
//     //     s.unshift(end.pop());
//     // }
//     // // s.pop();
//     // console.log(end)
//     // console.log(s)
//     // console.log(s[l] + ' ' + s[r]);



//     // while(l < r){
//     //     while(l < len){
//     //         let char = s.shift()
//     //         if(char === ' '){
//     //             start.unshift(char)
//     //             break;
//     //         }         
//     //         start.push(char);
//     //         l++;
            
//     //     }
      
//     //     // s.push(' ');
//     //     console.log(start);
//     //     console.log(s)
//     //     while(start.length > 0){
//     //         s.push(start.shift());            
//     //     }
//     //     console.log(start);
//     //     console.log(s)
    
//     //     while(r >=0){
//     //         let char = s.pop();
//     //         if(char === ' '){
//     //             end.push(char);
//     //             break;
//     //         }
//     //         end.unshift(char);
//     //         r--;
//     //     }
//     //     r--;
//     //     console.log(end)
//     //     console.log(s)
//     //     // s.unshift(' ')
//     //     while(end.length > 0){
//     //         s.unshift(end.pop());
//     //     }
//     //     // s.pop();
//     //     console.log(end)
//     //     console.log(s)
//     //     console.log(l + ' ' + r);
    
    

//     // }
//     return s;
// };


var reverseWords = function(s) {
    s.reverse();
    // console.log(s)
    let l = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i+1] === ' ' || s[i+1] === undefined) {
            let r = i;
            while (l < r) {
                let temp = s[l];
                s[l] = s[r];
                s[r] = temp;
                l++, r--;
            }
            l = i+2;
        }
    }
    return s;
}

console.log(reverseWords(["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]));


    // while(l !== r || r > l){
    //     while(s[l] !== ' '){
    //         start.unshift(s.shift());
    //         l++;
    //     }
    //     while(s[r] !== ' '){
    //         end.push(s.pop());
    //         r--;
    //     }
    //     console.log(start);
    //     console.log(end)
    //     // while(start.length > 0){
    //     //     s.push(start.shift());            
    //     // }
    //     // while(end.length > 0){
    //     //     s.unshift(end.pop());
    //     // }
    //     l++;
    //     r--;
    // }