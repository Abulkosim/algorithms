var AVLNode = /** @class */ (function () {
    function AVLNode(value) {
        this.value = value;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
    return AVLNode;
}());
var AVLTree = /** @class */ (function () {
    function AVLTree() {
        this.root = null;
    }
    AVLTree.prototype.getHeight = function (node) {
        return node ? node.height : 0;
    };
    AVLTree.prototype.getBalance = function (node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    };
    AVLTree.prototype.updateHeight = function (node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    };
    AVLTree.prototype.rotateRight = function (y) {
        var x = y.left;
        var T2 = x.right;
        x.right = y;
        y.left = T2;
        this.updateHeight(y);
        this.updateHeight(x);
        return x;
    };
    AVLTree.prototype.rotateLeft = function (x) {
        var y = x.right;
        var T2 = y.left;
        y.left = x;
        x.right = T2;
        this.updateHeight(x);
        this.updateHeight(y);
        return y;
    };
    AVLTree.prototype.insert = function (value) {
        this.root = this.insertNode(this.root, value);
    };
    AVLTree.prototype.insertNode = function (node, value) {
        if (!node)
            return new AVLNode(value);
        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        }
        else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        }
        else {
            return node; // Duplicate values are not allowed
        }
        this.updateHeight(node);
        var balance = this.getBalance(node);
        // Left Heavy
        if (balance > 1) {
            if (value < node.left.value) {
                return this.rotateRight(node);
            }
            else {
                node.left = this.rotateLeft(node.left);
                return this.rotateRight(node);
            }
        }
        // Right Heavy
        if (balance < -1) {
            if (value > node.right.value) {
                return this.rotateLeft(node);
            }
            else {
                node.right = this.rotateRight(node.right);
                return this.rotateLeft(node);
            }
        }
        return node;
    };
    AVLTree.prototype.inOrderTraversal = function () {
        var result = [];
        this.inOrder(this.root, result);
        return result;
    };
    AVLTree.prototype.inOrder = function (node, result) {
        if (node) {
            this.inOrder(node.left, result);
            result.push(node.value);
            this.inOrder(node.right, result);
        }
    };
    return AVLTree;
}());
var avl = new AVLTree();
[3, 2, 1, 4, 5, 6, 7].forEach(function (val) { return avl.insert(val); });
console.log(avl.inOrderTraversal()); // [1, 2, 3, 4, 5, 6, 7]
var AVLSort = /** @class */ (function () {
    function AVLSort() {
        this.tree = new AVLTree();
    }
    AVLSort.prototype.sort = function (arr) {
        var _this = this;
        // Insert all elements into the AVL tree
        arr.forEach(function (element) { return _this.tree.insert(element); });
        // Perform in-order traversal to get sorted elements
        return this.tree.inOrderTraversal();
    };
    return AVLSort;
}());
// Usage example
var avlSort = new AVLSort();
var unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
var sortedArray = avlSort.sort(unsortedArray);
console.log(sortedArray); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
