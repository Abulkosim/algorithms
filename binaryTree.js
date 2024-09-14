var Node = /** @class */ (function () {
    function Node(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
    return Node;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (value) {
        var newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        this.insertNode(this.root, newNode);
    };
    BinarySearchTree.prototype.insertNode = function (node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    };
    BinarySearchTree.prototype.search = function (value) {
        return this.searchNode(this.root, value);
    };
    BinarySearchTree.prototype.searchNode = function (node, value) {
        if (node === null) {
            return false;
        }
        if (value < node.value) {
            return this.searchNode(node.left, value);
        }
        else if (value > node.value) {
            return this.searchNode(node.right, value);
        }
        else {
            return true;
        }
    };
    BinarySearchTree.prototype.inOrderTraversal = function () {
        var result = [];
        this.inOrderTraversalNode(this.root, result);
        return result;
    };
    BinarySearchTree.prototype.inOrderTraversalNode = function (node, result) {
        if (node !== null) {
            this.inOrderTraversalNode(node.left, result);
            result.push(node.value);
            this.inOrderTraversalNode(node.right, result);
        }
    };
    BinarySearchTree.prototype.remove = function (value) {
        this.root = this.removeNode(this.root, value);
    };
    BinarySearchTree.prototype.removeNode = function (node, value) {
        if (node === null) {
            return null;
        }
        if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        }
        else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        }
        else {
            // Node to delete found
            if (node.left === null && node.right === null) {
                return null; // Case 1: No child
            }
            else if (node.left === null) {
                return node.right; // Case 2: One child (right)
            }
            else if (node.right === null) {
                return node.left; // Case 2: One child (left)
            }
            else {
                // Case 3: Two children
                var minNode = this.findMinNode(node.right);
                node.value = minNode.value;
                node.right = this.removeNode(node.right, minNode.value);
                return node;
            }
        }
    };
    BinarySearchTree.prototype.findMinNode = function (node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    };
    return BinarySearchTree;
}());
// Example usage:
var bst = new BinarySearchTree();
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
