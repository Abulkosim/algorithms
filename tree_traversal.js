function walkTree(tree, result) {
    if (tree == null) {
        return;
    }
    result.push(tree.value);
    walkTree(tree.left, result);
    walkTree(tree.right, result);
}
var sampleTree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            left: null,
            right: null
        },
        right: {
            value: 5,
            left: null,
            right: null
        }
    },
    right: {
        value: 3,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 7,
            left: null,
            right: null
        }
    }
};
function checkFunction() {
    var result = [];
    walkTree(sampleTree, result);
    console.log(result);
}
checkFunction();
