var countSubstrings = function(s) {
    let count = 0;
    for(let i = 0; i < s.length; i += 1){
        helper(s, i, i) //found all single number length Palindromic
        helper(s, i, i+1) //found all even number length Palindromic
    }
    return count
    
    function helper(s, low, high){
        while(low>=0 && high<=s.length && s[low]===s[high]){
            count += 1
            low -= 1
            high += 1
        }
    }
};


function countSubstrings(s) {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
      total += expand(s, i, i);
      total += expand(s, i, i + 1);
    }
    return total;
  };
  
  function expand(s, l, r) {
    let count = 0;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
      count++;
    }
    return count;
  }