class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function invertTree(root: TreeNode | null) {
    if (!root) {
        return null
    }

    const left = invertTree(root.left)
    const right = invertTree(root.right)

    root.left = right;
    root.right = left;

    return root
}

const root = [4,2,7,1,3,6,9]

invertTree(root)