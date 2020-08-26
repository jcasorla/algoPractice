// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {    
    let high = scores[0], low = scores[0], min = 0, max = 0;

    scores.forEach(data=>{
        if(data < low){
            low = data;
            min ++;
        }
        if(data > high){
            high = data;
            max++;
        }
    });

    return [max,min];
}
