//https://algorithms.tutorialhorizon.com/depth-first-search-dfs-in-2d-matrix-2d-array-recursive-solution/
const grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function DFS(grid) {
  const r = grid.length;
  const c = grid[0].length;
  const res = [];
  if (r === 0) return;
  const visited = new Array(r);

  for (let i = 0; i < visited.length; i++) {
    const col = new Array(c).fill(false);
    visited[i] = col;
  }
  recurse(grid, 0, 0, visited);

  function recurse(grid, row, col, visited) {
    const r = grid.length;
    const c = grid[0].length;

    if (row < 0 || col < 0 || row >= r || col >= c || visited[row][col]) return;

    //mark the cell visited
    visited[row][col] = true;
    //  console.log(grid[row][col] + " ");
    res.push(grid[row][col]);
    recurse(grid, row + 1, col, visited); // go right
    recurse(grid, row - 1, col, visited); //go left
    recurse(grid, row, col + 1, visited); //go down
    recurse(grid, row, col - 1, visited); // go up
  }

  return res;
}

console.log(DFS(grid));
