//https://www.hackerrank.com/challenges/happy-ladybugs/problem
// I figured out as long as there is one '_', and more than one count of same letters, the string is happy. I did few mistakes on edge cases though.

// My solution is like:

//     If it is single char, then it is happy provided it is '_'.
//     In case of two letters, if both are same then happy.
//     If there is no '_', then print the state of string.
//     If every unique letter in the string appears more than once, they are happy.

// O(n)

// def happyLadybugs(b):

//     for a in set(b):
//         if a!='_' and b.count(a)==1:
//             return 'NO'

//     if '_' not in b:
//         for i in range(1, len(b)):
//             if b[i-1]!=b[i] and b[i+1]!= b[i]:
//                 return 'NO'
//     return 'YES'

// static String happyLadybugs(String b) {
//     int[] lb = new int['Z' - 'A' + 1];
//     boolean esp = false;
//     //The number of ladybirds for each color is saved in lb
//     //and evaluated if there is at least one space
//     for (char c : b.toCharArray()) {
//         if(c!='_'){
//             lb[c-'A']++;
//         }else{
//             esp = true;
//         }
//     }
//     //If there are no spaces, all the ladybugs should have an equal partner
//     if (!esp) {
//         for (int i = 1; i < b.length()-1; i++) {
//             if(b.charAt(i)!=b.charAt(i-1) && b.charAt(i)!=b.charAt(i+1)){
//                 return "NO";
//             }
//         }
//     }
//     //If there are spaces, there can not be a ladybug of a single color
//     for (int i : lb) {
//         if(i==1) return "NO";
//     }
//     //If there is no unhappy ladybug
//     return "YES";
// }

function happyLadybugs(b) {
  const map = {};
  let count = 0;
  let running = b[0];
  let c = 0;
  let balanced = true;
  for (let ch of b) {
    if (ch === running) {
      c++;
    } else {
      if (c < 1) {
        balanced = false;
      }
      running = ch;
      c = 1;
    }
    if (ch !== "_") {
      if (map.hasOwnProperty(ch)) {
        map[ch] += 1;
      } else {
        map[ch] = 1;
      }
    } else {
      count++;
    }
  }

  if (count > 0) {
    for (let key in map) {
      const char = map[key];

      if (char === 1) {
        return "NO";
      }
    }
    return "YES";
  } else {
    //already balanced?
    // return balanced === true ? 'YES' : 'NO';
    return "NO";
  }
}
