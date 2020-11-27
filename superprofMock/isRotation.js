function isRotation(s1, s2) {
  if (s1 === s2) return true;

  const orig = s2;
  let arr = s2.split("");
  let pop = arr.pop();
  arr.unshift(pop);

  while (orig !== arr.join("")) {
    if (s1 === arr.join("")) return true;

    pop = arr.pop();
    arr.unshift(pop);
  }
  return false;
}

console.log(isRotation("roof", "omro"));
