/* 
    Takes an array of integers and integer target and returns whether or not 2 numbers in array sum to the target. 

    Previous implementation was without hash map but required a sorted array. Still O(n).
    Wanted to try the hash map solution. Seems cleaner and does not require array to be sorted.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {boolean}
 */
function sumInArray(nums, target) {
  /* ------------------------ */
  // VALIDATION
  if (!nums.length) throw new Error("empty array");

  /* ------------------------ */
  // ALGO
  const seenHash = {}; // hash map to store
  let solution = false;
  nums.forEach(num => {
    if (seenHash[target - num]) {
      solution = true;
    }
    seenHash[num] = true;
  });
  return solution;
}

exports.sumInArray = sumInArray;
