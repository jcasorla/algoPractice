// function longestSubstringWithoutDuplication(string) {
// 	let map = {};
// 	let p1 = 0;
//     let p2 = 0;
//     let sub = '';
//     const len = string.length;
//     let last ='';
	
// 	while(p2 < len){
//         let char = string[p2];
// 		if(map[char] >=1){			
//             map[char] +=1;
//             let point = p1;
//             let dup = char;
//             while(map[dup] >=2){
                
//                 if(dup === string[p1]){
//                     map[string[p1]]--;
//                 }
//                 else if(map[string[p1]] ===1){
//                     delete map[string[p1]];
//                 }
//                 p1++;
//             }
            
//             let local = string.slice(point,p2);
//             sub = sub.length < local.length ? local : sub;    
// 		}else{
// 			map[char] = 1;
//         }
//         p2++;
//     }
//     last = string.slice(p1,p2);
//     return sub.length > last.length ? sub : last;	
// }

console.log(longestSubstringWithoutDuplication('clementisacap'));

function longestSubstringWithoutDuplication(string) {
    const lastSeen = {};
    let longest = [0,1];
    let start = 0;
    for(let i=0; i< string.length; i++){
        const char = string[i];
        if(char in lastSeen){
            start = Math.max(start, lastSeen[char]+1);
        }
        if(longest[1] - longest[0] < i + 1 - start ){
            longest = [start, i+1];
        }
        lastSeen[char] = i;
    }
    return string.slice(longest[0],longest[1]);
}