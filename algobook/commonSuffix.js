// function commonSufix(arr){
//     let queue = [];
//     let w1 = arr[0], w2 = arr[1];
//     let x = w1.length -1, y = w2.length -1;

//     while(x>=0 || y>=0){
//         if(w1[x]===w2[y])
//             queue.unshift(w1[x]);

//         x--,y--;
//     }
//     // return queue.join('')

//     for(let i =2; i < arr.length; i++){
//         let word = arr[i];
//         let start = word.length - queue.length;
//         console.log(start);
//         let s = 0;
//         while(start < word.length){
//             console.log(word[start])
//             console.log(queue[s])
//             if(word[start] !== queue[s]) {
//                 queue.shift();
//                 console.log(queue)
//                 // continue;
//             }else{
//                 start ++;
//                 s++;
//             }

            
//         }
//     }
//     console.log(queue)
//     return queue.length > 0 ? queue.join('') : 'n';
// }

function commonSufix(arr){
    let min = findMin(arr);
    let res = [];
    let len = 1, i = min.length - len;

    while(i < min.length){
        let ch = min[i];
        console.log(ch)
        for(let j =0; j < arr.length; j++){
            let idx = arr[j].length - len;
            console.log(arr[j][idx])
            if(idx < 0 || ch!==arr[j][idx]){
                return res.join('');
            }
        }
        res.unshift(ch);
        len++;
        i = min.length - len;
    }
    return res.join('');

}
function findMin(arr){
    let min = arr[0];
    for(let i =1; i < arr.length; i++){
        min = arr[i].length > min.length ? arr[i] : min;
    }

    return min;
}

console.log(commonSufix (['action', 'traction','devotion', 'ovation']))

function commonSuffix2(strs){
    let longest = [];
    if(!strs || strs.length== 0)
        return longest;
    reverse(strs);
    
    let idx = 0;

    for(let c of strs[0]){
        for(let i =1; i < strs.length; i++){
            if(idx >= strs[i].length || c !== strs[i][idx])
                return longest.join('');
        }
        longest.unshift(c);
        idx++;
    }
}
function reverse(arr){
    for(let i =0; i < arr.length; i++){
        arr[i] = arr[i].split('').reverse((a,b)=>a-b).join('');
    }
}

console.log(commonSuffix2(['action', 'traction','devotion', 'ovation']))


//https://stackoverflow.com/questions/45518313/how-to-find-longest-common-suffix-from-a-list-of-strings-and-return-the-resultin

// package javaapplication1;
// public class SegmentTree {

//     public static void main(String[] args) {
//         String[] array = {"Gloucestershire", "Hampshire", "Yorkshire", "Lancashire"};
//         int i,j;
//         int min=10000000;

//         //reversing the strings and finding the length of smallest string
//         for(i=0;i<(array.length);i++)
//         {
//           if(array[i].length()<min)
//               min=array[i].length();


//          StringBuilder input1 = new StringBuilder();
//          input1.append(array[i]);
//          array[i] = input1.reverse().toString();
//         }

//         //finding the length of longest suffix

//         for(i=0;i<min;i++)
//         {
//           for(j=1;j<(array.length);j++)
//           {
//               if(array[j].charAt(i)!=array[j-1].charAt(i))
//               {
//                 break;
//               }
//           }
//           if(j!=array.length)
//               break;
//         }

//         System.out.println(i);
//     }
// }
