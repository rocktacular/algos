const chai = require("chai");
const program = require("../algos/riverSizes");

describe("River Sizes", function() {
  it("errors if arg is not an array", function() {
    chai.expect(() => program.riverSizes("abc")).to.throw();
  });

  it("errors if arg is an empty array", function() {
    chai.expect(() => program.riverSizes([])).to.throw();
  });

  it("errors if arg is not a 2D array", function() {
    chai.expect(() => program.riverSizes([1])).to.throw();
  });

  it("1x1 land", function() {
    const testInput = [[0]];
    const expected = [];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it("1x1 river", function() {
    const testInput = [[1]];
    const expected = [1];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it("1x10", function() {
    const testInput = [[0, 1, 1, 1, 0, 0, 0, 1, 1, 0]];
    const expected = [2, 3];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it("4x4", function() {
    const testInput = [
      [1, 0, 1, 1],
      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 1, 0, 1]
    ];
    const expected = [1, 3, 5];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it("4x4 donut", function() {
    const testInput = [
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 1, 1, 1]
    ];
    const expected = [12];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it("5x5", function() {
    const testInput = [
      [0, 1, 1, 1, 1],
      [0, 0, 0, 1, 0],
      [0, 1, 1, 0, 0],
      [1, 1, 0, 1, 0],
      [0, 0, 1, 1, 1]
    ];
    const expected = [4, 4, 5];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });

  it("5x5 all river", function() {
    const testInput = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ];
    const expected = [25];
    chai
      .expect(program.riverSizes(testInput).sort((a, b) => a - b))
      .to.deep.equal(expected);
  });
});
