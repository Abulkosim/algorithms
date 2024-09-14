function tTraversal(tree, order) {
    if (tree === null || tree === undefined)
        return;
    if (order === 'pre') {
        console.log(tree.value);
        tTraversal(tree.left, order);
        tTraversal(tree.right, order);
    }
    if (order === 'in') {
        tTraversal(tree.left, order);
        console.log(tree.value);
        tTraversal(tree.right, order);
    }
    if (order === 'post') {
        tTraversal(tree.left, order);
        tTraversal(tree.right, order);
        console.log(tree.value);
    }
}
