const chai = require("chai");
const program = require("../algos/sumInArray");

describe("Sum In Array", function() {
  it("error for empty array ([], 3)", function() {
    chai.expect(() => program.sumInArray([], 3)).to.throw("empty");
  });

  it("target too small ([1, 4, 5, 9], 3)", function() {
    chai.expect(program.sumInArray([1, 4, 5, 9], 3)).to.be.false;
  });

  it("target too big ([1, 2, 5, 9], 100)", function() {
    chai.expect(program.sumInArray([1, 2, 5, 9], 100)).to.be.false;
  });

  it("contains 0 ([0, 1, 2, 5, 9], 5)", function() {
    chai.expect(program.sumInArray([0, 1, 2, 5, 9], 5)).to.be.true;
  });

  it("no solution ([1, 2, 4, 5, 9, 15], 8)", function() {
    chai.expect(program.sumInArray([1, 2, 4, 5, 9, 15], 8)).to.be.false;
  });

  it("first 2 ([1, 2, 5, 9, 15], 3)", function() {
    chai.expect(program.sumInArray([1, 2, 5, 9, 15], 3)).to.be.true;
  });

  it("last 2 ([1, 4, 5, 6, 15], 21)", function() {
    chai.expect(program.sumInArray([1, 4, 5, 6, 15], 21)).to.be.true;
  });

  it("standard case ([1, 2, 5, 9], 7)", function() {
    chai.expect(program.sumInArray([1, 2, 5, 9], 7)).to.be.true;
  });

  it("unsorted case ([9, 2, 1, 5], 7)", function() {
    chai.expect(program.sumInArray([1, 2, 5, 9], 7)).to.be.true;
  });

  it("standard case negatives ([-1, 2, 4, 5, 6, 11, 15], 10)", function() {
    chai.expect(program.sumInArray([-1, 2, 4, 5, 6, 11, 15], 10)).to.be.true;
  });
});
