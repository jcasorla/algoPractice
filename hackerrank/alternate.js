function alternate(s) {

    let pairs = [];
    let longestLength= 0;

    let si = s.split('');
    let distinct = Array.from(new Set(s));

    for(let i=0; i<si.length; i++) {
        for(let j=i+1; j<si.length; j++) {
            pairs.push([si[i], si[j]]);
        }
    }

    for(let i=0; i<pairs.length; i++) {
        let temp = si.filter(k => (k === pairs[i][0] || k=== pairs[i][1]));
        if(isAlternate(temp.join('')) && temp.length > longestLength) {
            longestLength = temp.length;
            console.log(temp);
        }
    }

    function isAlternate(st) {
       let s = st.split('');
       if(Array.from(new Set(s).length === 2)) {
           for(let i=0; i<s.length-1; i++) {
           if(s[i] !== s[i+1]) {
               if(s[i+2] && s[i+2] === s[i]) {
                    continue;
               } else { continue; }
           } else { return false; }
       }
       return true;
       } else { return false; }
       
    }
    return longestLength===0 ? '0' : longestLength;
}


// def alternate(s):
//     length = 0
//     if len(set(s))==1:
//         return length
//     old = s
//     sett = list(set(s))
//     b = list(itertools.combinations(sett, len(sett) - 2))
//     for i in range(len(b)):
//         b[i] = list(b[i])
//         s = old
//         for j in b[i]:
//             s=s.replace(j,'')

//         for i in range(len(s) - 1):
//             if s[i + 1] == s[i]:
//                 break
//         if i == len(s) - 2:
//             if s[i]!=s[i+1]:
//                 if len(s) > length:
//                     length = len(s)
//     return length