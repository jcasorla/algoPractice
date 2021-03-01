//https://www.hackerrank.com/challenges/mars-exploration/problem

/**
 * Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string,
 * , determine how many letters of the SOS message have been changed by radiation.
 * example: SOSSOT output 1
 */

function marsExploration(s) {
  const sos = "SOS";
  let p1 = 0;
  let p2 = 3;
  let count = 0;
  while (p2 <= s.length) {
    if (s.slice(p1, p2) !== sos) {
      const newSos = s.slice(p1, p2);
      for (let i = 0; i < sos.length; i++) {
        if (newSos[i] !== sos[i]) count++;
      }
    }
    p1 = p2;
    p2 += 3;
  }
  return count;
}

function marsExploration(s) {
  var n = 0;
  for (var i = 0; i < s.length; i += 3) {
    if (s[i] != "S") n++;
    if (s[i + 1] != "O") n++;
    if (s[i + 2] != "S") n++;
  }
  return n;
}
