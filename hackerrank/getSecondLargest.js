// https://www.hackerrank.com/challenges/js10-arrays/problem

function getSecondLargest(nums) {
    let max = nums[0];
    let sec=nums[0];

    nums.forEach(data=>{
        if(data > max){
            sec = max;
            max = data;
        }else if(data>sec && data < max){
            sec = data;
        }
    });

    return sec;
}