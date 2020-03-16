/*
  Takes in a string of parentheses, brackets, and braces and tells you if it is valid (closed in appropriate order and balanced).

  O(n) using a heap for knowing what should be closed next.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var validParen = function(s) {
  let parenCount = 0;
  let bracketCount = 0;
  let braceCount = 0;

  let valid = true;
  let mustClose = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        parenCount++;
        mustClose.push("(");
        break;
      case ")":
        parenCount--;
        if (mustClose.pop() !== "(") valid = false; // closing out of order or too many closes
        break;
      case "[":
        bracketCount++;
        mustClose.push("[");
        break;
      case "]":
        bracketCount--;
        if (mustClose.pop() !== "[") valid = false; // closing out of order or too many closes
        break;
      case "{":
        braceCount++;
        mustClose.push("{");
        break;
      case "}":
        braceCount--;
        if (mustClose.pop() !== "{") valid = false; // closing out of order or too many closes
        break;
    }
    if (!valid) {
      break;
    }
  }
  // too many opens
  if (parenCount !== 0 || bracketCount !== 0 || braceCount !== 0) {
    valid = false;
  }

  return valid;
};

exports.validParen = validParen;
