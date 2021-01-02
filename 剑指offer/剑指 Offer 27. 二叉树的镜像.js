/**
 *  请完成一个函数，输入一个二叉树，该函数输出它的镜像。

    例如输入：

         4
       /   \
      2     7
     / \   / \
    1   3 6   9
    镜像输出：

         4
       /   \
      7     2
     / \   / \
    9   6 3   1

     

    示例 1：

    输入：root = [4,2,7,1,3,6,9]
    输出：[4,7,2,9,6,3,1]
    * 
 */


/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if(!root) return null;
    mirrorTree(root.left);
    mirrorTree(root.right);
    [root.right,root.left] = [root.left,root.right];
    return root;
};