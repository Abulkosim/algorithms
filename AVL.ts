class AVLNode<T> {
  height: number = 1;
  left: AVLNode<T> | null = null;
  right: AVLNode<T> | null = null;

  constructor(public value: T) { }
}

class AVLTree<T> {
  root: AVLNode<T> | null = null;

  private getHeight(node: AVLNode<T> | null): number {
    return node ? node.height : 0;
  }

  private getBalance(node: AVLNode<T>): number {
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  private updateHeight(node: AVLNode<T>): void {
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  private rotateRight(y: AVLNode<T>): AVLNode<T> {
    const x = y.left!;
    const T2 = x.right;
    x.right = y;
    y.left = T2;
    this.updateHeight(y);
    this.updateHeight(x);
    return x;
  }

  private rotateLeft(x: AVLNode<T>): AVLNode<T> {
    const y = x.right!;
    const T2 = y.left;
    y.left = x;
    x.right = T2;
    this.updateHeight(x);
    this.updateHeight(y);
    return y;
  }

  insert(value: T): void {
    this.root = this.insertNode(this.root, value);
  }

  private insertNode(node: AVLNode<T> | null, value: T): AVLNode<T> {
    if (!node) return new AVLNode(value);

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      return node; // Duplicate values are not allowed
    }

    this.updateHeight(node);
    const balance = this.getBalance(node);

    // Left Heavy
    if (balance > 1) {
      if (value < node.left!.value) {
        return this.rotateRight(node);
      } else {
        node.left = this.rotateLeft(node.left!);
        return this.rotateRight(node);
      }
    }

    // Right Heavy
    if (balance < -1) {
      if (value > node.right!.value) {
        return this.rotateLeft(node);
      } else {
        node.right = this.rotateRight(node.right!);
        return this.rotateLeft(node);
      }
    }

    return node;
  }

  inOrderTraversal(): T[] {
    const result: T[] = [];
    this.inOrder(this.root, result);
    return result;
  }

  private inOrder(node: AVLNode<T> | null, result: T[]): void {
    if (node) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
  }
}

const avl = new AVLTree<number>();
[3, 2, 1, 4, 5, 6, 7].forEach(val => avl.insert(val));
console.log(avl.inOrderTraversal()); // [1, 2, 3, 4, 5, 6, 7]

class AVLSort<T> {
  private tree: AVLTree<T>;

  constructor() {
    this.tree = new AVLTree<T>();
  }

  sort(arr: T[]): T[] {
    // Insert all elements into the AVL tree
    arr.forEach(element => this.tree.insert(element));

    // Perform in-order traversal to get sorted elements
    return this.tree.inOrderTraversal();
  }
}

// Usage example
const avlSort = new AVLSort<number>();
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = avlSort.sort(unsortedArray);
console.log(sortedArray); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]