/**
 * 
 *  计算给定二叉树的所有左叶子之和。

    示例：

        3
    / \
    9  20
        /  \
    15   7

    在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

 * 
 * 
 */

var sumOfLeftLeaves = function(root) {
    function _dfs(node,isLeft){
        if(!node) return 0;
        if(!node.left && !node.right){
            if(isLeft) return node.val;
            return 0;
        }
        return _dfs(node.left,true) + _dfs(node.right,false);
    }
    return _dfs(root,false);
};