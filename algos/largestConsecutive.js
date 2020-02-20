/*
    Takes an array of integers and outputs the start and end of the largest consecutive series of numbers within the array.

    Overall strategy: 
    1) reduce to unique values, then sort them.
    2) if it's already consecutive, return
    3) start at the first index and go as far as possible with consecutive numbers.
    4) if encountering a non-consecutive number, reset the new start index past the current index.
*/

/**
 *
 * @param {number[]} array
 */
function largestConsecutive(array) {
  /* ------------------------------------- */
  // VALIDATION
  if (!array.length) throw new Error("array is empty");
  array.forEach(num => {
    if (!Number.isInteger(num)) throw new Error("array contains non-integers");
  });

  /* ------------------------------------- */
  // ALGORITHM
  // reduce to uniques
  const uniques = [...new Set(array)];

  // sort in ascending order
  const orderedUnique = uniques.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  });

  const len = orderedUnique.length;
  const lastIndex = len - 1;

  // case 1: already a range if: last - first is equal to the length - 1
  if (orderedUnique[lastIndex] - orderedUnique[0] === len - 1) {
    return [orderedUnique[0], orderedUnique[lastIndex]];
  }

  // case 2: everything else
  // initialize
  let startIndex = 0;
  let maxRange = [orderedUnique[startIndex], orderedUnique[startIndex]];

  // loop over starting position
  while (
    startIndex < lastIndex &&
    lastIndex - startIndex > rangeLength(maxRange) // only continue if possible to improve maxRange (best case: remaining series is consecutive)
  ) {
    let innerIndex = startIndex;
    let currentRange = [orderedUnique[startIndex], orderedUnique[startIndex]];
    // loop over consecutive numbers
    while (
      innerIndex < lastIndex &&
      orderedUnique[innerIndex + 1] - orderedUnique[innerIndex] === 1
    ) {
      currentRange[1] = orderedUnique[innerIndex + 1];
      innerIndex++;
    }
    // on next outer loop, start at the index we haven't visited yet
    startIndex = innerIndex + 1;

    // if new range is longer than max, replace max
    if (rangeLength(currentRange) > rangeLength(maxRange))
      maxRange = currentRange;
  }
  return maxRange;
}

function rangeLength(arr) {
  return arr[1] - arr[0];
}

exports.largestConsecutive = largestConsecutive;
