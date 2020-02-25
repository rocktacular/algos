const chai = require("chai");
const program = require("../algos/romanNumerals");

describe("Roman Numerals", function() {
  it("errors if number smaller than 1 or greater than 3999", function() {
    chai.expect(() => program.romanNumerals(-5)).to.throw("between");
  });
  it("errors if number not an integer", function() {
    chai.expect(() => program.romanNumerals(6.78)).to.throw("integer");
  });

  it("1", function() {
    chai.expect(program.romanNumerals(1)).to.deep.equal("I");
  });
  it("3", function() {
    chai.expect(program.romanNumerals(3)).to.deep.equal("III");
  });
  it("4*", function() {
    chai.expect(program.romanNumerals(4)).to.deep.equal("IV");
  });
  it("8", function() {
    chai.expect(program.romanNumerals(8)).to.deep.equal("VIII");
  });
  it("9*", function() {
    chai.expect(program.romanNumerals(9)).to.deep.equal("IX");
  });
  it("33", function() {
    chai.expect(program.romanNumerals(33)).to.deep.equal("XXXIII");
  });
  it("34", function() {
    chai.expect(program.romanNumerals(34)).to.deep.equal("XXXIV");
  });
  it("40*", function() {
    chai.expect(program.romanNumerals(40)).to.deep.equal("XL");
  });
  it("49", function() {
    chai.expect(program.romanNumerals(49)).to.deep.equal("XLIX");
  });
  it("90*", function() {
    chai.expect(program.romanNumerals(90)).to.deep.equal("XC");
  });
  it("99", function() {
    chai.expect(program.romanNumerals(99)).to.deep.equal("XCIX");
  });
  it("106", function() {
    chai.expect(program.romanNumerals(106)).to.deep.equal("CVI");
  });
  it("141", function() {
    chai.expect(program.romanNumerals(141)).to.deep.equal("CXLI");
  });
  it("400*", function() {
    chai.expect(program.romanNumerals(400)).to.deep.equal("CD");
  });
  it("499", function() {
    chai.expect(program.romanNumerals(499)).to.deep.equal("CDXCIX");
  });
  it("900*", function() {
    chai.expect(program.romanNumerals(900)).to.deep.equal("CM");
  });
  it("909", function() {
    chai.expect(program.romanNumerals(909)).to.deep.equal("CMIX");
  });
  it("1994", function() {
    chai.expect(program.romanNumerals(1994)).to.deep.equal("MCMXCIV");
  });
  it("3999", function() {
    chai.expect(program.romanNumerals(3999)).to.deep.equal("MMMCMXCIX");
  });
});
