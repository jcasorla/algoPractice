// // abbacc =>   abba bb cc => 3
// // abcbab => abcba, bcb, bab => 3
// // cccc => cccc, cc, cc, cc, ccc, ccc => 6

// // loop
// // count=3
// // a bba cc

// // count=0=>1
// // abbacc
// // s
// // e

// // odd
// // aba => i == i+2
// // p
// // p

// // cabxc
// //  ^ ^ 
// // aba 
// // m =a.length/2;

// // start = m-1;
// // end m-2
// // start == end

// // start--
// // end++
// // abcbab

// // //get all posible sub
// // for


// // 3 

// // abcb[a]b =>
// //      ^ 


// // //word === word.reverse
     


// // function ispalindrome(sub) return true || flase // dont use

// // abba



function findPalinSubsetCount(str){
  //abcbab
  //  p
  //find center
  //expand
  //count=1
  // ODD
//   let count =0;
let total = 0;
  for(let i=0; i<str.length; i++){
      total +=expand(i,i,str);
      total +=expand(i,i+1,str);
   
    // if(str[cen-1] && str[cen+1]){
    //     let s = cen-1;
    //     let e = cen+1;
    //     // while(str[s] === str[e] && e < str.length && s > -1){
    //     //     // console.log(str[s]);
    //     //     // console.log(str[e]);
    //     //     count++;
    //     //     s--;
    //     //     e++;        
    //     //   }
    // }
  }
  // EVEN
  return total;


  function expand(s,e,str){
      let count =0;
    while(str[s] === str[e] && e < str.length && s >= 0){
       
        count++;
        s--;
        e++;        
      }
      return count;
  }
}




console.log(findPalinSubsetCount('abbabba'));
console.log(findPalinSubsetCount('aba'));
console.log(findPalinSubsetCount('abba'));



