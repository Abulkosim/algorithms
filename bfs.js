function bfs(tree, target) {
    var queue = [tree];
    while (queue.length) {
        var node = queue.shift();
        if (node.value === target)
            return true;
        if (node.left)
            queue.push(node.left);
        if (node.right)
            queue.push(node.right);
    }
    return false;
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
console.log(bfs(sampleTree, 282));
