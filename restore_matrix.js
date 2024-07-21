// You are given two arrays rowSum and colSum of non-negative integers where rowSum[i] is the sum of the elements in the ith row and colSum[j] is the sum of the elements of the jth column of a 2D matrix. In other words, you do not know the elements of the matrix, but you do know the sums of each row and column.

// Find any matrix of non-negative integers of size rowSum.length x colSum.length that satisfies the rowSum and colSum requirements.

// Return a 2D array representing any matrix that fulfills the requirements. It's guaranteed that at least one matrix that fulfills the requirements exists.

var restoreMatrix = function(rowSum, colSum) {
    let numRows = rowSum.length;
    let numCols = colSum.length;
    let grid = Array.from({ length: numRows }, () => Array(numCols).fill(0));

    let i = 0;
    let j = 0;

    while (i < numRows && j < numCols) {
        let min = Math.min(rowSum[i], colSum[j]);
        grid[i][j] = min;
        rowSum[i] -= min;
        colSum[j] -= min;

        if (rowSum[i] === 0) i++;
        if (colSum[j] === 0) j++;
    }

    return grid;
};

