


/* 
Max point in a line
Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.
Example 1:
Input: [[1,1],[2,2],[3,3]]
Output: 3
Explanation:

^
|
|        o
|     o  oN
|  o  
+------------->
0  1  2  3  4

Your previous Plain Text content is preserved below:

Welcome to your interviewing.io interview.

Once you and your partner have joined, a voice call will start automatically.

Use the language dropdown near the top right to select the language you would like to use.

You can run code by hitting the 'Run' button near the top left.

Enjoy your interview!

slope = y2-y1/x2-x1 
HashMap<Slope , count> map 
class Point{
int x,
int y,
}
 */
//ArrayList<Point> input
// [[1,1],[2,2],[3,3]]
// general slope case
// vertical
// duplicate
// +1 include the orignal Point

function maxPoints(arr){
  let max_val = 0;

  // special case
  if(arr.length < 3) return arr.length;

  for(let i =0; i<arr.length; i++){

    let map ={};
    let curMax = 0;
    let dups =0;
    let slope;
    for(let j = i+1; j<arr.length; j++){
      if(i!==j){
        if(j[0] === i[0]){ //vertical line  
          slope =Infinity;
        }else{
          slope=parseFloat(j[1]-i[1])/parseFloat(j[0]-i[0]) 
        }

        //hashmap
        if(map.hasOwnProperty(slope)){
          map[slope] = +1;
        }else{
          map[slope] = 1;
        }
        curMax=Math.max(curMax, map[slope]);
      }else dups+=1

    }
    max_val=Math.max(max_val, curMax+dups) 
  }
 

  return max_val;
}
console.log(maxPoints([[1,1],[2,2],[3,3]])); //3

// function getSlope(one,two){
//   let slope =(two.y-one.y)/(two.x-one.x);
//   return slope;

// }


// function xycordinate(arr){  
//     let map ={};
//     let max = 0;
//     // special case
//     if(arr.size() < 3) return arr.size();
//     for(let i =0; i<arr.length; i++){
//       for(let j = i+1; j<arr.length; j++){
//          // combo i, j
//         // x1 =x2 
//         let vertical = 0;
//         let dup = 0;
//         if(arr[i].x == arr[j].x) {
//            // verticall
         
//          if(arr[i].y == arr[j].y) {
//            dup++
//           } else {
//              vertical++; // 2 point, u just store 1 P one == P two 
//           }
          
//         }
//         // get slope
//         HashMap<Double, Integer> map = new HashMap<Double, Integer>();
//         double slope = getSlope(arr[i] , arr[j]);
//         // update the map
//         if(map.contains(slope)) {
//           map.add(slope, map.get(slope)+1);
          
//         }else {
//           map.add(slope, 1);  // 2 point, u just store 1
//         }
//         let local_max = 0
//         // find the max value in the map, store in local max;
//         for (int count: map.values()){
//           local_max = Maht.max(count+dup, local_max);
//         }
//          max = Math.max(vertifical+dup, local_max);
//      }
//       return max+1;
         
//     }
    
//     double getSlope(Point one, Point two) {
//       double slope = (two.y-one.y)/(two.x-one.x);
//       return slope
    
      
//     }
    
    
//   }