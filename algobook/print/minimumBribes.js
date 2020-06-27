// 2
// 5
// 2 1 5 3 4
// 5
// 2 5 1 3 4
//https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen

function minimumBribes(queue) {

    var bribes = 0, i, j, flag = false;;
    for (i = 0; i < queue.length; i++) {
        const pos = queue[i], at = i + 1;
        if (pos - at > 2) { flag=true; break;} 
        for (j = Math.max(0, pos - 2); j < i; j++) {
            if (queue[j] > pos) { bribes++ }
        }
    } 

    if(flag){
        console.log("Too chaotic");
    }else{
        console.log(bribes);
    } 
}