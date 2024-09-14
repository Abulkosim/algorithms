class Node<T> {
  value: T;
  left: Node<T> | null = null;
  right: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BinarySearchTree<T> {
  private root: Node<T> | null = null;

  insert(value: T): void {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    this.insertNode(this.root, newNode);
  }

  private insertNode(node: Node<T>, newNode: Node<T>): void {
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

  search(value: T): boolean {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: Node<T> | null, value: T): boolean {
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

  inOrderTraversal(): T[] {
    const result: T[] = [];
    this.inOrderTraversalNode(this.root, result);
    return result;
  }

  private inOrderTraversalNode(node: Node<T> | null, result: T[]): void {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, result);
      result.push(node.value);
      this.inOrderTraversalNode(node.right, result);
    }
  }

  remove(value: T): void {
    this.root = this.removeNode(this.root, value);
  }

  private removeNode(node: Node<T> | null, value: T): Node<T> | null {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      // Node to delete found
      if (node.left === null && node.right === null) {
        return null; // Case 1: No child
      } else if (node.left === null) {
        return node.right; // Case 2: One child (right)
      } else if (node.right === null) {
        return node.left; // Case 2: One child (left)
      } else {
        // Case 3: Two children
        const minNode = this.findMinNode(node.right);
        node.value = minNode.value;
        node.right = this.removeNode(node.right, minNode.value);
        return node;
      }
    }
  }

  private findMinNode(node: Node<T>): Node<T> {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
}

// Example usage:
const bst = new BinarySearchTree<number>();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(9);

console.log(bst.search(3)); // Output: true
console.log(bst.search(6)); // Output: false

console.log(bst.inOrderTraversal()); // Output: [1, 3, 5, 7, 9]

bst.remove(3);
console.log(bst.inOrderTraversal()); // Output: [1, 5, 7, 9]