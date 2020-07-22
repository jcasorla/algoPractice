
function arrayConversionRec(arr,isOdd=true){
    if(arr.length === 1){
        return arr[0];
    }
    arr = sumProduct(arr,isOdd);
    isOdd = !isOdd;
    return arrayConversionRec(arr,isOdd);
}
function arrayConversionRec2(arr){
    let isOdd=true;
    function helper(arr,isOdd){
        if(arr.length === 1){
            return arr[0];
        }
        arr = sumProduct(arr,isOdd);
        isOdd = !isOdd;
        return helper(arr,isOdd);
    }

    return helper(arr,isOdd);    
}

function arrayConversion(arr){
    let isOdd = true;
    while(arr.length >1 ){
        arr = sumProduct(arr,isOdd);
        isOdd=!isOdd;
    }
    return arr[0];
}

function sumProduct(nums,isOdd){
    const sumProducts = [];

    if(isOdd){
        for(let i=0; i < nums.length; i+=2){
            sumProducts.push(nums[i] + nums[i+1]);
        }
    }else{
        for(let i=0; i < nums.length; i+=2){
            sumProducts.push(nums[i] * nums[i+1]);
        }
    }
    return sumProducts;
}

console.log(arrayConversion([1,2,3,4,5,6,7,8]));
// console.log(arrayConversionRec([1,2,3,4,5,6,7,8]));
console.log(arrayConversionRec2([1,2,3,4,5,6,7,8]));