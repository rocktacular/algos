const chai = require("chai");
const program = require("../algos/drain");

describe("Pot Can Drain", function () {
  it("errors if arg is not an array", function () {
    chai.expect(() => program.canDrain("abc")).to.throw();
  });

  it("errors if arg is an empty array", function () {
    chai.expect(() => program.canDrain([])).to.throw();
  });

  it("errors if arg is not a 2D array", function () {
    chai.expect(() => program.canDrain([1])).to.throw();
  });

  it("1x1 no drain", function () {
    const testInput = [[1]];
    chai.expect(program.canDrain(testInput)).to.deep.equal(false);
  });

  it("1x1 drain", function () {
    const testInput = [[0]];
    chai.expect(program.canDrain(testInput)).to.deep.equal(true);
  });

  it("4x4 can drain", function () {
    const testInput = [
      [1, 0, 1, 1],
      [1, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 1, 0, 1],
    ];
    chai.expect(program.canDrain(testInput)).to.deep.equal(true);
  });

  it("4x4 no drain", function () {
    const testInput = [
      [1, 0, 1, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 1, 1, 0],
    ];
    chai.expect(program.canDrain(testInput)).to.deep.equal(false);
  });

  it("5x5 can drain", function () {
    const testInput = [
      [0, 1, 1, 1, 1],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 1, 1, 0],
      [0, 1, 0, 1, 0],
    ];

    chai.expect(program.canDrain(testInput)).to.deep.equal(true);
  });

  it("5x5 all rocks", function () {
    const testInput = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
    chai.expect(program.canDrain(testInput)).to.deep.equal(false);
  });
});
