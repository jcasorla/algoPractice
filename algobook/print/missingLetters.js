//abce =>d


function missingLetters(str){
    let char ='';
    let alpha = {'b':'a','c':'b','d':'c','e':'d','f':'e','g':'f','h':'g', 'i':'h', 'j':'i','k':'j', 'l':'k', 'm':'l',
     'n':'m', 'o':'n', 'p':'o', 'q':'o','r':'q', 's':'r', 't':'s','u':'t', 'v':'u', 'w':'v','x':'w','y':'x','z':'y'};
    if(str[0] !=='a'){
        return 0;
    }
    for(let i=0; i<str.length; i++){
        if(alpha[str[i]] !==str[i-1]){
            char =alpha[str[i]];
        }
    }
    

    return char;
}

console.log(missingLetters('abd'));//c
