
function integerToStringOfFixed(num,width){
    let nums = num.toString();
    let len = nums.length -1;
    let diff;
    if(len+1 ===width){
        return nums;
    }else if(len+1 > width){
        diff = (len+1)-width;
        return nums.slice(diff,len+1);
    }else{
        diff = width-(len+1);
        let prefix = '0'.repeat(diff);
        return prefix + nums;
    }
}

console.log(integerToStringOfFixed(1234,2));
console.log(integerToStringOfFixed(1234,6));