
//https://www.hackerrank.com/challenges/beautiful-triplets/problem


function beautifulTriplets(d, arr) {
    let len = arr.length;
    let res =[];
    for(let i=0; i<len; i++){
        let k = arr[i];
        let inner = [k];        
        for(let j =i+1; j<len; j++){
            if(Math.abs(k-arr[j]) ===d && inner.length<3){
                k = arr[j];
                inner.push(k);
            }
        }
        if(inner.length === 3){
            res.push(inner);
        }
    }
    return res.length;
}
console.log(beautifulTriplets(3,[1,2,4,5,7,8,10]));
console.log(beautifulTriplets(1,[2,2,3,4,5]));

// function beautifulTriplets(d, arr) {
//     let counts = {};
//     arr.forEach(x => counts[x] = counts[x] + 1 || 1);
//     return arr.reduce((c, v) => {
//         let a = counts[v - d] * counts[v + d];
//         return c + (isNaN(a) ? 0 : a);
//     },0);
// }


//best
// function beautifulTriplets(d, arr) {
//     let result = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr.includes(arr[i] + d) && arr.includes(arr[i] + d * 2)) {
//             result++
//         }
//     }
//     return result
// }

// static int beautifulTriplets(int d, int[] arr) {
//     int res=0;
//     Set<Integer> set=new HashSet<>();
//     for(int i=0;i<arr.length;i++){
//         set.add(arr[i]);
//     }
//     for(int j=0;j<arr.length-2;j++){
//         if(set.contains(arr[j]+d)&&set.contains(arr[j]+2*d)){
//             res++;
//         }
//     }
//     return res;
// }

// function beautifulTriplets(d, arr) {
//     let counter=0;
//     for(let i=0;i<arr.length-2;i++){
//         if(arr.indexOf(arr[i]+d)>0 && arr.indexOf(arr[i]+2*d)>0)
//             counter+=1;
//     }
//     return counter
// }


// function beautifulTriplets(d, arr) {
//     let count = 0
//     let map = {}
		
//     for(let i = 0; i < arr.length; i++){
//         let el = arr[i]
//         //create map of occurences
//         map[el] = map[el] ? map[el] += 1 : 1

//         //find numbers needed to satisfy beautiful triplet
//         const comp1 = el - d
//         const comp2 = comp1 - d

//         //add to count for each occurence
//         if(map[comp1] && map[comp2]){
//             count += Math.max(map[comp1], map[comp2])
//         }
//     }
    
//     return count
// }


// function beautifulTriplets(d, arr) {
//     let count = 0;

//     arr.forEach(n => {
//         if (arr.includes(n + d) && arr.includes(n + d + d)) {
//             count++;
//         }
//     })

//     return count;

// }