const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let countMines;
  let resultField = [];

  for (let row = 0; row < matrix.length; row++) {
    resultField.push([]);
    for (let col = 0; col < matrix[0].length; col++) {
      resultField[row].push(0);
    }
  }

  for (
    let col = 0; col < matrix[0].length; col++) {
    for (let row = 0; row < matrix.length; row++) {
      countMines = 0;
      if (row == 0 && col == 0) {
          if (matrix[row][col + 1]) ++countMines;
          if (matrix[row + 1][col]) ++countMines;
          if (matrix[row + 1][col + 1]) ++countMines; 
        } else if (row == matrix.length - 1 && col == 0) {
          if (matrix[row - 1][col]) ++countMines;
          if (matrix[row - 1][col + 1]) ++countMines;
          if (matrix[row][col + 1]) ++countMines; 
        } else if (row == 0 && col == matrix[0].length - 1) {
          if (matrix[row][col - 1]) ++countMines;
          if (matrix[row + 1][col - 1]) ++countMines;
          if (matrix[row + 1][col]) ++countMines; 
        } else if (row == matrix.length - 1 && col == matrix[0].length - 1) {
          if (matrix[row - 1][col - 1]) ++countMines;
          if (matrix[row - 1][col]) ++countMines;
          if (matrix[row][col - 1]) ++countMines; 
        }

        else if (row == 0 && col > 0) {
          if (matrix[row][col - 1]) ++countMines;
          if (matrix[row + 1][col - 1]) ++countMines;
          if (matrix[row][col + 1]) ++countMines;
          if (matrix[row + 1][col]) ++countMines;
          if (matrix[row + 1][col + 1]) ++countMines; 
        } else if (row > 0 && col == 0) {
          if (matrix[row - 1][col]) ++countMines;
          if (matrix[row - 1][col + 1]) ++countMines;
          if (matrix[row][col + 1]) ++countMines;
          if (matrix[row + 1][col + 1]) ++countMines;
          if (matrix[row + 1][col]) ++countMines;
        } else if (row > 0 && col == matrix[0].length - 1) {
          if (matrix[row - 1][col]) ++countMines;
          if (matrix[row - 1][col - 1]) ++countMines;
          if (matrix[row][col - 1]) ++countMines;
          if (matrix[row + 1][col - 1]) ++countMines;
          if (matrix[row + 1][col]) ++countMines; 
        } else if (row == matrix.length - 1 && col > 0) {
          if (matrix[row][col + 1]) ++countMines;
          if (matrix[row - 1][col + 1]) ++countMines;
          if (matrix[row - 1][col - 1]) ++countMines;
          if (matrix[row - 1][col]) ++countMines;
          if (matrix[row][col - 1]) ++countMines; 
        } 
        
        else if (row > 0 && col > 0) {
          if (matrix[row - 1][col - 1]) ++countMines;
          if (matrix[row - 1][col]) ++countMines;
          if (matrix[row - 1][col + 1]) ++countMines;
          if (matrix[row][col - 1]) ++countMines;
          if (matrix[row][col + 1]) ++countMines;
          if (matrix[row + 1][col - 1]) ++countMines;
          if (matrix[row + 1][col]) ++countMines;
          if (matrix[row + 1][col + 1]) ++countMines;
      } 

      resultField[row][col] = countMines;
    }
  }
  return resultField;
}

module.exports = {
  minesweeper
};
