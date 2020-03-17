const chai = require("chai");
const program = require("../algos/linkedList");

describe("Linked List Class", function() {
  it("initializes with no value", function() {
    const newList = new program.LinkedList();
    chai.expect(newList.displayAsArray()).to.deep.equal([]);
  });

  it("initializes with a value", function() {
    const newList = new program.LinkedList("first");
    chai.expect(newList.displayAsArray()).to.deep.equal(["first"]);
  });

  it("add a value to head", function() {
    const newList = new program.LinkedList("first");
    newList.addToHead("second");
    chai.expect(newList.displayAsArray()).to.deep.equal(["second", "first"]);
  });

  it("remove a value from head", function() {
    const newList = new program.LinkedList("first");
    newList.addToHead("second");
    newList.removeFromHead();
    chai.expect(newList.displayAsArray()).to.deep.equal(["first"]);
  });

  it("remove from head returns a value", function() {
    const newList = new program.LinkedList("first");
    newList.addToHead("second");
    chai.expect(newList.removeFromHead()).to.deep.equal("second");
  });

  it("remove item in the list (found)", function() {
    const newList = new program.LinkedList("first");
    newList.addToHead("second");
    newList.addToHead("third");
    chai
      .expect(newList.remove("second").displayAsArray())
      .to.deep.equal(["third", "first"]);
  });

  it("remove item in the list (not found)", function() {
    const newList = new program.LinkedList("first");
    newList.addToHead("second");
    newList.addToHead("third");
    chai
      .expect(newList.remove("aaaa").displayAsArray())
      .to.deep.equal(["third", "second", "first"]);
  });
});
