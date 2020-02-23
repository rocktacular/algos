const chai = require("chai");
const program = require("../algos/productAllOtherNumbers");

describe("Product All Other Numbers", function() {
  it("error if no numbers in array", function() {
    chai.expect(() => program.productAllOtherNumbers([])).to.throw("more");
  });

  it("error if 1 number in array", function() {
    chai.expect(() => program.productAllOtherNumbers([9])).to.throw("more");
  });

  it("standard case [3, 9]", function() {
    chai.expect(program.productAllOtherNumbers([3, 9])).to.deep.equal([9, 3]);
  });

  it("standard case [3, 2, 1]", function() {
    chai
      .expect(program.productAllOtherNumbers([3, 2, 1]))
      .to.deep.equal([2, 3, 6]);
  });

  it("standard case [1, 2, 3, 4, 5]", function() {
    chai
      .expect(program.productAllOtherNumbers([1, 2, 3, 4, 5]))
      .to.deep.equal([120, 60, 40, 30, 24]);
  });

  it("with zero [1, 2, 0, 4, 5]", function() {
    chai
      .expect(program.productAllOtherNumbers([1, 2, 0, 4, 5]))
      .to.deep.equal([0, 0, 40, 0, 0]);
  });
});
