// https://www.hackerrank.com/challenges/chocolate-feast/problem

function chocolateFeast(n, c, m) {
    /**
     * 
    n: an integer representing Bobby's initial amount of money
    c: an integer representing the cost of a chocolate bar
    m: an integer representing the number of wrappers he can turn in for a free bar

     */
    let candies = n / c;
    let wrap = candies;

    while(wrap>=m){
        wrap -=m;
        wrap+=1;
        candies+=1;
    }
    return Math.floor(candies);
}