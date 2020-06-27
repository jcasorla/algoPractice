//you'll n3v3r 6u4ss at cdja:
//0:a, 1:b .... 9:j 
function stolenLunch(str){
    let dict = {0:'a', 1:'b', 2:'c', 3:'d', 4:'e', 5:'f', 6:'g', 7:'h', 8:'i', 9:'j','a':'0', 'b':1, 'c':2, 'd':3, 'e':4, 'f':5, 'g':6, 'h':7, 'i':8,'j':9 };

    let arr = str.split('');

    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
        if(dict.hasOwnProperty(arr[i])){
            console.log(arr[i]);
            arr[i] = dict[arr[i]];
        }
    }
    return arr.join('');
}

console.log(stolenLunch('youll n4v4r 6u4ss 8t cdja'));