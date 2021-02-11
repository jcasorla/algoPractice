//https://www.algoexpert.io/questions/Class%20Photos
//0(nlog(n)) | 0(1)
function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  let tallest =
    redShirtHeights[redShirtHeights.length - 1] >
    blueShirtHeights[blueShirtHeights.length - 1]
      ? "red"
      : "blue";

  if (tallest === "red") {
    for (let i = redShirtHeights.length - 1; i >= 0; i--) {
      if (redShirtHeights[i] <= blueShirtHeights[i]) return false;
    }
  } else {
    for (let i = redShirtHeights.length - 1; i >= 0; i--) {
      if (blueShirtHeights[i] <= redShirtHeights[i]) return false;
    }
  }
  return true;
}

//revised:
function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  let tallest =
    redShirtHeights[redShirtHeights.length - 1] >
    blueShirtHeights[blueShirtHeights.length - 1]
      ? "red"
      : "blue";

  for (let i = redShirtHeights.length - 1; i >= 0; i--) {
    if (tallest === "red") {
      if (redShirtHeights[i] <= blueShirtHeights[i]) return false;
    } else {
      if (blueShirtHeights[i] <= redShirtHeights[i]) return false;
    }
  }
  return true;
}

// algoexpert solution
function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  let tallest =
    redShirtHeights[redShirtHeights.length - 1] >
    blueShirtHeights[blueShirtHeights.length - 1]
      ? "red"
      : "blue";

  for (let i = 0; i < redShirtHeights.length; i++) {
    if (tallest === "red") {
      if (redShirtHeights[i] <= blueShirtHeights[i]) return false;
    } else {
      if (blueShirtHeights[i] <= redShirtHeights[i]) return false;
    }
  }
  return true;
}
