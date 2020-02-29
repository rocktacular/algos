/*
    Takes an array of integers and calculates the smallest positive integer missing. If none are missing, return max + 1;

    Trying to do in linear time. 
    Strategy is to make a "seen" object, then count up to the max number in the array and find the first hole.
*/

/**
 *
 * @param {number[]} array
 * @returns {number}
 */
function smallestPositive(array) {
  const seen = {};
  let maxNum = 0;

  // put numbers into a hash for checking if seen later
  array.forEach(num => {
    seen[num] = true;
    maxNum = Math.max(num, maxNum); // store max to know how high to loop
  });

  let lowestMissing = 1;
  let hasHoles = false; // in case there are no holes, we need to return the next highest positive integer

  // if all negative or 0, just return 1 and skip the analysis loop
  if (maxNum < 1) return 1;

  // loop and find the first hole
  for (let i = 1; i <= maxNum; i++) {
    if (!seen[i]) {
      lowestMissing = i;
      hasHoles = true;
      break;
    }
  }
  return hasHoles ? lowestMissing : maxNum + 1;
}

exports.smallestPositive = smallestPositive;
