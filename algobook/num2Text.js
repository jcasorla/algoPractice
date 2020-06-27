

function num2Text(num){
    let dict ={1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight',
    9:'nine', 10:'ten', 11:'eleven', 12:'twelve', 13:'thirteen', 14: 'fourteen', 15:'fifteen', 16:'sixteen',
    17:'seventeen', 18:'eighteen', 19:'nineteen', 20:'twenty', 30:'thirty', 40:'fourty', 50:'fifty', 60:'sixty',
    70:'seventy', 80:'eigthy', 90:'ninety', 00:'hundred', 000:'thousand'}

    let numString = num.toString();
    let words='';
    
    for(let i=0; i<numString.length; i++){
        console.log(dict[numString[i]]);

    }
}

num2Text(13);

