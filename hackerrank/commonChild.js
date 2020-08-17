function commonChild(s1, s2) {
    let map = {}, count = 0;

    for(let i=0; i < s1.length; i++){
        if(!map.hasOwnProperty(s1[i])) map[s1[i]] =1;
        // else map[s1[i]] = 1;
    }

    for(let i=0; i<s2.length; i++){
        if(map.hasOwnProperty(s2[i])){
            delete map[s2[i]];
            count++;
        }
    }
    return count;
}

// console.log(commonChild('aa','bb'));
// console.log(commonChild('harry','sally'));
// console.log(commonChild('shinchan','noharaa'));
console.log(commonChild('ABCDEF','FBDAMN'));//2
// console.log(commonChild('OUDFRMYMAW','AWHYFCCMQX')); //2
// console.log(commonChild('WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS','FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC')); //15


// def commonChild(s1, s2):
//     prev = [0] * (len(s2)+1)
//     curr = [0] * (len(s2)+1)

//     for r in s1:
//         for j, c in enumerate(s2, 1):
//             curr[j] = prev[j-1] + 1 if r == c else max(prev[j], curr[j-1])
//         prev, curr = curr,prev

//     return prev[-1]