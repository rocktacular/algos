const chai = require("chai");
const program = require("../algos/binarySearchTree");

describe("Binary Search Tree Class", function() {
  it("initializes with no value", function() {
    const newBST = new program.BinarySearchTree();
    chai.expect(newBST.count).to.deep.equal(0);
  });

  it("initializes with a value", function() {
    const newBST = new program.BinarySearchTree(11);
    chai.expect(newBST.count).to.deep.equal(1);
  });

  it("basic tree with node and 2 leaves", function() {
    const newBST = new program.BinarySearchTree(11);
    newBST.insert(13);
    newBST.insert(7);
    chai.expect(newBST.count).to.deep.equal(3);
  });

  it("rejects duplicates", function() {
    const newBST = new program.BinarySearchTree(11);
    newBST.insert(13);
    newBST.insert(7);
    newBST.insert(7);
    newBST.insert(11);
    chai.expect(newBST.count).to.deep.equal(3);
  });
});
