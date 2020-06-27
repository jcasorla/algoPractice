// Array Quadruplet

// Given an unsorted array of integers arr and a number s, write a function findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s. Your function should return an array of these numbers in an ascending order. If such a quadruplet doesn’t exist, return an empty array.

// Note that there may be more than one quadruplet in arr whose sum is s. You’re asked to return the first one you encounter (considering the results are sorted).

// Explain and code the most efficient solution possible, and analyze its time and space complexities.

// Example:

// input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20

// output: [0, 4, 7, 9] # The ordered quadruplet of (7, 4, 0, 9)
//                      # whose sum is 20. Notice that there
//                      # are two other quadruplets whose sum is 20:
//                      # (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re
//                      # asked to return the just one quadruplet (in an
//                      # ascending order)


function findArrayQuadruplet(arr, s) {
    arr = arr.sort((a,b)=>a-b);
    let found = false;
    let sum = [0,0,0,0];
    let small =0;
    
    for(let i =0; i<arr.length; i++){
      for(let j =i+1; j<arr.length; j++){
        for(let h =j+1; h<arr.length; h++){
          
          for(let x =h+1; x<arr.length; x++){
            
              if(arr[i] + arr[j] + arr[h] + arr[x] ===s){
                 sum[0] = arr[i];
                 sum[1] = arr[j];
                 sum[2] = arr[h];
                 sum[3] = arr[x];
                console.log(small + ' ' + sum.join(''));
                 if(small < sum.join('')){
                    small = sum.join('');
                 }
                 found = true;
                
              }
          }
        }
      }
    }
    if(found === false){
      return [];
    }
    
    return small.split('');
   
    
  }

//   function findArrayQuadruplet(arr, s):
//     n = arr.length

//     # if there are fewer than 4 items in arr, by
//     # definition no quadruplet exists whose sum is s
//     if (n < 4):
//         return []

//     # sort arr in an ascending order
//     arr.sort()

//     for i from 0 to n - 4:
//         for j from i + 1 to n - 3:
//             # r stores the complementing sum
//             r = s - (arr[i] + arr[j])

//             # check for sum r in subarray arr[j+1…n-1]
//             low = j + 1, high = n - 1;

//             while (low < high):
//                 if (arr[low] + arr[high] < r):
//                     low++

//                 else if (arr[low] + arr[high] > r):
//                     high--

//                 # quadruplet with given sum found
//                 else:
//                     return [arr[i], arr[j], arr[low], arr[high]]

//     return []
