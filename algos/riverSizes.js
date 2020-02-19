/* 
    Takes an argument of a 2D matrix of 0 or 1. 0 = land, 1 = river.
    Returns the lengths of all contiguous rivers in the array.
    "contiguous" means adjacent vertically or horizontally, but not diagonally.

    Overall strategy is to raster through the array, then if finding a river, begin "following" it.
    We keep track of what has been visited (a separate array of equal size) and skip any visited cell.
*/

/**
 *
 * @param {number[][]} matrix
 */
function riverSizes(matrix) {
  /* ----------------------- */
  // VALIDATION
  if (!Array.isArray(matrix) || !matrix.length || !matrix[0].length)
    throw new TypeError("not a 2D array");

  /* ----------------------- */
  // ALGO
  const sizes = [];
  // initialize visited
  const visited = [...Array(matrix.length)].map(() =>
    Array(matrix[0].length).fill(false)
  );

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // if already visited, skip calculations
      if (visited[i][j]) continue;
      startTraversing(i, j, matrix, visited, sizes);
    }
  }
  return sizes;
}

function startTraversing(i, j, matrix, visited, sizes) {
  let newSize = 0;
  const nodesToExplore = [[i, j]];
  while (nodesToExplore.length) {
    const currentNode = nodesToExplore.pop(); // pulls end coords off array
    const x = currentNode[0];
    const y = currentNode[1];
    // if already visited, dont perform calcs
    if (visited[x][y]) continue;

    visited[x][y] = true; // mark as visited

    // if land, stop following this direction
    if (matrix[x][y] === 0) continue;

    // if river, increment size and add more nodes to inspect
    newSize += 1;
    const unvisitedNeighbors = getUnvisitedNeighbors(x, y, matrix, visited);
    nodesToExplore.push(...unvisitedNeighbors);
  }
  if (newSize > 0) sizes.push(newSize);
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
  const unvisitedNeighbors = [];
  // add node above
  if (i > 0 && !visited[i - 1][j]) {
    unvisitedNeighbors.push([i - 1, j]);
  }
  // add node below
  if (i < matrix.length - 1 && !visited[i + 1][j]) {
    unvisitedNeighbors.push([i + 1, j]);
  }
  // add node to left
  if (j > 0 && !visited[i][j - 1]) {
    unvisitedNeighbors.push([i, j - 1]);
  }
  // add node to right
  if (j < matrix[i].length - 1 && !visited[i][j + 1]) {
    unvisitedNeighbors.push([i, j + 1]);
  }
  return unvisitedNeighbors;
}

exports.riverSizes = riverSizes;
