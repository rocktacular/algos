const chai = require("chai");
const program = require("../algos/smallestPositive");

describe("Smallest Positive Integer", function() {
  it("empty array []", function() {
    chai.expect(program.smallestPositive([])).to.deep.equal(1);
  });

  it("all negatives [-2, -6, -3]", function() {
    chai.expect(program.smallestPositive([-2, -6, -3])).to.deep.equal(1);
  });

  it("all 1 [1, 1, 1]", function() {
    chai.expect(program.smallestPositive([1, 1, 1])).to.deep.equal(2);
  });

  it("base case [0, 3, 2]", function() {
    chai.expect(program.smallestPositive([0, 3, 2])).to.deep.equal(1);
  });
  it("base case [0, -1, 4, 1, 2]", function() {
    chai.expect(program.smallestPositive([0, -1, 4, 1, 2])).to.deep.equal(3);
  });

  it("ascending full [0, 1, 2, 3]", function() {
    chai.expect(program.smallestPositive([0, 1, 2, 3])).to.deep.equal(4);
  });

  it("descending full [3, 2, 1, 0]", function() {
    chai.expect(program.smallestPositive([3, 2, 1, 0])).to.deep.equal(4);
  });

  it("ascending missing [0, 1, 3, 4]", function() {
    chai.expect(program.smallestPositive([0, 1, 3, 4])).to.deep.equal(2);
  });

  it("descending missing [4, 3, 1, 0]", function() {
    chai.expect(program.smallestPositive([4, 3, 1, 0])).to.deep.equal(2);
  });
});
