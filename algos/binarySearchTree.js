/**
 * Write a binary search tree class with a constructor, insert, and count.
 */

class BinarySearchTree {
  constructor(val) {
    this.root = val ? BinarySearchTree.createNode(val) : undefined;
  }

  static createNode(val) {
    return { value: val, left: undefined, right: undefined };
  }

  insert(val) {
    if (!this.root) {
      this.root = BinarySearchTree.createNode(val);
      return;
    }
    function recurse(currentNode) {
      if (val === currentNode.value) {
        return;
      } else if (val < currentNode.value && currentNode.left === undefined) {
        currentNode.left = BinarySearchTree.createNode(val);
      } else if (val > currentNode.value && currentNode.right === undefined) {
        currentNode.right = BinarySearchTree.createNode(val);
      } else if (val < currentNode.value && currentNode.left) {
        recurse(currentNode.left);
      } else if (val > currentNode.value && currentNode.right) {
        recurse(currentNode.right);
      }
    }
    recurse(this.root);
  }

  get count() {
    if (!this.root) return 0;
    const stack = [this.root];
    let count = 0;
    while (stack.length) {
      const currentNode = stack.pop();
      count++;
      if (currentNode.right) {
        stack.push(currentNode.right);
      }
      if (currentNode.left) {
        stack.push(currentNode.left);
      }
    }
    return count;
  }
}

exports.BinarySearchTree = BinarySearchTree;
