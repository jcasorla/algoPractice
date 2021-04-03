//https://www.algoexpert.io/questions/First%20Non-Repeating%20Character

//0(n) | 0(n)
function firstNonRepeatingCharacter(string) {
  const dict = {};

  for (let i = 0; i < string.length; i++) {
    const ch = string[i];
    if (ch in dict) {
      dict[ch][0]++;
    } else {
      dict[ch] = [1, i];
    }
  }
  for (let key in dict) {
    const freq = dict[key][0];
    const index = dict[key][1];
    if (freq === 1) return index;
  }
  return -1;
}

//other solution
//0(n) | 0(n)
function firstNonRepeatingCharacter(string) {
  const dict = {};

  for (let i = 0; i < string.length; i++) {
    const ch = string[i];
    if (ch in dict) {
      dict[ch]++;
    } else {
      dict[ch] = 1;
    }
  }
  for (let i = 0; i < string.length; i++) {
    const ch = string[i];
    if (dict[ch] === 1) return i;
  }
  return -1;
}
