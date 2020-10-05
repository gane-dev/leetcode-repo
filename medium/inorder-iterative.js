
function TreeNode(val, left, right) {
    let treeObject = {};
    treeObject.val = (val === undefined ? 0 : val);
    treeObject.left = (left === undefined ? null : left);
    treeObject.right = (right === undefined ? null : right);
    return treeObject;
}
let result = [];
function inorderTraversal(root, k) {
    while (true) {

        while (root) {
            result.push(root);
            root = root.left;
        }
        root = result.pop();
        k--;
        if (k == 0) return root.val;
        root = root.right;
    }


};
let rightsLeft = TreeNode(3, null, null);
let rightNode = TreeNode(2, rightsLeft, null);
let headNode = TreeNode(1, null, rightNode);
// [1, null, 2, 3]
console.log(inorderTraversal(headNode, 2));