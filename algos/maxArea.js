/*
    Takes an array of integers and calculates the largest area of width (along the array) * height (values in the array), as if it were filled with water. 
*/

/**
 *
 * @param {number[]} array
 * @returns {number}
 */
function maxArea(array) {
  if (array.length < 2) throw new Error("array must have at least 2 items");
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let maxArea = 0;
  while (leftIndex < rightIndex) {
    const area =
      (rightIndex - leftIndex) * Math.min(array[leftIndex], array[rightIndex]);
    if (area > maxArea) {
      maxArea = area;
    }
    if (array[leftIndex] < array[rightIndex]) leftIndex++;
    else rightIndex--;
  }
  return maxArea;
}

exports.maxArea = maxArea;
