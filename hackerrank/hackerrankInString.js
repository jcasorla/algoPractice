// https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem

function hackerrankInString(str){
    let map = {'h':1, 'a':2, 'c':1,'k':2,'e':1,'r':2,'n':1}

    for(let i =0; i<str.length; i++){
        if(map[str[i]] > 0){
            map[str[i]] -=1;
        }
    }

    // let res = Object.values(map).reduce(reducer,0);
    // function reducer(num,k){
    //     return num < k;
    // }
   
    // return res ?false : true;

    let count =0;
    for(key in map){
        if(map[key] >0)
            count++;
        
    }

    return count > 0 ? false : true;
}

console.log(hackerrankInString('hereiamstackerrank'));
console.log(hackerrankInString('hackerworld'));