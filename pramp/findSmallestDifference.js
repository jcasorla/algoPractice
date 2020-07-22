//https://www.geeksforgeeks.org/smallest-difference-pair-values-two-unsorted-arrays/

function findSmallestDiff(A,B){

    A = A.sort((a,b)=>a-b);
    B = B.sort((a,b)=>a-b);
    let lenA = A.length;
    let lenB = B.length;
    let res =Infinity;
    let a =0, b = 0;
    while(a < lenA && b < lenB){
        if(A[a] === B[b]) return 0;

        let localRes = Math.abs(A[a],B[b]);
        res = Math.min(res,localRes);
        
        if(A[a] < B[b]){
            a++;
        }else{
            b++;
        }
    }

    return res;

}

console.log(findSmallestDiff([1, 2, 11, 5],[4, 12, 19, 23, 127, 235]));