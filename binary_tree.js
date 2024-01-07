class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    if (node === null) {
      return null;
    }
    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      node.value = this.minValue(node.right);
      node.right = this.deleteNode(node.right, node.value);
    }
    return node;
  }

  minValue(node) {
    let minv = node.value;
    while (node.left !== null) {
      minv = node.left.value;
      node = node.left;
    }
    return minv;
  }

  search(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) {
      return false;
    }
    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return true;
    }
  }

  inOrder() {
    this.inOrderTraverseNode(this.root);
  }

  inOrderTraverseNode(node) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left);
      console.log(node.value);
      this.inOrderTraverseNode(node.right);
    }
  }

  preOrder() {
    this.preOrderTraverseNode(this.root);
  }

  preOrderTraverseNode(node) {
    if (node !== null) {
      console.log(node.value);
      this.preOrderTraverseNode(node.left);
      this.preOrderTraverseNode(node.right);
    }
  }

  postOrder() {
    this.postOrderTraverseNode(this.root);
  }

  postOrderTraverseNode(node) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left);
      this.postOrderTraverseNode(node.right);
      console.log(node.value);
    }
  }

  levelOrder() {
    let queue = [];
    if (this.root !== null) {
      queue.push(this.root);
    }
    while (queue.length > 0) {
      let node = queue.shift();
      console.log(node.value);
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
}

let tree = new BinaryTree();
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(2);
tree.insert(5);
tree.insert(8);
tree.insert(12);

console.log("In-Order Traversal:");
tree.inOrder();

console.log("Pre-Order Traversal:");
tree.preOrder();

console.log("Post-Order Traversal:");
tree.postOrder();

console.log("Level-Order Traversal:");
tree.levelOrder();
