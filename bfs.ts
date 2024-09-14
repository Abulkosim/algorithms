type TreeNode<T> = {
    value: T;
    left: TreeNode<T>;
    right: TreeNode<T>;
}

function bfs(tree: TreeNode<number> | null, target: number): boolean {
    
    if (tree === null) return false;
    
    const queue: TreeNode<number>[] = [tree];

    while (queue.length) {
        const node = queue.shift();

        if (node === undefined) continue;
        if (node.value === target) return true;
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }

    return false
}

const treeSample = {
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
}

console.log(bfs(treeSample, 282))
