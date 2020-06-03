/***
 * 
 *  翻转一棵二叉树。

    示例：

    输入：

        4
      /   \
     2     7
    / \   / \
   1   3 6   9
    输出：

      4
    /   \
   7     2
  / \   / \
 9   6 3   1

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/invert-binary-tree
 * 
 * 
 */
var invertTree = function(root) {
    function _invertTree(node){
        if(!node) return null;
        let left = _invertTree(node.left);
        let right = _invertTree(node.right);
        node.left = right;
        node.right = left;
        return node;
    }
    return _invertTree(root);
};