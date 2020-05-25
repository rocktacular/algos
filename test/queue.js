const chai = require("chai");
const program = require("../algos/queue");

describe("Queue Class", function () {
  it("add a value", function () {
    const q = new program.queue();
    q.enqueue(11);
    q.enqueue(22);
    chai.expect(q.displayAsArray()).to.deep.equal([22, 11]);
  });

  it("dequeue gives first value added", function () {
    const q = new program.queue();
    q.enqueue(11);
    q.enqueue(22);
    q.enqueue(33);
    const removed = q.dequeue();
    chai.expect(removed).to.deep.equal(11);
  });

  it("dequeue reduces length", function () {
    const q = new program.queue();
    q.enqueue(11);
    q.enqueue(22);
    q.enqueue(33);
    q.dequeue();
    chai.expect(q.length).to.deep.equal(2);
  });

  it("dequeue errors if empty", function () {
    const q = new program.queue();
    chai.expect(() => q.dequeue().to.throw("empty"));
  });

  it("can peek at next item", function () {
    const q = new program.queue();
    q.enqueue(11);
    q.enqueue(22);
    q.enqueue(33);
    q.dequeue();
    chai.expect(q.next).to.deep.equal(22);
  });

  it("next item errors if empty", function () {
    const q = new program.queue();
    chai.expect(() => q.next.to.throw("empty"));
  });

  it("can peek at last item", function () {
    const q = new program.queue();
    q.enqueue(11);
    q.enqueue(22);
    q.enqueue(33);
    chai.expect(q.last).to.deep.equal(33);
  });

  it("last item errors if empty", function () {
    const q = new program.queue();
    chai.expect(() => q.last.to.throw("empty"));
  });

  it("can get length", function () {
    const q = new program.queue();
    q.enqueue(11);
    q.enqueue(22);
    q.enqueue(33);
    chai.expect(q.length).to.deep.equal(3);
  });

  it("can tell if empty true", function () {
    const q = new program.queue();
    q.enqueue(11);
    q.enqueue(22);
    q.enqueue(33);
    q.dequeue();
    q.dequeue();
    q.dequeue();
    chai.expect(q.isEmpty).to.deep.equal(true);
  });

  it("can tell if empty false", function () {
    const q = new program.queue();
    q.enqueue(11);
    q.enqueue(22);
    q.enqueue(33);
    q.dequeue();
    q.dequeue();
    chai.expect(q.isEmpty).to.deep.equal(false);
  });
});
