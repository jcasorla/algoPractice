// Se reciben dos arreglos de numeros del mismo tamaño.
// se debe regresar la union de esos arreglos en 'zigzag'

/*
ejemplo
[1,3,4], [5,5,8]
[1,5,3,5,4,8]

res =[], i
res.push(arr1[i])
res.push(arr2[i])
[1,5,3,5,4,8] <-----


*/
/**
function mergeArrays(arr1,arr2){
	const res = [];

  function helper(arr1,arr2,i){
    if(i=== arr1.length) return;
    
    res.push(arr1[i]);
    res.push(arr2[i]);
    //i++;
    helper(arr1,arr2,++i);
  	
  }
  
  helper(arr1,arr2,0);
  return res;
}

console.log(mergeArrays([1,3,5],[2,4,6]));

function mergeArrays(arr1,arr2,i,res){
  
  
	
}

*/
def mergeArrays(a1, a2, i):
  if i == len(a1):
    return []
  new = [a1[i], a2[i]]
  tail = mergeArrays(a1, a2, i+1)
  return new + tail

# [1,2] [4,5]
# 


// [] [] -> []
// [1] [2] -> [1, 2]
// [1,3] [2,6] -> [1,2,3,6]
// [1,3,7] [2,6,9] -> [1,2,3,6,7,9]