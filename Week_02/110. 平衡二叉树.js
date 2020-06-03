/***
 * 
给定一个二叉树，判断它是否是高度平衡的二叉树。
本题中，一棵高度平衡二叉树定义为：
一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

示例 1:
给定二叉树 [3,9,20,null,null,15,7]
    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:
给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/balanced-binary-tree
*
*/
var isBalanced = function(root) {
    return _isBalanced(root);
    
    function _isBalanced(node){
        if(!node) return true;
        if(Math.abs(_getHeight(node.left)-_getHeight(node.right)) > 1) return false;
        return (_isBalanced(node.left) && isBalanced(node.right));
    }
    function _getHeight(node){
        if(!node) return 0;
        return 1+Math.max(_getHeight(node.left),_getHeight(node.right));
    }
};
