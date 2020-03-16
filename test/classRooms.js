const chai = require("chai");
const program = require("../algos/classRooms");

describe("Classrooms", function() {
  it("errors if arg is not an array", function() {
    chai.expect(() => program.classRooms("abc")).to.throw();
  });

  it("2 classes (1 room)", function() {
    chai
      .expect(
        program.classRooms([
          [10, 30],
          [40, 60]
        ])
      )
      .to.deep.equal(1);
  });

  it("2 classes (2 rooms)", function() {
    chai
      .expect(
        program.classRooms([
          [10, 30],
          [20, 40]
        ])
      )
      .to.deep.equal(2);
  });

  it("4 classes (3 rooms)", function() {
    chai
      .expect(
        program.classRooms([
          [10, 30],
          [20, 40],
          [10, 50],
          [60, 80]
        ])
      )
      .to.deep.equal(3);
  });

  it("4 classes (2 rooms)", function() {
    chai
      .expect(
        program.classRooms([
          [10, 50],
          [30, 70],
          [60, 100],
          [80, 120]
        ])
      )
      .to.deep.equal(2);
  });

  it("6 classes (2 rooms)", function() {
    chai
      .expect(
        program.classRooms([
          [10, 50],
          [30, 70],
          [60, 100],
          [80, 120],
          [110, 150],
          [130, 170]
        ])
      )
      .to.deep.equal(2);
  });

  it("6 classes - rearrange input order (2 rooms)", function() {
    chai
      .expect(
        program.classRooms([
          [110, 150],
          [30, 70],
          [10, 50],
          [80, 120],
          [60, 100],
          [130, 170]
        ])
      )
      .to.deep.equal(2);
  });

  it("6 classes (6 rooms)", function() {
    chai
      .expect(
        program.classRooms([
          [20, 80],
          [30, 90],
          [40, 100],
          [10, 70],
          [50, 110],
          [60, 120]
        ])
      )
      .to.deep.equal(6);
  });
});
