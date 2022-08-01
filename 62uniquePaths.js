var uniquePaths = function(m, n) {
    let grid = new Array(m).fill(0).map(() => new Array(n));
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (row == 0 || col == 0) grid[row][col] = 1;
            else {
                grid[row][col] = grid[row-1][col] + grid[row][col-1];
            }
        }
    }
    return grid[m-1][n-1];
    // Time Complexity: O(m*n)
    // Space Complexity: O(m*n)
}

var m = 3, n = 7;
console.log(uniquePaths(m, n));