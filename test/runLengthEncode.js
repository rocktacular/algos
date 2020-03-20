const chai = require("chai");
const program = require("../algos/runLengthEncode");

describe("Classrooms", function() {
  it("errors if empty string (encode)", function() {
    const source = "";
    chai.expect(() => program.runLength.encode(source)).to.throw("empty");
  });

  it("errors if string contains non-letters (encode)", function() {
    const source = "ABB9C";
    chai.expect(() => program.runLength.encode(source)).to.throw("letters");
  });

  it("encode", function() {
    const source = "ABB";
    const encoded = "1A2B";
    chai.expect(program.runLength.encode(source)).to.deep.equal(encoded);
  });

  it("encode", function() {
    const source = "AAAABBBCCDAA";
    const encoded = "4A3B2C1D2A";
    chai.expect(program.runLength.encode(source)).to.deep.equal(encoded);
  });

  it("errors if empty string (decode)", function() {
    const source = "";
    chai.expect(() => program.runLength.encode(source)).to.throw("empty");
  });

  it("errors if string contains non-numbers on even indexes (decode)", function() {
    const source = "1ABB";
    chai.expect(() => program.runLength.decode(source)).to.throw("numbers");
  });

  it("errors if string contains non-letters on odd indexes (decode)", function() {
    const source = "1A2*";
    chai.expect(() => program.runLength.decode(source)).to.throw("letters");
  });

  it("basic decode", function() {
    const source = "1A2B";
    const decoded = "ABB";
    chai.expect(program.runLength.decode(source)).to.deep.equal(decoded);
  });

  it("decode", function() {
    const source = "4A3B2C1D2A";
    const decoded = "AAAABBBCCDAA";
    chai.expect(program.runLength.decode(source)).to.deep.equal(decoded);
  });
});
