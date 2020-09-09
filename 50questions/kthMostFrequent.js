//https://www.byte-by-byte.com/kthmostfrequentstring/?utm_source=optin_carrot&utm_medium=pdf&utm_campaign=50questions

function kthMostFrequent(str,k){
    let map = {};

    for(let val of str){
        if(map.hasOwnProperty(val)){
            map[val] += 1;
        }else{
            map[val] = 1;
        }
    }

    let arr = Object.values(map);
    let set = new Set(arr);
    arr = [...set];

    let idx =0;;
    while(idx <k){
        idx++;
    }
    let comp = arr[idx];

    for(let key in map){
        let val = map[key];
        if(val ===  comp) return key;
    }
    return null;

}

console.log(kthMostFrequent('abcabca',0));
console.log(kthMostFrequent('abcabca',1));
console.log(kthMostFrequent('abcabcad',2));
console.log(kthMostFrequent('abcabcad',3));
