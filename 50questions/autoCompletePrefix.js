//https://www.byte-by-byte.com/autocomplete/?utm_source=optin_carrot&utm_medium=pdf&utm_campaign=50questions
//in example it is solved with a Trie

function autoComplete(pre,dict){
    let arr = Object.keys(dict);
    let res = [];
    arr.forEach(data=>{
        if(data[0]===pre){
            res.push(data);
        }
    });

    return res;
}

const map = {"abc":true, "acd": true, "bcd":true, "def":true,"a": true,"aba": true};
console.log(autoComplete('a',map));
console.log(autoComplete('b',map));