/*
 Determine if a 2D pot can drain (there is a path from the top row to the bottom row). Voids are 0, while rocks are 1. Water cannot move diagonally.
 */

/**
 * @param {*} pot
 * @returns {boolean}
 */
const canDrain = (pot) => {
  /* ----------------------- */
  // VALIDATION
  if (!Array.isArray(pot) || !pot.length || !pot[0].length)
    throw new TypeError("not a 2D array");

  // initialize visited array
  const visited = [...Array(pot.length)].map(() =>
    Array(pot[0].length).fill(false)
  );
  let canDrain = false;

  // traversal function
  const startTraversing = (row, col) => {
    const nodesToExplore = [[row, col]]; // array of [i, j]
    while (nodesToExplore.length) {
      const currentNode = nodesToExplore.pop(); // pull top node off heap
      const r = currentNode[0]; // get r, c of node
      const c = currentNode[1];

      if (!visited[r][c]) {
        visited[r][c] = true;
        if (pot[r][c] === 0) {
          const unvisitedNodes = getNeighbors(r, c);
          nodesToExplore.push(...unvisitedNodes);
          // pot can drain if last row has a 0
          if (r === pot.length - 1) {
            canDrain = true;
            continue;
          }
        }
      }
    }
  };

  // get neighbors in bounds
  const getNeighbors = (r, c) => {
    const unvisitedNeighbors = [];
    // add node above
    if (r > 0 && !visited[r - 1][c]) {
      unvisitedNeighbors.push([r - 1, c]);
    }
    // add node below
    if (r < pot.length - 1 && !visited[r + 1][c]) {
      unvisitedNeighbors.push([r + 1, c]);
    }
    // add node to left
    if (c > 0 && !visited[r][c - 1]) {
      unvisitedNeighbors.push([r, c - 1]);
    }
    // add node to right
    if (c < pot[r].length - 1 && !visited[r][c + 1]) {
      unvisitedNeighbors.push([r, c + 1]);
    }
    return unvisitedNeighbors;
  };

  // start traversing on top row
  for (let col = 0; col < pot[0].length; col++) {
    if (!visited[0][col]) {
      startTraversing(0, col);
    }
  }

  return canDrain;
};

exports.canDrain = canDrain;
