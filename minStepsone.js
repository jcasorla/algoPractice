function minStepsToOne(n) {
  
  function traverse(current) {
    if (current === 1) {
      return 0;
    }
    
    // subtract 1
    let option = traverse(current - 1);
    
    // divide by 2
    if (current % 2 === 0) {
      let divide2 = traverse(current / 2);
      option = Math.min(option, divide2);
    }
    
    // divide by 3
    if (current % 3 === 0) {
      let divide3 = traverse(current / 3);
      option = Math.min(option, divide3);
    }
    
    return option + 1;
  }
  
  return traverse(n);
}

// 1) Create cache
// 2) Check cache
// 3) Write to cache

const cache = {};

function minStepsToOneMemo(n) {
  function traverse(current) {
    if (current in cache) {
      return cache[current];
    }
    if (current === 1) {
      return 0;
    }

    // subtract 1
    let option = traverse(current - 1);

    // divide by 2
    if (current % 2 === 0) {
      let divide2 = traverse(current / 2);
      option = Math.min(option, divide2);
    }

    // divide by 3
    if (current % 3 === 0) {
      let divide3 = traverse(current / 3);
      option = Math.min(option, divide3);
    }

    cache[current] = option + 1;
    return option + 1;
  }

  return traverse(n);
}

const table = new Array(600 + 1);

function minStepsToOneTab(n) {
  
  if (table[n] !== undefined) {
    return table[n];
  }
  table[1] = 0;
  
  for (let i = 2; i < table.length; i++) {
    // subtract 1
    let option = table[i - 1];

    // divide by 2
    if (i % 2 === 0) {
      let divide2 = table[i / 2];
      option = Math.min(option, divide2);
    }

    // divide by 3
    if (i % 3 === 0) {
      let divide3 = table[i / 3];
      option = Math.min(option, divide3);
    }
    
    table[i] = option + 1;
  }
  
  return table[n];
}


// console.time("RECURSION: ");
// console.log(minStepsToOne(600));
// console.timeEnd("RECURSION: ");


// console.time("MEMOIZATION: ");
// console.log(minStepsToOneMemo(600));
// console.timeEnd("MEMOIZATION: ");


// console.time("TABULATION: ");
// console.log(minStepsToOneTab(600));
// console.timeEnd("TABULATION: ");




console.time("MEMOIZATION MANY: ");
for (let i = 0; i < 1000; i++) {
  minStepsToOneMemo(600);
}
console.timeEnd("MEMOIZATION MANY: ");


console.time("TABULATION MANY: ");
for (let i = 0; i < 1000; i++) {
  minStepsToOneTab(600);
}
console.timeEnd("TABULATION MANY: ");