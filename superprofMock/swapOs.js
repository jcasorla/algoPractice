/*
Dado un arreglo de 0s y 1s. Definimos un flip como la transformación de 0→1 o de 1→0.
Calcular la mínima cantidad de flips para poner todos los 1 del lado izquierdo y todos los 0 de lado derecho.

[0,1,0,1,1]
[1,1,0,0,1]
[1,1,1,0,0]
**/
function swapOs(arr) {
  let len = arr.length;
  let p1 = 0;
  let p2 = len - 1;

  while (p1 <= p2) {
    if (arr[p1] === 0 && arr[p2] === 1) {
      swap(arr, p1, p2);
      p1++;
      p2--;
    } else if (arr[p1] === 0 && arr[p2] === 0) {
      p2--;
    } else if (arr[p1] === 1 && arr[p2] === 1) {
      p1++;
    }
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
