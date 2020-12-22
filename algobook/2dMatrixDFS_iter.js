//https://algorithms.tutorialhorizon.com/depth-first-search-dfs-in-2d-matrix-2d-array-iterative-solution/
const grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function DFS(grid) {
  const r = grid.length;
  const c = grid[0].length;
  if (r === 0) return;
  const visited = new Array(r);

  for (let i = 0; i < visited.length; i++) {
    const col = new Array(c).fill(false);
    visited[i] = col;
  }

  const stack = [];
  stack.push(0 + "," + 0);

  while (stack.length > 0) {
    const x = stack.pop();
    console.log(x);
    const row = parseInt(x.split(",")[0]);
    const col = parseInt(x.split(",")[1]);
    if (row < 0 || col < 0 || row >= r || col >= c || visited[row][col])
      continue;
    console.log(x);
    visited[row][col] = true;
    console.log(grid[row][col] + " ");
    stack.push(row + "," + (col - 1)); //go left
    stack.push(row + "," + (col + 1)); //go right
    stack.push(row - 1 + "," + col); //go up
    stack.push(row + 1 + "," + col); //go down
  }
}

DFS(grid);
