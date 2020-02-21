/* 
    Takes an array of integers and integer target and returns whether or not 2 numbers in array sum to the target. 
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
  nums.sort((a, b) => a > b);

  let found = false;
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  // no solution (target is smaller than smallest 2 elements)
  if (nums[0] + nums[1] > target) return found;

  // no solution (target is bigger than largest 2 elements)
  if (nums[nums.length - 1] + nums[nums.length - 2] < target) return found;

  while (!found && leftIndex < rightIndex) {
    if (nums[leftIndex] + nums[rightIndex] === target) {
      // happy path
      found = true;
    } else if (nums[leftIndex] + nums[rightIndex] > target) {
      // sum is too big. move right down.
      rightIndex--;
    } else {
      // sum is too small, move left up.
      leftIndex++;
    }
  }
  return found;
}

exports.sumInArray = sumInArray;
