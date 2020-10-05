/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    let treeObject = {};
    treeObject.val = (val === undefined ? 0 : val);
    treeObject.left = (left === undefined ? null : left);
    treeObject.right = (right === undefined ? null : right);
    return treeObject;
}
let result = [];
function inorderTraversal(root) {
    if (!root)
        return;
    inorderTraversal(root.left);
    result.push(root.val);
    inorderTraversal(root.right);

    return result;

};
let rightsLeft = TreeNode(3, null, null);
let rightNode = TreeNode(2, rightsLeft, null);
let headNode = TreeNode(1, null, rightNode);
// [1, null, 2, 3]
console.log(inorderTraversal(headNode));