// https://www.hackerrank.com/challenges/strange-advertising/problem
function viralAdvertising(n) {
    let cumulative = 0;
    let shared = 5;
    let liked = 0;

    for (var i = 0; i < n; i++) {
            liked = Math.floor(shared / 2);
            cumulative += liked;
            shared = liked * 3;
    }

    return cumulative; 

}