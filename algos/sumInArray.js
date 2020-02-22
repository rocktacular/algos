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
  for (let i = 0; i < nums.length; i++) {
    if (seenHash[target - nums[i]]) {
      return true;
    }
    seenHash[nums[i]] = true;
  }
  return false;
}

exports.sumInArray = sumInArray;
