//https://www.hackerrank.com/challenges/halloween-sale/problem

function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let own =0;
    while(s-p >=0){
        s -=p;
        if(p -d > m){
            p-=d;
        }else{
            p=m;
        }
        own++;
    }
    return own;
}

// function howManyGames(p, d, m, s) {
//     let gamesPurchased = 0;

//     while (s >= p) {
//         gamesPurchased++;
//         s -= p;
//         p - d > m ? p -= d : p = m;
//     }
//     return gamesPurchased;
    
// }