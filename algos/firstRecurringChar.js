/*
  Takes a string and returns the first character that is recurring. If none, then return 0 or empty string.
*/

/**
 * @param {string} str
 */
function firstRecurringChar(str) {
  let result = "";
  let counts = {};
  // use for loop instead of str.split("").forEach() to allow breaking
  for (let i = 0; i < str.length; i++) {
    if (counts[str[i]]) {
      result = str[i];
      break;
    }
    counts[str[i]] = true;
  }
  return result;
}

exports.firstRecurringChar = firstRecurringChar;
