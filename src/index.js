module.exports = function solveSudoku(matrix) {
  function sug(row,col) {
    let res = [];
    let field = {
      row: Math.floor(row/3)*3,
      col: Math.floor(col/3)*3,
    };

    for (let i = 0; i < 9; i++) {
      res.push([matrix[row][i], matrix[i][col], matrix[field.row + i % 3][field.col + Math.floor(i / 3)]])
    }
    return res;
  }

  for (let row = 0; row < 9; row++) {
  	for (let col = 0; col < 9; col++) {
      if (matrix[row][col] === 0) {
        let sugns = sug(row, col);
        for (var sugn of sugns) {
          matrix[row][col] = sugn;
          solveSudoku(matrix);
        }  
      }
    }
  }
  
  return matrix;
}