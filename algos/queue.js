/**
 * Create a class that implements a queue.
 * Methods should include, enqueue, dequeue, next, last, length, isEmpty.
 */

class queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    this.queue.unshift(item);
  }
  dequeue() {
    if (this.isEmpty) throw new TypeError("queue is empty");
    return this.queue.pop();
  }
  get length() {
    return this.queue.length;
  }
  get isEmpty() {
    return this.length === 0;
  }
  get next() {
    if (this.isEmpty) throw new TypeError("queue is empty");
    return this.queue[this.queue.length - 1];
  }
  get last() {
    if (this.isEmpty) throw new TypeError("queue is empty");
    return this.queue[0];
  }

  displayAsArray() {
    return this.queue;
  }
}

exports.queue = queue;
