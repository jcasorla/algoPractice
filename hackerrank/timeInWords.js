//https://www.hackerrank.com/challenges/the-time-in-words/problem

function timeInWords(h, m) {
    const hours = {1:'one',2:'two', 3:'three', 4:'four', 5:'five',6:'six', 7:'seven', 8:'eight', 9:'nine',10:'ten', 11:'eleven', 12:'twelve'};

    const minutes = {1:'one',2:'two', 3:'three', 4:'four', 5:'five',6:'six', 7:'seven', 8:'eight', 9:'nine',10:'ten', 11:'eleven', 12:'twelve',13:'thirteen',14:'fourteen',15:'quarter',16:'sixteen', 17:'seventeen',18:'eighteen',19:'nineteen',20:'twenty',
    21:'twenty one',22:'twenty two',23:'twenty three',24:'twenty four',25:'twenty five',26
    :'twenty six',27:'twenty seven', 28:'twenty eight', 29:'twenty nine', 30:'half'};

    let word = '';
    let res = '';
    const o = 'o\' clock';
    if(m === 0){
        return hours[h] + ' ' + o;
    }

    if(m >30){
        m = 60 - m;
        h = h +1;
        word='to';
    }else{
        word = 'past';
    }
    if(m === 1) res = 'one minute';
    else
        res = minutes[m] === 'quarter' || minutes[m] === 'half' ? minutes[m] : minutes[m] + ' minutes';
 
     return res + ' ' + word + ' ' + hours[h];

}