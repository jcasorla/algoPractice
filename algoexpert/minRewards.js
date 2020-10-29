//https://www.algoexpert.io/questions/Min%20Rewards

// function minRewards(scores) {
//     let len = scores.length;
//       let gifts = new Array(len).fill(1);
//       for(let i =0; i<len-1; i++){
//           let cur = scores[i];
//           let next = scores[i+1];
//           if(next > cur) gifts[i+1] = gifts[i] + 1;
//       }
      
//       for(let i =len-1; i>0; i--){
//           let cur = scores[i];
//           let prev = scores[i-1];
//           if(prev > cur){
//               let calc = gifts[i] + 1;
//               gifts[i-1] = Math.max(calc,gifts[i-1]);
//           } 
//       }
      
//       let sum =0;
//       gifts.forEach(data=>{
//           sum+=data;
//       })
      
//       return sum;
//   }

//   //second solution expanding from min
//   //[8, 4, 2, 1, 3, 6, 7, 9, 5]}
// //localmin: 1
// //localmax: 9

// function minRewards(scores) {
//     let len = scores.length;
//       let gifts = new Array(len).fill(1);
//       const localMin = getLocalMin(scores);
//       for(let min of localMin){
//           expandMin(min);
//       }
//       let sum =0;
      
//       gifts.forEach(val=>{
//           sum+=val;
//       });
      
//       return sum;
      
//       function expandMin(min){
//           let l = min-1;
//           while(l >=0 && scores[l] > scores[l+1]){
//               gifts[l] = Math.max(gifts[l],gifts[l+1] + 1);
//               l--;
//           }
//           let r = min+1;
//           while(r<len && scores[r] > scores[r-1]){
//               gifts[r] = gifts[r-1] +1;
//               r++;
//           }
//       }
//   }
  
//   function getLocalMin(arr){
//       if(arr.length===1) return [0];
//       let res = [];
//       for(let i =0; i < arr.length; i++){
//           if(arr[i] < arr[i+1] && arr[i] < arr[i-1]){
//               res.push(i);
//           }
//           if(i===0 && arr[i] < arr[i+1]) res.push(i);
//           if(i === arr.length-1 && arr[i] < arr[i-1]) res.push(i);
//       }
//       return res;
//   }