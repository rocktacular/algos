/* 
    Takes an argument n and returns the roman numeral representation
*/

/**
 * @param {number} n
 * @returns {string}
 */
function romanNumerals(n) {
  // VALIDATION
  if (n < 1 || n > 3999) throw new Error("number must be between 1 and 3999");
  if (!Number.isInteger(n)) throw new Error("number must be an integer");

  const conversion = [
    { decimal: 1000, roman: "M" },
    { decimal: 500, roman: "D" },
    { decimal: 100, roman: "C" },
    { decimal: 50, roman: "L" },
    { decimal: 10, roman: "X" },
    { decimal: 5, roman: "V" },
    { decimal: 1, roman: "I" }
  ];

  let leftover = n;
  let str = "";
  for (let i = 0; i < conversion.length; i++) {
    let quotient = Math.floor(leftover / conversion[i].decimal);
    let forward1Quotient;
    let forward2Quotient;
    // look forward 1 smaller unit
    if (i < conversion.length - 1) {
      forward1Quotient = Math.floor(leftover / conversion[i + 1].decimal);
    }
    // look forward 2 smaller units
    if (i < conversion.length - 2) {
      forward2Quotient = Math.floor(leftover / conversion[i + 2].decimal);
    }

    // special cases when quotient is 4 or 9
    if (forward2Quotient === 9 && !(i % 2)) {
      // 2-smaller unit less than current unit (e.g. IX or XC or CM)
      // only for current unit = 10, 100, 1000
      str += conversion[i + 2].roman + conversion[i].roman;
      leftover = leftover - forward2Quotient * conversion[i + 2].decimal;
    } else if (forward1Quotient === 9 && i % 2) {
      // 1-smaller unit less than 1-larger unit (same logic as above)
      str += conversion[i + 1].roman + conversion[i - 1].roman; // not using current unit
      leftover = leftover - forward1Quotient * conversion[i + 1].decimal;
    } else if (forward1Quotient === 4 && i % 2) {
      // 1-smaller unit less than current unit (e.g. IV or XL or CD)
      // only for current unit = 5, 50, 500
      str += conversion[i + 1].roman + conversion[i].roman;
      leftover = leftover - forward1Quotient * conversion[i + 1].decimal;
    } else {
      // X current units
      for (let j = 0; j < quotient; j++) str += conversion[i].roman;
      leftover = leftover - quotient * conversion[i].decimal;
    }
  }
  return str;
}

exports.romanNumerals = romanNumerals;
