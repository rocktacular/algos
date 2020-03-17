/**
 * Create a class that implements a singly linked list. Should be able to initialize, add to head, remove from head, and remove from the list
 */

class LinkedList {
  constructor(value) {
    this.head = null;
    this.length = 0;
    if (value) this.addToHead(value);
  }

  addToHead(value) {
    const newNode = {
      value,
      next: this.head
    };
    this.head = newNode;
    this.length++;
    return this;
  }

  removeFromHead() {
    if (!this.length) return undefined;

    const headValue = this.head.value;
    this.head = this.head.next;
    this.length--;
    return headValue;
  }

  removeAtIndex(num) {
    if (num >= this.length) {
      return undefined;
    }

    if (num === 0) {
      return this.removeFromHead();
    }

    let prevNode = this.head;
    let currentNode = prevNode.next;
    for (let i = 1; i < num; i++) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = currentNode.next;
    return currentNode.value;
  }

  remove(value) {
    if (!this.length) return this;

    if (this.head.value === value) {
      this.removeFromHead();
      return this;
    }

    let prevNode = this.head;
    let currentNode = prevNode.next;
    while (currentNode) {
      if (currentNode.value === value) {
        break;
      } else {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    if (currentNode === null) {
      return this;
    }

    prevNode.next = currentNode.next;
    this.length--;
    return this;
  }

  displayAsArray() {
    const arr = [];

    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return arr;
  }
}

exports.LinkedList = LinkedList;
