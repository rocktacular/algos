const chai = require("chai");
const program = require("../algos/maxArea");

describe("Max Area of Array", function() {
  it("errors if array is < 2", function() {
    chai.expect(() => program.maxArea([1])).to.throw("at least");
  });

  it("standard case [4, 6]", function() {
    chai.expect(program.maxArea([4, 6])).to.deep.equal(4);
  });

  it("standard case [1, 4, 3, 3]", function() {
    chai.expect(program.maxArea([1, 4, 3, 3])).to.deep.equal(6);
  });

  it("standard case [1,8,6,2,5,4,8,3,7]", function() {
    chai.expect(program.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).to.deep.equal(49);
  });
});
