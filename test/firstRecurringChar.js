const chai = require("chai");
const program = require("../algos/firstRecurringChar");

describe("First Recurring Char", function() {
  it("returns empty string if none repeating", function() {
    chai.expect(program.firstRecurringChar("abc")).to.deep.equal("");
  });

  it("simple case (abca)", function() {
    chai.expect(program.firstRecurringChar("abca")).to.deep.equal("a");
  });

  it("multiple recurring case (abcabc)", function() {
    chai.expect(program.firstRecurringChar("abcabc")).to.deep.equal("a");
  });

  it("standard case (abcdeffedcba)", function() {
    chai.expect(program.firstRecurringChar("abcdeffff")).to.deep.equal("f");
  });
});
