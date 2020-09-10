function underscorifySubstring(string, substring) {
    let arr = string.split(' ');
      let len = arr.length;
      let res = '';
      for(let i =0; i<len; i++){
          let word = arr[i];
        //   console.log(word)
          if(word.includes(substring)){
              console.log(word);
            //   if(word === substring){
            //       arr[i] = '_' + word + '_';
            //   }
            arr[i] = underScore(word);
          }
      }
      return arr.join(' ');
  }

  function underScore(word){
    let arr = word.split('test');
    console.log(arr);
    let res = '';
    let start =0;
    let end =0;
    //_test_this
    let sub ='';
    for(let i =0; i<arr.length; i++){
        let char = arr[i];
        
        if(char ==''){
            while(arr[i] === ''){
                res+='test'
                i++;
            }
            res = res.split('');
            console.log(res);
            res.unshift('_');
            res.push('_');
            console.log(res)
            // console.log('test');
            // res+='_test_'
            res = res.join('');
            console.log(res);
            i-=1;

            //0123
            // console.log(arr[i])
            // sub = arr.slice(i-3,i+1);
            // console.log(sub);         
            
        }else{
            res+=char;
            console.log(char);
        }

    }
    
    // let left = arr.slice(i+1,arr.length);

    return res;
  }

//   console.log(underscorifySubstring('testthis is a testtest to see if testestest it works','test'));
  //'_test_this is a _testtest_ to see if _testestest_ it works'

// console.log(underScore('testthis'))
// console.log(underScore('testtest'))
console.log(underScore('testestest'))

