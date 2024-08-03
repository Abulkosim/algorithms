function dfs(tree, target) {
    if (!tree)
        return false;
    if (tree.value === target)
        return true;
    return dfs(tree.left, target) || dfs(tree.right, target);
}
var sampleTree = {
    value: 12,
    left: {
        value: 282,
        left: {
            value: 4,
            left: null,
            right: null
        },
        right: {
            value: 10,
            left: null,
            right: null
        }
    },
    right: {
        value: 24,
        left: {
            value: 18,
            left: null,
            right: {
                value: 22,
                left: null,
                right: null
            }
        },
        right: {
            value: 30,
            left: null,
            right: null
        }
    }
};
console.log(dfs(sampleTree, 282));
