/**
 *  给定一个二叉树，判断其是否是一个有效的二叉搜索树。

    假设一个二叉搜索树具有如下特征：

    节点的左子树只包含小于当前节点的数。
    节点的右子树只包含大于当前节点的数。
    所有左子树和右子树自身必须也是二叉搜索树。
    示例 1:

    输入:
        2
    / \
    1   3
    输出: true
    示例 2:

    输入:
        5
    / \
    1   4
         / \
        3   6
    输出: false
    解释: 输入为: [5,1,4,null,null,3,6]。
         根节点的值为 5 ，但是其右子节点值为 4 。
 * 
 * 
 */
var isValidBST = function(root) {
    function _isValidBST(node,min,max){
        if(!node) return true;
        if(node.val <= min || node.val >= max)
            return false;
        return _isValidBST(node.left,min,node.val) && _isValidBST(node.right,node.val,max);
    }
    return _isValidBST(root,-Infinity,Infinity)
};

var isValidBST = function(root) {
    function _isValidBST(node,min,max){
        if(!node) return true;
        if((min != null &&node.val <= min) || (max != null && node.val >= max))
            return false;
        return _isValidBST(node.left,min,node.val) && _isValidBST(node.right,node.val,max);
    }
    return _isValidBST(root,null,null)
};

// 中序遍历的特性
var isValidBST = function(root) {
    let prev = null;
    function _inorder(node){
        if(!node) return true;
        if(!_inorder(node.left)){
            return false;   // 左边是否是二叉搜索树
        }
        if(prev != null && node.val <= prev)  
            return false;  // 当前节点大于前一个的节点  
        prev = node.val;
        return _inorder(node.right);
    }
    return _inorder(root);
};