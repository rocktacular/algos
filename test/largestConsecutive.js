const chai = require("chai");
const program = require("../algos/largestConsecutive");

describe("Largest Consecutive", function() {
  it("errors if empty array", function() {
    const testInput = [];
    chai.expect(() => program.largestConsecutive(testInput)).to.throw("empty");
  });

  it("errors if array of non-integers", function() {
    const testInput = ["abc", "xyz", "hij"];
    chai
      .expect(() => program.largestConsecutive(testInput))
      .to.throw("non-integers");
  });

  it("perfect case (4 items)", function() {
    const testInput = [3, 1, 2, 4];
    const expected = [1, 4];
    chai.expect(program.largestConsecutive(testInput)).to.deep.equal(expected);
  });

  it("standard case (4 items)", function() {
    const testInput = [3, 0, 2, 5];
    const expected = [2, 3];
    chai.expect(program.largestConsecutive(testInput)).to.deep.equal(expected);
  });

  it("last 2 items are longest (5 items)", function() {
    const testInput = [4, 2, 7, 0, 8];
    const expected = [7, 8];
    chai.expect(program.largestConsecutive(testInput)).to.deep.equal(expected);
  });

  it("standard case (9 items)", function() {
    const testInput = [8, 4, 2, 10, 3, 6, 7, 9, 1];
    const expected = [6, 10];
    chai.expect(program.largestConsecutive(testInput)).to.deep.equal(expected);
  });

  it("standard case (23 items)", function() {
    const testInput = [
      19,
      -1,
      18,
      17,
      2,
      10,
      3,
      12,
      5,
      16,
      4,
      11,
      8,
      7,
      6,
      15,
      12,
      12,
      2,
      1,
      6,
      13,
      14
    ];
    const expected = [10, 19];
    chai.expect(program.largestConsecutive(testInput)).to.deep.equal(expected);
  });
});
