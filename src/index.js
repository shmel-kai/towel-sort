
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix){
    return [];
  }

  return matrix.reduce(function(acc, cur, index){
    if (index %2 !== 0){
        matrix[index].reverse();
    }
    let result = acc.concat(matrix[index]);
    return result;
  }, []);
}
