/*
  Takes a string and returns the first character that is recurring. If none, then return 0 or empty string.
*/

/**
 * @param {string} str
 */
function firstRecurringChar(str) {
  let result = "";
  let counts = new Set();
  // use for loop instead of str.split("").forEach() to allow breaking
  for (let i = 0; i < str.length; i++) {
    if (counts.has(str[i])) {
      result = str[i];
      break;
    }
    counts.add(str[i]);
  }
  return result;
}

exports.firstRecurringChar = firstRecurringChar;
