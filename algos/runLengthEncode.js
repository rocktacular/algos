/**
 * Implement run-length encoding and decoding for strings.
 * "AAAABBBCCDAA" <=> "4A3B2C1D2A"
 */

function encode(str) {
  // validate
  if (!str.length) throw new TypeError("empty string");
  const regex = new RegExp(/[a-zA-Z]/);

  let output = "";
  let currentCount = 0;
  let lastChar = str[0];
  str.split("").forEach(char => {
    if (!regex.test(char)) {
      throw new TypeError("String must contain only letters");
    }

    if (char === lastChar) {
      currentCount++;
    } else {
      output += currentCount + lastChar;
      currentCount = 1;
    }
    lastChar = char;
  });

  output += currentCount + lastChar;
  return output;
}

function decode(str) {
  // validate
  if (!str.length) throw new TypeError("empty string");

  let output = "";
  const regexLetters = new RegExp(/[a-zA-Z]/);
  const regexNumbers = new RegExp(/[\d]/);
  for (let i = 0; i < str.length; i += 2) {
    // error if even index and not a number
    if (!(i % 2) && !regexNumbers.test(str[i])) {
      throw new TypeError("even indices must be numbers");
    }
    // error if next is odd index and not a letter
    if ((i + 1) % 2 && !regexLetters.test(str[i + 1])) {
      throw new TypeError("odd indices must be letters");
    }
    // append
    for (let j = 1; j <= str[i]; j++) {
      output += str[i + 1];
    }
  }
  return output;
}

exports.runLength = { encode, decode };
