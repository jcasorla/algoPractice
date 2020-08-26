


function pickingNumbers(a) {
    let maxcount = 0;
    [...new Set(a)].forEach(x => {
        maxcount = Math.max(maxcount,
            a.reduce((c, v) => c += (v === x || v === x + 1), 0));
    })
    return maxcount;
}
// What this does:

//     starting with a unique list of values that appear in the array
//     for each value in turn, count how many members of the original array are either equal to that value or value+1
//     track the highest count in maxcount
//     return the maxcount at the end
//     win


// const pickingNumbers = (a) => {
//     if(!a || a.length == 0) { return 0; }
  
//     const buckets = new Array(101);
//     buckets.fill(0);
  
//     const arrayLength = a.length;
  
//     for(let i=0; i< arrayLength; i++) {
//       buckets[a[i]] += 1;
//     }
  
//     let max = 0;
//     for(let j=1; j< 101; j++) {
//       let currentValue = buckets[j];
//       let previousValue = buckets[j - 1];
//       if(previousValue != 0 && previousValue + currentValue > max) {
//         max = previousValue + currentValue
//       };
//     }
  
//     return max;
//   }


// function pickingNumbers(a) {
//     a.sort((a, b) => a - b);
//     let h = 0, mL = 1;
//     for (let t = 1; t < a.length; t++) {
//       if (Math.abs(a[h] - a[t]) <= 1) mL = Math.max(mL, t - h + 1);
//       else h = t;
//     }
//     return mL;
//   }