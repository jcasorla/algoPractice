//https://www.algoexpert.io/questions/Smallest%20Substring%20Containing

function smallestSubstringContaining(bigString, smallString) {
    let map = {};
      let out = bigString;
      
      for(let i =0; i<smallString.length; i++){
          let char = smallString[i];
          if(map.hasOwnProperty(char)){
              map[char] += 1;
          }else{
              map[char] = 1;
          }
      }
      console.log(Object.keys(map));	
      let left =0, right =0;
      let sub = '';
      // let lessub = '';
    //   console.log(Object.values(map));	
    //   console.log(validSub('abcd$ef$ax',map));
    //   console.log(Object.values(map));	
    //   console.log(validSub('bcd$ef$ax',map));
      while(right <= bigString.length){
           sub = bigString.slice(left,right);
           console.log(sub);
          while(validSub(sub,map)){
            out = sub.length < out.length ? sub : out;
              sub = bigString.slice(left,right);
               
              left++;
          }
          right++;
      }
      console.log(sub)
      if(sub == bigString.slice(1,bigString.length)){
          return out;
      }
      return out === bigString ? '' : out;
  }
  function validSub(sub,map){
      let copy = {...map};
    //   let p2 = Object.assign({}, person);

      for(let char of sub){
          if(copy[char] >= 1){
              copy[char] -= 1;
          }
      }
      
      for(let key in copy){
          if(copy[key] >= 1){
              return false;
          }
      }
      return true;
  }

//what it the whole string is valid?
//   console.log(smallestSubstringContaining('abcd$ef$axb$c$','$$abf'));
//   console.log(smallestSubstringContaining('abcdef','fa'));//abcdef
//   console.log(smallestSubstringContaining('abzacdwejxjftghiwjtklmnopqrstuvwxyz','aajjttwwxxzz'));//abzacdwejxjftghiwjtklmnopqrstuvwxyz
//   console.log(smallestSubstringContaining('14562435612z!8828!193236!336!5$41!23!5!6789901#z2!','#!2z'));
  
 