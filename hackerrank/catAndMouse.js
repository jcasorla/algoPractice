// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
    let a = Math.abs(x-z);
    let b = Math.abs(y-z);

    return a < b ? "Cat A" : (a===b ? "Mouse C" : "Cat B"); 
}