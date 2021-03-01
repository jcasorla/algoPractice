//https://www.hackerrank.com/challenges/pangrams/problem
/**
 * A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether
 *  it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.
 *
 */

//JavaScript with some explanation. Time: O(n), Space: O(n)
function pangrams(s) {
  /**
   * I.   Problem
   *  1. See if the argument string contains all of the letters in alphabet
   *  2. Input: one long string
   *  3. Output: 'pangram' if it has all chars from alphabet, 'not pangram' otherwise
   *  4. Should contain all chars
   *
   * II. Example
   * pangrams(We promptly judged antique ivory buckles for the next prize) --> pangram
   * because it has all letters from alhabet
   * III. Break it down
   *   Since the order is not important:
   *   Create an Set that will store  all alphabet letters from string
   *   Iterate over the string, for each char
   *      Add it to the set,
   *   If the size of the Set is 26, return pangram
   *   Otherwise, no pangram
   *
   */
  let alphabet = new Set();
  for (let char of s) {
    alphabet.add(char.toLowerCase());
  }
  //console.log(alphabet.size)
  //because we are adding empty space also, we need to subtract 1 from size of set
  //see console log above
  if (alphabet.size - 1 === 26) return "pangram";
  return "not pangram";
}

//my solution

//0(n) | 0(n)
function pangrams(s) {
  const alpha = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  for (let ch of s) {
    ch = ch.toLowerCase();
    if (ch in alpha) alpha[ch] += 1;
  }

  for (let key in alpha) {
    const val = alpha[key];
    if (val === 0) {
      return "not pangram";
    }
  }
  return "pangram";
}
