
function uniqueW(str){

    let arr = str.split(' ');
    let dict = {};

    arr.forEach(val => {
        if(dict[val]){
            dict[val]+=1;
        }else{
            dict[val]=1;
        }
    });

    let str1='';
    for(key in dict){
        if(dict[key] === 1){
            str1+=' ' + key;
        }
    }
    
    return str1;
}

console.log(uniqueW('a singer sings sings hello'));

//another way
function uniqueW2(str){

    let arr = str.split(' ');
    arr = arr.sort((a,b)=>(a-b))
    let str1='';
    for(let i=0; i<arr.length; i++){
        if(arr[i] !=arr[i+1]){
            str1+=' ' + arr[i]
        }else{
            i++;
        }
    }   
    
    return str1;
}

console.log(uniqueW2('a singer sings sings hello'));
