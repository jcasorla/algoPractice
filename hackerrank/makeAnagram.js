//https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function makeAnagram(a,b){
    let count =0;

    for(let i=0; i<a.length; i++){
        if(!b.includes(a[i])){
            count++;
        }
    }
    for(let i=0; i<b.length; i++){
        if(!a.includes(b[i])){
            count++;
        }
    }
   
    return count;
}

console.log(makeAnagram('cde','abc'));