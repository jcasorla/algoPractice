//https://www.algoexpert.io/questions/Tandem%20Bicycle

//0(nlog(n)) | 0(1)

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  if (fastest) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => b - a);
  } else {
    redShirtSpeeds.sort((a, b) => b - a);
    blueShirtSpeeds.sort((a, b) => b - a);
  }
  let runningSum = 0;
  const len = redShirtSpeeds.length;
  for (let i = 0; i < len; i++) {
    const red = redShirtSpeeds[i];
    const blue = blueShirtSpeeds[i];
    runningSum += Math.max(red, blue);
  }

  return runningSum;
}

console.log(tandemBicycle([3, 6, 7, 2, 1], [5, 5, 3, 9, 2], true)); //32
