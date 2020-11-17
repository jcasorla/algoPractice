function arrayOfProducts(array) {
  const products = new Array(array.length).fill(1);
  const leftProducts = new Array(array.length).fill(1);
  const rightProduct = new Array(array.length).fill(1);
  const len = array.length;

  let leftRunningProduct = 1;

  for (let i = 0; i < len; i++) {
    leftProducts[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }

  let rightRunningProduct = 1;

  for (let i = len - 1; i >= 0; i--) {
    rightProduct[i] = rightRunningProduct;
    rightRunningProduct *= array[i];
  }

  for (let i = 0; i < len; i++) {
    products[i] = leftProducts[i] * rightProduct[i];
  }

  return products;
}

function arrayOfProducts(array) {
  const products = new Array(array.length).fill(1);
  const len = array.length;

  let leftRunningProduct = 1;

  for (let i = 0; i < len; i++) {
    products[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }

  let rightRunningProduct = 1;

  for (let i = len - 1; i >= 0; i--) {
    products[i] *= rightRunningProduct;
    rightRunningProduct *= array[i];
  }

  return products;
}
