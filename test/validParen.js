const chai = require("chai");
const program = require("../algos/validParen");

describe("Classrooms", function() {
  it("base case () TRUE", function() {
    chai.expect(program.validParen("()")).to.deep.equal(true);
  });

  it("in order ()[]{} TRUE", function() {
    chai.expect(program.validParen("()[]{}")).to.deep.equal(true);
  });

  it("out of order ([)] FALSE", function() {
    chai.expect(program.validParen("([)]")).to.deep.equal(false);
  });

  it("symmetrical {[]} TRUE", function() {
    chai.expect(program.validParen("{[]}")).to.deep.equal(true);
  });

  it("symmetrical [(){}()] TRUE", function() {
    chai.expect(program.validParen("[(){}()]")).to.deep.equal(true);
  });

  it("unbalanced open (() FALSE", function() {
    chai.expect(program.validParen("(()")).to.deep.equal(false);
  });

  it("unbalanced closed ()) FALSE", function() {
    chai.expect(program.validParen("(()")).to.deep.equal(false);
  });

  it("unbalanced closed and open (] FALSE", function() {
    chai.expect(program.validParen("(]")).to.deep.equal(false);
  });
});
