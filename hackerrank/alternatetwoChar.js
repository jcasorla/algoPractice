//https://www.hackerrank.com/challenges/two-characters/forum
function alternate(s) {
    let maxlen = 0;
    const combinations = [];
    [...new Set(s)].forEach((v, i, a) => {
        a.slice(i + 1).forEach(v1 => {
            combinations.push([v, v1]);
        })
    });
    combinations.forEach(comb => {
        let t = [...s].filter(v => comb.includes(v)).join('');
        if (t.match(/(.)\1/) === null) {
            maxlen = Math.max(maxlen, t.length)
        }
    })
    return maxlen;
}

bryank 2 years ago

Javascript solution, which is surprisingly short compared to the other solutions on here...

function alternate(s) {
    let maxlen = 0;
    const combinations = [];
    [...new Set(s)].forEach((v, i, a) => {
        a.slice(i + 1).forEach(v1 => {
            combinations.push([v, v1]);
        })
    });
    combinations.forEach(comb => {
        let t = [...s].filter(v => comb.includes(v)).join('');
        if (t.match(/(.)\1/) === null) {
            maxlen = Math.max(maxlen, t.length)
        }
    })
    return maxlen;
}

Explanation:

A) get a set of unique letters in the string

B) build an array of all 2 letter combinations from that set

C) go through those combinations one at a time, building a new string that only consists of those 2 letters

D) use a regex to see if there are any consecutive matching letters, e.g. aa. If there are then it isn't an alternating string

E) if it is an alternating string, then update the max length found if it is longer



++++++++++++++++
function main() {
    var len = parseInt(readLine());
    var s = readLine();

    var chars = {};
    
    for (var i = 0; i < len; i++) {
        chars[s[i]] = (chars[s[i]] || 0) + 1;
    }
    
    var foundChars = [];
    var charCombos = [];
    for (var char in chars) {
        for (var j = 0; j < foundChars.length; j++) {
            charCombos.push(char + foundChars[j]);
        }
        foundChars.push(char);
    }
    
    var max = 0;
    for (var c = 0; c < charCombos.length; c++) {
        var rx = new RegExp('[^' + charCombos[c] + ']', 'g');
        var string = s.replace(rx, '');
        var solution = true;
        for (var k = 1; k < string.length; k++) {
            if (string[k-1] === string[k]) {
                solution = false;
                break;
            }
        }
        if (solution === true) {
            if (string.length > max) max = string.length;
        }
    }
    
    console.log(max);
}

+++++++++++++++++++
function alternate(s) {
   let arr=[]
   let stringarr=s.split("")
   let value=''
   let count=[0];
	 
	//Array of distinct characters: 
  for(let i=0;i<s.length;i++)
  {
      if(!arr.includes(s.charAt(i)))
      arr.push(s.charAt(i))
  }
//create different string	
for(let i=0;i<arr.length;i++)
{
for(let j=i+1;j<arr.length;j++)
{
    for(let k=0;k<stringarr.length;k++){
       if(arr[i]===s.charAt(k) || s.charAt(k)===arr[j])
       {
           value=value+s.charAt(k)
       }
    }
		//Check whether string contains alternate alphabet or not
   let flag=true;
   for(let p=0;p<value.length-2;p++)
   {
       if(value.charAt(p)!=value.charAt(p+2))
       {
           flag=false;
           break;
       }
   }
   if(flag===true)
   count.push(value.length)
   value=''
}
}
return Math.max(...count)
}

++++++++++++++++++++++++
function alternate(s) {
    if (s.length === 1) return 0;

    const keys = [...new Set(s)];
    const twoChars = [];
    let max = 0;

    for (let i = 0; i < keys.length - 1; i++) {
        for (let j = i + 1; j < keys.length; j++) {
            twoChars.push(keys[i] + keys[j]);
        }
    }

    twoChars.forEach(item => {
        let str = '';
        for (let i = 0; i < s.length; i++) {
            if (str[str.length - 1] === s[i]) {
                str = '';
                break;
            }
            if (item.includes(s[i])) {
                str += s[i];
            }
        }
        if (str && str.length > max) max = str.length;
    });

    return max;
}