//https://www.youtube.com/watch?v=bGC2fNALbNU
function allSubsets(givenArr){
    subset = [];
    helper(givenArr,subset,0);
    function helper(givenArr,subset,i){
        if(i==givenArr.length) console.log(subset);
        else{
            subset[i] = null;
            helper(givenArr,subset,i+1);
            subset[i] = givenArr[i];
            helper(givenArr,subset,i+1);
        }

    }
}

console.log(allSubsets([1,2]))