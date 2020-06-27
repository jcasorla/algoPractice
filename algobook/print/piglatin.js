//glove -> oveglay
//eight ->eightway


function pigLatin(str){
    let arr  = str.split('');
    let end ='';
    if(str[0] ==='a' || str[0] ==='e' || str[0] ==='i' || str[0] ==='o' || str[0] ==='u'){
        return str +'way';
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i] =='a' || arr[i] =='e' || arr[i] =='i' || arr[i] =='o' || arr[i] =='u' ){
            // end += arr.shift();
        }else{
            end += arr.shift();
        }
    }

    return arr.join('') + end + 'ay';
}

console.log(pigLatin('eight'));
console.log(pigLatin('glove'));
console.log(pigLatin('stove'));