//https://www.hackerrank.com/challenges/making-anagrams/problem

function makingAnagrams(s1, s2) {
    let map ={};
    for(let i=0; i<s1.length; i++){
        if(map.hasOwnProperty(s1[i])){
            map[s1[i]] +=1;
        }else{
            map[s1[i]] = 1;
        }
    }

    for(let i=0; i<s2.length; i++){
        if(!map.hasOwnProperty(s2[i])){
            map[s2[i]] = -1;
        }
        else{
            map[s2[i]] -= 1;
        }
    }
    let total =0;

    for(let key in map){
        total+=Math.abs(map[key]);
    }
    return total;
}

// var dic = {};
// var i;
// for(i=0; i< s1.length; i++){
//     dic[s1[i]] = (dic[s1[i]]||0) + 1;
// }
// for(i=0; i< s2.length; i++){
//     dic[s2[i]] = (dic[s2[i]]||0) - 1;
// }
// var total = 0;
// for(var key in dic){
//     if(dic.hasOwnProperty(key)){
//         total += Math.abs(dic[key]);
//     }
// }
// return total;

//+++
// var count=0;
// let n=s1.length;
// let m=s2.length;
// for(let i=0;i<n;i++){
//     s2.includes(s1[i]) ? s2=s2.replace(s1[i],"") : count++;
// }
// return (m-(n-count))+count;

//++
// d = dict()
//     for i in range(len(s2)):
//         c1 = s2[i]
//         if d.get(c1) == None:
//             d[c1] = 1
//         else:
//             d[c1] += 1
    
//     for i in range(len(s1)):
//         c2 = s1[i]
//         if d.get(c2) == None:
//             d[c2] = -1
//         else:
//             d[c2] -= 1

//     total = 0
//     for n in d.values():
//         total += abs(n)
//     return total


//++

// function makeAnagram(s1, s2) {
//     var a = s1, b = s2;
//    // covert a into array and loop through it
//     a.split('').forEach(n => {
//         // if an element of "a" is in "b" string, remove it from both strings
//         if (b.includes(n)) {
//             a = a.replace(n, '');
//             b = b.replace(n, '');
//         }
//     });
//     // all pairs from a and b are removed so return the length of remainder
//     return a.length + b.length
// }

//++
// Complete the makingAnagrams function below.
// function makingAnagrams(s1, s2) {
//     let s1Copy = s1;
//     let s2Copy = s2;
//     let diffCount = 0;
//     for (let i = 0; i < s1.length; i++) {
//         if (s2Copy.includes(s1[i])) {
//             s2Copy = s2Copy.replace(s1[i], '')
//         } else {
//             diffCount++;
//         }
//     }
//     for (let i = 0; i < s2.length; i++) {
//         if (s1Copy.includes(s2[i])) {
//             s1Copy = s1Copy.replace(s2[i], '')
//         } else {
//             diffCount++;
//         }
//     }
//     return diffCount;
// }


// def makingAnagrams(s1, s2):
//     d1= defaultdict(int)
//     for i in s1:
//         d1[i]+=1
    
//     for i in s2:
//         d1[i]-=1
    
//     a=list(d1.values())
//     return sum([abs(i) for i in a])


//++

// function makingAnagrams(s1, s2) {
//     let count=0;
//     let final = s2.length;
//     for(let i = 0; i < s1.length;i++){
//       if (s2.includes(s1[i])) {
//           s2 = s2.replace(s1[i],'');
//       } else count ++
//     }
//     return (final-(s1.length-count))+count;
    
// }
    
//     let z = makingAnagrams(s1, s2); console.log(z);