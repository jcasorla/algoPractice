//https://www.algoexpert.io/questions/Underscorify%20Substring

// function underscorifySubstring(string, substring) {
//     let arr = string.split(' ');
//       let len = arr.length;
//       let res = '';
//       for(let i =0; i<len; i++){
//           let word = arr[i];
//         //   console.log(word)
//           if(word.includes(substring)){
//               console.log(word);
//             //   if(word === substring){
//             //       arr[i] = '_' + word + '_';
//             //   }
//             arr[i] = underScore(word);
//           }
//       }
//       return arr.join(' ');
//   }

//   function underScore(word){
//     let arr = word.split('test');
//     console.log(arr);
//     let res = '';
//     let start =0;
//     let end =0;
//     //_test_this
//     let sub ='';
//     for(let i =0; i<arr.length; i++){
//         let char = arr[i];
        
//         if(char ==''){
//             while(arr[i] === ''){
//                 res+='test'
//                 i++;
//             }
//             res = res.split('');
//             console.log(res);
//             res.unshift('_');
//             res.push('_');
//             console.log(res)
//             // console.log('test');
//             // res+='_test_'
//             res = res.join('');
//             console.log(res);
//             i-=1;

//             //0123
//             // console.log(arr[i])
//             // sub = arr.slice(i-3,i+1);
//             // console.log(sub);         
            
//         }else{
//             res+=char;
//             console.log(char);
//         }

//     }
    
//     // let left = arr.slice(i+1,arr.length);

//     return res;
//   }

// //   console.log(underscorifySubstring('testthis is a testtest to see if testestest it works','test'));
//   //'_test_this is a _testtest_ to see if _testestest_ it works'


function underscorifySubstring(string, substring) {

  const locations = getLocations(string,substring);
  const loc = collapse(locations);
  return underscorefy(string,loc);
}

function getLocations(string,sub){
	const locations = [];
	let start =0;
	
	while(start < string.length){
		const next = string.indexOf(sub,start);
		if(next !==-1){
			locations.push([next,next+sub.length]);
			start = next + 1;
		}else{
			break;
		}                       			
  }
	return locations;
}
function collapse(locations){
  if(!locations.length) return locations;

  let res =[];
  let loc = locations;
  let len = loc.length;

  for(let i =0; i<len; i++){
    if(loc[i+1] && loc[i+1][0] <= loc[i][1]){
      let s = loc[i][0];
      while(loc[i+1] && loc[i+1][0] <= loc[i][1]){
        i++;
      }
      res.push([s,loc[i][1]]);
    }
    else{
      res.push(loc[i]);
    }
   
  }
  return res;
}

function underscorefy(string,loc){
  let newStr = '';
  let idx =0;
  let i =0;

  while(i<string.length){
    if(loc[idx] && i >= loc[idx][0] && i <= loc[idx][1]){
      newStr += '_';
      newStr+= string.slice(loc[idx][0] ,loc[idx][1]);
      newStr+='_';
      i = loc[idx][1];
      idx++;
    }else{
      newStr += string[i];
      i++;
    }
  }
  return newStr;

}

// Do not edit the line below.
// exports.underscorifySubstring = underscorifySubstring;

// console.log(underscorifySubstring('testthis','test'))
// console.log(underscorifySubstring('testtest','test'))
// console.log(underscorifySubstring('testestest','test'))
console.log(underscorifySubstring("testthis is a testtest to see if testestest it works",'test'));

