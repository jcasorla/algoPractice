function patternMatcher(pattern, string) {
  let startswithY = pattern[0] === "y" ? true : false;
  const counts = { x: 0, y: 0 };
  const newPattern = (pattern, startswithY);
  const firstYPosition = getCountAndFirstYPos(newPattern, counts);
}

function getNewPattern(pattern, startswithY) {
  if (!startswithY) return pattern;
  const patternLetters = pattern.split("");
  return patternLetters.map((char) => (char === "y" ? "x" : "y"));
}
function getCountAndFirstYPos(newPattern, counts) {
  let firstYPosition = null;

  for (let i = 0; i < newPattern.length; i++) {
    const val = newPattern[i];
    if (val === "y" && firstYPosition === null) firstYPosition = i;
    if (val in map) {
      counts[val]++;
    }
  }
  return firstYPosition;
}
