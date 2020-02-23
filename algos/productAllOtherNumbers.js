/* 
    Takes an array of integers of length n and returns new array of length n 
    where each item in new array is product of all OTHER numbers in original array.

    Solve WITHOUT divison. (easy with division: mutiply whole array and then divide by iteratee)

    Naive solution is O(n^2) as iterates over array for each item in array
*/

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function productAllOtherNumbers(nums) {
  /* ------------------------ */
  // VALIDATION
  if (nums.length < 2) throw new Error("array must have more than 1 element");

  // ALGO (O(n))
  const result = [];

  const leftOf = [];
  let leftMult = 1;
  const rightOf = [];
  let rightMult = 1;

  // construct array where value at index i is the product to the LEFT of i in original array
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) leftMult = 1;
    else leftMult *= nums[i - 1];
    leftOf.push(leftMult);
  }

  // construct array where value at index i is the product to the RIGHT of i in original array
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) rightMult = 1;
    else rightMult *= nums[i + 1];
    rightOf[i] = rightMult; // assign to array in reverse order instead of .push() and needing to reverse() or subtract from array.length
  }

  // assemble final array by multiplying the 2 arrays at index i
  for (let i = 0; i < nums.length; i++) {
    result.push(leftOf[i] * rightOf[i]);
  }

  return result;
}

exports.productAllOtherNumbers = productAllOtherNumbers;
